"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wine, Citrus, ShieldCheck } from "lucide-react";

const BENEFITS = [
  {
    title: "Stains from food and drinks",
    description: "Including coffee, red wine, cooking oils and strongly coloured ingredients.",
    image: "/grid/wine-glass.jpg",
    alt: "Glass of red wine on a marble kitchen island",
    icon: Wine,
  },
  {
    title: "Acid etching",
    description: "The dull marks that lemon juice, vinegar and other acidic spills can leave on sensitive stone.",
    image: "/grid/lemon-cutting.jpg",
    alt: "Freshly cut lemon on a marble benchtop",
    icon: Citrus,
  },
  {
    title: "Light scratches and scuffs",
    description: "From everyday contact with items around the home.",
    image: "/grid/food-prep.jpg",
    alt: "Bread and serving board on a marble benchtop",
    icon: ShieldCheck,
  },
];

export default function ProtectionBenefitsSection() {
  return (
    <section
      id="protection-benefits"
      className="w-full overflow-hidden bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading (Slides from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold leading-tight tracking-tight text-[#1f242e]">
            Enjoy 10 Years Protection Against Everyday Spills, Stains, Etching &amp; Damage to Your Stone
          </h2>
        </motion.div>

        {/* Intro (Slides from Right) */}
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-3xl text-base sm:text-lg leading-[1.75] text-stone-600 mb-10 sm:mb-12"
        >
          NanoShield HD covers the stone with a thin, transparent, stone safe film that helps protect against:
        </motion.p>

        {/* Protection Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {BENEFITS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf3f1] text-[#31847b] shrink-0">
                      <IconComponent className="w-4.5 h-4.5" />
                    </span>
                    <h3 className="text-lg font-semibold text-[#1f242e] leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 sm:mt-12 max-w-3xl text-base sm:text-lg leading-[1.75] text-stone-700 font-medium"
        >
          Your stone&apos;s natural detail remains visible beneath the clear film. Choose from a honed or polished finish to suit the look of your surface.
        </motion.p>
      </div>
    </section>
  );
}
