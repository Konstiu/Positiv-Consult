import type { Metadata } from "next";

import {
  companyName,
  toAbsoluteAssetUrl,
  toAbsoluteSiteUrl,
} from "@/lib/site-data";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

const defaultImage = toAbsoluteAssetUrl("/brand/positivconsult-logo.png");

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetadataInput): Metadata {
  const canonical = toAbsoluteSiteUrl(path);

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
      images: [{ url: defaultImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultImage],
    },
  };
}
