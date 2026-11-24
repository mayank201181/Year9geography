"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

type FibreId = "conv-cotton" | "org-cotton" | "rpet" | "virgin-poly";

interface FibreProfile {
  label: string;
  origin: string;
  stitchHub: string;
  waterPerShirt: number;
  co2PerShirt: number;
  microfibresPerWashK: number;
  pricePerShirt: number;
  tradeOff: string;
}

const FIBRE_PROFILES: Record<FibreId, FibreProfile> = {
  "conv-cotton": {
    label: "Conventional Cotton",
    origin: "Irrigated Cotton (India / Central Asia)",
    stitchHub: "Dhaka, Bangladesh",
    waterPerShirt: 2700,
    co2PerShirt: 7.0,
    microfibresPerWashK: 0,
    pricePerShirt: 16,
    tradeOff: "Zero plastic microfibres, but huge freshwater extraction (~2,700 L/shirt) and synthetic pesticide runoff.",
  },
  "org-cotton": {
    label: "Rain-Fed Organic Cotton",
    origin: "Rain-Fed Farms (India / Tanzania)",
    stitchHub: "Certified Ethical Mill",
    waterPerShirt: 750,
    co2PerShirt: 4.2,
    microfibresPerWashK: 0,
    pricePerShirt: 34,
    tradeOff: "Eliminates synthetic pesticides and cuts irrigation water sharply, though upfront tag price is higher.",
  },
  rpet: {
    label: "Recycled Polyester (rPET)",
    origin: "Recycled Bottles (East Asia)",
    stitchHub: "Ho Chi Minh City, Vietnam",
    waterPerShirt: 180,
    co2PerShirt: 4.5,
    microfibresPerWashK: 220,
    pricePerShirt: 24,
    tradeOff: "Very low agricultural water and diverts plastic bottles, yet still sheds synthetic microfibres every wash.",
  },
  "virgin-poly": {
    label: "Virgin Polyester",
    origin: "Crude Oil Refinery (Petrochemical)",
    stitchHub: "Fast-Fashion Hub",
    waterPerShirt: 240,
    co2PerShirt: 9.5,
    microfibresPerWashK: 250,
    pricePerShirt: 12,
    tradeOff: "Cheap and low-irrigation, but oil-based (high fossil CO₂), sheds microfibres and takes 200+ years to break down.",
  },
};

function TShirtSupplyChainTracer() {
  const [fibre, setFibre] = useState<FibreId>("conv-cotton");
  const [shirtsPerYear, setShirtsPerYear] = useState(8);
  const [wearsPerShirt, setWearsPerShirt] = useState(12);
  const [useFilter, setUseFilter] = useState<"no" | "yes">("no");

  const profile = FIBRE_PROFILES[fibre];
  const totalWater = shirtsPerYear * profile.waterPerShirt;
  const totalCo2 = +(shirtsPerYear * profile.co2PerShirt).toFixed(1);
  const washesPerShirt = Math.max(1, Math.round(wearsPerShirt / 2));
  const filterMult = useFilter === "yes" ? 0.2 : 1;
  const totalMicroK = Math.round(shirtsPerYear * washesPerShirt * profile.microfibresPerWashK * filterMult);
  const waterPerWear = Math.round(profile.waterPerShirt / Math.max(1, wearsPerShirt));
  const costPerWear = (profile.pricePerShirt / Math.max(1, wearsPerShirt)).toFixed(2);
  const drinkingYears = (totalWater / (3 * 365)).toFixed(1);

  return (
    <WidgetFrame
      title="T-Shirt Global Supply Chain & Virtual Water Tracer"
      tryThis={[
        "Start on **Conventional Cotton** at 8 shirts/year (12 wears each), then double **Wears per Shirt** to 24 — watch **Water per Wear** halve!",
        "Switch from **Conventional Cotton** to **Virgin Polyester** to spot the classic water-vs-plastic microfibre trade-off.",
        "Toggle **Microfibre Wash Filter** ON to see how catching 80% of plastic fibres cuts marine pollution.",
      ]}
      caption={
        <span>
          <strong>Trade-off summary ({profile.label}):</strong> {profile.tradeOff} At {shirtsPerYear} shirts/year worn{" "}
          {wearsPerShirt} times each, your virtual water equals <strong>{drinkingYears} years</strong> of drinking water
          (3 L/day) and costs <strong>${costPerWear} per wear</strong>.
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Garment fibre choice"
          value={fibre}
          onChange={setFibre}
          options={[
            { value: "conv-cotton", label: "Conv. Cotton" },
            { value: "org-cotton", label: "Organic Cotton" },
            { value: "rpet", label: "Recycled rPET" },
            { value: "virgin-poly", label: "Virgin Polyester" },
          ]}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="min-w-0 space-y-3">
            <Stepper label="New Shirts Bought / Year" value={shirtsPerYear} min={1} max={20} onChange={setShirtsPerYear} />
            <Slider label="Wears per Shirt" value={wearsPerShirt} min={4} max={80} step={2} onChange={setWearsPerShirt} format={(v) => `${v} wears`} />
          </div>
          <div className="min-w-0 space-y-2">
            <div className="text-sm font-semibold text-ink-2">Washing-Machine Microfibre Filter (traps 80%)</div>
            <Segmented
              label="Microfibre filter"
              value={useFilter}
              onChange={setUseFilter}
              options={[
                { value: "no", label: "No Filter" },
                { value: "yes", label: "Filter Installed" },
              ]}
            />
          </div>
        </div>

        <svg
          viewBox="0 0 540 132"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Global T-shirt supply chain flow from raw material to factory, container ship, and consumer wardrobe"
          className="h-auto w-full rounded-xl border border-line bg-surface-2"
        >
          <rect x="14" y="24" width="118" height="72" rx="8" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.4" />
          <text x="73" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--brand)">1. Raw Fibre</text>
          <text x="73" y="58" textAnchor="middle" fontSize="9.2" fill="var(--ink)">{profile.label}</text>
          <text x="73" y="74" textAnchor="middle" fontSize="9" fill="var(--ink-2)">{profile.waterPerShirt.toLocaleString("en-US")} L/shirt</text>
          <text x="73" y="88" textAnchor="middle" fontSize="8.8" fill="var(--ink-2)">{profile.co2PerShirt} kg CO₂e</text>

          <line x1="132" y1="60" x2="146" y2="60" stroke="var(--ink-2)" strokeWidth="1.6" />
          <polygon points="146,56 153,60 146,64" fill="var(--ink-2)" />

          <rect x="155" y="24" width="116" height="72" rx="8" fill="var(--surface)" stroke="var(--bad)" strokeWidth="1.4" />
          <text x="213" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--bad)">2. Dye &amp; Stitch</text>
          <text x="213" y="58" textAnchor="middle" fontSize="9.2" fill="var(--ink)">{profile.stitchHub}</text>
          <text x="213" y="74" textAnchor="middle" fontSize="9" fill="var(--ink-2)">Worker ~2% wage</text>
          <text x="213" y="88" textAnchor="middle" fontSize="8.8" fill="var(--ink-2)">(${(profile.pricePerShirt * 0.02).toFixed(2)}/shirt)</text>

          <line x1="271" y1="60" x2="285" y2="60" stroke="var(--ink-2)" strokeWidth="1.6" />
          <polygon points="285,56 292,60 285,64" fill="var(--ink-2)" />

          <rect x="294" y="24" width="104" height="72" rx="8" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.4" />
          <text x="346" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--brand)">3. Sea Freight</text>
          <text x="346" y="58" textAnchor="middle" fontSize="9.2" fill="var(--ink)">TEU Containers</text>
          <text x="346" y="74" textAnchor="middle" fontSize="9" fill="var(--ink-2)">Port of Singapore</text>
          <text x="346" y="88" textAnchor="middle" fontSize="8.8" fill="var(--ink-2)">~10¢ freight</text>

          <line x1="398" y1="60" x2="412" y2="60" stroke="var(--ink-2)" strokeWidth="1.6" />
          <polygon points="412,56 419,60 412,64" fill="var(--ink-2)" />

          <rect x="421" y="24" width="105" height="72" rx="8" fill="var(--surface)" stroke="var(--good)" strokeWidth="1.5" />
          <text x="473" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--good)">4. Wardrobe</text>
          <text x="473" y="58" textAnchor="middle" fontSize="9.2" fill="var(--ink)">{wearsPerShirt} wears/shirt</text>
          <text x="473" y="74" textAnchor="middle" fontSize="9" fill="var(--ink-2)">${costPerWear}/wear</text>
          <text x="473" y="88" textAnchor="middle" fontSize="8.8" fill="var(--ink-2)">{waterPerWear} L/wear</text>

          <text x="270" y="117" textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">
            Origin: {profile.origin} · Annual total across {shirtsPerYear} {shirtsPerYear === 1 ? "shirt" : "shirts"}
          </text>
        </svg>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="Virtual Water" value={`${totalWater.toLocaleString("en-US")} L`} tone={totalWater > 12000 ? "bad" : "good"} />
          <Readout label="Total Carbon" value={`${totalCo2} kg`} tone={totalCo2 > 50 ? "bad" : "brand"} />
          <Readout label="Microfibres Out" value={totalMicroK === 0 ? "0" : `${(totalMicroK / 1000).toFixed(1)}M`} tone={totalMicroK > 5000 ? "bad" : "good"} />
          <Readout label="Cost / Wear" value={`$${costPerWear}`} tone={Number(costPerWear) <= 1 ? "good" : "ink"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

type DatasetId = "fashion" | "aral" | "singapore-water";

interface GeoDataset {
  label: string;
  unit: string;
  points: { year: number; value: number; note?: string }[];
  anomalyIndex: number;
  trendText: string;
  anomalyText: string;
}

const GEO_DATASETS: Record<DatasetId, GeoDataset> = {
  fashion: {
    label: "Global Clothing Output",
    unit: "bn items",
    points: [
      { year: 2000, value: 50 },
      { year: 2004, value: 64 },
      { year: 2008, value: 78 },
      { year: 2012, value: 92 },
      { year: 2016, value: 105 },
      { year: 2020, value: 84, note: "COVID dip" },
      { year: 2024, value: 125 },
    ],
    anomalyIndex: 5,
    trendText: "Strong overall upward trend from 2000 to 2024 driven by 52-micro-season fast fashion.",
    anomalyText: "2020 (84 bn items) dips sharply below the rising trend during COVID-19 retail lockdowns.",
  },
  aral: {
    label: "Aral Sea Surface Area",
    unit: "k km²",
    points: [
      { year: 1960, value: 68 },
      { year: 1970, value: 60 },
      { year: 1980, value: 51 },
      { year: 1990, value: 36 },
      { year: 2000, value: 23 },
      { year: 2006, value: 25, note: "Kok-Aral Dam rebound" },
      { year: 2020, value: 10 },
    ],
    anomalyIndex: 5,
    trendText: "Steep long-term decline from 1960 to 2020 caused by cotton river diversions (Amu Darya & Syr Darya).",
    anomalyText: "2006 (25k km²) shows a brief local anomaly uptick after Kazakhstan completed the Kok-Aral Dam.",
  },
  "singapore-water": {
    label: "SG Domestic Water Use",
    unit: "L/person/day",
    points: [
      { year: 2003, value: 165 },
      { year: 2007, value: 157 },
      { year: 2011, value: 153 },
      { year: 2015, value: 151 },
      { year: 2019, value: 141 },
      { year: 2020, value: 154, note: "Stay-home spike" },
      { year: 2024, value: 141 },
    ],
    anomalyIndex: 5,
    trendText: "Steady downward trend from 2003 to 2024 supported by WELS ticks, water tariffs and public campaigns.",
    anomalyText: "2020 (154 L/person/day) jumps abruptly upward as residents worked and studied from home during Circuit Breaker.",
  },
};

function GeoSkillsTeaLab() {
  const [datasetId, setDatasetId] = useState<DatasetId>("fashion");
  const [idxA, setIdxA] = useState(0);
  const [idxB, setIdxB] = useState(6);

  const ds = GEO_DATASETS[datasetId];
  const pts = ds.points;
  const ptA = pts[idxA];
  const ptB = pts[idxB];

  const oldPt = idxA <= idxB ? ptA : ptB;
  const newPt = idxA <= idxB ? ptB : ptA;
  const rawDiff = +(newPt.value - oldPt.value).toFixed(1);
  const pctChange = oldPt.value !== 0 ? +(((newPt.value - oldPt.value) / oldPt.value) * 100).toFixed(1) : 0;

  const vals = pts.map((p) => p.value);
  const meanVal = +(vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
  const rangeVal = +(Math.max(...vals) - Math.min(...vals)).toFixed(1);

  const maxV = Math.max(...vals) * 1.15;
  const xFor = (i: number) => 62 + (i / (pts.length - 1)) * 432;
  const yFor = (v: number) => 162 - (v / maxV) * 124;

  const polyPoints = pts.map((p, i) => `${xFor(i).toFixed(1)},${yFor(p.value).toFixed(1)}`).join(" ");

  return (
    <WidgetFrame
      title="TEA Graph & Percentage Change Geo-Skills Lab"
      tryThis={[
        "Move **Point A** and **Point B** to check why doubling from 50 to 100+ gives a **+100% or higher** change (dividing by Old, never New!).",
        "Switch datasets to **Aral Sea Area** and **SG Domestic Water** — spot how each real dataset has a clear **Anomaly** point.",
        "Compare **Mean** and **Range** across the three Year 9 Geography datasets.",
      ]}
      caption={
        <div className="space-y-1">
          <div>
            <strong>T (Trend):</strong> {ds.trendText}
          </div>
          <div>
            <strong>E (Evidence {oldPt.year} → {newPt.year}):</strong> Changed from {oldPt.value} to {newPt.value} {ds.unit} (
            {rawDiff >= 0 ? "+" : ""}
            {rawDiff} {ds.unit}, or <strong>{pctChange >= 0 ? "+" : ""}{pctChange}%</strong> using ((New − Old) ÷ Old) × 100).
          </div>
          <div>
            <strong>A (Anomaly):</strong> {ds.anomalyText}
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Select Year 9 Geography dataset"
          value={datasetId}
          onChange={(v) => {
            setDatasetId(v);
            setIdxA(0);
            setIdxB(6);
          }}
          options={[
            { value: "fashion", label: "Clothing Output" },
            { value: "aral", label: "Aral Sea Area" },
            { value: "singapore-water", label: "SG Water Use" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Stepper
            label="Compare Point A (Start)"
            value={idxA}
            min={0}
            max={pts.length - 1}
            onChange={setIdxA}
            format={(i) => `${pts[i].year}`}
          />
          <Stepper
            label="Compare Point B (End)"
            value={idxB}
            min={0}
            max={pts.length - 1}
            onChange={setIdxB}
            format={(i) => `${pts[i].year}`}
          />
        </div>

        <svg
          viewBox="0 0 540 202"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`Interactive TEA line graph for ${ds.label}`}
          className="h-auto w-full rounded-xl border border-line bg-surface-2"
        >
          <text x="270" y="21" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">
            {ds.label} ({ds.unit}) — Red Ring = Anomaly · Green Rings = Selected Comparison
          </text>
          <line x1="54" y1="34" x2="54" y2="162" stroke="var(--ink-2)" strokeWidth="1.4" />
          <line x1="54" y1="162" x2="510" y2="162" stroke="var(--ink-2)" strokeWidth="1.4" />

          {[0, 0.5, 1].map((frac) => {
            const val = Math.round(maxV * frac);
            const y = yFor(val);
            return (
              <g key={frac}>
                <line x1="54" y1={y} x2="510" y2={y} stroke="var(--line)" strokeDasharray="3 3" />
                <text x="48" y={y + 3} textAnchor="end" fontSize="9" fill="var(--ink-2)">{val}</text>
              </g>
            );
          })}

          <polyline points={polyPoints} fill="none" stroke="var(--brand)" strokeWidth="2.4" />

          {pts.map((p, i) => {
            const cx = xFor(i);
            const cy = yFor(p.value);
            const isAnom = i === ds.anomalyIndex;
            const isSel = i === idxA || i === idxB;
            return (
              <g key={p.year}>
                {isSel ? <circle cx={cx} cy={cy} r="9" fill="none" stroke="var(--good)" strokeWidth="2.2" /> : null}
                <circle cx={cx} cy={cy} r={isAnom ? 5.5 : 4.2} fill={isAnom ? "var(--bad)" : "var(--brand)"} />
                <text x={cx} y={cy - 10} textAnchor="middle" fontSize="9.2" fontWeight="700" fill={isAnom ? "var(--bad)" : "var(--ink)"}>
                  {p.value}
                </text>
                <text x={cx} y="179" textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">{p.year}</text>
              </g>
            );
          })}
          <text x="270" y="195" textAnchor="middle" fontSize="9.2" fill="var(--ink-2)">
            Formula: Percentage Change = ((New − Old) ÷ Old) × 100
          </text>
        </svg>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="% Change" value={`${pctChange >= 0 ? "+" : ""}${pctChange}%`} tone={pctChange === 0 ? "ink" : "brand"} />
          <Readout label="Absolute Diff" value={`${rawDiff >= 0 ? "+" : ""}${rawDiff}`} tone="ink" />
          <Readout label="Dataset Mean" value={`${meanVal}`} tone="good" />
          <Readout label="Dataset Range" value={`${rangeVal}`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "tshirt-supply-chain",
    title: "T-Shirt Supply Chain & Virtual Water Tracer",
    blurb: "Compare fibres, wear lifespans and microfibre filters across the global garment supply chain.",
    Component: TShirtSupplyChainTracer,
  },
  {
    id: "geo-skills-tea-lab",
    title: "TEA Graph & Percentage Change Lab",
    blurb: "Explore Trend, Evidence, Anomalies, % Change, Mean and Range on real Year 9 Geography datasets.",
    Component: GeoSkillsTeaLab,
  },
];
