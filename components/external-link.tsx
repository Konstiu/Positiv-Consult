import type { ReactNode } from "react";
import Link from "next/link";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  label?: string;
  className?: string;
};

export function ExternalLink({ href, children, label, className }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || `${children} (öffnet in neuem Tab)`}
      className={`inline-flex items-center gap-1 ${className || ""}`}
    >
      {children}
      <svg
        className="h-3.5 w-3.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </Link>
  );
}
