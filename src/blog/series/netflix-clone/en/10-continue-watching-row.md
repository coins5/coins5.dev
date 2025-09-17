---
title: "Continue Watching Row"
pubDate: 2025-09-14
description: "Surface in‑progress items based on local resume data"
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/10-continue-watching-row.png"
  alt: "Continue Watching Row"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/11-assets-and-licensing"
serie: "netflix-clone-en"
seriesPartNumber: 10
---

Goal: Surface in‑progress items based on local resume data.

### File: `src/components/ContinueWatching.tsx` (excerpt) 🧩

```tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import Row from "@/components/Row";
import { getAllMovies, type Movie } from "@/lib/catalog";

type Entry = { id: string; t: number; d?: number; u?: number };
function readEntries(): Entry[] {
  const prefix = "vp:pos:movie:";
  const out: Entry[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith(prefix)) continue;
    const id = key.slice(prefix.length);
    const raw = localStorage.getItem(key);
    if (!raw) continue;
    try {
      const { t, d, u } = JSON.parse(raw) as Entry;
      if (typeof t === "number") out.push({ id, t, d, u });
    } catch {}
  }
  return out;
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
    const byId = new Map(movies.map((m) => [m.id, m] as const));
    return entries
      .filter((e) => byId.has(e.id))
      .filter((e) => {
        const d = e.d ?? 0;
        if (!d) return true;
        const pct = e.t / d;
        return pct > 0.02 && pct < 0.98;
      })
      .sort((a, b) => (b.u ?? 0) - (a.u ?? 0))
      .map((e) => byId.get(e.id)!)
      .slice(0, 12);
  }, [entries, movies]);
  if (!items.length) return null;
  return <Row title="Continue Watching" items={items} />;
}
```

### Integration 🔗

- Import and place `<ContinueWatching />` near the top of `src/app/page.tsx`, below the hero.

### Enhancements ✨

- Add a context menu entry on cards to “Restart from beginning” (clear the key).
- Persist resume server‑side per user once you add authentication.

### Why this design 💡

- Reads all `localStorage` keys with the `vp:pos:movie:` prefix to avoid hard‑coded ids and keep it generic.
- Filters out items that are almost unwatched (< 2%) or almost finished (> 98%) to keep the row meaningful.
- Sorts by `u` (last update timestamp) so the most recently viewed shows first.

### Live updates 🔄

- Subscribes to the `storage` event to refresh the row when another tab or the player updates progress.

### Limitations 🚧

- Only reflects progress on this device/browser. To make it cross‑device, persist on the backend and read via an API.
- If a movie is removed from the catalog, its stored key will be ignored until cleared automatically by viewing another video.

### Verify it works ✅

1. Start a few videos; refresh Home: the row appears with those items.
2. Finish a video near the end: it should drop out of the row after ending/clearing progress.
3. Open two tabs: playing in one should update the row in the other shortly after.
