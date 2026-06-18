import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Digitalisierung",
  description:
    "Digitalisierungsberatung für Unternehmen: Prozesse verbessern, Systeme sinnvoll verbinden und Transformation strukturiert umsetzen.",
  path: "/digitalisierung",
  keywords: ["Digitalisierung Beratung", "Digital Consulting Wien"],
});

const focusAreas = [
  "Digitale Prozesse und Abläufe",
  "Systeme, Schnittstellen und Datenflüsse",
  "Priorisierung von Transformationsvorhaben",
  "Umsetzung mit Blick auf Organisation und Praxis",
];

export default function DigitalisierungPage() {
  return (
    <>
      <PageHeader
        eyebrow="Digitalisierung"
        title="Digitalisierung, die Prozesse verbessert statt nur Tools zu ergänzen."
        description="Die bestehende Website nennt digitale Transformation, digitale Kommunikation, Online Marketing und seit 2014 auch Digital Consulting. Die neue Seite verdichtet diese Felder zu einem klareren Digitalisierungsangebot."
        highlights={focusAreas}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-2 md:py-24">
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Wo Digitalisierung Wirkung entfaltet
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Digitalisierung entfaltet dann Wirkung, wenn Abläufe sauber
            strukturiert, Informationswege vereinfacht und operative Reibung
            reduziert werden. Die Altwebsite verknüpft dieses Thema eng mit
            Marketing, Vertrieb, E-Commerce und Wachstum.
          </p>
        </article>
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Wichtiger als das Tool ist das Zielbild
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Die Auswahl von Systemen und Lösungen folgt einem klaren
            Soll-Zustand. Dadurch wird Digitalisierung steuerbar und
            nachvollziehbar, statt Stückwerk zu bleiben. Die neue Struktur
            macht daraus ein nachvollziehbares Beratungsbild für Entscheider.
          </p>
        </article>
      </section>

      <CtaSection
        eyebrow="Digitale Transformation"
        title="Wenn Prozesse, Systeme oder Teams an Grenzen stoßen, braucht es einen klaren Digitalisierungsrahmen."
        description="POSITIVconsult hilft bei Priorisierung, Struktur und Umsetzung digitaler Vorhaben mit einem realistischen Blick auf Organisation, Ressourcen und Nutzen."
        primaryLabel="Digitalisierungsprojekt besprechen"
        primaryHref="/kontakt"
        secondaryLabel="Förderungen ansehen"
        secondaryHref="/foerderungen"
      />
    </>
  );
}
