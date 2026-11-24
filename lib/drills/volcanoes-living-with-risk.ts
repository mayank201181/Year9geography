import type { Drill, Rng } from "./types.ts";

const SECTORS = [
  "North Ridge",
  "South Flank",
  "East Rift",
  "West Caldera",
  "Central Dome",
  "Coastal Vent",
  "Upper Crater",
  "Lower Spur",
] as const;

const VALLEYS = [
  "Kali Putih",
  "Gendol",
  "Krasak",
  "Boyong",
  "Lagunillas",
  "Pasig-Potrero",
  "Bued",
  "Opak",
] as const;

const REGIONS = [
  { name: "Mount Merapi (Java)", crop: "rice" },
  { name: "Mount Etna (Sicily)", crop: "citrus" },
  { name: "Mount Bromo (East Java)", crop: "vegetables" },
  { name: "Cotopaxi Foothills (Ecuador)", crop: "potatoes" },
  { name: "Mount Vesuvius (Campania)", crop: "grapes" },
  { name: "Mount Apo (Philippines)", crop: "coffee" },
] as const;

export const drills: Drill[] = [
  {
    id: "volcanoes-living-with-risk.shield-vs-composite",
    topicId: "volcanoes-living-with-risk",
    title: "Shield vs Composite Volcano Classifier",
    level: 1,
    guideRef: "shield-vs-composite",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const sector = rng.pick(SECTORS);
      const code = `V-${rng.int(10, 99)}`;

      if (tier === 1) {
        const isShield = rng.bool();
        if (isShield) {
          const slope = rng.int(2, 9);
          const silica = rng.int(48, 52);
          const temp = rng.int(108, 120) * 10;
          const cue = rng.pick([
            "frequent, runny lava rivers",
            "non-explosive glowing fountains",
            "cooled dark basalt sheets with no ash strata",
            "very wide gently sloping flanks",
          ]);
          return {
            prompt: `Survey **${code}** (${sector}): slope angle **${slope}°**, silica content **${silica}%**, lava temperature **${temp} °C**, showing ${cue}. Classify this volcano as **shield** or **composite**.`,
            answer: {
              type: "text",
              accept: ["shield", "shield volcano"],
              display: "shield",
            },
            traps: [
              {
                spec: { type: "text", accept: ["composite", "stratovolcano"] },
                feedback:
                  "Composite volcanoes have steep slopes (25°–35°) and high silica (60–70%). Gentle slopes and runny ~50% silica basalt indicate a **shield** volcano.",
              },
            ],
            hint: "Low silica (~50%) means runny basaltic lava that spreads widely into gentle 2°–10° slopes.",
            solution: [
              `Slope (${slope}°) is gentle (2°–10°) and silica (${silica}%) is low (~50% basaltic).`,
              "Runny, hot lava spreads far before cooling → **shield** volcano.",
            ],
          };
        }
        const slope = rng.int(25, 36);
        const silica = rng.int(61, 71);
        const temp = rng.int(78, 94) * 10;
        const cue = rng.pick([
          "alternating layers of hardened ash and lava",
          "infrequent, violently explosive eruptions",
          "thick viscous lava domes plugging the crater",
          "steep symmetrical flanks above a subduction trench",
        ]);
        return {
          prompt: `Survey **${code}** (${sector}): slope angle **${slope}°**, silica content **${silica}%**, magma temperature **${temp} °C**, showing ${cue}. Classify this volcano as **shield** or **composite**.`,
          answer: {
            type: "text",
            accept: ["composite", "composite volcano", "stratovolcano"],
            display: "composite",
          },
          traps: [
            {
              spec: { type: "text", accept: ["shield", "shield volcano"] },
              feedback:
                "Shield volcanoes have gentle 2°–10° slopes and low silica (~50%). Steep flanks and thick silica-rich magma indicate a **composite** volcano.",
            },
          ],
          hint: "High silica (60–70%) makes viscous sticky magma that piles into steep 25°–35° cones.",
          solution: [
            `Slope (${slope}°) is steep (25°–35°) and silica (${silica}%) is high (60–70%).`,
            "Thick viscous magma traps gas and builds alternating ash-and-lava cones → **composite** volcano.",
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          const isBasalt = rng.bool();
          const slope = isBasalt ? rng.int(3, 9) : rng.int(26, 35);
          const silica = isBasalt ? rng.int(48, 52) : rng.int(62, 70);
          const margin = isBasalt
            ? rng.pick(["a constructive mid-ocean ridge", "an oceanic mantle-plume hotspot"])
            : "a destructive oceanic-continental subduction margin";
          return {
            prompt: `Volcano **${code}** sits on ${margin} with **${slope}°** slopes and **${silica}%** silica. Is its magma **low** or **high** viscosity? (Write one word: low or high)`,
            answer: {
              type: "text",
              accept: isBasalt ? ["low", "low viscosity"] : ["high", "high viscosity"],
              display: isBasalt ? "low" : "high",
            },
            hint: "Higher silica content makes longer molecular chains, creating thicker (higher-viscosity) magma.",
            solution: [
              isBasalt
                ? `Silica is low (${silica}%) on ${margin}, producing runny basaltic lava with **low** viscosity.`
                : `Silica is high (${silica}%) at a destructive subduction zone, producing thick, sticky magma with **high** viscosity.`,
            ],
          };
        }
        const isDestructive = rng.bool();
        const slope = isDestructive ? rng.int(26, 36) : rng.int(3, 8);
        const silica = isDestructive ? rng.int(63, 72) : rng.int(48, 51);
        return {
          prompt: `Field site **${code}** (${sector}) records **${slope}°** slopes, **${silica}%** silica, and ${isDestructive ? "alternating ash-and-lava strata" : "runny basalt sheets with frequent effusive lava flows"}. Which plate margin type most likely formed it: **constructive** or **destructive**?`,
          answer: {
            type: "text",
            accept: isDestructive
              ? ["destructive", "destructive margin", "convergent", "subduction"]
              : ["constructive", "constructive margin", "divergent"],
            display: isDestructive ? "destructive" : "constructive",
          },
          hint: "Shield volcanoes (runny basalt) form at constructive margins/hotspots; steep composite volcanoes form at destructive subduction margins.",
          solution: [
            isDestructive
              ? `${slope}° steep ash-and-lava slopes and ${silica}% silica identify a composite volcano → **destructive** margin.`
              : `${slope}° gentle basaltic slopes and ${silica}% silica identify a shield volcano → **constructive** margin.`,
          ],
        };
      }

      // Tier 3: Compare two surveyed volcanoes A vs B
      const aIsComposite = rng.bool();
      const sShield = rng.int(48, 52);
      const sComp = rng.int(62, 72);
      const aSilica = aIsComposite ? sComp : sShield;
      const bSilica = aIsComposite ? sShield : sComp;
      const aSlope = aIsComposite ? rng.int(26, 36) : rng.int(3, 8);
      const bSlope = aIsComposite ? rng.int(3, 8) : rng.int(26, 36);
      const askExplosive = rng.bool();
      const rightLetter = askExplosive
        ? aIsComposite
          ? "A"
          : "B"
        : aIsComposite
          ? "B"
          : "A";
      const targetPhrase = askExplosive
        ? "higher trapped gas pressure and more explosive eruptions"
        : "runnier basaltic lava that travels further before cooling";

      return {
        prompt: `Compare two active cones near ${sector} (**${code}**): **Volcano A** has ${aSilica}% silica and ${aSlope}° slopes; **Volcano B** has ${bSilica}% silica and ${bSlope}° slopes. Which volcano (**A** or **B**) has ${targetPhrase}?`,
        answer: {
          type: "text",
          accept: [rightLetter, `volcano ${rightLetter}`],
          display: rightLetter,
        },
        hint: "Compare silica % and slope angle: ~65% silica & ~30° slopes = viscous explosive composite; ~50% silica & ~5° slopes = runny effusive shield.",
        solution: [
          `Volcano A (${aSilica}% silica, ${aSlope}°) is ${aIsComposite ? "composite (viscous/explosive)" : "shield (runny/effusive)"}; Volcano B (${bSilica}% silica, ${bSlope}°) is ${aIsComposite ? "shield (runny/effusive)" : "composite (viscous/explosive)"}.`,
          `Therefore Volcano **${rightLetter}** has ${targetPhrase}.`,
        ],
      };
    },
  },

  {
    id: "volcanoes-living-with-risk.hazards-and-timing",
    topicId: "volcanoes-living-with-risk",
    title: "Volcanic Hazards: Classification & Travel Time",
    level: 1,
    guideRef: "volcanic-hazards",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const valley = rng.pick(VALLEYS);

      if (tier === 1) {
        const eventType = rng.int(0, 5);
        if (eventType === 0) {
          const temp = rng.int(45, 70) * 10;
          const speed = rng.int(11, 24) * 10;
          return {
            prompt: `A ${temp} °C cloud of volcanic gas, ash, and rock fragments rushes down the ${valley} valley at ${speed} km/h during dome collapse. Is this a **primary** or **secondary** volcanic hazard?`,
            answer: { type: "text", accept: ["primary", "primary hazard"], display: "primary" },
            hint: "Ask: did it erupt directly from the volcano, or was it triggered afterwards by water/weather?",
            solution: [
              "A pyroclastic flow is released directly by the eruption itself → **primary** hazard.",
            ],
          };
        }
        if (eventType === 1) {
          const rain = rng.int(45, 140);
          const days = rng.int(3, 28);
          return {
            prompt: `${days} days after an eruption, ${rain} mm of heavy tropical rainfall washes loose ash down the ${valley} river channel as a mudflow. Is this a **primary** or **secondary** volcanic hazard?`,
            answer: { type: "text", accept: ["secondary", "secondary hazard"], display: "secondary" },
            hint: "Rain mixing with deposited ash days later is a knock-on consequence.",
            solution: [
              "A lahar triggered afterwards by rainwater mobilising loose ash is a **secondary** hazard.",
            ],
          };
        }
        if (eventType === 2) {
          const flights = rng.int(12, 95) * 100;
          const km = rng.int(4, 18) * 100;
          return {
            prompt: `An ash plume drifting ${km} km downwind forces airports to cancel ${flights} international flights. Is this aviation shutdown a **primary** or **secondary** volcanic hazard?`,
            answer: { type: "text", accept: ["secondary", "secondary hazard"], display: "secondary" },
            hint: "Airspace closures are knock-on economic/transport consequences of airborne ash.",
            solution: [
              "Flight cancellations triggered by ash threatening jet turbines are a **secondary** hazard.",
            ],
          };
        }
        if (eventType === 3) {
          const speed = rng.int(2, 12);
          const temp = rng.int(90, 115) * 10;
          return {
            prompt: `A ${temp} °C stream of molten basaltic rock advances down the ${valley} flank at ${speed} km/h, crossing a highway. Is this lava flow a **primary** or **secondary** volcanic hazard?`,
            answer: { type: "text", accept: ["primary", "primary hazard"], display: "primary" },
            hint: "Molten rock oozing straight from the volcanic vent is a direct eruption product.",
            solution: [
              "Lava flowing directly out of the volcano during an eruption is a **primary** hazard.",
            ],
          };
        }
        if (eventType === 4) {
          const depth = rng.int(12, 32);
          const homes = rng.int(25, 180);
          return {
            prompt: `Following a downpour, ${depth} cm of rain-soaked ash causes ${homes} flat town roofs near ${valley} to buckle and collapse. Is roof collapse a **primary** or **secondary** hazard?`,
            answer: { type: "text", accept: ["secondary", "secondary hazard"], display: "secondary" },
            hint: "Structural roof collapse happens after ash settles and absorbs heavy rainwater.",
            solution: [
              "Roof collapse caused by wet deposited ash loading buildings afterwards is a **secondary** hazard.",
            ],
          };
        }
        const tonnes = rng.int(15, 65) * 100;
        return {
          prompt: `During an active blast above ${valley}, the crater vents ${tonnes} tonnes/day of toxic sulphur dioxide (SO₂) and volcanic bombs. Are these a **primary** or **secondary** volcanic hazard?`,
          answer: { type: "text", accept: ["primary", "primary hazard"], display: "primary" },
          hint: "Volcanic gases and bombs shoot straight from the vent during eruption.",
          solution: [
            "Volcanic gases and airborne tephra/bombs erupted directly from the crater are **primary** hazards.",
          ],
        };
      }

      if (tier === 2) {
        const pick = rng.int(0, 3);
        if (pick === 0) {
          const temp = rng.int(40, 72) * 10;
          const speed = rng.int(12, 26) * 10;
          return {
            prompt: `Observatory log (${valley}): superheated ${temp} °C avalanche of volcanic gas, ash, and rock racing downhill at ${speed} km/h. Name this specific hazard (two words).`,
            answer: {
              type: "text",
              accept: ["pyroclastic flow", "pyroclastic flows"],
              display: "pyroclastic flow",
            },
            traps: [
              {
                spec: { type: "text", accept: ["lahar", "lahars"] },
                feedback:
                  "A lahar is a wet ash-and-water mudflow (40–70 km/h). A dry 700 °C gas-and-rock avalanche at 100+ km/h is a **pyroclastic flow**.",
              },
            ],
            hint: "Starts with 'pyro-' (fire) and travels far faster than any car.",
            solution: [
              `A ${temp} °C, ${speed} km/h ground-hugging cloud of gas, ash, and rock is a **pyroclastic flow**.`,
            ],
          };
        }
        if (pick === 1) {
          const speed = rng.int(40, 70);
          const water = rng.pick([
            `${rng.int(60, 140)} mm of monsoon rain`,
            "rapidly melted summit glacier ice",
            "suddenly melted crater snowpack",
          ]);
          return {
            prompt: `Observatory log (${valley}): loose volcanic ash mixed with ${water}, sweeping down the river channel at ${speed} km/h like wet concrete. Name this specific hazard (one word).`,
            answer: {
              type: "text",
              accept: ["lahar", "lahars"],
              display: "lahar",
            },
            traps: [
              {
                spec: { type: "text", accept: ["pyroclastic flow", "pyroclastic flows"] },
                feedback:
                  "Pyroclastic flows are dry superheated gas clouds. A wet volcanic mudflow in a river valley is a **lahar**.",
              },
            ],
            hint: "Five-letter Indonesian geographical word for a volcanic mudflow.",
            solution: [
              `Loose volcanic ash mobilised by ${water} in a river channel forms a **lahar**.`,
            ],
          };
        }
        if (pick === 2) {
          const km = rng.int(15, 90);
          const depth = rng.int(5, 25);
          return {
            prompt: `Observatory log (${valley}): airborne volcanic bombs near the crater and ${depth} cm of fine glassy ash blanketing farmland ${km} km downwind. Give the one-word collective term for all solid fragments blasted into the air.`,
            answer: {
              type: "text",
              accept: ["tephra"],
              display: "tephra",
            },
            hint: "Six-letter term starting with 't' covering bombs, lapilli, and volcanic ash.",
            solution: [
              "All airborne solid rock fragments ejected explosively (bombs through fine ash) are called **tephra**.",
            ],
          };
        }
        const speed = rng.int(2, 9);
        const temp = rng.int(95, 118) * 10;
        return {
          prompt: `Observatory log (${valley}): glowing stream of molten rock at ${temp} °C creeping at ${speed} km/h — slow enough for residents to evacuate, yet destroying roads permanently. Name this hazard (two words).`,
          answer: {
            type: "text",
            accept: ["lava flow", "lava flows", "lava"],
            display: "lava flow",
          },
          hint: "Molten rock moving slowly over Earth's surface (rarely lethal, always destructive to property).",
          solution: [
            `A slow-moving ${temp} °C stream of molten rock on the surface is a **lava flow**.`,
          ],
        };
      }

      // Tier 3: Travel time (exact integer minutes) or wet-ash roof load (kg)
      const calcMode = rng.int(0, 1);
      if (calcMode === 0) {
        // Choose speed in km/h that divides cleanly with 60: 60, 120, 150, 180, 240, 300
        const pair = rng.pick([
          { speed: 120, distChoices: [6, 8, 10, 12, 14, 16, 18, 20, 22, 24] },
          { speed: 150, distChoices: [5, 10, 15, 20, 25] },
          { speed: 180, distChoices: [6, 9, 12, 15, 18, 21, 24, 27] },
          { speed: 240, distChoices: [8, 12, 16, 20, 24, 28, 32] },
          { speed: 60, distChoices: [4, 7, 9, 11, 13, 15, 18, 22] },
        ]);
        const dist = rng.pick(pair.distChoices);
        const mins = Math.round((dist / pair.speed) * 60);
        const hazard = pair.speed === 60 ? "lahar" : "pyroclastic flow";
        return {
          prompt: `A **${hazard}** races **${dist} km** down the ${valley} valley at a constant speed of **${pair.speed} km/h**. How many **minutes** does it take to reach the valley town?`,
          answer: {
            type: "number",
            value: mins,
            display: `${mins} minutes`,
          },
          traps: [
            {
              spec: { type: "number", value: Math.round((pair.speed / dist) * 10) / 10 },
              feedback:
                "Check your formula: time = distance ÷ speed (not speed ÷ distance), then multiply hours by 60.",
            },
          ],
          hint: "Compute time in hours = distance ÷ speed, then multiply by 60 to convert into minutes.",
          solution: [
            `Time (hours) = {{${dist} / ${pair.speed}}} hr.`,
            `Time (minutes) = {{${dist} / ${pair.speed}}} × 60 = **${mins} minutes**.`,
          ],
        };
      }

      const w = rng.int(6, 14);
      const l = rng.int(8, 16);
      const loadPerSqm = rng.pick([150, 180, 200, 220, 250]);
      const area = w * l;
      const totalKg = area * loadPerSqm;
      return {
        prompt: `Rain-soaked volcanic ash near ${valley} weighs **${loadPerSqm} kg per m²**. Calculate the total ash load (in **kg**) pressing on a flat community hall roof measuring **${w} m × ${l} m**.`,
        answer: {
          type: "number",
          value: totalKg,
          display: `${totalKg} kg`,
        },
        traps: [
          {
            spec: { type: "number", value: area },
            feedback: `${area} m² is only the roof area — now multiply by ${loadPerSqm} kg/m².`,
          },
        ],
        hint: "Find the roof area (length × width), then multiply by the ash mass per square metre.",
        solution: [
          `Roof area = ${w} × ${l} = ${area} m².`,
          `Total load = ${area} × ${loadPerSqm} = **${totalKg} kg**.`,
        ],
      };
    },
  },

  {
    id: "volcanoes-living-with-risk.living-with-risk-factors",
    topicId: "volcanoes-living-with-risk",
    title: "Living Near Volcanoes: Reasons & Yield Data",
    level: 2,
    guideRef: "why-live-near-volcanoes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const scenario = rng.int(0, 4);
        if (scenario === 0) {
          const reg = rng.pick(REGIONS);
          const extra = rng.int(25, 65);
          return {
            prompt: `Farmers on the weathered ash slopes of **${reg.name}** harvest **${extra}% more ${reg.crop}** than neighbouring plains. Which category of reason is this: **economic** or **social**?`,
            answer: { type: "text", accept: ["economic", "economic reason"], display: "economic" },
            hint: "Higher crop yields boost farm profits and income.",
            solution: [
              "High-yield farming on fertile volcanic soils generates income → **economic** reason.",
            ],
          };
        }
        if (scenario === 1) {
          const mw = rng.int(40, 240);
          const pct = rng.int(75, 92);
          return {
            prompt: `A volcanic power station supplies **${mw} MW** of clean steam electricity and heats **${pct}%** of local homes cheaply. Name this renewable energy source (one or two words).`,
            answer: {
              type: "text",
              accept: ["geothermal", "geothermal energy", "geothermal power"],
              display: "geothermal energy",
            },
            hint: "Uses underground volcanic heat ('geo' = Earth, 'thermal' = heat).",
            solution: [
              "Steam heated by underground magma generates **geothermal energy**.",
            ],
          };
        }
        if (scenario === 2) {
          const gens = rng.int(3, 7);
          const cost = rng.int(4, 15) * 1000;
          const reg = rng.pick(REGIONS);
          return {
            prompt: `A family living near **${reg.name}** for **${gens} generations** stays because safe farmland elsewhere costs **$${cost}** (beyond their savings) and their ancestors are buried there. Is this mainly an **economic** pull factor or a **social** constraint? (Write one word: economic or social)`,
            answer: { type: "text", accept: ["social", "social constraint", "social factor"], display: "social" },
            hint: "Ancestral ties and inability to afford relocation keep families in place rather than attracting new investment.",
            solution: [
              "Family/ancestral ties and poverty-driven lack of choice are **social** factors keeping residents near volcanoes.",
            ],
          };
        }
        if (scenario === 3) {
          const visitors = rng.int(3, 28) * 100000;
          const jobs = rng.int(4, 24) * 100;
          return {
            prompt: `A volcanic crater park and hot-spring lagoon attract **${visitors.toLocaleString("en-US")} visitors/year**, supporting **${jobs} hotel and guide jobs**. Name this economic pull factor (one word).`,
            answer: { type: "text", accept: ["tourism", "ecotourism", "eco-tourism"], display: "tourism" },
            hint: "Visitors travelling to see craters, lava fields, and hot springs create jobs in hotels and guiding.",
            solution: [
              "Visitor spending on hot springs, guides, and hotels is volcanic **tourism**.",
            ],
          };
        }
        const kg = rng.int(65, 95);
        const wage = rng.int(12, 24);
        return {
          prompt: `Workers at East Java's Kawah Ijen crater carry **${kg} kg** baskets of condensed yellow volcanic deposits for **$${wage}/day**. Name this mineral (one word).`,
          answer: { type: "text", accept: ["sulphur", "sulfur"], display: "sulphur" },
          hint: "Bright yellow volcanic mineral used in matches, fertiliser, and sugar refining.",
          solution: [
            "Miners at Kawah Ijen extract solidified yellow volcanic **sulphur**.",
          ],
        };
      }

      if (tier === 2) {
        const reg = rng.pick(REGIONS);
        const base = rng.pick([400, 500, 600, 800, 1000, 1200, 2000]);
        const pct = rng.pick([20, 25, 30, 35, 40, 45, 50, 60, 75]);
        const volcanicYield = Math.round(base * (1 + pct / 100));
        const diff = volcanicYield - base;
        return {
          prompt: `Near **${reg.name}**, non-volcanic farms average **${base} kg/ha** of ${reg.crop}, whereas weathered volcanic soil farms average **${volcanicYield} kg/ha**. Calculate the **percentage increase** in crop yield.`,
          answer: {
            type: "number",
            value: pct,
            display: `${pct}%`,
          },
          traps: [
            {
              spec: { type: "number", value: diff },
              feedback: `${diff} kg/ha is the absolute gain — divide by the original ${base} and multiply by 100 for %.`,
            },
            {
              spec: { type: "number", value: 100 + pct },
              feedback: `${100 + pct}% is the new total relative to baseline — subtract 100% for the percentage increase.`,
            },
          ],
          hint: `First subtract: ${volcanicYield} − ${base} = ${diff}. Then divide by ${base} and multiply by 100.`,
          solution: [
            `Yield gain = ${volcanicYield} − ${base} = ${diff} kg/ha.`,
            `Percentage increase = {{${diff} / ${base}}} × 100 = **${pct}%**.`,
          ],
        };
      }

      // Tier 3: Net multi-year trade-off OR geothermal energy share %
      if (rng.bool()) {
        const reg = rng.pick(REGIONS);
        const years = rng.pick([10, 12, 15, 20]);
        const nonVolc = rng.int(16, 28) * 100;
        const extraPerYr = rng.int(6, 16) * 100;
        const volc = nonVolc + extraPerYr;
        const grossGain = extraPerYr * years;
        const loss = rng.int(2, 6) * 1000;
        const net = grossGain - loss;
        return {
          prompt: `A farming family near **${reg.name}** earns **$${volc}/yr** on fertile ash soil vs **$${nonVolc}/yr** on safe plains. One eruption every **${years} years** costs them **$${loss}** in evacuation losses. What is their **net extra income** (in $) over ${years} years by staying?`,
          answer: {
            type: "number",
            value: net,
            display: `$${net}`,
          },
          traps: [
            {
              spec: { type: "number", value: grossGain },
              feedback: `$${grossGain} is the gross ${years}-year gain — remember to subtract the $${loss} eruption cost.`,
            },
          ],
          hint: `Find annual advantage ($${volc} − $${nonVolc}), multiply by ${years} years, then subtract $${loss}.`,
          solution: [
            `Annual advantage = $${volc} − $${nonVolc} = $${extraPerYr}/yr.`,
            `Gross ${years}-year advantage = ${years} × $${extraPerYr} = $${grossGain}.`,
            `Net extra income = $${grossGain} − $${loss} = **$${net}**.`,
          ],
        };
      }

      const totalDemand = rng.pick([200, 250, 400, 500, 800]);
      const pct = rng.pick([20, 24, 28, 30, 32, 36, 40, 45, 50, 60, 75, 80]);
      const geoOutput = Math.round((totalDemand * pct) / 100);
      const town = rng.pick(["Reykjavik East", "Akureyri", "Rotorua", "Taupo", "Hveragerdi"]);
      return {
        prompt: `In volcanic town **${town}**, geothermal turbines generate **${geoOutput} MW** out of a total electricity demand of **${totalDemand} MW**. What **percentage** of the town's electricity comes from geothermal energy?`,
        answer: {
          type: "number",
          value: pct,
          display: `${pct}%`,
        },
        hint: `Compute (${geoOutput} ÷ ${totalDemand}) × 100.`,
        solution: [
          `Geothermal share = {{${geoOutput} / ${totalDemand}}} × 100 = **${pct}%**.`,
        ],
      };
    },
  },

  {
    id: "volcanoes-living-with-risk.monitoring-instruments",
    topicId: "volcanoes-living-with-risk",
    title: "Volcano Monitoring, Instruments & Telemetry",
    level: 3,
    guideRef: "predict-prepare-volcanoes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const sector = rng.pick(SECTORS);

      if (tier === 1) {
        const tool = rng.int(0, 3);
        if (tool === 0) {
          const cm = rng.int(3, 19);
          const days = rng.int(2, 10);
          return {
            prompt: `Station **${sector}** detects the mountainside bulging outward by **${cm} cm** over ${days} days as magma inflates the chamber. Which ground instrument bolted to the slope detects this angle shift? (One word)`,
            answer: {
              type: "text",
              accept: ["tiltmeter", "tiltmeters", "tilt meter"],
              display: "tiltmeter",
            },
            traps: [
              {
                spec: { type: "text", accept: ["seismometer", "seismometers"] },
                feedback:
                  "Seismometers record earth tremors; slope angle bulging is measured by a **tiltmeter**.",
              },
            ],
            hint: "Works like an ultra-sensitive carpenter's spirit level measuring slope tilt.",
            solution: [
              `Outward ground inflation (${cm} cm slope shift) is detected by a **tiltmeter** (and confirmed by satellite GPS).`,
            ],
          };
        }
        if (tool === 1) {
          const quakes = rng.int(55, 240);
          return {
            prompt: `Station **${sector}** logs **${quakes} harmonic tremors per hour** as rising magma fractures deep rock. Which instrument records these vibrations? (One word)`,
            answer: {
              type: "text",
              accept: ["seismometer", "seismometers", "seismograph"],
              display: "seismometer",
            },
            traps: [
              {
                spec: { type: "text", accept: ["tiltmeter", "tiltmeters"] },
                feedback:
                  "Tiltmeters detect slow slope bulging; rhythmic earth tremors are recorded by a **seismometer**.",
              },
            ],
            hint: "Same instrument used globally to record tectonic earthquakes.",
            solution: [
              `Harmonic tremors (${quakes}/hr) caused by rock cracking are logged by a **seismometer**.`,
            ],
          };
        }
        if (tool === 2) {
          const low = rng.int(15, 35) * 10;
          const high = rng.int(12, 42) * 100;
          return {
            prompt: `Crater readings at **${sector}** show a toxic gas spiking from **${low}** to **${high} tonnes/day** as rising magma loses pressure. Name this gas (formula or full name).`,
            answer: {
              type: "text",
              accept: ["so2", "so₂", "sulphur dioxide", "sulfur dioxide"],
              display: "SO₂ (sulphur dioxide)",
            },
            hint: "Matchstick-smelling volcanic gas tracked by gas spectrometers.",
            solution: [
              `Gas spectrometers track rising **sulphur dioxide (SO₂)** (${low} → ${high} tonnes/day) escaping shallow magma.`,
            ],
          };
        }
        const jump = rng.int(80, 320);
        return {
          prompt: `An infrared sensor mounted on a drone over **${sector}** detects crater rock temperatures jumping by **+${jump} °C**. Name this type of camera (**thermal camera** or **tiltmeter**).`,
          answer: {
            type: "text",
            accept: ["thermal camera", "thermal cameras", "thermal imaging camera", "thermal"],
            display: "thermal camera",
          },
          hint: "Detects heat/infrared temperature changes at the crater floor and fumaroles.",
          solution: [
            `A **thermal camera** (infrared sensor) maps rising crater heat (+${jump} °C).`,
          ],
        };
      }

      if (tier === 2) {
        const base = rng.pick([100, 200, 250, 300, 400, 500]);
        const pct = rng.pick([50, 100, 150, 200, 250, 300, 350, 400]);
        const peak = Math.round(base * (1 + pct / 100));
        const inc = peak - base;
        const metric = rng.bool()
          ? { name: "SO₂ emissions", unit: "tonnes/day" }
          : { name: "harmonic tremors", unit: "quakes/day" };
        return {
          prompt: `Observatory **${sector}** logs **${metric.name}** jumping from **${base} ${metric.unit}** to **${peak} ${metric.unit}** in 48 hours. Calculate the **percentage increase**.`,
          answer: {
            type: "number",
            value: pct,
            display: `${pct}%`,
          },
          traps: [
            {
              spec: { type: "number", value: pct + 100 },
              feedback: `${pct + 100}% is peak ÷ base × 100 — subtract 100% (or divide the increase ${inc} by ${base}) to get the percentage increase.`,
            },
          ],
          hint: `Increase = ${peak} − ${base} = ${inc}. Divide ${inc} by ${base} and multiply by 100.`,
          solution: [
            `Increase = ${peak} − ${base} = ${inc} ${metric.unit}.`,
            `Percentage increase = {{${inc} / ${base}}} × 100 = **${pct}%**.`,
          ],
        };
      }

      // Tier 3: Exclusion zone area scaling OR evacuation bus logistics
      if (rng.bool()) {
        const r1 = rng.pick([4, 5, 6, 8, 10]);
        const k = rng.pick([2, 3]);
        const r2 = r1 * k;
        const factor = k * k;
        return {
          prompt: `After alert escalation at **${sector}**, authorities expand a circular volcanic exclusion zone from radius **${r1} km** to **${r2} km**. By what factor does the total evacuated **area** multiply?`,
          answer: {
            type: "number",
            value: factor,
            display: `${factor}`,
          },
          traps: [
            {
              spec: { type: "number", value: k },
              feedback: `The radius multiplied by ${k}, but circle area scales with r² — multiply by ${k}² = **${factor}**.`,
            },
          ],
          hint: "Circle area is πr². Compare r₂² ÷ r₁² (notice π cancels out).",
          solution: [
            `Radius scale factor = {{${r2} / ${r1}}} = ${k}.`,
            `Area scale factor = {{${k}^2}} = **${factor}** times larger.`,
          ],
        };
      }

      const cap = rng.pick([40, 50, 60]);
      const trips = rng.int(12, 48);
      const buses = rng.pick([4, 6]);
      const cleanTrips = trips % buses === 0 ? trips : trips + (buses - (trips % buses));
      const cleanResidents = cap * cleanTrips;
      const rounds = cleanTrips / buses;
      return {
        prompt: `Alert Level Red is declared at **${sector}**. Emergency teams must evacuate **${cleanResidents} residents** using **${buses} buses**, each holding **${cap} passengers**. How many full round-trips must **each** bus complete to evacuate everyone?`,
        answer: {
          type: "number",
          value: rounds,
          display: `${rounds}`,
        },
        traps: [
          {
            spec: { type: "number", value: cleanTrips },
            feedback: `${cleanTrips} is the total number of busloads needed — divide by ${buses} buses working together.`,
          },
        ],
        hint: `First find how many residents all ${buses} buses move in 1 round (${buses} × ${cap}), then divide ${cleanResidents} by that number.`,
        solution: [
          `Capacity per round across all ${buses} buses = ${buses} × ${cap} = ${buses * cap} residents.`,
          `Rounds per bus = {{${cleanResidents} / ${buses * cap}}} = **${rounds}**.`,
        ],
      };
    },
  },
];
