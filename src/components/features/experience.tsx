import { FaExternalLinkAlt } from "react-icons/fa";
import { experiences } from "@/constants/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-3xl mx-auto w-full">
        <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
          Experience
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-16">
          My Journey
        </h2>

        <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-indigo-500 bg-white dark:bg-zinc-950" />

              <p className="text-xs font-mono text-zinc-400">{exp.period}</p>

              <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-500 transition mt-1"
                  >
                    {exp.company} <FaExternalLinkAlt size={11} />
                  </a>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400">
                  {exp.badge}
                </span>
              </div>

              <p className="mt-5 text-sm text-zinc-500 dark:text-zinc-400 leading-7">
                {exp.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
