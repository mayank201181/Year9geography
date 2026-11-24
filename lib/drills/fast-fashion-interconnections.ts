import type { Drill } from "./types.ts";

function roundTo(n: number, dp: number): number {
  const f = 10 ** dp;
  return Math.round((n + Number.EPSILON) * f) / f;
}

const GARMENTS = [
  "cotton T-shirt", "denim jacket", "fleece hoodie", "polo shirt",
  "summer dress", "casual jumper", "chino trousers", "linen shirt",
] as const;

const HUBS = [
  "Dhaka", "Chittagong", "Ho Chi Minh City", "Tiruppur", "Phnom Penh",
  "Izmir", "Guangzhou", "Hanoi", "Ahmedabad", "Karachi",
] as const;

export const drills: Drill[] = [
  {
    id: "fast-fashion-interconnections.supply-chain-wage",
    topicId: "fast-fashion-interconnections",
    title: "TNC Supply Chain & Worker Wage Share",
    level: 1,
    guideRef: "global-garment-chains",
    generate(rng, tier) {
      const garment = rng.pick(GARMENTS);
      const hub = rng.pick(HUBS);
      if (tier === 1) {
        const price = rng.pick([15, 20, 25, 30, 40, 45, 50, 60, 75, 80, 100]);
        const pct = rng.pick([1, 2, 3, 4]);
        const wage = roundTo((price * pct) / 100, 2);
        return {
          prompt: `A fast-fashion **${garment}** stitched in ${hub} retails for **$${price}**. If the garment worker receives **${pct}%** of the retail price, how many dollars does the worker earn per item?`,
          answer: { type: "number", value: wage, display: `$${wage}` },
          traps: [
            { spec: { type: "number", value: roundTo(wage * 10, 2) }, feedback: `Check your decimal place: ${pct}% is ${pct / 100}, not ${pct / 10}!` },
          ],
          solution: [
            `${pct}% of $${price} = ${(pct / 100).toFixed(2)} × ${price} = $${wage}.`,
          ],
          hint: `Find 1% of $${price} (divide by 100), then multiply by ${pct}.`,
        };
      }

      if (tier === 2) {
        const price = rng.pick([20, 30, 40, 50, 60, 80, 100]);
        const brandPct = rng.pick([50, 52, 55, 58, 60]);
        const workerPct = rng.pick([2, 3]);
        const diffPct = brandPct - workerPct;
        const diffDollars = roundTo((price * diffPct) / 100, 2);
        const brandDollars = roundTo((price * brandPct) / 100, 2);
        return {
          prompt: `A **$${price} ${garment}** made in ${hub} allocates **${brandPct}%** of its retail price to brand profit/retail overhead and **${workerPct}%** to the stitcher's wage. How many MORE dollars go to brand/retail than to the stitcher?`,
          answer: { type: "number", value: diffDollars, display: `$${diffDollars}` },
          traps: [
            { spec: { type: "number", value: brandDollars }, feedback: `$${brandDollars} is the brand/retail share alone — subtract the worker's ${workerPct}% share!` },
          ],
          solution: [
            `Percentage gap = ${brandPct}% − ${workerPct}% = ${diffPct}%.`,
            `${diffPct}% of $${price} = $${diffDollars}.`,
          ],
          hint: `Subtract ${workerPct}% from ${brandPct}%, then find that percentage of $${price}.`,
        };
      }

      // Tier 3: Container freight cost per garment OR retail % increase when worker pay doubles
      if (rng.bool(0.5)) {
        const containers = rng.int(2, 6);
        const shirtsPerContainer = rng.pick([20000, 25000, 40000, 50000]);
        const freightPerContainer = rng.pick([2000, 2500, 3000, 4000, 5000]);
        // Ensure clean cents per garment: freightPerContainer / shirtsPerContainer * 100
        const cents = roundTo((freightPerContainer / shirtsPerContainer) * 100, 1);
        return {
          prompt: `A shipping company moves **${containers} steel containers** from ${hub} via the Port of Singapore. Each container holds **${shirtsPerContainer.toLocaleString("en-US")} garments** and costs **$${freightPerContainer.toLocaleString("en-US")}** to ship. What is the ocean-freight cost per garment in **cents** (where $1 = 100 cents)?`,
          answer: { type: "number", value: cents, display: String(cents) },
          solution: [
            `Cost per garment in dollars = ${freightPerContainer} ÷ ${shirtsPerContainer} = $${roundTo(freightPerContainer / shirtsPerContainer, 4)}.`,
            `Multiply by 100 cents/$1 = ${cents} cents per garment!`,
          ],
          hint: `Divide one container's shipping cost ($${freightPerContainer}) by ${shirtsPerContainer} garments, then multiply by 100 for cents.`,
        };
      }
      const price = rng.pick([20, 25, 40, 50]);
      const workerPct = rng.pick([2, 3, 4]);
      const wage = roundTo((price * workerPct) / 100, 2);
      const mult = rng.pick([2, 3]); // double (+1×wage) or triple (+2×wage)
      const addedPct = workerPct * (mult - 1);
      const action = mult === 2 ? "doubles" : "triples";
      return {
        prompt: `On a **$${price} ${garment}** stitched in ${hub}, the worker earns **$${wage}** (${workerPct}% of retail price). If the brand **${action}** the worker's wage and passes 100% of that extra wage onto shoppers, by what **percentage** does the retail price increase?`,
        answer: { type: "number", value: addedPct, display: `${addedPct}%` },
        traps: [
          { spec: { type: "number", value: (mult - 1) * 100 }, feedback: `${(mult - 1) * 100}% is the rise in the WORKER'S wage — compute the percentage rise in the $${price} shop price!` },
        ],
        solution: [
          `Extra wage added = ${mult - 1} × $${wage} = $${roundTo((mult - 1) * wage, 2)}.`,
          `Percentage increase in $${price} retail price = (${roundTo((mult - 1) * wage, 2)} ÷ ${price}) × 100 = ${addedPct}%.`,
        ],
        hint: `Find how many extra dollars are added to the $${price} price, then divide by $${price} and multiply by 100.`,
      };
    },
  },

  {
    id: "fast-fashion-interconnections.garment-water-carbon",
    topicId: "fast-fashion-interconnections",
    title: "Garment Water, Waste & Microfibre Impacts",
    level: 2,
    guideRef: "fast-fashion-impacts",
    generate(rng, tier) {
      if (tier === 1) {
        const shirts = rng.int(2, 10);
        const jeans = rng.int(1, 5);
        const total = shirts * 2700 + jeans * 7500;
        const shopper = rng.pick(["A teenager", "A Year 9 student", "A family", "An online shopper", "A university student"]);
        return {
          prompt: `${shopper} buys **${shirts} cotton T-shirts** (2,700 L each) and **${jeans} ${jeans === 1 ? "pair" : "pairs"} of cotton jeans** (7,500 L each). Calculate the total virtual water footprint in **litres**.`,
          answer: { type: "number", value: total, display: `${total} L` },
          traps: [
            { spec: { type: "number", value: shirts * 2700 }, feedback: `Remember to add the water footprint of the ${jeans} ${jeans === 1 ? "pair" : "pairs"} of jeans (${jeans * 7500} L)!` },
          ],
          solution: [
            `T-shirts: ${shirts} × 2,700 = ${shirts * 2700} L.`,
            `Jeans: ${jeans} × 7,500 = ${jeans * 7500} L.`,
            `Total virtual water = ${shirts * 2700} + ${jeans * 7500} = ${total} L.`,
          ],
          hint: `Multiply ${shirts} × 2,700 and ${jeans} × 7,500, then add both results.`,
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Kantamanto / Atacama waste percentage
          const totalTonnes = rng.int(15, 85) * 1000;
          const wastePct = rng.pick([30, 35, 40, 45]);
          const wasted = Math.round((totalTonnes * wastePct) / 100);
          const site = rng.pick(["Kantamanto Market (Ghana)", "Atacama Port (Chile)", "an East African textile port", "a regional import hub"]);
          return {
            prompt: `**${totalTonnes.toLocaleString("en-US")} tonnes** of used clothing bales arrive at ${site} in a year. If **${wastePct}%** are too damaged or synthetic to resell and end up dumped, how many tonnes become textile waste?`,
            answer: { type: "number", value: wasted, display: String(wasted) },
            traps: [
              { spec: { type: "number", value: totalTonnes - wasted }, feedback: `${totalTonnes - wasted} tonnes is the ${100 - wastePct}% that IS resold — calculate ${wastePct}% for the wasted share.` },
            ],
            solution: [
              `Textile waste = ${wastePct}% of ${totalTonnes} = ${wasted} tonnes.`,
            ],
            hint: `Find ${wastePct}% of ${totalTonnes.toLocaleString("en-US")}.`,
          };
        }
        // Water saved by buying fewer cotton T-shirts
        const oldCount = rng.int(10, 22);
        const newCount = rng.int(3, oldCount - 3);
        const fewer = oldCount - newCount;
        const saved = fewer * 2700;
        const traps = fewer !== newCount
          ? [{ spec: { type: "number" as const, value: newCount * 2700 }, feedback: `${newCount * 2700} L is the water used by the ${newCount} shirts bought — multiply the ${fewer} shirts NOT bought by 2,700 L.` }]
          : [];
        return {
          prompt: `A shopper cuts their annual purchases from **${oldCount}** conventional cotton T-shirts (2,700 L each) down to **${newCount}** T-shirts by repairing and thrifting. How many **litres** of virtual water are saved in one year?`,
          answer: { type: "number", value: saved, display: `${saved} L` },
          traps,
          solution: [
            `Fewer shirts bought = ${oldCount} − ${newCount} = ${fewer}.`,
            `Virtual water saved = ${fewer} × 2,700 = ${saved} L.`,
          ],
          hint: `First find ${oldCount} − ${newCount}, then multiply by 2,700 L.`,
        };
      }

      // Tier 3: Microfibres escaping past a washing-machine filter (in thousands)
      const perWashK = rng.pick([150, 200, 250, 300, 350, 400]); // thousands per wash
      const washes = rng.pick([10, 12, 15, 20, 24, 30]);
      const trapPct = rng.pick([60, 70, 75, 80, 85, 90]);
      const escapePct = 100 - trapPct;
      const totalK = perWashK * washes;
      const escapedK = roundTo((totalK * escapePct) / 100, 1);
      const item = rng.pick(["polyester fleece", "nylon gym top", "acrylic sweater", "synthetic tracksuit"]);
      return {
        prompt: `A **${item}** sheds **${perWashK} thousand** plastic microfibres per wash and is washed **${washes} times** a year. A washing-machine filter traps **${trapPct}%** of the fibres. How many **thousand** microfibres still escape into waterways in a year?`,
        answer: { type: "number", value: escapedK, display: String(escapedK) },
        traps: [
          { spec: { type: "number", value: roundTo((totalK * trapPct) / 100, 1) }, feedback: `${roundTo((totalK * trapPct) / 100, 1)} thousand is the ${trapPct}% TRAPPED — find the remaining ${escapePct}% that escape!` },
        ],
        solution: [
          `Total shed before filter = ${perWashK} × ${washes} = ${totalK} thousand microfibres.`,
          `Share escaping = 100% − ${trapPct}% = ${escapePct}%.`,
          `Escaping microfibres = ${escapePct}% of ${totalK} = ${escapedK} thousand.`,
        ],
        hint: `Multiply ${perWashK} × ${washes}, then find ${escapePct}% (100% − ${trapPct}%) of that total.`,
      };
    },
  },

  {
    id: "fast-fashion-interconnections.cost-per-wear-circular",
    topicId: "fast-fashion-interconnections",
    title: "Slow Fashion Cost & Footprint per Wear",
    level: 2,
    guideRef: "sustainable-slow-fashion",
    generate(rng, tier) {
      const garment = rng.pick(GARMENTS);
      if (tier === 1) {
        const wears = rng.pick([10, 20, 25, 40, 50, 60, 80, 100]);
        const cpwCents = rng.int(6, 45) * 10; // $0.60 to $4.50
        const cpw = roundTo(cpwCents / 100, 2);
        const price = roundTo(cpw * wears, 2);
        return {
          prompt: `A durable slow-fashion **${garment}** costs **$${price}** and is worn **${wears} times** over several years. Calculate its **cost per wear** in dollars.`,
          answer: { type: "number", value: cpw, display: `$${cpw}` },
          solution: [
            `Cost per wear = Total price ÷ Number of wears.`,
            `$${price} ÷ ${wears} = $${cpw} per wear.`,
          ],
          hint: `Divide $${price} by ${wears} wears.`,
        };
      }

      if (tier === 2) {
        // Compare fast vs slow cost per wear difference
        const fastWears = rng.pick([4, 5, 6, 8, 10]);
        const fastCpw = roundTo(rng.int(22, 48) / 10, 1); // $2.2 to $4.8
        const fastPrice = roundTo(fastWears * fastCpw, 2);
        const slowWears = rng.pick([40, 50, 60, 80]);
        const slowCpw = roundTo(rng.int(6, 18) / 10, 1); // $0.6 to $1.8
        const slowPrice = roundTo(slowWears * slowCpw, 2);
        const diff = roundTo(fastCpw - slowCpw, 2);
        const traps = slowCpw !== diff
          ? [{ spec: { type: "number" as const, value: slowCpw }, feedback: `$${slowCpw} is the slow-fashion cost per wear — subtract it from the fast-fashion cost per wear ($${fastCpw}).` }]
          : [];
        return {
          prompt: `A cheap fast-fashion **${garment}** costs **$${fastPrice}** and is worn **${fastWears} times**. A durable slow-fashion version costs **$${slowPrice}** and is worn **${slowWears} times**. How many dollars cheaper PER WEAR is the slow-fashion ${garment}?`,
          answer: { type: "number", value: diff, display: `$${diff}` },
          traps,
          solution: [
            `Fast-fashion cost/wear = $${fastPrice} ÷ ${fastWears} = $${fastCpw}.`,
            `Slow-fashion cost/wear = $${slowPrice} ÷ ${slowWears} = $${slowCpw}.`,
            `Difference = $${fastCpw} − $${slowCpw} = $${diff} cheaper per wear.`,
          ],
          hint: `Find Price ÷ Wears for both garments, then subtract the smaller cost per wear from the larger.`,
        };
      }

      // Tier 3: Water or CO2e footprint per wear saved by wearing a garment longer
      const person = rng.pick(["A Year 9 student", "A shopper", "Maya", "Ravi", "An eco-club member", "A commuter"]);
      if (rng.bool(0.55)) {
        const waterTotal = rng.pick([2700, 3600, 5400, 7500, 9000]);
        const itemLabel =
          waterTotal === 2700 ? "cotton T-shirt"
            : waterTotal === 3600 ? "cotton polo shirt"
              : waterTotal === 5400 ? "heavy cotton hoodie"
                : waterTotal === 7500 ? "pair of jeans"
                  : "denim jacket";
        const pair =
          waterTotal === 2700
            ? rng.pick([[9, 27], [10, 30], [15, 45], [18, 54], [20, 60], [12, 36], [15, 50], [10, 45]])
            : waterTotal === 3600
              ? rng.pick([[10, 30], [12, 40], [15, 45], [18, 60], [20, 60], [15, 60], [12, 36]])
              : waterTotal === 5400
                ? rng.pick([[10, 30], [15, 45], [18, 54], [20, 60], [12, 36], [15, 60], [18, 45]])
                : waterTotal === 7500
                  ? rng.pick([[15, 50], [25, 75], [30, 75], [20, 50], [15, 75], [25, 100], [10, 50]])
                  : rng.pick([[15, 45], [20, 60], [30, 90], [18, 90], [25, 75], [15, 60], [20, 100]]);
        const [oldW, newW] = pair;
        const oldRate = roundTo(waterTotal / oldW, 2);
        const newRate = roundTo(waterTotal / newW, 2);
        const savedPerWear = roundTo(oldRate - newRate, 2);
        const traps = newRate !== savedPerWear
          ? [{ spec: { type: "number" as const, value: newRate }, feedback: `${newRate} L/wear is the NEW rate at ${newW} wears — subtract it from the original ${oldRate} L/wear!` }]
          : [];
        return {
          prompt: `A **${itemLabel}** has a production water footprint of **${waterTotal.toLocaleString("en-US")} L**. ${person} mends and wears it **${newW} times** instead of **${oldW} times**. By how many **litres per wear** does its water footprint drop?`,
          answer: { type: "number", value: savedPerWear, display: `${savedPerWear} L` },
          traps,
          solution: [
            `Original footprint/wear = ${waterTotal} ÷ ${oldW} = ${oldRate} L/wear.`,
            `New footprint/wear = ${waterTotal} ÷ ${newW} = ${newRate} L/wear.`,
            `Reduction = ${oldRate} − ${newRate} = ${savedPerWear} L/wear.`,
          ],
          hint: `Divide ${waterTotal} by ${oldW}, divide ${waterTotal} by ${newW}, then subtract.`,
        };
      }
      // Carbon saved by choosing 1 durable garment worn N times instead of K cheap garments
      const cheapCount = rng.int(4, 8);
      const cheapCo2 = rng.int(8, 15);
      const durableCo2 = rng.int(10, 18);
      const totalCheap = cheapCount * cheapCo2;
      const savedCo2 = totalCheap - durableCo2;
      const wearsEach = rng.pick([8, 10, 12]);
      const totalWears = cheapCount * wearsEach;
      return {
        prompt: `${person} buys **1 durable ${garment}** (${durableCo2} kg CO₂e) worn **${totalWears} times** instead of **${cheapCount} cheap ${garment}s** (${cheapCo2} kg CO₂e each) worn **${wearsEach} times** each. How many **kg of CO₂e** are saved in total?`,
        answer: { type: "number", value: savedCo2, display: `${savedCo2} kg` },
        traps: [
          { spec: { type: "number", value: totalCheap }, feedback: `${totalCheap} kg CO₂e is the total of the ${cheapCount} cheap garments — subtract the ${durableCo2} kg CO₂e of the durable garment!` },
        ],
        solution: [
          `${cheapCount} cheap garments = ${cheapCount} × ${cheapCo2} = ${totalCheap} kg CO₂e.`,
          `1 durable garment = ${durableCo2} kg CO₂e.`,
          `CO₂e saved = ${totalCheap} − ${durableCo2} = ${savedCo2} kg CO₂e.`,
        ],
        hint: `Compute (${cheapCount} × ${cheapCo2}) − ${durableCo2}.`,
      };
    },
  },

  {
    id: "fast-fashion-interconnections.geo-skills-numeracy",
    topicId: "fast-fashion-interconnections",
    title: "Geo-Skills: % Change, Mean, Median & TEA",
    level: 3,
    guideRef: "year9-geo-skills",
    generate(rng, tier) {
      if (tier === 1) {
        // Arithmetic mean OR range of 5 values (exact integer)
        const base = rng.int(12, 48);
        const offsets = rng.shuffle([-6, -3, 0, 2, 7]); // sum of offsets = 0 -> exact mean = base!
        const vals = offsets.map((o) => base + o);
        const context = rng.pick([
          "garment factory weekly overtime hours",
          "monthly textile waste totals (tonnes)",
          "dry-season monthly rainfall readings (mm)",
          "daily container crane loads",
          "annual outfits bought per shopper",
        ]);
        if (rng.bool(0.55)) {
          return {
            prompt: `Five recorded ${context} are: **${vals.join(", ")}**. Calculate the **arithmetic mean**.`,
            answer: { type: "number", value: base, display: String(base) },
            traps: [
              { spec: { type: "number", value: Math.max(...vals) - Math.min(...vals) }, feedback: "That is the range (Max − Min) — sum all five values and divide by 5 for the mean." },
            ],
            solution: [
              `Sum = ${vals.join(" + ")} = ${base * 5}.`,
              `Mean = ${base * 5} ÷ 5 = ${base}.`,
            ],
            hint: "Add all five numbers together, then divide by 5.",
          };
        }
        const range = Math.max(...vals) - Math.min(...vals);
        return {
          prompt: `Five recorded ${context} are: **${vals.join(", ")}**. Calculate the **range**.`,
          answer: { type: "number", value: range, display: String(range) },
          traps: [
            { spec: { type: "number", value: base }, feedback: `${base} is the mean — Range = Maximum − Minimum.` },
          ],
          solution: [
            `Maximum = ${Math.max(...vals)}; Minimum = ${Math.min(...vals)}.`,
            `Range = ${Math.max(...vals)} − ${Math.min(...vals)} = ${range}.`,
          ],
          hint: "Subtract the smallest value from the largest value.",
        };
      }

      if (tier === 2) {
        // Percentage increase or decrease (exact clean integer or 0.5)
        const oldVal = rng.pick([20, 25, 40, 50, 60, 80, 100, 120, 200]);
        const isInc = rng.bool(0.5);
        const pct = isInc ? rng.pick([10, 15, 20, 25, 30, 40, 50, 60, 75, 80, 100]) : rng.pick([10, 15, 20, 25, 30, 40, 50, 60, 75, 80]);
        const change = roundTo((oldVal * pct) / 100, 1);
        const newVal = isInc ? roundTo(oldVal + change, 1) : roundTo(oldVal - change, 1);
        const wrongDivNew = roundTo((change / newVal) * 100, 1);
        const metric = isInc
          ? rng.pick(["garment exports ($ billion)", "annual clothing production (billion items)", "recycled fabric output (thousand tonnes)", "second-hand shop sales ($ million)"])
          : rng.pick(["Aral Sea area (thousand km²)", "factory wastewater discharge (thousand L/day)", "unsold stock burned (thousand items)", "water use per garment (litres)"]);
        const dir = isInc ? "increase" : "decrease";
        const traps = wrongDivNew !== pct
          ? [{ spec: { type: "number" as const, value: wrongDivNew, tolerance: 0.1 }, feedback: `Always divide the change (${change}) by the ORIGINAL value (${oldVal}), never the new value (${newVal})!` }]
          : [];
        return {
          prompt: `A geography dataset shows **${metric}** changed from **${oldVal}** in 2014 to **${newVal}** in 2024. Calculate the **percentage ${dir}**.`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          traps,
          solution: [
            `Change = |${newVal} − ${oldVal}| = ${change}.`,
            `Percentage ${dir} = (${change} ÷ ${oldVal}) × 100 = ${pct}%.`,
          ],
          hint: `Use ((|New − Old|) ÷ Old) × 100 — divide by the starting value (${oldVal})!`,
        };
      }

      // Tier 3: Unsorted skewed median OR TEA anomaly year identification
      if (rng.bool(0.55)) {
        const w1 = rng.int(95, 115);
        const w2 = w1 + rng.int(5, 12);
        const med = w2 + rng.int(5, 12);
        const w4 = med + rng.int(5, 15);
        const boss = rng.int(1600, 3200);
        const unsorted = rng.shuffle([w1, w2, med, w4, boss]);
        const meanVal = roundTo((w1 + w2 + med + w4 + boss) / 5, 1);
        const hub = rng.pick(HUBS);
        return {
          prompt: `Five monthly incomes (in US$) at a ${hub} garment workshop are: **${unsorted.join(", ")}**. Because the extreme owner salary skews the mean, find the **MEDIAN** monthly income.`,
          answer: { type: "number", value: med, display: `$${med}` },
          traps: [
            { spec: { type: "number", value: meanVal, tolerance: 0.2 }, feedback: `$${meanVal} is the skewed arithmetic mean — sort all five figures from smallest to largest and pick the 3rd value!` },
          ],
          solution: [
            `Sort ascending: ${w1}, ${w2}, ${med}, ${w4}, ${boss}.`,
            `The middle (3rd) value is $${med} (far more representative than the mean of $${meanVal}!).`,
          ],
          hint: "Sort the five numbers from lowest to highest first, then pick the exact middle number.",
        };
      }
      // TEA Anomaly year spotting on an upward trend with one sharp dip
      const startYear = rng.pick([2014, 2015, 2016, 2017]);
      const years = [0, 1, 2, 3, 4, 5].map((i) => startYear + i);
      const anomIdx = rng.int(2, 4);
      const startVal = rng.int(40, 75);
      const step = rng.int(8, 15);
      const series = years.map((yr, idx) => {
        const val = idx === anomIdx ? startVal + (idx - 1) * step - rng.int(16, 26) : startVal + idx * step;
        return `${yr}: ${val}`;
      });
      const anomYear = years[anomIdx];
      const subject = rng.pick(["global clothing output (bn items)", "textile port shipments (thousand TEUs)", "fashion retail revenue ($ bn)"]);
      return {
        prompt: `Using **TEA graph analysis**, inspect this annual time series of **${subject}**: ${series.join(" · ")}. Which **year** is the clear **anomaly** breaking the upward trend?`,
        answer: { type: "number", value: anomYear, display: String(anomYear) },
        solution: [
          `Overall trend: steady increase across the 6-year period.`,
          `Anomaly: **${anomYear}** breaks the upward trend with a sharp drop before rising again.`,
        ],
        hint: "Scan the values from left to right and spot the ONE year that suddenly drops instead of rising.",
      };
    },
  },
];
