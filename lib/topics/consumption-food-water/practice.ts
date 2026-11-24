import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "consumption-food-water-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "consumption-circular-economy",
      question: "Taking global biocapacity as 1.6 gha per person, how many planet Earths would humanity need if everyone had an ecological footprint of 4.8 gha per person?",
      answer: { type: "number", value: 3, display: "3" },
      traps: [
        { spec: { type: "number", value: 3.2 }, feedback: "4.8 − 1.6 = 3.2 gha is the ecological deficit per person, not the number of Earths — divide 4.8 by 1.6 instead." },
      ],
      solution: [
        "Earths needed = Per-capita footprint ÷ Global biocapacity.",
        "{{4.8 / 1.6}} = 3 planet Earths.",
      ],
      hints: [
        "Divide the country's per-capita footprint by Earth's biocapacity per person (1.6 gha).",
      ],
    },
    {
      id: "consumption-food-water-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "consumption-circular-economy",
      question: "Which action sits HIGHEST on the circular-economy hierarchy?",
      options: [
        "Incinerating mixed household waste to recover small amounts of heat",
        "Designing durable modular devices that can be repaired and reused",
        "Burying sorted plastic packaging inside an offshore lined landfill",
        "Shipping obsolete electronics to overseas informal scrapyards",
      ],
      answerIndex: 1,
      explanation:
        "Designing products for durability, repair and reuse prevents waste from being created and preserves embodied energy and materials — ranking far above incineration, landfill or waste export.",
      hints: [
        "Circular design prioritises keeping products working rather than dealing with rubbish at end-of-life.",
      ],
    },
    {
      id: "consumption-food-water-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "global-food-security",
      question: "Under Singapore's '30 by 30' goal, what percentage of Singapore's nutritional needs does it aim to produce locally by 2030?",
      answer: { type: "number", value: 30, display: "30%" },
      solution: [
        "Singapore currently imports over 90% of its food.",
        "The '30 by 30' target aims to produce 30% of Singapore's nutritional needs locally by 2030.",
      ],
      hints: [
        "Look closely at the first number in the name of the policy: '30 by 30'.",
      ],
    },
    {
      id: "consumption-food-water-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "global-food-security",
      question: "Why can tomatoes grown in heated UK winter greenhouses emit MORE CO₂e than Spanish open-field tomatoes transported 1,600 km by lorry?",
      options: [
        "Spanish tomato plants absorb zero sunlight during Mediterranean winters",
        "Lorries carrying vegetables across Europe burn zero diesel fuel on motorways",
        "Heating glasshouses with fossil fuels emits far more carbon than trucking produce",
        "UK tomatoes always travel by cargo aeroplane before reaching British supermarkets",
      ],
      answerIndex: 2,
      explanation:
        "Fossil-fuel heating for winter greenhouses generates far higher emissions per kilogram than overland transport, proving why food miles alone do not equal total carbon footprint.",
      hints: [
        "Compare the energy required to heat a glasshouse in freezing weather with the fuel share per tomato inside a full lorry.",
        "Remember: transport is typically only 6%–10% of food's total emissions.",
      ],
    },
    {
      id: "consumption-food-water-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "global-water-scarcity",
      question: "Approximately what percentage of ALL water on Earth is freshwater? (Give your answer to 1 decimal place.)",
      answer: { type: "number", value: 2.5, display: "2.5%" },
      traps: [
        { spec: { type: "number", value: 97.5 }, feedback: "97.5% is Earth's salty ocean water — freshwater is the remaining 2.5%." },
        { spec: { type: "number", value: 1 }, feedback: "Less than 1% is readily accessible surface freshwater; total freshwater (including ice caps and groundwater) is about 2.5%." },
      ],
      solution: [
        "About 97.5% of Earth's water is saline ocean water.",
        "Only 100% − 97.5% = 2.5% is freshwater (and <1% of freshwater is easily accessible at the surface).",
      ],
      hints: [
        "Subtract Earth's saline ocean share (~97.5%) from 100%.",
      ],
    },
    {
      id: "consumption-food-water-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "global-water-scarcity",
      question: "Name the type of water scarcity occurring in a high-rainfall country where poverty and weak pipe infrastructure prevent citizens from accessing clean water.",
      answer: {
        type: "text",
        accept: ["economic water scarcity", "economic scarcity", "economic"],
        display: "Economic water scarcity",
      },
      traps: [
        {
          spec: { type: "text", accept: ["physical water scarcity", "physical scarcity", "physical"] },
          feedback: "Physical scarcity means nature supplies too little water (arid climate). Here rainfall is high, so lack of funding/infrastructure makes it economic scarcity.",
        },
      ],
      solution: [
        "High rainfall means physical water is naturally available.",
        "Lack of capital, treatment plants and pipes creates economic water scarcity.",
      ],
      hints: [
        "Ask: 'Is rain missing, or are money and infrastructure missing?'",
        "The two geographical types are physical water scarcity and ____ water scarcity.",
      ],
    },
    {
      id: "consumption-food-water-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "global-water-scarcity",
      question: "If 1 kg of beef has a virtual water footprint of 15,400 L and 1 kg of rice has 2,500 L, how many litres of virtual water are embedded in 0.5 kg of beef and 1 kg of rice combined?",
      answer: { type: "number", value: 10200, display: "10200 L" },
      traps: [
        { spec: { type: "number", value: 17900 }, feedback: "You used 1 full kg of beef instead of 0.5 kg — halve 15,400 first." },
      ],
      solution: [
        "0.5 kg beef = 0.5 × 15,400 = 7,700 L.",
        "1 kg rice = 2,500 L.",
        "Total = 7,700 + 2,500 = 10,200 L.",
      ],
      hints: [
        "Calculate half of 15,400 L first.",
        "Then add 2,500 L for the 1 kg of rice.",
      ],
    },
    {
      id: "consumption-food-water-quiz-q08",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "water-management-singapore",
      question: "Which of Singapore's Four National Taps uses Microfiltration, Reverse Osmosis and Ultraviolet (UV) disinfection to reclaim treated used water?",
      options: [
        "NEWater",
        "Local Catchment",
        "Imported Water",
        "Desalinated Water",
      ],
      answerIndex: 0,
      explanation:
        "NEWater is Singapore's brand for ultra-clean reclaimed used water purified through the three-stage Microfiltration → Reverse Osmosis → UV disinfection process.",
      hints: [
        "Think of the closed urban water loop that turns treated used water into ultra-pure water.",
      ],
    },
    {
      id: "consumption-food-water-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "water-management-singapore",
      question: "What is a major environmental and economic drawback of relying heavily on seawater desalination?",
      options: [
        "It stops functioning completely during prolonged dry El Niño spells",
        "It requires huge electrical energy and creates concentrated salty brine",
        "It depends on renewing bilateral water treaties with neighbouring countries",
        "It removes freshwater directly from Singapore's 17 inland reservoirs",
      ],
      answerIndex: 1,
      explanation:
        "Desalination is completely drought-proof, but forcing salty seawater through reverse osmosis membranes demands high electricity (cost & carbon emissions) and leaves dense salty brine that must be diffused carefully at sea.",
      hints: [
        "Think about the two inputs/outputs of pushing salty ocean water through high-pressure membranes.",
        "Desalination uses seawater, so droughts and river treaties do not halt it.",
      ],
    },
    {
      id: "consumption-food-water-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "water-management-singapore",
      marks: 3,
      question: "Explain why Singapore still faces water insecurity despite receiving around 2,400 mm of tropical rainfall every year.",
      modelAnswer:
        "Although rainfall is high, Singapore has a very small land area (~735 km²) which restricts how much rainwater can be caught and stored. It also lacks large natural lakes, major rivers or deep groundwater aquifers, so most uncaptured rain runs rapidly into the sea. Finally, a dense population of about 6 million plus thirsty industries creates massive daily demand per square kilometre.",
      markScheme: [
        {
          point: "Small land area (~735 km²) limits catchment and storage capacity",
          keywords: ["small land", "tiny land", "limited land", "735", "small area", "catchment"],
        },
        {
          point: "Lack of natural aquifers, big rivers or natural lakes so rain runs off to sea",
          keywords: ["aquifer", "natural lake", "no large river", "runs off", "runoff", "straight into the sea"],
        },
        {
          point: "High population density (~6 million) and industrial demand outstrip natural supply",
          keywords: ["dense population", "population density", "6 million", "high demand", "industr"],
        },
      ],
      hints: [
        "Think about physical space: how big is Singapore's island area?",
        "Ask where rainwater goes if there are no large natural aquifers or huge river basins.",
        "Add the human demand side: how many people and factories share that tiny island?",
      ],
      commonError: "Writing that Singapore has a dry climate — Singapore actually has an equatorial climate with ~2,400 mm of rain per year!",
    },
  ],
  papers: [
    {
      id: "consumption-food-water-p1",
      title: "Practice Paper 1 — Consumption, Food & Water Core Skills",
      questions: [
        {
          id: "consumption-food-water-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "consumption-circular-economy",
          question: "Singapore has an ecological footprint of 5.9 gha/person and local biocapacity of about 0.1 gha/person. Calculate Singapore's ecological deficit per person in global hectares (gha).",
          answer: { type: "number", value: 5.8, display: "5.8" },
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "Subtract biocapacity from footprint (5.9 − 0.1), do not add them." },
          ],
          solution: [
            "Ecological deficit = Ecological footprint − Local biocapacity.",
            "5.9 − 0.1 = 5.8 gha per person.",
          ],
          hints: [
            "Use the formula: Ecological Deficit = Footprint − Local Biocapacity.",
          ],
        },
        {
          id: "consumption-food-water-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "consumption-circular-economy",
          question: "Global biocapacity is 1.6 gha per person. If Country M has an ecological footprint of 5.6 gha per person, how many planet Earths would humanity need if everyone lived like Country M?",
          answer: { type: "number", value: 3.5, display: "3.5" },
          traps: [
            { spec: { type: "number", value: 4 }, feedback: "5.6 − 1.6 = 4.0 gha is the deficit; divide 5.6 ÷ 1.6 to find planet Earths needed." },
          ],
          solution: [
            "Earths needed = {{5.6 / 1.6}} = 3.5 Earths.",
          ],
          hints: [
            "Divide the country's per-capita footprint by 1.6 gha.",
            "Think: 5.6 ÷ 1.6 = 56 ÷ 16 = 7 ÷ 2.",
          ],
        },
        {
          id: "consumption-food-water-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "consumption-circular-economy",
          question: "Which statement best contrasts global resource consumption in HICs with LICs?",
          options: [
            "LIC residents usually consume five times more energy and plastics per person than HIC residents",
            "HIC residents have much larger per-capita footprints, while LICs often absorb exported HIC waste",
            "HICs and LICs maintain nearly identical ecological footprints once food imports are included",
            "LICs generate almost all global electronic waste while exporting none of their raw minerals",
          ],
          answerIndex: 1,
          explanation:
            "Per-capita consumption of energy, meat, plastics and electronics is far higher in HICs (4–8 gha/person) than LICs (<1.5 gha/person), yet much HIC plastic and e-waste ends up in LIC/NEE scrapyards.",
          hints: [
            "Compare per-capita footprint figures (e.g., USA ~8.1 gha vs Bangladesh ~0.8 gha).",
            "Remember where HIC e-waste and plastic waste frequently travel.",
          ],
        },
        {
          id: "consumption-food-water-p1-q04",
          kind: "written",
          difficulty: "core",
          guideRef: "consumption-circular-economy",
          marks: 3,
          question: "Contrast a linear economy with a circular economy, using electronics (e-waste) as an example.",
          modelAnswer:
            "A linear economy follows a one-way take-make-dispose path where raw minerals are mined, turned into gadgets, used briefly and dumped in landfill or exported to informal scrapyards. A circular economy designs out waste from the outset by making modular products that can be repaired, upgraded or refurbished for reuse. At end-of-life, valuable metals like copper and gold are recovered cleanly through recycling to feed back into new manufacturing.",
          markScheme: [
            {
              point: "Explains linear economy as take-make-dispose ending in landfill or scrapyards",
              keywords: ["take-make", "take make", "dispose", "one-way", "landfill", "scrapyard", "throw away"],
            },
            {
              point: "Explains circular economy designing out waste via repair, modular design or reuse",
              keywords: ["repair", "reuse", "refurbish", "modular", "design out waste", "extend"],
            },
            {
              point: "Links to electronics/e-waste material recovery (e.g., copper, gold, rare metals looped back)",
              keywords: ["copper", "gold", "metal", "component", "battery", "recycl", "loop"],
            },
          ],
          hints: [
            "Start by defining the one-way path of a linear economy.",
            "Then explain how a circular economy keeps gadgets in use longer before recycling.",
            "Include a specific electronics detail such as modular battery repair or recovering copper/gold.",
          ],
          commonError: "Saying circular economy is 'just recycling' — always mention designing for repair, reuse and remanufacture first!",
        },
        {
          id: "consumption-food-water-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "global-food-security",
          question: "A restaurant buys 4 kg of chicken (6 kg CO₂e/kg) instead of 4 kg of cheese (21 kg CO₂e/kg). How many kg of CO₂e are saved?",
          answer: { type: "number", value: 60, display: "60 kg" },
          traps: [
            { spec: { type: "number", value: 15 }, feedback: "15 kg CO₂e is the saving per 1 kg — remember to multiply by 4 kg!" },
          ],
          solution: [
            "Cheese: 4 × 21 = 84 kg CO₂e.",
            "Chicken: 4 × 6 = 24 kg CO₂e.",
            "Saving: 84 − 24 = 60 kg CO₂e.",
          ],
          hints: [
            "Find the difference per kilogram: 21 − 6.",
            "Multiply that difference by 4 kg.",
          ],
        },
        {
          id: "consumption-food-water-p1-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "global-food-security",
          question: "Which pair of factors represents one PHYSICAL cause and one HUMAN cause of food insecurity?",
          options: [
            "Prolonged drought (physical) and armed conflict blocking harvests (human)",
            "High food prices (physical) and volcanic ash ruining crops (human)",
            "Soil salinisation (human) and lack of household income (physical)",
            "Tropical cyclones (physical) and flooding of low-lying river deltas (human)",
          ],
          answerIndex: 0,
          explanation:
            "Drought is a natural climatic (physical) hazard, whereas armed conflict disrupting farming and aid corridors is a human cause. The other options swap physical/human labels or list two physical factors.",
          hints: [
            "Physical causes come from nature (climate, soil, pests); human causes come from society (war, poverty, politics).",
            "Check that the first item is natural and the second is human-made.",
          ],
        },
        {
          id: "consumption-food-water-p1-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "global-food-security",
          question: "What is the geographical term for the distance food travels from farm producer to consumer plate?",
          answer: {
            type: "text",
            accept: ["food miles", "food mile"],
            display: "Food miles",
          },
          solution: [
            "The distance food travels from producer to consumer is called food miles.",
          ],
          hints: [
            "It is a two-word phrase combining 'food' with a unit of distance.",
          ],
        },
        {
          id: "consumption-food-water-p1-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "global-food-security",
          marks: 4,
          question: "Explain why 'food miles' alone can be misleading when judging a food's climate impact, and state one situation where transport DOES matter heavily.",
          modelAnswer:
            "Food miles only measure transport distance and ignore production emissions, even though transport makes up just 6%–10% of global food emissions. What food is eaten matters far more: local beef (~60 kg CO₂e/kg) emits much more than sea-shipped lentils (~1 kg CO₂e/kg) because cattle produce potent methane and require extensive pasture land. Similarly, local winter tomatoes grown in fossil-fuel heated glasshouses can emit more than sunny Spanish field tomatoes trucked north. However, transport matters heavily when perishable foods are moved by air freight, which emits around 50 times more CO₂ per tonne-km than container ships.",
          markScheme: [
            {
              point: "Notes food miles only count transport (~6%–10% of food emissions), missing farming/production emissions",
              keywords: ["6%", "10%", "production", "farming", "life-cycle", "life cycle", "transport is small", "small share"],
            },
            {
              point: "Gives food-type example (e.g., beef methane / land use vs plant protein like lentils/tofu)",
              keywords: ["beef", "methane", "cattle", "lentil", "tofu", "livestock", "60 kg"],
            },
            {
              point: "Gives farming-method example (e.g., heated glasshouses vs sunny field crops) OR container-ship efficiency",
              keywords: ["greenhouse", "glasshouse", "heated", "container ship", "sea freight", "spanish"],
            },
            {
              point: "Identifies air freight as the high-emission transport exception (~50× higher than shipping)",
              keywords: ["air freight", "air-freight", "flown", "plane", "aeroplane", "aviation", "50"],
            },
          ],
          hints: [
            "Start with what fraction of food emissions actually comes from transport (~6%–10%).",
            "Contrast a high-emission local food (beef or heated winter glasshouse veg) with sea-shipped crops.",
            "End with the major transport exception: flying perishable produce.",
          ],
          commonError: "Concluding that transport NEVER matters — always include the air-freight exception!",
        },
        {
          id: "consumption-food-water-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "global-water-scarcity",
          question: "A meal uses 0.3 kg of beef (15,400 L/kg) and 0.4 kg of rice (2,500 L/kg). Calculate the total virtual water in litres.",
          answer: { type: "number", value: 5620, display: "5620 L" },
          traps: [
            { spec: { type: "number", value: 17900 }, feedback: "Multiply by the exact weights (0.3 kg and 0.4 kg) rather than adding 1 kg of each." },
          ],
          solution: [
            "Beef: 0.3 × 15,400 = 4,620 L.",
            "Rice: 0.4 × 2,500 = 1,000 L.",
            "Total virtual water = 4,620 + 1,000 = 5,620 L.",
          ],
          hints: [
            "Find 0.3 × 15,400 (tip: 10% is 1,540, multiply by 3 = 4,620).",
            "Find 0.4 × 2,500 = 1,000, then add both together.",
          ],
        },
        {
          id: "consumption-food-water-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "global-water-scarcity",
          question: "About 2.5% of Earth's water is freshwater. Where is the LARGEST share (~69%) of that freshwater stored?",
          options: [
            "Open tropical rivers and freshwater lakes",
            "Atmospheric water vapour and monsoon clouds",
            "Glaciers, ice sheets and permanent snow",
            "Municipal drinking reservoirs and storage towers",
          ],
          answerIndex: 2,
          explanation:
            "Roughly 69% of Earth's freshwater is frozen in glaciers and ice caps (such as Antarctica and Greenland) and ~30% is groundwater, leaving <1% easily accessible in rivers and lakes.",
          hints: [
            "Think about Antarctica, Greenland and high mountain ranges.",
            "Surface rivers and lakes hold less than 1% of freshwater.",
          ],
        },
        {
          id: "consumption-food-water-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "global-water-scarcity",
          question: "What is the annual renewable freshwater threshold (in m³ per person per year) below which a country is officially classified as experiencing WATER SCARCITY?",
          answer: { type: "number", value: 1000, display: "1000" },
          traps: [
            { spec: { type: "number", value: 1700 }, feedback: "1,700 m³/person/year is the threshold for water STRESS; water SCARCITY is below 1,000 m³." },
            { spec: { type: "number", value: 500 }, feedback: "500 m³/person/year is ABSOLUTE water scarcity; standard water scarcity starts below 1,000 m³." },
          ],
          solution: [
            "Falkenmark thresholds: <1,700 m³ = water stress; <1,000 m³ = water scarcity; <500 m³ = absolute scarcity.",
            "Therefore the water scarcity threshold is 1,000 m³/person/year.",
          ],
          hints: [
            "Recall the three Falkenmark numbers: 1,700 (stress), 1,000 (scarcity), 500 (absolute scarcity).",
            "The question specifically asks for water scarcity (the middle threshold).",
          ],
        },
        {
          id: "consumption-food-water-p1-q12",
          kind: "short",
          difficulty: "warmup",
          guideRef: "water-management-singapore",
          question: "Name the 350 m dam completed in 2008 across Marina Channel that creates Singapore's downtown freshwater reservoir and provides tidal flood control.",
          answer: {
            type: "text",
            accept: ["marina barrage", "the marina barrage"],
            display: "Marina Barrage",
          },
          solution: [
            "Marina Barrage spans Marina Channel, forming Marina Reservoir while preventing city flooding and hosting a green rooftop park.",
          ],
          hints: [
            "It shares its name with Marina Bay and ends with a word for a low dam with flood gates.",
          ],
        },
        {
          id: "consumption-food-water-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "water-management-singapore",
          question: "A Singapore school reduces water usage across 800 students by 8 litres per student per day. How many litres of water are saved in 20 school days?",
          answer: { type: "number", value: 128000, display: "128000 L" },
          traps: [
            { spec: { type: "number", value: 6400 }, feedback: "6,400 L is the saving for 1 day — multiply by 20 school days." },
          ],
          solution: [
            "Daily saving = 800 × 8 = 6,400 L/day.",
            "Saving over 20 school days = 6,400 × 20 = 128,000 L.",
          ],
          hints: [
            "First find the total saving per day: 800 × 8.",
            "Then multiply the daily saving by 20 days.",
          ],
        },
        {
          id: "consumption-food-water-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "water-management-singapore",
          marks: 3,
          question: "Describe the three purification stages used to produce NEWater in Singapore, in the correct order.",
          modelAnswer:
            "First, treated used water undergoes microfiltration, which filters out microscopic suspended particles and bacteria. Second, it passes through reverse osmosis membranes that strip out tiny viruses, heavy metals and dissolved salts. Third, ultraviolet (UV) disinfection destroys any remaining organisms as an extra safety barrier.",
          markScheme: [
            {
              point: "Stage 1: Microfiltration removes suspended particles / solids and bacteria",
              keywords: ["microfiltration", "micro-filtration", "bacteria", "particle"],
            },
            {
              point: "Stage 2: Reverse osmosis (RO) membrane removes viruses, heavy metals and dissolved salts",
              keywords: ["reverse osmosis", "semi-permeable", "membrane", "virus", "dissolved salt"],
            },
            {
              point: "Stage 3: Ultraviolet (UV) disinfection destroys any remaining microbes as a safety barrier",
              keywords: ["ultraviolet", "uv", "disinfection", "sterilis"],
            },
          ],
          hints: [
            "Use the mnemonic M-R-U.",
            "State what each stage removes: larger particles/bacteria → tiny dissolved molecules/viruses → final sterilisation.",
          ],
          commonError: "Swapping the order of Microfiltration and Reverse Osmosis, or forgetting UV disinfection as stage 3.",
        },
        {
          id: "consumption-food-water-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "global-water-scarcity",
          marks: 4,
          question: "Distinguish between physical water scarcity and economic water scarcity, giving one real-world example of each.",
          modelAnswer:
            "Physical water scarcity occurs when human demand exceeds the natural renewable water supply because of an arid climate, low rainfall, high evaporation or over-pumping of aquifers. A real-world example is the Middle East and North Africa (such as Qatar or Saudi Arabia). By contrast, economic water scarcity happens when rivers and rainfall are physically plentiful, but poverty, weak infrastructure or poor governance stop people accessing safe piped water. A real-world example is the Democratic Republic of the Congo (DRC) or rural Sub-Saharan Africa.",
          markScheme: [
            {
              point: "Defines physical scarcity: demand exceeds natural supply due to arid climate / low rainfall / over-abstraction",
              keywords: ["arid", "low rainfall", "dry climate", "exceeds natural", "evaporation", "desert"],
            },
            {
              point: "Names a valid physical scarcity example (MENA, Middle East, Qatar, Saudi Arabia, SW USA, Central Asia)",
              keywords: ["middle east", "mena", "qatar", "saudi", "north africa", "egypt", "arizona", "central asia", "australia"],
            },
            {
              point: "Defines economic scarcity: natural water exists but poverty/lack of pipes/treatment/governance blocks access",
              keywords: ["poverty", "infrastructure", "pipes", "funding", "capital", "governance", "cannot afford"],
            },
            {
              point: "Names a valid economic scarcity example (DRC, Sub-Saharan Africa, Ethiopia, Nigeria)",
              keywords: ["congo", "drc", "sub-saharan", "ethiopia", "nigeria", "chad", "south sudan"],
            },
          ],
          hints: [
            "Define physical scarcity first and match it with a dry region.",
            "Define economic scarcity second (water is present, but money/pipes are missing) and name a wet LIC region.",
          ],
        },
      ],
    },
    {
      id: "consumption-food-water-p2",
      title: "Practice Paper 2 — Evaluation, Trade-Offs & Singapore Case Studies",
      questions: [
        {
          id: "consumption-food-water-p2-q01",
          kind: "mcq",
          difficulty: "core",
          guideRef: "consumption-circular-economy",
          question: "Humanity's global ecological footprint is roughly 2.7 gha/person while global biocapacity is 1.6 gha/person. Approximately how many planet Earths is humanity currently using each year?",
          options: [
            "About 0.6 Earths",
            "About 1.1 Earths",
            "About 1.7 Earths",
            "About 4.3 Earths",
          ],
          answerIndex: 2,
          explanation:
            "Divide global per-capita footprint by global biocapacity: {{2.7 / 1.6}} ≈ 1.69, or roughly 1.7 Earths — which explains why Earth Overshoot Day arrives in late July or early August.",
          hints: [
            "Divide 2.7 by 1.6.",
            "1.1 is the deficit (2.7 − 1.6), not the ratio of Earths needed.",
          ],
        },
        {
          id: "consumption-food-water-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "consumption-circular-economy",
          question: "In 2020, a city recycled 18% of its plastic waste; by 2025, a circular deposit-return scheme raised recycling to 45%. Calculate the percentage-point increase (how many percentage points higher).",
          answer: { type: "number", value: 27, display: "27%" },
          traps: [
            { spec: { type: "number", value: 150 }, feedback: "150% is the relative percentage increase ((45−18)/18 × 100); percentage-point increase is simply 45 − 18 = 27." },
          ],
          solution: [
            "Percentage-point increase = 45 − 18 = 27 percentage points.",
          ],
          hints: [
            "Notice the question asks for the percentage-point increase, which is a direct subtraction.",
            "Compute 45 − 18.",
          ],
        },
        {
          id: "consumption-food-water-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "global-food-security",
          question: "Singapore consumes roughly 540,000 tonnes of vegetables per year. If local farms currently supply 4% and reach 30% under '30 by 30', how many tonnes of vegetables would local farms supply at 30%?",
          answer: { type: "number", value: 162000, display: "162000" },
          traps: [
            { spec: { type: "number", value: 21600 }, feedback: "21,600 tonnes is 4% (current supply) — calculate 30% of 540,000 instead." },
          ],
          solution: [
            "10% of 540,000 = 54,000 tonnes.",
            "30% of 540,000 = 3 × 54,000 = 162,000 tonnes.",
          ],
          hints: [
            "Find 10% of 540,000 first by dividing by 10.",
            "Multiply 10% by 3 to get 30%.",
          ],
        },
        {
          id: "consumption-food-water-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "global-food-security",
          question: "Which farming technology lets Singapore grow leafy greens indoors using stacked racks and up to 90% less water than soil fields?",
          options: [
            "Extensive cattle ranching across cleared woodland",
            "Open-channel flood irrigation on flat clay plains",
            "Slash-and-burn shifting cultivation on hill slopes",
            "Vertical hydroponic and aeroponic indoor farming",
          ],
          answerIndex: 3,
          explanation:
            "Vertical hydroponic/aeroponic farms recirculate nutrient-rich water directly to plant roots in stacked layers, drastically cutting land area and water loss compared with soil farming.",
          hints: [
            "Singapore has less than 1% land for farming, so farms must build upward!",
            "Think of soil-free water-recirculating indoor systems.",
          ],
        },
        {
          id: "consumption-food-water-p2-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "global-food-security",
          marks: 4,
          question: "Evaluate Singapore's '30 by 30' agri-tech strategy by explaining two benefits and two challenges.",
          modelAnswer:
            "A first benefit is stronger food resilience: producing 30% of nutritional needs locally buffers Singapore against export bans, droughts or shipping disruptions abroad. A second benefit is resource efficiency: vertical indoor farms and recirculating aquaculture yield far more food per square metre while using up to 90% less water and avoiding monsoon weather damage. However, a key challenge is high operating cost: LED lighting and climate control consume heavy electricity, making local produce pricier than regional imports. A second challenge is tiny land availability (<1% of land), meaning Singapore will still depend on global imports for the remaining 70% of its food.",
          markScheme: [
            {
              point: "Benefit 1: Reduces vulnerability to overseas export bans, supply shocks or climate disruptions",
              keywords: ["resilien", "export ban", "disruption", "shock", "buffer", "self-sufficien", "import reliance"],
            },
            {
              point: "Benefit 2: High yield per m² / vertical stacking / up to 90% less water / weather-controlled",
              keywords: ["vertical", "90%", "less water", "yield", "hydroponic", "aquaculture", "weather"],
            },
            {
              point: "Challenge 1: High electricity/energy use for LEDs & cooling leads to higher retail prices",
              keywords: ["electric", "energy", "led", "cost", "pric", "expensive", "capital"],
            },
            {
              point: "Challenge 2: Limited land (<1%) means Singapore still imports 70% of its food",
              keywords: ["1%", "70%", "scarce land", "land space", "still import", "tiny land"],
            },
          ],
          hints: [
            "Use a balanced structure: 2 distinct advantages + 2 distinct limitations.",
            "Advantages: resilience against export bans + land/water efficiency of vertical farming.",
            "Challenges: electricity bills for LEDs/cooling + land limits meaning 70% is still imported.",
          ],
        },
        {
          id: "consumption-food-water-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "global-water-scarcity",
          question: "A city's direct tap water use is 140 L per person per day, while its virtual water footprint from food and goods is 3,360 L per person per day. How many times larger is its virtual water footprint than its direct tap use?",
          answer: { type: "number", value: 24, display: "24" },
          solution: [
            "Ratio = {{3360 / 140}} = 24 times larger.",
          ],
          hints: [
            "Divide virtual water (3,360 L) by direct tap water (140 L).",
            "Cancel a zero first: 336 ÷ 14.",
          ],
        },
        {
          id: "consumption-food-water-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "global-water-scarcity",
          question: "Why does shifting from open flood irrigation to drip irrigation in semi-arid farming regions greatly improve water security?",
          options: [
            "Drip pipes deliver water slowly to plant roots, slashing evaporation and runoff losses",
            "Drip irrigation increases surface evaporation so clouds form above desert fields",
            "Drip pipes pump salty ocean water straight onto wheat without desalination",
            "Flood irrigation is prohibited worldwide under the 1962 Water Agreement",
          ],
          answerIndex: 0,
          explanation:
            "Open canals lose huge volumes to evaporation and seepage in hot climates. Drip irrigation delivers tiny droplets directly to root zones, often cutting agricultural water use by 30%–60% while boosting yields.",
          hints: [
            "Think about what happens to a wide shallow pool of water under hot desert sunshine.",
            "Drip systems target roots directly rather than soaking bare soil.",
          ],
        },
        {
          id: "consumption-food-water-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "global-water-scarcity",
          question: "Name the major African river basin where Ethiopia's Grand Ethiopian Renaissance Dam (GERD) has sparked upstream–downstream water-security negotiations with Egypt and Sudan.",
          answer: {
            type: "text",
            accept: ["nile", "river nile", "the nile", "the river nile", "blue nile"],
            display: "River Nile",
          },
          solution: [
            "The Grand Ethiopian Renaissance Dam is built on the Blue Nile, part of the River Nile basin.",
          ],
          hints: [
            "Egypt relies on this famous north-flowing river for over 90% of its freshwater.",
            "Its two main tributaries are the White Nile and the Blue Nile.",
          ],
        },
        {
          id: "consumption-food-water-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "water-management-singapore",
          question: "Singapore's total water demand is approximately 440 MGD. If NEWater supplies 40% of demand and Desalination supplies 25%, how many MGD do NEWater and Desalination supply together?",
          answer: { type: "number", value: 286, display: "286" },
          traps: [
            { spec: { type: "number", value: 176 }, feedback: "176 MGD is NEWater alone (40% of 440) — remember to add Desalination's 25% too!" },
            { spec: { type: "number", value: 65 }, feedback: "65% is their combined percentage — now calculate 65% of 440 MGD." },
          ],
          solution: [
            "Combined share = 40% + 25% = 65%.",
            "65% of 440 = 0.65 × 440 = 286 MGD.",
          ],
          hints: [
            "Add the two percentages first: 40% + 25% = 65%.",
            "Now compute 0.65 × 440 (or 50% + 10% + 5% = 220 + 44 + 22).",
          ],
        },
        {
          id: "consumption-food-water-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "water-management-singapore",
          question: "Which fraction of Singapore's total land surface currently serves as urban water catchment feeding its 17 reservoirs?",
          options: [
            "About one-tenth of the island",
            "About two-thirds of the island",
            "About one-quarter of the island",
            "Exactly one hundred percent of the island",
          ],
          answerIndex: 1,
          explanation:
            "Through extensive drains, canals and coastal barrages like Marina Barrage, PUB collects rainwater from roughly two-thirds of Singapore's land area (with long-term plans to push even higher).",
          hints: [
            "PUB transformed almost the whole island into a rainwater-catching sponge — far more than a quarter, though not quite 100%.",
            "Remember the fraction linked to Singapore's 17 reservoirs and Marina Barrage catchment.",
          ],
        },
        {
          id: "consumption-food-water-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "water-management-singapore",
          question: "What does the acronym WELS stand for in Singapore's demand-side water management programme? (Or type the key purpose: Water Efficiency ____ Scheme.)",
          answer: {
            type: "text",
            accept: ["water efficiency labelling scheme", "water efficiency labeling scheme", "labelling", "labeling"],
            display: "Water Efficiency Labelling Scheme",
          },
          solution: [
            "WELS stands for Water Efficiency Labelling Scheme, which uses 1- to 4-tick ratings to help consumers pick water-saving taps, toilets and washing machines.",
          ],
          hints: [
            "W = Water, E = Efficiency, S = Scheme. What does the 'L' stand for on those tick stickers?",
            "Think about the 1- to 4-tick stickers attached to taps and washing machines in Singapore shops.",
          ],
        },
        {
          id: "consumption-food-water-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "water-management-singapore",
          marks: 4,
          question: "Compare NEWater and Desalination as weather-independent water supplies for Singapore, giving two similarities and two differences.",
          modelAnswer:
            "First, both NEWater and desalination are weather-independent engineered taps that guarantee supply even during severe El Niño droughts. Second, both rely on Reverse Osmosis (RO) semi-permeable membranes to remove dissolved impurities. However, they differ in source water and energy use: NEWater reclaims treated urban used water with low salt content, whereas desalination purifies salty ocean seawater, requiring much more electricity and costing more per cubic metre. They also differ in waste impact: desalination produces concentrated salty brine that can harm seabed ecosystems if poorly diffused, while NEWater closes Singapore's urban water loop and is planned to reach 55% of supply by 2060 versus 30% for desalination.",
          markScheme: [
            {
              point: "Similarity 1: Both are weather-independent / drought-resilient",
              keywords: ["weather-independent", "weather independent", "drought", "rain-independent", "reliable"],
            },
            {
              point: "Similarity 2: Both use Reverse Osmosis (RO) membrane filtration",
              keywords: ["reverse osmosis", "membrane", "ro"],
            },
            {
              point: "Difference 1: Source water & energy — NEWater uses low-salt used water (lower energy) vs seawater (high energy/cost)",
              keywords: ["seawater", "used water", "wastewater", "reclaimed", "energy", "electricity", "salt"],
            },
            {
              point: "Difference 2: Environmental impact or future share — desalination creates salty brine / 30% vs NEWater closed loop / 55%",
              keywords: ["brine", "marine", "closed loop", "55%", "30%", "carbon"],
            },
          ],
          hints: [
            "Start with what they share: drought resilience and Reverse Osmosis technology.",
            "Then contrast their raw source (reclaimed wastewater vs seawater) and energy demand.",
            "Add the brine waste or 2060 target share difference (55% vs 30%).",
          ],
        },
        {
          id: "consumption-food-water-p2-q13",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "global-food-security",
          question: "A European supermarket replaces air-freighted green beans from Kenya with sea-shipped seasonal frozen peas and local field cabbages. Which geographical principle does this change best illustrate?",
          options: [
            "Eliminating international trade completely is the only way to cut food emissions",
            "Frozen vegetables always require more energy than flying fresh produce by jet",
            "Targeting high-emission transport modes like air freight cuts carbon more than obsessing over ship distance",
            "Sea shipping emits more greenhouse gases per tonne-km than aviation freight",
          ],
          answerIndex: 2,
          explanation:
            "Cutting air freight removes the ~50× aviation emissions penalty while keeping efficient sea shipping and local seasonal crops — smart climate action looks at transport mode AND production method, not simplistic distance rules.",
          hints: [
            "Compare air freight versus sea freight emissions per tonne-km.",
            "Does this move ban all trade, or specifically eliminate air-freighted perishables?",
          ],
        },
        {
          id: "consumption-food-water-p2-q14",
          kind: "short",
          difficulty: "challenge",
          guideRef: "water-management-singapore",
          question: "In 2003, Singapore's domestic water use was 165 L/person/day. By 2024 it fell to 141 L/person/day. Calculate the percentage decrease to 1 decimal place.",
          answer: { type: "number", value: 14.5, tolerance: 0.1, display: "14.5%" },
          traps: [
            { spec: { type: "number", value: 17, tolerance: 0.1 }, feedback: "Divide the change (24) by the ORIGINAL 2003 value (165), not the new 2024 value (141)!" },
            { spec: { type: "number", value: 24 }, feedback: "24 L is the absolute drop — divide 24 by 165 and multiply by 100 to find the percentage decrease." },
          ],
          solution: [
            "Decrease = 165 − 141 = 24 L/person/day.",
            "Percentage decrease = {{24 / 165 * 100}} = 14.545…% ≈ 14.5%.",
          ],
          hints: [
            "Use the percentage change formula: ((Old − New) ÷ Old) × 100.",
            "Compute (24 ÷ 165) × 100 and round to 1 decimal place.",
          ],
        },
        {
          id: "consumption-food-water-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "water-management-singapore",
          marks: 6,
          question: "'Engineering new water supplies (such as NEWater and desalination) is more important than reducing household demand for achieving water security in Singapore.' To what extent do you agree? Use PEEL paragraphs.",
          modelAnswer:
            "I partially agree, because supply-side engineering is essential for Singapore's survival, yet demand-side management is equally vital to keep water affordable and sustainable. On one hand, weather-independent taps like NEWater (using microfiltration, reverse osmosis and UV) and desalination overcome Singapore's tiny land area and prepare for the 2061 expiry of the Johor water treaty; without them, even strict conservation could not meet 440 MGD of demand for 6 million residents and wafer-fab industries during an El Niño drought. On the other hand, relying solely on engineered supply has heavy trade-offs: desalination is energy-intensive, raises carbon emissions and creates salty brine waste. Demand-side policies — including the Water Conservation Tax, WELS tick-rated appliances, smart meters and PUB's 130 L/person/day 2030 target — already cut domestic consumption from 165 L to 141 L per day, directly lowering electricity bills and delaying costly new plants. Overall, engineered supply provides the crucial safety net, but only combining supply diversification with demand reduction achieves true long-term sustainability.",
          markScheme: [
            {
              point: "Clear judgement / thesis taking a nuanced stance ('to some extent' / 'partially agree')",
              keywords: ["partially", "to some extent", "both", "equally", "overall", "however"],
            },
            {
              point: "Argues FOR supply-side: NEWater/desalination overcome tiny land area, droughts or 2061 Johor treaty expiry",
              keywords: ["2061", "johor", "drought", "weather-independent", "440", "tiny land", "microfiltration"],
            },
            {
              point: "Explains trade-off/limitation of supply-side: high energy cost, carbon emissions or marine brine",
              keywords: ["energy", "brine", "carbon", "electricity", "cost", "expensive"],
            },
            {
              point: "Argues FOR demand-side with specific Singapore policies (pricing/tax, WELS, smart meters)",
              keywords: ["wels", "tax", "pricing", "tariff", "smart meter", "campaign"],
            },
            {
              point: "Uses specific quantitative demand evidence (130 L/day target or drop from 165 L to 141 L)",
              keywords: ["130", "141", "165", "litre", "liter"],
            },
            {
              point: "Concluding evaluation weighing both sides into a reasoned final judgement",
              keywords: ["combin", "together", "long-term", "sustainab", "safety net", "balance"],
            },
          ],
          hints: [
            "Open with a clear 'To some extent' judgement rather than a one-sided answer.",
            "Paragraph 1 (For supply): mention drought resilience, tiny land area and the 2061 Johor treaty.",
            "Paragraph 2 (For demand): cite desalination's energy/brine drawbacks plus WELS, pricing and the 130 L/day target.",
            "Conclude by weighing why Singapore needs BOTH working together.",
          ],
          commonError: "Writing only one side ('I completely agree') — 'To what extent' questions require balanced arguments for BOTH sides plus a weighed conclusion.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "consumption-food-water-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "consumption-circular-economy",
      question: "A country of 8 million people reduces its per-capita ecological footprint from 5.5 gha to 4.4 gha through circular policies. By what percentage did its total national ecological footprint decrease?",
      answer: { type: "number", value: 20, display: "20%" },
      traps: [
        { spec: { type: "number", value: 25 }, feedback: "Divide the drop (1.1) by the ORIGINAL footprint (5.5), not the new footprint (4.4)." },
      ],
      solution: [
        "Since population (8 million) stays constant, the percentage change in total footprint equals the percentage change per capita.",
        "Drop = 5.5 − 4.4 = 1.1 gha.",
        "Percentage decrease = {{1.1 / 5.5 * 100}} = 20%.",
      ],
      hints: [
        "Check whether population changed — if not, you can compute percentage change straight from the per-capita values!",
        "Find (5.5 − 4.4) ÷ 5.5 × 100.",
      ],
      strategy: "Cancel constant factors before calculating.",
    },
    {
      id: "consumption-food-water-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "global-food-security",
      question: "A 1,000 kg batch of winter greenhouse tomatoes emits 5.4 kg CO₂e/kg during heating/farming and 0.1 kg CO₂e/kg in local trucking. An identical 1,000 kg batch of sunny Spanish field tomatoes emits 0.8 kg CO₂e/kg during farming and 0.4 kg CO₂e/kg in 1,600 km overland transport. How many kg of CO₂e are saved across the 1,000 kg batch by importing the Spanish tomatoes?",
      answer: { type: "number", value: 4300, display: "4300 kg" },
      traps: [
        { spec: { type: "number", value: 4.3 }, feedback: "4.3 kg CO₂e is the saving per 1 kg — multiply by the 1,000 kg batch!" },
        { spec: { type: "number", value: 4600 }, feedback: "Remember to include transport emissions for BOTH batches (5.4 + 0.1 = 5.5 vs 0.8 + 0.4 = 1.2)." },
      ],
      solution: [
        "Local heated greenhouse total per kg = 5.4 + 0.1 = 5.5 kg CO₂e/kg.",
        "Spanish field-grown total per kg = 0.8 + 0.4 = 1.2 kg CO₂e/kg.",
        "Saving per kg = 5.5 − 1.2 = 4.3 kg CO₂e/kg.",
        "Across 1,000 kg: 4.3 × 1,000 = 4,300 kg CO₂e saved.",
      ],
      hints: [
        "Add farming + transport for the local greenhouse tomatoes first.",
        "Add farming + transport for the Spanish tomatoes second.",
        "Find the difference per kg, then multiply by 1,000 kg.",
      ],
      strategy: "Sum full life-cycle stages before comparing.",
    },
    {
      id: "consumption-food-water-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "global-water-scarcity",
      question: "A water-scarce desert nation uses scarce fossil groundwater to grow export strawberries for European supermarkets while importing cheap wheat. How would a geographer critique this trade pattern?",
      options: [
        "Exporting thirsty strawberries exports scarce virtual water and speeds aquifer depletion",
        "Importing wheat forces the desert nation to build unnecessary coastal desalination plants",
        "Growing export fruit permanently recharges underground fossil aquifers through irrigation",
        "European supermarkets benefit from zero food miles because desert berries grow nearby",
      ],
      answerIndex: 0,
      explanation:
        "Fossil aquifers do not recharge on human timescales. Growing water-intensive luxury exports in a desert exports huge volumes of precious virtual water while undermining long-term domestic water security.",
      hints: [
        "Ask which direction virtual water flows when a dry country exports juicy irrigated fruit.",
        "Remember that fossil groundwater is essentially a non-renewable resource.",
      ],
    },
    {
      id: "consumption-food-water-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "water-management-singapore",
      question: "Singapore's water demand is projected to double from 440 MGD today to roughly 880 MGD by 2060. If NEWater supplies 55% and Desalination supplies 30% of that 880 MGD demand, how many MGD must come from the remaining tap(s) (Local Catchment)?",
      answer: { type: "number", value: 132, display: "132" },
      traps: [
        { spec: { type: "number", value: 748 }, feedback: "748 MGD is the combined NEWater + Desalination share (85%) — find the remaining 15%!" },
        { spec: { type: "number", value: 15 }, feedback: "15% is the remaining percentage share — multiply 15% by 880 MGD." },
      ],
      solution: [
        "NEWater + Desalination share = 55% + 30% = 85%.",
        "Remaining share = 100% − 85% = 15%.",
        "15% of 880 MGD = 0.15 × 880 = 132 MGD.",
      ],
      hints: [
        "Find the remaining percentage after subtracting 55% and 30% from 100%.",
        "Calculate 15% of 880 (tip: 10% is 88, 5% is 44, so 88 + 44 = ?).",
      ],
      strategy: "Use the complement percentage (100% − known shares).",
    },
    {
      id: "consumption-food-water-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "global-food-security",
      question: "A Singapore vertical farm uses 90% less water and 95% less land than a soil farm, yet its carbon footprint per kg of lettuce is currently HIGHER than a field farm in Malaysia unless it switches energy source. Why?",
      options: [
        "Hydroponic lettuce releases large volumes of ruminant methane into the indoor air",
        "Running artificial LED lights and air-conditioning on natural-gas grid electricity emits CO₂",
        "Malaysia transports fresh lettuce across the Causeway using high-emission cargo aeroplanes",
        "Indoor vertical farms burn diesel oil directly inside nutrient water tanks",
      ],
      answerIndex: 1,
      explanation:
        "Singapore generates ~95% of its electricity from natural gas. Replacing free tropical sunlight with grid-powered LEDs and HVAC cooling raises energy emissions per kg of crop — meaning pairing agri-tech with solar/clean electricity is essential.",
      hints: [
        "Think about the energy input that replaces free sunlight in an indoor vertical farm.",
        "Where does most of Singapore's grid electricity currently come from?",
      ],
    },
    {
      id: "consumption-food-water-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "global-water-scarcity",
      question: "A family of 4 switches one weekly dinner from beef (0.8 kg total, 15,400 L/kg) to lentils (0.8 kg total, 4,000 L/kg) for all 52 weeks of a year. How many litres of virtual water do they save in one year?",
      answer: { type: "number", value: 474240, display: "474240 L" },
      traps: [
        { spec: { type: "number", value: 9120 }, feedback: "9,120 L is the saving for ONE week — multiply by 52 weeks in a year!" },
        { spec: { type: "number", value: 592800 }, feedback: "You used 1 kg per week instead of 0.8 kg — multiply by 0.8." },
      ],
      solution: [
        "Water saved per kg = 15,400 − 4,000 = 11,400 L/kg.",
        "Weekly saving for 0.8 kg = 0.8 × 11,400 = 9,120 L/week.",
        "Annual saving over 52 weeks = 9,120 × 52 = 474,240 L.",
      ],
      hints: [
        "Find the virtual water saved per kg first: 15,400 − 4,000.",
        "Multiply by 0.8 kg to get the weekly saving.",
        "Multiply the weekly saving by 52 weeks.",
      ],
      strategy: "Scale step by step: per kg → per week → per year.",
    },
    {
      id: "consumption-food-water-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "global-water-scarcity",
      marks: 4,
      question: "Explain how a major dam built by an upstream country on a transboundary river (such as Ethiopia's GERD on the Blue Nile) creates both development opportunities and downstream water-security risks.",
      modelAnswer:
        "Upstream, Ethiopia gains renewable hydroelectric electricity to power industry, lift millions out of energy poverty and even export surplus power, while reservoir regulation can smooth destructive seasonal floods. However, downstream countries like Egypt (which depends on the Nile for over 90% of its freshwater) fear reduced river flow during the years the dam fills or during multi-year droughts. Lower flows can shrink irrigated harvests in the Nile Delta, worsen soil salinisation as Mediterranean seawater pushes inland, and escalate diplomatic tensions unless binding flow-sharing treaties are signed.",
      markScheme: [
        {
          point: "Upstream opportunity: generates renewable hydroelectricity / powers development & economic growth",
          keywords: ["hydroelectric", "electricity", "power", "renewable", "economic", "energy poverty", "flood"],
        },
        {
          point: "Downstream dependency & flow risk: Egypt/Sudan rely heavily (~90%) on Nile flow, especially during filling or drought",
          keywords: ["90%", "reduced flow", "lower flow", "drought", "filling", "shrink"],
        },
        {
          point: "Specific downstream impact: crop failure / irrigation loss / delta salinisation",
          keywords: ["crop", "irrigat", "harvest", "salinis", "delta", "farming", "food"],
        },
        {
          point: "Governance/solution point: diplomatic tension unless binding data-sharing / basin treaties exist",
          keywords: ["treaty", "treaties", "tension", "conflict", "cooperat", "negotiat", "agreement"],
        },
      ],
      hints: [
        "Balance upstream benefits (Ethiopia's clean electricity) with downstream vulnerabilities (Egypt's 90% Nile dependence).",
        "Include physical farming consequences downstream (irrigation loss, delta salinisation).",
        "Mention why basin treaties and drought-release agreements are critical.",
      ],
    },
    {
      id: "consumption-food-water-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "consumption-circular-economy",
      marks: 6,
      question: "'Individual lifestyle changes (such as eating less beef and carrying reusable bottles) are more effective than government laws and business redesign in solving global resource overshoot.' To what extent do you agree?",
      modelAnswer:
        "I only agree to a limited extent: individual choices send important signals and shrink personal footprints, but systemic government laws and circular business redesign are indispensable for solving global overshoot at scale. On one hand, individuals in HICs have huge per-capita footprints (4–8 gha); shifting away from high-methane beef (~60 kg CO₂e/kg), cutting household food waste and choosing durable products lowers direct demand and pressures brands to adapt. On the other hand, consumers cannot single-handedly redesign power grids, stop planned obsolescence or regulate exported e-waste. Governments and corporations set the system rules — for example, Singapore's mandatory WELS efficiency labels, water pricing, Beverage Container Return deposit schemes and extended producer responsibility (EPR) laws force every manufacturer and household to operate circularly rather than relying on voluntary goodwill. Therefore, while individual habits build public support and immediate savings, structural laws and circular business models deliver far greater, fairer and faster reductions in ecological overshoot.",
      markScheme: [
        {
          point: "Clear evaluative judgement taking a measured stance ('to a limited extent' / 'partially')",
          keywords: ["limited extent", "partially", "to some extent", "indispensable", "greater", "however"],
        },
        {
          point: "Argues FOR individual action with concrete footprint examples (diet/beef, cutting waste, reusing)",
          keywords: ["beef", "60 kg", "food waste", "per-capita", "personal", "demand", "habit"],
        },
        {
          point: "Identifies limitation of individual-only action (cannot redesign grids, supply chains or planned obsolescence)",
          keywords: ["cannot", "obsolescence", "grid", "voluntary", "systemic", "scale", "alone"],
        },
        {
          point: "Argues FOR government/business action citing concrete policies (EPR, deposit return, WELS, pricing, repair laws)",
          keywords: ["epr", "extended producer", "deposit", "wels", "right to repair", "law", "regulat", "pricing"],
        },
        {
          point: "Explains why systemic redesign/policy works faster or more fairly across an entire population",
          keywords: ["manufacturer", "every", "fairer", "faster", "mandatory", "circular"],
        },
        {
          point: "Weighed conclusion synthesising individual + systemic roles",
          keywords: ["therefore", "overall", "combine", "support", "structural", "conclude"],
        },
      ],
      hints: [
        "State a balanced thesis right away — neither 'only individuals' nor 'individuals do nothing'.",
        "Support individual impact using HIC per-capita footprint & beef/waste numbers.",
        "Support systemic impact using mandatory policies (WELS, deposit-return, EPR, right-to-repair).",
        "Weigh which lever shifts the entire system fastest in your conclusion.",
      ],
    },
  ],
};
