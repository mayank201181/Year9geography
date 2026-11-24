"use client";
import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

function mercalliEstimate(mag: number, softSoil: boolean): { roman: string; desc: string } {
  const eff = mag + (softSoil ? 1.0 : 0);
  if (eff < 4.5) return { roman: "III–IV", desc: "Felt indoors; hanging lights swing slightly." };
  if (eff < 5.8) return { roman: "V–VI", desc: "Strong shaking; plaster cracks, unstable objects fall." };
  if (eff < 7.0) return { roman: "VII–VIII", desc: "Severe damage to unreinforced brick; chimneys topple." };
  if (eff < 8.2) return { roman: "IX–X", desc: "Violent destruction; weak masonry collapses (Kathmandu 2015)." };
  return { roman: "XI–XII", desc: "Extreme catastrophic ruin; ground fissuring and total collapse." };
}

function MagnitudeWaveExplorer() {
  const [m1, setM1] = useState(5.8);
  const [m2, setM2] = useState(7.8);
  const [distKm, setDistKm] = useState(140);
  const [soil, setSoil] = useState<"bedrock" | "soft">("soft");

  const delta = +(m2 - m1).toFixed(1);
  const absDelta = Math.abs(delta);
  const ampRatio = Math.pow(10, absDelta);
  const energyRatio = Math.pow(10, 1.5 * absDelta);
  const tP = +(distKm / 6.0).toFixed(1);
  const tS = +(distKm / 3.5).toFixed(1);
  const warnGap = +(tS - tP).toFixed(1);
  const mercalli = mercalliEstimate(m2, soil === "soft");

  const formatMult = (n: number) => {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M×`;
    if (n >= 1000) return `${Math.round(n).toLocaleString("en-GB")}×`;
    if (n >= 10) return `${Math.round(n)}×`;
    return `${n.toFixed(1)}×`;
  };

  // Visual bar heights on a compressed log scale so M5.8 vs M7.8 stays legible
  const h1 = Math.max(16, Math.min(130, 16 + (m1 - 3) * 18));
  const h2 = Math.max(16, Math.min(130, 16 + (m2 - 3) * 18));
  const pProgress = Math.min(1, tP / Math.max(1, tS));

  return (
    <WidgetFrame
      title="Logarithmic Magnitude & P/S Early-Warning Lab"
      tryThis={[
        "Leave **Quake B at M7.8 (Nepal 2015)** and set **Quake A to M5.8** — verify +2.0 gives **100× amplitude** and **1,000× energy**!",
        "Toggle **Soil Geology** between **Hard Bedrock** and **Soft Lake Clay (Kathmandu)** to see why one magnitude produces different Mercalli scores.",
      ]}
      caption={
        <span>
          <strong>Logarithmic Reality:</strong>{" "}
          {delta === 0
            ? "Both quakes have equal magnitude (1× amplitude, 1× energy)."
            : delta > 0
              ? `M${m2.toFixed(1)} is +${delta.toFixed(1)} higher than M${m1.toFixed(1)} → ${formatMult(ampRatio)} wave amplitude and ${formatMult(energyRatio)} energy released.`
              : `M${m1.toFixed(1)} is +${absDelta.toFixed(1)} higher than M${m2.toFixed(1)} → ${formatMult(ampRatio)} wave amplitude and ${formatMult(energyRatio)} energy released.`}{" "}
          At {distKm} km distance, P-waves beat destructive S-waves by <strong>{warnGap} s</strong>.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <Slider
            label="Quake A (Reference)"
            value={m1}
            min={3.0}
            max={8.0}
            step={0.2}
            onChange={setM1}
            format={(v) => `M${v.toFixed(1)}`}
          />
          <Slider
            label="Quake B (Target)"
            value={m2}
            min={4.0}
            max={9.0}
            step={0.2}
            onChange={setM2}
            format={(v) => `M${v.toFixed(1)}`}
          />
          <Slider
            label="Distance to City"
            value={distKm}
            min={42}
            max={294}
            step={21}
            onChange={setDistKm}
            format={(v) => `${v} km`}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold text-ink-2">Local surface geology (Mercalli effect):</span>
          <Segmented
            label="Local surface geology"
            value={soil}
            onChange={setSoil}
            options={[
              { value: "bedrock", label: "Solid Bedrock" },
              { value: "soft", label: "Soft Lake Clay (Kathmandu)" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 205"
            className="h-auto w-full"
            role="img"
            aria-label="Visual comparison of seismic magnitude energy and P-wave versus S-wave arrival race"
          >
            <rect x="0" y="0" width="560" height="205" rx="8" fill="var(--surface)" />
            <text x="135" y="20" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--ink)">
              Magnitude Scale Jump (ΔM = {delta >= 0 ? `+${delta.toFixed(1)}` : delta.toFixed(1)})
            </text>
            <rect x="64" y={168 - h1} width="52" height={h1} rx="5" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.5" />
            <text x="90" y="185" fontSize="11" fontWeight="800" textAnchor="middle" fill="var(--ink)">M{m1.toFixed(1)}</text>
            <text x="90" y={162 - h1} fontSize="10" fontWeight="700" textAnchor="middle" fill="var(--brand)">Quake A</text>

            <rect x="154" y={168 - h2} width="52" height={h2} rx="5" fill="var(--bad-soft)" stroke="var(--bad)" strokeWidth="1.5" />
            <text x="180" y="185" fontSize="11" fontWeight="800" textAnchor="middle" fill="var(--ink)">M{m2.toFixed(1)}</text>
            <text x="180" y={162 - h2} fontSize="10" fontWeight="800" textAnchor="middle" fill="var(--bad)">{formatMult(energyRatio)} E</text>

            <line x1="258" y1="16" x2="258" y2="192" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="410" y="20" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--ink)">
              Seismic Wave Race ({distKm} km to City)
            </text>

            {/* P-wave bar */}
            <text x="276" y="64" fontSize="10.5" fontWeight="700" fill="var(--brand)">P-waves (6.0 km/s)</text>
            <rect x="276" y="72" width="260" height="18" rx="5" fill="var(--surface-2)" stroke="var(--line)" />
            <rect x="276" y="72" width={Math.max(24, Math.round(260 * pProgress))} height="18" rx="5" fill="var(--brand)" />
            <text x="532" y="64" fontSize="10.5" fontWeight="800" textAnchor="end" fill="var(--brand)">{tP} s</text>

            {/* S-wave bar */}
            <text x="276" y="118" fontSize="10.5" fontWeight="700" fill="var(--bad)">Destructive S-waves (3.5 km/s)</text>
            <rect x="276" y="126" width="260" height="18" rx="5" fill="var(--bad)" />
            <text x="532" y="118" fontSize="10.5" fontWeight="800" textAnchor="end" fill="var(--bad)">{tS} s</text>

            <rect x="276" y="158" width="260" height="32" rx="6" fill="var(--good-soft)" stroke="var(--good)" />
            <text x="406" y="178" fontSize="11" fontWeight="800" textAnchor="middle" fill="var(--good)">
              P-to-S Early Warning Window: {warnGap} seconds
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <Readout label="Amplitude Ratio" value={formatMult(ampRatio)} tone="brand" />
          <Readout label="Energy Ratio" value={formatMult(energyRatio)} tone="bad" />
          <Readout label="Est. Mercalli (Quake B)" value={mercalli.roman} tone="ink" />
          <Readout label="P–S Warning Gap" value={`${warnGap} s`} tone="good" />
        </div>
        <p className="text-xs text-ink-2">
          <strong>Observed Mercalli {mercalli.roman}:</strong> {mercalli.desc}
        </p>
      </div>
    </WidgetFrame>
  );
}

function Nepal3PsDecisionLab() {
  const [protectM, setProtectM] = useState(6);
  const [prepareM, setPrepareM] = useState(4);
  const budgetM = 12;
  const clampedPrepare = Math.min(prepareM, budgetM - protectM);
  const predictM = Math.max(0, budgetM - protectM - clampedPrepare);

  // Realistic LIC impact estimates per $1M in a Nepal-like Himalayan valley
  const homesRetrofitted = protectM * 300; // ~$3,333 per timber-band retrofit
  const schoolsDrilled = clampedPrepare * 180; // drills + 72-hr kits + community responders
  const eewStations = predictM * 4; // monitoring stations (gives probability/EEW, NOT exact date!)

  // Diminishing-returns resilience score out of 100 showing why Protect + Prepare >> Predict alone
  const protectScore = Math.min(55, Math.round(55 * (1 - Math.exp(-protectM / 4.2))));
  const prepareScore = Math.min(35, Math.round(35 * (1 - Math.exp(-clampedPrepare / 2.8))));
  const predictScore = Math.min(10, Math.round(10 * (1 - Math.exp(-predictM / 2.5))));
  const totalResilience = protectScore + prepareScore + predictScore;

  const verdict =
    predictM >= 7
      ? "Over-investing in Predict! Exact earthquake dates remain impossible—weak brick homes still collapse."
      : protectM >= 5 && clampedPrepare >= 3
        ? "Strong balanced LIC plan! Appropriate timber-band Protect + widespread Prepare drills maximise lives saved."
        : protectM < 3
          ? "Too little Protect! Drills help, yet unreinforced brick walls still risk catastrophic collapse."
          : "Add more Prepare funding so families and schools know 'Drop, Cover, Hold On' and hold 72-hr kits.";

  const handleProtectChange = (v: number) => {
    setProtectM(v);
    if (v + prepareM > budgetM) setPrepareM(budgetM - v);
  };

  const handlePrepareChange = (v: number) => {
    setPrepareM(Math.min(v, budgetM - protectM));
  };

  return (
    <WidgetFrame
      title="Nepal LIC Resilience Lab — Allocating a US$12M 3 Ps Budget"
      tryThis={[
        "Try spending **$10M on Predict** and see what happens to the resilience score — why can't sensors alone stop brick homes collapsing?",
        "Find a balanced **Protect + Prepare** split that pushes resilience above **75 / 100**.",
      ]}
      caption={
        <span>
          <strong>Planner Verdict:</strong> {verdict}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label="Protect (Timber-band retrofits & safe schools)"
            value={protectM}
            min={0}
            max={budgetM}
            step={1}
            onChange={handleProtectChange}
            format={(v) => `US$${v}M`}
          />
          <Slider
            label="Prepare (Drop-Cover-Hold drills & 72-hr kits)"
            value={clampedPrepare}
            min={0}
            max={budgetM - protectM}
            step={1}
            onChange={handlePrepareChange}
            format={(v) => `US$${v}M`}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-surface-2 px-3 py-2 text-sm">
          <span className="font-semibold text-ink-2">Remaining allocation → <strong>Predict</strong> (Seismic gap &amp; P-wave sensors):</span>
          <span className="font-extrabold text-brand">US${predictM}M</span>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 150"
            className="h-auto w-full"
            role="img"
            aria-label="Stacked horizontal bars showing Protect, Prepare, and Predict budget shares and overall LIC earthquake resilience score"
          >
            <rect x="0" y="0" width="560" height="150" rx="8" fill="var(--surface)" />
            <text x="20" y="24" fontSize="11.5" fontWeight="800" fill="var(--ink)">Budget Split (Total = US$12M)</text>
            <rect x="20" y="34" width={Math.max(0, (protectM / budgetM) * 520)} height="24" rx="4" fill="var(--brand)" />
            <rect
              x={20 + (protectM / budgetM) * 520}
              y="34"
              width={Math.max(0, (clampedPrepare / budgetM) * 520)}
              height="24"
              fill="var(--good)"
            />
            <rect
              x={20 + ((protectM + clampedPrepare) / budgetM) * 520}
              y="34"
              width={Math.max(0, (predictM / budgetM) * 520)}
              height="24"
              rx="4"
              fill="var(--accent)"
            />
            <text x="20" y="74" fontSize="10" fontWeight="700" fill="var(--brand)">■ Protect: ${protectM}M</text>
            <text x="190" y="74" fontSize="10" fontWeight="700" fill="var(--good)">■ Prepare: ${clampedPrepare}M</text>
            <text x="360" y="74" fontSize="10" fontWeight="700" fill="var(--warn)">■ Predict: ${predictM}M (capped impact)</text>

            <text x="20" y="106" fontSize="11.5" fontWeight="800" fill="var(--ink)">
              Estimated Himalayan Community Resilience Score
            </text>
            <rect x="20" y="114" width="520" height="22" rx="6" fill="var(--surface-2)" stroke="var(--line)" />
            <rect
              x="20"
              y="114"
              width={Math.round((totalResilience / 100) * 520)}
              height="22"
              rx="6"
              fill={totalResilience >= 75 ? "var(--good)" : totalResilience >= 50 ? "var(--brand)" : "var(--bad)"}
            />
            <text x="532" y="106" fontSize="12" fontWeight="800" textAnchor="end" fill="var(--ink)">
              {totalResilience} / 100
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Rural Homes Retrofitted" value={homesRetrofitted.toLocaleString("en-GB")} tone="brand" />
          <Readout label="Schools & Kits Equipped" value={schoolsDrilled.toLocaleString("en-GB")} tone="good" />
          <Readout label="Seismic Sensors Added" value={`${eewStations} stations`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "magnitude-wave-explorer",
    title: "Logarithmic Magnitude & P/S Early-Warning Lab",
    blurb: "Compare any two earthquake magnitudes, see why +2.0 = 1,000× energy, and test how soil geology and distance change Mercalli intensity and P-wave warning time.",
    Component: MagnitudeWaveExplorer,
  },
  {
    id: "nepal-3ps-decision-lab",
    title: "Nepal LIC Resilience Lab — 3 Ps Budget Allocator",
    blurb: "Allocate US$12M across Protect, Prepare, and Predict for a Himalayan district and discover why appropriate engineering and drills outperform prediction.",
    Component: Nepal3PsDecisionLab,
  },
];
