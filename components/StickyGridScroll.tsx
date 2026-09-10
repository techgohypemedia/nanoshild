"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, ArrowRight, ShieldCheck, ChevronUp } from "lucide-react";

// 12 curated images celebrating luxury marble kitchens, stone surfaces, and lifestyle living
const GRID_ITEMS = [
  {
    id: 1,
    src: "/marble-living.png",
    alt: "Calacatta Marble Curved Waterfall Kitchen Island",
  },
  {
    id: 2,
    src: "/nanoshield_parallax_frames_web/frame_0020.webp",
    alt: "Pristine High-Gloss Protected Stone Reflection",
  },
  {
    id: 3,
    src: "/grid/coffee-cup.jpg",
    alt: "Morning Coffee on Flawless Statuario Marble Island",
  },
  {
    id: 4,
    src: "/nanoshield_parallax_frames_web/frame_0060.webp",
    alt: "Superhydrophobic Water Beading on Marble",
  },
  {
    id: 5,
    src: "/marble-peace.png",
    alt: "Warm Rustic Luxury Kitchen with Marble Countertop",
  },
  {
    id: 6,
    src: "/grid/food-prep.jpg",
    alt: "Carefree Culinary Prep with Oil and Sourdough on Carrara",
  },
  {
    id: 7,
    src: "/nanoshield_parallax_frames_web/frame_0080.webp",
    alt: "Wine, Oil and Acid Stain Repulsion",
  },
  {
    id: 8,
    src: "/grid/wine-glass.jpg",
    alt: "Evening Red Wine Glass on Calacatta Stone Without Worry",
  },
  {
    id: 9,
    src: "/nanoshield_parallax_frames_web/frame_0100.webp",
    alt: "Deep Natural Marble Veining and Clarity",
  },
  {
    id: 10,
    src: "/grid/lemon-cutting.jpg",
    alt: "Fresh Lemon Slicing with 100% Acid Etch Protection",
  },
  {
    id: 11,
    src: "/nanoshield_parallax_frames_web/frame_0086.webp",
    alt: "Ultra-Durable 8mil NanoShield Protection",
  },
  {
    id: 12,
    src: "/grid/family-living.jpg",
    alt: "Lively Family Breakfast and Kitchen Living on Marble",
  },
];

export default function StickyGridScroll() {
  const blockRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const phase1Ref = useRef<HTMLDivElement>(null);
  const phase2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const block = blockRef.current;
    const grid = gridRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    const phase1 = phase1Ref.current;
    const phase2 = phase2Ref.current;

    if (!block || !grid || items.length < 12 || !phase1 || !phase2) return;

    // Center point for 3x4 grid explosion math
    const totalColumns = 3;
    const totalRows = 4;
    const centerX = (totalColumns - 1) / 2;
    const centerY = (totalRows - 1) / 2;

    const baseDistance = 850;

    // Initial positioning of grid items off-screen
    items.forEach((item, index) => {
      const col = index % totalColumns;
      const row = Math.floor(index / totalColumns);
      const dirX = col - centerX;
      const dirY = row - centerY;
      const dist = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
      const normX = dirX / dist;
      const normY = dirY / dist;

      const randomSpread = 0.8 + ((index * 7) % 5) * 0.1;
      const startX = normX * baseDistance * randomSpread;
      const startY = normY * baseDistance * randomSpread;

      gsap.set(item, {
        x: startX,
        y: startY,
        opacity: 0,
        scale: 0.7,
        force3D: true,
      });
    });

    // Phase 1 (Dilemma) starts visible
    gsap.set(phase1, { opacity: 1, y: 0 });
    // Phase 2 (Freedom) starts hidden
    gsap.set(phase2, { opacity: 0, y: 30 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // -------------------------------------------------------------
      // ACT 1 (0 -> 0.35): Phase 1 Dilemma fades out as grid converges
      // -------------------------------------------------------------
      tl.to(
        phase1,
        {
          opacity: 0,
          y: -40,
          scale: 0.96,
          ease: "power2.inOut",
          duration: 0.35,
        },
        0
      );

      // Grid items fly in and lock into pristine 3x4 gallery
      items.forEach((item, index) => {
        const staggerDelay = (index % 3) * 0.03 + Math.floor(index / 3) * 0.02;

        tl.to(
          item,
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            duration: 0.38,
          },
          0.05 + staggerDelay
        );
      });

      // -------------------------------------------------------------
      // ACT 2 (0.35 -> 0.55): Full 3x4 Grid locks and showcases lifestyle
      // -------------------------------------------------------------
      tl.to(
        grid,
        {
          scale: 1.02,
          ease: "none",
          duration: 0.2,
        },
        0.35
      );

      // -------------------------------------------------------------
      // ACT 3 (0.55 -> 0.95): Grid items burst apart to reveal Freedom
      // -------------------------------------------------------------
      items.forEach((item, index) => {
        const col = index % totalColumns;
        const row = Math.floor(index / totalColumns);
        const dirX = col - centerX;
        const dirY = row - centerY;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
        const normX = dirX / dist;
        const normY = dirY / dist;

        const exitDistance = 1100;
        const exitX = normX * exitDistance;
        const exitY = normY * exitDistance;

        tl.to(
          item,
          {
            x: exitX,
            y: exitY,
            opacity: 0,
            scale: 1.15,
            ease: "power3.in",
            duration: 0.4,
          },
          0.55
        );
      });

      // Phase 2 (Freedom) emerges with full clarity
      tl.to(
        phase2,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          duration: 0.35,
        },
        0.65
      );

      // Hold Phase 2 till the end of the section
      tl.to(
        phase2,
        {
          opacity: 1,
          duration: 0.15,
        },
        0.85
      );
    }, block);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={blockRef}
      id="sticky-grid-section"
      className="relative w-full bg-white text-[#1f242b]"
      style={{ height: "380vh" }}
    >
      {/* Sticky Fullscreen Viewport */}
      <div
        ref={wrapperRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center select-none pt-16 sm:pt-20 pb-6 px-4"
      >
        {/* ------------------------------------------------------------- */}
        {/* 3x4 IMAGE GRID GALLERY (Pure Codrops Grid Layout)             */}
        {/* ------------------------------------------------------------- */}
        <div className="gallery absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[740px] max-w-[88vw] z-10 pointer-events-none">
          <ul
            ref={gridRef}
            className="gallery__grid grid grid-cols-3 gap-6 sm:gap-8 will-change-transform"
          >
            {GRID_ITEMS.map((item, index) => (
              <li
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="gallery__item relative w-full aspect-square rounded-lg overflow-hidden shadow-md bg-stone-200 will-change-transform"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 30vw, 250px"
                  className="object-cover"
                  priority={index < 4}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PHASE 1: THE DILEMMA (Side-by-side 2-Column Layout)           */}
        {/* Left side: Premium marble visual / Right side: Narrative copy */}
        {/* When the user scrolls and images arrive, this fades out.      */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={phase1Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8 lg:px-12 pt-10 sm:pt-12 pb-6 sm:pb-8"
        >
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Prominent Large Luxury Marble Visual */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[401/390] max-w-[620px] h-[340px] sm:h-[440px] lg:h-[500px] xl:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_65px_rgba(0,0,0,0.16)] border border-stone-200/90 group bg-stone-100">
                <Image
                  src="/marble-kitchen-island.jpg"
                  alt="Luxury Calacatta Gold Marble Island Countertop"
                  fill
                  sizes="(max-width: 1024px) 95vw, 620px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Narrative Dilemma Copy & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left items-start max-w-xl">
              {/* Brand Logo - Official NanoShield HD Logo */}
              <div className="relative h-9 w-44 sm:h-11 sm:w-52 mb-3 sm:mb-4">
                <Image
                  src="/logo/NanoShield Logo - White Bg.png"
                  alt="NanoShield HD"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>

              {/* Dilemma Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-[#1f242e] tracking-tight leading-[1.15] mb-3 sm:mb-4">
                You Didn’t Choose Marble
                <br className="hidden sm:inline" />
                {" "}to Tiptoe Around it
              </h2>

              {/* Dilemma Copy Container */}
              <div className="space-y-2.5 sm:space-y-3 text-stone-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed w-full">
                <p className="text-stone-500 font-normal">
                  You chose it for its beauty. Its light. Its timelessness.
                </p>

                {/* Subtle highlight narrative box */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-stone-50 border-l-3 border-[#50b8ae] text-[#1f242e] font-semibold text-xs sm:text-sm lg:text-[14.5px] leading-snug">
                  But somewhere between installation day and everyday life, that joy quietly turned into tension.
                </div>

                <p className="text-stone-500">
                  Coffee mugs placed carefully. Kids told to &ldquo;be careful.&rdquo; Guests watched instead of welcomed.
                </p>

                <p className="text-stone-400 italic text-xs sm:text-sm">
                  And a constant, low-level worry every time the light hits the bench at the wrong angle.
                </p>

                {/* Punchline */}
                <div className="pt-2.5 border-t border-stone-200/90 w-full">
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-[#1f242e] tracking-tight">
                    NanoShield HD exists to end that feeling — completely.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-4 sm:mt-5 pointer-events-auto">
                <button
                  type="button"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#50b8ae] hover:bg-[#3ea399] text-white font-semibold text-xs sm:text-sm md:text-base shadow-lg shadow-[#50b8ae]/30 hover:shadow-xl transition-all duration-300 active:scale-[0.98] cursor-pointer group"
                >
                  <Search className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>Book Your Consultation Today</span>
                  <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PHASE 2: THE FREEDOM (Relief & True Living - 2-Column Layout) */}
        {/* Revealed smoothly in the center as the 12 grid cards part open */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={phase2Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8 lg:px-12 pt-10 sm:pt-12 pb-6 sm:pb-8"
        >
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Freedom Narrative Copy & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left items-start max-w-xl order-2 lg:order-1">
              {/* Freedom Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#50b8ae]/15 border border-[#50b8ae]/30 text-[#1a6660] text-xs sm:text-[13px] font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#20837a]" />
                <span>Real Marble Protection</span>
              </div>

              {/* Freedom Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-[#1f242e] tracking-tight leading-[1.15] mb-3 sm:mb-4">
                Imagine Not Thinking
                <br className="hidden sm:inline" />
                {" "}About Your Benchtop Anymore
              </h2>

              {/* Freedom Description */}
              <div className="space-y-2.5 sm:space-y-3 text-stone-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed w-full">
                <p className="text-stone-500 font-normal">
                  Not checking it when the light hits. Not bracing yourself after a spill. Not hovering when someone sets a glass down.
                </p>

                {/* Highlight narrative callout */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#50b8ae]/10 border-l-3 border-[#20837a] text-[#1f242e] font-semibold text-xs sm:text-sm lg:text-[14.5px] leading-snug">
                  You place your coffee mug down without thinking. Prep food directly on the bench. Wipe spills and move on.
                </div>

                <p className="text-stone-400 italic text-xs sm:text-sm">
                  Kids eat, guests cook, life happens — and nothing feels fragile.
                </p>

                {/* Punchline */}
                <div className="pt-2.5 border-t border-stone-200/90 w-full">
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-[#1f242e]">
                    The marble looks exactly the same. But the tension is gone.
                  </p>
                  <p className="text-xs sm:text-sm text-[#20837a] font-semibold mt-0.5">
                    That’s what real protection feels like.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-4 sm:mt-5 pointer-events-auto">
                <button
                  type="button"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#50b8ae] hover:bg-[#3ea399] text-white font-semibold text-xs sm:text-sm md:text-base shadow-lg shadow-[#50b8ae]/30 hover:shadow-xl transition-all duration-300 active:scale-[0.98] cursor-pointer group"
                >
                  <Search className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Joyful Living Luxury Marble Visual */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-start order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[401/390] max-w-[620px] h-[340px] sm:h-[440px] lg:h-[500px] xl:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_65px_rgba(0,0,0,0.16)] border border-stone-200/90 group bg-stone-100">
                <Image
                  src="/marble-family-freedom.jpg"
                  alt="Joyful Family Living and Dining on Protected Marble Island"
                  fill
                  sizes="(max-width: 1024px) 95vw, 620px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#50b8ae] hover:bg-[#3ea399] text-white flex items-center justify-center shadow-lg shadow-[#50b8ae]/30 transition-all duration-200 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </section>
  );
}
