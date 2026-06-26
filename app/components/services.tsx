const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    desc: "Building complete web applications using modern frontend and backend technologies with databases and REST APIs — from design to deployment.",
  },
  {
    num: "02",
    title: "Android App Development",
    desc: "Developing native Android applications using Kotlin and modern tooling to create efficient, user-friendly mobile experiences that connect to real backends.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
          Services
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-16">
          What I Build
        </h2>

        <ul>
          {services.map(({ num, title, desc }) => (
            <li
              key={num}
              className="group flex items-start gap-8 py-10 border-b border-zinc-200 dark:border-zinc-800 first:border-t"
            >
              <span className="text-xs font-mono text-zinc-400 pt-1.5 shrink-0 w-8">
                {num}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-500 transition-colors duration-200">
                  {title}
                </h3>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400 leading-7">
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
