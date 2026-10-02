import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { icons, Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { categories, courses, type Course } from "@/data/courses";
import { useSite } from "./SiteContext";
import { BtnPrimary, SectionTitle } from "./ui";
import { cn } from "@/lib/utils";

function CourseIcon({ name, className }: { name: string; className?: string }) {
  const I = icons[name as keyof typeof icons] ?? icons.Shield;
  return <I className={className} />;
}

export function Courses() {
  const { tr, openEnquiry } = useSite();
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [sel, setSel] = useState<Course | null>(null);
  const list = cat === "All" ? courses : courses.filter((c) => c.category === cat);

  return (
    <section id="courses" className="relative py-20 md:py-28">
      <div className="topo absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="10 Programs" title={tr.courses}>Structured preparation for defence, police and school entrance — with academics, fitness and mentorship.</SectionTitle>
        <div className="-mx-4 mb-8 sm:mb-10 overflow-x-auto px-4" role="tablist">
          <div className="flex w-max min-w-full justify-start sm:justify-center gap-2 pb-1">
            {categories.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
                className={cn("whitespace-nowrap rounded-full border px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition", cat === c ? "border-olive bg-olive text-cream" : "border-border bg-card text-foreground hover:border-saffron")}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((c) => (
              <motion.article layout key={c.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="group relative flex flex-col rounded-2xl border-2 border-transparent bg-card p-5 sm:p-6 shadow-card transition hover:-translate-y-1 hover:border-saffron">
                <div className="flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-olive text-saffron"><CourseIcon name={c.icon} className="h-7 w-7" /></div>
                  <span className="font-display text-4xl sm:text-5xl text-muted">{c.id}</span>
                </div>
                <h3 className="mt-4 text-xl sm:text-2xl uppercase leading-tight">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.topics.slice(0, 3).map((t) => <span key={t} className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium">{t}</span>)}
                  {c.topics.length > 3 && <span className="rounded-full px-2 py-1 text-xs text-muted-foreground">+{c.topics.length - 3} more</span>}
                </div>
                <div className="mt-auto flex gap-2 pt-6">
                  <button onClick={() => setSel(c)} className="flex-1 rounded-full border-2 border-olive px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-olive transition hover:bg-olive hover:text-cream text-center">View Details</button>
                  <button onClick={() => openEnquiry(c.title)} className="flex-1 rounded-full bg-gradient-saffron px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-ink text-center">Enquire</button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!sel} onOpenChange={(o) => !o && setSel(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          {sel && (<>
            <DialogHeader>
              <div className="mb-2 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-olive text-saffron"><CourseIcon name={sel.icon} className="h-6 w-6" /></div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold">{sel.category}</span>
              </div>
              <DialogTitle className="font-display text-3xl uppercase">{sel.id} · {sel.title}</DialogTitle>
              <DialogDescription>{sel.tagline}</DialogDescription>
            </DialogHeader>
            <ul className="grid gap-2">
              {sel.topics.map((t) => <li key={t} className="flex gap-2 rounded-lg bg-muted px-3 py-2 text-sm"><Check className="h-4 w-4 shrink-0 text-olive" />{t}</li>)}
            </ul>
            <BtnPrimary className="w-full" onClick={() => { const n = sel.title; setSel(null); openEnquiry(n); }}>Enquire about this course</BtnPrimary>
          </>)}
        </DialogContent>
      </Dialog>
    </section>
  );
}
