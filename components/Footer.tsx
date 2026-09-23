"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative select-none font-sans bg-[#0e1315] text-white border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto pt-14 sm:pt-16 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-12">
        {/* ============================================================ */}
        {/* MAIN 4-COLUMN FOOTER                                          */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative h-11 w-44 sm:h-12 sm:w-48 transition-transform duration-200 group-hover:scale-102 origin-left">
                <Image
                  src="/logo/NanoShield Logo - Dark Bg.png"
                  alt="NanoShield HD Surface Protection"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
              Invisible stone protection engineered to preserve luxury marble, quartzite, and fine natural stone surfaces.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#31847b] text-stone-400 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <span className="text-xs font-bold font-sans">f</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#31847b] text-stone-400 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#31847b] text-stone-400 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#31847b] text-stone-400 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services (2.5 cols) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400 font-normal">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/protective-film" className="hover:text-white transition-colors">
                  Protective Film
                </Link>
              </li>
              <li>
                <Link href="/our-showroom" className="hover:text-white transition-colors">
                  Our Showroom
                </Link>
              </li>
              <li>
                <Link href="/guarantee" className="hover:text-white transition-colors">
                  10-Year Guarantee
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2.5 cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400 font-normal">
              <li>
                <a href="#clientele" className="hover:text-white transition-colors">
                  Clientele
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-white transition-colors">
                  Media & Press
                </a>
              </li>
              <li>
                <Link href="/our-showroom" className="hover:text-white transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Catalogue
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400 font-normal">
              <li>
                <a
                  href="tel:1300000000"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 text-stone-300"
                >
                  <Phone className="w-3.5 h-3.5 text-[#31847b]" />
                  <span>1300 NANOSHIELD</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@nanoshield.in"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#31847b]" />
                  <span>contact@nanoshield.in</span>
                </a>
              </li>
              <li className="text-stone-400 pt-1">
                Sydney · Melbourne · Brisbane
              </li>
              <li className="pt-1">
                <Link
                  href="/#quote"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#50b8ae] hover:text-white transition-colors"
                >
                  <span>Request a Quote</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ============================================================ */}
        {/* BOTTOM SUB-FOOTER                                            */}
        {/* ============================================================ */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-normal">
          <div>
            &copy; {currentYear} NanoShield HD™. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-stone-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-stone-200 transition-colors">
              Terms & Conditions
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
