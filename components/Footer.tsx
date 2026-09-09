"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#fbf9f5] pt-6 sm:pt-10">
      {/* Outer Rounded Architectural Footer Card (Matching Image 1) */}
      <div className="max-w-[1400px] mx-auto rounded-t-[36px] sm:rounded-t-[48px] bg-white text-stone-900 border-t border-stone-200/80 shadow-[0_-10px_30px_rgba(0,0,0,0.02)] pt-8 sm:pt-12 pb-6 sm:pb-10 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden relative">

        {/* ============================================================ */}
        {/* COPYRIGHT, LEGAL LINKS & SOCIAL ICONS (From Image 1)         */}
        {/* ============================================================ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-stone-200/60">
          {/* Left: Copyright + Legal Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-xs text-stone-500 font-light">
            <span>
              &copy; {currentYear} NanoShield HD. All rights reserved.
            </span>

            <div className="flex items-center gap-4 sm:gap-5">
              <a
                href="#terms"
                className="hover:text-stone-900 transition-colors underline-offset-2 hover:underline"
              >
                Terms & Conditions
              </a>
              <a
                href="#privacy"
                className="hover:text-stone-900 transition-colors underline-offset-2 hover:underline"
              >
                Privacy
              </a>
              <a
                href="#cookies"
                className="hover:text-stone-900 transition-colors underline-offset-2 hover:underline"
              >
                Cookies
              </a>
            </div>
          </div>

          {/* Right: Social Media Glyphs (Image 1 Style: X, LinkedIn, Instagram, Facebook) */}
          <div className="flex items-center gap-4 text-stone-800 shrink-0">
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X Twitter"
              className="p-1 hover:text-black hover:scale-110 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-1 hover:text-black hover:scale-110 transition-all duration-200"
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
              className="p-1 hover:text-black hover:scale-110 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-1 hover:text-black hover:scale-110 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* GIANT BRAND WATERMARK (Text-based with refined darkness)     */}
        {/* ============================================================ */}
        <div className="pt-8 sm:pt-14 pb-2 sm:pb-6 overflow-hidden select-none pointer-events-none text-center">
          <span
            className="block font-bold tracking-tight text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13vw] leading-[0.88] select-none uppercase font-sans"
            style={{
              background:
                "linear-gradient(180deg, rgba(71, 85, 105, 0.42) 0%, rgba(148, 163, 184, 0.26) 55%, rgba(203, 213, 225, 0.08) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.04em",
            }}
          >
            NanoShield
          </span>
        </div>

      </div>
    </footer>
  );
}
