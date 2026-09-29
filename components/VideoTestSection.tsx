"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OurShowroomSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInteractive, setIsInteractive] = useState(false);

  // Smooth scroll sync with viewport without heavy spring lag fighting Lenis
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.75, 1]);

  // Re-enable scroll pass-through as soon as user scrolls the page
  useEffect(() => {
    const handleScroll = () => {
      setIsInteractive(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-showroom"
      className="relative z-10 w-full bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-stone-200/90"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Simple, Clean Centered Header with Directional Scroll Animations */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 px-4 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight leading-tight"
          >
            Watch us put NanoShield HD to the test
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Watch us put NanoShield HD to the test with freshly brewed espresso, cab merlot poured straight from the bottle and a freshly cut lemon squeezed straight onto the surface.
          </motion.p>
        </div>

        {/* Full Video Theater: Original clean design */}
        <motion.div
          style={{ scale, opacity }}
          onMouseLeave={() => setIsInteractive(false)}
          className="relative w-full aspect-video rounded-xl overflow-hidden border border-stone-200/90 bg-stone-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] will-change-transform origin-center"
        >
          <iframe
            src="https://www.youtube.com/embed/ruvn13xDR2g?autoplay=1&mute=1&loop=1&playlist=ruvn13xDR2g&playsinline=1&controls=1&rel=0&modestbranding=1"
            title="NanoShield Surface Protection Demonstration"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0 rounded-xl scale-[1.02] origin-center"
          />

          {/* 
            Invisible scroll pass-through overlay:
            Lets mouse wheel events scroll the page smoothly without being swallowed by the iframe.
            Clicking it activates direct interaction with native YouTube controls.
            Scrolling or moving mouse away immediately restores smooth page scrolling.
          */}
          {!isInteractive && (
            <div
              onClick={() => setIsInteractive(true)}
              className="absolute inset-0 z-10 cursor-pointer bg-transparent"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
