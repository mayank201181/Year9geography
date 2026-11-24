import type { Drill } from "./types.ts";

function roundTo(n: number, dp: number): number {
  const f = 10 ** dp;
  return Math.round((n + Number.EPSILON) * f) / f;
}

const REGIONS = [
  "Country A", "Country B", "Country C", "Region North", "Region South",
  "Island State X", "Coastal Nation Y", "City-State Z", "Province K", "Delta State M",
  "Highland Republic", "Maritime Territory", "Peninsula Nation", "Valley Province",
  "Metro District", "Port Republic",
] as const;

const FOODS_HIGH = [
  { name: "beef", co2: 60 },
  { name: "lamb", co2: 24 },
  { name: "cheese", co2: 21 },
] as const;

const FOODS_LOW = [
  { name: "chicken", co2: 6 },
  { name: "tofu", co2: 3 },
  { name: "lentils", co2: 1 },
] as const;

const VW_ITEMS = [
  { name: "cotton T-shirt", plural: "cotton T-shirts", water: 2700 },
  { name: "kg of rice", plural: "kg of rice", water: 2500 },
  { name: "100 g chocolate bar", plural: "100 g chocolate bars", water: 1700 },
  { name: "cup of coffee", plural: "cups of coffee", water: 140 },
] as const;

const ARID_PLACES = [
  "Desert Basin A", "Oasis Province B", "Steppe Region C", "Arid Plateau D",
  "Dryland District E", "Red Sea Coast F", "Salt-Flat Zone G", "Rain-Shadow Valley H",
] as const;

const WET_LIC_PLACES = [
  "Equatorial Basin P", "Rainforest Province Q", "Tropical River Valley R", "Monsoon Plains S",
  "Humid Delta T", "Wetland District U", "Congo-Type Basin V", "High-Rainfall Zone W",
] as const;

export const drills: Drill[] = [
  {
    id: "consumption-food-water.ecological-footprint",
    topicId: "consumption-food-water",
    title: "Ecological Footprint & Overshoot Calculator",
    level: 1,
    guideRef: "consumption-circular-economy",
    generate(rng, tier) {
      const place = rng.pick(REGIONS);
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Earths needed with exact 0.5 step (multiples of 0.8 divided by 1.6)
          const halfEarths = rng.int(3, 12); // 1.5 to 6.0 Earths
          const fp = roundTo(halfEarths * 0.8, 1);
          const earths = roundTo(halfEarths * 0.5, 1);
          const deficit = roundTo(fp - 1.6, 1);
          return {
            prompt: `${place} has an ecological footprint of **${fp} gha/person**. Taking global biocapacity as **1.6 gha/person**, how many planet Earths would humanity need if everyone lived like ${place}?`,
            answer: { type: "number", value: earths, display: String(earths) },
            traps: [
              { spec: { type: "number", value: deficit }, feedback: `${fp} − 1.6 = ${deficit} gha is the ecological deficit per person. Divide ${fp} by 1.6 to find Earths needed.` },
            ],
            solution: [
              `Earths needed = Per-capita footprint ÷ Global biocapacity.`,
              `${fp} ÷ 1.6 = ${earths} planet Earths.`,
            ],
            hint: `Divide ${fp} by Earth's biocapacity of 1.6 gha/person.`,
          };
        }
        // Ecological deficit
        const fp = roundTo(rng.int(25, 85) / 10, 1);
        const bio = roundTo(rng.int(1, 22) / 10, 1);
        const def = roundTo(fp - bio, 1);
        return {
          prompt: `${place} has an ecological footprint of **${fp} gha/person** and a local biocapacity of **${bio} gha/person**. Calculate its ecological deficit in global hectares (gha) per person.`,
          answer: { type: "number", value: def, display: String(def) },
          traps: [
            { spec: { type: "number", value: roundTo(fp + bio, 1) }, feedback: "Subtract local biocapacity from footprint rather than adding them." },
          ],
          solution: [
            `Ecological deficit = Ecological footprint − Local biocapacity.`,
            `${fp} − ${bio} = ${def} gha/person.`,
          ],
          hint: "Ecological deficit = Footprint − Local biocapacity.",
        };
      }

      if (tier === 2) {
        if (rng.bool(0.55)) {
          // Total national footprint in million gha
          const popM = rng.int(4, 35);
          const fp = roundTo(rng.int(12, 78) / 10, 1);
          const total = roundTo(popM * fp, 1);
          return {
            prompt: `${place} has a population of **${popM} million** and a per-capita ecological footprint of **${fp} gha/person**. Calculate its total national ecological footprint (in million gha).`,
            answer: { type: "number", value: total, display: String(total) },
            solution: [
              `Total footprint = Population × Per-capita footprint.`,
              `${popM} million × ${fp} = ${total} million gha.`,
            ],
            hint: `Multiply ${popM} by ${fp} to find the total in million gha.`,
          };
        }
        // Circular recycling rate increase (percentage points)
        const start = rng.int(10, 32);
        const gain = rng.int(12, 48);
        const end = start + gain;
        return {
          prompt: `Before circular reforms, ${place} recycled **${start}%** of its plastic waste. After introducing a deposit-return scheme, recycling rose to **${end}%**. By how many percentage points did recycling increase?`,
          answer: { type: "number", value: gain, display: `${gain}%` },
          solution: [
            `Percentage-point increase = New rate − Old rate.`,
            `${end}% − ${start}% = ${gain} percentage points.`,
          ],
          hint: "Subtract the old recycling percentage from the new recycling percentage.",
        };
      }

      // Tier 3: Percentage cut in ecological footprint -> new footprint or % decrease
      const pct = rng.pick([10, 15, 20, 25, 30, 40]);
      const base = rng.pick([4.0, 4.8, 5.0, 6.0, 6.4, 7.2, 8.0]);
      const cut = roundTo((base * pct) / 100, 2);
      const nextFp = roundTo(base - cut, 2);
      if (rng.bool(0.5)) {
        return {
          prompt: `${place} has an ecological footprint of **${base} gha/person**. Circular-economy laws cut its footprint by **${pct}%**. What is its new ecological footprint (in gha/person)?`,
          answer: { type: "number", value: nextFp, display: String(nextFp) },
          traps: [
            { spec: { type: "number", value: cut }, feedback: `${cut} gha is the reduction itself — subtract it from ${base} to get the new footprint.` },
          ],
          solution: [
            `Reduction = ${pct}% of ${base} = ${cut} gha.`,
            `New footprint = ${base} − ${cut} = ${nextFp} gha/person.`,
          ],
          hint: `Find ${pct}% of ${base}, then subtract from ${base}.`,
        };
      }
      const nextEarths = roundTo(nextFp / 1.6, 2);
      // Ensure clean exact value by picking base multiples of 1.6 with clean pct
      const cleanBase = rng.pick([3.2, 4.8, 6.4, 8.0]);
      const cleanPct = rng.pick([25, 50]);
      const cleanNew = roundTo(cleanBase * (1 - cleanPct / 100), 2);
      const cleanEarths = roundTo(cleanNew / 1.6, 2);
      void nextEarths;
      return {
        prompt: `${place} starts with an ecological footprint of **${cleanBase} gha/person** and cuts it by **${cleanPct}%** through repair and reuse policies. Taking global biocapacity as **1.6 gha/person**, how many planet Earths are now needed?`,
        answer: { type: "number", value: cleanEarths, display: String(cleanEarths) },
        traps: [
          { spec: { type: "number", value: roundTo(cleanBase / 1.6, 2) }, feedback: "Apply the percentage reduction before dividing by 1.6 gha." },
        ],
        solution: [
          `New footprint = ${cleanBase} × (1 − ${cleanPct}/100) = ${cleanNew} gha/person.`,
          `New Earths needed = ${cleanNew} ÷ 1.6 = ${cleanEarths} Earths.`,
        ],
        hint: `First reduce ${cleanBase} by ${cleanPct}%, then divide the new footprint by 1.6.`,
      };
    },
  },

  {
    id: "consumption-food-water.food-carbon-comparator",
    topicId: "consumption-food-water",
    title: "Food Carbon vs Food Miles & '30 by 30'",
    level: 2,
    guideRef: "global-food-security",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.55)) {
          const food = rng.pick([...FOODS_HIGH, ...FOODS_LOW]);
          const kg = rng.int(2, 18);
          const total = food.co2 * kg;
          const place = rng.pick(["canteen", "restaurant", "café", "supermarket", "bakery", "school kitchen"]);
          return {
            prompt: `A ${place} buys **${kg} kg** of **${food.name}** (carbon footprint ≈ **${food.co2} kg CO₂e/kg**). Calculate the total emissions in kg of CO₂e.`,
            answer: { type: "number", value: total, display: `${total} kg` },
            solution: [
              `Total CO₂e = Mass × Emissions per kg.`,
              `${kg} × ${food.co2} = ${total} kg CO₂e.`,
            ],
            hint: `Multiply ${kg} kg by ${food.co2} kg CO₂e per kg.`,
          };
        }
        // 30 by 30 local tonnage
        const demandK = rng.int(12, 95) * 10; // 120 to 950 thousand tonnes -> use smaller clean tonnes 200 to 9000
        const demand = demandK * 10;
        const local = Math.round(demand * 0.3);
        const crop = rng.pick(["leafy greens", "eggs", "farmed fish", "bean sprouts", "mushrooms", "herbs"]);
        return {
          prompt: `A district consumes **${demand.toLocaleString("en-US")} tonnes** of ${crop} per year. Under Singapore's **'30 by 30'** target (30% local production), how many tonnes must local agri-tech farms produce?`,
          answer: { type: "number", value: local, display: String(local) },
          solution: [
            `30% of ${demand} = 0.30 × ${demand} = ${local} tonnes.`,
          ],
          hint: "Find 10% by dividing by 10, then multiply by 3.",
        };
      }

      if (tier === 2) {
        const hi = rng.pick(FOODS_HIGH);
        const lo = rng.pick(FOODS_LOW);
        const kg = rng.int(2, 15);
        const diff = hi.co2 - lo.co2;
        const saved = diff * kg;
        const buyer = rng.pick(["school canteen", "family", "hotel kitchen", "community cafe", "hawker stall"]);
        return {
          prompt: `A ${buyer} swaps **${kg} kg** of **${hi.name}** (${hi.co2} kg CO₂e/kg) for **${kg} kg** of **${lo.name}** (${lo.co2} kg CO₂e/kg). How many kg of CO₂e are saved?`,
          answer: { type: "number", value: saved, display: `${saved} kg` },
          traps: [
            { spec: { type: "number", value: diff }, feedback: `${diff} kg CO₂e is saved per 1 kg — remember to multiply by ${kg} kg!` },
            { spec: { type: "number", value: hi.co2 * kg }, feedback: `Remember to subtract the emissions of the ${lo.name} (${lo.co2 * kg} kg CO₂e).` },
          ],
          solution: [
            `Saving per kg = ${hi.co2} − ${lo.co2} = ${diff} kg CO₂e/kg.`,
            `Total saving for ${kg} kg = ${kg} × ${diff} = ${saved} kg CO₂e.`,
          ],
          hint: `First subtract ${lo.co2} from ${hi.co2}, then multiply by ${kg} kg.`,
        };
      }

      // Tier 3: Heated glasshouse local vs shipped sunny field produce (full life-cycle)
      const localFarm = roundTo(rng.int(42, 76) / 10, 1);
      const localTrans = roundTo(rng.int(1, 3) / 10, 1);
      const impFarm = roundTo(rng.int(5, 13) / 10, 1);
      const impTrans = roundTo(rng.int(3, 7) / 10, 1);
      const batchKg = rng.pick([100, 200, 250, 500, 1000]);
      const localPerKg = roundTo(localFarm + localTrans, 1);
      const impPerKg = roundTo(impFarm + impTrans, 1);
      const diffPerKg = roundTo(localPerKg - impPerKg, 1);
      const totalSaved = roundTo(diffPerKg * batchKg, 1);
      const veg = rng.pick(["tomatoes", "cucumbers", "strawberries", "bell peppers", "aubergines"]);
      return {
        prompt: `In winter, **${batchKg} kg** of local heated-glasshouse ${veg} emits **${localFarm} kg CO₂e/kg** in heating/farming plus **${localTrans} kg CO₂e/kg** in transport. Shipped field-grown ${veg} emits **${impFarm} kg CO₂e/kg** in farming plus **${impTrans} kg CO₂e/kg** in transport. How many kg of CO₂e are saved across the ${batchKg} kg batch by choosing the shipped field-grown crop?`,
        answer: { type: "number", value: totalSaved, display: `${totalSaved} kg` },
        traps: [
          { spec: { type: "number", value: diffPerKg }, feedback: `${diffPerKg} kg CO₂e is the saving per 1 kg — multiply by ${batchKg} kg!` },
        ],
        solution: [
          `Local heated-glasshouse total = ${localFarm} + ${localTrans} = ${localPerKg} kg CO₂e/kg.`,
          `Shipped field-grown total = ${impFarm} + ${impTrans} = ${impPerKg} kg CO₂e/kg.`,
          `Saving per kg = ${localPerKg} − ${impPerKg} = ${diffPerKg} kg CO₂e/kg.`,
          `Batch saving = ${diffPerKg} × ${batchKg} = ${totalSaved} kg CO₂e.`,
        ],
        hint: `Sum farming + transport for each option first, find the difference per kg, then multiply by ${batchKg}.`,
      };
    },
  },

  {
    id: "consumption-food-water.virtual-water-scarcity",
    topicId: "consumption-food-water",
    title: "Virtual Water & Scarcity Classifier",
    level: 2,
    guideRef: "global-water-scarcity",
    generate(rng, tier) {
      if (tier === 1) {
        // Virtual water of paired everyday goods
        const item = rng.pick(VW_ITEMS);
        const qty = rng.int(2, 6);
        const beefTenths = rng.pick([0, 2, 5]); // 0, 0.2 or 0.5 kg beef
        if (beefTenths === 0) {
          const item2 = rng.pick(VW_ITEMS.filter((x) => x.name !== item.name));
          const qty2 = rng.int(1, 4);
          const total = qty * item.water + qty2 * item2.water;
          return {
            prompt: `Using virtual water values (${item.name} = **${item.water.toLocaleString("en-US")} L**; ${item2.name} = **${item2.water.toLocaleString("en-US")} L**), calculate the total virtual water (in litres) in **${qty} ${item.plural}** and **${qty2} ${qty2 === 1 ? item2.name : item2.plural}**.`,
            answer: { type: "number", value: total, display: `${total} L` },
            solution: [
              `${qty} × ${item.water} = ${qty * item.water} L.`,
              `${qty2} × ${item2.water} = ${qty2 * item2.water} L.`,
              `Total = ${qty * item.water} + ${qty2 * item2.water} = ${total} L.`,
            ],
            hint: "Multiply each quantity by its virtual water figure, then add both totals.",
          };
        }
        const beefKg = beefTenths / 10;
        const beefW = Math.round(beefKg * 15400);
        const itemW = qty * item.water;
        const total = beefW + itemW;
        return {
          prompt: `Using virtual water values (beef = **15,400 L/kg**; ${item.name} = **${item.water.toLocaleString("en-US")} L**), calculate the total virtual water (in litres) in **${beefKg} kg of beef** plus **${qty} ${item.plural}**.`,
          answer: { type: "number", value: total, display: `${total} L` },
          solution: [
            `Beef: ${beefKg} × 15,400 = ${beefW} L.`,
            `${qty} ${item.plural}: ${qty} × ${item.water} = ${itemW} L.`,
            `Total = ${beefW} + ${itemW} = ${total} L.`,
          ],
          hint: `First find ${beefKg} × 15,400, then add ${qty} × ${item.water}.`,
        };
      }

      if (tier === 2) {
        // Physical vs Economic water scarcity scenario classifier (high variety)
        const isPhysical = rng.bool(0.5);
        if (isPhysical) {
          const place = rng.pick(ARID_PLACES);
          const rain = rng.int(45, 220);
          const evap = rng.int(1600, 2600);
          const detail = rng.pick([
            "aquifers are pumped faster than rain recharges them",
            "seasonal rivers dry up for nine months every year",
            "agricultural irrigation depletes shrinking desert reservoirs",
            "demand from farms and cities exceeds natural renewable supply",
          ]);
          return {
            prompt: `**${place}** receives only **${rain} mm** of rainfall per year with **${evap} mm** of potential evaporation, and ${detail}. Classify this as **physical** or **economic** water scarcity.`,
            answer: {
              type: "text",
              accept: ["physical", "physical scarcity", "physical water scarcity"],
              display: "Physical water scarcity",
            },
            traps: [
              {
                spec: { type: "text", accept: ["economic", "economic scarcity", "economic water scarcity"] },
                feedback: `With only ${rain} mm of rainfall and extreme evaporation, nature does not supply enough water — that is physical water scarcity.`,
              },
            ],
            solution: [
              `Rainfall is very low (${rain} mm/year) while evaporation and water demand outstrip natural recharge.`,
              `Therefore, ${place} experiences **physical water scarcity**.`,
            ],
            hint: "Ask: 'Is natural rain missing, or are pipes and funding missing?'",
          };
        }
        const place = rng.pick(WET_LIC_PLACES);
        const rain = rng.int(1450, 2800);
        const piped = rng.int(18, 46);
        const barrier = rng.pick([
          "lack of investment in water treatment works and pipes",
          "rural poverty preventing communities from funding boreholes and pumps",
          "damaged municipal pipe networks and weak governance",
          "shortage of capital to build clean storage tanks and filtration",
        ]);
        return {
          prompt: `**${place}** receives **${rain} mm** of annual rainfall with abundant rivers, yet only **${piped}%** of homes have safe piped water due to ${barrier}. Classify this as **physical** or **economic** water scarcity.`,
          answer: {
            type: "text",
            accept: ["economic", "economic scarcity", "economic water scarcity"],
            display: "Economic water scarcity",
          },
          traps: [
            {
              spec: { type: "text", accept: ["physical", "physical scarcity", "physical water scarcity"] },
              feedback: `${rain} mm of annual rainfall means plenty of water exists in nature — lack of funding and infrastructure makes this economic water scarcity.`,
            },
          ],
          solution: [
            `Natural rainfall (${rain} mm/year) and rivers are abundant, so water is physically present.`,
            `Human and financial barriers prevent safe access → **economic water scarcity**.`,
          ],
          hint: "Check the rainfall figure first: is nature short of water, or is infrastructure missing?",
        };
      }

      // Tier 3: Ratio of virtual water to direct tap water OR annual virtual water saved
      if (rng.bool(0.5)) {
        const direct = rng.pick([120, 130, 140, 150, 160]);
        const mult = rng.int(16, 32);
        const virtual = direct * mult;
        const place = rng.pick(REGIONS);
        return {
          prompt: `Residents of ${place} use **${direct} L/person/day** directly from taps, while their virtual water footprint from food and goods is **${virtual.toLocaleString("en-US")} L/person/day**. How many times larger is their virtual water footprint than their direct tap use?`,
          answer: { type: "number", value: mult, display: String(mult) },
          solution: [
            `Ratio = Virtual water ÷ Direct tap water = ${virtual} ÷ ${direct} = ${mult}.`,
          ],
          hint: `Divide ${virtual} by ${direct}.`,
        };
      }
      const kgPerWeek = rng.pick([0.5, 1, 1.5, 2]);
      const weeks = rng.pick([10, 20, 25, 40, 50, 52]);
      const swapTo = rng.pick([
        { name: "lentils", vw: 4000 },
        { name: "rice", vw: 2500 },
        { name: "chicken", vw: 4300 },
      ]);
      const perKgSaved = 15400 - swapTo.vw;
      const totalSaved = Math.round(kgPerWeek * perKgSaved * weeks);
      return {
        prompt: `A household replaces **${kgPerWeek} kg** of beef (15,400 L/kg) with **${kgPerWeek} kg** of ${swapTo.name} (${swapTo.vw.toLocaleString("en-US")} L/kg) every week for **${weeks} weeks**. How many litres of virtual water do they save in total?`,
        answer: { type: "number", value: totalSaved, display: `${totalSaved} L` },
        traps: [
          { spec: { type: "number", value: Math.round(kgPerWeek * perKgSaved) }, feedback: `Remember to multiply the weekly saving by all ${weeks} weeks!` },
        ],
        solution: [
          `Saving per kg = 15,400 − ${swapTo.vw} = ${perKgSaved} L/kg.`,
          `Weekly saving = ${kgPerWeek} × ${perKgSaved} = ${Math.round(kgPerWeek * perKgSaved)} L.`,
          `Total over ${weeks} weeks = ${Math.round(kgPerWeek * perKgSaved)} × ${weeks} = ${totalSaved} L.`,
        ],
        hint: `Find (15,400 − ${swapTo.vw}) × ${kgPerWeek} for one week, then multiply by ${weeks}.`,
      };
    },
  },

  {
    id: "consumption-food-water.singapore-four-taps",
    topicId: "consumption-food-water",
    title: "Singapore Four National Taps & PUB Planner",
    level: 3,
    guideRef: "water-management-singapore",
    generate(rng, tier) {
      if (tier === 1) {
        // Match operational clue to one of the Four National Taps with rich varied figures
        const tap = rng.int(1, 4);
        const month = rng.pick(["February", "April", "July", "August", "October", "November"]);
        if (tap === 1) {
          const mm = rng.int(180, 340);
          const reservoir = rng.pick(["Marina Reservoir", "MacRitchie Reservoir", "Lower Peirce Reservoir", "Kranji Reservoir", "Pandan Reservoir", "Bedok Reservoir"]);
          return {
            prompt: `During a wet ${month} bringing **${mm} mm** of rain across urban canals, PUB captures storm runoff into **${reservoir}**. Which of Singapore's Four National Taps is this?`,
            answer: {
              type: "text",
              accept: ["local catchment", "local catchment water", "catchment", "catchment water", "tap 1"],
              display: "Local Catchment",
            },
            solution: [
              `Rainwater collected via drains and canals into Singapore's 17 reservoirs is **Local Catchment** (Tap 1).`,
            ],
            hint: "Think of Tap 1: capturing rain across two-thirds of Singapore's land area.",
          };
        }
        if (tap === 2) {
          const mgd = rng.int(160, 250);
          return {
            prompt: `In ${month}, PUB draws **${mgd} MGD** of treated water piped across the Causeway from the Johor River under the **1962 Water Agreement** (expiring 2061). Which of Singapore's Four National Taps is this?`,
            answer: {
              type: "text",
              accept: ["imported water", "imported", "import", "tap 2"],
              display: "Imported Water",
            },
            solution: [
              `Water piped from the Johor River in Malaysia under the 1962 agreement is **Imported Water** (Tap 2).`,
            ],
            hint: "Think of Tap 2: cross-border water piped from Johor, Malaysia.",
          };
        }
        if (tap === 3) {
          const pct = rng.int(35, 55);
          const user = rng.pick(["wafer-fabrication plants", "commercial cooling towers", "industrial parks", "dry-spell reservoir top-ups"]);
          return {
            prompt: `In ${month}, PUB supplies **${pct}%** of water demand by purifying treated used water via **microfiltration, reverse osmosis and UV disinfection** for ${user}. Which of Singapore's Four National Taps is this?`,
            answer: {
              type: "text",
              accept: ["newater", "new water", "reclaimed water", "tap 3"],
              display: "NEWater",
            },
            solution: [
              `Ultra-clean reclaimed used water purified by Microfiltration → Reverse Osmosis → UV disinfection is **NEWater** (Tap 3).`,
            ],
            hint: "Think of Tap 3: Singapore's branded reclaimed used water.",
          };
        }
        const mgd = rng.int(75, 140);
        const plant = rng.pick(["Tuas", "Jurong Island", "Keppel Marina East"]);
        return {
          prompt: `During a dry ${month}, PUB ramps up the **${plant}** coastal plant to purify **${mgd} MGD** of salty ocean seawater through high-pressure reverse osmosis membranes. Which of Singapore's Four National Taps is this?`,
          answer: {
            type: "text",
            accept: ["desalinated water", "desalination", "desalinated", "tap 4"],
            display: "Desalinated Water",
          },
          solution: [
            `Removing salt from seawater using high-pressure Reverse Osmosis is **Desalinated Water** (Tap 4).`,
          ],
          hint: "Think of Tap 4: turning seawater from the Singapore Strait into drinking water.",
        };
      }

      if (tier === 2) {
        // Calculate combined MGD from weather-independent taps (NEWater + Desalination)
        const demand = rng.pick([400, 440, 450, 500, 600, 700, 800, 880]);
        const newaterPct = rng.pick([35, 40, 45, 50, 55]);
        const desalPct = rng.pick([20, 25, 30]);
        const combinedPct = newaterPct + desalPct;
        const combinedMgd = roundTo((demand * combinedPct) / 100, 1);
        const remMgd = roundTo(demand - combinedMgd, 1);
        if (rng.bool(0.55)) {
          return {
            prompt: `Singapore's daily water demand is **${demand} MGD**. If **NEWater** supplies **${newaterPct}%** and **Desalination** supplies **${desalPct}%**, how many MGD do these two weather-independent taps supply together?`,
            answer: { type: "number", value: combinedMgd, display: String(combinedMgd) },
            traps: [
              { spec: { type: "number", value: combinedPct }, feedback: `${combinedPct}% is the percentage share — now find ${combinedPct}% of ${demand} MGD.` },
              { spec: { type: "number", value: remMgd }, feedback: `${remMgd} MGD is the remaining share — add ${newaterPct}% + ${desalPct}% = ${combinedPct}% of ${demand}.` },
            ],
            solution: [
              `Combined weather-independent share = ${newaterPct}% + ${desalPct}% = ${combinedPct}%.`,
              `${combinedPct}% of ${demand} MGD = ${combinedMgd} MGD.`,
            ],
            hint: `Add ${newaterPct}% + ${desalPct}%, then find that percentage of ${demand}.`,
          };
        }
        return {
          prompt: `If daily demand reaches **${demand} MGD**, with **NEWater** providing **${newaterPct}%** and **Desalination** providing **${desalPct}%**, how many MGD must come from the remaining weather-dependent taps?`,
          answer: { type: "number", value: remMgd, display: String(remMgd) },
          traps: [
            { spec: { type: "number", value: combinedMgd }, feedback: `${combinedMgd} MGD is NEWater + Desalination — subtract from ${demand} MGD to find the remaining taps.` },
          ],
          solution: [
            `Remaining share = 100% − (${newaterPct}% + ${desalPct}%) = ${100 - combinedPct}%.`,
            `${100 - combinedPct}% of ${demand} MGD = ${remMgd} MGD.`,
          ],
          hint: `Subtract (${newaterPct}% + ${desalPct}%) from 100%, then multiply by ${demand}.`,
        };
      }

      // Tier 3: Demand-side household / estate savings toward 130 L/person/day
      const people = rng.int(3, 8);
      const startL = rng.int(138, 168);
      const targetL = rng.pick([130, 128, 125]);
      const days = rng.pick([7, 10, 14, 20, 30]);
      const perDayPerson = startL - targetL;
      const totalSaved = people * perDayPerson * days;
      return {
        prompt: `A Singapore household of **${people} people** uses **${startL} L/person/day**. After installing WELS 3-tick taps and smart meters, they cut usage to **${targetL} L/person/day**. How many litres of water do they save over **${days} days**?`,
        answer: { type: "number", value: totalSaved, display: `${totalSaved} L` },
        traps: [
          { spec: { type: "number", value: people * perDayPerson }, feedback: `${people * perDayPerson} L is only 1 day's household saving — multiply by ${days} days!` },
          { spec: { type: "number", value: perDayPerson * days }, feedback: `${perDayPerson * days} L is the saving for 1 person — multiply by ${people} people!` },
        ],
        solution: [
          `Daily saving per person = ${startL} − ${targetL} = ${perDayPerson} L.`,
          `Household daily saving = ${people} × ${perDayPerson} = ${people * perDayPerson} L/day.`,
          `Total saving over ${days} days = ${people * perDayPerson} × ${days} = ${totalSaved} L.`,
        ],
        hint: `Compute (${startL} − ${targetL}) × ${people} × ${days}.`,
      };
    },
  },
];
