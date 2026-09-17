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

export const featuredProjects: FeaturedProject[] = [
  {
    id: "01",
    name: "DispatchArc",
    tagline: "Field-service operations platform",
    description: "A full-stack operations platform modeled around the lifecycle of jobs, customers, scheduling, dispatch, invoicing and payments, with a PostgreSQL-backed API and tenant-aware workflows.",
    tech: ["ASP.NET Core", "C#", "PostgreSQL", "JWT", "Docker"],
    live: "https://dispatch-arc-eight.vercel.app/",
    repo: "https://github.com/LinukaBandara/DispatchArc",
    image: "/projects/dispatcharc.jpg",
    tone: "mint",
  },
  {
    id: "02",
    name: "BGS AgriStock",
    tagline: "Agricultural inventory intelligence",
    description: "An inventory-management product shaped around the workflow of a local agricultural-products business, with stock updates, reporting, product management and a frontend demo mode.",
    tech: ["JavaScript", "Full Stack", "MySQL", "Inventory", "Dashboard"],
    live: "https://bgs-agri-stock.vercel.app/",
    repo: "https://github.com/LinukaBandara/BGS-AgriStock",
    image: "/projects/bgs-agristock.jpg",
    tone: "green",
  },
  {
    id: "03",
    name: "Suranga Gems",
    tagline: "Premium gemstone brand experience",
    description: "A real client website for a natural gemstone business, taking the project from brief and brand direction through responsive development, deployment and handover.",
    tech: ["React", "CSS", "Responsive", "Brand UI", "Deployment"],
    live: "https://surangagems.com",
    repo: "https://github.com/LinukaBandara/suranga-gems",
    image: "/projects/suranga-gems.jpg",
    tone: "sapphire",
  },
  {
    id: "04",
    name: "ARK II",
    tagline: "Independent digital studio",
    description: "The studio platform behind this body of work. A self-directed experiment in typography-led layout, scroll-driven motion, responsive systems and premium digital presentation.",
    tech: ["React", "Vite", "Motion", "Lenis", "JavaScript"],
    live: "https://ark-ii.studio",
    repo: "https://github.com/LinukaBandara/ark-ii",
    image: "/projects/ark-ii.jpg",
    tone: "ember",
  },
];
