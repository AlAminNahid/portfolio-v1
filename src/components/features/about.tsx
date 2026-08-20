import { skillGroups } from "@/constants/skills";
import { services } from "@/constants/services";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20"
    >
      <Reveal className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-fg leading-tight">
              Comfortable across the stack,
              <br />
              from interface to database.
            </h2>
            <p className="mt-6 text-fg-muted leading-8">
              I&apos;m a computer science student and full-stack developer, most
              at home on problems that span the whole stack — designing the
              interface, building the API behind it, and modelling the data
              underneath.
            </p>
            <p className="mt-4 text-fg-muted leading-8">
              I care about the parts users never see — clean API boundaries, a
              schema that holds up as requirements change, and code the next
              person can read without asking me questions.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-success-solid shrink-0" />
              <span className="text-fg-muted">
                B.Sc. — Computer Science &amp; Engineering,{" "}
                <a
                  href="https://www.aiub.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-border-strong hover:text-accent hover:decoration-accent transition"
                >
                  AIUB
                </a>
              </span>
            </div>

            <div className="mt-8">
              <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-3">
                Focus
              </p>
              <RevealGroup as="ul" className="flex flex-wrap gap-2">
                {services.map(({ num, title }) => (
                  <RevealItem
                    key={num}
                    as="li"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-subtle border border-border text-xs font-medium text-fg-secondary"
                  >
                    {title}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>

          {/* Right — Skills grid */}
          <div className="grid grid-cols-2 gap-8 pt-2 lg:pt-16">
            {skillGroups.map(({ label, skills }) => (
              <div key={label}>
                <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-3">
                  {label}
                </p>
                <RevealGroup as="ul" className="flex flex-wrap gap-2">
                  {skills.map(({ name, icon: Icon }) => (
                    <RevealItem
                      key={name}
                      as="li"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-subtle border border-border text-xs font-medium text-fg-secondary"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      {name}
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
