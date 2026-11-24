"use client";
import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type MarginKey = "constructive" | "conservative" | "destructive" | "collision";

interface MarginInfo {
  label: string;
  alt: string;
  plates: string;
  example: string;
  crustChange: string;
  volcanoes: string;
  volcanoTone: "good" | "bad";
  earthquakes: string;
  landforms: string;
  defaultRate: number;
  summary: string;
}

const MARGINS: Record<MarginKey, MarginInfo> = {
  constructive: {
    label: "Constructive",
    alt: "Divergent (← →)",
    plates: "North American & Eurasian",
    example: "Mid-Atlantic Ridge / Iceland",
    crustChange: "New basaltic crust created",
    volcanoes: "YES — gentle shield (runny lava)",
    volcanoTone: "good",
    earthquakes: "Shallow, mild–moderate",
    landforms: "Mid-ocean ridge, rift valley, shield cones",
    defaultRate: 2.5,
    summary: "Plates pull apart, lowering mantle pressure so runny basaltic magma rises, erupts effusively, and cools into brand-new oceanic crust.",
  },
  conservative: {
    label: "Conservative",
    alt: "Transform (↑ ↓)",
    plates: "Pacific & North American",
    example: "San Andreas Fault, California",
    crustChange: "Neither created nor destroyed",
    volcanoes: "NO volcanoes (no melt/rift)",
    volcanoTone: "bad",
    earthquakes: "Shallow, very powerful",
    landforms: "Linear fault valleys & offset rivers",
    defaultRate: 4.5,
    summary: "Plates grind horizontally past each other; rough edges lock through friction until stored pressure snaps suddenly as powerful shallow earthquakes.",
  },
  destructive: {
    label: "Destructive",
    alt: "Subduction (→ ←)",
    plates: "Nazca (oceanic) & South American",
    example: "Peru–Chile Trench & Andes",
    crustChange: "Old oceanic crust subducts",
    volcanoes: "YES — explosive composite",
    volcanoTone: "good",
    earthquakes: "Shallow to deep megathrust",
    landforms: "Ocean trench, fold mountains, composite cones",
    defaultRate: 7.5,
    summary: "Denser oceanic basalt (~3.0 g/cm³) sinks beneath continental granite (~2.7 g/cm³); squeezed seawater triggers flux melting and sticky, violent composite eruptions.",
  },
  collision: {
    label: "Collision",
    alt: "Continental (→ ←)",
    plates: "Indian & Eurasian",
    example: "Himalayas & Tibetan Plateau",
    crustChange: "Both crusts crumple upward",
    volcanoes: "NO active volcanoes",
    volcanoTone: "bad",
    earthquakes: "Powerful shallow (Nepal 2015)",
    landforms: "Towering fold mountains (60–70 km crust)",
    defaultRate: 4.5,
    summary: "Two equally buoyant continental plates (~2.7 g/cm³) collide head-on; neither can subduct, so rock folds skyward with severe earthquakes and zero volcanism.",
  },
};

function PlateMarginsLab() {
  const [margin, setMargin] = useState<MarginKey>("destructive");
  const [rate, setRate] = useState(7.5);
  const [myr, setMyr] = useState(5);

  const info = MARGINS[margin];
  const shiftKm = Math.round(rate * myr * 10);
  const shiftPx = Math.min(34, Math.round((shiftKm / 1500) * 34));

  const handleMarginChange = (next: MarginKey) => {
    setMargin(next);
    setRate(MARGINS[next].defaultRate);
  };

  return (
    <WidgetFrame
      title="Interactive 4-Margin Plate Tectonics Lab"
      tryThis={[
        "Switch between **Destructive** and **Collision** to see why the Andes erupt violently while the Himalayas have zero active volcanoes.",
        "Slide elapsed time to **10 Myr** at **2.5 cm/yr** on **Constructive** — check the shortcut `1 cm/yr × 1 Myr = 10 km`!",
      ]}
      caption={
        <span>
          <strong>{info.label} ({info.alt}) — {info.example}:</strong> {info.summary}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select plate margin type"
            value={margin}
            onChange={handleMarginChange}
            options={[
              { value: "constructive", label: "Constructive" },
              { value: "conservative", label: "Conservative" },
              { value: "destructive", label: "Destructive" },
              { value: "collision", label: "Collision" },
            ]}
          />
          <span className="chip">{info.plates}</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label="Relative plate speed"
            value={rate}
            min={1}
            max={12}
            step={0.5}
            onChange={setRate}
            format={(v) => `${v.toFixed(1)} cm/yr`}
          />
          <Slider
            label="Geological time elapsed"
            value={myr}
            min={1}
            max={15}
            step={1}
            onChange={setMyr}
            format={(v) => `${v} Myr`}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 220"
            className="h-auto w-full"
            role="img"
            aria-label={`Interactive cross-section diagram of a ${info.label} plate margin`}
          >
            <rect x="0" y="0" width="560" height="220" rx="8" fill="var(--surface)" />
            <rect x="0" y="132" width="560" height="88" fill="var(--bad-soft)" />
            <text x="280" y="206" fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--bad)">
              Asthenosphere / Upper Mantle
            </text>

            {margin === "constructive" ? (
              <g>
                <rect x="0" y="34" width="560" height="58" fill="var(--info-soft)" />
                <polygon
                  points={`0,92 ${225 - shiftPx},92 ${255 - shiftPx},74 ${255 - shiftPx},132 0,132`}
                  fill="var(--surface-2)"
                  stroke="var(--ink-2)"
                  strokeWidth="1.5"
                />
                <polygon
                  points={`${305 + shiftPx},74 ${335 + shiftPx},92 560,92 560,132 ${305 + shiftPx},132`}
                  fill="var(--surface-2)"
                  stroke="var(--ink-2)"
                  strokeWidth="1.5"
                />
                <polygon
                  points={`${255 - shiftPx},132 ${266 - shiftPx / 2},76 280,62 ${294 + shiftPx / 2},76 ${305 + shiftPx},132`}
                  fill="var(--bad)"
                  opacity="0.9"
                />
                <line x1="175" y1="112" x2="105" y2="112" stroke="var(--brand)" strokeWidth="4" />
                <polygon points="94,112 108,105 108,119" fill="var(--brand)" />
                <line x1="385" y1="112" x2="455" y2="112" stroke="var(--brand)" strokeWidth="4" />
                <polygon points="466,112 452,105 452,119" fill="var(--brand)" />
                <text x="280" y="24" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--ink)">
                  New Basaltic Crust Formed: {shiftKm.toLocaleString("en-GB")} km wide
                </text>
                <text x="280" y="54" fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--bad)">
                  Shield Volcano / Mid-Ocean Ridge
                </text>
              </g>
            ) : null}

            {margin === "conservative" ? (
              <g>
                <rect x="0" y="0" width="560" height="220" rx="8" fill="var(--surface)" />
                <rect x="30" y="34" width="244" height="162" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.5" />
                <rect x="286" y="34" width="244" height="162" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" strokeWidth="1.5" />
                <path d="M 280 34 L 276 66 L 284 98 L 276 130 L 284 162 L 280 196" fill="none" stroke="var(--bad)" strokeWidth="3" />
                <line x1="150" y1={154 - shiftPx / 2} x2="150" y2={76 - shiftPx / 2} stroke="var(--brand)" strokeWidth="4" />
                <polygon points={`150,${64 - shiftPx / 2} 142,${80 - shiftPx / 2} 158,${80 - shiftPx / 2}`} fill="var(--brand)" />
                <line x1="410" y1={76 + shiftPx / 2} x2="410" y2={154 + shiftPx / 2} stroke="var(--ink)" strokeWidth="4" />
                <polygon points={`410,${166 + shiftPx / 2} 402,${150 + shiftPx / 2} 418,${150 + shiftPx / 2}`} fill="var(--ink)" />
                <circle cx="280" cy="115" r="14" fill="none" stroke="var(--bad)" strokeWidth="2.2" />
                <circle cx="280" cy="115" r="24" fill="none" stroke="var(--bad)" strokeWidth="1.4" strokeDasharray="4 3" />
                <text x="280" y="22" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--ink)">
                  Map View — Total Horizontal Offset: {shiftKm.toLocaleString("en-GB")} km
                </text>
                <text x="150" y="182" fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--ink)">Pacific Plate (NW)</text>
                <text x="410" y="56" fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--ink)">N. American Plate (SE)</text>
                <text x="280" y="212" fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--bad)">
                  Stick-Slip Friction → Shallow Powerful Quakes · ZERO Volcanoes
                </text>
              </g>
            ) : null}

            {margin === "destructive" ? (
              <g>
                <rect x="0" y="42" width="236" height="44" fill="var(--info-soft)" />
                <path
                  d={`M 0 86 L 200 86 L ${320 + shiftPx} ${188 + Math.min(18, shiftPx / 2)} L ${296 + shiftPx} ${198 + Math.min(18, shiftPx / 2)} L 186 106 L 0 106 Z`}
                  fill="var(--brand)"
                  opacity="0.9"
                />
                <path
                  d="M 218 88 L 320 74 L 358 34 L 396 74 L 560 74 L 560 132 L 266 132 Z"
                  fill="var(--surface-2)"
                  stroke="var(--ink-2)"
                  strokeWidth="1.5"
                />
                <polygon points="342,74 358,30 374,74" fill="var(--bad)" opacity="0.88" />
                <path d="M 358 150 C 354 118, 358 96, 358 74" fill="none" stroke="var(--bad)" strokeWidth="4" />
                <line x1="48" y1="96" x2="132" y2="96" stroke="var(--brand-ink)" strokeWidth="3.2" />
                <polygon points="144,96 130,90 130,102" fill="var(--brand-ink)" />
                <line x1="510" y1="104" x2="434" y2="104" stroke="var(--ink)" strokeWidth="3.2" />
                <polygon points="422,104 436,98 436,110" fill="var(--ink)" />
                <text x="210" y="64" fontSize="10.5" fontWeight="800" textAnchor="middle" fill="var(--info)">Ocean Trench</text>
                <text x="444" y="44" fontSize="10.5" fontWeight="800" textAnchor="middle" fill="var(--bad)">Explosive Composite Volcano</text>
                <text x="280" y="22" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--ink)">
                  Oceanic Slab Subducted: {shiftKm.toLocaleString("en-GB")} km recycled
                </text>
              </g>
            ) : null}

            {margin === "collision" ? (
              <g>
                <path
                  d={`M 0 84 L 184 84 L 244 ${58 - shiftPx * 0.5} L 280 ${32 - shiftPx * 0.6} L 318 ${56 - shiftPx * 0.5} L 376 84 L 560 84 L 560 132 L 350 ${160 + shiftPx * 0.35} L 210 ${160 + shiftPx * 0.35} L 0 132 Z`}
                  fill="var(--surface-2)"
                  stroke="var(--ink-2)"
                  strokeWidth="1.6"
                />
                <path d="M 280 34 L 270 162" stroke="var(--bad)" strokeWidth="2" strokeDasharray="5 4" />
                <line x1="52" y1="108" x2="144" y2="108" stroke="var(--brand)" strokeWidth="3.5" />
                <polygon points="156,108 142,101 142,115" fill="var(--brand)" />
                <line x1="508" y1="108" x2="416" y2="108" stroke="var(--brand)" strokeWidth="3.5" />
                <polygon points="404,108 418,101 418,115" fill="var(--brand)" />
                <text x="96" y="96" fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--ink)">Indian Plate</text>
                <text x="464" y="96" fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--ink)">Eurasian Plate</text>
                <text x="280" y="20" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--ink)">
                  Crustal Shortening: {shiftKm.toLocaleString("en-GB")} km → Fold Mountains (NO Volcanoes)
                </text>
              </g>
            ) : null}
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <Readout label="Total movement" value={`${shiftKm.toLocaleString("en-GB")} km`} tone="brand" />
          <Readout label="Volcanoes?" value={info.volcanoes} tone={info.volcanoTone} />
          <Readout label="Earthquakes" value={info.earthquakes} tone="ink" />
          <Readout label="Crust fate" value={info.crustChange} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

function HawaiianHotspotExplorer() {
  const [plateSpeed, setPlateSpeed] = useState(9);
  const [chainSpanMyr, setChainSpanMyr] = useState(5);

  const islands = [
    { name: "Big Island (Active)", age: 0, active: true },
    { name: "Maui", age: +(chainSpanMyr * 0.25).toFixed(1), active: false },
    { name: "Oʻahu", age: +(chainSpanMyr * 0.6).toFixed(1), active: false },
    { name: "Kauaʻi (Oldest)", age: chainSpanMyr, active: false },
  ];

  const oldestDistKm = Math.round(plateSpeed * chainSpanMyr * 10);
  const mapX = (distKm: number) => 475 - Math.min(410, (distKm / 950) * 410);

  return (
    <WidgetFrame
      title="Hawaiian Hotspot Conveyor-Belt Simulator"
      tryThis={[
        "Set speed to **10 cm/yr** and oldest island age to **5 Myr** — verify Kauaʻi sits **500 km** northwest of the active plume!",
        "Notice the mantle plume stays completely fixed while the Pacific Plate carries extinct volcanoes northwest.",
      ]}
      caption={
        <span>
          <strong>Intra-Plate Anomaly:</strong> Stationary magma burns through the moving Pacific Plate. Older islands lose their magma feed, go extinct, and erode as they drift{" "}
          <strong>{oldestDistKm.toLocaleString("en-GB")} km</strong> northwest in {chainSpanMyr} Myr.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label="Pacific Plate NW speed"
            value={plateSpeed}
            min={4}
            max={12}
            step={0.5}
            onChange={setPlateSpeed}
            format={(v) => `${v.toFixed(1)} cm/yr`}
          />
          <Slider
            label="Oldest island age (Kauaʻi)"
            value={chainSpanMyr}
            min={2}
            max={8}
            step={0.5}
            onChange={setChainSpanMyr}
            format={(v) => `${v.toFixed(1)} Myr`}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 210"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive diagram of a stationary Hawaiian mantle plume beneath the northwest-moving Pacific Plate"
          >
            <rect x="0" y="0" width="560" height="210" rx="8" fill="var(--surface)" />
            <rect x="0" y="136" width="560" height="74" fill="var(--bad-soft)" />
            <rect x="0" y="104" width="560" height="32" fill="var(--brand)" opacity="0.82" />
            <rect x="0" y="64" width="560" height="40" fill="var(--info-soft)" opacity="0.65" />

            {/* Stationary Plume */}
            <path d="M 465 210 L 456 144 L 468 104 L 482 104 L 494 144 L 485 210 Z" fill="var(--bad)" />
            <text x="475" y="196" fontSize="10" fontWeight="800" textAnchor="middle" fill="var(--surface)">
              Fixed Plume
            </text>

            {/* Plate motion arrow */}
            <line x1="420" y1="120" x2="110" y2="120" stroke="var(--brand-ink)" strokeWidth="3.5" />
            <polygon points="96,120 114,112 114,128" fill="var(--brand-ink)" />
            <text x="260" y="124" fontSize="10.5" fontWeight="800" textAnchor="middle" fill="var(--brand-ink)">
              Pacific Plate drifts NW ({plateSpeed.toFixed(1)} cm/yr)
            </text>

            {/* Volcanoes along conveyor belt */}
            {islands.map((isl) => {
              const dist = Math.round(plateSpeed * isl.age * 10);
              const cx = mapX(dist);
              const h = isl.active ? 54 : Math.max(20, 48 - isl.age * 4.5);
              const w = isl.active ? 34 : Math.max(16, 30 - isl.age * 1.8);
              return (
                <g key={isl.name}>
                  <polygon
                    points={`${cx - w},104 ${cx},${104 - h} ${cx + w},104`}
                    fill={isl.active ? "var(--bad)" : "var(--ink-2)"}
                    opacity={isl.active ? 0.95 : 0.6}
                  />
                  <text
                    x={cx}
                    y={104 - h - 14}
                    fontSize="10"
                    fontWeight="800"
                    textAnchor="middle"
                    fill={isl.active ? "var(--bad)" : "var(--ink)"}
                  >
                    {isl.name.split(" ")[0]}
                  </text>
                  <text x={cx} y={104 - h - 3} fontSize="9" textAnchor="middle" fill="var(--ink-2)">
                    {isl.age} Myr · {dist} km
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Oldest island distance" value={`${oldestDistKm} km NW`} tone="brand" />
          <Readout label="Active volcano" value="Big Island (0 Myr)" tone="bad" />
          <Readout label="TEA category" value="Intra-plate Anomaly" tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "plate-margins-lab",
    title: "4-Margin Plate Tectonics Cross-Section Lab",
    blurb: "Switch between Constructive, Conservative, Destructive, and Collision margins and adjust plate speeds over millions of years.",
    Component: PlateMarginsLab,
  },
  {
    id: "hawaiian-hotspot-explorer",
    title: "Hawaiian Hotspot Conveyor-Belt Simulator",
    blurb: "See why older Hawaiian islands go extinct and erode as the Pacific Plate slides northwest over a stationary mantle plume.",
    Component: HawaiianHotspotExplorer,
  },
];
