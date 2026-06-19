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
      className={`flex flex-col gap-5 ${
        centered ? "mx-auto max-w-3xl text-center items-center" : "max-w-3xl"
      }`}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="space-y-4">
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
