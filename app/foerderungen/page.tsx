import {PageHeader} from "@/components/page-header";
import {createMetadata} from "@/lib/metadata";
import {fundingFacts} from "@/lib/site-data";

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
            />

            <section className="mx-auto w-full max-w-5xl px-5 py-18 md:px-8 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
                        Wie wir arbeiten
                    </h2>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {fundingSections.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-black/5 bg-white/60 p-5">
                            <h3 className="font-serif text-xl font-semibold text-[var(--brand-blue)]">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto w-full max-w-5xl px-5 pb-18 md:px-8 md:pb-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
                        Fakten zur Förderberatung
                    </h2>
                    <div className="mt-8 space-y-3 text-left">
                        {fundingFacts.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/60 px-4 py-4"
                            >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-blue)]"/>
                                <p className="text-sm leading-7 text-[var(--muted)]">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div
                        className="mt-8 flex items-start gap-3 rounded-2xl border border-dashed border-[var(--brand-blue)]/30 bg-[var(--brand-blue)]/[0.04] px-4 py-4">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-blue)]" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p className="text-sm leading-7 text-[var(--brand-blue)]">
                            Förderberatung erfolgt ohne Garantie auf eine Förderung. Entscheidend ist immer, ob ein
                            Vorhaben fachlich, wirtschaftlich und organisatorisch tragfähig ist.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
