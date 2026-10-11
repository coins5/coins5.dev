# ARCHIVO DE CONFIGURACIÓN Y DIRECTRICES: coins5.dev
Este archivo contiene las directrices estratégicas de alto nivel para **coins5.dev**. Todos los agentes y desarrolladores que trabajen en este repositorio deben seguir estas reglas estrictamente.

---

## 1. FUENTES DE VERDAD DE REFERENCIA OBLIGATORIA (SOT)

Para mantener este archivo conciso y evitar el desperdicio de tokens, la documentación detallada se encuentra desacoplada en:
* 🎨 **[DESIGN.md](file:///Users/coins5/Projects/astro/coins5.dev/DESIGN.md):** Sistema de diseño completo, estética Sandstone & Charcoal / Sandstone Light, paleta de colores, tokens CSS, reglas tipográficas (H1 2-line rule), estructura AIDA y físicas táctiles.
* 🏗️ **[ARCHITECTURE.md](file:///Users/coins5/Projects/astro/coins5.dev/ARCHITECTURE.md):** Arquitectura Feature-Driven (Screaming Slices), límite de líneas por archivo (máximo 300–350 líneas), co-locación de `*.content.ts` para ahorro de tokens y contratos modulares.

---

## 2. PROPÓSITO DEL SITIO Y ENFOQUE COMERCIAL (CRO)

El objetivo central del sitio es la conversión (CRO) orientada a la venta de servicios de desarrollo de software, transformando el portafolio estático en una herramienta activa de captación de clientes.

### 2.1. Audiencia Objetivo (Buyer Personas)
1. **Startups Tecnológicas Globales o Locales:**
   * **Perfil:** Fundadores, CEOs o CTOs que necesitan un MVP rápido, robusto y escalable para validar su mercado o presentar a rondas de inversión.
   * **Necesidad:** Velocidad, fiabilidad, código limpio y costo de infraestructura optimizado.
2. **Medianas Empresas Locales (Basadas en Lima):**
   * **Perfil:** Gerentes de operaciones, dueños de negocio o directores de TI que buscan digitalizar procesos, reducir costos operativos o automatizar canales de venta.
   * **Necesidad:** Soporte local, entendimiento de su mercado, automatización e integraciones sencillas.

### 2.2. Estrategia de Conversión (Call to Action - CTAs Principales)
Toda interfaz, sección y flujo de navegación debe orientar al usuario a realizar una de estas dos acciones:
* **CTA Primario (Global):** Agendar una llamada de descubrimiento de 15 minutos en Calendly.
* **CTA Secundario (Local/Rápido):** Iniciar una conversación directa en WhatsApp Business para cotizar un proyecto de software.

---

## 3. CONFIGURACIÓN DE INTERNACIONALIZACIÓN (Astro i18n)

El sitio utiliza la internacionalización nativa de Astro mediante prefijos de ruta en una estrategia *routeless* para el idioma por defecto.

### 3.1. Idiomas y Estrategia
* **Idioma por Defecto (`en`):** Se sirve directamente en la raíz (`/`). Tono técnico, sofisticado y de nivel C-Level (dirigido a fundadores y startups globales).
* **Idioma Secundario (`es`):** Se sirve bajo el prefijo `/es/`. Tono optimizado para el SEO local en Perú/Lima, resolviendo dolores específicos de digitalización empresarial y eficiencia operativa.

### 3.2. Estructura de Directorios Requerida
```bash
src/
├── layouts/          # Layout principal, SEO y analítica
├── components/       # Primitivas globales (Navbar, Footer, AuthorityBar)
├── features/         # Módulos por feature (hero, bento, cases, services, stack, contact)
├── content/          # Colecciones de contenido Markdown/MDX
│   ├── blog/
│   │   ├── en/       # Entradas del blog en inglés
│   │   └── es/       # Entradas del blog en español
│   └── cases/
│       ├── en/       # Casos de estudio en inglés
│       └── es/       # Casos de estudio en español
└── pages/
    ├── index.astro   # Home en Inglés (coins5.dev/)
    ├── services.astro# Servicios en Inglés
    ├── cases/        # Rutas dinámicas de casos en inglés
    ├── blog/         # Rutas dinámicas del blog en inglés
    └── es/           # Versión en Español
        ├── index.astro   # Home en Español (coins5.dev/es/)
        ├── services.astro# Servicios en Español
        ├── cases/        # Rutas dinámicas de casos en español
        └── blog/         # Rutas dinámicas del blog en español
```

---

## 4. PERFIL PROFESIONAL Y RESPALDO (COPYWRITING BASE)

### 4.1. Identidad de Marca
* **Nombre/Marca:** Coins5 / Marlon.
* **Rol:** Senior Full Stack Developer & Software Architect.

### 4.2. Propuesta de Valor Única (El Factor Senior + IA)
* **Definición:** Más de una década de experiencia aplicando criterio arquitectónico estricto (Clean Architecture, SOLID, diseño de sistemas modular y escalable) combinado con el uso avanzado de herramientas de Inteligencia Artificial para acelerar, optimizar y testear el código.
* **Beneficio:** Esta sinergia permite reducir los costos de infraestructura al mínimo, disminuir el tiempo de entrega hasta 3 veces en comparación al desarrollo tradicional y entregar software altamente robusto y libre de bugs.

### 4.3. Casos de Éxito Clave (Pruebas de Respaldo)
1. **Strategio:**
   * **Logro:** Ex-CTO de la plataforma de Business Intelligence impulsada por IA (ganadora de la 2da generación de Startup Perú).
   * **Detalle Técnico:** Diseño e implementación de la plataforma analítica completa desde cero en 12 semanas, con costos en nube menores a $50/mes.
2. **NubaNutrición ([nubanutricion.com](https://nubanutricion.com)):**
   * **Logro:** Modelos de IA aplicados a la salud.
   * **Detalle Técnico:** Extracción de insights clínicos para automatizar el diseño de planes nutricionales adaptados a presupuestos específicos.
3. **PróximaBolilla ([proximabolilla.com](https://proximabolilla.com)):**
   * **Logro:** Arquitectura cloud de alta concurrencia y simulación masiva.
   * **Detalle Técnico:** Simulación de más de 1,000,000 de combinaciones en tiempo real usando IA y ruido cósmico para reportes predictivos.

---

## 5. LINEAMIENTOS TÉCNICOS Y SEO

* **Uso de astro-seo:** Metadatos, Open Graph, Twitter Cards y Canónicos gestionados estrictamente en `Layout.astro`.
* **Título (`<title>`):** Longitud máxima de 60 caracteres. En páginas paginadas (`/page/2/`), añadir obligatoriamente sufijo `- Page X` / `- Página X` para evitar contenido duplicado.
* **Descripción (`<meta name="description">`):** Longitud máxima de 160 caracteres.
* **Regla de H1 Único Semántico:** Cada página debe tener exactamente un `<h1>`. En artículos de blog y casos de estudio, el template `[slug].astro` genera el `<h1>` a partir del frontmatter `title`; por ende, los archivos Markdown (`.md`) deben iniciar con encabezados `##` (H2).
* **Consistencia Canónica de Trailing Slashes:** Configurado `trailingSlash: "always"`. Todo enlace interno (`Navbar`, `Footer`, componentes y contenido) debe terminar obligatoriamente en `/` para evitar redirecciones 301/308 innecesarias.
* **Páginas de Error y `noindex`:** Rutas como `404.astro` deben invocar `<Layout noindex={true}>` para emitir `<meta name="robots" content="noindex, follow">` y omitir etiquetas canónicas o variantes hreflang.
* **Open Graph y Schemas JSON-LD:** Las imágenes de vista previa social deben usar URLs absolutas y assets existentes en `public/` (ej. `default-preview.png` a 1200x630 px y `marlon.png`).
* **Consistencia de Slugs (i18n):** Archivos `.md` correspondientes al mismo artículo en `en/` y `es/` deben compartir exactamente el mismo nombre de archivo.
* **Rendimiento:** Imágenes con `<Image />` de `astro:assets`, formatos WebP, `loading="eager"` en el Hero y `loading="lazy"` bajo el pliegue.

---

## 6. AUTOMATIZACIÓN DE COMMITS (Git Workflow Obligatorio)

Cada vez que termines de crear, modificar o refinar un archivo, componente o configuración en el proyecto, estás obligado a realizar un commit automático de tus cambios utilizando la terminal de Antigravity. No debes esperar a que el usuario te lo pida. El flujo debe ser:
1. `git add .` (o el archivo específico).
2. `git commit -m "feat(agent): [Breve descripción en inglés]"` (o `fix:`, `docs:`, `refactor:` según Conventional Commits).
