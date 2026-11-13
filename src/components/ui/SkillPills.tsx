import { skillIcons } from "@/constants/skillIcons";
import { cn } from "@/lib/utils";

type SkillPillsProps = {
  items: readonly string[];
  className?: string;
};

export default function SkillPills({ items, className }: SkillPillsProps) {
  return (
    <ul className={cn("flex flex-wrap items-start gap-2", className)}>
      {items.map((item) => {
        const Icon = skillIcons[item];
        return (
          <li
            key={item}
            className="group/pill inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13.5px] leading-tight text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            {Icon && (
              <Icon
                aria-hidden="true"
                className="size-3.5 shrink-0 text-fg-muted transition-colors duration-200 group-hover/pill:text-accent"
              />
            )}
            {item}
          </li>
        );
      })}
    </ul>
  );
}
