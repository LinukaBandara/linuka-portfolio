export type FeaturedProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  live: string | null;
  repo: string;
  image: string;
  tone: string;
};

// NOTE on the bracketed [ ] placeholders below: these are real numbers only
// you can honestly supply (users/jobs/records handled, time saved, etc).
// Fill them in with your actual figures — even a rough, defensible estimate
// ("~30 jobs/week", "the client's ~200-item catalog") is far stronger than a
// vague claim, and a recruiter may ask you to justify any number in an
// interview, so only put in something you can back up.
export const featuredProjects: FeaturedProject[] = [
  {
    id: "01",
    name: "DispatchArc",
    tagline: "Field-service operations platform",
    description:
      "The hard part wasn't the CRUD — it was modeling one job's lifecycle (quote → schedule → dispatch → invoice → payment) so status changes stay consistent across customers, technicians and billing. I designed the PostgreSQL schema and REST API around that state machine first, then built the UI on top. Handles scheduling and invoicing for [X] simulated jobs/week in testing. If I rebuilt it today, I'd add optimistic UI updates for technician status changes instead of full refetches.",
    tech: ["ASP.NET Core", "C#", "PostgreSQL", "JWT", "Docker"],
    live: "https://dispatch-arc-eight.vercel.app/",
    repo: "https://github.com/linuka7/DispatchArc",
    image: "/projects/dispatcharc.jpg",
    tone: "mint",
  },
  {
    id: "02",
    name: "BGS AgriStock",
    tagline: "Agricultural inventory intelligence",
    description:
      "Built for a fertilizer/agrochemical business that was tracking stock in spreadsheets and losing track of what was actually on the shelf. The main challenge was designing a schema that stayed accurate under concurrent edits from multiple staff, without adding friction to a non-technical team's daily workflow. Cut stock-check time from [X minutes] to [Y minutes] per day for the client's staff. Next iteration would add low-stock alerts and a basic audit log.",
    tech: ["JavaScript", "Full Stack", "MySQL", "Inventory"],
    live: "https://bgs-agri-stock.vercel.app/",
    repo: "https://github.com/linuka7/BGS-AgriStock",
    image: "/projects/bgs-agristock.jpg",
    tone: "green",
  },
  {
    id: "03",
    name: "Suranga Gems",
    tagline: "Premium gemstone brand experience",
    description:
      "A real client brief: make a small gemstone business look as credible online as an established jeweller, on a tight timeline. I owned it end to end — brief, design, build, deployment to their own domain, and handover. The hardest part was balancing editorial, image-heavy design with fast load times on mobile, since most of their customers browse on phones. Live on the client's own domain and actively used to bring in enquiries.",
    tech: ["React", "CSS", "Responsive", "Brand UI"],
    live: "https://surangagems.com",
    repo: "https://github.com/linuka7/suranga-gems",
    image: "/projects/suranga-gems.jpg",
    tone: "sapphire",
  },
  {
    id: "04",
    name: "ARK II",
    tagline: "Independent digital studio",
    description:
      "A self-directed project to push past 'template' motion design — custom scroll-driven animation and typography-led layout instead of stock scroll-fade effects. The tricky part was keeping scroll performance smooth on mid-range phones once Lenis smooth-scroll and multiple animated sections were combined. Would profile and lazy-load the heavier animated sections if extending it further.",
    tech: ["React", "Vite", "Motion", "Lenis", "JavaScript"],
    live: "https://ark-ii.netlify.app/",
    repo: "https://github.com/linuka7/ark-ii",
    image: "/projects/ark-ii.jpg",
    tone: "ember",
  },
];

