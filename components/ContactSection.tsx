"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
      id="contact"
      className="relative w-full bg-[#fbf9f5] text-[#1c1917] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-stone-200/80 overflow-hidden"
    >
      <div id="contact-section" />
      <div className="w-full max-w-[1560px] mx-auto">
        {/* ============================================================ */}
        {/* TOP HEADER: Clean Editorial Header                            */}
        {/* ============================================================ */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-5xl mb-10 sm:mb-14 pb-8 border-b border-stone-200/80 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight leading-[1.15]">
              Give Your Stone a Place in Everyday Life
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="space-y-2 leading-relaxed font-normal max-w-4xl"
          >
            <p className="text-stone-800 text-base sm:text-lg font-medium">
              You have chosen a natural material that makes your home feel like yours. Take the next step towards protecting it.
            </p>
            <p className="text-stone-500 text-sm sm:text-base">
              Tell us about your benchtop, kitchen island or other natural stone surface. We will help you understand what is suitable, what it will cost and how to book your NanoShield HD installation.
            </p>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* MAIN CONTENT GRID: IMAGE & SIMPLE EDITORIAL FORM              */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start overflow-hidden">
          {/* LEFT COLUMN: Clean Natural Marble Interior Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-stone-200/90">
              <Image
                src="/showroom-stock/contact-living-marble.jpg"
                alt="Luxury Australian home with protected Calacatta marble waterfall island"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Clean, Lightweight Editorial Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center lg:pl-4 xl:pl-8"
          >
            {/* Lightweight Response Time Note */}
            <div className="p-4 rounded-xl bg-[#eaf3f1]/70 border border-[#31847b]/20 text-[#102c29] text-xs sm:text-sm font-medium leading-relaxed">
              Complete our form and our friendly team will be in touch within 24 hours. For urgent enquiries, call us on{" "}
              <a href="tel:1300375030" className="font-bold text-[#31847b] hover:underline">
                1300 375 030
              </a>.
            </div>

            {/* Form Section */}
            {isSubmitted ? (
              <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/80 text-stone-900 space-y-3 animate-in fade-in duration-500 shadow-2xs">
                <div className="flex items-center gap-2.5 text-[#31847b]">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Enquiry Received</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Thank you, {formData.firstName || "there"}. A licensed NanoShield HD specialist will be in touch with you shortly.
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
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors placeholder:text-stone-400 font-normal"
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
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors placeholder:text-stone-400 font-normal"
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
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors placeholder:text-stone-400 font-normal"
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
                    className="w-full bg-transparent border-b border-stone-300 pb-2.5 text-stone-900 text-sm sm:text-base focus:outline-none focus:border-[#31847b] transition-colors resize-none placeholder:text-stone-400 font-normal"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
