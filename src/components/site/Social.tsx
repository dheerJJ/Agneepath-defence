import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, gallery, testimonials } from "@/data/config";
import { useSite } from "./SiteContext";
import { DemoTag, Reveal, SectionTitle } from "./ui";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { tr } = useSite();
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000); return () => clearInterval(id); }, []);
  const t = testimonials[i];
  return (
    <section id="results" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle eyebrow="Voices" title={tr.results}><DemoTag>Sample testimonials for demo</DemoTag></SectionTitle>
        <div className="relative overflow-hidden rounded-3xl bg-card p-6 sm:p-8 md:p-12 shadow-card">
          <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-saffron" />
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-olive font-display text-xl text-saffron">{t.name[0]}</div>
                <div><p className="font-semibold text-sm sm:text-base">{t.name}</p><p className="text-xs sm:text-sm text-muted-foreground">{t.course}</p></div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">{testimonials.map((_, k) => <button key={k} aria-label={`Testimonial ${k + 1}`} onClick={() => setI(k)} className={cn("h-2 rounded-full transition-all", k === i ? "w-8 bg-saffron" : "w-2 bg-border")} />)}</div>
            <div className="flex gap-2">
              <button aria-label="Previous" onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)} className="rounded-full border p-2 hover:border-saffron"><ChevronLeft className="h-5 w-5" /></button>
              <button aria-label="Next" onClick={() => setI((i + 1) % testimonials.length)} className="rounded-full border p-2 hover:border-saffron"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const { tr } = useSite();
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? gallery : gallery.filter((g) => g.cat === cat);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") setOpen((o) => (o! + 1) % list.length); if (e.key === "ArrowLeft") setOpen((o) => (o! - 1 + list.length) % list.length); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [open, list.length]);
  return (
    <section id="gallery" className="clip-diagonal-top bg-olive py-20 sm:py-28 md:py-32 text-cream">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="Life at Agneepath" title={tr.gallery} dark />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {["All", "Training", "Boxing", "Classroom", "Hostel"].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={cn("rounded-full border px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold transition", cat === c ? "border-saffron bg-saffron text-ink" : "border-cream/30 hover:border-saffron")}>{c}</button>
          ))}
        </div>
        <div className="columns-2 gap-3 sm:columns-2 md:columns-3 lg:columns-4">
          {list.map((g, k) => (
            <button key={g.alt} onClick={() => setOpen(k)} className="group relative mb-3 block w-full overflow-hidden rounded-xl break-inside-avoid">
              {/* REPLACE WITH CLIENT PHOTO */}
              <img src={g.src} alt={g.alt} loading="lazy" className={cn("w-full object-cover transition duration-500 group-hover:scale-105", k % 3 === 0 ? "aspect-[3/4]" : "aspect-square")} />
              <span className="absolute bottom-2 left-2 rounded-full bg-ink/80 px-2.5 py-0.5 text-xs font-semibold">{g.cat}</span>
            </button>
          ))}
        </div>
      </div>
      {open !== null && list[open] && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-4" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute right-4 top-4 rounded-full bg-olive p-2" onClick={() => setOpen(null)}><X /></button>
          <img src={list[open].src} alt={list[open].alt} className="max-h-[85vh] max-w-full rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

export function FAQ() {
  const { tr } = useSite();
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle eyebrow="Got questions?" title={tr.faq} />
        <Reveal>
          <Accordion type="single" collapsible className="grid gap-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`} className="rounded-xl border bg-card px-5 shadow-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
