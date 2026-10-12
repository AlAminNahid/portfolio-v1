import { ctaLinks, hero } from "@/constants/hero";
import { RESUME_PATH } from "@/constants/site";
import Container from "@/components/ui/Container";
import ArrowLink from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import RotatingWord from "@/components/features/header/RotatingWord";

export default function Header() {
  const [primary, secondary] = ctaLinks;

  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-[clamp(56px,9vw,120px)] pb-[clamp(56px,8vw,96px)]"
    >
      <Container>
        <div className="grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal className="mb-[clamp(28px,4vw,48px)] lg:col-span-12">
            <p className="label flex flex-wrap gap-x-[18px] gap-y-1.5">
              <span>
                <span
                  aria-hidden="true"
                  className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-[1px]"
                />
                {hero.role}
              </span>
              <span>{hero.location}</span>
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-11">
            <h1
              id="hero-heading"
              className="text-[clamp(2.5rem,7.2vw,5.6rem)] leading-[1.02] font-medium tracking-[-0.045em] text-balance text-fg"
            >
              {hero.name} {hero.headline}{" "}
              <RotatingWord words={hero.rotatingWords} />
            </h1>
          </Reveal>

          <Reveal
            delay={0.18}
            className="mt-[clamp(32px,5vw,56px)] lg:col-span-8 lg:col-start-5"
          >
            <p className="max-w-[56ch] text-[clamp(1.02rem,1.5vw,1.2rem)] leading-relaxed text-pretty text-fg-muted">
              {hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href={primary.href}
                className="group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-fg px-[22px] text-[15px] font-medium text-canvas transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
              >
                {primary.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
              <ArrowLink href={RESUME_PATH} arrow="↓" download>
                Download CV
              </ArrowLink>
              <ArrowLink href={secondary.href} arrow="→">
                {secondary.label}
              </ArrowLink>
            </div>
          </Reveal>

          <Reveal
            delay={0.28}
            className="mt-[clamp(48px,7vw,88px)] border-t border-border pt-5 lg:col-span-12"
          >
            <div className="grid gap-3.5 lg:grid-cols-12 lg:gap-x-6">
              <p className="label text-fg lg:col-span-7">
                {hero.specialisations}
              </p>
              <p className="label lg:col-span-4 lg:col-start-9">
                Currently
                <b className="mt-1 block font-sans text-[14.5px] font-medium tracking-normal text-fg normal-case">
                  {hero.current}
                </b>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
