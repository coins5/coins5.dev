---
title: "Project Setup and Tailwind"
pubDate: 2025-09-04
description: "Create a Next.js App Router project and enable Tailwind with a dark, media‑friendly baseline."
author: "coins5"
image:
  url: "/src/assets/images/series/loguru/getting_started_wit_loguru.png"
  alt: "Project Setup and Tailwind"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/03-data-model-and-catalog"
serie: "netflix-clone-en"
seriesPartNumber: 2
---

Goal: Create a Next.js App Router project and enable Tailwind with a dark, media‑friendly baseline.

### Quick steps ⚡

- Create the app:
  ```bash
  npx create-next-app@latest next-netflix-clone \
    --typescript --eslint --src-dir --app --import-alias @/*
  cd next-netflix-clone
  ```
- Tailwind (Next 15): import `@import "tailwindcss";` in `globals.css`.
- Baseline structure:
  - `src/app/layout.tsx` imports `./globals.css`.
  - `src/app/page.tsx` is the Home.
  - `public/` has `videos/`, `posters/`, `subs/`.

### Why these choices 💡

- App Router: Coherent layouts, metadata, and file‑based routing that mirrors the UI tree. It’s ideal for small features scaling into larger apps.
- Tailwind v4 import: `@import "tailwindcss";` pulls in the modern reset and utilities with zero config. Keeps CSS tiny and consistent.
- Dark baseline: Video thumbnails and hero images pop on dark backgrounds. `color-scheme: dark` also hints native form controls/scrollbars to use dark variants.
- Public assets: Putting media in `public/` lets the browser request `/videos/...` directly without bundling large files into JS.
- Import alias `@/*`: Avoids brittle `../../..` paths as the project grows; matches typical Next repo conventions.
- TS `moduleResolution: "bundler"`: TypeScript resolves ESM the same way the Next bundler does (fewer path/extension gotchas and better DX in editors).
- TS `resolveJsonModule`: Lets us `import movies from "@/data/movies.json"` to drive the UI without extra build steps.

### Minimal `globals.css` 🎨

```css
@import "tailwindcss";

/* Dark cinematic baseline */
:root {
  color-scheme: dark;
}
body {
  background: #000;
  color: #fff;
}

/* Optional: thin scrollbars for rows */
* {
  scrollbar-width: thin;
  scrollbar-color: #444 transparent;
}
*::-webkit-scrollbar {
  height: 8px;
}
*::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 999px;
}
```

### Layout wiring 🧩

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix Clone Demo",
  description: "Catalog with local and external videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

### What each piece does 🧭

- `src/app/layout.tsx`: App‑wide HTML shell and metadata. Importing `./globals.css` here ensures styles apply to all routes.
- `src/app/page.tsx`: The `/` route (Home). Anything exported here renders inside the `<body>` from the layout above.
- `src/app/globals.css`: Tailwind core + project‑wide base styles (dark baseline, scrollbars). No per‑component scoping here on purpose.
- `public/…`: Files are served as‑is at `/…`. Example: `public/posters/sintel.jpg` becomes `/posters/sintel.jpg` in `<img src>`/`<Image src>`.
- `next.config.ts`: Defaults are fine for this course; we keep it minimal until we need image domains or headers.

### Public folders 🗂️

```bash
mkdir -p public/videos public/posters public/subs
```

### TypeScript tips 🧰

```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

### Run ▶️

- Dev: `npm run dev` (or `pnpm dev`).
- Build: `npm run build`.

### Troubleshooting 🛠️

- CSS doesn’t load → ensure `globals.css` is imported in `layout.tsx`.
- Images don’t show → confirm files are in `public/` and paths start with `/`.
- "Cannot find module '@/…'" → check `tsconfig.json` has `"paths": { "@/*": ["./src/*"] }` and your editor picked it up.
- JSON import errors → add `"resolveJsonModule": true` in `tsconfig.json`.
- Odd scrollbars → WebKit scrollbar rules only apply in Chromium/Safari; Firefox uses `scrollbar-width`/`scrollbar-color` set above.

### Verify it works ✅

1. `npm run dev` and open `http://localhost:3000/`.
2. Add an image to `public/posters/` and reference it from `src/app/page.tsx` using `/posters/<file>.jpg` to validate `public/` wiring.
3. Temporarily remove the `@import "tailwindcss";` line to see utilities disappear—good sanity check that Tailwind is active.
