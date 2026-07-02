import {PageHeader} from "@/components/page-header";
import {ServiceAccordion} from "@/components/service-accordion";
import {createMetadata} from "@/lib/metadata";

export const metadata = createMetadata({
    title: "Leistungen",
    description:
        "Leistungsbereiche von POSITIVconsult: Strategie, Marketing, Vertrieb, Digitalisierung, KI-Beratung, Förderberatung, E-Commerce, Ausschreibungen und Internationalisierung.",
    path: "/leistungen",
});

const serviceBlocks = [
    {
        title: "Strategie",
        problem:
            "Wenn Marktchancen, Zielgruppen, Angebote und Ressourcen nicht sauber eingeordnet sind, werden Investitionen, Vertrieb und Wachstum schnell unscharf.",
        approach:
            "Wir ordnen Marktbild, Positionierung, Zielgruppen, Angebotslogik und interne Möglichkeiten gemeinsam mit der Geschäftsführung und relevanten Verantwortlichen.",
        result:
            "Sie erhalten eine belastbare Grundlage für Prioritäten, Entscheidungen und die nächsten strategischen Schritte.",
    },
    {
        title: "Marketing & Kampagnen",
        problem:
            "Kommunikation verliert Wirkung, wenn Botschaften, Kanäle und Zielgruppen nicht mehr zusammenpassen oder Kampagnen nur operativ weiterlaufen.",
        approach:
            "Wir entwickeln Kommunikationsstrategie, Kampagnen-Setup und Kanalprioritäten mit Blick auf Marktumfeld, Zielgruppe und verfügbare Ressourcen.",
        result:
            "Am Ende steht ein nachvollziehbarer Ansatz für Inhalte, Kampagnen und digitale Kanäle, der tatsächlich anschlussfähig ist.",
    },
    {
        title: "Vertrieb",
        problem:
            "Historisch gewachsene Vertriebsstrukturen machen Marktbearbeitung oft aufwendig, unübersichtlich oder schwer steuerbar.",
        approach:
            "Wir analysieren Rollen, Prozesse, Angebotslogik und operative Vertriebsaktivitäten und bringen diese in eine klarere Struktur.",
        result:
            "Sie bekommen eine belastbare Grundlage für Vertriebsorganisation, Prioritäten und die Weiterentwicklung laufender Aktivitäten.",
    },
    {
        title: "Digitalisierung",
        problem:
            "Viele KMU arbeiten mit historisch gewachsenen Prozessen, zu vielen Tools und einer Systemlandschaft ohne klare Priorität.",
        approach:
            "Wir analysieren Prozesse, Systeme, Schnittstellen und digitale Baustellen und priorisieren nach Wirkung, Aufwand und Umsetzbarkeit.",
        result:
            "Sie erhalten einen Maßnahmenplan, der digitale Vorhaben in eine realistische Reihenfolge bringt.",
    },
    {
        title: "KI-Beratung",
        problem:
            "KI ist oft präsent, aber unklar bleibt, welche Use Cases wirklich sinnvoll sind und wie groß Aufwand, Risiko und Nutzen tatsächlich sind.",
        approach:
            "Wir prüfen Einsatzfelder, priorisieren Use Cases und definieren klar abgegrenzte Pilotprojekte für Marketing, Vertrieb, Administration oder Wissensmanagement.",
        result:
            "Sie bekommen eine realistische Einschätzung, welche KI-Themen für Ihr Unternehmen sinnvoll sind und wie ein guter Einstieg aussehen kann.",
    },
    {
        title: "Förderberatung",
        problem:
            "Förderthemen werden oft erst dann betrachtet, wenn das Projekt schon läuft oder die Projektlogik noch nicht ausgereift ist.",
        approach:
            "Wir unterstützen bei der Einordnung von Förderfähigkeit, Projektlogik und nächsten Schritten im Zusammenhang mit Digitalisierung, Innovation oder Wachstum.",
        result:
            "Sie wissen, ob ein Vorhaben fachlich und wirtschaftlich zu möglichen Förderthemen passt und wie die nächsten Schritte aussehen.",
    },
    {
        title: "E-Commerce",
        problem:
            "Shop, Website und digitale Vertriebskanäle entwickeln sich häufig auseinander und werden nicht mehr als gemeinsamer Verkaufsprozess gedacht.",
        approach:
            "Wir betrachten E-Commerce im Zusammenspiel mit Sortiment, Website, Vertrieb, Service und internen Abläufen.",
        result:
            "Sie erhalten eine Einordnung, wo im digitalen Verkauf die größten Hebel liegen und was zuerst verbessert werden sollte.",
    },
    {
        title: "Ausschreibungen",
        problem:
            "Wenn externe Partner eingebunden werden sollen, fehlt oft eine belastbare Grundlage für Vergleich, Auswahl und Entscheidung.",
        approach:
            "Wir unterstützen bei Ausschreibungslogik, Auswahlkriterien, Anbieterbewertung und der fachlichen Strukturierung des Prozesses.",
        result:
            "Sie erhalten eine nachvollziehbare Entscheidungsgrundlage für Partner, Anbieter oder Lieferanten.",
    },
    {
        title: "Start-ups",
        problem:
            "Junge Unternehmen müssen Geschäftsmodell, Angebot, Marktansprache und Pitch-Logik gleichzeitig schärfen, obwohl Ressourcen meist knapp sind.",
        approach:
            "Wir begleiten bei Positionierung, Angebotslogik, Marktansprache, Pitch-Unterlagen und den nächsten strategischen Entscheidungen.",
        result:
            "Sie gewinnen Klarheit darüber, wie Geschäftsmodell, Markt und Kommunikation sinnvoll auf Wachstum vorbereitet werden können.",
    },
    {
        title: "Internationalisierung",
        problem:
            "Ein neuer Markt ist nicht nur eine Vertriebsfrage, sondern eine Kombination aus Marktlogik, Partnerwahl, Prioritäten und Ressourcen.",
        approach:
            "Mit internationalen Partnern begleiten wir die Einordnung von Märkten, die Auswahl geeigneter Kontakte und die Vorbereitung der nächsten Schritte.",
        result:
            "Sie erhalten eine strukturierte Grundlage für die Frage, ob und wie ein Markteintritt sinnvoll vorbereitet werden sollte.",
    },
];

export default function LeistungenPage() {
    return (
        <>
            <PageHeader
                eyebrow="Leistungen"
                title="Beratungsfelder für Entscheidungen, Prioritäten und konkrete Vorhaben."
                description="POSITIVconsult unterstützt bei Strategie, Marketing, Vertrieb, Digitalisierung, KI-Beratung, Förderthemen und angrenzenden Wachstumsvorhaben – mit einem klaren Blick auf Umsetzbarkeit und unternehmerische Relevanz."
            />

            <section className="mx-auto grid w-full max-w-5xl gap-4 px-5 py-18 md:px-8 md:py-24">
                {serviceBlocks.map((service) => (
                    <ServiceAccordion
                        key={service.title}
                        title={service.title}
                        problem={service.problem}
                        approach={service.approach}
                        result={service.result}
                    />
                ))}
            </section>
        </>
    );
}
