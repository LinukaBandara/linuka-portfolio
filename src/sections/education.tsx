import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section id="education" className="section-shell scroll-mt-24 border-t border-white/[0.055]">
      <div className="mx-auto max-w-[1120px]">
        <p className="section-kicker">My education</p>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="section-title">Still learning, always<br />building.</h2>
            <p className="mt-8 max-w-xl text-sm leading-7 text-zinc-500 md:text-[15px]">
              I&apos;m completing a Higher Diploma in Computing &amp; Software Engineering at ICBT Campus,
              while continuously strengthening my full-stack, backend, database, system-design and
              deployment skills through production-style projects.
            </p>
          </div>

          <Reveal className="education-card">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-zinc-300">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-600">2025 — Present</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                  Higher Diploma in Computing &amp; Software Engineering
                </h3>
                <p className="mt-2 text-sm text-zinc-500">ICBT Campus, Colombo</p>
              </div>
            </div>
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {["Software Engineering", "Web Development", "Databases", "Data Structures", "System Design", "Backend Development"].map((item) => (
                <div key={item} className="rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3 text-xs text-zinc-500">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
