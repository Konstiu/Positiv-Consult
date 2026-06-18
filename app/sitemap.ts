import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-data";

const routes = [
  "",
  "/leistungen",
  "/ai-consulting",
  "/digitalisierung",
  "/foerderungen",
  "/ueber-uns",
  "/kunden-erfahrung",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
