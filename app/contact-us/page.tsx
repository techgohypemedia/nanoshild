import type { Metadata } from "next";
import { Mail, MapPin, Phone, Store } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import ShowroomMap from "@/components/ShowroomMap";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREAS, SHOWROOM_ADDRESS_LINES, SHOWROOM_MAP_LINK } from "@/lib/contact";
import { estimateNote, estimateParamsFrom } from "@/lib/estimate";

const description = "Speak with our team about protecting your benchtop, kitchen island or other natural stone surface. Installation in Melbourne, Sydney and Brisbane.";

export const metadata: Metadata = {
  title: "Contact Us | NanoShield HD",
  description,
};

const CONTACT_METHODS = [
  { icon: Phone, label: "Call us", lines: [PHONE_DISPLAY], href: PHONE_HREF, note: "Speak with our team" },
  { icon: Mail, label: "Email us", lines: [EMAIL], href: `mailto:${EMAIL}`, note: "We reply within 24 hours" },
  { icon: Store, label: "Showroom", lines: [`${SHOWROOM_ADDRESS_LINES[0]}, ${SHOWROOM_ADDRESS_LINES[1]}`, SHOWROOM_ADDRESS_LINES[2]], href: SHOWROOM_MAP_LINK, external: true, note: "Visits by appointment" },
  { icon: MapPin, label: "Installation areas", lines: [SERVICE_AREAS], note: "Professional installation" },
];

export default async function ContactUsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  // The pricing calculator links here with its estimate in the query string; it is passed on to the form's hidden fields.
  const formParams = estimateParamsFrom(await searchParams);
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
          <ul className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {CONTACT_METHODS.map(({ icon: Icon, label, lines, href, external, note }) => {
              const body = (
                <>
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3f1] text-[#31847b] transition-colors group-hover:bg-[#31847b] group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">{label}</span>
                  <span className="mt-1.5 block text-base font-semibold leading-snug text-[#1f242e] [overflow-wrap:anywhere] sm:text-[17px]">
                    {lines.map((line) => <span key={line} className="block">{line}</span>)}
                  </span>
                  <span className="mt-2 block text-sm text-stone-500">{note}</span>
                </>
              );
              const cardClass = "group block h-full rounded-2xl border border-stone-200/90 bg-[#fbfbfa] p-5 transition-colors hover:border-[#31847b]/40 hover:bg-white";
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={cardClass}>{body}</a>
                  ) : (
                    <div className={cardClass}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <ContactSection formParams={formParams} note={estimateNote(formParams)} />

        <ShowroomMap />
      </main>
      <Footer />
    </div>
  );
}
