import Image from "next/image";
import { Check, Plus } from "lucide-react";
import { pageDetails } from "@/lib/page-details";
import type { SitePageSlug } from "@/lib/site-pages";

export default function PageDetailsSections({ slug }: { slug: SitePageSlug }) {
  const content = pageDetails[slug];
  return (
    <>
      <section className="bg-white px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-100">
            <Image src={content.feature.image} alt={content.feature.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">{content.feature.eyebrow}</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{content.feature.title}</h2>
            <p className="mt-6 leading-relaxed text-stone-600">{content.feature.text}</p>
            <ul className="mt-8 space-y-4">
              {content.feature.points.map((point) => <li key={point} className="flex items-start gap-3 text-sm font-medium leading-relaxed"><Check size={18} className="mt-0.5 shrink-0 text-[#31847b]" aria-hidden="true" />{point}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {slug === "technology" && <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">Two different approaches</p>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">Sealing and surface protection.</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
          <table className="w-full min-w-[540px] text-left text-sm leading-relaxed">
            <caption className="sr-only">Comparison of a penetrating sealer and NanoShield HD protective film</caption>
            <thead className="bg-[#eaf3f1]"><tr>{["How it works", "Penetrating sealer", "NanoShield HD"].map((label) => <th key={label} scope="col" className="p-5 font-semibold">{label}</th>)}</tr></thead>
            <tbody>{[
              ["Position", "Works within the stone", "Sits above the stone"],
              ["Approach", "Slows absorption", "Creates physical separation"],
              ["Daily contact", "The stone remains the exposed surface", "The protective film takes contact"],
              ["Long-term care", "Follow the sealer’s maintenance guidance", "Follow film care and replacement guidance"],
            ].map(([label, sealer, film]) => <tr key={label} className="border-t border-stone-200"><th scope="row" className="p-5 font-medium">{label}</th><td className="p-5 text-stone-600">{sealer}</td><td className="p-5 text-stone-600">{film}</td></tr>)}</tbody>
          </table>
        </div>
      </section>}

      {slug === "pricing" && <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">For initial planning</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A little measurement goes a long way.</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone-600">These examples multiply surface area by the advertised starting rate of $300/m². They are planning examples; your tailored quote confirms the final price and scope.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">{[["2 m²", "$600"], ["4 m²", "$1,200"], ["6 m²", "$1,800"]].map(([area, price]) => <div key={area} className="rounded-2xl border border-stone-200 bg-white p-7"><p className="text-sm text-stone-600">{area} of surface</p><p className="mt-4 text-4xl font-semibold tracking-tight">{price}</p><p className="mt-3 text-xs text-[#31847b]">At the starting rate of $300/m²</p></div>)}</div>
      </section>}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">What to expect</p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{content.processTitle}</h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map(([title, text], index) => <li key={title} className="border-t border-stone-300 pt-6"><span className="text-sm font-semibold text-[#31847b]">{String(index + 1).padStart(2, "0")}</span><h3 className="mb-3 mt-5 text-lg font-semibold">{title}</h3><p className="text-sm leading-relaxed text-stone-600">{text}</p></li>)}
        </ol>
      </section>

      <section className="border-t border-stone-200 bg-white px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#31847b]">A few more details</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your questions,<br />answered.</h2><p className="mt-5 max-w-sm leading-relaxed text-stone-600">Have a question about your own surface? The team can help you work through the specifics.</p></div>
          <div className="border-t border-stone-200">{content.faqs.map(([question, answer]) => <details key={question} className="group border-b border-stone-200"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#31847b] [&::-webkit-details-marker]:hidden">{question}<Plus size={20} className="shrink-0 text-[#31847b] group-open:rotate-45" aria-hidden="true" /></summary><p className="max-w-2xl pb-6 pr-8 text-sm leading-relaxed text-stone-600">{answer}</p></details>)}</div>
        </div>
      </section>
    </>
  );
}
