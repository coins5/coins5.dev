export interface BentoContent {
  label: string;
  title: string;
  subtitle: string;
  card1: {
    tag: string;
    title: string;
    desc: string;
    layerDomain: string;
    layerDomainDesc: string;
    layerApp: string;
    layerAppDesc: string;
    layerInfra: string;
    layerInfraDesc: string;
    stat1: string;
    stat2: string;
  };
  card2: {
    tag: string;
    title: string;
    desc: string;
    comparisonTraditional: string;
    costTraditional: string;
    comparisonCoins5: string;
    costCoins5: string;
    proofNote: string;
  };
  card3: {
    tag: string;
    title: string;
    desc: string;
    item1: string;
    item2: string;
    item3: string;
  };
  card4: {
    tag: string;
    title: string;
    desc: string;
    badge1: string;
    badge2: string;
    badge3: string;
    badge4: string;
  };
}

export const bentoContent: Record<"en" | "es", BentoContent> = {
  es: {
    label: "// EL MULTIPLICADOR DE VALOR",
    title: "El Factor Senior + IA: Velocidad sin Deuda Técnica",
    subtitle:
      "Por qué fundadores y líderes de negocio eligen construir directamente con un arquitecto senior en lugar de lidiar con agencias infladas o código frágil.",
    card1: {
      tag: "ARQUITECTURA ROBUSTA × IA",
      title: "Clean Architecture: Código que escala desde el Día 1",
      desc: "No generamos código desechable. Anclamos cada proyecto en principios SOLID y arquitectura desacoplada para que la aceleración con IA produzca software libre de bugs que soporte 10,000 usuarios sin refactorizaciones traumáticas.",
      layerDomain: "Capa de Dominio Puro",
      layerDomainDesc: "Lógica de negocio aislada y testeable",
      layerApp: "Orquestación & Casos de Uso",
      layerAppDesc: "Flujos de aplicación y contratos estrictos",
      layerInfra: "Infraestructura & Adaptadores IA",
      layerInfraDesc: "Postgres, APIs de LLM y Edge Workers",
      stat1: "Entrega 3x más rápida",
      stat2: "0% Deuda técnica",
    },
    card2: {
      tag: "EFICIENCIA EN COSTOS",
      title: "-60% en Costos de Nube por Diseño",
      desc: "Optimizamos tu infraestructura desde el primer commit. Servidores bien dimensionados (Dokploy/Docker), caché en capas y edge computing para evitar facturas abusivas de AWS.",
      comparisonTraditional: "Setup tradicional de agencia",
      costTraditional: "$1,200+/mes",
      comparisonCoins5: "Arquitectura optimizada Coins5",
      costCoins5: "<$60/mes",
      proofNote: "Strategio operó con <$50/mes en su fase de tracción inicial.",
    },
    card3: {
      tag: "COMUNICACIÓN DIRECTA",
      title: "Trato Directo con el Arquitecto",
      desc: "Cero intermediarios. Cero desarrolladores junior aprendiendo a costa de tu presupuesto. Cada decisión técnica es evaluada con más de 10 años de experiencia real.",
      item1: "Canal directo por WhatsApp y reuniones ágiles",
      item2: "100% de propiedad del código y repositorios",
      item3: "Feedback continuo y demos semanales funcionales",
    },
    card4: {
      tag: "VALIDACIÓN COMERCIAL",
      title: "Código Listo para Rondas de Inversión y Escala",
      desc: "Construimos software pensado para superar la auditoría técnica de inversores (due diligence) y facilitar la incorporación futura de tu propio equipo interno de ingenieros.",
      badge1: "Tipado Estricto de Extremo a Extremo",
      badge2: "Seguridad y Aislamiento Multi-Tenant",
      badge3: "Pipelines Automatizados de CI/CD",
      badge4: "Modularidad para Microservicios Futuros",
    },
  },
  en: {
    label: "// THE VALUE MULTIPLIER",
    title: "The Senior + AI Advantage: Speed Without Debt",
    subtitle:
      "Why ambitious founders and business leaders build directly with a software architect instead of managing bloated agencies or fragile code.",
    card1: {
      tag: "ROBUST ARCHITECTURE × AI",
      title: "Clean Architecture: Software Built to Scale from Day 1",
      desc: "We don't write disposable vibe code. Every project is anchored in SOLID principles and decoupled design so AI acceleration produces bulletproof, test-covered code that handles enterprise growth without painful rewrites.",
      layerDomain: "Pure Domain Core",
      layerDomainDesc: "Isolated, highly testable business rules",
      layerApp: "Application & Use Cases",
      layerAppDesc: "Orchestration & strict API contracts",
      layerInfra: "Infrastructure & AI Adapters",
      layerInfraDesc: "Postgres, LLM APIs, and Edge Workers",
      stat1: "Up to 3x Faster Delivery",
      stat2: "0% Technical Debt",
    },
    card2: {
      tag: "COST EFFICIENCY",
      title: "-60% Cloud Overhead by Design",
      desc: "We optimize infrastructure from the first commit. Lean container deployments (Dokploy/Docker), multi-tier caching, and edge computing to eliminate runaway AWS bills.",
      comparisonTraditional: "Traditional agency setup",
      costTraditional: "$1,200+/mo",
      comparisonCoins5: "Coins5 engineered architecture",
      costCoins5: "<$60/mo",
      proofNote: "Strategio ran under $50/mo during its initial traction phase.",
    },
    card3: {
      tag: "DIRECT PARTNERSHIP",
      title: "Direct Access to a Senior Architect",
      desc: "Zero project managers playing telephone. Zero junior hires practicing on your budget. Every schema decision and system boundary is vetted with 12+ years of production experience.",
      item1: "Direct WhatsApp communication & agile syncs",
      item2: "100% full intellectual property & code ownership",
      item3: "Continuous feedback & weekly working demos",
    },
    card4: {
      tag: "COMMERCIAL READINESS",
      title: "Audit-Ready Code for Investor Due Diligence",
      desc: "Architected to pass technical due diligence from angel investors and make future in-house engineering team onboarding frictionless.",
      badge1: "End-to-End Strict Typing",
      badge2: "Multi-Tenant Security & Isolation",
      badge3: "Automated CI/CD Testing Pipelines",
      badge4: "Modular Boundaries for Future Microservices",
    },
  },
};

export function getBentoContent(isEs: boolean): BentoContent {
  return bentoContent[isEs ? "es" : "en"];
}
