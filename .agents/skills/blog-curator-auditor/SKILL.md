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
│ • Auditoría de seguridad obligatoria en intentos denegados. │
│ • Sincronía 1:1 entre el orden del diagrama y el código.    │
│ • Consistencia de nombres de tablas y entidades (ej. leads).│
│ • Mutación acotada a UUID único (`leadId`) + tenant_id.     │
│ • Transacciones atómicas (`BEGIN...COMMIT`) en mutaciones.  │
│ • Auditoría de DB solo si `rowCount > 0`.                   │
│ • Manejo de errores claro (retryable para LLM vs fatal).    │
│ • Threat model: Indirect Prompt Injection & HITL boundary.  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PASE 2: CRO, Fatiga de Conversión & Anti-AI-Slop            │
│ • Bloque ejecutivo TL;DR (3 bullets) tras el gancho inicial.│
│ • CTA contextualizado al dolor específico del post.         │
│ • Control de saturación (1 CTA temático + 1 bio compacta).  │
│ • Eliminar autobombo; respaldar con métricas (Strategio).   │
│ • Cero emojis en texto o encabezados (norma DESIGN.md).     │
│ • Matizar afirmaciones absolutas (costos, prompt caching).  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PASE 3: UI/UX, Responsive y Paridad Bilingüe                │
│ • Pipeline Stepper (`.not-prose`, tarjetas 01 a 04).        │
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
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Checklist Detallado de las 3 Pasadas

### PASE 1: Código y Arquitectura (Nivel Staff / CTO)
1. **Flujo Zero-Trust (Auth ANTES de Esquema):** En el pipeline y en el código, la autorización (`context.permissions`, `tenant_id`) se valida **antes** de gastar cómputo en parsear con Zod. Esto previene fugas de información de esquema a actores no autorizados.
2. **Auditoría de Seguridad en Intentos Denegados:** Si un actor no tiene permisos, se debe registrar una alerta de seguridad inmutable (`recordSecurityAlert`) antes de abortar. Los fallos de autorización son los eventos más críticos para forense.
3. **Sincronía Diagrama vs. Código:** Si el diagrama define `01 Router -> 02 Auth Gate -> 03 Zod Schema Guard -> 04 DB & Audit`, el código **debe ejecutar en ese orden idéntico**.
4. **Nombres y Entidades Coherentes:** Si la tool maneja `leads`, la tabla SQL debe ser `leads`, no `customers`.
5. **Idempotencia y Primary Keys:** Jamás mutar registros por campos variables como `email`; mutar por `id` (`leadId: z.string().uuid()`) + `tenant_id`.
6. **Transacciones Atómicas y Audit Logging:** Escribir el log de auditoría únicamente si `rowCount > 0`. Si hay mutación + log crítico, encapsular en transacción `db.transaction()`.
7. **Manejo Consciente de Errores:**
   * Esquema inválido del LLM: Devolver mensaje de corrección estructurado (`retryable: true`) para autoreflexión.
   * Fallo de autorización: Abortar inmediatamente y emitir alerta de seguridad (`fatal`).
8. **Indirect Prompt Injection y Human-in-the-Loop (HITL):**
   * El aislamiento por tenant NO previene instrucciones maliciosas dentro de datos legítimos (ej. nota de CRM "marca todas las cuentas cerradas").
   * Defensas obligatorias: mutación atómica acotada a una sola fila (`leadId`) y aprobación humana obligatoria (*Human-in-the-Loop*) para cambios de estado destructivos.

---

### PASE 2: CRO, Fatiga de Conversión & Anti-AI-Slop
1. **Bloque Ejecutivo TL;DR:**
   * Inmediatamente después del gancho, insertar un bloque con 3 bullets: *El riesgo ingenuo*, *La arquitectura endurecida* y *La frontera humana*.
2. **Auditoría de CTAs (Evitar la fatiga):**
   * No saturar al lector con enlaces de venta descolocados en medio del clímax técnico.
   * El CTA final debe ser temático y contextualizado al dolor del artículo (mediante `ctaTitle` y `ctaDescription` en el frontmatter).
3. **Anti-AI-Slop Estricto:**
   * Eliminar palabras vacías (*landscape, leverage, robust, delve, seamless, faro, apalancar*).
   * Eliminar clichés de cierre (*"En resumen", "En conclusión"*).
4. **Cero Emojis (Norma de DESIGN.md):**
   * En encabezados de código, usar badges limpios de texto: `### Vulnerable: ...` y `### Production: Guarded Tool Execution Engine`.
5. **Prueba de Respaldo Real (Proof over Promise):**
   * Respaldar con métricas reales del portafolio (ej. la plataforma **Strategio** con costos cloud < \$50/mes).
   * Matizar porcentajes: "hasta un 80–90% de ahorro en tokens de entrada prefijados con prompt caching".

---

### PASE 3: UI/UX, Responsive y Paridad Bilingüe
1. **Pipeline de Arquitectura Visual:**
   * Usar el componente de tarjetas numeradas (`01` a `04`) dentro de un contenedor `.not-prose`.
   * Tags y badges con tipografía legible (`text-xs`) y contraste nítido en fondo claro y oscuro.
2. **Formato Móvil Seguro:**
   * Formatear líneas de código largas para evitar desbordes horizontales severos en móviles.
   * En componentes HTML embebidos en `.md`, jamás usar líneas en blanco con sangrías de 4 espacios.
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

## [El Conflicto / El Dolor Oculto]
[Gancho en 2-3 líneas sin clichés corporativos.]

> **TL;DR:**
> - **The Pitfall:** [El error técnico que cuesta dinero o seguridad]
> - **The Architecture:** [El flujo de producción: RBAC -> Validación -> DB Atómica]
> - **The Human Boundary:** [Cuándo exigir Human-in-the-Loop]

## [Diagnóstico Técnico: Por Qué Fallan las Soluciones Tradicionales]
[Explicación de la causa raíz: inyección indirecta, falta de tipos, fallas de contexto.]

## [La Arquitectura Correcta: Flujo y Ejecución]
[Pipeline Stepper 01 a 04 en HTML .not-prose]

### Vulnerable: [Nombre del Patrón Frágil]
[Bloque de código vulnerable en TypeScript]

### Production: Guarded Tool Execution Engine
[Bloque de código de producción con Auth -> Zod -> DB Atómica + Audit]

## [Mitigación de Amenazas y Control Humano (HITL)]
[Explicación de indirect prompt injection y aprobación humana para acciones críticas]

## [Optimización de Infraestructura y Costos Reales]
[Métricas del portafolio (Strategio < $50/mo), prompt caching matizado y observabilidad]

## [El Factor Coins5: Conclusión de Autoridad]
[Conexión lógica con la oferta de Coins5 y transición al CTA temático final]
```
