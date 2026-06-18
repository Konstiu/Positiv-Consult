import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

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
            <p className="mt-3">
              Heidrun Unterweger
              <br />
              POSITIVconsult
              <br />
              Mariahilfer Straße 101
              <br />
              1060 Wien
              <br />
              Österreich
              <br />
              Telefon: 06769414427
              <br />
              E-Mail: h.unterweger@positiv-consult.at
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Inhalte dieser Datenschutzhinweise
            </h2>
            <ul className="mt-3 space-y-2">
              <li>Server-Logfiles bei rein informatorischer Nutzung</li>
              <li>SSL- bzw. TLS-Verschlüsselung</li>
              <li>Cookies einschließlich Session- und persistenter Cookies</li>
              <li>Verarbeitung bei Kontaktaufnahme per Formular oder E-Mail</li>
              <li>Betroffenenrechte und Widerspruchsrecht</li>
              <li>Hinweise zur Speicherdauer personenbezogener Daten</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Allgemeine Hinweise
            </h2>
            <p className="mt-3">
              Personenbezogene Daten werden nur in dem Umfang verarbeitet, wie
              dies für den Betrieb der Website, die Bearbeitung von Anfragen
              oder aufgrund gesetzlicher Verpflichtungen erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Weitere Informationen
            </h2>
            <ul className="mt-3 space-y-2">
              <li>Tatsächlicher Hosting-Anbieter und Serverstandort</li>
              <li>Technisch eingesetzte Cookies und Drittanbieter</li>
              <li>Kontaktformular oder sonstige Integrationen</li>
              <li>Aufbewahrungsfristen und Rechtsgrundlagen im echten Betrieb</li>
              <li>Abgleich mit der jeweils aktuellen rechtlichen Fassung</li>
            </ul>
          </div>

          <p className="rounded-2xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-4">
            Für eine vollständige rechtliche Fassung sollten eingesetzte
            Dienste, Formulare, Hosting-Setups und eventuelle Tracking- oder
            Analysekomponenten laufend berücksichtigt werden.
          </p>
        </div>
      </section>
    </>
  );
}
