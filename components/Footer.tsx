"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ChevronDown, ChevronUp, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full relative select-none font-sans">
      {/* ============================================================ */}
      {/* 1. TOP MAIN FOOTER WITH LUXURY MARBLE BACKGROUND             */}
      {/* ============================================================ */}
      <div className="relative w-full min-h-[460px] py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24 text-white overflow-hidden">
        {/* Marble Background Texture */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/video-marble-bg.jpg"
            alt="Luxury Marble Texture"
            fill
            className="object-cover object-center scale-105"
            priority={false}
          />
          {/* Subtle Dark Ambient Gradient for Clean High-End Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/80 backdrop-blur-[1.5px]" />
        </div>

        {/* Content Container (3 Clean Balanced Columns) */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ----------------- COLUMN 1: OFFICIAL LOGO, BIO & SOCIALS (5 Cols) ----------------- */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col space-y-7">
            {/* Official NanoShield Logo */}
            <Link href="/" className="inline-block group">
              <div className="relative h-14 w-52 sm:h-16 sm:w-64 md:h-18 md:w-72 transition-transform duration-300 group-hover:scale-105 origin-left">
                <Image
                  src="/logo/NanoShield Logo - Dark Bg.png"
                  alt="NanoShield HD Surface Protection"
                  fill
                  className="object-contain object-left drop-shadow-md"
                  priority
                />
              </div>
            </Link>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-3.5 pt-1">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-stone-200 hover:text-white hover:bg-[#50b8ae] hover:border-[#50b8ae] hover:shadow-md hover:shadow-[#50b8ae]/30 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-stone-200 hover:text-white hover:bg-[#50b8ae] hover:border-[#50b8ae] hover:shadow-md hover:shadow-[#50b8ae]/30 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-stone-200 hover:text-white hover:bg-[#50b8ae] hover:border-[#50b8ae] hover:shadow-md hover:shadow-[#50b8ae]/30 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-stone-200 hover:text-white hover:bg-[#50b8ae] hover:border-[#50b8ae] hover:shadow-md hover:shadow-[#50b8ae]/30 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* ----------------- COLUMN 2: SERVICE & NAVBAR LINKS (3.5 Cols) ----------------- */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-wide mb-5 sm:mb-6">
              Service
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300 font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-white transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#marble-collections" className="hover:text-white transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#our-showroom" className="hover:text-white transition-colors">
                  Our Showroom
                </a>
              </li>
              <li>
                <a href="#guarantee" className="hover:text-white transition-colors">
                  10-Year Guarantee
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a
                  href="#marble-collections"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors text-stone-300 font-light pt-1"
                >
                  <span>Our Range</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* ----------------- COLUMN 3: COMPANY & TRUST (3.5 Cols) ----------------- */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-wide mb-5 sm:mb-6">
              Company
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300 font-light">
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
                <a href="#our-showroom" className="hover:text-white transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Catalogue
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="tel:1300000000"
                  className="hover:text-white transition-colors flex items-center gap-2 pt-1 text-stone-200"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-300" />
                  <span>1300 NANOSHIELD</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. BOTTOM SUB-FOOTER BAR (Clean Crisp Light Background)       */}
      {/* ============================================================ */}
      <div className="relative w-full bg-[#f4f2ee] text-[#44403c] border-t border-stone-200/70 py-5 sm:py-6 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-normal">
          
          {/* Copyright */}
          <div className="text-stone-600">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-stone-900 tracking-wide">
              NANOSHIELD HD
            </span>
            . All Rights Reserved.
          </div>

          {/* Email in Center */}
          <a
            href="mailto:contact@nanoshield.in"
            className="flex items-center gap-2 text-stone-700 hover:text-stone-950 transition-colors font-medium"
          >
            <Mail className="w-4 h-4 text-stone-500" />
            <span>contact@nanoshield.in</span>
          </a>

          {/* Privacy & Terms Links + Scroll-to-Top Button */}
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-stone-600 hover:text-stone-900 transition-colors underline-offset-2 hover:underline"
            >
              Privacy policy
            </a>
            <a
              href="#terms"
              className="text-stone-600 hover:text-stone-900 transition-colors underline-offset-2 hover:underline"
            >
              Terms and conditions
            </a>

            {/* Scroll-to-Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-[#50b8ae] text-white hover:bg-[#3ea399] shadow-md shadow-[#50b8ae]/30 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
