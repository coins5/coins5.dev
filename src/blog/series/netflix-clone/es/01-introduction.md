---
title: "Intro Netflix‑style Clone with Next.js"
pubDate: 2025-09-04
description: "Welcome! In this hands‑on course you’ll build a polished Netflix‑style application using Next.js (App Router), Tailwind, and the native HTML5 <video> element. We’ll focus on practical implementation while keeping the architecture simple and scalable."
author: "coins5"
image:
  url: "/src/assets/images/series/loguru/getting_started_wit_loguru.png"
  alt: "Intro Netflix‑style Clone with Next.js"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/02-project-setup"
serie: "netflix-clone-es"
seriesPartNumber: 1
---

¡Bienvenido/a! En este curso práctico construiremos una app tipo Netflix con Next.js (App Router), Tailwind y el elemento HTML5 `<video>`.

### Qué construiremos ✨

- Home con hero, filas por categoría y una fila de “Seguir viendo”.
- Reproductor con múltiples fuentes, póster, subtítulos (SRT y VTT), reanudación, autoplay, fullscreen y atajos de teclado.
- Catálogo pequeño definido en JSON más utilidades para consultarlo.
- Estructura de assets y créditos adecuada para open source.

### Objetivos de aprendizaje 🎯

- Composición con App Router: layouts, páginas, client components y hooks.
- Modelado de datos para un catálogo y su uso en la UI.
- Fundamentos de reproducción de video en el navegador: codecs, `<source>`, `<track>`, preload, playsInline.
- Manejo de subtítulos y conversión SRT → VTT en el navegador.
- Persistencia local de avance con `localStorage`.
- UX: hero, filas con flechas, estados hover, barra de progreso y fullscreen.

### Requisitos 🧰

- Node.js 18+ y npm/pnpm.
- Conocimientos básicos de React/Next.js y TypeScript.
- Medios de ejemplo: MP4 locales en `public/videos/` o URLs externas y subtítulos `.srt/.vtt`.

### Índice 🗺️

1. Introducción y objetivos (esta parte)
2. Configuración del proyecto + Tailwind
3. Modelo de datos y catálogo
4. Componentes base de UI (Card, Row)
5. Home y Hero
6. Reproductor base
7. Subtítulos: SRT → VTT en el navegador
8. Reanudación y UI de progreso
9. Autoplay, fullscreen y atajos
10. Fila “Seguir viendo”
11. Activos y licencias
12. Despliegue, CDN y escalado

### Convenciones 🧭

- App Router bajo `src/app/`.
- Assets en `public/` (`videos/`, `posters/`, `subs/`).
- Evita subir medios pesados al repo (usa LFS/CDN).
