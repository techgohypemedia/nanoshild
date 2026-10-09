import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Images, Store, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

const description = "Thanks for your enquiry. Our team will be in touch within 24 hours. In the meantime, explore our project gallery, showroom and pricing.";

export const metadata: Metadata = {
  title: "Thank You | NanoShield HD",
  description,
  robots: { index: false, follow: true },
};

const EXPLORE_LINKS = [
  {
    href: "/project-gallery",
    icon: Images,
    title: "Project Gallery",
    text: "Kitchen benchtops, islands, home bars and vanity tops protected with NanoShield HD.",
    primary: true,
  },
  {
    href: "/our-showroom",
    icon: Store,
    title: "Our Showroom",
    text: "See the film on real stone and find our Moorabbin showroom on the map.",
  },
  {
    href: "/pricing",
    icon: Tag,
    title: "Pricing",
    text: "Fully installed from $300 per square metre. See what shapes your quote.",
  },
];

export default function ThankYouPage() {
  return (
    <div className="bg-[#f8f9fa] text-[#1f242e]">
      <Navbar />
      <main>
        <PageHero
          title={"Thank you.\nWe’ve received your enquiry."}
          description={description}
          image="/marble-kitchen-island.jpg"
          imageAlt="Protected marble kitchen island"
        />

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">What happens next</p>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Our team will be in touch within 24 hours.</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-stone-600 lg:pt-9">
              <p className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#31847b]" aria-hidden="true" />
                <span>Your details have been sent to our friendly team.</span>
              </p>
              <p className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#31847b]" aria-hidden="true" />
                <span>
                  We’ll talk through your stone, confirm suitability and prepare your quote. For urgent enquiries, call us on{" "}
                  <a href={PHONE_HREF} className="font-semibold text-[#31847b] underline underline-offset-2 hover:text-[#256e66] whitespace-nowrap">{PHONE_DISPLAY}</a>.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-stone-200 pt-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">Explore the site while you wait</p>
            <div className="grid gap-5 md:grid-cols-3">
              {EXPLORE_LINKS.map(({ href, icon: Icon, title, text, primary }) => (
                <Link
                  key={href}
                  href={href}
                  className={`group flex flex-col rounded-2xl border p-6 transition-colors ${
                    primary
                      ? "border-[#31847b] bg-[#31847b] text-white hover:bg-[#2c776f]"
                      : "border-stone-200/90 bg-white hover:border-[#31847b]/40"
                  }`}
                >
                  <Icon className={`mb-5 h-6 w-6 ${primary ? "text-white" : "text-[#31847b]"}`} aria-hidden="true" />
                  <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                  <p className={`flex-1 text-base leading-relaxed ${primary ? "text-white/85" : "text-stone-600"}`}>{text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold">
                    {primary ? "View the gallery" : `Go to ${title}`}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
