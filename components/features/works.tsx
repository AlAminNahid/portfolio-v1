"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/constants/projects";
import { type Project } from "@/types";
import { useEscapeKey } from "@/hooks/useEscapeKey";

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEscapeKey(() => setSelectedProject(null));

  function openProject(project: Project) {
    setSelectedProject(project);
    setSlideIndex(0);
  }

  const activeImages =
    selectedProject?.images ?? (selectedProject ? [selectedProject.image] : []);
  const totalSlides = activeImages.length;

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

          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => openProject(project)}
                className="group text-left w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center rounded-xl">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                      View Project →
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-2">
                  <div>
                    <div className="text-xs font-mono text-zinc-400 mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-500 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {project.type}
                    </p>
                  </div>
                  <span className="text-zinc-300 dark:text-zinc-700 group-hover:text-indigo-500 transition text-lg mt-5 shrink-0">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

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
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 text-lg leading-none transition"
            >
              ×
            </button>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              {/* Image panel */}
              <div className="relative flex min-h-[560px] items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-6 sm:p-8 rounded-tl-2xl rounded-bl-2xl">
                <Image
                  src={activeImages[slideIndex]}
                  alt={`${selectedProject.title} screenshot ${slideIndex + 1}`}
                  quality={100}
                  sizes="(min-width: 1024px) 56rem, 90vw"
                  className={
                    selectedProject.previewType === "mobile"
                      ? "max-h-[85vh] max-w-[380px] w-full rounded-2xl border border-black object-contain shadow-xl"
                      : "max-h-[65vh] w-full rounded-lg border border-black object-contain shadow-xl"
                  }
                />
                {totalSlides > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSlideIndex(
                          (i) => (i - 1 + totalSlides) % totalSlides,
                        );
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-700 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSlideIndex((i) => (i + 1) % totalSlides);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-700 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
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
                          className={`h-1 rounded-full transition-all ${i === slideIndex ? "w-6 bg-zinc-900 dark:bg-white" : "w-1.5 bg-zinc-400 dark:bg-zinc-600"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Info panel */}
              <div className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-zinc-900 dark:bg-white px-3 py-1 text-xs font-medium text-white dark:text-zinc-900">
                    {selectedProject.type}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${selectedProject.status === "Completed" ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60" : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60"}`}
                  >
                    {selectedProject.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 leading-7">
                  {selectedProject.summary}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                    What I built
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-7">
                    {selectedProject.details}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-3">
                    Key features
                  </p>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                    Tech stack
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {selectedProject.tech}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {selectedProject.downloadUrl && (
                    <a
                      href={selectedProject.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500 text-white text-sm font-semibold hover:opacity-90 transition"
                    >
                      Download App →
                    </a>
                  )}
                  {(
                    selectedProject.githubLinks ?? [
                      { label: "View on GitHub", href: selectedProject.github },
                    ]
                  ).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:opacity-90 transition"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
