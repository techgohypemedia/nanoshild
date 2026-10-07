"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Plus, X } from "lucide-react";
import { openConsultationModal } from "@/components/ConsultationModal";
import {
  ESTIMATE_CONFIG,
  SURFACE_TYPES,
  areaOf,
  defaultDims,
  estimate,
  estimateParams,
  hasDims,
  money,
  round1,
  type Surface,
  type SurfaceType,
  type Unit,
} from "@/lib/estimate";

const UNITS: { value: Unit; label: string }[] = [
  { value: "mm", label: "Millimetres" },
  { value: "cm", label: "Centimetres" },
];

let nextId = 1;
function makeSurface(name: SurfaceType, unit: Unit): Surface {
  return { id: nextId++, name, ...defaultDims(name, unit), touched: false };
}

const inputClass =
  "block h-11 w-full rounded-lg border border-stone-200 bg-white px-3 text-[15px] font-medium text-[#1f242e] tabular-nums outline-none transition-colors hover:border-stone-400 focus-visible:border-[#31847b] focus-visible:ring-4 focus-visible:ring-[#31847b]/15";
const labelClass = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-500";

/** Counts the displayed figure towards the target; jumps straight there if the user prefers reduced motion. */
function useCountUp(target: number) {
  const [shown, setShown] = useState(target);
  const shownRef = useRef(target);
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const start = shownRef.current;
    if (reduce || start === target) {
      shownRef.current = target;
      setShown(target);
      return;
    }
    const delta = target - start;
    const dur = 380;
    let t0: number | null = null;
    let frame = 0;
    const step = (ts: number) => {
      if (t0 === null) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      const v = start + delta * (1 - Math.pow(1 - p, 3));
      shownRef.current = v;
      setShown(v);
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return shown;
}

export default function PricingCalculator() {
  const uid = useId();
  const [unit, setUnit] = useState<Unit>("mm");
  const [surfaces, setSurfaces] = useState<Surface[]>(() => [makeSurface(ESTIMATE_CONFIG.firstSurface, "mm")]);

  const result = estimate(surfaces, unit);
  const shownTotal = useCountUp(result.total);
  const surfaceWord = surfaces.length === 1 ? "surface" : "surfaces";

  const update = (id: number, patch: Partial<Surface>) =>
    setSurfaces((list) => list.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  // Only overwrite dimensions if the customer has not entered their own.
  const changeType = (s: Surface, name: SurfaceType) =>
    update(s.id, s.touched ? { name } : { name, ...defaultDims(name, unit) });

  const changeUnit = (next: Unit) => {
    if (next === unit) return;
    const mul = next === "cm" ? 0.1 : 10; // mm->cm divide by 10, cm->mm multiply
    setSurfaces((list) =>
      list.map((s) => ({
        ...s,
        l: String(round1((parseFloat(s.l) || 0) * mul)),
        w: String(round1((parseFloat(s.w) || 0) * mul)),
      })),
    );
    setUnit(next);
  };

  const book = () => {
    if (result.area <= 0) return;
    openConsultationModal({
      title: ESTIMATE_CONFIG.ctaText,
      subtitle: `Your estimate of ${money(result.total)} (${result.area.toFixed(2)} m² across ${surfaces.length} ${surfaceWord}) is attached to this enquiry.`,
      formParams: estimateParams(result),
    });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
      {/* Inputs */}
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span id={`${uid}-unit`} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-500">
            Measuring in
          </span>
          <div role="group" aria-labelledby={`${uid}-unit`} className="inline-flex rounded-full border border-stone-200 bg-white p-[3px]">
            {UNITS.map((u) => (
              <button
                key={u.value}
                type="button"
                aria-pressed={unit === u.value}
                onClick={() => changeUnit(u.value)}
                className={`cursor-pointer rounded-full px-4 py-2 text-[13px] transition-colors ${
                  unit === u.value ? "bg-[#31847b] font-semibold text-white" : "text-stone-500 hover:text-[#1f242e]"
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {surfaces.map((s, i) => {
            const invalid = !hasDims(s);
            return (
              <div key={s.id} className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="mb-4 flex items-center gap-2">
                  <div className="relative flex-1">
                    <select
                      aria-label="Surface type"
                      value={s.name}
                      onChange={(e) => changeType(s, e.target.value as SurfaceType)}
                      className={`${inputClass} cursor-pointer appearance-none pr-9 font-semibold`}
                    >
                      {SURFACE_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 8"
                      className="pointer-events-none absolute right-3 top-1/2 h-2 w-3 -translate-y-1/2 text-[#1f242e]"
                    >
                      <path d="M1 1.5L6 6.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </div>
                  {surfaces.length > 1 && (
                    <button
                      type="button"
                      aria-label={`Remove surface ${i + 1}`}
                      onClick={() => setSurfaces((list) => list.filter((x) => x.id !== s.id))}
                      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-stone-200 text-stone-500 transition-colors hover:border-red-700 hover:text-red-700"
                    >
                      <X size={18} aria-hidden="true" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {(["l", "w"] as const).map((f) => (
                    <div key={f}>
                      <label htmlFor={`${uid}-${s.id}-${f}`} className={labelClass}>
                        {f === "l" ? "Length" : "Width"} ({unit})
                      </label>
                      <input
                        id={`${uid}-${s.id}-${f}`}
                        type="number"
                        inputMode="decimal"
                        min={0}
                        step="any"
                        value={s[f]}
                        aria-invalid={invalid || undefined}
                        onChange={(e) => update(s.id, { [f]: e.target.value, touched: true })}
                        className={inputClass}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-stone-200 pt-3">
                  <span className={`${labelClass} mb-0`}>Area</span>
                  <span className="text-[15px] font-semibold tabular-nums text-[#31847b]">{areaOf(s, unit).toFixed(2)} m²</span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setSurfaces((list) => [...list, makeSurface(ESTIMATE_CONFIG.nextSurface, unit)])}
          className="mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-stone-400 px-4 py-3.5 text-sm font-medium text-[#31847b] transition-colors hover:border-[#31847b] hover:bg-[#31847b]/5"
        >
          <Plus size={16} aria-hidden="true" /> Add another surface
        </button>

        <p role="alert" className={`mt-3 text-[13px] text-red-700 ${result.incomplete ? "" : "hidden"}`}>
          Enter a length and width for every surface.
        </p>
      </div>

      {/* Estimate */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-3xl bg-[#1f242e] p-7 text-white sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#50b8ae]">Your estimate</p>
          <span className="mt-2.5 block h-0.5 w-9 bg-[#50b8ae]" aria-hidden="true" />
          <p aria-live="polite" aria-atomic="true" className="mt-6 text-5xl font-bold leading-none tracking-tight tabular-nums text-[#50b8ae] sm:text-6xl">
            {shownTotal > 0 ? money(shownTotal) : "—"}
          </p>
          <p className="mt-3 text-sm text-stone-400">
            {result.area > 0 ? `${surfaces.length} ${surfaceWord}, supplied and installed` : "Enter your measurements above"}
          </p>

          <dl className="mt-6 space-y-3 border-t border-white/15 pt-5 text-sm">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400">Total area measured</dt>
              <dd className="font-semibold tabular-nums">{result.area.toFixed(2)} m²</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400">Rate applied</dt>
              <dd className="font-semibold tabular-nums">{result.area > 0 ? `${money(result.rate)} / m²` : "—"}</dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={book}
            disabled={result.area <= 0}
            className="mt-7 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#50b8ae] px-6 py-4 text-sm font-semibold text-[#102c29] transition-colors hover:bg-[#79cec5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50b8ae] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {ESTIMATE_CONFIG.ctaText}
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-stone-500">
          This is an estimate. Your fixed price is confirmed at your free in-home measure.
        </p>
      </div>
    </div>
  );
}
