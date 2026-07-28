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

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const imageBlock = (
    <div className="relative w-full overflow-hidden aspect-[4/3] md:w-[55%]">
      {!imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
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
    </div>
  );

  const textBlock = (
    <div className="flex w-full flex-col justify-center md:w-[40%]">
      <p className="small-caps text-muted">{project.category}</p>
      <p className="mt-4 font-sans text-[16px] font-normal leading-relaxed text-muted">
        {project.tagline}
      </p>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-block font-sans text-[14px] text-foreground transition-opacity hover:opacity-60"
      >
        View
      </Link>
    </div>
  );

  return (
    <article
      ref={ref}
      className={`animate-fade-in border-b border-border py-24 transition-all duration-[700ms] ease-[ease] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-[40px] opacity-0"
      }`}
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
