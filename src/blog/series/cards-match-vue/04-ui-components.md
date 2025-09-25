---
title: "UI Components & Interaction"
pubDate: 2025-09-21
description: "With the game logic solid, the UI binds everything together. Vue Single File Components keep the markup expressive while reusing the composables underneath."
author: "coins5"
image:
  url: "/src/assets/images/series/cards-match-vue/04-ui-components.png"
  alt: "UI Components & Interaction"
tags: ["typescript", "nodejs", "vue", "games"]
nextPost: "series/cards-match-vue/05-images-settings"
serie: "cards-match-vue"
seriesPartNumber: 4
---

# Module 4 · UI Components & Interaction 🎨

With the game logic solid, the UI binds everything together. Vue Single File Components keep the markup expressive while reusing the composables underneath.

## App shell overview

`src/App.vue` wires the main composable, displays status chips, and renders the grid. Here is the setup script:

```vue
<script setup lang="ts">
import { ref } from "vue";
import CardItem from "./components/CardItem.vue";
import SettingsModal from "./components/SettingsModal.vue";
import ScoresList from "./components/ScoresList.vue";
import { useGame } from "./composables/useGame";
import GitHubBadge from "./components/GitHubBadge.vue";

const {
  settings,
  scores,
  deck,
  score,
  busy,
  gameOver,
  showStart,
  previewing,
  previewLeftMs,
  meta,
  previewMs,
  remaining,
  startNewGame,
  clickCard,
  restart,
  applySettings,
} = useGame();

const showSettings = ref(false);
</script>
```

- 🧩 All state is injected through `useGame`—components stay lean.
- ⚙️ A single `showSettings` ref toggles the modal visibility.

## Rendering the board

Inside the template, the deck renders with a classic `v-for`:

```vue
<div class="grid" :class="meta.gridClass">
  <CardItem
    v-for="(c, idx) in deck"
    :key="c.id"
    :flipped="c.flipped"
    :matched="c.matched"
    :image-url="c.imageUrl"
    :disabled="busy"
    @click="clickCard(idx)"
  />
</div>
```

- 🧱 `meta.gridClass` maps each difficulty to a responsive grid.
- ⛔ `busy` disables clicks during previews or while checking matches.

## CardItem highlights

Each card is a button-like component that reacts to props. Focus on accessibility and simple states:

```vue
<template>
  <button
    class="card"
    :class="{ flipped, matched }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <img v-if="flipped" :src="imageUrl" alt="Card image" />
    <span v-else>❓</span>
  </button>
</template>
```

- ♿ Using a `<button>` gives keyboard support out of the box.
- ✨ The component uses CSS transitions to flip cards smoothly.

## Settings modal magic

`SettingsModal.vue` keeps a temporary copy of the user selection, then emits `save` only when the player confirms:

```ts
const state = reactive({
  difficulty: props.difficulty,
  source: props.source,
  giphyApiKey: props.giphyApiKey ?? "",
  giphyQuery: props.giphyQuery ?? "cats",
});

function onSave() {
  emit("save", { ...state });
}
```

- 🔐 The modal re-syncs with props on every open to avoid stale data.
- 📤 A single emit hands updates back to the composable (`applySettings`).

## Scoreboard & footer

`ScoresList` receives a reactive `scores` array and renders recent runs. Pair it with the “Play again” button to encourage replays.

With components assembled, the user experience already feels polished. Next up: real personalization through settings and image sources! 🛠️
