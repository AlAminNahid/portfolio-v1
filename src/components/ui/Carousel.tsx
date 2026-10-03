"use client";

import { useEffect, useRef, useState } from "react";
import ArrowButton from "@/components/features/works/ArrowButton";

type CarouselProps = {
  label: string;
  itemName: string;
  children: React.ReactNode;
};

export default function Carousel({ label, itemName, children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const updateEdges = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.children as HTMLCollectionOf<HTMLElement>;
    const stride =
      slides.length > 1
        ? slides[1].offsetLeft - slides[0].offsetLeft
        : track.clientWidth;
    track.scrollBy({ left: direction * stride, behavior: "smooth" });
  };

  const scrollable = !(atStart && atEnd);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-5">
        <p className="text-[10px] font-mono tracking-widest uppercase text-fg-subtle">
          {label}
        </p>
        {scrollable && (
          <div className="flex items-center gap-2">
            <ArrowButton
              direction="left"
              onClick={() => scroll(-1)}
              disabled={atStart}
              aria-label={`Previous ${itemName}`}
              className="w-9 h-9 border border-border text-fg-muted hover:border-accent/40 hover:text-fg"
            />
            <ArrowButton
              direction="right"
              onClick={() => scroll(1)}
              disabled={atEnd}
              aria-label={`Next ${itemName}`}
              className="w-9 h-9 border border-border text-fg-muted hover:border-accent/40 hover:text-fg"
            />
          </div>
        )}
      </div>

      <div
        ref={trackRef}
        onScroll={updateEdges}
        aria-label={label}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:shrink-0 [&>*]:snap-start [&>*]:basis-[85%] sm:[&>*]:basis-[calc((100%-1.25rem)/2)] lg:[&>*]:basis-[calc((100%-2.5rem)/3)]"
      >
        {children}
      </div>
    </div>
  );
}
