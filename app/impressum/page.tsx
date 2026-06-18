import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Impressum",
  description: "Impressum von POSITIVconsult mit klar gekennzeichneten Platzhaltern für fehlende Pflichtangaben.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Impressum"
        title="Impressum"
        description="Die nachfolgenden Angaben enthalten bewusst klar markierte Platzhalter, sofern rechtlich erforderliche Detailinformationen im Projektkontext noch nicht vorliegen."
      />

      <section className="mx-auto w-full max-w-4xl px-5 py-18 md:px-8 md:py-24">
        <div className="surface-card space-y-6 p-6 md:p-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Angaben gemäß österreichischer Informationspflicht
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              POSITIVconsult
              <br />
              [Vollständiger Firmenwortlaut / Rechtsform Platzhalter]
              <br />
              [Straße, Hausnummer, PLZ, Wien Platzhalter]
              <br />
              Österreich
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--ink)]">Kontakt</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Telefon: [Platzhalter]
              <br />
              E-Mail: office@positiv-consult.at
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--ink)]">
              Unternehmensdaten
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Firmenbuchnummer: [Platzhalter]
              <br />
              Firmenbuchgericht: [Platzhalter]
              <br />
              UID-Nummer: [Platzhalter]
              <br />
              Gewerbebehörde: [Platzhalter]
            </p>
          </div>
          <p className="rounded-2xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--muted)]">
            Rechtlicher Hinweis: Diese Angaben müssen vor dem Livegang mit den
            tatsächlich geltenden Unternehmensdaten vervollständigt und rechtlich
            geprüft werden.
          </p>
        </div>
      </section>
    </>
  );
}
