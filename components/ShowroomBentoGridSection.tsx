"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ShowroomBentoGridSection() {
  return (
    <section
      id="experience-bento"
      className="relative w-full bg-[#f8f6f2] text-[#1c1917] p-0 m-0 overflow-hidden select-none"
      aria-label="Showroom & Legacy Experience"
    >
      {/* Edge-to-Edge 100% Full-Width Bento Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-1 bg-[#eae7e1]">
        
        {/* ========================================================= */}
        {/* LEFT 50%: Pure Full-Bleed Autoplay Showroom Video        */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[660px] xl:h-[720px] bg-black overflow-hidden rounded-none">
          {/* Embedded YouTube Showroom Video (Pure Clean Autoplay Loop, No Text, No Curved Corners) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-none">
            <iframe
              src="https://www.youtube.com/embed/7zqNx66uOMM?autoplay=1&mute=1&loop=1&playlist=7zqNx66uOMM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&enablejsapi=1"
              title="NanoShield Showroom Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] object-cover scale-110 pointer-events-none border-0 rounded-none"
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT 50%: 2x2 Architectural Bento Grid (Sharp Edges)     */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-1 w-full h-full">
          
          {/* ----------------- TILE 1: ARCHITECTURAL FACADE & LOGO ----------------- */}
          <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[328px] xl:h-[358px] bg-[#222a35] p-6 sm:p-8 flex flex-col justify-between overflow-hidden rounded-none text-white">
            {/* Architectural Stone Elevation Background */}
            <div className="absolute inset-0 z-0 rounded-none">
              <Image
                src="/contact-room.jpg"
                alt="NanoShield Architecture"
                fill
                className="object-cover object-center brightness-110 contrast-105 rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 rounded-none" />
            </div>

            {/* Official Brand Logo */}
            <div className="relative z-10">
              <div className="relative h-12 w-44 sm:h-14 sm:w-52">
                <Image
                  src="/logo/NanoShield Logo - Dark Bg.png"
                  alt="NanoShield"
                  fill
                  className="object-contain object-left drop-shadow-md"
                />
              </div>
            </div>

            {/* Architectural Name Plate */}
            <div className="relative z-10 text-white">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold tracking-widest uppercase font-sans drop-shadow-md leading-tight">
                NANOSHIELD
              </h4>
              <p className="text-[11px] sm:text-xs tracking-[0.25em] text-stone-200 uppercase font-semibold mt-1">
                MARBLES & PROTECTION (P) LTD.
              </p>
              <div className="w-12 h-1 bg-[#50b8ae] mt-2 rounded-none" />
            </div>
          </div>

          {/* ----------------- TILE 2: A LEGACY OF MARBLE (SINCE 1990) ----------------- */}
          <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[328px] xl:h-[358px] bg-gradient-to-br from-[#dfb97e] via-[#cfa05d] to-[#b3803d] p-6 sm:p-8 flex flex-col justify-between overflow-hidden rounded-none text-stone-900">
            {/* Marble Gold Texture Overlay */}
            <div className="absolute inset-0 z-0 rounded-none">
              <Image
                src="/marble-gold-texture.jpg"
                alt="Legacy of Marble"
                fill
                className="object-cover object-center opacity-40 mix-blend-overlay rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#82531d]/60 via-transparent to-white/30 pointer-events-none rounded-none" />
            </div>

            {/* Typography: A Legacy of Marble */}
            <div className="relative z-10">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-950/90 uppercase block mb-1">
                A Legacy of Marble
              </span>
              <h3
                className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-white tracking-tight leading-none drop-shadow-md"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Since 1990
              </h3>
            </div>

            {/* Bottom Subtitle */}
            <div className="relative z-10">
              <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed max-w-[210px] drop-shadow-sm">
                Over 30 years of Italian stone heritage & master craftsmanship.
              </p>
            </div>
          </div>

          {/* ----------------- TILE 3: EXPERIENCE CENTERS (Client Favorite Teal Background #50b8ae) ----------------- */}
          <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[328px] xl:h-[358px] bg-gradient-to-br from-[#50b8ae] via-[#3fa69c] to-[#258277] p-6 sm:p-8 flex flex-col justify-between overflow-hidden rounded-none text-white border border-[#72d4ca]/30 shadow-lg">
            {/* Subtle ambient lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_70%)] pointer-events-none rounded-none" />

            {/* Pill Button */}
            <div className="relative z-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/90 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#258277] transition-all duration-300 shadow-md rounded-none cursor-pointer"
              >
                <span>Experience Centers</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Description */}
            <div className="relative z-10">
              <p className="text-sm sm:text-base font-semibold text-white leading-snug max-w-[230px] drop-shadow-sm">
                Discover products that define luxury, all under one roof.
              </p>
            </div>
          </div>

          {/* ----------------- TILE 4: 500+ STONES (Vibrant Multi-Color Slabs) ----------------- */}
          <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[328px] xl:h-[358px] bg-stone-900 p-6 sm:p-8 flex flex-col justify-end overflow-hidden rounded-none text-white">
            {/* Multi-Colored Vertical Slabs */}
            <div className="absolute inset-0 z-0 flex rounded-none">
              <div className="w-1/5 h-full relative border-r border-black/20">
                <Image src="/collections/onyx-2.jpg" alt="Emerald Green Onyx" fill className="object-cover" />
              </div>
              <div className="w-1/5 h-full relative border-r border-black/20">
                <Image src="/collections/black-marquina-2.jpg" alt="Exotic Sodalite" fill className="object-cover brightness-110" />
              </div>
              <div className="w-1/5 h-full relative border-r border-black/20">
                <Image src="/marble-calacatta-hd.jpg" alt="Statuario Calacatta" fill className="object-cover brightness-105" />
              </div>
              <div className="w-1/5 h-full relative border-r border-black/20">
                <Image src="/collections/onyx-1.jpg" alt="Golden Onyx" fill className="object-cover brightness-110" />
              </div>
              <div className="w-1/5 h-full relative">
                <Image src="/collections/travertine-1.jpg" alt="Beige Travertine" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-none" />
            </div>

            {/* Title & Subtitle */}
            <div className="relative z-10">
              <h3
                className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-none drop-shadow-lg"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                500+ Stones
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 font-medium tracking-wide mt-1.5 drop-shadow-md">
                Endless Possibilities
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
