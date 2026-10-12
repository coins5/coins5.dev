# DIRECTRICES EDITORIALES Y DE REDACCIÓN: POSTS_DESIGN.md
**Propósito:** Definir el estándar editorial, la arquitectura de persuasión (CRO), las reglas de legibilidad y la hoja de ruta de contenidos para los artículos de **coins5.dev**.

---

## 1. Tesis Comercial y Buyer Personas

El blog no es un repositorio de apuntes académicos ni un agregador de tutoriales genéricos. Es un **activo de conversión de alto valor** diseñado para posicionar a **Marlon / Coins5** como el Arquitecto de Software y socio técnico definitivo.

### 1.1. Audiencias Objetivo y Ángulos de Ataque
1. **Fundadores y Emprendedores (Startups 0-a-1):**
   * **Perfil:** Tienen una idea de negocio validada o capital pre-semilla, pero carecen de perfil técnico profundo.
   * **Dolor Principal:** Miedo a ser estafados por agencias infladas, recibir código basura inmantenible o gastar \$30k en un MVP que tarda 8 meses y se cae con 100 usuarios.
   * **Ángulo Editorial:** Velocidad pragmática, arquitectura limpia desde el día 1, ahorro de costos en infraestructura y código listo para *due diligence* técnico ante inversionistas.
2. **Empresas Medianas y Directores de Operaciones (Empresas 1-a-N):**
   * **Perfil:** Gerentes de TI, dueños de negocio o directores de operaciones que buscan modernizar procesos mediante Inteligencia Artificial.
   * **Dolor Principal:** Escepticismo ante "chatbots de juguete" que alucinan, fugas de datos sensibles en APIs públicas y facturas cloud impredecibles.
   * **Ángulo Editorial:** Agentes de IA en producción, seguridad estricta, integración con bases de datos heredadas/ERPs, y control de costos quirúrgico con modelos híbridos.

---

## 2. Las 7 Reglas de Oro de Estilo Editorial (El Factor Medium)

Para retener al lector en los primeros 15 segundos y guiarlo hasta la conversión, cada post debe cumplir estas 7 directrices:

### Regla 1: El Gancho Inmediato (Primeras 3 Líneas)
* **Prohibido:** Empezar con introducciones escolares o corporativas (*"En el mundo tecnológico actual...", "La inteligencia artificial ha revolucionado..."*).
* **Obligatorio:** Entrar de golpe en el conflicto, una cifra dolorosa o una verdad contraintuitiva.
* *Ejemplo:* *"El 70% de los presupuestos de startups en etapa temprana se evapora rehaciendo el código que una agencia 'rápida' entregó sin arquitectura tres meses atrás."*

### Regla 2: Ritmo Visual y Greedy Eye Flow (Cadencia 1-2-1)
* Párrafos de **máximo 3 líneas**. Nunca presentes bloques densos de 6 o más líneas que asfixien la lectura en dispositivos móviles.
* Alterna intencionalmente oraciones de impacto de una sola línea con párrafos cortos explicativos.

### Regla 3: Subtítulos H2 que Cuentan la Historia
* Si un visitante solo hace scroll rápido leyendo los encabezados `##`, debe entender la tesis central del artículo y llevarse una conclusión valiosa.
* Evita encabezados vagos como *## Introducción* o *## Conclusiones*. Usa encabezados con tesis activa (ej. *## De Chatbots Frágiles a Agentes con Validación Zod*).

### Regla 4: Anti-AI-Slop Estricto (Prohibición de Clichés Sintéticos)
* Elimina palabras infladas que denotan texto autogenerado: *landscape, leverage, robust, delve, testament to, seamless, streamlining, pivotal, tapiz, faro, apalancar*.
* Prohibidas las conclusiones genéricas que comienzan con *"En resumen"*, *"En conclusión"* o reflexiones filosóficas vacías.
* Prohibido el uso de emojis en todo el texto y encabezados (norma de `DESIGN.md`).

### Regla 5: Prueba sobre Promesa (Proof over Promise)
* Cada afirmación técnica debe respaldarse con:
  1. Un bloque de código conciso y tipado en TypeScript/SQL.
  2. Una comparativa arquitectónica concreta (ej. "Enfoque Frágil vs. Enfoque Producción").
  3. Datos o métricas reales del portafolio (Strategio, NubaNutrición, PróximaBolilla, costos < \$50/mes).

### Regla 6: Voz de Arquitecto Senior y Criterio de Trade-offs
* No vendas "balas de plata". Un profesional senior demuestra autoridad explicando **cuándo NO usar una tecnología** y qué compromisos técnicos implica cada decisión.

### Regla 7: El Puente Natural a la Conversión (CRO Integrado)
* No limites la venta a un banner frío al final. Inserta **micro-menciones de autoridad** orgánicas a mitad del artículo.
* Inserta un **micro-CTA intermedio** (1-2 líneas) inmediatamente después de la solución arquitectónica técnica para lectores de alta intención que no completan el scroll.
* El cierre debe conectar lógicamente con la oferta de Coins5: si el lector entendió la complejidad de hacerlo bien, la conclusión natural es delegarlo en un especialista senior.

### Regla 8: Formato de Código y Diagramación Visual
* **Bloques de Código Secuenciales:** Nunca agrupes comparativas en un solo bloque gigante. Divide siempre en dos bloques etiquetados sin emojis:
  * `### Vulnerable: [Enfoque Frágil / Naive Wrapper]`
  * `### Production: Guarded Tool Execution Engine` (o Arquitectura Segura)
* **Pipeline de Arquitectura Visual:** En artículos que expliquen pipelines de datos, flujos de ejecución o agentes, incluye un componente visual de tarjetas conectadas ("Architecture Pipeline Stepper" con contenedor `.not-prose`, pasos numerados `01` a `04` y badges de seguridad) para máxima legibilidad ejecutiva y diseño 100% responsivo en móviles.
* **Tiempo de Lectura Automático (`readingTime`):** Se calcula automáticamente a nivel de plantilla en `[slug].astro` dividiendo las palabras del body entre 200 PPM. No debe especificarse en el frontmatter.

---

## 3. Anatomía Estándar de un Post en coins5.dev

Todo archivo en `src/content/blog/en/` y `src/content/blog/es/` sigue esta estructura exacta:

```markdown
---
title: "Título de Alto Impacto (Máximo 60 Caracteres)"
description: "Meta descripción orientada al dolor y beneficio del usuario (Máximo 160 caracteres)."
pubDate: 2026-10-15
lang: "es" # o "en"
tags: ["Arquitectura de Software", "IA en Producción", "MVPs"]
keywords: ["consultor software startups", "arquitecto ia lima", "desarrollo mvp"]
ctaTitle: "Título Contextualizado al Dolor del Post" # Opcional: sobreescribe el CTA genérico
ctaDescription: "Propuesta de valor clara para agendar una llamada de 15 min."
draft: false
---

## [El Conflicto / El Dolor Oculto]
[Gancho en 2-3 líneas sin clichés corporativos.]

> **TL;DR:**
> - **The Trap:** [El error técnico que cuesta dinero o seguridad]
> - **Zero-Trust Architecture:** [El flujo de producción: RBAC fail-closed -> Validación -> DB Atómica]
> - **Blast-Radius Limits:** [Herramientas mínimas para datos no confiables + presupuesto de mutaciones + HITL]

## [El Conflicto / El Dolor Oculto]
[Gancho en 2-3 líneas sin clichés corporativos.]

## [La Arquitectura Correcta: Flujo y Ejecución]
[Pipeline Stepper 01 a 04 en HTML .not-prose con <ol>/<li> semántico y flechas en md+]

### Vulnerable: [Nombre del Patrón Frágil]
[Bloque de código vulnerable en TypeScript]

### Production: Guarded Tool Execution Engine
[Bloque de código de producción con Auth fail-closed -> Zod -> DB Atómica + Audit con runId]

## [Modelado de Amenazas: Inyecciones y Límites del Radio de Impacto]
[Explicación de indirect prompt injection, OWASP Top 10 for LLM, presupuesto por run y HITL]

## [Impacto Comercial y Optimización de Costos]
[Métricas del portafolio (Strategio < $50/mo), prompt caching matizado ("hasta 90%") y observabilidad]

## [Lista de Verificación Previa al Despliegue con Escritura]
[Checklist de 5 puntos antes de otorgar acceso de escritura al agente]

## [El Factor Coins5: Conclusión de Autoridad]
[Prueba de autoridad en primera persona plural ("En Coins5, combinamos...") y transición fluida a la conversión]
```

---

## 4. Hoja de Ruta Editorial Priorizada (Content Roadmap)

### Bloque A: Fundadores y Startups (Captación de MVPs & Lead Architecture)
1. **`building-mvps-without-technical-debt`**
   * *Título ES:* Cómo Diseñar un MVP sin Deuda Técnica Mortal
   * *Tesis:* Cómo lanzar en semanas con Clean Architecture para no rehacer todo tras levantar capital.
2. **`technical-due-diligence-checklist-startups`**
   * *Título ES:* Due Diligence Técnico: Lo que un Inversionista Revisa en tu Código
   * *Tesis:* Qué audita un VC en tu arquitectura y cómo evitar que una mala auditoría tumbe tu ronda.
3. **`fullstack-vs-specialized-team-mvp-cost`**
   * *Título ES:* Desarrollador Senior + IA vs. Agencia: Costos Reales de un MVP
   * *Tesis:* Análisis financiero de por qué un equipo de 5 juniors cuesta 3x más y entrega 2x más lento que un arquitecto con IA.

### Bloque B: Empresas Medianas y Corporativos (Adopción Práctica de IA)
1. **`enterprise-rag-architecture-zero-data-leaks`**
   * *Título ES:* RAG Seguro: Integrando IA a tu Base de Datos sin Fugas
   * *Tesis:* Cómo conectar modelos LLM a datos confidenciales sin que la información viaje a servidores públicos.
2. **`ai-agent-cost-reduction-prompt-caching`**
   * *Título ES:* Cómo Reducir 80% de Costos en APIs de IA con Caching y Modelos Híbridos
   * *Tesis:* Estrategias de enrutamiento semántico y prompt caching para mantener facturas por debajo de \$100/mes.
3. **`automating-internal-operations-ai-agents`**
   * *Título ES:* 3 Procesos Operativos que una Empresa Puede Automatizar con IA
   * *Tesis:* Casos de uso de alto ROI: procesamiento de órdenes, validación de facturas y soporte nivel 1 automatizado.

---

## 5. Automatización de Publicaciones con Antigravity

Para mantener un ritmo constante de publicación sin fricción manual, se aprovecha el motor de agentes y tareas programadas:

```
[Cron / Schedule en Antigravity]
         │
         ▼
[1. Research & Keyword Audit]
   (Auditoría de intenciones de búsqueda B2B y tendencias de mercado)
         │
         ▼
[2. Drafting & Code Synthesis]
   (Generación en Markdown bilingüe siguiendo POSTS_DESIGN.md)
         │
         ▼
[3. Anti-AI-Slop & Quality Gate]
   (Filtro estricto contra clichés, verificación de <60 y <160 caracteres)
         │
         ▼
[4. Git Auto-Commit & Deploy]
   (Commit automático bajo Conventional Commits y despliegue a producción)
```
