import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { contactEmail, contactPhone, toTelHref } from "@/lib/site-data";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Impressum",
  description:
    "Impressum von POSITIVconsult: Rechtliche Angaben, Kontaktinformationen und Unternehmensdaten.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 bg-white"
        style={{ pointerEvents: 'none' }}
        aria-hidden="true"
      />
      <PageHeader
        eyebrow="Impressum"
        title="Rechtliche Angaben."
        description="Kontaktinformationen und Unternehmensdaten von POSITIVconsult."
      />

      <section className="mx-auto w-full max-w-3xl px-5 py-18 md:px-8 md:py-24">
        <div className="space-y-8 text-sm leading-7 text-[var(--ink)]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
              Angaben gemäß § 5 ECG
            </h2>
            <p className="mt-4">
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
            <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
              Kontakt
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-medium text-[var(--muted)]">E-Mail</p>
                <Link href={`mailto:${contactEmail}`} className="text-link block break-all">
                  {contactEmail}
                </Link>
              </div>
              <div>
                <p className="font-medium text-[var(--muted)]">Telefon</p>
                <Link href={toTelHref(contactPhone)} className="block">
                  {contactPhone}
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
              Unternehmensdaten
            </h2>
            <p className="mt-4">
              Umsatzsteuer-Identifikationsnummer: ATU 65057957
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
              Streitbeilegung
            </h2>
            <p className="mt-4">
              Plattform der EU-Kommission zur Online-Streitbeilegung:{' '}
              <Link
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                https://ec.europa.eu/consumers/odr
              </Link>
            </p>
            <p className="mt-4">
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
