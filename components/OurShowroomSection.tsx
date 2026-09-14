"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OurShowroomSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const video = videoWrapperRef.current;
    if (!section || !video) return;

    const ctx = gsap.context(() => {
      // Smoothly scale up the video as the user scrolls into the section
      gsap.fromTo(
        video,
        {
          scale: 0.84,
          boxShadow: "0 15px 35px -10px rgba(0,0,0,0.12)",
        },
        {
          scale: 1.08,
          boxShadow: "0 35px 85px -15px rgba(0,0,0,0.26)",
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "center 45%",
            scrub: 1.2,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-showroom"
      className="relative z-10 w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-14 overflow-hidden border-t border-stone-200/60"
    >
      {/* User-Selected Luxury Marble Surface Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/video-marble-bg.jpg"
          alt="Luxury Marble Surface Background"
          fill
          priority
          className="object-cover object-center opacity-100 contrast-[1.05] brightness-[1.0]"
        />
      </div>

      <div className="relative max-w-[1060px] mx-auto z-10 w-full">
        {/* ============================================================= */}
        {/* SECTION HEADER: Video-Relevant Title                          */}
        {/* ============================================================= */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="relative inline-block px-8 py-2.5 mb-1">
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#50b8ae]" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#50b8ae]" />
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1f242e] tracking-tight">
              Luxury Marble in Action
            </h2>
          </div>
        </div>

        {/* YOUTUBE VIDEO (Smoothly increases in size as you scroll, Zero Black Bars) */}
        <div
          ref={videoWrapperRef}
          className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 bg-stone-100 will-change-transform origin-center"
        >
          <iframe
            src="https://www.youtube.com/embed/ruvn13xDR2g?autoplay=1&mute=1&loop=1&playlist=ruvn13xDR2g&playsinline=1&controls=1&rel=0&modestbranding=1"
            title="NanoShield Surface Protection Demonstration"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0 rounded-2xl sm:rounded-3xl scale-[1.03] origin-center"
          />
        </div>
      </div>
    </section>
  );
}
