import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/components/smooth-scroll";

const links = [
  { id: "top", label: "Home" }, { id: "about", label: "About" }, { id: "education", label: "Education" },
  { id: "work", label: "Projects" }, { id: "github", label: "GitHub" }, { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 18); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const go = (id: string) => { setOpen(false); scrollToId(id); };

  return <>
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-7 md:pt-5">
      <div className={cn("nav-shell", scrolled && "nav-shell-scrolled")}>
        <a href="#top" className="nav-brand" onClick={(e) => { e.preventDefault(); go("top"); }}><span>LB</span><i /></a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => <a key={link.id} href={`#${link.id}`} className="nav-link" onClick={(e) => { e.preventDefault(); go(link.id); }}>{link.label}</a>)}
          <a href="/resume.pdf" download="Linuka-Bandara-Resume.pdf" className="nav-cta ml-1 hidden lg:inline-flex"><Download size={12} /> Resume</a>
        </div>
        <button type="button" className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
    </nav>
    <div className={cn("mobile-nav", open ? "mobile-nav-open" : "mobile-nav-closed")} aria-hidden={!open}>
      <div className="mx-auto flex h-full max-w-md flex-col justify-center px-6">
        {links.map((link, i) => <a key={link.id} href={`#${link.id}`} className="mobile-nav-link" onClick={(e) => { e.preventDefault(); go(link.id); }}><span>0{i + 1}</span>{link.label}</a>)}
        <a href="/resume.pdf" download="Linuka-Bandara-Resume.pdf" className="mobile-nav-link" onClick={() => setOpen(false)}><span>0{links.length + 1}</span>Resume</a>
      </div>
    </div>
  </>;
}
