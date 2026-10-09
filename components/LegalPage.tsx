import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export type LegalSection = { id?: string; heading: string; paragraphs?: string[]; list?: string[] };

type LegalPageProps = { title: string; updated: string; intro: string; sections: LegalSection[] };

// Shared layout for the Privacy Policy and Terms & Conditions pages
export default function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <div className="bg-[#f8f9fa] text-[#1f242e]">
      <Navbar />
      <main>
        {/* Dark header: the "page-hero" id keeps the Navbar readable until it is scrolled past */}
        <section id="page-hero" className="bg-[#1f242e] px-6 pb-14 pt-36 sm:px-10 sm:pb-20 sm:pt-44">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
            <p className="mt-5 text-sm text-white/70">Last updated: {updated}</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="text-lg leading-relaxed text-stone-700">{intro}</p>
          {sections.map((section) => (
            <section key={section.heading} id={section.id} className="mt-12 scroll-mt-28">
              <h2 className="mb-4 text-2xl font-semibold tracking-tight">{section.heading}</h2>
              <div className="space-y-4 leading-relaxed text-stone-600">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.list && (
                  <ul className="space-y-2 pl-1">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#31847b]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight">Contact us</h2>
            <p className="leading-relaxed text-stone-600">
              If you have any questions, contact NanoShield HD on{" "}
              <a href={PHONE_HREF} className="font-semibold text-[#31847b] hover:underline">{PHONE_DISPLAY}</a> or email{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-[#31847b] hover:underline">{EMAIL}</a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
