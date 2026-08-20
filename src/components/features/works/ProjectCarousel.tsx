"use client";

import { useRef, useState } from "react";
import { projects } from "@/constants/projects";
import { type Project } from "@/types";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
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
            className="hidden sm:flex h-11 w-11 shrink-0 bg-surface-raised shadow-md text-fg hover:bg-accent hover:text-white hover:shadow-lg"
          />
        )}

        <RevealGroup
          ref={trackRef}
          className="flex flex-1 gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <RevealItem
              key={project.title}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0 snap-start"
            >
              <ProjectCard
                project={project}
                index={index}
                onClick={() => onSelectProject(project)}
              />
            </RevealItem>
          ))}
        </RevealGroup>

        {projects.length > 1 && (
          <ArrowButton
            direction="right"
            aria-label="Next project"
            disabled={carouselIndex === projects.length - 1}
            onClick={() => scrollToProject(carouselIndex + 1)}
            className="hidden sm:flex h-11 w-11 shrink-0 bg-surface-raised shadow-md text-fg hover:bg-accent hover:text-white hover:shadow-lg"
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
              className="h-9 w-9 bg-surface-raised shadow-md text-fg hover:bg-accent hover:text-white"
            />
            <ArrowButton
              direction="right"
              aria-label="Next project"
              disabled={carouselIndex === projects.length - 1}
              onClick={() => scrollToProject(carouselIndex + 1)}
              className="h-9 w-9 bg-surface-raised shadow-md text-fg hover:bg-accent hover:text-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
