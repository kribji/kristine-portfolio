"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { caseStudies } from "@/data/casestudies";

const stackGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    label: "Backend & Data",
    items: ["Supabase", "PostgreSQL", "Vercel", "Netlify", "AWS"],
  },
  {
    label: "AI",
    items: ["Anthropic API", "Ollama"],
  },
  {
    label: "Integrations",
    items: [
      "Shopify Storefront API",
      "LemonSqueezy",
      "Resend",
      "Formspree",
      "Hunter",
      "Serper",
      "FullEnrich",
    ],
  },
  {
    label: "Design & Tools",
    items: ["Figma", "Git", "WordPress", "Cursor", "Claude Code"],
  },
];

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.9)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
};

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
      className={`bg-[#f3f4f5] px-6 py-24 md:px-24 ${visible ? "animate-visible" : "animate-hidden"}`}
    >
      <div className="p-6 md:p-10" style={cardStyle}>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_390px]">
          <div>
            <p className="small-caps text-muted">About</p>
            <div className="mt-6 space-y-5 font-sans text-[16px] font-normal leading-[1.8] text-foreground">
              <p>
                At heart, I&apos;m a frontend developer and product builder
                thriving at the intersection of UX, systems thinking,
                architecture and code. In addition to my formal training in
                frontend development, I hold a degree in project management.
              </p>
              <p>
                I design and build custom, minimal web experiences from concept
                to deployment, with a focus on clarity, usability, and long-term
                maintainability. My work ranges from focused websites and
                webshops to larger AI-powered SaaS products I&apos;ve built
                entirely solo.
              </p>
              <p>
                I work primarily with Next.js, React, Supabase, and Tailwind,
                building AI-native products powered by the Anthropic API and
                integrated data and enrichment tooling.
              </p>
              <p>
                I collaborate with a limited number of clients through a clear,
                structured process, keeping communication direct and decisions
                intentional from start to finish.
              </p>
              <p>
                I believe the next web should empower rather than persuade. I
                build calm, signal-over-noise digital experiences that respect
                the user.
              </p>
            </div>
          </div>

          <div>
            <p className="small-caps text-muted">Tools & Stack</p>
            <div className="mt-6 space-y-5">
              {stackGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-[10px] font-normal uppercase tracking-[0.18em] text-muted/80">
                    {group.label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border border-foreground bg-transparent px-3 py-1.5 font-sans text-[13px] font-normal text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 md:mt-12 md:p-10" style={cardStyle}>
        <p className="small-caps text-muted">Case Studies</p>
        <div className="mt-8 space-y-8">
          {caseStudies.map((study) => {
            const year = study.category.split("·")[1]?.trim() ?? "";
            return (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col gap-2 transition-opacity hover:opacity-60 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
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
