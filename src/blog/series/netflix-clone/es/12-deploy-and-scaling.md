---
title: "Deploy and Scaling"
pubDate: 2025-09-14
description: "Ship your app and plan for growth."
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/12-deploy-and-scaling.png"
  alt: "Ship your app and plan for growth."
tags: ["nextjs", "typescript", "clones"]
serie: "netflix-clone-es"
seriesPartNumber: 12
---

Objetivo: publicar la app y planificar crecimiento.

### Despliegue en Vercel 🚀

1. Sube el repo a GitHub/GitLab.
2. Importa en Vercel y despliega (Next.js es zero‑config).
3. Mueve los videos grandes a un bucket/CDN.

### CDN y medios ☁️

- Opciones: S3+CloudFront, Cloudflare R2+CDN, GCS+Cloud CDN.
- Referencia los videos por HTTPS en `movies.json`.
- Configura CORS si vas a `fetch`ear `.srt` remotos.

### Streaming adaptativo 📶

- Para catálogos grandes, considera HLS/DASH.
- Empaquetado: ffmpeg, AWS MediaConvert, Mux, Cloudflare Stream.
- Player: hls.js (HLS), Shaka Player (DASH/HLS).

### Observabilidad 🔎

- Telemetría de errores de cliente (Sentry, etc.) y eventos de playback.

### Siguientes pasos ➡️

- Cuentas de usuario + progreso en servidor.
- Búsqueda, filtros y filas personalizadas.
- Optimizar pósters con `next/image` y `images.remotePatterns`.
