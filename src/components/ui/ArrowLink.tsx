import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  arrow?: string;
  external?: boolean;
  download?: boolean;
  className?: string;
};

export default function ArrowLink({
  href,
  children,
  arrow = "↗",
  external = false,
  download = false,
  className,
}: ArrowLinkProps) {
  const motion =
    arrow === "↓"
      ? "group-hover:translate-y-0.5"
      : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

  return (
    <a
      href={href}
      download={download || undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-baseline gap-[0.45em] border-b border-border-strong pb-0.5 font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn("inline-block transition-transform duration-300", motion)}
      >
        {arrow}
      </span>
    </a>
  );
}
