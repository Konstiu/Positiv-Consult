import Link from "next/link";

import {
  addressLines,
  companyName,
  contactEmail,
  contactPhone,
  footerLinks,
  secondaryContactEmail,
} from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[var(--brand-dark)] text-[var(--paper)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div className="space-y-4">
          <p className="font-serif text-2xl font-semibold">{companyName}</p>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Strategische und operative Unternehmensberatung aus Wien mit Fokus
            auf Wachstum, Digitalisierung, Vertrieb, Förderung und AI
            Consulting.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue-soft)]">
            Kontakt
          </p>
          <p className="text-sm text-slate-300">{addressLines.join(", ")}</p>
          <a href={`mailto:${contactEmail}`} className="block text-sm text-white hover:text-[var(--brand-red)]">
            {contactEmail}
          </a>
          <a href={`mailto:${secondaryContactEmail}`} className="block text-sm text-slate-300 hover:text-[var(--brand-blue-soft)]">
            {secondaryContactEmail}
          </a>
          <a href={`tel:${contactPhone}`} className="block text-sm text-white hover:text-[var(--brand-red)]">
            {contactPhone}
          </a>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue-soft)]">
            Rechtliches
          </p>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm text-white hover:text-[var(--brand-red)]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
