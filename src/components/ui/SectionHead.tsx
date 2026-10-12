import { Reveal } from "@/components/ui/Reveal";

type SectionHeadProps = {
  label: string;
  title: string;
  id: string;
};

export default function SectionHead({ label, title, id }: SectionHeadProps) {
  return (
    <Reveal className="mb-10 grid gap-3.5 lg:mb-[72px] lg:grid-cols-12 lg:gap-x-6">
      <p className="label lg:col-span-3 lg:pt-[0.6em]">{label}</p>
      <h2
        id={id}
        className="max-w-[22ch] text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.12] font-medium tracking-[-0.028em] text-balance text-fg lg:col-span-9"
      >
        {title}
      </h2>
    </Reveal>
  );
}
