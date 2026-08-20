"use client";

import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { container, item, fadeIn } from "../../../constants/variants";

export default function Header() {
  return (
    <div
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-[8%] pt-28 pb-20"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={fadeIn}
            className="mb-10 flex items-center gap-3"
          >
            <span className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-success-solid animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.div variants={item} className="overflow-hidden">
            <h1 className="text-[clamp(3.2rem,6vw,6rem)] font-bold leading-[0.92] tracking-tight text-fg">
              Al Amin
            </h1>
          </motion.div>
          <motion.div variants={item} className="overflow-hidden">
            <h1 className="text-[clamp(3.2rem,6vw,6rem)] font-bold leading-[0.92] tracking-tight text-fg">
              Hossain Nahid
            </h1>
          </motion.div>

          <motion.div variants={fadeIn} className="my-8 h-px w-16 bg-accent" />

          <motion.p
            variants={item}
            className="text-sm font-mono tracking-widest uppercase text-fg-muted"
          >
            Full-Stack Web Developer · Mobile Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base sm:text-lg text-fg-muted leading-relaxed"
          >
            I design and build production-ready software systems — from
            AI-powered applications and APIs to full-stack products and native
            mobile experiences. I understand a problem, design the system, and
            ship the product.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fg text-fg-inverted text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
            >
              View Selected Work
              <span className="text-base">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-strong text-sm font-medium text-fg-secondary hover:border-fg-muted hover:text-fg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="https://github.com/AlAminNahid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-widest uppercase text-fg-subtle hover:text-fg transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="h-3 w-px bg-border-strong" />
            <a
              href="https://www.linkedin.com/in/al-amin-hossain-nahid-876858193/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-widest uppercase text-fg-subtle hover:text-fg transition-colors duration-200"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <Terminal />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 left-6 lg:left-[8%] flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-fg-subtle"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-4 w-px bg-fg-subtle"
        />
        Scroll ↓
      </motion.div>
    </div>
  );
}
