import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { companyName, siteUrl } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | Strategie, Digitalisierung & KI-Beratung`,
    template: `%s | ${companyName}`,
  },
  description:
    "Unternehmensberatung für KMU, Eigentümer:innen und Geschäftsführungen: Strategie, Digitalisierung, KI-Beratung, Vertrieb und Förderberatung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[var(--paper)] text-[var(--ink)]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
