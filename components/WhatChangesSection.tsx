"use client";

import Image from "next/image";
import { ArrowRight, Eye, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { openConsultationModal } from "@/components/ConsultationModal";

export default function WhatChangesSection() {
  const handleConsultationClick = () => {
    openConsultationModal({
      title: "Book a Consultation & Live Demo",
      subtitle: "See NanoShield HD in action and discover how our invisible protection transforms your marble care.",
    });
  };

  return (
    <section
      id="what-changes-section"
      className="w-full overflow-hidden bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-24 lg:py-28 xl:py-32 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/90"
    >
      <div className="w-full grid items-center gap-12 lg:gap-16 xl:gap-24 lg:grid-cols-2">
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

        {/* Right Column: Editorial Narrative with Visually vs Functionally Breakdown */}
        <div className="w-full flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl xl:max-w-2xl w-full"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold leading-[1.12] tracking-tight text-[#1f242e]">
              What changes after installation?
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
              At first glance, it feels like nothing has changed at all. The marble looks and feels identical. The true difference shows up in how effortlessly you live.
            </p>

            {/* Dual Comparison Blocks */}
            <div className="mt-8 space-y-4">
              {/* Block 1: Appearance */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-stone-100 text-stone-600">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                    <span>Visually: Nothing</span>
                  </div>
                  <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-full">
                    Zero Distortion
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1f242e] mb-1.5">
                  Your stone remains 100% authentic.
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Zero haze, zero cloudiness, and no artificial plastic sheen. Light reflects naturally across every vein, preserving the true soul of your stone.
                </p>
              </motion.div>

              {/* Block 2: Performance */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#eaf3f1] border border-[#31847b]/30 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#31847b]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#31847b]/15 text-[#31847b]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                    <span>Functionally: Everything</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#31847b] bg-white/80 px-2.5 py-0.5 rounded-full border border-[#31847b]/20">
                    Total Protection
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1f242e] mb-1.5">
                  Total immunity from stains and acid etching.
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Lemons, wine, coffee, and cooking oils cannot touch the marble. Prep food, place hot cups, host freely, and wipe clean in seconds.
                </p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9"
            >
              <button
                type="button"
                onClick={handleConsultationClick}
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#31847b] px-8 py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-[#256a63] hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#31847b]"
              >
                <span>Book a Consultation &amp; Live Demo</span>
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
