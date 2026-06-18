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
      "Basierend auf Analyse und Zielsetzung wird gemeinsam die passende Positionierung und Strategie entwickelt.",
    result:
      "Mehr Klarheit für Eigentümer:innen, Geschäftsführung und Teams bei Prioritäten, Marktbearbeitung und Umsetzung.",
  },
  {
    title: "Kampagnen",
    problem:
      "Kampagnen wirken oft nicht mehr, wenn sie mit alten Logiken auf neue digitale Märkte treffen.",
    approach:
      "Kampagnen werden an digitale Rahmenbedingungen, Zielgruppenverhalten und aktuelle Kommunikationsrealitäten angepasst.",
    result:
      "Klarere Marktansprache und bessere Anschlussfähigkeit an digitale Kommunikationskanäle.",
  },
  {
    title: "Vertrieb",
    problem:
      "Vertriebsstrukturen wachsen häufig historisch und verlieren dadurch an Effizienz und Steuerbarkeit.",
    approach:
      "POSITIVconsult unterstützt beim Aufbau effizienter Vertriebsstrukturen und bei der laufenden Optimierung täglicher Verkaufsaktivitäten.",
    result:
      "Mehr Struktur, bessere Prozesse und höhere Wirksamkeit im Vertrieb.",
  },
  {
    title: "Ausschreibungen",
    problem:
      "Bei der Einbindung externer Lieferanten fehlt oft ein klarer Rahmen für Auswahl und Vergleichbarkeit.",
    approach:
      "Beratung bei der Durchführung von Ausschreibungen und bei der Auswahl passender Angebote.",
    result:
      "Bessere Entscheidungsgrundlagen bei Auswahlprozessen mit externen Partnern.",
  },
  {
    title: "Online Marketing",
    problem:
      "Website, Content, Social Media und digitale Reichweite entwickeln sich häufig ohne konsistente Prioritäten.",
    approach:
      "Die digitale Marktbearbeitung wird in Website, Content Marketing, Social Media und Performance-orientierter Kommunikation strukturiert betrachtet.",
    result:
      "Ein konsistenterer digitaler Auftritt mit klarerer Markt- und Kommunikationswirkung.",
  },
  {
    title: "E-Commerce",
    problem:
      "Digitale Vertriebskanäle benötigen mehr als nur Technologie; sie brauchen geschäftliche Logik, Prozesse und Kundennähe.",
    approach:
      "E-Commerce wird als Teil der Gesamtstrategie und der digitalen Kundenreise betrachtet.",
    result:
      "Besser abgestimmte digitale Verkaufsprozesse und mehr Anschlussfähigkeit an Wachstumsvorhaben.",
  },
  {
    title: "Startups",
    problem:
      "Junge Unternehmen müssen ihr Modell, ihre Story und ihren Markt fit für Wachstum und Finanzierung machen.",
    approach:
      "Begleitung bei Business Modelling, Investor-Pitches und weiteren Startup-relevanten Fragestellungen.",
    result:
      "Mehr Schärfe in Angebot, Geschäftsmodell und Kommunikation gegenüber Investoren und Markt.",
  },
  {
    title: "Internationales",
    problem:
      "Markteintritte sind oft komplex, weil lokale Marktlogiken, Partner und Prioritäten zusammengebracht werden müssen.",
    approach:
      "Mit internationalen Partnern begleitet POSITIVconsult Markteintritte laut Altwebsite unter anderem in die USA, nach Brasilien, Deutschland, die Schweiz und China.",
    result:
      "Bessere Vorbereitung und strukturiertere Entscheidungen bei Internationalisierungsvorhaben.",
  },
  {
    title: "Förderberatung",
    problem:
      "Förderthemen werden häufig zu spät oder ohne klaren Projektbezug betrachtet.",
    approach:
      "Fördermöglichkeiten werden im Kontext von EPU-, KMU-, Digitalisierungs- oder Transformationsvorhaben eingeordnet und mit dem Projektziel abgeglichen.",
    result:
      "Realistische Einschätzung, ob und wie Förderungen zum Vorhaben passen könnten, ohne Förderzusagen zu suggerieren.",
  },
  {
    title: "AI Consulting",
    problem:
      "KI wird oft diffus diskutiert, ohne klaren Nutzen, Prioritäten oder organisatorische Tragfähigkeit.",
    approach:
      "Seit 2024 führt POSITIVconsult AI Consulting als Schwerpunkt. Die neue Positionierung übersetzt das in einen pragmatischen Beratungsansatz mit Fokus auf sinnvolle Einsatzfelder.",
    result:
      "Mehr Klarheit darüber, wo KI im Unternehmen wirklich Wirkung entfalten kann und wo nicht.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen"
        title="Alle öffentlich erkennbaren Leistungsbereiche der bisherigen Website, neu strukturiert."
        description="Die neue Leistungsseite übernimmt die vorhandenen Themen der Altwebsite, ordnet sie klarer und formuliert sie moderner: mit Problem, Beratungsansatz und erwartetem Nutzen."
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
        primaryLabel="Beratungsgespräch anfragen"
        primaryHref="/kontakt"
      />
    </>
  );
}
