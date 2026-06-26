const skillGroups = [
  {
    label: "Languages",
    skills: ["C++", "Java", "C#", "Kotlin", "Python", "TypeScript", "JavaScript"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML / CSS"],
  },
  {
    label: "Backend & DB",
    skills: ["NestJS", "FastAPI", ".NET", "PostgreSQL", "MySQL", "MongoDB", "TypeORM", "Prisma"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "Postman", "Firebase", "Vercel", "Android Studio"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              Building with purpose,
              <br />
              learning by doing.
            </h2>
            <p className="mt-6 text-zinc-500 dark:text-zinc-400 leading-8">
              I&apos;m a computer science student and early-career full-stack
              developer who learns best by building projects. I enjoy creating
              complete web applications by combining front-end technologies with
              back-end services and databases.
            </p>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 leading-8">
              Through academic and personal projects, I&apos;m developing a
              strong foundation in software development — currently interning at
              AuraDev LTD, contributing to real product work.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-zinc-500 dark:text-zinc-400">
                B.Tech — Computer Science &amp; Engineering, AIUB
              </span>
            </div>
          </div>

          {/* Right — Skills grid */}
          <div className="grid grid-cols-2 gap-8 pt-2 lg:pt-16">
            {skillGroups.map(({ label, skills }) => (
              <div key={label}>
                <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-3">
                  {label}
                </p>
                <ul className="space-y-1.5">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
