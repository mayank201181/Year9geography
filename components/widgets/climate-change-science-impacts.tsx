"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

function GreenhouseAlbedoSimulator() {
  const [co2, setCo2] = useState(420);
  const [icePct, setIcePct] = useState(55);
  const [volcano, setVolcano] = useState<"none" | "pinatubo">("none");

  const applyPreset = (p: "pre" | "today" | "high") => {
    if (p === "pre") {
      setCo2(280);
      setIcePct(82);
      setVolcano("none");
    } else if (p === "today") {
      setCo2(420);
      setIcePct(55);
      setVolcano("none");
    } else {
      setCo2(560);
      setIcePct(22);
      setVolcano("none");
    }
  };

  // Logarithmic climate sensitivity model (~3.0 °C per doubling of CO2) + ice-albedo feedback
  const baseForcing = 2.05 * Math.log2(co2 / 280);
  const albedoDelta = ((82 - icePct) / 100) * 0.75 * 1.1; // extra warming from ice loss
  const volcanicShift = volcano === "pinatubo" ? -0.5 : 0;
  const globalDelta = Math.max(-0.6, +(baseForcing + albedoDelta + volcanicShift).toFixed(2));
  const arcticDelta = +(globalDelta * 3.4).toFixed(1);

  // Weighted polar surface albedo (ice = 0.85, dark ocean = 0.08)
  const polarAlbedoPct = Math.round(icePct * 0.85 + (100 - icePct) * 0.08);
  const solarAbsorbedPct = 100 - polarAlbedoPct;

  const ghgOpacity = Math.min(0.45, 0.1 + ((co2 - 280) / 320) * 0.34);
  const ghgHeight = 26 + ((co2 - 280) / 320) * 28;
  const trappedCount = co2 < 330 ? 1 : co2 < 450 ? 2 : 3;
  const iceWidth = Math.round((icePct / 100) * 180);

  const riskLabel =
    globalDelta < 0.8 ? "Near Baseline" : globalDelta < 1.6 ? "Coral & Ice Stress" : "Severe Feedbacks";
  const riskTone: "good" | "brand" | "bad" =
    globalDelta < 0.8 ? "good" : globalDelta < 1.6 ? "brand" : "bad";

  const presetVal: "pre" | "today" | "high" | "custom" =
    co2 === 280 && icePct === 82 && volcano === "none"
      ? "pre"
      : co2 === 420 && icePct === 55 && volcano === "none"
        ? "today"
        : co2 === 560 && icePct === 22 && volcano === "none"
          ? "high"
          : "custom";

  return (
    <WidgetFrame
      title="Enhanced Greenhouse & Ice–Albedo Feedback Simulator"
      tryThis={[
        "Start at **Pre-Industrial (280 ppm)**, then slide CO₂ up to **420 ppm** (Today) and **560 ppm** (doubling) to watch outgoing infrared heat get trapped.",
        "Shrink **Arctic Sea-Ice Cover** from 80% down to 20%: notice how surface albedo drops and extra absorbed sunlight amplifies warming.",
        "Toggle a **Pinatubo-scale volcanic eruption** to see why stratospheric sulphate aerosols cause brief cooling rather than global warming.",
      ]}
      caption={
        <span>
          At <strong>{co2} ppm CO₂</strong> and <strong>{icePct}% Arctic sea ice</strong>, polar surfaces absorb{" "}
          <strong>{solarAbsorbedPct}%</strong> of incoming short-wave sunlight while the thicker greenhouse gas blanket traps more outgoing long-wave infrared heat.
          {volcano === "pinatubo"
            ? " A major explosive eruption reflects incoming sunlight via stratospheric sulphate aerosols, briefly cooling Earth by ~0.5 °C for 1–3 years before CO₂ warming resumes."
            : " Try lowering sea-ice cover to test how the ice–albedo positive feedback loop pushes Arctic warming 3–4× faster than the global average."}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Climate preset"
            value={presetVal}
            onChange={(v) => {
              if (v !== "custom") applyPreset(v);
            }}
            options={[
              { value: "pre", label: "1750 (280 ppm)" },
              { value: "today", label: "Today (420 ppm)" },
              { value: "high", label: "Doubled (560 ppm)" },
              { value: "custom", label: "Custom" },
            ]}
          />
          <Segmented
            label="Volcanic aerosol toggle"
            value={volcano}
            onChange={setVolcano}
            options={[
              { value: "none", label: "No Eruption" },
              { value: "pinatubo", label: "Pinatubo Eruption" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider
            label="Atmospheric CO₂ Concentration"
            value={co2}
            min={280}
            max={600}
            step={10}
            onChange={setCo2}
            format={(v) => `${v} ppm`}
          />
          <Slider
            label="Arctic Sea-Ice Cover (Albedo)"
            value={icePct}
            min={10}
            max={90}
            step={5}
            onChange={setIcePct}
            format={(v) => `${v}% ice`}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 220"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive diagram of short-wave solar radiation, greenhouse gas thickness, outgoing infrared trapping and Arctic surface albedo"
          >
            <rect width="560" height="220" rx="8" fill="var(--surface)" />
            {/* Space label */}
            <text x="16" y="18" fontSize="10.5" fontWeight="700" fill="var(--ink-2)">
              SPACE (Incoming Short-Wave Solar Radiation ↓)
            </text>

            {/* Optional Volcanic Sulphate Veil */}
            {volcano === "pinatubo" ? (
              <g>
                <rect
                  x="20"
                  y="28"
                  width="520"
                  height="16"
                  rx="8"
                  fill="var(--ink-2)"
                  opacity="0.22"
                  stroke="var(--ink-2)"
                  strokeDasharray="4 3"
                />
                <text x="280" y="39" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--ink)">
                  Stratospheric Sulphate Aerosol Veil (reflects sunlight → −0.5 °C short-term cooling)
                </text>
              </g>
            ) : null}

            {/* Greenhouse Gas Blanket */}
            <rect
              x="20"
              y={54}
              width="520"
              height={ghgHeight}
              rx="12"
              fill="var(--bad)"
              opacity={ghgOpacity}
              stroke="var(--bad)"
              strokeWidth="1.5"
            />
            <text
              x="280"
              y={54 + ghgHeight / 2 + 4}
              textAnchor="middle"
              fontSize="11"
              fontWeight="800"
              fill="var(--ink)"
            >
              Greenhouse Gas Blanket ({co2} ppm CO₂ — {co2 <= 300 ? "Natural Level" : "Human-Enhanced"})
            </text>

            {/* Incoming Short-Wave Solar Arrow */}
            <line x1="95" y1="24" x2="95" y2="162" stroke="var(--brand)" strokeWidth="3" />
            <polygon points="95,168 89,156 101,156" fill="var(--brand)" />
            <text x="30" y="128" fontSize="10" fontWeight="700" fill="var(--brand)">
              Short-wave
            </text>
            <text x="30" y="141" fontSize="9.5" fill="var(--ink-2)">
              passes in
            </text>

            {/* Reflected sunlight arrow off bright sea ice */}
            <line
              x1="125"
              y1="166"
              x2="165"
              y2="34"
              stroke="var(--brand-2)"
              strokeWidth={1 + (polarAlbedoPct / 100) * 2.5}
              strokeDasharray="5 3"
            />
            <polygon points="167,28 159,37 169,40" fill="var(--brand-2)" />
            <text x="155" y="128" fontSize="9.5" fontWeight="700" fill="var(--brand-2)">
              Reflected: {polarAlbedoPct}%
            </text>
            <text x="155" y="141" fontSize="9.5" fill="var(--ink-2)">
              (albedo)
            </text>

            {/* Escaping Long-Wave IR */}
            <line
              x1="285"
              y1="166"
              x2="285"
              y2="30"
              stroke="var(--good)"
              strokeWidth={Math.max(1.2, 3 - trappedCount * 0.6)}
              strokeDasharray="5 3"
            />
            <polygon points="285,24 280,34 290,34" fill="var(--good)" />
            <text x="294" y="128" fontSize="9.5" fontWeight="700" fill="var(--good)">
              Escaping IR
            </text>
            <text x="294" y="141" fontSize="9.5" fill="var(--ink-2)">
              to space
            </text>

            {/* Trapped / Re-emitted Long-Wave IR Loops */}
            {Array.from({ length: trappedCount }, (_, i) => {
              const x = 380 + i * 52;
              return (
                <g key={x}>
                  <path
                    d={`M ${x} 166 Q ${x} ${64 + ghgHeight} ${x + 18} ${56 + ghgHeight} Q ${x + 34} ${64 + ghgHeight} ${x + 30} 160`}
                    fill="none"
                    stroke="var(--bad)"
                    strokeWidth="2.5"
                  />
                  <polygon points={`${x + 30},166 ${x + 25},156 ${x + 35},156`} fill="var(--bad)" />
                </g>
              );
            })}
            <text x="455" y="138" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--bad)">
              Trapped Long-Wave IR
            </text>

            {/* Earth Surface: Split between Polar Ice/Ocean + Warm Land */}
            <rect x="20" y="168" width="180" height="36" rx="6" fill="var(--brand-2)" opacity="0.28" stroke="var(--brand-2)" />
            <rect x="20" y="168" width={iceWidth} height="36" rx="6" fill="var(--surface-2)" stroke="var(--ink-2)" strokeWidth="1.4" />
            <text x="110" y="190" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--ink)">
              Polar Surface ({icePct}% Ice / {100 - icePct}% Sea)
            </text>
            <rect x="210" y="168" width="330" height="36" rx="6" fill="var(--bad)" opacity={Math.min(0.35, 0.08 + Math.max(0, globalDelta) * 0.08)} stroke="var(--line)" />
            <text x="375" y="190" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--ink)">
              Earth Surface Anomaly: {globalDelta >= 0 ? `+${globalDelta}` : globalDelta} °C (Arctic: {arcticDelta >= 0 ? `+${arcticDelta}` : arcticDelta} °C)
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout
            label="Global ΔT"
            value={`${globalDelta >= 0 ? "+" : ""}${globalDelta} °C`}
            tone={globalDelta > 1.5 ? "bad" : globalDelta > 0.6 ? "brand" : "good"}
          />
          <Readout
            label="Arctic ΔT (3.4×)"
            value={`${arcticDelta >= 0 ? "+" : ""}${arcticDelta} °C`}
            tone={arcticDelta > 4.0 ? "bad" : "brand"}
          />
          <Readout label="Polar Albedo" value={`${polarAlbedoPct}%`} tone="ink" />
          <Readout label="System Status" value={riskLabel} tone={riskTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

type PlaceKey = "maldives" | "bangladesh" | "sahel" | "singapore";

interface PlaceProfile {
  name: string;
  group: string;
  co2Share: string;
  perCapita: number;
  exposureBase: number;
  adaptiveCap: number;
  headline: string;
  metricLabel: string;
  metricAt: (warming: number) => string;
  detail: string;
}

const PLACES: Record<PlaceKey, PlaceProfile> = {
  maldives: {
    name: "Maldives",
    group: "SIDS (Coral Atolls)",
    co2Share: "<0.01%",
    perCapita: 3.1,
    exposureBase: 94,
    adaptiveCap: 34,
    headline: "80% of land lies under 1 metre above sea level — existential coastal & coral reef threat.",
    metricLabel: "Saltwater & Coral Risk",
    metricAt: (w) => (w < 1.5 ? "High (bleaching)" : w < 2.2 ? "Severe (>70% reef loss)" : "Critical (>99% reefs)"),
    detail:
      "Saltwater intrusion contaminates fragile freshwater lenses beneath islands while coral bleaching weakens natural wave protection and hits reef tourism (>25% of GDP).",
  },
  bangladesh: {
    name: "Bangladesh",
    group: "LIC/NEE Low-Lying Delta",
    co2Share: "~0.3%",
    perCapita: 0.6,
    exposureBase: 88,
    adaptiveCap: 30,
    headline: "Flat Ganges–Brahmaputra delta with >170M people relying heavily on coastal rice farms.",
    metricLabel: "Projected Displaced",
    metricAt: (w) => `${Math.round(6 + (w - 1.0) * 10)}M+ residents`,
    detail:
      "A 1 m rise threatens 10–15% of national land; cyclone storm surges push saltwater inland, salinising fertile rice paddies and driving rural-to-urban climate migration.",
  },
  sahel: {
    name: "The Sahel",
    group: "LIC Semi-Arid Dryland",
    co2Share: "~0.2%",
    perCapita: 0.4,
    exposureBase: 84,
    adaptiveCap: 22,
    headline: "Semi-arid belt south of the Sahara facing intense heatwaves, erratic rains and desertification.",
    metricLabel: "Crop Yield Stress",
    metricAt: (w) => `−${Math.round(8 + (w - 1.0) * 14)}% rain-fed yield`,
    detail:
      "Subsistence farmers and pastoralists face failed harvests, livestock losses, local water competition and growing cross-border and internal climate displacement.",
  },
  singapore: {
    name: "Singapore",
    group: "HIC Coastal City-State",
    co2Share: "~0.1%",
    perCapita: 8.6,
    exposureBase: 72,
    adaptiveCap: 88,
    headline: "~30% of land sits below 5 m elevation & >90% of food is imported — high exposure, high adaptive wealth.",
    metricLabel: "Coastal & Heat Exposure",
    metricAt: (w) => `+${(w * 1.4).toFixed(1)} °C local heat`,
    detail:
      "Singapore combines global warming with an Urban Heat Island effect (raising dengue & heat risk), yet S$100B+ coastal defence plans, barrages and diversified food trade reduce mortality dramatically.",
  },
};

function UnequalClimateRiskExplorer() {
  const [selected, setSelected] = useState<PlaceKey>("maldives");
  const [warming, setWarming] = useState(1.5);

  const profile = PLACES[selected];
  const keys: PlaceKey[] = ["maldives", "bangladesh", "sahel", "singapore"];

  const calcVulnerability = (p: PlaceProfile) => {
    const hazardScale = 0.68 + ((warming - 1.2) / 1.8) * 0.32;
    const raw = (p.exposureBase * hazardScale * (120 - p.adaptiveCap)) / 88;
    return Math.min(99, Math.max(15, Math.round(raw)));
  };

  const selectedVuln = calcVulnerability(profile);

  return (
    <WidgetFrame
      title="Unequal Climate Risk World Explorer"
      tryThis={[
        "Switch between **Maldives**, **Bangladesh**, **The Sahel** and **Singapore** to compare per-capita emissions against net vulnerability.",
        "Slide **Global Warming** from **+1.2 °C (Today)** to **+3.0 °C** and watch why low-adaptive-capacity regions hit critical vulnerability far sooner than wealthy cities.",
      ]}
      caption={
        <span>
          <strong>{profile.name}</strong> ({profile.group}): {profile.headline} {profile.detail}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented
            label="Select case study location"
            value={selected}
            onChange={setSelected}
            options={[
              { value: "maldives", label: "Maldives" },
              { value: "bangladesh", label: "Bangladesh" },
              { value: "sahel", label: "The Sahel" },
              { value: "singapore", label: "Singapore" },
            ]}
          />
        </div>

        <Slider
          label="Global Average Warming Above Pre-Industrial"
          value={warming}
          min={1.2}
          max={3.0}
          step={0.2}
          onChange={setWarming}
          format={(v) => `+${v.toFixed(1)} °C`}
        />

        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 215"
            className="h-auto w-full"
            role="img"
            aria-label="Bar chart comparing physical exposure, adaptive capacity and net climate vulnerability across four case study regions"
          >
            <rect width="560" height="215" rx="8" fill="var(--surface)" />
            <text x="16" y="20" fontSize="11" fontWeight="800" fill="var(--ink)">
              Vulnerability Comparison at +{warming.toFixed(1)} °C Warming (Higher Bar = Greater Human Risk)
            </text>
            <text x="544" y="20" textAnchor="end" fontSize="9.5" fill="var(--ink-2)">
              Teal = Adaptive Capacity · Orange = Net Vulnerability
            </text>

            {keys.map((k, idx) => {
              const p = PLACES[k];
              const y = 38 + idx * 42;
              const v = calcVulnerability(p);
              const isSel = k === selected;
              return (
                <g key={k}>
                  <rect
                    x="10"
                    y={y - 4}
                    width="540"
                    height="36"
                    rx="6"
                    fill={isSel ? "var(--surface-2)" : "transparent"}
                    stroke={isSel ? "var(--brand)" : "transparent"}
                    strokeWidth="1.2"
                  />
                  <text
                    x="20"
                    y={y + 12}
                    fontSize="11"
                    fontWeight={isSel ? "800" : "700"}
                    fill={isSel ? "var(--brand)" : "var(--ink)"}
                  >
                    {p.name}
                  </text>
                  <text x="20" y={y + 25} fontSize="9" fill="var(--ink-2)">
                    {p.perCapita} t CO₂/person
                  </text>

                  {/* Adaptive capacity bar */}
                  <rect x="135" y={y + 2} width="330" height="10" rx="5" fill="var(--line)" />
                  <rect
                    x="135"
                    y={y + 2}
                    width={Math.round((p.adaptiveCap / 100) * 330)}
                    height="10"
                    rx="5"
                    fill="var(--brand)"
                  />
                  <text x="472" y={y + 10} fontSize="9" fontWeight="700" fill="var(--brand)">
                    Cap {p.adaptiveCap}%
                  </text>

                  {/* Net vulnerability bar */}
                  <rect x="135" y={y + 16} width="330" height="11" rx="5" fill="var(--line)" />
                  <rect
                    x="135"
                    y={y + 16}
                    width={Math.round((v / 100) * 330)}
                    height="11"
                    rx="5"
                    fill={v >= 70 ? "var(--bad)" : "var(--brand-2)"}
                  />
                  <text
                    x="472"
                    y={y + 25}
                    fontSize="9.5"
                    fontWeight="800"
                    fill={v >= 70 ? "var(--bad)" : "var(--ink)"}
                  >
                    Risk {v}/100
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="Global CO₂ Share" value={profile.co2Share} tone="ink" />
          <Readout label="Per-Capita CO₂" value={`${profile.perCapita} t/yr`} tone="brand" />
          <Readout
            label={profile.metricLabel}
            value={profile.metricAt(warming)}
            tone={selectedVuln >= 70 ? "bad" : "brand"}
          />
          <Readout
            label="Net Vulnerability"
            value={`${selectedVuln}/100`}
            tone={selectedVuln >= 70 ? "bad" : "good"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "greenhouse-albedo-sim",
    title: "Enhanced Greenhouse & Ice–Albedo Feedback Simulator",
    blurb: "Adjust atmospheric CO₂, Arctic sea-ice cover and volcanic aerosols to watch short-wave vs long-wave energy and positive feedback loops in real time.",
    Component: GreenhouseAlbedoSimulator,
  },
  {
    id: "unequal-climate-risk-explorer",
    title: "Unequal Climate Risk World Explorer",
    blurb: "Compare exposure, adaptive capacity and climate injustice across the Maldives, Bangladesh, the Sahel and Singapore as global temperatures rise.",
    Component: UnequalClimateRiskExplorer,
  },
];
