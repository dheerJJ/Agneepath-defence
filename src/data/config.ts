// All placeholder values live here. Every item marked "DEMO – REPLACE" must be updated with real client data.
import hero from "@/assets/hero.jpg"; // REPLACE WITH CLIENT PHOTO
import boxing from "@/assets/boxing.jpg"; // REPLACE WITH CLIENT PHOTO
import fitness from "@/assets/fitness.jpg"; // REPLACE WITH CLIENT PHOTO
import hostel from "@/assets/hostel.jpg"; // REPLACE WITH CLIENT PHOTO
import classroom from "@/assets/classroom.jpg"; // REPLACE WITH CLIENT PHOTO

export const images = { hero, boxing, fitness, hostel, classroom };

export const contact = {
  phone: "+91 XXXXX XXXXX", // DEMO – REPLACE
  phoneHref: "tel:+910000000000", // DEMO – REPLACE
  whatsapp: "https://wa.me/910000000000", // DEMO – REPLACE
  email: "info@agneepathacademy.example", // DEMO – REPLACE
  address: "Academy address, Jaipur, Rajasthan", // DEMO – REPLACE
};

// DEMO – REPLACE: stat values
export const stats = [
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 10, suffix: "+", label: "Courses" },
  { value: 100, suffix: "%", label: "Residential Support" },
  { value: 365, suffix: "", label: "Days Physical Training" },
];

// DEMO – REPLACE: fictional testimonials
export const testimonials = [
  { name: "Rohit S.", course: "Agniveer GD", text: "The daily PT and mock tests made me confident for both physical and written exams. The discipline here changed my life." },
  { name: "Priya M.", course: "Sainik School – Class VI", text: "My daughter cleared the entrance thanks to the regular practice papers and caring teachers. The hostel felt like home." },
  { name: "Aman K.", course: "SSC GD", text: "Running sessions every morning helped me clear the PET with ease. Teachers explained every topic patiently." },
  { name: "Vikram R.", course: "Boxing Training", text: "Coaches focus on technique and fitness. I won my first district bout within a year of joining." },
];

export const careerPaths = ["ARMY", "AIR FORCE", "NAVY", "NDA", "CAPF", "POLICE", "SAINIK SCHOOL", "MILITARY SCHOOL", "NAVODAYA VIDYALAYA"];

// DEMO – REPLACE: generic FAQ answers
export const faqs = [
  { q: "Who is eligible to join?", a: "Students from Class 5 onwards and aspirants preparing for defence, police and school entrance exams can join. Eligibility depends on the course chosen." },
  { q: "Is hostel facility available?", a: "Yes, residential hostel accommodation is available with a structured routine and supervised study hours." },
  { q: "What are the batch timings?", a: "Morning, evening and residential batches are available. Exact timings will be shared by the academy." },
  { q: "Do you conduct mock tests?", a: "Yes, regular mock tests, previous-year papers and topic-wise practice are part of every course." },
  { q: "Is physical training included?", a: "Daily physical training including running, strength and PET preparation is included for defence and police courses." },
  { q: "Can I join only for boxing?", a: "Yes, boxing training is available for beginners as well as competitive athletes as a standalone program." },
];

export const routine = [
  ["5:00 AM", "Wake-up"], ["5:30 AM", "Physical Training"], ["7:30 AM", "Breakfast"], ["9:00 AM", "Classes"],
  ["1:00 PM", "Lunch"], ["2:00 PM", "Classes"], ["4:30 PM", "Sports / Boxing"], ["6:30 PM", "Supervised Study"],
  ["8:30 PM", "Dinner"], ["10:00 PM", "Lights Out"],
];

// Gallery – REPLACE WITH CLIENT PHOTOS
export const gallery = [
  { src: hero, cat: "Training", alt: "Cadets running at sunrise" },
  { src: boxing, cat: "Boxing", alt: "Boxer training on a heavy bag" },
  { src: classroom, cat: "Classroom", alt: "Students in a defence coaching class" },
  { src: hostel, cat: "Hostel", alt: "Hostel room with bunk beds and desks" },
  { src: fitness, cat: "Training", alt: "Cadets doing push-ups" },
  { src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=900&q=70", cat: "Boxing", alt: "Boxing gloves" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=70", cat: "Classroom", alt: "Classroom desks" },
  { src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=70", cat: "Training", alt: "Athletics track" },
];
