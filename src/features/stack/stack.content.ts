import { Code2, Server, Database, Brain } from "@lucide/astro";

export interface StackCategory {
  title: string;
  icon: any;
  desc: string;
  items: string[];
}

export interface StackContent {
  label: string;
  title: string;
  subtitle: string;
  categories: StackCategory[];
}

export const stackContent: Record<"en" | "es", StackContent> = {
  es: {
    label: "// STACK & CRITERIO TÉCNICO",
    title: "Herramientas Modernas y Probadas en Producción",
    subtitle:
      "Tecnologías seleccionadas meticulosamente para ofrecer máxima velocidad, mínimo consumo de infraestructura y mantenibilidad a largo plazo.",
    categories: [
      {
        title: "Lenguajes & Tipado",
        icon: Code2,
        desc: "Tipado estricto de extremo a extremo para eliminar errores de runtime antes de llegar a producción.",
        items: ["TypeScript", "Python 3.12+", "SQL (PostgreSQL)", "Rust (High-Perf)"],
      },
      {
        title: "Frameworks & Motores Web",
        icon: Server,
        desc: "Arquitecturas híbridas rápidas: SSR estático donde importa el SEO y APIs asíncronas para cómputo pesado.",
        items: ["Astro (Zero-JS)", "FastAPI (Python)", "Node.js (Async I/O)", "Tailwind CSS"],
      },
      {
        title: "Base de Datos & Cloud Frugal",
        icon: Database,
        desc: "Infraestructura dimensionada para rendimiento sin inflar la factura mensual de AWS o VPS.",
        items: ["PostgreSQL", "Cloudflare Workers", "Dokploy & Docker", "Redis Caching"],
      },
      {
        title: "Inteligencia Artificial & Agentes",
        icon: Brain,
        desc: "Sistemas avanzados de IA integrados quirúrgicamente en los flujos operativos de la empresa.",
        items: ["Claude & OpenAI APIs", "Modelos Clínicos/LLMs", "Agentes Autónomos", "LangChain / Embeddings"],
      },
    ],
  },
  en: {
    label: "// CORE ARCHITECTURAL STACK",
    title: "Engineered with Modern, Proven Tools",
    subtitle:
      "Meticulously selected technologies to ensure peak velocity, minimal cloud overhead, and decades of codebase durability.",
    categories: [
      {
        title: "Languages & Typing",
        icon: Code2,
        desc: "Strict end-to-end typing eliminating runtime bugs before code ever reaches production.",
        items: ["TypeScript", "Python 3.12+", "SQL (PostgreSQL)", "Rust (High-Perf)"],
      },
      {
        title: "Frameworks & Web Engines",
        icon: Server,
        desc: "Hybrid high-speed setups: Zero-JS static builds for SEO and async APIs for intensive workloads.",
        items: ["Astro (Zero-JS)", "FastAPI (Python)", "Node.js (Async I/O)", "Tailwind CSS"],
      },
      {
        title: "Data & Frugal Cloud",
        icon: Database,
        desc: "Right-sized infrastructure optimized for sub-second latency without inflated AWS invoices.",
        items: ["PostgreSQL", "Cloudflare Workers", "Dokploy & Docker", "Redis Caching"],
      },
      {
        title: "AI & Autonomous Workflows",
        icon: Brain,
        desc: "Production-grade AI systems surgically embedded into real-world business operations.",
        items: ["Claude & OpenAI APIs", "Clinical/Domain LLMs", "Autonomous Agents", "LangChain / Embeddings"],
      },
    ],
  },
};

export function getStackContent(isEs: boolean): StackContent {
  return stackContent[isEs ? "es" : "en"];
}
