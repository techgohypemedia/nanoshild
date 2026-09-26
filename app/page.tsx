import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroParallaxSequence from "@/components/HeroParallaxSequence";
import StickyGridScroll from "@/components/StickyGridScroll";
import WhatChangesSection from "@/components/WhatChangesSection";
import TeamExpertiseSection from "@/components/TeamExpertiseSection";
import MarbleCollectionsSection from "@/components/MarbleCollectionsSection";
import OurShowroomSection from "@/components/OurShowroomSection";
import StoneApplicationsSection from "@/components/StoneApplicationsSection";
import ArchitecturalBannerSlider from "@/components/ArchitecturalBannerSlider";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export const metadata: Metadata = {
  title: "Australia’s Leading Marble Protection Film | NanoShield HD",
  description:
    "Protect your natural stone with NanoShield HD marble protection film. Installation in Melbourne, Sydney and Brisbane. Get your benchtop protection quote.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar />
      <HeroParallaxSequence />
      <StickyGridScroll />
      <WhatChangesSection />
      <TeamExpertiseSection />
      <MarbleCollectionsSection />
      <OurShowroomSection />
      <StoneApplicationsSection />
      <ArchitecturalBannerSlider />
      <FaqSection />
      <ContactSection />
      <Footer />
      <ConsultationModal />
    </main>
  );
}




