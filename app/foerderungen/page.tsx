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
        description="Förderberatung ist dann sinnvoll, wenn sie zu einem klaren Vorhaben passt. POSITIVconsult unterstützt dabei, passende Förderthemen einzuordnen und mit Strategie, Digitalisierung oder Innovation sinnvoll zu verbinden."
        highlights={[
          "Einordnung passender Förderthemen",
          "Verbindung mit Digitalisierungs- und Innovationsprojekten",
          "Fokus auf Projektlogik und Umsetzbarkeit",
          "Realistische Einschätzung statt leeren Versprechen",
        ]}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-3 md:py-24">
        {[
          {
            title: "Passung prüfen",
            text: "Nicht jedes Vorhaben eignet sich gleichermaßen. Entscheidend ist, ob Ziel, Umfang und Projektlogik sauber zusammenpassen.",
          },
          {
            title: "Projekt schärfen",
            text: "Ein gutes Förderthema braucht ein klares Zielbild, nachvollziehbare Maßnahmen und eine belastbare Ausgangslage.",
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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
            Förderberatung im Überblick
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
            Förderberatung erfolgt ohne Garantien. Entscheidend ist immer, ob
            die Fördermöglichkeit fachlich, wirtschaftlich und organisatorisch
            zum Vorhaben passt.
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
