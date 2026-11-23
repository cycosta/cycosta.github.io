# cycosta.github.io

Personal site of Cynthia Costa, published at [cycosta.dev](https://cycosta.dev).

Codebase: React + TypeScript + Vite, styled with styled-components.

## Requirements

- Node.js 24 (LTS). The version lives in `.nvmrc`, so `nvm use` picks it up.
- `ffmpeg`, only for `npm run optimize:media`.

```zsh
  nvm use
  npm ci
```

## Available scripts

**Run in development mode**

```zsh
  npm run dev
```

**Type-check and build for production** (output in `dist/`)

```zsh
  npm run build
```

**Preview the production build locally**

```zsh
  npm run preview
```

**Run lint**

```zsh
  npm run lint
```

**Check formatting with Prettier** (fix with `npx prettier --write .`)

```zsh
  npm run format
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

## Contributing

Open a pull request against `main`; the template in
`.github/pull_request_template.md` lists what to include. Every pull request
runs lint, format, tests, the production build and `npm audit` in CI, and
needs approval from a code owner (see `.github/CODEOWNERS`) before merging.
Dependabot opens weekly update pull requests for npm packages and GitHub
Actions.

## Deployment

Pushing to `main` builds the site and deploys `dist/` to GitHub Pages
(`.github/workflows/deploy.yaml`).
