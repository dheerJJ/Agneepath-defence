// All course content in one place – edit freely.
export type CourseCategory = "Defence Forces" | "Police & CAPF" | "School Entrance" | "Tuition";
export type Course = { id: string; title: string; tagline: string; category: CourseCategory; icon: string; topics: string[] };

export const categories = ["All", "Defence Forces", "Police & CAPF", "School Entrance", "Tuition"] as const;

export const courses: Course[] = [
  { id: "01", title: "Indian Army Recruitment Program", tagline: "Army Agniveer & Other Army Entry Examinations", category: "Defence Forces", icon: "Shield",
    topics: ["Agniveer General Duty (GD)", "Agniveer Technical", "Agniveer Clerk / Store Keeper Technical", "Other Army Recruitment Examinations"] },
  { id: "02", title: "Indian Air Force Preparation Program", tagline: "Air Force Recruitment & Selection Preparation", category: "Defence Forces", icon: "Plane",
    topics: ["Air Force Group X", "Air Force Group Y"] },
  { id: "03", title: "Indian Navy Preparation Program", tagline: "Navy Recruitment & Selection Preparation", category: "Defence Forces", icon: "Anchor",
    topics: ["Navy MR", "Navy SSR"] },
  { id: "04", title: "NDA & Officer Entry Program", tagline: "National Defence Academy – Written & Selection Preparation", category: "Defence Forces", icon: "Star",
    topics: ["NDA Army Wing", "NDA Naval Wing", "NDA Air Force Wing", "Written Examination Preparation", "SSB-Oriented Foundation Training"] },
  { id: "05", title: "SSC GD & CAPF Preparation Program", tagline: "Central Armed Police Forces Recruitment", category: "Police & CAPF", icon: "ShieldCheck",
    topics: ["SSC GD", "BSF", "CISF", "CRPF", "ITBP", "SSB", "Assam Rifles", "Other CAPF Recruitment Examinations"] },
  { id: "06", title: "Police Recruitment Program", tagline: "Central & State Police Recruitment Preparation", category: "Police & CAPF", icon: "BadgeCheck",
    topics: ["Delhi Police", "State Police", "Constable Recruitment"] },
  { id: "07", title: "Sainik School Entrance Preparation", tagline: "Sainik School Admission – Academic & Foundation Training", category: "School Entrance", icon: "Medal",
    topics: ["Sainik School Entrance Preparation", "Class VI Admission Preparation", "Class IX Admission Preparation", "Mathematics", "Intelligence & Reasoning", "Language Preparation", "General Knowledge", "Practice Papers & Mock Tests", "Interview & Personality Development Foundation"] },
  { id: "08", title: "Military School Entrance Preparation", tagline: "Rashtriya Military Schools – Entrance Preparation", category: "School Entrance", icon: "Award",
    topics: ["Military School Entrance Preparation", "Class VI Admission Preparation", "Class IX Admission Preparation", "Mathematics", "Intelligence & Reasoning", "Language & General Knowledge", "Previous-Year Questions", "Mock Tests & Practice Tests", "Interview & Personality Development Foundation"] },
  { id: "09", title: "Navodaya Vidyalaya Entrance Preparation", tagline: "Jawahar Navodaya Vidyalaya – Entrance Preparation", category: "School Entrance", icon: "GraduationCap",
    topics: ["JNVST Preparation", "Class VI Admission Preparation", "Mental Ability", "Arithmetic", "Language Test", "Topic-Wise Practice", "Previous-Year Questions", "Regular Mock Tests", "Speed & Accuracy Development"] },
  { id: "10", title: "Tuition Classes", tagline: "Nursery to Class 12th", category: "Tuition", icon: "BookOpen",
    topics: ["Nursery to Class 12th"] },
];
