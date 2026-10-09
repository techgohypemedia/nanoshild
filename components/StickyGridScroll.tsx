"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import QuoteLink from "@/components/QuoteLink";

export default function StickyGridScroll() {

  return (
    <div id="narrative-story" className="w-full overflow-hidden bg-[#f8f9fa] text-[#1f242e]">
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: KITCHEN CONFIDENCE (With Luxury Marble Photo)       */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-14 sm:py-20 lg:py-24 xl:py-28 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        {/* Full-Width Top Heading (Above Image & Content) */}
        <div className="w-full mb-6 lg:mb-8 max-w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-semibold leading-[1.15] tracking-tight text-[#1f242e]">
            Enjoy your kitchen. Feel confident about your stone.
          </h2>
        </div>

        <div className="w-full grid items-start gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-2">
          {/* Left: Rounded Luxury Marble Visual */}
          <div className="relative w-full aspect-[4/3] xl:aspect-[16/11] overflow-hidden rounded-xl bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-200/80 group lg:-mt-1">
            <Image
              src="/marble-kitchen-island.jpg"
              alt="Luxury Calacatta Gold Marble Island Countertop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              priority
            />
          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="w-full flex items-center justify-start">
            <div className="max-w-xl xl:max-w-2xl w-full">
              <div className="space-y-3.5 text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
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
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3.5 text-sm sm:text-base font-medium leading-relaxed text-[#1f242e]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#31847b]/10 text-[#31847b] mt-0.5">
                      <Check size={14} className="stroke-[2.5]" aria-hidden="true" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs sm:text-sm font-medium text-stone-500 italic">
                For marble, travertine, quartzite, granite and other suitable natural stone.
              </p>

              <div className="mt-8">
                <QuoteLink
                  className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#50b8ae] px-8 py-4 text-sm sm:text-base font-semibold text-[#102c29] transition-all duration-300 hover:bg-[#79cec5] hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50b8ae]"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </QuoteLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: BENCHTOP LIVING (With Family Marble Photo)          */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-14 sm:py-20 lg:py-24 xl:py-28 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 bg-white border-t border-stone-200/80">
        {/* Full-Width Top Heading (Above Content & Image) */}
        <div className="w-full mb-6 lg:mb-8 max-w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-semibold leading-[1.15] tracking-tight text-[#1f242e]">
            A Beautiful Benchtop Should Be a Pleasure to Live With
          </h2>
        </div>

        <div className="w-full grid items-start gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-2">
          {/* Left: Editorial Content */}
          <div className="w-full flex items-center justify-start order-2 lg:order-1">
            <div className="max-w-xl xl:max-w-2xl w-full">
              <div className="space-y-3.5 text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
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
            </div>
          </div>

          {/* Right: Rounded Visual Frame with Gap */}
          <div className="relative w-full aspect-[4/3] xl:aspect-[16/11] overflow-hidden rounded-xl bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-200/80 group order-1 lg:order-2">
            <Image
              src="/marble-family-freedom.jpg"
              alt="Joyful Family Living and Dining on Protected Marble Island"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
