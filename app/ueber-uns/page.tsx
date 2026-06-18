import { PageHeader } from "@/components/page-header";
import { StatsStrip } from "@/components/stats-strip";
import { createMetadata } from "@/lib/metadata";

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
        description="POSITIVconsult ist eine Unternehmensberatung aus Wien mit Fokus auf Strategie und Umsetzung. Die Arbeit richtet sich an Eigentümer, Geschäftsführung und verantwortliche Entscheider."
        highlights={[
          "Sitz in Wien",
          "Über 20 Jahre Erfahrung",
          "Beratung für EPU, KMU und Unternehmen",
          "Fokus auf unternehmerische Relevanz",
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
            Viele Beratungsprojekte scheitern nicht an Analyse, sondern an
            fehlender Anschlussfähigkeit. Deshalb ist der Anspruch von
            POSITIVconsult, strategische Themen so zu strukturieren, dass
            daraus reale Entscheidungen und klare Umsetzungsschritte entstehen.
          </p>
        </article>
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Erfahrung in Breite und Tiefe
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Rund 250 Projekte, etwa 150 Kunden und Erfahrung in 7 Ländern
            zeigen eine Beratungspraxis, die unterschiedliche Märkte,
            Unternehmensrealitäten und Wachstumssituationen kennt.
          </p>
        </article>
      </section>
    </>
  );
}
