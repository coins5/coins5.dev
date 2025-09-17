---
title: "Deploy and Scaling"
pubDate: 2025-09-16
description: "Ship your app and plan for growth."
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/12-deploy-and-scaling.png"
  alt: "Ship your app and plan for growth."
tags: ["nextjs", "typescript", "clones"]
serie: "netflix-clone-en"
seriesPartNumber: 12
---

Goal: Ship your app and plan for growth.

### Deploy to Vercel 🚀

1. Push the repository to GitHub/GitLab.
2. Import into Vercel and deploy. Next.js is zero‑config on Vercel.
3. Ensure large media is not part of the repo; host it elsewhere.

### Static assets 🗂️

- Files in `public/` are served from `/`. For large media, move to CDN.

### Using a bucket + CDN ☁️

- Options: S3 + CloudFront, Cloudflare R2 + Cloudflare CDN, GCS + Cloud CDN.
- Upload videos to a bucket and reference them via HTTPS URLs in `movies.json`.
- Set appropriate CORS rules if you plan to fetch `.srt` files from that origin.

### Adaptive streaming 📶

- For large catalogs, consider HLS/DASH for bitrate switching.
- HLS packaging tools: ffmpeg, AWS MediaConvert, mux.com, Cloudflare Stream.
- Player libraries: hls.js (HLS in browsers that need MSE), Shaka Player (DASH/HLS).

### Observability 🔎

- Add client error tracking (Sentry, LogRocket) to catch playback/compat issues.
- Track video errors (`onerror` events) and surface to your telemetry.

### Next steps ➡️

- User accounts + server‑side progress (resume) per user.
- Search, filters, and personalized rows.
- Optimize posters with `next/image` and set `images.remotePatterns` in `next.config.ts` for external hosts.

### Why Vercel for this project 💜

- First‑class Next.js support, fast static asset serving, and simple previews. Zero‑config until you need custom headers.

### Headers and caching 🧾

- Serve posters and static assets with long cache lifetimes and content hashing if you host them outside `public/`.
- For HLS/DASH, set proper CORS and cache rules on manifests and segments.

### Image optimization at scale 🖼️

- Move to `next/image` for posters/thumbnails and tune device sizes; set `images.remotePatterns` when pulling from a CDN.

### Checklist before go‑live ✅

- [ ] Move large media off‑repo to a bucket/CDN.
- [ ] Add error reporting in the player (network errors, `canplay`, `error`).
- [ ] Test subtitles from your CDN origin with CORS enabled.
- [ ] Run `next build` and check for warnings; fix any type issues.
