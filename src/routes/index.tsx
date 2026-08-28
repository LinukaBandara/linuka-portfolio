import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/footer";
import { Grain } from "@/components/grain";
import { Navbar } from "@/components/navbar";
import { OrbitLoader } from "@/components/orbit-loader";
import { SmoothScroll } from "@/components/smooth-scroll";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Education } from "@/sections/education";
import { GithubStats } from "@/sections/github";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Testimonials } from "@/sections/testimonials";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-svh bg-black text-white">
      <OrbitLoader />
      <SmoothScroll />
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Testimonials />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
