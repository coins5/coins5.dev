---
title: "Core UI Components"
pubDate: 2025-09-04
description: "Build reusable components for the catalog grid and horizontal rows."
author: "coins5"
image:
  url: "/src/assets/images/series/loguru/getting_started_wit_loguru.png"
  alt: "Core UI Components"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/05-home-and-hero"
serie: "netflix-clone-es"
seriesPartNumber: 4
---

Objetivo: construir componentes reutilizables para el catálogo.

### Archivos 🗂️

- `src/components/MovieCard.tsx`: portada, título, overlay y barra de progreso.
- `src/components/Row.tsx`: fila horizontal con scroll suave y flechas.

### MovieCard (extracto) 🎞️

```tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Movie } from "@/lib/catalog";

export default function MovieCard({ movie }: { movie: Movie }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(`vp:pos:movie:${movie.id}`);
      if (!raw) return;
      const d = JSON.parse(raw) as { t?: number; d?: number };
      if (d?.t && d?.d && d.d > 0)
        setProgress(Math.min(100, (d.t / d.d) * 100));
    } catch {}
  }, [movie.id]);
  return (
    <Link
      href={`/watch/${movie.id}`}
      className="group relative block w-[180px] flex-shrink-0"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-[#222] ring-1 ring-white/10">
        {movie.poster ? (
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-white/70">
            {movie.title}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        {progress > 0 && (
          <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
            <div
              className="h-full bg-red-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      <div className="mt-2 line-clamp-1 text-sm text-white/90">
        {movie.title}
      </div>
    </Link>
  );
}
```

### Row (extracto) ↔️

```tsx
"use client";
import { useRef } from "react";
import type { Movie } from "@/lib/catalog";
import MovieCard from "./MovieCard";

export default function Row({
  title,
  items,
}: {
  title: string;
  items: Movie[];
}) {
  const scroller = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: 1 | -1) =>
    scroller.current?.scrollBy({
      left: dir * (scroller.current.clientWidth * 0.9),
      behavior: "smooth",
    });
  if (!items?.length) return null;
  return (
    <section className="group/row relative mb-8">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      <div ref={scroller} className="flex gap-3 overflow-x-auto pb-2">
        {items.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-10 left-0 w-16 bg-gradient-to-r from-black to-transparent opacity-0 transition-opacity group-hover/row:opacity-100" />
      <div className="pointer-events-none absolute inset-y-10 right-0 w-16 bg-gradient-to-l from-black to-transparent opacity-0 transition-opacity group-hover/row:opacity-100" />
      <button
        onClick={() => scrollBy(-1)}
        className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 group-hover/row:block"
      >
        ◀
      </button>
      <button
        onClick={() => scrollBy(1)}
        className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 group-hover/row:block"
      >
        ▶
      </button>
    </section>
  );
}
```

### Notas 📝

- Usa `<img>` al inicio; si luego usas dominios remotos, configura `next.config.ts` y cambia a `next/image`.
