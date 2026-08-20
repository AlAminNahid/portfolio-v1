import { services } from "@/constants/services";
import { Reveal } from "@/components/ui/Reveal";

export default function Capabilities() {
  return (
    <section className="w-full px-6 lg:px-[8%] py-20 border-t border-border">
      <Reveal>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-fg-muted mb-12">
            What I Build
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {services.map(({ num, title, desc }) => (
              <div
                key={num}
                className="group px-0 sm:px-8 first:pl-0 last:pr-0 py-8 sm:py-0"
              >
                <p className="text-xs font-mono text-fg-subtle mb-4">{num}</p>
                <h3 className="text-base font-semibold text-fg mb-3 group-hover:text-accent transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
