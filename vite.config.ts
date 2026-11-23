import { defineConfig, type Plugin } from 'vite';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

/**
 * Content Security Policy for the production build. GitHub Pages can't send
 * response headers, so it's delivered as a <meta> tag. (`frame-ancestors`,
 * `report-uri` and `sandbox` are ignored in meta tags, so they're omitted.)
 *
 * Only applied to builds: the dev server injects an inline script for React
 * Fast Refresh, which `script-src 'self'` would block.
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  // Google Analytics (gtag.js) is loaded from googletagmanager.com.
  "script-src 'self' https://www.googletagmanager.com",
  // styled-components injects <style> tags at runtime.
  "style-src 'self' 'unsafe-inline'",
  // data: covers the inline SVG arrows used in CSS.
  "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "font-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = (): Plugin => ({
  name: 'security-meta-tags',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: {
        'http-equiv': 'Content-Security-Policy',
        content: CONTENT_SECURITY_POLICY,
      },
      injectTo: 'head-prepend',
    },
    {
      tag: 'meta',
      attrs: { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      injectTo: 'head-prepend',
    },
  ],
});

export default defineConfig({
  base: '/',
  plugins: [react(), svgr({ include: '**/*.svg' }), securityHeaders()],
});
