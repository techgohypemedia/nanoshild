import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/PageHero";
import PageCtaBand from "@/components/PageCtaBand";
import ProjectGalleryGrid from "@/components/ProjectGalleryGrid";
import { galleryItems } from "@/lib/gallery";

const description = "Kitchen benchtops, islands, home bars and vanity tops. See natural stone surfaces protected with NanoShield HD marble protection film.";

export const metadata: Metadata = {
  title: "Project Gallery | NanoShield HD",
  description,
};

export default function ProjectGalleryPage() {
  return (
    <div className="bg-[#f8f9fa] text-[#1f242e]">
      <Navbar />
      <main>
        <PageHero
          title={"Stone you love.\nProtected for everyday life."}
          description={description}
          image="/slider/slide-4.jpg"
          imageAlt="Marble waterfall island in a light-filled kitchen"
          cta="Request a Quote"
        />

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">Project Gallery</p>
          <h2 className="mb-12 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Protect the natural stone you use most.</h2>
          <ProjectGalleryGrid items={galleryItems} />
        </section>

        <PageCtaBand cta="Request a Quote" />
      </main>
      <Footer />
      <ConsultationModal />
    </div>
  );
}
