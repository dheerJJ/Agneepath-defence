import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useSite } from "./SiteContext";
import { BtnGhost, BtnPrimary, DemoTag } from "./ui";
import { careerPaths, images, stats } from "@/data/config";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0; const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Hero() {
  const { tr, openEnquiry } = useSite();
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      {/* REPLACE WITH CLIENT PHOTO */}
      <img src={images.hero} alt="Defence aspirants running in formation at sunrise" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="camo absolute inset-0 opacity-30 mix-blend-multiply" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:pt-28 md:pb-24">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-2xl sm:rounded-full border border-saffron/50 bg-ink/50 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-saffron">
          🇮🇳 Comprehensive Academic • Physical • Residential Training
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.95] text-cream break-words">
          {tr.heroTitle.split(" ").map((w, i) => <span key={i} className={i % 2 ? "text-saffron" : ""}>{w} </span>)}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-2xl text-base text-cream/85 sm:text-lg">
          <strong className="text-cream">One Academy • Multiple Career Paths</strong> — {careerPaths.slice(0, -1).join(" • ").replace("NAVODAYA VIDYALAYA", "")} • Navodaya
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <BtnPrimary className="w-full sm:w-auto" onClick={() => document.getElementById("courses")?.scrollIntoView()}>{tr.explore} <ChevronRight className="h-4 w-4" /></BtnPrimary>
          <BtnGhost className="w-full sm:w-auto text-center" onClick={() => openEnquiry("Free Demo Class")}>{tr.demo}</BtnGhost>
        </motion.div>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-cream/15 bg-ink/60 p-3.5 sm:p-5 backdrop-blur">
              <div className="font-display text-3xl sm:text-5xl text-saffron"><Counter to={s.value} suffix={s.suffix} /></div>
              <div className="mt-1 text-[11px] sm:text-sm font-medium uppercase tracking-wider text-cream/80">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-3"><DemoTag>Demo values</DemoTag></div>
      </div>
    </section>
  );
}

export function CareerMarquee() {
  const items = [...careerPaths, ...careerPaths];
  return (
    <div className="overflow-hidden border-y-4 border-gold bg-olive py-3 sm:py-4" aria-label="Career paths">
      <div className="animate-marquee flex w-max gap-4">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-3 sm:gap-4 whitespace-nowrap font-display text-xl sm:text-2xl tracking-widest text-cream">
            {c} <span className="text-saffron">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
