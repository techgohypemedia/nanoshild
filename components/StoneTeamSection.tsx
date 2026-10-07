"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StoneTeamSection() {
  return (
    <section
      id="stone-team"
      className="w-full overflow-hidden bg-white text-[#1f242e] py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading (Slides from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12 w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold leading-tight tracking-tight text-[#1f242e]">
            Developed by The Team Who Knows Natural Stone
          </h2>
        </motion.div>

        <div className="grid items-center gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-2">
          {/* Left Column: Marble Image (Slides from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-stone-200/80"
          >
            <Image
              src="/marble-calacatta-hd.jpg"
              alt="White kitchen with a marble-look island benchtop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
            />
          </motion.div>

          {/* Right Column: Copy (Slides from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full flex flex-col justify-center"
          >
            <div className="space-y-4 text-base sm:text-lg leading-[1.75] text-stone-600 font-normal">
              <p>
                For 10 years, our Melbourne team has cleaned, honed, polished and sealed marble and other natural stone.
              </p>
              <p>
                We understand the care these surfaces need. We have also seen how frustrating it can be for homeowners to restore a beautiful benchtop, then worry about the next spill.
              </p>
              <p className="text-[#1f242e] font-semibold text-lg sm:text-xl">
                That experience led us to develop NanoShield HD.
              </p>
              <p>
                Our approach starts with your stone. We look at its condition, finish and any existing marks before recommending the work. If it needs cleaning, polishing or restoration first, you can discuss that with the same team.
              </p>
              <p className="text-stone-700 font-medium">
                You get advice from people who understand both the surface you want to preserve and the protection being applied.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
