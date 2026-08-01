import { bgIcons, ctaLinks, socialLinks } from "@/constants/hero";

export default function Header() {
  return (
    <div
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-[8%] pt-20 pb-12 overflow-hidden"
    >
      {/* Ghost tech icons */}
      <div aria-hidden="true" className="pointer-events-none">
        {bgIcons.map(({ Icon, className, size, rotate }, i) => (
          <Icon
            key={i}
            size={size}
            className={`absolute ${className} text-fg opacity-[0.06] dark:opacity-[0.035]`}
            style={{ transform: `rotate(${rotate}deg)` }}
          />
        ))}
      </div>

      {/* Available badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-success-border bg-success-surface px-3 py-1.5 text-xs font-medium text-success">
        <span className="h-1.5 w-1.5 rounded-full bg-success-solid animate-pulse" />
        Available for opportunities
      </div>

      {/* Name */}
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-fg leading-tight">
        Al Amin Hossain Nahid
      </h1>

      {/* Role */}
      <p className="mt-4 text-xl sm:text-2xl font-medium text-fg-subtle">
        Full-Stack Developer
        <span className="cursor" />
      </p>

      {/* Bio */}
      <p className="mt-6 max-w-lg text-fg-muted leading-7">
        I build web and mobile products end to end — from the interface down to
        the API and the database, mostly with TypeScript, React, and Python.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex items-center gap-4 flex-wrap justify-center">
        {ctaLinks.map(({ label, href, variant }) => (
          <a
            key={href}
            href={href}
            className={
              variant === "primary"
                ? "px-6 py-3 rounded-full bg-surface-inverted text-fg-inverted text-sm font-semibold hover:opacity-90 transition"
                : "px-6 py-3 rounded-full border border-border-strong text-sm font-semibold text-fg-secondary hover:bg-surface-subtle transition"
            }
          >
            {label}
          </a>
        ))}
      </div>

      {/* Social links */}
      <div className="mt-12 flex items-center gap-6 text-sm text-fg-subtle">
        {socialLinks.map(({ label, href }, i) => (
          <span key={href} className="flex items-center gap-6">
            {i > 0 && <span>·</span>}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition"
            >
              {label}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}
