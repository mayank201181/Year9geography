import type { Drill, Rng } from "./types.ts";

function clean(n: number): number {
  return Math.round(n * 1000) / 1000;
}

const REGIONS_CONSTRUCTIVE = [
  "the Mid-Atlantic Ridge near Iceland",
  "the central Atlantic seafloor",
  "the East African Rift in Kenya",
  "the Reykjanes Ridge south of Iceland",
  "the East Pacific Rise",
  "the Red Sea spreading axis",
] as const;

const REGIONS_CONSERVATIVE = [
  "California's San Andreas Fault",
  "the Alpine Fault in New Zealand's South Island",
  "the North Anatolian Fault in Turkey",
  "a Pacific–North American transform segment",
  "the Queen Charlotte Fault off western Canada",
  "a fracture zone offsetting a mid-ocean ridge",
] as const;

const REGIONS_DESTRUCTIVE = [
  "the Nazca–South American margin off Peru",
  "the Japan Trench east of Honshu",
  "the Sunda Trench south of Java",
  "the Peru–Chile margin bordering the Andes",
  "the Cascadia margin off Washington State",
  "the Mariana subduction zone in the western Pacific",
] as const;

const REGIONS_COLLISION = [
  "the Indian–Eurasian margin in Nepal",
  "the Himalayan thrust belt in Tibet",
  "the Alpine belt where Africa pushes into Europe",
  "the Karakoram Range in northern Pakistan",
  "the Zagros collision belt in Iran",
  "the southern margin of the Tibetan Plateau",
] as const;

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (Level 1): Earth's Layers & Oceanic vs Continental Crust
  // =========================================================================
  {
    id: "plate-tectonics-margins.earth-layers-crust",
    topicId: "plate-tectonics-margins",
    title: "Earth's Layers & Crust Properties",
    level: 1,
    guideRef: "earths-structure-movement",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Identify Earth layer from depth & physical reading
          const layerPick = rng.int(0, 3);
          if (layerPick === 0) {
            const depth = rng.int(5200, 6350);
            const temp = rng.int(5100, 5900);
            return {
              prompt: `A geophysical model samples Earth at **${depth.toLocaleString("en-GB")} km** depth: temperature **${temp.toLocaleString("en-GB")} °C**, composed of **solid** iron and nickel under crushing pressure. Name this layer.`,
              answer: { type: "text", accept: ["inner core", "the inner core"], display: "inner core" },
              traps: [{ spec: { type: "text", accept: ["outer core"] }, feedback: "The outer core is liquid (2,900–5,150 km depth); solid iron-nickel at >5,150 km is the inner core." }],
              hint: "Immense pressure keeps Earth's deepest metallic layer solid despite extreme heat.",
              solution: [`Depth ${depth.toLocaleString("en-GB")} km lies inside Earth's **inner core** (5,150–6,370 km), which is solid iron and nickel.`],
            };
          }
          if (layerPick === 1) {
            const depth = rng.int(3050, 5000);
            const temp = rng.int(4100, 4900);
            return {
              prompt: `A seismic profile detects **liquid** iron and nickel at **${depth.toLocaleString("en-GB")} km** depth and **${temp.toLocaleString("en-GB")} °C**, generating Earth's magnetic field. Name this layer.`,
              answer: { type: "text", accept: ["outer core", "the outer core"], display: "outer core" },
              traps: [{ spec: { type: "text", accept: ["inner core"] }, feedback: "The inner core is solid; the liquid iron-nickel layer generating Earth's magnetic field is the outer core." }],
              hint: "S-waves cannot pass through this molten metallic shell.",
              solution: [`Liquid iron-nickel at ${depth.toLocaleString("en-GB")} km depth is Earth's **outer core**.`],
            };
          }
          if (layerPick === 2) {
            const depth = rng.int(250, 2800);
            const temp = rng.int(1200, 3500);
            return {
              prompt: `At **${depth.toLocaleString("en-GB")} km** depth and **${temp.toLocaleString("en-GB")} °C**, silicate rock behaves plastically like warm toffee and slowly convects. Name this main layer.`,
              answer: { type: "text", accept: ["mantle", "the mantle"], display: "mantle" },
              traps: [{ spec: { type: "text", accept: ["crust"] }, feedback: "Earth's crust is at most 70 km thick; silicate rock hundreds to thousands of kilometres down is the mantle." }],
              hint: "This is Earth's thickest layer (~2,900 km), sitting between the crust and outer core.",
              solution: [`Silicate rock at ${depth.toLocaleString("en-GB")} km depth belongs to Earth's **mantle** (~2,900 km thick).`],
            };
          }
          const depth = rng.int(100, 220);
          return {
            prompt: `At **${depth} km** depth directly below rigid tectonic plates sits a semi-molten, ductile upper-mantle zone that lets plates slowly move. Name this zone.`,
            answer: { type: "text", accept: ["asthenosphere", "the asthenosphere"], display: "asthenosphere" },
            traps: [{ spec: { type: "text", accept: ["lithosphere"] }, feedback: "The lithosphere is the rigid plate *above*; the ductile upper mantle beneath is the asthenosphere." }],
            hint: "Its name comes from Greek *asthenes* ('weak').",
            solution: ["The semi-molten, ductile upper mantle layer beneath the lithosphere is the **asthenosphere**."],
          };
        }
        if (mode === 1) {
          // Identify oceanic vs continental crust from core sample
          const isOceanic = rng.bool();
          const thick = isOceanic ? rng.int(5, 10) : rng.int(32, 68);
          const age = isOceanic ? rng.int(15, 185) : rng.int(800, 3800);
          const rock = isOceanic ? "dark basalt" : "pale granite";
          const dens = isOceanic ? "3.0" : "2.7";
          return {
            prompt: `Drill core #${rng.int(10, 99)} measures **${thick} km** thick, **${dens} g/cm³** density, **${age} million years** old, made of ${rock}. Is this **oceanic** or **continental** crust?`,
            answer: {
              type: "text",
              accept: isOceanic ? ["oceanic", "oceanic crust"] : ["continental", "continental crust"],
              display: isOceanic ? "oceanic" : "continental",
            },
            hint: "Oceanic crust is thin (5–10 km), dense (~3.0 g/cm³), young (<200 Myr), basaltic; continental crust is thick (30–70 km), buoyant (~2.7 g/cm³), granitic.",
            solution: [
              `Thickness ${thick} km, density ${dens} g/cm³, age ${age} Myr, and ${rock} all match **${isOceanic ? "oceanic" : "continental"} crust**.`,
            ],
          };
        }
        // Identify driving force
        const forceIdx = rng.int(0, 2);
        const speed = clean(rng.int(15, 110) / 10);
        if (forceIdx === 0) {
          return {
            prompt: `A cold, dense oceanic plate travelling at **${speed} cm/year** plunges into a trench and drags the trailing plate behind it. Name this strongest plate-driving force.`,
            answer: { type: "text", accept: ["slab pull"], display: "slab pull" },
            traps: [{ spec: { type: "text", accept: ["ridge push"] }, feedback: "Ridge push happens at elevated mid-ocean ridges; sinking dense crust pulling at a trench is slab pull." }],
            hint: "Two words: the sinking *slab* exerts a downward *pull*.",
            solution: ["**Slab pull** occurs where cold, dense oceanic crust sinks at a subduction trench and pulls the rest of the plate behind it."],
          };
        }
        if (forceIdx === 1) {
          return {
            prompt: `At an elevated mid-ocean ridge spreading at **${speed} cm/year**, newly formed cooling lithosphere slides downhill away from the crest under gravity. Name this driving force.`,
            answer: { type: "text", accept: ["ridge push"], display: "ridge push" },
            traps: [{ spec: { type: "text", accept: ["slab pull"] }, feedback: "Slab pull acts at subduction trenches; gravitational sliding away from a ridge crest is ridge push." }],
            hint: "Two words: gravity gives the elevated *ridge* flank a *push* downhill.",
            solution: ["**Ridge push** is the gravitational sliding of newly formed oceanic lithosphere downhill away from an elevated mid-ocean ridge."],
          };
        }
        return {
          prompt: `Radioactive decay heats deep mantle rock so it rises, spreads sideways at **${speed} cm/year**, cools, and sinks back down. Name these mantle cycles.`,
          answer: { type: "text", accept: ["convection currents", "mantle convection currents", "convection", "mantle convection"], display: "convection currents" },
          hint: "Hotter, less dense material rises while cooler, denser material sinks in circular loops.",
          solution: ["Circular heat-driven mantle loops are **mantle convection currents**."],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Thickness ratio or difference between continental & oceanic crust
          const oc = rng.int(5, 9);
          const mult = rng.int(4, 8);
          const cont = oc * mult;
          return {
            prompt: `At a coastal survey, oceanic crust is **${oc} km** thick and neighbouring continental crust is **${cont} km** thick. How many times thicker is the continental crust than the oceanic crust?`,
            answer: { type: "number", value: mult, display: String(mult) },
            traps: [{ spec: { type: "number", value: cont - oc }, feedback: "That is the difference in km — divide continental thickness by oceanic thickness to find 'how many times thicker'." }],
            hint: `Divide ${cont} km by ${oc} km.`,
            solution: [`{{${cont} / ${oc} = ${mult}}} times thicker.`],
          };
        }
        if (mode === 1) {
          // Depth to Moho / core-mantle boundary
          const crust = rng.int(6, 65);
          const mantle = 2900;
          const total = crust + mantle;
          return {
            prompt: `Beneath a region where the crust is **${crust} km** thick and the mantle is **2,900 km** thick, what is the total depth (in km) to the top of the liquid outer core?`,
            answer: { type: "number", value: total, display: `${total} km` },
            hint: "Add crust thickness and mantle thickness together.",
            solution: [`Depth to outer core = {{${crust} + 2900 = ${total}}} km.`],
          };
        }
        // Remaining lifetime of oceanic crust before typical 200 Myr max recycling age
        const age = rng.int(25, 175);
        const rem = 200 - age;
        return {
          prompt: `An oceanic basalt sample is dated at **${age} million years** old. Taking **200 million years** as the typical maximum age of oceanic crust before subduction, how many million years older can it grow before reaching that limit?`,
          answer: { type: "number", value: rem, display: `${rem}` },
          hint: `Subtract ${age} from 200.`,
          solution: [`{{200 - ${age} = ${rem}}} million years.`],
        };
      }

      // Tier 3: Multi-step calculations with Earth layers & crust densities/temperatures
      const mode = rng.int(0, 1);
      if (mode === 0) {
        // Geothermal temperature gradient across the crust/lithosphere
        const surfTemp = rng.int(10, 25);
        const grad = rng.pick([20, 25, 30]);
        const depth = rng.int(6, 25);
        const temp = surfTemp + grad * depth;
        return {
          prompt: `Surface rock temperature is **${surfTemp} °C** and temperature rises by **${grad} °C per km** of depth through the crust. Calculate the rock temperature (in °C) at **${depth} km** depth.`,
          answer: { type: "number", value: temp, display: `${temp} °C` },
          traps: [{ spec: { type: "number", value: grad * depth }, feedback: "Don't forget to add the starting surface temperature!" }],
          hint: `Multiply ${grad} °C/km by ${depth} km, then add ${surfTemp} °C.`,
          solution: [`Temperature = {{${surfTemp} + ${grad} * ${depth} = ${temp}}} °C.`],
        };
      }
      // Mass of a 1 km^3 block difference or density comparison
      const ocDens = rng.pick([2.9, 3.0, 3.1, 3.2]);
      const contDens = rng.pick([2.6, 2.7, 2.8]);
      const diff = clean(ocDens - contDens);
      const pct = clean(Math.round((diff / contDens) * 1000) / 10);
      return {
        prompt: `In a subduction zone, oceanic basalt has density **${ocDens.toFixed(1)} g/cm³** and continental granite has density **${contDens.toFixed(1)} g/cm³**. By what percentage (to 1 decimal place) is the oceanic crust denser than the continental crust?`,
        answer: { type: "number", value: pct, tolerance: 0.1, display: `${pct}%` },
        traps: [{ spec: { type: "number", value: clean(Math.round((diff / ocDens) * 1000) / 10), tolerance: 0.1 }, feedback: "Divide the difference by the continental baseline density, not by the oceanic density." }],
        hint: `Compute (${ocDens.toFixed(1)} − ${contDens.toFixed(1)}) ÷ ${contDens.toFixed(1)} × 100.`,
        solution: [
          `Difference = {{${ocDens.toFixed(1)} - ${contDens.toFixed(1)} = ${diff}}} g/cm³.`,
          `Percentage higher = {{(${diff} / ${contDens.toFixed(1)}) * 100}} ≈ **${pct}%**.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (Level 1): Plate Margin Matcher (All 4 Margins)
  // =========================================================================
  {
    id: "plate-tectonics-margins.margin-matcher",
    topicId: "plate-tectonics-margins",
    title: "4-Margin Landform & Hazard Matcher",
    level: 1,
    guideRef: "constructive-conservative",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const mType = rng.int(0, 3); // 0=constructive, 1=conservative, 2=destructive, 3=collision
      const rate = clean(rng.int(15, 95) / 10);

      if (tier === 1) {
        if (mType === 0) {
          const loc = rng.pick(REGIONS_CONSTRUCTIVE);
          const clue = rng.pick([
            "two plates diverge and rising basaltic magma cools into brand-new crust",
            "gentle shield volcanoes erupt runny lava beside shallow mild earthquakes",
            "seafloor pulls apart at a mid-ocean ridge",
          ]);
          return {
            prompt: `Survey near **${loc}** (rate **${rate} cm/year**): ${clue}. Name this type of plate margin.`,
            answer: { type: "text", accept: ["constructive", "constructive margin", "divergent", "divergent margin"], display: "constructive" },
            traps: [{ spec: { type: "text", accept: ["conservative", "conservative margin"] }, feedback: "Conservative margins slide past with NO volcanoes; pulling apart to create new crust is constructive (divergent)." }],
            hint: "New crust is being *constructed* as plates pull apart.",
            solution: ["Plates diverging with rising basaltic magma and shield volcanoes define a **constructive (divergent)** margin."],
          };
        }
        if (mType === 1) {
          const loc = rng.pick(REGIONS_CONSERVATIVE);
          const depth = rng.int(6, 22);
          const clue = rng.pick([
            "two plates slide horizontally past each other with stick-slip friction and NO volcanoes",
            "crust is neither created nor destroyed, yet powerful shallow earthquakes jolt offset rivers",
            "two plates travel in the same direction at different speeds without any volcanic vents",
          ]);
          return {
            prompt: `Survey near **${loc}** (rate **${rate} cm/year**, quake depth **${depth} km**): ${clue}. Name this type of plate margin.`,
            answer: { type: "text", accept: ["conservative", "conservative margin", "transform", "transform margin"], display: "conservative" },
            traps: [{ spec: { type: "text", accept: ["collision", "collision margin"] }, feedback: "Collision margins push two continental plates head-on into fold mountains; horizontal sideways sliding is conservative (transform)." }],
            hint: "Crust is *conserved* (neither created nor destroyed).",
            solution: ["Horizontal sliding with friction, shallow quakes, and zero volcanoes defines a **conservative (transform)** margin."],
          };
        }
        if (mType === 2) {
          const loc = rng.pick(REGIONS_DESTRUCTIVE);
          const depth = rng.int(120, 580);
          const clue = rng.pick([
            "a denser oceanic plate subducts under a continental plate, forming a trench and composite volcanoes",
            "flux melting above a sinking slab fuels steep explosive volcanoes and megathrust quakes",
            "an oceanic slab plunges down into the mantle beside fold mountains and deep quakes",
          ]);
          return {
            prompt: `Survey near **${loc}** (rate **${rate} cm/year**, max focus depth **${depth} km**): ${clue}. Name this type of plate margin.`,
            answer: { type: "text", accept: ["destructive", "destructive margin", "convergent", "subduction", "subduction zone"], display: "destructive" },
            traps: [{ spec: { type: "text", accept: ["collision", "collision margin"] }, feedback: "Collision margins involve two continental plates with NO subduction and NO volcanoes; oceanic subduction is a destructive margin." }],
            hint: "Old oceanic crust is *destroyed* by subduction into the mantle.",
            solution: ["Subduction of denser oceanic crust with a trench, explosive composite volcanoes, and deep quakes defines a **destructive** margin."],
          };
        }
        const loc = rng.pick(REGIONS_COLLISION);
        const elev = rng.int(5800, 8800);
        const clue = rng.pick([
          "two buoyant continental plates crumple upward into towering fold mountains with NO active volcanoes",
          "neither plate can subduct, lifting ancient marine sediments skyward alongside fierce shallow quakes",
          "intense continental compression builds huge mountains with zero trenches and zero volcanoes",
        ]);
        return {
          prompt: `Survey near **${loc}** (rate **${rate} cm/year**, peaks up to **${elev.toLocaleString("en-GB")} m**): ${clue}. Name this type of plate margin.`,
          answer: { type: "text", accept: ["collision", "collision margin", "continental collision"], display: "collision" },
          traps: [{ spec: { type: "text", accept: ["destructive", "destructive margin"] }, feedback: "Destructive margins subduct oceanic crust and erupt composite volcanoes; two buoyant continents crumpling upward with NO volcanoes is a collision margin." }],
          hint: "Two continental plates crash head-on without either sinking.",
          solution: ["Two buoyant continental plates buckling into towering fold mountains with earthquakes and no volcanoes define a **collision** margin."],
        };
      }

      if (tier === 2) {
        // Ask for the specific landform or volcano type given margin clues + numbers
        const pick = rng.int(0, 3);
        if (pick === 0) {
          const depth = rng.int(6500, 10900);
          const loc = rng.pick(REGIONS_DESTRUCTIVE);
          return {
            prompt: `At **${loc}**, sonar maps a narrow V-shaped seafloor depression **${depth.toLocaleString("en-GB")} m** deep where the oceanic plate bends downward to subduct. Name this landform.`,
            answer: { type: "text", accept: ["ocean trench", "trench", "deep ocean trench", "oceanic trench"], display: "ocean trench" },
            hint: "Examples include the Peru-Chile and Mariana ___.",
            solution: ["Where a subducting oceanic plate bends downward into the mantle, it forms a deep **ocean trench**."],
          };
        }
        if (pick === 1) {
          const slope = rng.int(3, 8);
          const loc = rng.pick(REGIONS_CONSTRUCTIVE);
          return {
            prompt: `At **${loc}**, runny low-viscosity basaltic lava erupts frequently from fissures, building a wide cone with gentle **${slope}°** slopes. Name this volcano type.`,
            answer: { type: "text", accept: ["shield", "shield volcano", "shield volcanoes"], display: "shield volcano" },
            traps: [{ spec: { type: "text", accept: ["composite", "composite volcano", "stratovolcano"] }, feedback: "Composite volcanoes are steep and explosive at destructive margins; wide gentle basaltic cones are shield volcanoes." }],
            hint: "Shaped like a warrior's curved ___ lying flat on the ground.",
            solution: ["Runny basaltic magma at constructive margins and hotspots builds broad, gentle **shield volcanoes**."],
          };
        }
        if (pick === 2) {
          const slope = rng.int(26, 36);
          const loc = rng.pick(REGIONS_DESTRUCTIVE);
          return {
            prompt: `At **${loc}**, thick viscous silica-rich magma traps gas and erupts explosively in alternating ash and lava layers, forming a steep **${slope}°** cone. Name this volcano type.`,
            answer: { type: "text", accept: ["composite", "composite volcano", "stratovolcano", "composite cone"], display: "composite volcano" },
            traps: [{ spec: { type: "text", accept: ["shield", "shield volcano"] }, feedback: "Shield volcanoes have gentle slopes and runny lava; steep alternating ash-and-lava cones are composite volcanoes (stratovolcanoes)." }],
            hint: "Built from *composed* (alternating) layers of ash and sticky lava.",
            solution: ["Explosive subduction eruptions build steep **composite volcanoes** (stratovolcanoes)."],
          };
        }
        const elev = rng.int(4500, 8800);
        const loc = rng.pick(REGIONS_COLLISION);
        return {
          prompt: `At **${loc}**, intense compression at **${rate} cm/year** buckles rock strata upward to **${elev.toLocaleString("en-GB")} m** above sea level without any subduction. Name these mountain landforms.`,
          answer: { type: "text", accept: ["fold mountains", "fold mountain", "fold mountain range"], display: "fold mountains" },
          hint: "Sedimentary rock layers bend into giant *folds*.",
          solution: ["Compressed and buckled crustal layers form **fold mountains** (such as the Himalayas and Alps)."],
        };
      }

      // Tier 3: Diagnostic matrix — deduce whether volcanoes occur ("yes" / "no") or deduce margin from Benioff depth + magma viscosity
      const subMode = rng.int(0, 1);
      if (subMode === 0) {
        const scenario = rng.int(0, 3);
        const mag = clean(rng.int(65, 89) / 10);
        const depths = [
          { margin: "constructive", loc: rng.pick(REGIONS_CONSTRUCTIVE), hasVolc: "yes", depth: rng.int(5, 18), desc: "plates diverging at a mid-ocean rift" },
          { margin: "conservative", loc: rng.pick(REGIONS_CONSERVATIVE), hasVolc: "no", depth: rng.int(8, 20), desc: "plates sliding sideways along a locked transform fault" },
          { margin: "destructive", loc: rng.pick(REGIONS_DESTRUCTIVE), hasVolc: "yes", depth: rng.int(150, 620), desc: "dense oceanic crust subducting along a Benioff zone" },
          { margin: "collision", loc: rng.pick(REGIONS_COLLISION), hasVolc: "no", depth: rng.int(10, 35), desc: "two buoyant continental plates crumpling skyward" },
        ][scenario];
        return {
          prompt: `Field log (${depths.loc}, M${mag.toFixed(1)} quake at ${depths.depth} km depth): ${depths.desc}. Do active volcanoes normally form at this margin? Answer **yes** or **no**.`,
          answer: { type: "text", accept: [depths.hasVolc], display: depths.hasVolc },
          hint: "Remember C-D Erupts, C-C Shakes Only: Constructive & Destructive = yes; Conservative & Collision = no.",
          solution: [`This is a **${depths.margin}** margin, so active volcanoes normally occur: **${depths.hasVolc}**.`],
        };
      }
      // Identify margin solely from quantitative seismic profile (max focus depth + crust types + volcano status)
      const prof = rng.int(0, 3);
      if (prof === 0) {
        const d1 = rng.int(10, 25);
        const d2 = rng.int(350, 650);
        return {
          prompt: `Seismic profile #${rng.int(100, 999)}: focus depths slope inland from **${d1} km** to **${d2} km**, offshore water depth plunges to **8,900 m**, and viscous eruptions occur **160 km** inland. Name the margin type.`,
          answer: { type: "text", accept: ["destructive", "destructive margin", "subduction", "subduction zone"], display: "destructive" },
          hint: "Sloping deep earthquakes (Benioff zone >300 km) occur ONLY at one margin type.",
          solution: [`Deep Benioff-zone earthquakes (${d2} km), trench depth, and inland volcanism uniquely identify a **destructive** subduction margin.`],
        };
      }
      if (prof === 1) {
        const d1 = rng.int(5, 16);
        const age = rng.int(1, 5);
        return {
          prompt: `Seismic profile #${rng.int(100, 999)}: shallow quakes (**${d1} km**), seafloor rock is **< ${age} Myr** old basalt, and symmetrical magnetic stripes mirror both sides of a **2,500 m** underwater ridge. Name the margin type.`,
          answer: { type: "text", accept: ["constructive", "constructive margin", "divergent", "divergent margin"], display: "constructive" },
          hint: "Brand-new basalt and symmetrical magnetic stripes form where plates pull apart.",
          solution: ["Young basaltic rock and symmetrical seafloor spreading identify a **constructive (divergent)** margin."],
        };
      }
      if (prof === 2) {
        const d1 = rng.int(6, 18);
        const off = clean(rng.int(20, 75) / 10);
        return {
          prompt: `Seismic profile #${rng.int(100, 999)}: shallow quakes (**${d1} km**), streams are displaced horizontally by **${off} m** after rupture, crustal thickness stays constant, and zero volcanoes exist. Name the margin type.`,
          answer: { type: "text", accept: ["conservative", "conservative margin", "transform", "transform margin"], display: "conservative" },
          hint: "Horizontal offset with unchanged crust and zero volcanoes.",
          solution: ["Horizontal fault displacement with conserved crust and zero volcanism identifies a **conservative (transform)** margin."],
        };
      }
      const d1 = rng.int(8, 28);
      const thick = rng.int(58, 72);
      return {
        prompt: `Seismic profile #${rng.int(100, 999)}: shallow quakes (**${d1} km**), continental crust is buckled to **${thick} km** thick, marine fossils sit at **6,000+ m** elevation, and zero active volcanoes exist. Name the margin type.`,
        answer: { type: "text", accept: ["collision", "collision margin", "continental collision"], display: "collision" },
        hint: "Extra-thick continental crust (~60–70 km) plus uplifted marine fossils and zero volcanoes.",
        solution: [`Doubled continental crust (${thick} km), high marine fossils, and zero volcanoes identify a **collision** margin.`],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (Level 2): Plate Motion, Subduction & Fault-Slip Calculations
  // =========================================================================
  {
    id: "plate-tectonics-margins.subduction-plate-rates",
    topicId: "plate-tectonics-margins",
    title: "Plate Speed, Subduction & Slip Maths",
    level: 2,
    guideRef: "destructive-collision",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // Distance = rate (cm/yr) * time (Myr) * 10 km
        const rate = rng.pick([1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 7.5, 8, 9, 10]);
        const myr = rng.int(2, 16);
        const distKm = clean(rate * myr * 10);
        const verb = rng.pick([
          "subducts beneath a continent",
          "widens across a mid-ocean ridge",
          "converges along a Himalayan collision zone",
          "slides past along a transform boundary",
        ]);
        return {
          prompt: `A tectonic plate ${verb} at **${rate} cm/year**. How many **kilometres** does it move in **${myr} million years**?`,
          answer: { type: "number", value: distKm, display: `${distKm} km` },
          traps: [
            { spec: { type: "number", value: clean(distKm / 10) }, feedback: "Remember 1 cm/year × 1 million years = 10 km (not 1 km)!" },
          ],
          hint: "Use the shortcut: `1 cm/year × 1 million years = 10 km`.",
          solution: [
            `Distance in cm = {{${rate} * ${myr}000000}} cm.`,
            `Divide by 100,000 cm/km (or multiply ${rate} × ${myr} × 10) = **${distKm} km**.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Solve for slip in metres over N years at a conservative fault
          const rate = rng.pick([2, 2.5, 3, 3.5, 4, 4.5, 5, 6]);
          const years = rng.pick([40, 50, 60, 80, 100, 120, 150, 200, 250, 300]);
          const metres = clean((rate * years) / 100);
          return {
            prompt: `A locked segment of a conservative fault accumulates strain at **${rate} cm/year** for **${years} years** before snapping in an earthquake. How many **metres** of sudden slip occur?`,
            answer: { type: "number", value: metres, display: `${metres} m` },
            traps: [{ spec: { type: "number", value: clean(rate * years) }, feedback: "That answer is in centimetres — divide by 100 to convert to metres." }],
            hint: `Multiply ${rate} × ${years} to get cm, then divide by 100.`,
            solution: [
              `Total strain = {{${rate} * ${years} = ${clean(rate * years)}}} cm.`,
              `Convert to metres: {{${clean(rate * years)} / 100 = ${metres}}} m.`,
            ],
          };
        }
        // Solve for plate speed in cm/yr from total km and Myr
        const rate = rng.pick([2, 2.5, 3, 4, 4.5, 5, 6, 7.5, 8, 9, 10]);
        const myr = rng.int(4, 20);
        const distKm = clean(rate * myr * 10);
        return {
          prompt: `An oceanic slab has subducted **${distKm.toLocaleString("en-GB")} km** into a trench over **${myr} million years**. Calculate the average subduction speed in **cm/year** (number only).`,
          answer: { type: "number", value: rate, display: String(rate) },
          traps: [{ spec: { type: "number", value: clean(rate * 10) }, feedback: "Check unit conversion: speed in cm/yr = distance (km) ÷ Myr ÷ 10." }],
          hint: "Convert km to cm (× 100,000) and divide by years, or use `km ÷ Myr ÷ 10`.",
          solution: [`Speed = {{${distKm} / (${myr} * 10) = ${rate}}} cm/year.`],
        };
      }

      // Tier 3: Symmetric mid-ocean ridge full spreading rate vs half-rate, OR time in Myr to close an ocean basin
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const halfRate = rng.pick([1.2, 1.5, 1.8, 2.0, 2.2, 2.5, 3.0, 3.5, 4.0]);
        const fullRate = clean(halfRate * 2);
        const myr = rng.pick([10, 15, 20, 25, 30, 40, 50]);
        const oneSideKm = clean(halfRate * myr * 10);
        return {
          prompt: `At a symmetric constructive ridge, seafloor **${oneSideKm.toLocaleString("en-GB")} km** east of the ridge crest is **${myr} million years** old. Calculate the **TOTAL** spreading rate (both plates moving apart combined) in **cm/year** (number only).`,
          answer: { type: "number", value: fullRate, display: String(fullRate) },
          traps: [{ spec: { type: "number", value: halfRate }, feedback: `${halfRate} cm/year is the half-rate for ONE side — double it for the TOTAL separation rate of both plates!` }],
          hint: "Find the one-sided half-rate (`km ÷ Myr ÷ 10`), then double it for symmetric two-sided spreading.",
          solution: [
            `One-side half-rate = {{${oneSideKm} / (${myr} * 10) = ${halfRate}}} cm/year.`,
            `Total spreading rate (both sides) = {{2 * ${halfRate} = ${fullRate}}} cm/year.`,
          ],
        };
      }
      const rate = rng.pick([2, 2.5, 4, 5, 6, 8, 10]);
      const myr = rng.int(5, 35);
      const widthKm = clean(rate * myr * 10);
      return {
        prompt: `An ancient ocean basin **${widthKm.toLocaleString("en-GB")} km** wide is closing by subduction at a steady **${rate} cm/year**. How many **million years** until the two continents collide?`,
        answer: { type: "number", value: myr, display: `${myr}` },
        hint: "Since `1 cm/yr × 1 Myr = 10 km`, divide width (km) by `(rate × 10)`.",
        solution: [
          `Closing distance per million years = {{${rate} * 10 = ${clean(rate * 10)}}} km.`,
          `Time = {{${widthKm} / ${clean(rate * 10)} = ${myr}}} million years.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (Level 3): Global Distribution, Ring of Fire & Hotspot Conveyor
  // =========================================================================
  {
    id: "plate-tectonics-margins.global-patterns-hotspots",
    topicId: "plate-tectonics-margins",
    title: "Ring of Fire & Hotspot Conveyor Maths",
    level: 3,
    guideRef: "global-hazard-distribution",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Ring of Fire share of volcanoes (75%) or earthquakes (80% / 90%)
          const isVolc = rng.bool();
          if (isVolc) {
            const total = rng.int(40, 180) * 4;
            const ring = (total * 3) / 4;
            return {
              prompt: `In a global catalogue of **${total}** active volcanoes, **75%** lie along the Pacific Ring of Fire. How many of these active volcanoes are on the Ring of Fire?`,
              answer: { type: "number", value: ring, display: String(ring) },
              traps: [{ spec: { type: "number", value: total - ring }, feedback: `${total - ring} is the remaining 25% outside the Ring of Fire — find 75% (three-quarters).` }],
              hint: "Calculate 75% (three-quarters) of the total.",
              solution: [`{{0.75 * ${total} = ${ring}}} active volcanoes.`],
            };
          }
          const pct = rng.pick([80, 85, 90]);
          const total = rng.int(10, 60) * 20;
          const ring = (total * pct) / 100;
          return {
            prompt: `A year's seismic dataset logs **${total}** major earthquakes worldwide, with **${pct}%** along the Pacific Ring of Fire. How many occurred inside the Ring of Fire?`,
            answer: { type: "number", value: ring, display: String(ring) },
            hint: `Multiply ${total} by ${pct / 100}.`,
            solution: [`{{${pct / 100} * ${total} = ${ring}}} earthquakes.`],
          };
        }
        // Hotspot distance from speed and age
        const speed = rng.pick([6, 7, 7.5, 8, 8.5, 9, 9.5, 10]);
        const age = rng.int(2, 12);
        const dist = clean(speed * age * 10);
        return {
          prompt: `A tectonic plate moves over a stationary mantle-plume hotspot at **${speed} cm/year**. How many **kilometres** from the active volcano will an extinct island dated at **${age} million years** sit?`,
          answer: { type: "number", value: dist, display: `${dist} km` },
          hint: "Use `1 cm/yr × 1 Myr = 10 km` → multiply speed × age × 10.",
          solution: [`Distance = {{${speed} * ${age} * 10 = ${dist}}} km.`],
        };
      }

      if (tier === 2) {
        // Compute plate speed from extinct hotspot island distance & age
        const speed = rng.pick([4, 5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11]);
        const age = rng.int(2, 12);
        const dist = clean(speed * age * 10);
        const dir = rng.pick(["northwest", "west-northwest", "northeast", "north"]);
        return {
          prompt: `An extinct volcanic island in a hotspot trail lies **${dist.toLocaleString("en-GB")} km** ${dir} of the active plume and is **${age} million years** old. Calculate the plate's average speed in **cm/year** (number only).`,
          answer: { type: "number", value: speed, display: String(speed) },
          traps: [{ spec: { type: "number", value: clean(speed * 10) }, feedback: "Watch your units: divide km by (Myr × 10) to get cm/year." }],
          hint: "Convert km to cm (× 100,000) and divide by age in years (or use `dist ÷ age ÷ 10`).",
          solution: [
            `Distance = {{${dist} * 100000}} cm over ${age},000,000 years.`,
            `Speed = {{${dist} / (${age} * 10) = ${speed}}} cm/year moving ${dir}.`,
          ],
        };
      }

      // Tier 3: Two-island interval plate speed (like Hawaii–Emperor chain speed changes!)
      const age1 = rng.int(1, 4);
      const dt = rng.int(2, 7);
      const age2 = age1 + dt;
      const speedRecent = rng.pick([6, 7, 8, 9, 10]);
      const speedOldPool = [5, 6, 7, 8, 9, 10, 11, 12].filter((s) => s !== speedRecent);
      const speedOld = rng.pick(speedOldPool);
      const d1 = clean(speedRecent * age1 * 10);
      const d2 = clean(d1 + speedOld * dt * 10);
      const avgAll = clean(Math.round((d2 / (age2 * 10)) * 10) / 10);
      return {
        prompt: `In a hotspot island chain, Island A (**${age1} Myr** old) lies **${d1} km** from the active plume, while older Island B (**${age2} Myr** old) lies **${d2.toLocaleString("en-GB")} km** away along the same track. Calculate the plate's average speed in **cm/year** specifically between **${age2} Myr** and **${age1} Myr** ago (number only).`,
        answer: { type: "number", value: speedOld, display: String(speedOld) },
        traps:
          avgAll !== speedOld
            ? [{ spec: { type: "number", value: avgAll }, feedback: "That averages all the way to the active volcano — subtract Island A's distance and age from Island B's!" }]
            : undefined,
        hint: `Find interval distance (${d2} − ${d1} km) and interval duration (${age2} − ${age1} Myr), then compute km ÷ Myr ÷ 10.`,
        solution: [
          `Interval distance = {{${d2} - ${d1} = ${clean(d2 - d1)}}} km; interval time = {{${age2} - ${age1} = ${dt}}} Myr.`,
          `Interval speed = {{${clean(d2 - d1)} / (${dt} * 10) = ${speedOld}}} cm/year.`,
        ],
      };
    },
  },
];
