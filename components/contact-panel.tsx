import { ContactCard } from "@/components/contact-card";
import { addressLines, teamContacts } from "@/lib/site-data";

export function ContactPanel({ id }: { id?: string }) {
  return (
    <section id={id} className="site-shell section-space grid gap-10">
      <div className="max-w-3xl space-y-6">
        <span className="eyebrow">Kontakt</span>
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
          Lassen Sie uns über Ihr Vorhaben sprechen.
        </h2>
        <p className="max-w-2xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
          Strategie, Digitalisierung, KI, Vertrieb oder Förderthemen – wir klären, wo wir unterstützen können.
        </p>
        <p className="text-sm text-[var(--muted)]">{addressLines.join(", ")}</p>
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
  );
}
