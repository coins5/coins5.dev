---
title: "Home and Hero"
pubDate: 2025-09-09
description: "Compose the Home with a header, a hero banner, Continue Watching, and category rows"
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/05-home-and-hero.png"
  alt: "Home and Hero"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/06-video-player-foundation"
serie: "netflix-clone-en"
seriesPartNumber: 5
---

Goal: Compose the Home with a header, a hero banner, Continue Watching, and category rows.

### Header (excerpt) 🧭

```tsx
// src/components/Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-b from-black/70 to-transparent px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="text-xl font-bold tracking-wide">
          <span className="text-red-500">N</span>etflix Clone
        </div>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <span className="hover:text-white">Home</span>
          <span className="hover:text-white">Series</span>
          <span className="hover:text-white">Movies</span>
        </nav>
      </div>
    </header>
  );
}
```

### Hero (excerpt) 🎬

```tsx
// src/components/Hero.tsx
import Link from "next/link";
import type { Movie } from "@/lib/catalog";

export default function Hero({ movie }: { movie: Movie }) {
  return (
    <section className="relative mb-8 overflow-hidden rounded-lg">
      {movie.poster ? (
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-[50vh] w-full object-cover sm:h-[60vh]"
        />
      ) : (
        <div className="h-[50vh] w-full bg-[#151515] sm:h-[60vh]" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto mb-8 w-full max-w-6xl px-6">
          <h1 className="mb-3 text-3xl font-bold sm:text-5xl">{movie.title}</h1>
          <p className="mb-4 max-w-2xl text-sm text-white/80 sm:text-base line-clamp-3">
            {movie.description}
          </p>
          <div className="flex gap-3">
            <Link
              href={`/watch/${movie.id}`}
              className="rounded-md bg-white px-4 py-2 font-medium text-black hover:bg-white/90"
            >
              ▶ Play
            </Link>
            <Link
              href={`/watch/${movie.id}`}
              className="rounded-md bg-white/10 px-4 py-2 font-medium text-white hover:bg白/20"
            >
              ⓘ More info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Home composition (excerpt) 🏠

```tsx
// src/app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContinueWatching from "@/components/ContinueWatching";
import Row from "@/components/Row";
import { getByCategory } from "@/lib/catalog";

export default function Home() {
  const byCategory = getByCategory();
  const categories = Object.keys(byCategory);
  const destacados = byCategory["Destacados"];
  const heroMovie = destacados?.length
    ? destacados[Math.floor(Math.random() * destacados.length)]
    : categories.length
    ? byCategory[categories[0]][0]
    : undefined;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-6">
        {heroMovie && <Hero movie={heroMovie} />}
        <ContinueWatching />
        {categories.map((c) => (
          <Row key={c} title={c} items={byCategory[c]} />
        ))}
      </main>
    </div>
  );
}
```

### Notes 📝

- The hero uses a dark gradient overlay for readable text on bright posters.
- Consider randomizing the hero on each visit for freshness.

### Why this composition 💡

- Home stitches together header, hero, resume, and category rows without introducing global state—each piece derives from `movies.json` via helpers.
- Hero sits above rows to anchor the page visually and provide quick entry to playback.

### Design choices 🎨

- Gradient overlay ensures text contrast regardless of poster brightness.
- The primary action is “Play”; secondary “More info” can link to a details route when added.

### Data flow 🔗

- `getByCategory()` powers rows and hero selection; no extra fetch needed. The hero picks from “Destacados” or falls back to the first available category.

### Verify it works ✅

1. Refresh the home page several times: hero should vary if there are multiple “Destacados”.
2. Remove `Destacados` from all items: hero should fallback to the first category’s first item.
3. Click Play: navigates to `/watch/<id>` and starts playback.
