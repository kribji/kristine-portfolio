export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  role: string;
  url: string;
};

export const projects: Project[] = [
  {
    slug: "leados",
    name: "LeadOS",
    category: "AI SAAS · PRODUCT",
    tagline:
      "An AI-powered lead generation platform that finds and enriches qualified B2B leads with verified contact details and direct sales signals.",
    description:
      "Most prospecting tools solve the wrong problem. They return high volumes of company names with little context and no way to know if anyone there actually needs what you are selling. LeadOS is built to solve the quality problem instead. The platform runs a multi-source enrichment waterfall on every lead it surfaces. Company data is pulled and verified, decision makers are identified, and contact details are cross-referenced across FullEnrich, Hunter.io, and Serper to return the most accurate result available. The output is not a list of companies — it is a set of actionable contacts with verified emails, phone numbers, and enough context to make the first outreach relevant. On the technical side, LeadOS is a full-stack SaaS product built entirely solo. The frontend is Next.js 14 with a mobile-first responsive interface. Authentication, database, and row-level security are handled by Supabase. AI-powered discovery and enrichment logic runs through the Anthropic Claude API. Payments and plan management are handled by Lemonsqueezy with a full webhook integration. The entire system is deployed on Vercel with a CI/CD pipeline. LeadOS launched publicly in May 2026 with paying users from day one.",
    image: "/images/leados.jpg",
    tech: ["Next.js 14", "Supabase", "Claude API", "Tailwind", "Lemonsqueezy", "Vercel"],
    role: "Solo founder, full-stack developer",
    url: "https://app.leados.tech",
  },
  {
    slug: "eveliina",
    name: "Eveliina",
    category: "WEBSHOP · PRO BONO",
    tagline:
      "A fully custom headless ecommerce and portfolio platform for a Finnish ceramics artist, built with Next.js and the Shopify Storefront API.",
    description:
      "Eveliina had no existing website and a clear vision: a calm, refined digital space that lets the ceramics lead without the noise of conventional ecommerce. Every design decision was made collaboratively — mockups were drawn up and iterated on together, then built from scratch. The result is a fully decoupled headless storefront using Shopify's Storefront API as the commerce backend and Next.js App Router on the frontend. Custom API routes handle all Shopify communication while page components stay focused purely on presentation. Large-format imagery, restrained typography, and generous whitespace give the work room to breathe. The structure supports future product growth and content expansion without touching the architecture.",
    image: "/images/eveliina.jpg",
    tech: ["Next.js", "Tailwind", "Shopify"],
    role: "Frontend developer",
    url: "https://eveveliinastudio.com",
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
