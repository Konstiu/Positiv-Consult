import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Seite nicht gefunden",
  description: "Die gesuchte Seite existiert nicht.",
  path: "/not-found",
});

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--paper)] px-5 text-center">
      <div className="max-w-md space-y-6">
        <p className="text-8xl font-bold text-[var(--brand-blue)]">404</p>
        <div className="space-y-3">
          <h1 className="font-serif text-2xl font-semibold text-[var(--ink)]">
            Seite nicht gefunden
          </h1>
          <p className="text-base leading-7 text-[var(--muted)]">
            Die gesuchte Seite existiert nicht mehr oder wurde verschoben.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(31,78,140,0.25)] transition hover:bg-[var(--brand-blue)]/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full border border-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-[var(--brand-blue)] transition hover:bg-[var(--brand-blue)]/10"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
}
