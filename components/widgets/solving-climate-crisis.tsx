"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

function MitigationAdaptationCityPlanner() {
  const [cleanGrid, setCleanGrid] = useState(40);
  const [coast, setCoast] = useState<"none" | "wall" | "hybrid">("wall");
  const [greenery, setGreenery] = useState(30);
  const [paris, setParis] = useState<"weak" | "paris">("weak");

  // City emissions (Mt CO2/yr) from power + urban transport minus blue-carbon/tree sinks
  const basePowerMt = 12 * (1 - cleanGrid / 100) + 0.6;
  const natureSinkMt = (coast === "hybrid" ? 0.8 : 0) + (greenery / 100) * 1.1;
  const netCityMt = Math.max(0.4, +(basePowerMt - natureSinkMt).toFixed(1));

  // Projected 2100 sea-level surge pressure (cm) under weak ~2.7 °C vs Paris 1.5 °C
  const surgeCm = paris === "weak" ? 135 : 65;
  const defenceCm = coast === "none" ? 20 : coast === "wall" ? 115 : 145;
  const floodSafe = defenceCm >= surgeCm;
  const heatCooling = +(0.4 + (greenery / 80) * 2.8).toFixed(1);

  const seaTopY = paris === "weak" ? 116 : 138;
  const waveLabel = paris === "weak" ? "2.7 °C Surge (+135 cm)" : "1.5 °C Surge (+65 cm)";
  const coastStatus =
    coast === "none"
      ? "Flooded Coast"
      : floodSafe
        ? coast === "hybrid"
          ? "Resilient Hybrid"
          : "Wall Holds"
        : "Wall Overtopped!";
  const coastTone: "good" | "brand" | "bad" =
    coast === "none" || !floodSafe ? "bad" : coast === "hybrid" ? "good" : "brand";

  const treeCount = Math.max(1, Math.round(greenery / 16));

  return (
    <WidgetFrame
      title="Mitigation vs Adaptation Coastal City Planner"
      tryThis={[
        "Leave **Global Cooperation** on **Weak Pledges (~2.7 °C)** with **Tall Sea Wall Only** — watch the extreme storm surge overtop the concrete wall!",
        "Switch to **Hybrid Mangroves + Dike** AND **Paris 1.5 °C** — see how global mitigation plus nature-based adaptation keeps the city safe while storing blue carbon.",
        "Raise **Clean Grid** and **Urban Greenery** together to see why win–win policies cut both CO₂ and urban heat simultaneously.",
      ]}
      caption={
        <span>
          Your city emits <strong>{netCityMt} Mt CO₂/year</strong> and cools street heat by <strong>−{heatCooling} °C</strong>.{" "}
          {!floodSafe
            ? "Warning: without global Paris mitigation OR layered hybrid coastal defences, high storm surges overwhelm bare coasts and even expensive single sea walls!"
            : coast === "hybrid"
              ? "Excellent balance: mangroves absorb 50–70% of wave energy before hitting the dike AND store blue carbon, proving how mitigation and adaptation reinforce each other."
              : "Your sea wall holds under this scenario, though adding living mangroves and urban greenery reduces wave costs and stores extra carbon."}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Coastal adaptation choice"
            value={coast}
            onChange={setCoast}
            options={[
              { value: "none", label: "No Barrier" },
              { value: "wall", label: "Sea Wall Only" },
              { value: "hybrid", label: "Hybrid Mangroves + Dike" },
            ]}
          />
          <Segmented
            label="Global Paris trajectory"
            value={paris}
            onChange={setParis}
            options={[
              { value: "weak", label: "Weak Pledges (~2.7 °C)" },
              { value: "paris", label: "Paris 1.5 °C NDCs" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider
            label="Clean Renewable Grid Share (Mitigation)"
            value={cleanGrid}
            min={10}
            max={95}
            step={5}
            onChange={setCleanGrid}
            format={(v) => `${v}% clean`}
          />
          <Slider
            label="Urban Trees & Sponge Parks (Win–Win)"
            value={greenery}
            min={10}
            max={80}
            step={10}
            onChange={setGreenery}
            format={(v) => `${v}% canopy`}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 220"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive coastal city cross-section showing storm surge height, coastal barrier type, clean energy grid and urban tree canopy"
          >
            <rect width="560" height="220" rx="8" fill="var(--surface)" />

            {/* Sky info */}
            <text x="16" y="20" fontSize="10.5" fontWeight="800" fill={paris === "weak" ? "var(--bad)" : "var(--good)"}>
              {waveLabel}
            </text>
            <text x="544" y="20" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--brand)">
              Grid: {cleanGrid}% Solar/Wind · {100 - cleanGrid}% Fossil
            </text>

            {/* Sea water */}
            <rect
              x="16"
              y={seaTopY}
              width={floodSafe ? 174 : 265}
              height={196 - seaTopY}
              fill={floodSafe ? "var(--brand-soft)" : "var(--bad)"}
              opacity={floodSafe ? 0.85 : 0.28}
              stroke={floodSafe ? "var(--brand)" : "var(--bad)"}
              strokeWidth="1.4"
            />
            <text x="86" y={seaTopY + 26} textAnchor="middle" fontSize="10" fontWeight="800" fill={floodSafe ? "var(--brand)" : "var(--bad)"}>
              {floodSafe ? "Storm Surge Held" : "Coastal Flooding!"}
            </text>

            {/* Hybrid Mangroves */}
            {coast === "hybrid" ? (
              <g>
                {[122, 140, 158].map((mx) => (
                  <g key={mx}>
                    <line x1={mx} y1="158" x2={mx} y2="112" stroke="var(--good)" strokeWidth="2.5" />
                    <circle cx={mx} cy="108" r="12" fill="var(--good)" opacity="0.32" stroke="var(--good)" />
                  </g>
                ))}
                <text x="140" y="84" textAnchor="middle" fontSize="9.2" fontWeight="800" fill="var(--good)">
                  Mangroves (−60% waves)
                </text>
              </g>
            ) : null}

            {/* Sea Wall or Hybrid Dike */}
            {coast === "wall" ? (
              <g>
                <rect x="178" y="122" width="20" height="74" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="1.8" />
                <text x="188" y="114" textAnchor="middle" fontSize="9" fontWeight="800" fill="var(--ink)">
                  Wall
                </text>
              </g>
            ) : coast === "hybrid" ? (
              <g>
                <polygon points="174,196 182,114 202,114 212,196" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="1.6" />
                <text x="192" y="106" textAnchor="middle" fontSize="9" fontWeight="800" fill="var(--ink)">
                  Dike
                </text>
              </g>
            ) : null}

            {/* City ground */}
            <rect x="198" y="158" width="346" height="38" fill="var(--surface-2)" stroke="var(--line)" />

            {/* Sponge park */}
            <rect
              x="212"
              y="148"
              width={40 + greenery * 1.1}
              height="12"
              rx="4"
              fill="var(--good)"
              opacity="0.32"
              stroke="var(--good)"
            />
            <text x={232 + greenery * 0.55} y="157" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="var(--good)">
              Sponge Park
            </text>

            {/* Urban buildings with rooftop solar when cleanGrid >= 50 */}
            {[340, 396, 452].map((bx, i) => {
              const bh = i === 1 ? 66 : 52;
              return (
                <g key={bx}>
                  <rect x={bx} y={158 - bh} width="42" height={bh} fill="var(--surface)" stroke="var(--ink-2)" strokeWidth="1.4" />
                  {cleanGrid >= 45 ? (
                    <rect x={bx + 2} y={152 - bh} width="38" height="6" rx="2" fill="var(--brand)" />
                  ) : null}
                </g>
              );
            })}

            {/* Urban shade trees */}
            {Array.from({ length: treeCount }, (_, i) => {
              const tx = 224 + i * 24;
              return (
                <g key={tx}>
                  <line x1={tx} y1="148" x2={tx} y2="128" stroke="var(--ink-2)" strokeWidth="2" />
                  <circle cx={tx} cy="122" r="9" fill="var(--good)" opacity="0.35" stroke="var(--good)" />
                </g>
              );
            })}

            {/* Power plant vs wind turbine on right */}
            {cleanGrid >= 60 ? (
              <g>
                <line x1="522" y1="158" x2="522" y2="96" stroke="var(--brand)" strokeWidth="2.4" />
                <line x1="522" y1="96" x2="506" y2="82" stroke="var(--brand)" strokeWidth="2.2" />
                <line x1="522" y1="96" x2="538" y2="84" stroke="var(--brand)" strokeWidth="2.2" />
                <line x1="522" y1="96" x2="522" y2="116" stroke="var(--brand)" strokeWidth="2.2" />
                <text x="522" y="72" textAnchor="middle" fontSize="9" fontWeight="800" fill="var(--brand)">
                  Clean Wind
                </text>
              </g>
            ) : (
              <g>
                <rect x="510" y="114" width="22" height="44" fill="var(--surface-2)" stroke="var(--bad)" strokeWidth="1.5" />
                <circle cx="524" cy="100" r="8" fill="var(--bad)" opacity="0.28" />
                <circle cx="534" cy="88" r="10" fill="var(--bad)" opacity="0.22" />
                <text x="520" y="74" textAnchor="middle" fontSize="9" fontWeight="800" fill="var(--bad)">
                  Fossil CO₂
                </text>
              </g>
            )}

            <text x="280" y="212" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--ink-2)">
              {coast === "hybrid"
                ? "Hybrid soft + hard coastal engineering lowers wall stress & stores blue carbon"
                : coast === "wall"
                  ? "Hard engineering alone offers rigid defence but risks overtopping if warming stays unchecked"
                  : "Unprotected low-lying coastal neighbourhoods face severe tidal & storm-surge flooding"}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout
            label="City Net CO₂"
            value={`${netCityMt} Mt/yr`}
            tone={netCityMt <= 4 ? "good" : netCityMt <= 8 ? "brand" : "bad"}
          />
          <Readout label="Coastal Status" value={coastStatus} tone={coastTone} />
          <Readout label="Urban Cooling" value={`−${heatCooling} °C`} tone="good" />
          <Readout
            label="Surge vs Defence"
            value={`${surgeCm} / ${defenceCm} cm`}
            tone={floodSafe ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

function SingaporeGreenPlanLab() {
  const [cleanPowerPct, setCleanPowerPct] = useState(35);
  const [carbonTax, setCarbonTax] = useState(45);
  const [evMrtPct, setEvMrtPct] = useState(50);
  const [treesK, setTreesK] = useState(800);

  // Stylised Singapore 2020 baseline ≈ 53 Mt CO2e (Power ~21 Mt, Industry ~25 Mt, Transport ~7 Mt)
  const baseline = 53.0;
  const powerMt = +(21 * (1 - (cleanPowerPct / 100) * 0.92)).toFixed(1);
  // Higher carbon tax drives industrial efficiency + CCS cuts
  const taxReductionFactor = Math.min(0.65, ((carbonTax - 5) / 75) * 0.58);
  const industryMt = +(25 * (1 - taxReductionFactor)).toFixed(1);
  const transportMt = +(7 * (1 - (evMrtPct / 100) * 0.85)).toFixed(1);
  const sinkMt = +((treesK / 1000) * 0.6).toFixed(2);
  const totalMt = Math.max(4.0, +(powerMt + industryMt + transportMt - sinkMt).toFixed(1));
  const cutPct = Math.round(((baseline - totalMt) / baseline) * 100);

  // Sample 50,000-tonne industrial plant tax bill (S$M)
  const plantTaxM = +((50000 * carbonTax) / 1000000).toFixed(2);

  const status =
    totalMt <= 22 ? "Net-Zero Track" : totalMt <= 36 ? "Green Plan 2030" : "Too Slow";
  const statusTone: "good" | "brand" | "bad" =
    totalMt <= 22 ? "good" : totalMt <= 36 ? "brand" : "bad";

  const barScale = 360 / 55;

  return (
    <WidgetFrame
      title="Singapore Green Plan 2030 Carbon Budget Lab"
      tryThis={[
        "Slide **Carbon Tax** from **S$25/t (2024)** to **S$45/t (2026–27)** and **S$80/t (2030 upper target)** to watch both industrial emissions drop and the 50k-tonne plant tax bill rise.",
        "Push **Solar + ASEAN Clean Imports** above 70% alongside **EV & 360 km MRT Shift** to steer Singapore below 22 Mt on its path to **Net Zero by 2050**.",
      ]}
      caption={
        <span>
          With <strong>{cleanPowerPct}% clean electricity</strong> (rooftop/Tengeh floating solar + ASEAN imports), a{" "}
          <strong>S${carbonTax}/t carbon tax</strong>, <strong>{evMrtPct}% EV/MRT shift</strong> and{" "}
          <strong>{treesK >= 1000 ? `${(treesK / 1000).toFixed(1)}M` : `${treesK}k`} trees</strong>, projected emissions fall by{" "}
          <strong>{cutPct}%</strong> from Singapore&apos;s ~53 Mt baseline — while a 50,000-tonne factory faces a{" "}
          <strong>S${plantTaxM}M/year</strong> incentive to decarbonise.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider
            label="Solar (≥2 GWp) + ASEAN Clean Power"
            value={cleanPowerPct}
            min={5}
            max={85}
            step={5}
            onChange={setCleanPowerPct}
            format={(v) => `${v}% clean`}
          />
          <Slider
            label="Singapore Carbon Tax Rate"
            value={carbonTax}
            min={5}
            max={80}
            step={5}
            onChange={setCarbonTax}
            format={(v) => `S$${v}/t CO₂`}
          />
          <Slider
            label="EV & 360 km MRT Transport Shift"
            value={evMrtPct}
            min={10}
            max={100}
            step={10}
            onChange={setEvMrtPct}
            format={(v) => `${v}%`}
          />
          <Stepper
            label="OneMillionTrees Planted"
            value={treesK}
            min={200}
            max={1200}
            step={100}
            onChange={setTreesK}
            format={(v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}M` : `${v}k`)}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 190"
            className="h-auto w-full"
            role="img"
            aria-label="Stacked horizontal emissions bar comparing Singapore 2020 baseline against projected Green Plan 2030 emissions by sector"
          >
            <rect width="560" height="190" rx="8" fill="var(--surface)" />
            <text x="16" y="20" fontSize="11" fontWeight="800" fill="var(--ink)">
              Singapore Emissions Breakdown (Mt CO₂e / year)
            </text>
            <text x="544" y="20" textAnchor="end" fontSize="9.5" fill="var(--ink-2)">
              Power · Industry · Transport
            </text>

            {/* 2020 Baseline bar */}
            <text x="16" y="54" fontSize="10.5" fontWeight="700" fill="var(--ink-2)">
              2020 Baseline
            </text>
            <rect x="128" y="38" width={Math.round(21 * barScale)} height="24" rx="4" fill="var(--brand-2)" opacity="0.6" />
            <rect x={128 + Math.round(21 * barScale)} y="38" width={Math.round(25 * barScale)} height="24" fill="var(--bad)" opacity="0.6" />
            <rect x={128 + Math.round(46 * barScale)} y="38" width={Math.round(7 * barScale)} height="24" rx="4" fill="var(--ink-2)" opacity="0.55" />
            <text x={136 + Math.round(53 * barScale)} y="54" fontSize="10.5" fontWeight="800" fill="var(--ink)">
              53.0 Mt
            </text>

            {/* Student scenario bar */}
            <text x="16" y="102" fontSize="10.5" fontWeight="800" fill="var(--brand)">
              Your Plan
            </text>
            <rect x="128" y="86" width={Math.max(4, Math.round(powerMt * barScale))} height="24" rx="4" fill="var(--brand-2)" />
            <rect
              x={128 + Math.max(4, Math.round(powerMt * barScale))}
              y="86"
              width={Math.max(4, Math.round(industryMt * barScale))}
              height="24"
              fill="var(--bad)"
            />
            <rect
              x={128 + Math.max(4, Math.round(powerMt * barScale)) + Math.max(4, Math.round(industryMt * barScale))}
              y="86"
              width={Math.max(3, Math.round(transportMt * barScale))}
              height="24"
              rx="4"
              fill="var(--brand)"
            />
            <text
              x={136 + Math.round((powerMt + industryMt + transportMt) * barScale)}
              y="102"
              fontSize="10.5"
              fontWeight="800"
              fill={statusTone === "bad" ? "var(--bad)" : "var(--good)"}
            >
              {totalMt} Mt (−{cutPct}%)
            </text>

            {/* Net-Zero 2050 directional marker */}
            <line x1={128 + Math.round(22 * barScale)} y1="32" x2={128 + Math.round(22 * barScale)} y2="128" stroke="var(--good)" strokeWidth="1.6" strokeDasharray="4 3" />
            <text x={128 + Math.round(22 * barScale)} y="142" textAnchor="middle" fontSize="9.2" fontWeight="800" fill="var(--good)">
              22 Mt Net-Zero Milestone
            </text>

            {/* Sector legend */}
            <rect x="16" y="158" width="12" height="12" rx="3" fill="var(--brand-2)" />
            <text x="34" y="168" fontSize="9.8" fill="var(--ink)">
              Power ({powerMt} Mt)
            </text>
            <rect x="148" y="158" width="12" height="12" rx="3" fill="var(--bad)" />
            <text x="166" y="168" fontSize="9.8" fill="var(--ink)">
              Industry ({industryMt} Mt)
            </text>
            <rect x="294" y="158" width="12" height="12" rx="3" fill="var(--brand)" />
            <text x="312" y="168" fontSize="9.8" fill="var(--ink)">
              Transport ({transportMt} Mt)
            </text>
            <text x="544" y="168" textAnchor="end" fontSize="9.5" fontWeight="700" fill="var(--good)">
              Tree sink: −{sinkMt} Mt
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="Projected CO₂e" value={`${totalMt} Mt`} tone={statusTone} />
          <Readout label="Cut vs 2020" value={`−${cutPct}%`} tone={cutPct >= 45 ? "good" : "brand"} />
          <Readout label="50k-t Plant Tax" value={`S$${plantTaxM}M/yr`} tone="ink" />
          <Readout label="Pathway Status" value={status} tone={statusTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "mitigation-adaptation-city-planner",
    title: "Mitigation vs Adaptation Coastal City Planner",
    blurb: "Test how clean energy, hybrid mangrove coastal defences, sponge parks and Paris 1.5 °C cooperation interact to protect a tropical city.",
    Component: MitigationAdaptationCityPlanner,
  },
  {
    id: "singapore-green-plan-budget-lab",
    title: "Singapore Green Plan 2030 Carbon Budget Lab",
    blurb: "Tune solar & ASEAN imports, Singapore’s rising carbon tax, EV/MRT transition and OneMillionTrees to steer toward Net Zero 2050.",
    Component: SingaporeGreenPlanLab,
  },
];
