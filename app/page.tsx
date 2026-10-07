import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroParallaxSequence from "@/components/HeroParallaxSequence";
import WhatChangesSection from "@/components/WhatChangesSection";
import BenchtopLifestyleSection from "@/components/BenchtopLifestyleSection";
import ProtectionBenefitsSection from "@/components/ProtectionBenefitsSection";
import StoneTeamSection from "@/components/StoneTeamSection";
import VideoTestSection from "@/components/VideoTestSection";
import StoneApplicationsSection from "@/components/StoneApplicationsSection";
import MarbleProtectionSection from "@/components/MarbleProtectionSection";
import Testimonial3DCarouselSection from "@/components/Testimonial3DCarouselSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export const metadata: Metadata = {
  title: "Australia's Leading Marble Protection Film | NanoShield HD",
  description:
    "Protect your natural stone with NanoShield HD marble protection film. Installation in Melbourne, Sydney and Brisbane. Get your benchtop protection quote.",
};

// Section order follows the client's homepage copy document
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar />
      <HeroParallaxSequence />
      <WhatChangesSection />
      <BenchtopLifestyleSection />
      <ProtectionBenefitsSection />
      <StoneTeamSection />
      <VideoTestSection />
      <StoneApplicationsSection />
      <MarbleProtectionSection />
      <Testimonial3DCarouselSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <ConsultationModal />
    </main>
  );
}
