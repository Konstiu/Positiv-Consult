import type {FaqItem} from "@/lib/site-data";

import {SectionHeading} from "@/components/section-heading";

export function FaqSection({
                               title,
                               description,
                               items,
                           }: {
    title: string;
    description: string;
    items: FaqItem[];
}) {
    return (
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-18 md:px-8 md:py-24">
            <SectionHeading
                eyebrow="FAQ"
                title={title}
                description={description}
            />
            <div className="grid gap-4">
                {items.map((item) => (
                    <details key={item.question} className="surface-card group px-6 py-5">
                        <summary
                            className="cursor-pointer list-none pr-8 text-lg font-semibold text-[var(--ink)] marker:content-none">
                            {item.question}
                        </summary>
                        <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--muted)]">
                            {item.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
}
