"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 86;
const FRAME_PATH = "/nanoshield_parallax_frames_web";

function getFrameUrl(index: number) {
  const padded = String(index).padStart(4, "0");
  return `${FRAME_PATH}/frame_${padded}.webp`;
}

// Helper component to render strictly 2 lines of text moving from left to right with word-by-word reveal
function TwoLineAnimatedText({
  line1,
  line2,
  scrollProgress,
  start,
  end,
  isLast = false,
  fontSizeClass = "text-2xl sm:text-4xl md:text-6xl font-bold",
  isMobile = false,
}: {
  line1: string[];
  line2: string[];
  scrollProgress: number;
  start: number;
  end: number;
  isLast?: boolean;
  fontSizeClass?: string;
  isMobile?: boolean;
}) {
  // If outside this scene's scroll range, don't render
  if (scrollProgress < start - 0.02 || scrollProgress > end + 0.02) {
    return null;
  }

  const allWords = [...line1, ...line2];
  const totalWords = allWords.length;

  // Normalize local progress from 0 (at start) to 1 (at end)
  const localProgress = Math.min(
    Math.max((scrollProgress - start) / (end - start), 0),
    1
  );

  let containerOpacity = 1;
  let containerTranslateX = 0;

  const maxEnterShift = isMobile ? -30 : -150;
  const maxHoldDrift = isMobile ? 10 : 50;
  const maxExitDrift = isMobile ? 35 : 180;
  const lastExitDrift = isMobile ? 12 : 35;

  // Phase 1: Enter from the Left (0 to 0.25)
  if (localProgress < 0.25) {
    const enterRatio = localProgress / 0.25; // 0 -> 1
    containerOpacity = enterRatio;
    containerTranslateX = maxEnterShift * (1 - enterRatio); // -30px (or -150px) -> 0px
  }
  // Phase 2: Gentle Drift in Center while reading / revealing (0.25 to 0.70)
  else if (localProgress <= 0.70) {
    const holdRatio = (localProgress - 0.25) / 0.45; // 0 -> 1
    containerOpacity = 1;
    containerTranslateX = holdRatio * maxHoldDrift; // 0px -> 10px (or 50px)
  }
  // Phase 3: Exit to the Right (0.70 to 1.0)
  else {
    const exitRatio = (localProgress - 0.70) / 0.30; // 0 -> 1
    if (isLast && scrollProgress < 0.95) {
      // Hold last statement clearly until the very end
      containerOpacity = 1;
      containerTranslateX = maxHoldDrift + exitRatio * lastExitDrift;
    } else {
      containerOpacity = 1 - exitRatio;
      containerTranslateX = maxHoldDrift + exitRatio * maxExitDrift;
    }
  }

  // Word-by-word reveal (occurs between localProgress 0.08 and 0.62)
  const wordStart = 0.08;
  const wordEnd = 0.62;
  const wordProgress = Math.min(
    Math.max((localProgress - wordStart) / (wordEnd - wordStart), 0),
    1
  );

  return (
    <div
      className="absolute inset-0 flex items-center px-4 sm:px-12 md:px-16 lg:px-24 select-none pointer-events-none transition-transform duration-75 overflow-hidden"
      style={{
        opacity: containerOpacity,
        transform: `translateX(${containerTranslateX}px)`,
        willChange: "transform, opacity",
      }}
    >
      <div className="w-full max-w-6xl text-left">
        {/* Line 1 */}
        <div className={`${fontSizeClass} tracking-tight text-white leading-snug sm:leading-tight flex flex-wrap sm:flex-nowrap sm:whitespace-nowrap items-baseline gap-x-[0.28em] gap-y-1`}>
          {line1.map((word, i) => {
            const wordIndex = i;
            const threshold = wordIndex / totalWords;
            const wordAlpha = Math.min(
              Math.max((wordProgress - threshold) / (1 / totalWords), 0),
              1
            );
            const wordTranslateX = (1 - wordAlpha) * (isMobile ? -8 : -20); // Word glides in from left

            return (
              <span
                key={`l1-${i}`}
                className="inline-block transition-transform duration-75 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
                style={{
                  opacity: wordAlpha,
                  transform: `translateX(${wordTranslateX}px)`,
                  willChange: "opacity, transform",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Line 2 */}
        <div className={`${fontSizeClass} tracking-tight text-white leading-snug sm:leading-tight mt-2 sm:mt-3 flex flex-wrap sm:flex-nowrap sm:whitespace-nowrap items-baseline gap-x-[0.28em] gap-y-1`}>
          {line2.map((word, i) => {
            const wordIndex = line1.length + i;
            const threshold = wordIndex / totalWords;
            const wordAlpha = Math.min(
              Math.max((wordProgress - threshold) / (1 / totalWords), 0),
              1
            );
            const wordTranslateX = (1 - wordAlpha) * (isMobile ? -8 : -20); // Word glides in from left

            return (
              <span
                key={`l2-${i}`}
                className="inline-block transition-transform duration-75 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
                style={{
                  opacity: wordAlpha,
                  transform: `translateX(${wordTranslateX}px)`,
                  willChange: "opacity, transform",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </div>
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
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      imagesRef.current.set(1, firstImg);
      updateCanvasSize();
      renderFrame(1);
    };

    let isCancelled = false;
    const loadRemainingFrames = async () => {
      const priority: number[] = [];
      for (let i = 2; i <= TOTAL_FRAMES; i += 6) priority.push(i);
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        if (!priority.includes(i)) priority.push(i);
      }

      for (const idx of priority) {
        if (isCancelled) break;
        if (imagesRef.current.has(idx)) continue;

        await new Promise<void>((resolve) => {
          const img = new Image();
          img.src = getFrameUrl(idx);
          img.onload = () => {
            if (!isCancelled) {
              imagesRef.current.set(idx, img);
            }
            resolve();
          };
          img.onerror = () => resolve();
        });
      }
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
        currentFrameRef.current += diff * 0.22;
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
      style={{ height: "360vh" }}
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {/* Canvas for 120-frame sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Soft shadow vignette for maximum text contrast across mobile & desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/25 sm:to-transparent pointer-events-none" />

        {/* ----------------------------------------------------------------- */}
        {/* SCENE 1 (Scroll 2% -> 31%): Enters Left, Words Reveal, Exits Right */}
        {/* ----------------------------------------------------------------- */}
        <TwoLineAnimatedText
          line1={["Enjoy", "Your", "Marble", "Without"]}
          line2={["Rules,", "Stress", "or", "Regret"]}
          scrollProgress={scrollProgress}
          start={0.02}
          end={0.31}
          fontSizeClass="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          isMobile={isMobile}
        />

        {/* ----------------------------------------------------------------- */}
        {/* SCENE 2 (Scroll 33% -> 64%): Enters Left, Words Reveal, Exits Right */}
        {/* ----------------------------------------------------------------- */}
        <TwoLineAnimatedText
          line1={["Invisible", "protection", "that", "lets", "you", "use", "your", "kitchen", "normally"]}
          line2={["without", "changing", "how", "your", "marble", "looks,", "feels", "or", "lives."]}
          scrollProgress={scrollProgress}
          start={0.33}
          end={0.64}
          fontSizeClass="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium"
          isMobile={isMobile}
        />

        {/* ----------------------------------------------------------------- */}
        {/* SCENE 3 (Scroll 66% -> 98%): Enters Left, Words Reveal, Holds/Exits */}
        {/* ----------------------------------------------------------------- */}
        <TwoLineAnimatedText
          line1={["Guaranteed", "not", "to", "crack,", "peel,", "bubble,", "stain,", "etch", "or", "discolour"]}
          line2={["for", "up", "to", "10", "years.", "Fully", "installed", "from", "$300m²."]}
          scrollProgress={scrollProgress}
          start={0.66}
          end={0.98}
          isLast={true}
          fontSizeClass="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium"
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}
