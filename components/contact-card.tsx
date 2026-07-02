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
    <article className="surface-card overflow-hidden p-0" aria-label={`Kontakt: ${name}`}>
      <div className="flex flex-col md:flex-row">
        {photoUrl ? (
          <div className="flex items-center justify-center bg-white p-4 md:p-8">
            <div className="relative aspect-square h-32 w-32 md:h-56 md:w-56 lg:h-64 lg:w-64">
              <Image
                src={photoUrl}
                alt={name}
                fill
                sizes="(max-width: 768px) 128px, 256px"
                className="rounded-full object-cover object-center"
                priority={false}
              />
            </div>
          </div>
        ) : null}

        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center md:p-8">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-semibold text-[var(--ink)] sm:text-2xl">
              {name}
            </h3>
            <p className="text-sm font-medium text-[var(--muted)]">{role}</p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-col">
              <dt className="sr-only">E-Mail</dt>
              <dd className="flex flex-col m-0">
                <a
                  href={`mailto:${email}`}
                  className="text-link block break-all text-sm font-semibold sm:text-base"
                  aria-label={`E-Mail an ${name}: ${email}`}
                >
                  {email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="sr-only">Telefon</dt>
              <dd className="flex flex-col m-0">
                <a
                  href={toTelHref(phone)}
                  className="block text-sm font-semibold text-[var(--ink)] sm:text-base"
                  aria-label={`Telefonnummer von ${name}: ${phone}`}
                >
                  {phone}
                </a>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
