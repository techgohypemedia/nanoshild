"use client";

import Image from "next/image";

export default function OurShowroomSection() {
  return (
    <section
      id="our-showroom"
      className="relative z-10 w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 overflow-hidden border-t border-stone-200/60"
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

      <div className="relative max-w-[1020px] mx-auto z-10 w-full">
        {/* ============================================================= */}
        {/* SECTION HEADER: Video-Relevant Title                          */}
        {/* ============================================================= */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="relative inline-block px-8 py-2.5 mb-1">
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#e11d48]" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#e11d48]" />
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1f242e] tracking-tight">
              Luxury Marble in Action
            </h2>
          </div>
        </div>

        {/* ============================================================= */}
        {/* YOUTUBE VIDEO (Height +10%, Width -5%, Clean Slab View)       */}
        {/* ============================================================= */}
        <div className="relative w-full aspect-[16/9] max-h-[540px] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/7zqNx66uOMM?rel=0&modestbranding=1&playsinline=1"
            title="Luxury Marble in Action"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
