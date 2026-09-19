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
      className="relative z-10 w-full bg-[#faf8f5] text-[#1f242e] pt-14 sm:pt-20 pb-0 overflow-hidden border-t border-stone-200/70 select-none"
    >
      {/* ============================================================= */}
      {/* SECTION HEADER: Clean Luxury Editorial Header                 */}
      {/* ============================================================= */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#31847b]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">
            Architectural Showcase
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight leading-tight">
          Protected for Everyday Living
        </h2>

        <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto mt-2.5 font-normal leading-relaxed">
          Where timeless natural stone craftsmanship meets invisible, lasting protection.
        </p>
      </div>

      {/* ============================================================= */}
      {/* FULL WIDTH EXPANSIVE BANNER SLIDER                            */}
      {/* ============================================================= */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="group relative w-full h-[55vh] sm:h-[70vh] lg:h-[82vh] min-h-[460px] max-h-[850px] overflow-hidden bg-stone-900 border-y border-stone-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
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
              className="relative w-full h-full flex-shrink-0 bg-stone-900"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={index === 0}
              />

              {/* Subtle bottom gradient to highlight slide title & elegance */}
              <div className="absolute inset-x-0 bottom-0 pt-28 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none flex flex-col justify-end">
                <div className="max-w-6xl w-full">
                  <p className="text-[#50b8ae] text-xs font-semibold uppercase tracking-[0.2em] mb-1.5">
                    Case Study 0{index + 1}
                  </p>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight">
                    {slide.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl font-normal hidden sm:block">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow Navigation Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-[#31847b] text-white backdrop-blur-xl border border-white/30 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(49,132,123,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:-translate-x-0.5" />
        </button>

        {/* Right Arrow Navigation Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-[#31847b] text-white backdrop-blur-xl border border-white/30 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(49,132,123,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}
