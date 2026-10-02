import { Activity, Dumbbell, Footprints, Gauge, Timer, Trophy, Users, Zap, Medal, Flag, ClipboardCheck, MapPin, CheckCircle2, Sun, BookOpen, Bed, Clock, Target } from "lucide-react";
import { useSite } from "./SiteContext";
import { DemoTag, Reveal, SectionTitle } from "./ui";
import { images, routine } from "@/data/config";

const fitness = ["Running & Endurance Training", "Sprint & Speed Development", "Strength & Stamina Training", "Push-Ups & Sit-Ups", "Long Jump & High Jump Practice", "Agility & Coordination Training", "Physical Efficiency Test (PET) Preparation", "Regular Fitness Assessment"];

export function Fitness() {
  const { tr } = useSite();
  return (
    <section id="training" className="relative bg-ink py-20 text-cream md:py-28">
      <div className="camo absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <Reveal className="relative">
          {/* REPLACE WITH CLIENT PHOTO */}
          <img src={images.fitness} alt="Cadets doing push-ups during physical training" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card" />
          <div className="absolute bottom-3 right-3 sm:-bottom-5 sm:right-6 rounded-2xl bg-gradient-saffron px-4 py-3 sm:px-5 sm:py-4 text-ink shadow-glow">
            <div className="font-display text-2xl sm:text-3xl leading-none">DAILY PT</div>
            <div className="text-[10px] sm:text-xs font-semibold uppercase">Every single morning</div>
          </div>
        </Reveal>
        <div>
          <SectionTitle eyebrow="Get selection-ready" title={tr.fitness} dark />
          <ul className="grid gap-3 sm:grid-cols-2">
            {fitness.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <li className="flex items-center gap-3 rounded-xl border border-cream/10 bg-olive/60 px-4 py-3 transition hover:border-saffron">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-saffron" /><span className="text-sm font-medium">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const sports = [
  [Activity, "Athletics Training"], [Footprints, "Running & Track Practice"], [Sun, "Outdoor Sports"], [Users, "Team Games"],
  [Zap, "Speed & Agility Development"], [Dumbbell, "Strength & Conditioning"], [Trophy, "Sports-Based Fitness Training"],
] as const;

export function Sports() {
  const { tr } = useSite();
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="Beyond the classroom" title={tr.sports} />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {sports.map(([I, label], i) => (
            <Reveal key={label} delay={i * 0.05}>
              <div className="h-full rounded-2xl border-2 border-transparent bg-card p-4 sm:p-5 shadow-card transition hover:-translate-y-1 hover:border-saffron">
                <I className="h-7 w-7 sm:h-8 sm:w-8 text-olive" /><p className="mt-3 text-xs sm:text-sm font-semibold">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-ink">
            {/* REPLACE WITH CLIENT PHOTO */}
            <img src={images.boxing} alt="Boxer training on heavy bag" loading="lazy" width={1280} height={832} className="absolute inset-0 h-full w-full object-cover opacity-50" />
            <div className="relative grid gap-6 p-6 sm:p-8 md:p-12 md:grid-cols-[1.4fr_1fr] md:items-end">
              <div>
                <DemoTag>Sample text</DemoTag>
                <h3 className="mt-3 text-3xl sm:text-5xl md:text-7xl uppercase leading-none text-cream">🥊 Boxing <span className="text-saffron">Training</span></h3>
                <p className="mt-4 max-w-lg text-sm sm:text-base text-cream/85">Technique, footwork, conditioning and discipline for beginners to competitive athletes.</p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {["Technique", "Footwork", "Sparring", "Conditioning"].map((t) => <span key={t} className="rounded-full border border-saffron/60 bg-ink/60 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-cream">{t}</span>)}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const infra = [
  [Flag, "Dedicated Physical Training Ground"], [Footprints, "Running & Athletics Practice Area"], [Dumbbell, "Strength & Conditioning Facilities"],
  [Target, "Physical Test Practice Area"], [Gauge, "Regular Performance Assessment"],
] as const;

export function Infrastructure() {
  const { tr } = useSite();
  return (
    <section id="facilities" className="clip-diagonal relative bg-olive py-20 sm:py-28 md:py-36 text-cream">
      <div className="topo absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="Facilities" title={tr.infra} dark />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {infra.map(([I, label], i) => (
            <Reveal key={label} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-cream/15 bg-ink/40 p-5 sm:p-6 text-center transition hover:border-saffron">
                <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full border-2 border-gold bg-ink text-saffron"><I className="h-6 w-6 sm:h-7 sm:w-7" /></div>
                <p className="mt-4 text-sm sm:text-base font-semibold">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const hostel = [[Bed, "Residential Hostel Accommodation"], [Clock, "Structured Daily Routine"], [BookOpen, "Supervised Study Hours"], [Timer, "Scheduled Physical Training"]] as const;

export function Hostel() {
  const { tr } = useSite();
  return (
    <section id="hostel" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="Live. Learn. Train." title={tr.hostel} />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            {/* REPLACE WITH CLIENT PHOTO */}
            <Reveal><img src={images.hostel} alt="Hostel room with bunk beds and study desks" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" /></Reveal>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hostel.map(([I, l]) => (
                <div key={l} className="flex items-center gap-3 rounded-xl bg-card p-3.5 sm:p-4 shadow-card">
                  <I className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-saffron" /><span className="text-xs sm:text-sm font-semibold">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="rounded-3xl bg-ink p-5 sm:p-8 text-cream">
              <h3 className="text-2xl sm:text-3xl uppercase">Sample Daily Routine</h3>
              <div className="mt-1"><DemoTag>Sample schedule – to be confirmed by academy</DemoTag></div>
              <ol className="relative mt-6 border-l-2 border-saffron/40 pl-6">
                {routine.map(([time, act]) => (
                  <li key={time} className="relative pb-4 last:pb-0 flex items-baseline flex-wrap sm:flex-nowrap gap-1.5 sm:gap-3">
                    <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-saffron bg-ink" />
                    <span className="font-display text-lg sm:text-xl text-saffron shrink-0 min-w-[65px]">{time}</span>
                    <span className="text-xs sm:text-sm text-cream/90">{act}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  [Medal, "Discipline", "A structured routine that builds character, punctuality and self-control."],
  [BookOpen, "Education", "Expert faculty, focused study material and regular mock tests."],
  [Dumbbell, "Fitness", "Daily physical training designed for selection standards."],
  [ClipboardCheck, "Confidence", "Interview, personality and leadership development for every cadet."],
] as const;

export function WhyUs() {
  const { tr } = useSite();
  return (
    <section className="relative bg-ink py-20 text-cream md:py-28">
      <div className="camo absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="The Agneepath way" title={tr.why} dark />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([I, t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-cream/10 bg-olive/50 p-5 sm:p-7 transition hover:-translate-y-1 hover:border-saffron">
                <I className="h-8 w-8 sm:h-10 sm:w-10 text-saffron" />
                <h3 className="mt-4 sm:mt-5 text-3xl sm:text-4xl uppercase">{t}</h3>
                <p className="mt-2 text-xs sm:text-sm text-cream/75">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <p className="font-display text-2xl sm:text-4xl tracking-widest text-gold"><MapPin className="mr-2 inline h-6 w-6 sm:h-7 sm:w-7" />…all leading to PREPARATION.</p>
        </Reveal>
      </div>
    </section>
  );
}
