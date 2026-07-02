import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  action?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-5 px-2 ${
        centered ? "mx-auto max-w-3xl text-center items-center" : "max-w-3xl"
      }`}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="space-y-4">
        <h2 className="text-balance font-serif text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="text-pretty text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8 md:text-lg">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
