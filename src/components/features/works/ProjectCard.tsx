"use client";

import Image from "next/image";
import { type Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  index: number;
  onClick: () => void;
};

export default function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  const paddedNum = String(index + 1).padStart(2, "0");

  return (
    <article
      onClick={onClick}
      className="group relative flex flex-col rounded-2xl border border-border bg-surface overflow-hidden cursor-pointer hover:border-accent/40 transition-colors duration-300"
    >
      <div
        className={`relative overflow-hidden bg-canvas shrink-0 ${
          project.previewType === "mobile"
            ? "aspect-[3/4] bg-[#0a0a0f] flex items-center justify-center"
            : "aspect-[16/10]"
        }`}
      >
        {project.previewType === "mobile" ? (
          <div className="relative h-[92%] w-auto aspect-[9/19] rounded-[20px] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 95vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        <span
          className={`absolute top-3 right-3 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${
            project.status === "Completed"
              ? "bg-success-surface/70 text-success border-success-border/60"
              : "bg-warning-surface/70 text-warning border-warning-border/60"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-fg tracking-tight group-hover:text-accent transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono text-fg-subtle shrink-0 mt-0.5">
            {paddedNum}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase text-fg-subtle">
            {project.category}
          </span>
          <span className="h-3 w-px bg-border-strong" />
          <span className="text-[10px] font-mono text-fg-subtle">
            {project.year}
          </span>
        </div>

        <p className="text-xs text-fg-muted leading-5 line-clamp-2 flex-1">
          {project.summary}
        </p>

        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap gap-1.5">
            {project.tech
              .split(",")
              .slice(0, 3)
              .map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-border text-fg-subtle bg-canvas"
                >
                  {t.trim()}
                </span>
              ))}
          </div>
          <span className="text-xs text-fg-subtle group-hover:text-accent transition-colors duration-200 shrink-0">
            →
          </span>
        </div>
      </div>
    </article>
  );
}
