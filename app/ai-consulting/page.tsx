import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { aiOfferModules, companyStory } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "KI-Beratung für KMU",
  description:
    "KI-Beratung für Unternehmen: Potenziale einordnen, sinnvolle Use Cases priorisieren und Pilotprojekte pragmatisch vorbereiten.",
  path: "/ai-consulting",
  keywords: ["KI-Beratung", "AI Consulting", "KI Use Cases", "KI Potenzialanalyse"],
});

const useCases = [
  "KI im Marketing und in der Kampagnenvorbereitung",
  "KI im Vertrieb, in Analyse und Entscheidungsunterstützung",
  "Automatisierung in Administration und Wissensmanagement",
  "Pilotprojekte mit klar abgegrenztem Umfang und realistischem Aufwand",
];

export default function AIConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="KI-Beratung"
        title="KI mit Substanz statt Hype."
        description="Wir helfen Unternehmen dabei, KI-Potenziale nüchtern einzuordnen, sinnvolle Use Cases zu finden und daraus Pilotprojekte abzuleiten, die organisatorisch und wirtschaftlich tragfähig sind."
        highlights={[
          "KI-Potenzialanalyse und Use-Case-Workshop",
          "Priorisierung nach Aufwand, Nutzen und Risiko",
          "Pilotprojekte für Marketing, Vertrieb, Administration und Wissensmanagement",
          "Begleitung von Einführung, Rollen und Prozessen",
        ]}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-2 xl:grid-cols-3 md:py-24">
        {aiOfferModules.map((item) => (
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

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
            Typische Einsatzfelder
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--ink)]">
            {useCases.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
            Worum es nicht geht
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            KI-Beratung bei POSITIVconsult bedeutet nicht, jedem Trend nachzulaufen. Relevant sind nur jene Themen, die im Unternehmen tatsächlich Zeit sparen, Qualität erhöhen, Entscheidungen verbessern oder operative Reibung reduzieren. Genau dort setzen wir an.
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
        </article>
      </section>

      <CtaSection
        eyebrow="KI-Beratung"
        title="Sie möchten einschätzen, welche KI-Themen für Ihr Unternehmen tatsächlich sinnvoll sind?"
        description="Ein fokussiertes Erstgespräch hilft dabei, Potenziale, Risiken und sinnvolle erste Schritte realistisch einzuordnen."
        primaryLabel="KI-Potenziale einschätzen"
        primaryHref="/kontakt"
      />
    </>
  );
}
