import Navbar from "@/components/Navbar";
import HeroParallaxSequence from "@/components/HeroParallaxSequence";
import StickyGridScroll from "@/components/StickyGridScroll";
import WhatChangesSection from "@/components/WhatChangesSection";
import MarbleCollectionsSection from "@/components/MarbleCollectionsSection";
import OurShowroomSection from "@/components/OurShowroomSection";
import ArchitecturalBannerSlider from "@/components/ArchitecturalBannerSlider";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar />
      <HeroParallaxSequence />
      <StickyGridScroll />
      <WhatChangesSection />
      <MarbleCollectionsSection />
      <OurShowroomSection />
      <ArchitecturalBannerSlider />
      <FaqSection />
      <ContactSection />
      <Footer />
      <ConsultationModal />
    </main>
  );
}




