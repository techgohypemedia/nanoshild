"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function TeamExpertiseSection() {
  return (
    <section
      id="team-expertise"
      className="w-full overflow-hidden bg-white text-[#1f242e] py-16 sm:py-24 lg:py-28 xl:py-32 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/90"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16 lg:space-y-24">
        
        {/* ============================================================ */}
        {/* PART 1: Developed by The Team Who Knows Natural Stone        */}
        {/* ============================================================ */}
        <div className="grid items-center gap-12 lg:gap-16 xl:gap-24 lg:grid-cols-2">
          {/* Left Column: Editorial Content */}
          <div className="w-full flex items-center justify-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl xl:max-w-2xl w-full"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold leading-[1.12] tracking-tight text-[#1f242e]">
                Developed by The Team Who Knows Natural Stone
              </h2>

              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
                <p>
                  For 10 years, our Melbourne team has cleaned, honed, polished and sealed marble and other natural stone.
                </p>

                <p>
                  We understand the care these surfaces need. We have also seen how frustrating it can be for homeowners to restore a beautiful benchtop, then worry about the next spill.
                </p>

                <p className="text-[#1f242e] font-medium text-lg sm:text-xl pt-1">
                  That experience led us to develop NanoShield HD.
                </p>

                <p>
                  Our approach starts with your stone. We look at its condition, finish and any existing marks before recommending the work. If it needs cleaning, polishing or restoration first, you can discuss that with the same team.
                </p>

                <p className="text-stone-800 font-medium">
                  You get advice from people who understand both the surface you want to preserve and the protection being applied.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Architectural Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/3] xl:aspect-[16/11] overflow-hidden rounded-xl bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-200/80 group order-1 lg:order-2"
          >
            <Image
              src="/contact-room.jpg"
              alt="Melbourne Natural Stone Care & Protection Experts"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              priority
            />
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* PART 2: Don't Risk Damaging Your Marble With Inferior Films  */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="py-4 text-[#1f242e]"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-tight tracking-tight text-[#1f242e]">
              Don&apos;t Risk Damaging Your Marble With Inferior Films &amp; Adhesives
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed font-normal pt-1">
              <p>
                The adhesive matters as much as the film. Unfortunately for homeowners, car protection films are often sold as a suitable marble protection film. It isn’t.
              </p>

              <p>
                Car films use adhesives developed for vehicle paintwork. If an adhesive bonds too strongly to marble or natural stone, removing the film can damage the surface, leaving extra polishing or restoration work before a replacement can be fitted.
              </p>
            </div>

            {/* High-Contrast Solution Callout Box */}
            <div className="mt-6 p-6 sm:p-7 rounded-2xl bg-[#eaf3f1] border border-[#31847b]/30 shadow-2xs flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#31847b] text-white mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="font-semibold text-base sm:text-lg text-[#102c29] leading-relaxed">
                NanoShield HD is developed specifically for stone, with an adhesive system designed for secure protection and professional removal when replacement is needed.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
