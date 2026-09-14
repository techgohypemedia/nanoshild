"use client";

import Image from "next/image";
import { Search, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { openConsultationModal } from "@/components/ConsultationModal";

export default function StickyGridScroll() {

  const handleConsultationClick = () => {
    openConsultationModal({
      title: "Book Your Stone Consultation",
      subtitle: "Experience authentic NanoShield HD protection for your marble and natural stone surfaces.",
      stoneType: "Calacatta / Carrara Marble",
    });
  };

  const handleQuoteClick = () => {
    openConsultationModal({
      title: "Request a Free Custom Quote",
      subtitle: "Tell us about your space and stone surfaces for an accurate, tailored estimate.",
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
    <div id="narrative-story" className="w-full bg-white text-[#1f242b] relative">
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: THE DILEMMA                                        */}
      {/* Natural scrolling, 2-column luxury editorial layout           */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Prominent Luxury Marble Visual */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[401/390] max-w-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-stone-200/90 group bg-stone-100">
              <Image
                src="/marble-kitchen-island.jpg"
                alt="Luxury Calacatta Gold Marble Island Countertop"
                fill
                sizes="(max-width: 1024px) 95vw, 620px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Dilemma Copy & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left items-start max-w-xl">
            {/* Brand Logo - Official NanoShield HD Logo */}
            <div className="relative h-10 w-48 sm:h-11 sm:w-52 mb-4 sm:mb-5">
              <Image
                src="/logo/NanoShield Logo - White Bg.png"
                alt="NanoShield HD"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Dilemma Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-[#1f242e] tracking-tight leading-[1.15] mb-4 sm:mb-5">
              You Didn’t Choose Marble
              <br className="hidden sm:inline" />
              {" "}to Tiptoe Around it
            </h2>

            {/* Dilemma Copy Container */}
            <div className="space-y-3 sm:space-y-4 text-stone-600 text-sm sm:text-[15px] lg:text-base leading-relaxed w-full">
              <p className="text-stone-500 font-normal">
                You chose it for its beauty. Its light. Its timelessness.
              </p>

              {/* Highlight narrative box */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border-l-3 border-[#50b8ae] text-[#1f242e] font-medium text-sm sm:text-[15px] leading-snug">
                But somewhere between installation day and everyday life, that joy quietly turned into tension.
              </div>

              <p className="text-stone-500">
                Coffee mugs placed carefully. Kids told to &ldquo;be careful.&rdquo; Guests watched instead of welcomed.
              </p>

              <p className="text-stone-400 italic text-xs sm:text-sm">
                And a constant, low-level worry every time the light hits the bench at the wrong angle.
              </p>

              {/* Punchline */}
              <div className="pt-3 border-t border-stone-200/90 w-full">
                <p className="text-sm sm:text-base font-bold text-[#1f242e] tracking-tight">
                  NanoShield HD exists to end that feeling — completely.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-7">
              <button
                type="button"
                onClick={handleConsultationClick}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#50b8ae] hover:bg-[#3ea399] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#50b8ae]/30 hover:shadow-xl transition-all duration-300 active:scale-[0.98] cursor-pointer group"
              >
                <Search className="w-4 h-4 text-white stroke-[2.5]" />
                <span>Book Your Consultation Today</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: THE FREEDOM                                        */}
      {/* Natural scrolling, relaxed luxury living editorial layout      */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#faf8f5] border-t border-stone-100">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Freedom Narrative Copy & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left items-start max-w-xl order-2 lg:order-1">
            {/* Freedom Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#50b8ae]/15 border border-[#50b8ae]/30 text-[#1a6660] text-xs sm:text-[13px] font-semibold tracking-wider uppercase mb-4 sm:mb-5 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#20837a]" />
              <span>Real Marble Protection</span>
            </div>

            {/* Freedom Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-[#1f242e] tracking-tight leading-[1.15] mb-4 sm:mb-5">
              Imagine Not Thinking
              <br className="hidden sm:inline" />
              {" "}About Your Benchtop Anymore
            </h2>

            {/* Freedom Description */}
            <div className="space-y-3 sm:space-y-4 text-stone-600 text-sm sm:text-[15px] lg:text-base leading-relaxed w-full">
              <p className="text-stone-500 font-normal">
                Not checking it when the light hits. Not bracing yourself after a spill. Not hovering when someone sets a glass down.
              </p>

              {/* Highlight narrative callout */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#50b8ae]/10 border-l-3 border-[#20837a] text-[#1f242e] font-medium text-sm sm:text-[15px] leading-snug">
                You place your coffee mug down without thinking. Prep food directly on the bench. Wipe spills and move on.
              </div>

              <p className="text-stone-400 italic text-xs sm:text-sm">
                Kids eat, guests cook, life happens — and nothing feels fragile.
              </p>

              {/* Punchline */}
              <div className="pt-3 border-t border-stone-200/90 w-full">
                <p className="text-sm sm:text-base font-bold text-[#1f242e]">
                  The marble looks exactly the same. But the tension is gone.
                </p>
                <div className="flex items-center gap-2 text-sm sm:text-base text-[#20837a] font-semibold mt-1">
                  <Check className="w-4 h-4 text-[#20837a] stroke-[3]" />
                  <span>That’s what real protection feels like.</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-7">
              <button
                type="button"
                onClick={handleQuoteClick}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#50b8ae] hover:bg-[#3ea399] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#50b8ae]/30 hover:shadow-xl transition-all duration-300 active:scale-[0.98] cursor-pointer group"
              >
                <Search className="w-4 h-4 text-white stroke-[2.5]" />
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Joyful Living Luxury Marble Visual */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[401/390] max-w-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-stone-200/90 group bg-stone-100">
              <Image
                src="/marble-family-freedom.jpg"
                alt="Joyful Family Living and Dining on Protected Marble Island"
                fill
                sizes="(max-width: 1024px) 95vw, 620px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
