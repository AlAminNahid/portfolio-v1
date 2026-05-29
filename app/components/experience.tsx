import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <>
      <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">My journey</h4>
        <h2 className="text-center text-5xl font-ovo">Experience</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I am beginning my professional software engineering journey through
          hands-on product work, backend integration, and real client-focused
          development.
        </p>

        <div className="mx-auto max-w-4xl">
          <div className="relative grid gap-6 rounded-xl border-[0.5px] border-gray-400 bg-white p-6 shadow-xl shadow-gray-200 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-gray-950 md:grid-cols-[0.85fr_1.15fr] md:p-8">
            <div className="flex flex-col justify-between gap-6 border-b border-gray-200 pb-6 dark:border-gray-700 md:border-b-0 md:border-r md:pb-0 md:pr-8">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-gray-950">
                  <FaBriefcase size={18} />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                  Intern
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Software Engineering
                </h3>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <FaCalendarAlt size={14} />
                <span>June 2026 - Present</span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">AuraDev</h3>
                </div>

                <a
                  href="https://www.auradev.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm transition hover:bg-lightHover dark:border-gray-600 dark:hover:bg-gray-800"
                >
                  Company
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                Contributing to GrantOS as a Software Engineering Intern at
                AuraDev, where I am involved in end-to-end product development —
                from backend integration to building client-facing features —
                within a professional, agile engineering environment.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Product Development", "Backend Integration", "Agile"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
