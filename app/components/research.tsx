import {
  FaAward,
  FaBookOpen,
  FaBrain,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const researchHighlights = [
  "MobileNetV3-based image classification",
  "BDWaste dataset experimentation",
  "Deep learning for sustainable urban development",
];

export default function Research() {
  return (
    <section id="research" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">
        Academic contribution
      </h4>
      <h2 className="text-center text-5xl font-ovo">Research</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        My work also extends into applied machine learning, where I explore how
        deep learning can support practical, real-world sustainability problems.
      </p>

      <article className="mx-auto max-w-5xl overflow-hidden rounded-xl border-[0.5px] border-gray-400 bg-white shadow-xl shadow-gray-200 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-gray-950">
        <div className="grid md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between gap-8 border-b border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-950/60 md:border-b-0 md:border-r md:p-8">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-gray-950">
                <FaBookOpen size={18} />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Publication
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Accepted at PECCII 2026
              </h3>
            </div>

            <div className="grid gap-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <FaCalendarAlt size={14} />
                <span>2026</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt size={14} />
                <span>Jhenaidah, Bangladesh</span>
              </div>
              <a
                href="https://peccii.pust.ac.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-max items-center gap-3 rounded-full border border-gray-300 px-4 py-2 transition hover:bg-white dark:border-gray-700 dark:hover:bg-gray-900"
              >
                <FaExternalLinkAlt size={13} />
                <span>PECCII 2026</span>
              </a>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-lime-300">
              <FaAward size={12} />
              To appear in conference proceedings
            </div>

            <h3 className="text-2xl font-semibold leading-tight">
              Intelligent Waste Classification for Sustainable Urban
              Development
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
              A MobileNetV3-based deep learning approach using the BDWaste
              dataset, focused on classifying waste images for smarter and more
              sustainable urban waste-management workflows.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
              Co-authored with Ferdus Hossain, Tariful Islam Fahim, and Salman
              Zzoha. Accepted for the International Conference on Power,
              Electronics, Communications, Computing, and Intelligent
              Infrastructure.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {researchHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  <FaBrain size={11} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
