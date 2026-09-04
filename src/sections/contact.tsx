import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { Reveal } from "@/components/reveal";

const whatsappUrl = "https://wa.me/94764577717";
// Instagram handle
const instagramUrl = "https://www.instagram.com/_linu_ka";

export function Contact() {
  return (
    <section id="contact" className="contact-section scroll-mt-24 border-t border-white/[0.055] px-page py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal className="contact-panel">
          <div className="contact-radar" aria-hidden="true"><span /><span /><span /></div>
          <p className="section-kicker">Open channel / 05</p>
          <h2 className="contact-title">Have something<br /><span>worth building?</span></h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-500">For freelance work, collaborations, internships or an idea that needs a thoughtful build — reach out directly.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="mailto:Linukaipad@gmail.com" className="primary-pill"><Mail size={14} /> Email me</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-pill"><WhatsappIcon size={15} /> WhatsApp</a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.06] pt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600">
            <a href="https://github.com/LinukaBandara" target="_blank" rel="noreferrer" className="social-link"><Github size={14} /> GitHub</a>
            <a href="https://www.linkedin.com/in/linukabandara/" target="_blank" rel="noreferrer" className="social-link"><Linkedin size={14} /> LinkedIn</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-link"><Instagram size={14} /> Instagram</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
