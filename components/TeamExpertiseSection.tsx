"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamExpertiseSection() {
  return (
    <section
      id="team-expertise"
      className="w-full overflow-hidden bg-white text-[#1f242e] py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Clean, Full-Width Heading (Slides from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12 w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold leading-tight tracking-tight text-[#1f242e] lg:whitespace-nowrap">
            A Beautiful Benchtop Should Be a Pleasure to Live With
          </h2>
        </motion.div>

        {/* Clean Two-Column Layout (Left Content from Left, Right Image from Right) */}
        <div className="grid items-center gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-2">
          {/* Left Column: Clean Editorial Copy (Slides from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full order-2 lg:order-1 flex flex-col justify-center"
          >
            <div className="space-y-5 text-base sm:text-lg leading-[1.75] text-stone-600 font-normal">
              <p>
                Morning coffee at the island. Dinner preparation with the family. Friends gathered around the kitchen with a glass of wine.
              </p>

              <p className="text-[#1f242e] font-semibold text-lg sm:text-xl pt-1">
                These are the moments you imagined when you chose your stone.
              </p>

              <p>
                If you find yourself watching every glass or worrying about each splash, NanoShield HD adds a layer of protection between your stone and daily life.
              </p>
            </div>

            {/* Subtle, Lightweight Callout */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#f8faf9] border border-[#31847b]/20">
              <p className="text-sm sm:text-[15px] text-stone-700 leading-relaxed font-normal">
                Whether your kitchen is newly finished or your marble has been part of the home for years, we can assess the surface and help you plan its protection.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Clean Marble Island Photo (Slides from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-stone-200/80 order-1 lg:order-2"
          >
            <Image
              src="/marble-lifestyle-island.jpg"
              alt="Family and friends enjoying their kitchen around a protected marble island benchtop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
