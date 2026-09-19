"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ProtectedStoneItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
}

const PROTECTION_ITEMS: ProtectedStoneItem[] = [
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
    subtitle: "Honed & Brushed Anti-Glare",
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
];

export default function MarbleCollectionsSection() {
  // Duplicated list for seamless infinite loop
  const displayItems = [...PROTECTION_ITEMS, ...PROTECTION_ITEMS];

  return (
    <section
      id="marble-collections"
      className="relative z-10 w-full bg-white text-[#1f242e] py-16 sm:py-24 lg:py-28 overflow-hidden border-t border-stone-200/90 select-none"
    >
      <div className="w-full">
        {/* Simple, Centered Header without Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 sm:mb-14 px-6 sm:px-10"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#31847b]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">
              Applied Surface Defense
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1f242e] tracking-tight leading-tight">
            The NanoShield Protective Wrap
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-xl mx-auto font-normal leading-relaxed">
            Optical-grade 8-mil film applied directly over natural marble to permanently eliminate acid etching, wine stains, and knife scratches.
          </p>
        </motion.div>

        {/* Continuous Hardware-Accelerated Auto-Scrolling Marquee Track */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle Left & Right Edge Gradient Fades for Infinite Horizon */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

          {/* Pure GPU Animated Infinite Ribbon (Moves smoothly, pauses on hover) */}
          <div className="animate-marquee-smooth gap-6 py-6 px-4">
            {displayItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group relative w-[300px] sm:w-[360px] lg:w-[420px] shrink-0 aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-stone-200/80 cursor-pointer bg-stone-100 transition-all duration-500 ease-out hover:shadow-[0_24px_48px_rgba(0,0,0,0.18)] hover:-translate-y-1.5"
              >
                {/* Full-Bleed Image Only */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 300px, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Details Overlay: Revealed ONLY on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out flex flex-col justify-between p-6 z-10 pointer-events-none">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-medium text-[#50b8ae] tracking-wider uppercase">
                      Undetectable
                    </span>
                  </div>

                  {/* Bottom Title & Description */}
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                    <div className="flex items-center gap-2 text-xs text-[#50b8ae] font-medium tracking-wide mb-1.5">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-[#50b8ae]" />
                      <span>{item.subtitle}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
