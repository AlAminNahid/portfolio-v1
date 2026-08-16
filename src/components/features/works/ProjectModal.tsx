"use client";

import Image from "next/image";
import { useState } from "react";
import { type Project } from "@/types";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import ArrowButton from "./ArrowButton";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEscapeKey(onClose);
  useBodyScrollLock();
  const containerRef = useFocusTrap<HTMLDivElement>();

  const activeImages = project.images ?? [project.image];
  const totalSlides = activeImages.length;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto lg:overflow-hidden rounded-2xl bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close project details"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-surface-raised text-fg-muted hover:text-fg text-lg leading-none transition"
        >
          ×
        </button>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] lg:h-[90vh]">
          <div className="relative flex min-h-[560px] items-center justify-center bg-canvas p-6 sm:p-8 rounded-tl-2xl rounded-bl-2xl">
            <Image
              src={activeImages[slideIndex]}
              alt={`${project.title} screenshot ${slideIndex + 1}`}
              quality={100}
              sizes="(min-width: 1024px) 56rem, 90vw"
              className={
                project.previewType === "mobile"
                  ? "max-h-[85vh] max-w-[380px] w-full rounded-2xl border border-black object-contain shadow-xl"
                  : "max-h-[65vh] w-full rounded-lg border border-black object-contain shadow-xl"
              }
            />
            {totalSlides > 1 && (
              <>
                <ArrowButton
                  direction="left"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSlideIndex((i) => (i - 1 + totalSlides) % totalSlides);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 bg-surface-raised shadow-md hover:bg-surface-raised-hover"
                />
                <ArrowButton
                  direction="right"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSlideIndex((i) => (i + 1) % totalSlides);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 bg-surface-raised shadow-md hover:bg-surface-raised-hover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {activeImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to image ${i + 1}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSlideIndex(i);
                      }}
                      className={`h-1 rounded-full transition-all ${i === slideIndex ? "w-6 bg-surface-inverted" : "w-1.5 bg-fg-subtle"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6 sm:p-8 lg:overflow-y-auto">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-surface-inverted px-3 py-1 text-xs font-medium text-fg-inverted">
                {project.type}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${project.status === "Completed" ? "bg-success-surface/60 text-success border border-success-border/60" : "bg-warning-surface/60 text-warning border border-warning-border/60"}`}
              >
                {project.status}
              </span>
            </div>

            <h3 id="project-modal-title" className="text-2xl font-bold text-fg">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-fg-muted leading-7">
              {project.summary}
            </p>

            <div className="mt-6">
              <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-2">
                What I built
              </p>
              <p className="text-sm text-fg-muted leading-7">
                {project.details}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-3">
                Key features
              </p>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-fg-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-2">
                Tech stack
              </p>
              <p className="text-sm text-fg-muted">
                {project.tech}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:opacity-90 transition"
                >
                  Live Demo →
                </a>
              )}
              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:opacity-90 transition"
                >
                  Request Early Access →
                </a>
              )}
              {(
                project.githubLinks ?? [
                  { label: "View on GitHub", href: project.github },
                ]
              ).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-inverted text-fg-inverted text-sm font-semibold hover:opacity-90 transition"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
