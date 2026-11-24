import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "solving-climate-crisis-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "mitigation-strategies",
      question: "Which action is an example of climate MITIGATION rather than pure adaptation?",
      options: [
        "Replacing coal-fired power plants with offshore wind and solar farms",
        "Raising concrete sea walls by 2 metres around a low-lying harbour",
        "Installing emergency cyclone warning sirens along coastal villages",
        "Breeding salt-tolerant rice varieties for flooded river deltas",
      ],
      answerIndex: 0,
      hints: [
        "Apply the Cause Test: which option cuts greenhouse gases entering the atmosphere?",
        "Sea walls, warning sirens and salt-tolerant crops help people cope with impacts (adaptation).",
      ],
      explanation:
        "Switching from coal to wind and solar cuts CO₂ emissions at the source (mitigation), whereas sea walls, warning sirens and salt-tolerant rice adapt society to live with warming impacts.",
    },
    {
      id: "solving-climate-crisis-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "international-agreements",
      question: "In which year was the landmark **Paris Agreement** adopted at COP21?",
      answer: { type: "number", value: 2015, display: "2015" },
      traps: [
        { spec: { type: "number", value: 1997 }, feedback: "1997 was the Kyoto Protocol — the Paris Agreement was signed at COP21 in 2015." },
        { spec: { type: "number", value: 2030 }, feedback: "2030 is the target year for many NDCs and the Singapore Green Plan — the Paris Agreement was signed in 2015." },
      ],
      hints: [
        "It took place at COP21 in France, a decade and a half into the 21st century.",
      ],
      solution: [
        "The **Paris Agreement** was adopted at COP21 in **2015**.",
      ],
    },
    {
      id: "solving-climate-crisis-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "mitigation-strategies",
      question: "What three-letter abbreviation names the technology that traps CO₂ from industrial smokestacks (such as cement or steel factories) and injects it deep underground into geological rock reservoirs?",
      answer: { type: "text", accept: ["ccs", "carbon capture and storage", "carbon capture & storage"], display: "CCS" },
      hints: [
        "Stands for Carbon ____ and ____.",
        "Three letters beginning with C.",
      ],
      solution: [
        "**CCS** stands for **Carbon Capture and Storage**.",
      ],
    },
    {
      id: "solving-climate-crisis-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "mitigation-strategies",
      question: "A city shifts **80,000 MWh** of annual electricity from coal (**0.90 t CO₂/MWh**) to solar PV (**0.05 t CO₂/MWh**). Calculate how many **tonnes of CO₂** are saved each year (give the number only).",
      answer: { type: "number", value: 68000, display: "68,000" },
      traps: [
        { spec: { type: "number", value: 72000 }, feedback: "You multiplied 80,000 × 0.90 — remember to subtract solar's small 0.05 t/MWh lifecycle footprint first!" },
      ],
      hints: [
        "First find the saving per MWh: 0.90 − 0.05 = 0.85 t/MWh.",
        "Multiply 80,000 × 0.85.",
      ],
      solution: [
        "CO₂ saved per MWh = {{0.90 - 0.05 = 0.85}} tonnes/MWh.",
        "Annual CO₂ saved = {{80000 * 0.85 = 68000}} tonnes.",
      ],
    },
    {
      id: "solving-climate-crisis-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "adaptation-strategies",
      question: "Why is restoring coastal mangroves praised as a rare 'win–win' climate strategy?",
      options: [
        "Mangroves generate hydroelectricity while replacing urban MRT subway networks.",
        "Mangrove roots absorb 50–70% of storm-wave energy AND store blue carbon from air.",
        "Mangroves lower global solar output while freezing nearby coastal seawater.",
        "Mangroves eliminate the need for any international COP treaties or clean power grids.",
      ],
      answerIndex: 1,
      hints: [
        "Think about what mangrove roots do during a storm surge (adaptation) AND what trees absorb through photosynthesis (mitigation).",
        "Recall the term 'blue carbon'.",
      ],
      explanation:
        "Coastal mangroves act as soft coastal adaptation by absorbing 50–70% of wave energy AND as mitigation by sequestering huge amounts of 'blue carbon' in coastal sediments.",
    },
    {
      id: "solving-climate-crisis-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "adaptation-strategies",
      question: "A farm in the Sahel uses **10,000 litres/day** with flood irrigation and installs drip irrigation, cutting water demand by **60%**. How many litres/day does the farm NOW use?",
      answer: { type: "number", value: 4000, display: "4,000 L" },
      traps: [
        { spec: { type: "number", value: 6000 }, feedback: "6,000 L is the water SAVED — the question asks how much water the farm NOW uses (10,000 − 6,000 = 4,000 L)." },
      ],
      hints: [
        "A 60% reduction leaves 40% still used.",
        "Compute 0.40 × 10,000.",
      ],
      solution: [
        "Water saved = {{0.60 * 10000 = 6000}} L/day.",
        "New daily usage = {{10000 - 6000 = 4000}} L/day.",
      ],
    },
    {
      id: "solving-climate-crisis-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "international-agreements",
      question: "How often must countries update and strengthen their voluntary Nationally Determined Contributions (NDCs) under the Paris Agreement ratchet mechanism?",
      options: [
        "Every 1 year",
        "Every 2 years",
        "Every 5 years",
        "Every 25 years",
      ],
      answerIndex: 2,
      hints: [
        "Remember the P-A-R-I-S mnemonic: Ratchet every __ years.",
        "Five-year Global Stocktakes review collective progress.",
      ],
      explanation:
        "Countries review collective progress and submit strengthened NDC pledges every 5 years under the Paris Agreement ratchet mechanism.",
    },
    {
      id: "solving-climate-crisis-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "international-agreements",
      question: "A country emitted **200 Mt** of CO₂ in 2015 and pledges a **30% reduction** by 2030 in its Paris NDC. Calculate its **2030 target cap** in Mt (number only).",
      answer: { type: "number", value: 140, display: "140" },
      traps: [
        { spec: { type: "number", value: 60 }, feedback: "60 Mt is the amount CUT — subtract 60 from 200 to find the 2030 target cap (140 Mt)." },
      ],
      hints: [
        "Find 30% of 200 (= 60 Mt cut), then subtract from 200.",
        "Or multiply 200 × 0.70 directly.",
      ],
      solution: [
        "Reduction = {{0.30 * 200 = 60}} Mt.",
        "2030 target cap = {{200 - 60 = 140}} Mt.",
      ],
    },
    {
      id: "solving-climate-crisis-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "singapore-green-plan-action",
      question: "Under Singapore's Green Plan 2030, which proposed East Coast mega-project reclaims ~800 hectares of raised offshore land to block sea-level rise while creating a new freshwater reservoir?",
      options: [
        "Tengeh Solar Island",
        "Semakau Ridge Wall",
        "Jurong Wind Corridor",
        "Long Island",
      ],
      answerIndex: 3,
      hints: [
        "Named after the long stretch of raised offshore land planned along East Coast Park.",
        "Two simple words: '____ Island'.",
      ],
      explanation:
        "Singapore's proposed 'Long Island' project reclaims ~800 ha of raised land off East Coast Park to defend low-lying neighbourhoods from rising seas while enclosing a new coastal freshwater reservoir and parks.",
    },
    {
      id: "solving-climate-crisis-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "mitigation-strategies",
      marks: 3,
      question: "Explain the difference between **mitigation** and **adaptation**, giving one named example of each. (3 marks)",
      hints: [
        "Define mitigation (root cause: reducing or removing GHGs) and give a clear example.",
        "Define adaptation (symptoms: adjusting society/coasts/farms to live safely with inevitable impacts) and give a clear example.",
      ],
      modelAnswer:
        "Tackling the root cause by cutting greenhouse gas emissions or removing CO₂ from the air defines the first approach — for instance, replacing coal power plants with solar photovoltaic and wind farms. By contrast, adjusting human infrastructure, coasts or farming to live safely with unavoidable warming impacts defines the second — for example, building raised sea walls, polders or planting drought-tolerant crops. Both must happen together because locked-in ocean warming continues even as emissions fall.",
      markScheme: [
        {
          point: "Clearly defines mitigation (cuts/prevents GHG emissions or removes CO₂ to tackle root cause).",
          keywords: ["root cause", "cutting", "greenhouse gas", "emissions", "removing", "co2"],
        },
        {
          point: "Clearly defines adaptation (adjusts human systems/infrastructure to cope safely with unavoidable impacts).",
          keywords: ["adjusting", "infrastructure", "live safely", "cope", "impacts", "resilience", "unavoidable"],
        },
        {
          point: "Gives one accurate example of each (e.g. solar/wind/EVs/afforestation AND sea walls/polders/mangroves/drip irrigation).",
          keywords: ["solar", "wind", "sea walls", "polders", "mangroves", "drought-tolerant", "drip"],
        },
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (p1 & p2, 15 questions each, 4 written per paper)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: Mitigation & Adaptation Engineering (15 Qs: 6 short, 5 mcq, 4 written)
    // -----------------------------------------------------------------------
    {
      id: "solving-climate-crisis-p1",
      title: "Practice Paper 1: Mitigation & Adaptation Strategies",
      questions: [
        {
          id: "solving-climate-crisis-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "mitigation-strategies",
          question: "What term describes planting trees on land that has NOT recently been forested in order to create a brand-new carbon sink?",
          answer: { type: "text", accept: ["afforestation"], display: "afforestation" },
          traps: [
            { spec: { type: "text", accept: ["reforestation"] }, feedback: "Close! Reforestation replants cleared forests; planting on previously unforested land is afforestation." },
          ],
          hints: [
            "Ends in '-forestation', starting with 'af-' (versus 're-' for replanting cleared forests).",
          ],
          solution: [
            "Planting trees on previously unforested land is **afforestation** (whereas replanting cleared forests is reforestation).",
          ],
        },
        {
          id: "solving-climate-crisis-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "mitigation-strategies",
          question: "A regional grid uses **250,000 MWh** of electricity per year from coal (**0.90 t CO₂/MWh**). If it shifts **60%** of that electricity to wind power (**0.02 t CO₂/MWh**), how many **tonnes of CO₂** are saved annually? (Give the number only.)",
          answer: { type: "number", value: 132000, display: "132,000" },
          traps: [
            { spec: { type: "number", value: 135000 }, feedback: "Subtract wind's small 0.02 t/MWh lifecycle footprint from 0.90 first (0.88 × 150,000 = 132,000)." },
          ],
          hints: [
            "First find 60% of 250,000 MWh (= 150,000 MWh).",
            "Find CO₂ saved per MWh: 0.90 − 0.02 = 0.88 t/MWh, then multiply 150,000 × 0.88.",
          ],
          solution: [
            "Electricity switched = {{0.60 * 250000 = 150000}} MWh.",
            "Saving per MWh = {{0.90 - 0.02 = 0.88}} t CO₂/MWh.",
            "Annual CO₂ saved = {{150000 * 0.88 = 132000}} tonnes.",
          ],
        },
        {
          id: "solving-climate-crisis-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "mitigation-strategies",
          question: "Why do energy engineers combine solar and wind farms with grid-scale batteries and interconnected transmission grids?",
          options: [
            "To smooth out renewable intermittency and guarantee steady 24/7 electricity supply.",
            "To convert captured solar electricity directly into liquid petroleum for older cars.",
            "To increase atmospheric CO₂ concentrations whenever daytime clouds block rooftops.",
            "To replace hydroelectric dams with coal-fired backup boilers during sunny afternoons.",
          ],
          answerIndex: 0,
          hints: [
            "Think about the main limitation of solar and wind power.",
            "Batteries store surplus noon/windy power and release it during calm nights.",
          ],
          explanation:
            "Solar and wind power fluctuate with weather and daylight (intermittency); grid batteries and interconnected transmission lines store surplus clean power and balance supply across regions for reliable 24/7 electricity.",
        },
        {
          id: "solving-climate-crisis-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "mitigation-strategies",
          question: "Producing 1 kg of beef emits roughly **27 kg of CO₂-equivalent**, whereas 1 kg of lentils emits roughly **0.9 kg of CO₂-equivalent**. How many **times greater** is the carbon footprint of beef than lentils per kilogram?",
          answer: { type: "number", value: 30, display: "30" },
          hints: [
            "Divide 27 by 0.9.",
            "Multiply both numbers by 10 to compute 270 ÷ 9.",
          ],
          solution: [
            "Footprint ratio = {{27 / 0.9 = 270 / 9 = 30}} times greater per kg.",
          ],
        },
        {
          id: "solving-climate-crisis-p1-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "mitigation-strategies",
          marks: 4,
          question: "Evaluate **Carbon Capture and Storage (CCS)** and **afforestation** as methods for removing or cutting CO₂. Give one strength and one limitation of each. (4 marks)",
          hints: [
            "CCS strength: targets hard-to-abate heavy industry (cement, steel) by storing CO₂ deep underground.",
            "CCS limitation: expensive, energy-intensive, tiny current scale / moral hazard delaying fossil phase-out.",
            "Afforestation strength: low-cost natural photosynthesis carbon sink that also boosts biodiversity/cooling.",
            "Afforestation limitation: needs huge land area (competing with farms), slow to mature, wildfires can re-release carbon.",
          ],
          modelAnswer:
            "Capturing CO₂ directly from cement and steel smokestacks and injecting it deep underground into saline aquifers is valuable for hard-to-abate heavy industry that cannot easily electrify. However, this technology remains very expensive, energy-intensive and small-scale, risking a moral hazard that delays retiring fossil fuels. Planting new forests absorbs CO₂ naturally through photosynthesis at relatively low cost while creating wildlife habitats and cooling local air. Yet trees take decades to mature, compete for vast agricultural land and can re-release stored carbon back into the air during climate-driven wildfires.",
          markScheme: [
            {
              point: "Gives a valid strength of CCS (handles hard-to-abate cement/steel industry; stores CO₂ underground).",
              keywords: ["cement", "steel", "hard-to-abate", "heavy industry", "underground", "aquifers"],
            },
            {
              point: "Gives a valid limitation of CCS (expensive, energy-intensive, small scale or moral hazard delaying fossil phase-out).",
              keywords: ["expensive", "costly", "energy-intensive", "moral hazard", "small-scale", "delays"],
            },
            {
              point: "Gives a valid strength of afforestation (natural photosynthesis sink, lower cost, boosts biodiversity/cooling).",
              keywords: ["photosynthesis", "low cost", "biodiversity", "habitats", "cheap", "wildlife"],
            },
            {
              point: "Gives a valid limitation of afforestation (takes decades, land competition with farming, wildfire carbon release).",
              keywords: ["decades", "land", "wildfires", "fires", "re-release", "compete"],
            },
          ],
        },
        {
          id: "solving-climate-crisis-p1-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "adaptation-strategies",
          question: "What Dutch geographical term describes low-lying reclaimed land enclosed by raised dikes and drained mechanically by pumps (used in the Netherlands and on Singapore's Pulau Tekong)?",
          answer: { type: "text", accept: ["polder", "polders"], display: "polder" },
          hints: [
            "Starts with the letter 'p' and rhymes with 'folder'.",
            "Singapore built its first one on Pulau Tekong to save reclamation sand.",
          ],
          solution: [
            "Low-lying reclaimed land ringed by dikes and drained by pumps is a **polder**.",
          ],
        },
        {
          id: "solving-climate-crisis-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "adaptation-strategies",
          question: "Which urban design feature is a defining element of a 'sponge city' adapting to intense climate-driven downpours?",
          options: [
            "Wide impermeable asphalt plazas sloped directly toward underground train tunnels",
            "Permeable pavements, bioswales, rain gardens and naturalised flood-retention parks",
            "High-rise coal chimneys engineered to evaporate storm clouds above city centres",
            "Solid concrete walls sealing off every river park from surrounding residential flats",
          ],
          answerIndex: 1,
          hints: [
            "Think of Singapore's naturalised Bishan–Ang Mo Kio Park.",
            "A sponge city absorbs and holds stormwater where it falls rather than speeding runoff.",
          ],
          explanation:
            "Sponge cities use permeable paving, bioswales, rain gardens and flood-retention parks to slow, filter and absorb extreme downpours, reducing flash flooding while cooling neighbourhoods.",
        },
        {
          id: "solving-climate-crisis-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "adaptation-strategies",
          question: "A dense mangrove belt reduces incoming storm-wave energy by **60%**. If an offshore storm wave hits the mangrove outer edge carrying **250 kJ** of energy, how many **kJ** of wave energy still reach the dike behind the mangroves? (Give the number only.)",
          answer: { type: "number", value: 100, display: "100" },
          traps: [
            { spec: { type: "number", value: 150 }, feedback: "150 kJ is the wave energy ABSORBED by the mangroves — subtract 150 from 250 to find what reaches the dike (100 kJ)." },
          ],
          hints: [
            "If 60% is absorbed, 40% passes through to the dike.",
            "Calculate 0.40 × 250.",
          ],
          solution: [
            "Wave energy absorbed = {{0.60 * 250 = 150}} kJ.",
            "Remaining energy hitting the dike = {{250 - 150 = 100}} kJ.",
          ],
        },
        {
          id: "solving-climate-crisis-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "adaptation-strategies",
          question: "Name the high-efficiency agricultural adaptation that pipes water slowly straight to crop roots, cutting evaporation waste by 50–70% compared with open-channel flood watering.",
          answer: { type: "text", accept: ["drip irrigation", "trickle irrigation", "micro-irrigation"], display: "drip irrigation" },
          hints: [
            "Two words: water is released drop by drop ('____ irrigation').",
            "Used widely in semi-arid Sahel farming to slash evaporation losses.",
          ],
          solution: [
            "Delivering drops slowly right to plant roots is **drip irrigation**.",
          ],
        },
        {
          id: "solving-climate-crisis-p1-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "adaptation-strategies",
          marks: 4,
          question: "Compare **hard coastal engineering** (such as sea walls) with **soft coastal engineering** (such as mangrove restoration), explaining why combining both is often most effective. (4 marks)",
          hints: [
            "State one strength & one limitation of hard coastal walls (immediate dense-city protection vs high cost / downdrift erosion).",
            "State one strength & one limitation of soft mangrove restoration (absorbs 50–70% waves + blue carbon + fisheries vs needs space & years to grow).",
            "Explain the hybrid advantage when mangroves sit in front of a dike/wall.",
          ],
          modelAnswer:
            "Concrete barriers and tidal gates deliver immediate, compact protection for high-value urban ports, yet they are extremely expensive to build and raise as seas climb and can deflect wave erosion onto unprotected neighbouring beaches. By contrast, planting coastal wetlands uses tangled roots to absorb 50–70% of wave energy naturally, trap sediment, support fisheries and store blue carbon at far lower cost — though wetlands require wide shoreline space and years to mature. Pairing both in a hybrid design places living root buffers in front of a dike so waves lose most of their punch first, allowing a shorter, cheaper, longer-lasting barrier behind.",
          markScheme: [
            {
              point: "Identifies strength & limitation of hard engineering (immediate/compact city protection vs high cost/maintenance/downdrift erosion).",
              keywords: ["immediate", "expensive", "erosion", "neighbouring", "neighboring", "concrete", "ports"],
            },
            {
              point: "Identifies strength of soft engineering (absorbs 50–70% wave energy, traps sediment, fisheries or blue carbon).",
              keywords: ["50–70%", "50-70%", "wave energy", "blue carbon", "fisheries", "sediment", "roots"],
            },
            {
              point: "Identifies limitation of soft engineering (requires coastal space, takes years to grow, cannot alone stop extreme surges in dense ports).",
              keywords: ["space", "years", "mature", "slow"],
            },
            {
              point: "Explains hybrid synergy (mangroves weaken waves first, enabling shorter, cheaper, longer-lasting barrier behind).",
              keywords: ["hybrid", "in front", "shorter", "cheaper", "longer-lasting", "punch"],
            },
          ],
        },
        {
          id: "solving-climate-crisis-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "adaptation-strategies",
          question: "How do genetically modified (GM) or selectively bred drought- and salt-tolerant crops help low-income communities adapt to climate change?",
          options: [
            "They maintain reliable food harvests in hotter Sahel drylands and salinised Bangladesh deltas.",
            "They completely stop global greenhouse gas emissions from power stations and factories.",
            "They require twice as much open-channel flood irrigation water during dry seasons.",
            "They turn coastal seawater into pure freshwater reservoirs overnight across islands.",
          ],
          answerIndex: 0,
          hints: [
            "Connect crop adaptation to the two farming regions studied earlier: Sahel droughts and Bangladesh delta salinisation.",
            "Resilient crops protect food security and farm income when weather turns harsh.",
          ],
          explanation:
            "Drought-tolerant maize/millet in the Sahel and salt-tolerant rice in coastal Bangladesh allow rural farmers to keep harvesting food despite hotter dry spells and saltwater intrusion.",
        },
        {
          id: "solving-climate-crisis-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "mitigation-strategies",
          question: "Which pairing lists TWO strategies that directly cut methane (CH₄) emissions from agriculture?",
          options: [
            "Building taller concrete sea walls and painting urban rooftops white",
            "Adding red seaweed to cattle feed and using alternate wetting-drying in rice paddies",
            "Expanding coal-fired electricity grids and clearing tropical rainforests",
            "Injecting freshwater into coastal aquifers and building cyclone shelters",
          ],
          answerIndex: 1,
          hints: [
            "Recall the two largest agricultural sources of CH₄: ruminant cattle and waterlogged rice paddies.",
            "Look for practical mitigation innovations targeting those exact two sources.",
          ],
          explanation:
            "Red seaweed feed supplements cut cattle enteric methane dramatically, while alternate wetting and drying reduces anaerobic methane bacteria in flooded rice paddies.",
        },
        {
          id: "solving-climate-crisis-p1-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "adaptation-strategies",
          question: "Why did Bangladesh's cyclone shelter and SMS early-warning network dramatically lower mortality compared with 1970?",
          options: [
            "Early warnings physically diverted tropical cyclones away from the Bay of Bengal.",
            "Coastal villagers stopped living anywhere within 500 km of the delta coastline.",
            "Timely alerts gave millions hours to evacuate safely into elevated storm-proof shelters.",
            "Elevated shelters generated nuclear power that cooled tropical ocean temperatures.",
          ],
          answerIndex: 2,
          hints: [
            "Preparedness saves lives when a storm is tracked days before landfall.",
            "Combine satellite tracking + community volunteers + elevated shelters above storm-surge height.",
          ],
          explanation:
            "Satellite tracking, community volunteers and SMS alerts give millions of coastal villagers advance notice to reach elevated concrete shelters before storm surges strike — cutting deaths from >300,000 (1970) to <100 in comparable modern cyclones.",
        },
        {
          id: "solving-climate-crisis-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "adaptation-strategies",
          marks: 3,
          question: "Explain **three** ways a tropical city can adapt to **urban heatwaves** and **extreme flash-flood downpours**. (3 marks)",
          hints: [
            "Give at least one urban cooling measure (trees/shade, cool reflective roofs raising albedo, green facades, breezy wind corridors).",
            "Give at least one sponge-city flood measure (permeable paving, rain gardens, naturalised retention parks like Bishan–Ang Mo Kio).",
            "Optionally include heat/flood early-warning alerts and outdoor worker protections.",
          ],
          modelAnswer:
            "First, planners can install permeable pavements, bioswales and naturalised flood-retention parks (such as Bishan–Ang Mo Kio Park) so heavy rain soaks into soil instead of overwhelming concrete drains. Second, painting building roofs bright white raises urban surface albedo to reflect incoming sunlight and lower indoor cooling demand. Third, planting dense street trees and vertical green walls provides shade and evapotranspiration cooling, cutting the Urban Heat Island effect by 2–4 °C.",
          markScheme: [
            {
              point: "Explains a sponge-city stormwater measure (permeable pavements, bioswales, rain gardens or naturalised retention park).",
              keywords: ["permeable", "bioswales", "rain gardens", "retention", "bishan", "sponge"],
            },
            {
              point: "Explains cool/white reflective roofs raising albedo to reflect sunlight.",
              keywords: ["white", "cool roof", "albedo", "reflect"],
            },
            {
              point: "Explains urban greenery (shade trees, green walls/roofs, evapotranspiration) or wind corridors / early warnings reducing Urban Heat Island.",
              keywords: ["trees", "shade", "green walls", "evapotranspiration", "heat island", "wind corridor", "early warning"],
            },
          ],
        },
        {
          id: "solving-climate-crisis-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "mitigation-strategies",
          marks: 4,
          question: "Evaluate **solar/wind power** versus **nuclear fission** as low-carbon electricity choices for a country aiming to phase out coal. (4 marks)",
          hints: [
            "Solar/wind strength: cheapest new electricity, zero operational CO₂, rapid deployment.",
            "Solar/wind limitation: intermittent output requiring batteries/smart grids and land area.",
            "Nuclear strength: reliable 24/7 baseload electricity, tiny land footprint, near-zero operational CO₂.",
            "Nuclear limitation: very high upfront cost, long construction time, radioactive waste & safety concerns.",
          ],
          modelAnswer:
            "Renewables like PV and turbines are now the cheapest new power sources worldwide, emit zero operational CO₂ and can be built rapidly; however, their supply is intermittent when skies are cloudy or winds drop, requiring grid-scale batteries and smart interconnectors. By contrast, splitting uranium atoms delivers steady 24/7 baseload power on a compact land footprint with near-zero operational CO₂, helping stabilise grids. Yet reactors suffer from huge upfront capital bills, decade-long construction times, radioactive waste disposal challenges and public safety worries after disasters such as Fukushima 2011.",
          markScheme: [
            {
              point: "States strength of solar/wind (cheapest new electricity, zero operational CO₂, fast to deploy).",
              keywords: ["cheapest", "zero operational", "rapidly", "fast", "clean"],
            },
            {
              point: "States limitation of solar/wind (intermittent / variable supply requiring battery storage or smart grids).",
              keywords: ["intermittent", "variable", "batteries", "storage", "cloudy", "calm"],
            },
            {
              point: "States strength of nuclear (steady 24/7 baseload power, compact land footprint, near-zero operational CO₂).",
              keywords: ["baseload", "24/7", "steady", "reliable", "compact"],
            },
            {
              point: "States limitation of nuclear (high upfront cost, slow construction, radioactive waste or Fukushima safety concerns).",
              keywords: ["upfront", "expensive", "radioactive", "waste", "fukushima", "decade", "long"],
            },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: Paris Diplomacy & Singapore Green Plan 2030 (15 Qs: 5 short, 6 mcq, 4 written)
    // -----------------------------------------------------------------------
    {
      id: "solving-climate-crisis-p2",
      title: "Practice Paper 2: Paris Agreement & Singapore Green Plan 2030",
      questions: [
        {
          id: "solving-climate-crisis-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "international-agreements",
          question: "Under the 2015 Paris Agreement, nations agreed to hold global warming well below 2 °C and pursue efforts to limit warming to what lower aspirational temperature (in °C)?",
          answer: { type: "number", value: 1.5, display: "1.5 °C" },
          traps: [
            { spec: { type: "number", value: 2 }, feedback: "2 °C is the upper limit ('well below 2 °C') — the lower aspirational target championed by SIDS is 1.5 °C." },
          ],
          hints: [
            "Remember the island nations' slogan: '____ to Stay Alive'.",
          ],
          solution: [
            "The Paris Agreement's aspirational target is **1.5 °C** above pre-industrial levels.",
          ],
        },
        {
          id: "solving-climate-crisis-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "international-agreements",
          question: "What three-letter abbreviation names the voluntary national climate pledges each country submits and tightens every 5 years under the Paris Agreement?",
          answer: { type: "text", accept: ["ndc", "ndcs", "nationally determined contribution", "nationally determined contributions"], display: "NDC" },
          hints: [
            "Stands for Nationally Determined ____.",
            "Three letters starting with N.",
          ],
          solution: [
            "Voluntary national Paris pledges are **NDCs** (Nationally Determined Contributions).",
          ],
        },
        {
          id: "solving-climate-crisis-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "international-agreements",
          question: "Why is climate change described by geographers as a 'global commons' problem?",
          options: [
            "Greenhouse gases mix across all borders so emissions anywhere warm the entire planet.",
            "Every nation shares identical coastal elevations and identical per-capita incomes.",
            "Only countries bordering the Atlantic Ocean release CO₂ into Earth's atmosphere.",
            "National boundaries physically block outgoing long-wave infrared heat from drifting.",
          ],
          answerIndex: 0,
          hints: [
            "Remember the shared lake analogy: can one country keep its CO₂ inside its own borders?",
            "Because the atmosphere is shared by all ~195 nations, global cooperation is unavoidable.",
          ],
          explanation:
            "Earth's atmosphere is a shared global commons: CO₂ mixes rapidly worldwide regardless of where it was emitted, meaning no single country can solve climate change alone without international treaties.",
        },
        {
          id: "solving-climate-crisis-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "international-agreements",
          question: "Country M emitted **360 Mt** of CO₂ in 2015 and submits an updated Paris NDC pledging a **45% reduction** below 2015 levels by 2035. Calculate Country M's **2035 target cap** in Mt (number only).",
          answer: { type: "number", value: 198, display: "198" },
          traps: [
            { spec: { type: "number", value: 162 }, feedback: "162 Mt is the amount CUT — subtract 162 from 360 to get the 2035 cap (198 Mt)." },
          ],
          hints: [
            "Cutting 45% leaves 55% remaining.",
            "Calculate 0.55 × 360.",
          ],
          solution: [
            "Amount reduced = {{0.45 * 360 = 162}} Mt.",
            "2035 target cap = {{360 - 162 = 198}} Mt.",
          ],
        },
        {
          id: "solving-climate-crisis-p2-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "international-agreements",
          marks: 4,
          question: "Explain **two strengths** and **two challenges** of the 2015 Paris Agreement in tackling global climate change. (4 marks)",
          hints: [
            "Strengths: ~195 nations signed (universal), 1.5 °C/<2 °C benchmark, 5-year NDC ratchet, climate finance/Loss & Damage.",
            "Challenges: voluntary non-binding targets (no legal fines), ~2.5–2.7 °C ambition gap, free-riding, development vs decarbonisation tension.",
          ],
          modelAnswer:
            "A major strength is near-universal participation (~195 nations), uniting HICs, NEEs and LICs behind a clear 1.5 °C / well below 2 °C scientific benchmark and a 5-year NDC ratchet mechanism that strengthens pledges over time. It also channels climate finance ($100B+/yr) and a Loss and Damage Fund toward vulnerable states. However, NDC targets are voluntary and non-binding with no legal fines for missing pledges, leaving an ambition gap heading toward ~2.5–2.7 °C warming. Furthermore, free-riding temptations and political tensions between poverty reduction in industrialising NEEs and rapid decarbonisation slow diplomatic progress.",
          markScheme: [
            {
              point: "Explains first strength (universal ~195-nation participation, 1.5 °C / <2 °C goal, or 5-year NDC ratchet).",
              keywords: ["195", "universal", "1.5", "ratchet", "5-year", "ndc"],
            },
            {
              point: "Explains second strength (climate finance / $100B+ / Loss and Damage Fund or clear market signal for renewables).",
              keywords: ["finance", "100", "loss and damage", "market signal", "investors"],
            },
            {
              point: "Explains first challenge (voluntary / non-binding pledges with no legal fines, leaving ~2.5–2.7 °C ambition gap).",
              keywords: ["voluntary", "non-binding", "fines", "ambition gap", "2.5", "2.7"],
            },
            {
              point: "Explains second challenge (free-riding, political withdrawal, or development/poverty vs decarbonisation tension).",
              keywords: ["free-rid", "free rid", "poverty", "development", "decarbonisation", "withdraw"],
            },
          ],
        },
        {
          id: "solving-climate-crisis-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "singapore-green-plan-action",
          question: "Under Singapore's Energy Reset pillar, the national solar target is at least **2.0 GWp** by 2030, up from **0.5 GWp** in early 2021. Calculate the **percentage increase** from 0.5 GWp to 2.0 GWp.",
          answer: { type: "number", value: 300, display: "300%" },
          traps: [
            { spec: { type: "number", value: 400 }, feedback: "2.0 is 400% OF 0.5 — subtract the original 100% to get the percentage INCREASE (300%)." },
          ],
          hints: [
            "Increase = 2.0 − 0.5 = 1.5 GWp.",
            "Divide 1.5 by the original 0.5, then multiply by 100.",
          ],
          solution: [
            "Increase = {{2.0 - 0.5 = 1.5}} GWp.",
            "Percentage increase = {{(1.5 / 0.5) * 100 = 300}}% (a 4-fold total).",
          ],
        },
        {
          id: "solving-climate-crisis-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "singapore-green-plan-action",
          question: "A factory in Singapore emits **50,000 tonnes of CO₂** annually. Calculate its annual carbon tax bill in **Singapore dollars (S$)** when the carbon tax rate is **S$45 per tonne**.",
          answer: { type: "number", value: 2250000, display: "S$2,250,000" },
          hints: [
            "Multiply annual emissions (50,000 tonnes) by the tax rate (S$45/tonne).",
            "5 × 45 = 225, then attach four zeros.",
          ],
          solution: [
            "Annual carbon tax = {{50000 * 45 = 2250000}} S$ (S$2.25 million).",
          ],
        },
        {
          id: "solving-climate-crisis-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "singapore-green-plan-action",
          question: "Which target belongs to Singapore Green Plan 2030's 'Sustainable Living' pillar?",
          options: [
            "Constructing offshore coal terminals along East Coast Park beaches",
            "Expanding MRT rail to 360 km and cutting waste sent to Semakau Landfill by 30%",
            "Phasing out all public buses and encouraging private petrol SUV commuting",
            "Importing 100% of Singapore's freshwater exclusively from distant Arctic icebergs",
          ],
          answerIndex: 1,
          hints: [
            "Think about low-carbon commuting (MRT) and Singapore's only offshore landfill (Semakau).",
            "Recall the exact figures: 360 km MRT and 30% landfill waste cut.",
          ],
          explanation:
            "Sustainable Living expands the MRT rail network to 360 km (putting 8 in 10 homes within 10 minutes of a station) and cuts daily waste sent to Semakau Landfill by 30% by 2030.",
        },
        {
          id: "solving-climate-crisis-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "singapore-green-plan-action",
          question: "Why does Singapore plan to import up to ~30% of its electricity via the regional ASEAN Power Grid?",
          options: [
            "Because Singapore has zero buildings capable of hosting rooftop solar panels.",
            "Because imported electricity carries zero transmission infrastructure costs anywhere.",
            "Because land-scarce Singapore lacks hydro and wind, whereas neighbours have abundant clean power.",
            "Because regional power cables physically block storm surges along Marina Bay.",
          ],
          answerIndex: 2,
          hints: [
            "Remember why Singapore is 'alternative-energy disadvantaged' despite maximising rooftop & floating solar.",
            "Regional partners like Laos, Malaysia, Indonesia and Cambodia have large hydro, solar and wind potential.",
          ],
          explanation:
            "Even after maximising rooftop and floating solar (≥2 GWp), tiny Singapore cannot meet all electricity demand locally, so importing clean hydro, solar and wind power via the ASEAN Power Grid is essential for reaching net zero by 2050.",
        },
        {
          id: "solving-climate-crisis-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "singapore-green-plan-action",
          marks: 4,
          question: "Explain how **two mitigation** and **two adaptation** measures in the **Singapore Green Plan 2030** respond to Singapore's geographical constraints. (4 marks)",
          hints: [
            "Link mitigation to land scarcity: ≥2 GWp rooftop & Tengeh floating solar, ASEAN clean electricity imports, EV transition (60,000 chargers), rising carbon tax, 360 km MRT.",
            "Link adaptation to 30% low-lying coast / urban heat / >90% food imports: East Coast Long Island (~800 ha barrier + reservoir), Pulau Tekong polder, 1 million trees cooling streets, '30 by 30' agri-tech.",
          ],
          modelAnswer:
            "Because the tiny island (~735 km²) lacks wind and large rivers, its Energy Reset deploys at least 2 GWp of solar across HDB rooftops and Tengeh Floating Solar Farm while importing clean electricity via the ASEAN Power Grid. It also cuts transport and industrial emissions by requiring 100% cleaner-energy new car registrations from 2030 (with 60,000 EV chargers) and raising its carbon tax toward S$50–80/t. For coastal resilience where 30% of land sits below 5 m, the Resilient Future pillar engineers Pulau Tekong's sand-saving polder and the proposed ~800 ha Long Island barrier-plus-reservoir off East Coast Park. Simultaneously, planting 1 million more trees cools Urban Heat Island streets while absorbing CO₂.",
          markScheme: [
            {
              point: "Explains a land-smart mitigation energy policy (≥2 GWp rooftop/Tengeh floating solar or ASEAN clean imports).",
              keywords: ["2 gwp", "tengeh", "floating solar", "rooftop", "asean"],
            },
            {
              point: "Explains a second mitigation policy (2030 cleaner-energy/EV cars, 60,000 chargers, rising carbon tax or 360 km MRT).",
              keywords: ["ev", "60,000", "carbon tax", "360 km", "mrt", "cleaner-energy"],
            },
            {
              point: "Explains a coastal/food adaptation measure (Long Island ~800 ha barrier+reservoir, Pulau Tekong polder, Marina Barrage or 30 by 30).",
              keywords: ["long island", "800 ha", "polder", "tekong", "marina barrage", "30 by 30"],
            },
            {
              point: "Explains a second adaptation / dual measure (1 million more trees cooling urban heat, mangroves or sponge parks).",
              keywords: ["1 million", "trees", "heat island", "cools", "mangroves", "bishan"],
            },
          ],
        },
        {
          id: "solving-climate-crisis-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "singapore-green-plan-action",
          question: "In which year has Singapore officially committed to achieve **net-zero** greenhouse gas emissions?",
          options: [
            "2025",
            "2030",
            "2040",
            "2050",
          ],
          answerIndex: 3,
          hints: [
            "The Green Plan runs to 2030 and the internal-combustion vehicle phase-out runs to 2040.",
            "Singapore’s net-zero target is a mid-century milestone.",
          ],
          explanation:
            "The Singapore Green Plan 2030 sets decade-long milestones supporting Singapore's national commitment to achieve net-zero emissions by 2050.",
        },
        {
          id: "solving-climate-crisis-p2-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "international-agreements",
          question: "Why can political elections inside major emitting countries threaten the momentum of the Paris Agreement?",
          options: [
            "New governments can withdraw from Paris or weaken domestic clean-energy policies without legal fines.",
            "Every national election automatically resets global atmospheric CO₂ back down to 280 ppm.",
            "The Paris Agreement expires permanently every time any country holds a parliamentary vote.",
            "International treaties legally ban newly elected leaders from investing in solar or wind power.",
          ],
          answerIndex: 0,
          hints: [
            "Think about why non-binding treaties are vulnerable to domestic political swings.",
            "Compare a 4-year election cycle with a 30-year climate transition.",
          ],
          explanation:
            "Because Paris NDCs are voluntary and non-binding, changes in government inside major emitters can lead to withdrawal or weakened climate laws without international legal penalties.",
        },
        {
          id: "solving-climate-crisis-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "singapore-green-plan-action",
          question: "Which individual everyday action typically achieves the LARGEST single drop in a high-income resident's personal carbon footprint?",
          options: [
            "Switching a desk lamp off five minutes earlier once per month",
            "Taking fewer long-haul flights, commuting by MRT/cycling and eating less beef",
            "Printing homework on double-sided paper twice during each school term",
            "Rinsing plastic yoghurt cups in hot water before placing them in bins",
          ],
          answerIndex: 1,
          hints: [
            "Compare high-impact lifestyle choices (aviation, private cars, beef/dairy, electricity) with tiny gestures.",
            "One return long-haul flight can emit 2–4 tonnes of CO₂ on its own!",
          ],
          explanation:
            "Aviation, private car travel and ruminant meat (beef) dominate personal footprints in high-income cities; choosing MRT/cycling, flying less and shifting toward plant-rich meals deliver far larger reductions than minor symbolic habits.",
        },
        {
          id: "solving-climate-crisis-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "international-agreements",
          marks: 3,
          question: "Explain why **Low-Income Countries (LICs)** and **Newly Emerging Economies (NEEs)** argue that wealthy **High-Income Countries (HICs)** should fund climate finance and cut emissions fastest. (3 marks)",
          hints: [
            "Point 1: Historical cumulative responsibility — HICs industrialised over 200+ years of fossil fuels.",
            "Point 2: Higher per-capita emissions and greater financial/technological wealth in HICs.",
            "Point 3: LICs/NEEs need affordable energy to reduce poverty AND face severe climate impacts (climate injustice).",
          ],
          modelAnswer:
            "First, wealthy industrial nations produced the largest share of historical cumulative CO₂ since 1750 and still maintain far higher per-capita emissions than developing regions. Second, developing economies need affordable, reliable electricity to lift hundreds of millions out of poverty, making rapid decarbonisation harder without financial and technological support. Third, low-emitting island and delta communities endure disproportionate coastal flooding and droughts despite minimal blame — so transferring $100B+/year in grants and Loss and Damage support is essential for fairness.",
          markScheme: [
            {
              point: "Explains historical cumulative emissions responsibility and/or higher per-capita emissions of HICs.",
              keywords: ["historical", "cumulative", "1750", "per-capita", "per capita"],
            },
            {
              point: "Explains NEE/LIC development need (affordable electricity to lift people out of poverty) requiring tech/financial support.",
              keywords: ["poverty", "affordable", "electricity", "support", "leapfrog", "developing"],
            },
            {
              point: "Connects to climate injustice / disproportionate impacts on vulnerable low-emitters needing finance / Loss & Damage.",
              keywords: ["disproportionate", "fairness", "injustice", "100", "loss and damage", "grants"],
            },
          ],
        },
        {
          id: "solving-climate-crisis-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "singapore-green-plan-action",
          marks: 4,
          question: "'Individual citizens matter more than governments in solving the climate crisis.' To what extent do you agree? (4 marks)",
          hints: [
            "Give a balanced opening stance (e.g. disagree overall — systemic government/corporate action is primary, though individual choices play an important supporting role).",
            "Credit individual actions (MRT, plant-rich diet, less flying, consumer & voter pressure).",
            "Prove why systemic action is essential (clean power grids, carbon tax, 360 km MRT, EV infrastructure, Long Island coastal defence).",
            "Finish with a clear concluding verdict linking how systemic policy empowers individuals.",
          ],
          modelAnswer:
            "I largely disagree: while everyday choices play a helpful supporting role, systemic laws and infrastructure led by states and major corporations are far more decisive. On one hand, citizens who commute by MRT, eat less beef, cut food waste and fly less reduce personal emissions and signal market demand for green businesses and bold leaders. On the other hand, ordinary households cannot decarbonise national power grids, deploy 2 GWp of floating solar, levy a S$50/t carbon tax on refineries or engineer East Coast's Long Island barrier. Overall, systemic policy must lead at speed and scale so that low-carbon choices become cheap, convenient and automatic for everyone.",
          markScheme: [
            {
              point: "States a clear balanced stance (disagrees that individuals matter *more*; systemic action leads while individuals support).",
              keywords: ["disagree", "systemic", "supporting role", "decisive"],
            },
            {
              point: "Credits meaningful individual contributions (MRT, diet, less flying, cutting waste, voter/consumer pressure).",
              keywords: ["mrt", "beef", "food waste", "fly", "demand", "voter", "personal"],
            },
            {
              point: "Shows systemic powers individuals lack (decarbonising power grids, carbon tax, solar/EV/MRT infrastructure, coastal defences).",
              keywords: ["power grid", "carbon tax", "floating solar", "long island", "refineries", "infrastructure"],
            },
            {
              point: "Concludes with a justified synthesis showing systemic policy unlocks large-scale individual action.",
              keywords: ["overall", "scale", "cheap", "convenient", "automatic", "lead"],
            },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-rigour Year 9 Geography challenge problems)
  // =========================================================================
  challenge: [
    {
      id: "solving-climate-crisis-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "mitigation-strategies",
      strategy: "Compare total emissions across energy mixes",
      question: "A city uses **1,000,000 MWh** of electricity per year. In 2020 its mix is **70% coal** (0.90 t CO₂/MWh) and **30% natural gas** (0.40 t CO₂/MWh). By 2030 it shifts to **20% natural gas** (0.40 t/MWh) and **80% solar/wind** (0.05 t/MWh). Calculate the **percentage reduction** in total electricity CO₂ emissions from 2020 to 2030 (to the nearest whole percent).",
      answer: { type: "number", value: 84, display: "84%" },
      hints: [
        "Calculate 2020 total CO₂: (700,000 × 0.90) + (300,000 × 0.40) = 630,000 + 120,000 = 750,000 tonnes.",
        "Calculate 2030 total CO₂: (200,000 × 0.40) + (800,000 × 0.05) = 80,000 + 40,000 = 120,000 tonnes.",
        "Percentage reduction = ((750,000 − 120,000) ÷ 750,000) × 100 = (630,000 ÷ 750,000) × 100.",
      ],
      solution: [
        "2020 emissions = {{700000 * 0.90 + 300000 * 0.40 = 630000 + 120000 = 750000}} tonnes CO₂.",
        "2030 emissions = {{200000 * 0.40 + 800000 * 0.05 = 80000 + 40000 = 120000}} tonnes CO₂.",
        "Reduction = {{750000 - 120000 = 630000}} tonnes → {{(630000 / 750000) * 100 = 84}}% cut!",
      ],
    },
    {
      id: "solving-climate-crisis-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "international-agreements",
      strategy: "Compound multi-step NDC ratchet",
      question: "A country emits **500 Mt** of CO₂ in 2015. In its first Paris NDC, it cuts emissions by **20%** by 2025. Under the 5-year ratchet, it then cuts the **2025 level** by a further **50%** by 2035. What overall **percentage reduction** below the 2015 baseline does it achieve by 2035?",
      answer: { type: "number", value: 60, display: "60%" },
      traps: [
        { spec: { type: "number", value: 70 }, feedback: "Watch out for successive percentages! 50% off the 2025 level (400 Mt) is 200 Mt, NOT 50% of the original 500 Mt — so total reduction is 300 ÷ 500 = 60%, not 20% + 50% = 70%!" },
      ],
      hints: [
        "First find the 2025 emissions: 500 × 0.80 = 400 Mt.",
        "Now cut the 2025 level (400 Mt) by 50%: 400 × 0.50 = 200 Mt in 2035.",
        "Compare 200 Mt against the original 500 Mt: (300 ÷ 500) × 100.",
      ],
      solution: [
        "2025 emissions = {{500 * 0.80 = 400}} Mt.",
        "2035 emissions = {{400 * 0.50 = 200}} Mt.",
        "Total reduction = {{500 - 200 = 300}} Mt → {{(300 / 500) * 100 = 60}}% below 2015 levels (not 70%!).",
      ],
    },
    {
      id: "solving-climate-crisis-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "singapore-green-plan-action",
      strategy: "Carbon tax payback period",
      question: "A Singapore factory emits **40,000 tonnes of CO₂/year**. Upgrading its chillers and installing rooftop solar costs **S$1,800,000** upfront and cuts its annual emissions by **25%**. At Singapore's **S$45/tonne** carbon tax rate (2026–27), how many **years** of carbon tax savings alone does it take to pay back the S$1,800,000 upgrade?",
      answer: { type: "number", value: 4, display: "4 years" },
      hints: [
        "Find annual CO₂ cut: 25% of 40,000 = 10,000 tonnes/year.",
        "Multiply by S$45/tonne to find annual carbon tax saved: 10,000 × 45 = S$450,000/year.",
        "Divide upfront cost (S$1,800,000) by annual tax saved (S$450,000).",
      ],
      solution: [
        "Annual emissions avoided = {{0.25 * 40000 = 10000}} tonnes CO₂/year.",
        "Annual carbon tax saved = {{10000 * 45 = 450000}} S$/year.",
        "Payback time = {{1800000 / 450000 = 4}} years (even before counting electricity bill savings!).",
      ],
    },
    {
      id: "solving-climate-crisis-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "adaptation-strategies",
      strategy: "Identify maladaptation risks",
      question: "Geographers warn against 'maladaptation' — an adaptation action that backfires by making climate risk worse in the long run. Which scenario is the clearest example of MALADAPTATION?",
      options: [
        "Cooling heatwave-hit homes purely with inefficient coal-powered air conditioning that emits extra CO₂.",
        "Restoring coastal mangroves in front of an earthen dike to absorb waves and store blue carbon.",
        "Upgrading an urban canal into a naturalised retention park that stores flash-flood rainwater.",
        "Training coastal village volunteers to evacuate residents into elevated shelters before cyclones.",
      ],
      answerIndex: 0,
      hints: [
        "Think about an adaptation choice that solves a short-term discomfort while pumping MORE greenhouse gases into the air — creating a vicious cycle!",
        "Check which of the four options worsens warming or future risk.",
      ],
      explanation:
        "Relying on fossil-fuel-powered air conditioning to survive heatwaves dumps extra waste heat onto streets (worsening Urban Heat Island) and increases CO₂ emissions — a classic example of maladaptation unless powered by clean renewables and paired with passive shade/cooling.",
    },
    {
      id: "solving-climate-crisis-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "adaptation-strategies",
      strategy: "Compare coastal protection economics",
      question: "A 10 km stretch of coastline faces rising seas. Option A builds a **tall concrete sea wall** costing **S$12 million per km**. Option B restores a **mangrove belt** (costing **S$2 million per km**) in front of a **shorter dike** (costing **S$6 million per km**). Calculate the **percentage cost saving** of choosing hybrid Option B over Option A (to 1 decimal place).",
      answer: { type: "number", value: 33.3, tolerance: 0.35, display: "33.3%" },
      hints: [
        "Total cost of Option A = 10 × 12 = S$120 million.",
        "Total cost of Option B = 10 × (2 + 6) = S$80 million.",
        "Percentage saving = ((120 − 80) ÷ 120) × 100 = (40 ÷ 120) × 100.",
      ],
      solution: [
        "Option A (tall wall) = {{10 * 12 = 120}} million S$.",
        "Option B (mangroves + shorter dike) = {{10 * (2 + 6) = 80}} million S$.",
        "Saving = {{120 - 80 = 40}} million S$ → {{(40 / 120) * 100 = 33.3}}% cheaper (while storing blue carbon and supporting fisheries!).",
      ],
    },
    {
      id: "solving-climate-crisis-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "international-agreements",
      strategy: "Analyse trade-offs in global diplomacy",
      question: "Why did the Paris Agreement deliberately choose voluntary NDCs plus transparent 5-year reviews instead of legally enforceable UN fines?",
      options: [
        "Because climate scientists proved voluntary promises cut emissions faster than binding carbon laws.",
        "Because major emitters would have refused to ratify legally punitive caps, leaving no global treaty at all.",
        "Because the United Nations already possesses unlimited climate funds to pay every country's transition.",
        "Because global temperatures stopped rising in 2015, removing any urgency for emissions reductions.",
      ],
      answerIndex: 1,
      hints: [
        "Recall what happened to the 1997 Kyoto Protocol when binding top-down caps were attempted.",
        "Diplomats faced a real-world trade-off between universal participation (~195 countries) and legal penalties.",
      ],
      explanation:
        "After key emitters opted out of Kyoto's binding caps, Paris diplomats prioritised universal participation (~195 nations) using voluntary bottom-up NDCs, betting that transparent 5-year reviews, falling renewable prices and peer pressure would ratchet ambition upward over time.",
    },
    {
      id: "solving-climate-crisis-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "singapore-green-plan-action",
      strategy: "Evaluate place-specific constraints",
      marks: 4,
      question: "Evaluate how effectively **Singapore's Green Plan 2030** overcomes the city-state's physical limitations to tackle BOTH mitigation and adaptation. (4 marks)",
      hints: [
        "State Singapore's two physical constraints: tiny land area (~735 km², alternative-energy disadvantaged) AND 30% low-lying coastal land (<5 m) + >90% food imports.",
        "Explain strong Green Plan innovations (rooftop & Tengeh floating solar ≥2 GWp, ASEAN clean power imports, EVs/carbon tax, Long Island ~800 ha coastal barrier + reservoir, 1M trees).",
        "Identify remaining challenges/limitations (still >90% natural gas today, land competition, high S$100B+ coastal cost, dependence on neighbours for clean electricity & food).",
        "Give a clear concluding judgement.",
      ],
      modelAnswer:
        "Despite covering just ~735 km² with low wind speeds and no large rivers, Singapore innovates cleverly on mitigation by stacking ≥2 GWp of panels onto HDB rooftops and Tengeh Floating Solar Farm, importing clean electricity via the ASEAN Power Grid, expanding MRT lines to 360 km and steadily raising its carbon tax toward S$50–80/t alongside 100% cleaner-energy new cars from 2030. On adaptation, facing 30% low-lying coastal land below 5 m and over 90% food imports, it pairs Pulau Tekong's sand-saving polder and East Coast's multi-purpose ~800 ha Long Island (coastal defence plus freshwater reservoir) with 1 million heat-cooling trees and '30 by 30' vertical farms. However, serious constraints remain: the power grid still relies overwhelmingly on natural gas today, cross-border ASEAN imports depend on regional cooperation, and S$100B+ coastal mega-projects carry enormous long-term costs. Overall, the blueprint is remarkably well-tailored to a dense island, yet achieving net zero by 2050 depends heavily on rapid regional clean-energy imports and global emissions cuts.",
      markScheme: [
        {
          point: "Links specific mitigation innovations (≥2 GWp rooftop/floating solar, ASEAN imports, EVs, carbon tax, 360 km MRT) to Singapore's energy/land constraints.",
          keywords: ["2 gwp", "tengeh", "floating solar", "asean", "carbon tax", "360 km"],
        },
        {
          point: "Links specific adaptation innovations (Long Island ~800 ha barrier+reservoir, Tekong polder, 1M trees, 30 by 30) to coastal/heat/food vulnerabilities.",
          keywords: ["long island", "800 ha", "polder", "1 million", "30 by 30", "reservoir"],
        },
        {
          point: "Evaluates genuine limitations/risks (heavy current natural gas dependence, cross-border import reliance, huge S$100B+ cost or scarce land).",
          keywords: ["natural gas", "regional cooperation", "100b", "cost", "depend", "constraints"],
        },
        {
          point: "Reaches a balanced overall judgement tying local effectiveness to 2050 net zero / global action.",
          keywords: ["overall", "well-tailored", "2050", "net zero", "global"],
        },
      ],
    },
    {
      id: "solving-climate-crisis-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "international-agreements",
      strategy: "Balanced synoptic PEEL evaluation",
      marks: 5,
      question: "'Adaptation is now more important than mitigation because climate change is already happening.' To what extent do you agree with this statement? Use named examples in your response. (5 marks)",
      hints: [
        "State a nuanced judgement (disagree that one replaces the other — BOTH are urgently needed, and without mitigation adaptation eventually fails!).",
        "Argue why adaptation is urgently needed NOW (locked-in warming/sea-level rise; cite Bangladesh cyclone shelters/salt-tolerant rice, Sahel drip irrigation, Singapore Long Island / Tekong polder).",
        "Argue why mitigation remains indispensable (bathtub analogy: unchecked 3–4 °C warming triggers irreversible permafrost/albedo feedbacks & multi-metre sea rise that overwhelms sea walls and drowns the Maldives).",
        "Highlight win–win dual strategies (mangroves & Singapore's 1M trees do BOTH!).",
        "Close with a crisp synthesis verdict.",
      ],
      modelAnswer:
        "I strongly disagree that one strategy can overtake the other: both are urgently inseparable, and without deep mitigation even the best coastal defences will eventually be overwhelmed. On one hand, immediate resilience is vital today because existing atmospheric CO₂ and ocean heat lock in decades of rising seas and stronger storms — proven by Bangladesh slashing cyclone deaths from over 300,000 in 1970 to under 100 via shelters and SMS alerts, Sahel farmers adopting drip irrigation, and Singapore planning East Coast's ~800 ha Long Island barrier. On the other hand, treating only the symptoms while leaving the emissions tap wide open risks pushing warming past 2.5–3 °C, triggering runaway permafrost methane feedbacks, wiping out coral reefs and producing multi-metre sea-level rise that no affordable wall can hold back — especially in low-income deltas and the Maldives. Best of all, nature-based win–win policies like coastal mangrove restoration and Singapore's 1 million urban trees sequester carbon while simultaneously buffering storm waves and urban heat. Overall, we must adapt to the warming we can no longer avoid while mitigating rapidly through clean renewables and Paris NDCs to avoid warming we can never adapt to.",
      markScheme: [
        {
          point: "States a clear balanced stance (both are indispensable; adaptation cannot replace mitigation).",
          keywords: ["disagree", "inseparable", "both", "overwhelmed"],
        },
        {
          point: "Justifies urgent adaptation using locked-in warming + named case-study examples (Bangladesh shelters, Sahel drip irrigation, Singapore Long Island/polder).",
          keywords: ["locked in", "bangladesh", "shelters", "sahel", "drip", "long island"],
        },
        {
          point: "Proves why mitigation remains indispensable (runaway feedbacks, multi-metre sea rise overwhelming sea walls / drowning Maldives if unchecked).",
          keywords: ["permafrost", "maldives", "overwhelm", "tap", "2.5", "coral"],
        },
        {
          point: "Highlights win–win strategies achieving both simultaneously (mangroves or Singapore's 1 million urban trees).",
          keywords: ["win–win", "win-win", "mangrove", "1 million", "blue carbon", "simultaneously"],
        },
        {
          point: "Delivers a crisp concluding synthesis ('adapt to what we cannot avoid, mitigate to avoid what we cannot adapt to').",
          keywords: ["overall", "avoid", "paris", "renewables", "ndc"],
        },
      ],
    },
  ],
};
