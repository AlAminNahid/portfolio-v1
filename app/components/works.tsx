"use client";

import workOne from "@/public/projects/one.png";
import workTwo from "@/public/projects/two.png";
import workThree from "@/public/projects/three.png";
import medicareOne from "@/public/projects/one/one.png";
import medicareTwo from "@/public/projects/one/two.png";
import medicareThree from "@/public/projects/one/three.png";
import Image from "next/image";
import sendIcon from "@/public/assets/send-icon.png";
import rightArrow from "@/public/assets/right-arrow-bold.png";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "MessMaster Mobile App",
    type: "Native Android App",
    status: "In Progress",
    tech: "Kotlin, XML, NestJS, PostgreSQL",
    image: workThree,
    previewType: "mobile",
    github: "https://github.com/AlAminNahid/MessMasterApp.git",
    summary:
      "Android client for MessMaster, built with Kotlin and XML on top of the shared NestJS backend.",
    details:
      "MessMaster Mobile helps mess managers and members handle daily mess operations from Android. It supports authentication, mess creation/joining, manager/member flows, meal tracking, utilities, notices, and dashboard summaries while reusing the same backend as the web version.",
    highlights: [
      "Native Android UI built with Kotlin and XML",
      "Connects to the shared NestJS REST API",
      "Manager/member workflows for real mess operations",
      "Dashboard screens for meals, costs, notices, and utility data",
    ],
  },
  {
    title: "Mess Management System",
    type: "Full-Stack Web App",
    status: "In Progress",
    tech: "NextJS, NestJS, PostgreSQL, Tailwind-CSS",
    image: workTwo,
    previewType: "web",
    github: "https://github.com/AlAminNahid/Mess_Management_System.git",
    summary:
      "Web version of MessMaster for managing shared living expenses, meals, notices, and members.",
    details:
      "The web app demonstrates the full-stack side of MessMaster. It uses a Next.js frontend with a NestJS backend and PostgreSQL database to manage mess members, meal records, utility costs, notices, and shared operational workflows.",
    highlights: [
      "Next.js frontend for the web experience",
      "NestJS backend shared with the Android app",
      "PostgreSQL data model for mess operations",
      "Role-based manager and member workflows",
    ],
  },
  {
    title: "MediCare",
    type: "Full-Stack Web App",
    status: "Completed",
    tech: "NextJS, NestJS, PostgreSQL, TypeORM",
    image: medicareOne,
    images: [medicareOne, medicareTwo, medicareThree],
    previewType: "web",
    github: "https://github.com/AlAminNahid/MediCare.git",
    summary:
      "Clinic workflow app for managing patients, doctors, appointments, and records.",
    details:
      "A full-stack clinic management system built with a modern stack. It includes patient and doctor management, appointment handling, and database-backed records using NestJS and PostgreSQL with TypeORM.",
    highlights: [
      "Patient and doctor management",
      "Appointment workflow support",
      "PostgreSQL with TypeORM data layer",
      "Next.js frontend with NestJS REST API",
    ],
  },
];

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  function openProject(project: (typeof projects)[number]) {
    setSelectedProject(project);
    setSlideIndex(0);
  }

  const activeImages =
    selectedProject?.images ?? (selectedProject ? [selectedProject.image] : []);
  const totalSlides = activeImages.length;

  return (
    <>
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
        <h2 className="text-center text-5xl font-ovo">My latest work</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          Explore a collection of projects showcasing my expertise in Full-Stack
          web & Mobile Development
        </p>

        <div className="my-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openProject(project)}
              className="block text-left"
            >
              <div className="relative w-full h-[300px] shadow-xl shadow-gray-400 rounded-xl overflow-hidden group dark:shadow-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full bg-white object-contain pb-20 dark:bg-gray-900"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-md p-3 flex items-center justify-between shadow-md transition-all duration-300 group-hover:bottom-6 dark:bg-gray-950 dark:shadow-gray-900">
                  <div className="pr-3">
                    <h2 className="font-semibold text-sm">{project.title}</h2>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {project.type} · {project.status}
                    </p>
                  </div>

                  <div className="border rounded-full w-8 h-8 flex items-center justify-center shadow-[2px_2px_#000] group-hover:bg-lime-300 transition dark:border-gray-600 dark:shadow-[2px_2px_#fff]">
                    <Image
                      src={sendIcon}
                      alt="SendIcon"
                      className="w-4 dark:invert"
                    />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <a
          href="https://github.com/AlAminNahid?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:border-gray-500 dark:text-gray-100 dark:hover:bg-gray-900"
        >
          Show more{" "}
          <Image
            src={rightArrow}
            alt="rightArrow"
            className="w-4 dark:invert"
          />
        </a>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white shadow-2xl dark:bg-gray-950"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl leading-none shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800"
            >
              ×
            </button>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative flex min-h-[360px] items-center justify-center bg-gray-50 p-5 dark:bg-gray-900 sm:p-8">
                <Image
                  src={activeImages[slideIndex]}
                  alt={`${selectedProject.title} screenshot ${slideIndex + 1}`}
                  quality={100}
                  sizes="(min-width: 1024px) 56rem, 90vw"
                  className={
                    selectedProject.previewType === "mobile"
                      ? "max-h-[76vh] w-auto rounded-2xl object-contain shadow-xl"
                      : "max-h-[62vh] w-full rounded-lg object-contain shadow-xl"
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
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white transition dark:bg-gray-800/80 dark:hover:bg-gray-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white transition dark:bg-gray-800/80 dark:hover:bg-gray-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
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
                          className={`h-1.5 rounded-full transition-all ${i === slideIndex ? "w-5 bg-gray-900 dark:bg-white" : "w-1.5 bg-gray-400 dark:bg-gray-500"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                    {selectedProject.type}
                  </span>
                  <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-lime-300">
                    {selectedProject.status}
                  </span>
                </div>

                <h3 className="text-3xl font-semibold">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {selectedProject.summary}
                </p>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    What I built
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {selectedProject.details}
                  </p>
                </div>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Key features
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900 dark:bg-gray-100" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Tech stack
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {selectedProject.tech}
                  </p>
                </div>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  View GitHub
                  <Image
                    src={rightArrow}
                    alt=""
                    className="w-4 invert dark:invert-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
