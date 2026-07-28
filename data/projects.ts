export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  role: string | string[];
  url: string;
};

export const projects: Project[] = [
  {
    slug: "leados",
    name: "LeadOS",
    category: "AI SAAS · PRODUCT",
    tagline:
      "An AI-powered B2B lead generation platform built solo from concept to production.",
    description:
      "CONTEXT\nMost prospecting tools solve the wrong problem. They optimize for volume, returning long lists of company names with no signal about fit, intent, or timing. LeadOS was built to solve the quality problem with this core hypothesis: a smaller list of highly relevant, enriched contacts with verified details and real buying signals is worth more than a thousand cold names.\n\nTHE PROBLEM\nSales teams spend a disproportionate amount of time on prospecting that leads nowhere. Existing tools either return raw data with no context, require manual research to be actionable, or are built for markets where deep local data integration is not possible. LeadOS was designed from the ground up to change that ratio, with the goal being less time finding, more time selling.\n\nPRODUCT ARCHITECTURE\nThe platform is structured around an AI agent that runs a multi-step enrichment waterfall on every search. The agent reads the user's website and configurates a unique ICP from that, searches for matching companies, scans for buying signals, scrapes company websites, enriches contact data, scores each lead against the ICP, writes personalised outreach drafts, and filters disqualifiers — all in a single automated run. The output is not a list of companies. It is a set of decision-maker contacts with verified emails, fit scores, buying signal tags, and ready-to-send outreach drafts.\n\nTECHNICAL IMPLEMENTATION\nLeadOS is a full-stack SaaS product built entirely solo. The frontend is Next.js 14 with a mobile-first responsive interface built in TypeScript and Tailwind CSS. Authentication, database, and row-level security are handled by Supabase with PostgreSQL. The AI agent and enrichment logic run through the Anthropic Claude API. Company discovery uses Serper. Contact enrichment runs through FullEnrich with Hunter.io as fallback. Norwegian company and decision-maker data is pulled directly from brreg.no, which provides a competitive advantage in the Scandinavian market. Email infrastructure runs on Resend. Payments and plan management are handled by Lemonsqueezy with a full webhook integration. The entire system is deployed on Vercel.\n\nWHAT THIS BUILD DEMONSTRATES\nLeadOS required solving problems across the full stack simultaneously: designing a product from scratch, architecting a reliable multi-source data pipeline, handling real payments and plan limits, building a mobile-first UI under real constraints, and shipping to production alone. It launched publicly in May 2026 with paying users from day one.",
    image: "/images/leados-logo.png",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Claude API",
      "Serper",
      "FullEnrich",
      "Hunter.io",
      "brreg.no",
      "Resend",
      "Lemonsqueezy",
      "Vercel",
    ],
    role: "Solo founder, full-stack developer",
    url: "https://www.leados.tech/",
  },
  {
    slug: "eveliina",
    name: "Eveliina",
    category: "PROJECT · 2026",
    tagline: "Headless ceramics ecommerce & digital presence",
    description:
      "CONTEXT\nThe project began without an existing website. The goal was to create a calm, refined digital space that reflects the artist's aesthetic while enabling direct product sales without relying on Shopify's default storefront themes.\n\nTECHNICAL ARCHITECTURE\nBuilt using Next.js App Router with dynamic routing for collections and product detail pages. Shopify is used as the inventory and commerce backend via the Storefront API, while the frontend remains fully custom and decoupled.\n\nDATA & UI SEPARATION\nImplemented a clear separation between API routes and UI components. Custom API endpoints handle communication with Shopify, while page components focus purely on presentation. This structure improves scalability, maintainability, and future CMS integration.\n\nTECHNICAL HIGHLIGHTS\nDynamic API routes for collections and products. Headless Shopify Storefront API integration. Clean URL structure: /shop/[collection]/[product]. Normalized product data layer for UI consistency. Production deployment via Netlify with environment-based configuration. Scalable structure prepared for CMS-driven content.\n\nDESIGN APPROACH\nThe interface emphasizes whitespace, restrained typography, and quiet motion. Large-format imagery allows the ceramics to lead, avoiding conventional ecommerce clutter while preserving clarity and usability.\n\nCOLLABORATION & ITERATION\nDeveloped in close collaboration with the client through iterative design feedback. The visual direction evolved over multiple refinements to balance artistic expression with commercial clarity.\n\nOUTCOME\nDelivered a production-ready ecommerce foundation that blends editorial storytelling with scalable commerce infrastructure. The system supports future product growth and content expansion without structural changes.",
    image: "/images/eveliina1.png",
    tech: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Shopify Storefront API",
      "Netlify",
      "Formspree",
    ],
    role: [
      "Concept & Direction",
      "UX & UI Design",
      "Frontend Architecture",
      "Shopify Storefront Integration",
      "Deployment & Infrastructure",
    ],
    url: "https://eveveliinastudio.com",
  },
  {
    slug: "holidaze",
    name: "Holidaze",
    category: "PROJECT · 2024",
    tagline:
      "A conceptual travel platform exploring how digital services can evolve alongside digitally mature users.",
    description:
      "CONTEXT\nHolidaze was developed as both a booking platform concept and a critical exploration of contemporary web design. The project emerged from the hypothesis that the future web should empower users rather than persuade them, favoring clarity and trust over conversion-driven patterns.\n\nDESIGN PHILOSOPHY\nRooted in Web3 design principles, the interface avoids traditional visual hierarchies, urgency cues, and funnel-based CTAs. Instead, it introduces flat information structures, minimal contrast, and ambient motion to create a calm, non-directive browsing experience.\n\nINTERACTION & MOTION\nA slowly rotating 3D globe functions as the primary navigation surface, allowing users to explore destinations spatially rather than through menus. Subtle motion, scroll-based scaling, and hover interactions add liveliness without breaking the minimalist intent.\n\nSYSTEM ARCHITECTURE\nThe platform is structured around modular, purpose-driven components. Venue data is fetched, filtered, and rendered through a scalable system supporting country-based discovery, search, and attribute filtering, with a clear separation between logic and presentation.\n\nINTENTIONAL TRADE-OFFS\nSome conventional accessibility and performance optimizations were deliberately softened to preserve design intent. These decisions were validated through Lighthouse audits, WCAG checks, and real user testing, confirming usability despite lower visual hierarchy.\n\nOUTCOME\nHolidaze demonstrates that digital experiences do not need to rely on urgency or persuasion to be effective. The project delivers a calm, trust-based interface that encourages intentional action, offering a vision for a more mature and respectful web.",
    image: "/images/holidaze1.png",
    tech: ["React", "Tailwind CSS", "Three.js", "react-globe.gl", "REST APIs", "Netlify"],
    role: [
      "Concept & Research",
      "UX & UI Design",
      "Frontend Architecture",
      "Interaction Design",
      "Testing & QA",
    ],
    url: "https://holid4ze.netlify.app/",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
