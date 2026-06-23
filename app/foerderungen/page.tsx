import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { fundingFacts } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Förderungen",
  description:
    "Förderberatung für Digitalisierungs-, Innovations- und Wachstumsvorhaben: Förderfähigkeit einordnen, Projektlogik schärfen und nächste Schritte ableiten.",
  path: "/foerderungen",
});

const fundingSections = [
  {
    title: "Förderfähigkeit einordnen",
    text: "Wir unterstützen dabei, zu klären, ob ein Vorhaben inhaltlich und wirtschaftlich zu möglichen Förderthemen passt.",
  },
  {
    title: "Projektlogik schärfen",
    text: "Ein überzeugendes Förderthema braucht ein klares Zielbild, einen nachvollziehbaren Projektbezug und sinnvolle Maßnahmen.",
  },
  {
    title: "Nächste Schritte ableiten",
    text: "Wir helfen dabei, Förderthemen mit Digitalisierung, Innovation oder Wachstum sauber zu verbinden und den nächsten Schritt realistisch einzuordnen.",
  },
];

export default function FoerderungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Förderungen"
        title="Förderthemen sachlich prüfen, ohne das Projekt aus den Augen zu verlieren."
        description="Förderberatung ist dann sinnvoll, wenn ein Vorhaben inhaltlich schlüssig ist und die Projektlogik trägt. Genau dort setzen wir an – ohne Förderversprechen und ohne künstliche Aufblähung."
        highlights={[
          "WKO- und KMU.DIGITAL-nahe Beratungserfahrung",
          "Einordnung von Förderfähigkeit, Projektlogik und nächsten Schritten",
          "Verbindung zu Digitalisierungs-, KI- und Wachstumsvorhaben",
          "Keine Garantien, sondern realistische Einschätzung",
        ]}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-3 md:py-24">
        {fundingSections.map((item) => (
          <article key={item.title} className="surface-card p-6 md:p-7">
            <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
              {item.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
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
            Förderberatung erfolgt ohne Garantie auf eine Förderung. Entscheidend ist immer, ob ein Vorhaben fachlich, wirtschaftlich und organisatorisch tragfähig ist.
          </p>
        </div>
      </section>

      <CtaSection
        eyebrow="Förderberatung"
        title="Sie möchten klären, ob ein Vorhaben förderfähig und sinnvoll aufgesetzt werden kann?"
        description="In einem Gespräch ordnen wir das Projekt, die Förderlogik und die nächsten Schritte gemeinsam ein."
        primaryLabel="Förderfähigkeit besprechen"
        primaryHref="/kontakt"
      />
    </>
  );
}
