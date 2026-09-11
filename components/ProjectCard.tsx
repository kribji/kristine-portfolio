"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`border-b border-border py-24 ${visible ? "animate-visible" : "animate-hidden"}`}
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-10 px-6 text-center md:px-10">
        <Link
          href={`/projects/${project.slug}`}
          className="group relative block aspect-[4/3] w-full overflow-hidden"
        >
          {!imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#F0F0F0]">
              <span className="font-sans text-[15px] text-muted">
                {project.name}
              </span>
            </div>
          )}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 40%)",
            }}
          />
        </Link>

        <div className="flex w-full max-w-[560px] flex-col items-center">
          <p className="small-caps text-muted">{project.category}</p>
          <h3 className="mt-3 font-display text-[36px] leading-none text-foreground">
            {project.name}
          </h3>
          <p className="mt-4 font-sans text-[16px] font-normal leading-relaxed text-muted">
            {project.tagline}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className="small-caps mt-6 inline-block text-foreground transition-opacity hover:opacity-60"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}
