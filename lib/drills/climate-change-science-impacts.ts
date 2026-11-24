import type { Drill, Rng } from "./types.ts";

function roundTo(n: number, dp: number): number {
  const f = 10 ** dp;
  return Math.round((n + Number.EPSILON) * f) / f;
}

const REGIONS = [
  "Indonesia", "Brazil", "Australia", "Germany", "India", "Kenya",
  "Canada", "Vietnam", "Philippines", "Norway", "Chile", "Malaysia",
];

const CITIES = [
  "Singapore", "Malé", "Dhaka", "Bamako", "Jakarta", "Lagos",
  "Sydney", "Tokyo", "London", "Miami", "Rotterdam", "Ho Chi Minh City",
];

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (level 1): Greenhouse Gas, Radiation & Cause Sorter
  // =========================================================================
  {
    id: "climate-change-science-impacts.ghg-radiation-sorter",
    topicId: "climate-change-science-impacts",
    title: "Greenhouse Gas, Radiation & Cause Sorter",
    level: 1,
    guideRef: "greenhouse-effect-causes",
    generate(rng: Rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        const region = rng.pick(REGIONS);
        const year = rng.int(1995, 2025);
        if (mode === 0) {
          // Natural vs Human driver
          const cases: Array<{ desc: string; ans: "natural" | "human"; why: string }> = [
            {
              desc: `A ${rng.int(26, 100)},000-year shift in Earth's orbital tilt recorded in sediment cores near ${region}`,
              ans: "natural",
              why: "Orbital eccentricity, tilt and wobble are Milankovitch cycles — a natural climate driver operating over millennia.",
            },
            {
              desc: `An explosive volcanic eruption near ${region} in ${year} blasting SO₂ into the stratosphere`,
              ans: "natural",
              why: "Volcanic eruptions are a natural climate driver (injecting reflective sulphate aerosols that briefly cool Earth).",
            },
            {
              desc: `An 11-year sunspot peak observed by solar telescopes in ${year} slightly altering solar output`,
              ans: "natural",
              why: "Sunspot cycles are a natural variation in solar irradiance (far too small to explain modern warming).",
            },
            {
              desc: `A coal-fired power plant in ${region} burning ${rng.int(2, 9)} million tonnes of fuel in ${year}`,
              ans: "human",
              why: "Burning coal, oil and natural gas is the largest human (anthropogenic) source of CO₂.",
            },
            {
              desc: `Clearing ${rng.int(12, 85)} thousand hectares of rainforest in ${region} during ${year} for ranching`,
              ans: "human",
              why: "Deforestation is a human driver that both releases stored carbon and removes a living carbon sink.",
            },
            {
              desc: `Expanding irrigated rice paddies and cattle herds across ${region} in ${year}`,
              ans: "human",
              why: "Livestock digestion and flooded rice paddies are major human sources of methane (CH₄).",
            },
          ];
          const c = rng.pick(cases);
          return {
            prompt: `Classify this climate driver as \`natural\` or \`human\`: ${c.desc}.`,
            answer: { type: "text", accept: [c.ans], display: c.ans },
            hint: "Use M-S-V (Milankovitch, Solar, Volcanoes = natural) vs F-A-D (Fossil fuels, Agriculture, Deforestation = human).",
            solution: [c.why, `Therefore the driver is **${c.ans}**.`],
            traps: [
              {
                spec: { type: "text", accept: [c.ans === "natural" ? "human" : "natural"] },
                feedback: `Look closely at the source: ${c.why}`,
              },
            ],
          };
        }
        if (mode === 1) {
          // Gas identifier: CO2, CH4, N2O
          const gasCases: Array<{ desc: string; ans: string; accept: string[]; why: string }> = [
            {
              desc: `burning coal and natural gas for electricity in ${region} (${year})`,
              ans: "CO2",
              accept: ["co2", "co₂", "carbon dioxide"],
              why: "Fossil-fuel combustion mainly releases carbon dioxide (CO₂).",
            },
            {
              desc: `clearing and burning ${rng.int(10, 90)} km² of tropical peat forest in ${region}`,
              ans: "CO2",
              accept: ["co2", "co₂", "carbon dioxide"],
              why: "Burning wood and peat releases stored carbon as carbon dioxide (CO₂).",
            },
            {
              desc: `digestion by ${rng.int(2, 15)} million cattle and sheep farmed across ${region}`,
              ans: "CH4",
              accept: ["ch4", "ch₄", "methane"],
              why: "Ruminant livestock produce methane (CH₄) during digestion.",
            },
            {
              desc: `anaerobic bacteria in flooded rice paddies across ${region} (${year})`,
              ans: "CH4",
              accept: ["ch4", "ch₄", "methane"],
              why: "Waterlogged rice paddies emit methane (CH₄).",
            },
            {
              desc: `heavy application of synthetic nitrogen fertilisers on farms in ${region} (${year})`,
              ans: "N2O",
              accept: ["n2o", "n₂o", "nitrous oxide"],
              why: "Artificial nitrogen fertilisers release nitrous oxide (N₂O), ~273× stronger than CO₂.",
            },
          ];
          const g = rng.pick(gasCases);
          return {
            prompt: `Which main greenhouse gas is emitted by ${g.desc}? Type \`CO2\`, \`CH4\`, or \`N2O\`.`,
            answer: { type: "text", accept: g.accept, display: g.ans },
            hint: "Fossil fuels & deforestation → CO₂; cattle & rice → CH₄; synthetic fertilisers → N₂O.",
            solution: [g.why, `Answer: **${g.ans}**.`],
          };
        }
        // Short-wave vs Long-wave radiation
        const temp = rng.int(12, 34);
        const city = rng.pick(CITIES);
        const isIncoming = rng.bool();
        return {
          prompt: isIncoming
            ? `Sunlight travels from the Sun to warm rooftops in ${city} to ${temp} °C, passing straight through CO₂. Is this incoming solar energy \`short-wave\` or \`long-wave\` radiation?`
            : `After warming to ${temp} °C, roads in ${city} radiate infrared heat upward toward space, where CO₂ and CH₄ absorb it. Is this outgoing heat \`short-wave\` or \`long-wave\` radiation?`,
          answer: {
            type: "text",
            accept: isIncoming ? ["short-wave", "short wave", "shortwave"] : ["long-wave", "long wave", "longwave"],
            display: isIncoming ? "short-wave" : "long-wave",
          },
          hint: "Remember SW-In, LW-Trap: incoming sunlight is short-wave; outgoing Earth heat is long-wave infrared.",
          solution: [
            isIncoming
              ? "The Sun emits high-energy **short-wave** solar radiation that passes easily through greenhouse gases."
              : "Earth's warm surface emits **long-wave** infrared radiation, which greenhouse gases absorb and re-emit.",
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        const region = rng.pick(REGIONS);
        const year = rng.int(1990, 2025);
        if (mode === 0) {
          // Cooling vs Warming direction
          const dirCases: Array<{ desc: string; ans: "cooling" | "warming"; why: string }> = [
            {
              desc: `A Pinatubo-scale volcano in ${region} (${year}) injects ${rng.int(10, 25)} Mt of SO₂ into the stratosphere, forming reflective sulphate aerosols`,
              ans: "cooling",
              why: "Stratospheric sulphate aerosols scatter incoming sunlight back to space, causing 1–3 years of short-term global cooling.",
            },
            {
              desc: `High-albedo fresh snow covers an extra ${rng.int(5, 20)}% of northern tundra near ${region}, reflecting 85% of sunlight`,
              ans: "cooling",
              why: "Higher surface albedo reflects more solar radiation away from Earth, exerting a cooling effect.",
            },
            {
              desc: `Thawing permafrost in ${region} (${year}) releases ${rng.int(3, 18)} Mt of methane (CH₄) from decaying organic soil`,
              ans: "warming",
              why: "Extra methane strengthens the enhanced greenhouse effect, trapping more outgoing long-wave infrared heat.",
            },
            {
              desc: `Coal power expansion in ${region} (${year}) adds ${rng.int(20, 95)} Mt of CO₂ to the troposphere`,
              ans: "warming",
              why: "Additional CO₂ absorbs and re-emits outgoing long-wave infrared heat, causing global warming.",
            },
            {
              desc: `Loss of bright sea ice exposes ${rng.int(2, 9)} million km² of dark open ocean (albedo 0.08)`,
              ans: "warming",
              why: "Lower albedo absorbs far more incoming short-wave solar radiation, amplifying warming.",
            },
          ];
          const d = rng.pick(dirCases);
          return {
            prompt: `Predict the net short-term global temperature effect — type \`warming\` or \`cooling\`: ${d.desc}.`,
            answer: { type: "text", accept: [d.ans], display: d.ans },
            hint: "Ask: does this reflect incoming sunlight away (cooling) OR absorb more sunlight / trap more outgoing infrared heat (warming)?",
            solution: [d.why, `Net effect: **${d.ans}**.`],
          };
        }
        // Separate Greenhouse Effect vs Ozone Depletion
        const isOzone = rng.bool();
        const city = rng.pick(CITIES);
        const alt = rng.int(18, 28);
        const ppm = rng.int(410, 435);
        return {
          prompt: isOzone
            ? `In ${year}, banned CFC chemicals thin stratospheric O₃ at ${alt} km altitude, allowing extra harmful UV radiation to reach ${city}. Does this describe \`greenhouse\` or \`ozone\`?`
            : `In ${year}, atmospheric CO₂ reaches ${ppm} ppm, trapping extra outgoing long-wave infrared heat above ${city}. Does this describe \`greenhouse\` or \`ozone\`?`,
          answer: {
            type: "text",
            accept: isOzone ? ["ozone", "ozone depletion", "ozone hole"] : ["greenhouse", "enhanced greenhouse", "greenhouse effect"],
            display: isOzone ? "ozone" : "greenhouse",
          },
          hint: "CFCs + UV light = ozone depletion; CO₂/CH₄ + outgoing infrared heat = enhanced greenhouse effect.",
          solution: [
            isOzone
              ? "CFCs thinning stratospheric O₃ and admitting harmful UV light is **ozone** depletion — separate from climate change."
              : "CO₂ trapping outgoing long-wave infrared heat is the enhanced **greenhouse** effect.",
          ],
        };
      }

      // Tier 3: CO2-equivalent emissions calculation (CH4 * 28 + CO2)
      const region = rng.pick(REGIONS);
      const ch4 = rng.int(2, 25);
      const factor = rng.pick([28, 30]);
      const co2 = rng.int(5, 40) * 10;
      const total = ch4 * factor + co2;
      return {
        prompt: `A farming district in ${region} emits **${co2} tonnes of CO₂** and **${ch4} tonnes of methane (CH₄)** in one year. Using a 100-year warming factor where 1 tonne of CH₄ equals **${factor} tonnes of CO₂-equivalent**, calculate the total **CO₂-equivalent** emissions (in tonnes).`,
        answer: { type: "number", value: total, display: `${total}` },
        hint: `Multiply methane tonnes by ${factor}, then add the CO₂ tonnes.`,
        solution: [
          `Methane CO₂-equivalent = {{${ch4} * ${factor} = ${ch4 * factor}}} tonnes.`,
          `Total CO₂-equivalent = {{${ch4 * factor} + ${co2} = ${total}}} tonnes.`,
        ],
        traps: [
          {
            spec: { type: "number", value: ch4 + co2 },
            feedback: `Do not simply add ${ch4} + ${co2}: multiply methane by its warming factor (${factor}) first!`,
          },
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (level 2): CO2 & Sea-Level Percentage-Change Calculator
  // =========================================================================
  {
    id: "climate-change-science-impacts.co2-sealevel-data",
    topicId: "climate-change-science-impacts",
    title: "CO₂ & Sea-Level Data Calculator",
    level: 2,
    guideRef: "evidence-climate-change",
    generate(rng: Rng, tier) {
      if (tier === 1) {
        if (rng.bool()) {
          // Exact integer % rise in CO2 from a clean baseline
          const orig = rng.pick([200, 250, 280, 300, 320]);
          const pctPool = orig === 280 ? [15, 25, 35, 40, 45, 50, 55] : [10, 15, 20, 25, 30, 35, 40, 45, 50];
          const pct = rng.pick(pctPool);
          const next = roundTo(orig * (1 + pct / 100), 1);
          const diff = roundTo(next - orig, 1);
          const year = rng.int(1985, 2026);
          return {
            prompt: `An atmospheric record shows CO₂ rising from **${orig} ppm** (pre-industrial baseline) to **${next} ppm** by ${year}. Calculate the **percentage increase** in CO₂.`,
            answer: { type: "number", value: pct, display: `${pct}%` },
            hint: "Percentage increase = ((New − Original) ÷ Original) × 100.",
            solution: [
              `Absolute increase = {{${next} - ${orig} = ${diff}}} ppm.`,
              `Percentage increase = {{(${diff} / ${orig}) * 100 = ${pct}}}%.`,
            ],
            traps: [
              {
                spec: { type: "number", value: diff },
                feedback: `${diff} ppm is the absolute change — divide by the original ${orig} ppm and multiply by 100.`,
              },
            ],
          };
        }
        // Sea-level rise in cm over N years
        const rate = rng.pick([2, 2.5, 3, 3.5, 4, 4.5, 5]);
        const years = rng.pick([20, 30, 40, 50, 60, 80, 100]);
        const mm = roundTo(rate * years, 1);
        const cm = roundTo(mm / 10, 2);
        const city = rng.pick(CITIES);
        return {
          prompt: `A tide gauge near ${city} records sea level rising at **${rate} mm/year**. At this steady rate, calculate the total sea-level rise in **centimetres (cm)** over **${years} years**.`,
          answer: { type: "number", value: cm, display: `${cm} cm` },
          hint: "Multiply rate (mm/year) × years to get mm, then divide by 10 to convert mm to cm.",
          solution: [
            `Rise in mm = {{${rate} * ${years} = ${mm}}} mm.`,
            `Convert to cm (÷ 10): {{${mm} / 10 = ${cm}}} cm.`,
          ],
          traps: [
            {
              spec: { type: "number", value: mm },
              feedback: `${mm} is in millimetres — remember 10 mm = 1 cm, so divide by 10!`,
            },
          ],
        };
      }

      if (tier === 2) {
        // Accelerating sea-level rise rate percentage increase
        const orig = rng.pick([1.2, 1.4, 1.5, 1.6, 1.8, 2.0]);
        const pct = rng.pick([50, 75, 100, 125, 150, 200, 250]);
        const next = roundTo(orig * (1 + pct / 100), 2);
        const diff = roundTo(next - orig, 2);
        const city = rng.pick(CITIES);
        const decade = rng.pick(["2015–2024", "2010–2020", "2014–2023", "2012–2022"]);
        return {
          prompt: `Near ${city}, satellite altimetry shows sea-level rise accelerated from **${orig} mm/year** in the 20th century to **${next} mm/year** during ${decade}. Calculate the **percentage increase** in the rate.`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          hint: "Find (New rate − Original rate), divide by Original rate, then multiply by 100.",
          solution: [
            `Rate increase = {{${next} - ${orig} = ${diff}}} mm/year.`,
            `Percentage increase = {{(${diff} / ${orig}) * 100 = ${pct}}}%.`,
          ],
          traps: [
            {
              spec: { type: "number", value: pct + 100 },
              feedback: `${pct + 100}% is the new rate AS A PERCENTAGE OF the old rate — subtract 100% for the percentage increase (${pct}%).`,
            },
          ],
        };
      }

      // Tier 3: Speed ratio comparing modern CO2 rate vs natural Ice-Age rate
      const natRise = rng.pick([60, 80, 90, 100]);
      const natYears = natRise * rng.pick([80, 100, 125]);
      // natRate = natRise / natYears = 1/80, 1/100, or 1/125
      const modYears = rng.pick([40, 50, 60]);
      const modRateTenths = rng.int(12, 24); // 1.2 to 2.4 ppm/yr
      const modRate = roundTo(modRateTenths / 10, 1);
      const modRise = roundTo(modRate * modYears, 1);
      const factor = roundTo(modRate * (natYears / natRise), 1);
      const startPpm = rng.int(310, 340);
      const endPpm = roundTo(startPpm + modRise, 1);
      return {
        prompt: `Ice cores show natural post-Ice-Age CO₂ rose by **${natRise} ppm** over **${natYears} years**. Modern records show CO₂ rising from **${startPpm} ppm** to **${endPpm} ppm** in just **${modYears} years**. How many **times faster** is the modern rate (ppm/year) than the natural rate?`,
        answer: { type: "number", value: factor, display: `${factor}` },
        hint: "Compute both rates in ppm/year (Rise ÷ Years), then divide the modern rate by the natural rate.",
        solution: [
          `Natural rate = {{${natRise} / ${natYears} = ${roundTo(natRise / natYears, 4)}}} ppm/year.`,
          `Modern rise = {{${endPpm} - ${startPpm} = ${modRise}}} ppm → Modern rate = {{${modRise} / ${modYears} = ${modRate}}} ppm/year.`,
          `Speed ratio = {{${modRate} / ${roundTo(natRise / natYears, 4)} = ${factor}}} times faster.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (level 2): Albedo, Arctic Amplification & Moisture Lab
  // =========================================================================
  {
    id: "climate-change-science-impacts.albedo-feedback-lab",
    topicId: "climate-change-science-impacts",
    title: "Albedo, Arctic Amplification & Moisture Lab",
    level: 2,
    guideRef: "physical-impacts",
    generate(rng: Rng, tier) {
      if (tier === 1) {
        if (rng.bool()) {
          // Arctic amplification calculation
          const globalRise = roundTo(rng.int(8, 30) / 10, 1); // 0.8 to 3.0
          const amp = rng.pick([2.5, 3, 3.5, 4]);
          const arcticRise = roundTo(globalRise * amp, 2);
          const place = rng.pick(["Svalbard", "Northern Alaska", "Siberia", "Baffin Island", "Northern Greenland", "Yukon"]);
          return {
            prompt: `Under a climate scenario where Earth's global average temperature rises by **+${globalRise} °C**, ${place} warms **${amp} times** faster due to Arctic amplification. Calculate the regional warming in °C.`,
            answer: { type: "number", value: arcticRise, display: `${arcticRise} °C` },
            hint: "Multiply the global temperature rise by the Arctic amplification factor.",
            solution: [
              `Regional Arctic warming = {{${globalRise} * ${amp} = ${arcticRise}}} °C.`,
            ],
          };
        }
        // Simple surface absorption from reflection %
        const surface = rng.pick([
          { name: "fresh Arctic snow", min: 80, max: 90 },
          { name: "melting sea ice", min: 52, max: 74 },
          { name: "tropical rainforest canopy", min: 12, max: 20 },
          { name: "dark open polar seawater", min: 6, max: 14 },
          { name: "bright desert sand", min: 32, max: 44 },
        ]);
        const ref = rng.int(surface.min, surface.max);
        const abs = 100 - ref;
        return {
          prompt: `Satellite sensors measure that a patch of **${surface.name}** reflects **${ref}%** of incoming short-wave solar radiation. What percentage of incoming sunlight does that surface **absorb**?`,
          answer: { type: "number", value: abs, display: `${abs}%` },
          hint: "Total incoming solar radiation is 100%. Absorbed % = 100% − Reflected %.",
          solution: [
            `Absorbed solar energy = {{100 - ${ref} = ${abs}}}%.`,
          ],
          traps: [
            { spec: { type: "number", value: ref }, feedback: `${ref}% is reflected away — subtract from 100% to get the percentage absorbed!` },
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Absorbed energy jump when ice melts to ocean
          const iceRef = rng.int(76, 88);
          const seaRef = rng.int(6, 15);
          const iceAbs = 100 - iceRef;
          const seaAbs = 100 - seaRef;
          const gain = seaAbs - iceAbs;
          const sea = rng.pick(["Beaufort Sea", "Barents Sea", "Laptev Sea", "Chukchi Sea", "Kara Sea"]);
          return {
            prompt: `In the ${sea}, bright sea ice reflects **${iceRef}%** of incoming sunlight, while exposed dark seawater reflects **${seaRef}%**. By how many **percentage points** does solar energy **absorption** increase when the ice melts?`,
            answer: { type: "number", value: gain, display: `${gain}%` },
            hint: "Convert both reflection values to absorption (100 − reflected), then subtract.",
            solution: [
              `Sea ice absorbs {{100 - ${iceRef} = ${iceAbs}}}%; seawater absorbs {{100 - ${seaRef} = ${seaAbs}}}%.`,
              `Increase in absorbed solar energy = {{${seaAbs} - ${iceAbs} = ${gain}}} percentage points.`,
            ],
            traps: [
              { spec: { type: "number", value: seaAbs }, feedback: `${seaAbs}% is total absorption by seawater — subtract the ${iceAbs}% already absorbed by ice.` },
            ],
          };
        }
        // Water vapour moisture capacity (+7% per °C)
        const dT = roundTo(rng.int(10, 45) / 10, 1); // 1.0 to 4.5 °C
        const pct = roundTo(dT * 7, 1);
        const city = rng.pick(CITIES);
        return {
          prompt: `Warm air holds roughly **7%** more water vapour for every **+1 °C** of warming. If air above ${city} warms by **+${dT} °C**, estimate the percentage increase in moisture-holding capacity (linear estimate).`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          hint: "Multiply the temperature rise in °C by 7%.",
          solution: [
            `Estimated moisture capacity increase = {{${dT} * 7 = ${pct}}}%.`,
          ],
        };
      }

      // Tier 3: Weighted grid-cell albedo change
      const icePct1 = rng.pick([70, 80, 90]);
      const drop = rng.pick([30, 40, 50, 60]);
      const icePct2 = icePct1 - drop;
      const aIce = rng.pick([0.8, 0.85]);
      const aSea = rng.pick([0.05, 0.1]);
      // Change in albedo = (drop/100) * (aIce - aSea); % points absorbed gain = drop * (aIce - aSea)
      const alb1 = roundTo((icePct1 / 100) * aIce + ((100 - icePct1) / 100) * aSea, 4);
      const alb2 = roundTo((icePct2 / 100) * aIce + ((100 - icePct2) / 100) * aSea, 4);
      const abs1 = roundTo((1 - alb1) * 100, 2);
      const abs2 = roundTo((1 - alb2) * 100, 2);
      const gain = roundTo(abs2 - abs1, 2);
      const sector = rng.pick(["Barents", "Beaufort", "Greenland", "East Siberian", "Chukchi"]);
      return {
        prompt: `A ${sector} Arctic grid cell starts at **${icePct1}% sea ice** (albedo **${aIce}**) and **${100 - icePct1}% open ocean** (albedo **${aSea}**). Summer melt reduces sea-ice cover to **${icePct2}%** (**${100 - icePct2}%** open ocean). By how many **percentage points** does absorbed solar radiation increase?`,
        answer: { type: "number", value: gain, display: `${gain}%` },
        hint: "Find the weighted albedo before and after melt, subtract each from 100% to get absorbed %, then find the difference.",
        solution: [
          `Before melt: albedo = {{${icePct1 / 100} * ${aIce} + ${(100 - icePct1) / 100} * ${aSea} = ${alb1}}} → absorbs **${abs1}%**.`,
          `After melt: albedo = {{${icePct2 / 100} * ${aIce} + ${(100 - icePct2) / 100} * ${aSea} = ${alb2}}} → absorbs **${abs2}%**.`,
          `Absorption jump = {{${abs2} - ${abs1} = ${gain}}} percentage points.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (level 3): Climate Injustice Per-Capita Emissions & Ratios
  // =========================================================================
  {
    id: "climate-change-science-impacts.climate-justice-ratios",
    topicId: "climate-change-science-impacts",
    title: "Climate Injustice: Per-Capita Emissions Lab",
    level: 3,
    guideRef: "impacts-on-people",
    generate(rng: Rng, tier) {
      const hics = ["Country A", "Nation X", "State H", "Economy N", "Region P"];
      const lics = ["Country B", "Nation Y", "State L", "Economy S", "Region Q"];
      const h = rng.pick(hics);
      const l = rng.pick(lics);

      if (tier === 1) {
        const licPcTenths = rng.pick([4, 5, 6, 7, 8, 9]); // 0.4 to 0.9 t/person
        const licPc = roundTo(licPcTenths / 10, 1);
        const mult = rng.int(12, 30);
        const hicPc = roundTo(licPc * mult, 1);
        const year = rng.int(2019, 2025);
        return {
          prompt: `In ${year}, residents of high-income ${h} emit **${hicPc} tonnes of CO₂ per person**, while residents of low-income ${l} emit **${licPc} tonnes per person**. How many **times greater** are ${h}'s per-capita emissions than ${l}'s?`,
          answer: { type: "number", value: mult, display: `${mult}` },
          hint: `Divide ${hicPc} by ${licPc} (multiply both by 10 to remove decimals).`,
          solution: [
            `Ratio = {{${hicPc} / ${licPc} = ${mult}}} times greater.`,
          ],
        };
      }

      if (tier === 2) {
        const pop = rng.pick([4, 5, 6, 8, 10, 12, 15, 20, 25]); // millions
        const perCapTenths = rng.int(15, 160); // 1.5 to 16.0 t/person
        const perCap = roundTo(perCapTenths / 10, 1);
        const totalMt = roundTo(pop * perCap, 1);
        const year = rng.int(2018, 2025);
        return {
          prompt: `In ${year}, ${h} has a population of **${pop} million** and emits **${totalMt} million tonnes** of CO₂. Calculate ${h}'s **per-capita emissions** in tonnes of CO₂ per person.`,
          answer: { type: "number", value: perCap, display: `${perCap}` },
          hint: "Per-capita emissions = Total emissions ÷ Population (millions cancel out cleanly!).",
          solution: [
            `Per-capita CO₂ = {{${totalMt} / ${pop} = ${perCap}}} tonnes per person.`,
          ],
        };
      }

      // Tier 3: Two-country total vs per-capita synoptic ratio
      const popA = rng.pick([4, 5, 6, 8, 10]); // million
      const popB = rng.pick([80, 100, 120, 150, 160, 200]); // million
      const pcBTenths = rng.pick([5, 6, 8, 10, 12]); // 0.5 to 1.2 t/person
      const pcB = roundTo(pcBTenths / 10, 1);
      const ratio = rng.pick([8, 10, 12, 15, 16, 20]);
      const pcA = roundTo(pcB * ratio, 1);
      const totA = roundTo(popA * pcA, 1);
      const totB = roundTo(popB * pcB, 1);
      return {
        prompt: `${h} (${popA} million people) emits **${totA} million tonnes** of CO₂/year. ${l} (${popB} million people) emits **${totB} million tonnes** of CO₂/year. Calculate how many **times greater** ${h}'s **per-capita** emissions are than ${l}'s.`,
        answer: { type: "number", value: ratio, display: `${ratio}` },
        hint: "Find each nation's emissions per person first (Total ÷ Population), then divide the two per-capita figures.",
        solution: [
          `${h} per capita = {{${totA} / ${popA} = ${pcA}}} t/person.`,
          `${l} per capita = {{${totB} / ${popB} = ${pcB}}} t/person.`,
          `Per-capita ratio = {{${pcA} / ${pcB} = ${ratio}}} times greater in ${h}.`,
        ],
      };
    },
  },
];
