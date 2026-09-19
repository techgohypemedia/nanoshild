"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Globe, CheckCircle2 } from "lucide-react";

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
      id="quote"
      className="relative w-full bg-[#fbf9f5] text-[#1c1917] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-stone-200/80"
    >
      <div id="contact-section" />
      <div className="w-full max-w-[1560px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: ARCHITECTURAL PHOTO & CONNECT BAR               */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Framed Architectural Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.8] xl:aspect-[4/3.6] overflow-hidden rounded-2xl sm:rounded-3xl bg-stone-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-stone-200/80">
              <Image
                src="/contact-room.jpg"
                alt="Living space with protected marble surfaces"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Social Channels directly below the photo */}
            <div className="mt-4 flex items-center justify-between px-1">
              <span className="text-xs text-stone-500 font-normal tracking-wide">
                Connect with our studio & network
              </span>

              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#31847b] text-stone-600 hover:text-white border border-stone-200/90 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                >
                  <span className="text-xs font-bold font-sans">f</span>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X Twitter"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#31847b] text-stone-600 hover:text-white border border-stone-200/90 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
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
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#31847b] text-stone-600 hover:text-white border border-stone-200/90 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* Globe / Website */}
                <a
                  href="#"
                  aria-label="Website"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#31847b] text-stone-600 hover:text-white border border-stone-200/90 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: REFINED EDITORIAL CONTACT FORM                 */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4 xl:pl-8">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#31847b]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">
                Get in Touch
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight leading-tight">
              Contact Us
            </h2>

            {/* Subtext */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3 max-w-xl font-normal">
              To ensure consistent performance and stone-safe results, NanoShield HD is installed exclusively by licensed professionals. Contact us to find an authorised installer near you.
            </p>

            {/* Form Section */}
            {isSubmitted ? (
              <div className="mt-8 p-6 sm:p-8 rounded-xl bg-stone-100/80 border border-stone-200/80 text-stone-900 space-y-3 animate-in fade-in duration-500">
                <div className="flex items-center gap-2.5 text-[#31847b]">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="text-lg font-medium">Enquiry Received</h3>
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
              <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 space-y-6 sm:space-y-7">
                {/* First Name Field */}
                <div className="group">
                  <label
                    htmlFor="contact-firstName"
                    className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-1 group-focus-within:text-[#31847b] transition-colors"
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
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors placeholder:text-stone-400 font-normal"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-1 group-focus-within:text-[#31847b] transition-colors"
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
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors placeholder:text-stone-400 font-normal"
                  />
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-1 group-focus-within:text-[#31847b] transition-colors"
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
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors placeholder:text-stone-400 font-normal"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium uppercase tracking-wider text-stone-500 mb-1 group-focus-within:text-[#31847b] transition-colors"
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
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors resize-none placeholder:text-stone-400 font-normal"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#31847b] hover:bg-[#286f67] text-white px-8 py-3.5 text-sm font-medium tracking-wide inline-flex items-center gap-2.5 transition-all duration-200 shadow-md shadow-[#31847b]/20 hover:shadow-lg active:scale-98 group cursor-pointer rounded-xl"
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
