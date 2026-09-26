"use client";

import { useState } from "react";
import { Plus, HelpCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface FaqItem {
  id: number;
  question: string;
  isFeatured?: boolean;
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
    isFeatured: true,
    lead: "NanoShield HD is designed for people and spaces that want to enjoy marble without restriction or constant management.",
    sublead: "IT'S WELL SUITED FOR:",
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
      "NanoShield HD is transparent, so the stone's colour and veining remain visible. Satin (honed) and gloss (polished) options are available. There is no haze, cloudiness, shine or plastic appearance. Your stone still reflects light naturally, and edges, seams and cut-outs remain visually clean.",
    ],
  },
  {
    id: 3,
    question: "Will NanoShield HD change the feel of my stone benchtops?",
    paragraphs: [
      "No. The surface feels smooth and natural, just like the stone itself. There's no rubbery or coated feel, and nothing that changes how the benchtop is used day to day.",
    ],
  },
  {
    id: 4,
    question: "Is NanoShield HD the same as a sealer?",
    isFeatured: true,
    paragraphs: [
      "No. Sealers and coatings work within the stone to slow absorption.",
      "NanoShield HD is a physical separation system that sits on top of the surface, preventing direct contact in the first place. It's designed to stop damage — not manage it.",
    ],
  },
  {
    id: 5,
    question: "What does NanoShield actually protect against?",
    lead: "NanoShield HD protects against:",
    bullets: [
      "Staining from spilt foods and drinks (coffee, wine, oils, turmeric)",
      "Etching from acidic foods and drinks (citrus, vinegar, tomatoes)",
      "Everyday wear, scuffs and surface scratching",
    ],
    outro: "All without changing the natural appearance or texture of the stone.",
  },
  {
    id: 6,
    question: "Can you install film over existing stains or etching?",
    paragraphs: [
      "We assess existing damage first. Because the film is clear, marks can remain visible underneath, so cleaning or restoration may be needed before installation. We will complete this for you prior to installation.",
    ],
  },
  {
    id: 7,
    question: "How do I clean a protected benchtop?",
    paragraphs: [
      "Use our Crystal Clear Film Cleaner and the approved soft microfibre cloth we give you with every installation. Wipe up spills promptly and follow your aftercare instructions.",
    ],
  },
  {
    id: 8,
    question: "Can I cut food or put hot pans directly on the film?",
    paragraphs: [
      "Use a chopping board when cutting to avoid damage to the film. Our film has been tested to withstand heat up to 200°C, however, we recommend placing hot cookware on a trivet or heat mat.",
    ],
  },
  {
    id: 9,
    question: "Is NanoShield HD safe for my family and pets?",
    paragraphs: [
      "NanoShield HD contains no VOCs, and does not off-gas when installed. It is designed for real homes, including homes with pets and children.",
    ],
  },
  {
    id: 10,
    question: "Will applying NanoShield HD damage the stone underneath?",
    isFeatured: true,
    paragraphs: [
      "No. Protecting the stone long-term is the entire point of the system. NanoShield HD has been tested across thousands of installations with no stone damage underneath.",
    ],
  },
  {
    id: 11,
    question: "How long does NanoShield HD last?",
    isFeatured: true,
    paragraphs: [
      "NanoShield HD is designed to last up to 10 years in residential settings. Over time, the film may wear — but the stone underneath remains protected. When replacement is needed, it's straightforward and handled without risk to the stone.",
    ],
  },
  {
    id: 12,
    question: "What happens when NanoShield HD is removed or replaced?",
    paragraphs: [
      "The system is designed for clean, safe removal. A specialised primer allows strong adhesion during use while ensuring the stone is not damaged when the film is removed or replaced.",
    ],
  },
  {
    id: 13,
    question: "Is installation of NanoShield HD disruptive?",
    isFeatured: true,
    paragraphs: [
      "Not at all. Installation is typically completed within a day. There are no chemical smells, no mess and your benchtop is fully functional the next morning.",
    ],
  },
  {
    id: 14,
    question: "Do you offer a discount for larger installations?",
    paragraphs: [
      "Yes. We offer lower rates for larger installations. Include all the surfaces you would like protected so we can confirm the rate for your project.",
    ],
  },
  {
    id: 15,
    question: "Can I have the film removed or replaced?",
    paragraphs: [
      "Yes. Arrange professional removal and replacement through your NanoShield HD installer. Avoid lifting or peeling the edges yourself. Our system is designed for a clean, safe removal. We use a specialised primer for strong adhesion during use while ensuring the stone is not damaged when the film is removed or replaced.",
    ],
  },
  {
    id: 16,
    question: "Can I arrange protection before my new kitchen is finished?",
    paragraphs: [
      "Yes. Contact us while your kitchen is being planned or installed. We can discuss the stone and arrange assessment and film installation around the completion of the other work.",
    ],
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null); // Closed by default

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      className="relative w-full bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-16 xl:px-20 border-t border-stone-200/90 select-none"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight leading-tight">
            Your Marble Protection Film Questions Answered
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="w-full space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-200 border bg-white border-stone-200/90 ${
                  isOpen ? "shadow-xs border-stone-300" : "hover:border-stone-300"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left cursor-pointer p-6 sm:p-7"
                >
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-[#1f242e] leading-snug">
                    {item.question}
                  </span>

                  <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-600">
                    <Plus
                      className={`w-4 h-4 stroke-[2.5] transition-transform duration-300 ${
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
                    <div className="px-6 sm:px-7 pb-6 text-sm sm:text-base text-stone-600 leading-relaxed space-y-3 border-t border-stone-200/60 pt-4">
                      {item.lead && (
                        <p className="text-stone-700 font-normal">
                          {item.lead}
                        </p>
                      )}

                      {item.sublead && (
                        <p className="font-semibold text-stone-800 tracking-wide text-xs sm:text-sm uppercase">
                          {item.sublead}
                        </p>
                      )}

                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="space-y-2.5 pl-1">
                          {item.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-3 text-stone-600 text-sm sm:text-base"
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
