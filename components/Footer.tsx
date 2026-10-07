"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { NAV_ITEMS, LEGAL_ITEMS } from "@/lib/navigation";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREAS, SOCIAL_LINKS } from "@/lib/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative select-none font-sans bg-[#0e1315] text-white border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto pt-14 sm:pt-16 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-12">
        {/* ============================================================ */}
        {/* MAIN 3-COLUMN FOOTER                                          */}
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
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#31847b] text-stone-400 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <span className="text-xs font-bold font-sans">f</span>
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
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

          {/* Column 2: Pages */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white mb-4">
              Pages
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400 font-normal">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400 font-normal">
              <li>
                <a
                  href={PHONE_HREF}
                  className="hover:text-white transition-colors inline-flex items-center gap-2 text-stone-300"
                >
                  <Phone className="w-3.5 h-3.5 text-[#31847b]" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#31847b]" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="text-stone-400 pt-1">
                {SERVICE_AREAS}
              </li>
              <li className="pt-1">
                <Link
                  href="/contact-us"
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
            &copy; {currentYear} NanoShield HD. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-stone-200 transition-colors">
                {item.label}
              </Link>
            ))}
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
