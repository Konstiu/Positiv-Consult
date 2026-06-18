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
        description="Die bisherige Website enthält eine umfangreiche, generatorbasierte Datenschutzerklärung. Diese Seite übernimmt nur die öffentlich erkennbaren Kernangaben und markiert den Rest ausdrücklich als prüfpflichtig."
      />

      <section className="mx-auto w-full max-w-4xl px-5 py-18 md:px-8 md:py-24">
        <div className="surface-card space-y-6 p-6 md:p-8 text-sm leading-7 text-[var(--muted)]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Verantwortliche Stelle laut Altwebsite
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
              Auf der Altwebsite ausdrücklich genannte Inhalte
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
              Redaktionelle Einordnung
            </h2>
            <p className="mt-3">
              Die öffentlich abrufbare Datenschutzerklärung der bisherigen
              Website wirkt wie ein Standardtext mit allgemeinen Modulen. Für
              die neue Next.js-Website sollten nur die tatsächlich eingesetzten
              Dienste, Cookies, Tracking- und Hosting-Komponenten genannt
              werden.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Was vor dem Livegang geprüft werden muss
            </h2>
            <ul className="mt-3 space-y-2">
              <li>Tatsächlicher Hosting-Anbieter und Serverstandort</li>
              <li>Technisch eingesetzte Cookies und Drittanbieter</li>
              <li>Kontaktformular oder sonstige Integrationen</li>
              <li>Aufbewahrungsfristen und Rechtsgrundlagen im echten Betrieb</li>
              <li>Abgleich mit aktueller rechtlicher Fassung vor Veröffentlichung</li>
            </ul>
          </div>

          <p className="rounded-2xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-4">
            TODO rechtlich prüfen: Die vollständige Datenschutzerklärung der
            neuen Website darf nicht aus allgemeinen Alttexten abgeleitet
            werden, sondern muss auf die reale technische Implementierung der
            Next.js-Website abgestimmt sein.
          </p>
        </div>
      </section>
    </>
  );
}
