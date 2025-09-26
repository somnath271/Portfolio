import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects" heading="Projects" sub="Selected work I'm proud of.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
