"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface MarbleItem {
  id: string;
  title: string;
  image: string;
}

interface CategoryData {
  id: string;
  name: string;
  line1: string;
  line2: string;
  description: string;
  items: MarbleItem[];
}

const CATEGORIES: CategoryData[] = [
  {
    id: "popular",
    name: "Popular Marble",
    line1: "Popular",
    line2: "Marble",
    description:
      "Indulge in the glory of class-apart luxury marble surfaces protected with NanoShield HD. Our popular offerings range from a variety of Statuario Marble, Travertine Marble, Onyx Marble and Calacatta Gold. These pieces are versatile and luxurious, the key qualities you would find in all our marble.",
    items: [
      {
        id: "italian-travertine",
        title: "Imported Italian Marble",
        image: "/collections/travertine-1.jpg",
      },
      {
        id: "onyx-1",
        title: "Onyx Marble",
        image: "/collections/onyx-1.jpg",
      },
      {
        id: "statuario-1",
        title: "Statuario Marble",
        image: "/collections/statuario-1.jpg",
      },
      {
        id: "calacatta-1",
        title: "Calacatta Gold",
        image: "/collections/calacatta-1.jpg",
      },
      {
        id: "marquina-1",
        title: "Nero Marquina",
        image: "/collections/black-marquina-1.jpg",
      },
      {
        id: "onyx-2",
        title: "Amber Onyx",
        image: "/collections/onyx-2.jpg",
      },
      {
        id: "statuario-2",
        title: "Italian Statuario",
        image: "/collections/statuario-2.jpg",
      },
      {
        id: "travertine-2",
        title: "Fluted Travertine",
        image: "/collections/travertine-2.jpg",
      },
      {
        id: "calacatta-2",
        title: "Calacatta Luxe",
        image: "/collections/calacatta-2.jpg",
      },
      {
        id: "marquina-2",
        title: "Obsidian Marquina",
        image: "/collections/black-marquina-2.jpg",
      },
    ],
  },
  {
    id: "colours",
    name: "Marble by Colours",
    line1: "Colour",
    line2: "Palettes",
    description:
      "Explore stone curated across exquisite colour spectra — from radiant crystal whites and warm golden honey tones to deep dramatic obsidians and glowing azure veins. NanoShield HD preserves the natural luminescence and depth of every hue without optical distortion.",
    items: [
      {
        id: "col-emerald-green",
        title: "Verde Alpi Emerald Green",
        image: "/collections/color-emerald-green.jpg",
      },
      {
        id: "col-royal-blue",
        title: "Sodalite Royal Cobalt Blue",
        image: "/collections/color-royal-blue.jpg",
      },
      {
        id: "col-rose-pink",
        title: "Rosa Portugues Blush Pink",
        image: "/collections/color-rose-pink.jpg",
      },
      {
        id: "col-rosso-burgundy",
        title: "Rosso Levanto Burgundy Red",
        image: "/collections/color-rosso-burgundy.jpg",
      },
      {
        id: "col-golden-honey",
        title: "Giallo Siena Golden Honey",
        image: "/collections/color-golden-honey.jpg",
      },
      {
        id: "col-smoky-silver",
        title: "Grigio Orobico Silver Grey",
        image: "/collections/color-smoky-silver.jpg",
      },
      {
        id: "col-pure-white",
        title: "Statuario Extra Pure White",
        image: "/collections/statuario-1.jpg",
      },
      {
        id: "col-obsidian-black",
        title: "Nero Marquina Velvet Black",
        image: "/collections/black-marquina-1.jpg",
      },
      {
        id: "col-roman-beige",
        title: "Roman Classico Warm Beige",
        image: "/collections/travertine-1.jpg",
      },
      {
        id: "col-golden-calacatta",
        title: "Calacatta Oro Luminous Gold",
        image: "/collections/calacatta-1.jpg",
      },
    ],
  },
  {
    id: "spaces",
    name: "Marble by Spaces",
    line1: "Curated",
    line2: "Spaces",
    description:
      "From high-traffic chef kitchen islands and luxury primary bathrooms to grand architectural fireplaces and bespoke bar vanities. Experience carefree entertaining and daily living across every room in your residence.",
    items: [
      {
        id: "space-kitchen-island",
        title: "Chef Kitchen Islands",
        image: "/collections/space-kitchen-island.jpg",
      },
      {
        id: "space-master-bath",
        title: "Primary Bathroom Ensuites",
        image: "/collections/space-master-bathroom.jpg",
      },
      {
        id: "space-luminous-bar",
        title: "Illuminated Cocktail Bars",
        image: "/collections/space-luminous-bar.jpg",
      },
      {
        id: "space-fireplace",
        title: "Architectural Fireplace Walls",
        image: "/collections/space-fireplace-wall.jpg",
      },
      {
        id: "space-grand-foyer",
        title: "Grand Residence Foyers",
        image: "/collections/space-grand-foyer.jpg",
      },
      {
        id: "space-dining-island",
        title: "Bespoke Dining Islands",
        image: "/collections/space-dining-island.jpg",
      },
      {
        id: "space-suite-vanity",
        title: "Penthouse Suite Vanities",
        image: "/collections/calacatta-2.jpg",
      },
      {
        id: "space-spa-bath",
        title: "Wellness Spa Bathrooms",
        image: "/collections/travertine-2.jpg",
      },
      {
        id: "space-feature-wall",
        title: "Monolithic Feature Walls",
        image: "/collections/black-marquina-2.jpg",
      },
      {
        id: "space-backlit-powder",
        title: "Backlit Powder Rooms",
        image: "/collections/onyx-2.jpg",
      },
    ],
  },
];

// Single Marble Card matching reference formatting exactly (left-aligned title, clean rectangular image)
function MarbleCard({
  item,
  index,
}: {
  item: MarbleItem;
  index: number;
}) {
  return (
    <div className="flex flex-col flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[calc((100%-48px)/3)] min-w-[280px] sm:min-w-[320px] lg:min-w-[calc((100%-48px)/3)] select-none group">
      {/* Title above image - Left Aligned exactly as in screenshot */}
      <div className="mb-3 text-left transition-transform duration-300 group-hover:-translate-y-0.5">
        <h4 className="text-xl sm:text-2xl lg:text-[24px] font-normal text-stone-900 tracking-tight leading-tight min-h-[3.2rem] flex items-end">
          {item.title}
        </h4>
      </div>

      {/* Clean Rectangular Image Container (Exact proportions & sharp/subtle styling) */}
      <div className="relative aspect-[4/4.9] w-full overflow-hidden cursor-pointer bg-stone-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025] group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 320px, 440px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={index < 3}
        />

        {/* Subtle sheen on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-25 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}

export default function MarbleCollectionsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const currentCategory = CATEGORIES[activeCategoryIndex];
  const maxScroll = Math.max(0, currentCategory.items.length - 3);

  // Automatic slide from right to left every 2.4 seconds (pauses on hover)
  useEffect(() => {
    if (isCarouselHovered) return;

    const timer = setInterval(() => {
      setScrollIndex((prev) => (prev >= maxScroll ? 0 : prev + 1));
    }, 2400);

    return () => clearInterval(timer);
  }, [isCarouselHovered, maxScroll]);

  const handlePrev = () => {
    setScrollIndex((prev) => (prev <= 0 ? maxScroll : prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev >= maxScroll ? 0 : prev + 1));
  };

  const handleTabChange = (index: number) => {
    setActiveCategoryIndex(index);
    setScrollIndex(0);
  };

  return (
    <section
      id="marble-collections"
      className="relative z-10 w-full bg-white text-[#1f242b] min-h-[110vh] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center overflow-hidden border-t border-stone-200/60"
    >
      {/* ------------------------------------------------------------- */}
      {/* Luxury White Marble Texture Background                        */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/marble-bg-texture.jpg"
          alt="Luxury Marble Surface Background"
          fill
          priority
          className="object-cover object-center opacity-100 contrast-[1.12]"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto z-10 w-full my-auto">
        {/* ============================================================= */}
        {/* HEADER: Corner Bracket "Marble Collections" + Category Tabs    */}
        {/* ============================================================= */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          {/* Framed Corner Brackets Title */}
          <div className="relative inline-block px-8 py-2.5 mb-5">
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#e11d48]" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#e11d48]" />
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1f242e] tracking-tight">
              Marble Collections
            </h2>
          </div>

          {/* Sub Navigation Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base font-medium text-stone-700">
            {CATEGORIES.map((cat, idx) => {
              const isActive = idx === activeCategoryIndex;
              return (
                <div key={cat.id} className="flex items-center gap-4 sm:gap-8">
                  <button
                    type="button"
                    onClick={() => handleTabChange(idx)}
                    className={`relative py-1 cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "text-[#e11d48] font-bold"
                        : "text-stone-700 hover:text-stone-950 font-medium"
                    }`}
                  >
                    {cat.name}
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-[#e11d48] rounded-full" />
                    )}
                  </button>
                  {idx < CATEGORIES.length - 1 && (
                    <span className="text-stone-400 select-none hidden sm:inline">|</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================= */}
        {/* MAIN LAYOUT: Left Narrative + Right Horizontal Carousel Track */}
        {/* ============================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column: Two-line Title in Red, Description, and Naked Arrow Buttons */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-between h-full min-h-[420px] text-left pr-2">
            <div>
              {/* Category Title in 2 lines with red text */}
              <h3 className="text-4xl sm:text-5xl lg:text-[46px] font-light text-[#e11d48] tracking-tight leading-[1.12] mb-6">
                {currentCategory.line1}
                <br />
                {currentCategory.line2}
              </h3>

              {/* Description text matching screenshot formatting */}
              <p className="text-stone-800 text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[1.68] font-normal max-w-[280px]">
                {currentCategory.description}
              </p>
            </div>

            {/* Naked Arrow Navigation Buttons (← →) without circles as in screenshot */}
            <div className="flex items-center gap-8 mt-10 lg:mt-auto pt-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous marble"
                className="text-stone-900 hover:text-[#e11d48] transition-all duration-200 cursor-pointer p-1 -ml-1 group"
              >
                <ArrowLeft className="w-8 h-8 stroke-[1.5] transition-transform duration-200 group-hover:-translate-x-1" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next marble"
                className="text-stone-900 hover:text-[#e11d48] transition-all duration-200 cursor-pointer p-1 group"
              >
                <ArrowRight className="w-8 h-8 stroke-[1.5] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Carousel Track with EXACTLY 3 Cards visible at a time on desktop */}
          <div
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            className="lg:col-span-9 xl:col-span-9 overflow-hidden w-full pt-1 pb-4"
          >
            <div
              className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(calc(-1 * ${scrollIndex} * ((100% + 24px) / 3)))`,
              }}
            >
              {currentCategory.items.map((item, idx) => (
                <MarbleCard
                  key={`${currentCategory.id}-${item.id}`}
                  item={item}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


