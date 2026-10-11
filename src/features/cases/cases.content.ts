import type { LucideIcon } from "lucide-react";
import { Award, Brain, Cloud } from "@lucide/astro";

export interface CaseStudyItem {
  id: string;
  title: string;
  slug: string;
  badge: string;
  role: string;
  externalUrl?: string;
  outcome: string;
  desc: string;
  technologies: string[];
  icon: any;
}

export interface CasesContent {
  label: string;
  title: string;
  subtitle: string;
  viewCase: string;
  viewAll: string;
  allCasesUrl: string;
  cases: CaseStudyItem[];
}

export const casesContent: Record<"en" | "es", CasesContent> = {
  es: {
    label: "// CASOS DE ÉXITO CLAVE",
    title: "Arquitectura Validada en Producción",
    subtitle:
      "Sistemas reales diseñados desde cero: desde MVPs premiados por el estado hasta plataformas de IA clínica y simulaciones en la nube de alta disponibilidad.",
    viewCase: "Ver Caso Completo",
    viewAll: "Explorar todos los casos de estudio",
    allCasesUrl: "/es/cases/",
    cases: [
      {
        id: "strategio",
        title: "Strategio — Plataforma de BI con IA para Retail",
        slug: "/es/cases/strategio-mvp/",
        badge: "Ganador Startup Perú 2da Gen",
        role: "Ex-CTO & Arquitecto Lead",
        outcome: "De 0 a MVP en producción en 12 semanas. Infraestructura bajo $50/mes.",
        desc: "Diseño e implementación de la plataforma analítica completa. Permitió a gerentes clasificar inventarios complejos y generar reportes móviles automáticos en tiempo real.",
        technologies: ["Node.js", "FastAPI", "PostgreSQL", "AWS Serverless"],
        icon: Award,
      },
      {
        id: "nutrimind",
        title: "NubaNutrición — Modelos de IA Aplicados a Salud",
        slug: "/es/cases/nutrimind-platform/",
        badge: "HealthTech & Clinical AI",
        role: "Arquitecto de IA & Full Stack",
        externalUrl: "https://nubanutricion.com",
        outcome: "Generación automatizada de planes nutricionales clínicos personalizados.",
        desc: "Extracción y análisis de biomarcadores clínicos de pacientes para sintetizar planes alimenticios adaptados dinámicamente al presupuesto económico del usuario.",
        technologies: ["Python", "Clinical LLMs", "FastAPI", "Cloudflare"],
        icon: Brain,
      },
      {
        id: "proximabolilla",
        title: "PróximaBolilla — Simulación Masiva en Nube",
        slug: "/es/cases/proximabolilla-simulator/",
        badge: "Cloud Concurrente & Ruido Cósmico",
        role: "Arquitecto de Sistemas Cloud",
        externalUrl: "https://proximabolilla.com",
        outcome: "+1,000,000 de jugadas simuladas en tiempo real sin latencia.",
        desc: "Simulación masiva de lotería combinando entropía cuántica de ruido cósmico y algoritmos analíticos predictivos para emitir reportes de probabilidad premium.",
        technologies: ["Cloud Workers", "Monte Carlo Engine", "Astro", "REST APIs"],
        icon: Cloud,
      },
    ],
  },
  en: {
    label: "// FLAGSHIP CASE STUDIES",
    title: "Architecture Proven in Production",
    subtitle:
      "Real-world systems engineered from ground up: from government-awarded MVPs to clinical AI engines and massive cloud simulation platforms.",
    viewCase: "Read Case Study",
    viewAll: "Explore all case studies",
    allCasesUrl: "/cases/",
    cases: [
      {
        id: "strategio",
        title: "Strategio — AI-Powered Business Intelligence",
        slug: "/cases/strategio-mvp/",
        badge: "Startup Perú 2nd Gen Winner",
        role: "Ex-CTO & Lead Architect",
        outcome: "From 0 to production MVP in 12 weeks. Run cost under $50/month.",
        desc: "End-to-end architecture and implementation of the BI analytics platform. Enabled managers to classify commercial inventories and generate real-time mobile reports.",
        technologies: ["Node.js", "FastAPI", "PostgreSQL", "AWS Serverless"],
        icon: Award,
      },
      {
        id: "nutrimind",
        title: "NubaNutrición — Clinical AI Health Models",
        slug: "/cases/nutrimind-platform/",
        badge: "HealthTech & Clinical AI",
        role: "AI Architect & Full Stack Lead",
        externalUrl: "https://nubanutricion.com",
        outcome: "Automated synthesis of personalized clinical dietary protocols.",
        desc: "Extracted insights from clinical biomarkers to synthesize dynamic dietary regimens precisely matched to patient biological markers and budget constraints.",
        technologies: ["Python", "Clinical LLMs", "FastAPI", "Cloudflare"],
        icon: Brain,
      },
      {
        id: "proximabolilla",
        title: "PróximaBolilla — Massive Cloud Simulation Engine",
        slug: "/cases/proximabolilla-simulator/",
        badge: "High-Concurrency Cloud & Entropy",
        role: "Cloud Systems Architect",
        externalUrl: "https://proximabolilla.com",
        outcome: "1,000,000+ lottery permutations simulated in real-time with sub-second latency.",
        desc: "Massive lottery simulation system combining cosmic noise entropy and predictive machine learning models to generate real-time analytical reports.",
        technologies: ["Cloud Workers", "Monte Carlo Engine", "Astro", "REST APIs"],
        icon: Cloud,
      },
    ],
  },
};

export function getCasesContent(isEs: boolean): CasesContent {
  return casesContent[isEs ? "es" : "en"];
}
