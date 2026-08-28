import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { scrollToId } from "@/components/smooth-scroll";

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-10 border-b border-white/[0.06] pb-10 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <p className="footer-mark">LB<span>/26</span></p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600">Software engineering, full-stack development and interface craft — built from Sri Lanka for the web.</p>
          </div>
          <div>
            <p className="footer-label">Navigate</p>
            <div className="mt-4 grid gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
              <button onClick={() => scrollToId("about")} className="footer-link">About</button>
              <button onClick={() => scrollToId("work")} className="footer-link">Projects</button>
              <button onClick={() => scrollToId("github")} className="footer-link">GitHub</button>
            </div>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <div className="mt-4 flex gap-2">
              <a className="footer-icon" href="https://github.com/linuka7" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
              <a className="footer-icon" href="https://www.linkedin.com/in/linukabandara/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
              <a className="footer-icon" href="mailto:Linukaipad@gmail.com" aria-label="Email"><Mail size={15} /></a>
              <a className="footer-icon" href="https://wa.me/94764577717" target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsappIcon size={15} /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-700">© 2026 Linuka Bandara · Designed & built with intention.</p>
          <button onClick={() => scrollToId("top")} className="back-top">Back to top <ArrowUp size={13} /></button>
        </div>
      </div>
    </footer>
  );
}
