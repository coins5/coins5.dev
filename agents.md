# ARCHIVO DE CONFIGURACIÓN Y DIRECTRICES: coins5.dev
Este archivo contiene las directrices estratégicas, comerciales, de diseño y desarrollo para **coins5.dev**. Todos los agentes y desarrolladores que trabajen en este repositorio deben seguir estas reglas estrictamente.

---

## 1. PROPÓSITO DEL SITIO Y ENFOQUE COMERCIAL (CRO)

El objetivo central del sitio es la conversión (CRO) orientada a la venta de servicios de desarrollo de software, transformando el portafolio estático en una herramienta activa de captación de clientes.

### 1.1. Audiencia Objetivo (Buyer Personas)
1. **Startups Tecnológicas Globales o Locales:**
   * **Perfil:** Fundadores, CEOs o CTOs que necesitan un MVP rápido, robusto y escalable para validar su mercado o presentar a rondas de inversión.
   * **Necesidad:** Velocidad, fiabilidad, código limpio y costo de infraestructura optimizado.
2. **Medianas Empresas Locales (Basadas en Lima):**
   * **Perfil:** Gerentes de operaciones, dueños de negocio o directores de TI que buscan digitalizar procesos, reducir costos operativos o automatizar canales de venta.
   * **Necesidad:** Soporte local, entendimiento de su mercado, automatización e integraciones sencillas.

### 1.2. Estrategia de Conversión (Call to Action - CTAs Principales)
Toda interfaz, sección y flujo de navegación debe orientar al usuario a realizar una de estas dos acciones:
* **CTA Primario (Global):** Agendar una llamada de descubrimiento de 15 minutos en Calendly.
* **CTA Secundario (Local/Rápido):** Iniciar una conversación directa en WhatsApp Business para cotizar un proyecto de software.

---

## 2. CONFIGURACIÓN DE INTERNACIONALIZACIÓN (Astro i18n)

El sitio utiliza la internacionalización nativa de Astro mediante prefijos de ruta en una estrategia *routeless* para el idioma por defecto.

### 2.1. Idiomas y Estrategia
* **Idioma por Defecto (`en`):** Se sirve directamente en la raíz (`/`). El tono debe ser técnico, sofisticado y de nivel C-Level (dirigido a fundadores y startups globales).
* **Idioma Secundario (`es`):** Se sirve bajo el prefijo `/es/`. El tono debe estar optimizado para el SEO local en Perú/Lima, resolviendo dolores específicos de digitalización empresarial y eficiencia operativa.

### 2.2. Estructura de Directorios Requerida
La estructura de archivos de la aplicación para soportar i18n y colecciones de contenido debe estructurarse estrictamente de la siguiente manera:

```bash
src/
├── components/       # Componentes globales y modulares compartidos
├── content/          # Colecciones de contenido (Markdown/MDX)
│   ├── blog/
│   │   ├── en/       # Entradas del blog en inglés
│   │   └── es/       # Entradas del blog en español
│   └── cases/
│       ├── en/       # Casos de estudio en inglés
│       └── es/       # Casos de estudio en español
└── pages/
    ├── index.astro   # Home en Inglés (coins5.dev/)
    ├── services.astro# Servicios en Inglés
    ├── cases/        # Contenedor de rutas dinámicas de casos en inglés
    ├── blog/         # Contenedor de rutas dinámicas del blog en inglés
    └── es/           # Directorio para la versión en Español
        ├── index.astro   # Home en Español (coins5.dev/es/)
        ├── services.astro# Servicios en Español
        ├── cases/        # Contenedor de rutas dinámicas de casos en español
        └── blog/         # Contenedor de rutas dinámicas del blog en español
```

---

## 3. PERFIL PROFESIONAL Y RESPALDO (COPYWRITING BASE)

### 3.1. Identidad de Marca
* **Nombre/Marca:** Coins5 / Marlon.
* **Rol:** Senior Full Stack Developer & Software Architect.

### 3.2. Propuesta de Valor Única (El Factor Senior + IA)
* **Definición:** Más de una década de experiencia aplicando criterio arquitectónico estricto (Clean Architecture, SOLID, diseño de sistemas modular y escalable) combinado con el uso avanzado y quirúrgico de herramientas de Inteligencia Artificial para acelerar, optimizar y testear el código.
* **Beneficio:** Esta sinergia permite reducir los costos de infraestructura y hosting al mínimo, disminuir el tiempo de entrega hasta 3 veces en comparación al desarrollo tradicional y entregar software altamente robusto y libre de bugs.

### 3.3. Casos de Éxito Clave (Pruebas de Respaldo)
1. **Strategio:**
   * **Logro:** Ex-CTO de la plataforma de Business Intelligence impulsada por IA (ganadora de la 2da generación de Startup Perú).
   * **Detalle Técnico:** Diseñé e implementé el sistema completo desde cero, permitiendo a los gerentes clasificar productos y generar reportes personalizados accesibles en dispositivos móviles.
2. **NubaNutrición ([nubanutricion.com](https://nubanutricion.com)):**
   * **Logro:** Implementación de modelos de IA aplicados a la salud.
   * **Detalle Técnico:** Extracción de insights a partir de datos clínicos de pacientes para automatizar el diseño de planes nutricionales dinámicos y adaptados a presupuestos económicos específicos.
3. **PróximaBolilla ([proximabolilla.com](https://proximabolilla.com)):**
   * **Logro:** Arquitectura cloud de alta disponibilidad y simulación masiva.
   * **Detalle Técnico:** Simulación masiva de jugadas de lotería (La Tinka) utilizando IA y ruido cósmico para emitir informes analíticos premium en tiempo real.

---

## 4. SISTEMA DE DISEÑO (Estética: Sandstone & Charcoal / Warm Dark)

Todos los componentes de interfaz de usuario deben adherirse al siguiente sistema visual utilizando Tailwind CSS y el UI Kit de **daisyUI**:

### 4.1. Paleta de Colores
* **Fondo Principal (`bg-base-100`):** `#141414` (Negro Carbón mate profundo. Aporta una textura premium. **Prohibido** usar negro puro `#000` o grises azulados).
* **Fondo de Secciones/Tarjetas (`bg-base-200`):** `#1C1C1C` (Gris Ceniza oscuro para crear capas visuales, elevación y separación clara al hacer scroll).
* **Texto Principal / Títulos (`primary` / `text-base-content`):** `#F5F5F4` (Blanco Hueso para un contraste de alta legibilidad, elegante y nítido).
* **Color de Acento / CTAs Críticos (`secondary` / `accent`):** `#E6DFD3` (Crema / Arena suave. Uso estrictamente quirúrgico: exclusivo para botones de conversión principales como el de Calendly. Se debe usar con texto oscuro para garantizar legibilidad).
* **Texto de Párrafos (`text-body`):** `#A8A29E` o `#CCCCCC` (Gris claro con un matiz cálido para garantizar una lectura cómoda sin fatiga visual).

### 4.2. Bordes, Sombras e Interacción
* **Formas y Bordes:** Bordes suavizados pero limpios (`rounded-lg` o `rounded-xl`).
* **Efectos Hover:** Las tarjetas deben incluir efectos hover sutiles para indicar interactividad:
  ```css
  /* Ejemplo conceptual de hover premium */
  .card-premium {
    @apply border border-transparent transition-all duration-300;
  }
  .card-premium:hover {
    @apply border-stone-500/30 shadow-lg;
  }
  ```
  *(En Tailwind: `hover:border-stone-500/30 transition-all border border-transparent`)*

### 4.3. Tipografía
* **Cuerpo y Lectura:** Fuentes sans-serif geométricas y ultra limpias.
* **Detalles Técnicos:** Fuentes mono (`font-mono`) reservadas estrictamente para pequeños tags técnicos, fragmentos de código o detalles de ingeniería.

---

## 5. DIRECTRICES DE OPTIMIZACIÓN Y SEO TÉCNICO (On-Page)

Cualquier cambio, adición o modificación en el código de las páginas del sitio debe cumplir con las siguientes directrices de SEO y performance:

### 5.1. Estructura de Metadatos y Layouts
Todas las páginas deben estar envueltas en un layout común que reciba un objeto de metadatos dinámico para inyectar en el HTML:
* **Título (`<title>`):** Longitud máxima de 60 caracteres. Debe contener la palabra clave principal y la marca. *Ejemplo:* `Custom AI Software & MVP Development | Coins5`.
* **Descripción (`<meta name="description">`):** Longitud máxima de 160 caracteres. Redacción persuasiva enfocada en el beneficio del cliente con un claro llamado a la acción.
* **Open Graph (OG):** Inclusión obligatoria de etiquetas `og:title`, `og:description` y `og:image` optimizadas para previsualizaciones premium en LinkedIn y X (Twitter).
* **SEO Internacional (Etiquetas Canónicas e Hreflang):**
  * Inyectar dinámicamente `<link rel="canonical" href="[URL_ACTUAL]" />`.
  * Configurar etiquetas de enlace alternativo cruzado (`<link rel="alternate" hreflang="..." href="..." />`) entre la versión en inglés y español para evitar penalizaciones por contenido duplicado.
  * *Ejemplo en la Home de inglés (`/`):*
    ```html
    <link rel="canonical" href="https://coins5.dev/" />
    <link rel="alternate" hreflang="en" href="https://coins5.dev/" />
    <link rel="alternate" hreflang="es" href="https://coins5.dev/es/" />
    <link rel="alternate" hreflang="x-default" href="https://coins5.dev/" />
    ```
  * *Ejemplo en la Home de español (`/es/`):*
    ```html
    <link rel="canonical" href="https://coins5.dev/es/" />
    <link rel="alternate" hreflang="en" href="https://coins5.dev/" />
    <link rel="alternate" hreflang="es" href="https://coins5.dev/es/" />
    <link rel="alternate" hreflang="x-default" href="https://coins5.dev/" />
    ```

### 5.2. Jerarquía Semántica
* Un único `<h1>` por página (reservado para la propuesta de valor principal en el Hero).
* Títulos de secciones secundarias estructurados con `<h2>`.
* Títulos internos de tarjetas, artículos o detalles estructurados con `<h3>`.
* Los textos no jerárquicos o estilizados no deben abusar de etiquetas de encabezado.

### 5.3. Rendimiento (PageSpeed 100)
* **Gestión de Imágenes:** Utilizar obligatoriamente el componente nativo `<Image />` de Astro (`astro:assets`).
* **Atributos Obligatorios:** Especificar dimensiones fijas (`width`, `height`), formato optimizado (`format="webp"` o `format="avif"`).
* **Estrategia de Carga:** Usar `loading="lazy"` para todas las imágenes ubicadas debajo del pliegue (below the fold). La imagen principal del Hero (above the fold) debe usar `loading="eager"` (o omitir lazy) para evitar retrasos en el LCP.
