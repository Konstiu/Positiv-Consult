import { PageHeader } from "@/components/page-header";
import { StatsStrip } from "@/components/stats-strip";
import { createMetadata } from "@/lib/metadata";
import { companyStory, teamContacts } from "@/lib/site-data";
import { ContactCard } from "@/components/contact-card";

export const metadata = createMetadata({
  title: "Über uns",
  description:
    "Über POSITIVconsult: erfahrene Unternehmensberatung aus Wien mit langjähriger Erfahrung und internationaler Perspektive.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        title="Erfahrung, Klarheit und Umsetzungsnähe als Beratungsstandard."
        description="POSITIVconsult ist eine Unternehmensberatung aus Wien mit Fokus auf Strategie, Digitalisierung, Marketing und Vertrieb. Im Zentrum stehen persönliche Zusammenarbeit, klare Struktur und wirksame Umsetzung."
        highlights={[
          "Sitz in Wien",
          "25 Jahre Berufserfahrung im digitalen Umfeld",
          "Beratung für Konzerne, KMU, Startups und EPU",
          "Arbeit direkt mit Eigentümer:innen und Geschäftsführung",
        ]}
      />

      <div className="py-10">
        <StatsStrip />
      </div>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-8 md:px-8 lg:grid-cols-2">
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Beratung für Entscheider
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Seit 2004 begleitet POSITIVconsult Unternehmen in Phasen, in denen
            Wachstum, Marktposition, Vertrieb oder digitale Entwicklung neu
            justiert werden müssen. Die Beratung ist persönlich, direkt und
            auf Wirkung ausgerichtet.
          </p>
        </article>
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Erfahrung in Breite und Tiefe
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Zwei erfahrene Partner arbeiten direkt mit Eigentümer:innen,
            Geschäftsführung und Entscheidungsteams. Das sorgt für kurze Wege,
            Verbindlichkeit und einen klaren Blick auf das Wesentliche.
          </p>
        </article>
      </section>

      <section className="site-shell grid gap-5 py-8 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="surface-card p-6 md:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Entwicklungsschritte
          </h2>
          <div className="mt-5 grid gap-3">
            {companyStory.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="rounded-[1.35rem] border border-black/8 bg-white/72 px-4 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  {item.year}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--ink)]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </article>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
          {teamContacts.map((person) => (
            <ContactCard
              key={person.email}
              name={person.name}
              role={person.role}
              email={person.email}
              phone={person.phone}
            />
          ))}
        </div>
      </section>
    </>
  );
}
