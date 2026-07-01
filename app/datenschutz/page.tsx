import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von POSITIVconsult: Hinweise zur Verarbeitung personenbezogener Daten.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 bg-white"
        style={{ pointerEvents: 'none' }}
        aria-hidden="true"
      />
      <PageHeader
        eyebrow="Datenschutz"
        title="Datenschutzerklärung."
        description="Hinweise zur Verarbeitung personenbezogener Daten auf den Seiten von POSITIVconsult."
      />

      <section className="mx-auto w-full max-w-3xl px-5 py-18 md:px-8 md:py-24">
        <div className="space-y-8 text-sm leading-7 text-[var(--ink)]">
          <div className="rounded-2xl border border-black/5 bg-white/60 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
              Aktuelle Datenschutzerklärung
            </h2>
            <p className="mt-4">
              Unsere Datenschutzerklärung wird regelmäßig aktualisiert, um stets
              den aktuellen rechtlichen Anforderungen zu entsprechen.
            </p>
            <p className="mt-4">
              Bitte lesen Sie die aktuelle Version auf unserer bisherigen Website:
            </p>
            <div className="mt-6">
              <Link
                href="https://www.positiv-consult.at/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(31,78,140,0.25)] transition hover:bg-[var(--brand-blue)]/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Datenschutzerklärung ansehen
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
              Verantwortliche Stelle
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
            <p className="mt-4">
              E-Mail:{' '}
              <Link href="mailto:h.unterweger@positiv-consult.at" className="text-link">
                h.unterweger@positiv-consult.at
              </Link>
              <br />
              Telefon: +43 676 941 44 27
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
