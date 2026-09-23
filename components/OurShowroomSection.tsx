"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function OurShowroomSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress as section enters viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Smoothly expands video to full expansive theater on scroll
  const scale = useTransform(smoothProgress, [0, 1], [0.88, 1.04]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [0.65, 1]);

  return (
    <section
      ref={sectionRef}
      id="our-showroom"
      className="relative z-10 w-full bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-stone-200/90"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Simple, Clean Centered Header (No AI logo, No clutter) */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight leading-tight">
            Luxury Marble in Action
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-xl mx-auto font-normal leading-relaxed">
            Watch live citrus etching tests, red wine spills, and everyday culinary resilience on protected natural stone.
          </p>
        </div>

        {/* Full Video Theater: Smoothly Expands on Scroll */}
        <motion.div
          style={{ scale, opacity }}
          className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 bg-stone-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] will-change-transform origin-center"
        >
          <iframe
            src="https://www.youtube.com/embed/ruvn13xDR2g?autoplay=1&mute=1&loop=1&playlist=ruvn13xDR2g&playsinline=1&controls=1&rel=0&modestbranding=1"
            title="NanoShield Surface Protection Demonstration"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0 rounded-2xl sm:rounded-3xl scale-[1.02] origin-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
