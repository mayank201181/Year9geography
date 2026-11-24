"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

type ScenarioKey = "normal" | "drought" | "future2060";

const SCENARIO_PRESETS: Record<
  ScenarioKey,
  { label: string; demand: number; rainFactor: number; johorCap: number; newaterShare: number; desalShare: number }
> = {
  normal: { label: "Present Day (Normal)", demand: 440, rainFactor: 100, johorCap: 200, newaterShare: 40, desalShare: 25 },
  drought: { label: "El Niño Drought", demand: 450, rainFactor: 45, johorCap: 130, newaterShare: 45, desalShare: 30 },
  future2060: { label: "2060 Post-Treaty", demand: 880, rainFactor: 95, johorCap: 0, newaterShare: 55, desalShare: 30 },
};

function SingaporeFourTapsSimulator() {
  const [scenario, setScenario] = useState<ScenarioKey>("normal");
  const [demand, setDemand] = useState(440);
  const [rainFactor, setRainFactor] = useState(100);
  const [johorCap, setJohorCap] = useState(200);
  const [newaterPct, setNewaterPct] = useState(40);
  const [desalPct, setDesalPct] = useState(25);

  const applyPreset = (key: ScenarioKey) => {
    setScenario(key);
    const p = SCENARIO_PRESETS[key];
    setDemand(p.demand);
    setRainFactor(p.rainFactor);
    setJohorCap(p.johorCap);
    setNewaterPct(p.newaterShare);
    setDesalPct(p.desalShare);
  };

  // Max local catchment capacity scales with rain factor (baseline ~160 MGD)
  const localAvail = Math.round(160 * (rainFactor / 100));
  const newaterMgd = Math.round((demand * newaterPct) / 100);
  const desalMgd = Math.round((demand * desalPct) / 100);

  // Allocate weather-independent taps first, then local catchment, then Johor import
  const needAfterEngineered = Math.max(0, demand - newaterMgd - desalMgd);
  const localUsed = Math.min(localAvail, needAfterEngineered);
  const needAfterLocal = Math.max(0, needAfterEngineered - localUsed);
  const johorUsed = Math.min(johorCap, needAfterLocal);
  const totalSupplied = newaterMgd + desalMgd + localUsed + johorUsed;
  const shortfall = Math.max(0, demand - totalSupplied);

  const weatherIndependentPct = Math.min(100, Math.round(((newaterMgd + desalMgd) / Math.max(1, demand)) * 100));
  const selfSufficientPct = Math.min(100, Math.round(((newaterMgd + desalMgd + localUsed) / Math.max(1, demand)) * 100));

  // Relative energy index: Local 0.3, Johor 0.4, NEWater 1.0, Desalination 3.2 kWh-equivalent per unit
  const weightedEnergy =
    totalSupplied > 0
      ? ((localUsed * 0.3 + johorUsed * 0.4 + newaterMgd * 1.0 + desalMgd * 3.2) / totalSupplied).toFixed(2)
      : "0.00";

  const barW = 460;
  const maxScale = Math.max(demand, totalSupplied, 1);
  const wLocal = (localUsed / maxScale) * barW;
  const wJohor = (johorUsed / maxScale) * barW;
  const wNewater = (newaterMgd / maxScale) * barW;
  const wDesal = (desalMgd / maxScale) * barW;
  const wShort = (shortfall / maxScale) * barW;

  return (
    <WidgetFrame
      title="Singapore Four National Taps & Water Stress Simulator"
      tryThis={[
        "Switch to **El Niño Drought** — watch Local Catchment shrink and see why NEWater + Desalination prevent a shortfall.",
        "Switch to **2060 Post-Treaty** (Johor = 0 MGD) and test whether 55% NEWater + 30% Desalination covers 880 MGD.",
        "Raise Desalination vs NEWater and watch the **Energy Intensity** readout jump because seawater has far more salt!",
      ]}
      caption={
        shortfall > 0 ? (
          <span>
            <strong>Water deficit alert ({shortfall} MGD short)!</strong> Rainfall-dependent taps cannot close the gap at{" "}
            {demand} MGD. Boost NEWater/Desalination capacity or cut daily demand through WELS &amp; pricing.
          </span>
        ) : (
          <span>
            <strong>Supply secured ({totalSupplied} MGD met).</strong> {weatherIndependentPct}% comes from weather-independent
            engineered taps, and domestic self-sufficiency is {selfSufficientPct}% (relative energy intensity {weightedEnergy}×).
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Water scenario preset"
          value={scenario}
          onChange={applyPreset}
          options={[
            { value: "normal", label: "Present Day" },
            { value: "drought", label: "El Niño Drought" },
            { value: "future2060", label: "2060 Post-Treaty" },
          ]}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="min-w-0 space-y-3">
            <Slider label="Daily Demand (MGD)" value={demand} min={300} max={920} step={10} onChange={setDemand} format={(v) => `${v} MGD`} />
            <Slider label="Rainfall / Catchment Factor" value={rainFactor} min={25} max={120} step={5} onChange={setRainFactor} format={(v) => `${v}% (${Math.round(160 * (v / 100))} MGD)`} />
            <Slider label="Johor Import Available" value={johorCap} min={0} max={250} step={10} onChange={setJohorCap} format={(v) => `${v} MGD`} />
          </div>
          <div className="min-w-0 space-y-3">
            <Slider label="NEWater Share of Demand" value={newaterPct} min={10} max={65} step={5} onChange={setNewaterPct} format={(v) => `${v}% (${newaterMgd} MGD)`} />
            <Slider label="Desalination Share of Demand" value={desalPct} min={5} max={50} step={5} onChange={setDesalPct} format={(v) => `${v}% (${desalMgd} MGD)`} />
          </div>
        </div>

        <svg
          viewBox="0 0 540 135"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Stacked bar breakdown of Singapore water supply across the Four National Taps"
          className="h-auto w-full rounded-xl border border-line bg-surface-2"
        >
          <text x="40" y="24" fontSize="11.5" fontWeight="700" fill="var(--ink)">
            Daily Water Mix vs Demand ({demand} MGD)
          </text>
          <rect x="40" y="36" width={barW} height="34" rx="6" fill="var(--surface)" stroke="var(--line)" strokeWidth="1" />
          <rect x="40" y="36" width={wLocal} height="34" fill="#38bdf8" />
          <rect x={40 + wLocal} y="36" width={wJohor} height="34" fill="#818cf8" />
          <rect x={40 + wLocal + wJohor} y="36" width={wNewater} height="34" fill="var(--good)" />
          <rect x={40 + wLocal + wJohor + wNewater} y="36" width={wDesal} height="34" fill="var(--brand)" />
          {shortfall > 0 ? (
            <rect x={40 + wLocal + wJohor + wNewater + wDesal} y="36" width={wShort} height="34" fill="var(--bad)" />
          ) : null}

          <rect x="40" y="86" width="11" height="11" rx="2" fill="#38bdf8" />
          <text x="56" y="95" fontSize="10" fill="var(--ink)">Catchment ({localUsed})</text>
          <rect x="150" y="86" width="11" height="11" rx="2" fill="#818cf8" />
          <text x="166" y="95" fontSize="10" fill="var(--ink)">Johor ({johorUsed})</text>
          <rect x="242" y="86" width="11" height="11" rx="2" fill="var(--good)" />
          <text x="258" y="95" fontSize="10" fill="var(--ink)">NEWater ({newaterMgd})</text>
          <rect x="352" y="86" width="11" height="11" rx="2" fill="var(--brand)" />
          <text x="368" y="95" fontSize="10" fill="var(--ink)">Desal ({desalMgd})</text>
          {shortfall > 0 ? (
            <>
              <rect x="444" y="86" width="11" height="11" rx="2" fill="var(--bad)" />
              <text x="460" y="95" fontSize="10" fontWeight="700" fill="var(--bad)">Gap ({shortfall})</text>
            </>
          ) : null}
          <text x="40" y="120" fontSize="10" fill="var(--ink-2)">
            Note: 1962 Johor Water Agreement (max 250 MGD) expires in 2061 · Values in Million Gallons/Day (MGD)
          </text>
        </svg>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="Weather-Proof" value={`${weatherIndependentPct}%`} tone={weatherIndependentPct >= 65 ? "good" : "brand"} />
          <Readout label="Self-Sufficient" value={`${selfSufficientPct}%`} tone={selfSufficientPct >= 80 ? "good" : "ink"} />
          <Readout label="Energy Index" value={`${weightedEnergy}×`} tone={Number(weightedEnergy) > 1.5 ? "bad" : "ink"} />
          <Readout label="Shortfall" value={`${shortfall} MGD`} tone={shortfall > 0 ? "bad" : "good"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

interface FoodOption {
  id: string;
  name: string;
  origin: string;
  distanceKm: number;
  mode: "Local Truck" | "Ocean Ship" | "Air Freight";
  prodCo2: number;
  transCo2: number;
  waterL: number;
}

const FOOD_OPTIONS: FoodOption[] = [
  { id: "local-beef", name: "Local Beef", origin: "Regional Farm", distanceKm: 80, mode: "Local Truck", prodCo2: 59.5, transCo2: 0.5, waterL: 15400 },
  { id: "heated-tomato", name: "Winter Heated-Glasshouse Tomatoes", origin: "Local Glasshouse", distanceKm: 40, mode: "Local Truck", prodCo2: 5.4, transCo2: 0.1, waterL: 210 },
  { id: "spanish-tomato", name: "Shipped Field Tomatoes", origin: "Sunny Open Field", distanceKm: 1600, mode: "Ocean Ship", prodCo2: 0.8, transCo2: 0.4, waterL: 210 },
  { id: "air-asparagus", name: "Air-Freighted Asparagus", origin: "Overseas Air Cargo", distanceKm: 9000, mode: "Air Freight", prodCo2: 1.2, transCo2: 10.2, waterL: 2150 },
  { id: "ship-lentils", name: "Shipped Red Lentils", origin: "Overseas Container Ship", distanceKm: 8000, mode: "Ocean Ship", prodCo2: 0.9, transCo2: 0.3, waterL: 4000 },
  { id: "local-chicken", name: "Regional Chicken", origin: "Neighbouring Farm", distanceKm: 150, mode: "Local Truck", prodCo2: 5.7, transCo2: 0.3, waterL: 4300 },
];

function FoodMilesVsCarbonComparator() {
  const [foodAId, setFoodAId] = useState("local-beef");
  const [foodBId, setFoodBId] = useState("ship-lentils");
  const [massKg, setMassKg] = useState(2);

  const foodA = FOOD_OPTIONS.find((f) => f.id === foodAId) ?? FOOD_OPTIONS[0];
  const foodB = FOOD_OPTIONS.find((f) => f.id === foodBId) ?? FOOD_OPTIONS[4];

  const totalA = +(massKg * (foodA.prodCo2 + foodA.transCo2)).toFixed(1);
  const totalB = +(massKg * (foodB.prodCo2 + foodB.transCo2)).toFixed(1);
  const prodA = +(massKg * foodA.prodCo2).toFixed(1);
  const transA = +(massKg * foodA.transCo2).toFixed(1);
  const prodB = +(massKg * foodB.prodCo2).toFixed(1);
  const transB = +(massKg * foodB.transCo2).toFixed(1);

  const maxTotal = Math.max(totalA, totalB, 10);
  const scaleW = 310;
  const diffCo2 = +Math.abs(totalA - totalB).toFixed(1);
  const lowerFood = totalA <= totalB ? foodA : foodB;
  const higherFood = totalA <= totalB ? foodB : foodA;
  const milesParadox = lowerFood.distanceKm > higherFood.distanceKm;

  return (
    <WidgetFrame
      title="Food Miles vs Total Carbon Footprint Comparator"
      tryThis={[
        "Compare **Local Beef** (80 km) against **Shipped Red Lentils** (8,000 km) — notice how production methane dwarfs 8,000 km of sea freight!",
        "Compare **Winter Heated-Glasshouse Tomatoes** (40 km) against **Shipped Field Tomatoes** (1,600 km).",
        "Now select **Air-Freighted Asparagus** to spot the one transport mode where food miles truly spike emissions!",
      ]}
      caption={
        milesParadox ? (
          <span>
            <strong>Food-Miles Paradox Spotted!</strong> {lowerFood.name} travels{" "}
            {lowerFood.distanceKm.toLocaleString("en-US")} km yet emits{" "}
            <strong>{diffCo2} kg CO₂e less</strong> than {higherFood.name} ({higherFood.distanceKm.toLocaleString("en-US")} km)
            for {massKg} kg. What you eat and how it is farmed matter far more than sea/lorry distance!
          </span>
        ) : (
          <span>
            <strong>{lowerFood.name}</strong> has the lower footprint by <strong>{diffCo2} kg CO₂e</strong> for {massKg} kg.
            Watch out for <strong>Air Freight</strong> — flying perishables multiplies transport emissions ~50× over shipping!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wide text-ink-2">Food Choice A</label>
            <select
              value={foodAId}
              onChange={(e) => setFoodAId(e.target.value)}
              className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-semibold text-ink"
            >
              {FOOD_OPTIONS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} ({f.distanceKm.toLocaleString("en-US")} km · {f.mode})
                </option>
              ))}
            </select>
          </div>
          <div className="min-w-0 space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wide text-ink-2">Food Choice B</label>
            <select
              value={foodBId}
              onChange={(e) => setFoodBId(e.target.value)}
              className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-semibold text-ink"
            >
              {FOOD_OPTIONS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} ({f.distanceKm.toLocaleString("en-US")} km · {f.mode})
                </option>
              ))}
            </select>
          </div>
        </div>

        <Stepper label="Serving / Batch Mass (kg)" value={massKg} min={1} max={10} step={1} onChange={setMassKg} format={(v) => `${v} kg`} />

        <svg
          viewBox="0 0 540 165"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Comparison of production emissions versus transport emissions for two chosen foods"
          className="h-auto w-full rounded-xl border border-line bg-surface-2"
        >
          <rect x="150" y="14" width="12" height="10" rx="2" fill="var(--brand)" />
          <text x="167" y="23" fontSize="10.5" fill="var(--ink-2)">Farming, Methane &amp; Heating</text>
          <rect x="342" y="14" width="12" height="10" rx="2" fill="var(--bad)" />
          <text x="359" y="23" fontSize="10.5" fill="var(--ink-2)">Transport (Food Miles)</text>

          <text x="142" y="57" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--ink)">Choice A</text>
          <text x="142" y="72" textAnchor="end" fontSize="9.5" fill="var(--ink-2)">{foodA.distanceKm.toLocaleString("en-US")} km · {foodA.mode}</text>
          <rect x="150" y="42" width={Math.max(2, (prodA / maxTotal) * scaleW)} height="28" rx="3" fill="var(--brand)" />
          <rect
            x={150 + Math.max(2, (prodA / maxTotal) * scaleW)}
            y="42"
            width={Math.max(2, (transA / maxTotal) * scaleW)}
            height="28"
            rx="2"
            fill="var(--bad)"
          />
          <text x={158 + Math.max(4, ((prodA + transA) / maxTotal) * scaleW)} y="60" fontSize="11" fontWeight="700" fill="var(--ink)">
            {totalA} kg CO₂e
          </text>

          <text x="142" y="114" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--ink)">Choice B</text>
          <text x="142" y="129" textAnchor="end" fontSize="9.5" fill="var(--ink-2)">{foodB.distanceKm.toLocaleString("en-US")} km · {foodB.mode}</text>
          <rect x="150" y="99" width={Math.max(2, (prodB / maxTotal) * scaleW)} height="28" rx="3" fill="var(--brand)" />
          <rect
            x={150 + Math.max(2, (prodB / maxTotal) * scaleW)}
            y="99"
            width={Math.max(2, (transB / maxTotal) * scaleW)}
            height="28"
            rx="2"
            fill="var(--bad)"
          />
          <text x={158 + Math.max(4, ((prodB + transB) / maxTotal) * scaleW)} y="117" fontSize="11" fontWeight="700" fill="var(--ink)">
            {totalB} kg CO₂e
          </text>

          <text x="150" y="151" fontSize="9.8" fill="var(--ink-2)">
            A: {prodA} prod + {transA} transport · B: {prodB} prod + {transB} transport (kg CO₂e for {massKg} kg)
          </text>
        </svg>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="Choice A CO₂e" value={`${totalA} kg`} tone={totalA <= totalB ? "good" : "bad"} />
          <Readout label="Choice B CO₂e" value={`${totalB} kg`} tone={totalB <= totalA ? "good" : "bad"} />
          <Readout label="Choice A Water" value={`${(foodA.waterL * massKg).toLocaleString("en-US")} L`} tone="ink" />
          <Readout label="Choice B Water" value={`${(foodB.waterL * massKg).toLocaleString("en-US")} L`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "singapore-four-taps",
    title: "Singapore Four National Taps Simulator",
    blurb: "Test droughts, 2060 post-treaty demand and energy trade-offs across PUB's Four National Taps.",
    Component: SingaporeFourTapsSimulator,
  },
  {
    id: "food-miles-vs-carbon",
    title: "Food Miles vs Total Carbon Footprint",
    blurb: "Compare production emissions against transport mode to discover when food miles mislead.",
    Component: FoodMilesVsCarbonComparator,
  },
];
