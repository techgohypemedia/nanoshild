"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StoneCard {
  id: string;
  title: string;
  image: string;
}

const CARDS: StoneCard[] = [
  {
    id: "white-statuario",
    title: "Wrapped Statuario & Calacatta",
    image: "/marble-calacatta-hd.jpg",
  },
  {
    id: "fusion-series",
    title: "Wrapped Chef Benchtops",
    image: "/marble-kitchen-island.jpg",
  },
  {
    id: "quartzo-islands",
    title: "Wrapped Quartzite Islands",
    image: "/marble-travertine-texture.jpg",
  },
  {
    id: "ratna-gemstones",
    title: "Wrapped Translucent Onyx",
    image: "/collections/onyx-2.jpg",
  },
  {
    id: "granito-quartzite",
    title: "Wrapped Nero Marquina",
    image: "/collections/black-marquina-1.jpg",
  },
  {
    id: "embossed-series",
    title: "Wrapped Fluted Marble",
    image: "/collections/calacatta-1.jpg",
  },
  {
    id: "onyx-lumina",
    title: "Wrapped Backlit Onyx",
    image: "/collections/onyx-1.jpg",
  },
];

export default function Experience3DCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const total = CARDS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic Slide: Advances right-to-left every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2500);

    return () => clearInterval(timer);
  }, [activeIndex, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 35) {
      nextSlide(); // swipe left -> slide right-to-left
    } else if (diff < -35) {
      prevSlide(); // swipe right
    }
    setTouchStart(null);
  };

  // Helper to calculate circular shortest offset from activeIndex
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      className="relative w-full bg-[#ffffff] text-[#292524] py-14 md:py-20 overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Experience 3D Stone Showcase"
    >
      {/* Subtle Luxury Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,245,244,0.6)_0%,rgba(255,255,255,1)_70%)] pointer-events-none" />

      {/* Top Header - Pure Headline without description */}
      <div className="relative max-w-4xl mx-auto text-center px-4 mb-8 md:mb-12 z-10">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#332e29] tracking-tight font-normal"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          With over years of experience
        </h2>
      </div>

      {/* 3D Coverflow Perspective Stage with Flanked PREV & NEXT Buttons */}
      <div className="relative w-full max-w-[1540px] mx-auto px-3 sm:px-6 md:px-10 flex items-center justify-between gap-3 sm:gap-6 z-10">
        
        {/* Left PREV Button - Modern Luxury Circular Arrow */}
        <button
          onClick={prevSlide}
          className="group shrink-0 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#50b8ae] hover:bg-[#3ea399] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_8px_24px_rgba(80,184,174,0.32)] hover:shadow-[0_12px_32px_rgba(80,184,174,0.48)] hover:scale-110 active:scale-95 z-30 ring-4 ring-[#50b8ae]/15 hover:ring-[#50b8ae]/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:-translate-x-0.5" />
        </button>

        {/* 3D Carousel Stage */}
        <div
          className="relative flex-1 h-[360px] sm:h-[440px] md:h-[480px] lg:h-[520px] flex items-center justify-center overflow-visible"
          style={{ perspective: "1300px" }}
        >
          {/* Ambient Floor Shadow under the 3D rotating stage */}
          <div className="absolute bottom-4 w-[60%] h-10 bg-black/15 blur-2xl rounded-full pointer-events-none transform -translate-y-2" />

          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {CARDS.map((card, index) => {
              const offset = getOffset(index);
              const isVisible = Math.abs(offset) <= 2;

              // 3D perspective rotation matching the reference screenshots
              let transformStyle = "";
              let zIndex = 10;
              let opacity = 0;
              let filter = "brightness(1)";
              let isCurrentCenter = offset === 0;

              if (offset === 0) {
                // Center card: flat facing front, scale 1.0, elevated 3D depth & shadow
                transformStyle = "translateX(0%) translateZ(80px) scale(1) rotateY(0deg)";
                zIndex = 40;
                opacity = 1;
                filter = "brightness(1) contrast(1.02)";
              } else if (offset === 1) {
                // Right 1: Angled inward towards center (-38deg)
                transformStyle = "translateX(62%) translateZ(-30px) scale(0.85) rotateY(-38deg)";
                zIndex = 30;
                opacity = 0.9;
                filter = "brightness(0.96)";
              } else if (offset === 2) {
                // Right 2: Far right angled inward (-54deg)
                transformStyle = "translateX(118%) translateZ(-120px) scale(0.68) rotateY(-54deg)";
                zIndex = 20;
                opacity = 0.55;
                filter = "brightness(0.88)";
              } else if (offset === -1) {
                // Left 1: Angled inward towards center (+38deg)
                transformStyle = "translateX(-62%) translateZ(-30px) scale(0.85) rotateY(38deg)";
                zIndex = 30;
                opacity = 0.9;
                filter = "brightness(0.96)";
              } else if (offset === -2) {
                // Left 2: Far left angled inward (+52deg)
                transformStyle = "translateX(-118%) translateZ(-120px) scale(0.68) rotateY(54deg)";
                zIndex = 20;
                opacity = 0.55;
                filter = "brightness(0.88)";
              } else {
                // Hidden out of bounds
                transformStyle = `translateX(${offset > 0 ? "170%" : "-170%"}) translateZ(-220px) scale(0.5) rotateY(${offset > 0 ? "-65deg" : "65deg"})`;
                zIndex = 5;
                opacity = 0;
              }

              return (
                <div
                  key={card.id}
                  onClick={() => {
                    if (!isCurrentCenter) {
                      setActiveIndex(index);
                    }
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 w-[260px] sm:w-[310px] md:w-[360px] lg:w-[400px] aspect-square rounded-sm overflow-hidden bg-stone-100 origin-center border border-stone-200/80 ${
                    isCurrentCenter ? "cursor-default" : "cursor-pointer"
                  }`}
                  style={{
                    transform: transformStyle,
                    zIndex,
                    opacity,
                    filter,
                    pointerEvents: isVisible ? "auto" : "none",
                    transition: "transform 600ms cubic-bezier(0.2, 0.9, 0.3, 1), opacity 600ms ease, filter 600ms ease, box-shadow 600ms ease",
                    boxShadow: isCurrentCenter
                      ? "0 30px 60px -15px rgba(0, 0, 0, 0.28), 0 12px 25px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)"
                      : "0 18px 36px -10px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.03)",
                  }}
                >
                  {/* Pure Stone Imagery without overlaid text */}
                  <div className="relative w-full h-full group">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 310px, 400px"
                      className="object-cover"
                      priority={isCurrentCenter}
                    />

                    {/* Specular sheen on top edge */}
                    <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right NEXT Button - Modern Luxury Circular Arrow */}
        <button
          onClick={nextSlide}
          className="group shrink-0 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#50b8ae] hover:bg-[#3ea399] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_8px_24px_rgba(80,184,174,0.32)] hover:shadow-[0_12px_32px_rgba(80,184,174,0.48)] hover:scale-110 active:scale-95 z-30 ring-4 ring-[#50b8ae]/15 hover:ring-[#50b8ae]/30"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}
