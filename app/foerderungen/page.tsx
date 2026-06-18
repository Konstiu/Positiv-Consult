import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { fundingFacts } from "@/lib/site-data";

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
        description="Die Altwebsite nennt Förderberatung seit 2017 und verweist auf Beraterpool-Zugehörigkeiten bei WKW, WK Niederösterreich und KMU.DIGITAL. Die neue Seite formuliert das bewusst nüchtern: Förderungen können sinnvoll sein, müssen aber immer im Einzelfall geprüft werden."
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

      <section className="mx-auto w-full max-w-7xl px-5 py-4 md:px-8">
        <div className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Öffentlich genannte Grundlagen
          </p>
          <div className="mt-5 grid gap-3">
            {fundingFacts.map((item) => (
              <p
                key={item}
                className="rounded-[1.35rem] border border-black/8 bg-white/72 px-4 py-4 text-sm leading-7 text-[var(--muted)]"
              >
                {item}
              </p>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--muted)]">
            TODO: Vor Livegang Förderprogramme, Pool-Zugehörigkeiten und
            Zertifizierungen nochmals aktuell prüfen. Diese Seite formuliert
            bewusst keine Fördergarantien.
          </p>
        </div>
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
