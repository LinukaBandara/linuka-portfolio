import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/reveal";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-shell scroll-mt-24 border-t border-white/[0.055]">
      <div className="mx-auto max-w-[1120px]">
        <p className="section-kicker">In their words</p>
        <h2 className="section-title">
          Trusted by <br />
          the people I&apos;ve built for.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.name} delay={i * 90} className="testimonial-card">
              <Quote className="text-emerald-400/50" size={22} />
              <blockquote className="mt-4 text-pretty text-sm leading-7 text-zinc-300 md:text-base">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500">
                {t.name} — {t.role}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
