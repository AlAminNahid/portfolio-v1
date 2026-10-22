"use client";

import { useState, type PointerEvent } from "react";
import { Plus } from "lucide-react";
import { type ExperienceEntry } from "@/types";
import ArrowLink from "@/components/ui/ArrowLink";

type ExperienceItemProps = {
  entry: ExperienceEntry;
};

function ExperienceDetails({ entry }: { entry: ExperienceEntry }) {
  return (
    <>
      <ul className="border-t border-border">
        {entry.items.map(({ title, text }) => (
          <li
            key={title}
            className="grid gap-1.5 border-b border-border py-3.5 text-[15px] transition-colors duration-200 hover:bg-linear-to-r hover:from-accent-soft hover:to-transparent sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)] sm:gap-x-6"
          >
            <b className="font-medium">{title}</b>
            <span className="text-pretty text-fg-muted">{text}</span>
          </li>
        ))}
      </ul>

      {entry.note && (
        <p className="max-w-[60ch] text-[13px] text-fg-muted">{entry.note}</p>
      )}
      <div>
        <ArrowLink href={entry.link.href} external>
          {entry.link.label}
        </ArrowLink>
      </div>
    </>
  );
}

function CurrentExperience({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="grid gap-6 border-t border-border py-[clamp(32px,4.4vw,56px)] last:border-b lg:grid-cols-12 lg:gap-x-6">
      <div className="lg:col-span-3">
        <p className="label text-fg">{entry.period}</p>
        <p className="label mt-2.5 flex items-center gap-2 text-accent">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
          Current role
        </p>
      </div>

      <div className="grid min-w-0 gap-[22px] lg:col-span-9">
        <h3 className="text-[clamp(1.4rem,2.5vw,1.9rem)] leading-[1.15] font-medium tracking-[-0.025em]">
          {entry.company}
          <span className="mt-1.5 block text-[0.62em] font-normal tracking-[-0.005em] text-fg-muted">
            {entry.role}
          </span>
        </h3>
        <p className="max-w-[62ch] text-pretty text-fg-muted">
          {entry.summary}
        </p>
        <ExperienceDetails entry={entry} />
      </div>
    </article>
  );
}

function PastExperience({ entry }: { entry: ExperienceEntry }) {
  const [open, setOpen] = useState(false);
  const panelId = `experience-panel-${entry.company.replace(/\s+/g, "-").toLowerCase()}`;

  function trackPointer(e: PointerEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <article className="border-t border-border last:border-b">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        onPointerMove={trackPointer}
        className="group relative grid w-full gap-6 py-[clamp(32px,4.4vw,56px)] text-left lg:grid-cols-12 lg:gap-x-6"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -inset-x-3 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), var(--accent-soft), transparent 70%)",
          }}
        />

        <div className="lg:col-span-3">
          <p className="label text-fg">{entry.period}</p>
        </div>

        <div className="grid min-w-0 gap-[22px] lg:col-span-8">
          <h3 className="text-[clamp(1.4rem,2.5vw,1.9rem)] leading-[1.15] font-medium tracking-[-0.025em] transition duration-300 group-hover:translate-x-1.5 group-hover:text-accent">
            {entry.company}
            <span className="mt-1.5 block text-[0.62em] font-normal tracking-[-0.005em] text-fg-muted">
              {entry.role}
            </span>
          </h3>
          <p className="max-w-[62ch] text-pretty text-fg-muted">
            {entry.summary}
          </p>
        </div>

        <div className="lg:col-span-1 lg:flex lg:items-start lg:justify-end">
          <span
            aria-hidden="true"
            className={`grid h-10 w-10 place-items-center rounded-full border transition duration-300 ${
              open
                ? "border-fg bg-fg text-canvas"
                : "border-border group-hover:border-accent group-hover:text-accent"
            }`}
          >
            <Plus
              size={16}
              strokeWidth={1.5}
              className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            />
          </span>
        </div>
      </button>

      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="grid gap-[22px] pb-[clamp(32px,4vw,52px)] lg:grid-cols-12 lg:gap-x-6">
            <div className="grid min-w-0 gap-[22px] lg:col-span-9 lg:col-start-4">
              <ExperienceDetails entry={entry} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExperienceItem({ entry }: ExperienceItemProps) {
  return entry.current ? (
    <CurrentExperience entry={entry} />
  ) : (
    <PastExperience entry={entry} />
  );
}
