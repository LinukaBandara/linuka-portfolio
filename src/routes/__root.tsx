import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Linuka Bandara";
const TITLE = "Linuka Bandara — Software Engineer & Full-Stack Developer";
const DESCRIPTION =
  "Linuka Bandara is a software engineer and full-stack developer from Sri Lanka, building modern web applications, APIs and business systems with React, TypeScript, .NET and Node.js.";
const SITE_URL = "https://linukabandara.vercel.app";
const OG_IMAGE = `${SITE_URL}/og.jpg`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Linuka Bandara",
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: "Software Engineer & Full-Stack Developer",
  description: DESCRIPTION,
  sameAs: [
    "https://github.com/linuka7",
    "https://www.linkedin.com/in/linukabandara/",
    "https://www.instagram.com/_linu_ka",
  ],
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "ASP.NET Core",
    ".NET",
    "REST APIs",
    "PostgreSQL",
    "Web Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "ICBT Campus, Colombo",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP_NAME,
  url: SITE_URL,
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Linuka Bandara",
    url: SITE_URL,
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: APP_NAME },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#080808" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: APP_NAME },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Linuka Bandara — Software Engineer & Full-Stack Developer" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },

      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Linuka Bandara — Software Engineer & Full-Stack Developer" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
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
