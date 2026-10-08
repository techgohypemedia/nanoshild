import { ArrowUpRight, MapPin } from "lucide-react";
import { SHOWROOM_ADDRESS, SHOWROOM_MAP_EMBED_URL, SHOWROOM_MAP_LINK } from "@/lib/contact";

// Google Map of the showroom. Uses the keyless Maps embed so no API key is required.
export default function ShowroomMap() {
  return (
    <section id="showroom-map" className="border-t border-stone-200/90 bg-white px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">Visit our showroom</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Find us in Moorabbin.</h2>
            <address className="mt-4 flex items-center gap-2 text-base not-italic text-stone-600 sm:text-lg">
              <MapPin className="h-5 w-5 shrink-0 text-[#31847b]" aria-hidden="true" />
              {SHOWROOM_ADDRESS}
            </address>
          </div>
          <a
            href={SHOWROOM_MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#31847b] hover:text-[#256e66]"
          >
            Get directions
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <iframe
          src={SHOWROOM_MAP_EMBED_URL}
          title="Map showing the NanoShield HD showroom at Factory 5, 83-85 Keys Rd, Moorabbin VIC 3189"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block h-90 w-full rounded-2xl border border-stone-200/90 bg-stone-100 sm:h-115"
        />
      </div>
    </section>
  );
}
