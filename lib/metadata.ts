import type { Metadata } from "next";

import { companyName, siteUrl } from "@/lib/site-data";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

const defaultImage = "/opengraph-image";

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: companyName,
      locale: "de_AT",
      type: "website",
      images: [{ url: defaultImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultImage],
    },
  };
}
