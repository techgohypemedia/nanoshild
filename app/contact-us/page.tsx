import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREAS } from "@/lib/contact";

const description = "Speak with our team about protecting your benchtop, kitchen island or other natural stone surface. Installation in Melbourne, Sydney and Brisbane.";

export const metadata: Metadata = {
  title: "Contact Us | NanoShield HD",
  description,
};

const CONTACT_METHODS = [
  { icon: Phone, label: "Call us", value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: Mail, label: "Email us", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Installation areas", value: SERVICE_AREAS },
];

export default function ContactUsPage() {
  return (
    <div className="bg-[#f8f9fa] text-[#1f242e]">
      <Navbar />
      <main>
        <PageHero
          title={"Let’s talk about\nyour stone."}
          description={description}
          image="/showroom-stock/contact-living-marble.jpg"
          imageAlt="Marble island in an open-plan living space"
        />

        <section className="border-b border-stone-200 bg-white px-6 py-12 sm:px-10 sm:py-14">
          <ul className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf3f1] text-[#31847b]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{label}</p>
                  {href ? (
                    <a href={href} className="mt-1 block break-all text-lg font-semibold text-[#1f242e] hover:text-[#31847b]">{value}</a>
                  ) : (
                    <p className="mt-1 text-lg font-semibold text-[#1f242e]">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <ConsultationModal />
    </div>
  );
}
