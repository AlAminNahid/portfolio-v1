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

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-x-16">
            {services.map(({ num, title, desc }) => (
              <div key={num} className="group border-t border-border pt-8">
                <p className="text-xs font-mono text-fg-subtle mb-4">{num}</p>
                <h3 className="text-base font-semibold text-fg mb-3 group-hover:text-accent transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-base text-fg-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
