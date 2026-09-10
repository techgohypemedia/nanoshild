"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ChevronUp } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  paragraphs?: string[];
  lead?: string;
  sublead?: string;
  bullets?: string[];
  outro?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "1. Who is NanoShield HD best suited for?",
    lead: "NanoShield HD is designed for people and spaces that want to enjoy marble without restriction or constant management.",
    sublead: "It’s well suited for:",
    bullets: [
      "Homeowners and families who want to use their kitchen freely, without rules or anxiety",
      "Landlords and property owners looking to protect high-value stone and reduce long-term maintenance and restoration costs",
      "Interior designers and architects specifying marble in real, lived-in spaces — not just showpieces",
      "Commercial environments such as restaurants, cafés, bars, and hotels where marble needs to withstand everyday use while maintaining a refined appearance",
    ],
  },
  {
    id: 2,
    question: "2. Will NanoShield HD change the appearance of my stone benchtops?",
    paragraphs: [
      "No. NanoShield HD is optically clear and extremely thin.",
      "There’s no haze, cloudiness, shine, or plastic appearance.",
      "The stone reflects light naturally, and edges, seams and cut-outs remain visually clean. Most people say it still looks exactly like marble — because it does.",
    ],
  },
  {
    id: 3,
    question: "3. Will NanoShield HD change the feel of my stone benchtops?",
    paragraphs: [
      "No. The surface feels smooth and natural, just like the stone itself. There’s no rubbery or coated feel, and nothing that changes how the benchtop is used day to day.",
    ],
  },
  {
    id: 4,
    question: "4. Is NanoShield HD the same as a sealer?",
    paragraphs: [
      "No. Sealers and coatings work within the stone to slow absorption.",
      "NanoShield HD is a physical separation system that sits on top of the surface, preventing direct contact in the first place. It’s designed to stop damage — not manage it.",
    ],
  },
  {
    id: 5,
    question: "5. What does NanoShield actually protect against?",
    lead: "NanoShield HD protects against:",
    bullets: [
      "Staining from spilt foods and drinks",
      "Etching from acidic foods and drinks",
      "Everyday wear and scratching",
    ],
    outro: "All without changing the appearance of the stone.",
  },
  {
    id: 6,
    question: "6. What about heat — can I place hot items on NanoShield HD?",
    paragraphs: [
      "NanoShield HD is engineered to manage thermal stress from normal kitchen use. It won’t bubble, lift, or distort under everyday conditions. As with any stone surface, we still recommend reasonable care with extremely hot cookware.",
    ],
  },
  {
    id: 7,
    question: "7. Is it safe for food preparation and families?",
    paragraphs: [
      "Yes. NanoShield HD contains no VOCs, doesn’t off-gas and is safe for food preparation once installed. It’s designed for real kitchens, including homes with children.",
    ],
  },
  {
    id: 8,
    question: "8. Will applying NanoShield HD damage the stone underneath?",
    paragraphs: [
      "No. Protecting the stone long-term is the entire point of the system. NanoShield HD has been tested across thousands of installations with no stone damage underneath.",
    ],
  },
  {
    id: 9,
    question: "9. How long does NanoShield HD last?",
    paragraphs: [
      "NanoShield HD is designed to last up to 10 years in residential settings. Over time, the film may wear — but the stone underneath remains protected. When replacement is needed, it’s straightforward and handled without risk to the stone.",
    ],
  },
  {
    id: 10,
    question: "10. What happens when NanoShield HD is removed or replaced?",
    paragraphs: [
      "The system is designed for clean, safe removal. A specialised primer allows strong adhesion during use while ensuring the stone is not damaged when the film is removed or replaced.",
    ],
  },
  {
    id: 11,
    question: "11. Is installation of NanoShield HD disruptive?",
    paragraphs: [
      "Not at all. Installation is typically completed within a day. There are no chemical smells, no mess and your benchtop is fully functional the next morning.",
    ],
  },
];

export default function FaqSection() {
  // All collapsed by default, clean light cards
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="faq-section"
      className="relative w-full text-[#1f242e] py-20 sm:py-28 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-stone-200/80 overflow-hidden"
    >
      {/* Luxury Calacatta Marble Architectural Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/faq-marble-bg.jpg"
          alt="Luxury Marble Architectural Background"
          fill
          priority
          className="object-cover object-center opacity-90 brightness-[1.02] contrast-[1.05]"
        />
        {/* Soft Ambient White Vignette Overlay for Ultra Clean Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/60 to-white/90 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto">
        {/* ============================================================ */}
        {/* CENTERED TOP HEADER: TITLE                                   */}
        {/* ============================================================ */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1f242e] tracking-tight leading-[1.15]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ============================================================ */}
        {/* CENTERED FAQ ACCORDION LIST (Clean White Luxury Cards)       */}
        {/* ============================================================ */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`group relative rounded-2xl cursor-pointer select-none transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-md border ${
                  isOpen
                    ? "p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.08)] border-stone-300"
                    : "p-5 sm:p-6 shadow-[0_3px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] border-stone-200/90 hover:-translate-y-0.5"
                }`}
              >
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Top Question Row */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm sm:text-base md:text-[17px] font-bold tracking-tight leading-snug text-[#1f242e] group-hover:text-black transition-colors">
                      {item.question}
                    </h3>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#50b8ae] text-white shadow-xs"
                          : "bg-stone-100 text-stone-500 group-hover:bg-stone-200 group-hover:text-stone-800"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5] transition-transform duration-300" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5] transition-transform duration-300" />
                      )}
                    </div>
                  </div>

                  {/* Smooth Grid-Template-Rows Expandable Answer Container */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-3">
                        {/* Lead sentence if present */}
                        {item.lead && (
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                            {item.lead}
                          </p>
                        )}

                        {/* Sublead if present */}
                        {item.sublead && (
                          <p className="text-xs sm:text-[13px] font-semibold text-stone-900 tracking-wide uppercase">
                            {item.sublead}
                          </p>
                        )}

                        {/* Bullets list if present */}
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="space-y-2 pl-1">
                            {item.bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#50b8ae] mt-2 shrink-0 shadow-xs shadow-[#50b8ae]" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Paragraphs if present */}
                        {item.paragraphs &&
                          item.paragraphs.map((para, pIdx) => (
                            <p
                              key={pIdx}
                              className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal"
                            >
                              {para}
                            </p>
                          ))}

                        {/* Outro statement if present */}
                        {item.outro && (
                          <p className="text-xs sm:text-sm text-stone-800 font-medium pt-1">
                            {item.outro}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
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
