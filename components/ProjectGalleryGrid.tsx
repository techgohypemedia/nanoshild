"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/lib/gallery";

export default function ProjectGalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const total = items.length;

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % total));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? i : (i - 1 + total) % total));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, total]);

  const active = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-stone-100 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#31847b]"
            aria-label={`View larger image: ${item.alt}`}
          >
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-12">
              <p className="text-base font-semibold text-white">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {active && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="relative h-full max-h-[80vh] w-full max-w-6xl">
            <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain" />
          </div>
          <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close" className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + total) % total)} aria-label="Previous image" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % total)} aria-label="Next image" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6">
            <ChevronRight className="h-6 w-6" />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/80">{active.title} · {activeIndex + 1} / {total}</p>
        </div>
      )}
    </>
  );
}
