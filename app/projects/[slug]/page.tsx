import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectImage from "@/components/ProjectImage";
import ProjectOverview from "@/components/ProjectOverview";

type Props = {
  params: { slug: string };
};

const projectSectionImages: Record<string, Record<string, string>> = {
  leados: {
    CONTEXT: "/images/leados-agent.png",
    "PRODUCT ARCHITECTURE": "/images/leados-pipeline.png",
  },
  eveliina: {
    CONTEXT: "/images/eveliina1.png",
    "DESIGN APPROACH": "/images/eveliina2.png",
    OUTCOME: "/images/eveliina3.png",
  },
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — Kristine Bjørgan`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const sectionImages = projectSectionImages[project.slug];
  const hasStructuredOverview = Boolean(sectionImages);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[800px] px-6 pb-24 pt-28 md:px-10 md:pt-32">
        <Link
          href="/#work"
          className="small-caps text-foreground transition-opacity hover:opacity-60"
        >
          Back
        </Link>

        <h1 className="mt-10 font-display text-[48px] leading-none text-foreground md:text-[64px]">
          {project.name}
        </h1>

        <p className="mt-4 font-sans text-[16px] text-muted">{project.tagline}</p>

        <div className="mt-12">
          <ProjectImage src={project.image} alt={project.name} name={project.name} />
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <p className="small-caps text-muted">Overview</p>
            {hasStructuredOverview ? (
              <ProjectOverview
                description={project.description}
                sectionImages={sectionImages}
              />
            ) : (
              <p className="mt-4 font-sans text-[16px] leading-[1.8] text-foreground">
                {project.description}
              </p>
            )}
          </section>

          <section>
            <p className="small-caps text-muted">Role</p>
            {Array.isArray(project.role) ? (
              <ul className="mt-4 space-y-1">
                {project.role.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-[16px] text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 font-sans text-[16px] text-foreground">
                {project.role}
              </p>
            )}
          </section>

          <section>
            <p className="small-caps text-muted">Tech Stack</p>
            <ul className="mt-4 space-y-1">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="font-sans text-[16px] text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {project.url && project.url !== "#" && (
            <section>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="small-caps text-foreground transition-opacity hover:opacity-60"
              >
                Visit
              </a>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
