export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface AdvantageBox {
  badge: string;
  step: string;
  title: string;
  desc: string;
  painLabel: string;
  painSolved: string;
}

export interface ServicesPageContent {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: ServiceStep[];
  };
  advantage: {
    title: string;
    subtitle: string;
    boxes: AdvantageBox[];
  };
}

const contentEn: ServicesPageContent = {
  hero: {
    pill: "B2B Software Development & MVPs",
    title: "Production-Ready Software Built to Adapt.",
    subtitle:
      "We bridge the gap between fast-paced startup timelines and strict enterprise architecture. Get robust, secure, and production-tested MVPs delivered in weeks, not months.",
  },
  process: {
    title: "From Concept to Production in Weeks, Not Months",
    subtitle:
      "A streamlined engineering framework designed to maximize speed to market without accumulating technical debt.",
    steps: [
      {
        step: "01 / Scoping",
        title: "Discovery",
        desc: "We align business objectives with technical constraints. We define a minimal, high-impact feature set to get your product in front of users fast.",
      },
      {
        step: "02 / Design",
        title: "Clean Architecture",
        desc: "We build with decoupled layers, SOLID principles, and clean APIs. This guarantees your code scales smoothly and remains easy to extend.",
      },
      {
        step: "03 / Build",
        title: "AI-Accelerated Dev",
        desc: "We leverage advanced AI tools to automate boilerplate, write tests, and speed up routine coding tasks—accelerating time-to-market up to 3x.",
      },
      {
        step: "04 / Ship",
        title: "Cloud Deployment",
        desc: "We deploy to optimized, serverless architectures with robust CI/CD. Your application scales on-demand with near-zero infrastructure overhead.",
      },
    ],
  },
  advantage: {
    title: "Why Software Built with AI-Assisted Senior Engineering Wins",
    subtitle:
      "Traditional software agencies lock you into slow delivery, bloated billing, and brittle spaghetti code. Here is how we break that cycle.",
    boxes: [
      {
        badge: "SYS_AGILITY",
        step: "01 // Dynamic Modular Boundaries",
        title: "Dynamic Modular Boundaries",
        desc: "By enforcing clean architecture and strict separation of concerns, we isolate business logic from databases and UI frameworks.",
        painLabel: "The Pain Solved:",
        painSolved:
          "You will never be overcharged or wait weeks for simple UI adjustments or database swaps. Changes that take standard agencies weeks are resolved in hours.",
      },
      {
        badge: "CLOUD_OPTIMIZATION",
        step: "02 // Severe Hosting Cost Reduction",
        title: "Severe Hosting Cost Reduction",
        desc: "We design serverless deployments, utilize efficient caching strategies, and optimize database indexing. No idle servers running 24/7.",
        painLabel: "The Pain Solved:",
        painSolved:
          "Avoid expensive, oversized Virtual Machines and surprise cloud invoices. We optimize infrastructure so hosting starts at $0/month and scales linearly with actual usage.",
      },
      {
        badge: "AI_QUALITY_ASSURANCE",
        step: "03 // AI-Assisted Testing Pipelines",
        title: "AI-Assisted Testing Pipelines",
        desc: "We pair senior oversight with AI agents to write comprehensive end-to-end and unit test suites on every pull request automatically.",
        painLabel: "The Pain Solved:",
        painSolved:
          'We eradicate the typical "fix one bug, break three things" agency pattern. Your releases remain rock solid and regressions are blocked before they hit staging.',
      },
      {
        badge: "ENGINEERING_VELOCITY",
        step: "04 // 3x Faster Safe Delivery",
        title: "3x Faster Safe Delivery",
        desc: "We don't let AI write raw software without supervision. We use AI as a high-speed copilot to execute boilerplate while maintaining total architectural control.",
        painLabel: "The Pain Solved:",
        painSolved:
          "Launch ahead of competitors. By shifting manual coding overhead to AI tools, we compress traditional multi-month roadmaps into single-month sprints.",
      },
    ],
  },
};

const contentEs: ServicesPageContent = {
  hero: {
    pill: "Desarrollo de Software B2B & MVPs",
    title: "Software Listo para Producción y Diseñado para Adaptarse.",
    subtitle:
      "Reducimos la brecha entre la velocidad que necesita tu negocio y la robustez que exige la arquitectura de nivel empresarial. MVPs sólidos en semanas, no meses.",
  },
  process: {
    title: "De la Idea a Producción en Semanas, No Meses",
    subtitle:
      "Un marco de trabajo de ingeniería optimizado para maximizar la velocidad de salida al mercado sin acumular deuda técnica.",
    steps: [
      {
        step: "01 / Alcance",
        title: "Descubrimiento",
        desc: "Alineamos tus objetivos comerciales con la viabilidad técnica. Definimos un conjunto de características minimalistas y de alto impacto para lanzar rápido.",
      },
      {
        step: "02 / Diseño",
        title: "Arquitectura Limpia",
        desc: "Estructuramos con capas desacopladas, principios SOLID y APIs limpias. Garantizamos que el sistema escale sin degradar el código.",
      },
      {
        step: "03 / Desarrollo",
        title: "Desarrollo Acelerado con IA",
        desc: "Utilizamos herramientas avanzadas de IA para automatizar código repetitivo, escribir pruebas unitarias y acelerar la entrega hasta 3 veces.",
      },
      {
        step: "04 / Lanzamiento",
        title: "Despliegue en la Nube",
        desc: "Implementamos arquitecturas optimizadas y serverless con CI/CD automatizado. Tu software escala bajo demanda con costos de hosting mínimos.",
      },
    ],
  },
  advantage: {
    title: "Por qué el Software con Ingeniería Senior + IA es Superior",
    subtitle:
      "Las agencias de software tradicionales te amarran a plazos eternos, presupuestos inflados y código espagueti frágil. Así es como rompemos ese esquema.",
    boxes: [
      {
        badge: "SYS_AGILITY",
        step: "01 // Límites Modulares Dinámicos",
        title: "Límites Modulares Dinámicos",
        desc: "Al aplicar clean architecture y una estricta separación de responsabilidades, aislamos la lógica de negocio de la base de datos y la interfaz de usuario.",
        painLabel: "Dolor Resuelto:",
        painSolved:
          "Olvídate de cobros excesivos por cambios tontos o simples modificaciones. Lo que a las agencias tradicionales les toma semanas de desarrollo, nosotros lo resolvemos en horas.",
      },
      {
        badge: "CLOUD_OPTIMIZATION",
        step: "02 // Reducción Drástica de Hosting",
        title: "Reducción Drástica de Hosting",
        desc: "Diseñamos despliegues serverless, implementamos caché optimizada y optimizamos los índices de bases de datos para evitar cobros innecesarios por servidores inactivos.",
        painLabel: "Dolor Resuelto:",
        painSolved:
          "Evita servidores virtuales costosos e ineficientes y facturas sorpresa en la nube. Optimizamos tu arquitectura para que el hosting empiece en $0/mes y crezca con tu uso real.",
      },
      {
        badge: "AI_QUALITY_ASSURANCE",
        step: "03 // Pipelines de Testing con IA",
        title: "Pipelines de Testing con IA",
        desc: "Combinamos nuestro criterio senior con agentes de IA para escribir suites completas de pruebas unitarias y de integración automáticas en cada commit.",
        painLabel: "Dolor Resuelto:",
        painSolved:
          'Erradicamos el clásico patrón de agencia de "corregir un bug y romper tres cosas". Tus actualizaciones serán sólidas y sin regresiones inesperadas.',
      },
      {
        badge: "ENGINEERING_VELOCITY",
        step: "04 // Entregas Seguras 3x Más Rápidas",
        title: "Entregas Seguras 3x Más Rápidas",
        desc: "No dejamos que la IA genere software sin supervisión. La usamos como un copiloto de alto rendimiento para acelerar código repetitivo, reteniendo control absoluto.",
        painLabel: "Dolor Resuelto:",
        painSolved:
          "Lanza tu producto antes que tus competidores. Al delegar la codificación rutinaria en la IA, comprimimos roadmaps de meses enteros en sprints de semanas.",
      },
    ],
  },
};

export function getServicesPageContent(isEs: boolean): ServicesPageContent {
  return isEs ? contentEs : contentEn;
}
