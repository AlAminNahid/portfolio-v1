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
        className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 min-h-screen"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Selected Projects
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl">
            A collection of projects showcasing my expertise in full-stack web
            and mobile development.
          </p>

          <ProjectCarousel onSelectProject={setSelectedProject} />

          <div className="mt-12 text-center">
            <a
              href="https://github.com/AlAminNahid?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 border border-zinc-300 dark:border-zinc-700 rounded-full px-6 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
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
