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
  const featuredClients = clientCategories.flatMap((group) => group.names).slice(0, 8);

  return (
    <>
      <section className="hero-grid overflow-hidden">
        <div className="site-shell grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:py-24">
          <div className="fade-up space-y-8">
            <span className="eyebrow">Unternehmensberatung aus Wien</span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance font-serif text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl lg:text-[4.25rem]">
                Strategie, Digitalisierung und Wachstum für Unternehmen, die
                weiterkommen wollen.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-[var(--muted)] md:text-xl">
                POSITIVconsult ist eine Unternehmensberatung aus Wien. Zwei
                erfahrene Ansprechpartner begleiten Unternehmen bei Positionierung,
                Marketing, Vertrieb, digitaler Transformation, E-Commerce,
                Förderthemen und AI Consulting — von der Analyse über das
                Konzept bis zur Umsetzung.
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
            <div className="grid max-w-2xl grid-cols-2 gap-3 pt-2 md:grid-cols-4">
              {[
                ["25+", "Jahre"],
                ["250+", "Projekte"],
                ["150+", "Kunden"],
                ["7", "Länder"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.1rem] border border-[rgba(17,24,39,0.08)] bg-white/78 px-4 py-3 text-center sm:text-left"
                >
                  <p className="font-serif text-2xl font-semibold text-[var(--brand-red)]">
                    {value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up surface-card grid-lines relative overflow-hidden p-6 md:p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[rgba(215,38,61,0.20)] blur-3xl" />
            <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-[rgba(31,78,140,0.18)] blur-3xl" />
            <div className="relative space-y-7">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue)]">
                  Wofür POSITIVconsult steht
                </p>
                <p className="text-3xl font-serif font-semibold text-[var(--ink)]">
                  Persönliche Beratung, klare Struktur und Umsetzungsstärke.
                </p>
              </div>
              <div className="grid gap-3">
                {expertiseAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-black/8 bg-white/80 px-5 py-4 text-sm leading-7 text-[var(--ink)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-8 md:pb-10">
        <StatsStrip />
      </div>

      <section className="site-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Leistungen"
          title="Beratungsfelder mit klarer Struktur und operativer Relevanz."
          description="POSITIVconsult begleitet Unternehmen dort, wo Positionierung, Markt, Vertrieb und digitale Entwicklung konkret werden."
          action={
            <Link
              href="/leistungen"
              className="button-secondary inline-flex rounded-full px-5 text-sm font-semibold"
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

      <section className="site-shell section-space grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="Positionierung"
          title="Beratung mit Erfahrung, Struktur und Umsetzungskraft."
          description="Seit 2004 unterstützt POSITIVconsult Unternehmen dabei, Wachstum klarer zu planen, Märkte besser zu bearbeiten und digitale Chancen sinnvoll zu nutzen. Als erfahrene Unternehmensberatung aus Wien arbeiten wir direkt mit Eigentümer:innen, Geschäftsführung und Entscheidungsteams — pragmatisch, persönlich und mit Blick auf messbare Wirkung."
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
        description="Ob Digitalisierungsprojekt, E-Commerce-Weiterentwicklung oder AI Consulting: Wir helfen dabei, Chancen realistisch einzuordnen und daraus tragfähige Schritte zu machen."
        primaryLabel="AI Consulting ansehen"
        primaryHref="/ai-consulting"
        secondaryLabel="Digitalisierung ansehen"
        secondaryHref="/digitalisierung"
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
