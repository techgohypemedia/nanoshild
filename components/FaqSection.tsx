"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowRight, ChevronUp, Check } from "lucide-react";

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
  // Question 1 open by default as in the reference design
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="faq-section"
      className="relative w-full bg-[#f4f5f7] text-[#1f242e] py-16 sm:py-24 lg:py-28 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: TITLE & BLUE GLOSSY SUPPORT CARD (5 COLS)       */}
          {/* STICKY UNTIL FAQ ITEMS (RIGHT COLUMN) FINISH SCROLLING       */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start flex flex-col space-y-6 sm:space-y-7">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1f242e] tracking-tight leading-[1.14]">
                Frequently asked
                <br />
                questions
              </h2>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed mt-3 max-w-sm">
                Find quick answers to common questions about our stone protection system, installation, warranty, and daily care.
              </p>
            </div>

            {/* Vibrant Blue Glassy / Glossy "Still have questions?" Card */}
            <div
              className="group w-full max-w-sm rounded-[28px] text-white p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.93) 45%, rgba(29, 78, 216, 0.97) 100%)",
                boxShadow:
                  "0 24px 48px -10px rgba(37, 99, 235, 0.45), 0 10px 24px -6px rgba(29, 78, 216, 0.35), inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.7), inset 0 -3px 8px 0 rgba(0, 0, 0, 0.25)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                borderTop: "1.5px solid rgba(255, 255, 255, 0.75)",
                borderLeft: "1.5px solid rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Top Glass Specular Reflection (Diagonal Sheen) */}
              <div
                className="absolute inset-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(125deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.12) 32%, rgba(255, 255, 255, 0) 60%)",
                }}
              />

              {/* Elliptical Top Glass Edge Highlight */}
              <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-24 rounded-full pointer-events-none opacity-70"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 70% at 50% 30%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 75%)",
                }}
              />

              {/* Bottom Ambient Glow Pool */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none opacity-50 blur-xl"
                style={{
                  background: "radial-gradient(circle, rgba(147, 197, 253, 0.6) 0%, rgba(37, 99, 235, 0) 70%)",
                }}
              />

              {/* Content Layer */}
              <div className="relative z-10">
                {/* Avatar Cluster with Real Photos + Frosted "+ You" Pill */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="flex items-center -space-x-2.5">
                    <div className="relative w-9 h-9 rounded-full ring-2 ring-white/90 overflow-hidden shadow-md shrink-0 bg-blue-400">
                      <Image
                        src="/avatars/avatar1.jpg"
                        alt="NanoShield Specialist"
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-9 h-9 rounded-full ring-2 ring-white/90 overflow-hidden shadow-md shrink-0 bg-blue-400">
                      <Image
                        src="/avatars/avatar2.jpg"
                        alt="NanoShield Specialist"
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-9 h-9 rounded-full ring-2 ring-white/90 overflow-hidden shadow-md shrink-0 bg-blue-400">
                      <Image
                        src="/avatars/avatar3.jpg"
                        alt="NanoShield Specialist"
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white shadow-xs inline-flex items-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.22)",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 6px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    + You
                  </span>
                </div>

                {/* Card Copy */}
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-1 drop-shadow-xs">
                  Still have questions?
                </h3>
                <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed mb-5 font-medium">
                  Reach out, and our stone protection specialists will guide you.
                </p>

                {/* Glossy Pill Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      const cta = document.getElementById("contact-section");
                      cta?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-3.5 pl-5 pr-2 py-2.5 rounded-full text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer"
                    style={{
                      background: "rgba(15, 20, 28, 0.88)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      boxShadow:
                        "0 10px 24px -4px rgba(0, 0, 0, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <span>Talk to our team</span>
                    <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: 11 FLOATING ACCORDION CARDS (7 COLS)           */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`group relative rounded-2xl cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                    isOpen
                      ? "p-6 sm:p-7 shadow-2xl"
                      : "p-5 sm:p-6 shadow-[0_3px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
                  }`}
                  style={
                    isOpen
                      ? {
                          background:
                            "linear-gradient(135deg, rgba(28, 33, 42, 0.94) 0%, rgba(18, 22, 28, 0.97) 60%, rgba(12, 15, 20, 0.99) 100%)",
                          boxShadow:
                            "0 20px 40px -10px rgba(0, 0, 0, 0.45), 0 8px 16px -4px rgba(0, 0, 0, 0.3), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 6px 0 rgba(0, 0, 0, 0.5)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          borderTop: "1.5px solid rgba(255, 255, 255, 0.45)",
                          borderLeft: "1.5px solid rgba(255, 255, 255, 0.3)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                        }
                      : {
                          background: "#ffffff",
                          border: "1px solid rgba(229, 231, 235, 0.85)",
                        }
                  }
                >
                  {/* Glossy Diagonal Specular Sheen (Fades in on Black Glass state) */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(125deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0) 65%)",
                    }}
                  />

                  {/* Top Rim Glass Highlight Curve */}
                  <div
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full pointer-events-none transition-opacity duration-700 ${
                      isOpen ? "opacity-40" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "radial-gradient(ellipse 100% 70% at 50% 30%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 75%)",
                    }}
                  />

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Top Question Row */}
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className={`text-sm sm:text-base md:text-[17px] font-bold tracking-tight leading-snug transition-colors duration-500 ${
                          isOpen ? "text-white" : "text-[#1f242e] group-hover:text-black"
                        }`}
                      >
                        {item.question}
                      </h3>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-500 ${
                          isOpen
                            ? "bg-white/10 text-white shadow-xs border border-white/20"
                            : "bg-stone-100 text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-700"
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
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mt-3.5 pt-3.5 border-t border-white/15 space-y-3">
                          {/* Lead sentence if present */}
                          {item.lead && (
                            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                              {item.lead}
                            </p>
                          )}

                          {/* Sublead if present */}
                          {item.sublead && (
                            <p className="text-xs sm:text-[13px] font-semibold text-stone-400 tracking-wide uppercase">
                              {item.sublead}
                            </p>
                          )}

                          {/* Bullets list if present */}
                          {item.bullets && item.bullets.length > 0 && (
                            <ul className="space-y-2 pl-1">
                              {item.bullets.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300 leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#45aca5] mt-2 shrink-0 shadow-xs shadow-[#45aca5]" />
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
                                className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal"
                              >
                                {para}
                              </p>
                            ))}

                          {/* Outro statement if present */}
                          {item.outro && (
                            <p className="text-xs sm:text-sm text-stone-200 font-medium pt-1">
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
      </div>

      {/* Floating Scroll-to-Top Button */}
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
