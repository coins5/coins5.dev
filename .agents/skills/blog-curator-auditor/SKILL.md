---
name: blog-curator-auditor
description: "Use when auditing, curating, or upgrading blog posts in coins5.dev with a strict 3-pass technical rigor, CRO, and anti-AI-slop verification workflow."
metadata:
  category: workflow
  triggers: audit blog, review post, curar entrada, auditar entrada, blog audit, blog curation
---

# Blog Curator & Technical Auditor: coins5.dev

Protocolo estandarizado para auditar, curar y refinar artículos del blog en **coins5.dev**. Garantiza que cada publicación cumpla con el estándar de un **Arquitecto de Software Senior & Staff Engineer**, eliminando contenido superficial ("AI-slop"), validando que el código sea de producción y optimizando la conversión (CRO) sin saturar al lector.

---

## ⚡ Activación y Modo de Uso

Este workflow se ejecuta cada vez que el usuario solicite auditar o refinar una entrada:
* `"audita la entrada ai-agents-business-automation"`
* `"revisa el post [slug] con la skill de auditoría"`
* `"cura la siguiente entrada del blog"`

---

## 🔁 El Ciclo de Triple Verificación (3-Pass Deep Verification Loop)

Para asegurar rigor máximo sin alucinaciones, inconsistencias de código ni saturación de CTAs, cada auditoría **debe completar obligatoriamente las siguientes 5 fases en orden estricto**:

```text
[Entrada: src/content/blog/en/[slug].md & es/[slug].md]
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ PASE 1: Auditoría de Código y Arquitectura (Nivel Staff)    │
│ • Sincronía 1:1 entre el orden del diagrama y el código.    │
│ • Consistencia de nombres de tablas y entidades (ej. leads).│
│ • Identificadores únicos (`id`/`uuid`) vs campos mutables.  │
│ • Transacciones atómicas (`BEGIN...COMMIT`) en mutaciones.  │
│ • Auditoría solo si `rowCount > 0`.                         │
│ • Manejo de errores claro (retryable vs fatal auth).        │
│ • Abordar Indirect Prompt Injection y Human-in-the-Loop.    │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PASE 2: CRO, Fatiga de Conversión & Anti-AI-Slop            │
│ • Control de saturación de CTAs (máx 1 CTA principal + bio).│
│ • CTA contextualizado al dolor del post (no genérico).      │
│ • Eliminar autobombo; priorizar métricas y trade-offs.      │
│ • Cero emojis en texto o encabezados (norma DESIGN.md).     │
│ • Matizar afirmaciones absolutas (costos, porcentajes).     │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PASE 3: UI/UX, Responsive y Paridad Bilingüe                │
│ • Contraste y tamaño de texto en cards del pipeline.        │
│ • Saltos de línea en código para evitar scroll en móvil.    │
│ • Cero indentación de 4 espacios dentro de bloques HTML.    │
│ • Paridad conceptual 1:1 entre versiones EN y ES.           │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 4: Propuesta y Puerta de Aprobación Humana (User Gate) │
│ • Diagnóstico consolidado con las 3 pasadas.                │
│ • Código y copy propuesto listo para revisión.              │
│ • 🛑 DETENERSE Y ESPERAR LUZ VERDE DEL USUARIO.              │
└──────────────────────────────┬──────────────────────────────┘
                               │ (Aprobación explícita)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 5: Ejecución Quirúrgica, Build y Auto-Commit           │
│ • Aplicar cambios idénticos en en/ y es/.                   │
│ • Verificar compilación limpia (`npm run build`).           │
│ • Auto-commit Git bajo Conventional Commits.                │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Checklist Detallado de las 3 Pasadas

### PASE 1: Código y Arquitectura (Nivel Staff / CTO)
1. **Sincronía Diagrama vs. Código:** Si el diagrama define `01 Router -> 02 Zod Guard -> 03 Auth Gate -> 04 DB & Audit`, el código **debe ejecutar en ese orden idéntico**.
2. **Entidades y Nombres Coherentes:** Si la tool maneja `leads`, la tabla SQL debe ser `leads`, no `customers`.
3. **Idempotencia y Primary Keys:** Jamás mutar registros por campos variables como `email` si pueden repetirse; mutar por `id` (`leadId: z.string().uuid()`) + `tenant_id`.
4. **Transacciones y Audit Logging:** Escribir el log de auditoría únicamente si `rowCount > 0`. Si hay mutación + log crítico, encapsular en transacción.
5. **Manejo Consciente de Errores:**
   * Esquema inválido del LLM: Devolver mensaje de corrección para reintento (`retryable: true`).
   * Fallo de autorización: Abortar inmediatamente y emitir alerta de seguridad (`fatal`).
6. **Vulnerabilidades Modernas:** Explicar cómo la arquitectura neutraliza la **inyección indirecta de prompts** (*indirect prompt injection*) y cuándo requerir aprobación humana (*human-in-the-loop*).

---

### PASE 2: CRO, Fatiga de Conversión & Anti-AI-Slop
1. **Auditoría de CTAs (Evitar la fatiga):**
   * No interrumpir el clímax de lectura técnica con citas/links de venta descolocados.
   * El CTA final no debe ser genérico (*"Ready to scale?"*), sino específico al dolor del artículo (*"¿Preparando tus agentes para producción? Audita tu arquitectura"*).
2. **Anti-AI-Slop Estricto:**
   * Eliminar palabras vacías (*landscape, leverage, robust, delve, seamless, faro, apalancar*).
   * Eliminar clichés de cierre (*"En resumen", "En conclusión"*).
3. **Cero Emojis (Norma de DESIGN.md):**
   * Reemplazar `### ❌` y `### ✅` por badges limpios de texto: `### Vulnerable: ...` y `### Production: ...`.
4. **Criterio Senior:**
   * Matizar porcentajes: "hasta un 80–90% de ahorro en tokens de entrada con prompt caching".

---

### PASE 3: UI/UX, Responsive y Paridad Bilingüe
1. **Legibilidad Móvil:**
   * Tags y badges de pipeline deben tener tipografía legible (`text-xs`) y contraste nítido en fondo claro y oscuro.
   * Formatear líneas de código largas para evitar desbordes horizontales severos en pantallas de 375px.
2. **Sintaxis Markdown Segura:**
   * En componentes HTML embebidos en `.md`, jamás usar líneas en blanco con sangrías de 4 espacios (evita que CommonMark cree bloques de código no deseados).
3. **Paridad Bilingüe:**
   * `en/`: Enfoque técnico de nivel C-Level y startups globales.
   * `es/`: Enfoque de eficiencia, digitalización y reducción de costos operativos para LATAM.

---

## 📐 Estándares de Formato Requeridos en Cada Post

* **Comparativa de Código:** Bloques secuenciales sin emojis:
  * `### Vulnerable: Naive Direct Wrapper`
  * `### Production: Guarded Agentic Tool Loop`
* **Diagramas de Arquitectura:** Tarjetas visuales de pipeline ("Architecture Pipeline Stepper" con contenedor `.not-prose`, pasos numerados `01` a `04`, descripciones de acción y badges de seguridad fail-safe).
* **Tiempo de Lectura:** Calculado automáticamente en `[slug].astro`.
* **CTA Principal:** Tarjeta de conversión al final contextualizada al dolor del artículo.
