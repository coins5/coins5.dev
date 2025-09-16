---
title: "Data Model and Catalog"
pubDate: 2025-09-07
description: "Define a simple, typed catalog and helpers to query it efficiently from the UI."
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/03-data-model-and-catalog.png"
  alt: "Data Model and Catalog"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/04-core-ui-components"
serie: "netflix-clone-es"
seriesPartNumber: 3
---

Objetivo: definir un catálogo tipado y utilidades para consultarlo desde la UI.

### Archivos clave 🗂️

- `src/data/movies.json`: datos de ejemplo (id, título, categorías, fuentes, subtítulos).
- `src/lib/catalog.ts`: tipos y funciones helper.

### Tipos (extracto) 📐

```ts
export type VideoSource = { src: string; type: string; label?: string };
export type SubtitleTrack = {
  src: string;
  lang: string;
  label: string;
  default?: boolean;
};
export type Movie = {
  id: string;
  title: string;
  description?: string;
  poster?: string;
  categories: string[];
  sources: VideoSource[];
  subtitles?: SubtitleTrack[];
  year?: number;
  runtime?: number;
};
```

### Ejemplo en `movies.json` 📄

```json
{
  "id": "tears-of-steel",
  "title": "Tears of Steel",
  "poster": "/posters/tears-of-steel.jpg",
  "categories": ["Destacados", "Demo"],
  "sources": [
    {
      "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      "type": "video/mp4",
      "label": "720p"
    }
  ],
  "subtitles": [
    {
      "src": "/subs/TOS-en.srt",
      "lang": "en",
      "label": "English",
      "default": true
    },
    { "src": "/subs/TOS-es.srt", "lang": "es", "label": "Español" }
  ]
}
```

### Helpers (extracto) 🔎

```ts
import movies from "@/data/movies.json";

export function getAllMovies() {
  return movies as Movie[];
}
export function getMovieById(id: string) {
  return getAllMovies().find((m) => m.id === id);
}
export function getByCategory() {
  const map: Record<string, Movie[]> = {};
  for (const m of getAllMovies())
    for (const c of m.categories || []) (map[c] ||= []).push(m);
  return map;
}
```

### Consejos 📝

- MP4 (H.264 + AAC) para máxima compatibilidad; añade WebM como extra.
- Muestras locales en `public/videos/`; biblioteca pesada en CDN.
- Documenta fuente y licencia de cada asset (ver Parte 11).
