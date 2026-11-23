/**
 * Optimizes the media in /public so the site ships appropriately sized assets.
 *
 * Usage: npm run optimize:media (installs sharp on demand; needs ffmpeg)
 *
 * - JPEGs are downscaled in place (if larger than their max width) and get
 *   AVIF + WebP variants at each responsive width (e.g. photo-480.avif).
 * - MP4s are re-encoded at a smaller resolution (if wider than the max
 *   width) and get a WebP poster from their first frame. Requires ffmpeg.
 *
 * The script is idempotent: assets already at or below their max size are
 * not re-encoded, and variants are regenerated from the current JPEG.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, renameSync, statSync, writeFileSync } from 'node:fs';
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
  // The portrait doubles as the Open Graph image, so it stays larger.
  { match: /images\/cycosta\.jpg$/, maxWidth: 1200 },
  { match: /images\/photography\/.+\.jpg$/, maxWidth: 960 },
];

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

const files = walk(PUBLIC_DIR);

console.log('Optimizing images…');
for (const file of files) {
  const rule = IMAGE_RULES.find(({ match }) => match.test(file));
  if (rule) await optimizeImage(file, rule);
}

console.log('Optimizing videos…');
for (const file of files.filter((f) => extname(f) === '.mp4')) {
  await optimizeVideo(file);
}

console.log(
  `Done. Variants written next to each source (${basename(PUBLIC_DIR)}/).`,
);
