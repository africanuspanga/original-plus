# Original Plus — Premium Skincare

The official e-commerce website for **Original Plus**, a premium skincare brand based in Kariakoo, Dar es Salaam, Tanzania.

**Live:** [www.originalplus.co.tz](https://www.originalplus.co.tz)

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Fully static export — no server required

## Features

- Premium gold / black / white brand experience
- Product pages with benefits, how-to-use and WhatsApp ordering
- Fully client-side cart (localStorage) with checkout that sends orders to WhatsApp
- SEO: metadata, Open Graph, sitemap.xml, robots.txt, JSON-LD (Organization + Product)
- Mobile-first, accessible, fast

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
```

`next build` exports plain static HTML/CSS/JS into the **`out/`** folder (via `output: "export"` in `next.config.ts`). Upload the contents of `out/` to any static host (cPanel, Netlify, Vercel, GitHub Pages, S3…) to serve the site.

## Contact

- Phone / WhatsApp: 0756 533 452
- Alt phone: 0743 908 538
- Kariakoo, Mafia & Jangwani Street, Dar es Salaam, Tanzania
