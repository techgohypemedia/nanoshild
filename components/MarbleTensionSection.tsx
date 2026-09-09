"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, ChevronUp } from "lucide-react";
import MarbleThreeCanvas from "./MarbleThreeCanvas";

export default function MarbleTensionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stanzasRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Image container entrance animation with 3D feel
      gsap.fromTo(
        leftColRef.current,
        {
          opacity: 0,
          x: -50,
          scale: 0.96,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Heading entrance animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Stanzas sequential staggered reveal
      const stanzaElements = stanzasRef.current?.querySelectorAll(".narrative-stanza");
      if (stanzaElements && stanzaElements.length > 0) {
        gsap.fromTo(
          stanzaElements,
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.14,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stanzasRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 4. CTA Button Entrance with slight bounce
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: 0.35,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="marble-tension"
      className="relative w-full min-h-screen bg-white text-[#20252e] py-20 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Three.js 3D Canvas */}
          <div ref={leftColRef} className="lg:col-span-6 flex justify-center w-full">
            <MarbleThreeCanvas />
          </div>

          {/* Right Column: Typography & Narrative */}
          <div ref={rightColRef} className="lg:col-span-6 flex flex-col justify-center">
            {/* Main Headline */}
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#20252e] leading-[1.18] tracking-tight mb-8"
            >
              You Didn’t Choose Marble
              <br />
              to Tiptoe Around it
            </h2>

            {/* Stanzas Container */}
            <div
              ref={stanzasRef}
              className="space-y-6 text-[16px] sm:text-[17px] text-[#4b5563] leading-[1.65]"
            >
              {/* Stanza 1 */}
              <div className="narrative-stanza space-y-0.5">
                <p>You chose it for its beauty.</p>
                <p>Its light.</p>
                <p>Its timelessness.</p>
              </div>

              {/* Stanza 2 */}
              <div className="narrative-stanza">
                <p>
                  But somewhere between installation day and everyday life, that joy quietly turned into tension.
                </p>
              </div>

              {/* Stanza 3 */}
              <div className="narrative-stanza space-y-0.5">
                <p>Coffee mugs placed carefully.</p>
                <p>Kids told to “be careful.”</p>
                <p>Guests watched instead of welcomed.</p>
              </div>

              {/* Stanza 4 */}
              <div className="narrative-stanza">
                <p>
                  And a constant, low-level worry every time the light hits the bench at the wrong angle.
                </p>
              </div>

              {/* Stanza 5 - Bold Punchline */}
              <div className="narrative-stanza pt-1">
                <p className="text-[17px] sm:text-[18px] font-bold text-[#1f242e] tracking-tight">
                  NanoShield HD exists to end that feeling — completely.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-9">
              <button
                ref={buttonRef}
                type="button"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#20252e] hover:bg-[#12161c] text-white font-medium text-[15px] sm:text-[16px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-4 h-4 text-stone-300 stroke-[2.5]" />
                <span>Book Your Consultation Today</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button (as seen in the bottom right of reference) */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#64748b] hover:bg-[#475569] text-white flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </section>
  );
}
