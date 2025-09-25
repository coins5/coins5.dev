---
title: "Environment Setup"
pubDate: 2025-09-19
description: "Let us make sure your tooling is ready so you can iterate quickly without surprises."
author: "coins5"
image:
  url: "/src/assets/images/series/cards-match-vue/02-environment.png"
  alt: "Environment Setup"
tags: ["typescript", "nodejs", "vue", "games"]
nextPost: "series/cards-match-vue/03-game-logic"
serie: "cards-match-vue"
seriesPartNumber: 2
---

# Module 2 · Environment Setup 🧰

Let us make sure your tooling is ready so you can iterate quickly without surprises.

## Requirements

- 🟢 Node.js 18 or newer
- 📦 npm (ships with Node)
- ✍️ A comfortable editor (VS Code, WebStorm, Neovim… you decide!)

Verify your versions:

```bash
node -v
npm -v
```

If you use `nvm` or `fnm`, set the proper Node version before continuing.

## Essential scripts

The `package.json` already exposes the commands you will use daily:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview"
}
```

- `npm run dev` → starts the blazing-fast Vite dev server with hot module replacement.
- `npm run build` → outputs an optimized bundle to `dist/` using `tsc` for type checks.
- `npm run preview` → spins up a static server so you can experience the production build.

## Project layout

```text
src/
 ├─ components/        # Vue SFCs for UI pieces
 ├─ composables/       # Game logic and reusable state stores
 ├─ style.css          # Global styles and board layout rules
 └─ main.ts            # Application bootstrap
```

Keep the `composables/` directory in your sights—we will spend a lot of time there.

## Pro tips

- 💡 Install the official Vue extension for syntax highlighting, IntelliSense, and devtools integration.
- 🛡️ Enable strict TypeScript options to catch mistakes early.
- 🔁 Run `npm run build` every now and then to ensure the production bundle stays healthy.

With a smooth workflow in place, you are ready to dive into the brain of the game. Onward! 🧠
