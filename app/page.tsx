import { Suspense } from "react";
import Link from "next/link";

import { ContactPanel } from "@/components/contact-panel";
import { CtaSection } from "@/components/cta-section";
import { ContactCard } from "@/components/contact-card";
import { ScrollToSection } from "@/components/scroll-to-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { createMetadata } from "@/lib/metadata";
import {
  coreServices,
  homepageTrustItems,
  clientCategoriesSelected,
  withBasePath,
  teamContacts,
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
            className="absolute inset-0 bg-cover bg-position-[center_right] opacity-[0.20] mask-[linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]"
            style={{ backgroundImage: `url('${withBasePath("/ai-images/background_img.png")}')` }}
            aria-hidden="true"
        />
        <div
            className="absolute inset-0 bg-[rgba(248,250,252,0.80)]"
            aria-hidden="true"
        />
        <div className="site-shell relative grid gap-12 py-24 md:py-32 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center lg:py-36">
          <div className="fade-up space-y-8">
            <span className="eyebrow">Unternehmensberatung</span>
            <div className="space-y-5">
              <h1 className="max-w-5xl text-balance font-serif text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-[4.1rem] lg:leading-[1.02]">
                Sie wollen wachsen. Wir machen den Weg frei.
              </h1>
              <p className="max-w-3xl text-pretty text-lg leading-8 text-[var(--muted)]">
                Unternehmensberatung für KMU und Geschäftsführungen. Zwei erfahrene
                Ansprechpartner für Strategie, Marketing, Vertrieb, Digitalisierung und KI —
                pragmatisch und umsetzungsnah.
              </p>
            </div>

           
          </div>


        </div>

      </section>

      <StatsStrip />

      {/* Team Section - Gesichter schaffen Vertrauen */}
      <section className="site-shell section-space flex flex-col gap-10 bg-[var(--paper)] py-16 md:py-20">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">Das Team</span>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
            Zwei erfahrene Ansprechpartner für Ihr Unternehmen.
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
            Dr. Heidrun Unterweger und Mag. Marc Isop begleiten Ihre Projekte direkt –
            mit kurzer Entscheidungsweg und langjähriger Erfahrung.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
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
          description="Wir unterstützen bei Strategie, Digitalisierung, KI und Förderthemen — von der Analyse bis zum nächsten Schritt."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="site-shell section-space flex flex-col gap-12 py-16 md:py-20">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">Warum POSITIVconsult</span>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
            25 Jahre Erfahrung im digitalen Umfeld.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="surface-card p-6">
            <h3 className="font-serif text-lg font-semibold text-[var(--brand-blue)]">Breites Agentur & E-Commerce Know-how</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Wir kennen die Spielregeln der Digitalen Kommunikation und sind am Puls der Zeit.
            </p>
          </article>
          <article className="surface-card p-6">
            <h3 className="font-serif text-lg font-semibold text-[var(--brand-blue)]">Exzellentes Netzwerk</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Langjährige Partner national und international – Sicherheit und Vertrauen.
            </p>
          </article>
          <article className="surface-card p-6">
            <h3 className="font-serif text-lg font-semibold text-[var(--brand-blue)]">Direkter Zugang zur Geschäftsführung</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Zwei erfahrene Ansprechpartner. Kurze Wege, Verbindlichkeit, pragmatische Lösungen.
            </p>
          </article>
        </div>
      </section>

      <section id="referenzen" className="site-shell section-space flex flex-col gap-12">
        <SectionHeading
            eyebrow="Referenzen"
            title="150+ Kunden aus unterschiedlichen Branchen."
            description="Ein Auszug aus Unternehmen und Institutionen, mit denen wir gearbeitet haben."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {clientCategoriesSelected.map((group) => (
              <article
                  key={group.category}
                  className="surface-card flex flex-col gap-4 p-6"
              >
                  <h3 className="font-serif text-xl font-semibold text-[var(--brand-blue)]">
                      {group.category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                      {group.featured.map((name) => (
                          <span
                              key={name}
                              className="rounded-full bg-[var(--brand-blue)]/10 px-4 py-2 text-sm font-semibold text-[var(--brand-blue)]"
                          >
                              {name}
                          </span>
                      ))}
                  </div>
              </article>
          ))}
        </div>
      </section>

      <ContactPanel id="kontakt" />
    </>
  );
}
