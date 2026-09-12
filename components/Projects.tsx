import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="bg-[#f3f4f5]">
      <div className="mx-auto w-full max-w-[900px] px-6 py-6 md:px-10 md:py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr] md:grid-rows-2 md:gap-6">
          <div className="md:row-span-2">
            <ProjectCard project={featured} variant="featured" />
          </div>
          {rest.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
