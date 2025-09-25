---
title: "Images, Settings & Personalization"
pubDate: 2025-09-22
description: "One of the coolest parts of Cards Match is how players can tweak difficulty and swap image sources on the fly. Let us explore the supporting composables."
author: "coins5"
image:
  url: "/src/assets/images/series/cards-match-vue/05-images-settings.png"
  alt: "Images, Settings & Personalization"
tags: ["typescript", "nodejs", "vue", "games"]
nextPost: "series/cards-match-vue/06-persistence-wrapup"
serie: "cards-match-vue"
seriesPartNumber: 5
---

# Module 5 · Images, Settings & Personalization 🛠️

One of the coolest parts of Cards Match is how players can tweak difficulty and swap image sources on the fly. Let us explore the supporting composables.

## Persisting user preferences

`useSettings.ts` keeps track of difficulty, source, and Giphy parameters, persisting everything to `localStorage`:

```ts
const STORAGE_SETTINGS = "cm-settings";

const DEFAULTS: Settings = {
  difficulty: "medium",
  source: "emoji",
  giphyApiKey: "",
  giphyQuery: "cats",
};

function load(): Settings {
  try {
    return {
      ...DEFAULTS,
      ...(JSON.parse(localStorage.getItem(STORAGE_SETTINGS) || "null") || {}),
    };
  } catch {
    return { ...DEFAULTS };
  }
}

export function useSettings() {
  const settings = reactive<Settings>(load());
  watch(
    settings,
    () => {
      localStorage.setItem(STORAGE_SETTINGS, JSON.stringify(settings));
    },
    { deep: true }
  );
  return { settings };
}
```

- 💾 Users keep their preferences across sessions without a backend.
- 🧪 `load()` merges defaults with stored values and survives JSON parse errors.

## Fetching image packs

`imageService.ts` decides whether to serve offline emojis or hit the Giphy API:

```ts
export async function getImages(settings: Settings, count: number) {
  if (settings.source === "emoji") {
    return EMOJI.slice(0, count).map((ch, i) => ({
      id: `emoji-${i}-${ch}`,
      url: emojiToDataUrl(ch),
    }));
  }

  try {
    const apiKey = (settings.giphyApiKey || "").trim();
    const q = encodeURIComponent(settings.giphyQuery || "cats");
    const limit = Math.min(Math.max(count, 1), 50);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${limit}&rating=g`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Giphy request failed");

    const data = await res.json();
    const unique = (data.data || [])
      .map((item: any) => ({
        id: item.id,
        url:
          item.images?.downsized_still?.url ||
          item.images?.fixed_width_still?.url ||
          item.images?.original_still?.url ||
          item.images?.preview_gif?.url ||
          item.images?.downsized?.url,
      }))
      .filter(Boolean);

    if (unique.length < count) throw new Error("Not enough images");
    return unique.slice(0, count);
  } catch (err) {
    console.warn("Falling back to emoji images:", err);
    return EMOJI.slice(0, count).map((ch, i) => ({
      id: `emoji-${i}-${ch}`,
      url: emojiToDataUrl(ch),
    }));
  }
}
```

- 🌐 Giphy support requires an API key, so always expose helpful UI copy in the modal.
- 🛟 Fallbacks ensure the game never breaks—even if the network or API fails.

## Applying new settings in real time

Back in `useGame`, saving from the modal triggers `applySettings`, which mutates the shared state and immediately starts another round:

```ts
function applySettings(s: Settings) {
  settings.difficulty = s.difficulty;
  settings.source = s.source;
  settings.giphyApiKey = s.giphyApiKey;
  settings.giphyQuery = s.giphyQuery;
  startNewGame();
}
```

- 🎯 Difficulty, source, and search terms all update at once.
- 🔄 Restarting the game keeps the UI aligned with the new configuration.

By the end of this module you can offer the perfect balance between offline reliability and flashy GIFs. Let us wrap the course with persistence and polish! ✨
