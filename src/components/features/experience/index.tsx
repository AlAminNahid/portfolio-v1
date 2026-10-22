import { experiences } from "@/constants/experience";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import ExperienceItem from "@/components/features/experience/ExperienceItem";

export default function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHead
        id="experience-heading"
        label="Professional experience"
        title="Where I have worked on production software."
      />

      <Reveal>
        {experiences.map((entry) => (
          <ExperienceItem key={entry.company} entry={entry} />
        ))}
      </Reveal>
    </Section>
  );
}
