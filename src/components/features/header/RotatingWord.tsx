"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const INTERVAL_MS = 3200;
const FADE_MS = 380;

export default function RotatingWord({ words }: { words: readonly string[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (reduce) return;
    let swap: ReturnType<typeof setTimeout>;
    const tick = setInterval(() => {
      setFading(true);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFading(false);
      }, FADE_MS);
    }, INTERVAL_MS);
    return () => {
      clearInterval(tick);
      clearTimeout(swap);
    };
  }, [reduce, words.length]);

  return (
    <>
      <span className="sr-only">{words[0]}</span>
      <span
        aria-hidden="true"
        className={`block min-h-[1.1em] text-accent transition-all duration-[380ms] ease-out ${
          fading ? "translate-y-[0.18em] opacity-0 blur-[4px]" : ""
        }`}
      >
        {words[index]}
      </span>
    </>
  );
}
