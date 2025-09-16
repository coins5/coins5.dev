---
title: "Assets and Licensing"
pubDate: 2025-09-15
description: "Handle videos, posters and subtitles responsibly in an open‑source project"
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/11-assets-and-licensing.png"
  alt: "Continue Watching Row"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/12-deploy-and-scaling"
serie: "netflix-clone-en"
seriesPartNumber: 11
---

Goal: Handle videos, posters and subtitles responsibly in an open‑source project.

### Recommendations 📌

- Keep small samples in `public/`; host big media on a CDN/bucket.
- Track the license and source URL of every asset.
- Prefer MP4 (H.264 + AAC) for compatibility; optionally add WebM.
- Subtitles: prefer `.vtt`; support `.srt` with client conversion when needed.

### Why this matters ⚖️

- Respecting licenses keeps your project shareable and avoids takedowns. Explicit credits help contributors and users.
- Hosting large media outside the repo keeps clones fast and avoids bloating the Git history.

### Image optimization 🖼️

- When you switch to `next/image`, configure external hosts via `next.config.ts` `images.remotePatterns` and provide width/height for layout stability.

### Subtitles and CORS 🌐

- For remote subtitle files, ensure the origin allows cross‑origin text fetches; otherwise, client‑side conversion or even playback can fail silently.

### Suggested repo structure 🗂️

- `public/videos/` — local samples only
- `public/posters/` — images
- `public/subs/` — `.vtt` or `.srt`
- `CREDITS.md` — list all asset sources and licenses
- `LICENSES/` — individual license files per asset if needed

### Sample CREDITS.md format 📄

```md
# Assets credits

## Videos

- Tears of Steel (CC BY 3.0) — Blender Foundation — https://tearsofsteel.org — Source: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4
- Big Buck Bunny (CC BY 3.0) — Blender Foundation — https://www.bigbuckbunny.org/

## Posters

- tears-of-steel.jpg — created from the official poster, resized for demo.

## Subtitles

- TOS-en.srt — Blender — https://download.blender.org/demo/movies/ToS/subtitles/TOS-en.srt
```

### Notes 📝

- If required by the asset license, include exact text in `LICENSES/<asset>.md`.
- Avoid distributing large copyrighted content directly in the repo.

### Verify it works ✅

1. Move one poster to an external host and update the URL; if using `next/image`, add the host pattern.
2. Place a small sample MP4 under `public/videos/` and confirm it plays locally and via a remote URL counterpart.
