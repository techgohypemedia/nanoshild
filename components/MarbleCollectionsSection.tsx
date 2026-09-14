"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

interface ProtectedStoneItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
}

interface ProtectionCategory {
  id: string;
  name: string;
  line1: string;
  line2: string;
  description: string;
  items: ProtectedStoneItem[];
}

const PROTECTION_CATEGORIES: ProtectionCategory[] = [
  {
    id: "capabilities",
    name: "Film Protection",
    line1: "Invisible",
    line2: "Film Armor",
    description:
      "Optical-grade 8-mil film applied directly over natural marble to permanently eliminate acid etching, wine stains, and knife scratches.",
    items: [
      {
        id: "acid-proof",
        title: "Acid-Proof Barrier",
        subtitle: "100% Citrus & Wine Proof",
        badge: "Acid-Proof",
        image: "/collections/calacatta-1.jpg",
      },
      {
        id: "self-healing",
        title: "Self-Healing Film",
        subtitle: "Scratches Vanish With Heat",
        badge: "Self-Healing",
        image: "/collections/statuario-1.jpg",
      },
      {
        id: "stain-repulsion",
        title: "Zero Staining",
        subtitle: "Wipes Clean Instantly",
        badge: "Stain-Proof",
        image: "/collections/black-marquina-1.jpg",
      },
      {
        id: "optical-clarity",
        title: "Invisible 8-Mil",
        subtitle: "Natural Stone Depth & Clarity",
        badge: "Optical Clarity",
        image: "/collections/calacatta-2.jpg",
      },
      {
        id: "anti-yellowing",
        title: "Anti-Yellowing",
        subtitle: "10-Year UV Guarantee",
        badge: "10-Yr Guarantee",
        image: "/collections/statuario-2.jpg",
      },
      {
        id: "residue-free",
        title: "Residue-Free",
        subtitle: "Replaces Without Stone Harm",
        badge: "Zero Residue",
        image: "/collections/black-marquina-2.jpg",
      },
    ],
  },
  {
    id: "finishes",
    name: "Finishes & Edges",
    line1: "Precision",
    line2: "Edge Wrap",
    description:
      "Precision heat-formed around flat benchtops, mitered waterfall drops, and undermount sink cutouts for a seamless finish.",
    items: [
      {
        id: "gloss-wrap",
        title: "Ultra-Gloss Wrap",
        subtitle: "Polished Stone Mirror Shine",
        badge: "Ultra-Gloss",
        image: "/collections/onyx-1.jpg",
      },
      {
        id: "honed-wrap",
        title: "Velvet Matte Wrap",
        subtitle: "Honed & Brushed Stone Anti-Glare",
        badge: "Velvet Matte",
        image: "/collections/travertine-1.jpg",
      },
      {
        id: "waterfall-edge",
        title: "Waterfall Wrap",
        subtitle: "Continuous Drop-Edge Coverage",
        badge: "Waterfall Edge",
        image: "/collections/travertine-2.jpg",
      },
      {
        id: "undermount-sink",
        title: "Undermount Sinks",
        subtitle: "Moisture-Tight Seamless Cutout",
        badge: "Moisture Seal",
        image: "/collections/onyx-2.jpg",
      },
      {
        id: "curved-profiles",
        title: "Beveled Edges",
        subtitle: "Custom Contour Protection",
        badge: "Edge Profile",
        image: "/collections/color-emerald-green.jpg",
      },
      {
        id: "backsplash-armor",
        title: "Backsplash Film",
        subtitle: "Cooking Grease & Oil Defense",
        badge: "Backsplash",
        image: "/collections/color-royal-blue.jpg",
      },
    ],
  },
  {
    id: "surfaces",
    name: "Wrapped Spaces",
    line1: "Live",
    line2: "Freely",
    description:
      "Cook, entertain, and enjoy real marble every day without anxiety, coasters, or fear of accidental spills.",
    items: [
      {
        id: "space-kitchen-island",
        title: "Kitchen Islands",
        subtitle: "Everyday Cooking & Food Prep",
        badge: "Chef Island",
        image: "/collections/space-kitchen-island.jpg",
      },
      {
        id: "space-master-bath",
        title: "Bathroom Vanities",
        subtitle: "Immune to Perfumes & Acids",
        badge: "Vanity",
        image: "/collections/space-master-bathroom.jpg",
      },
      {
        id: "space-luminous-bar",
        title: "Entertaining Bars",
        subtitle: "Citrus & Wine Spills Wipe Clean",
        badge: "Cocktail Bar",
        image: "/collections/space-luminous-bar.jpg",
      },
      {
        id: "space-dining-island",
        title: "Dining Tables",
        subtitle: "Family Feasts Without Placemats",
        badge: "Dining Table",
        image: "/collections/space-dining-island.jpg",
      },
      {
        id: "space-fireplace",
        title: "Fireplace Hearths",
        subtitle: "Heat, Soot & Ash Defense",
        badge: "Fireplace",
        image: "/collections/space-fireplace-wall.jpg",
      },
      {
        id: "space-grand-foyer",
        title: "Foyer Consoles",
        subtitle: "High-Traffic Impact Defense",
        badge: "Foyer Console",
        image: "/collections/space-grand-foyer.jpg",
      },
    ],
  },
];

// Single Protected Stone Card with clean typography and luxury presentation
function ProtectedStoneCard({
  item,
  index,
}: {
  item: ProtectedStoneItem;
  index: number;
}) {
  return (
    <div className="flex flex-col flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[calc((100%-48px)/3)] min-w-[280px] sm:min-w-[320px] lg:min-w-[calc((100%-48px)/3)] select-none group">
      {/* Title & Short Subtitle above image */}
      <div className="mb-3 text-left transition-transform duration-300 group-hover:-translate-y-0.5">
        <h4 className="text-xl sm:text-2xl lg:text-[23px] font-medium text-stone-900 tracking-tight leading-tight">
          {item.title}
        </h4>
        <div className="flex items-center gap-1.5 mt-1 text-xs text-[#20837a] font-semibold tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#20837a]" />
          <span>{item.subtitle}</span>
        </div>
      </div>

      {/* Clean Rectangular Image Container */}
      <div className="relative aspect-[4/4.9] w-full overflow-hidden rounded-xl cursor-pointer bg-stone-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-stone-200/80 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
        <Image
          src={item.image}
          alt={`NanoShield HD Protection on ${item.title}`}
          fill
          sizes="(max-width: 768px) 320px, 440px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={index < 3}
        />

        {/* Minimal clean badge top-left */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase shadow-sm">
          {item.badge}
        </div>

        {/* Subtle sheen on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-30 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}

export default function MarbleCollectionsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const currentCategory = PROTECTION_CATEGORIES[activeCategoryIndex];
  const maxScroll = Math.max(0, currentCategory.items.length - 3);

  // Automatic slide from right to left every 2.8 seconds (pauses on hover)
  useEffect(() => {
    if (isCarouselHovered) return;

    const timer = setInterval(() => {
      setScrollIndex((prev) => (prev >= maxScroll ? 0 : prev + 1));
    }, 2800);

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
      className="relative z-10 w-full bg-white text-[#1f242b] min-h-[105vh] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center overflow-hidden border-t border-stone-200/60"
    >
      {/* Subtle Marble Texture Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/marble-bg-texture.jpg"
          alt="Natural Marble Protection Surface"
          fill
          priority
          className="object-cover object-center opacity-90 contrast-[1.08]"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto z-10 w-full my-auto">
        {/* Header: Brand-Accented Corner Brackets Title + Category Tabs */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          {/* Framed Corner Brackets Title in NanoShield Teal */}
          <div className="relative inline-block px-8 py-2.5 mb-5">
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#50b8ae]" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#50b8ae]" />
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1f242e] tracking-tight">
              The NanoShield Protective Wrap
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base font-medium text-stone-700">
            {PROTECTION_CATEGORIES.map((cat, idx) => {
              const isActive = idx === activeCategoryIndex;
              return (
                <div key={cat.id} className="flex items-center gap-4 sm:gap-8">
                  <button
                    type="button"
                    onClick={() => handleTabChange(idx)}
                    className={`relative py-1 cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "text-[#1a6660] font-bold"
                        : "text-stone-600 hover:text-stone-950 font-medium"
                    }`}
                  >
                    {cat.name}
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-[#50b8ae] rounded-full" />
                    )}
                  </button>
                  {idx < PROTECTION_CATEGORIES.length - 1 && (
                    <span className="text-stone-300 select-none hidden sm:inline">|</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Layout: Left Editorial Narrative + Right Carousel Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column: Two-line Title, Clean Short Copy, and Arrow Navigation */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-between h-full min-h-[400px] text-left pr-2">
            <div>
              {/* Category Title in Brand Teal */}
              <h3 className="text-4xl sm:text-5xl lg:text-[46px] font-light text-[#1a6660] tracking-tight leading-[1.12] mb-5">
                {currentCategory.line1}
                <br />
                {currentCategory.line2}
              </h3>

              {/* Protection Description - Concise & Punchy */}
              <p className="text-stone-700 text-[14px] lg:text-[15px] leading-[1.7] font-normal max-w-[280px]">
                {currentCategory.description}
              </p>
            </div>

            {/* Arrow Navigation Buttons (← →) with Brand Hover */}
            <div className="flex items-center gap-8 mt-10 lg:mt-auto pt-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous protected surface"
                className="text-stone-800 hover:text-[#50b8ae] transition-all duration-200 cursor-pointer p-1 -ml-1 group"
              >
                <ArrowLeft className="w-8 h-8 stroke-[1.5] transition-transform duration-200 group-hover:-translate-x-1" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next protected surface"
                className="text-stone-800 hover:text-[#50b8ae] transition-all duration-200 cursor-pointer p-1 group"
              >
                <ArrowRight className="w-8 h-8 stroke-[1.5] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Carousel Track with 3 Cards visible at a time on desktop */}
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
                <ProtectedStoneCard
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
