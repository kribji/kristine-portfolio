"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { caseStudies } from "@/data/casestudies";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
  "Claude API",
  "Figma",
  "Git",
  "Vercel",
  "WordPress",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
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
    <section
      ref={ref}
      id="about"
      className={`border-b border-border px-6 py-24 md:px-24 ${visible ? "animate-visible" : "animate-hidden"}`}
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_300px]">
        <div>
          <p className="small-caps text-muted">About</p>
          <div className="mt-6 space-y-5 font-sans text-[16px] font-normal leading-[1.8] text-foreground">
            <p>
              At heart, I&apos;m a frontend developer and product builder working
              at the intersection of UX, systems thinking, and code. I have
              formal training in frontend development, web technologies, and
              project management.
            </p>
            <p>
              I design and build custom, minimal web experiences from concept to
              deployment, with a focus on clarity, usability, and long-term
              maintainability. My work ranges from focused websites and webshops
              to larger AI-powered SaaS products I&apos;ve built entirely solo.
            </p>
            <p>
              I work primarily with Next.js, React, Supabase, Tailwind, and AI
              APIs, often combined with headless CMS solutions and third-party
              integrations.
            </p>
            <p>
              I collaborate with a limited number of clients through a clear,
              structured process, keeping communication direct and decisions
              intentional from start to finish.
            </p>
            <p>
              I believe the next web should empower rather than persuade. I
              build calm, signal-over-noise digital experiences that respect the
              user.
            </p>
          </div>
        </div>

        <div>
          <p className="small-caps text-muted">Tools & Stack</p>
          <ul className="mt-6 space-y-2">
            {stack.map((item) => (
              <li
                key={item}
                className="font-sans text-[15px] font-normal text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24 border-t border-border pt-16">
        <p className="small-caps text-muted">Selected Case Studies</p>
        <div className="mt-8 space-y-0">
          {caseStudies.map((study) => {
            const year = study.category.split("·")[1]?.trim() ?? "";
            return (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col gap-2 border-b border-border py-6 transition-opacity hover:opacity-60 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="min-w-0">
                  <p className="font-sans text-[16px] font-normal text-foreground">
                    {study.title}
                  </p>
                  <p className="mt-1 font-sans text-[15px] text-muted">
                    {study.tagline}
                  </p>
                </div>
                <p className="small-caps shrink-0 text-muted">{year}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
