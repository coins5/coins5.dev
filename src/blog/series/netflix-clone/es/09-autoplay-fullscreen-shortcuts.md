---
title: "Autoplay, Fullscreen, and Shortcuts"
pubDate: 2025-09-11
description: "Improve ergonomics with autoplay, best‑effort fullscreen, keyboard controls, and an optional “unmute” overlay."
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/09-autoplay-fullscreen-shortcuts.png"
  alt: "Autoplay, Fullscreen, and Shortcuts"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/10-continue-watching-row"
serie: "netflix-clone-es"
seriesPartNumber: 9
---

Objetivo: mejorar la ergonomía con autoplay (silenciado), fullscreen y atajos de teclado.

### Archivos 🗂️

- `src/hooks/useAutoFullscreen.ts`: intenta `requestFullscreen()` al iniciar la reproducción.
- `src/components/VideoPlayer.tsx`: pasa `autoPlay`, `autoFullscreen` y enlaza teclas.

### Atajos (ejemplos) ⌨️

- Espacio/K: play/pause
- ←/→: retroceder/avanzar 5s
- M: mute
- F: fullscreen

### Notas 📝

- Autoplay normalmente requiere `muted`. El reproductor lo activa si `autoPlay` es true.
- Algunos navegadores bloquean fullscreen sin gesto de usuario; el hook lo intenta y ignora errores.
- Puedes mostrar un overlay “Toca para activar sonido” mientras está en mute.
