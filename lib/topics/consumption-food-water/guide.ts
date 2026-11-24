import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "consumption-food-water",
  title: "Global Consumption, Food & Water Security",
  strand: "Global Issues & Interconnections",
  icon: "💧",
  summary: "Explore uneven global consumption, why food miles can mislead, water scarcity, and Singapore's Four National Taps.",
  intro:
    "Every meal on your table and every glass of tap water connects you to distant farms, aquifers, factories and shipping lanes. In this unit, we investigate why global resource consumption is deeply unequal, how to measure food and water footprints accurately, and how a tiny island state like Singapore turns vulnerability into world-leading water and food resilience.",
  guide: [
    {
      id: "consumption-circular-economy",
      heading: "Global Consumption, Footprints & Circular Economy",
      discovery: {
        problem:
          "Earth's biologically productive land and ocean area provides about 1.6 global hectares (gha) of regenerative capacity per person. If the average person in Singapore has an ecological footprint of 5.9 gha and the average person in Bangladesh has 0.8 gha, roughly how many planet Earths would humanity need if everyone lived like a typical Singapore resident?",
        idea:
          "Divide the per-person ecological footprint by Earth's biocapacity per person: {{5.9 / 1.6}} ≈ 3.7 Earths! Because we only have one Earth, high-income lifestyles run an 'ecological deficit' — drawing down resources faster than ecosystems can regenerate them — while many low-income populations consume well below sustainable thresholds.",
      },
      body:
        "As global population has grown past 8 billion and incomes have risen sharply across newly emerging economies (NEEs), humanity's appetite for energy, metals, timber, plastics and food has surged. Geographers measure this pressure using two related indicators:\n\n" +
        "- **Ecological footprint** (measured in **global hectares, gha**): the area of productive land and sea required to supply the resources a person or country consumes and absorb its carbon dioxide waste.\n" +
        "- **Biocapacity**: the capacity of Earth's ecosystems to regenerate biological resources and absorb waste (roughly **1.6 gha per person** globally).\n\n" +
        "When a nation's ecological footprint exceeds its biocapacity, it runs an **ecological deficit**. Globally, humanity now demands about **1.7 Earths** every year, pushing **Earth Overshoot Day** — the date when annual consumption passes what Earth can regenerate in 12 months — into late July or early August.\n\n" +
        "Consumption is starkly uneven between High-Income Countries (HICs) and Low-Income Countries (LICs):\n\n" +
        "| Country (Income Group) | Typical Ecological Footprint (gha/person) | Equivalent Earths Needed |\n" +
        "|---|---|---|\n" +
        "| USA (HIC) | ~8.1 gha | ~5.1 Earths |\n" +
        "| Singapore (HIC) | ~5.9 gha | ~3.7 Earths |\n" +
        "| UK (HIC) | ~4.2 gha | ~2.6 Earths |\n" +
        "| India (NEE) | ~1.2 gha | ~0.8 Earths |\n" +
        "| Bangladesh (LIC/NEE) | ~0.8 gha | ~0.5 Earths |\n\n" +
        "High consumption also drives global **waste interconnections**. In a traditional **linear economy** (*take → make → use → dispose*), short-lived plastics and discarded electronics (**e-waste**) pile up rapidly. Much HIC plastic and e-waste is shipped to LICs and NEEs (such as informal scrapyards like Agbogbloshie in Ghana), where burning cables to recover copper releases toxic lead, dioxins and heavy metals into air, soil and groundwater.\n\n" +
        "To break this cycle, geographers and designers promote a **circular economy**. Instead of treating used products as rubbish, a circular system designs waste out from the start and keeps materials looping at high value through **refuse, reduce, repair, reuse, remanufacture and recycle**, while regenerating natural systems.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison between a linear take-make-waste economy and a circular economy loop"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/><text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Linear Economy vs Circular Economy</text><rect x="18" y="40" width="524" height="72" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/><text x="32" y="59" font-size="12" font-weight="700" fill="var(--bad)">LINEAR ECONOMY (Take → Make → Use → Waste)</text><rect x="32" y="70" width="96" height="30" rx="6" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/><text x="80" y="89" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">1. Extract Raw</text><line x1="128" y1="85" x2="152" y2="85" stroke="var(--bad)" stroke-width="2"/><polygon points="152,81 160,85 152,89" fill="var(--bad)"/><rect x="162" y="70" width="96" height="30" rx="6" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/><text x="210" y="89" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">2. Manufacture</text><line x1="258" y1="85" x2="282" y2="85" stroke="var(--bad)" stroke-width="2"/><polygon points="282,81 290,85 282,89" fill="var(--bad)"/><rect x="292" y="70" width="96" height="30" rx="6" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/><text x="340" y="89" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">3. Short Use</text><line x1="388" y1="85" x2="412" y2="85" stroke="var(--bad)" stroke-width="2"/><polygon points="412,81 420,85 412,89" fill="var(--bad)"/><rect x="422" y="70" width="106" height="30" rx="6" fill="var(--bad)"/><text x="475" y="89" text-anchor="middle" font-size="11" font-weight="700" fill="var(--surface)">4. Landfill / Burn</text><rect x="18" y="124" width="524" height="112" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.4"/><text x="32" y="143" font-size="12" font-weight="700" fill="var(--good)">CIRCULAR ECONOMY (Keep Materials Flowing &amp; Design Out Waste)</text><rect x="42" y="158" width="106" height="32" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.6"/><text x="95" y="178" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Design &amp; Make</text><rect x="225" y="158" width="110" height="32" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.6"/><text x="280" y="178" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Use &amp; Share</text><rect x="412" y="158" width="108" height="32" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.6"/><text x="466" y="178" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Repair &amp; Reuse</text><line x1="148" y1="174" x2="217" y2="174" stroke="var(--good)" stroke-width="2"/><polygon points="217,170 225,174 217,178" fill="var(--good)"/><line x1="335" y1="174" x2="404" y2="174" stroke="var(--good)" stroke-width="2"/><polygon points="404,170 412,174 404,178" fill="var(--good)"/><path d="M 466 190 C 466 222, 95 222, 95 194" fill="none" stroke="var(--good)" stroke-width="2.2"/><polygon points="91,197 95,189 99,197" fill="var(--good)"/><text x="280" y="224" text-anchor="middle" font-size="11" font-weight="600" fill="var(--good)">Remanufacture &amp; Recycle into New Inputs (Minimal Waste)</text></svg>`,
      diagramCaption:
        "A linear economy converts finite resources rapidly into landfill and pollution; a circular economy loops materials back into production.",
      workedExamples: [
        {
          title: "Calculating Ecological Deficit & Earths Needed",
          problem:
            "Country X has an ecological footprint of 4.8 gha per person and a local biocapacity of 1.2 gha per person. (a) Calculate Country X's ecological deficit per person. (b) If global biocapacity is 1.6 gha per person, how many Earths would be needed if everyone consumed like Country X?",
          steps: [
            "Ecological deficit = Ecological footprint − Local biocapacity = 4.8 − 1.2 = 3.6 gha per person.",
            "Earths needed = Country X footprint ÷ Global biocapacity = {{4.8 / 1.6}} = 3.",
            "Country X uses 4 times its own local biocapacity and 3 times the global sustainable share.",
          ],
          answer: "Ecological deficit = 3.6 gha/person; 3 Earths needed.",
          yourTurn: {
            question:
              "Country Y has an ecological footprint of 6.4 gha per person. Taking global biocapacity as 1.6 gha per person, how many planet Earths would be needed if everyone lived like Country Y?",
            answer: { type: "number", value: 4, display: "4" },
            solution: "Divide footprint by global biocapacity: {{6.4 / 1.6}} = 4 Earths.",
          },
        },
        {
          title: "Applying the Waste Hierarchy to E-Waste",
          problem:
            "A school replaces 120 working laptops after three years because their batteries hold less charge. Suggest one linear outcome and two higher-value circular actions.",
          steps: [
            "Linear outcome: disposing of the laptops in landfill or shipping them to an informal e-waste dump, losing gold, copper and rare earths while risking toxic leachate.",
            "Circular action 1 (Repair): replace only the worn lithium-ion batteries to extend each laptop's lifespan by another 3–4 years.",
            "Circular action 2 (Reuse / Remanufacture): refurbish and donate or lease the laptops to another community before finally recycling components at end-of-life.",
          ],
          answer:
            "Linear: landfill/e-waste export. Circular: battery repair to extend life, followed by refurbishment/reuse before material recycling.",
        },
      ],
      keyPoints: [
        "Ecological footprint measures human resource demand in global hectares (gha); biocapacity measures nature's ability to regenerate.",
        "HIC residents typically have ecological footprints 4–8 times higher than LIC residents, driving global ecological overshoot (~1.7 Earths).",
        "Global waste chains often shift the environmental and health burdens of HIC plastic and e-waste onto LICs and NEEs.",
        "A circular economy cuts waste and emissions by prioritising durability, repair, sharing, reuse and remanufacturing — not just recycling.",
      ],
      whyItWorks:
        "Recycling alone still requires energy and degrades materials like plastics over time. Keeping products intact longer through modular design, repair and reuse preserves the embodied energy, water and minerals already invested during manufacturing.",
      strategies: [
        "Compare Per-Capita vs Total Figures — a populous NEE like India has a large total footprint, yet its per-person footprint is far smaller than an HIC's.",
        "Move Up the Circular Hierarchy — always evaluate refuse, reduce, repair and reuse before relying on end-of-pipe recycling.",
      ],
      thinkDeeper:
        "Singapore's Semakau Landfill — its only offshore landfill — is projected to reach full capacity by around 2035 if disposal rates stay high. Why is extending Semakau's lifespan far more than just an engineering challenge?",
    },
    {
      id: "global-food-security",
      heading: "Global Food Chains, Food Miles & Food Security",
      discovery: {
        problem:
          "A supermarket in London sells two baskets of tomatoes in January: local British tomatoes grown 40 km away in gas-heated glasshouses, and Spanish tomatoes grown in sunny open fields 1,600 km away and shipped by lorry. Which basket has the lower total carbon footprint, and why does distance alone mislead?",
        idea:
          "The Spanish field-grown tomatoes usually have a **lower** total carbon footprint! Heating glasshouses in winter burns far more fossil fuel than trucking tomatoes 1,600 km. **Food miles** only count transport distance — ignoring the much larger emissions from farming methods, heating, land use and livestock methane.",
      },
      body:
        "The UN Food and Agriculture Organization (FAO) defines **food security** as existing when all people, at all times, have physical, social and economic access to sufficient, safe and nutritious food for an active and healthy life. Food insecurity does not simply mean the world runs out of food — globally we produce enough calories for everyone, yet **roughly one-third of all food is lost or wasted**.\n\n" +
        "Both **physical** and **human** factors shape food supply:\n" +
        "- **Physical factors**: climate and extreme weather (droughts, cyclones, heatwaves), soil quality, water availability and crop pests/diseases.\n" +
        "- **Human factors**: poverty (people cannot afford available food), conflict (disrupting harvests and blocking grain exports), farming technology (irrigation, fertilisers, high-yield seeds) and global trade policies.\n\n" +
        "### Why Food Miles Alone Can Mislead\n" +
        "**Food miles** measure how far food travels from farm to plate. While cutting transport sounds automatically greener, life-cycle data shows transport makes up only **~6%–10%** of global food greenhouse gas emissions. **What** you eat and **how** it is produced matter far more:\n\n" +
        "| Food Item (1 kg) | Typical Total Carbon Footprint | Main Driver of Emissions |\n" +
        "|---|---|---|\n" +
        "| Beef (beef herd) | ~60 kg CO₂e | Methane (CH₄) from cattle digestion + deforestation/pasture land use |\n" +
        "| Cheese | ~21 kg CO₂e | Dairy cattle methane + feed production |\n" +
        "| Chicken | ~6 kg CO₂e | Poultry feed crops and housing energy |\n" +
        "| Tofu | ~3 kg CO₂e | Soybean farming & processing |\n" +
        "| Peas / Lentils | ~1 kg CO₂e | Low-input nitrogen-fixing crops |\n\n" +
        "The **one major transport exception is air freight**: flying delicate perishables (such as out-of-season berries or green beans) emits roughly **50 times more CO₂ per tonne-km** than ocean container shipping. Container ships are remarkably carbon-efficient per kilogram of food.\n\n" +
        "### Case Study: Singapore's '30 by 30' Food Resilience Goal\n" +
        "With less than 1% of its land available for farming, **Singapore imports over 90% of its food** from more than 180 countries. Diversifying import sources reduces risk, yet climate shocks, pandemics or export bans (such as Malaysia's 2022 temporary chicken export ban) can still squeeze supplies.\n\n" +
        "In response, the Singapore Food Agency launched the **'30 by 30'** goal: building the agri-food industry's capability and capacity to sustainably produce **30% of Singapore's nutritional needs locally by 2030**. Because land is scarce, Singapore relies on high-tech agri-tech:\n" +
        "- **Vertical indoor farms** using hydroponics/aeroponics and LED lights to grow leafy greens year-round with up to 90% less water.\n" +
        "- **Closed-containment aquaculture** (recirculating fish tanks) protecting fish from algae blooms and oil spills.\n" +
        "- **Alternative proteins** (plant-based & precision fermentation) that require tiny footprints.",
      diagram: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart comparing production emissions versus transport emissions across foods"><rect x="0" y="0" width="560" height="255" rx="12" fill="var(--surface)"/><text x="280" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Food Carbon Footprint (kg CO₂e per kg): Production vs Transport</text><rect x="165" y="34" width="12" height="10" rx="2" fill="var(--brand)"/><text x="182" y="43" font-size="10.5" fill="var(--ink-2)">Farming, Land Use &amp; Methane</text><rect x="355" y="34" width="12" height="10" rx="2" fill="var(--bad)"/><text x="372" y="43" font-size="10.5" fill="var(--ink-2)">Transport (Food Miles)</text><line x1="150" y1="54" x2="150" y2="218" stroke="var(--line)" stroke-width="1.2"/><line x1="150" y1="218" x2="520" y2="218" stroke="var(--line)" stroke-width="1.2"/><text x="142" y="76" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Beef (Local)</text><rect x="150" y="62" width="354" height="20" rx="3" fill="var(--brand)"/><rect x="504" y="62" width="4" height="20" fill="var(--bad)"/><text x="513" y="76" font-size="10.5" font-weight="700" fill="var(--ink)">60</text><text x="142" y="109" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Cheese</text><rect x="150" y="95" width="121" height="20" rx="3" fill="var(--brand)"/><rect x="271" y="95" width="4" height="20" fill="var(--bad)"/><text x="281" y="109" font-size="10.5" font-weight="700" fill="var(--ink)">21</text><text x="142" y="142" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Air-Freighted Veg</text><rect x="150" y="128" width="8" height="20" rx="3" fill="var(--brand)"/><rect x="158" y="128" width="58" height="20" rx="3" fill="var(--bad)"/><text x="222" y="142" font-size="10.5" font-weight="700" fill="var(--bad)">11 (air!)</text><text x="142" y="175" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Chicken</text><rect x="150" y="161" width="33" height="20" rx="3" fill="var(--brand)"/><rect x="183" y="161" width="3" height="20" fill="var(--bad)"/><text x="192" y="175" font-size="10.5" font-weight="700" fill="var(--ink)">6</text><text x="142" y="208" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Shipped Lentils</text><rect x="150" y="194" width="5" height="20" rx="2" fill="var(--brand)"/><rect x="155" y="194" width="2" height="20" fill="var(--bad)"/><text x="163" y="208" font-size="10.5" font-weight="700" fill="var(--good)">1.2</text><text x="150" y="234" text-anchor="middle" font-size="10" fill="var(--ink-2)">0</text><text x="268" y="234" text-anchor="middle" font-size="10" fill="var(--ink-2)">20</text><text x="386" y="234" text-anchor="middle" font-size="10" fill="var(--ink-2)">40</text><text x="504" y="234" text-anchor="middle" font-size="10" fill="var(--ink-2)">60 kg CO₂e/kg</text></svg>`,
      diagramCaption:
        "Production and methane dwarf transport for beef and cheese, whereas air freight spikes transport emissions for flown vegetables.",
      workedExamples: [
        {
          title: "Comparing Total Emissions: Local Beef vs Shipped Plant Protein",
          problem:
            "A school canteen compares 10 kg of local beef (60 kg CO₂e/kg, including 0.5 kg transport) with 10 kg of shipped lentils (1.2 kg CO₂e/kg, including 0.3 kg shipping from 8,000 km away). Calculate the carbon saved by choosing lentils instead of beef.",
          steps: [
            "Total emissions for 10 kg local beef = 10 × 60 = 600 kg CO₂e.",
            "Total emissions for 10 kg shipped lentils = 10 × 1.2 = 12 kg CO₂e.",
            "Carbon saved = 600 − 12 = 588 kg CO₂e (a 98% cut despite far greater food miles!).",
          ],
          answer: "588 kg CO₂e saved.",
          yourTurn: {
            question:
              "A family swaps 2 kg of beef (60 kg CO₂e/kg) for 2 kg of chicken (6 kg CO₂e/kg) over a month. How many kilograms of CO₂e do they save?",
            answer: { type: "number", value: 108, display: "108 kg" },
            solution: "Beef: 2 × 60 = 120 kg CO₂e; Chicken: 2 × 6 = 12 kg CO₂e; Saving = 120 − 12 = 108 kg CO₂e.",
          },
        },
        {
          title: "Evaluating Singapore's '30 by 30' Agri-Tech Strategy",
          problem:
            "Give one advantage and one challenge of using indoor vertical farms to achieve Singapore's '30 by 30' food security target.",
          steps: [
            "Advantage: vertical farms stack crops in controlled environments, producing far higher yields per square metre with up to 90% less water and zero weather disruption.",
            "Challenge: LED grow-lights and climate control consume large amounts of electricity, raising production costs and retail prices compared with cheaper imported vegetables.",
          ],
          answer:
            "Advantage: high yield per m² and weather resilience. Challenge: high energy cost making local produce pricier than imports.",
        },
      ],
      keyPoints: [
        "Food security requires availability, economic/physical access, nutritious utilisation and long-term stability.",
        "Food miles measure transport distance only; total carbon footprint (life-cycle emissions) is dominated by farming methods, land-use change and livestock methane.",
        "Air-freighted foods carry a steep transport penalty (~50× higher per tonne-km than shipping), whereas sea-shipped seasonal crops have low transport emissions.",
        "Singapore imports >90% of its food and pursues '30 by 30' via vertical farms, closed aquaculture and alternative proteins alongside diverse import sources.",
      ],
      whyItWorks:
        "Separating food miles from total life-cycle emissions stops us making 'false green' choices: a single container ship distributes its fuel across tens of thousands of tonnes of food, whereas heating a glasshouse or raising ruminant livestock burns energy or emits potent methane directly per kilogram produced.",
      strategies: [
        "Check Transport Mode, Not Just Distance — 10,000 km by container ship can emit less CO₂ than 500 km by air freight.",
        "Think in Pillars — diagnose food insecurity by asking whether the bottleneck is physical supply (availability) or affordability (access).",
      ],
      thinkDeeper:
        "If Singapore produces 30% of its food locally by 2030, it will still import 70%. Why does the Singapore Food Agency pair '30 by 30' with diversifying imports across >180 countries rather than aiming for 100% self-sufficiency?",
    },
    {
      id: "global-water-scarcity",
      heading: "Water Security: Physical vs Economic Scarcity",
      discovery: {
        problem:
          "The Democratic Republic of the Congo (DRC) lies on the Equator, receives over 1,500 mm of rainfall a year, and holds Africa's largest river basin — yet millions of its citizens lack safe tap water. Meanwhile, Qatar receives less than 80 mm of rainfall per year, yet almost 100% of residents have clean running water. How is this possible?",
        idea:
          "Geography distinguishes **physical water scarcity** (nature supplies too little water, as in arid Qatar) from **economic water scarcity** (plenty of rainfall and rivers exist, as in the DRC, but poverty, weak infrastructure or conflict stop people collecting, treating and piping clean water). Wealthy desert nations can overcome physical scarcity with expensive desalination, while poorer wet nations struggle without capital.",
      },
      body:
        "Earth is nicknamed the Blue Planet because 71% of its surface is water — yet usable freshwater is extraordinarily rare:\n\n" +
        "- **~97.5%** of all water on Earth is salty ocean water.\n" +
        "- Only **~2.5%** is freshwater.\n" +
        "- Of that 2.5% freshwater, **~69%** is frozen in glaciers and ice caps and **~30%** lies underground in aquifers, leaving **less than 1%** (about 0.3% in rivers and lakes) readily accessible at the surface.\n\n" +
        "### Water Stress, Physical Scarcity & Economic Scarcity\n" +
        "Hydrologists classify **water stress** when renewable freshwater drops below **1,700 m³ per person per year**, and **water scarcity** below **1,000 m³ per person per year**. Crucially, water insecurity takes two distinct forms:\n\n" +
        "- **Physical water scarcity**: water demand outstrips the natural renewable supply because of arid climate, low rainfall, high evaporation or over-pumping rivers and aquifers (e.g., Middle East, North Africa, Central Asia, Southwestern USA).\n" +
        "- **Economic water scarcity**: physical water is present in rivers, lakes or rainfall, **but** human, financial or institutional barriers (poverty, lack of pipes/treatment plants, corruption or conflict) prevent people accessing safe water (e.g., large parts of Sub-Saharan Africa such as DRC and rural Ethiopia).\n\n" +
        "### Virtual (Embedded) Water\n" +
        "Your direct tap use (drinking, showering, flushing) is only a tiny slice of your true water footprint. **Virtual water** is the hidden volume of freshwater consumed across the entire supply chain to grow, irrigate and manufacture food and everyday goods:\n\n" +
        "| Everyday Product | Typical Virtual Water Footprint |\n" +
        "|---|---|\n" +
        "| 1 kg of beef | ~15,400 litres |\n" +
        "| 1 cotton T-shirt | ~2,700 litres |\n" +
        "| 1 kg of rice | ~2,500 litres |\n" +
        "| 100 g bar of chocolate | ~1,700 litres |\n" +
        "| 1 cup of coffee (125 ml) | ~140 litres |\n\n" +
        "When an HIC imports irrigated cotton, beef or avocados from a dry region, it effectively imports **virtual water**, shifting water stress onto rivers and aquifers abroad.\n\n" +
        "### Transboundary River Tensions\n" +
        "Over 260 major river basins cross international borders. When an **upstream** country builds a hydroelectric dam or diverts irrigation water, **downstream** countries fear shrinking flows, crop failure and salinisation. A flagship example is the **River Nile**, where Ethiopia's **Grand Ethiopian Renaissance Dam (GERD)** promises vital electricity for Ethiopia while raising serious water-security fears in downstream Egypt (which relies on the Nile for over 90% of its freshwater). Similar tensions exist along the **Mekong** and **Tigris–Euphrates**.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Breakdown of Earth total water showing 97.5 percent saltwater, 2.5 percent freshwater, and less than 1 percent accessible freshwater"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/><text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Where Is Earth's Freshwater? (Only &lt;1% Easily Accessible)</text><text x="28" y="54" font-size="11.5" font-weight="700" fill="var(--ink-2)">1. All Water on Earth (100%)</text><rect x="28" y="62" width="491" height="32" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/><text x="273" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Salty Ocean Water — 97.5%</text><rect x="519" y="62" width="14" height="32" rx="2" fill="var(--good)"/><text x="526" y="54" text-anchor="end" font-size="11" font-weight="700" fill="var(--good)">2.5% Fresh</text><line x1="519" y1="94" x2="28" y2="124" stroke="var(--good)" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="533" y1="94" x2="533" y2="124" stroke="var(--good)" stroke-width="1.2" stroke-dasharray="4 3"/><text x="28" y="120" font-size="11.5" font-weight="700" fill="var(--good)">2. Zooming Into That 2.5% Freshwater</text><rect x="28" y="128" width="348" height="34" rx="4" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/><text x="202" y="149" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">Glaciers &amp; Ice Caps (~69%)</text><rect x="376" y="128" width="150" height="34" rx="2" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/><text x="451" y="149" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">Groundwater (~30%)</text><rect x="526" y="128" width="7" height="34" rx="1" fill="var(--bad)"/><line x1="529" y1="162" x2="529" y2="188" stroke="var(--bad)" stroke-width="1.8"/><polygon points="525,186 529,194 533,186" fill="var(--bad)"/><rect x="198" y="196" width="335" height="38" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.6"/><text x="365" y="213" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--bad)">Surface Rivers &amp; Lakes: &lt;1% of Freshwater!</text><text x="365" y="227" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Only ~0.3% of freshwater is readily accessible surface water</text></svg>`,
      diagramCaption:
        "Almost all water on Earth is saline, and almost all freshwater is frozen or deep underground — making surface rivers and lakes precious.",
      workedExamples: [
        {
          title: "Calculating Virtual Water in a Daily Meal",
          problem:
            "A student eats a meal containing 0.25 kg of beef (15,400 L/kg), 0.2 kg of rice (2,500 L/kg) and drinks one cup of coffee (140 L). Calculate the total virtual water embedded in this single meal.",
          steps: [
            "Beef virtual water = 0.25 × 15,400 = 3,850 L.",
            "Rice virtual water = 0.2 × 2,500 = 500 L.",
            "Coffee virtual water = 140 L.",
            "Total virtual water = 3,850 + 500 + 140 = 4,490 litres (nearly 32 days of direct Singapore household tap use!).",
          ],
          answer: "4,490 litres.",
          yourTurn: {
            question:
              "A shopper buys 2 cotton T-shirts (2,700 L each) and 1 kg of rice (2,500 L). What is the total virtual water footprint in litres?",
            answer: { type: "number", value: 7900, display: "7900 L" },
            solution: "T-shirts: 2 × 2,700 = 5,400 L. Add rice: 5,400 + 2,500 = 7,900 L.",
          },
        },
        {
          title: "Diagnosing Physical vs Economic Scarcity",
          problem:
            "Region A gets 1,800 mm of rainfall annually, yet only 38% of households have piped clean water due to underfunded infrastructure. Region B gets 110 mm of rainfall annually and pumps fossil aquifers faster than rain recharges them. Classify each region's scarcity type.",
          steps: [
            "Region A has abundant natural rainfall (1,800 mm), so the shortage is caused by lack of money and infrastructure → Economic water scarcity.",
            "Region B lacks natural rainfall (110 mm) and demand exceeds natural recharge → Physical water scarcity.",
          ],
          answer: "Region A: Economic water scarcity. Region B: Physical water scarcity.",
        },
      ],
      keyPoints: [
        "Only ~2.5% of Earth's water is freshwater, and less than 1% is readily accessible in surface rivers, lakes and shallow recharge.",
        "Physical water scarcity means nature cannot supply enough water; economic water scarcity means water exists but poverty/weak infrastructure blocks access.",
        "Virtual water reveals how food and manufactured imports connect our lifestyles to distant stressed watersheds.",
        "Transboundary rivers like the Nile and Mekong require treaties and joint basin management to prevent upstream–downstream conflict.",
      ],
      whyItWorks:
        "Knowing the cause of scarcity determines the right solution: a country facing economic scarcity needs investment in pipes, pumps, boreholes and governance rather than desalination plants, whereas a country facing physical scarcity must focus on conservation, recycling and non-conventional supplies.",
      strategies: [
        "Always Ask 'Is Rain Missing, or Are Pipes Missing?' — this one test instantly separates physical from economic scarcity.",
        "Trace Upstream to Downstream — on transboundary river questions, identify who controls the dam and who bears reduced flow downstream.",
      ],
      thinkDeeper:
        "Agriculture consumes roughly 70% of all freshwater withdrawn globally. Why might switching a dry country from flood irrigation to drip irrigation save far more water than asking city households to take shorter showers?",
    },
    {
      id: "water-management-singapore",
      heading: "Managing Water: Singapore's Four National Taps",
      discovery: {
        problem:
          "Singapore gets around 2,400 mm of rain every year — nearly four times London's annual rainfall! Yet the UN classifies Singapore as a water-stressed nation. Why can such a rainy island still suffer from water insecurity?",
        idea:
          "Rainfall alone does not create water security: Singapore has a tiny land area (~735 km²) to catch and store rain, no natural lakes or deep aquifers, and a dense population of ~6 million people plus water-hungry industries. Without smart engineering, most tropical downpours would simply wash straight into the sea!",
      },
      body:
        "When Singapore became independent in 1965, water vulnerability was an existential threat. Today, **PUB (Singapore's National Water Agency)** secures the nation's supply — roughly **440 million gallons per day (MGD)** — through a diversified strategy known as the **Four National Taps**, supported by strict demand-side conservation:\n\n" +
        "1. **Tap 1 — Local Catchment Water**: Networks of drains, canals and rivers collect rainwater across **two-thirds of Singapore's land area** into **17 reservoirs**. The flagship project is **Marina Barrage** (opened 2008), a 350 m dam across Marina Channel that creates a freshwater city-centre reservoir while also acting as a tidal flood barrier and public recreation park. *Limitation*: vulnerable to prolonged dry spells and El Niño droughts.\n" +
        "2. **Tap 2 — Imported Water**: Treated water piped from the **Johor River** in Malaysia under the **1962 Water Agreement**, allowing Singapore to draw up to **250 MGD** until the agreement expires in **2061**. *Limitation*: vulnerable to dry spells in Johor and geopolitical reliance on a neighbour.\n" +
        "3. **Tap 3 — NEWater**: Ultra-clean, high-grade reclaimed water made from treated used water via an advanced three-stage process:\n" +
        "   - **Stage 1 — Microfiltration**: filters out microscopic suspended solids and bacteria.\n" +
        "   - **Stage 2 — Reverse Osmosis (RO)**: forces water through semi-permeable membranes to strip out viruses, heavy metals and dissolved salts.\n" +
        "   - **Stage 3 — Ultraviolet (UV) disinfection**: acts as a final safety barrier destroying any remaining organisms.\n" +
        "   NEWater is **weather-independent** and actually cleaner than WHO drinking standards. Most goes to wafer-fabrication plants and commercial cooling, while a small fraction tops up reservoirs during dry periods (indirect potable use). It meets up to **~40%** of Singapore's demand (targeted to reach **~55% by 2060**).\n" +
        "4. **Tap 4 — Desalinated Water**: Seawater from the surrounding straits is purified using **Reverse Osmosis** (including the dual-mode Keppel Marina East Desalination Plant, which can treat either reservoir freshwater or seawater). *Strength*: completely weather-independent and virtually unlimited seawater source. *Limitations*: **high energy demand** (costly electricity and carbon emissions unless powered by renewables) and concentrated salty **brine** discharge that must be carefully diffused to avoid harming marine life. Meets up to **~25%** of demand (targeted **~30% by 2060**).\n\n" +
        "### Demand-Side Conservation: Making Every Drop Count\n" +
        "Supply engineering alone is not enough — Singapore pairs the Four Taps with **demand management**: progressive water tariffs plus a **Water Conservation Tax**, mandatory **WELS** (Water Efficiency Labelling Scheme) tick ratings on taps and washing machines, smart water meters that spot leaks early, and PUB's target to cut domestic use from ~141 L/person/day down to **130 L/person/day by 2030**.",
      diagram: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Singapore Four National Taps diagram showing Local Catchment, Imported Water, NEWater and Desalination with weather resilience"><rect x="0" y="0" width="560" height="260" rx="12" fill="var(--surface)"/><text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Singapore's Four National Taps (PUB Water Strategy)</text><rect x="20" y="42" width="122" height="120" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="81" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">TAP 1</text><text x="81" y="77" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Local Catchment</text><text x="81" y="97" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">17 reservoirs</text><text x="81" y="112" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">Marina Barrage</text><text x="81" y="127" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">2/3 of island</text><rect x="30" y="138" width="102" height="18" rx="4" fill="var(--surface)" stroke="var(--bad)" stroke-width="1"/><text x="81" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="var(--bad)">Weather-dependent</text><rect x="152" y="42" width="122" height="120" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="213" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">TAP 2</text><text x="213" y="77" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Imported Water</text><text x="213" y="97" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">Johor River</text><text x="213" y="112" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">1962 Agreement</text><text x="213" y="127" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">Up to 250 MGD</text><rect x="162" y="138" width="102" height="18" rx="4" fill="var(--surface)" stroke="var(--bad)" stroke-width="1"/><text x="213" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="var(--bad)">Expires in 2061</text><rect x="284" y="42" width="122" height="120" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.6"/><text x="345" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">TAP 3</text><text x="345" y="77" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">NEWater</text><text x="345" y="97" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">Microfiltration</text><text x="345" y="112" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">Reverse Osmosis</text><text x="345" y="127" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">UV Disinfection</text><rect x="294" y="138" width="102" height="18" rx="4" fill="var(--good)"/><text x="345" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="var(--surface)">Weather-resilient</text><rect x="416" y="42" width="124" height="120" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.6"/><text x="478" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">TAP 4</text><text x="478" y="77" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Desalination</text><text x="478" y="97" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">Seawater → RO</text><text x="478" y="112" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">Energy-intensive</text><text x="478" y="127" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">Brine management</text><rect x="426" y="138" width="104" height="18" rx="4" fill="var(--good)"/><text x="478" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="var(--surface)">Weather-resilient</text><line x1="81" y1="162" x2="81" y2="188" stroke="var(--brand)" stroke-width="1.5"/><line x1="213" y1="162" x2="213" y2="188" stroke="var(--brand)" stroke-width="1.5"/><line x1="345" y1="162" x2="345" y2="188" stroke="var(--good)" stroke-width="1.5"/><line x1="478" y1="162" x2="478" y2="188" stroke="var(--good)" stroke-width="1.5"/><line x1="81" y1="188" x2="478" y2="188" stroke="var(--ink-2)" stroke-width="1.6"/><line x1="280" y1="188" x2="280" y2="202" stroke="var(--ink-2)" stroke-width="1.8"/><polygon points="276,200 280,208 284,200" fill="var(--ink-2)"/><rect x="75" y="210" width="410" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="280" y="226" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Closed Water Loop + Demand Management (Target: 130 L/person/day by 2030)</text><text x="280" y="240" text-anchor="middle" font-size="10" fill="var(--ink-2)">Water pricing &amp; tax · WELS efficiency ticks · Smart meters · Public conservation</text></svg>`,
      diagramCaption:
        "Singapore balances cheaper rainfall-dependent taps (1 & 2) with weather-independent engineered taps (3 & 4) plus demand reduction.",
      workedExamples: [
        {
          title: "Calculating Household Water Savings Toward PUB's 2030 Target",
          problem:
            "A household of 4 people in Singapore uses 145 litres per person per day. If they install WELS 3-tick showerheads and cut usage to PUB's 2030 target of 130 litres per person per day, how many litres do they save in 30 days?",
          steps: [
            "Daily saving per person = 145 − 130 = 15 litres/day.",
            "Daily saving for 4 people = 4 × 15 = 60 litres/day.",
            "Saving over 30 days = 60 × 30 = 1,800 litres.",
          ],
          answer: "1,800 litres saved in 30 days.",
          yourTurn: {
            question:
              "If a Singapore family of 5 people reduces water consumption from 142 L/person/day to 130 L/person/day, how many litres of water do they save in 10 days?",
            answer: { type: "number", value: 600, display: "600 L" },
            solution: "Daily saving per person = 142 − 130 = 12 L. For 5 people: 5 × 12 = 60 L/day. Over 10 days: 60 × 10 = 600 L.",
          },
        },
        {
          title: "Evaluating NEWater vs Desalination",
          problem:
            "Both NEWater and Desalination are weather-independent. Why does Singapore plan for NEWater (~55%) to supply a larger share than Desalination (~30%) by 2060?",
          steps: [
            "Energy efficiency: reclaimed used water has far lower dissolved salt content than seawater, so pushing it through reverse osmosis requires much less electrical energy than desalinating seawater.",
            "Environmental impact: desalination produces concentrated salty brine waste and higher carbon emissions per cubic metre if powered by fossil fuels, whereas NEWater closes the urban water loop.",
          ],
          answer:
            "NEWater uses significantly less energy and avoids seawater brine disposal because treated wastewater is far less salty than ocean water.",
        },
      ],
      keyPoints: [
        "Singapore is water-stressed despite ~2,400 mm annual rainfall because tiny land area and high density limit natural catchment and storage.",
        "The Four National Taps are Local Catchment (17 reservoirs/Marina Barrage), Imported Water (Johor, 1962 Agreement to 2061), NEWater and Desalination.",
        "NEWater uses a 3-stage process: Microfiltration → Reverse Osmosis → Ultraviolet (UV) disinfection, creating a weather-resilient closed water loop.",
        "Desalination is drought-proof but energy-intensive and generates salty brine, so Singapore pairs supply diversification with demand management (pricing, WELS, 130 L/day target).",
      ],
      whyItWorks:
        "Diversification works like a balanced investment portfolio: rainwater and imports are low-energy when conditions are normal, while NEWater and desalination guarantee resilience during droughts and ahead of the 2061 treaty expiry.",
      strategies: [
        "Always Pair Supply-Side with Demand-Side — top Year 9 Geography answers evaluate BOTH new water sources (Four Taps) and cutting consumption (pricing, WELS, smart meters).",
        "Memorise the Exact NEWater Sequence — Microfiltration → Reverse Osmosis → UV disinfection (particles → dissolved salts/viruses → final disinfection).",
      ],
      thinkDeeper:
        "Marina Barrage was engineered as a 'three-in-one' project (water supply, flood control, lifestyle attraction). How does climate-change sea-level rise affect how its giant crest gates and pumps must operate during a high tide combined with a monsoon storm?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Ecological footprint", back: "The area of biologically productive land and sea (in global hectares, gha) needed to supply a person's or country's resources and absorb its CO₂ waste." },
      { front: "Biocapacity", back: "The capacity of ecosystems to regenerate biological resources and absorb waste (~1.6 gha per person globally)." },
      { front: "Earth Overshoot Day", back: "The calendar date when humanity's annual demand for ecological resources exceeds what Earth can regenerate in that entire year." },
      { front: "Linear vs Circular Economy", back: "Linear follows 'take–make–use–dispose'; circular designs out waste and loops materials via repair, reuse, remanufacture and recycling." },
      { front: "Food security (FAO)", back: "When all people, at all times, have physical, social and economic access to sufficient, safe and nutritious food for an active, healthy life." },
      { front: "Food miles", back: "The distance food travels from producer (farm) to consumer (plate) — useful for spotting air freight, but ignores production emissions." },
      { front: "Singapore's '30 by 30' goal", back: "Singapore Food Agency's target to build local capability to sustainably produce 30% of Singapore's nutritional needs by 2030 using agri-tech." },
      { front: "Global freshwater distribution", back: "~97.5% of Earth's water is salty; only ~2.5% is freshwater, and less than 1% of freshwater is readily accessible in surface rivers and lakes." },
      { front: "Physical water scarcity", back: "When water demand exceeds natural renewable water supply due to arid climate, low rainfall, high evaporation or over-abstraction." },
      { front: "Economic water scarcity", back: "When physical water is present in nature, but poverty, weak infrastructure, lack of investment or conflict stop people accessing safe water." },
      { front: "Virtual (embedded) water", back: "The hidden freshwater used across the entire supply chain to grow, process and manufacture a product (e.g., ~15,400 L per kg of beef)." },
      { front: "Singapore's Four National Taps", back: "1. Local Catchment (17 reservoirs/Marina Barrage), 2. Imported Water (Johor), 3. NEWater, 4. Desalinated Water." },
      { front: "NEWater 3-stage process", back: "Microfiltration (removes solids/bacteria) → Reverse Osmosis (removes viruses/salts/metals) → Ultraviolet (UV) disinfection." },
      { front: "Marina Barrage's 3 benefits", back: "1. Freshwater reservoir (Local Catchment), 2. Tidal flood control via crest gates & pumps, 3. Urban lifestyle & recreation hub." },
      { front: "Water stress vs water scarcity thresholds", back: "Water stress: <1,700 m³/person/year; Water scarcity: <1,000 m³/person/year; Absolute scarcity: <500 m³/person/year." },
    ],
    mustKnow: [
      "Calculate ecological deficit and 'Earths needed' from ecological footprint and biocapacity figures.",
      "Contrast linear ('take–make–waste') and circular economies using plastic and e-waste examples.",
      "Explain why food miles alone can mislead compared with total carbon footprint (e.g., local beef or heated greenhouses vs sea-shipped seasonal crops).",
      "Describe Singapore's food import vulnerability (>90% imported) and evaluate its '30 by 30' agri-tech strategy.",
      "State Earth's freshwater breakdown (~97.5% ocean, ~2.5% freshwater, <1% accessible surface water).",
      "Distinguish physical water scarcity (e.g., Middle East) from economic water scarcity (e.g., DRC / Sub-Saharan Africa).",
      "Explain virtual water and how transboundary rivers (e.g., Nile/GERD) trigger upstream–downstream tension.",
      "Name all Four National Taps of Singapore and evaluate each tap's resilience, cost and environmental trade-offs.",
      "Explain the three purification stages of NEWater (Microfiltration → Reverse Osmosis → UV disinfection).",
      "Explain how demand-side measures (pricing, WELS ticks, smart meters, 130 L/day target) complement supply-side water engineering.",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: 'Buying local food always has a lower carbon footprint than imported food.'",
        right: "Write Instead ✅: 'Production method and food type (e.g., beef methane or heated greenhouses) usually outweigh food miles, except when imported produce is air-freighted.'",
      },
      {
        wrong: "Never Write ❌: 'A circular economy just means recycling more plastic bottles.'",
        right: "Write Instead ✅: 'A circular economy designs waste out from the start and prioritises reducing, repairing, reusing and remanufacturing before recycling.'",
      },
      {
        wrong: "Never Write ❌: 'Water scarcity only happens in deserts with very low rainfall.'",
        right: "Write Instead ✅: 'Arid areas face physical water scarcity, whereas wet low-income regions can suffer economic water scarcity when they lack pipes, treatment plants and funding.'",
      },
      {
        wrong: "Never Write ❌: 'Singapore is water-stressed because it has a dry climate with little rain.'",
        right: "Write Instead ✅: 'Singapore gets ~2,400 mm of tropical rain per year, but its tiny land area, dense population and lack of aquifers limit natural water storage.'",
      },
      {
        wrong: "Never Write ❌: 'Desalination solves water scarcity cleanly with no downsides.'",
        right: "Write Instead ✅: 'Desalination is drought-proof, but reverse osmosis of seawater is energy-intensive, costly and produces salty brine waste that must be managed carefully.'",
      },
      {
        wrong: "Never Write ❌: 'NEWater is piped straight from toilets into household drinking taps.'",
        right: "Write Instead ✅: 'NEWater is ultra-clean water reclaimed through microfiltration, reverse osmosis and UV disinfection; most supplies wafer-fab industry and a small share tops up reservoirs before standard treatment.'",
      },
    ],
    examMistakes: [
      "Confusing total national ecological footprint with per-capita ecological footprint when comparing populous NEEs (e.g., India) with smaller HICs (e.g., Singapore or UK).",
      "Claiming food miles measure total carbon footprint — always specify that food miles measure transport distance only.",
      "Forgetting the air-freight exception: container ships have low emissions per tonne-km, whereas air freight has roughly 50× higher emissions.",
      "Stating that 2.5% of Earth's water is accessible drinking water — most of that 2.5% is frozen in glaciers (~69%) or deep groundwater (~30%), leaving <1% readily accessible.",
      "Mixing up physical water scarcity and economic water scarcity when interpreting a world map of Sub-Saharan Africa vs MENA.",
      "Listing only supply-side taps for Singapore water management and forgetting demand-side conservation (water pricing, WELS ticks, 130 L/day target).",
      "Putting the NEWater purification stages in the wrong order — remember Microfiltration comes first, then Reverse Osmosis, then UV disinfection.",
    ],
    mnemonics: [
      {
        topic: "Singapore's Four National Taps",
        device: "L-I-N-D (Local, Imported, NEWater, Desalination)",
        explanation: "First two (L & I) rely on weather/neighbours; last two (N & D) are engineered and drought-resilient.",
      },
      {
        topic: "NEWater 3-Stage Process",
        device: "M-R-U (Microfiltration → Reverse Osmosis → UV)",
        explanation: "Think 'M-R-U clean?': Microfiltration blocks particles/bacteria, Reverse Osmosis blocks viruses/salts, UV destroys any last microbes.",
      },
      {
        topic: "Four Pillars of Food Security",
        device: "A-A-U-S (Availability, Access, Utilisation, Stability)",
        explanation: "Food must be grown (Availability), affordable/reachable (Access), nutritious/safe (Utilisation), and reliable over time (Stability).",
      },
    ],
    realWorld: [
      {
        title: "Marina Barrage, Singapore",
        detail: "Completed in 2008 across Marina Channel, creating Singapore's 15th reservoir right in the downtown core while protecting low-lying Chinatown and Boat Quay from tidal floods.",
        emoji: "🏙️",
      },
      {
        title: "Sky Greens & Vertical Farms in Lim Chu Kang",
        detail: "Rotating hydraulic vertical towers and indoor LED hydroponic farms help Singapore grow leafy greens year-round on tiny plots toward the '30 by 30' goal.",
        emoji: "🥬",
      },
      {
        title: "Grand Ethiopian Renaissance Dam (GERD)",
        detail: "Africa's largest hydroelectric dam on the Blue Nile highlights how upstream development and downstream water security must be balanced across borders.",
        emoji: "🌊",
      },
      {
        title: "Agbogbloshie E-Waste Hub, Ghana",
        detail: "Discarded electronics exported from HICs were dismantled informally to recover copper, exposing workers and nearby rivers to lead and toxic fumes.",
        emoji: "💻",
      },
      {
        title: "Keppel Marina East Desalination Plant",
        detail: "Singapore's first large-scale dual-mode desalination plant can switch between treating freshwater from Marina Reservoir during wet spells and seawater during droughts.",
        emoji: "⚙️",
      },
    ],
    videos: [
      {
        title: "Singapore's Four National Taps & NEWater Explained",
        channel: "PUB Singapore / Geography Search",
        url: "https://www.youtube.com/results?search_query=Singapore+Four+National+Taps+NEWater+PUB+geography",
      },
      {
        title: "Food Miles vs Total Carbon Footprint — Does Eating Local Matter?",
        channel: "Our World in Data / Kurzgesagt Search",
        url: "https://www.youtube.com/results?search_query=food+miles+vs+carbon+footprint+what+you+eat+geography",
      },
      {
        title: "Physical vs Economic Water Scarcity & Virtual Water",
        channel: "GCSE & Year 9 Geography Search",
        url: "https://www.youtube.com/results?search_query=physical+vs+economic+water+scarcity+virtual+water+geography",
      },
      {
        title: "Linear vs Circular Economy & Earth Overshoot Day",
        channel: "Ellen MacArthur Foundation Search",
        url: "https://www.youtube.com/results?search_query=circular+economy+explained+Ellen+MacArthur+Foundation",
      },
    ],
    formulas: [
      { name: "Ecological Footprint", formula: "Productive land & sea area (gha) required to supply resources and absorb CO₂ waste", note: "Global biocapacity ≈ 1.6 gha/person." },
      { name: "Earths Needed", formula: "{{(Per-capita Footprint) / (Global Biocapacity)}}", note: "Using global biocapacity ≈ 1.6 gha/person." },
      { name: "Ecological Deficit", formula: "Ecological Footprint − Local Biocapacity", note: "Positive value means demand exceeds local regeneration." },
      { name: "Circular Economy", formula: "Design out waste → Repair, Reuse, Remanufacture, Recycle → Regenerate nature", note: "Contrasts with linear 'take–make–waste'." },
      { name: "Food Security", formula: "Availability + Economic/Physical Access + Nutritious Utilisation + Stability", note: "FAO four-pillar definition." },
      { name: "Food Miles", formula: "Distance travelled by food from farm to consumer (km or miles)", note: "Measures transport distance only — NOT full carbon footprint." },
      { name: "Singapore '30 by 30'", formula: "Produce 30% of Singapore's nutritional needs locally by 2030", note: "Uses <1% land area via vertical farms & aquaculture." },
      { name: "Earth's Accessible Freshwater", formula: "97.5% Saline · 2.5% Freshwater · <1% Accessible Surface Freshwater", note: "~69% of freshwater is frozen in glaciers/ice caps." },
      { name: "Water Stress & Scarcity", formula: "Stress < 1,700 m³/person/yr · Scarcity < 1,000 m³/person/yr", note: "Absolute scarcity < 500 m³/person/yr." },
      { name: "Virtual Water", formula: "Hidden total freshwater embedded across growing & manufacturing a good", note: "Beef ≈ 15,400 L/kg; Cotton T-shirt ≈ 2,700 L." },
      { name: "Singapore's Four Taps", formula: "Local Catchment + Imported (Johor) + NEWater + Desalination", note: "Supported by 130 L/person/day 2030 demand target." },
      { name: "NEWater Process", formula: "Microfiltration → Reverse Osmosis (RO) → Ultraviolet (UV) Disinfection", note: "Weather-independent reclaimed water." },
    ],
  },
};
