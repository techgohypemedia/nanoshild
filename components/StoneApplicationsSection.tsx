"use client";

import Image from "next/image";
import { ArrowRight, Utensils, GlassWater, Sparkles, Table } from "lucide-react";
import { motion } from "framer-motion";
import { openConsultationModal } from "@/components/ConsultationModal";

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
    icon: Sparkles,
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
  const handleConsultationClick = () => {
    openConsultationModal({
      title: "Request a Consultation",
      subtitle: "Discuss your stone surfaces—from kitchen benchtops to vanities and dining tables.",
    });
  };

  return (
    <section
      id="stone-applications"
      className="w-full overflow-hidden bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-24 lg:py-28 xl:py-32 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-stone-200/90"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight leading-tight">
            Protect the Natural Stone You Use Most
          </h2>
        </motion.div>

        {/* 2x2 Grid of Stone Applications with Visual Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {APPLICATIONS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="group relative flex flex-col sm:flex-row items-stretch overflow-hidden rounded-3xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                {/* Visual Image */}
                <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-center w-full sm:w-3/5">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eaf3f1] text-[#31847b]">
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1f242e]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call-To-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <button
            type="button"
            onClick={handleConsultationClick}
            className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#31847b] px-9 py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-[#256a63] hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#31847b]"
          >
            <span>Request a Consultation</span>
            <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
