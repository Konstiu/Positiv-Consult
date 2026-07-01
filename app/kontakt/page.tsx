import { PageHeader } from "@/components/page-header";
import { ContactCard } from "@/components/contact-card";
import { createMetadata } from "@/lib/metadata";
import { addressLines, teamContacts } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Kontakt",
  description:
    "Kontakt zu POSITIVconsult für Strategie, Digitalisierung, KI-Beratung, Vertrieb und Förderthemen.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Projekt oder Fragestellung besprechen."
        description="Ob Strategie, Digitalisierung, KI-Beratung, Vertrieb, E-Commerce oder Förderthemen: Wir klären gemeinsam, worum es geht und welcher Beratungsansatz sinnvoll ist."
      />

      <section className="mx-auto w-full max-w-5xl px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
            Direkter Kontakt zur Geschäftsführung
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            In einem ersten Gespräch ordnen wir Ausgangslage, Zielbild und nächste Schritte gemeinsam ein.
          </p>
        </div>

        <div className="mt-12 grid gap-8 max-w-5xl mx-auto w-full">
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

        <div className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
            Standort
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            {addressLines.join(", ")}
          </p>
        </div>
      </section>
    </>
  );
}
