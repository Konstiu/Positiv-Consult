import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { contactEmail, contactPhone, toTelHref } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Datenschutz",
  description: "Datenschutzhinweise von POSITIVconsult.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        eyebrow="Datenschutz"
        title="Datenschutzerklärung"
        description="Hinweise zur Verarbeitung personenbezogener Daten auf den Seiten von POSITIVconsult."
      />

      <section className="mx-auto w-full max-w-4xl px-5 py-18 md:px-8 md:py-24">
        <div className="surface-card space-y-6 p-6 md:p-8 text-sm leading-7 text-[var(--muted)]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Verantwortliche Stelle
            </h2>
            <div className="mt-3 space-y-3">
              <p>
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
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Allgemeine Hinweise
            </h2>
            <p className="mt-3">
              Personenbezogene Daten werden nur in dem Umfang verarbeitet, wie
              dies für den technischen Betrieb dieser Website, die Bearbeitung
              von Anfragen oder aufgrund gesetzlicher Verpflichtungen
              erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Zugriff auf die Website
            </h2>
            <p className="mt-3">
              Beim Aufruf der Website können technisch erforderliche Daten
              verarbeitet werden, etwa IP-Adresse, Datum und Uhrzeit des
              Zugriffs, aufgerufene Inhalte, Browserinformationen und ähnliche
              Verbindungsdaten. Diese Verarbeitung dient der Bereitstellung,
              Stabilität und Sicherheit der Website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Kontaktaufnahme
            </h2>
            <p className="mt-3">
              Wenn Sie per E-Mail oder telefonisch Kontakt aufnehmen, werden
              die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage
              und für mögliche Anschlussfragen verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Datensicherheit
            </h2>
            <p className="mt-3">
              Diese Website nutzt eine verschlüsselte Verbindung, damit
              übermittelte Inhalte vor unbefugtem Zugriff geschützt werden.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben im Rahmen der gesetzlichen Vorgaben insbesondere das
              Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung sowie auf Widerspruch gegen bestimmte Verarbeitungen.
            </p>
          </div>

          {/* Rechtliche Detailangaben zu Hosting, eingesetzten Diensten, Cookies,
              Rechtsgrundlagen und Speicherdauern erst nach juristischer Prüfung
              und technischer Finalabstimmung ergänzen. */}
        </div>
      </section>
    </>
  );
}
