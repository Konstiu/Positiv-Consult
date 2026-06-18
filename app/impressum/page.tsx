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
        description="Die folgenden Angaben wurden aus dem öffentlich erreichbaren Impressum der bisherigen Website übernommen und müssen vor Livegang rechtlich geprüft werden."
      />

      <section className="mx-auto w-full max-w-4xl px-5 py-18 md:px-8 md:py-24">
        <div className="surface-card space-y-6 p-6 md:p-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              Öffentlich erreichbare Angaben der Altwebsite
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
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Telefon: 06769414427
              <br />
              E-Mail: h.unterweger@positiv-consult.at
            </p>
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
              Sonstiger Hinweis der Altwebsite
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Die Website nennt außerdem die EU-Plattform zur
              Online-Streitbeilegung und erklärt, dass keine Verpflichtung und
              keine Bereitschaft zur Teilnahme an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              besteht.
            </p>
          </div>
          <p className="rounded-2xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--muted)]">
            TODO rechtlich prüfen: Rechtsform, vollständige Pflichtangaben,
            Aktualität der UID, Adressschreibweise, Streitbeilegungshinweis und
            alle sonstigen Informationspflichten vor Veröffentlichung nochmals
            abgleichen.
          </p>
        </div>
      </section>
    </>
  );
}
