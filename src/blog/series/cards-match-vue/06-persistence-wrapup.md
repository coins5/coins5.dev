---
title: "Persistence, Polish & Next Steps"
pubDate: 2025-09-22
description: "You made it to the finish line! Let us consolidate what keeps the experience sticky and outline where you can go from here."
author: "coins5"
image:
  url: "/src/assets/images/series/cards-match-vue/06-persistence-wrapup.png"
  alt: "Persistence, Polish & Next Steps"
tags: ["typescript", "nodejs", "vue", "games"]

serie: "cards-match-vue"
seriesPartNumber: 6
---

# Module 6 · Persistence, Polish & Next Steps 🏁

You made it to the finish line! Let us consolidate what keeps the experience sticky and outline where you can go from here.

## Saving recent runs

`useScores.ts` mirrors the pattern you saw in settings, providing a tiny persistence layer:

```ts
const STORAGE_SCORES = "cm-scores";

function load(): ScoreEntry[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_SCORES) || "[]");
  } catch {
    return [];
  }
}

function save(scores: ScoreEntry[]) {
  localStorage.setItem(STORAGE_SCORES, JSON.stringify(scores.slice(0, 20)));
}

export function useScores() {
  const scores = ref<ScoreEntry[]>(load());
  function addScore(entry: ScoreEntry) {
    scores.value = [entry, ...scores.value].slice(0, 30);
    save(scores.value);
  }
  return { scores, addScore };
}
```

- 🗂️ Only the most recent scores stick around, keeping the list readable.
- 🔄 Composables make it trivial to feed updates to `ScoresList.vue`.

## UX touches that matter

- 📣 `previewLeftMs` broadcasts a live countdown chip so players know when the round begins.
- 🧼 `clearPreviewTimers()` on unmount prevents memory leaks when navigating away.
- ♿ Cards are buttons with ARIA-friendly states, respecting keyboard users.

## Ideas to extend the game

1. 🏆 Track best scores per difficulty and display hall-of-fame badges.
2. 🌙 Add themes (light/dark/high-contrast) using CSS custom properties.
3. 🔐 Let players paste a custom emoji set or upload their own image sprites.
4. 📊 Instrument analytics to learn which modes are most popular.

## Celebrate & share

Polish the README, capture a short GIF of gameplay, and show your project to the world. The skills you exercised—composable architecture, reactive timers, client-side persistence—translate directly to richer Vue apps.

Thank you for following along! Keep experimenting, keep refactoring, and most of all, keep having fun. 🎉
