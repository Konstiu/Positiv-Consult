import { PageHeader } from "@/components/page-header";
import { ContactCard } from "@/components/contact-card";
import { createMetadata } from "@/lib/metadata";
import { addressLines, teamContacts } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Kontakt",
  description:
    "Kontakt zu POSITIVconsult in Wien. Für Strategie, Digitalisierung, Vertrieb, Förderberatung und AI Consulting.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Der direkte Weg zum ersten Gespräch."
        description="Ob Strategie, Digitalisierung, Vertrieb, E-Commerce, Förderthemen oder AI Consulting — wir klären gemeinsam, wo POSITIVconsult sinnvoll unterstützen kann."
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
            In einem ersten Gespräch klären wir Ausgangslage, Prioritäten und
            sinnvolle nächste Schritte.
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
