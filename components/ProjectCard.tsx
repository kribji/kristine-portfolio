"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isOdd = index % 2 === 0;
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

  const imageContent = (
    <>
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
          <span className="font-sans text-[15px] text-muted">{project.name}</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
      <h3 className="absolute bottom-4 left-4 font-display text-[36px] leading-none text-white md:bottom-6 md:left-6">
        {project.name}
      </h3>
    </>
  );

  const imageBlock = (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block aspect-[4/3] w-full overflow-hidden md:w-[55%]"
    >
      {imageContent}
    </Link>
  );

  const textBlock = (
    <div className="flex w-full flex-col justify-center md:w-[40%]">
      <p className="small-caps text-muted">{project.category}</p>
      <p className="mt-4 font-sans text-[16px] font-normal leading-relaxed text-muted">
        {project.tagline}
      </p>
      {project.url && project.url !== "#" ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="small-caps mt-6 inline-block text-foreground transition-opacity hover:opacity-60"
        >
          Visit
        </a>
      ) : (
        <Link
          href={`/projects/${project.slug}`}
          className="small-caps mt-6 inline-block text-foreground transition-opacity hover:opacity-60"
        >
          View
        </Link>
      )}
    </div>
  );

  return (
    <article
      ref={ref}
      className={`border-b border-border py-24 ${visible ? "animate-visible" : "animate-hidden"}`}
    >
      <div
        className={`mx-auto flex w-full flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between md:gap-[5%] md:px-10 ${
          isOdd ? "" : "md:flex-row-reverse"
        }`}
      >
        {imageBlock}
        {textBlock}
      </div>
    </article>
  );
}
