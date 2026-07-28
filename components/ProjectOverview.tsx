"use client";

import { useEffect, useRef, useState } from "react";

type Section = {
  label: string | null;
  body: string;
};

function parseSections(description: string): Section[] {
  return description.split("\n\n").map((block) => {
    const newlineIndex = block.indexOf("\n");
    if (newlineIndex === -1) {
      return { label: null, body: block };
    }

    const firstLine = block.slice(0, newlineIndex);
    const isLabel =
      firstLine === firstLine.toUpperCase() && /^[A-Z\s&]+$/.test(firstLine);

    if (isLabel) {
      return {
        label: firstLine,
        body: block.slice(newlineIndex + 1),
      };
    }

    return { label: null, body: block };
  });
}

function AnimatedSectionImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
    <div
      ref={ref}
      className={`my-10 ${visible ? "animate-visible" : "animate-hidden"}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full max-h-[500px] object-cover"
      />
    </div>
  );
}

type ProjectOverviewProps = {
  description: string;
  sectionImages?: Record<string, string>;
};

export default function ProjectOverview({
  description,
  sectionImages = {},
}: ProjectOverviewProps) {
  const sections = parseSections(description);

  return (
    <div className="mt-4 space-y-8">
      {sections.map((section, index) => (
        <div key={`${section.label ?? "section"}-${index}`}>
          {section.label && (
            <p className="mb-2 font-sans text-[12px] uppercase tracking-[0.1em] text-muted">
              {section.label}
            </p>
          )}
          <p className="font-sans text-[16px] leading-[1.8] text-foreground">
            {section.body}
          </p>
          {section.label && sectionImages[section.label] && (
            <AnimatedSectionImage
              src={sectionImages[section.label]}
              alt={section.label}
            />
          )}
        </div>
      ))}
    </div>
  );
}
