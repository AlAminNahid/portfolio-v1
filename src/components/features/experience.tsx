import { experiences } from "@/constants/experience";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import ArrowLink from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHead
        id="experience-heading"
        label="Professional experience"
        title="Where I have worked on production software."
      />

      <div>
        {experiences.map((entry) => (
          <Reveal key={entry.company}>
            <article className="grid gap-6 border-t border-border py-[clamp(32px,4.4vw,56px)] last:border-b lg:grid-cols-12 lg:gap-x-6">
              <div className="lg:col-span-3">
                <p className="label text-fg">{entry.period}</p>
                {entry.current && (
                  <p className="label mt-2.5 flex items-center gap-2 text-accent">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    Current role
                  </p>
                )}
              </div>

              <div className="grid min-w-0 gap-[22px] lg:col-span-9">
                <h3 className="text-[clamp(1.4rem,2.5vw,1.9rem)] leading-[1.15] font-medium tracking-[-0.025em]">
                  {entry.company}
                  <span className="mt-1.5 block text-[0.62em] font-normal tracking-[-0.005em] text-fg-muted">
                    {entry.role}
                  </span>
                </h3>
                <p className="max-w-[62ch] text-pretty text-fg-muted">
                  {entry.summary}
                </p>

                <ul className="border-t border-border">
                  {entry.items.map(({ title, text }) => (
                    <li
                      key={title}
                      className="grid gap-1.5 border-b border-border py-3.5 text-[15px] transition-colors duration-200 hover:bg-linear-to-r hover:from-accent-soft hover:to-transparent sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)] sm:gap-x-6"
                    >
                      <b className="font-medium">{title}</b>
                      <span className="text-pretty text-fg-muted">{text}</span>
                    </li>
                  ))}
                </ul>

                {entry.note && (
                  <p className="max-w-[60ch] text-[13px] text-fg-muted">
                    {entry.note}
                  </p>
                )}
                <div>
                  <ArrowLink href={entry.link.href} external>
                    {entry.link.label}
                  </ArrowLink>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
