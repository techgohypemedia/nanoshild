"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ShieldCheck } from "lucide-react";
import GhlForm from "@/components/GhlForm";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export interface ConsultationModalOptions {
  title?: string;
  subtitle?: string;
  /** Query parameters attached to the GoHighLevel form URL (e.g. a calculator estimate). */
  formParams?: Record<string, string>;
}

const DEFAULT_TITLE = "Request a Quote";
const DEFAULT_SUBTITLE = "Complete our form and our friendly team will be in touch within 24 hours.";

// Global helper to open modal from anywhere in the app
export function openConsultationModal(options?: ConsultationModalOptions) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-consultation-modal", { detail: options })
    );
  }
}

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(DEFAULT_TITLE);
  const [modalSubtitle, setModalSubtitle] = useState(DEFAULT_SUBTITLE);
  const [formParams, setFormParams] = useState<Record<string, string> | undefined>(undefined);

  const closeModal = useCallback(() => setIsOpen(false), []);

  // Listen for custom open event
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const { detail } = e as CustomEvent<ConsultationModalOptions | undefined>;
      setModalTitle(detail?.title ?? DEFAULT_TITLE);
      setModalSubtitle(detail?.subtitle ?? DEFAULT_SUBTITLE);
      setFormParams(detail?.formParams);
      setIsOpen(true);
    };

    window.addEventListener("open-consultation-modal", handleOpen);
    return () => {
      window.removeEventListener("open-consultation-modal", handleOpen);
    };
  }, []);

  // Keyboard navigation (Escape to close) & lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      data-lenis-prevent
      className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white text-[#1c1917] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-stone-200/80 overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        {/* Subtle top brand glow accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#50b8ae] via-[#3fa99f] to-[#1f7e75]" />

        {/* Modal Close Button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Header Section */}
        <div className="px-6 sm:px-8 pt-7 pb-4 pr-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#50b8ae]/12 text-[#1c756d] text-[11px] font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#20837a]" />
              <span>NanoShield HD</span>
            </span>
          </div>

          <h2
            id="consultation-modal-title"
            className="text-2xl sm:text-[26px] font-bold text-stone-900 tracking-tight leading-tight"
          >
            {modalTitle}
          </h2>

          <p className="text-stone-500 text-xs sm:text-[13px] mt-1.5 leading-relaxed">
            {modalSubtitle} For urgent enquiries, call us on{" "}
            <a href={PHONE_HREF} className="font-semibold text-[#1c756d] hover:underline">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>

        {/* GoHighLevel Form */}
        <div className="px-3 sm:px-5 pb-5">
          <GhlForm instance="modal" params={formParams} />
        </div>
      </div>
    </div>
  );
}
