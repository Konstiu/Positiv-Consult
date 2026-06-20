import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { contactEmail, contactPhone, toTelHref } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Impressum",
  description: "Impressum von POSITIVconsult.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Impressum"
        title="Impressum"
        description="Rechtliche Angaben und Kontaktinformationen von POSITIVconsult."
      />

      <section className="mx-auto w-full max-w-4xl px-5 py-18 md:px-8 md:py-24">
        <div className="surface-card space-y-6 p-6 md:p-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Angaben
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Heidrun Unterweger
              <br />
              POSITIVconsult
              <br />
              Mariahilfer Straße 101
              <br />
              1060 Wien
              <br />
              Österreich
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--ink)]">Kontakt</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--muted)]">
              <div>
                <p className="font-medium text-[var(--ink)]">E-Mail</p>
                <a href={`mailto:${contactEmail}`} className="text-link block break-all">
                  {contactEmail}
                </a>
              </div>
              <div>
                <p className="font-medium text-[var(--ink)]">Telefon</p>
                <a href={toTelHref(contactPhone)} className="block">
                  {contactPhone}
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--ink)]">
              Unternehmensdaten
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Umsatzsteuer-Identifikationsnummer: ATU 65057957
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--ink)]">
              Hinweis
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Es wird auf die EU-Plattform zur Online-Streitbeilegung
              hingewiesen. Zudem besteht keine Verpflichtung und keine
              Bereitschaft zur Teilnahme an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
