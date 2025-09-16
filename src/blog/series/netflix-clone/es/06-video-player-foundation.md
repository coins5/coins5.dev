---
title: "Video Player Foundation"
pubDate: 2025-09-08
description: "Build a simple, robust <video> player that accepts multiple sources and optional subtitles — friendly to mobile, and easy to extend"
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/06-video-player-foundation.png"
  alt: "Video Player Foundation"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/07-subtitles-srt-to-vtt"
serie: "netflix-clone-es"
seriesPartNumber: 6
---

Objetivo: crear un componente `<video>` robusto con múltiples fuentes y subtítulos.

### API (extracto) 🧩

```ts
type Props = {
  sources: { src: string; type: string; label?: string }[];
  poster?: string;
  subtitles?: { src: string; lang: string; label: string; default?: boolean }[];
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
  storageKey?: string;
  resume?: boolean;
  autoFullscreen?: boolean;
};
```

### Render básico (extracto) 🔧

```tsx
<video
  preload="metadata"
  playsInline
  {...(autoPlay ? { autoPlay: true, muted: true } : {})}
>
  {[...sources]
    .sort(
      (a, b) =>
        (a.type.includes("mp4") ? 0 : 1) - (b.type.includes("mp4") ? 0 : 1)
    )
    .map((s) => (
      <source key={s.src} src={s.src} type={s.type} />
    ))}
  {(subtitles ?? []).map((t) => (
    <track
      key={t.src}
      src={t.src}
      kind="subtitles"
      srcLang={t.lang}
      label={t.label}
      {...(t.default ? { default: true } : {})}
    />
  ))}
  Tu navegador no soporta el elemento video.
</video>
```

### Notas 📝

- `preload="metadata"` y `playsInline` para móviles.
- Empieza con MP4 progresivo; evalúa HLS/DASH cuando crezca el catálogo.
