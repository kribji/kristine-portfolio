import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </section>
  );
}
