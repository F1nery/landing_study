import { Header } from "./Header";
import { Section } from "./Section";
import type { ResumeData } from "@/data/resume";

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconTelegram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 3 2.5 10.2a1 1 0 0 0 .06 1.9l4.8 1.5 1.8 5.2a1 1 0 0 0 1.8.2L22 3Z" />
      <path d="m7.3 13.6 10-8.2" />
    </svg>
  );
}

export function ResumeLanding({ data }: { data: ResumeData }) {
  const initials = data.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const githubLink = data.links.find((link) => link.label.toLowerCase() === "github");
  const linkedinLink = data.links.find(
    (link) => link.label.toLowerCase() === "linkedin",
  );

  return (
    <div id="top" className="min-h-full">
      <Header name={data.name} />

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-6 sm:pt-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dim)] text-lg font-bold tracking-tight text-white shadow-lg shadow-[var(--accent)]/25"
            aria-hidden
          >
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-[var(--accent)]">
              {data.title}
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              {data.name}
            </h1>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              {data.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {githubLink && (
                <a
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800"
                >
                  {githubLink.label}
                </a>
              )}
              {linkedinLink && (
                <a
                  href={linkedinLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-500"
                >
                  {linkedinLink.label}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-16">
          <Section id="about" title="About">
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              {data.summary}
            </p>
          </Section>

          <Section id="experience" title="Experience">
            <ul className="space-y-10">
              {data.experience.map((job) => (
                <li key={`${job.company}-${job.period}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-[var(--ink)]">
                        {job.role}
                      </h3>
                      <p className="text-sm text-[var(--accent)]">{job.company}</p>
                    </div>
                    <p className="text-sm tabular-nums text-[var(--faint)]">
                      {job.period}
                      {job.location ? ` · ${job.location}` : ""}
                    </p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--faint)]">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="education" title="Education">
            <ul className="space-y-6">
              {data.education.map((edu) => (
                <li
                  key={`${edu.school}-${edu.period}`}
                  className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-[var(--ink)]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[var(--muted)]">{edu.school}</p>
                  </div>
                  <p className="text-sm tabular-nums text-[var(--faint)]">
                    {edu.period}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="skills" title="Skills">
            <div className="grid gap-8 sm:grid-cols-3">
              {data.skills.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-medium text-[var(--ink)]">
                    {group.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-[var(--border)] bg-[var(--elevated)] px-2.5 py-1 text-xs text-[var(--muted)]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--elevated)] p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Open to thoughtful opportunities and collaborations. Prefer email or telegram;
                I usually reply within a few days.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${data.email}`}
                    className="inline-flex items-center gap-2 font-medium text-[var(--ink)] underline-offset-4 hover:underline"
                  >
                    <IconMail className="text-[var(--accent)]" />
                    {data.email}
                  </a>
                </li>
                {data.phone && (
                  <li>
                    <a
                      href={`https://t.me/${(data.phone.match(/@([A-Za-z0-9_]+)/)?.[1] ?? "").trim()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-[var(--ink)] underline-offset-4 hover:underline"
                    >
                      <IconTelegram className="text-[var(--accent)]" />
                      {data.phone}
                    </a>
                  </li>
                )}
                <li className="inline-flex items-center gap-2 text-[var(--muted)]">
                  <IconMapPin className="shrink-0 text-[var(--accent)]" />
                  {data.location}
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {data.links
                  .filter((link) => link.label.toLowerCase() !== "portfolio")
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>
          </Section>
        </div>

        <footer className="mt-20 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--faint)]">
          © {new Date().getFullYear()} {data.name}. Built with Next.js.
        </footer>
      </main>
    </div>
  );
}
