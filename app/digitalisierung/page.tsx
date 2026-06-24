import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "KI Consulting & Digitalisierung für KMU",
  description:
    "KI Consulting und Digitalisierungsberatung für KMU: Prozesse analysieren, Use Cases identifizieren, Maßnahmen priorisieren und Pilotprojekte begleiten.",
  path: "/digitalisierung",
  keywords: ["KI-Beratung", "AI Consulting", "Digitalisierung KMU", "Digitalisierungsberatung", "E-Commerce Beratung", "KI Use Cases"],
});

const fourBlocks = [
  {
    num: "1",
    title: "Analyse von Prozessen, Systemen und digitalen Kanälen",
    text: "Wir bewerten bestehende Prozesse, Systemlandschaften, Websites und E-Commerce-Strukturen im Hinblick auf Effizienz, Nutzererlebnis, Automatisierungspotenzial und digitale Weiterentwicklung.",
  },
  {
    num: "2",
    title: "Identifikation von KI- und Digitalisierungs-Use-Cases",
    text: "Wir entwickeln konkrete Anwendungsfälle für KI und Digitalisierung mit realem Geschäftsnutzen – etwa zur Prozessautomatisierung, Vertriebsunterstützung, Kundenkommunikation, Datenanalyse oder Effizienzsteigerung.",
  },
  {
    num: "3",
    title: "Bewertung von Chancen, Risiken und Prioritäten",
    text: "Wir ordnen mögliche Maßnahmen realistisch ein: nach Business-Wirkung, Aufwand, Umsetzbarkeit, Risiken und strategischer Relevanz. So entsteht Klarheit darüber, welche Themen kurzfristig sinnvoll sind und welche vorbereitet werden müssen.",
  },
  {
    num: "4",
    title: "Maßnahmenplan, Pilotierung und Einführung",
    text: "Wir übersetzen die Analyse in einen konkreten Maßnahmenplan und begleiten Pilotprojekte sowie die Einführung digitaler oder KI-basierter Lösungen – inklusive Priorisierung, Erfolgskriterien und optionaler Verbindung zu Förderthemen.",
  },
];

const painPoints = [
  "Historisch gewachsene Prozesse mit vielen manuellen Arbeitsschritten",
  "Unklare Systemlandschaften mit zu vielen Tools, Schnittstellen und Dateninseln",
  "Websites, Shops oder digitale Touchpoints, die nicht mehr zum heutigen Kundenverhalten passen",
  "Digitalisierungs- und KI-Vorhaben, die parallel laufen, aber ohne klare Priorisierung",
  "Operative Engpässe, bei denen Automatisierung oder KI echten Mehrwert schaffen könnte",
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

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 md:grid-cols-2 md:py-24">
        {fourBlocks.map((block) => (
          <article key={block.num} className="surface-card p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-dark)] font-serif text-sm font-bold text-white">
                {block.num}
              </span>
              <h2 className="font-serif text-xl font-semibold text-[var(--brand-blue)]">
                {block.title}
              </h2>
            </div>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              {block.text}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-4 md:px-8">
        <div className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
            Typische digitale Baustellen
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Digitalisierung beginnt selten bei null. Häufig bestehen bereits gewachsene Prozesse, viele Tools, manuelle Arbeitsschritte und zahlreiche Ideen für Verbesserungen. Wir helfen dabei, diese Themen zu ordnen, echte Hebel zu erkennen und daraus einen realistischen Maßnahmenplan abzuleiten.
          </p>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Wir analysieren Prozesse, Websites, E-Commerce-Strukturen, Tools und Schnittstellen mit Blick auf Effizienz, Nutzererlebnis, Automatisierungspotenzial und geschäftlichen Nutzen. Dabei betrachten wir auch, wo KI sinnvoll eingesetzt werden kann — etwa zur Prozessautomatisierung, Datenanalyse, Kundenkommunikation oder Vertriebsunterstützung.
          </p>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Das Ergebnis ist ein klar priorisierter Fahrplan: mit sinnvollen Etappen, realistischen Maßnahmen und einer fundierten Einordnung nach Aufwand, Wirkung und Umsetzbarkeit. Auf Wunsch begleiten wir auch Pilotierung, Einführung und die Abstimmung mit Umsetzungspartnern oder Förderstellen.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--ink)]">
            {painPoints.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        eyebrow="Digitalisierung"
        title="Sie möchten digitale Baustellen priorisieren und in eine sinnvolle Reihenfolge bringen?"
        description="Ein Gespräch hilft dabei, Engpässe, Systemfragen, Website-Themen und E-Commerce-Vorhaben gemeinsam einzuordnen."
        primaryLabel="Erstgespräch vereinbaren"
        primaryHref="/kontakt"
      />
    </>
  );
}
