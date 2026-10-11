# Arquitectura de Software & Guía de Desarrollo: coins5.dev
**Propósito:** Minimizar el consumo de tokens de agentes de IA, prevenir la degradación de contexto, asegurar modularidad extrema y desacoplar responsabilidades.

---

## 1. Diagnóstico y Filosofía de Arquitectura

Para que los agentes de IA (como Antigravity) y desarrolladores humanos puedan modificar, extender y mantener este proyecto con máxima velocidad y cero fricción, la arquitectura debe resolver tres problemas fundamentales:
1. **Consumo excesivo de tokens:** Leer archivos monolíticos de 400+ líneas para cambiar una sola frase o color es ineficiente y propenso a alucinaciones.
2. **Acoplamiento de contenido y presentación:** Mezclar diccionarios de traducción en el mismo archivo `.astro` que el maquetado HTML infla el contexto innecesariamente.
3. **Falta de visibilidad de dominio (Generic Components):** Una carpeta `components/` plana donde coexisten componentes globales, secciones de la home y micro-widgets oscurece la intención del código.

---

## 2. Compatibilidad: Screaming Feature-Driven Architecture en Astro

Astro utiliza un compilador estático con dos convenciones fijas obligatorias:
* `src/pages/`: Enrutamiento estático basado en archivos.
* `src/content/`: Colecciones de contenido Markdown/MDX con validación Zod.

Dentro de este marco, el proyecto adopta una **Screaming Feature-Driven Architecture** que organiza el código por **dominios de negocio / features** y no por tipos genéricos de archivo:

```bash
src/
├── assets/                  # Imágenes y assets estáticos optimizados
├── config.ts                # Configuración global comercial (URLs, WhatsApp, etc.)
├── content.config.ts        # Esquemas Zod para colecciones de Astro
├── content/                 # Colecciones de contenido (blog, cases)
├── layouts/                 # Layouts globales (Layout.astro, SEO, Analytics)
├── styles/                  # Estilos globales y tokens de diseño
│   └── global.css           # Temas daisyUI, tokens semánticos y utilidades
├── components/              # Primitivas globales y shell compartido
│   ├── Navbar.astro         # Barra de navegación global
│   ├── Footer.astro         # Pie de página global
│   └── AuthorityBar.astro   # Barra de métricas de autoridad transversal
├── features/                # SCREAMING DOMAIN SLICES (Módulos independientes)
│   ├── hero/                # Feature: Hero de alto impacto
│   │   ├── Hero.astro       # Maquetado visual (< 150 líneas)
│   │   └── hero.content.ts  # Diccionario de textos EN / ES (< 50 líneas)
│   ├── bento/               # Feature: Bento Grid de Valor (Senior + IA)
│   │   ├── ValueBento.astro # Grid de 12 columnas (< 200 líneas)
│   │   └── bento.content.ts # Textos y capas arquitectónicas (< 60 líneas)
│   ├── cases/               # Feature: Casos de estudio destacados
│   │   ├── FeaturedCases.astro
│   │   └── cases.content.ts
│   ├── services/            # Feature: Modalidades de trabajo (Startups vs Empresas)
│   │   ├── Services.astro
│   │   └── services.content.ts
│   ├── stack/               # Feature: Stack arquitectónico por dominios
│   │   ├── TechStack.astro
│   │   └── stack.content.ts
│   └── contact/             # Feature: Cierre de conversión AIDA
│       ├── CtaSection.astro
│       └── cta.content.ts
└── pages/                   # Thin Route Controllers (< 30 líneas cada uno)
    ├── index.astro          # Home EN (orquesta features)
    └── es/
        └── index.astro      # Home ES (orquesta features)
```

---

## 3. Las Reglas de Oro del Código para Agentes de IA

### 3.1. Límite Estricto de Líneas (300–350 Líneas Máximo)
* **Regla Inquebrantable:** Ningún archivo en este repositorio debe superar las **350 líneas de código**.
* **Umbral de Alerta:** Si un archivo alcanza las **250 líneas**, el agente está obligado a descomponerlo en submódulos atómicos antes de continuar.
* **Beneficio para la IA:** Permite lecturas (`view_file`) y reemplazos (`replace_file_content`) quirúrgicos en un solo paso, eliminando errores de truncamiento de contexto.

### 3.2. Desacoplamiento de Contenido (`*.content.ts`)
* Queda prohibido hardcodear diccionarios extensos de traducción o datos estáticos directamente dentro del frontmatter de un archivo `.astro`.
* Todo texto, etiqueta o lista de características se extrae a un archivo co-localizado `[feature].content.ts`.
* **Ejemplo Práctico:**
  ```typescript
  // src/features/hero/hero.content.ts
  export interface HeroContent {
    status: string;
    role: string;
    h1: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  }

  export const heroContent: Record<"en" | "es", HeroContent> = {
    es: {
      status: "Disponible para proyectos selectos",
      role: "Senior Software Architect",
      h1: "Arquitectura de Software y MVPs de Alto Impacto, Acelerados con IA.",
      // ...
    },
    en: {
      status: "Available for select projects",
      role: "Senior Software Architect",
      h1: "Architecting High-Performance Systems & MVPs, Accelerated by AI.",
      // ...
    }
  };
  ```
  *Cuando el usuario solicite un cambio de copy, el agente solo lee y edita este archivo de 35 líneas, ahorrando más del 80% de tokens.*

### 3.3. Estilos Reutilizables en CSS vs. Clases Tailwind en Línea
* **Layout y Estructura:** Usar clases Tailwind estándar para flexbox, grids, paddings y breakpoints (`max-w-7xl mx-auto px-4 py-20`).
* **Estilos Repetitivos de Componentes:** Prohibido encadenar 20 clases idénticas en múltiples etiquetas. Deben encapsularse en `src/styles/global.css` mediante clases semánticas:
  * `.card-premium`: Bordes adaptables, fondo por token, transición hover.
  * `.glow-sandstone`: Sombra difusa vinculada a `--ambient-glow`.
* **Tokens de Color:** Usar siempre variables CSS de tema (`var(--color-text-body)`, `var(--card-bg)`, `var(--cta-primary-bg)`), garantizando compatibilidad automática con el tema Light y Dark.

### 3.4. Thin Pages (Páginas como Orquestadores Delgados)
Las páginas en `src/pages/` deben ser meros orquestadores que no contienen lógica ni maquetado profundo. Su extensión no debe superar las **30 líneas**:
```astro
---
import Layout from "../layouts/Layout.astro";
import Hero from "../features/hero/Hero.astro";
import ValueBento from "../features/bento/ValueBento.astro";
import FeaturedCases from "../features/cases/FeaturedCases.astro";
import Services from "../features/services/Services.astro";
import TechStack from "../features/stack/TechStack.astro";
import CtaSection from "../features/contact/CtaSection.astro";
---

<Layout
  title="Custom AI Software & MVP Architecture | Coins5"
  description="Build high-performance MVPs and scalable software with AI velocity..."
  lang="en"
>
  <Hero />
  <ValueBento />
  <FeaturedCases />
  <Services />
  <TechStack />
  <CtaSection />
</Layout>
```

### 3.5. Contratos Técnicos de SEO y Enrutamiento Canónico
Para garantizar 100/100 en salud SEO e indexación estricta por motores de búsqueda:
* **Jerarquía de Encabezados (Regla del H1 Único):** Todo template `[slug].astro` inyecta automáticamente el `<h1>` con `{entry.data.title}`. Por tanto, los archivos Markdown (`.md`) dentro de `src/content/` deben comenzar estrictamente con `## ` (H2), garantizando un único H1 semántico por página.
* **Enrutamiento y Trailing Slash (`/`):** El proyecto aplica `trailingSlash: "always"` en `astro.config.mjs`. Todo enlace interno `<a href="...">` en `Navbar`, `Footer`, componentes de feature o contenidos Markdown debe incluir la barra final (ej. `/services/`, `/cases/`, `/blog/${slug}/`).
* **Directiva `noindex` en Rutas de Error:** La plantilla `404.astro` y cualquier ruta no indexable deben invocar `<Layout noindex={true}>`, impidiendo la indexación accidental (Soft 404) y suprimiendo etiquetas canónicas o variantes hreflang en dichas rutas.
* **Metadatos Dinámicos en Paginación:** Rutas paginadas (`[...page].astro`) deben concatenar `- Page ${page.currentPage}` al título y descripción a partir de la página 2 para prevenir advertencias de metadatos duplicados.
* **Activos Sociales y Schemas:** La tarjeta social por defecto debe residir en `public/default-preview.png` (1200x630 px) y las imágenes de `Person` / `Organization` en `public/marlon.png` como URLs absolutas (`${siteUrl}/...`).

---

## 4. Desacoplamiento de `AGENTS.md`

Para evitar que `AGENTS.md` crezca sin control, se establece una clara separación de responsabilidades en tres documentos:

1. **`AGENTS.md` (Orquestación & Directrices de Alto Nivel):**
   * Enfoque comercial (CRO, buyer personas, propuesta de valor de Marlon).
   * Estrategia de internacionalización nativa de Astro.
   * Regla de commits automáticos de Antigravity.
   * *Punteros explícitos a `DESIGN.md` y `ARCHITECTURE.md`.*
2. **`DESIGN.md` (La Fuente de Verdad Visual):**
   * Paletas de color exactas, tokens semánticos, contrastes.
   * Regla tipográfica del H1 (2 líneas, ultra-wide).
   * Framework AIDA, Bento Grids y física de micro-interacciones.
   * Protocolo de Dark / Light themes.
3. **`ARCHITECTURE.md` (La Fuente de Verdad del Código):**
   * Estructura de directorios Feature-Driven.
   * Límites de líneas por archivo (300–350 líneas).
   * Co-locación de `*.content.ts`.
   * Estándares de rendimiento y flujo de trabajo modular.

---

## 5. Protocolo de Flujo de Trabajo y Commits Autónomos

Cada vez que un agente de IA termine de crear, modificar o refinar un archivo o componente en el repositorio:
1. Ejecutar verificación de compilación (`ASTRO_TELEMETRY_DISABLED=1 npm run build`).
2. Verificar que no existan advertencias de SEO (título $\le 60$ caracteres, descripción $\le 160$ caracteres).
3. Realizar commit automático con formato Conventional Commits:
   ```bash
   git add .
   git commit -m "feat(agent): [Breve descripción en inglés]"
   # o fix(agent): ..., docs(agent): ..., refactor(agent): ...
   ```
