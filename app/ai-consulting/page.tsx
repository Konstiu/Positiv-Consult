import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { companyStory } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "AI Consulting",
  description:
    "AI Consulting für Unternehmen: Use Cases priorisieren, KI strukturiert in Geschäftsmodell, Teams und Abläufe verankern und realistische Einführungswege ableiten.",
  path: "/ai-consulting",
  keywords: ["AI Consulting Wien", "KI Beratung Unternehmen", "AI Strategie"],
});

const pillars = [
  {
    title: "Use Cases mit Business-Relevanz",
    text: "KI wird dort angesetzt, wo Zeit, Qualität, Conversion, Erkenntnisgewinn oder Skalierbarkeit spürbar verbessert werden können.",
  },
  {
    title: "Pragmatische Pilotierung",
    text: "Nicht jede Idee braucht ein großes Programm. Sinnvoll sind sauber abgegrenzte Pilotprojekte mit Lern- und Nutzeneffekt.",
  },
  {
    title: "Verankerung im Unternehmen",
    text: "Nutzen entsteht erst dann, wenn Prozesse, Verantwortlichkeiten, Governance und Team-Adoption mitgedacht werden.",
  },
];

export default function AIConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Consulting für EPU und KMU"
        title="Künstliche Intelligenz mit Substanz statt Hype."
        description="AI Consulting ist dann sinnvoll, wenn Nutzen, Prozesse und Umsetzung klar zusammenpassen. POSITIVconsult begleitet Unternehmen dabei mit einem nüchternen Blick auf Business-Relevanz und Machbarkeit."
        highlights={[
          "Use Cases mit realem Geschäftsnutzen",
          "Einordnung von Chancen, Risiken und Prioritäten",
          "Begleitung von Pilotierung und Einführung",
          "Fokus auf Business-Wirkung statt Trendrhetorik",
        ]}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-3 md:py-24">
        {pillars.map((item) => (
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

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Typische Themen
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--ink)]">
            <li>Automatisierung repetitiver Wissensarbeit</li>
            <li>Strukturierte Vertriebs- und Marketingprozesse</li>
            <li>Assistenzsysteme für Analyse und Entscheidung</li>
            <li>KI-gestützte Angebots-, Content- oder Serviceprozesse</li>
          </ul>
        </article>
        <article className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Beratungsansatz
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            AI Consulting ist dann sinnvoll, wenn es in Ziele, Prozesse und
            Verantwortlichkeiten eingebettet wird. Deshalb verbindet
            POSITIVconsult Business-Verständnis, Priorisierung und
            Umsetzungsnähe zu einem Beratungsansatz, der zu bewerteten
            KI-Use-Cases, klaren Prioritäten und realistischen nächsten
            Schritten führt.
          </p>
        </article>
      </section>

      <section className="site-shell py-6 md:py-8">
        <div className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
            Fokus
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Im Mittelpunkt stehen sinnvolle Einsatzfelder, realistische
            Prioritäten und eine Einführung, die zum Unternehmen, zu den Teams
            und zu den vorhandenen Prozessen passt.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {companyStory
              .filter((item) => item.year === "2019" || item.year === "2024")
              .map((item) => (
                <span
                  key={`${item.year}-${item.title}`}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[var(--ink)]"
                >
                  {item.year}: {item.title}
                </span>
              ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="AI Roadmap"
        title="Sie möchten KI-Potenzial in Ihrem Unternehmen realistisch einschätzen?"
        description="Ein fokussiertes Erstgespräch hilft, Chancen realistisch einzuordnen, Use Cases zu bewerten und die nächsten Schritte sauber zu priorisieren."
        primaryLabel="KI-Potenzial realistisch einschätzen"
        primaryHref="/kontakt"
      />
    </>
  );
}
