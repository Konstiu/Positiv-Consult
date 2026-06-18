import { ContactPanel } from "@/components/contact-panel";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { clientCategories, testimonials } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Kunden und Erfahrung",
  description:
    "Einblick in die Erfahrung von POSITIVconsult mit belastbaren Fakten statt erfundenen Referenzen.",
  path: "/kunden-erfahrung",
});

export default function KundenErfahrungPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kunden / Erfahrung"
        title="Nachvollziehbare Erfahrung statt dekorativer Referenzbehauptungen."
        description="Die bisherige Website veröffentlicht Kennzahlen und eine umfangreiche Kundenliste. Die neue Seite übernimmt diese Informationen selektiv und sachlich, ohne künstliche Referenzinszenierung."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:px-8 lg:grid-cols-3 md:py-24">
        {testimonials.map((item) => (
          <article key={item.title} className="surface-card p-6 md:p-7">
            <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {item.text}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-4 md:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">Öffentlich genannte Kunden</span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Ein zurückhaltend kuratierter Auszug aus der auf der Altwebsite
            veröffentlichten Kundenliste.
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Es werden bewusst keine Logos, Cases oder Aussagen ergänzt, die
            öffentlich nicht belegbar waren. Die folgenden Namen stammen aus
            der bestehenden Website und sollten vor dem Livegang nochmals auf
            Aktualität geprüft werden.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {clientCategories.map((group) => (
            <article key={group.category} className="surface-card p-6 md:p-7">
              <h3 className="font-serif text-2xl font-semibold text-[var(--ink)]">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.names.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[var(--ink)]"
                  >
                    {name}
                  </span>
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
