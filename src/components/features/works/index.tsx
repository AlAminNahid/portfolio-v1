"use client";

import { useState } from "react";
import { type Project } from "@/types";
import { projects } from "@/constants/projects";
import { Reveal } from "@/components/ui/Reveal";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20">
        <Reveal className="max-w-5xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-fg-muted mb-2">
            Selected Work
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-fg tracking-tight mb-16">
            Projects
          </h2>

          {(() => {
            const web = projects.filter((p) => p.previewType === "web");
            return (
              <div className="mb-16">
                <p className="text-[10px] font-mono tracking-widest uppercase text-fg-subtle mb-5">
                  Web &amp; Full-Stack
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {web.map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={projects.indexOf(project)}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          {(() => {
            const mobile = projects.filter((p) => p.previewType === "mobile");
            return (
              <div className="mb-16">
                <p className="text-[10px] font-mono tracking-widest uppercase text-fg-subtle mb-5">
                  Mobile
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {mobile.map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={projects.indexOf(project)}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="flex justify-center">
            <a
              href="https://github.com/AlAminNahid?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-xs font-mono tracking-widest uppercase text-fg-muted hover:border-accent/40 hover:text-fg transition-colors duration-200"
            >
              View All Repos →
            </a>
          </div>
        </Reveal>
      </section>

      <ProjectModal
        project={selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </>
  );
}
