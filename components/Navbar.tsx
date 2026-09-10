"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [pastVideo, setPastVideo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero-track");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // Navbar remains transparent and in video-mode until the user scrolls past the video track
        setPastVideo(rect.bottom <= 90);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text color based on whether we are over the video or past it
  const navLinkClass = pastVideo
    ? "text-zinc-900 hover:text-teal-600 transition-colors duration-200 font-semibold"
    : "text-white hover:text-teal-300 transition-colors duration-200 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]";

  const toggleBtnClass = pastVideo
    ? "text-zinc-900 hover:text-black"
    : "text-white hover:text-zinc-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        pastVideo
          ? "bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-md py-3"
          : "bg-transparent border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-6">
        {/* Brand Logo with Dynamic Theme Switching for perfect contrast */}
        <a href="#" className="flex items-center group shrink-0">
          <div className="relative h-10 w-44 sm:h-11 sm:w-52 lg:h-12 lg:w-56 transition-transform duration-200 group-hover:scale-105">
            <Image
              src={
                pastVideo
                  ? "/logo/NanoShield Logo - White Bg.png"
                  : "/logo/NanoShield Logo - Dark Bg.png"
              }
              alt="NanoShield HD Surface Protection"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links - Perfectly centered, strictly single-line whitespace-nowrap */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-9 text-sm xl:text-[15px] whitespace-nowrap">
          <a href="#" className={`${navLinkClass} whitespace-nowrap py-1`}>
            Home
          </a>
          <a href="#technology" className={`${navLinkClass} whitespace-nowrap py-1`}>
            Technology
          </a>
          <a href="#marble-collections" className={`${navLinkClass} whitespace-nowrap py-1`}>
            Collections
          </a>
          <a href="#our-showroom" className={`${navLinkClass} whitespace-nowrap py-1`}>
            Our Showroom
          </a>
          <a href="#guarantee" className={`${navLinkClass} whitespace-nowrap py-1`}>
            10-Year Guarantee
          </a>
          <a href="#pricing" className={`${navLinkClass} whitespace-nowrap py-1`}>
            Pricing
          </a>
        </nav>

        {/* Action CTA Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-6 py-2.5 xl:px-7 xl:py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#50b8ae] hover:bg-[#3ea399] text-white shadow-md shadow-[#50b8ae]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${toggleBtnClass}`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 text-center animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-teal-400 text-base font-semibold py-2"
          >
            Home
          </a>
          <a
            href="#technology"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-teal-400 text-base font-semibold py-2"
          >
            Technology
          </a>
          <a
            href="#marble-collections"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-teal-400 text-base font-semibold py-2"
          >
            Collections
          </a>
          <a
            href="#our-showroom"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-teal-400 text-base font-semibold py-2"
          >
            Our Showroom
          </a>
          <a
            href="#guarantee"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-teal-400 text-base font-semibold py-2"
          >
            10-Year Guarantee
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-teal-400 text-base font-semibold py-2"
          >
            Pricing
          </a>

          <div className="pt-4 border-t border-white/10">
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#50b8ae] text-white shadow-md shadow-[#50b8ae]/30"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
