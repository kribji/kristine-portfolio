"use client";

import { useEffect, useRef, useState } from "react";

type Section = {
  label: string | null;
  body: string;
};

function isAllCapsLabel(text: string): boolean {
  const trimmed = text.trim();
  if (!trimmed) return false;
  return /^[A-Z0-9\s&\-·]+$/.test(trimmed) && /[A-Z]/.test(trimmed);
}

function parseSections(description: string): Section[] {
  const blocks = description
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  const sections: Section[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const newlineIndex = block.indexOf("\n");

    if (newlineIndex === -1) {
      if (isAllCapsLabel(block)) {
        const next = blocks[i + 1];
        if (next && !isAllCapsLabel(next.split("\n")[0])) {
          sections.push({ label: block, body: next });
          i += 1;
        } else {
          sections.push({ label: block, body: "" });
        }
      } else {
        sections.push({ label: null, body: block });
      }
      continue;
    }

    const firstLine = block.slice(0, newlineIndex);
    if (isAllCapsLabel(firstLine)) {
      sections.push({
        label: firstLine,
        body: block.slice(newlineIndex + 1),
      });
    } else {
      sections.push({ label: null, body: block });
    }
  }

  return sections;
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
          {section.body && (
            <p className="font-sans text-[16px] leading-[1.8] text-foreground">
              {section.body}
            </p>
          )}
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
