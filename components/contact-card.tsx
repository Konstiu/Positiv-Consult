import Image from "next/image";
import { toTelHref } from "@/lib/site-data";

type ContactCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
  photoUrl?: string;
};

export function ContactCard({ name, role, email, phone, photoUrl }: ContactCardProps) {
  return (
    <article className="surface-card overflow-hidden p-0">
      <div className="flex flex-col md:flex-row">
        {photoUrl ? (
          <div className="flex items-center justify-center bg-white p-6 md:p-8">
            <div className="relative aspect-square h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
              <Image
                src={photoUrl}
                alt={name}
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="rounded-full object-cover object-center"
                priority={false}
              />
            </div>
          </div>
        ) : null}

        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center md:p-8">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              {name}
            </h3>
            <p className="text-sm font-medium text-[var(--muted)]">{role}</p>
          </div>

          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${email}`}
              className="text-link block break-all text-base font-semibold"
            >
              {email}
            </a>
            <a
              href={toTelHref(phone)}
              className="block text-base font-semibold text-[var(--ink)]"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
