"use client";

import { useState } from "react";
import { type Project } from "@/types";
import ProjectCarousel from "./ProjectCarousel";
import ProjectModal from "./ProjectModal";

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div
        id="work"
        className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-4">
            Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-fg mb-4">
            Selected Projects
          </h2>
          <p className="text-fg-muted mb-12 max-w-xl">
            A collection of projects showcasing my expertise in full-stack web
            and mobile development.
          </p>

          <ProjectCarousel onSelectProject={setSelectedProject} />

          <div className="mt-12 text-center">
            <a
              href="https://github.com/AlAminNahid?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-fg-muted border border-border-strong rounded-full px-6 py-3 hover:bg-surface-subtle transition"
            >
              View all repositories →
            </a>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
