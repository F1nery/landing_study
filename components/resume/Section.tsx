import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 rounded-2xl border border-[var(--border)] bg-[var(--elevated)]/70 p-6 shadow-sm sm:p-8 ${className}`}
    >
      <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        {title}
      </h2>
      {children}
    </section>
  );
}
