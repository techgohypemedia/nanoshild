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
        {/* ============================================================ */}
        {/* TOP HEADER: STACKED END-TO-END ARCHITECTURAL HEADER          */}
        {/* ============================================================ */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-5xl mb-10 sm:mb-14 pb-10 border-b border-stone-200/80">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#1f242e] tracking-tight leading-[1.15]">
              Give Your Stone a Place in Everyday Life
            </h2>
          </div>

          <div className="space-y-2 leading-relaxed font-normal max-w-4xl">
            <p className="text-stone-800 text-base sm:text-lg font-medium">
              You have chosen a natural material that makes your home feel like yours. Take the next step towards protecting it.
            </p>
            <p className="text-stone-500 text-sm sm:text-base">
              Tell us about your benchtop, kitchen island or other stone surface. We will help you understand what is suitable, what it will cost and how to book your NanoShield HD installation.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MAIN CONTENT GRID: IMAGE & WHITE FORM CARD                   */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: ARCHITECTURAL PHOTO & CONNECT BAR */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Framed Architectural Image - Fully Responsive on Mobile & Desktop */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.5] min-h-[240px] sm:min-h-[280px] overflow-hidden rounded-xl bg-stone-200 shadow-sm border border-stone-200/90">
              <Image
                src="/showroom-stock/calacatta-stock.jpg"
                alt="Living space with protected marble surfaces"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Social Channels directly below the photo */}
            <div className="flex items-center justify-between px-2 pt-1">
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

          {/* RIGHT COLUMN: REFINED EDITORIAL CONTACT FORM */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4 xl:pl-8">
            {/* Response Time & Urgent Phone Callout */}
            <div className="p-4 rounded-2xl bg-[#eaf3f1]/80 border border-[#31847b]/25 text-[#102c29] text-xs sm:text-sm font-medium leading-relaxed">
              Complete our form and our friendly team will be in touch within 24 hours. For urgent enquiries, call us on{" "}
              <a href="tel:1300375030" className="font-bold text-[#31847b] hover:underline">
                1300 375 030
              </a>.
            </div>

            {/* Form Section */}
            {isSubmitted ? (
              <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200/80 text-stone-900 space-y-3 animate-in fade-in duration-500">
                <div className="flex items-center gap-2.5 text-[#31847b]">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Enquiry Received</h3>
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
              <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
                {/* First Name Field */}
                <div className="group">
                  <label
                    htmlFor="contact-firstName"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1 group-focus-within:text-[#31847b] transition-colors"
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
                    className="w-full bg-transparent border-b border-stone-200 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors placeholder:text-stone-400 font-normal"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1 group-focus-within:text-[#31847b] transition-colors"
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
                    className="w-full bg-transparent border-b border-stone-200 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors placeholder:text-stone-400 font-normal"
                  />
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1 group-focus-within:text-[#31847b] transition-colors"
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
                    className="w-full bg-transparent border-b border-stone-200 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors placeholder:text-stone-400 font-normal"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1 group-focus-within:text-[#31847b] transition-colors"
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
                    className="w-full bg-transparent border-b border-stone-200 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors resize-none placeholder:text-stone-400 font-normal"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#31847b] hover:bg-[#286f67] text-white px-8 py-3.5 text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md shadow-[#31847b]/20 hover:shadow-lg active:scale-98 group cursor-pointer rounded-xl"
                  >
                    <span>Begin Enquiry</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
