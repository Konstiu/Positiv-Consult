import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { digitalOfferModules } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Digitalisierung für KMU",
  description:
    "Digitalisierungsberatung für KMU: Prozesse analysieren, Systeme priorisieren und digitale Vorhaben in eine sinnvolle Reihenfolge bringen.",
  path: "/digitalisierung",
  keywords: ["Digitalisierung KMU", "Digitalisierungsberatung", "Digital Consulting", "E-Commerce Beratung"],
});

const painPoints = [
  "Historisch gewachsene Prozesse und viele manuelle Arbeitsschritte",
  "Unklare Systemlandschaft mit zu vielen Tools und Schnittstellen",
  "Website oder E-Commerce-Struktur nicht mehr zeitgemäß",
  "Digitale Vorhaben laufen parallel, aber ohne klare Prioritäten",
];

export default function DigitalisierungPage() {
  return (
    <>
      <PageHeader
        eyebrow="KI CONSULTING UND DIGITALISIERUNG"
        title="Künstliche Intelligenz mit Substanz statt Hype."
        description="KI Consulting ist dann sinnvoll, wenn Nutzen, Prozesse und Umsetzung klar zusammenpassen. POSITIVconsult begleitet Unternehmen dabei mit einem nüchternen Blick auf Business-Relevanz und Machbarkeit."
        highlights={[
          "Prozessanalyse und Systempriorisierung",
          "Website- und E-Commerce-Einordnung",
          "Maßnahmenplan nach Aufwand, Wirkung und Umsetzbarkeit",
          "Verbindung zu KI-Beratung und Förderthemen, wenn sinnvoll",
        ]}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-[0.9fr_1.1fr] md:py-24">
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
            Typische digitale Baustellen
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--ink)]">
            {painPoints.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
            Worauf wir schauen
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Digitalisierung beginnt selten auf der grünen Wiese. Meist geht es um bestehende Prozesse, gewachsene Systeme, operative Engpässe und eine Vielzahl von Ideen. Wir helfen dabei, daraus eine sinnvolle Reihenfolge zu machen und echte Hebel von Nebenschauplätzen zu trennen.
          </p>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-4 md:px-8 lg:grid-cols-2 xl:grid-cols-3">
        {digitalOfferModules.map((item) => (
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

      <CtaSection
        eyebrow="Digitalisierung"
        title="Sie möchten digitale Baustellen priorisieren und in eine sinnvolle Reihenfolge bringen?"
        description="Ein Gespräch hilft dabei, Engpässe, Systemfragen, Website-Themen und E-Commerce-Vorhaben gemeinsam einzuordnen."
        primaryLabel="Digitale Baustellen priorisieren"
        primaryHref="/kontakt"
        secondaryLabel="KI-Beratung ansehen"
        secondaryHref="/ai-consulting"
      />
    </>
  );
}
