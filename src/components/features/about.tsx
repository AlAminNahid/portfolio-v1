import { aboutParagraphs, education } from "@/constants/about";
import { skillGroups } from "@/constants/skills";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

export default function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHead
        id="about-heading"
        label="About"
        title="Engineer first, across the whole stack."
      />

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-6">
        <Reveal className="grid gap-5 text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed tracking-[-0.008em] text-pretty lg:col-span-8 lg:col-start-4">
          {aboutParagraphs.map((text, i) => (
            <p key={text} className={i > 0 ? "text-fg-muted" : undefined}>
              {text}
            </p>
          ))}
        </Reveal>

        <Reveal className="lg:col-span-12">
          <p className="label mb-5 text-fg">Technical expertise</p>
          <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ label, skills }, i) => (
              <section
                key={label}
                aria-label={label}
                className="border-b border-border py-7 sm:py-9 sm:pb-11 sm:max-lg:odd:pr-8 sm:max-lg:even:border-l sm:max-lg:even:pl-8 lg:px-8 lg:not-nth-[3n+1]:border-l lg:nth-[3n]:pr-0 lg:nth-[3n+1]:pl-0"
              >
                <p className="mb-[18px] flex items-center gap-3.5 font-mono text-[13px] text-fg-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-gradient-to-r from-accent to-transparent"
                  />
                </p>
                <h3 className="mb-[22px] text-[clamp(1.4rem,2.2vw,1.75rem)] font-medium tracking-[-0.025em]">
                  {label}
                </h3>
                <ul className="flex flex-wrap items-start gap-2.5">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-surface px-5 py-2.5 text-[14.5px] leading-tight text-fg shadow-[0_1px_2px_rgb(0_0_0/0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Reveal>

        <Reveal className="grid gap-1.5 rounded border border-border bg-surface px-6 py-[22px] lg:col-span-12">
          <p className="label">Education</p>
          <p className="text-[1.05rem] font-medium tracking-[-0.015em]">
            {education.degree}
          </p>
          <p className="text-[14.5px] text-fg-muted">
            {education.school} · {education.period} · {education.grade}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
