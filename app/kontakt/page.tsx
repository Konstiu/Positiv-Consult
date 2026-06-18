import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { contactEmail, contactPhone } from "@/lib/site-data";

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
        description="Wenn ein Thema konkret wird, zählt Klarheit. POSITIVconsult ist für Anfragen zu Strategie, Wachstum, Digitalisierung, Förderungen und AI Consulting direkt erreichbar."
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
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Telefon
              </p>
              <a href={`tel:${contactPhone}`} className="mt-2 block text-xl font-semibold">
                {contactPhone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Standort
              </p>
              <p className="mt-2 text-base">Wien, Österreich</p>
            </div>
          </div>
        </article>

        <article className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Hinweis
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            Wenn gewünscht, kann hier im nächsten Schritt ein echtes
            Kontaktformular, Terminbuchungs-Link oder eine Verknüpfung mit
            CRM- oder E-Mail-Prozessen ergänzt werden. Derzeit zeigt die Seite
            bewusst nur direkte Kontaktwege.
          </p>
        </article>
      </section>
    </>
  );
}
