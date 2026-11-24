import type { Drill, Rng } from "./types.ts";

function clean(n: number): number {
  return Math.round(n * 1000) / 1000;
}

const NEPAL_PRIMARY = [
  { item: "unreinforced brick houses collapsing across Kathmandu Valley", detail: "direct ground shaking" },
  { item: "Kathmandu's 19th-century Dharahara Tower toppling within seconds", detail: "direct seismic waves" },
  { item: "historic temples in Kathmandu Durbar Square, Patan, and Bhaktapur crumbling", detail: "direct shaking" },
  { item: "over 7,000 rural and urban school buildings collapsing or cracking dangerously", detail: "primary ground motion" },
  { item: "underground drinking-water pipes and power cables snapping across Gorkha", detail: "direct fault rupture and shaking" },
  { item: "roughly 9,000 immediate fatalities and 22,000 injuries from falling masonry", detail: "direct building collapse" },
  { item: "3.5 million residents made immediately homeless after >600,000 homes collapsed", detail: "direct structural destruction" },
  { item: "cracks fracturing Tribhuvan International Airport's runway apron and terminal walls", detail: "direct surface waves" },
] as const;

const NEPAL_SECONDARY = [
  { item: "an avalanche sweeping through Mount Everest Base Camp and killing 19 climbers", detail: "knock-on snow slope failure" },
  { item: "a massive rock-and-ice avalanche burying Langtang Valley village (~250+ dead/missing)", detail: "knock-on glacial slope collapse" },
  { item: "thousands of mountain landslides blocking highways and cutting off remote villages", detail: "knock-on slope instability" },
  { item: "a giant landslide temporarily damming the Kali Gandaki River and creating flash-flood risk", detail: "knock-on valley blockage" },
  { item: "an overall economic cost of ~US$5 billion (~25–35% of Nepal's annual GDP)", detail: "knock-on economic fallout" },
  { item: "a steep collapse in Himalayan trekking tourism revenue and guide jobs", detail: "knock-on livelihood shock" },
  { item: "stored rice and grain buried under rubble causing food shortages before the monsoon", detail: "knock-on food insecurity" },
  { item: "sanitation problems and waterborne disease risk inside crowded emergency tent camps", detail: "knock-on public-health impact" },
] as const;

const NEPAL_IMMEDIATE = [
  { action: "India launching Operation Maitri within hours with C-17 planes, sniffer dogs, and field hospitals", time: "within 6–24 hours" },
  { action: "Singapore's SCDF Operation Lionheart and SAF teams flying in to search Kathmandu rubble", time: "in the first 72 hours" },
  { action: "the UK Disasters Emergency Committee and Red Cross distributing waterproof tents and clean water", time: "during weeks 1–3" },
  { action: "Facebook Safety Check and Google Person Finder helping families locate missing relatives", time: "on 25–28 April 2015" },
  { action: "global OpenStreetMap volunteers tracing collapsed roads and tent camps from satellite imagery", time: "in the first week" },
  { action: "helicopters airlifting emergency trauma medics and food rations to landslide-isolated Gorkha villages", time: "within days 2–10" },
  { action: "Chinese and UK search-and-rescue teams using thermal cameras to locate trapped survivors", time: "in the first 4 days" },
] as const;

const NEPAL_LONGTERM = [
  { action: "Nepal's National Reconstruction Authority enforcing stricter seismic building codes on all new homes", time: "over 2015–2020" },
  { action: "training over 50,000 local Nepalese masons in horizontal timber-band earthquake-resistant walls", time: "across years 1–4" },
  { action: "distributing US$3,000 'Build Back Better' housing grants in three engineer-inspected tranches", time: "over 3–5 years" },
  { action: "permanently rebuilding over 7,000 earthquake-resilient schools and rural health clinics", time: "between 2016 and 2021" },
  { action: "restoring UNESCO heritage monuments in Kathmandu Durbar Square and rebuilding Dharahara Tower", time: "over 5+ years" },
  { action: "repairing the Araniko Highway, rural drinking-water pipelines, and hydropower plants", time: "across years 1–3" },
  { action: "reopening Mount Everest and Annapurna trekking trails and hazard-mapping landslide slopes", time: "in the years following 2015" },
] as const;

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (Level 1): Logarithmic Magnitude, Mercalli & P/S Wave Timing
  // =========================================================================
  {
    id: "earthquakes-nepal-2015.magnitude-mercalli-calc",
    topicId: "earthquakes-nepal-2015",
    title: "Logarithmic Magnitude, Mercalli & Wave Maths",
    level: 1,
    guideRef: "earthquake-causes-measurement",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Wave amplitude ratio (10^dM)
          const baseInt = rng.int(30, 62); // 3.0 to 6.2
          const step = rng.pick([1, 2, 3]);
          const m1 = (baseInt / 10).toFixed(1);
          const m2 = ((baseInt + step * 10) / 10).toFixed(1);
          const amp = Math.pow(10, step);
          return {
            prompt: `Earthquake A measures **M${m1}** and Earthquake B measures **M${m2}** on the Moment Magnitude Scale. How many times larger is Earthquake B's **seismic wave amplitude** than Earthquake A's?`,
            answer: { type: "number", value: amp, display: amp.toLocaleString("en-GB") },
            traps: [
              ...(step > 1 ? [{ spec: { type: "number" as const, value: step * 10 }, feedback: "Magnitude is logarithmic (10 to the power of ΔM), not linear (10 × ΔM)!" }] : []),
              ...(step === 1 ? [{ spec: { type: "number" as const, value: 32 }, feedback: "≈ 32× is the ENERGY jump for +1.0 — wave AMPLITUDE jumps by 10×!" }] : []),
              ...(step === 2 ? [{ spec: { type: "number" as const, value: 1000 }, feedback: "1,000× is the ENERGY jump for +2.0 — wave amplitude is 10² = 100!" }] : []),
            ],
            hint: `Find ΔM = ${m2} − ${m1} = ${step}. Each +1.0 step multiplies wave amplitude by 10.`,
            solution: [
              `Magnitude jump {{Delta M = ${m2} - ${m1} = ${step}}}.`,
              `Wave amplitude ratio = {{10^${step} = ${amp}}} times larger.`,
            ],
          };
        }
        // Distinguish Focus vs Epicentre or Magnitude vs Mercalli with parameterised field readings
        const sub = rng.int(0, 1);
        if (sub === 0) {
          const isFocus = rng.bool();
          const depth = rng.int(6, 48);
          const mag = (rng.int(52, 86) / 10).toFixed(1);
          return {
            prompt: isFocus
              ? `During an **M${mag}** earthquake, rock first snaps **${depth} km underground** along the fault plane. What is this underground rupture point called?`
              : `During an **M${mag}** earthquake originating **${depth} km underground**, geologists mark the point on **Earth's surface directly vertically above** the break. What is this surface point called?`,
            answer: isFocus
              ? { type: "text", accept: ["focus", "hypocentre", "hypocenter", "the focus"], display: "focus" }
              : { type: "text", accept: ["epicentre", "epicenter", "the epicentre", "the epicenter"], display: "epicentre" },
            traps: [
              {
                spec: { type: "text", accept: isFocus ? ["epicentre", "epicenter"] : ["focus", "hypocentre", "hypocenter"] },
                feedback: "Remember: Focus = Fault underground; Epicentre = Earth's surface directly above it!",
              },
            ],
            hint: "F = Fault underground (focus); E = Earth's surface directly above (epicentre).",
            solution: [isFocus ? "The underground point where rock ruptures is the **focus** (hypocentre)." : "The surface point directly above the focus is the **epicentre**."],
          };
        }
        const isMercalli = rng.bool();
        const mag = (rng.int(54, 84) / 10).toFixed(1);
        const roman = rng.pick(["V", "VI", "VII", "VIII", "IX", "X"]);
        return {
          prompt: isMercalli
            ? `After an **M${mag}** quake, damage inspectors assign level **${roman}** to a town on soft clay where brick walls crumbled, based on eyewitness and building surveys. Which measurement scale uses Roman numerals like **${roman}**?`
            : `Seismographs compute one objective logarithmic value of **${mag}** measuring total energy released at the fault (regardless of local building collapse). Name this modern scale.`,
          answer: isMercalli
            ? { type: "text", accept: ["Mercalli", "Mercalli scale", "Modified Mercalli", "Modified Mercalli scale", "Modified Mercalli intensity scale"], display: "Mercalli scale" }
            : { type: "text", accept: ["Moment Magnitude", "Moment Magnitude scale", "Richter", "Richter scale", "Mw"], display: "Moment Magnitude scale" },
          hint: isMercalli ? "Subjective scale from I to XII measuring observed shaking and damage." : "Objective seismometer scale (modern replacement for Richter).",
          solution: [
            isMercalli
              ? "Roman numerals I–XII recording observed local damage belong to the **Modified Mercalli Intensity Scale**."
              : "Total seismic energy released at the focus is measured on the **Moment Magnitude Scale** ($M_w$).",
          ],
        };
      }

      if (tier === 2) {
        // Energy jumps (+1.0 ≈ 32x, +2.0 = 1000x) and amplitude jumps
        const askEnergy = rng.bool(0.65);
        if (askEnergy) {
          const step = rng.pick([1, 2]);
          const baseInt = rng.int(35, 69);
          const m1 = (baseInt / 10).toFixed(1);
          const m2 = ((baseInt + step * 10) / 10).toFixed(1);
          if (step === 2) {
            return {
              prompt: `How many times MORE **energy** is released by an **M${m2}** earthquake compared with an **M${m1}** earthquake?`,
              answer: { type: "number", value: 1000, display: "1,000" },
              traps: [
                { spec: { type: "number", value: 100 }, feedback: "100× is the wave AMPLITUDE jump for +2.0 — ENERGY jumps by 31.6² = 1,000×!" },
                { spec: { type: "number", value: 64 }, feedback: "Logarithmic steps multiply (31.6 × 31.6 = 1,000), rather than adding 32 + 32!" },
              ],
              hint: `ΔM = ${m2} − ${m1} = +2.0. Remember: +2.0 = 100× wave amplitude and 1,000× energy.`,
              solution: [`Magnitude jump = +2.0 → energy ratio = {{10^(1.5 * 2) = 1000}} times more energy.`],
            };
          }
          return {
            prompt: `Using the standard rounded energy factor per whole magnitude step, roughly how many times MORE **energy** is released by an **M${m2}** quake than an **M${m1}** quake? (Nearest whole number.)`,
            answer: { type: "number", value: 32, tolerance: 0.5, display: "32" },
            traps: [
              { spec: { type: "number", value: 10 }, feedback: "10× is the wave AMPLITUDE jump for +1.0 — energy jumps by ≈ 31.6× (rounded to 32×)!" },
            ],
            hint: "Each +1.0 magnitude step multiplies wave amplitude by 10× and energy by ≈ 31.6× (≈ 32×).",
            solution: [`Magnitude jump = +1.0 → energy ratio = {{10^1.5}} ≈ 31.62 ≈ **32** times more energy.`],
          };
        }
        // Simple P-wave to S-wave gap (clean multiples of 21 km so /6 and /3.5 are clean halves/integers)
        const k = rng.int(2, 14);
        const dist = k * 21;
        const tP = clean(dist / 6);
        const tS = clean(dist / 3.5);
        const gap = clean(tS - tP);
        return {
          prompt: `A seismic station sits **${dist} km** from a fault rupture. P-waves travel at **6.0 km/s** and destructive S-waves travel at **3.5 km/s**. How many **seconds** after the P-waves arrive do the S-waves reach the station?`,
          answer: { type: "number", value: gap, display: `${gap} s` },
          traps: [{ spec: { type: "number", value: tS }, feedback: `${tS} s is total S-wave travel time — subtract P-wave arrival time (${tP} s) to find the gap!` }],
          hint: `Compute S-wave time (${dist} ÷ 3.5) minus P-wave time (${dist} ÷ 6.0).`,
          solution: [
            `P-wave time = {{${dist} / 6.0 = ${tP}}} s; S-wave time = {{${dist} / 3.5 = ${tS}}} s.`,
            `Warning gap = {{${tS} - ${tP} = ${gap}}} seconds.`,
          ],
        };
      }

      // Tier 3: Full EEW timeline with epicentre sensor distance + computer processing delay
      const sensorDist = rng.pick([12, 18, 24, 30, 36, 42]);
      const procDelay = rng.int(2, 5);
      const cityDist = rng.pick([105, 126, 140, 147, 168, 175, 189, 210, 231, 245, 252, 280]);
      const tP = clean(sensorDist / 6);
      const tAlert = clean(tP + procDelay);
      const tS = clean(cityDist / 3.5);
      const warn = clean(tS - tAlert);
      return {
        prompt: `An Earthquake Early Warning sensor **${sensorDist} km** from a focus detects P-waves (**6.0 km/s**) and takes **${procDelay} s** to broadcast an instant alert to a city **${cityDist} km** away. S-waves travel at **3.5 km/s**. How many **seconds** of advance warning does the city receive before S-waves hit?`,
        answer: { type: "number", value: warn, display: `${warn} s` },
        traps: [
          { spec: { type: "number", value: tS }, feedback: `${tS} s is raw S-wave travel time — subtract P-wave sensor time (${tP} s) AND processing delay (${procDelay} s)!` },
          { spec: { type: "number", value: clean(tS - tP) }, feedback: `Don't forget to subtract the ${procDelay} s computer processing delay too!` },
        ],
        hint: `Alert time = (${sensorDist} ÷ 6.0) + ${procDelay} s. Subtract that from city S-wave time (${cityDist} ÷ 3.5).`,
        solution: [
          `P-wave reaches sensor at {{${sensorDist} / 6.0 = ${tP}}} s; alert broadcasts at {{${tP} + ${procDelay} = ${tAlert}}} s.`,
          `S-waves reach city at {{${cityDist} / 3.5 = ${tS}}} s.`,
          `Usable advance warning = {{${tS} - ${tAlert} = ${warn}}} seconds.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (Level 1): Nepal 2015 Primary vs Secondary Effects & Data
  // =========================================================================
  {
    id: "earthquakes-nepal-2015.nepal-effects-classifier",
    topicId: "earthquakes-nepal-2015",
    title: "Nepal 2015: Primary vs Secondary Effects & Stats",
    level: 1,
    guideRef: "nepal-2015-causes-effects",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const isPrimary = rng.bool();
        const entry = isPrimary ? rng.pick(NEPAL_PRIMARY) : rng.pick(NEPAL_SECONDARY);
        const context = rng.pick([
          "25 April 2015 Gorkha M7.8 field dossier",
          "Kathmandu & Himalayan UN damage log",
          "Nepal 2015 post-disaster assessment",
          "Year 9 Geography Nepal case-study card",
          "Himalayan hazard report (April–May 2015)",
        ]);
        const refNum = rng.int(10, 99);
        return {
          prompt: `Case log #${refNum} (${context}): **${entry.item}**. Classify this as a **primary** or **secondary** effect.`,
          answer: {
            type: "text",
            accept: isPrimary ? ["primary", "primary effect", "primary effects"] : ["secondary", "secondary effect", "secondary effects"],
            display: isPrimary ? "primary" : "secondary",
          },
          hint: "Apply the Direct Shaking Test: caused directly by seismic shaking = primary; triggered afterward as a knock-on consequence = secondary.",
          solution: [`Because this resulted from ${entry.detail}, it is a **${isPrimary ? "primary" : "secondary"} effect**.`],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // GDP percentage burden calculation
          const gdp = rng.pick([16, 20, 24, 25, 30, 32, 40, 50]);
          const pct = rng.pick([15, 20, 25, 30, 35, 40]);
          const loss = clean((gdp * pct) / 100);
          return {
            prompt: `An LIC with an annual GDP of **US$${gdp} billion** suffers **US$${loss} billion** in earthquake damage (comparable to Nepal's 2015 shock). What **percentage** of its annual GDP is lost?`,
            answer: { type: "number", value: pct, display: `${pct}%` },
            hint: `Compute (${loss} ÷ ${gdp}) × 100.`,
            solution: [`Economic shock = {{(${loss} / ${gdp}) * 100 = ${pct}}}% of annual GDP.`],
          };
        }
        // Homeless share of population
        const popM = rng.pick([20, 25, 28, 30, 32, 40]);
        const pct = rng.pick([5, 10, 12.5, 15, 20, 25]);
        const homelessM = clean((popM * pct) / 100);
        return {
          prompt: `After a shallow collision quake, **${homelessM} million** people are made homeless out of a national population of **${popM} million**. What **percentage** of the population is displaced?`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          hint: `Divide ${homelessM} by ${popM}, then multiply by 100.`,
          solution: [`Displaced share = {{(${homelessM} / ${popM}) * 100 = ${pct}}}%.`],
        };
      }

      // Tier 3: Himalayan seismic-gap slip accumulation OR multi-step Nepal school/home rebuilding share
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const rate = rng.pick([3.5, 4.0, 4.5, 5.0, 5.5]);
        const years = rng.pick([120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 500]);
        const slipM = clean((rate * years) / 100);
        return {
          prompt: `Along the Himalayan collision margin, plates converge at **${rate.toFixed(1)} cm/year**. If a locked seismic gap west of Gorkha stores all convergence without rupturing for **${years} years**, how many **metres** of potential slip build up?`,
          answer: { type: "number", value: slipM, display: `${slipM} m` },
          traps: [{ spec: { type: "number", value: clean(rate * years) }, feedback: "That value is in centimetres — divide by 100 to express slip in metres!" }],
          hint: `Multiply ${rate.toFixed(1)} × ${years} cm, then divide by 100.`,
          solution: [`Stored slip = {{(${rate.toFixed(1)} * ${years}) / 100 = ${slipM}}} m.`],
        };
      }
      const destroyed = rng.int(4, 12) * 500;
      const damagedPool = [2, 3, 4, 5, 6, 7, 8].map((x) => x * 500).filter((v) => v !== destroyed);
      const damaged = rng.pick(damagedPool);
      const total = destroyed + damaged;
      const pctDestroyed = clean(Math.round((destroyed / total) * 1000) / 10);
      const pctDamaged = clean(Math.round((damaged / total) * 1000) / 10);
      return {
        prompt: `In an affected Himalayan district, **${destroyed.toLocaleString("en-GB")}** homes completely collapsed and **${damaged.toLocaleString("en-GB")}** suffered partial damage. What percentage of ALL affected homes completely collapsed? (Round to 1 d.p.)`,
        answer: { type: "number", value: pctDestroyed, tolerance: 0.1, display: `${pctDestroyed}%` },
        traps:
          Math.abs(pctDamaged - pctDestroyed) > 0.2
            ? [
                {
                  spec: { type: "number", value: pctDamaged, tolerance: 0.1 },
                  feedback: "That is the percentage partially damaged — compute collapsed ÷ total affected × 100!",
                },
              ]
            : undefined,
        hint: `Total affected = ${destroyed} + ${damaged} = ${total}. Compute (${destroyed} ÷ ${total}) × 100.`,
        solution: [
          `Total affected homes = {{${destroyed} + ${damaged} = ${total}}}.`,
          `Collapsed share = {{(${destroyed} / ${total}) * 100}} ≈ **${pctDestroyed}%**.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (Level 2): Nepal 2015 Immediate vs Long-Term Responses & Aid Maths
  // =========================================================================
  {
    id: "earthquakes-nepal-2015.nepal-responses-classifier",
    topicId: "earthquakes-nepal-2015",
    title: "Nepal 2015: Immediate vs Long-Term Responses",
    level: 2,
    guideRef: "nepal-2015-responses",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const isImm = rng.bool();
        const entry = isImm ? rng.pick(NEPAL_IMMEDIATE) : rng.pick(NEPAL_LONGTERM);
        const refNum = rng.int(100, 999);
        const region = rng.pick(["Kathmandu Valley", "Gorkha District", "Sindhupalchok", "Langtang & Rasuwa", "Bhaktapur & Patan"]);
        return {
          prompt: `Relief brief #${refNum} (${region}): **${entry.action}** (${entry.time}). Classify this as an **immediate** or **long-term** response.`,
          answer: {
            type: "text",
            accept: isImm ? ["immediate", "immediate response", "short-term", "short term"] : ["long-term", "long term", "long-term response", "long term response"],
            display: isImm ? "immediate" : "long-term",
          },
          hint: "Hours–weeks saving lives and giving emergency shelter = immediate; months–years rebuilding safely ('Build Back Better') = long-term.",
          solution: [`Because this action occurred ${entry.time}, it is a **${isImm ? "immediate" : "long-term"} response**.`],
        };
      }

      if (tier === 2) {
        // Staged Build Back Better grant budget calculation
        const familiesK = rng.pick([100, 150, 200, 250, 300, 350, 400, 450, 500, 600]);
        const grantPerFamily = rng.pick([2000, 2500, 3000, 3500, 4000]);
        const totalMillions = clean((familiesK * grantPerFamily) / 1000);
        return {
          prompt: `Under a 'Build Back Better' reconstruction scheme, **${familiesK.toLocaleString("en-GB")},000** qualifying families each receive a staged **US$${grantPerFamily.toLocaleString("en-GB")}** seismic housing grant. Calculate the total programme cost in **US$ millions**.`,
          answer: { type: "number", value: totalMillions, display: `${totalMillions} million` },
          traps: [
            { spec: { type: "number", value: clean(totalMillions / 1000) }, feedback: "That value is in US$ billions — the question asks for US$ millions!" },
          ],
          hint: `Multiply ${familiesK} thousand × $${grantPerFamily} and express in millions (divide dollars by 1,000,000).`,
          solution: [`Total cost = {{${familiesK}000 * ${grantPerFamily}}} = **US$${totalMillions.toLocaleString("en-GB")} million**.`],
        };
      }

      // Tier 3: Tranche disbursement / multi-step reconstruction progress maths
      const totalGrant = rng.pick([3000, 3600, 4200, 4500]);
      const t1 = rng.pick([500, 600, 750, 1000]);
      const t2 = rng.pick([1000, 1200, 1500]);
      const t3 = totalGrant - t1 - t2;
      const pctFinal = clean(Math.round((t3 / totalGrant) * 1000) / 10);
      const families = rng.int(40, 240);
      const askShare = rng.bool();
      if (askShare) {
        return {
          prompt: `A **US$${totalGrant.toLocaleString("en-GB")}** 'Build Back Better' grant pays **US$${t1}** after foundations pass inspection and **US$${t2}** after seismic walls pass inspection, with the remainder paid upon roof completion. What **percentage** (to 1 d.p.) is held back for the final roof tranche?`,
          answer: { type: "number", value: pctFinal, tolerance: 0.1, display: `${pctFinal}%` },
          hint: `Find remaining dollars: ${totalGrant} − ${t1} − ${t2} = ${t3}. Divide by ${totalGrant} and multiply by 100.`,
          solution: [
            `Final tranche = {{${totalGrant} - ${t1} - ${t2} = ${t3}}} dollars.`,
            `Percentage = {{(${t3} / ${totalGrant}) * 100}} ≈ **${pctFinal}%**.`,
          ],
        };
      }
      const totalPaidK = clean((families * (t1 + t2)) / 1000);
      return {
        prompt: `In one mountain municipality, **${families}** households have passed both Tranche 1 (**US$${t1}**) and Tranche 2 (**US$${t2}**) seismic inspections (but not Tranche 3 yet). How many **thousand US dollars** have been disbursed to these households so far?`,
        answer: { type: "number", value: totalPaidK, display: `${totalPaidK}` },
        hint: `Each household has received $${t1} + $${t2} = $${t1 + t2}. Multiply by ${families} and divide by 1,000.`,
        solution: [
          `Per household = {{${t1} + ${t2} = ${t1 + t2}}} dollars.`,
          `Total disbursed = {{${families} * ${t1 + t2} / 1000 = ${totalPaidK}}} thousand US dollars.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (Level 3): The 3 Ps (Predict, Protect, Prepare) & Aseismic Tech
  // =========================================================================
  {
    id: "earthquakes-nepal-2015.management-3ps-matcher",
    topicId: "earthquakes-nepal-2015",
    title: "3 Ps Classifier & Aseismic Engineering",
    level: 3,
    guideRef: "earthquake-management-3ps",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const items: Array<{ p: "predict" | "protect" | "prepare"; desc: string }> = [
          { p: "predict", desc: "mapping locked seismic gaps to compute 30-year rupture probabilities" },
          { p: "predict", desc: "tracking slow crustal strain with GPS receivers and laser tiltmeters" },
          { p: "predict", desc: "detecting fast P-waves via J-Alert to flash a 20-second Early Warning" },
          { p: "protect", desc: "installing rubber-and-lead base isolation bearings beneath hospital foundations" },
          { p: "protect", desc: "bolting diagonal steel cross-bracing across skyscraper exterior bays" },
          { p: "protect", desc: "suspending a 660-tonne tuned mass damper near a skyscraper roof" },
          { p: "protect", desc: "fitting horizontal timber ring-beams and lightweight roofs on rural LIC homes" },
          { p: "protect", desc: "installing automatic seismic gas shut-off valves and shatterproof glass" },
          { p: "prepare", desc: "running nationwide 'Drop, Cover, Hold On' drills on Disaster Prevention Day" },
          { p: "prepare", desc: "packing a 72-hour household grab-bag with water, whistle, torch, and first-aid kit" },
          { p: "prepare", desc: "strapping heavy bookshelves and water heaters securely to wall studs" },
          { p: "prepare", desc: "training local community first-aid volunteers and agreeing family meeting points" },
        ];
        const chosen = rng.pick(items);
        const city = rng.pick(["Tokyo", "Kathmandu", "San Francisco", "Taipei", "Wellington", "Istanbul", "Lima", "Osaka"]);
        const year = rng.int(2024, 2030);
        return {
          prompt: `Hazard plan (${city}, ${year}): **${chosen.desc}**. Under the 3 Ps framework, does this belong to **predict**, **protect**, or **prepare**?`,
          answer: { type: "text", accept: [chosen.p], display: chosen.p },
          hint: "Predict = monitoring/probabilities/EEW; Protect = engineering & safe structures; Prepare = drills, kits, education.",
          solution: [`This strategy belongs to the **${chosen.p}** pillar of the 3 Ps.`],
        };
      }

      if (tier === 2) {
        // Identify the exact aseismic engineering feature from an engineering brief
        const features = [
          {
            name: "base isolation",
            accept: ["base isolation", "base isolators", "rubber shock absorbers"],
            brief: "flexible rubber-and-lead shock-absorbing bearings separating foundations from violent ground motion",
          },
          {
            name: "cross-bracing",
            accept: ["cross-bracing", "cross bracing", "steel cross-bracing", "x-bracing"],
            brief: "diagonal steel X-shaped frames locking wall rectangles into rigid triangles against sideways shear",
          },
          {
            name: "tuned mass damper",
            accept: ["tuned mass damper", "mass damper", "counterweight", "damper"],
            brief: "a giant computer-controlled steel pendulum near the top floor swinging opposite to skyscraper sway",
          },
          {
            name: "shatterproof glass",
            accept: ["shatterproof glass", "laminated glass", "safety glass", "shatterproof laminated glass"],
            brief: "laminated window glazing bonded to an inner plastic sheet so broken panes cannot shower deadly shards onto streets",
          },
        ] as const;
        const f = rng.pick(features);
        const floors = rng.int(12, 88);
        const city = rng.pick(["Tokyo", "Taipei", "San Francisco", "Auckland", "Santiago", "Manila"]);
        return {
          prompt: `Architectural spec for a **${floors}-storey** tower in **${city}**: includes *${f.brief}*. Name this aseismic engineering feature.`,
          answer: { type: "text", accept: [...f.accept], display: f.name },
          hint: "Think of the four core 'Protect' skyscraper features: base isolation, cross-bracing, tuned mass damper, shatterproof glass.",
          solution: [`The feature described is **${f.name}**.`],
        };
      }

      // Tier 3: Appropriate LIC retrofit vs HIC engineering cost-effectiveness comparison
      const budgetM = rng.pick([6, 9, 12, 15, 18, 24, 30]);
      const hicUnitM = rng.pick([1.5, 2, 3]);
      const licCostK = rng.pick([2, 3, 4, 5, 6]);
      const hicCount = clean(budgetM / hicUnitM);
      const licCount = clean((budgetM * 1000) / licCostK);
      const ratio = clean(licCount / hicCount);
      const askLicCount = rng.bool();
      if (askLicCount) {
        return {
          prompt: `A disaster-resilience fund has **US$${budgetM} million**. Retrofitting one rural Himalayan home with timber ring-beams and a lightweight roof costs **US$${licCostK},000**. How many rural homes can this budget protect?`,
          answer: { type: "number", value: licCount, display: licCount.toLocaleString("en-GB") },
          hint: `Convert US$${budgetM} million to thousands (${budgetM * 1000} thousand) and divide by ${licCostK}.`,
          solution: [`Number of homes protected = {{${budgetM}000000 / ${licCostK}000 = ${licCount}}} rural homes.`],
        };
      }
      return {
        prompt: `With **US$${budgetM} million**, planners could either fit high-tech base isolation on **${hicCount}** luxury towers (**US$${hicUnitM}M** each) OR retrofit **${licCount.toLocaleString("en-GB")}** rural homes with timber ring-beams (**US$${licCostK},000** each). How many times MORE buildings are protected by the appropriate LIC retrofit?`,
        answer: { type: "number", value: ratio, display: String(ratio) },
        hint: `Divide ${licCount} rural homes by ${hicCount} towers.`,
        solution: [`{{${licCount} / ${hicCount} = ${ratio}}} times more buildings protected per dollar — showing why appropriate technology saves far more lives in LICs.`],
      };
    },
  },
];
