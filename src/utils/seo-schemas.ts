import { siteConfig } from "../config";

export function getOrganizationSchema(lang: "en" | "es" = "en") {
  const isEs = lang === "es";
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: "Coins5",
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/favicon-96x96.png`,
    image: `${siteConfig.siteUrl}/default-preview.png`,
    description: isEs
      ? "Servicios de arquitectura de software y desarrollo de MVPs con IA de alto rendimiento. Entregas hasta 3x más rápidas y cero deuda técnica."
      : "Custom software architecture and high-velocity MVP engineering powered by senior design criteria and advanced AI.",
    founder: {
      "@type": "Person",
      name: "Robert Marlon Colca Manrique",
      jobTitle: "Senior Full Stack Developer & Systems Architect",
      sameAs: [siteConfig.linkedin, siteConfig.github],
    },
    areaServed: ["Global", "Peru", "United States", "Latin America"],
    knowsAbout: [
      "Clean Architecture",
      "MVP Development",
      "Artificial Intelligence Software",
      "Cloud Infrastructure Optimization",
      "Full Stack Engineering",
      "PostgreSQL & Database Optimization",
      "FastAPI & Node.js Microservices",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: siteConfig.calendlyUrl,
      availableLanguage: ["English", "Spanish"],
    },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: "Robert Marlon Colca Manrique",
    alternateName: ["Coins5", "Marlon Colca"],
    jobTitle: "Senior Full Stack Developer & Systems Architect",
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/marlon.png`,
    sameAs: [siteConfig.linkedin, siteConfig.github],
    worksFor: {
      "@type": "Organization",
      name: "Coins5",
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleSchema(
  entry: any,
  canonicalUrl: string,
  lang: "en" | "es" = "en"
) {
  const isEs = lang === "es";
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: entry.data.title,
    description: entry.data.description,
    image: entry.data.ogImage || `${siteConfig.siteUrl}/default-preview.png`,
    datePublished: entry.data.pubDate.toISOString(),
    dateModified: entry.data.pubDate.toISOString(),
    author: {
      "@type": "Person",
      name: "Robert Marlon Colca Manrique",
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Coins5",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/favicon-96x96.png`,
      },
    },
    keywords: entry.data.tags ? entry.data.tags.join(", ") : undefined,
    inLanguage: isEs ? "es" : "en",
  };
}

export function getCaseStudySchema(
  entry: any,
  canonicalUrl: string,
  lang: "en" | "es" = "en"
) {
  const isEs = lang === "es";
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    name: entry.data.title,
    headline: entry.data.title,
    description: entry.data.description,
    creator: {
      "@type": "Organization",
      name: "Coins5",
      url: siteConfig.siteUrl,
    },
    about: {
      "@type": "Organization",
      name: entry.data.clientName,
    },
    datePublished: entry.data.pubDate.toISOString(),
    inLanguage: isEs ? "es" : "en",
  };
}
