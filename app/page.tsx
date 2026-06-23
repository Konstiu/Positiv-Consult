import Link from "next/link";

import { ContactPanel } from "@/components/contact-panel";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { createMetadata } from "@/lib/metadata";
import {
  clientCategories,
  coreServices,
  homeFaqs,
  homepageTrustItems,
  proofTeasers,
  serviceProcess,
  typicalSituations,
} from "@/lib/site-data";

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
      <section className="relative isolate overflow-hidden bg-white">
        <div className="site-shell relative grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center lg:py-24">
          <div className="fade-up space-y-8">
            <span className="eyebrow">POSITIVconsult</span>
            <div className="space-y-5">
              <h1 className="max-w-5xl text-balance font-serif text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-[4.1rem] lg:leading-[1.02]">
                Strategie, Digitalisierung und KI für KMU – pragmatisch priorisiert und umsetzbar gemacht.
              </h1>
              <p className="max-w-3xl text-pretty text-lg leading-8 text-[var(--muted)]">
                POSITIVconsult unterstützt Eigentümer:innen und Geschäftsführungen dabei, Wachstumschancen, digitale Vorhaben und KI-Use-Cases realistisch zu bewerten – und daraus klare Entscheidungen, Roadmaps und nächste Schritte abzuleiten.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="button-primary px-6 text-sm font-semibold"
              >
                Erstgespräch vereinbaren
              </Link>
              <Link
                href="/leistungen"
                className="button-secondary px-6 text-sm font-semibold"
              >
                Leistungen ansehen
              </Link>
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
                  "Langjährige Partnerschaften und ein belastbares Netzwerk in Umsetzung und Spezialthemen",
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

      <section className="site-shell pb-6 md:pb-10">
        <div className="grid gap-4 lg:grid-cols-4">
          {homepageTrustItems.map((item) => (
            <article key={item.title} className="surface-card px-5 py-6 md:px-6">
              <p className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Typische Ausgangslagen"
          title="Themen, mit denen Unternehmen häufig zu uns kommen."
          description="Die Ausgangslage ist oft nicht ein einzelnes Problem, sondern eine Mischung aus Wachstum, Digitalisierung, Priorisierung und Entscheidungsdruck."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {typicalSituations.map((item) => (
            <article key={item} className="surface-card px-6 py-6 md:px-7">
              <p className="text-base leading-8 text-[var(--ink)]">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Leistungen"
          title="Beratungsfelder, die auf konkrete Entscheidungen und Vorhaben einzahlen."
          description="POSITIVconsult begleitet Unternehmen dort, wo Strategie, Marktbearbeitung, Digitalisierung, KI und Förderthemen in operative Entscheidungen übergehen."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="site-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Erfahrung in der Praxis"
          title="Woran wir typischerweise mit Unternehmen arbeiten."
          description="Keine erfundenen Erfolgskurven, sondern reale Themenfelder, in denen POSITIVconsult seit vielen Jahren begleitet."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {proofTeasers.map((item) => (
            <article key={item.title} className="surface-card p-6 md:p-7">
              <h3 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section-space relative isolate flex flex-col gap-8 overflow-hidden">
        <div className="max-w-4xl space-y-4">
          <span className="eyebrow">Arbeitsweise</span>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
            Von der Einordnung zur Umsetzung.
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
            Wir arbeiten nicht mit Standardrezepten, sondern mit einer klaren Abfolge aus Analyse, Priorisierung und Umsetzung. Dadurch wird aus einer unklaren Ausgangslage ein greifbarer Handlungsrahmen.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {serviceProcess.map((item) => (
            <article key={item.step} className="surface-card p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
                {item.step}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-[var(--brand-blue)]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section-space flex flex-col gap-8">
        <SectionHeading
          eyebrow="Referenzen"
          title="Erfahrung aus unterschiedlichen Branchen und Organisationen."
          description="Ein kompakter Auszug aus Unternehmen und Institutionen, mit denen POSITIVconsult gearbeitet hat – von Handel und E-Commerce bis zu Bildung, Gastronomie und wirtschaftsnahen Organisationen."
        />
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {clientCategories.map((group) => (
            <article key={group.category} className="surface-card p-6 md:p-7">
              <h3 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.names.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-[rgba(31,78,140,0.16)] bg-[var(--brand-light)] px-4 py-2 text-sm font-medium text-[var(--ink)]"
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
        title="Sie möchten klären, welches Thema für Ihr Unternehmen gerade wirklich Priorität hat?"
        description="Im Erstgespräch ordnen wir Ausgangslage, Zielbild und Handlungsoptionen gemeinsam ein – ohne Hype, ohne Beratungsfloskeln und mit Blick auf das, was für Ihr Unternehmen jetzt sinnvoll ist."
        primaryLabel="Erstgespräch vereinbaren"
        primaryHref="/kontakt"
        secondaryLabel="Passenden Beratungsansatz finden"
        secondaryHref="/leistungen"
      />

      <FaqSection
        title="Häufige Fragen vor einem Erstgespräch"
        description="Diese Fragen stehen oft am Anfang, wenn ein Vorhaben geschärft oder neu bewertet werden soll."
        items={homeFaqs}
      />

      <ContactPanel />
    </>
  );
}
