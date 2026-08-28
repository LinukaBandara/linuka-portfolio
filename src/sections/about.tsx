import { Reveal } from "@/components/reveal";

// Trimmed from the original 22: dropped jQuery + WordPress (dated next to
// React/Next.js, weakens the "modern stack" read) and SQL Server (having
// Postgres + MySQL + SQL Server all listed read as padding rather than depth).
const tech = [
  "React", "Next.js", "Laravel", "HTML5", "CSS3", "JavaScript",
  "TypeScript", "C#", "ASP.NET Core", "Java", "Node.js", "Express.js", "PostgreSQL", "MySQL",
  "Git", "GitHub", "Docker", "Vite", "REST APIs",
];

export function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="section-index-row"><span>01</span><span>Profile / capabilities</span></div>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <p className="section-kicker">About me</p>
            <h2 className="section-title">
  <span className="block">Developer, designer</span>
  <span className="block">and quick learner.</span>
</h2>
            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-zinc-500 md:text-[15px]">
              <p>I&apos;m Linuka, a software engineering student focused on modern web applications, REST APIs, business systems and responsive digital experiences.</p>
              <p>I like taking an idea from architecture and databases through to the final interface — keeping the workflow practical, the code maintainable and the visual result polished.</p>
            </div>
            <a href="https://github.com/linuka7" target="_blank" rel="noreferrer" className="outline-pill mt-9">Explore my code</a>
          </div>

          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">Current toolkit</p>
              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-emerald-400/70">{tech.length} technologies</span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
              {tech.map((item, i) => (
                <Reveal as="div" key={item} delay={(i % 6) * 40} className="tech-chip"><span className="tech-dot" />{item}</Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
