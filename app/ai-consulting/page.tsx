import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { companyStory } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "AI Consulting",
  description:
    "AI Consulting für Unternehmen: Use Cases priorisieren, Prozesse verbessern und KI strukturiert in Geschäftsmodell, Teams und Abläufe verankern.",
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
    text: "Wirkung entsteht erst dann, wenn Prozesse, Verantwortlichkeiten, Governance und Team-Adoption mitgedacht werden.",
  },
];

export default function AIConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Consulting"
        title="Künstliche Intelligenz mit Substanz statt Hype."
        description="Die bestehende Website nennt AI seit 2024 als eigenen Schwerpunkt und verweist seit 2019 auf Vorträge zu digitaler Kommunikation und KI. Die neue Seite baut darauf auf und formuliert AI Consulting bewusst sachlich und ohne Übertreibung."
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
            <li>Bessere Vertriebs- und Marketingprozesse</li>
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
            Umsetzungsnähe zu einem Beratungsansatz, der nicht in
            Technologiebegeisterung stecken bleibt.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-6 md:px-8">
        <div className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Einordnung aus der Altwebsite
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            AI Consulting erscheint auf der bisherigen Website als Erweiterung
            seit 2024. Zugleich verweist die Unternehmensgeschichte auf
            Vorträge zu digitaler Kommunikation und KI seit 2019. Die neue
            Seite interpretiert das als seriösen Ausbau eines bestehenden
            Digitalfokus, nicht als losgelöstes Zukunftsversprechen.
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
        title="Sie möchten prüfen, wo KI in Ihrem Unternehmen wirklich sinnvoll einsetzbar ist?"
        description="Ein fokussiertes Erstgespräch hilft, Chancen realistisch einzuordnen und die nächsten Schritte sauber zu priorisieren."
        primaryLabel="AI Gespräch anfragen"
        primaryHref="/kontakt"
      />
    </>
  );
}
