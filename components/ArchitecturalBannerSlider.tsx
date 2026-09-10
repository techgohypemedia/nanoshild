"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: "grey-slate-island",
    title: "Monolithic Kitchen Islands",
    subtitle: "Precision protected for everyday cooking, dining, and entertaining.",
    image: "/slider/slide-1.jpg",
  },
  {
    id: "calacatta-gold-penthouse",
    title: "Calacatta Gold Penthouses",
    subtitle: "Optically clear, zero plastic feel, and natural light reflection.",
    image: "/slider/slide-2.jpg",
  },
  {
    id: "nero-marquina-bar",
    title: "Nero Marquina & Obsidian Quartz",
    subtitle: "100% immune to citrus etchings, red wine stains, and heat stress.",
    image: "/slider/slide-3.jpg",
  },
  {
    id: "waterfall-chef-kitchen",
    title: "Waterfall Architectural Slabs",
    subtitle: "Guaranteed up to 10 years without cracking, peeling, or discoloration.",
    image: "/slider/slide-4.jpg",
  },
];

export default function ArchitecturalBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const total = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic slide to left every 2 seconds (2000ms)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered, total]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 40) {
      nextSlide(); // swipe left -> slide to left
    } else if (diff < -40) {
      prevSlide(); // swipe right
    }

    touchStartXRef.current = null;
  };

  return (
    <section
      id="architectural-showcase"
      className="relative z-10 w-full bg-[#050505] text-white py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-white/10 select-none"
    >
      <div className="relative max-w-[1440px] mx-auto w-full">
        {/* ============================================================= */}
        {/* SECTION HEADER: Luxury Framed Headline                        */}
        {/* ============================================================= */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="relative inline-block px-8 py-2.5 mb-2">
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#50b8ae]" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#50b8ae]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#50b8ae] font-semibold block mb-1">
              ARCHITECTURAL EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight">
              Protected for Everyday Living
            </h2>
          </div>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mt-2">
            From monolithic chef kitchen islands to illuminated bar vanities — NanoShield preserves natural stone brilliance with zero maintenance anxiety.
          </p>
        </div>

        {/* ============================================================= */}
        {/* WIDE PANORAMIC BANNER SLIDER (Exact proportions as screenshot)*/}
        {/* ============================================================= */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="group relative w-full aspect-[21/9] sm:aspect-[2.35/1] max-h-[580px] min-h-[300px] overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-black border border-stone-200/60"
        >
          {/* Slides Carousel Track */}
          <div
            className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className="relative w-full h-full flex-shrink-0 bg-black"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  className="object-cover object-center"
                  priority={index === 0}
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                {/* Optional Lower Caption Overlay */}
                <div className="absolute bottom-16 sm:bottom-18 left-6 sm:left-10 z-10 max-w-lg text-white pointer-events-none drop-shadow-md">
                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight mb-1">
                    {slide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 font-light hidden sm:block">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Navigation Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#50b8ae] text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Navigation Button */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#50b8ae] text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* =========================================================== */}
          {/* BOTTOM CENTER INDICATOR DOTS (Matching Screenshot)         */}
          {/* =========================================================== */}
          <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-lg">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={`dot-${slide.id}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Jump to slide ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#50b8ae] shadow-md shadow-[#50b8ae]"
                      : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/80 hover:bg-white hover:scale-110"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
