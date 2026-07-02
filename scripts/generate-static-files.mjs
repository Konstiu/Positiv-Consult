import {mkdirSync, writeFileSync} from "node:fs";
import {join} from "node:path";

const publicDir = join(process.cwd(), "public");

function normalizeBasePath(rawBasePath) {
    if (!rawBasePath || rawBasePath === "/") {
        return "";
    }

    const withLeadingSlash = rawBasePath.startsWith("/")
        ? rawBasePath
        : `/${rawBasePath}`;

    return withLeadingSlash.endsWith("/")
        ? withLeadingSlash.slice(0, -1)
        : withLeadingSlash;
}

function normalizeSiteUrl(rawSiteUrl) {
    return rawSiteUrl?.replace(/\/+$/, "");
}

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
const siteUrl =
    normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    `https://positiv-consult.unterweger.tech${basePath}`;

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

mkdirSync(publicDir, {recursive: true});
writeFileSync(join(publicDir, "robots.txt"), robots);
writeFileSync(join(publicDir, "sitemap.xml"), sitemap);
