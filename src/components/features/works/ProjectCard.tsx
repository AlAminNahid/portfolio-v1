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
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0 snap-start"
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
  );
}
