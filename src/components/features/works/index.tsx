import { projects } from "@/constants/projects";
import { GITHUB_REPOS_URL } from "@/constants/site";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import ProjectItem from "@/components/features/works/ProjectItem";

export default function Works() {
  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHead
        id="projects-heading"
        label="Projects"
        title="Selected products I built myself."
      />
      <Reveal>
        {projects.map((project, i) => (
          <ProjectItem
            key={project.title}
            project={project}
            index={i}
            defaultOpen={false}
          />
        ))}
      </Reveal>
      <Reveal className="mt-12 flex justify-center">
        <a
          href={GITHUB_REPOS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See more projects on GitHub"
          className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-border-strong px-[22px] text-[15px] font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          See more
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
