"use client";

import { Clock, ShieldCheck } from "lucide-react";
import GhlForm from "@/components/GhlForm";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

const NEXT_STEPS = [
  {
    step: "01",
    title: "Tell us about your stone",
    text: "Share your benchtop, kitchen island or other stone surface. Photos help us understand its condition.",
  },
  {
    step: "02",
    title: "We'll be in touch within 24 hours",
    text: "Our friendly team will contact you to talk through your surfaces and answer your questions.",
  },
  {
    step: "03",
    title: "Get your quote and book",
    text: "Understand what is suitable, what it will cost and when your NanoShield HD installation can take place.",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbf9f5] via-[#f7f5f0] to-[#f4f1ea] text-[#1c1917] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200/90"
    >
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-full max-w-5xl rounded-full bg-[#31847b]/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        {/* ============================================================ */}
        {/* TOP: Clean Title, Font & Bit Information                       */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#31847b]/25 bg-white/80 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2c776f] shadow-2xs backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-[#31847b]" />
            Request a Quote
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-[#191e28] leading-[1.15]">
            Give Your Stone a Place in Everyday Life
          </h2>

          <p className="text-base sm:text-lg font-medium text-stone-800 leading-relaxed max-w-2xl mx-auto">
            You have chosen a natural material that makes your home feel like yours. Take the next step towards protecting it.
          </p>

          <p className="text-sm sm:text-[15px] text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Tell us about your benchtop, kitchen island or other stone surface. We will help you understand what is suitable, what it will cost and how to book your NanoShield HD installation.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DOWNWARDS: 3 Steps (What Happens Next)                        */}
        {/* ============================================================ */}
        <div className="mt-12 sm:mt-14">
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#31847b]">
              What happens next
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-stone-500 font-medium">
              <Clock className="h-3.5 w-3.5 text-[#31847b]" />
              Response within 24 hours
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {NEXT_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-stone-200/90 bg-white/90 p-5 sm:p-6 shadow-2xs backdrop-blur-xs transition-colors hover:border-[#31847b]/40 hover:bg-white"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#31847b] text-xs font-bold text-white shadow-2xs">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-[#1f242e] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* Simple Clean Form Card (Single phone reference)               */}
        {/* ============================================================ */}
        <div className="mt-8 sm:mt-10 max-w-3xl mx-auto rounded-3xl bg-white p-5 sm:p-8 pb-4 sm:pb-6 shadow-xs overflow-hidden">
          {/* Simple form header */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1a1f2c]">
              Request your free quote
            </h3>
            <p className="mt-1 text-sm text-stone-600 leading-relaxed">
              Complete our form and our friendly team will be in touch within 24 hours. For urgent enquiries, call us on{" "}
              <a
                href={PHONE_HREF}
                className="font-semibold text-[#31847b] underline underline-offset-2 hover:text-[#256e66] whitespace-nowrap"
              >
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </div>

          {/* Form */}
          <div className="w-full">
            <GhlForm />
          </div>
        </div>
      </div>
    </section>
  );
}
