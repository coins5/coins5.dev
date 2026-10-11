import { getWhatsAppUrl } from "../../config";

export interface CtaContent {
  label: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  whatsappUrl: string;
  trust1: string;
  trust2: string;
  trust3: string;
  directEmail: string;
}

export const ctaContent: Record<"en" | "es", CtaContent> = {
  es: {
    label: "// VAMOS A CONSTRUIR",
    title: "¿Listo para Construir Software que Escale sin Fricción?",
    subtitle:
      "Evita los presupuestos inflados de las agencias y los desarrollos frágiles. Trabaja directamente con un Arquitecto de Software Senior para validar tu MVP o modernizar tus sistemas con Inteligencia Artificial.",
    primaryCta: "Agendar llamada de descubrimiento (15 min)",
    secondaryCta: "Iniciar conversación en WhatsApp",
    whatsappUrl: getWhatsAppUrl("es", "default"),
    trust1: "100% de propiedad intelectual y código propio",
    trust2: "Trato directo 1-a-1 sin intermediarios",
    trust3: "Sprints ágiles con entregables funcionales cada semana",
    directEmail: "O escríbeme directamente a:",
  },
  en: {
    label: "// LET'S BUILD",
    title: "Ready to Build Software That Truly Scales?",
    subtitle:
      "Skip agency bloat, opaque billing, and fragile code. Partner directly with a Senior Software Architect to engineer high-performance MVPs or modernize your operations with AI.",
    primaryCta: "Book a 15-minute discovery call",
    secondaryCta: "Start a conversation on WhatsApp",
    whatsappUrl: getWhatsAppUrl("en", "default"),
    trust1: "100% full intellectual property & repository ownership",
    trust2: "Direct 1-on-1 architect partnership, zero middlemen",
    trust3: "Agile sprints with functional production deliverables weekly",
    directEmail: "Or reach out directly via email:",
  },
};

export function getCtaContent(isEs: boolean): CtaContent {
  return ctaContent[isEs ? "es" : "en"];
}
