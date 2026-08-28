export type Testimonial = {
  quote: string;
  name: string;
  role: string; // e.g. "Owner, Suranga Gems"
  project?: string; // matches a project name in data/projects.ts, optional
};

// Add real quotes here as you collect them — the section on the site
// automatically hides itself until there's at least one entry, so nothing
// fabricated or placeholder ever goes live by accident.
//
// Example, once you have a real quote from a client:
// {
//   quote: "Linuka rebuilt our site and it's brought in real enquiries since launch.",
//   name: "Suranga Perera",
//   role: "Owner, Suranga Gems",
//   project: "Suranga Gems",
// },
export const testimonials: Testimonial[] = [];
