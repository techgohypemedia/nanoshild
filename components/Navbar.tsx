"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openConsultationModal } from "@/components/ConsultationModal";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/technology" },
  { label: "Protective Film", href: "/protective-film", match: ["/protective-film", "/protective-wrap"] },
  { label: "Our Showroom", href: "/our-showroom" },
  { label: "10-Year Guarantee", href: "/guarantee" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [pastVideo, setPastVideo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero-track") ?? document.getElementById("page-hero");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // Navbar remains transparent and in video-mode until the user scrolls past the video track
        setPastVideo(rect.bottom <= 90);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Text color based on whether we are over the video or past it
  const navLinkClass = pastVideo
    ? "text-zinc-900 hover:text-teal-600 transition-colors duration-200 font-semibold"
    : "text-white hover:text-teal-300 transition-colors duration-200 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]";

  const toggleBtnClass = pastVideo
    ? "text-zinc-900 hover:text-black"
    : "text-white hover:text-zinc-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          pastVideo
            ? "bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-md py-3"
            : "bg-transparent border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-6">
          {/* Brand Logo with Dynamic Theme Switching for perfect contrast */}
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="flex items-center group shrink-0">
            <div className="relative h-12 w-52 sm:h-13 sm:w-60 lg:h-14 lg:w-64 transition-transform duration-200 group-hover:scale-105">
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
          </Link>

          {/* Desktop Navigation Links - Perfectly centered, strictly single-line whitespace-nowrap */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9 text-sm xl:text-[15px] whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = item.match
                ? item.match.includes(pathname)
                : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${navLinkClass} whitespace-nowrap py-1 aria-[current=page]:underline underline-offset-8 decoration-[#50b8ae] decoration-2`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              type="button"
              onClick={() =>
                openConsultationModal({
                  title: "Request a Custom Quote",
                  subtitle: "Speak directly with our certified NanoShield HD protection team.",
                })
              }
              className="inline-flex items-center gap-2 px-6 py-2.5 xl:px-7 xl:py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#50b8ae] hover:bg-[#3ea399] text-white shadow-md shadow-[#50b8ae]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${toggleBtnClass}`}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-screen w-full h-dvh min-h-screen z-[100] lg:hidden bg-white text-[#1f242e] flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Header Bar inside Fullscreen Menu */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-stone-200/80 bg-white shrink-0">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
              >
                <div className="relative h-14 w-60 sm:h-16 sm:w-72">
                  <Image
                    src="/logo/NanoShield Logo - White Bg.png"
                    alt="NanoShield HD Surface Protection"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full text-zinc-700 hover:text-black bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links - Large, bold luxury typography filling the view */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 py-6 sm:py-8 space-y-4 sm:space-y-6">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = item.match
                  ? item.match.includes(pathname)
                  : pathname === item.href;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -70 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05 + idx * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-1 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight transition-colors duration-200 ${
                        isActive
                          ? "text-[#50b8ae]"
                          : "text-zinc-900 hover:text-[#50b8ae]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA & Direct Call */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.35, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 border-t border-stone-200/80 shrink-0 space-y-4 bg-stone-50/80"
            >
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultationModal({
                    title: "Request a Custom Quote",
                    subtitle: "Speak directly with our certified NanoShield HD protection team.",
                  });
                }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#50b8ae] hover:bg-[#3ea399] active:scale-[0.98] text-white shadow-lg shadow-[#50b8ae]/25 transition-all cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                <a href="tel:1300375030" className="text-zinc-800 font-medium hover:text-[#50b8ae] transition-colors">
                  📞 1300 375 030
                </a>
                <span>Sydney · Melbourne · Brisbane</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
