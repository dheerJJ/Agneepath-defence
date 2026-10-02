import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowUp, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { courses } from "@/data/courses";
import { careerPaths, contact } from "@/data/config";
import { useSite } from "./SiteContext";
import { BtnPrimary, DemoTag, SectionTitle } from "./ui";

const field = "w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/30";

export function EnquiryForm({ defaultCourse = "", onDone }: { defaultCourse?: string; onDone?: () => void }) {
  const [v, setV] = useState({ name: "", phone: "", parent: "", course: defaultCourse, qual: "", message: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  useEffect(() => setV((x) => ({ ...x, course: defaultCourse })), [defaultCourse]);
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (v.name.trim().length < 2) er.name = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\D/g, "").slice(-10)) || v.phone.replace(/\D/g, "").length < 10) er.phone = "Enter a valid 10-digit mobile number";
    if (!v.course) er.course = "Please select a course";
    setErr(er);
    if (Object.keys(er).length) return;
    toast.success("Thank you! We will contact you shortly (demo – no data is sent)");
    setV({ name: "", phone: "", parent: "", course: "", qual: "", message: "" });
    onDone?.();
  };
  const E = ({ k }: { k: string }) => err[k] ? <p className="mt-1 text-xs text-destructive">{err[k]}</p> : null;

  return (
    <form onSubmit={submit} noValidate className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
      <div><label className="mb-1 block text-sm font-semibold" htmlFor="f-name">Name *</label><input id="f-name" className={field} value={v.name} onChange={set("name")} maxLength={80} /><E k="name" /></div>
      <div><label className="mb-1 block text-sm font-semibold" htmlFor="f-phone">Phone *</label><input id="f-phone" type="tel" inputMode="numeric" className={field} value={v.phone} onChange={set("phone")} maxLength={14} /><E k="phone" /></div>
      <div><label className="mb-1 block text-sm font-semibold" htmlFor="f-parent">Parent's Name</label><input id="f-parent" className={field} value={v.parent} onChange={set("parent")} maxLength={80} /></div>
      <div><label className="mb-1 block text-sm font-semibold" htmlFor="f-qual">Current Class / Qualification</label><input id="f-qual" className={field} value={v.qual} onChange={set("qual")} maxLength={60} /></div>
      <div className="sm:col-span-2"><label className="mb-1 block text-sm font-semibold" htmlFor="f-course">Course Interested In *</label>
        <select id="f-course" className={field} value={v.course} onChange={set("course")}>
          <option value="">Select a course</option>
          <option value="Free Demo Class">Free Demo Class</option>
          {courses.map((c) => <option key={c.id} value={c.title}>{c.id} – {c.title}</option>)}
          <option value="Boxing Training">Boxing Training</option>
        </select><E k="course" /></div>
      <div className="sm:col-span-2"><label className="mb-1 block text-sm font-semibold" htmlFor="f-msg">Message</label><textarea id="f-msg" rows={3} className={field} value={v.message} onChange={set("message")} maxLength={500} /></div>
      <BtnPrimary type="submit" className="w-full sm:col-span-2">Submit Enquiry</BtnPrimary>
    </form>
  );
}

export function EnquiryModal() {
  const { enquiryOpen, closeEnquiry, enquiryCourse } = useSite();
  return (
    <Dialog open={enquiryOpen} onOpenChange={(o) => !o && closeEnquiry()}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl sm:text-3xl uppercase">Admission Enquiry</DialogTitle>
          <DialogDescription>Fill in your details and our team will call you back.</DialogDescription>
        </DialogHeader>
        <EnquiryForm defaultCourse={enquiryCourse} onDone={closeEnquiry} />
      </DialogContent>
    </Dialog>
  );
}

export function Contact() {
  const { tr } = useSite();
  const items = [
    [Phone, "Phone", contact.phone, contact.phoneHref], [MessageCircle, "WhatsApp", contact.phone, contact.whatsapp],
    [Mail, "Email", contact.email, `mailto:${contact.email}`], [MapPin, "Address", contact.address, undefined],
  ] as const;
  return (
    <section id="contact" className="relative bg-ink py-20 text-cream md:py-28">
      <div className="camo absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="Admissions open" title={tr.contact} dark />
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl bg-cream p-5 sm:p-8 text-ink shadow-card"><EnquiryForm /></div>
          <div className="grid gap-4">
            <div className="flex items-center gap-2"><DemoTag>Placeholder contact details</DemoTag></div>
            {items.map(([I, label, val, href]) => (
              <a key={label} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-cream/10 bg-olive/50 p-3.5 sm:p-4 transition hover:border-saffron">
                <div className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-gradient-saffron text-ink"><I className="h-5 w-5" /></div>
                <div className="min-w-0 flex-1"><p className="text-xs uppercase tracking-wider text-cream/60">{label}</p><p className="truncate font-semibold text-sm sm:text-base">{val}</p></div>
              </a>
            ))}
            {/* Google Map placeholder – REPLACE with embed iframe */}
            <div className="topo grid min-h-44 sm:min-h-48 flex-1 place-items-center rounded-2xl border-2 border-dashed border-cream/25 bg-olive/40 p-5 sm:p-6 text-center">
              <div><MapPin className="mx-auto h-7 w-7 sm:h-8 sm:w-8 text-saffron" /><p className="mt-2 font-semibold text-sm sm:text-base">Google Map</p><p className="text-xs text-cream/60">Map embed will appear here</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { tr } = useSite();
  return (
    <footer className="border-t-4 border-gold bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-display text-3xl tracking-wider"><span aria-hidden>🪖</span>AGNEEPATH</p>
          <p className="text-xs uppercase tracking-[0.18em] text-saffron">Defence & Boxing Academy</p>
          <p className="mt-4 text-sm text-cream/70">Comprehensive academic, physical and residential training for defence, police and school entrance aspirants.</p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube].map((I, k) => <a key={k} href="#" aria-label="Social link (placeholder)" className="rounded-full border border-cream/20 p-2 hover:border-saffron hover:text-saffron"><I className="h-4 w-4" /></a>)}
          </div>
        </div>
        <div>
          <h4 className="font-display text-xl tracking-wider text-saffron">Quick Links</h4>
          <ul className="mt-3 grid gap-2 text-sm text-cream/75">
            {(Object.entries(tr.nav)).map(([id, l]) => <li key={id}><a href={`#${id}`} className="hover:text-saffron">{l}</a></li>)}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h4 className="font-display text-xl tracking-wider text-saffron">Courses</h4>
          <ul className="mt-3 grid gap-2 text-sm text-cream/75 sm:grid-cols-2">
            {courses.map((c) => <li key={c.id}><a href="#courses" className="hover:text-saffron">{c.title}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-6 text-center">
        <p className="font-display text-xs sm:text-base tracking-[0.1em] sm:tracking-[0.2em] text-gold leading-relaxed break-words">{careerPaths.join(" • ")}</p>
        <p className="mt-2 text-xs text-cream/50">© 2026 Agneepath Defence & Boxing Academy. Demo website.</p>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 flex flex-col items-end gap-2.5 sm:gap-3">
      {show && <button onClick={() => window.scrollTo({ top: 0 })} aria-label="Back to top" className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-cream/20 bg-olive text-cream shadow-card hover:bg-olive-light"><ArrowUp className="h-5 w-5" /></button>}
      <a href={contact.phoneHref} aria-label="Call now" className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-gradient-saffron text-ink shadow-card transition hover:scale-110"><Phone className="h-6 w-6 sm:h-7 sm:w-7" /></a>
      <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-whatsapp text-ink shadow-card transition hover:scale-110"><MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" /></a>
    </div>
  );
}
