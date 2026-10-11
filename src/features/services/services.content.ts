import { siteConfig, getWhatsAppUrl } from "../../config";

export interface ServiceTrack {
  tag: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ServicesContent {
  label: string;
  title: string;
  subtitle: string;
  card1: ServiceTrack;
  card2: ServiceTrack;
}

export const servicesContent: Record<"en" | "es", ServicesContent> = {
  es: {
    label: "// MODALIDADES DE TRABAJO",
    title: "Soluciones de Ingeniería para Escalar tu Negocio",
    subtitle:
      "Software robusto y de alto rendimiento diseñado para resolver cuellos de botella reales y acelerar el crecimiento comercial.",
    card1: {
      tag: "STARTUPS & FUNDADORES",
      badge: "0 A 1 • MVP DE PRODUCCIÓN",
      title: "Desarrollo de MVPs Imparables",
      description:
        "Construye Productos Mínimos Viables validados y listos para salir a producción. Estructurados con Clean Architecture y acelerados con IA para lanzar al mercado o presentar a rondas de inversión en semanas.",
      bullets: [
        "Entrega acelerada con IA: MVPs completos en 4 a 8 semanas",
        "Clean Architecture, código modular y tipado estricto sin bugs",
        "Acompañamiento como CTO fraccional para due diligence técnico",
        "100% de propiedad intelectual y código transferido desde el Día 1",
      ],
      ctaText: "Agendar estimación de MVP",
      ctaLink: siteConfig.calendlyUrl,
    },
    card2: {
      tag: "EMPRESAS & OPERACIONES",
      badge: "1 A N • MODERNIZACIÓN & IA",
      title: "Digitalización, Automatización y Nube",
      description:
        "Migra sistemas lentos a arquitecturas web modernas de alta velocidad. Optimizamos tu infraestructura para reducir drásticamente facturas de hosting e implementamos agentes de IA para automatizar flujos clave.",
      bullets: [
        "Auditoría técnica y reducción del 40% al 70% en facturas cloud",
        "Modernización y refactorización de código y sistemas legados",
        "Agentes de IA y pipelines de datos para automatizar procesos manuales",
        "Monitoreo proactivo, observabilidad y resiliencia en producción",
      ],
      ctaText: "Cotizar optimización por WhatsApp",
      ctaLink: getWhatsAppUrl("es", "services"),
    },
  },
  en: {
    label: "// ENGAGEMENT TRACKS",
    title: "Engineered Solutions to Scale Your Business",
    subtitle:
      "High-performance custom software designed to eliminate technical bottlenecks and accelerate sustainable business growth.",
    card1: {
      tag: "STARTUPS & FOUNDERS",
      badge: "0 TO 1 • PRODUCTION MVP",
      title: "Production-Ready MVPs",
      description:
        "Build robust, market-validated Minimum Viable Products ready for real users. Powered by Clean Architecture and accelerated with AI to pitch investors and onboard customers in weeks.",
      bullets: [
        "AI-accelerated development: complete MVPs shipped in 4 to 8 weeks",
        "Clean Architecture, modular design, and strictly typed code",
        "Fractional CTO advisory ready for technical due diligence",
        "100% full intellectual property and repository ownership",
      ],
      ctaText: "Book an MVP Consultation",
      ctaLink: siteConfig.calendlyUrl,
    },
    card2: {
      tag: "GROWING BUSINESSES",
      badge: "1 TO N • MODERNIZATION & AI",
      title: "Cloud Optimization & Automation",
      description:
        "Transform sluggish legacy systems into high-speed modern architectures. Slash runaway cloud hosting expenses and embed custom AI agents to automate high-friction operational workflows.",
      bullets: [
        "Cloud architecture audit cutting 40% to 70% in monthly server bills",
        "Legacy systems modernization and zero-regression refactoring",
        "Custom AI agents and pipelines automating manual tasks",
        "Production observability, health checks, and resilient APIs",
      ],
      ctaText: "Discuss operations on WhatsApp",
      ctaLink: getWhatsAppUrl("en", "services"),
    },
  },
};

export function getServicesContent(isEs: boolean): ServicesContent {
  return servicesContent[isEs ? "es" : "en"];
}
