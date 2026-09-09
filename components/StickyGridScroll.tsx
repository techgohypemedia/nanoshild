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
    src: "/nanoshield_parallax_frames_web/frame_0118.webp",
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
  const phase1Ref = useRef<HTMLDivElement>(null);
  const phase2Ref = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const block = blockRef.current;
    const wrapper = wrapperRef.current;
    const grid = gridRef.current;
    const phase1 = phase1Ref.current;
    const phase2 = phase2Ref.current;
    const items = itemRefs.current.filter(Boolean) as HTMLLIElement[];

    if (!block || !wrapper || !grid || !phase1 || !phase2 || items.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      // Group items into 3 columns (matching Codrops logic)
      const numColumns = 3;
      const columns: HTMLLIElement[][] = [[], [], []];
      items.forEach((item, index) => {
        columns[index % numColumns].push(item);
      });

      // Initial visual setup:
      // Phase 1 is visible initially ("show this first")
      gsap.set(phase1, { opacity: 1, y: 0, pointerEvents: "auto" });
      // Phase 2 starts hidden
      gsap.set(phase2, { opacity: 0, y: 35, pointerEvents: "none" });

      // Grid Reveal Math: start outside viewport
      const wh = window.innerHeight;
      const gridHeight = grid.offsetHeight || 600;
      const dy = wh - (wh - gridHeight) / 2 + 180;

      // Master Timeline driven by ScrollTrigger
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      });

      // -------------------------------------------------------------
      // ACT 1: SHOW DILEMMA FIRST (0.0 to 2.5)
      // Phase 1 is shown transparently in the center while images are off-screen
      // -------------------------------------------------------------

      // -------------------------------------------------------------
      // STEP 1: IMAGES ENTER & DILEMMA FADES OUT (2.5 to 4.5)
      // When the 12 marble images come in, remove the Dilemma text
      // -------------------------------------------------------------
      masterTimeline.to(
        phase1,
        {
          opacity: 0,
          y: -35,
          scale: 0.96,
          duration: 1.4,
          ease: "power2.inOut",
          pointerEvents: "none",
        },
        2.5
      );

      columns.forEach((column, colIndex) => {
        const fromTop = colIndex % 2 === 0;
        masterTimeline.from(
          column,
          {
            y: dy * (fromTop ? -1 : 1),
            duration: 1.8,
            stagger: {
              each: 0.08,
              from: fromTop ? "end" : "start",
            },
            ease: "power2.out",
          },
          2.7
        );
      });

      // -------------------------------------------------------------
      // STEP 2: GRID ZOOMS & PARTS OUTWARD (5.5 to 7.5)
      // 12 cards zoom 2.3x and part wide outward to screen borders
      // -------------------------------------------------------------
      masterTimeline.to(grid, { scale: 2.3, duration: 2.0, ease: "power2.inOut" }, 5.5);
      masterTimeline.to(columns[0], { xPercent: -65, duration: 2.0, ease: "power2.inOut" }, 5.5);
      masterTimeline.to(columns[2], { xPercent: 65, duration: 2.0, ease: "power2.inOut" }, 5.5);
      masterTimeline.to(
        columns[1],
        {
          yPercent: (i) => (i < Math.floor(columns[1].length / 2) ? -175 : 175),
          duration: 1.8,
          ease: "power2.inOut",
        },
        5.7
      );

      // -------------------------------------------------------------
      // ACT 2: PHASE 2 FREEDOM REVEAL (7.3 to 10.0)
      // In the clear open center, the Freedom narrative arrives
      // -------------------------------------------------------------
      masterTimeline.to(
        phase2,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          pointerEvents: "auto",
        },
        7.3
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
        {/* PHASE 1: THE DILEMMA (Shown First, Pure Transparent)          */}
        {/* Displayed cleanly on entry without any box, card, or border.  */}
        {/* When the user scrolls and images arrive, this fades out.      */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={phase1Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 sm:px-6 pt-16 sm:pt-20 pb-8"
        >
          <div className="max-w-xl sm:max-w-2xl w-full mx-auto text-center flex flex-col items-center">
            {/* Brand Logo - Official NanoShield HD Logo */}
            <div className="relative h-10 w-48 sm:h-12 sm:w-56 mb-5">
              <Image
                src="/logo/NanoShield Logo - White Bg.png"
                alt="NanoShield HD"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Dilemma Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-bold text-[#1f242e] tracking-tight leading-[1.14] mb-4 sm:mb-5 max-w-xl sm:max-w-2xl">
              You Didn’t Choose Marble
              <br />
              to Tiptoe Around it
            </h2>

            {/* Dilemma Copy */}
            <div className="space-y-2.5 sm:space-y-3 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
              <p className="text-stone-500">
                You chose it for its beauty. Its light. Its timelessness.
              </p>
              <p className="text-[#1f242e] font-medium">
                But somewhere between installation day and everyday life, that joy quietly turned into tension.
              </p>
              <p className="text-stone-500">
                Coffee mugs placed carefully. Kids told to &ldquo;be careful.&rdquo; Guests watched instead of welcomed.
              </p>
              <p className="text-stone-500 italic">
                And a constant, low-level worry every time the light hits the bench at the wrong angle.
              </p>

              {/* Punchline */}
              <div className="mt-4 pt-3 border-t border-stone-200/90 w-full text-center">
                <p className="text-sm sm:text-base font-bold text-[#1f242e] tracking-tight">
                  NanoShield HD exists to end that feeling — completely.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pointer-events-auto">
              <button
                type="button"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#20252e] hover:bg-[#11161d] text-white font-medium text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-4 h-4 text-stone-300 stroke-[2.5]" />
                <span>Book Your Consultation Today</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PHASE 2: THE FREEDOM (Relief & True Living)                   */}
        {/* Positioned in the same absolute center, revealed as the grid   */}
        {/* cards part wide open.                                         */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={phase2Ref}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 sm:px-6 pt-16 sm:pt-20 pb-8"
        >
          <div className="max-w-xl sm:max-w-2xl w-full mx-auto text-center flex flex-col items-center">
            {/* Freedom Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#45aca5]/15 border border-[#45aca5]/30 text-[#1f6661] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2d8d85]" />
              <span>Real Marble Protection</span>
            </div>

            {/* Freedom Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-bold text-[#1f242e] tracking-tight leading-[1.14] mb-4 max-w-xl sm:max-w-2xl">
              Imagine Not Thinking
              <br />
              About Your Benchtop Anymore
            </h2>

            {/* Freedom Description */}
            <div className="space-y-2.5 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
              <p className="text-stone-500">
                Not checking it when the light hits. Not bracing yourself after a spill. Not hovering when someone sets a glass down.
              </p>
              <p className="text-[#1f242e] font-medium">
                You place your coffee mug down without thinking. Prep food directly on the bench. Wipe spills and move on.
              </p>
              <p className="italic text-stone-500 text-xs sm:text-sm">
                Kids eat, guests cook, life happens — and nothing feels fragile.
              </p>

              {/* Punchline */}
              <div className="mt-4 pt-3 border-t border-stone-200/90 w-full text-center">
                <p className="text-sm sm:text-base font-bold text-[#1f242e]">
                  The marble looks exactly the same. But the tension is gone.
                </p>
                <p className="text-xs sm:text-sm text-[#2d8d85] font-semibold mt-0.5">
                  That’s what real protection feels like.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pointer-events-auto">
              <button
                type="button"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#20252e] hover:bg-[#11161d] text-white font-medium text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-4 h-4 text-stone-300 stroke-[2.5]" />
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#64748b] hover:bg-[#475569] text-white flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </section>
  );
}
