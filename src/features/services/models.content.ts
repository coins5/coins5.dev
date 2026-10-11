export interface EngagementTier {
  tag: string;
  title: string;
  idealFor: string;
  timeline: string;
  deliverables: string[];
  featured?: boolean;
}

export interface ServicesModelsContent {
  label: string;
  title: string;
  subtitle: string;
  tiers: EngagementTier[];
}

const contentEn: ServicesModelsContent = {
  label: "Engagement Models",
  title: "Tailored to Your Company's Stage",
  subtitle:
    "Transparent engineering scopes with no agency bloat. Full IP ownership and direct senior access from day one.",
  tiers: [
    {
      tag: "0-to-1 Sprint",
      title: "Full MVP Build",
      idealFor:
        "Startups & founders validating new market opportunities or pitching to VC investors.",
      timeline: "4 - 6 Weeks Delivery",
      deliverables: [
        "Complete full-stack web/mobile application",
        "Clean Architecture & multi-tenant database",
        "Automated CI/CD deployment pipeline",
        "Zero-idle serverless infrastructure setup",
        "Full code ownership & handover docs",
      ],
      featured: true,
    },
    {
      tag: "1-to-N Scale",
      title: "Cloud & Legacy Refactor",
      idealFor:
        "Established businesses losing money on oversized cloud VMs or suffering slow delivery.",
      timeline: "2 - 4 Weeks Sprint",
      deliverables: [
        "Deep architectural & database index audit",
        "Cloud bill reduction (often 50% - 80%)",
        "Microservice decoupling or modular monolith",
        "Automated test coverage implementation",
        "Latency & query optimization",
      ],
    },
    {
      tag: "Advisory",
      title: "Fractional CTO & Guidance",
      idealFor:
        "Teams needing senior technical direction, architectural reviews, and AI velocity systems.",
      timeline: "Flexible Monthly Retainer",
      deliverables: [
        "Weekly architecture & roadmap reviews",
        "Pull request & security code audits",
        "AI-assisted dev tooling implementation",
        "Tech stack & database vendor selection",
        "Direct WhatsApp & Slack hotline access",
      ],
    },
  ],
};

const contentEs: ServicesModelsContent = {
  label: "Modalidades de Trabajo",
  title: "Diseñadas según la Etapa de tu Empresa",
  subtitle:
    "Alcances de ingeniería transparentes y sin intermediarios. Propiedad total del código fuente y trato directo con el arquitecto senior.",
  tiers: [
    {
      tag: "Sprint 0-a-1",
      title: "Desarrollo Total de MVP",
      idealFor:
        "Startups y fundadores validando nuevas oportunidades o preparándose para levantar inversión.",
      timeline: "Entrega en 4 - 6 Semanas",
      deliverables: [
        "Aplicación web/móvil completa y testeada",
        "Clean Architecture y base de datos multi-tenant",
        "Pipeline de despliegue automatizado CI/CD",
        "Infraestructura serverless sin costos ociosos",
        "Propiedad 100% del código y documentación",
      ],
      featured: true,
    },
    {
      tag: "Escala 1-a-N",
      title: "Refactorización Cloud y Modernización",
      idealFor:
        "Empresas en marcha perdiendo dinero en servidores sobredimensionados o con código espagueti.",
      timeline: "Sprint de 2 - 4 Semanas",
      deliverables: [
        "Auditoría profunda de arquitectura e índices SQL",
        "Reducción de costos cloud (típicamente 50% - 80%)",
        "Desacoplamiento modular de cuellos de botella",
        "Implementación de testing automatizado",
        "Optimización de latencia y velocidad",
      ],
    },
    {
      tag: "Asesoría Senior",
      title: "CTO Fraccional & Arquitectura",
      idealFor:
        "Equipos que necesitan dirección técnica senior, auditorías de código y aceleración con IA.",
      timeline: "Retainer Mensual Flexible",
      deliverables: [
        "Revisiones semanales de arquitectura y roadmap",
        "Auditorías de seguridad y pull requests",
        "Implementación de tooling de desarrollo con IA",
        "Selección de stack tecnológico y proveedores",
        "Acceso directo vía WhatsApp y canal dedicado",
      ],
    },
  ],
};

export function getServicesModelsContent(isEs: boolean): ServicesModelsContent {
  return isEs ? contentEs : contentEn;
}
