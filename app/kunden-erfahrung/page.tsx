import { ContactPanel } from "@/components/contact-panel";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { testimonials } from "@/lib/site-data";

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
        description="Diese Website verzichtet bewusst auf erfundene Kundenlogos und nicht belegbare Cases. Sichtbar gemacht werden ausschließlich belastbare Erfahrungswerte und Beratungsstärke."
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

      <ContactPanel />
    </>
  );
}
