import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BackgroundCanvas } from "@/components/background-canvas";
import { companyName, deploymentSiteUrl, isPreviewDeployment } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(deploymentSiteUrl),
  title: {
    default: `${companyName} | Strategie, Digitalisierung & KI-Beratung`,
    template: `%s | ${companyName}`,
  },
  description:
    "Unternehmensberatung für KMU, Eigentümer:innen und Geschäftsführungen: Strategie, Digitalisierung, KI-Beratung, Vertrieb und Förderberatung.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full scroll-smooth antialiased">
      <body className="min-h-full text-[var(--ink)]">
        <BackgroundCanvas />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
