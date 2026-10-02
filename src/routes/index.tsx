import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteProvider } from "@/components/site/SiteContext";
import { AnnouncementBar, Navbar } from "@/components/site/Navbar";
import { CareerMarquee, Hero } from "@/components/site/Hero";
import { Courses } from "@/components/site/Courses";
import { Fitness, Hostel, Infrastructure, Sports, WhyUs } from "@/components/site/Training";
import { FAQ, Gallery, Testimonials } from "@/components/site/Social";
import { Contact, EnquiryModal, FloatingActions, Footer } from "@/components/site/Contact";

const title = "Agneepath Defence & Boxing Academy | Army, Navy, Air Force, NDA, Police & Sainik School Coaching";
const description = "Residential defence coaching in Jaipur for Army Agniveer, Air Force, Navy, NDA, SSC GD, Police, Sainik, Military School & Navodaya entrance — with daily physical training and boxing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteProvider>
      <AnnouncementBar />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <CareerMarquee />
        <Courses />
        <Fitness />
        <Sports />
        <Infrastructure />
        <Hostel />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <EnquiryModal />
      <Toaster position="top-center" richColors />
    </SiteProvider>
  );
}
