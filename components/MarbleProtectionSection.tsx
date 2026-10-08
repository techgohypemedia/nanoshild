"use client";

import { ShieldCheck } from "lucide-react";

export default function MarbleProtectionSection() {
  return (
    <section id="film-adhesives" className="w-full overflow-hidden bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-24 lg:py-28 xl:py-32 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/90">
      <div className="max-w-7xl mx-auto w-full">
        <div className="py-4 text-[#1f242e]">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-tight tracking-tight text-[#1f242e]">
              Don&apos;t Risk Damaging Your Marble With Inferior Films &amp; Adhesives
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed font-normal pt-1">
              <p>
                The adhesive matters as much as the film. Unfortunately for homeowners, car protection films are often sold as a suitable marble protection film. It isn&apos;t.
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
        </div>
      </div>
    </section>
  );
}
