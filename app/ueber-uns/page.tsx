import { PageHeader } from "@/components/page-header";
import { StatsStrip } from "@/components/stats-strip";
import { createMetadata } from "@/lib/metadata";
import { companyStory, sourceNotes } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Über uns",
  description:
    "Über POSITIVconsult: Unternehmensberatung aus Wien mit über 20 Jahren Erfahrung, rund 250 Projekten und internationaler Perspektive.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        title="Erfahrung, Klarheit und Umsetzungsnähe als Beratungsstandard."
        description="POSITIVconsult ist laut bestehender Website eine Unternehmensberatung aus Wien mit Fokus auf Digitalisierung, Marketing und Vertrieb. Im Zentrum steht das Erzielen von Wachstum."
        highlights={[
          "Sitz in Wien",
          "25 Jahre Berufserfahrung im digitalen Umfeld",
          "Beratung für Konzerne, KMU, Startups und EPU",
          "Arbeit meist direkt mit Eigentümer oder Geschäftsführung",
        ]}
      />

      <div className="py-10">
        <StatsStrip />
      </div>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-8 md:px-8 lg:grid-cols-2">
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Beratung für Entscheider
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Die Altwebsite beschreibt POSITIVconsult als Beratungsunternehmen,
            das Wachstum in den Mittelpunkt stellt. Ob Unternehmensgründung,
            Eintritt in weitere Märkte, neue Zielgruppen oder neue Produkte:
            Konzepte werden entwickelt und auf Wunsch auch umgesetzt.
          </p>
        </article>
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Erfahrung in Breite und Tiefe
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Die bestehende Website spricht von Unternehmen aus
            unterschiedlichsten Branchen, national und international. Als
            belastbare Kennzahlen werden 250 Projekte, 150 Kunden und Erfahrung
            in 7 Ländern genannt.
          </p>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Entwicklungsschritte
          </h2>
          <div className="mt-5 grid gap-3">
            {companyStory.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="rounded-[1.35rem] border border-black/8 bg-white/72 px-4 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  {item.year}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--ink)]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </article>
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Quellen- und Prüfhinweis
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            {sourceNotes.website}
          </p>
          <p className="mt-4 rounded-2xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--muted)]">
            TODO: Falls sich Eigentumsverhältnisse, Schwerpunkte, Rollen oder
            historische Angaben geändert haben, sollte diese Seite vor dem
            Livegang redaktionell geprüft werden.
          </p>
        </article>
      </section>
    </>
  );
}
