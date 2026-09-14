"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

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

  // Automatic slide to left every 3.5 seconds
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 3500);

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
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }

    touchStartXRef.current = null;
  };

  return (
    <section
      id="architectural-showcase"
      className="relative z-10 w-full bg-[#faf8f5] text-[#1f242e] py-14 sm:py-18 lg:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-stone-200/70 select-none"
    >
      <div className="relative max-w-[1440px] mx-auto w-full">
        {/* ============================================================= */}
        {/* SECTION HEADER: Luxury Light Editorial Header                 */}
        {/* ============================================================= */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#50b8ae]/12 border border-[#50b8ae]/25 text-[#1a6660] text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#50b8ae]" />
            <span>Architectural Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f242e] tracking-tight leading-tight">
            Protected for Everyday Living
          </h2>

          <p className="text-stone-500 text-sm sm:text-base max-w-xl mx-auto mt-2.5 font-normal leading-relaxed">
            Where timeless natural stone craftsmanship meets invisible, lasting protection.
          </p>
        </div>

        {/* ============================================================= */}
        {/* WIDE PANORAMIC BANNER SLIDER (Framed Luxury Visual)          */}
        {/* ============================================================= */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="group relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.35/1] max-h-[580px] min-h-[340px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.10)] border border-stone-200/90 bg-stone-100"
        >
          {/* Slides Carousel Track */}
          <div
            className="flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className="relative w-full h-full flex-shrink-0 bg-stone-100"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Left Arrow Navigation Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-[#50b8ae] text-[#1f242e] hover:text-white backdrop-blur-xl border border-white/60 shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(80,184,174,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>

          {/* Right Arrow Navigation Button */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-[#50b8ae] text-[#1f242e] hover:text-white backdrop-blur-xl border border-white/60 shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(80,184,174,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
