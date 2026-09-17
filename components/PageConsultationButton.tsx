"use client";

import { ArrowRight } from "lucide-react";
import { openConsultationModal } from "@/components/ConsultationModal";

export default function PageConsultationButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => openConsultationModal({ title: label })}
      className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#50b8ae] px-7 py-4 text-sm font-semibold text-[#102c29] transition-colors hover:bg-[#79cec5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50b8ae]">
      {label}<ArrowRight size={17} aria-hidden="true" />
    </button>
  );
}
