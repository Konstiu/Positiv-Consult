import Link from "next/link";

import {
  companyName,
  contactEmail,
  contactPhone,
  footerLinks,
} from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div className="space-y-4">
          <p className="font-serif text-2xl font-semibold">{companyName}</p>
          <p className="max-w-md text-sm leading-7 text-white/72">
            Strategische und operative Unternehmensberatung aus Wien mit Fokus
            auf Wachstum, Digitalisierung, Vertrieb, Förderung und AI
            Consulting.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/54">
            Kontakt
          </p>
          <p className="text-sm text-white/72">Wien, Österreich</p>
          <a href={`mailto:${contactEmail}`} className="block text-sm text-white">
            {contactEmail}
          </a>
          <a href={`tel:${contactPhone}`} className="block text-sm text-white">
            {contactPhone}
          </a>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/54">
            Rechtliches
          </p>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
