import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/Positiv-Consult";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        basePath: repoBasePath,
        assetPrefix: repoBasePath,
      }
    : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.positiv-consult.at",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
