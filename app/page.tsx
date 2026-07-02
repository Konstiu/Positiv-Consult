import {Suspense} from "react";
import Link from "next/link";

import {ContactPanel} from "@/components/contact-panel";
import {ContactCard} from "@/components/contact-card";
import {ScrollToSection} from "@/components/scroll-to-section";
import {SectionHeading} from "@/components/section-heading";
import {createMetadata} from "@/lib/metadata";
import {clientCategoriesSelected, coreServices, teamContacts, withBasePath,} from "@/lib/site-data";
import {StatsStrip} from "@/components/stats-strip";

export const metadata = createMetadata({
    title: "POSITIVconsult – Strategie, Digitalisierung & KI-Beratung für KMU",
    description:
        "Unternehmensberatung für KMU, Eigentümer:innen und Geschäftsführungen: Strategie, Marketing, Vertrieb, Digitalisierung, KI und Förderberatung – pragmatisch und umsetzungsnah.",
    path: "/",
    keywords: [
        "Unternehmensberatung KMU",
        "Strategieberatung",
        "Digitalisierung Beratung",
        "KI-Beratung",
        "Förderberatung",
    ],
});

export default function Home() {
    return (
        <>
            <Suspense fallback={null}>
                <ScrollToSection/>
            </Suspense>

            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-position-[center_30%] opacity-[0.12] mask-[linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)]"
                    style={{backgroundImage: `url('${withBasePath("/ai-images/output.png")}')`}}
                    aria-hidden="true"
                />
                <div
                    className="site-shell relative grid gap-12 py-24 md:py-32 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center lg:py-36">
                    <div className="fade-up space-y-5">
                        <span className="eyebrow">Unternehmensberatung</span>
                        <div className="space-y-5">
                            <h1 className="max-w-5xl text-balance font-serif text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-[4.1rem] lg:leading-[1.02]">
                                Strategie, Digitalisierung, Automatisierung und KI für moderne Unternehmen.
                            </h1>
                            <p className="max-w-3xl text-pretty text-lg leading-8 text-[var(--muted)]">
                                POSITIVconsult ist eine Unternehmensberatung aus Wien für
                                Eigentümer:innen, Geschäftsführung, Entscheidungsteams, Start-Ups, EPU und
                                KMU. Zwei erfahrene Ansprechpartner begleiten Unternehmen bei
                                Positionierung, Marketing, Vertrieb, digitaler Transformation,
                                E-Commerce, Förderthemen und AI Consulting — von der Analyse
                                bis zum konkreten nächsten Umsetzungsschritt.
                            </p>
                        </div>


                    </div>

                    <div className="fade-up max-w-xl lg:justify-self-end">
                        <div className="border-l-2 border-[rgba(31,78,140,0.28)] pl-5 md:pl-6">
                            <p className="text-base font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue)] md:text-lg">
                                Wofür Unternehmen uns holen
                            </p>
                            <ul className="mt-6 space-y-4">
                                {[
                                    "Strategie, Marketing, Vertrieb und digitale Transformation integriert gedacht",
                                    "Direkter Austausch mit Eigentümer:innen, Geschäftsführung und Entscheidungsteams",
                                    "Pragmatische Einschätzung von KI-, Digitalisierungs- und Förderthemen",
                                    "Aktuelle Impulse mit konsequentem Fokus auf die praktische Umsetzung",
                                    "Langjährige Partnerschaften und ein belastbares Netzwerk in Umsetzung und Spezialthemen",
                                ].map((item) => (
                                    <li key={item}
                                        className="flex items-start gap-3 text-base leading-7 text-[var(--muted)]">
                    <span
                        aria-hidden="true"
                        className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-blue)]"
                    />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-8 md:h-12"/>
            <StatsStrip/>

            {/* Team Section - Gesichter schaffen Vertrauen */}
            <section className="site-shell section-space flex flex-col gap-10">
                <div className="mx-auto max-w-3xl space-y-4 text-center">
                    <span className="eyebrow">Das Team</span>
                    <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
                        Persönliche Beratung von Anfang an.
                    </h2>
                    <p className="mx-auto max-w-2xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
                        Dr. Heidrun Unterweger und Mag. Marc Isop begleiten Ihre Projekte direkt –
                        mit kurzen Entscheidungswegen, persönlicher Verfügbarkeit und langjähriger Erfahrung.
                    </p>
                </div>
                <div className="grid gap-8 max-w-5xl mx-auto w-full">
                    {teamContacts.map((person) => (
                        <ContactCard
                            key={person.email}
                            name={person.name}
                            role={person.role}
                            email={person.email}
                            phone={person.phone}
                            photoUrl={person.photoUrl}
                        />
                    ))}
                </div>
            </section>

            <section id="leistungen" className="site-shell section-space flex flex-col gap-12">
                <SectionHeading
                    eyebrow="Leistungen"
                    title="Beratungsfelder mit klarem Fokus auf Umsetzung."
                    description="Ein breites Spektrum an Beratungsfeldern, die ineinandergreifen. Entdecken Sie unsere Schwerpunkte – oder sprechen Sie uns direkt auf Ihr konkretes Vorhaben an."
                    align="center"
                />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {coreServices.map((service) => (
                        <article key={service.title} className="surface-card p-5 md:p-6">
                            <h3 className="font-serif text-xl font-semibold text-[var(--brand-blue)]">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>
                <div className="mt-4 flex justify-center">
                    <Link
                        href="/leistungen"
                        className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue)]/90"
                    >
                        Zu weiteren Leistungen
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                        </svg>
                    </Link>
                </div>
            </section>

            {/*<section className="site-shell section-space flex flex-col gap-10">*/}
            {/*  <SectionHeading*/}
            {/*      eyebrow="Erfahrung"*/}
            {/*      title="Vertrauen entsteht durch Erfahrung, Klarheit und persönliche Begleitung."*/}
            {/*      description="Zwei erfahrene Partner begleiten Projekte direkt. Das schafft kurze Wege, Verbindlichkeit und eine Beratung, die strategisch denkt und operativ anschlussfähig bleibt."*/}
            {/*      align="center"*/}
            {/*  />*/}
            {/*  <div className="grid gap-5 lg:grid-cols-3">*/}
            {/*    {testimonials.map((item) => (*/}
            {/*        <article key={item.title} className="surface-card p-6 md:p-7">*/}
            {/*          <h3 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">*/}
            {/*            {item.title}*/}
            {/*          </h3>*/}
            {/*          <p className="mt-4 text-base leading-7 text-[var(--muted)]">*/}
            {/*            {item.text}*/}
            {/*          </p>*/}
            {/*        </article>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</section>*/}


            {/*<section className="site-shell section-space relative isolate flex flex-col gap-8 overflow-hidden">*/}
            {/*  <div className="max-w-4xl space-y-4">*/}
            {/*    <span className="eyebrow">Arbeitsweise</span>*/}
            {/*    <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">*/}
            {/*      Von der Einordnung zur Umsetzung.*/}
            {/*    </h2>*/}
            {/*    <p className="max-w-3xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">*/}
            {/*      Wir arbeiten nicht mit Standardrezepten, sondern mit einer klaren Abfolge aus Analyse, Priorisierung und Umsetzung. Dadurch wird aus einer unklaren Ausgangslage ein greifbarer Handlungsrahmen.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*  <div className="grid gap-4 lg:grid-cols-3">*/}
            {/*    {serviceProcess.map((item) => (*/}
            {/*      <article key={item.step} className="surface-card p-6 md:p-7">*/}
            {/*        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">*/}
            {/*          {item.step}*/}
            {/*        </p>*/}
            {/*        <h3 className="mt-3 font-serif text-2xl font-semibold text-[var(--brand-blue)]">*/}
            {/*          {item.title}*/}
            {/*        </h3>*/}
            {/*        <p className="mt-3 text-base leading-7 text-[var(--muted)]">*/}
            {/*          {item.text}*/}
            {/*        </p>*/}
            {/*      </article>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</section>*/}

            <section id="referenzen" className="site-shell section-space flex flex-col gap-12">
                <div className="mx-auto max-w-3xl space-y-4 text-center">
                    <span className="eyebrow">Referenzen</span>
                    <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
                        150+ Kunden aus unterschiedlichen Branchen.
                    </h2>
                    <p className="mx-auto max-w-2xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
                        Ein Auszug aus Unternehmen und Institutionen, mit denen wir gearbeitet haben.
                        Vertrauen entsteht durch Ergebnisse – fragen Sie gerne nach.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {clientCategoriesSelected.map((group) => (
                        <article
                            key={group.category}
                            className="surface-card flex h-full flex-col p-6 md:p-7"
                        >
                            <h3 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
                                {group.category}
                            </h3>

                            <div className="mt-7 space-y-3 border-l border-[rgba(31,78,140,0.18)] pl-5">
                                {group.featured.map((name) => (
                                    <div
                                        key={name}
                                        className="text-base font-semibold leading-6 text-[var(--ink)]"
                                    >
                                        {name}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                                {group.names.map((name) => (
                                    <span
                                        key={name}
                                        className="whitespace-nowrap text-sm font-medium leading-6 text-[var(--muted)]"
                                    >
                    {name}
                  </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <ContactPanel id="kontakt"/>
        </>
    );
}
