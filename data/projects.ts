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
    url: "#",
  },
  {
    slug: "hireos",
    name: "HireOS",
    category: "AI SAAS · PRODUCT",
    tagline:
      "A two-sided job matching platform that scrapes open positions across the web and matches them to candidates based on actual competence. Built with an inbuilt CV builder and AI powered interview trainer.",
    description:
      "HireOS is built around three core problems: job seekers waste time applying to irrelevant positions, employers wade through unqualified applicants, and most people do not know how to present themselves or prepare for interviews. The platform scrapes open positions across the web and runs them through an AI matching layer that goes beyond keywords to understand actual competence fit. Job seekers get a tailored position feed, a structured CV builder, and an AI powered interview trainer. Employers get candidates ranked by genuine relevance. Built with Next.js 14, Supabase, Tailwind, and the Anthropic Claude API. Currently in active development.",
    image: "/images/hireos.jpg",
    tech: ["Next.js 14", "Supabase", "Claude API", "Tailwind"],
    role: "Solo founder, full-stack developer",
    url: "#",
  },
  {
    slug: "holidaze",
    name: "Holidaze",
    category: "WEB APP · ACADEMIC",
    tagline:
      "A conceptual travel booking platform that rejects persuasive UX in favour of calm, clarity, and respect for the user — with a 3D interactive globe as the primary navigation surface.",
    description:
      "Most travel platforms are designed to pressure you into booking. Holidaze asks what happens when you design the opposite — a platform that treats users as informed adults rather than conversion targets. The interface strips away urgency cues, funnel-based CTAs, and manipulative hierarchy in favour of flat information structures, ambient motion, and genuine clarity. The centrepiece is a slowly rotating 3D globe built with Three.js and react-globe.gl, letting users explore destinations spatially rather than through menus. Venue data is fetched, filtered, and rendered through a modular component system supporting country-based discovery, search, and attribute filtering. Some conventional optimisations were deliberately softened to preserve design intent, validated through Lighthouse audits and real user testing.",
    image: "/images/holidaze.jpg",
    tech: ["React", "Tailwind", "REST API"],
    role: "Frontend developer",
    url: "https://github.com/Kristinebjorgan/holidaze",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
