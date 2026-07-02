import {PageHeader} from "@/components/page-header";
import {createMetadata} from "@/lib/metadata";
import {clientCategories, proofTeasers} from "@/lib/site-data";

export const metadata = createMetadata({
    title: "Referenzen",
    description:
        "Referenzen und Erfahrung von POSITIVconsult: Branchen, Kundenfelder und typische Beratungsaufgaben im Überblick.",
    path: "/kunden-erfahrung",
});

export default function KundenErfahrungPage() {
    return (
        <>
            <PageHeader
                eyebrow="Referenzen"
                title="Erfahrung aus unterschiedlichen Branchen und Unternehmensrealitäten."
                description="POSITIVconsult arbeitet mit KMU, Start-ups, Institutionen und wirtschaftsnahen Organisationen. Die Referenzen zeigen keine dekorativen Behauptungen, sondern echte Branchenbreite und typische Themenfelder."
            />

            <section className="mx-auto grid w-full max-w-5xl gap-5 px-5 py-18 md:px-8 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
                        Typische Beratungsaufgaben
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                        Ein Überblick über die Themenfelder, in denen wir Unternehmen begleiten.
                    </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {proofTeasers.map((item) => (
                        <article key={item.title} className="rounded-2xl border border-black/5 bg-white/60 p-6">
                            <h2 className="font-serif text-xl font-semibold text-[var(--brand-blue)]">
                                {item.title}
                            </h2>
                            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                {item.text}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto w-full max-w-5xl px-5 pb-18 md:px-8 md:pb-24">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="eyebrow">Kunden & Branchen</span>
                    <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
                        Ein Auszug aus Unternehmen und Organisationen, mit denen POSITIVconsult gearbeitet hat.
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                        Echte Kunden, echte Projekte: Die folgenden Namen zeigen unsere Branchen und Erfahrungsfelder.
                    </p>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {clientCategories.slice(0, 3).map((group) => (
                        <article key={group.category} className="rounded-2xl border border-black/5 bg-white/60 p-6">
                            <h3 className="font-serif text-xl font-semibold text-[var(--brand-blue)]">
                                {group.category}
                            </h3>
                            <ul className="mt-5 space-y-2">
                                {group.names.map((name) => (
                                    <li key={name}
                                        className="flex items-start gap-3 text-sm leading-6 text-[var(--ink)]">
                                        <span
                                            aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-blue)]"/>
                                        <span>{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2 md:w-2/3 md:mx-auto">
                    {clientCategories.slice(3, 5).map((group) => (
                        <article key={group.category} className="rounded-2xl border border-black/5 bg-white/60 p-6">
                            <h3 className="font-serif text-xl font-semibold text-[var(--brand-blue)]">
                                {group.category}
                            </h3>
                            <ul className="mt-5 space-y-2">
                                {group.names.map((name) => (
                                    <li key={name}
                                        className="flex items-start gap-3 text-sm leading-6 text-[var(--ink)]">
                                        <span
                                            aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-blue)]"/>
                                        <span>{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
