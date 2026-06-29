import { Suspense } from "react";
import Link from "next/link";

import { ContactPanel } from "@/components/contact-panel";
import { CtaSection } from "@/components/cta-section";
import { ScrollToSection } from "@/components/scroll-to-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { createMetadata } from "@/lib/metadata";
import {
  coreServices,
  homepageTrustItems,
  clientCategoriesSelected,
  withBasePath,
} from "@/lib/site-data";
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
        <ScrollToSection />
      </Suspense>

      <section className="relative isolate overflow-hidden bg-[var(--paper)]">
        <div
            className="absolute inset-0 bg-cover bg-position-[center_right] opacity-[0.34] mask-[linear-gradient(to_bottom,black_0%,black_68%,transparent_100%)]"
            style={{ backgroundImage: `url('${withBasePath("/ai-images/background_img.png")}')` }}
            aria-hidden="true"
        />
        <div
            className="absolute inset-0 bg-[rgba(248,250,252,0.62)]"
            aria-hidden="true"
        />
        <div className="site-shell relative grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center lg:py-24">
          <div className="fade-up space-y-8">
            <span className="eyebrow">Unternehmensberatung</span>
            <div className="space-y-5">
              <h1 className="max-w-5xl text-balance font-serif text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-[4.1rem] lg:leading-[1.02]">
                Strategie, Digitalisierung, Automatisierung und KI für moderne Unternehmen.
              </h1>
              <p className="max-w-3xl text-pretty text-lg leading-8 text-[var(--muted)]">
                Unternehmensberatung aus Wien für KMU und Geschäftsführungen. Zwei erfahrene
                Ansprechpartner für Strategie, Marketing, Vertrieb, Digitalisierung und KI —
                pragmatisch und umsetzungsnah.
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
                  "Strategie, Marketing, Vertrieb und Digitalisierung integriert",
                  "Direkter Austausch mit Geschäftsführung und Entscheidungsteams",
                  "Pragmatische Einschätzung von KI und Förderthemen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--muted)]">
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

      <div>
        <StatsStrip />
      </div>

      <section id="leistungen" className="site-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Leistungen"
          title="Beratungsfelder mit klarem Fokus auf Umsetzung."
          description="Wir unterstützen bei Strategie, Digitalisierung, KI und Förderthemen — von der Analyse bis zum nächsten Schritt."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
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

      <section id="referenzen" className="site-shell section-space flex flex-col gap-8">
        <SectionHeading
            eyebrow="Referenzen"
            title="Erfahrung aus unterschiedlichen Branchen."
            description="Ein Auszug aus Unternehmen und Institutionen, mit denen wir gearbeitet haben."        />

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {clientCategoriesSelected.map((group) => (
              <article
                  key={group.category}
                  className="surface-card flex h-full flex-col p-6 md:p-7"
              >                  <h3 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
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

      <CtaSection
        eyebrow="Erstgespräch"
        title="Welches Thema hat für Ihr Unternehmen gerade Priorität?"
        description="Im Erstgespräch klären wir Ausgangslage und nächste Schritte – pragmatisch und ohne Beratungsfloskeln."
        primaryLabel="Erstgespräch vereinbaren"
        primaryHref="/kontakt"
      />

      <ContactPanel id="kontakt" />
    </>
  );
}
