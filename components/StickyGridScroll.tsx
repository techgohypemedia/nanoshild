"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { openConsultationModal } from "@/components/ConsultationModal";

export default function StickyGridScroll() {
  const handleQuoteClick = () => {
    openConsultationModal({
      title: "Request a Free Custom Quote",
      subtitle: "Tell us about your space and stone surfaces for an accurate, tailored estimate.",
    });
  };

  return (
    <div id="narrative-story" className="w-full overflow-hidden bg-[#f8f9fa] text-[#1f242e]">
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: KITCHEN CONFIDENCE (With Luxury Marble Photo)       */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-16 sm:py-24 lg:py-28 xl:py-32 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="w-full grid items-center gap-12 lg:gap-16 xl:gap-24 lg:grid-cols-2">
          {/* Left: Rounded Luxury Marble Visual */}
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
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold leading-[1.12] tracking-tight text-[#1f242e]">
                Enjoy your kitchen. Feel confident about your stone.
              </h2>

              <div className="mt-5 space-y-3.5 text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
                <p>
                  You chose your stone for its character, its colour and the way it brings your home together. Give it the protection it deserves.
                </p>
                <p>
                  NanoShield HD is a clear marble protection film that helps protect natural stone from stains, acid etching and everyday surface scratches.
                </p>
                <p className="text-stone-700 font-medium">
                  Developed through 10 years of stone care experience, it gives you greater confidence to cook, entertain and enjoy the surfaces you have invested in.
                </p>
              </div>

              {/* Checklist items */}
              <ul className="mt-8 space-y-3.5 border-t border-stone-200/90 pt-7">
                {[
                  "Premium film engineered for natural stone",
                  "Supplied and installed from $300m²",
                  "More cost effective than restoration with less downtime",
                  "Backed by our 10 year guarantee*",
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

              <p className="mt-6 text-xs sm:text-sm font-medium text-stone-500 italic">
                For marble, travertine, quartzite, granite and other suitable natural stone.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <button
                  type="button"
                  onClick={handleQuoteClick}
                  className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#50b8ae] px-8 py-4 text-sm sm:text-base font-semibold text-[#102c29] transition-all duration-300 hover:bg-[#79cec5] hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50b8ae]"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: BENCHTOP LIVING (With Family Marble Photo)          */}
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
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-semibold leading-[1.12] tracking-tight text-[#1f242e]">
                A Beautiful Benchtop Should Be a Pleasure to Live With
              </h2>

              <div className="mt-5 space-y-3.5 text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
                <p>
                  Morning coffee at the island. Dinner preparation with the family. Friends gathered around the kitchen with a glass of wine.
                </p>
                <p>
                  These are the moments you imagined when you chose your stone.
                </p>
                <p className="text-stone-700 font-medium">
                  If you find yourself watching every glass or worrying about each splash, NanoShield HD adds a layer of protection between your stone and daily life.
                </p>
              </div>

              {/* Assessment Callout Card */}
              <div className="mt-7 p-5 rounded-2xl bg-[#f4f8f7] border border-[#31847b]/25 shadow-2xs">
                <p className="text-sm sm:text-base font-medium leading-relaxed text-[#102c29]">
                  Whether your kitchen is newly finished or your marble has been part of the home for years, we can assess the surface and help you plan its protection.
                </p>
              </div>
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
