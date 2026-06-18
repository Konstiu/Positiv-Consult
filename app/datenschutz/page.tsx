import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzhinweise von POSITIVconsult mit klar markierten Platzhaltern für fehlende rechtsverbindliche Angaben.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        eyebrow="Datenschutz"
        title="Datenschutzerklärung"
        description="Diese Seite liefert eine solide strukturelle Basis, ersetzt aber keine individuelle rechtliche Prüfung. Fehlende konkrete Angaben sind deutlich als Platzhalter gekennzeichnet."
      />

      <section className="mx-auto w-full max-w-4xl px-5 py-18 md:px-8 md:py-24">
        <div className="surface-card space-y-6 p-6 md:p-8 text-sm leading-7 text-[var(--muted)]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Verantwortliche Stelle
            </h2>
            <p className="mt-3">
              POSITIVconsult
              <br />
              [Vollständiger Firmenwortlaut / Rechtsform Platzhalter]
              <br />
              [Adresse Platzhalter]
              <br />
              E-Mail: office@positiv-consult.at
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <p className="mt-3">
              Personenbezogene Daten werden nur insoweit verarbeitet, als dies
              zur Bereitstellung dieser Website, zur Bearbeitung von Anfragen
              oder aufgrund rechtlicher Verpflichtungen erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Server-Logfiles und Hosting
            </h2>
            <p className="mt-3">
              Beim Aufruf der Website können technisch erforderliche Daten durch
              den Hosting-Anbieter verarbeitet werden. Vor dem Livegang sind
              Anbieter, Speicherort, Auftragsverarbeitung und konkrete
              Speicherdauer mit den tatsächlichen Betriebsdaten zu ergänzen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Kontaktaufnahme
            </h2>
            <p className="mt-3">
              Bei Kontaktaufnahme per E-Mail oder Telefon werden die übermittelten
              Daten ausschließlich zur Bearbeitung des jeweiligen Anliegens
              verwendet.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Ihre Rechte
            </h2>
            <p className="mt-3">
              Betroffene Personen haben grundsätzlich das Recht auf Auskunft,
              Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit, Widerruf und Widerspruch im Rahmen der
              gesetzlichen Bestimmungen.
            </p>
          </div>

          <p className="rounded-2xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-4">
            Rechtlicher Hinweis: Vor Veröffentlichung müssen diese Hinweise mit
            den tatsächlichen technischen und organisatorischen Gegebenheiten,
            eingesetzten Diensten und rechtlichen Anforderungen abgeglichen
            werden.
          </p>
        </div>
      </section>
    </>
  );
}
