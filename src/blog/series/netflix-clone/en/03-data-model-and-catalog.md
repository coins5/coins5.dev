---
title: "Data Model and Catalog"
pubDate: 2025-09-07
description: "Define a simple, typed catalog and helpers to query it efficiently from the UI."
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/03-data-model-and-catalog.png"
  alt: "Data Model and Catalog"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/04-core-ui-components"
serie: "netflix-clone-en"
seriesPartNumber: 3
---

Goal: Define a simple, typed catalog and helpers to query it efficiently from the UI.

### Key files 🗂️

- `src/data/movies.json`: sample data (id, title, categories, sources, subtitles).
- `src/lib/catalog.ts`: TypeScript types and helper functions.

### Schema overview 📐

```ts
// src/lib/catalog.ts (excerpt)
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
  poster?: string; // local path or external URL
  categories: string[]; // e.g. ["Destacados", "Demo"]
  sources: VideoSource[]; // multiple quality/format options
  subtitles?: SubtitleTrack[];
  year?: number;
  runtime?: number; // seconds
};
```

### Sample `movies.json` entry 📄

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

### Helpers you’ll use in pages/components 🔎

```ts
// src/lib/catalog.ts (excerpt)
import movies from "@/data/movies.json";

export function getAllMovies(): Movie[] {
  return movies as Movie[];
}

export function getMovieById(id: string): Movie | undefined {
  return getAllMovies().find((m) => m.id === id);
}

export function getByCategory(): Record<string, Movie[]> {
  const map: Record<string, Movie[]> = {};
  for (const m of getAllMovies()) {
    for (const c of m.categories || []) {
      (map[c] ||= []).push(m);
    }
  }
  return map;
}
```

### Why this schema 💡

- Separate `sources`: multiple qualities/formats; browsers pick the first compatible `<source>`. We’ll sort to prefer MP4 for reach.
- Optional `subtitles`: Tracks can include `.srt` which we convert to `.vtt` at runtime.
- `categories: string[]`: Simple, flexible grouping; rows are derived directly from it.
- Optional `poster/description/year/runtime`: Enrich UI without complicating the core model.

### Why JSON + types 🧰

- `movies.json` is easy to edit/diff; with `resolveJsonModule`, TS understands imports and you still get types at usage sites.
- `catalog.ts` centralizes types and helper queries so UI doesn’t couple to file shape.

### Extending safely 🧱

- Add fields like `rating`, `cast`, or `background` as optional, then extend `Movie` accordingly.
- For large catalogs, move to an API keeping the same output shape so components remain unchanged.

### Common pitfalls ⚠️

- External posters with `next/image` need `images.remotePatterns` in `next.config.ts`.
- Ensure `type` matches encoding (`video/mp4`, `video/webm`) so source selection works.
- Remote `.srt` require CORS headers to be fetchable for conversion.

### Practical tips 📝

- Prefer MP4 (H.264 + AAC) for broad compatibility; add WebM optionally.
- Keep small demo files under `public/videos/`; use CDN for heavy media.
- Track license and source for each asset (see Part 11 for structure and examples).

### Exercise 🧪

- Add a new movie pointing to a local file in `public/videos/`. Create a new category and verify it renders on the home page under its own row.

### Verify it works ✅

1. Add a movie with an MP4 and an `.srt` subtitle to `movies.json`.
2. Visit Home: the category appears and card shows a poster.
3. Open `/watch/<id>`: subtitles toggle and render correctly.
