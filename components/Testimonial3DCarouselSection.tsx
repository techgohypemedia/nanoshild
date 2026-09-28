"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, X } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  stoneType: string;
  text: string;
  verified: boolean;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Maria Leuzzi",
    role: "Verified Google Review",
    location: "Melbourne, VIC",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "Marble Benchtop Protection",
    verified: true,
    text: "The experience from start to finish was an easy process. The Nanoshield looks amazing, so happy with the finished product. Thank you Aaron and Dennis.",
  },
  {
    id: 2,
    name: "Duncan Andrews",
    role: "Verified Google Review",
    location: "Melbourne, VIC",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "Marble Benchtop Protection",
    verified: true,
    text: "We recently had NanoShield HD applied to our marble benchtops, and couldn’t be happier. Great product and even better service. Highly recommend!",
  },
  {
    id: 3,
    name: "Mariam Hanna",
    role: "Local Guide • 27 Reviews",
    location: "Melbourne, VIC",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "Marble Kitchen Benchtop",
    verified: true,
    text: "We couldn’t be happier with the installation of our nanoshield on our marble kitchen bench. It’s invisible on and now we don’t need to worry about any heat or stain damage. Can’t recommend Aaron and the team enough for their amazing and professional service.",
  },
  {
    id: 4,
    name: "Carmel McConnell",
    role: "Verified Google Review • 8 Reviews",
    location: "Melbourne, VIC",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "Marble Benchtop Protection",
    verified: true,
    text: "We love our new bench top and are delighted with the smooth finish. The nanoshield HD was worth every cent and we are happy to have a clean bench top and have confidence that we will experience no more stains.",
  },
  {
    id: 5,
    name: "Harsh Patel",
    role: "Verified Google Review",
    location: "Melbourne, VIC",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "High-End Marble & Stone",
    verified: true,
    text: "Flawless!! Top grade film with flawless service. Highly recommend for high end marble/stone.",
  },
  {
    id: 6,
    name: "Yufeng Hong",
    role: "Verified Google Review • 1 Photo",
    location: "Melbourne, VIC",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "Marble Surface Protection",
    verified: true,
    text: "6 stars for Aaron! Well done!",
  },
  {
    id: 7,
    name: "Sak Y",
    role: "Verified Google Review • 6 Reviews",
    location: "Melbourne, VIC",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "Natural Stone Protection",
    verified: true,
    text: "Great people, timely service and all at very reasonable pricing. They do what they say they are going to do and more. Looking forward to many years of low to no maintenance usage. Very happy clients...",
  },
  {
    id: 8,
    name: "Fiona Monagle",
    role: "Verified Google Review • 4 Reviews",
    location: "Brighton Renovation, VIC",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "Kitchen Benches & Dressing Table",
    verified: true,
    text: "After a difficult experience keeping marble free of marks at a previous house, in my recent Brighton renovation I was determined to find a solution. I love marble but don’t want the stress. After some investigation I had Nanoshield applied to my kitchen benches and dressing room table. I could not have been happier with the service and expertise of Aaron and Denis first in rectifying some damage to the marble from installation scratches. Then they applied the nanoshield and I really can’t tell any difference in appearance (even from the bench to the splashback, the splashback having only regular sealant applied). I have tested the product with wine spills and soya sauce. No issues. I could not be happier to recommend others to look into the product, get a sample and test it for yourself. I am confident you will be as happy as I am with my beautiful but stress free marble kitchen.",
  },
  {
    id: 9,
    name: "Felicity Stretch",
    role: "Verified Google Review",
    location: "Melbourne, VIC",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "Entire Home Marble Protection",
    verified: true,
    text: "We had NanoShield applied throughout our new home in late May, protecting all of our marble surfaces across the kitchen, three bathrooms, bar and utility area, and powder room. With such a significant amount of marble in the house, getting the protection right was incredibly important to us — and we honestly could not be happier with the result. The entire experience with NanoShield was exceptional. The service was first-class from beginning to end — professional, meticulous, knowledgeable and genuinely passionate. Several months on, the product has been fantastic and gives us enormous peace of mind!",
  },
  {
    id: 10,
    name: "Hello Beautiful",
    role: "Verified Google Review",
    location: "Melbourne, VIC",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    stoneType: "Marble Kitchen Protection",
    verified: true,
    text: "We are thrilled with the film in our marble kitchen. Great product and even better service!",
  },
];

export default function Testimonial3DCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFullReview, setSelectedFullReview] = useState<Review | null>(null);
  const touchStartX = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  // Autoplay functionality (3s)
  useEffect(() => {
    if (isHovered || selectedFullReview) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, selectedFullReview, handleNext]);

  // Touch Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
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
      className="w-full relative overflow-hidden bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-24 lg:py-28 xl:py-32 border-t border-stone-200/90"
    >
      {/* Subtle ambient luxury backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#31847b]/10 via-[#eaf3f1]/40 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-semibold text-[#1f242e] tracking-tight leading-[1.14]">
            Here’s What Other Homeowners Say About NanoShield HD
          </h2>
        </motion.div>

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
              const displayText = isLongText
                ? `${review.text.slice(0, 168)}...`
                : review.text;

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

                    {/* Short Truncated Review Text */}
                    <div className="flex-1 flex flex-col justify-center my-3 overflow-hidden">
                      <p className="text-stone-700 text-sm sm:text-base lg:text-lg font-normal leading-relaxed italic">
                        &ldquo;{displayText}&rdquo;
                        {isLongText && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedFullReview(review);
                            }}
                            className="ml-2 inline-flex items-center text-xs sm:text-sm font-semibold text-[#31847b] hover:underline cursor-pointer not-italic"
                          >
                            Read More
                          </button>
                        )}
                      </p>
                    </div>

                    {/* Bottom Row: Customer Info & Stone Tag */}
                    <div className="pt-4 sm:pt-5 border-t border-stone-100 flex items-center justify-between gap-4 shrink-0">
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border border-stone-200 bg-stone-100 shadow-2xs">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            sizes="48px"
                            unoptimized
                            className="object-cover"
                          />
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
                            {review.role} • {review.location}
                          </p>
                        </div>
                      </div>

                      {/* Stone Type Badge (Desktop) */}
                      <div className="hidden md:block text-right shrink-0">
                        <span className="text-[10px] font-medium text-stone-500 uppercase tracking-wider block">
                          Protected Surface
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#31847b] block">
                          {review.stoneType}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Review Modal */}
      <AnimatePresence>
        {selectedFullReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-7 sm:p-9 lg:p-10 shadow-2xl border border-stone-200 max-h-[85vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedFullReview(null)}
                aria-label="Close review modal"
                className="absolute top-5 right-5 h-9 w-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: selectedFullReview.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              <p className="text-stone-800 text-base sm:text-lg leading-relaxed font-normal italic mb-8">
                &ldquo;{selectedFullReview.text}&rdquo;
              </p>

              <div className="pt-5 border-t border-stone-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
                    <Image
                      src={selectedFullReview.avatar}
                      alt={selectedFullReview.name}
                      fill
                      sizes="48px"
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-semibold text-[#1f242e]">
                        {selectedFullReview.name}
                      </h4>
                      {selectedFullReview.verified && (
                        <span className="inline-flex items-center text-[10px] font-semibold text-[#31847b] bg-[#eaf3f1] px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-500 font-normal">
                      {selectedFullReview.role} • {selectedFullReview.location}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider block">
                    Protected Surface
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#31847b] block">
                    {selectedFullReview.stoneType}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
