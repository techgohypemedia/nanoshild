"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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
    question: "Who is NanoShield HD best suited for?",
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
    question: "Will NanoShield HD change the appearance of my stone benchtops?",
    paragraphs: [
      "No. NanoShield HD is optically clear and extremely thin.",
      "There’s no haze, cloudiness, shine, or plastic appearance.",
      "The stone reflects light naturally, and edges, seams and cut-outs remain visually clean. Most people say it still looks exactly like marble — because it does.",
    ],
  },
  {
    id: 3,
    question: "Will NanoShield HD change the feel of my stone benchtops?",
    paragraphs: [
      "No. The surface feels smooth and natural, just like the stone itself. There’s no rubbery or coated feel, and nothing that changes how the benchtop is used day to day.",
    ],
  },
  {
    id: 4,
    question: "Is NanoShield HD the same as a sealer?",
    paragraphs: [
      "No. Sealers and coatings work within the stone to slow absorption.",
      "NanoShield HD is a physical separation system that sits on top of the surface, preventing direct contact in the first place. It’s designed to stop damage — not manage it.",
    ],
  },
  {
    id: 5,
    question: "What does NanoShield actually protect against?",
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
    question: "What about heat — can I place hot items on NanoShield HD?",
    paragraphs: [
      "NanoShield HD is engineered to manage thermal stress from normal kitchen use. It won’t bubble, lift, or distort under everyday conditions. As with any stone surface, we still recommend reasonable care with extremely hot cookware.",
    ],
  },
  {
    id: 7,
    question: "Is it safe for food preparation and families?",
    paragraphs: [
      "Yes. NanoShield HD contains no VOCs, doesn’t off-gas and is safe for food preparation once installed. It’s designed for real kitchens, including homes with children.",
    ],
  },
  {
    id: 8,
    question: "Will applying NanoShield HD damage the stone underneath?",
    paragraphs: [
      "No. Protecting the stone long-term is the entire point of the system. NanoShield HD has been tested across thousands of installations with no stone damage underneath.",
    ],
  },
  {
    id: 9,
    question: "How long does NanoShield HD last?",
    paragraphs: [
      "NanoShield HD is designed to last up to 10 years in residential settings. Over time, the film may wear — but the stone underneath remains protected. When replacement is needed, it’s straightforward and handled without risk to the stone.",
    ],
  },
  {
    id: 10,
    question: "What happens when NanoShield HD is removed or replaced?",
    paragraphs: [
      "The system is designed for clean, safe removal. A specialised primer allows strong adhesion during use while ensuring the stone is not damaged when the film is removed or replaced.",
    ],
  },
  {
    id: 11,
    question: "Is installation of NanoShield HD disruptive?",
    paragraphs: [
      "Not at all. Installation is typically completed within a day. There are no chemical smells, no mess and your benchtop is fully functional the next morning.",
    ],
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      className="relative w-full bg-[#faf8f5] text-[#1f242e] py-16 sm:py-24 lg:py-28 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-stone-200/80 select-none"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* ============================================================ */}
        {/* SECTION HEADER: Pure, Minimal Headline                       */}
        {/* ============================================================ */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ============================================================ */}
        {/* END-TO-END ACCORDION LIST                                    */}
        {/* ============================================================ */}
        <div className="w-full border-t border-stone-200/90 divide-y divide-stone-200/80">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="py-5 sm:py-6 transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group py-1"
                >
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-[#1f242e] group-hover:text-[#31847b] transition-colors leading-snug">
                    {item.question}
                  </span>

                  <div className="shrink-0 w-8 h-8 flex items-center justify-center text-stone-500 group-hover:text-[#31847b] transition-colors">
                    <Plus
                      className={`w-5 h-5 stroke-[2] transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#31847b]" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 pb-2 pr-10 text-sm sm:text-base text-stone-600 leading-relaxed max-w-4xl space-y-3">
                      {item.lead && (
                        <p className="text-stone-700 font-normal">
                          {item.lead}
                        </p>
                      )}

                      {item.sublead && (
                        <p className="font-semibold text-stone-900 tracking-wide text-xs sm:text-sm uppercase">
                          {item.sublead}
                        </p>
                      )}

                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="space-y-2 pl-1">
                          {item.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-2.5 text-stone-600"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#31847b] mt-2 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.paragraphs &&
                        item.paragraphs.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}

                      {item.outro && (
                        <p className="text-stone-800 font-medium pt-1">
                          {item.outro}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
