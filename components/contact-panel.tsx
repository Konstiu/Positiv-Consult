import { addressLines } from "@/lib/site-data";
import Link from "next/link";

export function ContactPanel({ id }: { id?: string }) {
  return (
    <section id={id} className="site-shell section-space grid place-items-center">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <span className="eyebrow">Kontakt</span>
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
          Bereit für den nächsten Schritt?
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
          Melden Sie sich für ein unverbindliches Erstgespräch. Wir klären in 30 Minuten,
          wo wir unterstützen können und welche Prioritäten sinnvoll sind.
        </p>
        <p className="text-sm text-[var(--muted)]">{addressLines.join(", ")}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(31,78,140,0.25)] transition hover:bg-[var(--brand-blue)]/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Jetzt Gespräch vereinbaren
          </Link>
        </div>
      </div>
    </section>
  );
}
