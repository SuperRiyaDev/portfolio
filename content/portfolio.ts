export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Path under public/ (e.g. /projects/maxai.png) or absolute URL */
  imageSrc?: string;
  imageAlt?: string;
  /** Extra screenshots (shown when the card is expanded) */
  gallery?: ProjectImage[];
  /** Longer copy (shown when the card is expanded) */
  detailParagraphs?: string[];
  highlights?: string[];
  /** Public app or demo URL — cover image links here; button label defaults to “Live demo” */
  liveUrl?: string;
  liveLinkLabel?: string;
  repoUrl?: string;
  /** Extra links (docs, case study, demo video, etc.) */
  links?: ProjectLink[];
  featured?: boolean;
  inProgress?: boolean;
};

export type Skill = {
  name: string;
  category:
    | "ai"
    | "languages"
    | "frontend"
    | "backend"
    | "cloud"
    | "security"
    | "architecture"
    | "geospatial"
    | "coreCs"
    | "design";
  blurb?: string;
};

export type ExperienceEntry = {
  kind: "work" | "education" | "fellowship";
  title: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  highlights?: string[];
  detail?: string;
  current?: boolean;
};

export const portfolio = {
  site: {
    name: "Supriya Dutta",
    title: "Software Engineer",
    headline: "Full-Stack & AI-Integrated Systems (3+ yrs)",
    location: "India",
    email: "riyanadutta22@gmail.com",
    tagline: "Give me a problem. I’ll figure it out.",
    currentlyBuilding:
      "Geospatial AI with plugins & MCP — team project in progress",
    currentlyBuildingUrl: undefined as string | undefined,
    socials: [
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/supriya-dutta-461b05190",
      },
      { label: "GitHub", href: "https://github.com/supriya-dutta" },
      { label: "Email", href: "mailto:riyanadutta22@gmail.com" },
    ] satisfies SocialLink[],
  },
  about: {
    paragraphs: [
      "I'm a software engineer with 3+ years of experience building production software at Granular.ai. My work there includes a Claude-powered CRM assistant with tool calling across 31 integrations, a revision-based estimate platform, enterprise OAuth integrations, and Kubernetes deployments on Azure.",
      "Right now I'm on a team project exploring how geospatial building data can be exposed through APIs and MCP, so AI assistants can answer real-world questions about properties, buildings, and neighborhoods. We still treat documentation and readability as deliverables—work someone can read, run, and extend without a live walkthrough.",
      "I'm documenting the build as it happens. I write short LinkedIn posts on what I'm learning, and longer software-engineering write-ups here on each part of the stack. A mentor reviews my drafts before they go out.",
      "I believe good engineering is only part of the job. The rest is making the work clear enough that people can understand it, use it, and trust it. I work remotely and I'm looking for teams that care about craft.",
    ],
    photoSrc: "/projects/profile-photo.jpeg",
    photoAlt: "Supriya Dutta",
  },
  experience: [
    {
      kind: "work",
      title: "Software Engineer",
      organization: "Granular.ai",
      location: "Remote",
      start: "Dec 2023",
      end: "Oct 2023",
      current: true,
      highlights: [
        "Co-developed MaxAI, a Claude-powered conversational CRM assistant with tool calling and function routing across 31 integrations (jobs, contacts, KPI analytics, report ordering, estimate comparison) via internal tRPC callers, returning structured outputs rendered as rich response cards in the product UI.",
        "Architected and shipped Estimate V6, a revision-based estimate platform with immutable signed snapshots, a formula-driven quantity engine (measurements → line items), multi-vendor pricing, and change orders—108 backend modules, 54 tests, and 91 UI components.",
        "Designed a vendor-agnostic, ADR-driven integration architecture for ABC Supply, QuickBooks, DocuSeal, and Stripe: org-scoped OAuth, live catalog and pricing sync, e-signature webhooks, and direct material order submission to distributor REST APIs.",
        "Owned production deployment on Azure AKS: Kustomize manifests, HPA autoscaling, MongoDB StatefulSet, cert-manager HTTPS, and path-filtered GitHub Actions CI/CD with 50+ secrets synced.",
        "Reduced API response times by 30% by redesigning MongoDB indexes and optimizing aggregation pipelines across large inspection datasets.",
        "Designed a modular billing architecture around Stripe metered usage, with subscription, usage-reporting, and billing workflows packaged as reusable service components.",
        "Built token-secured API endpoints integrating a roofing contractor end-to-end (orders, inspections, image upload, report generation)—that customer became the company's largest at 150–200+ reports per month.",
        "Built an interactive geospatial measurement engine with Leaflet, Mapbox, and Turf.js for polygon editing, coordinate transformations, and area calculations on satellite imagery.",
        "Led technical interviews, mentored junior engineers, and established code review practices to improve maintainability and consistency.",
      ],
    },
    {
      kind: "fellowship",
      title: "Full Stack Development Fellowship",
      organization: "Crio.Do",
      location: "India",
      start: "May 2022",
      end: "Aug 2023",
      highlights: [
        "Built 6 production-quality full-stack applications spanning e-commerce, news feeds, video sharing, and REST APIs.",
        "Developed RESTful backend services (Node.js, Express) and responsive React frontends, deployed via Vercel, Netlify, and Heroku.",
      ],
    },
  ] satisfies ExperienceEntry[],
  projects: [
    {
      title: "Geospatial AI with Plugins & MCP",
      description:
        "A team project exploring how geospatial building data can be exposed through APIs and MCP, allowing AI assistants to answer real-world questions about properties, buildings, and neighborhoods.",
      tags: ["Geospatial", "MCP", "AI", "APIs", "Team project"],
      imageSrc: "/projects/geospatial-ai-mcp.svg",
      imageAlt:
        "Map and building footprints connected via APIs and MCP to an AI assistant",
      inProgress: true,
    },
    {
      title: "MaxAI — Claude-Powered CRM Assistant",
      description:
        "A conversational assistant inside the roofing.io CRM. Claude routes each request to the right tool across 31 integrations—jobs, contacts, KPI analytics, report ordering, and estimate comparison. Tools run through internal tRPC callers on the same typed backend the product uses. Responses return as structured outputs and render as rich cards in the UI, not walls of text.",
      tags: ["Claude", "TypeScript", "tRPC", "Tool Calling", "React"],
      imageSrc: "/projects/max.ai.png",
      imageAlt: "MaxAI conversational assistant UI concept",
      links: [
        {
          label: "Feature on roofing.io",
          href: "https://roofing.io/agent",
        },
      ],
      featured: true,
    },
    {
      title: "Estimate V6 Platform",
      description:
        "The core quoting product at Granular.ai. Each job can hold multiple estimates; every edit creates a numbered revision with builder, presentation, pricing, and audit snapshots.",
      detailParagraphs: [
        "When a homeowner signs, that revision becomes immutable. Pricing is captured with a hash so totals can't drift after approval. Change orders fork a new revision instead of changing signed work, which keeps insurance and contractor workflows auditable.",
        "The quantity engine turns inspection measurements—roof area, squares, ridge/hip/eave lengths, facets, waste factor—into priced line items using rules and vendor packaging. That feeds live subtotals, multi-vendor catalogs, PDF proposals, and the customer-facing presentation.",
      ],
      highlights: [
        "Revision model with immutable signed snapshots and hashed pricing captures",
        "Formula-driven quantity engine: roof measurements → materials and labor line items",
        "Change orders, material orders, and labor bid orders tied to signed revisions",
        "Presentation PDFs, share links, and DocuSeal e-signature flow integrated with job documents",
        "Reusable org templates, with vendor-specific materials kept separate from generic catalog items",
        "108 backend modules, 91 UI components, 54 tests",
      ],
      tags: [
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "tRPC",
        "System Design",
      ],
      imageSrc: "/projects/estimate-v6-calculator.png",
      imageAlt:
        "Estimate builder with aerial roof measurements, line items, and material cost summary",
      gallery: [
        {
          src: "/projects/estimate-v6-calculator.png",
          alt: "Estimate builder with measured roof polygon and priced line items",
          caption:
            "Builder — measurements drive quantities and live material totals",
        },
        {
          src: "/projects/estimate-v6-tool.png",
          alt: "Estimate tool for creating a new estimate with measured roof polygon and priced line items",
          caption: "Tool — for creating a new estimate",
        },
        {
          src: "/projects/estimate-v6-presentation-intro.png",
          alt: "Customer-facing estimate presentation summary with property and roof details",
          caption:
            "Presentation — homeowner-ready summary tied to inspection data",
        },
        {
          src: "/projects/estimate-v6-line-items.png",
          alt: "Dwelling roof scope with quantity, unit price, and grand total",
          caption:
            "Scope & pricing — line items, totals, and signed estimate disclaimers",
        },
      ],
      links: [
        {
          label: "Feature on roofing.io",
          href: "https://roofing.io",
        },
      ],
      featured: true,
    },
    {
      title: "Multi-Lender Quoting Platform",
      description:
        "An Electron desktop app backed by Google Cloud. The API runs on Cloud Run with Cloud SQL (PostgreSQL). Row-Level Security policies enforce tenant isolation at the database level. Authentication uses IAM-based OAuth (PKCE), and Secret Manager holds credentials so no cloud secrets ship in the client.",
      tags: [
        "Electron",
        "Google Cloud Run",
        "Cloud SQL",
        "PostgreSQL",
        "OAuth",
        "Secret Manager",
      ],
      imageSrc: "/projects/multi-lender.svg",
      imageAlt: "Desktop quoting application mockup",
      repoUrl: "https://github.com/SuperRiyaDev/Quoting-tool",
    },
    {
      title: "Geospatial Measurement Engine",
      description:
        "An internal measurement tool for drawing and editing polygons on satellite imagery, with coordinate transforms and accurate area math. Its output feeds roof quantities directly into estimates.",
      tags: ["Leaflet", "Mapbox", "Turf.js", "JavaScript", "GIS"],
      imageSrc: "/projects/measurement-tool.png",
      imageAlt: "Satellite map with roof measurement polygon",
      links: [
        {
          label: "Feature on Inspect.Properties",
          href: "https://inspect.properties/#property-record",
        },
      ],
    },
  ] satisfies Project[],
  skills: [
    {
      name: "Claude tool calling & routing",
      category: "ai",
      blurb: "Function routing across CRM integrations",
    },
    {
      name: "Structured LLM outputs",
      category: "ai",
      blurb: "Rich response cards in product UI",
    },
    {
      name: "Conversational agent design",
      category: "ai",
      blurb: "MaxAI-style assistants in production",
    },
    {
      name: "Cursor",
      category: "ai",
      blurb: "AI-native IDE for shipping and documenting work",
    },
    { name: "TypeScript", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "Python", category: "languages" },
    { name: "C++", category: "languages" },
    { name: "SQL", category: "languages" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Zustand", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "tRPC", category: "backend" },
    { name: "REST API design", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "Stripe API", category: "backend" },
    { name: "Webhooks", category: "backend" },
    { name: "Azure (AKS)", category: "cloud" },
    { name: "AWS", category: "cloud" },
    {
      name: "Google Cloud Run & Cloud SQL",
      category: "cloud",
    },
    { name: "Secret Manager", category: "cloud" },
    { name: "Docker", category: "cloud" },
    { name: "Kubernetes", category: "cloud" },
    { name: "Kustomize", category: "cloud" },
    { name: "GitHub Actions CI/CD", category: "cloud" },
    { name: "HPA autoscaling", category: "cloud" },
    { name: "cert-manager", category: "cloud" },
    { name: "Vercel", category: "cloud" },
    { name: "Netlify", category: "cloud" },
    { name: "Heroku", category: "cloud" },
    { name: "OAuth 2.0 (PKCE)", category: "security" },
    { name: "IAM-based auth", category: "security" },
    { name: "Row-Level Security", category: "security" },
    { name: "Secrets management", category: "security" },
    { name: "System design", category: "architecture" },
    { name: "Microservices", category: "architecture" },
    {
      name: "Integration architecture",
      category: "architecture",
      blurb: "ADR-driven, vendor-agnostic",
    },
    { name: "Leaflet", category: "geospatial" },
    { name: "Mapbox", category: "geospatial" },
    { name: "Turf.js", category: "geospatial" },
    { name: "Electron", category: "geospatial" },
    { name: "Data structures & algorithms", category: "coreCs" },
    { name: "Object-oriented programming", category: "coreCs" },
    { name: "Problem solving", category: "coreCs" },
    { name: "Figma", category: "design" },
  ] satisfies Skill[],
} as const;

export type Portfolio = typeof portfolio;
