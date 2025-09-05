---
title: "Subtitles: SRT to VTT in the Browser 💬✨"
pubDate: 2025-09-04
description: "Add support for .srt subtitles by converting them to WebVTT on the fly, so the native browser player can render captions without extra tooling."
author: "coins5"
image:
  url: "/src/assets/images/series/loguru/getting_started_wit_loguru.png"
  alt: "Subtitles: SRT to VTT in the Browser 💬✨"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/08-resume-playback-and-progress"
serie: "netflix-clone-en"
seriesPartNumber: 7
---

### What you'll do ✨

- Add support for `.srt` subtitles by converting them to WebVTT on the fly, so the native browser player can render captions without extra tooling.

### Files you'll touch 🗂️

- `src/lib/subtitles.ts`: helpers — `isSrtUrl`, `srtToVtt`, and `processSubtitles`.
- `src/hooks/useSubtitles.ts`: fetches `.srt`, converts to VTT, and returns processed tracks.
- `src/components/VideoPlayer.tsx`: uses `useSubtitles()` and renders `<track>` elements.

### Helper (excerpt) 🔧

```ts
// src/lib/subtitles.ts
export function srtToVtt(srt: string): string {
  const text = srt.replace(/^\uFEFF/, "");
  const blocks = text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n\n+/);
  const out: string[] = ["WEBVTT", ""];
  for (const block of blocks) {
    const lines = block.split("\n").filter((l) => l.trim() !== "");
    if (!lines.length) continue;
    let i = 0;
    if (/^\d+$/.test(lines[0].trim())) i = 1; // optional index
    if (!lines[i]) continue;
    const time = lines[i]
      .replace(/,/, ".")
      .replace(/ --> .*?,/g, (m) => m.replace(",", "."));
    const textLines = lines.slice(i + 1);
    out.push(time, ...textLines, "");
  }
  return out.join("\n");
}
```

### Hook (excerpt) 🪝

```ts
// src/hooks/useSubtitles.ts
export function useSubtitles(subtitles?: SubtitleTrack[]) {
  const [processed, setProcessed] = useState<SubtitleTrack[] | undefined>();
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { processed, revoke } = await processSubtitles(subtitles);
      if (!cancelled) setProcessed(processed);
      cleanup = revoke;
    })();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [subtitles]);
  return processed ?? subtitles;
}
```

### Heads‑up and tips ⚠️

- ✍️ Advanced SRT styling isn’t preserved with this lightweight approach. For pixel‑perfect results, pre‑convert to `.vtt` during your build.
- 🌐 Remote `.srt` files need permissive CORS (`Access-Control-Allow-Origin`). Local files under `public/subs/` work out of the box.

### Why convert client‑side 🤔

- ✅ Keeps things simple and flexible: drop in `.srt` files and they’ll “just work” without extra build steps.
- 🔗 Supports both local and remote tracks (as long as CORS allows fetching).

### About memory and cleanup 🧹

- ♻️ `processSubtitles` creates Blob URLs for the converted VTT. The hook gives you a `revoke` cleanup so those URLs are released when the component unmounts or tracks change.

### Edge cases to watch for 🧠

- ⏱️ Non‑standard SRT timing/formatting may not convert perfectly. For production catalogs, consider pre‑converting with a dedicated tool.
- 🚀 Very large subtitle files add a small delay on first load; pre‑convert frequently used tracks to keep things snappy.

### Try it out ✅

1. 🎬 Point a movie to `/subs/TOS-en.srt` and enable the English track.
2. 💬 Open the player and toggle subtitles — captions should appear with correct timing.
3. 🔍 In DevTools → Network, the `.srt` is fetched once, then the player uses an in‑memory Blob URL for the VTT.
