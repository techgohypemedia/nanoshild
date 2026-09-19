"use client";

import { ArrowRight, Phone } from "lucide-react";
import { openConsultationModal } from "@/components/ConsultationModal";

export default function HeroParallaxSequence() {
  const handleQuoteClick = () => {
    openConsultationModal({
      title: "Request a Free Quote & Assessment",
      subtitle: "Protect your stone with our certified 8mil optical film. Guaranteed for 10 years.",
    });
  };

  return (
    <div
      id="hero-track"
      className="relative min-h-svh w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Video (Natural video display with black shade removed) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/nanoshild_parallax_frames_web/frames/frame_0001.webp"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/Nanoshieldhd%20video.mp4" type="video/mp4" />
      </video>

      {/* Main Hero Content - Simple, Elegant, Light Font Weight */}
      <div className="relative z-20 mx-auto w-full max-w-4xl px-5 sm:px-8 text-center pt-16 sm:pt-20">
        {/* Simple Headline with Reduced Font Weight */}
        <h1 className="mx-auto text-[clamp(2.4rem,5.5vw,4.75rem)] font-light tracking-[-0.03em] text-white leading-[1.08] [text-shadow:0_2px_18px_rgba(0,0,0,0.8),0_1px_4px_rgba(0,0,0,0.9)] mb-6">
          <span className="block font-light">Enjoy Your Marble</span>
          <span className="mt-2 block text-[0.75em] font-light text-white/95">
            Without Rules, Stress or{" "}
            <span className="font-serif italic text-[#50b8ae]">
              Regret.
            </span>
          </span>
        </h1>

        {/* Simple, Clean Subtitle */}
        <p className="mx-auto max-w-xl text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed text-balance [text-shadow:0_1px_8px_rgba(0,0,0,0.8)] mb-8 sm:mb-9">
          Invisible 8mil optical-grade protective film engineered specifically for luxury marble, quartzite &amp; natural stone. Complete defense against acid etching, wine stains, and daily wear.
        </p>

        {/* Minimalist, Clean CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleQuoteClick}
            className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#50b8ae] hover:bg-[#61cac0] px-7 text-[#042422] font-medium text-sm transition-all duration-200 shadow-lg cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          <a
            href="tel:1300626674"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-white/30 hover:border-white/60 bg-black/25 hover:bg-black/40 px-6 text-white font-normal text-sm backdrop-blur-md transition-all duration-200"
          >
            <Phone className="h-3.5 w-3.5 text-[#50b8ae]" />
            <span className="tracking-wide">1300 NANOSHIELD</span>
          </a>
        </div>
      </div>
    </div>
  );
}
