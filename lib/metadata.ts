import type {Metadata} from "next";

import {
    companyName,
    isPreviewDeployment,
    toAbsoluteDeploymentAssetUrl,
    toAbsoluteProductionUrl,
} from "@/lib/site-data";

type MetadataInput = {
    title: string;
    description: string;
    path?: string;
    keywords?: string[];
};

const defaultImage = toAbsoluteDeploymentAssetUrl("/brand/positivconsult-logo.png");

export function createMetadata({
                                   title,
                                   description,
                                   path = "/",
                                   keywords = [],
                               }: MetadataInput): Metadata {
    const canonical = toAbsoluteProductionUrl(path);

    return {
        title,
        description,
        keywords,
        robots: isPreviewDeployment
            ? {
                index: false,
                follow: false,
                googleBot: {
                    index: false,
                    follow: false,
                },
            }
            : undefined,
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
            images: [{url: defaultImage, alt: title}],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [defaultImage],
        },
    };
}
