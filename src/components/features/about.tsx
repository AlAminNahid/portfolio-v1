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
        title="Early in my career, working across frontend, backend and AI."
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
          <p className="label mb-5 text-fg">Skills</p>
          <div className="border-t border-border">
            {skillGroups.map(({ label, skills }) => (
              <section
                key={label}
                aria-label={label}
                className="grid gap-3.5 border-b border-border py-5 lg:grid-cols-12 lg:gap-x-6 lg:py-6"
              >
                <h3 className="text-[1.05rem] font-medium tracking-[-0.015em] lg:col-span-3 lg:pt-1">
                  {label}
                </h3>
                <ul className="flex flex-wrap items-start gap-2 lg:col-span-9">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13.5px] leading-tight text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
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
