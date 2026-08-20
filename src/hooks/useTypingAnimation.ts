"use client";

import { useEffect, useState } from "react";
import { CODE_LINES } from "../constants/code-lines";

export function useTypingAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleLines((prev) => {
          if (prev >= CODE_LINES.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 120);
      return () => clearInterval(interval);
    }, 1000);

    const cursorInterval = setInterval(() => {
      setShowCursor((c) => !c);
    }, 530);

    return () => {
      clearTimeout(startDelay);
      clearInterval(cursorInterval);
    };
  }, []);

  return { visibleLines, showCursor };
}
