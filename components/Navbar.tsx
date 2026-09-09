"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

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

  const phoneClass = pastVideo
    ? "text-zinc-900 hover:text-teal-600 font-bold"
    : "text-white hover:text-teal-300 font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <div className="relative h-12 w-48 sm:h-16 sm:w-64 md:h-18 md:w-72 transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logo/NanoShield Logo - White Bg.png"
              alt="NanoShield HD Surface Protection"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links - White text over video, dark text past video */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className={navLinkClass}>
            Home
          </a>
          <a href="#technology" className={navLinkClass}>
            Technology
          </a>
          <a href="#stone" className={navLinkClass}>
            Marble & Stone
          </a>
          <a href="#guarantee" className={navLinkClass}>
            10-Year Guarantee
          </a>
          <a href="#pricing" className={navLinkClass}>
            Pricing
          </a>
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:1300000000"
            className={`flex items-center gap-2 text-xs uppercase tracking-wider transition-colors ${phoneClass}`}
          >
            <Phone className="w-4 h-4 text-teal-400" />
            <span>1300 NANOSHIELD</span>
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500 hover:bg-teal-400 text-white shadow-md shadow-teal-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${toggleBtnClass}`}
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
            href="#stone"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-teal-400 text-base font-semibold py-2"
          >
            Marble & Stone
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

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href="tel:1300000000"
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-white py-2"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>1300 NANOSHIELD</span>
            </a>
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500 text-white shadow-md shadow-teal-500/30"
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
