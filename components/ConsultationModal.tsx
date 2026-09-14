"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export interface ConsultationModalOptions {
  title?: string;
  subtitle?: string;
  stoneType?: string;
}

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modalTitle, setModalTitle] = useState("Book Your Consultation");
  const [modalSubtitle, setModalSubtitle] = useState(
    "Complimentary stone assessment with a certified NanoShield HD specialist."
  );

  const [selectedStone, setSelectedStone] = useState("Marble");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    notes: "",
  });

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }, 300);
  }, []);

  // Listen for custom open event
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<ConsultationModalOptions>;
      if (customEvent.detail) {
        if (customEvent.detail.title) setModalTitle(customEvent.detail.title);
        if (customEvent.detail.subtitle)
          setModalSubtitle(customEvent.detail.subtitle);
        if (customEvent.detail.stoneType) {
          setSelectedStone(customEvent.detail.stoneType);
        }
      } else {
        setModalTitle("Book Your Consultation");
        setModalSubtitle(
          "Complimentary stone assessment with a certified NanoShield HD specialist."
        );
      }
      setIsOpen(true);
    };

    window.addEventListener("open-consultation-modal", handleOpen);
    return () => {
      window.removeEventListener("open-consultation-modal", handleOpen);
    };
  }, []);

  // Keyboard navigation (Escape to close) & lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="relative w-full max-w-lg bg-white text-[#1c1917] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-stone-200/80 overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        
        {/* Subtle top brand glow accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#50b8ae] via-[#3fa99f] to-[#1f7e75]" />

        {/* Modal Close Button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Header Section */}
        <div className="px-6 sm:px-8 pt-7 pb-4">
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
            {modalSubtitle}
          </p>
        </div>

        {/* Form Body */}
        <div className="px-6 sm:px-8 pb-8 pt-2">
          {isSubmitted ? (
            /* Clean Confirmation State */
            <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#50b8ae]/15 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#1c756d]" />
              </div>

              <div className="space-y-1.5 max-w-sm mx-auto">
                <h3 className="text-xl font-bold text-stone-900">
                  Request Received
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Thank you,{" "}
                  <span className="font-semibold text-stone-900">
                    {formData.fullName || "valued client"}
                  </span>
                  . A stone protection specialist will reach out shortly at{" "}
                  <span className="font-semibold text-[#1c756d]">
                    {formData.phone || formData.email}
                  </span>
                  .
                </p>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Simple, High-End Luxury Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label
                  htmlFor="simple-fullName"
                  className="block text-xs font-medium text-stone-700 mb-1"
                >
                  Your Name <span className="text-[#50b8ae]">*</span>
                </label>
                <input
                  id="simple-fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 hover:bg-stone-50/80 border border-stone-200 text-stone-900 text-sm focus:bg-white focus:outline-none focus:border-[#50b8ae] focus:ring-2 focus:ring-[#50b8ae]/20 transition-all placeholder:text-stone-400 font-normal"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="simple-phone"
                    className="block text-xs font-medium text-stone-700 mb-1"
                  >
                    Phone Number <span className="text-[#50b8ae]">*</span>
                  </label>
                  <input
                    id="simple-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="e.g. +61 400 123 456"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 hover:bg-stone-50/80 border border-stone-200 text-stone-900 text-sm focus:bg-white focus:outline-none focus:border-[#50b8ae] focus:ring-2 focus:ring-[#50b8ae]/20 transition-all placeholder:text-stone-400 font-normal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="simple-email"
                    className="block text-xs font-medium text-stone-700 mb-1"
                  >
                    Email Address <span className="text-[#50b8ae]">*</span>
                  </label>
                  <input
                    id="simple-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@residence.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 hover:bg-stone-50/80 border border-stone-200 text-stone-900 text-sm focus:bg-white focus:outline-none focus:border-[#50b8ae] focus:ring-2 focus:ring-[#50b8ae]/20 transition-all placeholder:text-stone-400 font-normal"
                  />
                </div>
              </div>

              {/* Stone Surface Type: Interactive Clean Pills */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1.5">
                  Stone Surface Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Marble", "Quartzite", "Other / Not Sure"].map((type) => {
                    const isSelected = selectedStone === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedStone(type)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-medium border transition-all text-center cursor-pointer ${
                          isSelected
                            ? "bg-[#50b8ae]/15 border-[#50b8ae] text-[#145751] shadow-2xs font-semibold"
                            : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100 hover:border-stone-300"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message / Project Details (Optional) */}
              <div>
                <label
                  htmlFor="simple-notes"
                  className="block text-xs font-medium text-stone-700 mb-1"
                >
                  Project Details or Suburb{" "}
                  <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="simple-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="e.g. Kitchen island benchtop in Sydney, newly installed..."
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-50 hover:bg-stone-50/80 border border-stone-200 text-stone-900 text-sm focus:bg-white focus:outline-none focus:border-[#50b8ae] focus:ring-2 focus:ring-[#50b8ae]/20 transition-all placeholder:text-stone-400 font-normal resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#50b8ae] hover:bg-[#3ea399] text-white font-semibold text-sm shadow-md shadow-[#50b8ae]/25 hover:shadow-lg transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Book Free Consultation</span>
                      <ArrowRight className="w-4 h-4 text-white/90 stroke-[2.2]" />
                    </>
                  )}
                </button>

                <div className="mt-3 text-center text-[11px] text-stone-400">
                  🔒 Zero obligation • Prompt response within 2 hours
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
