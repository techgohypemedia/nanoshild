import Link from "next/link";
import ProjectVideos from "@/components/ProjectVideos";

export default function VideoTestSection() {
  return (
    <section
      id="product-test"
      className="relative z-10 w-full bg-[#f8f9fa] text-[#1f242e] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-stone-200/90"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Centered header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 px-4 overflow-hidden">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1f242e] tracking-tight leading-tight">
            See NanoShield HD in action
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore our finished projects, watch a surface protection demonstration and see how our team installs NanoShield HD.
          </p>
        </div>

        <ProjectVideos featured />
        <div className="mt-10 text-center">
          <Link href="/project-gallery#project-videos" className="font-semibold text-[#31847b] underline underline-offset-4">
            Watch more project videos
          </Link>
        </div>
      </div>
    </section>
  );
}
