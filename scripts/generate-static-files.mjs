import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const publicDir = join(process.cwd(), "public");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (basePath
    ? `https://konstiu.github.io${basePath}`
    : "https://www.positiv-consult.at");

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

const normalizeUrl = (path) => `${siteUrl}${path}${path === "" ? "/" : "/"}`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const priority = route === "" ? "1.0" : "0.7";
    const changefreq = route === "" ? "weekly" : "monthly";

    return `  <url>
    <loc>${normalizeUrl(route)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, "robots.txt"), robots);
writeFileSync(join(publicDir, "sitemap.xml"), sitemap);
