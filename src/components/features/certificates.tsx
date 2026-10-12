import { certificates } from "@/constants/certificates";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

export default function Certificates() {
  return (
    <Section id="certificates" labelledBy="certificates-heading">
      <SectionHead
        id="certificates-heading"
        label="Certificates"
        title="Recognition and training."
      />

      <ul className="grid gap-5 lg:grid-cols-3">
        {certificates.map(
          ({ title, type, issuer, date, detail, icon: Icon }, i) => (
            <li key={title} className="flex">
              <Reveal delay={i * 0.06} className="flex w-full">
                <div className="flex w-full flex-col gap-3 rounded-md border border-border bg-surface px-[26px] pt-7 pb-[30px] transition duration-300 hover:-translate-y-[3px] hover:border-accent">
                  <Icon
                    size={28}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="mb-1 text-accent lg:mb-3.5"
                  />
                  <span className="label">
                    {type} · {date}
                  </span>
                  <h3 className="text-[1.2rem] leading-tight font-medium tracking-[-0.02em] text-balance">
                    {title}
                  </h3>
                  <p className="mt-auto pt-1 text-[14.5px] text-fg-muted">
                    {issuer}
                  </p>
                  {detail && <small className="label">{detail}</small>}
                </div>
              </Reveal>
            </li>
          ),
        )}
      </ul>
    </Section>
  );
}
