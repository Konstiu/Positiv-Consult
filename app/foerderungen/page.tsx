import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Förderungen",
  description:
    "Förderberatung für Wachstums-, Digitalisierungs- und Innovationsvorhaben mit Blick auf Passung, Wirtschaftlichkeit und Projektlogik.",
  path: "/foerderungen",
});

export default function FoerderungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Förderungen"
        title="Fördermöglichkeiten einordnen, ohne das Projekt aus den Augen zu verlieren."
        description="Förderungen sind kein Selbstzweck. Sie sind sinnvoll, wenn sie zu einem realen Vorhaben passen, Investitionen erleichtern und die Umsetzung stärken."
        highlights={[
          "Einordnung passender Förderthemen",
          "Verbindung mit Digitalisierungs- und Innovationsprojekten",
          "Fokus auf Projektlogik und Umsetzbarkeit",
          "Klare Erwartungshaltung statt Förderromantik",
        ]}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-3 md:py-24">
        {[
          {
            title: "Passung prüfen",
            text: "Welche Vorhaben sind inhaltlich und strukturell überhaupt geeignet, um Förderungen sinnvoll zu prüfen?",
          },
          {
            title: "Projekt schärfen",
            text: "Ein gutes Förderthema braucht ein sauberes Zielbild, nachvollziehbare Maßnahmen und eine belastbare Ausgangslage.",
          },
          {
            title: "Wirtschaftlich denken",
            text: "Förderberatung ist nur dann wertvoll, wenn sie zum Unternehmen, zum Vorhaben und zur realen Umsetzung passt.",
          },
        ].map((item) => (
          <article key={item.title} className="surface-card p-6 md:p-7">
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {item.text}
            </p>
          </article>
        ))}
      </section>

      <CtaSection
        eyebrow="Förderberatung"
        title="Sie wollen klären, ob ein Vorhaben förderfähig und wirtschaftlich sinnvoll aufgesetzt werden kann?"
        description="Ein Gespräch schafft Klarheit darüber, wie Förderthemen sauber mit Strategie, Digitalisierung oder Innovation zusammenhängen."
        primaryLabel="Förderthema besprechen"
        primaryHref="/kontakt"
      />
    </>
  );
}
