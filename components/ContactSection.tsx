"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  Phone,
  FileText,
  Globe,
  CheckCircle2,
  ArrowDownToLine,
} from "lucide-react";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact-section"
      className="relative w-full bg-[#fbf9f5] text-[#1c1917] py-20 sm:py-28 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: ARCHITECTURAL PHOTO & METADATA DETAILS          */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Editorial Top Caption (Image 1 Style) */}
            <div className="text-[11px] sm:text-xs text-stone-500 font-light tracking-wide mb-3">
              Light, material, and use before intervention.
            </div>

            {/* Framed Architectural Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3.8] overflow-hidden rounded-sm bg-stone-200 shadow-sm">
              <Image
                src="/contact-room.jpg"
                alt="Living space with protected marble surfaces"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Social Channels directly after the image in upper section */}
            <div className="mt-4 flex items-center justify-between">
              <div className="text-[11px] sm:text-xs text-stone-500 font-light tracking-wide">
                Connect with our studio & network
              </div>

              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white/90 hover:bg-[#1c1917] text-stone-600 hover:text-white border border-stone-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                >
                  <span className="text-xs font-bold font-serif">f</span>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X Twitter"
                  className="w-9 h-9 rounded-xl bg-white/90 hover:bg-[#1c1917] text-stone-600 hover:text-white border border-stone-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/90 hover:bg-[#1c1917] text-stone-600 hover:text-white border border-stone-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* Globe / Website */}
                <a
                  href="#"
                  aria-label="Website"
                  className="w-9 h-9 rounded-xl bg-white/90 hover:bg-[#1c1917] text-stone-600 hover:text-white border border-stone-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: LUXURY EDITORIAL CONTACT FORM                  */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4 xl:pl-8">
            {/* Tag / Category */}
            <div className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase mb-3.5">
              INVITATION
            </div>

            {/* Editorial Headline (Image 1 Style + Image 2 "Contact Us") */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal text-stone-900 tracking-tight leading-[1.08]">
              Contact Us
            </h2>

            {/* Explanatory Copy from Image 2 */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-4 max-w-lg font-light">
              To ensure consistent performance and stone-safe results, NanoShield HD is installed exclusively by licensed professionals. Contact us to find an authorised installer near you.
            </p>

            {/* Form Section */}
            {isSubmitted ? (
              <div className="mt-10 p-8 rounded-sm bg-stone-100/80 border border-stone-200/80 text-stone-900 space-y-3 animate-in fade-in duration-500">
                <div className="flex items-center gap-2.5 text-emerald-700">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="font-serif text-lg font-medium">Enquiry Received</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Thank you, {formData.firstName || "there"}. A licensed NanoShield HD installer specialist will be in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ firstName: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-2 text-xs font-semibold underline underline-offset-4 text-stone-800 hover:text-black cursor-pointer"
                >
                  Submit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-7">
                {/* First Name Field */}
                <div className="group">
                  <label
                    htmlFor="contact-firstName"
                    className="block text-xs font-medium text-stone-600 mb-1 group-focus-within:text-stone-900 transition-colors"
                  >
                    First Name
                  </label>
                  <input
                    id="contact-firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-400 font-light"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-stone-600 mb-1 group-focus-within:text-stone-900 transition-colors"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-400 font-light"
                  />
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-stone-600 mb-1 group-focus-within:text-stone-900 transition-colors"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Kitchen marble benchtop installation"
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-400 font-light"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-stone-600 mb-1 group-focus-within:text-stone-900 transition-colors"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your stone type, space, or location..."
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm focus:outline-none focus:border-stone-900 transition-colors resize-none placeholder:text-stone-400 font-light"
                  />
                </div>

                {/* Submit Button (Image 1 Editorial Style) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#1c1917] hover:bg-black text-stone-100 px-8 py-3.5 text-sm font-medium tracking-wide inline-flex items-center gap-2.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-98 group cursor-pointer"
                  >
                    <span>Begin Enquiry</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
