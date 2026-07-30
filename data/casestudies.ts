export type CaseStudySection = {
  label: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  readTime: string;
  tags: string[];
  pdf: string;
  lens: string;
  focus: string;
  outcome: string;
  intro: string;
  highlights: string[];
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ronin",
    title: "Ronin",
    category: "CASE STUDY · 2024",
    tagline: "A blockchain gaming case study",
    readTime: "6 min read",
    tags: ["Infrastructure", "Scalability", "Web3"],
    pdf: "/pdf/ronin.pdf",
    lens: "Infrastructure decisions become UX decisions",
    focus: "Scalability, cost, and economic feedback loops",
    outcome: "A clear model for sustainable play-to-earn systems",
    intro:
      "A deep dive into scalability, cost, and infrastructure within play-to-earn gaming systems.",
    highlights: [
      "Treats transaction fees and latency as user-facing design constraints.",
      "Maps where economic friction breaks the gameplay loop.",
      "Explains why cheap and fast is not enough without trust and consistency.",
      "Connects chain architecture to retention, pacing, and player behavior.",
    ],
    sections: [
      {
        label: "PROBLEM",
        body: "High transaction fees and slow confirmation times made gameplay loops feel unreliable.",
      },
      {
        label: "ANALYSIS",
        body: "Mapped user flows against network bottlenecks to find the highest pain points.",
      },
      {
        label: "LEARNINGS",
        body: "Layer-2 chains unlock lower cost and more responsive play experiences when paired with clear UX.",
      },
    ],
  },
  {
    slug: "conserving-knowledge",
    title: "Conserving Knowledge",
    category: "CASE STUDY · 2023",
    tagline: "How teams retain insight in collaborative project work",
    readTime: "7 min read",
    tags: ["Systems Thinking", "Organizational Learning", "Collaboration"],
    pdf: "/pdf/conserving-knowledge.pdf",
    lens: "Knowledge loss is a leadership and design problem, not a documentation problem",
    focus: "Tacit knowledge transfer across project-based organizations",
    outcome: "A framework for designing learning into organizational culture",
    intro:
      "A systems-level case study on how organizations can better retain and reuse knowledge generated in project-based work. The study challenges documentation-first approaches and explores learning as a cultural, structural, and social process.",
    highlights: [],
    sections: [
      {
        label: "CONTEXT",
        body: "Project-based organizations generate vast amounts of knowledge, yet repeatedly experience the same mistakes. This case study investigates why accumulated insight so often fails to transfer between projects and into the permanent organization.",
      },
      {
        label: "CORE PROBLEM",
        body: "The most valuable knowledge in projects is tacit: embedded in people, relationships, and shared context. Traditional reports primarily capture explicit knowledge, leaving critical experience undocumented and effectively lost once a project ends.",
      },
      {
        label: "LEARNING AS A SYSTEM",
        body: "Rather than treating learning as a byproduct, the study reframes it as a system requiring infrastructure, process, and culture. Learning must be designed, supported, and actively prioritized alongside time, cost, and delivery.",
      },
      {
        label: "KEY MECHANISMS",
        body: "The study highlights roundtable dialogues, simulation exercises, structured reflection, and personnel continuity as effective mechanisms for transferring tacit knowledge across projects.",
      },
      {
        label: "ORGANIZATIONAL INSIGHT",
        body: "Sustainable learning occurs when organizations value reflection, trust, and openness. Performance improves as a consequence of learning, not as its prerequisite — a reversal of many traditional project management assumptions.",
      },
      {
        label: "OUTCOME",
        body: "The case study concludes that knowledge conservation is not a documentation problem, but a leadership and design challenge. Organizations that intentionally design for learning gain long-term adaptability, resilience, and innovation capacity.",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
