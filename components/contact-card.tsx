type ContactCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
};

export function ContactCard({ name, role, email, phone }: ContactCardProps) {
  return (
    <article className="surface-card card-stack min-h-[16.5rem] p-6 md:p-7">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
          Ansprechpartner
        </p>
        <div className="space-y-1">
          <h3 className="font-serif text-2xl font-semibold text-[var(--ink)]">
            {name}
          </h3>
          <p className="text-sm font-medium text-[var(--muted)]">{role}</p>
        </div>
      </div>

      <div className="mt-auto space-y-4 pt-8">
        <a href={`mailto:${email}`} className="text-link block text-base font-semibold break-all">
          {email}
        </a>
        <a href={`tel:${phone}`} className="block text-base font-semibold text-[var(--ink)]">
          {phone}
        </a>
      </div>
    </article>
  );
}
