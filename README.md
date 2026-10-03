# Most Wanted — production static website

A true multi-page React/Vite site for Most Wanted. Each primary page is a separate HTML entry point, while shared UI is rendered from the same React component system.

## Pages
- `/` — Home
- `/services/` — Services
- `/results/` — Results / Case Studies
- `/about/` — About
- `/faq/` — FAQ
- `/contact/` — Contact

## Run locally
```bash
npm ci
npm run lint
npm run build
npm run dev
```

## Render Static Site
`render.yaml` is configured for a static site and builds with `npm ci && npm run lint && npm run build`. Publish directory is `dist`.

## Brand asset
`public/most-wanted-logo.png` and `public/favicon.png` are the supplied official Most Wanted logo image. The favicon is used on every HTML entry point.

## Deployment metadata
Canonical URLs and the sitemap currently use `https://getmostwanted.com/`. If the final production domain differs, update the canonical/OG URLs in the six HTML entry points plus `public/robots.txt` and `public/sitemap.xml` before launch.
