"use client";

import Image from "next/image";
import { Search, Check, ArrowRight, ShieldCheck, Eye } from "lucide-react";
import { openConsultationModal } from "@/components/ConsultationModal";

export default function WhatChangesSection() {
  const handleConsultationClick = () => {
    openConsultationModal({
      title: "Book a Consultation & Live Demo",
      subtitle: "See NanoShield HD in action and discover how our invisible protection transforms your marble care.",
    });
  };

  const scrollToQuote = () => {
    const el = document.getElementById("quote");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "quote";
    }
  };

  return (
    <section
      id="what-changes-section"
      className="relative w-full bg-[#f8f9fa] text-[#1f242e] py-12 sm:py-16 lg:py-20 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-stone-200/90 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ============================================================ */}
          {/* COLUMN 1: EDITORIAL HEADLINE & CTA (4 COLS)                  */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 sm:space-y-8 pr-0 lg:pr-4">
            <div className="space-y-5 sm:space-y-6">
              {/* Brand Logo */}
              <div className="relative h-10 w-48 sm:h-11 sm:w-52">
                <Image
                  src="/logo/NanoShield Logo - White Bg.png"
                  alt="NanoShield HD"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1f242e] tracking-tight leading-[1.12]">
                What Changes
                <br />
                After Installation?
              </h2>

              {/* Narrative Statements */}
              <div className="space-y-3.5 sm:space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed max-w-md">
                <p className="text-stone-500">
                  At first glance, it may feel like nothing has changed.
                </p>
                <p className="text-[#1f242e] font-semibold text-base sm:text-[17px] leading-snug">
                  But the difference shows up in how the space supports everyday life.
                </p>
              </div>
            </div>

            {/* Signature CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleConsultationClick}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-[#50b8ae] hover:bg-[#3ea399] text-white font-semibold text-[15px] sm:text-[16px] shadow-lg shadow-[#50b8ae]/30 hover:shadow-xl hover:shadow-[#50b8ae]/40 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-4 h-4 text-white stroke-[2.5]" />
                <span>Book a Consultation &amp; Demo</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: "VISUALLY" CARD (4 COLS)                           */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 md:p-9 border border-stone-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-stone-400 uppercase mb-3">
                <Eye className="w-3.5 h-3.5 text-stone-400" />
                <span>Appearance</span>
              </div>

              {/* Title & Punchline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1f242e] tracking-tight">
                Visually
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 mb-5 tracking-tight">
                Nothing.
              </p>

              {/* Lead-in */}
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                Your benchtop:
              </p>

              {/* Bullets List */}
              <ul className="space-y-3 text-stone-600 text-sm sm:text-[15px] leading-normal">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 shrink-0" />
                  <span>Looks exactly the same</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 shrink-0" />
                  <span>Has no haze, cloudiness or plastic finish</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 shrink-0" />
                  <span>Reflects light naturally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 shrink-0" />
                  <span>Shows no visible edges or seams</span>
                </li>
              </ul>
            </div>

            {/* Testimonial Quote Box */}
            <div className="mt-8 pt-5 border-t border-stone-100 bg-stone-50/70 -mx-3 sm:-mx-4 -mb-3 sm:-mb-4 p-4 sm:p-5 rounded-xl">
              <p className="text-xs font-medium text-stone-400 mb-1">
                Most people say:
              </p>
              <p className="text-base sm:text-[17px] font-semibold italic text-[#1f242e] tracking-tight">
                &ldquo;It still looks like marble&rdquo;
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#50b8ae] mt-1">
                Because it does.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 3: "FUNCTIONALLY" CARD (4 COLS) - Teal Hero Card      */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#50b8ae] via-[#3fa69c] to-[#258277] text-white rounded-2xl p-6 sm:p-8 md:p-9 border border-[#7de1d7]/40 shadow-[0_16px_40px_rgba(80,184,174,0.25)] hover:shadow-[0_22px_50px_rgba(80,184,174,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Glass Highlight Sheen */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_70%)] pointer-events-none" />

            {/* Subtle floating glow accent */}
            <div
              className="absolute -bottom-20 -right-20 w-44 h-44 rounded-full pointer-events-none opacity-30 blur-2xl bg-white"
            />

            <div className="relative z-10">
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-white uppercase mb-3 bg-white/20 border border-white/35 px-3 py-1 rounded-full backdrop-blur-sm shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                <span>Performance</span>
              </div>

              {/* Title & Punchline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Functionally
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-white mt-1 mb-5 tracking-tight drop-shadow-xs">
                Everything.
              </p>

              {/* Lead-in */}
              <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">
                You:
              </p>

              {/* Bullets List */}
              <ul className="space-y-3 text-white/95 text-sm sm:text-[15px] leading-normal font-normal">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 mt-0.5 backdrop-blur-xs shadow-xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </span>
                  <span>Place cups down without hesitation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 mt-0.5 backdrop-blur-xs shadow-xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </span>
                  <span>Prep food directly on the bench</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 mt-0.5 backdrop-blur-xs shadow-xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </span>
                  <span>Wipe spills and move on</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 mt-0.5 backdrop-blur-xs shadow-xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </span>
                  <span>Stop policing kids and guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 mt-0.5 backdrop-blur-xs shadow-xs">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </span>
                  <span className="text-white font-semibold">You don&apos;t manage your benchtop anymore.</span>
                </li>
              </ul>
            </div>

            {/* Performance Peace of Mind Badge */}
            <div className="relative z-10 mt-7 pt-5 border-t border-white/25 flex items-center gap-3">
              <span className="text-xs text-white/90 font-medium">
                100% Acid, Wine &amp; Scratch Immune
              </span>
              <span className="h-1.5 flex-1 bg-black/20 rounded-full overflow-hidden">
                <span className="block h-full bg-white w-full rounded-full shadow-xs" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
