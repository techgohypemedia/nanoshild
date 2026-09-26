"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { openConsultationModal } from "@/components/ConsultationModal";

export default function WhatChangesSection() {
  const handleConsultationClick = () => {
    openConsultationModal({
      title: "Request a Free Quote & Assessment",
      subtitle: "Protect your stone with our optical grade certified stone film. Guaranteed for 10 years.",
    });
  };

  return (
    <section
      id="what-changes-section"
      className="w-full overflow-hidden bg-[#f8f9fa] text-[#1f242e] py-10 sm:py-14 lg:py-16 xl:py-20 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/90"
    >
      {/* Top Full-Width Heading (Above Image & Details) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mb-8 lg:mb-10 max-w-5xl"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-semibold leading-[1.14] tracking-tight text-[#1f242e]">
          Enjoy 10 Years Protection Against Everyday Spills, Stains, Etching &amp; Damage to Your Stone
        </h2>
      </motion.div>

      <div className="w-full grid items-start gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2">
        {/* Left Column: Macro Marble Visual with rounded-3xl frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/3] xl:aspect-[16/11] overflow-hidden rounded-3xl bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-200/80 group"
        >
          <Image
            src="/marble-calacatta-hd.jpg"
            alt="Protected Calacatta Marble Surface Detail"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            priority
          />
        </motion.div>

        {/* Right Column: Editorial Narrative with 3 Protection Features */}
        <div className="w-full flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl xl:max-w-2xl w-full"
          >
            <p className="text-sm sm:text-base leading-relaxed text-stone-600 font-normal">
              NanoShield HD covers the stone with a thin, transparent, stone safe film that helps protect against:
            </p>

            {/* 3 Detailed Protection Feature Cards */}
            <div className="mt-4 space-y-2.5">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs"
              >
                <h3 className="text-sm sm:text-base font-semibold text-[#1f242e] mb-0.5">
                  Stains from food and drinks
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Including coffee, red wine, cooking oils and strongly coloured ingredients.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-[#eaf3f1] border border-[#31847b]/30 shadow-2xs"
              >
                <h3 className="text-sm sm:text-base font-semibold text-[#1f242e] mb-0.5">
                  Acid etching
                </h3>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  The dull marks that lemon juice, vinegar and other acidic spills can leave on sensitive stone.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs"
              >
                <h3 className="text-sm sm:text-base font-semibold text-[#1f242e] mb-0.5">
                  Light scratches and scuffs
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  From everyday contact with items around the home.
                </p>
              </motion.div>
            </div>

            {/* Honed / Polished Finish Note */}
            <div className="mt-3.5 px-4 py-3 rounded-xl bg-stone-100/80 border border-stone-200 text-stone-700 text-xs sm:text-sm font-medium leading-relaxed">
              Your stone&apos;s natural detail remains visible beneath the clear film. Choose from a honed or polished finish to suit the look of your surface.
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5"
            >
              <button
                type="button"
                onClick={handleConsultationClick}
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#31847b] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#256a63] hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#31847b]"
              >
                <span>Request a Quote</span>
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
