# zachoelsner.com

Personal site for Zach Oelsner — small tools for everyday problems, mostly food.

Built with Next.js (App Router), TypeScript, and CSS Modules. Deployed on Vercel.

## Pages

- `/` — interactive home board (hover the project chips, click the dot)
- `/projects` — index of everything shipped or in progress
- `/projects/*` — one page per project (Farm to People, Sandlot, DockMe, Qook, Siggy, Pass the Doodle)
- `/about` — the longer story

Open Graph images are generated per-page with `next/og`; the fonts they use are
vendored in `assets/og-fonts` so builds don't depend on a CDN.

## Development

```bash
npm install
npm run dev        # local dev server
npm run check      # lint + typecheck + build + Playwright e2e
```
