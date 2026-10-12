import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  labelledBy,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-10 border-t border-border py-[clamp(72px,11vw,144px)]",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
