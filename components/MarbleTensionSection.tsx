"use client";

import { Search, ChevronUp } from "lucide-react";
import MarbleThreeCanvas from "./MarbleThreeCanvas";

export default function MarbleTensionSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="marble-tension"
      className="relative w-full min-h-screen bg-white text-[#20252e] py-20 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Three.js 3D Canvas */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <MarbleThreeCanvas />
          </div>

          {/* Right Column: Typography & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Main Headline */}
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#20252e] leading-[1.18] tracking-tight mb-8"
            >
              You Didn’t Choose Marble
              <br />
              to Tiptoe Around it
            </h2>

            {/* Stanzas Container */}
            <div
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
                type="button"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#50b8ae] hover:bg-[#3ea399] text-white font-medium text-[15px] sm:text-[16px] shadow-md shadow-[#50b8ae]/30 hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-4 h-4 text-white stroke-[2.5]" />
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
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#50b8ae] hover:bg-[#3ea399] text-white flex items-center justify-center shadow-lg shadow-[#50b8ae]/30 transition-all duration-200 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </section>
  );
}
