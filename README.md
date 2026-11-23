# cycosta.github.io

Codebase: React + TypeScript + Vite

## Available scripts

**Run in development mode**

```zsh
  npm run dev
```

**Run build**

```zsh
  npm run build
```

**Run Lint**

```zsh
  npm run lint
```

**Format files using Prettier**

```zsh
  npm run prettier
```

**Run unit tests**

```zsh
  npm run test
```

**Optimize images and videos**

Run after adding or replacing anything in `public/images` (requires `ffmpeg`).
It downsizes oversized JPEGs and MP4s, and generates the AVIF/WebP variants,
video posters, social preview image (`public/images/og-image.jpg`, cropped from
the portrait) and favicons/app icons (from `src/assets/images/logo.svg`).

```zsh
  npm run optimize:media
```
