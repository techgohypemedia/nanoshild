export default function NanoShieldFilmVideoSection() {
  return (
    <section
      id="film-architecture"
      className="w-full bg-black text-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-900"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Simple, Clean Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-6 sm:mb-8 tracking-tight">
          Multi-Layer Protection
        </h2>

        {/* Clean Video Player seamlessly blending with black background */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
          <video
            src="/Naino%20Shield%202.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-contain bg-black"
          />
        </div>
      </div>
    </section>
  );
}
