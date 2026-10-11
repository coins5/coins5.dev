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

Para asegurar rigor técnico sin alucinaciones, inconsistencias de código ni saturación de CTAs, cada auditoría **debe completar obligatoriamente las siguientes 5 fases en orden estricto**:

```text
[Entrada: src/content/blog/en/[slug].md & es/[slug].md]
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ PASE 1: Auditoría de Código y Arquitectura (Nivel Staff)    │
│ • Zero-Trust Flow: RBAC/Tenant Gate ANTES de parsear Zod.   │
│ • Fail-Closed Auth: Retornar Forbidden genérico sin filtrar │
│   detalles de tenant/actor al modelo; alertar a auditoría.  │
│ • Contexto de seguridad creado server-side en sesión humana.│
│ • Blast-Radius Limits: Herramientas de solo lectura para    │
│   contenido no confiable + presupuesto de mutaciones/run.   │
│ • HITL Estricto: Excluir estados irreversibles ("Closed")   │
│   del tool directo; canalizarlos por propuestas con firma.  │
│ • Transacción atómica: SELECT FOR UPDATE, notas append-only,│
│   y registro de auditoría con antes/después y runId.        │
│ • Sincronía 1:1 entre el orden del diagrama y el código.    │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PASE 2: CRO, Fatiga de Conversión & Anti-AI-Slop            │
│ • Bloque ejecutivo TL;DR (3 bullets) tras el gancho inicial.│
│ • Pre-Flight Checklist de 5 puntos antes de la conclusión.  │
│ • CTA contextualizado al dolor específico del post.         │
│ • Control de saturación (1 CTA temático + 1 bio compacta).  │
│ • Voz coherente en primera persona plural ("En Coins5..."). │
│ • Cero emojis en texto o encabezados (norma DESIGN.md).     │
│ • Citas a estándares de la industria (OWASP Top 10 LLM).    │
│ • Métricas reales (Strategio en 12 semanas < $50/mo cloud). │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PASE 3: UI/UX, Responsive y Paridad Bilingüe                │
│ • Pipeline Stepper semántico con <ol>/<li> y flechas md+.   │
│ • Callout TL;DR sin comillas residuales de blockquote.      │
│ • Zona horaria UTC explícita para evitar desfase de fechas. │
│ • Formato de código seguro para móviles (sin scroll roto).  │
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
└──────────────────────────────┘
```

---

## 📋 Checklist Detallado de las 3 Pasadas

### PASE 1: Código y Arquitectura (Nivel Staff / CTO)
1. **Flujo Zero-Trust & Fail Closed (Auth ANTES de Esquema):**
   * El contexto de seguridad (`tenantId`, `actorId`, `permissions`, `runId`) **siempre se construye en el servidor a partir de la sesión autenticada del usuario humano**. Nunca proviene del LLM.
   * La autorización se evalúa **antes** de parsear con Zod para no filtrar esquemas a actores no autorizados.
   * Si la autorización falla, **se retorna `{ success: false, retryable: false, error: "Forbidden" }`**. Nunca lanzar excepciones no capturadas ni filtrar IDs o metadatos de tenant al modelo.
   * Se registra inmediatamente una alerta inmutable en el pipeline de auditoría (`auditLog.recordSecurityAlert`).
2. **Blast-Radius Limits (Límites del Radio de Impacto):**
   * **Separación de privilegios:** Mientras el agente procese contenido no confiable (emails, tickets, notas de CRM), solo dispone de herramientas de lectura. Las herramientas de escritura se habilitan únicamente en pasos con entradas validadas.
   * **Presupuesto por ejecución:** Como un agente inyectado puede invocar una herramienta individual 500 veces en bucle, el runtime impone un `budget.consumeMutation()` con circuit breaker.
   * **Idempotencia y Primary Keys:** Mutar exclusivamente por UUID único (`leadId: z.string().uuid()`) + `tenant_id`. Sin endpoints masivos.
3. **Aprobación Humana Obligatoria (HITL):**
   * Las transiciones irreversibles o de alto impacto (ej. cerrar cuentas, emitir desembolsos, borrar registros) **se excluyen deliberadamente de las herramientas de ejecución directa**.
   * Deben canalizarse a través de propuestas (`proposeAction`) que requieran confirmación humana explícita y autenticada (idealmente firmada).
4. **Transacciones Atómicas y Registro de Auditoría:**
   * Bloqueo de fila en transacción (`SELECT ... FOR UPDATE`) para capturar antes/después consistente.
   * Notas de solo adición (*append-only* en tabla separada) para evitar borrado adversarial de historial.
   * Registro de auditoría confirmado en la **misma transacción** que la mutación con `old_value`, `new_value`, `run_id` y argumentos propuestos.
5. **Manejo Consciente de Errores:**
   * Esquema inválido del LLM: Devolver mensaje de corrección estructurado (`retryable: true`) para autoreflexión.
   * Violación de seguridad: Devolver fallo fatal (`retryable: false`) genérico y alertar internamente.

---

### PASE 2: CRO, Fatiga de Conversión & Anti-AI-Slop
1. **Bloque Ejecutivo TL;DR:**
   * 3 bullets directos tras el gancho: *The Trap*, *Zero-Trust Architecture*, *Blast-Radius Limits*.
2. **Pre-Flight Checklist:**
   * Lista de 5 puntos técnicos clave antes de la sección de cierre para fijar la autoridad y transferir valor accionable al lector.
3. **Auditoría de CTAs (Evitar la fatiga):**
   * No saturar al lector con enlaces de venta descolocados en medio del clímax técnico.
   * El CTA final debe ser temático y contextualizado al dolor del artículo (mediante `ctaTitle` y `ctaDescription` en el frontmatter).
4. **Anti-AI-Slop Estricto:**
   * Eliminar palabras vacías (*landscape, leverage, robust, delve, seamless, faro, apalancar*).
   * Eliminar clichés de cierre (*"En resumen", "En conclusión"*).
   * Cero emojis en texto o encabezados (norma de `DESIGN.md`).
5. **Prueba sobre Promesa (Proof over Promise):**
   * Respaldar con métricas reales del portafolio (ej. la plataforma **Strategio** con costos cloud e inferencia < \$50/mes).
   * Matizar porcentajes: "hasta un 90% de ahorro en tokens prefijados con prompt caching en proveedores compatibles".
   * Respaldar el modelado de amenazas con estándares de la industria como el **OWASP Top 10 for LLM Applications**.

---

### PASE 3: UI/UX, Responsive y Paridad Bilingüe
1. **Pipeline de Arquitectura Visual:**
   * Usar tarjetas numeradas (`01` a `04`) dentro de `<ol>` y `<li>` semánticos en un contenedor `.not-prose`, con flechas de flujo en `md+`.
   * Tags y badges con tipografía legible (`text-xs`) y contraste nítido en fondo claro y oscuro.
2. **Formato Seguro y Limpieza CSS:**
   * Eliminar comillas residuales generadas por `blockquote::before` mediante `content: none !important`.
   * Formatear fechas con `timeZone: "UTC"` para evitar desfases de día en zonas horarias negativas (ej. UTC-5 Lima).
3. **Paridad Bilingüe:**
   * `en/`: Enfoque técnico de nivel C-Level y startups globales.
   * `es/`: Enfoque de eficiencia, digitalización y reducción de costos operativos para LATAM.

---

## 📐 Blueprint Estándar Requerido en Cada Post

Cada nuevo post debe estructurarse siguiendo esta anatomía obligatoria:

```markdown
---
title: "Título de Alto Impacto (<= 60 Caracteres)"
description: "Meta descripción orientada al beneficio (<= 160 Caracteres)"
pubDate: 2026-10-15
lang: "en" # o "es"
tags: [...]
keywords: [...]
ctaTitle: "Título Contextualizado al Dolor del Post"
ctaDescription: "Propuesta de valor clara para agendar una llamada de 15 min."
draft: false
---

> **TL;DR:**
> - **The Trap:** [El error técnico que cuesta dinero o seguridad]
> - **Zero-Trust Architecture:** [El flujo de producción: RBAC -> Validación -> DB Atómica]
> - **Blast-Radius Limits:** [Cuándo exigir Human-in-the-Loop y presupuesto de mutaciones]

## [El Conflicto / El Dolor Oculto]
[Gancho en 2-3 líneas sin clichés corporativos.]

## [La Arquitectura Correcta: Flujo y Ejecución]
[Pipeline Stepper 01 a 04 en HTML .not-prose con <ol>/<li> semántico]

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
[Conexión lógica con la oferta de Coins5 y transición fluida al CTA temático final]
```
