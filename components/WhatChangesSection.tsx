"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { openConsultationModal } from "@/components/ConsultationModal";

const features = [
  "Premium film engineered for natural stone",
  "Supplied and installed from $300m²",
  "More cost effective than restoration with less downtime",
  "Backed by our 10 year guarantee*",
];

export default function WhatChangesSection() {
  const handleRequestQuote = () => {
    openConsultationModal({
      title: "Request a Free Custom Quote",
      subtitle:
        "Tell us about your space and stone surfaces for an accurate, tailored estimate.",
    });
  };

  return (
    <section
      id="what-changes-section"
      className="w-full overflow-hidden bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Full-Width Heading (Slides from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12 w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold leading-tight tracking-tight text-[#1f242e] lg:whitespace-nowrap">
            Enjoy your kitchen. Feel confident about your stone.
          </h2>
        </motion.div>

        {/* Balanced Two-Column Layout (Left Image comes from Left, Right Content from Right) */}
        <div className="grid items-center gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-2">
          {/* Left Column: Kitchen Image (Slides from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-stone-200/80"
          >
            <Image
              src="/marble-kitchen-island.jpg"
              alt="Modern kitchen with protected marble countertop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
              priority
            />
          </motion.div>

          {/* Right Column: Editorial Narrative & Features (Slides from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full flex flex-col justify-center"
          >
            <div className="space-y-4 text-base sm:text-lg leading-[1.75] text-stone-600 font-normal">
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

            {/* Checkmark Feature List (Staggered subtle slide from right) */}
            <div className="mt-7 space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#31847b] text-white">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <span className="text-[#1f242e] text-sm sm:text-base font-medium leading-snug">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stone Types Note */}
            <p className="mt-5 text-xs sm:text-sm text-stone-500 italic leading-relaxed">
              For marble, travertine, quartzite, granite and other suitable natural stone.
            </p>

            {/* CTA Button */}
            <div className="mt-7">
              <button
                type="button"
                onClick={handleRequestQuote}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#31847b] text-white text-sm sm:text-base font-semibold shadow-sm hover:bg-[#276b63] transition-all duration-300 hover:shadow-md hover:gap-3 cursor-pointer active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
