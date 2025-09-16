---
title: "Continue Watching Row"
pubDate: 2025-09-12
description: "Surface in‑progress items based on local resume data"
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/10-continue-watching-row.png"
  alt: "Continue Watching Row"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/11-assets-and-licensing"
serie: "netflix-clone-es"
seriesPartNumber: 10
---

Objetivo: mostrar elementos en progreso basados en los datos locales de reanudación.

### Componente (extracto) 🧩

```tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import Row from "@/components/Row";
import { getAllMovies, type Movie } from "@/lib/catalog";

type Entry = { id: string; t: number; d?: number; u?: number };
function readEntries(): Entry[] {
  /* lee localStorage y parsea entradas */ return [];
}

export default function ContinueWatching() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const movies = getAllMovies();
  useEffect(() => {
    setEntries(readEntries());
    const onStorage = () => setEntries(readEntries());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  const items: Movie[] = useMemo(() => {
    /* cruza ids con catálogo, filtra inicio/fin, ordena por u */ return [];
  }, [entries, movies]);
  if (!items.length) return null;
  return <Row title="Seguir viendo" items={items} />;
}
```

### Integración 🔗

- Importa y coloca `<ContinueWatching />` cerca del inicio de `src/app/page.tsx`, bajo el hero.
