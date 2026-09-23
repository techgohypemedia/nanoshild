import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import PageConsultationButton from "@/components/PageConsultationButton";
import OurShowroomSection from "@/components/OurShowroomSection";
import PageDetailsSections from "@/components/PageDetailsSections";
import { sitePages, type SitePageSlug } from "@/lib/site-pages";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(sitePages).map((slug) => ({ slug }));
}

function getPage(slug: string) {
  if (!Object.prototype.hasOwnProperty.call(sitePages, slug)) notFound();
  return sitePages[slug as SitePageSlug];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getPage((await params).slug);
  return { title: `${page.label} | NanoShield HD`, description: page.description };
}

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPage(slug);
  return (
    <div className="bg-[#f8f9fa] text-[#1f242e]">
      <Navbar key={slug} />
      <main>
        <section id="page-hero" className="relative isolate flex min-h-[660px] items-end overflow-hidden bg-[#1f242e] pb-16 pt-40 sm:min-h-[740px] sm:pb-24">
          <Image src={page.image} alt={page.imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
          <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
            <h1 className="max-w-4xl whitespace-pre-line text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">{page.title}</h1>
            <p className="mb-8 mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{page.description}</p>
            <PageConsultationButton label={page.cta} />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">{page.eyebrow}</p>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{page.heading}</h2>
            </div>
            <p className="text-lg leading-relaxed text-stone-600 lg:pt-9">{page.intro}</p>
          </div>
          <div className="mt-14 grid gap-8 border-t border-stone-200 pt-10 md:grid-cols-3 md:gap-12">
            {page.details.map(([title, description]) => (
              <article key={title}>
                <Check className="mb-5 text-[#31847b]" size={24} aria-hidden="true" />
                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="text-base leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        {slug === "technology" && <section className="mx-auto mb-20 grid max-w-7xl items-center gap-10 px-6 sm:px-10 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-white"><Image src="/layers/nanoshield_layers_transparent.png" alt="Illustration of the NanoShield protective layers above a stone surface" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-8" /></div>
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">Between life and your marble</p><h2 className="mb-5 text-3xl font-semibold sm:text-4xl">A clear layer.<br />A natural finish.</h2><p className="max-w-md leading-relaxed text-stone-600">The protective system sits on top of the stone. Your marble remains visible beneath a surface designed to take the demands of everyday use.</p></div>
        </section>}
        {slug === "our-showroom" && <OurShowroomSection />}

        <PageDetailsSections slug={slug as SitePageSlug} />

        <section className="bg-[#eaf3f1] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div><h2 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let’s talk about your stone.</h2><p className="text-stone-600">Bring your questions. We’ll help you find the next step.</p></div>
            <PageConsultationButton label={page.cta} />
          </div>
        </section>
        <div className="mx-auto flex max-w-7xl justify-end px-6 py-8 sm:px-10"><Link href={`/${page.next}`} className="inline-flex items-center gap-3 py-2 font-semibold hover:text-[#31847b]">Explore {sitePages[page.next].label}<ArrowRight size={18} /></Link></div>
      </main>
      <Footer />
      <ConsultationModal />
    </div>
  );
}
