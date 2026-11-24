import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "volcanoes-living-with-risk-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "shield-vs-composite",
      question:
        "Which type of lava builds the wide, gentle 2°–10° slopes of a shield volcano such as Mauna Loa?",
      options: [
        "Runny, low-viscosity basaltic lava",
        "Thick, high-viscosity acidic lava",
        "Alternating dry tephra and mud layers",
        "Frozen oceanic sediment and granite",
      ],
      answerIndex: 0,
      hints: [
        "Low silica content makes this dark lava flow easily for many kilometres.",
        "Shield volcanoes form mostly at constructive margins and oceanic hotspots.",
      ],
      explanation:
        "Shield volcanoes erupt runny, low-viscosity basaltic lava that spreads widely before solidifying into gentle slopes. Thick, high-viscosity acidic lava builds steep composite cones instead.",
    },
    {
      id: "volcanoes-living-with-risk-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "shield-vs-composite",
      question:
        "What geographical term describes how thick, sticky, and resistant to flowing a magma or lava is?",
      answer: {
        type: "text",
        accept: ["viscosity", "magma viscosity", "lava viscosity"],
        display: "viscosity",
      },
      traps: [
        {
          spec: { type: "text", accept: ["density"] },
          feedback:
            "Density measures mass per unit volume; the word for stickiness or resistance to flowing is **viscosity**.",
        },
      ],
      hints: [
        "Honey has a high value of this property, while water has a low value.",
        "Starts with the letter 'v' and links silica content to eruption violence.",
      ],
      solution: [
        "Resistance to flowing (thickness/stickiness of a liquid or molten rock) is called **viscosity**.",
        "High-silica magma has high viscosity (composite volcanoes); low-silica basaltic magma has low viscosity (shield volcanoes).",
      ],
    },
    {
      id: "volcanoes-living-with-risk-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "volcanic-hazards",
      question:
        "Name the fast-moving volcanic mudflow formed when heavy rainfall or melted snow mixes with loose volcanic ash on steep slopes.",
      answer: {
        type: "text",
        accept: ["lahar", "lahars"],
        display: "lahar",
      },
      traps: [
        {
          spec: { type: "text", accept: ["pyroclastic flow", "pyroclastic flows"] },
          feedback:
            "A pyroclastic flow is dry, superheated gas and ash (primary hazard). A water-and-ash mudflow is a **lahar** (secondary hazard).",
        },
      ],
      hints: [
        "This is an Indonesian geographical term used globally for volcanic mudflows.",
        "It is a secondary hazard that channels rapidly down river valleys.",
      ],
      solution: [
        "A volcanic mudflow created by water (rain or meltwater) mixing with loose ash is a **lahar**.",
      ],
    },
    {
      id: "volcanoes-living-with-risk-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "volcanic-hazards",
      question:
        "Which pair lists one **primary** volcanic hazard followed by one **secondary** volcanic hazard?",
      options: [
        "Lahar followed by aviation disruption",
        "Pyroclastic flow followed by a lahar",
        "Roof collapse followed by crop failure",
        "Lava flow followed by volcanic bombs",
      ],
      answerIndex: 1,
      hints: [
        "Primary hazards emerge directly from the vent; secondary hazards are triggered afterwards.",
        "Check both items in each pair carefully — do not mix up the order.",
      ],
      explanation:
        "A pyroclastic flow erupts directly from the volcano (primary), while a lahar forms afterwards when rain or meltwater mixes with loose ash (secondary). The other pairs put two secondary hazards or two primary hazards together.",
    },
    {
      id: "volcanoes-living-with-risk-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "why-live-near-volcanoes",
      question:
        "Iceland heats roughly 85–90% of its homes by piping steam and hot water heated by underground magma. Name this renewable energy source.",
      answer: {
        type: "text",
        accept: ["geothermal", "geothermal energy", "geothermal power"],
        display: "geothermal energy",
      },
      hints: [
        "The name comes from Greek roots meaning 'Earth' (geo) and 'heat' (thermal).",
        "It supplies cheap, clean baseload electricity and district heating in volcanic regions.",
      ],
      solution: [
        "Electricity and heating generated from underground volcanic heat is **geothermal energy**.",
      ],
    },
    {
      id: "volcanoes-living-with-risk-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "why-live-near-volcanoes",
      question:
        "Which factor is a **social** reason — rather than an economic attraction — for families remaining on an active volcano's slopes?",
      options: [
        "High tourist spending in local mountain hotels",
        "Rich coffee harvests from weathered ash soils",
        "Ancestral family ties and inability to afford relocation",
        "Steady wages from mining volcanic sulphur deposits",
      ],
      answerIndex: 2,
      hints: [
        "Separate money-making opportunities from community attachments and financial barriers.",
        "Tourism, farming income, and mining wages are all economic pull factors.",
      ],
      explanation:
        "Ancestral family ties, cultural roots, and poverty (unable to afford safer land) are social and constraint reasons keeping people on volcanic slopes, whereas tourism, farming profits, and mining are economic attractions.",
    },
    {
      id: "volcanoes-living-with-risk-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "predict-prepare-volcanoes",
      question:
        "Name the instrument bolted onto a volcano's flank that detects tiny changes in ground slope angle (bulging) as rising magma inflates the chamber.",
      answer: {
        type: "text",
        accept: ["tiltmeter", "tiltmeters", "tilt meter", "tilt meters"],
        display: "tiltmeter",
      },
      traps: [
        {
          spec: { type: "text", accept: ["seismometer", "seismometers", "seismograph"] },
          feedback:
            "Seismometers record earth tremors; the instrument that detects slope angle bulging is a **tiltmeter**.",
        },
      ],
      hints: [
        "It works like a hyper-sensitive carpenter's spirit level.",
        "Its name directly mentions the word 'tilt'.",
      ],
      solution: [
        "A **tiltmeter** measures subtle changes in slope angle caused by magma swelling beneath the flank.",
      ],
    },
    {
      id: "volcanoes-living-with-risk-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "volcanic-hazards",
      question:
        "A pyroclastic flow travels at 150 km/h down a valley towards a village 10 km from the crater. How many minutes will it take to reach the village?",
      answer: {
        type: "number",
        value: 4,
        display: "4 minutes",
      },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback:
            "You divided speed by distance (150 ÷ 10). Use time = distance ÷ speed, then multiply hours by 60.",
        },
      ],
      hints: [
        "Recall time = distance ÷ speed.",
        "Find {{10 / 150}} hours, then multiply by 60 to convert to minutes.",
      ],
      solution: [
        "Time in hours = distance ÷ speed = {{10 / 150}} = {{1 / 15}} hour.",
        "Time in minutes = {{1 / 15}} × 60 = **4 minutes**.",
      ],
    },
    {
      id: "volcanoes-living-with-risk-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "shield-vs-composite",
      marks: 3,
      question:
        "Explain why composite volcanoes erupt much more violently than shield volcanoes. (3 marks)",
      hints: [
        "Start by naming the silica/viscosity difference between their magmas.",
        "Explain what thick magma does to dissolved volcanic gases.",
        "Finish by linking trapped gas pressure to the violent blast.",
      ],
      modelAnswer:
        "Composite volcanoes have high-silica, viscous (sticky) magma at destructive margins, unlike runny basaltic magma in shield volcanoes. This thick magma traps expanding dissolved gases so they cannot escape smoothly. Intense pressure builds beneath the blocked vent until it shatters in an explosive blast.",
      markScheme: [
        {
          point: "Identifies viscous / sticky / high-silica magma in composite volcanoes",
          keywords: ["viscous", "viscosity", "sticky", "thick", "high-silica", "acidic", "andesitic"],
        },
        {
          point: "Explains that sticky magma traps dissolved gases (preventing easy escape)",
          keywords: ["trap", "traps", "trapped", "gas", "gases", "escape"],
        },
        {
          point: "Links trapped gas to huge pressure build-up causing an explosive blast",
          keywords: ["pressure", "explosive", "explosion", "blast", "shatters"],
        },
      ],
      commonError:
        "Simply stating 'composite volcanoes are explosive and shield volcanoes are gentle' without explaining viscosity and trapped gas pressure.",
    },
    {
      id: "volcanoes-living-with-risk-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "predict-prepare-volcanoes",
      marks: 3,
      question:
        "State three distinct physical warning signs that scientists monitor to forecast an approaching volcanic eruption. (3 marks)",
      hints: [
        "Recall the S-T-G-T monitoring checklist: shaking, tilting, gas, and temperature.",
        "Be specific — name the exact physical change (e.g., harmonic tremors, flank bulge, rising SO₂).",
      ],
      modelAnswer:
        "First, seismometers detect swarms of harmonic tremors as rising magma cracks underground rock. Second, tiltmeters and GPS measure ground bulging as magma inflates the flank. Third, gas spectrometers record a sudden spike in sulphur dioxide (SO₂) emissions, while thermal cameras detect rising crater temperatures.",
      markScheme: [
        {
          point: "Earthquake swarms / harmonic tremors as magma cracks rock (seismometers)",
          keywords: ["tremor", "tremors", "earthquake", "earthquakes", "seismometer", "seismic"],
        },
        {
          point: "Ground bulging / slope swelling or tilting (tiltmeters / GPS)",
          keywords: ["bulge", "bulging", "swell", "swelling", "tilt", "tiltmeter", "deform"],
        },
        {
          point: "Rising sulphur dioxide (SO₂) gas emissions OR rising crater temperatures (spectrometer / thermal)",
          keywords: ["so2", "so₂", "sulphur", "sulfur", "temperature", "thermal", "heat"],
        },
      ],
      commonError:
        "Writing vague phrases like 'the volcano gets louder' instead of naming measurable precursors like harmonic tremors, flank bulge, and rising SO₂.",
    },
  ],

  papers: [
    {
      id: "volcanoes-living-with-risk-p1",
      title: "Practice Paper 1: Volcanoes & Volcanic Hazards",
      questions: [
        {
          id: "volcanoes-living-with-risk-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "shield-vs-composite",
          question:
            "What type of volcano forms at constructive plate margins and oceanic hotspots with runny basaltic lava and gentle 2°–10° slopes? (One word)",
          answer: {
            type: "text",
            accept: ["shield", "shield volcano", "shield volcanoes"],
            display: "shield",
          },
          hints: [
            "Think of a broad warrior's defence laid flat on the ground.",
            "Mauna Loa in Hawaii is the classic named example.",
          ],
          solution: [
            "Runny basaltic lava spreading gently at constructive margins or hotspots builds a **shield** volcano.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "shield-vs-composite",
          question:
            "What alternative scientific name for a composite volcano highlights its alternating layers (strata) of solidified ash and lava?",
          answer: {
            type: "text",
            accept: ["stratovolcano", "strato volcano", "strato-volcano", "stratovolcanoes"],
            display: "stratovolcano",
          },
          hints: [
            "Combine the Latin word for layers ('strato') with 'volcano'.",
          ],
          solution: [
            "A composite volcano built from alternating ash and lava layers is a **stratovolcano**.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p1-q03",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "shield-vs-composite",
          question:
            "Which magma type is characteristic of a broad shield volcano such as Kīlauea or Mauna Loa?",
      options: [
        "Low-silica basaltic magma",
        "High-silica rhyolitic magma",
        "Viscous acidic granitic magma",
        "Solid continental slate rock",
      ],
          answerIndex: 0,
          hints: [
            "Runny lava has roughly 50% silica and dark iron-magnesium minerals.",
            "It cools into dark basalt rock.",
          ],
          explanation:
            "Shield volcanoes erupt low-silica (~50%), hot, runny basaltic magma. High-silica rhyolitic and acidic magmas are viscous and build steep explosive composite cones.",
        },
        {
          id: "volcanoes-living-with-risk-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "volcanic-hazards",
          question:
            "What collective geographical term describes all solid fragments blasted into the air during an explosive eruption — from volcanic bombs down to fine ash?",
          answer: {
            type: "text",
            accept: ["tephra", "pyroclasts", "pyroclastic material"],
            display: "tephra",
          },
          hints: [
            "It is a six-letter Greek-derived geographical term starting with 't'.",
            "Ashfall is the finest size grade of this primary hazard.",
          ],
          solution: [
            "All airborne solid volcanic fragments (bombs, lapilli, and fine ash) are collectively called **tephra**.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p1-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "volcanic-hazards",
          question:
            "Which volcanic hazard caused most of the ~23,000 deaths in Armero, Colombia, following the 1985 eruption of Nevado del Ruiz?",
          options: [
            "Slow-moving basaltic lava flows",
            "Massive glacier-melt lahars down valleys",
            "Invisible carbon dioxide inside cellars",
            "Falling pumice stones near the crater",
          ],
          answerIndex: 1,
          hints: [
            "Armero lay 45 km away in a river valley below an ice-capped volcano.",
            "Heat melted the summit glacier and turned loose volcanic ash into rushing mudflows.",
          ],
          explanation:
            "Melted summit ice combined with volcanic ash to send colossal secondary lahars 45 km down river valleys, burying Armero at night. Slow basaltic lava and crater pumice could not travel 45 km.",
        },
        {
          id: "volcanoes-living-with-risk-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "volcanic-hazards",
          question:
            "A lahar travels 27 km down a volcanic river valley at a steady speed of 54 km/h. How many minutes does it take to reach a bridge at the bottom of the valley?",
          answer: {
            type: "number",
            value: 30,
            display: "30 minutes",
          },
          traps: [
            {
              spec: { type: "number", value: 0.5 },
              feedback:
                "0.5 is the time in **hours** — multiply by 60 to give the answer in **minutes**.",
            },
            {
              spec: { type: "number", value: 2 },
              feedback:
                "You computed speed ÷ distance (54 ÷ 27). Use time = distance ÷ speed.",
            },
          ],
          hints: [
            "Calculate time in hours using distance ÷ speed = 27 ÷ 54.",
            "Convert 0.5 hours into minutes by multiplying by 60.",
          ],
          solution: [
            "Time in hours = {{27 / 54}} = 0.5 hours.",
            "Time in minutes = 0.5 × 60 = **30 minutes**.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "volcanic-hazards",
          question:
            "Classify **international flight cancellations caused by an airborne volcanic ash plume** as either a `primary` or `secondary` hazard.",
          answer: {
            type: "text",
            accept: ["secondary", "secondary hazard"],
            display: "secondary",
          },
          hints: [
            "The ash plume itself is erupted directly (primary), but what about airline shutdowns afterwards?",
            "Knock-on disruptions to transport and economies belong in which category?",
          ],
          solution: [
            "Flight disruption (such as the 2010 Eyjafjallajökull airspace closure) is a knock-on consequence of airborne ash, making it a **secondary** hazard.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "why-live-near-volcanoes",
          question:
            "Why do farmers near Mount Etna in Sicily grow high-value grapes, citrus, and olives right on the lower flanks of Europe's most active volcano?",
          options: [
            "Lava flows sterilise pests weekly without harming trees",
            "Volcanic cones keep coastal winds away from every farm",
            "Mineral-rich weathered volcanic soils produce superb yields",
            "Government rules prohibit farming on flat plains elsewhere",
          ],
          answerIndex: 2,
          hints: [
            "Think about potassium, phosphorus, and magnesium released as volcanic ash weathers.",
            "Farming is one of the strongest economic pull factors on volcanic slopes.",
          ],
          explanation:
            "Weathered volcanic ash and basalt create deeply fertile, mineral-rich soils that produce prized, high-yielding fruit and wine harvests around Mount Etna. Fresh lava destroys crops rather than helping them.",
        },
        {
          id: "volcanoes-living-with-risk-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "why-live-near-volcanoes",
          question:
            "A coffee plantation on non-volcanic highland soil yields 800 kg/ha, while a plantation on volcanic ash soil yields 1,160 kg/ha. Calculate the percentage increase in coffee yield on the volcanic soil.",
          answer: {
            type: "number",
            value: 45,
            display: "45%",
          },
          traps: [
            {
              spec: { type: "number", value: 360 },
              feedback:
                "360 kg/ha is the absolute gain — divide 360 by the original 800 and multiply by 100 to find the percentage.",
            },
            {
              spec: { type: "number", value: 145 },
              feedback:
                "145% is the new yield as a percentage of the old yield — subtract 100% to get the percentage **increase**.",
            },
          ],
          hints: [
            "Find the increase first: 1,160 − 800 = 360 kg/ha.",
            "Compute {{(360 / 800) * 100}}.",
          ],
          solution: [
            "Yield increase = 1,160 − 800 = 360 kg/ha.",
            "Percentage increase = {{360 / 800}} × 100 = 0.45 × 100 = **45%**.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          question:
            "Which toxic volcanic gas (give its chemical formula or full name) spikes rapidly in fumarole plumes when fresh magma climbs close to a crater?",
          answer: {
            type: "text",
            accept: ["so2", "so₂", "sulphur dioxide", "sulfur dioxide"],
            display: "sulphur dioxide (SO₂)",
          },
          hints: [
            "It has a sharp matchstick smell and forms acid rain in the atmosphere.",
            "Gas spectrometers measure rising tonnes per day of this sulphur-oxygen gas.",
          ],
          solution: [
            "Rising magma depressurises and releases spikes of **sulphur dioxide (SO₂)**, tracked by gas spectrometers.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          question:
            "Which monitoring instrument specifically records continuous rhythmic **harmonic tremors** caused by rising magma fracturing rock underground?",
          options: [
            "Tiltmeter",
            "Anemometer",
            "Thermal drone",
            "Seismometer",
          ],
          answerIndex: 3,
          hints: [
            "Harmonic tremors are small continuous earthquakes inside the volcano.",
            "Which instrument records seismic vibrations?",
          ],
          explanation:
            "A seismometer records earthquake waves and continuous harmonic tremors as magma pushes through rock. Tiltmeters measure ground slope bulging, thermal drones track surface heat, and anemometers measure wind speed.",
        },
        {
          id: "volcanoes-living-with-risk-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "shield-vs-composite",
          marks: 4,
          question:
            "Compare shield volcanoes and composite volcanoes under four distinct geographical headings (plate setting, lava properties, slope shape, and eruption style). (4 marks)",
          hints: [
            "Use direct comparative connectives like 'whereas' in every sentence.",
            "Cover: constructive/hotspot vs destructive; runny basaltic vs viscous acidic; gentle 2°–10° vs steep 25°–35°; frequent effusive vs infrequent explosive.",
          ],
          modelAnswer:
            "Shield volcanoes form at constructive margins or hotspots, whereas composite volcanoes form at destructive subduction margins. Shield volcanoes erupt runny, low-viscosity basaltic lava, whereas composite volcanoes erupt thick, viscous high-silica magma. Consequently, shields have wide bases with gentle slopes, whereas composite cones have steep flanks built of alternating ash and lava. Finally, shield eruptions are frequent and effusive, whereas composite eruptions are infrequent and violently explosive.",
          markScheme: [
            {
              point: "Contrasts plate settings (constructive/hotspot vs destructive/subduction)",
              keywords: ["constructive", "hotspot", "destructive", "subduction"],
            },
            {
              point: "Contrasts lava properties (runny/basaltic/low-viscosity vs thick/viscous/high-silica/acidic)",
              keywords: ["basaltic", "viscous", "viscosity", "runny", "silica", "acidic"],
            },
            {
              point: "Contrasts shape/structure (wide gentle slopes vs steep cone / alternating ash & lava layers)",
              keywords: ["gentle", "steep", "wide", "alternating", "layers"],
            },
            {
              point: "Contrasts eruption style (frequent effusive/gentle vs infrequent violent/explosive)",
              keywords: ["effusive", "explosive", "frequent", "infrequent", "violent"],
            },
          ],
          commonError:
            "Describing only shield volcanoes without making explicit contrasts with composite volcanoes.",
        },
        {
          id: "volcanoes-living-with-risk-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "volcanic-hazards",
          marks: 4,
          question:
            "Distinguish between a pyroclastic flow and a lahar, explaining why both are far deadlier than typical lava flows. (4 marks)",
          hints: [
            "Define pyroclastic flow (primary: hot gas, ash & rock up to 700 °C, 100+ km/h).",
            "Define lahar (secondary: ash + rain or meltwater mudflow down river valleys).",
            "Contrast their extreme speeds with slow-moving lava flows that people can outrun.",
          ],
          modelAnswer:
            "A pyroclastic flow is a primary hazard made of superheated volcanic gas, ash, and rock up to 700 °C racing downslope at over 100 km/h. By contrast, a lahar is a secondary volcanic mudflow formed when heavy rain or melted summit snow mixes with loose ash and rushes down river valleys. Both are far deadlier than typical lava flows because lava usually advances slowly enough for residents to evacuate on foot. High-speed pyroclastic clouds and valley-channelling mudflows strike too fast to outrun, incinerating or burying entire settlements.",
          markScheme: [
            {
              point: "Defines pyroclastic flow accurately (primary; superheated gas/ash/rock; 300–700 °C or 100+ km/h)",
              keywords: ["primary", "superheated", "700", "gas", "100 km/h"],
            },
            {
              point: "Defines lahar accurately (secondary; mudflow from ash + rain or melted snow/glacier)",
              keywords: ["secondary", "mudflow", "rain", "meltwater", "melted", "water"],
            },
            {
              point: "Explains why lava rarely kills (moves slowly enough for people to evacuate)",
              keywords: ["slowly", "slow", "evacuate", "walking"],
            },
            {
              point: "Explains high lethality of both (too fast to outrun / incinerates or buries valleys)",
              keywords: ["outrun", "too fast", "incinerat", "bury", "burying", "valleys"],
            },
          ],
          commonError:
            "Calling both hazards 'hot liquid lava' or forgetting that a lahar is a secondary water-driven mudflow.",
        },
        {
          id: "volcanoes-living-with-risk-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "why-live-near-volcanoes",
          marks: 4,
          question:
            "Explain two economic reasons and two social reasons why dense populations remain near active volcanoes. (4 marks)",
          hints: [
            "Economic (F-G-T-M): pick two from fertile soils, geothermal power, tourism, or sulphur/mineral mining, and briefly develop each.",
            "Social (F-P-M): pick two from poverty/lack of affordable land, ancestral family ties, long dormancy perception, or faith in monitoring.",
          ],
          modelAnswer:
            "Economically, weathered volcanic ash creates mineral-rich fertile soils (e.g., Java and Mount Etna) that allow multiple high-yield harvests, while underground heat powers cheap geothermal electricity and heating in Iceland (or tourism and sulphur mining provide jobs). Socially, poverty leaves many low-income farming families unable to afford safer land elsewhere. Furthermore, generations of ancestral family ties and cultural traditions — alongside long dormant gaps and trust in monitoring — anchor residents to volcanic slopes.",
          markScheme: [
            {
              point: "First economic pull factor developed (e.g., weathered fertile soil → high yields/farming income)",
              keywords: ["fertile", "soil", "soils", "harvest", "crops", "mineral"],
            },
            {
              point: "Second distinct economic pull factor (geothermal energy, tourism jobs, or sulphur/mineral mining)",
              keywords: ["geothermal", "tourism", "tourists", "mining", "sulphur", "sulfur"],
            },
            {
              point: "First social/constraint reason (poverty / cannot afford land elsewhere)",
              keywords: ["poverty", "afford", "poor", "relocat", "no choice", "lack of choice"],
            },
            {
              point: "Second social reason (ancestral/family/cultural ties OR perceived low risk / faith in monitoring)",
              keywords: ["family", "ancestral", "cultural", "ties", "dormant", "monitoring", "trust"],
            },
          ],
          commonError:
            "Writing four economic reasons and zero social reasons, which caps the mark at 2/4.",
        },
        {
          id: "volcanoes-living-with-risk-p1-q15",
          kind: "mcq",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          question:
            "Why are exclusion zones around active composite volcanoes often stretched further along river valleys than across high side ridges?",
          options: [
            "Seismometers stop working on steep mountain ridges in rain",
            "Farmers never build houses or roads along flat valley floors",
            "Sulphur dioxide gas rises only above deep flowing rivers",
            "Pyroclastic flows and lahars funnel fastest down valley floors",
          ],
          answerIndex: 3,
          hints: [
            "Think about gravity: which paths do heavy, dense flows (both gas-rock avalanches and mudflows) follow?",
            "Look back at the volcanic hazards diagram showing valley settlements.",
          ],
          explanation:
            "Gravity channels both dense pyroclastic flows and muddy lahars rapidly down river valleys for tens of kilometres, making valley corridors far more hazardous than raised ridges beside them.",
        },
      ],
    },
    {
      id: "volcanoes-living-with-risk-p2",
      title: "Practice Paper 2: Living with Risk, Monitoring & Preparation",
      questions: [
        {
          id: "volcanoes-living-with-risk-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "why-live-near-volcanoes",
          question:
            "Name the Indonesian island — home to over 150 million people and Mount Merapi — famous for dense farming on fertile volcanic soils.",
          answer: {
            type: "text",
            accept: ["java", "java island"],
            display: "Java",
          },
          hints: [
            "It lies directly south-east of Sumatra and Singapore.",
            "Mount Merapi towers just north of Yogyakarta on this island.",
          ],
          solution: [
            "**Java** supports over 150 million residents largely because weathered ash from its chain of active volcanoes produces exceptionally fertile rice and coffee soils.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "predict-prepare-volcanoes",
          question:
            "Name the continuous, rhythmic swarms of small earthquakes recorded by seismometers as rising magma pushes through rock.",
          answer: {
            type: "text",
            accept: ["harmonic tremor", "harmonic tremors"],
            display: "harmonic tremors",
          },
          hints: [
            "Two words: the first word sounds musical ('harmonic'), the second means ground shakes.",
          ],
          solution: [
            "Rising magma fracturing rock creates continuous **harmonic tremors** logged on seismometers.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "why-live-near-volcanoes",
          question:
            "Roughly what share of homes in Iceland are heated cleanly and affordably using volcanic geothermal water?",
          options: [
            "About 10–15% of homes",
            "About 85–90% of homes",
            "About 30–35% of homes",
            "About 45–50% of homes",
          ],
          answerIndex: 1,
          hints: [
            "Geothermal district heating is Iceland's flagship volcanic benefit.",
            "Almost the entire nation relies on piped geothermal hot water through sub-Arctic winters.",
          ],
          explanation:
            "Iceland uses geothermal steam and hot water to heat roughly 85–90% of its homes (and generate ~25–30% of its electricity, with hydroelectric power supplying the rest).",
        },
        {
          id: "volcanoes-living-with-risk-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          question:
            "What Japanese name is given to concrete check-dams built across volcanic river valleys to trap boulders and slow down lahars?",
          answer: {
            type: "text",
            accept: ["sabo", "sabo dam", "sabo dams"],
            display: "sabo dams",
          },
          hints: [
            "Four-letter Japanese term widely used around Mount Fuji and Mount Merapi.",
            "Starts with 's' and means sediment/sand control ('sabo').",
          ],
          solution: [
            "Concrete check-dams designed to catch debris and slow volcanic mudflows are called **sabo dams**.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          question:
            "An observatory expands a circular volcanic exclusion zone from a radius of 10 km to 15 km around Mount Merapi. Calculate the percentage increase in the exclusion radius.",
          answer: {
            type: "number",
            value: 50,
            display: "50%",
          },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback:
                "5 km is the increase in kilometres — divide 5 by the original 10 km and multiply by 100 for the percentage.",
            },
          ],
          hints: [
            "Increase = 15 − 10 = 5 km.",
            "Divide by the original radius (10 km) and multiply by 100.",
          ],
          solution: [
            "Radius increase = 15 − 10 = 5 km.",
            "Percentage increase = {{5 / 10}} × 100 = **50%**.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p2-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          question:
            "What specific physical change do **infrared thermal cameras** on drones or satellites track around an active volcano?",
          options: [
            "Seismic wave velocity inside solid granite crust",
            "Sulphur dioxide gas tonnage drifting over oceans",
            "Rising crater rock temperatures and warming lakes",
            "Microscopic slope tilt along distant river deltas",
          ],
          answerIndex: 2,
          hints: [
            "'Thermal' refers directly to heat and temperature.",
            "Which surface feature heats up as shallow magma nears the crater floor?",
          ],
          explanation:
            "Thermal infrared cameras detect rising surface temperatures at craters, lava domes, fumaroles, and crater lakes. Seismometers log tremors, spectrometers measure SO₂, and tiltmeters track flank bulging.",
        },
        {
          id: "volcanoes-living-with-risk-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "volcanic-hazards",
          question:
            "A 15 cm layer of rain-soaked volcanic ash has a mass of 210 kg on every 1 m² of roof. What is the total mass of ash (in kg) pressing down on a flat school roof measuring 10 m by 8 m?",
          answer: {
            type: "number",
            value: 16800,
            display: "16,800 kg",
          },
          traps: [
            {
              spec: { type: "number", value: 80 },
              feedback:
                "80 m² is the roof area — now multiply 80 m² by 210 kg/m² to find the total ash load.",
            },
          ],
          hints: [
            "First find the roof area: 10 m × 8 m = 80 m².",
            "Multiply the area (80 m²) by the load per square metre (210 kg/m²).",
          ],
          solution: [
            "Roof area = 10 × 8 = 80 m².",
            "Total mass = 80 × 210 = **16,800 kg** (nearly 17 tonnes — illustrating why flat roofs collapse under wet ash).",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "why-live-near-volcanoes",
          question:
            "Why do volcanic eruptions around **shield volcanoes** in Hawaii often attract booming visitor numbers rather than halting tourism?",
          options: [
            "Hawaii bans airlines from flying near Pacific islands",
            "Shield eruptions produce zero hot lava near the surface",
            "Local hotels sit underground inside cooled magma tubes",
            "Predictable effusive lava flows can be viewed safely from afar",
          ],
          answerIndex: 3,
          hints: [
            "Compare a predictable glowing lava river on Kīlauea with an explosive pyroclastic blast on Mount Merapi.",
            "Why are national park viewpoints often safe during effusive shield eruptions?",
          ],
          explanation:
            "Effusive basaltic eruptions on shield volcanoes are relatively predictable and non-explosive, allowing national parks to manage safe viewing zones that draw huge numbers of volcano tourists.",
        },
        {
          id: "volcanoes-living-with-risk-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "shield-vs-composite",
          question:
            "A surveyor measures two volcanoes: Volcano X has 50% silica and 5° slopes; Volcano Y has 67% silica and 33° slopes. Which volcano — `X` or `Y` — has the **higher magma viscosity**?",
          answer: {
            type: "text",
            accept: ["y", "volcano y"],
            display: "Y",
          },
          hints: [
            "Silica molecules form chains that make magma thick and sticky.",
            "Higher silica content and steeper cones always mean higher viscosity.",
          ],
          solution: [
            "Higher silica (67% vs 50%) produces much thicker, stickier magma and steeper 33° slopes, so Volcano **Y** has the higher magma viscosity.",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          question:
            "If an ash plume is forecast to pass over a town downwind of a composite volcano, which personal preparation item is most important for protecting residents' lungs?",
          options: [
            "Fitted fine-particulate face masks (N95/P2)",
            "Metal lightning rods bolted onto windows",
            "Inflatable rubber lifejackets stored upstairs",
            "Heavy wool blankets draped over flat roofs",
          ],
          answerIndex: 0,
          hints: [
            "Recall what volcanic ash is physically made of: microscopic shards of jagged silica glass.",
            "Breathing fine volcanic glass damages airways severely.",
          ],
          explanation:
            "Fine volcanic ash consists of jagged microscopic rock and glass shards that irritate eyes and damage lungs; fitted fine-particulate masks (N95/P2) and staying indoors with sealed windows protect respiratory health.",
        },
        {
          id: "volcanoes-living-with-risk-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          question:
            "During the 2010 Mount Merapi crisis, 350,000 residents were evacuated and 353 people died. If 70,000 lives would have been lost without evacuation, roughly what percentage of those at-risk lives were saved? (Round to the nearest whole percent)",
          answer: {
            type: "number",
            value: 99,
            tolerance: 1,
            display: "99%",
          },
          hints: [
            "Lives saved ≈ 70,000 − 353 = 69,647.",
            "Compute {{(69647 / 70000) * 100}} and round to the nearest whole percent.",
          ],
          solution: [
            "Estimated lives saved = 70,000 − 353 = 69,647.",
            "Percentage saved = {{69647 / 70000}} × 100 ≈ 99.5% → **99%** (or 100% if rounded up; 99%–100% accepted within tolerance).",
          ],
        },
        {
          id: "volcanoes-living-with-risk-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          marks: 4,
          question:
            "Explain how scientists use two specific instruments to monitor an active volcano, and explain why combining multiple sensors is essential before ordering an evacuation. (4 marks)",
          hints: [
            "Instrument 1 + what it measures (e.g., seismometer → harmonic tremors; or tiltmeter → ground bulge).",
            "Instrument 2 + what it measures (e.g., gas spectrometer → rising SO₂; or thermal camera → rising crater heat).",
            "Explain why cross-checking avoids false alarms ('cry wolf') and protects public trust.",
          ],
          modelAnswer:
            "Scientists bolt tiltmeters onto flanks to detect tiny slope angle increases as rising magma makes the mountainside bulge outward. They also deploy gas spectrometers to track sharp spikes in sulphur dioxide (SO₂) escaping from depressurising magma (alongside seismometers logging harmonic tremors). Relying on one sensor alone risks error because heavy rain or stalled magma can trigger isolated readings. Cross-checking multiple independent instruments raises accuracy and prevents costly false alarms that erode public trust in evacuation orders.",
          markScheme: [
            {
              point: "First named instrument accurately matched to its physical precursor",
              keywords: ["tiltmeter", "bulge", "bulging", "seismometer", "tremor", "tremors"],
            },
            {
              point: "Second distinct instrument accurately matched to its physical precursor",
              keywords: ["spectrometer", "so2", "so₂", "sulphur", "sulfur", "thermal", "temperature"],
            },
            {
              point: "Explains limit of a single sensor (non-eruptive triggers or stalled magma)",
              keywords: ["single", "one sensor", "stalled", "rain", "isolated", "error"],
            },
            {
              point: "Explains benefit of combining sensors (avoids false alarms / preserves public trust)",
              keywords: ["false alarm", "false alarms", "trust", "accuracy", "confirm", "costly"],
            },
          ],
          commonError:
            "Listing instrument names without stating what physical warning sign each instrument measures.",
        },
        {
          id: "volcanoes-living-with-risk-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "predict-prepare-volcanoes",
          marks: 4,
          question:
            "Evaluate the effectiveness of physical engineering (such as lava barriers and sabo dams) compared with preparation and evacuation plans in reducing volcanic deaths. (4 marks)",
          hints: [
            "Give one strength of engineering (diverting slow lava or slowing small lahars in river channels).",
            "Give one clear limitation of engineering (cannot stop fast 700 °C pyroclastic flows or massive ash plumes).",
            "Explain why preparation and evacuation save far more lives around explosive composite volcanoes.",
            "End with a balanced evaluative judgement.",
          ],
          modelAnswer:
            "Physical engineering such as earthen diversion barriers and concrete sabo dams can protect towns and harbours from slow basaltic lava flows and trap boulders from moderate lahars. However, no wall or dam can stop a 700 °C pyroclastic flow racing downslope at over 100 km/h or prevent heavy airborne ash plumes. Therefore, preparation measures — including hazard maps, exclusion zones, clear alert levels, and rehearsed evacuation plans — save vastly more lives, as shown when 350,000 residents escaped Mount Merapi in 2010. Overall, engineering is a useful secondary defence for property, but monitoring-led evacuation is far more effective for saving lives.",
          markScheme: [
            {
              point: "Strength of physical engineering (diverts slow lava OR slows moderate lahars/traps boulders)",
              keywords: ["divert", "slow", "harbour", "trap", "boulders", "moderate", "property"],
            },
            {
              point: "Limitation of physical engineering (cannot stop high-speed pyroclastic flows or major ash plumes)",
              keywords: ["pyroclastic", "cannot stop", "can't stop", "ash", "700", "100 km/h"],
            },
            {
              point: "Strength of preparation/evacuation (exclusion zones, alert levels, drills saving thousands e.g. Merapi)",
              keywords: ["exclusion", "alert", "drills", "merapi", "350,000", "monitoring"],
            },
            {
              point: "Clear evaluative conclusion weighing both strategies",
              keywords: ["overall", "more effective", "whereas", "useful", "vital", "essential"],
            },
          ],
          commonError:
            "Writing only about engineering without making an explicit comparison and final evaluative judgement.",
        },
        {
          id: "volcanoes-living-with-risk-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "volcanic-hazards",
          marks: 3,
          question:
            "Explain how a volcanic eruption in one country can create severe secondary economic impacts thousands of kilometres away. Use a named example. (3 marks)",
          hints: [
            "Name Iceland's Eyjafjallajökull eruption (2010).",
            "Explain how upper-level winds carry fine glassy volcanic ash across international airspace.",
            "Explain why airlines cancel flights (ash melts inside jet engines) and state the economic knock-on effect.",
          ],
          modelAnswer:
            "During Iceland's 2010 Eyjafjallajökull eruption, prevailing winds carried a dense plume of fine glassy volcanic ash thousands of kilometres across mainland Europe. Because microscopic silicate shards melt inside hot jet turbines and risk stalling engines, authorities closed airspace and cancelled over 100,000 flights. This grounded global air freight and stranded millions of passengers, costing airlines billions and disrupting perishable food exports from as far away as Kenya.",
          markScheme: [
            {
              point: "Names a relevant eruption (e.g., Eyjafjallajökull 2010 in Iceland or Pinatubo 1991)",
              keywords: ["eyjafjallajökull", "eyjafjallajokull", "iceland", "2010", "pinatubo"],
            },
            {
              point: "Explains physical mechanism (winds carry fine glassy ash that melts/damages jet engines)",
              keywords: ["wind", "winds", "glass", "glassy", "jet", "engine", "engines", "turbine"],
            },
            {
              point: "Identifies distant economic impact (flight cancellations, airline losses, disrupted trade/exports)",
              keywords: ["flight", "flights", "airspace", "airlines", "billions", "exports", "freight", "stranded"],
            },
          ],
          commonError:
            "Talking about local lava flows instead of far-reaching airborne ash clouds and aviation/trade shutdowns.",
        },
        {
          id: "volcanoes-living-with-risk-p2-q15",
          kind: "mcq",
          difficulty: "core",
          guideRef: "why-live-near-volcanoes",
          question:
            "Why do volcanic regions such as Iceland and New Zealand attract energy-intensive industries like aluminium smelting and data centres?",
          options: [
            "Volcanic ash turns seawater straight into pure aluminium ore",
            "Steep composite slopes eliminate the need for paved transport roads",
            "International laws prohibit building data centres outside rift zones",
            "Abundant geothermal power provides cheap, low-carbon electricity",
          ],
          answerIndex: 3,
          hints: [
            "Smelters and server farms consume massive amounts of continuous electricity 24/7.",
            "How does volcanic geology keep power prices low and clean in Iceland?",
          ],
          explanation:
            "Continuous, affordable, low-carbon geothermal (and hydro) electricity in volcanic regions like Iceland drastically lowers operating costs and carbon footprints for power-hungry smelters and data centres.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "volcanoes-living-with-risk-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "shield-vs-composite",
      strategy: "Trace the magma-chemistry chain",
      question:
        "Two oceanic islands sit 2,000 km apart. Island A lies above a mantle plume in the middle of the Pacific Plate; Island B lies 160 km behind a deep Pacific subduction trench. Which pair of profiles is geologically consistent?",
      options: [
        "Island A: gentle 6° basaltic shield; Island B: steep 32° explosive stratovolcano",
        "Island A: steep 34° acidic cone; Island B: flat 4° non-explosive basalt shield",
        "Island A: zero volcanoes and deep trenches; Island B: pure basaltic lava plains",
        "Island A: alternating ash and mud strata; Island B: conservative transform cliffs",
      ],
      answerIndex: 0,
      hints: [
        "Identify the tectonic setting of Island A (mid-plate mantle plume = hotspot, like Hawaii).",
        "Identify the tectonic setting of Island B (behind a subduction trench = destructive volcanic arc, like Japan/Indonesia).",
        "Match each tectonic setting to its silica content, slope angle, and eruption style.",
      ],
      explanation:
        "A mid-plate mantle plume (Island A, like Hawaii) melts low-silica mantle basalt to build a wide, gentle 6° shield volcano. Behind a subduction trench (Island B), wet melting produces high-silica viscous magma that builds a steep 32° explosive composite stratovolcano.",
    },
    {
      id: "volcanoes-living-with-risk-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "volcanic-hazards",
      strategy: "Multi-step rate comparison",
      question:
        "A valley village lies 18 km down-valley from a stratovolcano's crater. A pyroclastic flow starts at 09:00 travelling at 144 km/h, while a siren sounds at 09:00 giving residents a 1.5 km drive uphill to a safe ridge at 30 km/h. How many minutes **before** the pyroclastic flow reaches the village do the motorists reach the safe ridge?",
      answer: {
        type: "number",
        value: 4.5,
        display: "4.5 minutes",
      },
      traps: [
        {
          spec: { type: "number", value: 7.5 },
          feedback:
            "7.5 minutes is the total arrival time of the pyroclastic flow — subtract the 3 minutes needed to drive uphill to find the safety margin.",
        },
        {
          spec: { type: "number", value: 3 },
          feedback:
            "3 minutes is the motorists' driving time — now subtract 3 from the pyroclastic flow's 7.5-minute arrival time.",
        },
      ],
      hints: [
        "Step 1: Find the pyroclastic flow's travel time in minutes: (18 ÷ 144) × 60.",
        "Step 2: Find the motorists' escape time in minutes: (1.5 ÷ 30) × 60.",
        "Step 3: Subtract the motorists' time from the flow's arrival time.",
      ],
      solution: [
        "Pyroclastic flow arrival time = {{18 / 144}} × 60 = 0.125 × 60 = 7.5 minutes (09:07:30).",
        "Motorists' escape time = {{1.5 / 30}} × 60 = 0.05 × 60 = 3 minutes (09:03:00).",
        "Safety margin = 7.5 − 3 = **4.5 minutes** (showing why pre-eruption exclusion zones are vital — any traffic jam erases those 4.5 minutes).",
      ],
    },
    {
      id: "volcanoes-living-with-risk-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "predict-prepare-volcanoes",
      strategy: "Compare area scaling on hazard maps",
      question:
        "During escalating unrest at Mount Merapi, authorities double a circular exclusion zone's radius from 10 km to 20 km. By what factor does the total land **area** inside the exclusion zone increase? (Give a whole number)",
      answer: {
        type: "number",
        value: 4,
        display: "4",
      },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback:
            "Radius doubled (×2), but circle area is πr² — doubling r multiplies area by 2² = **4**!",
        },
      ],
      hints: [
        "Write the area formula for a circle: A = πr².",
        "Compare π × 20² with π × 10² (note that π cancels out!).",
        "Think about what quadrupling the evacuated area means for emergency shelter demand!",
      ],
      solution: [
        "Original area = π × 10² = 100π km²; expanded area = π × 20² = 400π km².",
        "Scale factor = {{400 / 100}} = **4** — doubling an exclusion radius quadruples the evacuated land area and vastly multiplies shelter, food, and transport logistics.",
      ],
    },
    {
      id: "volcanoes-living-with-risk-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "predict-prepare-volcanoes",
      strategy: "Interpret multi-sensor telemetry",
      question:
        "Observatory data over 5 days show: harmonic tremors rising from 20 to 240/hr, flank bulge increasing +14 cm, crater temperature up +160 °C, yet SO₂ emissions **suddenly plunge** from 2,800 to 120 tonnes/day on Day 5. What is the most dangerous geological explanation?",
      options: [
        "The volcano has permanently become extinct and cooled overnight",
        "A sealed lava plug is blocking the vent while pressure climbs sharply",
        "Heavy coastal rainfall has washed away all magma beneath the crust",
        "The composite volcano has switched instantly into a basaltic shield",
      ],
      answerIndex: 1,
      hints: [
        "Notice that tremors, bulge, and heat are ALL still rising — so magma is definitely still ascending!",
        "If magma is still pushing upward violently, why would escaping gas suddenly drop to nearly zero?",
        "Think about putting a cork tightly into a boiling kettle.",
      ],
      explanation:
        "When tremors, swelling, and heat remain high while SO₂ abruptly drops, a viscous lava plug has likely sealed the conduit, trapping volcanic gases underground and building dangerous explosive overpressure — a classic warning sign before dome blasts.",
    },
    {
      id: "volcanoes-living-with-risk-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "why-live-near-volcanoes",
      strategy: "Weigh multi-year economic trade-offs",
      question:
        "A farming family near Mount Merapi earns $3,600/year on fertile volcanic soil versus $2,100/year on distant non-volcanic land. An evacuation every 15 years costs them $4,500 in lost crops and shelter costs. Over a 15-year period, how many **more US dollars** in net income do they still earn by staying on the volcanic slopes?",
      answer: {
        type: "number",
        value: 18000,
        display: "$18,000",
      },
      traps: [
        {
          spec: { type: "number", value: 22500 },
          feedback:
            "$22,500 is the gross extra income over 15 years — remember to subtract the $4,500 evacuation loss.",
        },
        {
          spec: { type: "number", value: 1500 },
          feedback:
            "$1,500 is the extra income in a single year — multiply by 15 years and then subtract the $4,500 eruption cost.",
        },
      ],
      hints: [
        "Find the extra annual income from volcanic soil: $3,600 − $2,100 = $1,500/year.",
        "Multiply that yearly gain by 15 years.",
        "Subtract the one-off $4,500 eruption/evacuation loss from the 15-year gain.",
      ],
      solution: [
        "Extra yearly income = $3,600 − $2,100 = $1,500/year.",
        "Gross 15-year advantage = 15 × $1,500 = $22,500.",
        "Net 15-year advantage after eruption loss = $22,500 − $4,500 = **$18,000** (illustrating mathematically why rational families stay despite periodic eruptions).",
      ],
    },
    {
      id: "volcanoes-living-with-risk-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "why-live-near-volcanoes",
      strategy: "Balanced PEEL evaluation",
      marks: 6,
      question:
        "\"Economic opportunity is a more important reason than poverty for why people live close to active volcanoes.\" To what extent do you agree with this statement? Use named case studies. (6 marks)",
      hints: [
        "Paragraph 1 (Agree — economic opportunities): develop fertile volcanic soils (Java / Mt Etna), geothermal energy (Iceland), tourism, or mining (Kawah Ijen).",
        "Paragraph 2 (Disagree / counter-argument — poverty & social factors): explain how poor farmers in LICs/NEEs cannot afford alternative land, plus family/cultural ties and risk perception.",
        "Paragraph 3 (Judgement): reach a nuanced conclusion distinguishing HICs (like Iceland/Italy, where opportunity dominates) from LICs/NEEs (like rural Java, where both opportunity and lack of choice interact).",
      ],
      modelAnswer:
        "Economic opportunities strongly explain settlement around active volcanoes, especially in HICs and commercial farming belts. Weathered ash creates mineral-rich fertile soils on Mount Etna and Java that sustain multiple high-yield harvests, while Iceland generates cheap clean geothermal heating for nearly 90% of homes and draws millions of tourists. However, poverty and lack of choice are equally decisive for millions of low-income rural families in LICs and NEEs who cannot afford land elsewhere or property insurance, and whose survival depends on ancestral family farms. Cultural ties and long dormant intervals further reinforce staying even when danger is understood. Overall, I partly agree: economic opportunity is the main driver in wealthier nations like Iceland and Italy, whereas in poorer volcanic regions like rural Indonesia both fertile-soil livelihoods and poverty-driven constraints operate together.",
      markScheme: [
        {
          point: "Develops fertile volcanic soils with a named location (e.g., Java/Merapi or Mount Etna)",
          keywords: ["fertile", "etna", "java", "merapi", "harvest", "mineral"],
        },
        {
          point: "Develops a second economic pull factor with an example (e.g., Iceland geothermal, tourism, or Kawah Ijen sulphur mining)",
          keywords: ["geothermal", "iceland", "tourism", "tourists", "kawah ijen", "sulphur"],
        },
        {
          point: "Counter-argument explaining poverty / financial inability to relocate or insure",
          keywords: ["afford", "relocate", "insurance", "low-income", "poorer", "lack of choice"],
        },
        {
          point: "Adds non-economic social drivers (family/ancestral/cultural ties or dormancy/risk perception)",
          keywords: ["ancestral", "family", "cultural", "dormant", "ties", "monitoring"],
        },
        {
          point: "Distinguishes between HIC contexts and LIC/NEE contexts",
          keywords: ["hic", "hics", "lic", "lics", "wealthier", "nee", "nees"],
        },
        {
          point: "Reaches a clear, justified 'to what extent' conclusion",
          keywords: ["overall", "partly agree", "largely agree", "extent", "together", "main driver"],
        },
      ],
      commonError:
        "Giving a one-sided list of benefits without contrasting HIC opportunity against LIC/NEE poverty constraints and concluding with a balanced judgement.",
    },
    {
      id: "volcanoes-living-with-risk-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "predict-prepare-volcanoes",
      strategy: "Compare management across development levels",
      marks: 5,
      question:
        "Explain why successfully predicting an eruption is NOT enough on its own to guarantee zero deaths, referring to both physical and human challenges. (5 marks)",
      hints: [
        "Physical challenge 1: sudden changes in eruption scale or weather interactions (e.g., Typhoon Yunya at Pinatubo 1991 triggering wet-ash roof collapse & lahars).",
        "Physical challenge 2: secondary lahars continuing months/years after evacuation zones reopen.",
        "Human challenge 1: residents refusing to evacuate or returning early for livestock/property (e.g., Merapi 2010).",
        "Human challenge 2: communication gaps, transport congestion, or 'cry wolf' fatigue after false alarms.",
      ],
      modelAnswer:
        "Even an accurate scientific forecast cannot guarantee zero deaths because severe physical and human barriers remain. Physically, weather can amplify secondary hazards unexpectedly — as when Typhoon Yunya drenched Mount Pinatubo's 1991 ashfall, collapsing roofs and unleashing deadly lahars — while post-eruption lahars continue threatening valleys for years after emergency alerts end. On the human side, residents sometimes refuse evacuation orders or sneak past roadblocks to protect homes and cattle, as seen at Mount Merapi in 2010. Poor rural roads, limited emergency shelter capacity in poorer regions, and 'cry wolf' scepticism after prior false alarms also slow compliance. Consequently, scientific prediction must be backed by community trust, livestock shelters, strong transport logistics, and long-term hazard zoning.",
      markScheme: [
        {
          point: "Physical factor: sudden weather interaction / wet-ash collapse or secondary lahars (e.g., Pinatubo 1991)",
          keywords: ["typhoon", "pinatubo", "wet", "roof", "lahar", "lahars"],
        },
        {
          point: "Physical factor: ongoing post-eruption risk or sudden shifts in flow speed/direction",
          keywords: ["years", "post-eruption", "after", "valleys", "sudden", "unpredictable"],
        },
        {
          point: "Human compliance barrier: refusing orders or returning for property/livestock (e.g., Merapi 2010)",
          keywords: ["refuse", "livestock", "cattle", "roadblocks", "merapi", "property"],
        },
        {
          point: "Logistical or communication barrier: poor transport, shelter limits, or 'cry wolf' false-alarm fatigue",
          keywords: ["roads", "transport", "shelter", "cry wolf", "false alarm", "communication"],
        },
        {
          point: "Synthesises conclusion linking prediction with preparation, trust, and long-term planning",
          keywords: ["consequently", "trust", "zoning", "logistics", "backed by", "planning"],
        },
      ],
      commonError:
        "Blaming only 'broken instruments' instead of recognising the human behavioural, logistical, and secondary-hazard limits after a correct prediction.",
    },
    {
      id: "volcanoes-living-with-risk-ch-q08",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "volcanic-hazards",
      strategy: "Eliminate geologically impossible claims",
      question:
        "A coastal city lies 30 km downwind of an active snow-capped stratovolcano on a destructive margin. Which hazard management plan targets the **three** most realistic threats to that specific city?",
      options: [
        "Seawater pumps for runny basalt, flat ash roofs, and rift barriers",
        "Deep ocean tsunami walls, diamond mines, and geothermal vents",
        "Permanent basement CO₂ bunkers, flat roofs, and open-air runways",
        "Steep reinforced roofs for ash, valley lahar sensors, and ash masks",
      ],
      answerIndex: 3,
      hints: [
        "Check every geographical clue in the prompt: 30 km away, *downwind*, *snow-capped*, *stratovolcano*.",
        "At 30 km downwind from a snow-capped composite volcano, heavy ashfall and snowmelt lahars (not runny basaltic lava!) are the top threats.",
        "Also check whether basement CO₂ bunkers or flat roofs would HELP or HURT!",
      ],
      explanation:
        "Thirty kilometres downwind of a snow-capped composite volcano, the key realistic threats are heavy ashfall (requiring steep reinforced roofs and respiratory masks) and meltwater lahars racing down river valleys (requiring valley lahar warning sensors). Basaltic seawater pumps suit shield fissures, flat roofs collapse under ash, and dense CO₂ actually pools dangerously inside basements.",
    },
  ],
};
