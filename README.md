# coins5.dev — Senior Software Architecture & AI-Accelerated Development

Este es el repositorio oficial de **coins5.dev**, el portafolio profesional y plataforma de captación de clientes (CRO) de **Marlon** (Senior Full Stack Developer & Software Architect).

El sitio está desarrollado con **Astro 6** y diseñado bajo la estética **Sandstone & Charcoal / Warm Dark**, con sistema de internacionalización nativa, estrategia tipográfica de 3 jerarquías, resaltado de código Tokyo Night y un catálogo de contenidos optimizado para la conversión de alta retención.

---

## 📚 Fuentes de Verdad de Referencia (SOT)

Para mantener la consistencia entre agentes y desarrolladores, la documentación técnica y de diseño se encuentra desacoplada en:
* 🎨 **[DESIGN.md](file:///Users/coins5/Projects/astro/coins5.dev/DESIGN.md):** Sistema de diseño Sandstone & Charcoal, paleta de colores, tokens CSS, estrategia tipográfica de 3 niveles y estética terminal Tokyo Night.
* 🏗️ **[ARCHITECTURE.md](file:///Users/coins5/Projects/astro/coins5.dev/ARCHITECTURE.md):** Arquitectura Feature-Driven (Screaming Slices), límites de líneas por archivo (máximo 300–350 líneas) y contratos modulares.
* ✍️ **[POSTS_DESIGN.md](file:///Users/coins5/Projects/astro/coins5.dev/POSTS_DESIGN.md):** Estándar editorial del blog, copywriting persuasivo AIDA de alta retención ("efecto Medium"), filtro anti-AI-slop, esquemas Zod y hoja de ruta de publicaciones.
* 📋 **[AGENTS.md](file:///Users/coins5/Projects/astro/coins5.dev/AGENTS.md):** Directrices estratégicas, perfil profesional, reglas SEO y automatización de Git.

---

## 🚀 Propósito del Sitio y Enfoque Comercial (CRO)

El objetivo central del sitio es la conversión (CRO) orientada a la venta de servicios de desarrollo de software, transformando el portafolio estático en una herramienta activa de captación de clientes.

### 1.1. Estrategia de Conversión (Call to Action - CTAs Principales)
Toda interfaz, sección y flujo de navegación orienta al usuario a realizar una de estas dos acciones:
* **CTA Primario (Global):** Agendar una llamada de descubrimiento de 15 minutos en [Calendly](https://calendar.app.google/AbnPNcKVJyDnaU9z5).
* **CTA Secundario (Local/Rápido):** Iniciar una conversación directa en [WhatsApp Business](https://wa.me/51922913739) para cotizar un proyecto de software.

### 1.2. Audiencia Objetivo (Buyer Personas)
1. **Startups Tecnológicas Globales o Locales (Fase 0-a-1):** Fundadores, CEOs o CTOs que necesitan un MVP rápido, robusto y escalable para validar su mercado o presentar a rondas de inversión sin acumular deuda técnica fatal. Tono técnico, sofisticado y de nivel C-Level.
2. **Medianas Empresas Locales (Fase 1-a-N):** Gerentes de operaciones, dueños de negocio o directores de TI que buscan digitalizar procesos, integrar Inteligencia Artificial en flujos reales, reducir costos operativos en la nube o automatizar canales de venta.

### 1.3. Propuesta de Valor Única (El Factor Senior + IA)
Más de una década de experiencia aplicando criterio arquitectónico estricto (Clean Architecture, SOLID, diseño de sistemas modular y escalable) combinado con el uso avanzado y quirúrgico de herramientas de Inteligencia Artificial para acelerar, optimizar y testear el código. Esta sinergia permite reducir los costos de infraestructura al mínimo, disminuir el tiempo de entrega hasta 3 veces frente al desarrollo tradicional y entregar software altamente robusto y libre de bugs.

---

## 🛠️ Pila Tecnológica (Tech Stack)

* **Framework Principal:** [Astro 6.4+](https://astro.build/) (Static Site Generation - SSG)
* **Estilos & Diseño:** [Tailwind CSS v4](https://tailwindcss.com/) (con integración nativa mediante `@tailwindcss/vite`)
* **Kit de UI:** [daisyUI v5](https://daisyui.com/) (componentes semánticos y tokens accesibles)
* **Resaltado de Sintaxis:** [Shiki](https://shiki.style/) con tema **Tokyo Night** permanente (`#1a1b26`) y ajuste de línea automático (`wrap: true`)
* **Iconografía:** [@lucide/astro](https://lucide.dev/) (iconos vectoriales minimalistas y consistentes con trazo de 1.5–2px)
* **SEO & Metadatos:** [astro-seo](https://github.com/jonasmerlin/astro-seo) y `@astrojs/sitemap` (mapa de sitio automático)
* **Analíticas:** `@vercel/analytics` (monitoreo de rendimiento sin bloqueo del Main Thread)

---

## 🎨 Sistema de Diseño y Tipografía

### 3.1. Estrategia Tipográfica de 3 Jerarquías
1. **Display / Titulares (`font-display`):** `Plus Jakarta Sans` para encabezados principales (`H1`, `H2`) y números de impacto visual. Pesos 700/800 con tracking tight (`-0.025em`).
2. **Lectura / Cuerpo (`font-sans`):** `Inter` para párrafos, listas y navegación, optimizada para máxima legibilidad continua y baja fatiga visual.
3. **Técnico / Código (`font-mono`):** `JetBrains Mono` para bloques de código Shiki, badges, fechas, kickers (`// KICKER`) y métricas monetarias (`<$50/mo`).

### 3.2. Bloques de Código: Estética Terminal Tokyo Night
Para garantizar legibilidad absoluta tanto en modo claro como oscuro, los bloques de código utilizan permanentemente el tema **Tokyo Night** (`#1a1b26`) con estilo de tarjeta terminal:
* Borde sutil `var(--card-border)` con radio redondeado.
* Botón de copiado integrado con respuesta táctil y visual.
* Sin anulaciones de contraste en modo claro: el fondo oscuro terminal se preserva en todos los temas.

### 3.3. Paleta Sandstone & Charcoal (Warm Dark)
* **Fondo Principal (`bg-base-100`):** `#141414` (Negro Carbón mate profundo).
* **Fondo de Tarjetas (`bg-base-200`):** `#1C1C1C` (Gris Ceniza oscuro con elevación).
* **Texto Principal (`text-base-content`):** `#F5F5F4` (Blanco Hueso de alto contraste).
* **Acento / Conversión (`accent`):** `#E6DFD3` (Crema / Arena suave, exclusivo para CTAs críticos).
* **Texto de Cuerpo:** `#A8A29E` / `#CCCCCC` (Gris cálido de lectura relajada).

---

## ✍️ Estándar Editorial del Blog (Efecto Medium & CRO)

Todos los artículos del blog siguen el estándar formalizado en [POSTS_DESIGN.md](file:///Users/coins5/Projects/astro/coins5.dev/POSTS_DESIGN.md):
* **Fórmula AIDA Adaptada:** Atención (Cold-open de dolor real), Interés (Arquitectura y mecanismos), Deseo (Código de producción y ROI), Acción (CTA directo a Calendly o WhatsApp).
* **Cadencia de Lectura 1-2-1:** Párrafos de 1 a 3 oraciones para máxima escaneabilidad en dispositivos móviles, eliminando bloques de texto densos.
* **Filtro Anti-AI Slop:** Quedan prohibidos clichés como *delve, tapiz, paisaje tecnológico, faro*, conclusiones vacías y emojis en el cuerpo del texto.
* **Calidad de Código Real:** Cada artículo incluye un bloque de código funcional y tipado (TypeScript, Python, SQL, Dart o YAML).

---

## 🌐 Internacionalización (Astro i18n)

El sitio utiliza internacionalización nativa con estrategia *routeless* para el idioma por defecto:
* **Idioma por Defecto (`en`):** Servido en la raíz (`/`). Tono técnico C-Level para startups y fondos globales.
* **Idioma Secundario (`es`):** Servido bajo `/es/`. Optimizado para SEO local en Perú/Latam y empresas medianas.

> [!IMPORTANT]
> **Consistencia de Slugs (i18n Filenames):** Los archivos de contenido en `src/content/blog/en/` y `src/content/blog/es/` deben compartir **exactamente el mismo nombre de archivo** (ej. `building-mvps-2026.md`). Queda prohibido traducir el nombre del archivo para permitir el cambio de idioma fluido sin errores 404.

---

## 📂 Estructura de Directorios

```text
src/
├── assets/           # Imágenes y assets optimizados WebP
├── components/       # Primitivas globales (Navbar, Footer, AuthorityBar)
├── config.ts         # Datos de contacto globales (WhatsApp, Calendly)
├── content.config.ts # Definición de colecciones y esquemas Zod
├── content/          # Colecciones de contenido Markdown (54 artículos bilingües)
│   ├── blog/
│   │   ├── en/       # 27 artículos en inglés
│   │   └── es/       # 27 artículos en español
│   └── cases/
│       ├── en/       # Casos de estudio en inglés (Strategio, NutriMind, PróximaBolilla)
│       └── es/       # Casos de estudio en español
├── layouts/          # Layout principal (SEO, fuentes Google, analíticas)
├── styles/           # global.css (Tailwind v4, tokens @theme, estilos Tokyo Night)
└── pages/
    ├── index.astro   # Home en Inglés (coins5.dev/)
    ├── services.astro# Servicios en Inglés
    ├── cases/        # Casos de estudio en inglés (`[slug].astro`)
    ├── blog/         # Blog en inglés (`[slug].astro` y `[...page].astro`)
    └── es/           # Versión en Español
        ├── index.astro
        ├── services.astro
        ├── cases/
        └── blog/
```

---

## 📈 Quality Gates y SEO On-Page

* **Límite de Título:** `<title>` generado dinámicamente como `{title} | Coins5`. Longitud del frontmatter $\le 51$ caracteres (longitud final $\le 60$).
* **Límite de Descripción:** Meta description persuasiva $\le 160$ caracteres.
* **Regla de H1 Único:** Un solo `<h1>` por página (en artículos es generado por el template a partir del frontmatter; el cuerpo markdown siempre inicia con `##`).
* **Trailing Slashes Consistentes:** Configurado `trailingSlash: "always"` en Astro. Todos los enlaces internos terminan obligatoriamente en `/`.
* **Páginas 404 con noindex:** `<Layout noindex={true}>` emite `<meta name="robots" content="noindex, follow">` y omite variantes canónicas.

---

## 🧞 Comandos y Scripts

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala dependencias del proyecto. |
| `npm run dev` | Inicia servidor de desarrollo local en `http://localhost:4321`. |
| `npm run build` | Compilación estática de producción en `./dist/` (79 páginas). |
| `npm run preview` | Previsualiza localmente la compilación de producción. |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro (`astro check`, `astro sync`). |

---

## 🤝 Flujo de Trabajo Git (Git Workflow Obligatorio)

Cada vez que termines de crear, modificar o refinar un archivo, componente o configuración, debes realizar un commit automático usando **Conventional Commits**:

```bash
git add .
git commit -m "feat(agent): [Breve descripción en inglés]"
```

### Prefijos Permitidos:
* `feat:` Para nuevas funcionalidades, componentes o diseño visual.
* `refactor(blog):` Para modernización y actualización de artículos de blog.
* `fix:` Para corrección de lints, estilos o errores en la compilación de Astro.
* `docs:` Para documentación estratégica (`README.md`, `DESIGN.md`, `POSTS_DESIGN.md`).
