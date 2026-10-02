import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useSite } from "./SiteContext";
import { BtnPrimary } from "./ui";
import { cn } from "@/lib/utils";

const ids = ["home", "courses", "training", "facilities", "hostel", "results", "gallery", "contact"] as const;

export function AnnouncementBar() {
  const { openEnquiry } = useSite();
  return (
    <div className="bg-gradient-saffron px-4 py-2 text-center text-xs font-semibold text-ink sm:text-sm">
      Admissions Open – Limited Seats <span className="hidden sm:inline">| Residential & Day Scholar Batches</span>{" "}
      <button onClick={() => openEnquiry()} className="ml-2 underline underline-offset-2 hover:no-underline">Enquire Now →</button>
    </div>
  );
}

export function Navbar() {
  const { tr, lang, setLang, openEnquiry } = useSite();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-40 border-b border-cream/10 transition", scrolled ? "bg-ink/95 backdrop-blur" : "bg-ink")}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3" aria-label="Main">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="text-xl sm:text-2xl" aria-hidden>🪖</span>
          <span className="min-w-0 leading-none">
            <span className="block font-display text-xl sm:text-2xl tracking-wider text-cream">AGNEEPATH</span>
            <span className="block truncate text-[10px] uppercase tracking-[0.18em] text-saffron">Defence & Boxing Academy</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {ids.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={cn("rounded-md px-3 py-2 text-sm font-medium transition", active === id ? "text-saffron" : "text-cream/80 hover:text-cream")}>{tr.nav[id]}</a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-2">
          <button onClick={() => setLang(lang === "en" ? "hi" : "en")} className="rounded-full border border-cream/30 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-cream hover:border-saffron" aria-label="Toggle language">
            {lang === "en" ? "हिं" : "EN"}
          </button>
          <BtnPrimary onClick={() => openEnquiry()} className="hidden px-5 py-2.5 sm:inline-flex">{tr.apply}</BtnPrimary>
          <button className="rounded-md p-2 text-cream lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-cream/10 bg-ink px-4 pb-5 lg:hidden">
          <ul className="grid gap-1 py-3">
            {ids.map((id) => (
              <li key={id}><a onClick={() => setOpen(false)} href={`#${id}`} className={cn("block rounded-md px-3 py-2.5 font-medium", active === id ? "bg-olive text-saffron" : "text-cream/85")}>{tr.nav[id]}</a></li>
            ))}
          </ul>
          <BtnPrimary className="w-full" onClick={() => { setOpen(false); openEnquiry(); }}>{tr.apply}</BtnPrimary>
        </div>
      )}
    </header>
  );
}
