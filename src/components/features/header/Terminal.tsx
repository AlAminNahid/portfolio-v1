"use client";

import { motion } from "framer-motion";
import { CODE_LINES } from "../../../constants/code-lines";
import Token from "./Token";
import { useTypingAnimation } from "../../../hooks/useTypingAnimation";

export default function Terminal() {
  const { visibleLines, showCursor } = useTypingAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:block w-full"
    >
      <div className="rounded-xl border border-border overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-amber-500/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
          <span className="ml-4 text-xs font-mono text-fg-subtle">
            hello_world.cpp
          </span>
        </div>

        <div className="bg-[#0d0d14] px-5 py-5 font-mono text-[13px] leading-6 min-h-[340px]">
          {CODE_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex">
              <span className="select-none text-neutral-600 w-6 shrink-0 text-right mr-4">
                {i + 1}
              </span>
              <span>
                {line.content.map((tok, j) => (
                  <Token key={j} {...tok} />
                ))}
                {i === visibleLines - 1 && visibleLines < CODE_LINES.length && (
                  <span
                    className={`inline-block w-[2px] h-[14px] bg-accent ml-px align-middle transition-opacity ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </span>
            </div>
          ))}
          {visibleLines >= CODE_LINES.length && (
            <div className="flex mt-1">
              <span className="select-none text-neutral-600 w-6 shrink-0 text-right mr-4" />
              <span
                className={`inline-block w-[2px] h-[14px] bg-accent align-middle transition-opacity ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-surface border-t border-border text-[11px] font-mono text-fg-subtle">
          <span className="text-sky-400">● C++</span>
          <span>g++ · stdlibc++</span>
        </div>
      </div>
    </motion.div>
  );
}
