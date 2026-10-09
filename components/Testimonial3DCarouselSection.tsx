"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight } from "lucide-react";

// Autoplay delay between reviews. Phones get longer so each review can be read before it moves on.
const AUTOPLAY_MS = 2000;
const MOBILE_AUTOPLAY_MS = 7000;
import { GOOGLE_REVIEWS_URL } from "@/lib/contact";

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  verified: boolean;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Maria Leuzzi",
    role: "Verified Google Review",
    rating: 5,
    verified: true,
    text: "The experience from start to finish was an easy process. The Nanoshield looks amazing, so happy with the finished product. Thank you Aaron and Dennis.",
  },
  {
    id: 2,
    name: "Duncan Andrews",
    role: "Verified Google Review",
    rating: 5,
    verified: true,
    text: "We recently had NanoShield HD applied to our marble benchtops, and couldn’t be happier. Great product and even better service. Highly recommend!",
  },
  {
    id: 3,
    name: "Mariam Hanna",
    role: "Local Guide • 27 Reviews",
    rating: 5,
    verified: true,
    text: "We couldn’t be happier with the installation of our nanoshield on our marble kitchen bench. It’s invisible on and now we don’t need to worry about any heat or stain damage. Can’t recommend Aaron and the team enough for their amazing and professional service.",
  },
  {
    id: 4,
    name: "Carmel McConnell",
    role: "Verified Google Review • 8 Reviews",
    rating: 5,
    verified: true,
    text: "We love our new bench top and are delighted with the smooth finish. The nanoshield HD was worth every cent and we are happy to have a clean bench top and have confidence that we will experience no more stains.",
  },
  {
    id: 5,
    name: "Harsh Patel",
    role: "Verified Google Review",
    rating: 5,
    verified: true,
    text: "Flawless!! Top grade film with flawless service. Highly recommend for high end marble/stone.",
  },
  {
    id: 6,
    name: "Yufeng Hong",
    role: "Verified Google Review • 1 Photo",
    rating: 5,
    verified: true,
    text: "6 stars for Aaron! Well done!",
  },
  {
    id: 7,
    name: "Sak Y",
    role: "Verified Google Review • 6 Reviews",
    rating: 5,
    verified: true,
    text: "Great people, timely service and all at very reasonable pricing. They do what they say they are going to do and more. Looking forward to many years of low to no maintenance usage. Very happy clients...",
  },
  {
    id: 8,
    name: "Fiona Monagle",
    role: "Verified Google Review • 4 Reviews",
    rating: 5,
    verified: true,
    text: "After a difficult experience keeping marble free of marks at a previous house, in my recent Brighton renovation I was determined to find a solution. I love marble but don’t want the stress. After some investigation I had Nanoshield applied to my kitchen benches and dressing room table. I could not have been happier with the service and expertise of Aaron and Denis first in rectifying some damage to the marble from installation scratches. Then they applied the nanoshield and I really can’t tell any difference in appearance (even from the bench to the splashback, the splashback having only regular sealant applied). I have tested the product with wine spills and soya sauce. No issues. I could not be happier to recommend others to look into the product, get a sample and test it for yourself. I am confident you will be as happy as I am with my beautiful but stress free marble kitchen.",
  },
  {
    id: 9,
    name: "Felicity Stretch",
    role: "Verified Google Review",
    rating: 5,
    verified: true,
    text: "We had NanoShield applied throughout our new home in late May, protecting all of our marble surfaces across the kitchen, three bathrooms, bar and utility area, and powder room. With such a significant amount of marble in the house, getting the protection right was incredibly important to us — and we honestly could not be happier with the result. The entire experience with NanoShield was exceptional. The service was first-class from beginning to end — professional, meticulous, knowledgeable and genuinely passionate. Several months on, the product has been fantastic and gives us enormous peace of mind!",
  },
  {
    id: 10,
    name: "Hello Beautiful",
    role: "Verified Google Review",
    rating: 5,
    verified: true,
    text: "We are thrilled with the film in our marble kitchen. Great product and even better service!",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.96 10.96 0 0 0 12 1 11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

export default function Testimonial3DCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  // id of the review whose full text is shown inline on its card
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  // When the visitor last swiped or tapped; autoplay waits a full delay after that before moving on.
  const lastInteraction = useRef(0);

  const handleNext = useCallback(() => {
    setExpandedId(null);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setExpandedId(null);
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Autoplay; paused on hover, while a review is expanded, and for one delay after a swipe or tap
  useEffect(() => {
    if (isHovered || expandedId !== null) return;
    const delay = isMobile ? MOBILE_AUTOPLAY_MS : AUTOPLAY_MS;
    const timer = setInterval(() => {
      if (Date.now() - lastInteraction.current < delay) return;
      handleNext();
    }, delay);
    return () => clearInterval(timer);
  }, [isHovered, expandedId, isMobile, handleNext]);

  // Touch Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    lastInteraction.current = Date.now();
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  // Helper to compute 3D offset relative to currentIndex
  const getCardOffset = (index: number) => {
    const total = REVIEWS.length;
    let offset = (index - currentIndex) % total;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <section
      id="customer-reviews"
      className="w-full relative overflow-hidden bg-white text-[#1f242e] py-16 sm:py-24 lg:py-28 xl:py-32 border-t border-stone-200/90"
    >
      {/* Subtle ambient luxury backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#31847b]/10 via-[#eaf3f1]/40 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-semibold text-[#1f242e] tracking-tight leading-[1.14]">
            Here’s What Other Homeowners Say About NanoShield HD
          </h2>
        </div>

        {/* 3D Carousel Stage */}
        <div
          className="relative w-full h-[440px] sm:h-[460px] lg:h-[480px] flex items-center justify-center perspective-[1200px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {REVIEWS.map((review, index) => {
              const offset = getCardOffset(index);
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const isFarLeft = offset === -2;
              const isFarRight = offset === 2;

              // Compute Framer Motion 3D styles
              let xPos = "0%";
              let scale = 0.6;
              let rotateY = 0;
              let opacity = 0;
              let zIndex = 0;

              if (isCenter) {
                xPos = "0%";
                scale = 1;
                rotateY = 0;
                opacity = 1;
                zIndex = 30;
              } else if (isLeft) {
                xPos = "-62%";
                scale = 0.86;
                rotateY = 18;
                opacity = 0.72;
                zIndex = 20;
              } else if (isRight) {
                xPos = "62%";
                scale = 0.86;
                rotateY = -18;
                opacity = 0.72;
                zIndex = 20;
              } else if (isFarLeft) {
                xPos = "-110%";
                scale = 0.72;
                rotateY = 28;
                opacity = 0.25;
                zIndex = 10;
              } else if (isFarRight) {
                xPos = "110%";
                scale = 0.72;
                rotateY = -28;
                opacity = 0.25;
                zIndex = 10;
              }

              const isLongText = review.text.length > 175;
              const isExpanded = expandedId === review.id;
              const displayText = isLongText && !isExpanded ? `${review.text.slice(0, 168)}...` : review.text;

              return (
                <motion.div
                  key={review.id}
                  initial={false}
                  animate={{
                    x: xPos,
                    scale: scale,
                    rotateY: rotateY,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 26,
                    mass: 0.9,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => {
                    lastInteraction.current = Date.now();
                    if (isLeft || isFarLeft) handlePrev();
                    if (isRight || isFarRight) handleNext();
                  }}
                  className={`absolute w-[90%] sm:w-[500px] md:w-[560px] lg:w-[620px] h-[370px] sm:h-[400px] rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-shadow duration-300 ${
                    isCenter
                      ? "shadow-[0_30px_70px_rgba(49,132,123,0.14)] cursor-default ring-1 ring-[#31847b]/20"
                      : "cursor-pointer hover:shadow-xl hover:border-stone-300"
                  }`}
                >
                  <div className="flex flex-col h-full justify-between">
                    {/* Top Row: Rating & Quote Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-[#f59e0b] text-[#f59e0b]"
                          />
                        ))}
                      </div>

                      <div className="h-9 w-9 rounded-full bg-[#eaf3f1] flex items-center justify-center text-[#31847b]">
                        <Quote className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Review text; long reviews expand in place instead of opening a pop-up */}
                    <div className={`flex-1 flex flex-col my-3 ${isExpanded ? "justify-start overflow-y-auto pr-1" : "justify-center overflow-hidden"}`}>
                      <p className="text-stone-700 text-sm sm:text-base lg:text-lg font-normal leading-relaxed italic">
                        &ldquo;{displayText}&rdquo;
                        {isLongText && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedId(isExpanded ? null : review.id);
                            }}
                            className="ml-2 inline-flex items-center text-xs sm:text-sm font-semibold text-[#31847b] hover:underline cursor-pointer not-italic"
                          >
                            {isExpanded ? "Show less" : "Read more"}
                          </button>
                        )}
                      </p>
                    </div>

                    {/* Bottom Row: Customer Info & Stone Tag */}
                    <div className="pt-4 sm:pt-5 border-t border-stone-100 flex items-center justify-between gap-4 shrink-0">
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full shrink-0 bg-[#31847b] text-white flex items-center justify-center text-sm sm:text-base font-semibold" aria-hidden="true">
                          {getInitials(review.name)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm sm:text-base font-semibold text-[#1f242e] leading-tight">
                              {review.name}
                            </h3>
                            {review.verified && (
                              <span className="inline-flex items-center text-[10px] font-semibold text-[#31847b] bg-[#eaf3f1] px-2 py-0.5 rounded-full">
                                Verified
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-stone-500 font-normal">
                            {review.role}
                          </p>
                        </div>
                      </div>

                      <GoogleIcon className="w-6 h-6 shrink-0" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Link to all reviews on the Google Business Profile */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-[#1f242e] shadow-2xs transition-colors hover:border-[#31847b] hover:text-[#31847b]"
          >
            <GoogleIcon className="w-5 h-5" />
            <span>Read all our reviews on Google</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
