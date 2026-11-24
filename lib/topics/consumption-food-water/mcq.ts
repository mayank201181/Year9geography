import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "consumption-food-water-m1",
    title: "MCQ Paper 1 — Footprints, Food & Water Essentials",
    questions: [
      {
        id: "consumption-food-water-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "consumption-circular-economy",
        question: "What does a country's ecological footprint measure?",
        options: [
          "The productive land and sea area needed to supply its resources and absorb its CO₂ waste",
          "The total land area inside a country's political borders available for urban development",
          "The percentage of a country's electricity supplied by solar, wind and hydroelectric dams",
          "The average distance travelled by exported manufactured goods to reach overseas markets",
        ],
        answerIndex: 0,
        explanation:
          "Ecological footprint (measured in global hectares, gha) quantifies the biologically productive land and ocean area required to generate resources consumed and absorb CO₂ emissions. It is not a country's physical territory size or renewable-energy share.",
        hints: [
          "Think about the unit used: global hectares (gha).",
          "It combines both resource consumption and waste absorption into an area measure.",
        ],
      },
      {
        id: "consumption-food-water-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "consumption-circular-economy",
        question: "Which sequence best summarises a traditional linear economy?",
        options: [
          "Refuse → repair → refurbish → remanufacture",
          "Extract raw materials → make → use → dispose",
          "Harvest crops → compost → regenerate → replant",
          "Collect rainwater → filter → reclaim → recirculate",
        ],
        answerIndex: 1,
        explanation:
          "A linear economy follows a one-way 'take–make–use–dispose' path ending in landfill or incineration. Refusing, repairing and remanufacturing are hallmarks of a circular economy instead.",
        hints: [
          "Look at the word 'linear' — a straight line from start to finish rather than a loop.",
          "Which sequence ends with throwing materials away as waste?",
        ],
      },
      {
        id: "consumption-food-water-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "consumption-circular-economy",
        question: "What does Earth Overshoot Day mark each year?",
        options: [
          "The day global population growth first exceeds the annual global death rate",
          "The day global sea-surface temperatures peak during the northern summer",
          "The date when annual human resource demand passes Earth's yearly regeneration",
          "The date when global fossil-fuel reserves are forecast to run completely dry",
        ],
        answerIndex: 2,
        explanation:
          "Earth Overshoot Day is the calendar date when humanity's consumption of ecological resources in a given year exceeds Earth's biocapacity to regenerate those resources over the whole 12 months. After that date, humanity operates in ecological deficit.",
        hints: [
          "Compare annual human demand with Earth's annual biocapacity.",
          "Think of overspending a yearly budget before December arrives.",
        ],
      },
      {
        id: "consumption-food-water-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "global-food-security",
        question: "According to the UN FAO, which condition must be met for a population to have food security?",
        options: [
          "Every household grows all of its staple grains on its own farmland",
          "The national government eliminates all international food imports",
          "Supermarkets stock tropical fruit and imported meats year-round",
          "All people always have access to sufficient, safe and nutritious food",
        ],
        answerIndex: 3,
        explanation:
          "Food security means physical, social and economic access at all times to sufficient, safe and nutritious food for an active, healthy life. Countries like Singapore achieve high food security mainly through reliable imports rather than growing 100% of their own food.",
        hints: [
          "Recall the four FAO pillars: Availability, Access, Utilisation and Stability.",
          "Does a country have to grow 100% of its food locally to be food-secure?",
        ],
      },
      {
        id: "consumption-food-water-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "global-food-security",
        question: "What is the exact goal of Singapore's '30 by 30' food resilience plan?",
        options: [
          "To build local capability to produce 30% of Singapore's nutritional needs by 2030",
          "To cut Singapore's supermarket food waste by 30% before the end of 2030",
          "To limit Singapore's food imports to exactly 30 partner countries by 2030",
          "To convert 30% of Singapore's total land area into conventional crop farms by 2030",
        ],
        answerIndex: 0,
        explanation:
          "Singapore's '30 by 30' strategy targets producing 30% of its nutritional needs locally by 2030 using less than 1% of land through high-tech vertical farms, closed-containment aquaculture and alternative proteins — not converting 30% of the island to farms.",
        hints: [
          "Singapore currently imports over 90% of its food.",
          "Notice the two numbers in '30 by 30': a percentage of local nutritional production and a target year.",
        ],
      },
      {
        id: "consumption-food-water-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-food-security",
        question: "Why can relying on 'food miles' alone give a misleading picture of a food item's climate impact?",
        options: [
          "Container ships emit fifty times more CO₂ per tonne-km than cargo aeroplanes",
          "Farming methods, heated greenhouses and livestock methane often dwarf transport emissions",
          "Food miles count only emissions from supermarket refrigeration and home cooking",
          "Imported foods are legally exempt from international greenhouse-gas accounting rules",
        ],
        answerIndex: 1,
        explanation:
          "Transport accounts for only ~6%–10% of global food emissions, whereas farming practices (such as cattle methane, land clearance or gas-heated winter glasshouses) usually dominate. Container ships are actually ~50× cleaner per tonne-km than air freight.",
        hints: [
          "Compare local UK winter glasshouse tomatoes with field-grown Spanish tomatoes, or local beef with shipped lentils.",
          "Which stage of a food's life cycle normally emits the biggest share of greenhouse gases?",
        ],
      },
      {
        id: "consumption-food-water-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "global-water-scarcity",
        question: "Roughly what proportion of all water on Earth is freshwater, and how much of that freshwater is readily accessible in surface rivers and lakes?",
        options: [
          "About 25% is freshwater, and roughly half is readily accessible",
          "About 10% is freshwater, and roughly 5% is readily accessible",
          "About 2.5% is freshwater, and less than 1% is readily accessible",
          "About 0.5% is freshwater, and nearly 90% is readily accessible",
        ],
        answerIndex: 2,
        explanation:
          "Around 97.5% of Earth's water is salty ocean water and only ~2.5% is freshwater. Because ~69% of freshwater is frozen in glaciers/ice caps and ~30% is deep groundwater, less than 1% (~0.3% in rivers and lakes) is easily accessible.",
        hints: [
          "Nearly all water on Earth is saline ocean water (~97.5%).",
          "Most of Earth's tiny freshwater supply is locked away in ice caps, glaciers and deep aquifers.",
        ],
      },
      {
        id: "consumption-food-water-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-water-scarcity",
        question: "Which statement accurately describes economic water scarcity?",
        options: [
          "Arid desert climates receive too little rainfall to recharge local rivers and lakes",
          "High summer evaporation rates dry up surface reservoirs faster than rains refill them",
          "Wealthy coastal cities pay high electricity prices to run seawater desalination plants",
          "Sufficient natural water exists, but poverty or poor infrastructure blocks safe access",
        ],
        answerIndex: 3,
        explanation:
          "Economic water scarcity occurs where rainfall and rivers are physically available (e.g., DRC), yet financial, institutional or infrastructural barriers stop communities from capturing, treating and piping clean water. Desert dryness is physical scarcity.",
        hints: [
          "Ask the quick test: 'Is rain missing, or are pipes and funding missing?'",
          "Economic scarcity is driven by human/financial barriers rather than arid climate.",
        ],
      },
      {
        id: "consumption-food-water-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "global-water-scarcity",
        question: "What is 'virtual water' (embedded water)?",
        options: [
          "The hidden volume of freshwater used to grow, process and manufacture a product",
          "Digital water-meter data transmitted wirelessly from smart taps to utility agencies",
          "Reclaimed wastewater blended into urban reservoirs during prolonged tropical droughts",
          "Freshwater vapour evaporated from oceans before condensing into monsoon rainclouds",
        ],
        answerIndex: 0,
        explanation:
          "Virtual water is the indirect freshwater consumed throughout a product's entire supply chain — for example, ~15,400 L for 1 kg of beef or ~2,700 L for one cotton T-shirt.",
        hints: [
          "Think about all the irrigation and processing water hidden inside a burger or a T-shirt.",
          "It is water you 'consume' indirectly when buying food or goods rather than from your kitchen tap.",
        ],
      },
      {
        id: "consumption-food-water-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "water-management-singapore",
        question: "Which list correctly names Singapore's Four National Taps?",
        options: [
          "Groundwater Wells, Rainwater Tanks, River Diversion, Iceberg Towing",
          "Local Catchment, Imported Water, NEWater, Desalinated Water",
          "Marina Barrage, Cloud Seeding, Deep Aquifers, Bottled Imports",
          "Glacial Meltwater, Monsoon Dams, Geothermal Steam, Ocean Currents",
        ],
        answerIndex: 1,
        explanation:
          "PUB secures Singapore's supply through four diversified taps: Local Catchment (17 reservoirs), Imported Water (from Johor), NEWater (ultra-clean reclaimed water) and Desalinated Water (from seawater).",
        hints: [
          "Use the mnemonic L-I-N-D.",
          "Two taps depend on rainfall/neighbours, and two are weather-independent engineered sources.",
        ],
      },
      {
        id: "consumption-food-water-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "water-management-singapore",
        question: "In what exact order do the three purification stages produce NEWater in Singapore?",
        options: [
          "UV disinfection → Reverse Osmosis → Microfiltration",
          "Reverse Osmosis → UV disinfection → Microfiltration",
          "Microfiltration → Reverse Osmosis → UV disinfection",
          "Boiling distillation → Sand filtration → Chlorination",
        ],
        answerIndex: 2,
        explanation:
          "NEWater follows the M-R-U sequence: Microfiltration first strips suspended solids and bacteria, Reverse Osmosis then removes viruses, heavy metals and dissolved salts, and UV disinfection provides a final sterilisation barrier.",
        hints: [
          "Recall the mnemonic M-R-U: remove larger particles first, tiny dissolved molecules second, and sterilise last.",
          "Putting Reverse Osmosis before Microfiltration would clog the delicate RO membranes!",
        ],
      },
      {
        id: "consumption-food-water-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "water-management-singapore",
        question: "Why is Singapore classified as water-stressed despite receiving around 2,400 mm of rainfall each year?",
        options: [
          "Most of Singapore's tropical rainfall evaporates instantly before reaching the ground",
          "All of Singapore's annual rain falls during a single two-week winter monsoon storm",
          "Singapore bans the construction of rainwater drains and reservoirs in urban zones",
          "Its tiny land area, dense population and lack of natural aquifers limit water storage",
        ],
        answerIndex: 3,
        explanation:
          "Despite abundant tropical rainfall, Singapore's small island footprint (~735 km²), high population density (~6 million) and absence of large natural lakes or aquifers mean natural water supply per capita is very low without engineered reservoirs and recycling.",
        hints: [
          "Water stress compares renewable water supply against population size and storage capacity.",
          "Think about what happens to heavy rain on a tiny, densely built island with no huge rivers or aquifers.",
        ],
      },
      {
        id: "consumption-food-water-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "water-management-singapore",
        question: "Which three functions make Singapore's Marina Barrage a 'three-in-one' engineering project?",
        options: [
          "Freshwater reservoir supply, tidal flood control, and urban lifestyle recreation",
          "Seawater desalination, container shipping port, and offshore wind power generation",
          "Hydroelectric power station, cross-border pipe terminus, and commercial fish farm",
          "Sewage incineration plant, underground aquifer recharge, and coastal mangrove reserve",
        ],
        answerIndex: 0,
        explanation:
          "Marina Barrage dams Marina Channel to create a downtown freshwater reservoir (water supply), uses nine crest gates and giant pumps to prevent flooding in low-lying city districts (flood control), and offers a rooftop green park and calm watersports basin (lifestyle).",
        hints: [
          "Think about Marina Barrage's famous rooftop lawn, its dam gates holding back high tides, and its freshwater basin.",
          "It is part of Tap 1 (Local Catchment), not a desalination plant or shipping port.",
        ],
      },
      {
        id: "consumption-food-water-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "consumption-circular-economy",
        question: "Why does exporting HIC electronic waste (e-waste) to informal scrapyards in LICs raise serious geographical concern?",
        options: [
          "Informal scrapyards charge wealthy exporting countries inflated recycling fees",
          "Unregulated burning and dismantling release toxic lead and mercury into communities",
          "Exported electronics cannot physically be opened once shipped across tropical oceans",
          "Shipping e-waste overseas permanently eliminates global demand for copper and gold",
        ],
        answerIndex: 1,
        explanation:
          "At informal e-waste hubs such as Agbogbloshie in Ghana, workers often burn plastic coatings to recover copper without protective gear, releasing toxic lead, dioxins and heavy metals that harm workers' health and contaminate local soil and water.",
        hints: [
          "Think about health and environmental justice in informal dismantling hubs like Agbogbloshie.",
          "What happens when plastic-coated cables and circuit boards are burned in open pits?",
        ],
      },
      {
        id: "consumption-food-water-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-food-security",
        question: "Which transport mode creates the sharpest spike in carbon emissions per tonne-kilometre for imported food?",
        options: [
          "Long-distance ocean container shipping across major trade lanes",
          "Electrified freight rail carrying bulk grain across continents",
          "Air freight flying perishable fruit and vegetables across oceans",
          "Coastal river barges transporting bagged rice between ports",
        ],
        answerIndex: 2,
        explanation:
          "Air freight emits roughly 50 times more CO₂ per tonne-kilometre than container ships because burning aviation fuel to lift cargo into the sky is extremely energy-intensive. That is why air-freighted berries or asparagus are the big food-miles exception.",
        hints: [
          "Think about the one major exception where transport distance DOES dominate a vegetable's carbon footprint.",
          "Compare lifting perishable produce into the air versus floating thousands of containers on a single ship.",
        ],
      },
    ],
  },
  {
    id: "consumption-food-water-m2",
    title: "MCQ Paper 2 — Data, Footprints & Case Studies",
    questions: [
      {
        id: "consumption-food-water-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "consumption-circular-economy",
        question: "Global biocapacity is roughly 1.6 gha per person. If Country Z has an ecological footprint of 4.0 gha per person, how many planet Earths would humanity need if everyone lived like Country Z?",
        options: [
          "1.6 Earths",
          "2.4 Earths",
          "5.6 Earths",
          "2.5 Earths",
        ],
        answerIndex: 3,
        explanation:
          "Divide Country Z's per-capita footprint by global biocapacity: {{4.0 / 1.6}} = 2.5 Earths. Subtracting (4.0 − 1.6 = 2.4) gives the ecological deficit in gha, not the number of Earths!",
        hints: [
          "Earths needed = Per-capita ecological footprint ÷ Global biocapacity.",
          "Compute 4.0 ÷ 1.6 carefully — do not subtract!",
        ],
      },
      {
        id: "consumption-food-water-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "consumption-circular-economy",
        question: "Country A has a population of 6 million and a footprint of 6.0 gha/person. Country B has 100 million people and a footprint of 1.0 gha/person. Which interpretation is most accurate?",
        options: [
          "Country A has higher per-capita impact, while Country B has a larger total footprint",
          "Country A has both a larger total footprint and a higher per-capita footprint",
          "Country B residents consume six times more resources per person than Country A",
          "Both countries consume within Earth's sustainable 1.6 gha/person biocapacity limit",
        ],
        answerIndex: 0,
        explanation:
          "Country A's total footprint is 6M × 6.0 = 36 million gha (very high per capita at 6.0 gha), whereas Country B's total footprint is 100M × 1.0 = 100 million gha (larger total, yet far lower per capita and below 1.6 gha/person).",
        hints: [
          "Calculate total footprint = Population × Per-capita footprint for both countries.",
          "Compare per-person lifestyle intensity against national total.",
        ],
      },
      {
        id: "consumption-food-water-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-food-security",
        question: "Using typical life-cycle values (beef ≈ 60 kg CO₂e/kg; tofu ≈ 3 kg CO₂e/kg), how much CO₂e is saved by swapping 5 kg of beef for 5 kg of tofu?",
        options: [
          "57 kg CO₂e saved",
          "285 kg CO₂e saved",
          "300 kg CO₂e saved",
          "315 kg CO₂e saved",
        ],
        answerIndex: 1,
        explanation:
          "5 kg of beef emits 5 × 60 = 300 kg CO₂e; 5 kg of tofu emits 5 × 3 = 15 kg CO₂e. The net saving is 300 − 15 = 285 kg CO₂e (or 5 × 57 = 285 kg CO₂e). Forgetting to multiply by 5 gives 57 kg, and forgetting to subtract tofu gives 300 kg.",
        hints: [
          "First find the CO₂e saved per 1 kg: 60 − 3.",
          "Now multiply that per-kg saving by 5 kg.",
        ],
      },
      {
        id: "consumption-food-water-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-food-security",
        question: "Why does beef have roughly ten times the carbon footprint of chicken per kilogram?",
        options: [
          "Beef is almost always flown between continents by refrigerated cargo aeroplanes",
          "Cattle farms use far more artificial glasshouse heating than chicken sheds",
          "Cattle release potent methane gas and require huge pasture and feed-crop land",
          "Beef carcasses require far heavier aluminium packaging than poultry meat",
        ],
        answerIndex: 2,
        explanation:
          "Ruminant livestock like cattle release large quantities of methane (CH₄) during digestion — a far stronger short-term greenhouse gas than CO₂ — and require extensive grazing and feed land, frequently driving deforestation.",
        hints: [
          "Think about cattle biology (ruminant digestion) and land-use change.",
          "Which potent greenhouse gas do cows emit that chickens do not produce in large amounts?",
        ],
      },
      {
        id: "consumption-food-water-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-food-security",
        question: "Approximately what share of its food does Singapore currently import, and how does Singapore reduce the risk of a sudden disruption in one supplier country?",
        options: [
          "Imports ~30% of its food and relies exclusively on farms in neighbouring Johor",
          "Imports ~50% of its food and stores a ten-year stockpile of fresh leafy greens",
          "Imports ~70% of its food and bans supermarkets from selling imported chicken",
          "Imports >90% of its food and diversifies supply across more than 180 countries",
        ],
        answerIndex: 3,
        explanation:
          "With under 1% of its land available for agriculture, Singapore imports over 90% of its food. To build resilience, the Singapore Food Agency diversifies imports across >180 countries alongside its local '30 by 30' agri-tech push.",
        hints: [
          "Remember Singapore's tiny land area leaves under 1% for farming.",
          "Think about the difference between putting all your eggs in one basket versus diversifying global suppliers.",
        ],
      },
      {
        id: "consumption-food-water-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-water-scarcity",
        question: "Using typical virtual water figures (1 kg beef ≈ 15,400 L; 1 kg rice ≈ 2,500 L), what is the total virtual water in 0.5 kg of beef plus 2 kg of rice?",
        options: [
          "12,700 litres",
          "17,900 litres",
          "10,200 litres",
          "20,400 litres",
        ],
        answerIndex: 0,
        explanation:
          "Half a kilogram of beef uses 0.5 × 15,400 = 7,700 L. Two kilograms of rice use 2 × 2,500 = 5,000 L. Together: 7,700 + 5,000 = 12,700 litres.",
        hints: [
          "Calculate each item separately: 0.5 × 15,400 for beef and 2 × 2,500 for rice.",
          "Add 7,700 L and 5,000 L together.",
        ],
      },
      {
        id: "consumption-food-water-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-water-scarcity",
        question: "Hydrologists classify a country with 820 m³ of renewable freshwater per person per year as experiencing which level of water insecurity?",
        options: [
          "Water surplus (above 1,700 m³/person/year)",
          "Water scarcity (below 1,000 m³/person/year)",
          "Absolute scarcity (below 500 m³/person/year)",
          "Water stress only (between 1,000 and 1,700 m³/person/year)",
        ],
        answerIndex: 1,
        explanation:
          "Water stress is <1,700 m³/person/year, water scarcity is <1,000 m³/person/year, and absolute scarcity is <500 m³/person/year. At 820 m³, the country sits below 1,000 m³ (water scarcity) but above 500 m³.",
        hints: [
          "Check the three Falkenmark thresholds: 1,700 (stress), 1,000 (scarcity), 500 (absolute scarcity).",
          "Where does 820 m³ fall between 500 and 1,000?",
        ],
      },
      {
        id: "consumption-food-water-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-water-scarcity",
        question: "Which pairing correctly matches a real-world region to its dominant type of water scarcity?",
        options: [
          "Middle East & North Africa (MENA) — Economic water scarcity caused by excess rain",
          "Democratic Republic of the Congo (DRC) — Physical water scarcity caused by desert climate",
          "Democratic Republic of the Congo (DRC) — Economic water scarcity despite high rainfall",
          "Qatar — Economic water scarcity caused by inability to fund coastal water plants",
        ],
        answerIndex: 2,
        explanation:
          "The DRC lies on the Equator with abundant rainfall and the Congo River, yet lacks water infrastructure and capital (economic scarcity). By contrast, MENA and Qatar have arid climates (physical scarcity), though wealthy Qatar offsets this with desalination.",
        hints: [
          "Think about rainfall versus wealth/infrastructure in DRC versus MENA/Qatar.",
          "Which country has over 1,500 mm of rainfall per year yet poor tap access?",
        ],
      },
      {
        id: "consumption-food-water-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-water-scarcity",
        question: "Why has Ethiopia's Grand Ethiopian Renaissance Dam (GERD) on the Blue Nile caused tension with Egypt?",
        options: [
          "Egypt wants to import untreated seawater from Ethiopia via desert canals",
          "The dam prevents Egyptian cargo ships from sailing upstream into Lake Victoria",
          "The dam forces Ethiopian farmers to abandon hydroelectric power for coal plants",
          "Egypt sits downstream and fears reduced Nile flow for its farms and drinking supply",
        ],
        answerIndex: 3,
        explanation:
          "Egypt relies on the River Nile for over 90% of its renewable freshwater. Because Ethiopia sits upstream on the Blue Nile, filling and operating the giant GERD reservoir raises Egyptian fears of reduced downstream flow, especially during droughts.",
        hints: [
          "Identify which country is upstream (controlling the dam) and which is downstream (relying on the river).",
          "Remember that Egypt depends on the Nile for over 90% of its freshwater.",
        ],
      },
      {
        id: "consumption-food-water-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "water-management-singapore",
        question: "Which two of Singapore's Four National Taps remain reliable even during a severe regional drought?",
        options: [
          "NEWater and Desalinated Water",
          "Local Catchment and Imported Water",
          "Local Catchment and NEWater",
          "Imported Water and Desalinated Water",
        ],
        answerIndex: 0,
        explanation:
          "Both Local Catchment (reservoirs) and Imported Water (Johor River) depend on rainfall and shrink during prolonged El Niño dry spells. NEWater (reclaimed urban used water) and Desalinated Water (seawater) are weather-independent.",
        hints: [
          "Ask which two sources rely on rain falling in Singapore or Johor.",
          "The remaining two engineered taps work regardless of rainfall.",
        ],
      },
      {
        id: "consumption-food-water-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "water-management-singapore",
        question: "Under the 1962 Water Agreement, how much water may Singapore draw from the Johor River, and when does the treaty expire?",
        options: [
          "Up to 100 MGD, expiring in 2030",
          "Up to 250 MGD, expiring in 2061",
          "Up to 440 MGD, expiring in 2050",
          "Up to 500 MGD, expiring in 2099",
        ],
        answerIndex: 1,
        explanation:
          "The 1962 Water Agreement permits Singapore to draw up to 250 million gallons per day (MGD) from the Johor River until 2061. Expanding NEWater and desalination ensures Singapore can achieve full water self-sufficiency before 2061.",
        hints: [
          "The treaty lasts 99 years from 1962: 1962 + 99 = ?",
          "Singapore's total daily demand is ~440 MGD, and Johor imports cover up to 250 MGD of that.",
        ],
      },
      {
        id: "consumption-food-water-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "water-management-singapore",
        question: "A Singapore household of 3 people cuts water use from 145 L/person/day to PUB's 2030 target of 130 L/person/day. How many litres do they save in 1 week (7 days)?",
        options: [
          "45 litres",
          "105 litres",
          "315 litres",
          "420 litres",
        ],
        answerIndex: 2,
        explanation:
          "Daily saving per person = 145 − 130 = 15 L. For 3 people = 45 L/day. Over 7 days: 45 × 7 = 315 litres. (45 L is only one day's household saving; 105 L is one person's weekly saving.)",
        hints: [
          "Find the saving per person per day first: 145 − 130 = 15 L.",
          "Multiply by 3 people and then by 7 days.",
        ],
      },
      {
        id: "consumption-food-water-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "water-management-singapore",
        question: "Which action is an example of demand-side water management in Singapore?",
        options: [
          "Building a fifth desalination plant along the eastern coast",
          "Expanding the Deep Tunnel Sewerage System to feed NEWater plants",
          "Damming a coastal river mouth to construct a 17th freshwater reservoir",
          "Using tiered water pricing and WELS efficiency ticks on household taps",
        ],
        answerIndex: 3,
        explanation:
          "Demand-side management lowers how much water homes and businesses use — through water tariffs, the Water Conservation Tax, WELS efficiency labels and smart meters. Building reservoirs, desalination or NEWater plants are supply-side strategies.",
        hints: [
          "Supply-side = producing more water. Demand-side = helping people use less water.",
          "Which option encourages households to reduce daily water consumption?",
        ],
      },
      {
        id: "consumption-food-water-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "global-food-security",
        question: "Why do indoor vertical farms in Singapore struggle to outcompete imported vegetables on supermarket price despite achieving huge yields per square metre?",
        options: [
          "High electricity costs for LED lights and climate control raise operating expenses",
          "Vertical farms require vast open farmland across rural northern Singapore",
          "Indoor hydroponic plants consume ten times more freshwater than open-field crops",
          "Singapore Food Agency taxes locally grown vegetables more heavily than imports",
        ],
        answerIndex: 0,
        explanation:
          "Indoor vertical farms save land and up to 90% of water, but running LED grow-lights, cooling systems and automated sensors demands substantial electricity and upfront capital, making local produce pricier than sun-grown regional imports.",
        hints: [
          "Sunlight is free on an open Malaysian farm — what replaces sunlight inside a sealed indoor farm?",
          "Think about energy bills and upfront capital investment.",
        ],
      },
      {
        id: "consumption-food-water-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "consumption-circular-economy",
        question: "In a circular economy, why is repairing and reusing a smartphone generally preferred over shredding and recycling it right away?",
        options: [
          "Smartphones contain no metals or plastics that can ever be recycled chemically",
          "Keeping the working device intact preserves its embodied energy and rare materials",
          "Recycling facilities always dump 100% of smartphone batteries straight into oceans",
          "Repairing old devices increases total mining of lithium and cobalt worldwide",
        ],
        answerIndex: 1,
        explanation:
          "Manufacturing a smartphone consumes huge amounts of energy, water and mined rare-earth elements. Extending its life through repair or resale preserves that embodied value, whereas recycling requires fresh energy and still loses trace materials.",
        hints: [
          "Think about the 'inner loops' of the circular economy versus the outer recycling loop.",
          "How much energy and mining went into turning raw ore into microchips?",
        ],
      },
    ],
  },
  {
    id: "consumption-food-water-m3",
    title: "MCQ Paper 3 — Trade-Offs, Systems & Evaluation",
    questions: [
      {
        id: "consumption-food-water-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "water-management-singapore",
        question: "Why does PUB plan for NEWater (~55%) to provide a larger share of Singapore's 2060 water supply than Desalination (~30%)?",
        options: [
          "Seawater around Singapore is projected to dry up completely by 2060",
          "Desalinated seawater cannot legally be blended into public drinking pipes",
          "Reclaimed wastewater has far less salt than seawater, so NEWater uses less energy",
          "NEWater relies directly on monsoon rainfall and requires zero filtration membranes",
        ],
        answerIndex: 2,
        explanation:
          "Because treated used water contains far fewer dissolved salts than ocean water, forcing it through Reverse Osmosis membranes requires significantly less electrical energy than desalinating seawater, reducing costs, carbon emissions and brine discharge.",
        hints: [
          "Compare the salinity of treated wastewater versus ocean seawater.",
          "More dissolved salt means higher pressure and much higher electricity bills during Reverse Osmosis.",
        ],
      },
      {
        id: "consumption-food-water-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "water-management-singapore",
        question: "What is the main marine environmental risk of large-scale coastal desalination plants if waste is poorly managed?",
        options: [
          "Desalination removes too much fresh rainwater from inland tropical rainforests",
          "Seawater intake pipes cool nearby tropical seas by several degrees Celsius",
          "Reverse osmosis membranes release radioactive isotopes into shipping lanes",
          "Concentrated salty brine discharge lowers oxygen and harms seabed ecosystems",
        ],
        answerIndex: 3,
        explanation:
          "Extracting freshwater from seawater leaves behind dense, hypersaline brine (often containing treatment chemicals). If released without proper dilution/diffusers, brine sinks to the seabed, depleting dissolved oxygen and stressing marine habitats.",
        hints: [
          "If you take pure H₂O out of salty seawater, what is left behind in the leftover water?",
          "Dense salty waste sinks to the ocean floor unless carefully diffused.",
        ],
      },
      {
        id: "consumption-food-water-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "water-management-singapore",
        question: "What makes Singapore's Keppel Marina East Desalination Plant unusually flexible compared with conventional desalination plants?",
        options: [
          "It is dual-mode, treating either reservoir freshwater in wet weather or seawater in droughts",
          "It operates entirely by gravity without any pumps, membranes or electricity supply",
          "It floats offshore on container barges and sails between Johor and Sentosa Island",
          "It extracts moisture directly from humid tropical air rather than using liquid water",
        ],
        answerIndex: 0,
        explanation:
          "Keppel Marina East is Singapore's first large-scale dual-mode plant: when Marina Reservoir is full after heavy rain, it treats lower-energy freshwater; during dry spells, it switches seamlessly to desalinating seawater.",
        hints: [
          "Think about its location right beside both Marina Reservoir and the Singapore Strait.",
          "How can it save energy during rainy periods while guaranteeing supply during droughts?",
        ],
      },
      {
        id: "consumption-food-water-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "global-food-security",
        question: "A UK shopper wants the lowest-carbon dinner option in January. Comparing four meals of equal weight, which choice will almost certainly produce the LOWEST greenhouse-gas emissions?",
        options: [
          "Locally grazed beef steak from a farm 15 km away",
          "Dried red lentils shipped 8,000 km by ocean container ship",
          "Fresh asparagus flown 9,000 km by air freight from Peru",
          "Local British tomatoes grown in a gas-heated winter glasshouse",
        ],
        answerIndex: 1,
        explanation:
          "Dried lentils emit ~1 kg CO₂e/kg even after ocean container shipping (~0.2–0.3 kg for sea freight). Local beef (~60 kg CO₂e/kg), air-freighted asparagus (~10–12 kg CO₂e/kg) and heated winter glasshouse tomatoes (~5–10 kg CO₂e/kg) all emit far more.",
        hints: [
          "Remember: beef has massive methane emissions, air freight has a 50× transport penalty, and winter glasshouses burn gas for heat.",
          "Which food is plant-based AND travels by ultra-efficient sea freight?",
        ],
      },
      {
        id: "consumption-food-water-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-food-security",
        question: "Roughly one-third of all food produced globally is lost or wasted. Why does reducing food waste help BOTH food security and climate mitigation?",
        options: [
          "Wasted food is automatically converted into fossil fuels inside landfill sites",
          "Cutting food waste forces farmers to expand clearing of tropical rainforests",
          "Less waste frees up food supply while cutting landfill methane and farm emissions",
          "Reducing household food waste doubles the amount of air freight needed by shops",
        ],
        answerIndex: 2,
        explanation:
          "Cutting food loss and waste preserves calories already grown (boosting food availability and cutting costs) while eliminating wasted land/water/fertiliser emissions and stopping rotting food from releasing methane in landfills.",
        hints: [
          "Think about what happens to rotting organic food buried in oxygen-poor landfills.",
          "Every kilogram of food thrown away wasted all the land, water and fuel used to grow it.",
        ],
      },
      {
        id: "consumption-food-water-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "global-water-scarcity",
        question: "An arid country with severe physical water scarcity stops growing thirsty alfalfa and cotton locally and imports them from a wet, water-rich country instead. Geographers describe this strategy as:",
        options: [
          "Inducing economic water scarcity in domestic urban neighbourhoods",
          "Increasing its domestic ecological deficit through coastal brine disposal",
          "Accelerating transboundary river damming along international borders",
          "Importing virtual water to relieve pressure on scarce local aquifers",
        ],
        answerIndex: 3,
        explanation:
          "By importing water-intensive crops from water-abundant regions, a dry nation effectively 'imports virtual water', saving its own scarce rivers and aquifers for drinking water and higher-value uses.",
        hints: [
          "Think about the hidden water embedded in cotton and animal feed crops.",
          "Buying crops grown with someone else's rainfall keeps your own aquifers intact.",
        ],
      },
      {
        id: "consumption-food-water-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "global-water-scarcity",
        question: "Why would building a costly seawater desalination plant usually be a POOR first solution for a landlocked LIC suffering from economic water scarcity?",
        options: [
          "It lacks coastline and funding; investing in clean boreholes, pipes and treatment fits better",
          "Landlocked LICs have no freshwater rivers or groundwater anywhere beneath their soil",
          "Desalinated seawater is unsafe for drinking in tropical equatorial climates",
          "Economic water scarcity means people already have piped taps but refuse to turn them on",
        ],
        answerIndex: 0,
        explanation:
          "A landlocked LIC has no ocean access, high electricity costs would make desalinated water unaffordable, and under economic scarcity natural freshwater already exists — the real need is affordable local infrastructure (boreholes, pipes, filters, maintenance).",
        hints: [
          "Check two clues in the stem: 'landlocked' and 'economic water scarcity'.",
          "Match the solution to the actual root cause of the scarcity.",
        ],
      },
      {
        id: "consumption-food-water-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-water-scarcity",
        question: "Globally, which sector withdraws the largest share (~70%) of freshwater, making efficiency gains there especially impactful?",
        options: [
          "Domestic household showers and toilet flushing",
          "Agriculture and crop irrigation",
          "Semiconductor wafer fabrication factories",
          "Hydroelectric power station cooling towers",
        ],
        answerIndex: 1,
        explanation:
          "Agriculture accounts for roughly 70% of global freshwater withdrawals (compared with ~20% for industry and ~10% for domestic use). Switching from open flood channels to precision drip irrigation can cut agricultural water loss dramatically.",
        hints: [
          "Think about why virtual water in food (beef, rice, cotton) is so much larger than tap use.",
          "Which human activity needs vast irrigation canals across dry river basins?",
        ],
      },
      {
        id: "consumption-food-water-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "consumption-circular-economy",
        question: "Singapore's Semakau Landfill is projected to fill up around 2035 at recent waste rates. Which policy moves Singapore MOST effectively up the circular-economy hierarchy?",
        options: [
          "Building taller sea walls around Semakau so slightly more ash can be stacked",
          "Exporting unrecycled single-use plastics to landfills in neighbouring countries",
          "Enforcing reusable packaging, right-to-repair rules and extended producer responsibility",
          "Encouraging consumers to upgrade appliances every year and incinerate older models",
        ],
        answerIndex: 2,
        explanation:
          "Extended producer responsibility (EPR), reusable packaging systems and right-to-repair tackle waste at the design and consumption stages — preventing rubbish from being created rather than merely shifting or burying it.",
        hints: [
          "Remember the circular hierarchy: prevent/reduce/reuse/repair beat incineration and landfill.",
          "Which policy stops waste from being generated in the first place?",
        ],
      },
      {
        id: "consumption-food-water-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-food-security",
        question: "During 2022, when Malaysia temporarily halted live chicken exports to protect domestic prices, what vulnerability in Singapore's food system did this expose?",
        options: [
          "Singapore had too many domestic poultry farms competing for supermarket shelves",
          "Singapore lacked refrigerated ships capable of importing frozen poultry from Brazil",
          "Local Singaporean consumers refused to purchase chilled or frozen protein products",
          "Heavy reliance on a single neighbouring supplier leaves an importing city exposed to export bans",
        ],
        answerIndex: 3,
        explanation:
          "Malaysia supplied roughly one-third of Singapore's chickens, mostly live/fresh. The sudden export ban showed why Singapore combines diversified global suppliers (e.g., frozen/chilled chicken from Brazil, Thailand and Indonesia) with local '30 by 30' capacity.",
        hints: [
          "Think about how a trade policy change across the Causeway immediately affected Singapore's hawker centres.",
          "Why does relying heavily on one neighbour carry geopolitical and supply-chain risk?",
        ],
      },
      {
        id: "consumption-food-water-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "consumption-circular-economy",
        question: "A city introduces a $0.10 refundable deposit on drink bottles, raising return rates from 15% to 88%. Why is this circular design more effective than voluntary mixed-bin recycling?",
        options: [
          "Financial incentives produce clean, sorted material streams suitable for closed-loop bottle-to-bottle reuse",
          "Deposit schemes eliminate all water and energy needed to clean and melt returned plastics",
          "Mixed kerbside bins legally cannot collect plastic or aluminium beverage containers",
          "Charging deposits automatically converts single-use plastic into biodegradable compost",
        ],
        answerIndex: 0,
        explanation:
          "Deposit-return schemes (like Singapore's upcoming Beverage Container Return Scheme) motivate high return rates and keep bottles uncontaminated by food waste, allowing high-grade closed-loop recycling instead of downcycling.",
        hints: [
          "Think about contamination in mixed bins versus clean sorted bottles returned to machines.",
          "Clean, unmixed materials can be turned back into food-grade bottles repeatedly.",
        ],
      },
      {
        id: "consumption-food-water-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "water-management-singapore",
        question: "Why does PUB supply most NEWater directly to semiconductor wafer-fabrication plants and commercial air-conditioning cooling rather than pumping it straight into home taps?",
        options: [
          "NEWater still contains dangerous bacteria that cannot be removed by UV treatment",
          "Industry needs ultra-pure water and indirect reservoir blending boosts public confidence",
          "Singapore's home water pipes are too narrow to carry reverse-osmosis treated water",
          "Semiconductor factories generate freshwater as waste that PUB collects back for reservoirs",
        ],
        answerIndex: 1,
        explanation:
          "Wafer-fabrication plants require water far purer than tap water, making NEWater an ideal economic fit that frees up potable reservoir water for homes — while indirect potable blending in reservoirs also overcomes the psychological 'yuck factor'.",
        hints: [
          "Think about BOTH industrial water-purity needs and public psychology.",
          "NEWater is actually cleaner than WHO drinking-water standards!",
        ],
      },
      {
        id: "consumption-food-water-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-food-security",
        question: "Which factor explains why famine can occur in a region even during a year when global grain harvests reach record highs?",
        options: [
          "Global grain harvests cannot physically be transported across international oceans",
          "Record harvests automatically strip all vitamins and calories from staple cereals",
          "Conflict, soaring food prices and poverty block local access to available food",
          "High global grain supplies cause all local farmland soils to turn barren overnight",
        ],
        answerIndex: 2,
        explanation:
          "Food insecurity is frequently an ACCESS failure rather than a global availability failure: war, blocked aid corridors, inflation and extreme poverty prevent vulnerable families from buying or reaching food that exists elsewhere.",
        hints: [
          "Recall the distinction between Availability (food exists) and Access (people can buy or reach it).",
          "Think about human factors such as conflict and poverty.",
        ],
      },
      {
        id: "consumption-food-water-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "water-management-singapore",
        question: "If a drought cuts Singapore's Local Catchment and Johor imports by 20% combined, why does a strong demand-management programme still matter alongside NEWater and Desalination?",
        options: [
          "Demand management creates new monsoon rainclouds directly over MacRitchie Reservoir",
          "NEWater plants stop working completely whenever reservoir levels drop below 50%",
          "Desalination plants refuse to operate unless household water bills fall to zero",
          "Lower daily demand shrinks the energy bill, carbon cost and capacity needed from desalination",
        ],
        answerIndex: 3,
        explanation:
          "Every litre saved through WELS appliances, pricing and habits is a litre Singapore does not need to produce via expensive, energy-hungry desalination — lowering costs, carbon emissions and strain on infrastructure during droughts.",
        hints: [
          "Think about the financial and carbon cost of running desalination plants at maximum output.",
          "Saving water is always the cheapest and cleanest 'fifth tap'.",
        ],
      },
      {
        id: "consumption-food-water-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "global-water-scarcity",
        question: "Which policy combination is MOST likely to prevent conflict along a transboundary river basin like the Nile or Mekong?",
        options: [
          "Legally binding basin treaties with shared flow data and coordinated dam-filling schedules",
          "Unilateral upstream dam construction paired with strict secrecy over reservoir levels",
          "Downstream nations cutting off all trade while pumping fossil aquifers to exhaustion",
          "Encouraging every basin country to double flood-irrigated cotton production simultaneously",
        ],
        answerIndex: 0,
        explanation:
          "Durable hydro-diplomacy relies on transparent hydrological data sharing, joint river-basin commissions and binding agreements on drought-year dam releases so upstream power generation does not starve downstream farms and cities.",
        hints: [
          "Think about what builds trust between upstream and downstream neighbours sharing one river.",
          "Transparency, treaties and coordinated drought protocols reduce fear of sudden water cuts.",
        ],
      },
    ],
  },
];
