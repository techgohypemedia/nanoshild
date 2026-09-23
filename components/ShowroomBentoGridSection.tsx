"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { openConsultationModal } from "@/components/ConsultationModal";

export default function ShowroomBentoGridSection() {
  const handleDemoClick = () => {
    openConsultationModal({
      title: "Book a Live Film Demo",
      subtitle: "See wine, lemon, and acid tested live on protected marble samples in your kitchen.",
    });
  };

  return (
    <section
      id="experience-bento"
      className="relative w-full bg-[#f8f6f2] text-[#1c1917] p-0 m-0 overflow-hidden select-none"
      aria-label="NanoShield Experience and Surface Protection"
    >
      {/* Edge-to-Edge 100% Full-Width Bento Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-1 bg-[#eae7e1]">
        
        {/* ========================================================= */}
        {/* LEFT 50%: Pure Full-Bleed Autoplay Demonstration Video   */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[660px] xl:h-[720px] bg-black overflow-hidden rounded-none">
          {/* Embedded Demonstration Video (Hydrophobic water beading & protection live demo) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-none">
            <iframe
              src="https://www.youtube.com/embed/7zqNx66uOMM?autoplay=1&mute=1&loop=1&playlist=7zqNx66uOMM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&enablejsapi=1"
              title="NanoShield Surface Protection Demonstration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] object-cover scale-110 pointer-events-none border-0 rounded-none"
            />
          </div>

          {/* Live Video Indicator Badge */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#50b8ae] animate-pulse" />
            <span>Live Film Demonstration</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT 50%: 2x2 Architectural Bento Grid                   */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-1 w-full h-full">
          
          {/* ----------------- TILE 1: BRAND IDENTITY & FILM INSTALLATION ----------------- */}
          <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[328px] xl:h-[358px] bg-[#222a35] p-6 sm:p-8 flex flex-col justify-between overflow-hidden rounded-none text-white">
            {/* Architectural Stone Interior Background */}
            <div className="absolute inset-0 z-0 rounded-none">
              <Image
                src="/contact-room.jpg"
                alt="NanoShield Certified Protection"
                fill
                className="object-cover object-center brightness-110 contrast-105 rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35 rounded-none" />
            </div>

            {/* Official Brand Logo */}
            <div className="relative z-10">
              <div className="relative h-12 w-44 sm:h-14 sm:w-52">
                <Image
                  src="/logo/NanoShield Logo - Dark Bg.png"
                  alt="NanoShield HD"
                  fill
                  className="object-contain object-left drop-shadow-md"
                />
              </div>
            </div>

            {/* Verified Installation Nameplate */}
            <div className="relative z-10 text-white">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold tracking-widest uppercase font-sans drop-shadow-md leading-tight">
                NANOSHIELD HD™
              </h4>
              <p className="text-[11px] sm:text-xs tracking-[0.2em] text-[#72d4ca] uppercase font-semibold mt-1">
                THE INVISIBLE MARBLE FILM
              </p>
              <p className="text-[11px] sm:text-xs text-stone-300/90 mt-1 font-light">
                Certified Film Applicators Across Australia
              </p>
              <div className="w-12 h-1 bg-[#50b8ae] mt-2 rounded-none" />
            </div>
          </div>

          {/* ----------------- TILE 2: 10-YEAR SURFACE WARRANTY ----------------- */}
          <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[328px] xl:h-[358px] bg-[#1e2329] p-6 sm:p-8 flex flex-col justify-between overflow-hidden rounded-none text-white">
            {/* Real Luxury Calacatta Kitchen Image */}
            <div className="absolute inset-0 z-0 rounded-none">
              <Image
                src="/marble-peace.png"
                alt="10-Year Protected Calacatta Kitchen"
                fill
                className="object-cover object-center rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35 pointer-events-none rounded-none" />
            </div>

            {/* Typography: Certified Warranty */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold tracking-wider text-[#62cfc4] uppercase mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Certified Film Warranty</span>
              </span>
              <h3
                className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-white tracking-tight leading-none drop-shadow-md mt-1"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                10-Year Guarantee
              </h3>
            </div>

            {/* Bottom Subtitle */}
            <div className="relative z-10">
              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed max-w-[240px] drop-shadow-sm">
                Complete defense against acid etching, stains, yellowing, and scratches.
              </p>
            </div>
          </div>

          {/* ----------------- TILE 3: IN-HOME LIVE DEMO (Signature Teal #50b8ae) ----------------- */}
          <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[328px] xl:h-[358px] bg-gradient-to-br from-[#50b8ae] via-[#3fa69c] to-[#258277] p-6 sm:p-8 flex flex-col justify-between overflow-hidden rounded-none text-white border border-[#72d4ca]/30 shadow-lg">
            {/* Subtle ambient lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_70%)] pointer-events-none rounded-none" />

            {/* Action Button */}
            <div className="relative z-10">
              <button
                type="button"
                onClick={handleDemoClick}
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/90 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#258277] transition-all duration-300 shadow-md rounded-none cursor-pointer"
              >
                <span>Free Film Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <div className="relative z-10">
              <h4 className="text-base sm:text-lg font-bold text-white leading-tight mb-1">
                Live In-Home Demo
              </h4>
              <p className="text-xs sm:text-sm text-white/90 leading-snug max-w-[230px] font-normal">
                See wine, lemon, and acid tested live on protected marble samples in your kitchen.
              </p>
            </div>
          </div>

          {/* ----------------- TILE 4: UNIVERSAL STONE FILM COMPATIBILITY ----------------- */}
          <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[328px] xl:h-[358px] bg-stone-900 p-6 sm:p-8 flex flex-col justify-end overflow-hidden rounded-none text-white">
            {/* Multi-Colored Vertical Slabs */}
            <div className="absolute inset-0 z-0 flex rounded-none">
              <div className="w-1/5 h-full relative border-r border-black/20">
                <Image src="/collections/onyx-2.jpg" alt="Emerald Onyx" fill className="object-cover" />
              </div>
              <div className="w-1/5 h-full relative border-r border-black/20">
                <Image src="/collections/black-marquina-1.jpg" alt="Nero Marquina" fill className="object-cover brightness-110" />
              </div>
              <div className="w-1/5 h-full relative border-r border-black/20">
                <Image src="/marble-calacatta-hd.jpg" alt="Calacatta Gold" fill className="object-cover brightness-105" />
              </div>
              <div className="w-1/5 h-full relative border-r border-black/20">
                <Image src="/collections/onyx-1.jpg" alt="Amber Onyx" fill className="object-cover brightness-110" />
              </div>
              <div className="w-1/5 h-full relative">
                <Image src="/collections/travertine-1.jpg" alt="Italian Travertine" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-none" />
            </div>

            {/* Title & Subtitle */}
            <div className="relative z-10">
              <span className="text-[11px] font-semibold tracking-wider text-[#62cfc4] uppercase block mb-1">
                Universal Compatibility
              </span>
              <h3
                className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-none drop-shadow-lg"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Protects Any Stone
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 font-medium tracking-wide mt-1.5 drop-shadow-md">
                Custom-installed over marble, quartzite, onyx &amp; travertine.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
