import { skillGroups } from "@/constants/skills";
import { philosophy } from "@/constants/philosophy";
import { Reveal } from "@/components/ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 border-t border-border"
    >
      <Reveal className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-widest uppercase text-fg-muted mb-2">
          About
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-fg tracking-tight mb-16">
          The Engineer
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="text-base text-fg-muted leading-8 mb-5">
              I&apos;m a Computer Science &amp; Engineering student at{" "}
              <a
                href="https://www.aiub.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg underline underline-offset-4 decoration-border-strong hover:decoration-accent transition-colors"
              >
                AIUB
              </a>{" "}
              and an engineer focused on building intelligent systems. My work
              spans AI engineering, full-stack web development, native Android
              applications, and applied AI research.
            </p>
            <p className="text-base text-fg-muted leading-8 mb-5">
              I&apos;m interested in the intersection of AI and software
              engineering — where machine learning models, LLMs becomes
              components of real products people actually use.
            </p>
            <p className="text-base text-fg-muted leading-8">
              I care about the parts users never see: clean API boundaries, data
              models that survive requirements changes, and code the next person
              can read without questions.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-fg-subtle mb-8">
              How I Think
            </p>
            <div className="space-y-6">
              {philosophy.map(({ label, body }) => (
                <div
                  key={label}
                  className="border-l-2 border-border pl-5 hover:border-accent transition-colors duration-300"
                >
                  <p className="text-sm font-semibold text-fg mb-1">{label}</p>
                  <p className="text-sm text-fg-muted leading-6">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-mono tracking-widest uppercase text-fg-muted mb-8">
            Technical Expertise
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 border-l border-t border-border rounded-xl overflow-hidden">
            {skillGroups.map(({ label, skills }) => (
              <div key={label} className="p-5 border-r border-b border-border">
                <p className="text-xs font-mono tracking-widest uppercase text-fg-subtle mb-3">
                  {label}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {skills.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-subtle text-xs font-mono text-fg-muted"
                    >
                      <Icon className="w-3 h-3 shrink-0" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
