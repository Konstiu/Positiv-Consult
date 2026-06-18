import Link from "next/link";

import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { createMetadata } from "@/lib/metadata";
import { coreServices } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Leistungen",
  description:
    "Leistungen von POSITIVconsult: Strategie, Marketing, Vertrieb, Digitalisierung, E-Commerce, Förderberatung und AI Consulting.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen"
        title="Beratung für Wachstum, Markt, Prozesse und digitale Zukunft."
        description="POSITIVconsult deckt die zentralen Beratungsfelder ab, die für EPU, KMU und Unternehmen in Transformations- und Wachstumsphasen relevant sind."
        highlights={[
          "Strategieentwicklung und Priorisierung",
          "Marketing- und Vertriebsberatung",
          "Digitalisierung und Prozessoptimierung",
          "E-Commerce, Förderung und AI Consulting",
        ]}
        aside={
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Beratungsverständnis
            </p>
            <p className="text-lg leading-8 text-[var(--ink)]">
              Gute Beratung schafft nicht nur Klarheit, sondern gibt
              Entscheidungen, Teams und Vorhaben ein belastbares Gerüst für
              die Umsetzung.
            </p>
          </div>
        }
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-18 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Beratungsfelder"
          title="Leistungen entlang der entscheidenden Wachstums- und Transformationsthemen."
          description="Die Leistungsbereiche sind so strukturiert, dass strategische und operative Fragestellungen nicht künstlich getrennt werden."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-4 md:px-8 lg:grid-cols-3">
        {[
          {
            title: "Strategie",
            text: "Positionierung, Geschäftsmodell, Prioritäten und marktorientierte Ausrichtung.",
          },
          {
            title: "Markt & Vertrieb",
            text: "Wirkungsvollere Marktansprache, bessere Vertriebsprozesse und klarere Angebotslogik.",
          },
          {
            title: "Transformation",
            text: "Digitalisierung, AI-Einsatz und organisatorische Verankerung neuer Arbeitsweisen.",
          },
        ].map((item) => (
          <article key={item.title} className="surface-card p-6">
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.text}
            </p>
          </article>
        ))}
      </section>

      <CtaSection
        eyebrow="Nächster Schritt"
        title="Wenn ein Beratungsbedarf bereits konkret ist, lohnt sich ein kompaktes Erstgespräch."
        description="Darin lässt sich rasch klären, welches Thema Priorität hat, wie groß der Handlungsbedarf ist und wie eine sinnvolle Zusammenarbeit aussehen kann."
        primaryLabel="Kontakt aufnehmen"
        primaryHref="/kontakt"
        secondaryLabel="AI Consulting"
        secondaryHref="/ai-consulting"
      />
    </>
  );
}
