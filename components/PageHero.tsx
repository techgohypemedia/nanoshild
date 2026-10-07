import Image from "next/image";
import PageConsultationButton from "@/components/PageConsultationButton";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: string;
};

// Full-bleed hero used by inner pages. The "page-hero" id drives the Navbar's transparent state.
export default function PageHero({ title, description, image, imageAlt, cta }: PageHeroProps) {
  return (
    <section id="page-hero" className="relative isolate flex min-h-[660px] items-end overflow-hidden bg-[#1f242e] pb-16 pt-40 sm:min-h-[740px] sm:pb-24">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <h1 className="max-w-4xl whitespace-pre-line text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">{title}</h1>
        <p className={`${cta ? "mb-8" : ""} mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg`}>{description}</p>
        {cta && <PageConsultationButton label={cta} />}
      </div>
    </section>
  );
}
