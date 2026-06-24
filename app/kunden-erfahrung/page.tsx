import { ContactPanel } from "@/components/contact-panel";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { clientCategories, proofTeasers } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Referenzen",
  description:
    "Referenzen und Erfahrung von POSITIVconsult: Branchen, Kundenfelder und typische Beratungsaufgaben im Überblick.",
  path: "/kunden-erfahrung",
});

export default function KundenErfahrungPage() {
  return (
    <>
      <PageHeader
        eyebrow="Referenzen"
        title="Erfahrung aus unterschiedlichen Branchen und Unternehmensrealitäten."
        description="POSITIVconsult arbeitet mit KMU, Start-ups, Institutionen und wirtschaftsnahen Organisationen. Die Referenzen zeigen keine dekorativen Behauptungen, sondern echte Branchenbreite und typische Themenfelder."
        highlights={[
          "Handel, E-Commerce, Dienstleistung und KMU",
          "Bildung, Institutionen und wirtschaftsnahe Organisationen",
          "Gastronomie, Lifestyle und wachstumsorientierte Unternehmen",
          "Direkte Zusammenarbeit mit Eigentümer:innen und Geschäftsführungen",
        ]}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-2 xl:grid-cols-4 md:py-24">
        {proofTeasers.map((item) => (
          <article key={item.title} className="surface-card p-6 md:p-7">
            <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
              {item.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              {item.text}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-4 md:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">Kunden & Branchen</span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Ein Auszug aus Unternehmen und Organisationen, mit denen POSITIVconsult gearbeitet hat.
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Ohne fremde Logos und ohne erfundene Cases: Die folgenden Namen zeigen die Bandbreite der Branchen und Aufgaben, in denen Erfahrung vorhanden ist.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {clientCategories.map((group) => (
            <article key={group.category} className="surface-card p-6 md:p-7">
              <h3 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
                {group.category}
              </h3>
              <div className="mt-5 space-y-3 border-l border-[rgba(31,78,140,0.18)] pl-5">
                {group.names.map((name) => (
                  <div
                    key={name}
                    className="text-base font-medium leading-6 text-[var(--muted)]"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
