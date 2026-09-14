"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ShieldCheck, Droplets, Eye, Check, ArrowRight, Phone, ChevronDown } from "lucide-react";

const TOTAL_FRAMES = 240;
const FRAME_PATH = "/nanoshield_parallax_frames_web/frames";

function getFrameUrl(index: number) {
  const padded = String(index).padStart(4, "0");
  return `${FRAME_PATH}/frame_${padded}.webp`;
}

// Initial Hero Details shown without scrolling (at scrollProgress = 0)
function HeroInitialDetails({
  scrollProgress,
  isMobile,
}: {
  scrollProgress: number;
  isMobile: boolean;
}) {
  // Completely hide when scrolled past 0.28
  if (scrollProgress >= 0.28) {
    return null;
  }

  // Smooth exit drift & fade between 0.05 and 0.26
  let opacity = 1;
  let translateX = 0;
  let indicatorOpacity = 1;

  if (scrollProgress > 0.05) {
    const exitRatio = Math.min((scrollProgress - 0.05) / 0.21, 1);
    opacity = 1 - exitRatio;
    translateX = exitRatio * (isMobile ? 35 : 85);
    indicatorOpacity = Math.max(0, 1 - exitRatio * 2.5);
  }

  const handleScrollToScience = () => {
    const heroTrack = document.getElementById("hero-track");
    if (heroTrack) {
      const rect = heroTrack.getBoundingClientRect();
      const totalScrollable = heroTrack.offsetHeight - window.innerHeight;
      // Scroll down into Scene 1 of the science parallax story
      const targetY = window.scrollY + rect.top + Math.max(window.innerHeight * 0.9, totalScrollable * 0.38);
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="absolute inset-0 flex items-center px-5 sm:px-12 md:px-16 lg:px-24 transition-transform duration-75 overflow-hidden z-20 pointer-events-none"
        style={{
          opacity,
          transform: `translateX(${translateX}px)`,
          willChange: "transform, opacity",
        }}
      >
        <div className="w-full max-w-5xl text-left pt-14 sm:pt-0">
          {/* Eyebrow Badge - Luxury Minimalist Glass Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.10] backdrop-blur-xl border border-white/[0.16] mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-colors duration-200">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#50b8ae] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#50b8ae] shadow-[0_0_8px_#50b8ae]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-stone-200/90">
              Invisible Stone Surface Protection
            </span>
          </div>

          {/* Headline - Refined lighter font weight & gradient accent */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-light tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] mb-5">
            Enjoy Your Marble Without
            <br />
            <span className="text-stone-100 font-light">
              Rules, Stress or{" "}
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#62cfc4] to-[#42a89e]">
                Regret.
              </span>
            </span>
          </h1>

          {/* Product Details Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-stone-300/90 font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] mb-7">
            Invisible 8mil optical-grade protective film engineered specifically for luxury marble, quartzite & natural stone. Complete defense against acid etching, wine stains, and daily wear.
          </p>

          {/* Feature Highlight Pills - Balanced 4 items, no AI sparkles */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 mb-8 sm:mb-9 max-w-2xl">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/15 text-stone-200 text-xs sm:text-sm font-medium shadow-sm hover:border-white/30 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5 text-[#50b8ae] shrink-0" />
              <span>10-Year Guarantee</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/15 text-stone-200 text-xs sm:text-sm font-medium shadow-sm hover:border-white/30 transition-colors">
              <Droplets className="w-3.5 h-3.5 text-[#50b8ae] shrink-0" />
              <span>100% Acid Proof</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/15 text-stone-200 text-xs sm:text-sm font-medium shadow-sm hover:border-white/30 transition-colors">
              <Eye className="w-3.5 h-3.5 text-[#50b8ae] shrink-0" />
              <span>Crystal Optical Clarity</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/15 text-stone-200 text-xs sm:text-sm font-medium shadow-sm hover:border-white/30 transition-colors">
              <Check className="w-3.5 h-3.5 text-[#50b8ae] shrink-0" />
              <span>Installed from $300m²</span>
            </div>
          </div>

          {/* Interactive CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pointer-events-auto">
            <a
              href="#quote"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#50b8ae] hover:bg-[#43a59b] text-white font-semibold text-sm sm:text-base shadow-[0_4px_24px_rgba(80,184,174,0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:1300626674"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-black/45 hover:bg-black/60 text-white font-medium text-sm sm:text-base backdrop-blur-xl border border-white/25 shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#50b8ae]" />
              <span>1300 NANOSHIELD</span>
            </a>
          </div>
        </div>
      </div>

      {/* Elegant Interactive Floating Glass Scroll Button */}
      <button
        type="button"
        onClick={handleScrollToScience}
        aria-label="Scroll to explore the science"
        className="group absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-xl border border-white/20 hover:border-[#50b8ae]/70 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_4px_24px_rgba(80,184,174,0.3)] transition-all duration-200 z-20 cursor-pointer active:scale-95"
        style={{
          opacity: indicatorOpacity,
          pointerEvents: indicatorOpacity > 0.05 ? "auto" : "none",
        }}
      >
        <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-200 group-hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] transition-colors">
          Scroll to explore the science
        </span>
        <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-[#50b8ae]/25 flex items-center justify-center transition-colors">
          <ChevronDown className="w-3.5 h-3.5 text-[#50b8ae] group-hover:text-white transition-colors animate-bounce" />
        </div>
      </button>
    </>
  );
}

export default function HeroParallaxSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const animationFrameIdRef = useRef<number | null>(null);

  // Render frame on canvas with object-fit: cover
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let img = imagesRef.current.get(frameIndex);
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest available loaded frame
      let nearestIndex = 1;
      let minDiff = Infinity;
      imagesRef.current.forEach((cachedImg, idx) => {
        if (cachedImg.complete && cachedImg.naturalWidth > 0) {
          const diff = Math.abs(idx - frameIndex);
          if (diff < minDiff) {
            minDiff = diff;
            nearestIndex = idx;
          }
        }
      });
      img = imagesRef.current.get(nearestIndex);
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;

    const hRatio = canvasWidth / imgWidth;
    const vRatio = canvasHeight / imgHeight;
    const ratio = Math.max(hRatio, vRatio);

    const drawWidth = imgWidth * ratio;
    const drawHeight = imgHeight * ratio;
    const drawX = (canvasWidth - drawWidth) / 2;
    const drawY = (canvasHeight - drawHeight) / 2;

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Update canvas dimensions with high-DPI scaling
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      renderFrame(Math.round(currentFrameRef.current));
    }
  }, [renderFrame]);

  // Load first frame immediately for instant first paint
  useEffect(() => {
    let isCancelled = false;

    const firstImg = new Image();
    const handleFirstLoad = () => {
      if (isCancelled) return;
      imagesRef.current.set(1, firstImg);
      updateCanvasSize();
      renderFrame(1);
    };

    firstImg.onload = handleFirstLoad;
    firstImg.src = getFrameUrl(1);
    if (firstImg.complete && firstImg.naturalWidth > 0) {
      handleFirstLoad();
    }

    // Concurrent preloader with keyframe priority
    const loadRemainingFrames = async () => {
      const keyframes: number[] = [];
      const remaining: number[] = [];

      for (let i = 2; i <= TOTAL_FRAMES; i += 6) {
        keyframes.push(i);
      }
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        if (i % 6 !== 0) {
          remaining.push(i);
        }
      }

      const queue = [...keyframes, ...remaining];
      const CONCURRENCY = 6;

      const loadSingle = (idx: number): Promise<void> => {
        return new Promise((resolve) => {
          if (isCancelled || imagesRef.current.has(idx)) {
            resolve();
            return;
          }
          const img = new Image();
          img.onload = () => {
            if (!isCancelled) {
              imagesRef.current.set(idx, img);
              if (Math.abs(currentFrameRef.current - idx) < 4) {
                renderFrame(Math.round(currentFrameRef.current));
              }
            }
            resolve();
          };
          img.onerror = () => resolve();
          img.src = getFrameUrl(idx);
        });
      };

      let index = 0;
      const worker = async () => {
        while (index < queue.length && !isCancelled) {
          const currentIdx = queue[index++];
          await loadSingle(currentIdx);
        }
      };

      const workers = Array.from({ length: CONCURRENCY }, () => worker());
      await Promise.all(workers);
    };

    loadRemainingFrames();

    return () => {
      isCancelled = true;
    };
  }, [renderFrame, updateCanvasSize]);

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      updateCanvasSize();
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateCanvasSize]);

  // Smooth frame interpolation (Lerp)
  useEffect(() => {
    let active = true;

    const loop = () => {
      if (!active) return;

      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.25;
        renderFrame(Math.round(currentFrameRef.current));
      }

      animationFrameIdRef.current = requestAnimationFrame(loop);
    };

    animationFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      active = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [renderFrame]);

  // Track scroll progress and map to frame numbers
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      const target = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1)
      );
      targetFrameRef.current = target;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="hero-track"
      ref={containerRef}
      className="relative w-full bg-black"
      style={{ height: "420vh" }}
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {/* Canvas for 240-frame sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Soft shadow vignette that smoothly fades out as you scroll to reveal pure 240-frame visuals */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-10 transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 3.5) }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none z-10 transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 3.5) }}
        />

        {/* ----------------------------------------------------------------- */}
        {/* HERO DETAILS (Visible at Scroll 0% without scrolling -> 26% exit) */}
        {/* ----------------------------------------------------------------- */}
        <HeroInitialDetails
          scrollProgress={scrollProgress}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}
