import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";
import { digitalOfferModules } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Digitalisierung für KMU",
  description:
    "Digitalisierungsberatung für KMU: Prozesse analysieren, Systeme priorisieren und digitale Vorhaben in eine sinnvolle Reihenfolge bringen.",
  path: "/digitalisierung",
  keywords: ["Digitalisierung KMU", "Digitalisierungsberatung", "Digital Consulting", "E-Commerce Beratung"],
});

const painPoints = [
  "Historisch gewachsene Prozesse und viele manuelle Arbeitsschritte",
  "Unklare Systemlandschaft mit zu vielen Tools und Schnittstellen",
  "Website oder E-Commerce-Struktur nicht mehr zeitgemäß",
  "Digitale Vorhaben laufen parallel, aber ohne klare Prioritäten",
];

export default function DigitalisierungPage() {
  return (
    <>
      <PageHeader
        eyebrow="KI CONSULTING UND DIGITALISIERUNG"
        title="Künstliche Intelligenz mit Substanz statt Hype."
        description="KI Consulting ist dann sinnvoll, wenn Nutzen, Prozesse und Umsetzung klar zusammenpassen. POSITIVconsult begleitet Unternehmen dabei mit einem nüchternen Blick auf Business-Relevanz und Machbarkeit."
      />

      <section className="mx-auto w-full max-w-5xl px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10 text-center">
          <div className="text-left">
            <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
              Typische digitale Baustellen
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--ink)]">
              {painPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-blue)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left">
            <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
              Worauf wir schauen
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Digitalisierung beginnt selten auf der grünen Wiese. Meist geht es um bestehende Prozesse, gewachsene Systeme, operative Engpässe und eine Vielzahl von Ideen. Wir helfen dabei, daraus eine sinnvolle Reihenfolge zu machen und echte Hebel von Nebenschauplätzen zu trennen.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 pb-18 md:px-8 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
            Unsere Leistungsmodule
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {digitalOfferModules.map((item) => (
            <div key={item.title} className="rounded-2xl border border-black/5 bg-white/60 p-5">
              <h3 className="font-serif text-xl font-semibold text-[var(--brand-blue)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
