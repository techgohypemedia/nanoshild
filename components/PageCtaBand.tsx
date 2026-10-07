import PageConsultationButton from "@/components/PageConsultationButton";

export default function PageCtaBand({ cta }: { cta: string }) {
  return (
    <section className="bg-[#eaf3f1] px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div><h2 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let’s talk about your stone.</h2><p className="text-stone-600">Bring your questions. We’ll help you find the next step.</p></div>
        <PageConsultationButton label={cta} />
      </div>
    </section>
  );
}
