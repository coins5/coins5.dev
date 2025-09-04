---
title: "Subtitles: SRT to VTT in the Browser 💬✨"
pubDate: 2025-09-04
description: "Add support for .srt subtitles by converting them to WebVTT on the fly, so the native browser player can render captions without extra tooling."
author: "coins5"
image:
  url: "/src/assets/images/series/loguru/getting_started_wit_loguru.png"
  alt: "Subtitles: SRT to VTT in the Browser 💬✨"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/08-resume-playback-and-progress"
serie: "netflix-clone-es"
seriesPartNumber: 7
---

Objetivo: soportar `.srt` convirtiéndolos a WebVTT en tiempo de ejecución.

### Archivos 🗂️

- `src/lib/subtitles.ts`: helpers `isSrtUrl`, `srtToVtt`, `processSubtitles`.
- `src/hooks/useSubtitles.ts`: hook que obtiene `.srt`, convierte a VTT y devuelve tracks procesados.
- `src/components/VideoPlayer.tsx`: usa `useSubtitles()` y renderiza `<track>`.

### Conversión (extracto) 🔁

```ts
export function srtToVtt(srt: string): string {
  const text = srt.replace(/^\uFEFF/, "");
  const blocks = text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n\n+/);
  const out: string[] = ["WEBVTT", ""];
  for (const b of blocks) {
    const lines = b.split("\n").filter((l) => l.trim() !== "");
    if (!lines.length) continue;
    let i = 0;
    if (/^\d+$/.test(lines[0].trim())) i = 1;
    if (!lines[i]) continue;
    const time = lines[i]
      .replace(/,/, ".")
      .replace(/ --> .*?,/g, (m) => m.replace(",", "."));
    out.push(time, ...lines.slice(i + 1), "");
  }
  return out.join("\n");
}
```

### Limitaciones ⚠️

- Estilos/características avanzadas de SRT no se preservan; para máxima fidelidad, convierte a `.vtt` offline.
- Si el `.srt` es remoto, el servidor debe permitir CORS.
