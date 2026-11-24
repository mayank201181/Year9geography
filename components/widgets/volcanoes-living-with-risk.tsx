"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type VolcanoPreset = "mauna-loa" | "merapi" | "pinatubo" | "custom";

function MagmaViscosityBuilder() {
  const [preset, setPreset] = useState<VolcanoPreset>("mauna-loa");
  const [silica, setSilica] = useState(50);
  const [gas, setGas] = useState(3);

  const applyPreset = (p: VolcanoPreset) => {
    setPreset(p);
    if (p === "mauna-loa") {
      setSilica(50);
      setGas(3);
    } else if (p === "merapi") {
      setSilica(63);
      setGas(8);
    } else if (p === "pinatubo") {
      setSilica(70);
      setGas(10);
    }
  };

  const handleSilica = (v: number) => {
    setSilica(v);
    setPreset("custom");
  };

  const handleGas = (v: number) => {
    setGas(v);
    setPreset("custom");
  };

  const t = (silica - 48) / (72 - 48); // 0 → 1
  const slopeDeg = Math.round(3 + t * 32);
  const volcanoType =
    silica <= 55
      ? "Shield Volcano"
      : silica <= 60
        ? "Transitional Cone"
        : "Composite (Stratovolcano)";
  const viscosityLabel =
    silica <= 55 ? "Low (Runny Basalt)" : silica <= 61 ? "Medium (Andesitic)" : "High (Sticky Acidic)";

  const explosivityScore = Math.round(t * 6 + (gas / 10) * 4);
  const eruptionStyle =
    explosivityScore <= 4
      ? "Effusive (Gentle Lava)"
      : explosivityScore <= 7
        ? "Moderate Ash & Lava"
        : "Violently Explosive";
  const topHazard =
    explosivityScore <= 4
      ? "Slow Lava Flows"
      : explosivityScore <= 7
        ? "Ashfall & Lahars"
        : "Pyroclastic Flows (700 °C)";
  const hazardTone: "good" | "brand" | "bad" =
    explosivityScore <= 4 ? "good" : explosivityScore <= 7 ? "brand" : "bad";

  // SVG geometry smoothly morphing from wide flat shield to tall steep cone
  const baseHalf = Math.round(220 - t * 110); // 220 → 110 px
  const peakY = Math.round(162 - t * 76); // 162 → 86 px
  const leftX = 280 - baseHalf;
  const rightX = 280 + baseHalf;
  const ventHalf = Math.round(10 - t * 2);
  const isComposite = silica >= 61;
  const isShield = silica <= 55;
  const plumeScale = Math.max(0, (explosivityScore - 3) / 7);

  return (
    <WidgetFrame
      title="Magma Viscosity & Shield-vs-Composite Volcano Builder"
      tryThis={[
        "Compare **Mauna Loa (50% silica)** with **Mount Merapi (63% silica)** — watch both slope angle and eruption style transform.",
        "Raise silica above **65%** and push gas pressure to **9–10** to trigger a blocked-vent composite blast with pyroclastic flows.",
      ]}
      caption={
        <>
          At <strong>{silica}% silica</strong>, magma has <strong>{viscosityLabel.toLowerCase()}</strong> viscosity,
          forming a <strong>{volcanoType}</strong> with roughly <strong>{slopeDeg}° slopes</strong>.{" "}
          {isShield
            ? "Runny basaltic lava lets dissolved gases escape quietly and spreads across a wide base before cooling."
            : isComposite
              ? "Thick, sticky magma cools rapidly near the vent into alternating ash-and-lava layers and traps expanding gas until pressure explodes violently."
              : "Intermediate silica produces moderately viscous lava with mixed effusive flows and periodic ash bursts."}
        </>
      }
    >
      <div className="space-y-4">
        <div className="min-w-0">
          <Segmented
            label="Volcano preset"
            value={preset}
            onChange={applyPreset}
            options={[
              { value: "mauna-loa", label: "Mauna Loa (Shield)" },
              { value: "merapi", label: "Mt Merapi (Composite)" },
              { value: "pinatubo", label: "Mt Pinatubo (Extreme)" },
              { value: "custom", label: "Custom" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider
            label="Silica (SiO₂) Content"
            value={silica}
            min={48}
            max={72}
            step={1}
            onChange={handleSilica}
            format={(v) => `${v}%`}
          />
          <Slider
            label="Dissolved Gas Pressure"
            value={gas}
            min={1}
            max={10}
            step={1}
            onChange={handleGas}
            format={(v) => `${v} / 10`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 240"
            className="h-auto w-full"
            role="img"
            aria-label={`Interactive cross-section of a ${volcanoType} with ${slopeDeg} degree slopes and ${silica} percent silica magma`}
          >
            <rect x="0" y="0" width="560" height="240" rx="10" fill="var(--surface)" />

            {/* Ash plume when explosive */}
            {plumeScale > 0.15 ? (
              <g opacity={0.25 + plumeScale * 0.55}>
                <ellipse
                  cx={280}
                  cy={Math.max(26, peakY - 26 - plumeScale * 22)}
                  rx={30 + plumeScale * 58}
                  ry={14 + plumeScale * 18}
                  fill="var(--ink-2)"
                />
                <circle
                  cx={260 - plumeScale * 18}
                  cy={Math.max(30, peakY - 18 - plumeScale * 14)}
                  r={12 + plumeScale * 14}
                  fill="var(--ink-2)"
                />
                <circle
                  cx={304 + plumeScale * 22}
                  cy={Math.max(30, peakY - 20 - plumeScale * 16)}
                  r={14 + plumeScale * 16}
                  fill="var(--ink-2)"
                />
                <text
                  x="430"
                  y="32"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="var(--ink)"
                >
                  Explosive Tephra &amp; Gas Plume
                </text>
              </g>
            ) : null}

            {/* Ground crust */}
            <rect x="16" y="200" width="528" height="28" fill="var(--surface-2)" stroke="var(--line)" />

            {/* Volcano profile */}
            <path
              d={`M ${leftX} 200 Q ${280 - baseHalf * 0.52} ${peakY + (200 - peakY) * (isShield ? 0.18 : 0.48)} ${280 - ventHalf} ${peakY} L ${280 + ventHalf} ${peakY} Q ${280 + baseHalf * 0.52} ${peakY + (200 - peakY) * (isShield ? 0.18 : 0.48)} ${rightX} 200 Z`}
              fill={isShield ? "var(--brand-soft)" : "var(--surface-2)"}
              stroke={isShield ? "var(--brand)" : "var(--ink)"}
              strokeWidth="2.2"
            />

            {/* Alternating ash/lava strata for intermediate/composite */}
            {!isShield ? (
              <g>
                <line
                  x1={280 - baseHalf * 0.72}
                  y1={200 - (200 - peakY) * 0.28}
                  x2={280 + baseHalf * 0.72}
                  y2={200 - (200 - peakY) * 0.28}
                  stroke="var(--ink-2)"
                  strokeWidth="3"
                  strokeDasharray="6 3"
                />
                <line
                  x1={280 - baseHalf * 0.5}
                  y1={200 - (200 - peakY) * 0.52}
                  x2={280 + baseHalf * 0.5}
                  y2={200 - (200 - peakY) * 0.52}
                  stroke="var(--bad)"
                  strokeWidth="3"
                />
                <line
                  x1={280 - baseHalf * 0.28}
                  y1={200 - (200 - peakY) * 0.75}
                  x2={280 + baseHalf * 0.28}
                  y2={200 - (200 - peakY) * 0.75}
                  stroke="var(--ink-2)"
                  strokeWidth="2.5"
                  strokeDasharray="5 3"
                />
              </g>
            ) : null}

            {/* Central magma conduit & chamber */}
            <rect
              x={280 - ventHalf + 2}
              y={peakY}
              width={(ventHalf - 2) * 2}
              height={224 - peakY}
              fill="var(--bad)"
            />
            <ellipse cx="280" cy="218" rx="48" ry="14" fill="var(--bad)" />
            <text x="280" y="222" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--surface)">
              Magma Chamber ({silica}% SiO₂)
            </text>

            {/* Runny lava rivers on shield */}
            {isShield ? (
              <g>
                <path
                  d={`M ${280 - ventHalf} ${peakY + 2} Q ${280 - baseHalf * 0.45} ${peakY + 12} ${leftX + 26} 194`}
                  fill="none"
                  stroke="var(--bad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d={`M ${280 + ventHalf} ${peakY + 2} Q ${280 + baseHalf * 0.45} ${peakY + 12} ${rightX - 26} 194`}
                  fill="none"
                  stroke="var(--bad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <text x="280" y={peakY - 12} textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--bad)">
                  Effusive Runny Basaltic Lava Flows
                </text>
              </g>
            ) : null}

            {/* Pyroclastic flow cloud on high explosivity composite */}
            {isComposite && explosivityScore >= 7 ? (
              <g>
                <path
                  d={`M ${280 - ventHalf} ${peakY + 4} Q ${280 - baseHalf * 0.6} ${peakY + 48} ${Math.max(46, leftX - 42)} 196`}
                  fill="none"
                  stroke="var(--bad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  opacity="0.38"
                />
                <path
                  d={`M ${280 - ventHalf} ${peakY + 4} Q ${280 - baseHalf * 0.6} ${peakY + 48} ${Math.max(46, leftX - 42)} 196`}
                  fill="none"
                  stroke="var(--bad)"
                  strokeWidth="3"
                  strokeDasharray="6 3"
                />
                <text x="108" y="128" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--bad)">
                  Pyroclastic Flow
                </text>
                <text x="108" y="141" textAnchor="middle" fontSize="9" fill="var(--ink-2)">
                  700 °C · 100+ km/h
                </text>
              </g>
            ) : null}

            {/* Slope annotation */}
            <text x="476" y="182" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="var(--ink)">
              Slope ≈ {slopeDeg}°
            </text>
            <text x="476" y="195" textAnchor="middle" fontSize="9" fill="var(--ink-2)">
              {isShield ? "Constructive / Hotspot" : "Destructive Subduction"}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <Readout label="Volcano Type" value={volcanoType} tone="ink" />
          <Readout label="Slope Angle" value={`${slopeDeg}°`} tone="brand" />
          <Readout label="Eruption Style" value={eruptionStyle} tone={hazardTone} />
          <Readout label="Primary Threat" value={topHazard} tone={hazardTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

type AlertPreset = "normal" | "advisory" | "watch" | "imminent" | "custom";

function VolcanoMonitoringDashboard() {
  const [preset, setPreset] = useState<AlertPreset>("normal");
  const [tremors, setTremors] = useState(10);
  const [bulgeCm, setBulgeCm] = useState(1);
  const [so2, setSo2] = useState(250);
  const [thermal, setThermal] = useState(10);

  const applyPreset = (p: AlertPreset) => {
    setPreset(p);
    if (p === "normal") {
      setTremors(10);
      setBulgeCm(1);
      setSo2(250);
      setThermal(10);
    } else if (p === "advisory") {
      setTremors(60);
      setBulgeCm(4);
      setSo2(900);
      setThermal(55);
    } else if (p === "watch") {
      setTremors(135);
      setBulgeCm(9);
      setSo2(2100);
      setThermal(140);
    } else if (p === "imminent") {
      setTremors(220);
      setBulgeCm(16);
      setSo2(3400);
      setThermal(250);
    }
  };

  const setCustom = (setter: (v: number) => void) => (v: number) => {
    setter(v);
    setPreset("custom");
  };

  // Detect plugged-vent extreme danger (high tremors + big bulge + suddenly low SO2)
  const pluggedVent = tremors >= 150 && bulgeCm >= 10 && so2 <= 350;

  const sTremor = tremors >= 160 ? 3 : tremors >= 90 ? 2 : tremors >= 35 ? 1 : 0;
  const sBulge = bulgeCm >= 12 ? 3 : bulgeCm >= 6 ? 2 : bulgeCm >= 3 ? 1 : 0;
  const sSo2 = pluggedVent ? 3 : so2 >= 2500 ? 3 : so2 >= 1200 ? 2 : so2 >= 550 ? 1 : 0;
  const sThermal = thermal >= 180 ? 3 : thermal >= 90 ? 2 : thermal >= 35 ? 1 : 0;
  const totalScore = sTremor + sBulge + sSo2 + sThermal; // 0..12
  const activeSensors = [sTremor, sBulge, sSo2, sThermal].filter((s) => s >= 2).length;

  const alertLevel =
    totalScore >= 9 || (pluggedVent && totalScore >= 7)
      ? 4
      : totalScore >= 6
        ? 3
        : totalScore >= 3
          ? 2
          : 1;

  const alertLabel =
    alertLevel === 4
      ? "4 · RED WARNING"
      : alertLevel === 3
        ? "3 · ORANGE WATCH"
        : alertLevel === 2
          ? "2 · YELLOW ADVISORY"
          : "1 · GREEN NORMAL";

  const alertTone: "good" | "brand" | "bad" =
    alertLevel === 1 ? "good" : alertLevel <= 3 ? "brand" : "bad";

  const exclusionKm = alertLevel === 4 ? 15 : alertLevel === 3 ? 8 : alertLevel === 2 ? 3 : 0;
  const areaSqKm = Math.round(Math.PI * exclusionKm * exclusionKm);

  const actionText =
    alertLevel === 4
      ? pluggedVent
        ? "DANGER: Sealed vent trapping explosive gas! Mandatory 15 km evacuation + livestock shelters."
        : "Mandatory 15 km exclusion zone! Evacuate all valleys & open shelters + ash masks."
      : alertLevel === 3
        ? "Prepare buses & shelters, restrict 8 km hazard valleys, issue public Watch alert."
        : alertLevel === 2
          ? "Close summit trails (3 km), deploy extra tiltmeters & brief local village leaders."
          : "Routine background monitoring, hazard map updates & annual school drills.";

  // Deterministic seismograph trace path whose wave amplitude tracks `tremors`
  const amp = 2 + (tremors / 250) * 18;
  const tracePoints: string[] = [];
  for (let i = 0; i <= 24; i++) {
    const x = 356 + i * 7.5;
    const sign = i % 2 === 0 ? -1 : 1;
    const mod = ((i * 7) % 5 + 3) / 7;
    const y = 178 + sign * amp * mod;
    tracePoints.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  const traceD = tracePoints.join(" ");

  const bulgePx = (bulgeCm / 20) * 20;
  const magmaTopY = 176 - (totalScore / 12) * 74;

  return (
    <WidgetFrame
      title="Volcano Observatory Monitoring & Alert Dashboard"
      tryThis={[
        "Step through **Background → Early Unrest → Magma Rising → Imminent Blast** to see how four sensors combine to drive alert tiers.",
        "Test the **Plugged-Vent Trap**: push tremors to **180+**, ground bulge to **12+ cm**, and drop SO₂ below **300 tonnes/day** — watch what the observatory warns!",
      ]}
      caption={
        <>
          <strong>{activeSensors} of 4 instruments</strong> are showing elevated magma ascent signals.{" "}
          <strong>Recommended Action:</strong> {actionText}
        </>
      }
    >
      <div className="space-y-4">
        <div className="min-w-0">
          <Segmented
            label="Telemetry scenario"
            value={preset}
            onChange={applyPreset}
            options={[
              { value: "normal", label: "Background" },
              { value: "advisory", label: "Early Unrest" },
              { value: "watch", label: "Magma Rising" },
              { value: "imminent", label: "Imminent Blast" },
              { value: "custom", label: "Custom" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider
            label="Seismometer: Harmonic Tremors"
            value={tremors}
            min={0}
            max={250}
            step={5}
            onChange={setCustom(setTremors)}
            format={(v) => `${v} / hr`}
          />
          <Slider
            label="Tiltmeter / GPS: Flank Bulge"
            value={bulgeCm}
            min={0}
            max={20}
            step={1}
            onChange={setCustom(setBulgeCm)}
            format={(v) => `+${v} cm`}
          />
          <Slider
            label="Spectrometer: SO₂ Emissions"
            value={so2}
            min={100}
            max={4000}
            step={50}
            onChange={setCustom(setSo2)}
            format={(v) => `${v} t/day`}
          />
          <Slider
            label="Thermal Camera: Crater Heat"
            value={thermal}
            min={0}
            max={300}
            step={10}
            onChange={setCustom(setThermal)}
            format={(v) => `+${v} °C`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 240"
            className="h-auto w-full"
            role="img"
            aria-label={`Volcano observatory display showing Alert Level ${alertLevel}, ${tremors} tremors per hour, ${bulgeCm} cm ground bulge, and ${so2} tonnes per day SO2`}
          >
            <rect x="0" y="0" width="560" height="240" rx="10" fill="var(--surface)" />

            {/* Status banner */}
            <rect
              x="14"
              y="10"
              width="532"
              height="26"
              rx="6"
              fill={alertLevel === 4 ? "var(--bad-soft)" : alertLevel === 1 ? "var(--good-soft)" : "var(--warn-soft)"}
              stroke={alertLevel === 4 ? "var(--bad)" : alertLevel === 1 ? "var(--good)" : "var(--warn)"}
            />
            <text
              x="280"
              y="27"
              textAnchor="middle"
              fontSize="11"
              fontWeight="800"
              fill={alertLevel === 4 ? "var(--bad)" : alertLevel === 1 ? "var(--good)" : "var(--warn)"}
            >
              {alertLabel} {pluggedVent ? "· PLUGGED VENT OVERPRESSURE" : `· Exclusion Radius: ${exclusionKm} km`}
            </text>

            {/* SO2 Gas Plume */}
            <path
              d={`M 186 92 Q 194 64 ${224 + (so2 / 4000) * 65} 52`}
              fill="none"
              stroke="var(--warn)"
              strokeWidth={4 + (so2 / 4000) * 16}
              strokeLinecap="round"
              opacity={0.22 + (so2 / 4000) * 0.55}
            />
            <text x="275" y="54" textAnchor="start" fontSize="9.5" fontWeight="700" fill="var(--warn)">
              SO₂: {so2} t/day
            </text>

            {/* Original cone outline */}
            <polygon
              points="56,210 168,94 204,94 316,210"
              fill="var(--surface-2)"
              stroke="var(--ink)"
              strokeWidth="2"
            />

            {/* Exaggerated bulging flank outline from tiltmeter */}
            {bulgeCm > 1 ? (
              <g>
                <path
                  d={`M 82 184 Q ${120 - bulgePx} 142 168 94`}
                  fill="none"
                  stroke="var(--bad)"
                  strokeWidth="2.5"
                  strokeDasharray="5 3"
                />
                <path
                  d={`M 290 184 Q ${252 + bulgePx} 142 204 94`}
                  fill="none"
                  stroke="var(--bad)"
                  strokeWidth="2.5"
                  strokeDasharray="5 3"
                />
              </g>
            ) : null}

            {/* Rising magma column & chamber */}
            <rect x="178" y={magmaTopY} width="16" height={212 - magmaTopY} fill="var(--bad)" />
            <ellipse
              cx="186"
              cy="206"
              rx={32 + (bulgeCm / 20) * 16}
              ry={14 + (bulgeCm / 20) * 6}
              fill="var(--bad)"
            />

            {/* Crater thermal glow */}
            <ellipse
              cx="186"
              cy="94"
              rx="18"
              ry="5"
              fill="var(--bad)"
              opacity={0.15 + (thermal / 300) * 0.8}
            />

            {/* Sensor markers */}
            <circle cx={126 - bulgePx * 0.5} cy="146" r="5" fill="var(--bad)" />
            <text x="36" y="138" fontSize="9.5" fontWeight="700" fill="var(--bad)">
              Tiltmeter
            </text>
            <text x="36" y="150" fontSize="9" fill="var(--ink-2)">
              +{bulgeCm} cm bulge
            </text>

            <text x="36" y="76" fontSize="9.5" fontWeight="700" fill="var(--info)">
              Thermal Drone
            </text>
            <text x="36" y="88" fontSize="9" fill="var(--ink-2)">
              +{thermal} °C crater
            </text>

            {/* Seismometer live trace box */}
            <rect x="348" y="134" width="196" height="82" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
            <text x="446" y="151" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--brand)">
              Seismometer Trace ({tremors}/hr)
            </text>
            <line x1="356" y1="178" x2="536" y2="178" stroke="var(--line)" strokeDasharray="3 3" />
            <path d={traceD} fill="none" stroke="var(--brand)" strokeWidth="2" />
            <text x="446" y="208" textAnchor="middle" fontSize="9" fill="var(--ink-2)">
              {tremors >= 120 ? "Intense harmonic tremors" : tremors >= 45 ? "Rising quake swarms" : "Quiet background"}
            </text>

            {/* Exclusion area readout box */}
            <rect x="348" y="72" width="196" height="50" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
            <text x="446" y="91" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--ink)">
              Exclusion Perimeter
            </text>
            <text x="446" y="109" textAnchor="middle" fontSize="10" fill="var(--ink-2)">
              Radius {exclusionKm} km · Area ≈ {areaSqKm} km²
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Alert Level" value={alertLabel} tone={alertTone} />
          <Readout label="Exclusion Radius" value={`${exclusionKm} km`} tone={alertLevel >= 3 ? "bad" : "brand"} />
          <Readout label="Evacuated Area (πr²)" value={`${areaSqKm} km²`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "magma-viscosity-volcano-builder",
    title: "Magma Viscosity & Shield-vs-Composite Volcano Builder",
    blurb: "Adjust silica content and gas pressure to morph a runny shield volcano into an explosive composite stratovolcano.",
    Component: MagmaViscosityBuilder,
  },
  {
    id: "volcano-monitoring-alert-dashboard",
    title: "Volcano Observatory Monitoring & Alert Dashboard",
    blurb: "Combine seismometer tremors, tiltmeter bulging, SO₂ gas, and thermal heat to issue exclusion-zone alerts.",
    Component: VolcanoMonitoringDashboard,
  },
];
