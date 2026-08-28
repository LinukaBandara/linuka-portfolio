import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Linuka Bandara";
const TITLE = "Linuka Bandara — Software Engineer & Full-Stack Developer";
const DESCRIPTION =
  "Portfolio of Linuka Bandara, a Sri Lanka-based software engineering student and full-stack developer building web apps, APIs and business systems with React, .NET and Node.js.";
// TODO: replace with your real production domain once you deploy (used for canonical/OG URLs, sitemap, robots.txt).
const SITE_URL = "https://linukabandara.vercel.app";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Linuka Bandara",
  url: SITE_URL,
  jobTitle: "Software Engineering Student & Full-Stack Developer",
  description: DESCRIPTION,
  image: `${SITE_URL}/og.jpg`,
  sameAs: [
    "https://github.com/linuka7",
    "https://www.linkedin.com/in/linukabandara/",
    "https://www.instagram.com/_linu_ka",
  ],
  knowsAbout: [
    "React", "TypeScript", "Node.js", "ASP.NET Core", "REST APIs", "PostgreSQL", "Full-Stack Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "ICBT Campus, Colombo",
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: "Linuka Bandara" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#080808" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: APP_NAME },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },

      // Twitter / X card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og.jpg` },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});

