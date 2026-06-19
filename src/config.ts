/**
 * Global Site Configuration
 * Centralized settings for marketing URLs, contact info, and copy strings.
 */

export const siteConfig = {
  // Base Site metadata
  siteUrl: "https://coins5.dev",
  email: "marlon@coins5.dev",

  // Primary Call To Action: Discovery Call booking page
  calendlyUrl: "https://calendar.app.google/AbnPNcKVJyDnaU9z5",

  linkedin: "https://www.linkedin.com/in/coins5/",
  github: "https://github.com/coins5",

  // Secondary Call To Action: WhatsApp contact configuration
  whatsappNumber: "51922913739",
  whatsappMessages: {
    en: {
      default: "Hello Marlon, I would like to quote a software project.",
      services:
        "Hello Marlon, I would like to discuss cloud optimization and automation for my business.",
    },
    es: {
      default: "Hola Marlon, quisiera cotizar un proyecto de software.",
      services:
        "Hola Marlon, quisiera cotizar servicios de digitalización y automatización.",
    },
  },
};

/**
 * Generates an optimized, URL-safe WhatsApp link.
 * @param lang Preferred language ("en" or "es")
 * @param type Conversion trigger type ("default" or "services")
 * @returns The encoded WhatsApp API URL
 */
export function getWhatsAppUrl(
  lang: "en" | "es" = "en",
  type: "default" | "services" = "default",
): string {
  const message = siteConfig.whatsappMessages[lang][type];
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
