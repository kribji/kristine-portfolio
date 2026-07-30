import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { caseStudies, getCaseStudyBySlug } from "@/data/casestudies";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: `${study.title} — Kristine Bjørgan`,
    description: study.tagline,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  const metaLine = [study.readTime, ...study.tags].join(" · ");

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[800px] px-6 pb-24 pt-28 md:px-10 md:pt-32">
        <Link
          href="/#about"
          className="small-caps text-foreground transition-opacity hover:opacity-60"
        >
          Back
        </Link>

        <FadeIn className="mt-10">
          <p className="small-caps text-muted">{study.category}</p>
          <h1 className="mt-4 font-display text-[48px] leading-none text-foreground md:text-[64px]">
            {study.title}
          </h1>
          <p className="mt-4 font-sans text-[16px] text-muted">{study.tagline}</p>
          <p className="small-caps mt-4 text-muted">{metaLine}</p>
        </FadeIn>

        <FadeIn className="mt-16 grid grid-cols-1 gap-0 border-y border-border md:grid-cols-3">
          {[
            { label: "Lens", body: study.lens },
            { label: "Focus", body: study.focus },
            { label: "Outcome", body: study.outcome },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`py-8 md:px-6 md:py-10 ${
                index > 0 ? "border-t border-border md:border-t-0 md:border-l" : ""
              } ${index === 0 ? "md:pl-0" : ""} ${index === 2 ? "md:pr-0" : ""}`}
            >
              <p className="small-caps text-muted">{item.label}</p>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </FadeIn>

        <FadeIn className="mt-12">
          <p className="font-sans text-[18px] leading-[1.8] text-foreground">
            {study.intro}
          </p>
        </FadeIn>

        {study.highlights.length > 0 && (
          <FadeIn className="mt-10">
            <ul className="space-y-3">
              {study.highlights.map((item) => (
                <li
                  key={item}
                  className="font-sans text-[16px] leading-[1.8] text-foreground"
                >
                  — {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        )}

        <div className="mt-16 space-y-10">
          {study.sections.map((section) => (
            <FadeIn key={section.label}>
              <p className="mb-2 font-sans text-[12px] uppercase tracking-[0.1em] text-muted">
                {section.label}
              </p>
              <p className="font-sans text-[16px] leading-[1.8] text-foreground">
                {section.body}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16">
          <a
            href={study.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground px-8 py-3 font-sans text-[15px] text-white transition-colors hover:bg-[#333]"
          >
            Read PDF
          </a>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
