"use client";

import Image from "next/image";
import { ArrowRight, Utensils, GlassWater, Droplets, Table } from "lucide-react";
import QuoteLink from "@/components/QuoteLink";

interface ApplicationItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const APPLICATIONS: ApplicationItem[] = [
  {
    id: "kitchen-islands",
    title: "Kitchen benchtops and islands",
    description: "Protect the surfaces where you prepare meals, serve food and gather with family.",
    image: "/marble-kitchen-island.jpg",
    icon: Utensils,
  },
  {
    id: "home-bars",
    title: "Home bars",
    description: "Add protection where drinks are poured and guests settle in for the evening.",
    image: "/collections/space-luminous-bar.jpg",
    icon: GlassWater,
  },
  {
    id: "vanity-tops",
    title: "Bathroom vanity tops",
    description: "Help protect natural stone around your daily skincare and grooming routine.",
    image: "/collections/space-master-bathroom.jpg",
    icon: Droplets,
  },
  {
    id: "dining-tables",
    title: "Dining tables and stone furniture",
    description: "Ask about protecting a marble table or another natural stone piece you use regularly.",
    image: "/marble-living.png",
    icon: Table,
  },
];

export default function StoneApplicationsSection() {

  return (
    <section
      id="stone-applications"
      className="w-full overflow-hidden bg-white text-[#1f242e] py-16 sm:py-24 lg:py-28 xl:py-32 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/90"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight leading-tight">
            Protect the Natural Stone You Use Most
          </h2>
        </div>

        {/* 2-Column Grid of Stone Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {APPLICATIONS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col sm:flex-row items-stretch overflow-hidden rounded-xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                {/* Visual Image */}
                <div className="relative w-full sm:w-2/5 min-h-[180px] sm:min-h-[200px] shrink-0 overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 300px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-center w-full sm:w-3/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf3f1] text-[#31847b] shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-semibold text-[#1f242e] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call-To-Action Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <QuoteLink
            className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#31847b] px-9 py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-[#256a63] hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#31847b]"
          >
            <span>Request a Consultation</span>
            <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </QuoteLink>
        </div>
      </div>
    </section>
  );
}
