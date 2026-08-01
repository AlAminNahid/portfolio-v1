"use client";

import { useRef, useState } from "react";
import { projects } from "@/constants/projects";
import { type Project } from "@/types";
import ArrowButton from "./ArrowButton";
import ProjectCard from "./ProjectCard";

type ProjectCarouselProps = {
  onSelectProject: (project: Project) => void;
};

export default function ProjectCarousel({
  onSelectProject,
}: ProjectCarouselProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollToProject(index: number) {
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    setCarouselIndex(clamped);
    const item = trackRef.current?.children[clamped] as HTMLElement | undefined;
    item?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  return (
    <>
      <div className="flex items-center gap-3 sm:gap-6">
        {projects.length > 1 && (
          <ArrowButton
            direction="left"
            aria-label="Previous project"
            disabled={carouselIndex === 0}
            onClick={() => scrollToProject(carouselIndex - 1)}
            className="hidden sm:flex h-10 w-10 shrink-0 border border-border-strong text-fg-muted hover:bg-surface-subtle hover:text-accent"
          />
        )}

        <div
          ref={trackRef}
          className="flex flex-1 gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => onSelectProject(project)}
            />
          ))}
        </div>

        {projects.length > 1 && (
          <ArrowButton
            direction="right"
            aria-label="Next project"
            disabled={carouselIndex === projects.length - 1}
            onClick={() => scrollToProject(carouselIndex + 1)}
            className="hidden sm:flex h-10 w-10 shrink-0 border border-border-strong text-fg-muted hover:bg-surface-subtle hover:text-accent"
          />
        )}
      </div>

      {projects.length > 1 && (
        <div className="mt-6 flex items-center justify-center">
          <div className="flex sm:hidden gap-2">
            <ArrowButton
              direction="left"
              aria-label="Previous project"
              disabled={carouselIndex === 0}
              onClick={() => scrollToProject(carouselIndex - 1)}
              className="h-8 w-8 border border-border-strong text-fg-muted"
            />
            <ArrowButton
              direction="right"
              aria-label="Next project"
              disabled={carouselIndex === projects.length - 1}
              onClick={() => scrollToProject(carouselIndex + 1)}
              className="h-8 w-8 border border-border-strong text-fg-muted"
            />
          </div>
        </div>
      )}
    </>
  );
}
