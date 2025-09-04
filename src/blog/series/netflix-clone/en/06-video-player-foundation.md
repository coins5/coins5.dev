---
title: "Video Player Foundation"
pubDate: 2025-09-04
description: "Build a simple, robust <video> player that accepts multiple sources and optional subtitles — friendly to mobile, and easy to extend"
author: "coins5"
image:
  url: "/src/assets/images/series/loguru/getting_started_wit_loguru.png"
  alt: "Video Player Foundation"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/07-subtitles-srt-to-vtt"
serie: "netflix-clone-en"
seriesPartNumber: 6
---

Goal

- Build a simple, robust `<video>` player that accepts multiple sources and optional subtitles — friendly to mobile, and easy to extend. 🎯

### Component API (excerpt) 🧩

```ts
type Props = {
  sources: { src: string; type: string; label?: string }[];
  poster?: string;
  subtitles?: { src: string; lang: string; label: string; default?: boolean }[];
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
  storageKey?: string; // unique id to persist position
  resume?: boolean; // restore last position automatically
  autoFullscreen?: boolean; // best effort to enter fullscreen on start
};
```

### Rendering logic (excerpt) 🔧

```tsx
// src/components/VideoPlayer.tsx
return (
  <video
    className="h-full w-full rounded-md"
    controls={controls}
    preload="metadata"
    poster={poster}
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
    Your browser does not support the video tag.
  </video>
);
```

### Usage ▶️

```tsx
<VideoPlayer
  sources={[
    { src: "/videos/sample-720p.mp4", type: "video/mp4", label: "720p" },
    { src: "/videos/sample-480p.webm", type: "video/webm", label: "480p" },
  ]}
  subtitles={[
    { src: "/subs/sample-en.vtt", lang: "en", label: "English", default: true },
  ]}
  poster="/posters/sample.jpg"
  controls
/>
```

### Notes 📝

- 📱 Use `preload="metadata"` and `playsInline` for mobile.
- 📦 Start with progressive MP4; consider HLS/DASH once your catalog grows.

### Why native `<video>` first 💡

- ✅ Zero dependencies, great compatibility, and built‑in support for multiple `<source>`, posters, and text tracks.
- 🧠 Easier to reason about buffering, controls, and events; then layer features (resume, subtitles) via hooks.

### Source ordering 📼

- We prefer MP4 first for maximum reach; browsers select the first compatible source. If you include WebM too, list it after MP4.

### Mobile considerations 📱

- `playsInline` avoids forced fullscreen on iOS Safari, keeping UX consistent with overlays.
- Autoplay typically requires `muted`; we apply it automatically when `autoPlay` is set.

### Verify it works ✅

1. 🎬 Provide two sources (MP4 and WebM) and confirm playback in Chrome, Firefox, and Safari.
2. ⌨️ Toggle `controls` and test keyboard controls from Part 09 once added.
3. 🖼️ Check the poster displays before playback and after pausing.
