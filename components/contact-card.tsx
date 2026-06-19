import Image from "next/image";

type ContactCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
  photoUrl?: string;
};

export function ContactCard({ name, role, email, phone, photoUrl }: ContactCardProps) {
  return (
    <article className="surface-card card-stack min-h-[16.5rem] overflow-hidden p-0">
      {photoUrl ? (
        <div className="flex justify-center bg-white px-6 pt-6">
          <div className="relative aspect-square w-full max-w-[12rem] overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src={photoUrl}
              alt={name}
              fill
              sizes="192px"
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col items-center p-6 text-center md:p-7">
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-semibold text-[var(--ink)]">
              {name}
            </h3>
            <p className="text-sm font-medium text-[var(--muted)]">{role}</p>
          </div>
        </div>

        <div className="mt-auto space-y-4 pt-8">
          <a href={`mailto:${email}`} className="text-link block break-all text-base font-semibold">
            {email}
          </a>
          <a href={`tel:${phone}`} className="block text-base font-semibold text-[var(--ink)]">
            {phone}
          </a>
        </div>
      </div>
    </article>
  );
}
