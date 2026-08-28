import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { TypingEffect } from "@/components/typing-effect";
import { scrollToId } from "@/components/smooth-scroll";

export function Hero() {
  return (
    <section id="top" className="hero-shell relative flex min-h-svh items-center overflow-hidden px-page pt-24">
      <div className="hero-glow" /><div className="hero-grid" />
      <div className="hero-coordinate hero-coordinate-left">06.9271° N</div><div className="hero-coordinate hero-coordinate-right">79.8612° E</div>
      <div className="relative z-10 mx-auto flex w-full max-w-[860px] flex-col items-center pb-16 pt-12 text-center md:pb-24 md:pt-16">
        <div className="hero-in hero-in-1 hero-status"><span className="status-dot" /> Available for opportunities <span className="hidden sm:inline">· Sri Lanka / Remote</span></div>
        <h1 className="hero-in hero-in-2 hero-title font-display font-bold uppercase leading-[0.8] tracking-[-0.065em]"><span className="block text-white">LINUKA</span><span className="block text-zinc-500">BANDARA</span></h1>
        <div className="hero-in hero-in-2 mt-7 h-8 font-mono text-sm font-medium tracking-tight text-zinc-400 sm:text-base md:text-lg"><TypingEffect /></div>
        <p className="hero-in hero-in-3 mt-6 max-w-2xl text-pretty text-sm leading-7 text-zinc-500 md:text-base">I build practical full-stack products and expressive web experiences — combining backend engineering, clean interfaces and a strong eye for detail.</p>
        <div className="hero-in hero-in-3 mt-8 flex flex-wrap justify-center gap-3"><button onClick={() => scrollToId("work")} className="primary-pill">View projects <ArrowUpRight size={14} /></button><button onClick={() => scrollToId("contact")} className="outline-pill">Let&apos;s talk</button><a href="/resume.pdf" download="Linuka-Bandara-Resume.pdf" className="outline-pill">Resume <Download size={14} /></a></div>
        <button onClick={() => scrollToId("about")} className="hero-in hero-in-4 hero-scroll" aria-label="Scroll to about section">Scroll to explore <ArrowDown size={12} /></button>
      </div>
    </section>
  );
}
