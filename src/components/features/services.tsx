import { services } from "@/constants/services";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-4">
          Services
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-fg mb-16">
          What I Build
        </h2>

        <ul>
          {services.map(({ num, title, desc }) => (
            <li
              key={num}
              className="group flex items-start gap-8 py-10 border-b border-border first:border-t"
            >
              <span className="text-xs font-mono text-fg-muted pt-1.5 shrink-0 w-8">
                {num}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-fg group-hover:text-accent transition-colors duration-200">
                  {title}
                </h3>
                <p className="mt-2 text-fg-muted leading-7">
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
