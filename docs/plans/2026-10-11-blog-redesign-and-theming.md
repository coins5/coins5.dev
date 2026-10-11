# Plan de Implementación: Sistema Tipográfico, Tokyo Night y Rediseño Integral del Blog

> **Referencia:** Estándares definidos en [DESIGN.md](file:///Users/coins5/Projects/astro/coins5.dev/DESIGN.md), [ARCHITECTURE.md](file:///Users/coins5/Projects/astro/coins5.dev/ARCHITECTURE.md) y [POSTS_DESIGN.md](file:///Users/coins5/Projects/astro/coins5.dev/POSTS_DESIGN.md).

**Objetivo:** Resolver el problema crítico de contraste en bloques de código mediante Tokyo Night, establecer una estrategia tipográfica trifásica (Display, Sans, Mono) para todo el sitio, y reescribir por lotes los posts restantes aplicando el estándar editorial y CRO de alta conversión.

---

## Fase 1: Corrección de Contraste y Configuración de Tokyo Night

### Tarea 1.1: Configurar Shiki en Astro (`astro.config.mjs`)
- **Archivos:** `astro.config.mjs`
- **Acción:**
  - Configurar `markdown.shikiConfig` con el tema `tokyo-night`.
  - Habilitar `wrap: true` para evitar desbordamientos horizontales accidentales en pantallas estrechas.

### Tarea 1.2: Eliminar Conflicto CSS en Bloques de Código (`src/styles/global.css`)
- **Archivos:** `src/styles/global.css`
- **Acción:**
  - Remover la anulación forzada `background-color: var(--card-bg) !important;` en `.prose pre`, que pintaba el fondo de blanco en modo claro sobre sintaxis oscura.
  - Asegurar que `.prose pre` mantenga el fondo nativo de Tokyo Night (`#1a1b26`), con bordes sutiles `var(--card-border)` y soporte táctil para el botón de copiado.

---

## Fase 2: Estrategia Tipográfica Integral (3 Jerarquías)

### Tarea 2.1: Definición e Inyección de Fuentes en `src/layouts/Layout.astro`
- **Archivos:** `src/layouts/Layout.astro`, `src/styles/global.css`
- **Estrategia de 3 Fuentes:**
  1. **Display / Headings (`font-display`):** `Plus Jakarta Sans` (o `Geist Sans`) para títulos `H1`, `H2` y números de alto impacto con pesos 700/800 y tracking tight.
  2. **Reading / Body (`font-sans`):** `Inter` para párrafos, listas y navegación (optimizada para máxima legibilidad continua en pantallas retina y móviles).
  3. **Technical / Code (`font-mono`):** `JetBrains Mono` para bloques de código Shiki, badges, fechas, kickers de sección (`// KICKER`) y métricas monetarias (`<$50/mo`).
- **Implementación:**
  - Inyectar Google Fonts pre-conectadas con `display=swap` en `<head>` de `Layout.astro`.
  - Mapear variables semánticas en `@theme` de Tailwind v4 en `src/styles/global.css`.

### Tarea 2.2: Actualización de `DESIGN.md`
- **Archivos:** `DESIGN.md`
- **Acción:** Documentar formalmente la tríada tipográfica (Display, Sans, Mono) y los tokens CSS correspondientes.

---

## Fase 3: Replicación Editorial por Lotes en el Blog

Total de posts restantes: 26 artículos bilingües en `src/content/blog/es/` y `src/content/blog/en/`.
Se organizan en 4 lotes temáticos según los Buyer Personas:

### Lote 1: Adopción e Integración de IA para Empresas (Persona B)
- `ai-agents-business-automation.md` (Agentes en producción más allá de wrappers)
- `ai-api-latency-optimization-saas-architecture.md` (Optimización de latencia en APIs de IA)
- `resilient-web-scraping-data-pipelines.md` (Pipelines de datos y extracción para IA)

### Lote 2: Optimización de Costos, Rendimiento y Cloud (Persona A & B)
- `cloud-optimization-costs.md` (Reducción de costos de infraestructura)
- `database-indexing-query-optimization-costs.md` (Indexación y ahorro en DBs)
- `serverless-vs-dedicated-servers-infrastructure.md` (Serverless vs VPS)
- `dokploy-docker-vps-deployment-strategy.md` (Despliegues económicos con Dokploy)
- `hybrid-cloud-infrastructure-proxmox-docker.md` (Infraestructura híbrida)

### Lote 3: Arquitectura Limpia y Fundamentos Backend (Persona A: Startups)
- `why-clean-architecture-matters.md` (Clean Architecture y mantenibilidad)
- `monolith-vs-microservices-startup-strategy.md` (Monolito modular vs microservicios)
- `api-caching-strategies-redis-performance.md` (Estrategias de caché con Redis)
- `async-task-queues-api-performance-backend.md` (Colas de tareas en backend)
- `saas-multitenant-rbac-security-architecture.md` (Seguridad multitenant y RBAC)
- `secure-saas-architecture-data-privacy.md` (Privacidad y seguridad en SaaS)
- `supabase-rls-multitenant-security-architecture.md` (Row Level Security en Supabase)

### Lote 4: Frontend Moderno, Mobile & Metodología (Persona A & B)
- `astro-islands-architecture-performance-seo.md` (Astro Islands y SEO)
- `astro-vs-nuxt-frontend-performance.md` (Comparativa de rendimiento frontend)
- `fastapi-vs-nodejs-backend-performance.md` (FastAPI vs Node.js)
- `flutter-clean-architecture-scalable-mobile-apps.md` (Apps móviles con Flutter)
- `microfrontends-architecture-enterprise-scale.md` (Microfrontends a escala)
- `nosql-database-strategy-horizontal-scaling.md` (Escalado horizontal NoSQL)
- `sql-vs-nosql-scalable-architecture.md` (SQL vs NoSQL)
- `pragmatic-agile-software-delivery.md` (Entregas ágiles y pragmáticas)
- `production-observability-structured-logging.md` (Observabilidad y logs estructurados)
- `ci-cd-pipelines-automated-testing.md` (CI/CD y pruebas automatizadas)
- `scalable-websockets-realtime-architecture.md` (WebSockets en tiempo real)

---

## Fase 4: Verificación Integral, SEO y Auditoría (COMPLETADA)
- [x] Ejecutar `npm run build` tras cada lote para garantizar integridad de schemas Zod.
- [x] Auditar metadatos SEO: títulos ≤ 60 caracteres y descripciones ≤ 160 caracteres (54/54 artículos validados con 0 errores).
- [x] Verificar renderizado visual de Tokyo Night y tipografías en ambos modos (dark y light).
- [x] Ejecutar commits automáticos por lote bajo Conventional Commits (10 commits atómicos generados).
- [x] Catálogo completo de 27 artículos en español y 27 en inglés (54 en total) modernizado bajo el estándar editorial POSTS_DESIGN.md.

