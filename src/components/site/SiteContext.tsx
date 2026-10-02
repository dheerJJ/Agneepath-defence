import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

export const t = {
  en: {
    nav: { home: "Home", courses: "Courses", training: "Training", facilities: "Facilities", hostel: "Hostel", results: "Results", gallery: "Gallery", contact: "Contact" },
    apply: "Apply Now",
    heroTitle: "Discipline. Education. Fitness. Confidence.",
    explore: "Explore Courses", demo: "Book Free Demo Class",
    courses: "Our Course Categories", fitness: "Physical Fitness & Selection Training", sports: "Sports & Athletics Development",
    infra: "Training Infrastructure", hostel: "Residential & Hostel Facilities", why: "Why Choose Us", results: "Results & Testimonials",
    gallery: "Gallery", faq: "Frequently Asked Questions", contact: "Enquire Now",
  },
  hi: {
    nav: { home: "होम", courses: "कोर्स", training: "ट्रेनिंग", facilities: "सुविधाएँ", hostel: "हॉस्टल", results: "परिणाम", gallery: "गैलरी", contact: "संपर्क" },
    apply: "अभी आवेदन करें",
    heroTitle: "अनुशासन. शिक्षा. फिटनेस. आत्मविश्वास.",
    explore: "कोर्स देखें", demo: "फ्री डेमो क्लास बुक करें",
    courses: "हमारे कोर्स", fitness: "शारीरिक फिटनेस एवं चयन प्रशिक्षण", sports: "खेल एवं एथलेटिक्स विकास",
    infra: "प्रशिक्षण सुविधाएँ", hostel: "आवासीय एवं हॉस्टल सुविधाएँ", why: "हमें क्यों चुनें", results: "परिणाम एवं अनुभव",
    gallery: "गैलरी", faq: "अक्सर पूछे जाने वाले प्रश्न", contact: "पूछताछ करें",
  },
};

type Ctx = {
  lang: Lang; setLang: (l: Lang) => void; tr: (typeof t)["en"];
  enquiryOpen: boolean; enquiryCourse: string; openEnquiry: (course?: string) => void; closeEnquiry: () => void;
};
const SiteCtx = createContext<Ctx | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [enquiryOpen, setOpen] = useState(false);
  const [enquiryCourse, setCourse] = useState("");
  return (
    <SiteCtx.Provider value={{
      lang, setLang, tr: t[lang], enquiryOpen, enquiryCourse,
      openEnquiry: (c = "") => { setCourse(c); setOpen(true); },
      closeEnquiry: () => setOpen(false),
    }}>{children}</SiteCtx.Provider>
  );
}
export const useSite = () => {
  const c = useContext(SiteCtx);
  if (!c) throw new Error("useSite outside provider");
  return c;
};
