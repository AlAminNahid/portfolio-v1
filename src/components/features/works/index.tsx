import { projects } from "@/constants/projects";
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
    </Section>
  );
}
