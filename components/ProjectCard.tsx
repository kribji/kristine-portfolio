"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "compact";
};

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.9)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
};

export default function ProjectCard({
  project,
  variant = "featured",
}: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const compact = variant === "compact";

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

  const image = (
    <div
      className={`group relative w-full overflow-hidden ${
        compact
          ? "aspect-[4/3]"
          : "aspect-[4/3] md:min-h-0 md:flex-1 md:aspect-auto"
      }`}
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
          <span className="font-sans text-[15px] text-muted">{project.name}</span>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 40%)",
        }}
      />
    </div>
  );

  const meta = (
    <div className="mt-4 flex w-full items-baseline justify-between gap-4">
      <p className="small-caps text-muted">{project.category}</p>
      <p className="small-caps text-muted">{project.year}</p>
    </div>
  );

  const title = (
    <h3
      className={`font-sans font-medium leading-tight tracking-[0.02em] text-foreground ${
        compact ? "text-[24px] md:text-[28px]" : "text-[32px] md:text-[36px]"
      }`}
    >
      {project.name}
    </h3>
  );

  const fullBody = (
    <div
      className={`flex h-full flex-col p-6 md:p-10 ${compact ? "md:hidden" : ""}`}
      style={cardStyle}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={`block overflow-hidden ${
          compact ? "" : "md:flex md:min-h-0 md:flex-1 md:flex-col"
        }`}
      >
        {image}
      </Link>
      {meta}
      <div className="mt-6 w-full max-w-[380px] text-left">
        {title}
        <p className="mt-2 font-sans text-[16px] font-normal leading-relaxed text-muted">
          {project.tagline}
        </p>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Link
          href={`/projects/${project.slug}`}
          className="small-caps text-foreground transition-opacity hover:opacity-60"
        >
          Read more
        </Link>
      </div>
    </div>
  );

  const compactDesktop = compact ? (
    <Link
      href={`/projects/${project.slug}`}
      className="hidden h-full flex-col p-6 transition-opacity hover:opacity-90 md:flex md:p-8"
      style={cardStyle}
    >
      {image}
      {meta}
      <div className="mt-4">{title}</div>
    </Link>
  ) : null;

  return (
    <article
      ref={ref}
      className={`h-full ${visible ? "animate-visible" : "animate-hidden"}`}
    >
      {fullBody}
      {compactDesktop}
    </article>
  );
}
