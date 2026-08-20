import { FaExternalLinkAlt } from "react-icons/fa";
import { experiences } from "@/constants/experience";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20"
    >
      <Reveal className="max-w-3xl mx-auto w-full">
        <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-4">
          Experience
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-fg mb-16">
          My Journey
        </h2>

        <RevealGroup
          className="relative pl-8 border-l-2 border-border space-y-12"
          stagger={0.15}
        >
          {experiences.map((exp, i) => (
            <RevealItem key={i} className="relative">
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-canvas" />

              <p className="text-xs font-mono text-fg-muted">{exp.period}</p>

              <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-fg">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-accent transition mt-1"
                  >
                    {exp.company} <FaExternalLinkAlt size={11} />
                  </a>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full border border-border text-fg-muted">
                  {exp.badge}
                </span>
              </div>

              <p className="mt-5 text-sm text-fg-muted leading-7">
                {exp.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-surface-subtle border border-border text-fg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Reveal>
    </section>
  );
}
