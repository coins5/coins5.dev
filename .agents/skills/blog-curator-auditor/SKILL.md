---
name: blog-curator-auditor
description: "Use when auditing, curating, or upgrading blog posts in coins5.dev with a 2-pass technical rigor, anti-AI-slop, and CRO verification workflow."
metadata:
  category: workflow
  triggers: audit blog, review post, curar entrada, auditar entrada, blog audit, blog curation
---

# Blog Curator & Technical Auditor: coins5.dev

Protocolo estandarizado para auditar, curar y refinar artículos del blog en **coins5.dev**. Garantiza que cada publicación cumpla con el estándar de un **Arquitecto de Software Senior & Staff Engineer**, eliminando contenido superficial ("AI-slop"), validando que el código sea de producción y optimizando la conversión (CRO).

---

## ⚡ Activación y Modo de Uso

Este workflow se ejecuta cada vez que el usuario solicite auditar o refinar una entrada:
* `"audita la entrada ai-agents-business-automation"`
* `"revisa el post [slug] con la skill de auditoría"`
* `"cura la siguiente entrada del blog"`

---

## 🔁 El Ciclo de Doble Verificación (2-Pass Verification Loop)

Para asegurar rigor máximo sin alucinaciones ni cambios apresurados, cada auditoría **debe completar obligatoriamente las siguientes 4 fases en orden estricto**:

```text
[Entrada: src/content/blog/en/[slug].md & es/[slug].md]
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 1: Auditoría Despiadada (CTO Devil's Advocate)         │
│ • Detectar promesas rotas vs código real.                   │
│ • Auditar si el código es "juguete" o "producción".         │
│ • Cazar clichés de IA, métricas sin fuente y verbosidad.   │
│ • Evaluar experiencia visual (bloques densos, legibilidad). │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 2: Triaje Pragmático (Grounding contra el Proyecto)     │
│ • Contrastar contra el archivo real y el sistema de diseño. │
│ • Descartar falsos positivos y artefactos de captura.        │
│ • Validar paridad y tono bilingüe (EN global vs ES local).  │
│ • Verificar factibilidad en Astro, TypeScript y Shiki.      │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 3: Propuesta y Puerta de Aprobación Humana (User Gate) │
│ • Presentar diagnóstico y plan de acción claro.             │
│ • Mostrar propuesta de código y diagramas antes de tocar.   │
│ • 🛑 DETENERSE Y ESPERAR LUZ VERDE DEL USUARIO.              │
└──────────────────────────────┬──────────────────────────────┘
                               │ (Aprobación explícita)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 4: Ejecución Quirúrgica y Auto-Commit                  │
│ • Aplicar cambios idénticos en arquitectura a en/ y es/.    │
│ • Verificar build limpio (`npm run build`).                 │
│ • Auto-commit Git bajo Conventional Commits.                │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Checklist de Auditoría (Fases Detalladas)

### FASE 1: Auditoría Despiadada (Perspectiva Externa)
Actúa como un CTO exigente o revisor técnico riguroso. Audita:
1. **La Promesa del Título vs. El Código:**
   * ¿El título promete "agentes autónomos" pero el código solo muestra una simple llamada a un LLM?
   * ¿Promete "alta concurrencia" pero no maneja *backpressure*, timeouts ni cuellos de botella?
2. **Realismo del Código (Proof over Promise):**
   * ¿Maneja autorización real (`tenant_id`, RBAC)? ¿O solo busca `id` en la BD?
   * ¿Usa consultas SQL parametrizadas y schemas estrictos (Zod)?
   * ¿Incluye manejo de fallos, `refusal`, idempotencia y observabilidad/tracing?
3. **Coherencia Editorial y Anti-AI-Slop:**
   * ¿La introducción promete cosas que el cuerpo del post no resuelve?
   * ¿Contiene palabras prohibidas (*landscape, leverage, robust, delve, seamless, faro, tapiz, apalancar*)?
   * ¿Las afirmaciones numéricas ("90% de ahorro", "3x más rápido") están debidamente condicionadas y respaldadas?
4. **Legibilidad y Diseño:**
   * ¿Hay un solo bloque de código de más de 30 líneas que ahogue al lector?
   * ¿Falta un diagrama visual que resuma la arquitectura en 5 segundos?
   * ¿Falta un micro-CTA intermedio para capturar conversiones antes del final?

---

### FASE 2: Triaje Pragmático y Grounding en el Proyecto
Confronta la crítica contra la realidad del repositorio:
1. **Verificar el archivo real:** Lee el archivo `.md` actual (no te bases solo en capturas previas o memoria).
2. **Descartar artefactos visuales:** No confundas barras de herramientas de macOS o recortes de captura con bugs de la web.
3. **Consistencia de Tokens de Diseño:** Todo estilo debe apegarse a `DESIGN.md` (Sandstone Dual Theme, Tokyo Night en bloques de código, sin emojis en texto).
4. **Paridad Bilingüe:** 
   * `en/`: Tono técnico sofisticado dirigido a fundadores y startups globales.
   * `es/`: Tono orientado a resolución de dolores de eficiencia y digitalización en medianas empresas de LATAM.

---

### FASE 3: Propuesta y Puerta de Aprobación (User Gate)
Presenta un reporte conciso estructurado:
1. **Diagnóstico Ejecutivo:** 3 a 5 puntos clave identificados.
2. **Propuesta Técnica:** El snippet de código corregido (separado en `❌ Frágil` y `✅ Producción`) y el diagrama de flujo ASCII/arquitectura.
3. **Propuesta Editorial:** Ajustes al hook de entrada y micro-CTA intermedio.
4. **Pregunta de Control:** Solicitar confirmación explícita del usuario antes de modificar archivos.

---

### FASE 4: Ejecución y Cierre Obligatorio
Una vez recibida la aprobación:
1. Actualizar simultáneamente `src/content/blog/en/[slug].md` y `src/content/blog/es/[slug].md`.
2. Mantener la estructura semántica de headings (H2 únicos, sin H1 en markdown).
3. Validar con `npm run build` que no existan errores de compilación ni advertencias de longitud en SEO.
4. **Git Commit Obligatorio:**
   ```bash
   git add .
   git commit -m "refactor(blog): curate and upgrade [slug] technical architecture and CRO"
   ```

---

## 📐 Estándares de Formato Requeridos en Cada Post

* **Comparativa de Código:** Bloques secuenciales Markdown:
  * `### ❌ Naive / Fragile Approach`
  * `### ✅ Production Architecture`
* **Diagramas de Arquitectura:** Tarjetas visuales de pipeline ("Architecture Pipeline Stepper" con contenedor `.not-prose`, pasos numerados `01` a `04`, descripciones de acción y badges de seguridad fail-safe).
* **Tiempo de Lectura:** Calculado automáticamente en `[slug].astro`.
* **Micro-CTA Intermedio:** Un bloque sutil de 2 líneas tras la arquitectura técnica enlazando a Calendly / WhatsApp.
