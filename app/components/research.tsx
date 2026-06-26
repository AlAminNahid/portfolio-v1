import { FaExternalLinkAlt } from "react-icons/fa";

const highlights = [
  "MobileNetV3",
  "BDWaste Dataset",
  "Deep Learning",
  "Urban Sustainability",
];

export default function Research() {
  return (
    <section
      id="research"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 min-h-screen flex flex-col justify-center snap-start"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
          Research
        </p>

        <blockquote className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
          &ldquo;Intelligent Waste Classification
          <br className="hidden sm:block" />
          for Sustainable Urban Development&rdquo;
        </blockquote>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <p className="text-xs font-mono text-zinc-400 shrink-0">
            PECCII 2026 · Jhenaidah, Bangladesh
          </p>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-10">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-7">
              A MobileNetV3-based deep learning approach using the BDWaste
              dataset, focused on classifying waste images for smarter and more
              sustainable urban waste-management workflows.
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-7">
              Co-authored with Ferdus Hossain, Tariful Islam Fahim, and Salman
              Zzoha. Accepted at the International Conference on Power,
              Electronics, Communications, Computing, and Intelligent
              Infrastructure.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-3">
              Highlights
            </p>
            <div className="flex flex-wrap gap-2">
              {highlights.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-400 w-10 shrink-0">
                  Status
                </span>
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                  Accepted
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-400 w-10 shrink-0">
                  Year
                </span>
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  2026
                </span>
              </div>
            </div>

            <a
              href="https://peccii.pust.ac.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              View Conference <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
