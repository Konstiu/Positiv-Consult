import Image from "next/image";
import Link from "next/link";

import { ContactPanel } from "@/components/contact-panel";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatsStrip } from "@/components/stats-strip";
import { createMetadata } from "@/lib/metadata";
import {
  clientCategories,
  coreServices,
  expertiseAreas,
  homeFaqs,
  serviceProcess,
  testimonials,
} from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Unternehmensberatung Wien für Digitalisierung, Marketing und Vertrieb",
  description:
    "POSITIVconsult ist eine Unternehmensberatung aus Wien für Strategie, Marketing, Vertrieb, Digitalisierung, E-Commerce, Förderthemen und AI Consulting.",
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
  const featuredClientNames = [
    "Intersport Alpensport",
    "Klimabündnis Oberösterreich",
    "Wirtschaftskammer Wien",
    "Medizinische Universität Wien",
    "Gissinger",
    "Herbanima",
    "Orbis Reisen",
    "Kager Knapp Hausverwaltung",
    "Finetime",
    "Bellaria",
    "Wine & Partners",
  ];
  const featuredClients = Array.from(
    new Set([
      ...featuredClientNames,
      ...clientCategories.flatMap((group) => group.names),
    ]),
  ).slice(0, 14);

  return (
    <>
      <section className="hero-grid relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[42%] lg:block">
          <Image
            src="/ai-images/modern-office-tower.jpg"
            alt=""
            fill
            sizes="40vw"
            className="object-cover grayscale opacity-[0.11]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.96),rgba(248,250,252,0.7),rgba(248,250,252,0.9))]" />
        </div>
        <div className="site-shell relative grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:py-24">
          <div className="fade-up space-y-8">
            <span className="eyebrow">Unternehmensberatung</span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl lg:text-[3.15rem]">
                Strategie, Digitalisierung, Automatisierung und KI für moderne Unternehmen.
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-7 text-[var(--muted)] md:text-lg">
                POSITIVconsult ist eine Unternehmensberatung aus Wien für
                Eigentümer:innen, Geschäftsführung, Entscheidungsteams, EPU und
                KMU. Zwei erfahrene Ansprechpartner begleiten Unternehmen bei
                Positionierung, Marketing, Vertrieb, digitaler Transformation,
                E-Commerce, Förderthemen und AI Consulting — von der Analyse
                bis zum konkreten nächsten Umsetzungsschritt.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="button-primary px-6 text-sm font-semibold"
              >
                30-minütiges Erstgespräch vereinbaren
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
            <div className="border-l border-[rgba(31,78,140,0.18)] pl-5 md:pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue)]">
                Persönlicher Ansatz
              </p>
              <ul className="mt-5 space-y-3">
                {expertiseAreas.slice(1).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-blue)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-blue)]"
                  />
                  <span>Am Puls der Zeit mit Blick auf konkrete Umsetzung</span>
                </li>
                <li className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-blue)]"
                  />
                  <span>Exzellentes Netzwerk und langjährige Partnerschaften</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-8 md:pb-10">
        <StatsStrip />
      </div>

      <section id="leistungen" className="site-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Leistungen"
          title="Beratungsfelder mit klarer Struktur und operativer Relevanz."
          description="POSITIVconsult begleitet Unternehmen dort, wo Positionierung, Markt, Vertrieb und digitale Entwicklung konkret werden."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="site-shell section-space relative isolate grid gap-8 overflow-hidden lg:grid-cols-[0.95fr_1.05fr]">
        <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-[38%] xl:block">
          <Image
            src="/ai-images/strategy-meeting.png"
            alt=""
            fill
            sizes="30vw"
            className="object-cover grayscale opacity-[0.07]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.92),rgba(248,250,252,0.6),transparent)]" />
        </div>
        <SectionHeading
          eyebrow="Positionierung"
          title="Beratung mit Erfahrung, Struktur und Umsetzungskraft."
          description="Seit 2004 unterstützt POSITIVconsult Unternehmen dabei, Wachstumsrichtungen zu schärfen, Märkte strukturierter zu bearbeiten und digitale Vorhaben realistisch aufzusetzen. Als erfahrene Unternehmensberatung aus Wien arbeiten wir direkt mit Eigentümer:innen, Geschäftsführung und Entscheidungsteams."
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
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Erfahrung"
          title="Vertrauen entsteht durch Erfahrung, Klarheit und persönliche Begleitung."
          description="Zwei erfahrene Partner begleiten Projekte direkt. Das schafft kurze Wege, Verbindlichkeit und eine Beratung, die strategisch denkt und operativ anschlussfähig bleibt."
          align="center"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.title} className="surface-card p-6 md:p-7">
              <h3 className="font-serif text-2xl font-semibold text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section-space flex flex-col gap-8">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">Kunden & Branchen</span>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Erfahrung in unterschiedlichen Branchen und Unternehmensrealitäten.
          </h2>
          <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
            POSITIVconsult arbeitet mit Unternehmen aus Handel, Dienstleistung,
            Bildung, Institutionen und Gastronomie. Ein kompakter Auszug:
          </p>
        </div>
        <div className="surface-card p-6 md:p-8">
          <div className="flex flex-wrap gap-3">
            {featuredClients.map((name) => (
              <span
                key={name}
                className="rounded-full border border-[rgba(31,78,140,0.16)] bg-[var(--brand-light)] px-4 py-2 text-sm font-medium text-[var(--ink)]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="AI & Digitalisierung"
        title="Digitale Vorhaben brauchen Klarheit, Priorität und saubere Umsetzung."
        description="Ob Digitalisierungsprojekt, E-Commerce-Weiterentwicklung oder AI Consulting: Wir helfen dabei, Chancen realistisch einzuordnen und daraus eine tragfähige Roadmap, priorisierte Maßnahmen und einen konkreten nächsten Schritt abzuleiten."
        primaryLabel="AI Consulting ansehen"
        primaryHref="/ai-consulting"
        secondaryLabel="Digitalisierung ansehen"
        secondaryHref="/digitalisierung"
        backgroundImageSrc="/ai-images/ai-circuit-board.jpg"
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
