---
title: "Intro Netflix‑style Clone with Next.js"
pubDate: 2025-09-05
description: "Welcome! In this hands‑on course you’ll build a polished Netflix‑style application using Next.js (App Router), Tailwind, and the native HTML5 <video> element. We’ll focus on practical implementation while keeping the architecture simple and scalable."
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/01-introduction.png"
  alt: "Intro Netflix‑style Clone with Next.js"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/02-project-setup"
serie: "netflix-clone-en"
seriesPartNumber: 1
---

Welcome! In this hands‑on course you’ll build a polished Netflix‑style application using Next.js (App Router), Tailwind, and the native HTML5 `<video>` element. We’ll focus on practical implementation while keeping the architecture simple and scalable.

### What you’ll build ✨

- A home page with a hero banner, rows by category, and a “Continue Watching” row.
- A video player with multiple sources, poster, subtitles (SRT and VTT), resume playback, autoplay, fullscreen, and keyboard shortcuts.
- A small catalog defined in JSON, plus helpers to query it.
- A sensible structure for assets and credits suitable for open source.

### Learning objectives 🎯

- App Router composition: layouts, pages, client components, and hooks.
- Data modeling for a simple catalog and cross‑referencing in the UI.
- Video playback basics in browsers: codecs, `<source>`, `<track>`, preload, playsInline.
- Handling subtitles and converting SRT → VTT in the browser.
- Local persistence: saving and restoring playback position with `localStorage`.
- UX polish: hero, rows with arrows, hover states, progress bars, and fullscreen.

### Prerequisites 🧰

- Node.js 18+ and npm/pnpm.
- Basic familiarity with React/Next.js and TypeScript.
- Sample media: MP4 files (local under `public/videos/`) or external URLs, optional `.srt`/`.vtt`.

### Course outline 🗺️

1. Introduction and goals (this lesson)
2. Project setup + Tailwind
3. Data model and catalog
4. Core UI components (Card, Row)
5. Home and Hero composition
6. Video player foundation
7. Subtitles: SRT → VTT in the browser
8. Resume playback and progress UI
9. Autoplay, fullscreen, and keyboard shortcuts
10. Continue Watching row
11. Assets and licensing best practices
12. Deploy, CDN, and scaling notes

### Conventions used in code 🧭

- App Router structure under `src/app/`.
- Public assets under `public/` (`videos/`, `posters/`, `subs/`).
- Keep large media out of git unless using Git LFS. Prefer a CDN/bucket for bigger libraries.

### Suggested exercise 🧪

- Skim the repository tree and identify where each responsibility lives (data, components, pages, hooks, lib). Note where you would place tests or add new features like search.

### Why this course 💡

- Focuses on practical building blocks you actually need for a media app: catalog, player, resume, subtitles, and a tidy UI structure.
- Uses browser‑native capabilities first (HTML5 `<video>`, WebVTT) to keep the stack simple and portable.
- Keeps abstractions thin so you can extend or swap pieces later (e.g., switch to HLS or add auth).

### How we build 🧱

- Pages and layout: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/watch/[id]/page.tsx` for the player route.
- Components: `src/components/` contains `Hero`, `Row`, `MovieCard`, `VideoPlayer`, `ContinueWatching`.
- Hooks: `src/hooks/` has focused hooks like `useResume`, `useAutoFullscreen`, `useSubtitles`.
- Data: `src/data/movies.json` with types and helpers in `src/lib/catalog.ts`.
- Subtitles: conversion utilities in `src/lib/subtitles.ts`.

### What you’ll learn by doing 🛠️

- Model a small catalog, render rows by category, and attach a player/detail route.
- Build a robust `<video>` experience with autoplay, keyboard shortcuts, and fullscreen.
- Convert `.srt` to `.vtt` in the browser and wire subtitles correctly.
- Persist progress locally and surface it in the UI.

### How to follow along ▶️

- Start with Part 02 to scaffold the app and Tailwind.
- After each lesson, run the app and verify the behavior described in the “Verify it works” sections.
- Use `public/` for small demo media; switch to a CDN as soon as files are large.
