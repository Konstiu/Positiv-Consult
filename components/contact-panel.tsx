import Link from "next/link";

import { contactEmail, contactPhone } from "@/lib/site-data";

export function ContactPanel() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-18 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start md:py-24">
      <div className="space-y-6">
        <span className="eyebrow">Kontakt</span>
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
          Persönlich, klar und direkt in Wien.
        </h2>
        <p className="max-w-2xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
          Wenn ein Strategie-, Wachstums-, Digitalisierungs- oder
          AI-Vorhaben konkret werden soll, ist ein erstes Gespräch der
          sinnvollste Startpunkt.
        </p>
      </div>

      <div className="surface-card space-y-5 p-6 md:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            E-Mail
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-2 block text-lg font-semibold text-[var(--ink)]"
          >
            {contactEmail}
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Telefon
          </p>
          <a
            href={`tel:${contactPhone}`}
            className="mt-2 block text-lg font-semibold text-[var(--ink)]"
          >
            {contactPhone}
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Standort
          </p>
          <p className="mt-2 text-base text-[var(--ink)]">Wien, Österreich</p>
        </div>
        <Link
          href="/kontakt"
          className="inline-flex rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white"
        >
          Kontaktseite öffnen
        </Link>
      </div>
    </section>
  );
}
