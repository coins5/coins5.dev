---
title: "Autoplay, Fullscreen, and Shortcuts"
pubDate: 2025-09-04
description: "Improve ergonomics with autoplay, best‑effort fullscreen, keyboard controls, and an optional “unmute” overlay."
author: "coins5"
image:
  url: "/src/assets/images/series/loguru/getting_started_wit_loguru.png"
  alt: "Autoplay, Fullscreen, and Shortcuts"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/en/10-continue-watching-row"
serie: "netflix-clone-en"
seriesPartNumber: 9
---

Goal: Improve ergonomics with autoplay, best‑effort fullscreen, keyboard controls, and an optional “unmute” overlay.

### Files 🗂️

- `src/hooks/useAutoFullscreen.ts`: tries `requestFullscreen()` when playback starts.
- `src/components/VideoPlayer.tsx`: sets `autoPlay` (muted), enables `autoFullscreen`, binds keys.

### Fullscreen hook (excerpt) ⛶

```ts
// src/hooks/useAutoFullscreen.ts
export function useAutoFullscreen(
  videoEl: HTMLVideoElement | null,
  enable?: boolean
) {
  useEffect(() => {
    if (!videoEl || !enable) return;
    let requested = false;
    const tryFs = async () => {
      if (requested) return;
      requested = true;
      try {
        const anyVideo = videoEl as any;
        if (!document.fullscreenElement && anyVideo.requestFullscreen)
          await anyVideo.requestFullscreen();
        else if (anyVideo.webkitEnterFullscreen)
          anyVideo.webkitEnterFullscreen();
      } catch {}
    };
    const onPlay = () => tryFs();
    videoEl.addEventListener("play", onPlay);
    if (!videoEl.paused) setTimeout(tryFs, 0);
    return () => videoEl.removeEventListener("play", onPlay);
  }, [videoEl, enable]);
}
```

### Keyboard shortcuts (excerpt) ⌨️

```ts
// Inside VideoPlayer
useEffect(() => {
  if (!videoEl) return;
  const onKey = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null;
    if (
      target &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable)
    )
      return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case " ":
      case "k":
      case "K":
        e.preventDefault();
        videoEl.paused ? void videoEl.play() : videoEl.pause();
        break;
      case "ArrowLeft":
        e.preventDefault();
        videoEl.currentTime = Math.max(0, videoEl.currentTime - 5);
        break;
      case "ArrowRight":
        e.preventDefault();
        videoEl.currentTime = Math.min(
          videoEl.duration || Infinity,
          videoEl.currentTime + 5
        );
        break;
      case "m":
      case "M":
        e.preventDefault();
        videoEl.muted = !videoEl.muted;
        break;
      case "f":
      case "F":
        e.preventDefault();
        (document.fullscreenElement
          ? document.exitFullscreen?.()
          : (videoEl as any).requestFullscreen?.()
        )?.catch?.(() => {});
        break;
    }
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [videoEl]);
```

### Notes 📝

- Autoplay generally requires muted playback. The player sets `muted` automatically when `autoPlay` is true.
- Some platforms block fullscreen without a user gesture; the hook attempts it and ignores errors.
- Consider an overlay button like “Tap to unmute” while muted.

### Why these shortcuts 🎯

- Mirrors familiar patterns (YouTube/players): Space/K play‑pause, arrows seek, M mute, F fullscreen.
- Bound at `window` level for convenience; we skip when typing in inputs or when modifier keys are pressed.

### Platform quirks 📱

- iOS can force fullscreen or ignore requests depending on context; the hook tries both `requestFullscreen` and `webkitEnterFullscreen`.
- Autoplay policies vary—if playback fails silently, ensure `muted` is true and a user gesture occurs.

### Focus management 👀

- Avoid hijacking keys while typing by checking `e.target` for inputs/contentEditable.
- Consider adding tooltip hints or a small help overlay listing shortcuts.

### Verify it works ✅

1. Load a video with `autoPlay` on: it should start muted; click “Tap to unmute”.
2. Try Space/K, ←/→, M, F to confirm expected behavior.
3. Click into a text input elsewhere on the page: keys should not control the video.
