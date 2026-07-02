import { PageHeader } from "@/components/page-header";
import { StatsStrip } from "@/components/stats-strip";
import { createMetadata } from "@/lib/metadata";
import { companyStory, teamContacts } from "@/lib/site-data";
import { ContactCard } from "@/components/contact-card";

export const metadata = createMetadata({
  title: "Über uns",
  description:
    "Über POSITIVconsult: persönliche Beratungserfahrung seit 2004 in Strategie, Digitalisierung, Vertrieb und Wachstumsfragen.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        title="Beratungserfahrung seit 2004 – direkt, pragmatisch und entscheidungsnah."
        description="POSITIVconsult begleitet Eigentümer:innen, Geschäftsführungen und Entscheidungsteams in Phasen, in denen Wachstum, Digitalisierung, Marktbearbeitung oder Förderthemen neu eingeordnet werden müssen."
      />

      <div className="py-10">
        <StatsStrip />
      </div>

      <section className="mx-auto w-full max-w-5xl px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
            Über POSITIVconsult
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white/60 p-6 text-left">
              <h3 className="font-serif text-xl font-semibold text-[var(--ink)]">
                Beratung für Eigentümer:innen und Geschäftsführungen
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Seit 2004 begleitet POSITIVconsult Unternehmen in Phasen, in denen
                Wachstum, Marktposition, Vertrieb oder digitale Entwicklung neu
                eingeordnet werden müssen. Die Beratung ist persönlich, direkt und
                auf tragfähige Entscheidungen und umsetzbare Prioritäten
                ausgerichtet.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/60 p-6 text-left">
              <h3 className="font-serif text-xl font-semibold text-[var(--ink)]">
                Erfahrung in Breite und Tiefe
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Zwei erfahrene Partner arbeiten direkt mit Eigentümer:innen,
                Geschäftsführung und Entscheidungsteams. Das sorgt für kurze Wege,
                Verbindlichkeit und einen klaren Blick auf Markt, Ressourcen und
                sinnvolle nächste Schritte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-18 md:px-8 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
            Entwicklungsschritte
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Von der Gründung 2004 bis heute – ein Überblick über die wichtigsten Meilensteine.
          </p>
        </div>
        
        {/* MOBILE: Simple vertical list, line on left */}
        <div className="mt-12 md:hidden">
          <div className="pl-[27px] pb-8 border-l-2 border-[var(--brand-blue)]/30 space-y-8">
            {companyStory.map((item) => (
              <div key={`${item.year}-${item.title}`} className="relative flex items-start gap-6">
                {/* Dot */}
                <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-blue)] ring-4 ring-white shrink-0">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>
                {/* Card */}
                <div className="flex-1">
                  <div className="rounded-2xl border border-black/5 bg-white/60 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
                      {item.year}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--ink)]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: Alternating layout (original working version) */}
        <div className="mt-12 hidden md:block relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-[var(--brand-blue)]/20 -translate-x-1/2" />
          <div className="space-y-8">
            {companyStory.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="rounded-2xl border border-black/5 bg-white/60 px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
                      {item.year}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--ink)]">
                      {item.title}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-blue)] ring-4 ring-white">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-18 md:px-8 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-[var(--brand-blue)]">
            Das Team
          </h2>
        </div>
        <div className="mt-8 grid gap-8 max-w-5xl mx-auto w-full">
          {teamContacts.map((person) => (
            <ContactCard
              key={person.email}
              name={person.name}
              role={person.role}
              email={person.email}
              phone={person.phone}
              photoUrl={person.photoUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}
