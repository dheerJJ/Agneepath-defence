import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, title, dark, children }: { eyebrow?: string; title: string; dark?: boolean; children?: ReactNode }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {eyebrow && <p className="mb-3 inline-block rounded-full border border-saffron/50 px-3.5 sm:px-4 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-saffron">{eyebrow}</p>}
      <h2 className={cn("text-3xl sm:text-5xl md:text-6xl uppercase leading-none break-words", dark ? "text-cream" : "text-ink")}>{title}</h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-saffron" />
      {children && <div className={cn("mt-4 text-sm sm:text-base", dark ? "text-cream/70" : "text-muted-foreground")}>{children}</div>}
    </Reveal>
  );
}

export function DemoTag({ children }: { children: ReactNode }) {
  return <span className="inline-block rounded-md border border-gold/60 bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">{children}</span>;
}

export function BtnPrimary({ className, ...p }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...p} className={cn("inline-flex items-center justify-center gap-2 rounded-full bg-gradient-saffron px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-ink shadow-glow transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} />;
}
export function BtnGhost({ className, ...p }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...p} className={cn("inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/70 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-cream transition hover:border-saffron hover:text-saffron focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)} />;
}
