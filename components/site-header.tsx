"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/site-data";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5">
      <span
        className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-[var(--ink)] transition ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-[var(--ink)] transition ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-[var(--ink)] transition ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:rgba(247,243,238,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-[0.08em] text-[var(--ink)]">
            POSITIVconsult
          </span>
          <span className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--muted)]">
            Unternehmensberatung Wien
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-[var(--ink)] text-white"
                    : "text-[var(--muted)] hover:bg-white hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="hidden rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(193,165,114,0.28)] md:inline-flex"
          >
            Gespräch anfragen
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex rounded-full border border-black/10 bg-white/90 p-3 text-[var(--ink)] lg:hidden"
            aria-expanded={open}
            aria-label="Navigation öffnen"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-[var(--paper)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 md:px-8">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-base transition ${
                    active
                      ? "bg-[var(--ink)] text-white"
                      : "text-[var(--muted)] hover:bg-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="mt-3 inline-flex justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              Gespräch anfragen
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
