import type { Drill, Rng } from "./types.ts";

const BASINS = [
  "Japan Trench",
  "Sanriku Basin",
  "Sendai Shelf",
  "Miyako Bay",
  "Kuril Trench",
  "Izu-Bonin Trench",
  "Nankai Trough",
  "Kamaishi Offshore",
] as const;

const TOWNS = [
  "Miyako",
  "Kamaishi",
  "Ofunato",
  "Minamisanriku",
  "Rikuzentakata",
  "Ishinomaki",
  "Sendai Coast",
  "Kesennuma",
] as const;

function clean1(tenths: number): number {
  return Number((tenths / 10).toFixed(1));
}

export const drills: Drill[] = [
  {
    id: "tsunamis-japan-2011.tsunami-speed-shoaling",
    topicId: "tsunamis-japan-2011",
    title: "Tsunami Wave Speed, Travel Time & Shoaling",
    level: 1,
    guideRef: "tsunami-causes-shoaling",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const basin = rng.pick(BASINS);
      const buoy = `DART-${rng.int(10, 99)}`;

      if (tier === 1) {
        const vMs = rng.pick([
          10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
          210, 220, 230, 240, 250,
        ]);
        const depth = (vMs * vMs) / 10;
        return {
          prompt: `Buoy **${buoy}** in the ${basin} sits in ocean water **${depth} m** deep. Using {{v = sqrt(10 * d)}}, calculate the tsunami wave speed in **m/s**.`,
          answer: {
            type: "number",
            value: vMs,
            display: `${vMs} m/s`,
          },
          traps: [
            {
              spec: { type: "number", value: depth * 10 },
              feedback:
                "You multiplied 10 × d — remember to take the **square root** to find the speed in m/s!",
            },
          ],
          hint: `First compute 10 × ${depth} = ${depth * 10}, then take its square root.`,
          solution: [
            `Substitute d = ${depth} m: v = {{sqrt(10 * ${depth})}} = {{sqrt(${depth * 10})}} = **${vMs} m/s**.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          const vMs = rng.pick([
            10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100, 120, 140, 150, 160, 180, 200, 220, 250,
          ]);
          const depth = Math.round((vMs * vMs) / 10);
          const vKmh = Math.round(vMs * 3.6);
          return {
            prompt: `At station **${buoy}** (${basin}), water depth is **${depth} m**. Using {{v = sqrt(10 * d)}}, find the tsunami speed in **km/h** (multiply m/s by 3.6).`,
            answer: {
              type: "number",
              value: vKmh,
              display: `${vKmh} km/h`,
            },
            traps: [
              {
                spec: { type: "number", value: vMs },
                feedback: `${vMs} is the speed in **m/s** — now multiply by 3.6 to convert to **km/h**!`,
              },
            ],
            hint: `First find v in m/s = {{sqrt(${depth * 10})}} = ${vMs} m/s, then compute ${vMs} × 3.6.`,
            solution: [
              `Speed in m/s = {{sqrt(10 * ${depth})}} = ${vMs} m/s.`,
              `Convert to km/h: ${vMs} × 3.6 = **${vKmh} km/h**.`,
            ],
          };
        }

        // Exact integer arrival time in minutes
        const speedSet = rng.pick([
          { v: 360, dists: [60, 90, 120, 150, 180, 210, 240, 270, 300] },
          { v: 480, dists: [80, 120, 160, 200, 240, 280, 320, 360] },
          { v: 600, dists: [50, 100, 150, 200, 250, 300, 350, 400] },
          { v: 720, dists: [60, 120, 180, 240, 300, 360, 420, 480] },
          { v: 540, dists: [90, 180, 270, 360, 450] },
        ]);
        const dist = rng.pick(speedSet.dists);
        const mins = Math.round((dist / speedSet.v) * 60);
        return {
          prompt: `A subduction earthquake near **${basin}** (${buoy}) generates a tsunami moving at **${speedSet.v} km/h** toward a harbour **${dist} km** away. How many **minutes** until the first wave reaches shore?`,
          answer: {
            type: "number",
            value: mins,
            display: `${mins} minutes`,
          },
          hint: `Time in hours = ${dist} ÷ ${speedSet.v}; multiply by 60 to convert to minutes.`,
          solution: [
            `Time (hours) = {{${dist} / ${speedSet.v}}} hr.`,
            `Time (minutes) = {{${dist} / ${speedSet.v}}} × 60 = **${mins} minutes**.`,
          ],
        };
      }

      // Tier 3: Coastal wavelength compression OR 2-leg travel time
      if (rng.bool()) {
        const factor = rng.pick([4, 5, 6, 8, 9, 10, 12]);
        const vCoast = rng.pick([40, 50, 60, 70, 80, 90]);
        const vDeep = vCoast * factor;
        const lCoast = rng.int(13, 28);
        const lDeep = lCoast * factor;
        return {
          prompt: `Entering the shallow **${basin}** shelf (${buoy}), a tsunami slows from **${vDeep} km/h** offshore to **${vCoast} km/h** near shore. If its deep-ocean wavelength was **${lDeep} km**, what is its compressed coastal wavelength in **km**?`,
          answer: {
            type: "number",
            value: lCoast,
            display: `${lCoast} km`,
          },
          traps: [
            {
              spec: { type: "number", value: factor },
              feedback: `${factor} is the slowdown factor — now divide the original ${lDeep} km wavelength by ${factor}.`,
            },
          ],
          hint: `Find the slowdown ratio (${vDeep} ÷ ${vCoast}), then divide the ${lDeep} km wavelength by that ratio.`,
          solution: [
            `Slowdown ratio = {{${vDeep} / ${vCoast}}} = ${factor} times slower.`,
            `Compressed coastal wavelength = {{${lDeep} / ${factor}}} = **${lCoast} km** (forcing wave height upward!).`,
          ],
        };
      }

      // Two-leg journey (deep 4000m = 720 km/h, shelf 250m = 180 km/h or 1000m = 360 km/h)
      const deepMins = rng.pick([10, 15, 20, 25, 30]);
      const deepDist = Math.round((720 * deepMins) / 60);
      const shelfOpt = rng.bool()
        ? { depth: 250, vMs: 50, vKmh: 180, minsList: [10, 15, 20, 25, 30] }
        : { depth: 1000, vMs: 100, vKmh: 360, minsList: [5, 10, 15, 20, 25] };
      const shelfMins = rng.pick(shelfOpt.minsList);
      const shelfDist = Math.round((shelfOpt.vKmh * shelfMins) / 60);
      const totalMins = deepMins + shelfMins;
      return {
        prompt: `Off **${basin}** (${buoy}), a tsunami crosses **${deepDist} km** of deep ocean (**4,000 m** deep) and then **${shelfDist} km** of shallow shelf (**${shelfOpt.depth} m** deep). Using {{v = sqrt(10 * d)}} (and ×3.6 for km/h), calculate the **total arrival time in minutes**.`,
        answer: {
          type: "number",
          value: totalMins,
          display: `${totalMins} minutes`,
        },
        traps: [
          {
            spec: { type: "number", value: deepMins },
            feedback: `${deepMins} minutes is only the deep-ocean leg — add the ${shelfMins}-minute shallow-shelf leg too!`,
          },
        ],
        hint: `Deep speed (4,000 m) = 200 m/s = 720 km/h. Shelf speed (${shelfOpt.depth} m) = ${shelfOpt.vMs} m/s = ${shelfOpt.vKmh} km/h. Add both leg times in minutes.`,
        solution: [
          `Deep leg: v₁ = 200 m/s = 720 km/h → t₁ = {{${deepDist} / 720}} × 60 = ${deepMins} min.`,
          `Shelf leg: v₂ = ${shelfOpt.vMs} m/s = ${shelfOpt.vKmh} km/h → t₂ = {{${shelfDist} / ${shelfOpt.vKmh}}} × 60 = ${shelfMins} min.`,
          `Total arrival time = ${deepMins} + ${shelfMins} = **${totalMins} minutes**.`,
        ],
      };
    },
  },

  {
    id: "tsunamis-japan-2011.japan-2011-impacts-data",
    topicId: "tsunamis-japan-2011",
    title: "Japan 2011 Impacts: Primary/Secondary & Overtopping",
    level: 2,
    guideRef: "japan-2011-impacts",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const town = rng.pick(TOWNS);

      if (tier === 1) {
        const idx = rng.int(0, 5);
        if (idx === 0) {
          const h = rng.int(14, 39);
          const homes = rng.int(4, 38) * 100;
          return {
            prompt: `Japan 2011 report (**${town}**): a **${h} m** tsunami wave overtops the seawall and flattens **${homes} coastal buildings**. Is this a **primary** or **secondary** impact?`,
            answer: { type: "text", accept: ["primary", "primary impact"], display: "primary" },
            hint: "Destruction caused directly by the earthquake shaking or incoming tsunami surge is primary.",
            solution: [
              "Coastal buildings flattened directly by the tsunami surge are a **primary** impact.",
            ],
          };
        }
        if (idx === 1) {
          const evac = rng.int(11, 18) * 10000;
          const km = rng.pick([20, 25, 30]);
          return {
            prompt: `Japan 2011 report (**Fukushima / ${town}**): flooded backup generators trigger nuclear meltdowns, forcing **${evac.toLocaleString("en-US")} residents** out of a **${km} km** radiation exclusion zone. Is this a **primary** or **secondary** impact?`,
            answer: { type: "text", accept: ["secondary", "secondary impact"], display: "secondary" },
            hint: "Nuclear meltdowns and radiation evacuations were knock-on disasters triggered after tsunami water flooded cooling power.",
            solution: [
              "Fukushima nuclear meltdowns and radiation evacuations are **secondary** impacts.",
            ],
          };
        }
        if (idx === 2) {
          const kmInland = rng.int(4, 10);
          return {
            prompt: `Japan 2011 report (**${town} / Sendai Plain**): seawater surges **${kmInland} km inland**, immediately submerging coastal runways, bridges, and fishing boats. Is this a **primary** or **secondary** impact?`,
            answer: { type: "text", accept: ["primary", "primary impact"], display: "primary" },
            hint: "Direct inundation by tsunami waves is an immediate primary physical impact.",
            solution: [
              "Direct tsunami inundation of coastal towns and runways is a **primary** impact.",
            ],
          };
        }
        if (idx === 3) {
          const days = rng.int(5, 21);
          const plants = rng.int(4, 16);
          return {
            prompt: `Japan 2011 report (linked to **${town}** port): parts shortages from flooded Tōhoku factories halt **${plants} overseas car assembly plants** for **${days} days**. Is this a **primary** or **secondary** impact?`,
            answer: { type: "text", accept: ["secondary", "secondary impact"], display: "secondary" },
            hint: "Global supply-chain shutdowns happen as knock-on economic consequences afterwards.",
            solution: [
              "Global manufacturing and supply-chain shutdowns are **secondary** economic impacts.",
            ],
          };
        }
        if (idx === 4) {
          const people = rng.int(15, 48) * 10000;
          const temp = rng.int(1, 7);
          return {
            prompt: `Japan 2011 report (**${town} prefecture**): **${people.toLocaleString("en-US")} displaced survivors** endure **−${temp} °C snowstorms** in unheated shelters after power lines fail. Is this a **primary** or **secondary** impact?`,
            answer: { type: "text", accept: ["secondary", "secondary impact"], display: "secondary" },
            hint: "Cold-weather shelter hardship and power outages follow on after the initial impact.",
            solution: [
              "Displacement in freezing winter shelters without electricity or running water is a **secondary** impact.",
            ],
          };
        }
        const subCm = rng.int(55, 115);
        return {
          prompt: `Japan 2011 report (**${town}**): megathrust fault rupture causes the shoreline itself to subside (sink) permanently by **${subCm} cm**. Is coastal subsidence a **primary** or **secondary** impact?`,
          answer: { type: "text", accept: ["primary", "primary impact"], display: "primary" },
          hint: "Ground sinking directly caused by the tectonic fault movement is a primary effect.",
          solution: [
            "Tectonic coastal subsidence occurring directly during the M9.0 fault slip is a **primary** impact.",
          ],
        };
      }

      if (tier === 2) {
        // Seawall overtopping with tectonic subsidence (exact 0.1 m arithmetic via integer tenths!)
        const wall10 = rng.int(55, 110); // 5.5 to 11.0 m
        const sub10 = rng.int(4, 12); // 0.4 to 1.2 m
        const eff10 = wall10 - sub10;
        const extra10 = rng.int(25, 140); // 2.5 to 14.0 m overtopping
        const wave10 = eff10 + extra10;
        const wall = clean1(wall10);
        const sub = clean1(sub10);
        const eff = clean1(eff10);
        const wave = clean1(wave10);
        const over = clean1(extra10);
        const naiveOver = clean1(wave10 - wall10);
        return {
          prompt: `At **${town}**, a **${wall} m** seawall sank by **${sub} m** during tectonic subsidence right before a **${wave} m** tsunami arrived. By how many **metres** did the wave overtop the lowered seawall?`,
          answer: {
            type: "number",
            value: over,
            display: `${over} m`,
          },
          traps: [
            {
              spec: { type: "number", value: naiveOver },
              feedback: `${naiveOver} m forgets the ${sub} m subsidence! First lower the seawall to ${eff} m, then subtract from ${wave} m.`,
            },
          ],
          hint: `First find the lowered seawall height: ${wall} − ${sub} = ${eff} m. Then subtract ${eff} from ${wave}.`,
          solution: [
            `Effective seawall height after subsidence = ${wall} − ${sub} = ${eff} m.`,
            `Overtopping depth = ${wave} − ${eff} = **${over} m**.`,
          ],
        };
      }

      // Tier 3: Percentage excess over seawall OR drowning count
      if (rng.bool()) {
        const wall = rng.pick([5, 6, 8, 10, 12]);
        const pct = rng.pick([25, 40, 50, 60, 75, 80, 100, 120, 150, 200]);
        // Only keep pairs where wall * pct is divisible by 100 cleanly
        const cleanWall = (wall * pct) % 100 === 0 ? wall : 10;
        const cleanExcess = (cleanWall * pct) / 100;
        const wave = cleanWall + cleanExcess;
        return {
          prompt: `At **${town}**, a **${wave} m** tsunami overtopped an existing **${cleanWall} m** coastal seawall. By what **percentage** did the wave height exceed the seawall height?`,
          answer: {
            type: "number",
            value: pct,
            display: `${pct}%`,
          },
          traps: [
            {
              spec: { type: "number", value: pct + 100 },
              feedback: `${pct + 100}% is wave ÷ wall × 100 — subtract 100% to get the percentage **excess** above the wall.`,
            },
          ],
          hint: `Excess = ${wave} − ${cleanWall} = ${cleanExcess} m. Compute (${cleanExcess} ÷ ${cleanWall}) × 100.`,
          solution: [
            `Excess height = ${wave} − ${cleanWall} = ${cleanExcess} m.`,
            `Percentage excess = {{${cleanExcess} / ${cleanWall}}} × 100 = **${pct}%**.`,
          ],
        };
      }

      const totalDeaths = rng.pick([500, 800, 1000, 1500, 2000, 2500, 4000, 5000]);
      const drownPct = rng.pick([88, 90, 92, 94, 95, 96]);
      const drownDeaths = Math.round((totalDeaths * drownPct) / 100);
      return {
        prompt: `In coastal district **${town}**, **${totalDeaths} fatalities** were recorded during the 2011 disaster, with **${drownPct}%** caused by tsunami drowning rather than building collapse. How many people died by drowning?`,
        answer: {
          type: "number",
          value: drownDeaths,
          display: `${drownDeaths}`,
        },
        hint: `Compute ${drownPct}% of ${totalDeaths}: (${drownPct} ÷ 100) × ${totalDeaths}.`,
        solution: [
          `Drowning fatalities = {{${drownPct} / 100}} × ${totalDeaths} = **${drownDeaths}**.`,
        ],
      };
    },
  },

  {
    id: "tsunamis-japan-2011.tsunami-responses-timing",
    topicId: "tsunamis-japan-2011",
    title: "Tsunami Responses, P-Wave Lead Time & Seawall Upgrades",
    level: 2,
    guideRef: "japan-2011-responses",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const town = rng.pick(TOWNS);

      if (tier === 1) {
        const mode = rng.int(0, 5);
        if (mode === 0) {
          const trains = rng.int(12, 34);
          return {
            prompt: `Japan response (**${town} corridor**): P-wave early-warning sensors automatically brake **${trains} Shinkansen trains** safely within seconds. Is this an **immediate** or **long-term** response?`,
            answer: { type: "text", accept: ["immediate", "immediate response"], display: "immediate" },
            hint: "Actions taken in seconds to weeks to save lives during/right after the event are immediate.",
            solution: [
              "Automatic P-wave braking happens within seconds to prevent derailments → **immediate** response.",
            ],
          };
        }
        if (mode === 1) {
          const wallM = rng.int(12, 15);
          const km = rng.int(8, 45);
          return {
            prompt: `Japan response (**${town}**): engineers spend five years building **${km} km** of reinforced **${wallM} m** concrete seawalls and elevated coastal roads. Is this an **immediate** or **long-term** response?`,
            answer: {
              type: "text",
              accept: ["long-term", "long term", "long-term response", "long term response"],
              display: "long-term",
            },
            hint: "Multi-year coastal rebuilding to cut future disaster risk is a long-term response.",
            solution: [
              "Constructing taller reinforced seawalls over several years → **long-term** response.",
            ],
          };
        }
        if (mode === 2) {
          const troops = rng.int(20, 100) * 1000;
          const shelters = rng.int(200, 2200);
          return {
            prompt: `Japan response (**${town} region**): **${troops.toLocaleString("en-US")} SDF rescue troops** open **${shelters} emergency shelters** supplying food, water, and blankets within 48 hours. Is this an **immediate** or **long-term** response?`,
            answer: { type: "text", accept: ["immediate", "immediate response"], display: "immediate" },
            hint: "Search, rescue, and emergency shelters in the first days are immediate responses.",
            solution: [
              "Deploying SDF rescue teams and emergency relief shelters within 48 hours → **immediate** response.",
            ],
          };
        }
        if (mode === 3) {
          const elev = rng.int(22, 48);
          const homes = rng.int(3, 25) * 100;
          return {
            prompt: `Japan response (**${town}**): planners permanently relocate **${homes} residential homes** onto hillside terraces **${elev} m** above sea level, turning the old low shore into a memorial park. Is this an **immediate** or **long-term** response?`,
            answer: {
              type: "text",
              accept: ["long-term", "long term", "long-term response", "long term response"],
              display: "long-term",
            },
            hint: "Permanent land-use zoning and town relocation take months to years.",
            solution: [
              "Relocating neighbourhoods uphill and rezoning low red zones → **long-term** response.",
            ],
          };
        }
        if (mode === 4) {
          const sensors = rng.int(120, 160);
          return {
            prompt: `Japan response (**offshore ${town}**): laying 5,500 km of undersea fibre-optic cable linking **${sensors} S-net seafloor pressure gauges** along the Japan Trench. Is this an **immediate** or **long-term** response?`,
            answer: {
              type: "text",
              accept: ["long-term", "long term", "long-term response", "long term response"],
              display: "long-term",
            },
            hint: "Upgrading national undersea forecasting infrastructure happens over years after the event.",
            solution: [
              "Building the S-net cabled seafloor monitoring network → **long-term** response.",
            ],
          };
        }
        const secs = rng.int(15, 55);
        return {
          prompt: `Japan response (**${town}**): JMA pushes automatic SMS cell-phone alarms and harbour sirens giving residents **${secs} seconds** before S-waves hit. Is this an **immediate** or **long-term** response?`,
          answer: { type: "text", accept: ["immediate", "immediate response"], display: "immediate" },
          hint: "Live alerts delivered in seconds to save lives are immediate responses.",
          solution: [
            "Real-time SMS alarms and harbour sirens triggered seconds after rupture → **immediate** response.",
          ],
        };
      }

      if (tier === 2) {
        // Exact integer P-wave vs S-wave lead time (seconds)
        const pair = rng.pick([
          { vP: 6, vS: 3, mult: 6 }, // tS - tP = d/3 - d/6 = d/6
          { vP: 8, vS: 4, mult: 8 }, // tS - tP = d/4 - d/8 = d/8
          { vP: 7, vS: 3.5, mult: 7 }, // tS - tP = d/3.5 - d/7 = d/7
          { vP: 6, vS: 4, mult: 12 }, // tS - tP = d/4 - d/6 = d/12
        ]);
        const k = rng.int(6, 26);
        const dist = pair.mult * k;
        const tP = Math.round(dist / pair.vP);
        const tS = Math.round(dist / pair.vS);
        const lead = tS - tP;
        return {
          prompt: `An offshore fault **${dist} km** from **${town}** sends P-waves at **${pair.vP} km/s** and destructive S-waves at **${pair.vS} km/s**. How many **seconds** of early warning does the P-wave give before S-waves arrive?`,
          answer: {
            type: "number",
            value: lead,
            display: `${lead} seconds`,
          },
          traps: [
            {
              spec: { type: "number", value: tS },
              feedback: `${tS} s is the total S-wave arrival time — subtract the P-wave travel time (${tP} s) to find the warning lead time.`,
            },
          ],
          hint: `Compute P-wave time (${dist} ÷ ${pair.vP}) and S-wave time (${dist} ÷ ${pair.vS}), then subtract.`,
          solution: [
            `P-wave arrival = {{${dist} / ${pair.vP}}} = ${tP} s; S-wave arrival = {{${dist} / ${pair.vS}}} = ${tS} s.`,
            `Warning lead time = ${tS} − ${tP} = **${lead} seconds**.`,
          ],
        };
      }

      // Tier 3: Seawall upgrade % increase OR uphill evacuation safety margin
      if (rng.bool()) {
        const upgrade = rng.pick([
          { oldH: 4, newH: 10, pct: 150 },
          { oldH: 5, newH: 10, pct: 100 },
          { oldH: 5, newH: 12, pct: 140 },
          { oldH: 5, newH: 13, pct: 160 },
          { oldH: 5, newH: 14, pct: 180 },
          { oldH: 6, newH: 9, pct: 50 },
          { oldH: 6, newH: 12, pct: 100 },
          { oldH: 6, newH: 15, pct: 150 },
          { oldH: 8, newH: 10, pct: 25 },
          { oldH: 8, newH: 12, pct: 50 },
          { oldH: 8, newH: 14, pct: 75 },
          { oldH: 10, newH: 12, pct: 20 },
          { oldH: 10, newH: 13, pct: 30 },
          { oldH: 10, newH: 14, pct: 40 },
          { oldH: 10, newH: 15, pct: 50 },
        ]);
        const costM = rng.int(18, 95);
        return {
          prompt: `In long-term rebuilding at **${town}** (budget $${costM}M), engineers upgrade the coastal seawall from **${upgrade.oldH} m** to **${upgrade.newH} m**. Calculate the **percentage increase** in seawall height.`,
          answer: {
            type: "number",
            value: upgrade.pct,
            display: `${upgrade.pct}%`,
          },
          traps: [
            {
              spec: { type: "number", value: upgrade.pct + 100 },
              feedback: `${upgrade.pct + 100}% is new ÷ old × 100 — subtract 100% for the percentage increase.`,
            },
          ],
          hint: `Increase = ${upgrade.newH} − ${upgrade.oldH} = ${upgrade.newH - upgrade.oldH} m. Divide by ${upgrade.oldH} and multiply by 100.`,
          solution: [
            `Height increase = ${upgrade.newH} − ${upgrade.oldH} = ${upgrade.newH - upgrade.oldH} m.`,
            `Percentage increase = {{${upgrade.newH - upgrade.oldH} / ${upgrade.oldH}}} × 100 = **${upgrade.pct}%**.`,
          ],
        };
      }

      const arrivalMins = rng.int(18, 36);
      const walkSpeedMPerMin = rng.pick([50, 60, 75, 80, 100]);
      const rawWalk = rng.int(6, arrivalMins - 4);
      const walkMins = rawWalk * 2 === arrivalMins ? rawWalk - 1 : rawWalk;
      const distM = walkSpeedMPerMin * walkMins;
      const margin = arrivalMins - walkMins;
      return {
        prompt: `At **${town}**, sirens warn of a tsunami arriving in **${arrivalMins} minutes**. Pupils walk **${distM} m** uphill to a hillside shelter at **${walkSpeedMPerMin} m/min**. How many **minutes to spare** do they have when they reach safety?`,
        answer: {
          type: "number",
          value: margin,
          display: `${margin} minutes`,
        },
        traps: [
          {
            spec: { type: "number", value: walkMins },
            feedback: `${walkMins} minutes is the pupils' walking time — now subtract ${walkMins} from the ${arrivalMins}-minute wave arrival time.`,
          },
        ],
        hint: `Walking time = ${distM} ÷ ${walkSpeedMPerMin} minutes. Subtract that from ${arrivalMins} minutes.`,
        solution: [
          `Walking time = {{${distM} / ${walkSpeedMPerMin}}} = ${walkMins} minutes.`,
          `Safety margin = ${arrivalMins} − ${walkMins} = **${margin} minutes** to spare.`,
        ],
      };
    },
  },

  {
    id: "tsunamis-japan-2011.hic-vs-lic-comparator",
    topicId: "tsunamis-japan-2011",
    title: "HIC (Japan) vs LIC (Nepal) Tectonic Impact Comparator",
    level: 3,
    guideRef: "hic-vs-lic-comparison",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const code = `Country-${rng.pick(["A", "B", "C", "D", "E", "F", "G", "H"])}${rng.int(1, 9)}`;

      if (tier === 1) {
        const isHic = rng.bool();
        if (isHic) {
          const gdpCap = rng.int(34, 62) * 1000;
          const lossB = rng.int(80, 260);
          const pctGdp = rng.int(2, 5);
          const feature = rng.pick([
            "strict enforced aseismic building codes and P-wave rail brakes",
            "widespread property insurance and self-funded highway rebuilding",
            "rapid domestic rescue fleets and abundant emergency hospitals",
          ]);
          return {
            prompt: `Profile **${code}**: GDP per capita **$${gdpCap.toLocaleString("en-US")}**, tectonic loss **$${lossB}B** (**${pctGdp}% of GDP**), with ${feature}. Does this profile represent an **HIC** or an **LIC**?`,
            answer: { type: "text", accept: ["hic", "high income country", "high-income country"], display: "HIC" },
            hint: "High absolute dollar losses yet low % of GDP lost, plus strict codes and insurance, characterise an HIC (like Japan).",
            solution: [
              `High GDP/capita ($${gdpCap.toLocaleString("en-US")}), huge absolute damage ($${lossB}B) but modest ${pctGdp}% GDP impact, and strict codes → **HIC**.`,
            ],
          };
        }
        const gdpCap = rng.int(55, 135) * 10;
        const lossB = rng.int(3, 12);
        const pctGdp = rng.int(18, 34);
        const feature = rng.pick([
          "widespread collapse of unreinforced brick and mud-mortar homes",
          "heavy dependence on international NGOs and foreign reconstruction aid",
          "scarce rural doctors and mountain landslides cutting rescue roads",
        ]);
        return {
          prompt: `Profile **${code}**: GDP per capita **$${gdpCap.toLocaleString("en-US")}**, tectonic loss **$${lossB}B** (**${pctGdp}% of GDP**), with ${feature}. Does this profile represent an **HIC** or an **LIC**?`,
          answer: { type: "text", accept: ["lic", "low income country", "low-income country"], display: "LIC" },
          hint: "Lower absolute dollar loss yet crippling % of GDP lost (18–34%), plus unreinforced housing and aid dependence, characterise an LIC (like Nepal).",
          solution: [
            `Low GDP/capita ($${gdpCap.toLocaleString("en-US")}), severe ${pctGdp}% GDP shock, and unreinforced buildings/aid dependence → **LIC**.`,
          ],
        };
      }

      if (tier === 2) {
        // Exact integer % of GDP lost
        const isLicCase = rng.bool();
        const gdpB = isLicCase
          ? rng.pick([20, 25, 40, 50, 80, 100])
          : rng.pick([1000, 2000, 2500, 4000, 5000, 6000]);
        const pct = isLicCase
          ? rng.pick([15, 20, 24, 25, 30, 32, 35, 40])
          : rng.pick([2, 3, 4, 5, 6, 8]);
        // Ensure lossB is a clean integer
        const cleanGdp = (gdpB * pct) % 100 === 0 ? gdpB : isLicCase ? 25 : 2000;
        const cleanPct = (cleanGdp * pct) % 100 === 0 ? pct : isLicCase ? 24 : 4;
        const lossB = (cleanGdp * cleanPct) / 100;
        return {
          prompt: `Disaster audit (**${code}**, ${isLicCase ? "LIC" : "HIC"}): annual GDP is **$${cleanGdp} billion** and tectonic damage totals **$${lossB} billion**. Calculate the economic damage as a **percentage of annual GDP**.`,
          answer: {
            type: "number",
            value: cleanPct,
            display: `${cleanPct}%`,
          },
          hint: `Compute (${lossB} ÷ ${cleanGdp}) × 100.`,
          solution: [
            `Economic burden = {{${lossB} / ${cleanGdp}}} × 100 = **${cleanPct}%** of annual GDP.`,
          ],
        };
      }

      // Tier 3: Ratio of LIC % GDP burden vs HIC % GDP burden OR logarithmic energy multiplier
      if (rng.bool()) {
        const hicPct = rng.pick([2, 4, 5]);
        const mult = rng.pick([4, 5, 6, 7, 8]);
        const licPct = hicPct * mult;
        const hicGdp = rng.pick([2000, 4000, 5000]);
        const hicLoss = Math.round((hicGdp * hicPct) / 100);
        const licGdp = rng.pick([20, 25, 50]);
        const exactLicGdp = (licGdp * licPct) % 100 === 0 ? licGdp : 50;
        const exactLicLoss = (exactLicGdp * licPct) / 100;
        return {
          prompt: `Compare two disasters (**${code}**): **HIC-1** (GDP $${hicGdp}B) loses **$${hicLoss}B**, while **LIC-2** (GDP $${exactLicGdp}B) loses **$${exactLicLoss}B**. How many times **larger** is LIC-2's **% of GDP burden** than HIC-1's?`,
          answer: {
            type: "number",
            value: mult,
            display: `${mult}`,
          },
          hint: `Find HIC-1's % GDP (${hicLoss}÷${hicGdp}×100) and LIC-2's % GDP (${exactLicLoss}÷${exactLicGdp}×100), then divide LIC % by HIC %.`,
          solution: [
            `HIC-1 burden = {{${hicLoss} / ${hicGdp}}} × 100 = ${hicPct}% of GDP.`,
            `LIC-2 burden = {{${exactLicLoss} / ${exactLicGdp}}} × 100 = ${licPct}% of GDP.`,
            `Relative burden ratio = {{${licPct} / ${hicPct}}} = **${mult} times** deeper in LIC-2.`,
          ],
        };
      }

      // Logarithmic energy comparison using +1.0 = 32× and +0.2 = 2×
      const gap = rng.pick([
        { diff: 0.4, ratio: 4, explain: "2 × 2" },
        { diff: 0.6, ratio: 8, explain: "2 × 2 × 2" },
        { diff: 0.8, ratio: 16, explain: "2 × 2 × 2 × 2" },
        { diff: 1.0, ratio: 32, explain: "32" },
        { diff: 1.2, ratio: 64, explain: "32 × 2" },
        { diff: 1.4, ratio: 128, explain: "32 × 4" },
        { diff: 1.6, ratio: 256, explain: "32 × 8" },
        { diff: 2.0, ratio: 1024, explain: "32 × 32" },
      ]);
      const baseTenths = rng.int(68, 78);
      const hiTenths = baseTenths + Math.round(gap.diff * 10);
      const mLo = clean1(baseTenths);
      const mHi = clean1(hiTenths);
      return {
        prompt: `Seismic check (**${code}**): using the rule that **+1.0 magnitude = 32× energy** and **+0.2 magnitude = 2× energy**, approximately how many times more seismic energy does an **M${mHi}** earthquake release than an **M${mLo}** earthquake?`,
        answer: {
          type: "number",
          value: gap.ratio,
          display: `${gap.ratio}`,
        },
        hint: `Magnitude difference = ${mHi} − ${mLo} = +${gap.diff}. Multiply (never add!) factors of 32 for each +1.0 and 2 for each +0.2.`,
        solution: [
          `Magnitude gap = ${mHi} − ${mLo} = +${gap.diff}.`,
          `Energy multiplier = ${gap.explain} = **${gap.ratio} times** more energy.`,
        ],
      };
    },
  },
];
