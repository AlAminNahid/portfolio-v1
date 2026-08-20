"use client";

import { motion, type Variants } from "framer-motion";
import { bgIcons, ctaLinks, socialLinks } from "@/constants/hero";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Header() {
  return (
    <div
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-[8%] pt-20 pb-12 overflow-hidden"
    >
      {/* Ghost tech icons */}
      <div aria-hidden="true" className="pointer-events-none">
        {bgIcons.map(({ Icon, className, size, rotate }, i) => (
          <motion.div
            key={i}
            className={`absolute ${className}`}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 7 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <Icon
              size={size}
              className="text-fg opacity-[0.06] dark:opacity-[0.035]"
              style={{ transform: `rotate(${rotate}deg)` }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Available badge */}
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-success-border bg-success-surface px-3 py-1.5 text-xs font-medium text-success"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success-solid animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl font-bold tracking-tight text-fg leading-tight"
        >
          Al Amin Hossain Nahid
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="mt-4 text-xl sm:text-2xl font-medium text-fg-subtle"
        >
          Full-Stack Developer
          <span className="cursor" />
        </motion.p>

        {/* Bio */}
        <motion.p variants={item} className="mt-6 max-w-lg text-fg-muted leading-7">
          I build web and mobile products end to end — from the interface down to
          the API and the database, mostly with TypeScript, React, and Python.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-8 flex items-center gap-4 flex-wrap justify-center"
        >
          {ctaLinks.map(({ label, href, variant }) => (
            <Button
              key={href}
              asChild
              variant={variant === "primary" ? "default" : "outline"}
              className={
                variant === "primary"
                  ? "h-auto rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90"
                  : "h-auto rounded-full border-border-strong px-6 py-3 text-sm font-semibold text-fg-secondary hover:bg-surface-subtle hover:text-fg-secondary"
              }
            >
              <a href={href}>{label}</a>
            </Button>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="mt-12 flex items-center gap-6 text-sm text-fg-subtle"
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
}
