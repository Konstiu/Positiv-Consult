import Link from "next/link";

import { ContactPanel } from "@/components/contact-panel";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatsStrip } from "@/components/stats-strip";
import { createMetadata } from "@/lib/metadata";
import {
  companyStory,
  coreServices,
  expertiseAreas,
  homeFaqs,
  sourceNotes,
  serviceProcess,
  teamContacts,
  testimonials,
} from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Unternehmensberatung Wien für Digitalisierung, Marketing und Vertrieb",
  description:
    "POSITIVconsult ist eine Unternehmensberatung aus Wien mit Fokus auf Digitalisierung, Marketing, Vertrieb, Strategie, Förderberatung, E-Commerce und AI Consulting.",
  path: "/",
  keywords: [
    "Unternehmensberatung Wien",
    "Digital Consulting",
    "AI Consulting",
    "Marketingberatung",
    "Vertriebsberatung",
  ],
});

export default function Home() {
  return (
    <>
      <section className="hero-grid overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
          <div className="fade-up space-y-8">
            <span className="eyebrow">Strategie. Umsetzung. Wirkung.</span>
            <div className="space-y-6">
              <h1 className="max-w-5xl text-balance font-serif text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
                Unternehmensberatung aus Wien für Digitalisierung, Marketing,
                Vertrieb und nachhaltiges Wachstum.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-[var(--muted)] md:text-xl">
                POSITIVconsult unterstützt Unternehmen bei Strategie,
                Marktbearbeitung, digitaler Transformation, E-Commerce,
                Förderthemen und AI Consulting. Konzepte werden nicht nur
                entwickelt, sondern auf Wunsch auch in die Umsetzung gebracht.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="button-primary inline-flex justify-center rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                Erstgespräch anfragen
              </Link>
              <Link
                href="/leistungen"
                className="button-secondary inline-flex justify-center rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>

          <div className="fade-up surface-card grid-lines relative overflow-hidden p-6 md:p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[rgba(215,38,61,0.20)] blur-3xl" />
            <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-[rgba(31,78,140,0.18)] blur-3xl" />
            <div className="relative space-y-7">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                  Wofür POSITIVconsult steht
                </p>
                <p className="text-3xl font-serif font-semibold text-[var(--ink)]">
                  Wachstum durch klare Positionierung, wirksame Marktarbeit und
                  digitale Entwicklung.
                </p>
              </div>
              <div className="grid gap-3">
                {expertiseAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-black/8 bg-white/72 px-5 py-4 text-sm leading-7 text-[var(--ink)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 md:py-10">
        <StatsStrip />
      </div>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-18 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Leistungsfelder"
          title="Leistungen, die aus der bestehenden POSITIVconsult-Positionierung abgeleitet und neu strukturiert wurden."
          description="Die bisherige Website nennt Strategie, Kampagnen, Vertrieb, Online Marketing, E-Commerce, Startups, Ausschreibungen, Internationalisierung, Förderberatung sowie seit 2024 AI Consulting. Diese Themen sind hier moderner und klarer gegliedert."
          action={
            <Link
              href="/leistungen"
              className="button-secondary inline-flex rounded-full px-5 py-3 text-sm font-semibold"
            >
              Alle Leistungen
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-18 md:px-8 lg:grid-cols-[0.95fr_1.05fr] md:py-24">
        <SectionHeading
          eyebrow="Arbeitsweise"
          title="Von der Analyse über das Konzept bis zur Umsetzung."
          description="Die bestehende Website beschreibt POSITIVconsult als Beratungshaus, das Lösungen entwickelt und diese auf Wunsch auch umsetzt. Daraus ergibt sich ein klarer, pragmatischer Projektmodus."
        />
        <div className="grid gap-4">
          {serviceProcess.map((item) => (
            <article key={item.step} className="surface-card p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
                {item.step}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-18 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Erfahrung"
          title="Substanz aus 25 Jahren digitalem Umfeld und mehreren hundert Projekten."
          description="Die Altwebsite nennt 25 Jahre Berufserfahrung, 250 Projekte, 150 Kunden und Projekterfahrung in 7 Ländern. Diese Zahlen werden hier bewusst nur dort verwendet, wo sie öffentlich belegt waren."
          align="center"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.title} className="surface-card p-6 md:p-7">
              <h3 className="font-serif text-2xl font-semibold text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="Geschichte"
          title="Entwicklung der Beratungsschwerpunkte seit 2004."
          description="Die bisherige Website enthält eine klare Zeitleiste der fachlichen Erweiterungen. Sie zeigt, wie aus klassischer Unternehmensberatung schrittweise Digital-, E-Commerce-, Förder- und AI-Kompetenz aufgebaut wurde."
        />
        <div className="grid gap-3">
          {companyStory.map((item) => (
            <article key={`${item.year}-${item.title}`} className="surface-card px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue)]">
                {item.year}
              </p>
              <p className="mt-2 text-base leading-7 text-[var(--ink)]">{item.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-2 md:py-24">
        <article className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Direkter Kontakt
          </p>
          <div className="mt-5 space-y-4">
            {teamContacts.map((person) => (
              <div key={person.email} className="rounded-[1.35rem] border border-black/8 bg-white/70 px-4 py-4">
                <p className="font-semibold text-[var(--ink)]">{person.name}</p>
                <a href={`tel:${person.phone}`} className="mt-2 block text-sm text-[var(--muted)]">
                  {person.phone}
                </a>
                <a href={`mailto:${person.email}`} className="block text-sm text-[var(--muted)]">
                  {person.email}
                </a>
              </div>
            ))}
          </div>
        </article>
        <article className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Quellenhinweis
          </p>
          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
            {sourceNotes.website}
          </p>
          <p className="mt-4 rounded-2xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--muted)]">
            TODO: Einzelne Aussagen, Zahlen und Kontaktdaten sollten vor dem
            Livegang noch einmal gegen den aktuellen Stand des Unternehmens
            geprüft werden.
          </p>
        </article>
      </section>

      <CtaSection
        eyebrow="AI & Digitalisierung"
        title="Sie wollen Digitalisierung oder KI strukturiert einordnen und sinnvoll umsetzen?"
        description="Die Altwebsite nennt digitale Transformation, E-Commerce, digitale Kommunikation und seit 2024 AI Consulting als Kernfelder. Die neue Website übersetzt diese Themen in ein klares, seriöses Leistungsbild."
        primaryLabel="AI Consulting ansehen"
        primaryHref="/ai-consulting"
        secondaryLabel="Digitalisierung ansehen"
        secondaryHref="/digitalisierung"
      />

      <FaqSection
        title="Häufige Fragen vor einem Erstgespräch"
        description="Diese Fragen kommen häufig auf, wenn ein Beratungsprojekt vorbereitet oder neu bewertet wird."
        items={homeFaqs}
      />

      <ContactPanel />
    </>
  );
}
