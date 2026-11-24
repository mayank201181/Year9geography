import type { Drill, Rng } from "./types.ts";

function roundTo(n: number, dp: number): number {
  const f = 10 ** dp;
  return Math.round((n + Number.EPSILON) * f) / f;
}

const PLACES = [
  "Singapore", "Rotterdam", "Dhaka", "Malé", "Jakarta", "Tokyo",
  "London", "Copenhagen", "Nairobi", "Bamako", "Sydney", "Ho Chi Minh City",
];

const SG_DISTRICTS = [
  "Tampines", "Punggol", "Jurong", "Bedok", "Woodlands", "Changi",
  "Bishan", "Pasir Ris", "Tuas", "Marina Bay", "Clementi", "Yishun",
];

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (level 1): Mitigation vs Adaptation Classifier & Grid Savings
  // =========================================================================
  {
    id: "solving-climate-crisis.mitigation-vs-adaptation",
    topicId: "solving-climate-crisis",
    title: "Mitigation vs Adaptation Classifier",
    level: 1,
    guideRef: "mitigation-strategies",
    generate(rng: Rng, tier) {
      if (tier === 1) {
        const place = rng.pick(PLACES);
        const n = rng.int(15, 95);
        const items: Array<{ text: string; ans: "mitigation" | "adaptation"; why: string }> = [
          {
            text: `Installing ${n} MW of rooftop solar PV panels across public apartments in ${place}`,
            ans: "mitigation",
            why: "Solar power replaces fossil-fuel electricity and cuts CO₂ emissions at the source (mitigation).",
          },
          {
            text: `Switching ${n}% of municipal diesel buses in ${place} to clean electric buses`,
            ans: "mitigation",
            why: "Electrifying public transport reduces tailpipe CO₂ emissions (mitigation).",
          },
          {
            text: `Fitting Carbon Capture and Storage (CCS) onto ${rng.int(2, 8)} cement kilns near ${place} to store ${n} kt of CO₂ underground`,
            ans: "mitigation",
            why: "CCS prevents industrial CO₂ from entering the atmosphere (mitigation).",
          },
          {
            text: `Launching a ${n}% food-waste reduction and red-seaweed cattle-feed programme near ${place}`,
            ans: "mitigation",
            why: "Cutting landfill food waste and cattle digestion methane slashes GHG emissions (mitigation).",
          },
          {
            text: `Constructing a ${rng.int(2, 5)}-metre reinforced concrete sea wall along ${n} km of coastline near ${place}`,
            ans: "adaptation",
            why: "Sea walls protect people from rising seas without reducing greenhouse gases (adaptation).",
          },
          {
            text: `Building ${n} elevated concrete cyclone shelters and SMS flood alerts in coastal ${place}`,
            ans: "adaptation",
            why: "Shelters and early-warning alerts help residents survive extreme weather safely (adaptation).",
          },
          {
            text: `Distributing drought-tolerant and salt-tolerant GM crop seeds to ${n},000 farmers outside ${place}`,
            ans: "adaptation",
            why: "Resilient crops adapt agriculture to hotter droughts and salinised soils (adaptation).",
          },
          {
            text: `Converting ${n} concrete drains in ${place} into permeable sponge-city rain gardens`,
            ans: "adaptation",
            why: "Sponge-city drains manage extreme flash-flood rainfall without cutting atmospheric CO₂ (adaptation).",
          },
        ];
        const it = rng.pick(items);
        const opp = it.ans === "mitigation" ? "adaptation" : "mitigation";
        return {
          prompt: `Classify this climate action as \`mitigation\` or \`adaptation\`: ${it.text}.`,
          answer: { type: "text", accept: [it.ans], display: it.ans },
          hint: "Ask the Cause Test: does it cut/remove greenhouse gases (mitigation), or protect people from climate impacts (adaptation)?",
          solution: [it.why, `Classification: **${it.ans}**.`],
          traps: [
            {
              spec: { type: "text", accept: [opp] },
              feedback: `Apply the Cause Test again: ${it.why}`,
            },
          ],
        };
      }

      if (tier === 2) {
        const place = rng.pick(PLACES);
        const n = rng.int(10, 80);
        const items: Array<{ text: string; ans: "mitigation" | "adaptation" | "both"; why: string }> = [
          {
            text: `Restoring ${n}0 hectares of coastal mangrove forest outside ${place} to block storm waves and store blue carbon`,
            ans: "both",
            why: "Mangroves store blue carbon (mitigation) AND absorb 50–70% of storm-wave energy (adaptation) — a win–win strategy!",
          },
          {
            text: `Planting ${n}0,000 shade trees along streets in ${place} to absorb CO₂ and cool the Urban Heat Island`,
            ans: "both",
            why: "Urban trees sequester CO₂ via photosynthesis (mitigation) AND cool hot streets through shade/evapotranspiration (adaptation).",
          },
          {
            text: `Installing ${n}0 hectares of green vegetated rooftops in ${place} that absorb rainwater, cool buildings and store plant carbon`,
            ans: "both",
            why: "Green roofs cut cooling electricity/store carbon (mitigation) AND buffer heatwaves and stormwater runoff (adaptation).",
          },
          {
            text: `Raising an industrial carbon tax in ${place} to S$${rng.int(35, 80)}/tonne to accelerate coal phase-out`,
            ans: "mitigation",
            why: "Carbon pricing directly drives down fossil-fuel greenhouse gas emissions (pure mitigation).",
          },
          {
            text: `Building ${n}00 MW of offshore wind turbines and grid-scale lithium batteries off ${place}`,
            ans: "mitigation",
            why: "Offshore wind plus batteries replace fossil-fuel power generation (pure mitigation).",
          },
          {
            text: `Building a ${n}0-hectare pumped polder ringed by stone dikes along the coast of ${place}`,
            ans: "adaptation",
            why: "Polders protect low-lying land from sea-level rise without lowering atmospheric CO₂ (pure adaptation).",
          },
          {
            text: `Installing drip irrigation across ${n}0 farms near ${place} to cut evaporation water loss by 60%`,
            ans: "adaptation",
            why: "Drip irrigation helps farmers survive hotter droughts safely (pure adaptation).",
          },
        ];
        const it = rng.pick(items);
        return {
          prompt: `Classify this policy as \`mitigation\`, \`adaptation\`, or \`both\`: ${it.text}.`,
          answer: { type: "text", accept: [it.ans], display: it.ans },
          hint: "Check whether it cuts/removes GHGs, protects against impacts, or achieves BOTH simultaneously (win–win)!",
          solution: [it.why, `Answer: **${it.ans}**.`],
        };
      }

      // Tier 3: Grid decarbonisation CO2 saved calculation
      const place = rng.pick(PLACES);
      const totalMwh = rng.pick([100, 150, 200, 250, 300, 400, 500]) * 1000;
      const sharePct = rng.pick([20, 30, 40, 50, 60, 70, 80]);
      const coalRate = rng.pick([0.85, 0.9, 0.95]);
      const cleanSrc = rng.pick([
        { name: "solar PV", rate: 0.05 },
        { name: "offshore wind", rate: 0.02 },
        { name: "hydroelectric power", rate: 0.03 },
      ]);
      const shifted = Math.round((sharePct / 100) * totalMwh);
      const diff = roundTo(coalRate - cleanSrc.rate, 2);
      const saved = Math.round(shifted * diff);
      return {
        prompt: `${place} uses **${totalMwh.toLocaleString("en-US")} MWh/year** of electricity from coal (**${coalRate} t CO₂/MWh**). If it shifts **${sharePct}%** of its grid to ${cleanSrc.name} (**${cleanSrc.rate} t CO₂/MWh**), how many **tonnes of CO₂** are saved each year? (Number only.)`,
        answer: { type: "number", value: saved, display: `${saved.toLocaleString("en-US")}` },
        hint: `Find ${sharePct}% of ${totalMwh}, then multiply by (${coalRate} − ${cleanSrc.rate}).`,
        solution: [
          `Electricity shifted = {{${sharePct} / 100 * ${totalMwh} = ${shifted}}} MWh.`,
          `Net saving per MWh = {{${coalRate} - ${cleanSrc.rate} = ${diff}}} t CO₂/MWh.`,
          `Annual CO₂ saved = {{${shifted} * ${diff} = ${saved}}} tonnes.`,
        ],
        traps: [
          {
            spec: { type: "number", value: Math.round(shifted * coalRate) },
            feedback: `Remember to subtract ${cleanSrc.name}'s small lifecycle rate (${cleanSrc.rate} t/MWh) before multiplying!`,
          },
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (level 1): Hard vs Soft Adaptation & Water/Wave Resilience Lab
  // =========================================================================
  {
    id: "solving-climate-crisis.adaptation-engineering-math",
    topicId: "solving-climate-crisis",
    title: "Coastal Engineering & Drip-Irrigation Lab",
    level: 1,
    guideRef: "adaptation-strategies",
    generate(rng: Rng, tier) {
      if (tier === 1) {
        const place = rng.pick(PLACES);
        const len = rng.int(3, 35);
        const items: Array<{ text: string; ans: "hard" | "soft"; why: string }> = [
          {
            text: `A ${rng.int(3, 6)}-metre reinforced concrete sea wall stretching ${len} km along the port of ${place}`,
            ans: "hard",
            why: "Concrete sea walls are human-built rigid structures (hard engineering).",
          },
          {
            text: `Moveable steel storm-surge tidal gates spanning a ${len * 10} m river mouth in ${place}`,
            ans: "hard",
            why: "Mechanical steel floodgates/barrages are hard coastal engineering.",
          },
          {
            text: `A reclaimed ${len}0-hectare coastal polder enclosed by rock dikes and drainage pumps near ${place}`,
            ans: "hard",
            why: "Polders using stone dikes and mechanical pumps are hard engineering.",
          },
          {
            text: `Restoring ${len} km of dense coastal mangrove forest along muddy flats near ${place}`,
            ans: "soft",
            why: "Mangrove restoration uses living natural ecosystems to dissipate waves (soft engineering).",
          },
          {
            text: `Rebuilding ${len} km of natural sandy beaches and vegetated coastal dunes outside ${place}`,
            ans: "soft",
            why: "Beach nourishment and dune regeneration work with natural processes (soft engineering).",
          },
          {
            text: `Converting a ${len}-hectare concrete drain in ${place} into a naturalised wetland retention park`,
            ans: "soft",
            why: "Naturalised floodparks and wetlands are nature-based soft engineering.",
          },
        ];
        const it = rng.pick(items);
        return {
          prompt: `Classify this coastal/flood defence as \`hard\` or \`soft\` engineering: ${it.text}.`,
          answer: { type: "text", accept: [it.ans, `${it.ans} engineering`], display: it.ans },
          hint: "Hard engineering uses concrete, rock and steel structures; soft engineering works with natural ecosystems like mangroves, dunes and wetlands.",
          solution: [it.why, `Answer: **${it.ans}**.`],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Drip irrigation new daily usage
          const orig = rng.int(4, 25) * 1000;
          const cutPct = rng.pick([40, 45, 50, 55, 60, 65, 70]);
          const used = Math.round(orig * ((100 - cutPct) / 100));
          const saved = orig - used;
          const region = rng.pick(["Mali", "Niger", "Chad", "Burkina Faso", "Senegal", "Northern Kenya"]);
          return {
            prompt: `A semi-arid farm in ${region} uses **${orig.toLocaleString("en-US")} litres/day** with flood irrigation. Installing drip irrigation cuts water use by **${cutPct}%**. How many **litres/day** does the farm **NOW use**?`,
            answer: { type: "number", value: used, display: `${used.toLocaleString("en-US")} L` },
            hint: `Cutting by ${cutPct}% leaves ${100 - cutPct}% still used. Compute ${(100 - cutPct) / 100} × ${orig}.`,
            solution: [
              `Water saved = {{${cutPct} / 100 * ${orig} = ${saved}}} L/day.`,
              `New daily water use = {{${orig} - ${saved} = ${used}}} L/day.`,
            ],
            traps:
              saved !== used
                ? [
                    {
                      spec: { type: "number", value: saved },
                      feedback: `${saved.toLocaleString("en-US")} L is the water SAVED — subtract from ${orig.toLocaleString("en-US")} L to get what the farm NOW uses!`,
                    },
                  ]
                : undefined,
          };
        }
        // Mangrove wave energy remaining
        const waveE = rng.int(8, 40) * 10; // 80 to 400 kJ
        const absorbPct = rng.pick([50, 55, 60, 65, 70]);
        const rem = roundTo(waveE * ((100 - absorbPct) / 100), 1);
        const abs = roundTo(waveE - rem, 1);
        const coast = rng.pick(["Sungei Buloh", "Pulau Ubin", "Sundarbans", "Mekong Delta", "Java coast"]);
        return {
          prompt: `Along the ${coast}, a dense mangrove belt absorbs **${absorbPct}%** of incoming storm-wave energy. If a wave hits the outer edge carrying **${waveE} kJ** of energy, how many **kJ** still reach the dike behind? (Number only.)`,
          answer: { type: "number", value: rem, display: `${rem}` },
          hint: `If ${absorbPct}% is absorbed, ${100 - absorbPct}% reaches the dike.`,
          solution: [
            `Absorbed by mangroves = {{${absorbPct} / 100 * ${waveE} = ${abs}}} kJ.`,
            `Remaining wave energy = {{${waveE} - ${abs} = ${rem}}} kJ.`,
          ],
          traps:
            abs !== rem
              ? [
                  {
                    spec: { type: "number", value: abs },
                    feedback: `${abs} kJ is the energy ABSORBED by the mangroves — subtract from ${waveE} kJ to find what reaches the dike.`,
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Hybrid coastal defence cost-saving percentage (exact integer %)
      const wallPerKm = rng.pick([10, 12, 15, 20, 25]);
      const savePct = rng.pick([20, 25, 30, 40]);
      // Make hybridPerKm exact integer
      const validSave = wallPerKm === 12 ? 25 : wallPerKm === 15 ? 20 : savePct;
      const hybridTotal = roundTo(wallPerKm * (1 - validSave / 100), 1);
      const mangPerKm = rng.pick([1, 2]);
      const dikePerKm = roundTo(hybridTotal - mangPerKm, 1);
      const km = rng.int(4, 18);
      const costA = roundTo(km * wallPerKm, 1);
      const costB = roundTo(km * (mangPerKm + dikePerKm), 1);
      const place = rng.pick(PLACES);
      return {
        prompt: `To defend **${km} km** of coast near ${place}, Option A builds a tall sea wall at **S$${wallPerKm} million/km**. Option B pairs mangroves (**S$${mangPerKm} million/km**) with a shorter dike (**S$${dikePerKm} million/km**). Calculate the **percentage cost saving** of choosing hybrid Option B over Option A.`,
        answer: { type: "number", value: validSave, display: `${validSave}%` },
        hint: "Compare cost per km (or total cost for all km): ((Wall − Hybrid) ÷ Wall) × 100.",
        solution: [
          `Option A total = {{${km} * ${wallPerKm} = ${costA}}} million S$; Option B total = {{${km} * (${mangPerKm} + ${dikePerKm}) = ${costB}}} million S$.`,
          `Percentage saving = {{((${costA} - ${costB}) / ${costA}) * 100 = ${validSave}}}%.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (level 2): Paris Agreement NDC & Ratchet Calculator
  // =========================================================================
  {
    id: "solving-climate-crisis.paris-ndc-calculator",
    topicId: "solving-climate-crisis",
    title: "Paris Agreement NDC & Ratchet Lab",
    level: 2,
    guideRef: "international-agreements",
    generate(rng: Rng, tier) {
      const nations = [
        "Nation A", "Country B", "State C", "Republic D", "Economy E",
        "Country F", "Nation G", "State H", "Economy K", "Country M",
      ];
      const nation = rng.pick(nations);

      if (tier === 1) {
        const base = rng.int(8, 60) * 10; // 80 to 600 Mt
        const cutPct = rng.pick([15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);
        const cut = roundTo((cutPct / 100) * base, 1);
        const cap = roundTo(base - cut, 1);
        const targetYr = rng.pick([2030, 2035]);
        return {
          prompt: `${nation} emitted **${base} Mt** of CO₂ in 2015. In its Paris Agreement NDC, it pledges a **${cutPct}% reduction** below 2015 levels by ${targetYr}. Calculate its **${targetYr} target emissions cap** in Mt (number only).`,
          answer: { type: "number", value: cap, display: `${cap}` },
          hint: `Cutting ${cutPct}% leaves ${100 - cutPct}% of ${base} Mt.`,
          solution: [
            `Amount reduced = {{${cutPct} / 100 * ${base} = ${cut}}} Mt.`,
            `${targetYr} target cap = {{${base} - ${cut} = ${cap}}} Mt.`,
          ],
          traps:
            cut !== cap
              ? [
                  {
                    spec: { type: "number", value: cut },
                    feedback: `${cut} Mt is the amount CUT — subtract ${cut} from ${base} to find the remaining cap (${cap} Mt)!`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const base = rng.pick([100, 120, 160, 200, 240, 250, 300, 400, 500]);
        const pctPool = base === 120 || base === 240 ? [25, 50] : [15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
        const actualCutPct = rng.pick(pctPool);
        const actual = roundTo(base * (1 - actualCutPct / 100), 1);
        const diff = roundTo(base - actual, 1);
        const yr = rng.pick([2025, 2030, 2035]);
        return {
          prompt: `${nation} emitted **${base} Mt** of CO₂ in 2015 and brought annual emissions down to **${actual} Mt** by ${yr}. Calculate the **percentage reduction** achieved below its 2015 baseline.`,
          answer: { type: "number", value: actualCutPct, display: `${actualCutPct}%` },
          hint: "Percentage reduction = ((Baseline − Actual) ÷ Baseline) × 100.",
          solution: [
            `Emissions cut = {{${base} - ${actual} = ${diff}}} Mt.`,
            `Percentage reduction = {{(${diff} / ${base}) * 100 = ${actualCutPct}}}%.`,
          ],
          traps:
            actualCutPct !== 50
              ? [
                  {
                    spec: { type: "number", value: 100 - actualCutPct },
                    feedback: `${100 - actualCutPct}% is the share REMAINING — subtract from 100% to get the percentage REDUCTION (${actualCutPct}%).`,
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Compound 5-year Paris ratchet
      const base = rng.pick([200, 400, 500, 600, 800, 1000]);
      const r1 = rng.pick([10, 20, 25, 30, 40]);
      const r2 = rng.pick([20, 25, 30, 40, 50]);
      const mid = roundTo(base * (1 - r1 / 100), 1);
      const fin = roundTo(mid * (1 - r2 / 100), 1);
      const totalPct = roundTo(((base - fin) / base) * 100, 1);
      return {
        prompt: `${nation} emitted **${base} Mt** of CO₂ in 2015. Under its first Paris NDC it cuts emissions by **${r1}%** by 2025. Under the 5-year ratchet it cuts its **2025 level** by a further **${r2}%** by 2035. Calculate the **overall percentage reduction** below the 2015 baseline.`,
        answer: { type: "number", value: totalPct, display: `${totalPct}%` },
        hint: "Apply the two cuts sequentially (do NOT simply add the two percentages!).",
        solution: [
          `2025 emissions = {{${base} * ${(100 - r1) / 100} = ${mid}}} Mt.`,
          `2035 emissions = {{${mid} * ${(100 - r2) / 100} = ${fin}}} Mt.`,
          `Overall cut = {{(${base} - ${fin}) / ${base} * 100 = ${totalPct}}}% (note: less than ${r1} + ${r2} = ${r1 + r2}%!).`,
        ],
        traps: [
          {
            spec: { type: "number", value: r1 + r2 },
            feedback: `Watch out for successive percentages! ${r2}% applies to the smaller 2025 level (${mid} Mt), not the original ${base} Mt.`,
          },
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (level 3): Singapore Green Plan 2030 & Carbon Tax Lab
  // =========================================================================
  {
    id: "solving-climate-crisis.singapore-green-plan-lab",
    topicId: "solving-climate-crisis",
    title: "Singapore Green Plan 2030 & Carbon Tax Lab",
    level: 3,
    guideRef: "singapore-green-plan-action",
    generate(rng: Rng, tier) {
      const dist = rng.pick(SG_DISTRICTS);

      if (tier === 1) {
        if (rng.bool()) {
          // Remaining % on Singapore Green Plan 2030 targets
          const targets = [
            { name: "1,000,000 trees (OneMillionTrees)", total: 1000000, step: 25000, unit: "trees" },
            { name: "60,000 EV charging points", total: 60000, step: 3000, unit: "chargers" },
            { name: "2,000 MWp (2 GWp) solar target", total: 2000, step: 100, unit: "MWp" },
          ];
          const t = rng.pick(targets);
          const stepsCount = Math.round(t.total / t.step);
          const doneSteps = rng.int(Math.floor(stepsCount * 0.2), Math.floor(stepsCount * 0.85));
          const done = doneSteps * t.step;
          const remPct = roundTo(((t.total - done) / t.total) * 100, 1);
          const yr = rng.int(2025, 2029);
          return {
            prompt: `By ${yr}, Singapore has reached **${done.toLocaleString("en-US")} ${t.unit}** toward its Green Plan 2030 goal of **${t.name}**. What **percentage** of the target still remains?`,
            answer: { type: "number", value: remPct, display: `${remPct}%` },
            hint: "Find (Target − Completed) ÷ Target × 100.",
            solution: [
              `Remaining = {{${t.total} - ${done} = ${t.total - done}}} ${t.unit}.`,
              `Percentage remaining = {{(${t.total - done} / ${t.total}) * 100 = ${remPct}}}%.`,
            ],
            traps:
              remPct !== 50
                ? [
                    {
                      spec: { type: "number", value: roundTo(100 - remPct, 1) },
                      feedback: `${roundTo(100 - remPct, 1)}% is the share ALREADY completed — subtract from 100% for what still remains!`,
                    },
                  ]
                : undefined,
          };
        }
        // Classify Singapore Green Plan initiatives
        const sgItems: Array<{ text: string; ans: "mitigation" | "adaptation" | "both"; why: string }> = [
          {
            text: `Installing ${rng.int(5, 45)} MWp of HDB rooftop solar panels across ${dist}`,
            ans: "mitigation",
            why: "Solar deployment cuts grid fossil-fuel CO₂ (Energy Reset → mitigation).",
          },
          {
            text: `Adding ${rng.int(200, 900)} public EV chargers in HDB car parks across ${dist}`,
            ans: "mitigation",
            why: "EV charging infrastructure cuts transport tailpipe CO₂ (Energy Reset → mitigation).",
          },
          {
            text: `Raising coastal platform heights and tidal gates protecting low-lying land near ${dist}`,
            ans: "adaptation",
            why: "Coastal barriers defend low-lying Singapore (<5 m) from sea-level rise (Resilient Future → adaptation).",
          },
          {
            text: `Building an indoor vertical agri-tech farm in ${dist} toward Singapore's 30 by 30 food goal`,
            ans: "adaptation",
            why: "Local '30 by 30' food resilience adapts Singapore against climate-driven global harvest shocks (adaptation).",
          },
          {
            text: `Planting ${rng.int(12, 65)},000 native canopy trees across parks and streets in ${dist}`,
            ans: "both",
            why: "OneMillionTrees absorbs CO₂ (mitigation) AND cools Singapore's Urban Heat Island (adaptation).",
          },
        ];
        const it = rng.pick(sgItems);
        return {
          prompt: `Classify this Singapore Green Plan 2030 project as \`mitigation\`, \`adaptation\`, or \`both\`: ${it.text}.`,
          answer: { type: "text", accept: [it.ans], display: it.ans },
          hint: "Does it cut/remove GHGs, defend Singapore from climate impacts, or accomplish BOTH?",
          solution: [it.why, `Answer: **${it.ans}**.`],
        };
      }

      if (tier === 2) {
        // Extra annual carbon tax bill (S$)
        const tonnes = rng.int(15, 95) * 1000;
        const stepPair = rng.pick([
          { r1: 25, r2: 45, label: "2024 (S$25/t) to 2026 (S$45/t)" },
          { r1: 25, r2: 50, label: "2024 (S$25/t) to 2030 (S$50/t)" },
          { r1: 45, r2: 65, label: "2026 (S$45/t) to 2030 (S$65/t)" },
          { r1: 45, r2: 80, label: "2026 (S$45/t) to 2030 (S$80/t)" },
        ]);
        const diffRate = stepPair.r2 - stepPair.r1;
        const extraBill = tonnes * diffRate;
        return {
          prompt: `An industrial plant in ${dist}, Singapore emits **${tonnes.toLocaleString("en-US")} tonnes of CO₂/year**. How much **extra annual carbon tax (in S$)** does it pay when Singapore's rate rises from ${stepPair.label}?`,
          answer: { type: "number", value: extraBill, display: `S$${extraBill.toLocaleString("en-US")}` },
          hint: `First find the tax increase per tonne (${stepPair.r2} − ${stepPair.r1} = S$${diffRate}/t), then multiply by ${tonnes}.`,
          solution: [
            `Tax increase per tonne = {{${stepPair.r2} - ${stepPair.r1} = ${diffRate}}} S$/tonne.`,
            `Extra annual carbon tax = {{${tonnes} * ${diffRate} = ${extraBill}}} S$.`,
          ],
          traps: [
            {
              spec: { type: "number", value: tonnes * stepPair.r2 },
              feedback: `That is the TOTAL new tax bill at S$${stepPair.r2}/t — the question asked for the EXTRA tax compared with S$${stepPair.r1}/t.`,
            },
          ],
        };
      }

      // Tier 3: Carbon tax payback years for clean industrial upgrade
      const tonnes = rng.pick([20, 30, 40, 50, 60, 80, 100]) * 1000;
      const cutPct = rng.pick([20, 25, 30, 40, 50]);
      const cutTonnes = Math.round((cutPct / 100) * tonnes);
      const rate = rng.pick([45, 50, 60, 80]);
      const annualSave = cutTonnes * rate;
      const paybackYears = rng.int(2, 8);
      const upfront = annualSave * paybackYears;
      return {
        prompt: `A manufacturing plant in ${dist}, Singapore emits **${tonnes.toLocaleString("en-US")} tonnes of CO₂/year**. Installing heat-recovery chillers and solar costs **S$${upfront.toLocaleString("en-US")}** and cuts emissions by **${cutPct}%**. At a carbon tax of **S$${rate}/tonne**, how many **years** of carbon tax savings alone pay back the upgrade?`,
        answer: { type: "number", value: paybackYears, display: `${paybackYears} years` },
        hint: `Find annual tonnes cut (${cutPct}% of ${tonnes}), multiply by S$${rate}/t to get annual S$ saved, then divide S$${upfront} by annual savings.`,
        solution: [
          `CO₂ avoided = {{${cutPct} / 100 * ${tonnes} = ${cutTonnes}}} tonnes/year.`,
          `Annual carbon tax saved = {{${cutTonnes} * ${rate} = ${annualSave}}} S$/year.`,
          `Payback period = {{${upfront} / ${annualSave} = ${paybackYears}}} years.`,
        ],
      };
    },
  },
];
