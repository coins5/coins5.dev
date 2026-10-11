import { getWhatsAppUrl } from "../../config";

export interface HeroContent {
  status: string;
  role: string;
  h1: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  whatsappUrl: string;
  profileName: string;
  profileCredentials: string;
  ownershipBadge: string;
  speedBadge: string;
}

export const heroContent: Record<"en" | "es", HeroContent> = {
  es: {
    status: "Disponible para proyectos selectos",
    role: "Senior Software Architect",
    h1: "Arquitectura de Software y MVPs de Alto Impacto, Acelerados con IA.",
    subtitle:
      "Más de una década de criterio arquitectónico—Clean Architecture, sistemas modulares y cero deuda técnica—potenciado con flujos avanzados de IA para entregar software de grado de producción hasta 3x más rápido.",
    primaryCta: "Agendar llamada de 15 min",
    secondaryCta: "Cotizar por WhatsApp",
    whatsappUrl: getWhatsAppUrl("es", "default"),
    profileName: "Robert Marlon Colca",
    profileCredentials: "Ex-CTO Strategio • Ganador Startup Perú • 12+ años en producción",
    ownershipBadge: "100% Código Propio",
    speedBadge: "Entrega hasta 3x más rápida",
  },
  en: {
    status: "Available for select projects",
    role: "Senior Software Architect",
    h1: "Architecting High-Performance Systems & MVPs, Accelerated by AI.",
    subtitle:
      "12+ years of senior architectural rigor—Clean Architecture, resilient system boundaries, and zero technical debt—multiplied by bespoke AI workflows to deliver production-ready software up to 3x faster.",
    primaryCta: "Book a 15-min discovery call",
    secondaryCta: "Chat on WhatsApp",
    whatsappUrl: getWhatsAppUrl("en", "default"),
    profileName: "Robert Marlon Colca",
    profileCredentials: "Ex-CTO Strategio • Startup Perú Winner • 12+ years in production",
    ownershipBadge: "100% Code Ownership",
    speedBadge: "Up to 3x Faster Delivery",
  },
};

export function getHeroContent(isEs: boolean): HeroContent {
  return heroContent[isEs ? "es" : "en"];
}
