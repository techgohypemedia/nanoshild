import Navbar from "@/components/Navbar";
import HeroParallaxSequence from "@/components/HeroParallaxSequence";
import StickyGridScroll from "@/components/StickyGridScroll";
import WhatChangesSection from "@/components/WhatChangesSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar />
      <HeroParallaxSequence />
      <StickyGridScroll />
      <WhatChangesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}



