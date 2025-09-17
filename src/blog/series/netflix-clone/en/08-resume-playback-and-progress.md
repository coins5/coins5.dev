---
title: "Resume Playback and Progress UI"
pubDate: 2025-09-12
description: "Persist and restore playback position, and reflect it in the catalog UI."
author: "coins5"
image:
  url: "/src/assets/images/series/netflix-clone/08-resume-playback-and-progress.png"
  alt: "Resume Playback and Progress UI"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/09-autoplay-fullscreen-shortcuts"
serie: "netflix-clone-en"
seriesPartNumber: 8
---

Goal: Persist and restore playback position, and reflect it in the catalog UI.

### Files 🗂️

- `src/hooks/useResume.ts`: saves `{ t, d, u }` in `localStorage` as `vp:pos:<key>`.
- `src/components/VideoPlayer.tsx`: calls `useResume(videoEl, storageKey, true)`.
- `src/components/MovieCard.tsx`: reads progress and renders a small bar.

### Hook (excerpt) 🪝

```ts
// src/hooks/useResume.ts
export function useResume(
  video: HTMLVideoElement | null,
  key: string,
  enable: boolean
) {
  useEffect(() => {
    if (!video || !enable || !key) return;
    const storageKey = `vp:pos:${key}`;
    let lastSaved = 0;
    const tryRestore = () => {
      try {
        const raw = localStorage.getItem(storageKey);
        if (!raw) return;
        const { t, d } = JSON.parse(raw) as { t: number; d?: number };
        if (
          Number.isFinite(t) &&
          t > 1 &&
          video.duration &&
          t < video.duration - 2
        )
          video.currentTime = t;
      } catch {}
    };
    const save = () => {
      if (!video.duration || video.duration < 20) return;
      const t = video.currentTime;
      const now = Date.now();
      if (now - lastSaved < 2000) return;
      lastSaved = now;
      if (t < 2 || t >= video.duration - 2) {
        try {
          localStorage.removeItem(storageKey);
        } catch {}
        return;
      }
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({ t, d: video.duration, u: now })
        );
      } catch {}
    };
    const onLoaded = () => tryRestore();
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", save);
    video.addEventListener("pause", save);
    video.addEventListener("ended", () => {
      try {
        localStorage.removeItem(storageKey);
      } catch {}
    });
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", save);
      video.removeEventListener("pause", save);
      video.removeEventListener("ended", () => {});
    };
  }, [video, key, enable]);
}
```

### MovieCard progress (excerpt) 📊

```tsx
// src/components/MovieCard.tsx
const raw = localStorage.getItem(`vp:pos:movie:${movie.id}`);
const data = raw ? (JSON.parse(raw) as { t?: number; d?: number }) : undefined;
const pct = data?.t && data?.d ? Math.min(100, (data.t / data.d) * 100) : 0;
{
  pct > 0 && (
    <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
      <div className="h-full bg-red-500" style={{ width: `${pct}%` }} />
    </div>
  );
}
```

### Behavior ⚙️

- Saves every ~2s while playing; skips very short videos (< 20s).
- Clears near start/end or when the video ends.
- On load, seeks to the last saved position if valid.

### Why localStorage? 💾

- Simple, offline‑friendly, and avoids backend complexity in a demo.
- Later you can sync to a database per user (e.g., with authentication).

### Why this approach 🧠

- Throttled saves (~2s) reduce write churn; clearing near start/end avoids noisy resume points.
- Using a unique `storageKey` (`movie:<id>`) keeps data scoped and makes it easy to migrate later.

### Pitfalls and guardrails ⚠️

- Very short clips (< 20s) are ignored to avoid clutter.
- If `duration` is unknown (streaming edge cases), the hook won’t save until metadata loads.
- LocalStorage quotas vary by browser; failures are swallowed in this demo.

### Verify it works ✅

1. Play a video for ~10s, navigate away, return: it should resume near where you left off.
2. Scrub to the last seconds, pause: progress should clear and the card bar should disappear.
3. Open a second tab with the app: the Continue Watching row should reflect changes after saving (see Part 10).
