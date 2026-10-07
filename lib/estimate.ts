// Pricing logic for the NanoShield HD cost estimator on the pricing page.
// Edit the values in ESTIMATE_CONFIG; nothing else needs touching.

export type Unit = "mm" | "cm";

export const ESTIMATE_CONFIG = {
  // Rate per m², chosen by total billable area. Checked top to bottom, first match wins.
  bands: [
    { from: 21, rate: 250 }, // 21 m² and over
    { from: 16, rate: 275 }, // 16 – 20.99 m²
    { from: 10, rate: 300 }, // 10 – 15.99 m²
    { from: 7, rate: 325 }, // 7 – 9.99 m²
    { from: 0, rate: 350 }, // 0 – 6.99 m²
  ],

  // Area is always rounded UP to this increment. 0.1 -> 6.14 becomes 6.2
  roundTo: 0.1,

  ctaText: "Book a free in-home measure",

  // Query parameter names; must match the hidden fields on the GoHighLevel form exactly.
  params: {
    estimate: "estimate", // 4400
    area: "area", // 15.87
    surfaces: "surfaces", // Kitchen Island 2400x1000mm = 2.40 m2 | ...
  },

  // Surface types and their starting dimensions, in millimetres.
  // Length is the long run, width is the depth across.
  types: {
    "Kitchen Island": { l: 2400, w: 1000 },
    Cooktop: { l: 3000, w: 600 }, // the benchtop run holding the cooktop
    Splashback: { l: 3000, w: 600 },
    "Bathroom Vanity": { l: 1500, w: 550 },
    "Dining Table": { l: 2200, w: 1000 },
    "Bar Top": { l: 2000, w: 600 },
    Other: { l: 1000, w: 600 },
  },

  firstSurface: "Kitchen Island",
  nextSurface: "Splashback",
} as const;

export type SurfaceType = keyof typeof ESTIMATE_CONFIG.types;
export const SURFACE_TYPES = Object.keys(ESTIMATE_CONFIG.types) as SurfaceType[];

export interface Surface {
  id: number;
  name: SurfaceType;
  l: string;
  w: string;
  touched: boolean; // true once the customer edits a dimension
}

export const round1 = (v: number) => Math.round(v * 10) / 10;
const num = (v: string) => parseFloat(v) || 0;

/** Metres per input unit. */
export const unitFactor = (unit: Unit) => (unit === "mm" ? 0.001 : 0.01);

/** Default dimensions for a surface type, expressed in the given unit. */
export function defaultDims(name: SurfaceType, unit: Unit) {
  const p = ESTIMATE_CONFIG.types[name];
  const f = unit === "mm" ? 1 : 0.1;
  return { l: String(round1(p.l * f)), w: String(round1(p.w * f)) };
}

/** Area of one surface in m². */
export function areaOf(s: Pick<Surface, "l" | "w">, unit: Unit) {
  const k = unitFactor(unit);
  return num(s.w) * k * (num(s.l) * k);
}

export const hasDims = (s: Pick<Surface, "l" | "w">) => num(s.l) > 0 && num(s.w) > 0;

/** Always rounds UP, never down. 6.14 -> 6.2, 6.20 stays 6.2 */
export function roundUp(area: number) {
  const steps = 1 / ESTIMATE_CONFIG.roundTo;
  return Math.ceil(area * steps - 1e-9) / steps;
}

export function rateFor(area: number) {
  const band = ESTIMATE_CONFIG.bands.find((b) => area >= b.from);
  return (band ?? ESTIMATE_CONFIG.bands[ESTIMATE_CONFIG.bands.length - 1]).rate;
}

export const priceFor = (billed: number) => (billed <= 0 ? 0 : billed * rateFor(billed));

export const money = (v: number) => "$" + Math.round(v).toLocaleString("en-AU");

export interface Estimate {
  area: number;
  billed: number;
  rate: number;
  total: number;
  breakdown: string;
  incomplete: boolean;
}

export function estimate(surfaces: Surface[], unit: Unit): Estimate {
  let area = 0;
  let incomplete = false;
  const lines: string[] = [];
  for (const s of surfaces) {
    const a = areaOf(s, unit);
    if (!hasDims(s)) incomplete = true;
    area += a;
    lines.push(`${s.name} ${num(s.l)}x${num(s.w)}${unit} = ${a.toFixed(2)} m2`);
  }
  const billed = roundUp(area);
  return { area, billed, rate: rateFor(billed), total: priceFor(billed), breakdown: lines.join(" | "), incomplete };
}

/** Query parameters passed to the GoHighLevel form so the estimate is attached to the enquiry. */
export function estimateParams(e: Estimate): Record<string, string> {
  const p = ESTIMATE_CONFIG.params;
  return {
    [p.estimate]: String(Math.round(e.total)),
    [p.area]: e.area.toFixed(2),
    [p.surfaces]: e.breakdown,
  };
}
