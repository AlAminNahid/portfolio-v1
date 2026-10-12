"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { researchPapers, SELF_AUTHOR } from "@/constants/research";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import ArrowLink from "@/components/ui/ArrowLink";
import Tags from "@/components/ui/Tags";
import { Reveal } from "@/components/ui/Reveal";

const arrowButton =
  "inline-grid h-10 w-10 place-items-center rounded-full border border-border text-fg transition-colors duration-200 hover:border-border-strong hover:bg-surface disabled:pointer-events-none disabled:opacity-35";

export default function Research() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const count = researchPapers.length;

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const cards = el.children;
    const step =
      cards.length > 1
        ? (cards[1] as HTMLElement).offsetLeft -
          (cards[0] as HTMLElement).offsetLeft
        : el.clientWidth;
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(end);
    setIndex(
      end ? count - 1 : Math.min(count - 1, Math.round(el.scrollLeft / step)),
    );
  }, [count]);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  function move(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  }

  return (
    <Section id="research" labelledBy="research-heading">
      <SectionHead
        id="research-heading"
        label="Research and publications"
        title="Applied machine learning and AI research."
      />

      <Reveal className="mb-4 flex items-center justify-between">
        <span className="label tabular-nums" aria-live="polite">
          {index + 1} / {count}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous paper"
            disabled={atStart}
            onClick={() => move(-1)}
            className={arrowButton}
          >
            <ChevronLeft size={17} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next paper"
            disabled={atEnd}
            onClick={() => move(1)}
            className={arrowButton}
          >
            <ChevronRight size={17} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </Reveal>

      <div
        ref={track}
        onScroll={sync}
        role="region"
        aria-label="Publications, scroll horizontally"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-3.5 [scrollbar-color:var(--border-strong)_transparent] [scrollbar-width:thin]"
      >
        {researchPapers.map((paper) => (
          <article
            key={paper.title}
            className="grid min-w-0 shrink-0 basis-full snap-start snap-always content-start gap-5 rounded-md border border-border bg-surface p-[clamp(24px,3.4vw,44px)] transition-colors duration-300 hover:border-accent"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-[5px] font-mono text-[11.5px] leading-snug tracking-[0.08em] uppercase ${
                  paper.status === "Published"
                    ? "bg-accent text-accent-foreground"
                    : "border border-accent text-accent"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-current"
                />
                {paper.status}
              </span>
              <span className="label">{paper.statusNote}</span>
            </div>

            <h3 className="max-w-[34em] text-[clamp(1.4rem,2.6vw,2rem)] leading-snug font-medium tracking-[-0.025em] text-balance">
              {paper.title}
            </h3>

            <p className="max-w-[62ch] text-fg-muted">
              {paper.authors.map((author, i) => (
                <span key={author}>
                  {author === SELF_AUTHOR ? (
                    <b className="font-medium text-fg">{author}</b>
                  ) : (
                    author
                  )}
                  {i < paper.authors.length - 2
                    ? ", "
                    : i === paper.authors.length - 2
                      ? ", and "
                      : "."}
                </span>
              ))}
            </p>

            <p className="max-w-[66ch] text-pretty text-fg-muted">
              {paper.abstract}
            </p>

            <dl className="grid gap-x-7 gap-y-3.5 md:grid-cols-[1fr_2fr_1fr]">
              {[
                ["Conference", paper.conference],
                ["Full name", paper.conferenceFullName],
                ["Location", paper.location],
              ].map(([term, value]) => (
                <div key={term} className="border-t border-border-strong pt-3">
                  <dt className="label">{term}</dt>
                  <dd className="mt-1 text-[14.5px]">{value}</dd>
                </div>
              ))}
            </dl>

            <Tags items={paper.tags} />

            <div className="flex flex-wrap gap-x-7 gap-y-2.5">
              {paper.links.map(({ label, href }) => (
                <ArrowLink key={href} href={href} external>
                  {label}
                </ArrowLink>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
