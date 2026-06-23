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

      <section className="site-shell section-space space-y-8">
        <div className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
            Standort
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--muted)]">
            {addressLines.join(", ")}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            In einem ersten Gespräch ordnen wir Ausgangslage, Zielbild und
            nächste Schritte gemeinsam ein.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
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
    </>
  );
}
