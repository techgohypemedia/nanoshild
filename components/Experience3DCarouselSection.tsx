"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StoneCard {
  id: string;
  title: string;
  brandText?: string;
  brandSub?: string;
  brandType: "ratna" | "white" | "fusion" | "quartzo" | "granito" | "embossed" | "onyx";
  image: string;
}

const CARDS: StoneCard[] = [
  {
    id: "white-statuario",
    title: "Pure Statuario & Calacatta",
    brandText: "white",
    brandSub: "STATUARIO & CALACATTA",
    brandType: "white",
    image: "/marble-calacatta-hd.jpg",
  },
  {
    id: "fusion-series",
    title: "Fusion Series Luxury Slabs",
    brandText: "Fusion",
    brandSub: "SERIES",
    brandType: "fusion",
    image: "/marble-kitchen-island.jpg",
  },
  {
    id: "rmm-quartzo",
    title: "RMM Quartzo Kitchen Islands",
    brandText: "RMM Quartzo",
    brandSub: "ENGINEERED SURFACES",
    brandType: "quartzo",
    image: "/marble-travertine-texture.jpg",
  },
  {
    id: "rmm-ratna",
    title: "RMM Ratna Semi-Precious Slabs",
    brandText: "RMM ratna",
    brandSub: "EXOTIC GEMSTONES",
    brandType: "ratna",
    image: "/collections/onyx-2.jpg",
  },
  {
    id: "rmm-granito",
    title: "RMM Granito Enduring Quartzite",
    brandText: "RMM Granito",
    brandSub: "BLACK & EXOTIC QUARTZITE",
    brandType: "granito",
    image: "/collections/black-marquina-1.jpg",
  },
  {
    id: "embossed-series",
    title: "Embossed 3D Fluted Marble",
    brandText: "EMBOSSED",
    brandSub: "FLUTED & HONED",
    brandType: "embossed",
    image: "/collections/calacatta-1.jpg",
  },
  {
    id: "onyx-lumina",
    title: "Onyx Lumina Backlit Stone",
    brandText: "ONYX LUMINA",
    brandSub: "BACKLIT EXOTICS",
    brandType: "onyx",
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

  // Automatic Slide: Advances right-to-left every 2 seconds (2000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2000);

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

  // Render card custom brand logo badge matching reference screenshot aesthetics
  const renderCardLogo = (card: StoneCard) => {
    switch (card.brandType) {
      case "white":
        return (
          <div className="absolute top-4 left-6 z-20 pointer-events-none drop-shadow-md">
            <span
              className="text-3xl md:text-5xl text-[#2f4f38] font-serif italic tracking-wide select-none block"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              white
            </span>
          </div>
        );
      case "fusion":
        return (
          <div className="absolute top-4 right-6 text-right z-20 pointer-events-none drop-shadow-md">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#8c6d48] uppercase block leading-none font-sans">
              Fusion
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#ab8f68] uppercase font-semibold block mt-0.5">
              SERIES
            </span>
          </div>
        );
      case "quartzo":
        return (
          <div className="absolute top-5 left-5 z-20 pointer-events-none bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded shadow-md border border-stone-200/90 flex items-center gap-2">
            <div className="w-5 h-5 bg-[#2d3748] text-white flex items-center justify-center font-bold text-[11px] rounded-sm">
              Q
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider text-[#2d3748] uppercase block leading-none font-sans">
                RMM Quartzo
              </span>
            </div>
          </div>
        );
      case "ratna":
        return (
          <div className="absolute top-5 left-5 z-20 pointer-events-none drop-shadow-md">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-serif text-[#c59a37] uppercase tracking-wider leading-none font-semibold">
                RMM
              </span>
              <span
                className="text-2xl md:text-3xl font-serif text-[#d4af37] lowercase tracking-wide leading-none"
                style={{ fontFamily: "'Cinzel Decorative', Georgia, serif" }}
              >
                ratna
              </span>
            </div>
          </div>
        );
      case "granito":
        return (
          <div className="absolute top-5 right-5 z-20 pointer-events-none text-right drop-shadow-md">
            <span className="text-xs font-bold text-[#e2e8f0] tracking-widest block uppercase">
              RMM
            </span>
            <span className="text-xl md:text-2xl font-black text-[#e53e3e] tracking-tight uppercase block leading-none">
              Granito
            </span>
          </div>
        );
      case "embossed":
        return (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center drop-shadow-md whitespace-nowrap">
            <div className="flex items-center gap-1.5 justify-center">
              <span className="text-lg md:text-xl font-serif tracking-[0.25em] text-[#1a202c] uppercase font-bold">
                EMB
              </span>
              <span className="text-sm text-[#8c6d48]">✦</span>
              <span className="text-lg md:text-xl font-serif tracking-[0.25em] text-[#1a202c] uppercase font-bold">
                SSED
              </span>
            </div>
          </div>
        );
      case "onyx":
        return (
          <div className="absolute top-4 left-5 z-20 pointer-events-none bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white border border-amber-400/40 shadow-lg">
            <span className="text-[11px] font-serif tracking-[0.25em] uppercase text-amber-300 font-medium">
              LUMINA ONYX
            </span>
          </div>
        );
      default:
        return null;
    }
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
        
        {/* Left PREV Button (Flanked on the left, outside images) */}
        <button
          onClick={prevSlide}
          className="group shrink-0 flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold tracking-[0.22em] text-white bg-[#50b8ae] hover:bg-[#3ea399] px-4 md:px-6 py-3 md:py-3.5 rounded-full uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-[#50b8ae]/30 hover:shadow-xl hover:scale-105 active:scale-95 z-30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1 text-white" />
          <span className="hidden sm:inline font-sans">PREV</span>
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
                  {/* Stone Imagery */}
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

                    {/* Distinct Logo / Typography Badge for each collection */}
                    {renderCardLogo(card)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right NEXT Button (Flanked on the right, outside images) */}
        <button
          onClick={nextSlide}
          className="group shrink-0 flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold tracking-[0.22em] text-white bg-[#50b8ae] hover:bg-[#3ea399] px-4 md:px-6 py-3 md:py-3.5 rounded-full uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-[#50b8ae]/30 hover:shadow-xl hover:scale-105 active:scale-95 z-30"
          aria-label="Next slide"
        >
          <span className="hidden sm:inline font-sans">NEXT</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 text-white" />
        </button>
      </div>
    </section>
  );
}
