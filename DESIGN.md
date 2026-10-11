# Sistema de Diseño: coins5.dev
**Estética:** Sandstone & Charcoal (Warm Dark) & Sandstone Light (Warm Linen)  
**Propósito:** Conversión (CRO) de alto impacto para servicios de arquitectura de software y desarrollo acelerado con IA.

---

## 1. Filosofía Visual y Atmósfera (Anti-Slop Framework)

El diseño de **coins5.dev** se inspira en publicaciones editoriales de arquitectura y plataformas de ingeniería de clase mundial (Vercel, Linear, Stripe Press). Su atmósfera transmite rigor técnico senior, sobriedad y sofisticación.

### 1.1. Principios Anti-Cliché de IA
Los modelos de lenguaje poseen sesgos estadísticos hacia diseños genéricos. Este sistema impone reglas estrictas para romperlos:
* **Prohibición de "AI Lila/Cyan":** Quedan terminantemente prohibidos los fondos con gradientes violetas/cian, neones saturados o brillos morados de plantilla.
* **Prohibición de Negro Puro:** Prohibido usar negro absoluto (`#000000`). En su lugar se utiliza Carbón Mate Profundo (`#141414`), que aporta textura y calidez.
* **Prohibición de Blanco Clínico:** Prohibido usar blanco absoluto (`#FFFFFF`) para fondos generales en modo Light. Se utiliza Lino Cálido / Arena Suave (`#FBF9F5`), evitando fatiga visual.
* **Prohibición Absoluta de Emojis:** Prohibido el uso de emojis en títulos, textos, botones, metadatos o código. Toda la iconografía proviene exclusivamente de `lucide-astro`.
* **Prohibición de Meta-Labels Baratas:** Prohibido usar etiquetas vacías tipo "SECTION 01", "ABOUT US" o "QUESTION 05". Las etiquetas superiores deben ser técnicas y contextuales (ej. `// THE VALUE MULTIPLIER`, `// FLAGSHIP CASE STUDIES`).

---

## 2. Paleta de Colores y Tokens Semánticos

El sitio implementa un sistema de tokens adaptativo mediante variables CSS nativas vinculadas a los temas de **daisyUI** (`sandstone-charcoal` y `sandstone-light`).

### 2.1. Tabla Maestra de Tokens de Color

| Token CSS | Rol Funcional | Modo Dark (`sandstone-charcoal`) | Modo Light (`sandstone-light`) |
| :--- | :--- | :--- | :--- |
| `--color-base-100` | Fondo principal del viewport | `#141414` (Carbón Mate) | `#FBF9F5` (Lino Cálido / Papel) |
| `--color-base-200` | Superficies, tarjetas, paneles | `#1C1C1C` (Gris Ceniza) | `#FFFFFF` (Blanco Puro Elevado) |
| `--color-base-300` | Capas internas / bordes densos | `#262626` | `#F0ECE4` (Arena Suave) |
| `--color-heading` / `text-primary` | Títulos y texto de alto contraste | `#F5F5F4` (Blanco Hueso) | `#1C1917` (Deep Warm Charcoal) |
| `--color-text-body` | Párrafos y descripciones | `#A8A29E` (Stone 400 cálido) | `#57534E` (Stone 600 cálido) |
| `--color-secondary` | Acento quirúrgico de marca | `#E6DFD3` (Crema / Arena Soft) | `#292524` (Stone 800) |
| `--card-border` | Bordes en reposo de tarjetas | `rgba(120, 113, 108, 0.16)` | `rgba(214, 211, 209, 0.85)` |
| `--card-hover-border` | Bordes en estado hover | `rgba(230, 223, 211, 0.35)` | `rgba(41, 37, 36, 0.45)` |
| `--cta-primary-bg` | Fondo botón Calendly (Primario) | `#E6DFD3` (Crema Arena) | `#1C1917` (Deep Charcoal) |
| `--cta-primary-text` | Texto botón Calendly | `#141414` (Carbón) | `#FBF9F5` (Lino Hueso) |
| `--cta-secondary-bg` | Fondo botón WhatsApp | `rgba(28, 28, 28, 0.9)` | `#FFFFFF` (Blanco) |
| `--cta-secondary-text`| Texto botón WhatsApp | `#F5F5F4` (Blanco Hueso) | `#1C1917` (Charcoal) |
| `--cta-secondary-border`| Borde botón WhatsApp | `rgba(120, 113, 108, 0.25)` | `rgba(214, 211, 209, 0.95)` |
| `--ambient-glow` | Resplandor difuso de fondo | `rgba(230, 223, 211, 0.06)` | `rgba(214, 211, 209, 0.40)` |
| `--authority-bg` | Fondo de barra de prueba social | `#171717` | `#F4EFEA` |

---

## 3. Jerarquía Tipográfica y Espaciado

### 3.1. Tríada Tipográfica de Alta Fidelidad
El sistema implementa tres familias tipográficas estrictamente desacopladas:
* **Fuente Display / Titulares (`font-display`):** `Plus Jakarta Sans` (pesos 600, 700, 800). Reservada para `h1`, `h2`, `h3` principales y cifras de autoridad (`<$50/mo`, `12 sem`). Aporta geometría moderna, contundencia C-Level y tracking tenso (`-0.025em`).
* **Fuente de Lectura / Cuerpo (`font-sans`):** `Inter` (pesos 400, 500, 600). La reina de la legibilidad en pantallas. Proporciones abiertas y lectura relajada para párrafos del blog y descripciones sin fatiga visual en móviles.
* **Fuente Técnica / Código (`font-mono`):** `JetBrains Mono` (pesos 400, 500, 600). Bloques de código Shiki, badges, fechas, kickers de sección (`// THE VALUE MULTIPLIER`) y métricas técnicas. Elimina ambigüedad en caracteres y proporciona espaciado tabular.

### 3.2. Reglas de Encabezados (La Regla de Oro del Hero)
1. **Regla de 2 Líneas en el H1:** El título principal nunca debe comprimirse en un bloque estrecho de 4 a 6 líneas. Debe utilizar contenedores anchos (`max-w-5xl` o `max-w-6xl`) y un interlineado tenso (`leading-[1.08]`) para fluir horizontalmente en 2 (máximo 3) líneas.
2. **Jerarquía Semántica Estricta:**
   * Un único `<h1>` por página (reservado para la propuesta de valor en el Hero).
   * Títulos de sección en `<h2>` (`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight`).
   * Títulos de tarjetas en `<h3>` (`text-xl sm:text-2xl font-bold tracking-tight`).
   * Párrafos con longitud de lectura óptima (`max-w-2xl` a `max-w-3xl`, `leading-relaxed`).

---

## 4. Estructura de Conversión AIDA & Secciones

Toda página comercial del sitio debe estructurarse bajo el framework **AIDA**:

```
[A] Attention (Hero Section)
 ├── Live Availability Pill (indicador de estado con pulso esmeralda)
 ├── H1 Ultra-Wide (propuesta de valor de 2 líneas)
 ├── Subtítulo de beneficio concreto
 ├── Hub de Conversión Dual (Calendly Primario + WhatsApp Secundario)
 ├── Micro-tarjeta de Confianza del Fundador (Marlon + credenciales)
 └── AuthorityBar (4 métricas de validación en producción)

[I] Interest (Bento Grid 2.0: The Senior + AI Advantage)
 ├── Card 1: Clean Architecture × IA (diagrama de capas de dominio)
 ├── Card 2: -60% Costos Cloud por diseño (comparativa visual de costos)
 ├── Card 3: Trato Directo 1-a-1 con el Arquitecto (sin intermediarios)
 └── Card 4: Código listo para Due Diligence de Inversionistas

[D] Desire (Flagship Case Studies & Services)
 ├── Casos de Éxito Clave (Strategio, NubaNutrición, PróximaBolilla)
 ├── Modalidades de Trabajo (Startups 0-a-1 vs. Empresas 1-a-N)
 └── Tech Stack & Criterio Arquitectónico

[A] Action (Closing Conversion Chapter)
 └── Tarjeta panorámica con resplandor difuso, doble CTA y garantías de IP
```

---

## 5. Componentes, Geometría y Física Táctil

### 5.1. Geometría de Bordes
* **Contenedores y Tarjetas:** `rounded-2xl` (1rem) o `rounded-3xl` (1.5rem) para la tarjeta final de cierre.
* **Botones e Inputs:** `rounded-xl` (0.75rem).
* **Píldoras y Badges:** `rounded-full`.

### 5.2. Estilos de Elevación y Hover (`.card-premium`)
Las tarjetas no deben ser planas ni estáticas. Deben implementar la clase `.card-premium`:
* **Borde en reposo:** Sutil (1px con opacidad baja).
* **Hover:** Transición elástica (`cubic-bezier(0.16, 1, 0.3, 1)` en `0.3s`), realce de borde (`--card-hover-border`) y sombra difusa multidireccional.
* **Física de Botones:** En `:hover` escalado sutil (`scale-[1.02]`); en `:active` respuesta táctil de pulsado (`scale-[0.98]`).

### 5.3. Iconografía (`@lucide/astro`)
* Todos los iconos provienen obligatoriamente de `@lucide/astro`.
* Configuración estándar: `stroke-width="1.5"` para interfaces y tarjetas; `stroke-width="2"` para iconos dentro de botones de acción o viñetas de confirmación.
* Dimensiones: `w-4 h-4` para viñetas y enlaces; `w-5 h-5` para botones principales; `w-6 h-6` para cabeceras de servicio.

### 5.4. Bloques de Código: Patrón Terminal Card (Tokyo Night Permanente)
Para garantizar la máxima legibilidad y estética de ingeniería senior (al estilo Stripe, Linear y Supabase):
* **Fondo Fijo:** Los bloques de código (`.prose pre`) utilizan permanentemente el fondo carbón profundo de Tokyo Night (`#1a1b26`), **incluso en modo Sandstone Light**.
* **Contraste de Sintaxis:** Shiki compila con `theme: "tokyo-night"`, garantizando contraste perfecto sin desvanecimiento de caracteres.
* **Prohibición de Anulaciones CSS:** Queda terminantemente prohibido forzar fondos claros (`--card-bg: #fff`) sobre bloques `<pre>`.
* **Botón de Copiado Táctil:** Se posiciona en la esquina superior derecha con fondo translúcido (`rgba(26, 27, 38, 0.85)`), borde sutil y retroalimentación verde esmeralda al copiar.

---

## 6. Protocolo de Temas (Dark / Light Switcher)

El sitio utiliza una estrategia dual totalmente fluida:
* **Selector en el Navbar:** Botón con iconos dinámicos `Sun` y `Moon`.
* **Atributo HTML:** `<html data-theme="sandstone-charcoal">` o `<html data-theme="sandstone-light">`.
* **Script de Anti-Parpadeo (FOUC):** Inyectado de forma síncrona en `<head>` dentro de `Layout.astro`, leyendo `localStorage.getItem("theme")`.
* **Transición Global:** `body { transition: background-color 0.3s ease, color 0.3s ease; }` para un cambio suave entre temas.
