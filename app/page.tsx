import Navbar from "@/components/Navbar";
import HeroParallaxSequence from "@/components/HeroParallaxSequence";
import StickyGridScroll from "@/components/StickyGridScroll";
import WhatChangesSection from "@/components/WhatChangesSection";
import MarbleCollectionsSection from "@/components/MarbleCollectionsSection";
import OurShowroomSection from "@/components/OurShowroomSection";
import Experience3DCarouselSection from "@/components/Experience3DCarouselSection";
import ShowroomBentoGridSection from "@/components/ShowroomBentoGridSection";
import ArchitecturalBannerSlider from "@/components/ArchitecturalBannerSlider";
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
      <MarbleCollectionsSection />
      <OurShowroomSection />
      <Experience3DCarouselSection />
      <ArchitecturalBannerSlider />
      {/* Generous white background separation space between Banner and Showroom Bento Grid */}
      <div className="w-full h-24 sm:h-36 lg:h-44 bg-white" />
      <ShowroomBentoGridSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}




