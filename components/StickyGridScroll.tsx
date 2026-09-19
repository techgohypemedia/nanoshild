"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { openConsultationModal } from "@/components/ConsultationModal";

export default function StickyGridScroll() {
  const handleConsultationClick = () => {
    openConsultationModal({
      title: "Book Your Stone Consultation",
      subtitle: "Experience authentic NanoShield HD protection for your marble and natural stone surfaces.",
      stoneType: "Calacatta / Carrara Marble",
    });
  };

  const handleQuoteClick = () => {
    openConsultationModal({
      title: "Request a Free Custom Quote",
      subtitle: "Tell us about your space and stone surfaces for an accurate, tailored estimate.",
    });
  };

  return (
    <div id="narrative-story" className="w-full overflow-hidden bg-[#f8f9fa] text-[#1f242e]">
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: THE DILEMMA                                        */}
      {/* End-to-end full width with generous gaps and rounded frames   */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-16 sm:py-24 lg:py-28 xl:py-32 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="w-full grid items-center gap-12 lg:gap-16 xl:gap-24 lg:grid-cols-2">
          {/* Left: Rounded Luxury Marble Visual with Gap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/3] xl:aspect-[16/11] overflow-hidden rounded-3xl bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-200/80 group"
          >
            <Image
              src="/marble-kitchen-island.jpg"
              alt="Luxury Calacatta Gold Marble Island Countertop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              priority
            />
          </motion.div>

          {/* Right: Editorial Narrative Content */}
          <div className="w-full flex items-center justify-start">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl xl:max-w-2xl w-full"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#31847b]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">
                  The Reality of Natural Stone
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold leading-[1.12] tracking-tight text-[#1f242e]">
                You didn’t choose marble to tiptoe around it.
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
                You fell in love with its organic depth, delicate veining, and timeless presence. But somewhere between installation day and everyday life, that joy quietly turned into tension—watching guests, warning kids, and bracing for spills.
              </p>

              {/* Checklist items with staggered animation */}
              <ul className="mt-8 space-y-4 border-t border-stone-200/90 pt-7">
                {[
                  "Total physical separation from lemon, wine, coffee & acidic oils",
                  "Optically clear 8mil film preserves 100% of authentic stone veining",
                  "Guaranteed not to yellow, peel, or bubble for up to 10 years",
                ].map((point, idx) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                    className="flex items-start gap-3.5 text-sm sm:text-base font-medium leading-relaxed text-[#1f242e]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#31847b]/10 text-[#31847b] mt-0.5">
                      <Check size={14} className="stroke-[2.5]" aria-hidden="true" />
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-9"
              >
                <button
                  type="button"
                  onClick={handleConsultationClick}
                  className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#50b8ae] px-8 py-4 text-sm sm:text-base font-semibold text-[#102c29] transition-all duration-300 hover:bg-[#79cec5] hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50b8ae]"
                >
                  <span>Book Your Consultation</span>
                  <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: THE FREEDOM                                        */}
      {/* Clean complementary tone with generous gaps and balance       */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-16 sm:py-24 lg:py-28 xl:py-32 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 bg-white border-t border-stone-200/80">
        <div className="w-full grid items-center gap-12 lg:gap-16 xl:gap-24 lg:grid-cols-2">
          {/* Left: Editorial Content */}
          <div className="w-full flex items-center justify-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl xl:max-w-2xl w-full"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#31847b]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">
                  Carefree Living
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold leading-[1.12] tracking-tight text-[#1f242e]">
                Imagine not thinking about your benchtop anymore.
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
                No hovering when someone sets a glass down. No racing for cloth when oil splashes. Settle into the kitchen you designed for living, hosting, and cooking without anxiety.
              </p>

              {/* Checklist items */}
              <ul className="mt-8 space-y-4 border-t border-stone-200/90 pt-7">
                {[
                  "Place coffee mugs and prep meals directly on the stone",
                  "Wipe spills effortlessly with standard gentle stone cleansers",
                  "The stone looks and feels completely natural—the tension is gone",
                ].map((point, idx) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                    className="flex items-start gap-3.5 text-sm sm:text-base font-medium leading-relaxed text-[#1f242e]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#31847b]/10 text-[#31847b] mt-0.5">
                      <Check size={14} className="stroke-[2.5]" aria-hidden="true" />
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-9"
              >
                <button
                  type="button"
                  onClick={handleQuoteClick}
                  className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#182526] px-8 py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-[#2c3e40] hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#182526]"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Rounded Visual Frame with Gap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/3] xl:aspect-[16/11] overflow-hidden rounded-3xl bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-200/80 group order-1 lg:order-2"
          >
            <Image
              src="/marble-family-freedom.jpg"
              alt="Joyful Family Living and Dining on Protected Marble Island"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
