import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/PageHero";
import PageCtaBand from "@/components/PageCtaBand";
import NanoShieldFilmVideoSection from "@/components/NanoShieldFilmVideoSection";
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
        <PageHero title={page.title} description={page.description} image={page.image} imageAlt={page.imageAlt} cta={page.cta} />

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

        {slug === "about-us" && <NanoShieldFilmVideoSection />}
        {slug === "our-showroom" && <OurShowroomSection />}

        <PageDetailsSections slug={slug as SitePageSlug} />

        <PageCtaBand cta={page.cta} />
        <div className="mx-auto flex max-w-7xl justify-end px-6 py-8 sm:px-10"><Link href={`/${page.next}`} className="inline-flex items-center gap-3 py-2 font-semibold hover:text-[#31847b]">Explore {sitePages[page.next].label}<ArrowRight size={18} /></Link></div>
      </main>
      <Footer />
      <ConsultationModal />
    </div>
  );
}
