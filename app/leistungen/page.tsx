import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Leistungen",
  description:
    "Leistungsbereiche von POSITIVconsult: Strategie, Kampagnen, Vertrieb, Online Marketing, E-Commerce, Startups, Ausschreibungen, Internationalisierung, Förderberatung und AI Consulting.",
  path: "/leistungen",
});

const serviceBlocks = [
  {
    title: "Strategie",
    problem:
      "Wenn Positionierung, Zielbild oder Wachstumsrichtung nicht präzise genug sind, werden Markt- und Vertriebsentscheidungen unscharf.",
    approach:
      "POSITIVconsult verdichtet Marktbild, Zielgruppen, Angebotslogik und Wachstumsrichtung zu einer belastbaren strategischen Linie.",
    result:
      "Am Ende liegen klare Entscheidungsgrundlagen, priorisierte Maßnahmen und eine nachvollziehbare Wachstumsrichtung vor.",
  },
  {
    title: "Kampagnen",
    problem:
      "Kampagnen wirken oft nicht mehr, wenn sie mit alten Logiken auf neue digitale Märkte treffen.",
    approach:
      "Kampagnen werden an Zielgruppenverhalten, digitale Kanäle, Botschaften und Timing angepasst und in eine tragfähige Kommunikationslogik überführt.",
    result:
      "Unternehmen erhalten eine abgestimmte Kampagnenlogik mit klarer Marktansprache, passenden Kanälen und umsetzbaren Maßnahmen.",
  },
  {
    title: "Vertrieb",
    problem:
      "Vertriebsstrukturen wachsen häufig historisch und verlieren dadurch an Effizienz und Steuerbarkeit.",
    approach:
      "POSITIVconsult strukturiert Vertriebsabläufe, Rollen, Prioritäten und Marktbearbeitung so, dass operative Aktivitäten besser steuerbar werden.",
    result:
      "Nach der Zusammenarbeit stehen strukturierte Vertriebsprozesse, klare Zuständigkeiten und ein belastbarer nächster Umsetzungsschritt.",
  },
  {
    title: "Ausschreibungen",
    problem:
      "Bei der Einbindung externer Lieferanten fehlt oft ein klarer Rahmen für Auswahl und Vergleichbarkeit.",
    approach:
      "Ausschreibungen werden fachlich vorbereitet, Vergleichskriterien geschärft und Angebote entlang von Ziel, Aufwand und Eignung bewertet.",
    result:
      "Entscheidungsteams erhalten eine strukturierte Auswahlgrundlage und nachvollziehbare Kriterien für die Partnerentscheidung.",
  },
  {
    title: "Online Marketing",
    problem:
      "Website, Content, Social Media und digitale Reichweite entwickeln sich häufig ohne konsistente Prioritäten.",
    approach:
      "Die digitale Marktbearbeitung wird über Website, Content, Social Media und Performance-Kommunikation hinweg geordnet und aufeinander abgestimmt.",
    result:
      "Am Ende steht eine abgestimmte Kommunikationslogik mit klaren Prioritäten für Inhalte, Kanäle und Marktbearbeitung.",
  },
  {
    title: "E-Commerce",
    problem:
      "Digitale Vertriebskanäle benötigen mehr als nur Technologie; sie brauchen geschäftliche Logik, Prozesse und Kundennähe.",
    approach:
      "E-Commerce wird als Teil von Angebot, Vertrieb, Prozessen und digitaler Kundenreise betrachtet und nicht isoliert als Shop-Thema behandelt.",
    result:
      "Unternehmen erhalten abgestimmte digitale Verkaufsprozesse, klare Prioritäten und eine realistische Weiterentwicklungsrichtung.",
  },
  {
    title: "Startups",
    problem:
      "Junge Unternehmen müssen ihr Modell, ihre Story und ihren Markt fit für Wachstum und Finanzierung machen.",
    approach:
      "POSITIVconsult begleitet Business Modelling, Positionierung, Pitch-Logik und die Vorbereitung zentraler Entscheidungs- und Kommunikationsunterlagen.",
    result:
      "Danach liegen ein geschärftes Geschäftsmodell, eine klare Marktlogik und belastbare Unterlagen für Gespräche mit Investor:innen oder Partnern vor.",
  },
  {
    title: "Internationales",
    problem:
      "Markteintritte sind oft komplex, weil lokale Marktlogiken, Partner und Prioritäten zusammengebracht werden müssen.",
    approach:
      "Mit internationalen Partnern begleitet POSITIVconsult die Vorbereitung von Markteintritten, die Partnerauswahl und die Priorisierung der nächsten Schritte.",
    result:
      "Unternehmen haben danach eine strukturierte Entscheidungsgrundlage für Markt, Partner und den konkreten Eintrittspfad.",
  },
  {
    title: "Förderberatung",
    problem:
      "Förderthemen werden häufig zu spät oder ohne klaren Projektbezug betrachtet.",
    approach:
      "Fördermöglichkeiten werden im Kontext von EPU-, KMU-, Digitalisierungs- oder Transformationsvorhaben fachlich eingeordnet und mit Ziel, Umfang und Projektlogik abgeglichen.",
    result:
      "Am Ende steht eine Förderfähigkeits-Einschätzung mit klarem Projektbezug und einem realistischen nächsten Schritt.",
  },
  {
    title: "AI Consulting",
    problem:
      "KI wird oft diffus diskutiert, ohne klaren Nutzen, Prioritäten oder organisatorische Tragfähigkeit.",
    approach:
      "POSITIVconsult übersetzt KI-Themen in einen pragmatischen Beratungsansatz mit Fokus auf sinnvolle Einsatzfelder, Priorisierung und Umsetzung.",
    result:
      "Unternehmen erhalten bewertete KI-Use-Cases, klare Prioritäten und eine realistische Grundlage für Pilotierung oder Einführung.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen"
        title="Leistungen für Markt, Wachstum und digitale Entwicklung."
        description="POSITIVconsult begleitet Unternehmen in Strategie, Vertrieb, Marketing, Digitalisierung, E-Commerce, Förderthemen und AI Consulting — strukturiert, pragmatisch und mit klaren Ergebnissen für die nächsten Entscheidungen."
        highlights={[
          "Strategie, Kampagnen und Vertrieb",
          "Online Marketing, E-Commerce und Digitalisierung",
          "Ausschreibungen, Startups und Internationalisierung",
          "Förderberatung und AI Consulting",
        ]}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-2 md:py-24">
        {serviceBlocks.map((service) => (
          <article key={service.title} className="surface-card p-6 md:p-7">
            <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
              {service.title}
            </h2>
            <div className="mt-5 grid gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {service.problem}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Beratungsansatz
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {service.approach}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Nutzen
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {service.result}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <CtaSection
        eyebrow="Leistungsabgleich"
        title="Sie möchten klären, welches Thema für Ihr Unternehmen gerade Priorität hat?"
        description="Ein Erstgespräch hilft, den eigentlichen Beratungsbedarf sauber zu benennen und aus den vorhandenen Leistungsfeldern den richtigen Schwerpunkt abzuleiten."
        primaryLabel="30-minütiges Erstgespräch vereinbaren"
        primaryHref="/kontakt"
      />
    </>
  );
}
