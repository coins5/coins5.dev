---
title: "Resume Playback and Progress UI"
pubDate: 2025-09-10
description: "Persist and restore playback position, and reflect it in the catalog UI."
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/08-resume-playback-and-progress.png"
  alt: "Resume Playback and Progress UI"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/09-autoplay-fullscreen-shortcuts"
serie: "netflix-clone-es"
seriesPartNumber: 8
---

Objetivo: guardar/restaurar la posición de reproducción y mostrar el avance en las tarjetas.

### Archivos 🗂️

- `src/hooks/useResume.ts`: guarda `{ t, d, u }` en `localStorage` como `vp:pos:<key>`.
- `src/components/VideoPlayer.tsx`: invoca `useResume(videoEl, storageKey, true)`.
- `src/components/MovieCard.tsx`: lee el avance y dibuja una barra.

### Comportamiento ⚙️

- Guarda aprox. cada 2s mientras reproduce; omite videos cortos (< 20s).
- Limpia al inicio/fin o al terminar.
- Al cargar, hace seek a la última posición válida.

### ¿Por qué localStorage? 💾

- Simple, offline y sin backend para el demo. Luego puedes sincronizar por usuario en tu servidor.
