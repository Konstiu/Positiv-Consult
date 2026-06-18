import Link from "next/link";

import { ContactPanel } from "@/components/contact-panel";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatsStrip } from "@/components/stats-strip";
import { createMetadata } from "@/lib/metadata";
import {
  coreServices,
  expertiseAreas,
  homeFaqs,
  serviceProcess,
  testimonials,
} from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Unternehmensberatung Wien für Wachstum, Digitalisierung und AI",
  description:
    "POSITIVconsult ist Ihre moderne Unternehmensberatung in Wien für Strategie, Digitalisierung, Marketingberatung, Vertriebsberatung, Förderberatung und AI Consulting.",
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
                Unternehmensberatung aus Wien für Entscheidungen, die im
                Unternehmen tatsächlich etwas verändern.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-[var(--muted)] md:text-xl">
                POSITIVconsult begleitet Unternehmen in Strategie, Marketing,
                Vertrieb, Digitalisierung, E-Commerce, Förderberatung und AI
                Consulting. Der Fokus liegt auf umsetzbarer Klarheit,
                Wachstum und messbaren Resultaten.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex justify-center rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white"
              >
                Erstgespräch anfragen
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--ink)]"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>

          <div className="fade-up surface-card grid-lines relative overflow-hidden p-6 md:p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[rgba(220,196,154,0.42)] blur-3xl" />
            <div className="relative space-y-7">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                  Wofür POSITIVconsult steht
                </p>
                <p className="text-3xl font-serif font-semibold text-[var(--ink)]">
                  Beratung mit strategischer Tiefe und operativer Relevanz.
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
          title="Beratung entlang der Themen, die Wachstum und Transformation wirklich voranbringen."
          description="POSITIVconsult verbindet strategische Richtung mit operativer Umsetzung. Das ist besonders wertvoll, wenn Geschäftsführung und Entscheider nicht nur Konzepte brauchen, sondern Fortschritt."
          action={
            <Link
              href="/leistungen"
              className="inline-flex rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)]"
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
          title="Von der strategischen Fragestellung zur wirksamen Umsetzung."
          description="Die Zusammenarbeit ist auf unternehmerische Realität ausgelegt: priorisieren, entscheiden, umsetzen, nachschärfen."
        />
        <div className="grid gap-4">
          {serviceProcess.map((item) => (
            <article key={item.step} className="surface-card p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
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
          eyebrow="Kunden / Erfahrung"
          title="Vertrauen entsteht durch belastbare Erfahrung, nicht durch große Versprechen."
          description="Statt Logos und Referenzen zu erfinden, zeigt diese Website nur nachvollziehbare Stärke: Erfahrung, Projektsubstanz und internationale Perspektive."
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

      <CtaSection
        eyebrow="AI & Digitalisierung"
        title="Sie wollen KI oder Digitalisierung nicht nur diskutieren, sondern sauber im Unternehmen verankern?"
        description="POSITIVconsult entwickelt belastbare Use Cases, priorisiert Vorhaben nach Business-Relevanz und begleitet die Umsetzung mit Blick auf Prozesse, Teams und Wirtschaftlichkeit."
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
