---
title: "Assets and Licensing"
pubDate: 2025-09-13
description: "Handle videos, posters and subtitles responsibly in an open‑source project"
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/11-assets-and-licensing.png"
  alt: "Continue Watching Row"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/12-deploy-and-scaling"
serie: "netflix-clone-es"
seriesPartNumber: 11
---

Objetivo: gestionar videos, pósters y subtítulos responsablemente en un proyecto open source.

### Recomendaciones 📌

- Muestras pequeñas en `public/`; media pesada en CDN/bucket.
- Registra licencia y URL de origen de cada asset.
- MP4 (H.264 + AAC) para compatibilidad; WebM opcional.
- Subtítulos: prefiere `.vtt`; soporta `.srt` con conversión en cliente.

### Estructura sugerida 🗂️

- `public/videos/` — muestras locales
- `public/posters/` — imágenes
- `public/subs/` — `.vtt` o `.srt`
- `CREDITS.md` — fuentes y licencias de todos los assets
- `LICENSES/` — licencias individuales si aplica

### Ejemplo de CREDITS.md 📄

```md
# Créditos de assets

## Videos

- Tears of Steel (CC BY 3.0) — Blender Foundation — https://tearsofsteel.org — Fuente: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4

## Subtítulos

- TOS-en.srt — Blender — https://download.blender.org/demo/movies/ToS/subtitles/TOS-en.srt
```
