---
title: "Game Logic & Reactive State"
pubDate: 2025-09-20
description: "Time to peek under the hood! The useGame composable orchestrates everything: deck creation, preview timing, scoring, and persistence. We will dissect the most important pieces."
author: "coins5"
image:
  url: "/src/assets/images/series/cards-match-vue/03-game-logic.png"
  alt: "Game Logic & Reactive State"
tags: ["typescript", "nodejs", "vue", "games"]
nextPost: "series/cards-match-vue/04-ui-components"
serie: "cards-match-vue"
seriesPartNumber: 3
---

# Module 3 · Game Logic & Reactive State 🧠

Time to peek under the hood! The `useGame` composable orchestrates everything: deck creation, preview timing, scoring, and persistence. We will dissect the most important pieces.

## Imports that matter

```ts
import { ref, computed, onBeforeUnmount } from "vue";
import { DIFFICULTIES, PREVIEW_MS } from "./constants";
import { shuffle } from "./utils";
import { getImages } from "./imageService";
import { useSettings } from "./useSettings";
import { useScores } from "./useScores";
```

- `ref` and `computed` keep the UI in sync with state changes.
- `DIFFICULTIES` describes how many unique cards and matches each mode requires.
- `getImages` abstracts whether we use emojis or Giphy assets.

## Building the deck with a preview 🃏

This is the heart of the `startNewGame` flow:

```ts
const deck = ref<Card[]>([]);
const previewing = ref(false);
const previewLeftMs = ref(0);

async function startNewGame() {
  busy.value = true;
  gameOver.value = false;
  score.value = 0;
  picked.value = [];
  firstPickAt.value = null;

  const { unique, match } = meta.value;
  const images = await getImages(settings, unique);

  const cards: Card[] = [];
  let idCounter = 1;
  for (const img of images) {
    for (let k = 0; k < match; k++) {
      cards.push({
        id: idCounter++,
        imageId: img.id,
        imageUrl: img.url,
        flipped: false,
        matched: false,
      });
    }
  }
  deck.value = shuffle(cards);

  deck.value.forEach((c) => (c.flipped = true));
  showStart.value = false;
  previewing.value = true;
  const endAt = Date.now() + previewMs.value;
  previewLeftMs.value = previewMs.value;
  previewTick = setInterval(() => {
    previewLeftMs.value = Math.max(0, endAt - Date.now());
  }, 100);
  previewTimeout = setTimeout(() => {
    deck.value.forEach((c) => {
      if (!c.matched) c.flipped = false;
    });
    busy.value = false;
    previewing.value = false;
    clearPreviewTimers();
  }, previewMs.value);
}
```

Highlights:

- 🧮 Deck size adapts to the difficulty metadata (`unique` × `match`).
- ⏳ A live countdown drives the preview timer via `previewTick`.
- 🛑 `busy` blocks clicks while cards are auto-flipped.

## Matching logic & scoring

When the player clicks cards, we push indexes into `picked`. Once we reach the required `match` size, we evaluate:

```ts
const groupSize = meta.value.match;
if (picked.value.length === groupSize) {
  busy.value = true;
  const chosen = picked.value.map((i) => deck.value[i]);
  const allSame = chosen.every((x) => x.imageId === chosen[0].imageId);

  const resolve = () => {
    picked.value = [];
    firstPickAt.value = null;
    busy.value = false;
    if (deck.value.every((x) => x.matched)) {
      gameOver.value = true;
      addScore({
        id: `${Date.now()}`,
        date: new Date().toISOString(),
        difficulty: settings.difficulty,
        score: score.value,
        totalCards: deck.value.length,
        matchSize: meta.value.match,
        source: settings.source,
      });
    }
  };

  if (allSame) {
    const delta = firstPickAt.value ? Date.now() - firstPickAt.value : 0;
    const bonus = Math.max(0, 1000 - delta);
    score.value += 100 + bonus;
    chosen.forEach((c) => (c.matched = true));
    setTimeout(resolve, 250);
  } else {
    setTimeout(() => {
      picked.value.forEach((i) => (deck.value[i].flipped = false));
      resolve();
    }, 700);
  }
}
```

- ✅ Correct matches award a base score plus a speed-based bonus.
- ❌ Wrong guesses flip cards back after a short delay.
- 🏁 When every card is matched we persist the run via `useScores`.

## Key takeaways

- Centralized state keeps the components lightweight and declarative.
- Timers and cleanup (`clearPreviewTimers`, `onBeforeUnmount`) prevent leaks.
- Composables can collaborate (`useSettings`, `useScores`) without a heavyweight store.

With the logic dialed in, let us paint the interface that brings it to life. 🎨
