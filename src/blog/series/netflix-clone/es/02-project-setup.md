---
title: "Project Setup and Tailwind"
pubDate: 2025-09-04
description: "Create a Next.js App Router project and enable Tailwind with a dark, media‑friendly baseline."
author: "coins5"
image:
  url: "/src/assets/images/series/loguru/getting_started_wit_loguru.png"
  alt: "Project Setup and Tailwind"
tags: ["nextjs", "typescript", "clones"]
nextPost: "series/netflix-clone/es/03-data-model-and-catalog"
serie: "netflix-clone-es"
seriesPartNumber: 2
---

Objetivo: crear un proyecto Next.js con App Router y habilitar Tailwind con una base oscura.

### Crear el proyecto ⚡

```bash
npx create-next-app@latest next-netflix-clone \
  --typescript --eslint --src-dir --app --import-alias @/*
cd next-netflix-clone
```

### Tailwind (Next 15) 🎨

- Next 15 permite importar `@import "tailwindcss";` directamente en `globals.css`.

### `globals.css` mínimo 🎛️

```css
@import "tailwindcss";

/* Base oscura cinematográfica */
:root {
  color-scheme: dark;
}
body {
  background: #000;
  color: #fff;
}

/* Scrollbar delgada para filas */
* {
  scrollbar-width: thin;
  scrollbar-color: #444 transparent;
}
*::-webkit-scrollbar {
  height: 8px;
}
*::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 999px;
}
```

### Layout 🧩

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix Clone Demo",
  description: "Catálogo con videos locales y externos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

### Carpetas públicas 🗂️

```bash
mkdir -p public/videos public/posters public/subs
```

### Tips de TypeScript 🧰

```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

### Ejecutar ▶️

```bash
npm run dev
# http://localhost:3000
```

### Problemas comunes 🛠️

- No carga CSS → revisa que `globals.css` se importe en `layout.tsx`.
- No se ven imágenes → confirma que estén en `public/` y el path empiece con `/`.
