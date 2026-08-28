import { ArrowUpRight, Github } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section
      id="work"
      className="section-shell scroll-mt-24 border-t border-white/[0.055]"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="section-index-row">
          <span>03</span>
          <span>Selected work / 2025—2026</span>
        </div>

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Featured projects</p>

            <h2 className="section-title">
  <span className="block">Systems with a</span>
  <span className="block">visual signature.</span>
</h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-zinc-600">
            Real interfaces, real project screenshots — presented as
            futuristic product frames instead of generic stock mockups.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal
              as="article"
              key={project.name}
              delay={(index % 2) * 90}
              className={`project-card project-tone-${project.tone} group`}
            >
              <div className="project-stage">
                <div className="project-orbit project-orbit-a" />
                <div className="project-orbit project-orbit-b" />

                <div className="project-device">
                  <div className="project-browserbar">
                    <span />
                    <span />
                    <span />

                    <div className="project-browser-address">
                      {project.name.toLowerCase().replaceAll(" ", "-")}.project
                    </div>
                  </div>

                  <img
                    src={project.image}
                    alt={`${project.name} website screenshot`}
                    className="project-screenshot"
                  />
                </div>

                <span className="project-number">{project.id}</span>

                <span className="project-signal">LIVE BUILD</span>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-emerald-400/65">
                      Case study 0{index + 1}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.035em] text-white">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-xs text-zinc-600">
                      {project.tagline}
                    </p>
                  </div>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name}`}
                      className="project-icon-link"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>

                <p className="mt-5 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-white/[0.06] pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      Live site
                    </a>
                  )}

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition hover:text-white"
                  >
                    <Github size={12} />
                    Source
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/linuka7?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="outline-pill"
          >
            View all repositories
          </a>
        </div>
      </div>
    </section>
  );
}