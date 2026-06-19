# coins5.dev — Senior Software Architecture & AI-Accelerated Development

Este es el repositorio oficial de **coins5.dev**, el portafolio profesional y plataforma de captación de clientes (CRO) de **Marlon** (Senior Full Stack Developer & Software Architect).

El sitio está desarrollado con **Astro 6** y diseñado bajo una estética personalizada de alto nivel, con soporte de internacionalización nativa y optimizado para una conversión rápida y eficiente.

---

## 🚀 Propósito del Sitio y Enfoque Comercial (CRO)

El objetivo central del sitio es la conversión (CRO) orientada a la venta de servicios de desarrollo de software, transformando el portafolio estático en una herramienta activa de captación de clientes.

### 1.1. Estrategia de Conversión (Call to Action - CTAs Principales)
Toda interfaz, sección y flujo de navegación orienta al usuario a realizar una de estas dos acciones:
*   **CTA Primario (Global):** Agendar una llamada de descubrimiento de 15 minutos en [Calendly](https://calendar.app.google/AbnPNcKVJyDnaU9z5).
*   **CTA Secundario (Local/Rápido):** Iniciar una conversación directa en [WhatsApp Business](https://wa.me/51922913739) para cotizar un proyecto de software.

### 1.2. Audiencia Objetivo (Buyer Personas)
1.  **Startups Tecnológicas Globales o Locales:** Fundadores, CEOs o CTOs que necesitan un MVP rápido, robusto y escalable para validar su mercado o presentar a rondas de inversión. Tono técnico, sofisticado y de nivel C-Level.
2.  **Medianas Empresas Locales (Basadas en Lima):** Gerentes de operaciones, dueños de negocio o directores de TI que buscan digitalizar procesos, reducir costos operativos o automatizar canales de venta.

### 1.3. Propuesta de Valor Única (El Factor Senior + IA)
Más de una década de experiencia aplicando criterio arquitectónico estricto (Clean Architecture, SOLID, diseño de sistemas modular y escalable) combinado con el uso avanzado y quirúrgico de herramientas de Inteligencia Artificial para acelerar, optimizar y testear el código. Esta sinergia permite reducir los costos de infraestructura y hosting al mínimo, disminuir el tiempo de entrega hasta 3 veces en comparación al desarrollo tradicional y entregar software altamente robusto y libre de bugs.

---

## 🛠️ Pila Tecnológica (Tech Stack)

*   **Framework Principal:** [Astro 6.4+](https://astro.build/) (Static Site Generation - SSG)
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (con integración nativa mediante `@tailwindcss/vite`)
*   **Kit de UI:** [daisyUI v5](https://daisyui.com/) (para componentes semánticos y limpios)
*   **Iconografía:** [@lucide/astro](https://lucide.dev/) (iconos vectoriales minimalistas y consistentes)
*   **SEO:** [astro-seo](https://github.com/jonasmerlin/astro-seo) (gestión avanzada y dinámica de metadatos) y `@astrojs/sitemap` (mapa de sitio automático)
*   **Analíticas:** `@vercel/analytics` (monitoreo de rendimiento e interacción sin impacto en el Main Thread)

---

## 🌐 Internacionalización (Astro i18n)

El sitio utiliza la internacionalización nativa de Astro mediante prefijos de ruta en una estrategia *routeless* para el idioma por defecto.
*   **Idioma por Defecto (`en`):** Se sirve directamente en la raíz (`/`). El tono es técnico, sofisticado y de nivel C-Level (dirigido a fundadores y startups globales).
*   **Idioma Secundario (`es`):** Se sirve bajo el prefijo `/es/`. El tono está optimizado para el SEO local en Perú/Lima, resolviendo dolores específicos de digitalización empresarial y eficiencia operativa.

> [!IMPORTANT]
> **Consistencia de Slugs en Contenidos (i18n Filenames):** Al crear entradas para el Blog o Casos de Éxito, los archivos de contenido (.md o .mdx) correspondientes al mismo artículo en diferentes idiomas **deben llamarse exactamente igual** (ej. `src/content/blog/mi-articulo.md` y `src/content/blog/es/mi-articulo.md`). Queda estrictamente prohibido traducir el nombre del archivo, ya que el sistema i18n depende de la coincidencia exacta de los slugs para alternar idiomas en la interfaz sin generar errores 404.

---

## 📂 Estructura de Directorios Requerida

El código está organizado de la siguiente manera para dar soporte a la internacionalización y colecciones de contenido:

```text
src/
├── assets/           # Imágenes y assets optimizados
├── components/       # Componentes globales y modulares compartidos (Hero, Navbar, Footer, Services)
├── config.ts         # Configuración global del sitio (WhatsApp, Calendly, email)
├── content.config.ts # Definición de colecciones y validación estricta de esquemas (Zod)
├── content/          # Colecciones de contenido (Markdown/MDX)
│   ├── blog/
│   │   ├── en/       # Entradas del blog específicas en inglés (como building-mvps-2026.md)
│   │   └── es/       # Entradas del blog en español
│   └── cases/
│       ├── en/       # Casos de estudio en inglés (Strategio, NutriMind, PróximaBolilla)
│       └── es/       # Casos de estudio en español
├── layouts/          # Plantilla común de páginas (Layout.astro con SEO y analíticas inyectados)
└── pages/
    ├── index.astro   # Home en Inglés (coins5.dev/)
    ├── services.astro# Servicios en Inglés
    ├── cases/        # Contenedor de rutas dinámicas de casos en inglés (`[slug].astro`)
    ├── blog/         # Contenedor de rutas dinámicas del blog en inglés (`[slug].astro` y `[...page].astro`)
    └── es/           # Directorio para la versión en Español
        ├── index.astro   # Home en Español (coins5.dev/es/)
        ├── services.astro# Servicios en Español
        ├── cases/        # Contenedor de rutas dinámicas de casos en español
        └── blog/         # Contenedor de rutas dinámicas del blog en español
```

---

## 🏆 Casos de Éxito Clave (Pruebas de Respaldo)

1.  **Strategio:**
    *   **Logro:** Ex-CTO de la plataforma de Business Intelligence impulsada por IA (ganadora de la 2da generación de Startup Perú).
    *   **Detalle Técnico:** Diseño e implementación del sistema completo desde cero, permitiendo a los gerentes clasificar productos y generar reportes personalizados accesibles en dispositivos móviles.
2.  **NubaNutrición ([nubanutricion.com](https://nubanutricion.com)):**
    *   **Logro:** Implementación de modelos de IA aplicados a la salud.
    *   **Detalle Técnico:** Extracción de insights a partir de datos clínicos de pacientes para automatizar el diseño de planes nutricionales dinámicos y adaptados a presupuestos económicos específicos.
3.  **PróximaBolilla ([proximabolilla.com](https://proximabolilla.com)):**
    *   **Logro:** Arquitectura cloud de alta disponibilidad y simulación masiva.
    *   **Detalle Técnico:** Simulación masiva de jugadas de lotería utilizando IA y ruido cósmico para emitir informes analíticos premium en tiempo real.

---

## 🎨 Sistema de Diseño (Estética: Sandstone & Charcoal / Warm Dark)

Todos los componentes de interfaz de usuario se adhieren al siguiente sistema visual utilizando Tailwind CSS y el UI Kit de **daisyUI**:

*   **Fondo Principal (`bg-base-100`):** `#141414` (Negro Carbón mate profundo. Aporta una textura premium. **Prohibido** usar negro puro `#000` o grises azulados).
*   **Fondo de Secciones/Tarjetas (`bg-base-200`):** `#1C1C1C` (Gris Ceniza oscuro para crear capas visuales, elevación y separación clara al hacer scroll).
*   **Texto Principal / Títulos (`primary` / `text-base-content`):** `#F5F5F4` (Blanco Hueso para un contraste de alta legibilidad, elegante y nítido).
*   **Color de Acento / CTAs Críticos (`secondary` / `accent`):** `#E6DFD3` (Crema / Arena suave. Uso estrictamente quirúrgico: exclusivo para botones de conversión principales como el de Calendly. Se usa con texto oscuro para garantizar legibilidad).
*   **Texto de Párrafos (`text-body`):** `#A8A29E` o `#CCCCCC` (Gris claro con un matiz cálido para garantizar una lectura cómoda sin fatiga visual).

### Bordes, Sombras e Interacción
*   **Formas y Bordes:** Bordes suavizados pero limpios (`rounded-lg` o `rounded-xl`).
*   **Efectos Hover:** Las tarjetas incluyen efectos hover sutiles para indicar interactividad mediante transiciones e incrementos ligeros de brillo en los bordes.
*   **Tipografía:** Fuentes sans-serif geométricas y ultra limpias para el cuerpo, y fuentes mono (`font-mono`) reservadas estrictamente para pequeños tags técnicos, fragmentos de código o detalles de ingeniería.
*   **Íconos Consistentes:** Trazo minimalista (`stroke-width="1.5"` o `2`) usando componentes de `lucide-astro`. Queda prohibido el uso de emojis o SVGs externos mal optimizados.

---

## 📈 Lineamientos Técnicos y SEO On-Page

*   **Estructura de Metadatos y Layouts:**
    *   Toda la gestión de metadatos, Open Graph, indexación y palabras clave se procesa estrictamente a través de la librería `astro-seo` dentro de `Layout.astro`.
    *   **Título (`<title>`):** Longitud máxima de 60 caracteres.
    *   **Descripción (`<meta name="description">`):** Longitud máxima de 160 caracteres. Redacción persuasiva enfocada en el beneficio.
    *   **SEO Internacional (Etiquetas Canónicas e Hreflang):** Inyección dinámica de `<link rel="canonical" href="..." />` y enlaces alternativos cruzados (`hreflang="en"` y `hreflang="es"`) para evitar penalizaciones por contenido duplicado.
*   **Jerarquía Semántica:** Un único `<h1>` por página (reservado para el Hero). Títulos secundarios con `<h2>` y terciarios con `<h3>`.
*   **Gestión de Rendimiento (Lighthouse 100):**
    *   Utilizar obligatoriamente el componente nativo `<Image />` de Astro (`astro:assets`) con dimensiones fijas (`width`, `height`) y formatos optimizados (`format="webp"` o `format="avif"`).
    *   Estrategia de carga diferida (`loading="lazy"`) para imágenes below-the-fold, y `loading="eager"` (o sin lazy) para la imagen principal del Hero.
    *   Uso de delegación de eventos en JS nativo ejecutado en tiempo de inactividad (`requestIdleCallback`) para el trackeo de analíticas en CTAs, manteniendo un score de interactividad perfecto (INP/FID).

---

## 🧞 Comandos y Scripts

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias necesarias. |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:4321`. |
| `npm run build` | Compila el sitio estático optimizado para producción en `./dist/`. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro (ej. `astro check` o `astro add`). |

---

## 🤝 Flujo de Trabajo Git (Git Workflow)

Para mantener la automatización y consistencia del proyecto, cada vez que se finalice o refine un archivo, componente o configuración, se debe realizar un commit automático usando Conventional Commits:

```bash
git add .
git commit -m "feat(agent): [Breve descripción en inglés de lo realizado]"
```

### Prefijos Permitidos:
*   `feat(agent):` Para nuevas funcionalidades, páginas, componentes o artículos de blog/casos.
*   `fix(agent):` Para corrección de lints, errores en compilación de Astro o bugs visuales.
*   `docs(agent):` Para actualizaciones de documentación (ej. cambios en este README.md).
