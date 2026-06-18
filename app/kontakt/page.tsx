import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import {
  addressLines,
  contactEmail,
  contactPhone,
  secondaryContactEmail,
  secondaryContactPhone,
  teamContacts,
} from "@/lib/site-data";

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
        description="Die Kontaktdaten auf dieser Seite wurden aus der öffentlich erreichbaren Altwebsite übernommen und modern aufbereitet. Vor Livegang sollten sie dennoch kurz verifiziert werden."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-[0.9fr_1.1fr] md:py-24">
        <article className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Kontaktmöglichkeiten
          </p>
          <div className="mt-6 space-y-5 text-[var(--ink)]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                E-Mail
              </p>
              <a href={`mailto:${contactEmail}`} className="mt-2 block text-xl font-semibold">
                {contactEmail}
              </a>
              <a
                href={`mailto:${secondaryContactEmail}`}
                className="mt-1 block text-sm text-[var(--muted)]"
              >
                {secondaryContactEmail}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Telefon
              </p>
              <a href={`tel:${contactPhone}`} className="mt-2 block text-xl font-semibold">
                {contactPhone}
              </a>
              <a
                href={`tel:${secondaryContactPhone}`}
                className="mt-1 block text-sm text-[var(--muted)]"
              >
                {secondaryContactPhone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Standort
              </p>
              <p className="mt-2 text-base">{addressLines.join(", ")}</p>
            </div>
          </div>
        </article>

        <article className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Hinweis
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            Die Altwebsite nennt Dr. Heidrun Unterweger und Mag. Marc Isop als
            direkte Ansprechpartner mit persönlicher Telefonnummer und
            E-Mail-Adresse. Diese neue Seite übernimmt das bewusst als klaren,
            persönlichen Kontaktweg.
          </p>
          <div className="mt-5 grid gap-3">
            {teamContacts.map((person) => (
              <div
                key={person.email}
                className="rounded-[1.35rem] border border-black/8 bg-white/72 px-4 py-4"
              >
                <p className="font-semibold text-[var(--ink)]">{person.name}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{person.phone}</p>
                <p className="text-sm text-[var(--muted)]">{person.email}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--muted)]">
            TODO: Telefonnummern, Adresse und E-Mail-Adressen vor Livegang
            nochmals prüfen.
          </p>
        </article>
      </section>
    </>
  );
}
