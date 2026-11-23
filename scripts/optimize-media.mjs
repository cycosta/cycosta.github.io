/**
 * Optimizes the media in /public so the site ships appropriately sized assets.
 *
 * Usage: npm run optimize:media (installs sharp on demand; needs ffmpeg)
 *
 * - JPEGs are downscaled in place (if larger than their max width) and get
 *   AVIF + WebP variants at each responsive width (e.g. photo-480.avif).
 * - MP4s are re-encoded at a smaller resolution (if wider than the max
 *   width) and get a WebP poster from their first frame. Requires ffmpeg.
 * - The 1200×630 social preview image is cropped from the portrait, and
 *   favicons / app icons are rendered from src/assets/images/logo.svg.
 *
 * The script is idempotent: assets already at or below their max size are
 * not re-encoded, and variants are regenerated from the current JPEG.
 */
import { execFileSync } from 'node:child_process';
import {
  copyFileSync,
  readdirSync,
  renameSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

// sharp isn't a project dependency (it would pull native binaries into every
// install); `npm run optimize:media` installs it on demand without saving.
const { default: sharp } = await import('sharp').catch(() => {
  console.error('sharp is missing. Run: npm run optimize:media');
  process.exit(1);
});

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC_DIR = join(ROOT, 'public');

// Keep in sync with IMAGE_WIDTHS in src/components/Picture/index.tsx.
const IMAGE_WIDTHS = [480, 960];

const IMAGE_RULES = [
  // The portrait is also the source for the social preview image.
  { match: /images\/cycosta\.jpg$/, maxWidth: 1200 },
  { match: /images\/photography\/.+\.jpg$/, maxWidth: 960 },
];

const PORTRAIT = join(PUBLIC_DIR, 'images/cycosta.jpg');
const OG_IMAGE = join(PUBLIC_DIR, 'images/og-image.jpg');
// Vertical offset (in the 1200px-wide portrait) that keeps the face framed.
const OG_CROP_TOP = 120;

const LOGO = join(ROOT, 'src/assets/images/logo.svg');
const ICON_BACKGROUND = '#f6f3ee';

const VIDEO_MAX_WIDTH = 960;
const POSTER_WIDTH = 640;

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

const optimizeImage = async (file, { maxWidth }) => {
  const { width } = await sharp(file).metadata();

  if (width > maxWidth) {
    const before = statSync(file).size;
    const buffer = await sharp(file)
      .rotate()
      .resize({ width: maxWidth })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();
    writeFileSync(file, buffer);
    console.log(
      `  ${relative(ROOT, file)}: ${width}px → ${maxWidth}px, ${kb(before)} → ${kb(buffer.length)}`,
    );
  }

  const base = file.slice(0, -extname(file).length);

  for (const variantWidth of IMAGE_WIDTHS) {
    const resized = sharp(file).rotate().resize({ width: variantWidth });
    await resized
      .clone()
      .avif({ quality: 55, effort: 6 })
      .toFile(`${base}-${variantWidth}.avif`);
    await resized
      .clone()
      .webp({ quality: 75, effort: 6 })
      .toFile(`${base}-${variantWidth}.webp`);
  }
};

const ffmpeg = (args) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...args]);

const optimizeVideo = async (file) => {
  const probe = execFileSync('ffprobe', [
    '-v',
    'error',
    '-select_streams',
    'v:0',
    '-show_entries',
    'stream=width',
    '-of',
    'csv=p=0',
    file,
  ]);
  const width = Number(String(probe).trim());

  if (width > VIDEO_MAX_WIDTH) {
    const before = statSync(file).size;
    const tmp = `${file}.tmp.mp4`;
    ffmpeg([
      '-i',
      file,
      '-vf',
      `scale=${VIDEO_MAX_WIDTH}:-2`,
      '-c:v',
      'libx264',
      '-preset',
      'slow',
      '-crf',
      '28',
      '-pix_fmt',
      'yuv420p',
      '-an',
      '-movflags',
      '+faststart',
      tmp,
    ]);
    renameSync(tmp, file);
    console.log(
      `  ${relative(ROOT, file)}: ${width}px → ${VIDEO_MAX_WIDTH}px, ${kb(before)} → ${kb(statSync(file).size)}`,
    );
  }

  const frame = ffmpeg([
    '-i',
    file,
    '-frames:v',
    '1',
    '-f',
    'image2pipe',
    '-vcodec',
    'png',
    '-',
  ]);
  const poster = file.replace(/\.mp4$/, '.webp');
  await sharp(frame)
    .resize({ width: POSTER_WIDTH })
    .webp({ quality: 70 })
    .toFile(poster);
};

// Open Graph / Twitter card image: 1200×630 is the size every platform
// renders without cropping.
const generateOgImage = async () => {
  await sharp(PORTRAIT)
    .resize({ width: 1200 })
    .extract({ left: 0, top: OG_CROP_TOP, width: 1200, height: 630 })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(OG_IMAGE);
};

// The logo centred on the site background; `scale` is the share of the
// canvas it fills (≤ 0.6 keeps it inside the maskable-icon safe zone).
const renderIcon = (size, scale) => {
  const logoSize = Math.round(size * scale);

  return sharp(LOGO, { density: 1200 })
    .resize(logoSize, logoSize)
    .toBuffer()
    .then((logo) =>
      sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: ICON_BACKGROUND,
        },
      })
        .composite([{ input: logo, gravity: 'center' }])
        .png()
        .toBuffer(),
    );
};

// A .ico file is a small directory followed by embedded PNG images.
const toIco = (pngs) => {
  const header = Buffer.alloc(6 + pngs.length * 16);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);

  let offset = header.length;
  pngs.forEach(({ size, data }, index) => {
    const entry = 6 + index * 16;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });

  return Buffer.concat([header, ...pngs.map(({ data }) => data)]);
};

const generateIcons = async () => {
  copyFileSync(LOGO, join(PUBLIC_DIR, 'favicon.svg'));

  const ico = await Promise.all(
    [16, 32].map(async (size) => ({
      size,
      data: await renderIcon(size, 0.9),
    })),
  );
  writeFileSync(join(PUBLIC_DIR, 'favicon.ico'), toIco(ico));

  writeFileSync(
    join(PUBLIC_DIR, 'apple-touch-icon.png'),
    await renderIcon(180, 0.7),
  );
  for (const size of [192, 512]) {
    writeFileSync(
      join(PUBLIC_DIR, `icon-${size}.png`),
      await renderIcon(size, 0.6),
    );
  }
};

const files = walk(PUBLIC_DIR);

console.log('Optimizing images…');
for (const file of files) {
  const rule = IMAGE_RULES.find(({ match }) => match.test(file));
  if (rule) await optimizeImage(file, rule);
}

console.log('Generating social image and icons…');
await generateOgImage();
await generateIcons();

console.log('Optimizing videos…');
for (const file of files.filter((f) => extname(f) === '.mp4')) {
  await optimizeVideo(file);
}

console.log(
  `Done. Variants written next to each source (${basename(PUBLIC_DIR)}/).`,
);
