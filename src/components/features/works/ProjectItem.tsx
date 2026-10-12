"use client";

import { useState, type PointerEvent } from "react";
import { Plus } from "lucide-react";
import { type Project } from "@/types";
import ArrowLink from "@/components/ui/ArrowLink";
import Tags from "@/components/ui/Tags";

type ProjectItemProps = {
  project: Project;
  index: number;
  defaultOpen?: boolean;
};

export default function ProjectItem({
  project,
  index,
  defaultOpen = false,
}: ProjectItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `project-panel-${index}`;
  const number = String(index + 1).padStart(2, "0");

  function trackPointer(e: PointerEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <article className="isolate border-t border-border last:border-b">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          onPointerMove={trackPointer}
          className="group relative grid w-full grid-cols-[32px_minmax(0,1fr)_40px] items-start gap-x-3.5 gap-y-3.5 py-[clamp(26px,3.4vw,40px)] text-left lg:grid-cols-[56px_minmax(0,4fr)_minmax(0,5fr)_40px] lg:gap-x-6"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -inset-x-3 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), var(--accent-soft), transparent 70%)",
            }}
          />
          <span className="pt-[0.5em] font-mono text-[13px] text-fg-muted tabular-nums transition-colors duration-200 group-hover:text-accent">
            {number}
          </span>
          <span>
            <span className="block text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.18] font-medium tracking-[-0.025em] transition duration-300 group-hover:translate-x-1.5 group-hover:text-accent">
              {project.title}
            </span>
            <span className="label mt-2.5 block text-accent">
              {project.category}
            </span>
          </span>
          <span className="col-span-2 col-start-2 row-start-2 max-w-[52ch] pt-[0.3em] text-[15.5px] text-pretty text-fg-muted lg:col-span-1 lg:col-start-auto lg:row-start-auto">
            {project.summary}
          </span>
          <span
            aria-hidden="true"
            className={`col-start-3 row-start-1 grid h-10 w-10 place-items-center justify-self-end rounded-full border transition duration-300 lg:col-start-auto lg:row-start-auto ${
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
        </button>
      </h3>

      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pb-[clamp(32px,4vw,52px)] lg:grid lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-x-6">
            <div className="grid min-w-0 gap-8 lg:col-start-2">
              <ul className="grid gap-x-8 sm:grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))]">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-border py-[11px] text-[14.5px]"
                  >
                    <span aria-hidden="true" className="flex-none text-accent">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Tags items={project.tags} />
              <div className="flex flex-wrap gap-x-7 gap-y-2.5">
                {project.links.map(({ label, href }) => (
                  <ArrowLink key={href} href={href} external>
                    {label}
                  </ArrowLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
