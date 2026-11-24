"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type CoastShape = "plain" | "vbay";

function TsunamiShoalingSimulator() {
  const [coast, setCoast] = useState<CoastShape>("plain");
  const [pos, setPos] = useState(25); // 0 = deep trench, 100 = shoreline
  const [uplift, setUplift] = useState(8); // metres of vertical seafloor slip
  const [seawall, setSeawall] = useState(10); // metres

  const depthM = Math.max(4, Math.round(4000 * Math.pow(4 / 4000, pos / 100)));
  const vMs = Math.sqrt(9.81 * depthM);
  const vKmh = Math.round(vMs * 3.6);
  const vMax = Math.sqrt(9.81 * 4000);
  const wavelengthKm = Math.max(2, Math.round(180 * (vMs / vMax)));

  const hDeep = uplift * 0.14; // ~1.1 m at 8 m uplift
  const bayMult = coast === "vbay" ? 2.2 : 1.0;
  const nearShoreBoost = pos > 65 ? 1 + ((pos - 65) / 35) * (coast === "vbay" ? 1.8 : 0.9) : 1;
  const waveHeightM = Number(
    (hDeep * Math.pow(4000 / depthM, 0.25) * nearShoreBoost * (pos > 60 ? 1 + ((pos - 60) / 40) * (bayMult - 1) : 1)).toFixed(1),
  );

  // Predicted maximum coastal run-up at shoreline (pos = 100)
  const coastalRunupM = Number(
    (hDeep * Math.pow(4000 / 4, 0.25) * (1 + (coast === "vbay" ? 1.8 : 0.9)) * bayMult).toFixed(1),
  );
  const overtops = coastalRunupM > seawall;
  const marginM = Number(Math.abs(coastalRunupM - seawall).toFixed(1));

  // SVG positioning
  const waveX = Math.round(52 + (pos / 100) * 356); // 52 → 408
  const seabedY = Math.round(212 - Math.pow(pos / 100, 1.5) * 68); // 212 → 144
  const waveCrestPx = Math.min(82, Math.max(5, Math.round(waveHeightM * 2.1)));
  const waveHalfW = Math.max(18, Math.round(70 - (pos / 100) * 48));
  const seawallPx = Math.round(seawall * 2.6);

  return (
    <WidgetFrame
      title="Tsunami Shoaling: Ocean Depth to Coastal Wave Height Simulator"
      tryThis={[
        "Slide **Wave Approach** smoothly from **0% (4,000 m trench)** to **100% (4 m shore)** and watch speed drop from ~710 km/h to ~23 km/h as height shoots upward.",
        "Switch from **Flat Sendai Plain** to **Narrow V-Bay (Sanriku)** at **8–9 m uplift** to recreate Japan 2011’s ~35–40 m run-up overtopping a **10 m seawall**.",
      ]}
      caption={
        <>
          At <strong>{depthM.toLocaleString("en-US")} m depth</strong>, the tsunami moves at{" "}
          <strong>{vKmh} km/h</strong> with a <strong>{wavelengthKm} km wavelength</strong> and{" "}
          <strong>{waveHeightM} m current height</strong>. By the shoreline, peak run-up reaches{" "}
          <strong>{coastalRunupM} m</strong> —{" "}
          {overtops ? (
            <>
              <strong>overtopping the {seawall} m seawall by {marginM} m!</strong> Residents must already be uphill.
            </>
          ) : (
            <>
              <strong>contained below the {seawall} m seawall</strong> with a {marginM} m safety margin.
            </>
          )}
        </>
      }
    >
      <div className="space-y-4">
        <div className="min-w-0">
          <Segmented
            label="Coastline shape"
            value={coast}
            onChange={setCoast}
            options={[
              { value: "plain", label: "Flat Sendai Plain" },
              { value: "vbay", label: "Narrow V-Bay (Sanriku)" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Slider
            label="Wave Approach (Trench → Shore)"
            value={pos}
            min={0}
            max={100}
            step={2}
            onChange={setPos}
            format={(v) => `${v}%`}
          />
          <Slider
            label="Seafloor Vertical Uplift"
            value={uplift}
            min={2}
            max={10}
            step={1}
            onChange={setUplift}
            format={(v) => `${v} m`}
          />
          <Slider
            label="Coastal Seawall Height"
            value={seawall}
            min={5}
            max={15}
            step={1}
            onChange={setSeawall}
            format={(v) => `${v} m`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 245"
            className="h-auto w-full"
            role="img"
            aria-label={`Interactive tsunami shoaling diagram showing water depth ${depthM} metres, wave speed ${vKmh} km/h, and coastal run-up ${coastalRunupM} metres against a ${seawall} metre seawall`}
          >
            <rect x="0" y="0" width="560" height="245" rx="10" fill="var(--surface)" />

            {/* Top status strip */}
            <rect
              x="14"
              y="10"
              width="532"
              height="24"
              rx="6"
              fill={overtops ? "var(--bad-soft)" : "var(--good-soft)"}
              stroke={overtops ? "var(--bad)" : "var(--good)"}
            />
            <text
              x="280"
              y="26"
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="800"
              fill={overtops ? "var(--bad)" : "var(--good)"}
            >
              {overtops
                ? `SEAWALL OVERTOPPED: ${coastalRunupM} m coastal run-up exceeds ${seawall} m wall by ${marginM} m`
                : `SEAWALL HOLDS: ${coastalRunupM} m coastal run-up stays ${marginM} m below ${seawall} m wall`}
            </text>

            {/* Mean sea surface & water body */}
            <path
              d="M 16 124 L 434 124 L 434 214 L 16 214 Z"
              fill="var(--info-soft)"
            />
            <line x1="16" y1="124" x2="434" y2="124" stroke="var(--info)" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Moving shoaling wave crest + leading drawdown trough */}
            <path
              d={`M ${Math.max(16, waveX - waveHalfW * 1.4)} 124 Q ${waveX - waveHalfW * 0.5} 124 ${waveX} ${124 - waveCrestPx} Q ${waveX + waveHalfW * 0.55} 124 ${Math.min(434, waveX + waveHalfW * 1.1)} ${124 + Math.min(18, Math.round(waveCrestPx * 0.32))} Q ${Math.min(434, waveX + waveHalfW * 1.6)} 124 ${Math.min(434, waveX + waveHalfW * 2.1)} 124 Z`}
              fill="var(--info)"
              opacity="0.72"
              stroke="var(--brand-2)"
              strokeWidth="2"
            />

            {/* Seabed & coastal land */}
            <path
              d="M 16 214 L 160 214 Q 290 210 385 164 L 434 142 L 544 142 L 544 234 L 16 234 Z"
              fill="var(--surface-2)"
              stroke="var(--ink)"
              strokeWidth="2"
            />

            {/* Depth probe vertical line at waveX */}
            <line
              x1={waveX}
              y1={124 - waveCrestPx}
              x2={waveX}
              y2={seabedY}
              stroke="var(--brand)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <circle cx={waveX} cy={124 - waveCrestPx} r="4.5" fill="var(--bad)" />
            <text
              x={Math.min(370, Math.max(78, waveX))}
              y={Math.max(48, 114 - waveCrestPx)}
              textAnchor="middle"
              fontSize="10"
              fontWeight="800"
              fill="var(--ink)"
            >
              {waveHeightM} m · {vKmh} km/h
            </text>

            {/* Seawall */}
            <rect
              x="434"
              y={142 - seawallPx}
              width="14"
              height={seawallPx}
              fill="var(--ink-2)"
              stroke="var(--ink)"
              strokeWidth="1.2"
            />
            <text x="441" y={136 - seawallPx} textAnchor="middle" fontSize="9" fontWeight="800" fill="var(--ink)">
              {seawall} m
            </text>

            {/* Coastal town behind wall */}
            <rect x="466" y="120" width="22" height="22" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
            <polygon points="463,120 477,110 491,120" fill="var(--accent)" />
            <rect x="498" y="114" width="26" height="28" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.5" />
            <text x="494" y="158" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--ink)">
              Coastal Town
            </text>

            {/* Bottom labels */}
            <text x="86" y="228" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--ink-2)">
              Deep Trench (4,000 m)
            </text>
            <text x="295" y="228" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--brand)">
              Continental Shelf (Friction slows front)
            </text>
            <text x="490" y="228" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--ink-2)">
              {coast === "vbay" ? "Narrow V-Bay" : "Open Plain"}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Water Depth" value={`${depthM.toLocaleString("en-US")} m`} tone="ink" />
          <Readout label="Wave Speed" value={`${vKmh} km/h`} tone="brand" />
          <Readout label="Wavelength" value={`${wavelengthKm} km`} tone="ink" />
          <Readout label="Shore Run-up" value={`${coastalRunupM} m`} tone={overtops ? "bad" : "good"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

type CompareMode = "economic" | "human" | "recovery";

function HicLicTectonicDashboard() {
  const [mode, setMode] = useState<CompareMode>("economic");
  const [buildingCodePct, setBuildingCodePct] = useState(20); // LIC Nepal ~20% baseline
  const [warningCoveragePct, setWarningCoveragePct] = useState(20); // LIC baseline

  // Model how improving building codes & early warning cuts LIC building-collapse deaths (Nepal ~9,000 baseline)
  const buildingFactor = 1 - ((buildingCodePct - 20) / 80) * 0.68;
  const warningFactor = 1 - ((warningCoveragePct - 20) / 80) * 0.22;
  const projectedLicDeaths = Math.max(800, Math.round(9000 * buildingFactor * warningFactor));
  const livesSaved = 9000 - projectedLicDeaths;
  const recoveryYears = Number(
    Math.max(1.5, 6.0 - ((buildingCodePct - 20) / 80) * 2.5 - ((warningCoveragePct - 20) / 80) * 1.2).toFixed(1),
  );

  // Metric bars data (pure deterministic numbers)
  const chart =
    mode === "economic"
      ? {
          leftTitle: "Absolute Loss (US$ Billion)",
          leftJapanLabel: "$235B+",
          leftNepalLabel: "$5B",
          leftJapanPct: 100,
          leftNepalPct: 4,
          rightTitle: "Economic Burden (% of GDP)",
          rightJapanLabel: "~4% GDP",
          rightNepalLabel: "~25% GDP",
          rightJapanPct: 16,
          rightNepalPct: 100,
          summary:
            "Japan lost 47× more total US dollars because high-value insured factories, ports, and nuclear plants sit in hazard zones — yet Nepal’s $5B blow wiped out ~25% of its entire annual economy versus ~4% in Japan.",
        }
      : mode === "human"
        ? {
            leftTitle: "Total Homeless / Displaced",
            leftJapanLabel: "0.45M",
            leftNepalLabel: "3.5M",
            leftJapanPct: 13,
            leftNepalPct: 100,
            rightTitle: "Share of Deaths from Building Collapse",
            rightJapanLabel: "<10% (Tsunami >90%)",
            rightNepalLabel: "~85%+ (Unreinforced)",
            rightJapanPct: 10,
            rightNepalPct: 88,
            summary:
              "Despite M9.0 shaking (~64× more energy than Nepal’s M7.8), Japan’s strict aseismic codes kept buildings standing (>90% died from the 40 m tsunami). In LIC Nepal, unreinforced brick and stone homes collapsed widely, leaving 3.5 million homeless.",
          }
        : {
            leftTitle: "Domestic Self-Funded Recovery (%)",
            leftJapanLabel: "~95% Self-funded",
            leftNepalLabel: "~30% (Aid-reliant)",
            leftJapanPct: 95,
            leftNepalPct: 30,
            rightTitle: "Early-Warning & Rescue Readiness Index",
            rightJapanLabel: "95 / 100 (P-wave + SDF)",
            rightNepalLabel: "25 / 100 (Landslides)",
            rightJapanPct: 95,
            rightNepalPct: 25,
            summary:
              "Japan mobilised 100,000 SDF troops, automatic Shinkansen brakes, insurance payouts, and domestic reserves within hours. Landlocked, mountainous Nepal relied heavily on foreign rescue teams and international NGOs for years.",
          };

  return (
    <WidgetFrame
      title="HIC (Japan 2011) vs LIC (Nepal 2015) Tectonic Impact Comparator"
      tryThis={[
        "Toggle **Economic Paradox ($ vs % GDP)** to see the tallest bar completely flip sides between Japan ($235B+) and Nepal (25% of GDP).",
        "Use the **LIC Resilience Sliders** below to test how raising aseismic building enforcement from **20% to 85%** slashes projected earthquake deaths.",
      ]}
      caption={
        <>
          <strong>Key Geographical Insight:</strong> {chart.summary}
        </>
      }
    >
      <div className="space-y-4">
        <div className="min-w-0">
          <Segmented
            label="Comparison lens"
            value={mode}
            onChange={setMode}
            options={[
              { value: "economic", label: "Economic Paradox ($ vs % GDP)" },
              { value: "human", label: "Human & Building Impact" },
              { value: "recovery", label: "Preparedness & Recovery" },
            ]}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 225"
            className="h-auto w-full"
            role="img"
            aria-label={`Comparison chart of Japan 2011 HIC versus Nepal 2015 LIC for ${mode}`}
          >
            <rect x="0" y="0" width="560" height="225" rx="10" fill="var(--surface)" />
            <line x1="280" y1="16" x2="280" y2="208" stroke="var(--line)" strokeDasharray="4 4" />

            {/* Left panel */}
            <text x="140" y="28" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="var(--ink)">
              {chart.leftTitle}
            </text>
            <line x1="36" y1="176" x2="246" y2="176" stroke="var(--ink-2)" strokeWidth="1.5" />

            <rect
              x="66"
              y={176 - Math.round((chart.leftJapanPct / 100) * 116)}
              width="54"
              height={Math.max(6, Math.round((chart.leftJapanPct / 100) * 116))}
              rx="6"
              fill="var(--brand)"
            />
            <text
              x="93"
              y={168 - Math.round((chart.leftJapanPct / 100) * 116)}
              textAnchor="middle"
              fontSize="10"
              fontWeight="800"
              fill="var(--brand)"
            >
              {chart.leftJapanLabel}
            </text>
            <text x="93" y="194" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink)">
              Japan (HIC)
            </text>
            <text x="93" y="208" textAnchor="middle" fontSize="8.5" fill="var(--ink-2)">
              2011 · M9.0
            </text>

            <rect
              x="160"
              y={176 - Math.round((chart.leftNepalPct / 100) * 116)}
              width="54"
              height={Math.max(6, Math.round((chart.leftNepalPct / 100) * 116))}
              rx="6"
              fill="var(--bad)"
            />
            <text
              x="187"
              y={168 - Math.round((chart.leftNepalPct / 100) * 116)}
              textAnchor="middle"
              fontSize="10"
              fontWeight="800"
              fill="var(--bad)"
            >
              {chart.leftNepalLabel}
            </text>
            <text x="187" y="194" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink)">
              Nepal (LIC)
            </text>
            <text x="187" y="208" textAnchor="middle" fontSize="8.5" fill="var(--ink-2)">
              2015 · M7.8
            </text>

            {/* Right panel */}
            <text x="420" y="28" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="var(--ink)">
              {chart.rightTitle}
            </text>
            <line x1="316" y1="176" x2="526" y2="176" stroke="var(--ink-2)" strokeWidth="1.5" />

            <rect
              x="346"
              y={176 - Math.round((chart.rightJapanPct / 100) * 116)}
              width="54"
              height={Math.max(6, Math.round((chart.rightJapanPct / 100) * 116))}
              rx="6"
              fill="var(--brand)"
            />
            <text
              x="373"
              y={168 - Math.round((chart.rightJapanPct / 100) * 116)}
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="800"
              fill="var(--brand)"
            >
              {chart.rightJapanLabel}
            </text>
            <text x="373" y="194" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink)">
              Japan (HIC)
            </text>
            <text x="373" y="208" textAnchor="middle" fontSize="8.5" fill="var(--ink-2)">
              Subduction + Tsunami
            </text>

            <rect
              x="440"
              y={176 - Math.round((chart.rightNepalPct / 100) * 116)}
              width="54"
              height={Math.max(6, Math.round((chart.rightNepalPct / 100) * 116))}
              rx="6"
              fill="var(--bad)"
            />
            <text
              x="467"
              y={168 - Math.round((chart.rightNepalPct / 100) * 116)}
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="800"
              fill="var(--bad)"
            >
              {chart.rightNepalLabel}
            </text>
            <text x="467" y="194" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink)">
              Nepal (LIC)
            </text>
            <text x="467" y="208" textAnchor="middle" fontSize="8.5" fill="var(--ink-2)">
              Inland Collision
            </text>
          </svg>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            What-If Policy Lab: Investing in LIC Preparedness (M7.8 Nepal Baseline = 9,000 deaths)
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Slider
              label="Aseismic Building Enforcement"
              value={buildingCodePct}
              min={20}
              max={95}
              step={5}
              onChange={setBuildingCodePct}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Early Warning & Rescue Coverage"
              value={warningCoveragePct}
              min={20}
              max={95}
              step={5}
              onChange={setWarningCoveragePct}
              format={(v) => `${v}%`}
            />
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <Readout
              label="Projected LIC Deaths"
              value={projectedLicDeaths.toLocaleString("en-US")}
              tone={projectedLicDeaths <= 3500 ? "good" : "bad"}
            />
            <Readout
              label="Estimated Lives Saved"
              value={`+${livesSaved.toLocaleString("en-US")}`}
              tone="good"
            />
            <Readout label="Est. Core Rebuilding Time" value={`${recoveryYears} yrs`} tone="brand" />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "tsunami-shoaling-simulator",
    title: "Tsunami Shoaling: Ocean Depth to Coastal Wave Height Simulator",
    blurb: "Track a tsunami from a 4,000 m trench onto a shallow plain or narrow V-bay and test seawall height.",
    Component: TsunamiShoalingSimulator,
  },
  {
    id: "hic-lic-tectonic-dashboard",
    title: "HIC (Japan 2011) vs LIC (Nepal 2015) Tectonic Impact Comparator",
    blurb: "Compare economic losses ($ vs % GDP), building survival, and test how preparedness cuts LIC casualties.",
    Component: HicLicTectonicDashboard,
  },
];
