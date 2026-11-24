import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "fast-fashion-interconnections-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "global-garment-chains",
      question: "A fast-fashion shirt sells for $25 in a city mall. If the garment worker earns 2% of the retail price, how many dollars does the worker earn per shirt? (Give your answer as a decimal.)",
      answer: { type: "number", value: 0.5, display: "$0.5" },
      traps: [
        { spec: { type: "number", value: 5 }, feedback: "$5 is 20% of $25 — divide by 10 to find 2% ($0.50)." },
      ],
      solution: [
        "1% of $25 = $0.25.",
        "2% of $25 = 2 × $0.25 = $0.50 (or $0.5).",
      ],
      hints: [
        "Calculate 0.02 × 25.",
      ],
    },
    {
      id: "fast-fashion-interconnections-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "global-garment-chains",
      question: "Which transport innovation lowered international shipping costs to just a few cents per T-shirt, fuelling outsourced garment chains?",
      options: [
        "Standardised intermodal containerisation",
        "Supersonic passenger jet aviation",
        "Underground high-pressure pipeline grids",
        "Horse-drawn continental canal barges",
      ],
      answerIndex: 0,
      explanation:
        "Standardised steel shipping containers (TEUs) let cranes transfer thousands of boxes swiftly between mega-ships, trains and trucks, slashing ocean freight cost per garment.",
      hints: [
        "Think about the giant standardised steel boxes stacked on mega-vessels at the Port of Singapore.",
      ],
    },
    {
      id: "fast-fashion-interconnections-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "fast-fashion-impacts",
      question: "Approximately how many litres of freshwater are used to produce 3 conventional cotton T-shirts (using 2,700 L per T-shirt)?",
      answer: { type: "number", value: 8100, display: "8100 L" },
      traps: [
        { spec: { type: "number", value: 2700 }, feedback: "2,700 L is for 1 T-shirt — multiply by 3 T-shirts!" },
      ],
      solution: [
        "3 × 2,700 = 8,100 litres.",
      ],
      hints: [
        "Multiply 2,700 L by 3.",
      ],
    },
    {
      id: "fast-fashion-interconnections-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "fast-fashion-impacts",
      question: "Name the Central Asian inland lake that shrank by roughly 90% after the Amu Darya and Syr Darya rivers were diverted to irrigate desert cotton.",
      answer: {
        type: "text",
        accept: ["aral sea", "the aral sea"],
        display: "Aral Sea",
      },
      solution: [
        "Diverting the Amu Darya and Syr Darya for Soviet cotton irrigation shrank the Aral Sea by ~90%.",
      ],
      hints: [
        "It lies on the border between Uzbekistan and Kazakhstan and starts with the letter A.",
      ],
    },
    {
      id: "fast-fashion-interconnections-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "fast-fashion-impacts",
      question: "What tiny water pollutant is shed every time polyester or nylon sportswear is washed in a household laundry machine?",
      options: [
        "Natural organic peat fibres",
        "Synthetic plastic microfibres",
        "Heavy volcanic tephra particles",
        "Dissolved limestone calcium salts",
      ],
      answerIndex: 1,
      explanation:
        "Polyester and nylon are oil-derived plastics; washing sheds hundreds of thousands of microscopic plastic microfibres per load into rivers and marine food chains.",
      hints: [
        "Remember polyester is a synthetic plastic fibre.",
        "The prefix 'micro-' describes their microscopic size.",
      ],
    },
    {
      id: "fast-fashion-interconnections-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "sustainable-slow-fashion",
      question: "A durable organic-cotton coat costs $96 and is worn 60 times. Calculate its cost per wear in dollars.",
      answer: { type: "number", value: 1.6, display: "$1.6" },
      solution: [
        "Cost per wear = Price ÷ Number of wears.",
        "{{96 / 60}} = $1.60 (or $1.6).",
      ],
      hints: [
        "Divide the total price ($96) by the number of wears (60).",
        "Simplify 96/60 = 16/10 = 1.6.",
      ],
    },
    {
      id: "fast-fashion-interconnections-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "sustainable-slow-fashion",
      question: "What is 'greenwashing' in the fashion industry?",
      options: [
        "Using cold-water laundry settings to cut household electricity use",
        "Dyeing organic linen fabric using plant-based chlorophyll extracts",
        "Using misleading eco-friendly marketing to hide unchanged mass overproduction",
        "Treating textile factory wastewater through reed-bed wetland filters",
      ],
      answerIndex: 2,
      explanation:
        "Greenwashing describes exaggerated or misleading sustainability claims — such as advertising a tiny 'conscious' range while keeping factories secret and pumping out 52 micro-seasons a year.",
      hints: [
        "Think about brands trying to look 'green' in adverts without changing their polluting core model.",
        "It is a marketing deception, not an actual laundry or dyeing method.",
      ],
    },
    {
      id: "fast-fashion-interconnections-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "year9-geo-skills",
      question: "A textile hub's annual exports rose from $20 billion in 2014 to $35 billion in 2024. Calculate the percentage increase.",
      answer: { type: "number", value: 75, display: "75%" },
      traps: [
        { spec: { type: "number", value: 42.9, tolerance: 0.2 }, feedback: "Divide the increase ($15 bn) by the ORIGINAL 2014 value ($20 bn), not the new $35 bn!" },
        { spec: { type: "number", value: 15 }, feedback: "$15 billion is the absolute increase — divide by 20 and multiply by 100 for percentage increase." },
      ],
      solution: [
        "Increase = 35 − 20 = 15 billion.",
        "Percentage increase = {{15 / 20 * 100}} = 75%.",
      ],
      hints: [
        "Use ((New − Old) ÷ Old) × 100.",
        "Compute (15 ÷ 20) × 100.",
      ],
    },
    {
      id: "fast-fashion-interconnections-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "year9-geo-skills",
      question: "In TEA graph analysis, what does the letter 'A' instruct you to identify?",
      options: [
        "The title printed at the top of the vertical axis",
        "The total area shaded inside the bars of the chart",
        "The average arithmetic mean of every year shown",
        "Any anomaly or outlier that breaks the main pattern",
      ],
      answerIndex: 3,
      explanation:
        "TEA stands for Trend (overall pattern), Evidence (exact data values + units) and Anomaly (any data point that clearly breaks the overall trend, such as a 2020 COVID dip).",
      hints: [
        "T = Trend, E = Evidence, A = ____.",
        "Think about the word geographers use for an exception or outlier.",
      ],
    },
    {
      id: "fast-fashion-interconnections-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "fast-fashion-impacts",
      marks: 3,
      question: "Explain why geographers view Bangladesh's garment industry as having BOTH serious social negatives and important economic positives.",
      modelAnswer:
        "On the negative side, intense cost pressure from global TNCs has resulted in poverty wages, long 12–14 hour shifts and neglected building safety — tragically exposed by the 2013 Rana Plaza collapse in Dhaka which killed 1,134 workers. On the positive side, the garment sector provides formal employment for over 4 million people (mostly women, boosting their financial independence) and generates over 80% of Bangladesh's export earnings, funding better schooling, healthcare and poverty reduction.",
      markScheme: [
        {
          point: "Social negative: low/poverty wages, excessive overtime or unsafe buildings",
          keywords: ["low wage", "poverty wage", "overtime", "unsafe", "12", "exploit"],
        },
        {
          point: "Named disaster evidence: Rana Plaza collapse (2013) killing 1,134 workers",
          keywords: ["rana plaza", "2013", "1,134", "1134", "collapse"],
        },
        {
          point: "Economic positive: >4 million jobs (mostly women) and/or >80% of export earnings lifting families out of poverty",
          keywords: ["4 million", "women", "80%", "export", "income", "poverty reduction", "multiplier"],
        },
      ],
      hints: [
        "Name the specific 2013 Dhaka building collapse and death toll for your negative evidence.",
        "Balance with Bangladesh's workforce (>4 million, mostly women) and export share (>80%).",
      ],
      commonError: "Writing only about Rana Plaza and forgetting the >4 million jobs and >80% export income that support millions of families.",
    },
  ],
  papers: [
    {
      id: "fast-fashion-interconnections-p1",
      title: "Practice Paper 1 — Fast Fashion Chains, Impacts & Skills",
      questions: [
        {
          id: "fast-fashion-interconnections-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "global-garment-chains",
          question: "What three-letter geographical acronym describes a giant company like Inditex (Zara) or H&M that operates design, manufacturing and retail across multiple countries?",
          answer: {
            type: "text",
            accept: ["tnc", "tncs", "transnational corporation", "transnational corporations"],
            display: "TNC",
          },
          solution: [
            "TNC stands for Transnational Corporation — a large business operating across national borders.",
          ],
          hints: [
            "It stands for Trans-National ____.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "global-garment-chains",
          question: "A fast-fashion dress retails for $60. If retail overhead and brand profit take 55% of the price and the garment worker receives 2%, how many MORE dollars go to brand/retail than to the worker?",
          answer: { type: "number", value: 31.8, display: "$31.8" },
          traps: [
            { spec: { type: "number", value: 33 }, feedback: "$33 is the brand/retail share (55%) — subtract the worker's 2% ($1.20)!" },
          ],
          solution: [
            "Brand/retail share = 55% of $60 = 0.55 × 60 = $33.00.",
            "Worker wage = 2% of $60 = 0.02 × 60 = $1.20.",
            "Difference = 33.00 − 1.20 = $31.80 (or 53% × $60 = $31.80).",
          ],
          hints: [
            "Find the difference in percentages first: 55% − 2% = 53%.",
            "Calculate 53% of $60 (0.53 × 60).",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "global-garment-chains",
          question: "Which stage of the fast-fashion supply chain is MOST likely to remain located inside an HIC such as Spain, Sweden or the UK?",
          options: [
            "Hand-picking raw cotton across irrigated semi-arid plantations",
            "Design, global marketing, brand headquarters and flagship retail",
            "Bulk wet-dyeing of denim fabric beside low-cost industrial rivers",
            "High-volume stitching of bargain T-shirts for $0.40 labour cost",
          ],
          answerIndex: 1,
          explanation:
            "TNCs retain high-skill, high-margin headquarters, trend design, marketing and retail management in HICs while outsourcing resource- and labour-intensive stages to NEEs/LICs.",
          hints: [
            "Think about which stage captures ~50%–60% of the retail value.",
            "TNCs keep white-collar creative and corporate roles near wealthy consumer markets.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q04",
          kind: "written",
          difficulty: "core",
          guideRef: "global-garment-chains",
          marks: 3,
          question: "Explain three reasons why fast-fashion TNCs outsource garment stitching to NEEs and LICs such as Bangladesh and Vietnam.",
          modelAnswer:
            "First, factory wage rates in Bangladesh and Vietnam are far lower than in HICs, sharply reducing unit production costs and widening TNC profit margins. Second, containerisation using standardised steel shipping containers has made intercontinental ocean freight cheap and reliable (just cents per T-shirt), removing the old distance penalty. Third, looser environmental and labour enforcement alongside lower factory rents and taxes allow rapid 52-micro-season turnaround at minimal overhead.",
          markScheme: [
            {
              point: "Much lower labour costs / wages cutting production costs and boosting profit",
              keywords: ["lower wage", "cheap labour", "cheap labor", "labour cost", "labor cost", "profit"],
            },
            {
              point: "Containerisation / cheap global shipping making long-distance transport pennies per item",
              keywords: ["container", "shipping", "freight", "transport", "port"],
            },
            {
              point: "Weaker labour/environmental regulations, lower rent/taxes OR established textile clusters & speed",
              keywords: ["regulat", "tax", "rent", "overhead", "cluster", "micro-season", "law"],
            },
          ],
          hints: [
            "Start with the biggest cost difference between HICs and LICs/NEEs: wages.",
            "Add the transport breakthrough that made shipping garments across oceans dirt cheap.",
            "Include factory rents, taxes or weaker environmental/labour regulation.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "fast-fashion-impacts",
          question: "A cotton T-shirt needs 2,700 L of freshwater and a pair of jeans needs 7,500 L. If a shopper buys 6 T-shirts and 2 pairs of jeans, how many litres of virtual water are embedded in total?",
          answer: { type: "number", value: 31200, display: "31200 L" },
          traps: [
            { spec: { type: "number", value: 16200 }, feedback: "16,200 L is only the 6 T-shirts — remember to add the 2 pairs of jeans (15,000 L)!" },
          ],
          solution: [
            "6 T-shirts = 6 × 2,700 = 16,200 L.",
            "2 pairs of jeans = 2 × 7,500 = 15,000 L.",
            "Total = 16,200 + 15,000 = 31,200 L.",
          ],
          hints: [
            "Calculate 6 × 2,700 and 2 × 7,500 separately.",
            "Add 16,200 and 15,000 together.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "fast-fashion-impacts",
          question: "In which year did the Rana Plaza garment factory complex in Dhaka, Bangladesh collapse, killing 1,134 workers?",
          answer: { type: "number", value: 2013, display: "2013" },
          solution: [
            "The Rana Plaza complex collapsed on 24 April 2013.",
          ],
          hints: [
            "It happened on 24 April in the early 2010s.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q07",
          kind: "written",
          difficulty: "core",
          guideRef: "fast-fashion-impacts",
          marks: 4,
          question: "Explain how fast-fashion production and disposal harm rivers, seas and land ecosystems, using two named case studies or mechanisms.",
          modelAnswer:
            "First, growing irrigated cotton drains major watersheds: diverting the Amu Darya and Syr Darya rivers for desert cotton shrank the Aral Sea by ~90%, collapsing fisheries and leaving toxic pesticide-laced salt dust storms. Second, textile dyeing accounts for ~20% of global industrial wastewater, dumping untreated azo dyes and heavy metals into rivers like Dhaka's Buriganga River and poisoning aquatic life. Third, washing synthetic polyester garments sheds microscopic plastic microfibres into marine food chains. Finally, discarded unsold and charity garments form giant waste piles in places like Chile's Atacama Desert and Accra, Ghana, where synthetics take centuries to break down.",
          markScheme: [
            {
              point: "Water extraction / Aral Sea ~90% shrinkage from cotton river diversion (or 2,700 L/shirt)",
              keywords: ["aral sea", "90%", "amu darya", "syr darya", "2,700", "2700", "irrigat"],
            },
            {
              point: "Toxic textile dyes / heavy metals polluting rivers (~20% industrial wastewater, e.g., Buriganga)",
              keywords: ["dye", "wastewater", "20%", "buriganga", "chromium", "toxic", "chemical"],
            },
            {
              point: "Polyester/synthetic laundry shedding plastic microfibres into oceans/food chains",
              keywords: ["microfibre", "microfiber", "microplastic", "polyester", "synthetic", "marine"],
            },
            {
              point: "Textile landfill / waste dumps in named locations (Atacama Desert, Chile or Kantamanto/Accra, Ghana)",
              keywords: ["atacama", "chile", "ghana", "accra", "kantamanto", "landfill", "waste mountain"],
            },
          ],
          hints: [
            "Cover four distinct pathways: water depletion (Aral Sea), river dye pollution, ocean microfibres and land waste (Atacama/Ghana).",
            "Include specific statistics (~90%, ~20%, ~2,700 L) to strengthen your evidence.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "sustainable-slow-fashion",
          question: "Which action cuts the environmental footprint of an existing wardrobe the MOST with zero extra manufacturing emissions?",
          options: [
            "Replacing ten cotton T-shirts every season with ten brand-new polyester shirts",
            "Donating barely worn outfits monthly so they can be shipped to overseas markets",
            "Wearing garments twice as long, mending minor tears and swapping with friends",
            "Buying a brand-new 'eco-capsule' outfit for every single weekend micro-season",
          ],
          answerIndex: 2,
          explanation:
            "Extending the active life of clothes already made avoids 100% of new fibre farming, dyeing and shipping emissions; wearing a garment twice as long immediately cuts its footprint per wear by 50%.",
          hints: [
            "Recall the circular motto: 'the most sustainable garment is the one already in your wardrobe'.",
            "Which option avoids creating ANY new garments?",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "sustainable-slow-fashion",
          question: "A fast-fashion shirt costs $15 and is worn 5 times. A slow-fashion shirt costs $54 and is worn 45 times. How many dollars cheaper PER WEAR is the slow-fashion shirt?",
          answer: { type: "number", value: 1.8, display: "$1.8" },
          traps: [
            { spec: { type: "number", value: 39 }, feedback: "$39 is the difference in upfront tag price — compute cost per wear (Price ÷ Wears) for each shirt first!" },
            { spec: { type: "number", value: 1.2 }, feedback: "$1.20 is the slow-fashion shirt's cost per wear — subtract it from the fast-fashion shirt's $3.00/wear." },
          ],
          solution: [
            "Fast-fashion cost/wear = {{15 / 5}} = $3.00.",
            "Slow-fashion cost/wear = {{54 / 45}} = $1.20.",
            "Difference = 3.00 − 1.20 = $1.80 cheaper per wear.",
          ],
          hints: [
            "Calculate $15 ÷ 5 for the fast-fashion shirt.",
            "Calculate $54 ÷ 45 for the slow-fashion shirt, then subtract.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "year9-geo-skills",
          question: "Six garment factories reported weekly overtime hours per worker as: 8, 12, 10, 14, 16, 12. Calculate the arithmetic MEAN weekly overtime (in hours).",
          answer: { type: "number", value: 12, display: "12" },
          traps: [
            { spec: { type: "number", value: 8 }, feedback: "8 is the range (16 − 8) — sum all six numbers and divide by 6 for the mean." },
          ],
          solution: [
            "Sum = 8 + 12 + 10 + 14 + 16 + 12 = 72.",
            "Mean = {{72 / 6}} = 12 hours.",
          ],
          hints: [
            "Add all 6 numbers together carefully.",
            "Divide the total by 6.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "year9-geo-skills",
          question: "The surface area of the Aral Sea fell from 68,000 km² in 1960 to 6,800 km² in 2010. Calculate the percentage decrease.",
          answer: { type: "number", value: 90, display: "90%" },
          traps: [
            { spec: { type: "number", value: 10 }, feedback: "10% is the area REMAINING — the percentage DECREASE is 100% − 10% = 90%!" },
          ],
          solution: [
            "Decrease = 68,000 − 6,800 = 61,200 km².",
            "Percentage decrease = {{61200 / 68000 * 100}} = 90%.",
          ],
          hints: [
            "Find the decrease: 68,000 − 6,800 = 61,200.",
            "Divide 61,200 by the ORIGINAL 1960 area (68,000) and multiply by 100.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "year9-geo-skills",
          question: "Which statement correctly pairs a map type with one genuine strength and one genuine limitation?",
          options: [
            "Choropleth: shows exact town-level totals; cannot display national averages",
            "Proportional symbol: shows exact totals without area distortion; large circles can overlap",
            "Proportional symbol: shades regions uniformly; hides variation inside large countries",
            "Choropleth: prevents symbols overlapping; eliminates abrupt jumps at national borders",
          ],
          answerIndex: 1,
          explanation:
            "Proportional symbols accurately represent total magnitudes regardless of country size (strength), but crowded regions cause circles to overlap (limitation). Choropleths shade regional rates uniformly and hide internal variation.",
          hints: [
            "Distinguish shaded-area maps (choropleth) from scaled-circle maps (proportional symbol).",
            "Think about what happens when two huge export countries sit right next to each other on a proportional circle map.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "year9-geo-skills",
          question: "Find the MEDIAN of these five monthly garment worker wages (in US$): 140, 115, 210, 125, 130.",
          answer: { type: "number", value: 130, display: "$130" },
          traps: [
            { spec: { type: "number", value: 210 }, feedback: "Sort the numbers in ascending order BEFORE picking the middle value!" },
            { spec: { type: "number", value: 144 }, feedback: "$144 is the arithmetic mean — for the median, sort the five values and pick the 3rd one." },
          ],
          solution: [
            "Sort in ascending order: 115, 125, 130, 140, 210.",
            "The middle (3rd) value is $130.",
          ],
          hints: [
            "Always put the numbers in order from smallest to largest FIRST!",
            "Pick the exact middle (3rd of 5) number.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "year9-geo-skills",
          marks: 3,
          question: "A line graph shows global synthetic fibre production (million tonnes): 2000 = 32; 2005 = 42; 2010 = 54; 2015 = 68; 2020 = 60; 2024 = 80. Describe this graph using T-E-A (Trend, Evidence, Anomaly).",
          modelAnswer:
            "Overall, there is a strong upward trend in global synthetic fibre production between 2000 and 2024. Specifically, output rose from 32 million tonnes in 2000 to 80 million tonnes in 2024 — an increase of 48 million tonnes (+150%). However, 2020 stands out as a clear anomaly, breaking the steady rise with a temporary dip from 68 million tonnes in 2015 down to 60 million tonnes before rebounding sharply.",
          markScheme: [
            {
              point: "Trend: identifies a strong/steady overall upward trend / increase from 2000 to 2024",
              keywords: ["upward", "increas", "rising", "rose", "positive trend", "overall rise"],
            },
            {
              point: "Evidence: quotes exact start/end values with units (32 to 80 million tonnes) and/or change (+48 million tonnes / +150%)",
              keywords: ["32", "80", "million tonnes", "48", "150%"],
            },
            {
              point: "Anomaly: identifies 2020 (dip to 60 million tonnes) as the outlier breaking the trend",
              keywords: ["anomaly", "outlier", "2020", "60", "dip", "drop"],
            },
          ],
          hints: [
            "Write one crisp sentence each for Trend, Evidence and Anomaly.",
            "Include units (million tonnes) and calculate the total increase (80 − 32 = 48, or +150%).",
            "Spot which year went DOWN instead of up!",
          ],
        },
        {
          id: "fast-fashion-interconnections-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "sustainable-slow-fashion",
          marks: 4,
          question: "Explain two ways brands and governments (not just shoppers) can make the fashion industry more ethical and circular.",
          modelAnswer:
            "First, brands can commit to legally binding safety and ethical standards such as the Bangladesh Accord on Fire and Building Safety and Fairtrade Cotton, ensuring independent factory inspections, living wages and a guaranteed minimum price plus community premium for cotton farmers instead of empty greenwashing. Second, governments can enforce Extended Producer Responsibility (EPR) laws, digital product passports and bans on destroying unsold stock — charging higher fees on unrecyclable blended fast-fashion garments to fund national textile repair, collection and closed-loop recycling schemes.",
          markScheme: [
            {
              point: "Corporate/brand measure named (e.g., Bangladesh Accord, Fairtrade, living wages, supply-chain transparency, mono-material/closed-loop design)",
              keywords: ["accord", "fairtrade", "living wage", "transparen", "closed-loop", "mono-material", "organic"],
            },
            {
              point: "Explains HOW that brand measure protects workers/farmers or reduces environmental harm",
              keywords: ["inspect", "minimum price", "premium", "safe", "greenwash", "pesticide", "verify"],
            },
            {
              point: "Government policy named (e.g., EPR / Extended Producer Responsibility, repair bonus, digital passport, ban burning unsold stock)",
              keywords: ["epr", "extended producer", "repair bonus", "digital", "passport", "ban", "law", "regulat"],
            },
            {
              point: "Explains HOW that government law changes incentives or funds circular end-of-life management",
              keywords: ["fee", "fund", "polluter", "incentiv", "recycl", "collect", "repair"],
            },
          ],
          hints: [
            "Pick one brand-level action (e.g., Bangladesh Accord or Fairtrade) and explain its mechanism.",
            "Pick one government law (e.g., EPR or France's repair bonus) and explain how it forces systemic change.",
          ],
        },
      ],
    },
    {
      id: "fast-fashion-interconnections-p2",
      title: "Practice Paper 2 — Synthesis, Evaluation & Geo-Skills Mastery",
      questions: [
        {
          id: "fast-fashion-interconnections-p2-q01",
          kind: "mcq",
          difficulty: "core",
          guideRef: "global-garment-chains",
          question: "A European clothing TNC cancels $10 million of finished factory orders overnight during a sudden downturn, refusing to pay for cloth already stitched in Dhaka. Which term describes this structural power imbalance?",
          options: [
            "Equal cooperative partnership between rural farmers and HIC retail boards",
            "Vertical indoor hydroponic integration across equatorial city-states",
            "Footloose TNC buyer power shifting financial risk onto low-margin LIC suppliers",
            "Extended Producer Responsibility subsidising factory safety upgrades",
          ],
          answerIndex: 2,
          explanation:
            "Because fast-fashion TNCs control brand access and can shift orders globally ('footloose capital'), small supplier factories in LICs bear sudden cancellation risks and struggle to pay workers.",
          hints: [
            "Think about who holds the market power in outsourced TNC garment chains.",
            "Remember the term for brands able to shift contracts swiftly between countries.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "fast-fashion-impacts",
          question: "A city imports 50,000 tonnes of second-hand clothing bales from HICs each year, and 40% are too poor quality to resell and end up dumped as waste. How many tonnes of unusable textile waste arrive each year?",
          answer: { type: "number", value: 20000, display: "20000" },
          traps: [
            { spec: { type: "number", value: 30000 }, feedback: "30,000 tonnes is the 60% that IS resold — find 40% of 50,000!" },
          ],
          solution: [
            "40% of 50,000 = 0.40 × 50,000 = 20,000 tonnes.",
          ],
          hints: [
            "Find 10% of 50,000 (= 5,000), then multiply by 4.",
            "Remember 40% is the wasted share, while 60% is resold.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "fast-fashion-impacts",
          question: "A person buys 12 conventional cotton T-shirts per year (2,700 L each). If they switch to slow fashion and buy only 4 T-shirts per year instead, how many litres of virtual water do they save in ONE year?",
          answer: { type: "number", value: 21600, display: "21600 L" },
          traps: [
            { spec: { type: "number", value: 10800 }, feedback: "10,800 L is the water used by the 4 T-shirts bought — the saving is for the 8 T-shirts NOT bought!" },
            { spec: { type: "number", value: 32400 }, feedback: "32,400 L is the original 12 T-shirts — subtract the 4 T-shirts still bought." },
          ],
          solution: [
            "Fewer T-shirts bought = 12 − 4 = 8 T-shirts.",
            "Water saved = 8 × 2,700 = 21,600 litres.",
          ],
          hints: [
            "Find how many FEWER T-shirts are purchased: 12 − 4 = 8.",
            "Multiply 8 by 2,700 L.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "fast-fashion-impacts",
          question: "Why is switching a brand's entire T-shirt line from cotton to virgin polyester a classic geographical 'trade-off' rather than a simple win?",
          options: [
            "Virgin polyester requires ten times more river irrigation than desert cotton",
            "Virgin polyester cuts crop irrigation water, but uses crude oil and sheds marine microfibres",
            "Cotton garments are completely immune to dyeing wastewater pollution in rivers",
            "Polyester biodegrades into harmless plant soil within two weeks inside landfills",
          ],
          answerIndex: 1,
          explanation:
            "Every fibre has trade-offs: virgin polyester uses far less agricultural water than cotton, yet it is derived from fossil oil (higher plastic pollution and carbon) and releases microplastic fibres during every wash.",
          hints: [
            "Compare cotton's main weakness (irrigation water) with polyester's two big weaknesses (crude oil + washing).",
            "A geographical trade-off solves one problem while creating or worsening another.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "sustainable-slow-fashion",
          question: "Name the ethical certification label that guarantees cotton farmers a minimum price safety net plus a community premium for schools, clinics and clean water.",
          answer: {
            type: "text",
            accept: ["fairtrade", "fair trade", "fairtrade cotton", "fair trade cotton"],
            display: "Fairtrade",
          },
          solution: [
            "Fairtrade (Fairtrade Cotton) guarantees both a Fairtrade Minimum Price and a Fairtrade Community Premium.",
          ],
          hints: [
            "It is a famous global ethical trade mark starting with 'Fair…'.",
            "Think of the certification that pairs a minimum price with a community premium.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "sustainable-slow-fashion",
          question: "A cotton T-shirt has a production footprint of 2,700 L of water. If you wear it 45 times instead of 15 times, by how many litres PER WEAR does its water footprint drop?",
          answer: { type: "number", value: 120, display: "120 L" },
          traps: [
            { spec: { type: "number", value: 60 }, feedback: "60 L/wear is the NEW water footprint at 45 wears — subtract 60 from the original 180 L/wear!" },
            { spec: { type: "number", value: 180 }, feedback: "180 L/wear is the original footprint at 15 wears — now subtract the new 60 L/wear." },
          ],
          solution: [
            "At 15 wears: {{2700 / 15}} = 180 L per wear.",
            "At 45 wears: {{2700 / 45}} = 60 L per wear.",
            "Reduction per wear = 180 − 60 = 120 L per wear.",
          ],
          hints: [
            "Compute 2,700 ÷ 15 first, then 2,700 ÷ 45.",
            "Subtract the smaller rate from the larger rate.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q07",
          kind: "written",
          difficulty: "core",
          guideRef: "sustainable-slow-fashion",
          marks: 3,
          question: "Explain why 'wearing clothes longer and repairing them' sits higher on the circular fashion hierarchy than 'recycling old T-shirts into new fabric'.",
          modelAnswer:
            "Extending the active life of an existing garment through repair or longer wear requires almost zero new raw materials, water or factory energy — doubling wears immediately halves the water and carbon footprint per wear. By contrast, textile recycling still consumes electricity, transport fuel and water to shred and re-spin yarn, and often fails on blended cotton–polyester fabrics, causing fibre weakening (downcycling) into lower-grade rags or insulation.",
          markScheme: [
            {
              point: "Wearing longer / repairing avoids new farming, dyeing and manufacturing energy (halving footprint per wear)",
              keywords: ["zero new", "avoids", "halves", "50%", "no new", "existing", "embodied"],
            },
            {
              point: "Recycling still consumes energy, transport or water to shred and re-process textiles",
              keywords: ["energy", "electricity", "shred", "re-spin", "process", "still uses"],
            },
            {
              point: "Technical limit of textile recycling: cotton–polyester blends are hard to separate and fibres weaken (downcycling)",
              keywords: ["blend", "mixed", "separate", "downcycl", "weaken", "rag", "insulation"],
            },
          ],
          hints: [
            "Compare zero new manufacturing inputs against the energy needed to shred and re-spin old cloth.",
            "Remember the technical hurdle with cotton–polyester blended fabrics!",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "year9-geo-skills",
          question: "A brand cuts its unsold destroyed garments from 120,000 items in 2021 to 30,000 items in 2024. Calculate the percentage decrease.",
          answer: { type: "number", value: 75, display: "75%" },
          traps: [
            { spec: { type: "number", value: 25 }, feedback: "25% is the share STILL remaining (30,000 ÷ 120,000) — the percentage decrease is 75%!" },
          ],
          solution: [
            "Decrease = 120,000 − 30,000 = 90,000 items.",
            "Percentage decrease = {{90000 / 120000 * 100}} = 75%.",
          ],
          hints: [
            "Subtract 30,000 from 120,000 first (= 90,000).",
            "Divide 90,000 by the original 120,000 and multiply by 100.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "year9-geo-skills",
          question: "Monthly rainfall (mm) at a Central Asian cotton station over 6 dry-season months is: 18, 12, 6, 4, 8, 12. Calculate the MEAN monthly rainfall (in mm).",
          answer: { type: "number", value: 10, display: "10" },
          traps: [
            { spec: { type: "number", value: 14 }, feedback: "14 mm is the range (18 − 4) — add all 6 values and divide by 6 for the mean." },
          ],
          solution: [
            "Sum = 18 + 12 + 6 + 4 + 8 + 12 = 60 mm.",
            "Mean = {{60 / 6}} = 10 mm.",
          ],
          hints: [
            "Sum all six rainfall numbers first.",
            "Divide the sum (60) by 6 months.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "year9-geo-skills",
          question: "On a scatter graph of National Income (x-axis) vs Annual Clothes Purchased per Person (y-axis), the dots form a tight upward diagonal from bottom-left to top-right. What correlation does this show?",
          options: [
            "Strong negative correlation",
            "Zero correlation between variables",
            "Strong positive correlation",
            "Seasonal monsoon fluctuation",
          ],
          answerIndex: 2,
          explanation:
            "When y increases consistently as x increases (bottom-left to top-right), the variables show a strong positive correlation — wealthier populations buy far more garments per person.",
          hints: [
            "As National Income goes UP (right), clothes bought goes UP (higher).",
            "Both variables moving up together = positive correlation.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "year9-geo-skills",
          marks: 3,
          question: "Evaluate the usefulness of a world choropleth map showing 'average garment waste per person (kg/year)' by giving one strength and two limitations.",
          modelAnswer:
            "A major strength is instant visual clarity: graduated shading (darker = higher waste) allows geographers to spot global spatial patterns — such as much higher waste in HICs than LICs — at a single glance. However, a first limitation is that national averages conceal huge internal variations within large countries (for example, wealthy urban shoppers in Shanghai or Mumbai generate far more waste than rural villagers). A second limitation is that shading creates artificial sharp jumps at political borders and loses exact numerical values inside broad key bands.",
          markScheme: [
            {
              point: "Strength: quick visual identification of spatial patterns / HIC vs LIC contrast using graduated shading",
              keywords: ["visual", "pattern", "glance", "shading", "graduated", "compare"],
            },
            {
              point: "Limitation 1: hides internal/regional variation inside countries (e.g., rich cities vs rural zones)",
              keywords: ["internal", "within", "hides", "conceal", "average", "urban", "rural"],
            },
            {
              point: "Limitation 2: implies abrupt jumps at political borders OR broad key bands lose exact figures",
              keywords: ["border", "abrupt", "sharp jump", "exact", "band", "category", "range"],
            },
          ],
          hints: [
            "Start with why choropleths are popular: instant visual comparison across countries.",
            "Give limitation 1: what happens inside giant unequal countries like India, China or Brazil?",
            "Give limitation 2: sharp border jumps OR grouped legend intervals hiding exact numbers.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q12",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "fast-fashion-impacts",
          question: "In 2005, Kazakhstan completed the Kok-Aral Dam to isolate the small Northern Aral Sea from the dried southern basin. Water levels rose and fish returned in the north, yet the giant Southern Aral Sea continued vanishing. What geographical lesson does this show?",
          options: [
            "Targeted engineering can partially restore a sub-basin, yet root cotton over-extraction still threatens the wider watershed",
            "Building one dam permanently refilled 100% of the 1960 Aral Sea within twelve months",
            "The Northern Aral Sea refilled because global clothing TNCs stopped selling cotton T-shirts",
            "Saltwater from the Pacific Ocean naturally flowed uphill into Kazakhstan through mountain tunnels",
          ],
          answerIndex: 0,
          explanation:
            "The Kok-Aral Dam saved the smaller North Aral Sea by trapping Syr Darya flow, reviving local fishing — proving restoration is possible locally, while heavy cotton irrigation along the Amu Darya still starves the Southern Aral basin.",
          hints: [
            "Notice the contrast: local success in the North Aral versus continued collapse in the South Aral.",
            "Does isolating one smaller basin stop excessive irrigation along the other river?",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q13",
          kind: "short",
          difficulty: "challenge",
          guideRef: "year9-geo-skills",
          question: "A city's garment reuse rate increased from 8% to 14%. Calculate the RELATIVE percentage increase.",
          answer: { type: "number", value: 75, display: "75%" },
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "6 is the percentage-point difference (14 − 8). Divide 6 by the original 8% and multiply by 100!" },
            { spec: { type: "number", value: 42.9, tolerance: 0.2 }, feedback: "Divide by the ORIGINAL value (8), not the new value (14)." },
          ],
          solution: [
            "Change = 14 − 8 = 6 percentage points.",
            "Relative percentage increase = {{6 / 8 * 100}} = 75%.",
          ],
          hints: [
            "Do NOT stop at 14 − 8 = 6!",
            "Apply ((New − Old) ÷ Old) × 100 = (6 ÷ 8) × 100.",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q14",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "sustainable-slow-fashion",
          question: "Why might an HIC low-income family still buy cheap $10 fast-fashion jumpers even after learning about Rana Plaza and the Aral Sea?",
          options: [
            "Low-income families are banned from entering ethical slow-fashion retail websites",
            "High upfront prices of ethical new brands create an affordability barrier unless thrifting or subsidies exist",
            "Fast-fashion jumpers always last ten times longer than second-hand wool garments",
            "Slow-fashion brands refuse to sell any clothing sizes suitable for school students",
          ],
          answerIndex: 1,
          explanation:
            "A $90 ethical jumper may have a lower cost per wear over 3 years, yet cash-strapped families often cannot afford the $90 upfront outlay — showing why thrifting, repair subsidies and EPR laws are essential for equitable sustainability.",
          hints: [
            "Think about upfront price versus long-term cost per wear for a family on a tight weekly budget.",
            "How do second-hand markets and repair bonuses help make ethical choices affordable?",
          ],
        },
        {
          id: "fast-fashion-interconnections-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "sustainable-slow-fashion",
          marks: 6,
          question: "'Fast fashion brings more harm than good to people and the planet.' To what extent do you agree? Use balanced PEEL paragraphs with named case studies.",
          modelAnswer:
            "I agree to a large extent that fast fashion's current linear model causes severe ecological and social harm, although dismissing its economic benefits in LICs/NEEs would be overly simplistic. On one hand, environmental and safety damages are immense: growing irrigated cotton consumes ~2,700 L per T-shirt and drove ~90% shrinkage of the Aral Sea, dyeing generates ~20% of industrial wastewater, synthetic polyester sheds marine microfibres, and textile waste piles up in Chile's Atacama Desert and Accra, Ghana. Socially, rock-bottom brand orders and neglected safety culminated in the 2013 Rana Plaza collapse in Dhaka (1,134 deaths), with stitchers still earning just ~1%–3% of retail prices. On the other hand, outsourced garment manufacturing has created over 4 million formal jobs in Bangladesh — mostly empowering women with independent income — and generates over 80% of Bangladesh's export revenue, lifting families out of extreme poverty while giving budget-constrained HIC shoppers affordable clothing. Overall, the harms currently outweigh the benefits because environmental and human costs are externalised; however, the best path is not boycotting LIC workers, but transforming the industry through slow fashion, binding safety accords and Extended Producer Responsibility laws.",
          markScheme: [
            {
              point: "Clear evaluative opening thesis ('agree to a large extent' / 'partially agree' with nuance)",
              keywords: ["large extent", "partially", "to some extent", "although", "overall", "however"],
            },
            {
              point: "Environmental harm PEEL evidence (2,700 L / Aral Sea ~90% / ~20% wastewater / microfibres / Atacama or Ghana)",
              keywords: ["aral sea", "2,700", "2700", "microfibre", "atacama", "ghana", "20%"],
            },
            {
              point: "Social harm PEEL evidence (Rana Plaza 2013 / 1,134 deaths / 1%–3% worker wage)",
              keywords: ["rana plaza", "1,134", "1134", "2013", "1%", "2%", "3%", "poverty wage"],
            },
            {
              point: "Counter-argument (economic benefits): >4 million jobs (especially women) and >80% export revenue / poverty reduction",
              keywords: ["4 million", "women", "80%", "export", "jobs", "income", "affordable"],
            },
            {
              point: "Explains causal mechanism / externalised costs or why boycott hurts LIC workers",
              keywords: ["externalis", "boycott", "livelihood", "depend", "poverty", "empower"],
            },
            {
              point: "Weighed conclusion proposing systemic reform (slow fashion, Bangladesh Accord, Fairtrade or EPR laws)",
              keywords: ["accord", "epr", "slow fashion", "fairtrade", "reform", "transform", "conclude"],
            },
          ],
          hints: [
            "Open with a clear nuanced judgement ('I agree to a large extent, although…').",
            "PEEL 1 (Harms): cite Aral Sea (~90%), 2,700 L, microfibres, Atacama/Ghana AND Rana Plaza 2013 (1,134 deaths).",
            "PEEL 2 (Benefits): cite >4 million Bangladesh jobs (mostly women), >80% of exports and affordable clothing.",
            "Conclude by weighing why reforming the industry (Accord, EPR, slow fashion) beats boycotting LIC workers.",
          ],
          commonError: "Writing a purely one-sided essay without mentioning Bangladesh's >4 million jobs and >80% export earnings!",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "fast-fashion-interconnections-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "global-garment-chains",
      question: "A TNC sells a $25 T-shirt where the garment worker earns $0.50 (2%). If the TNC doubles the worker's wage to $1.00 and passes 100% of that extra cost directly onto the retail price, what is the percentage increase in the shop's retail price?",
      answer: { type: "number", value: 2, display: "2%" },
      traps: [
        { spec: { type: "number", value: 100 }, feedback: "100% is the percentage increase in the WORKER'S wage — the shop price only rises from $25 to $25.50!" },
        { spec: { type: "number", value: 0.5 }, feedback: "$0.50 is the dollar increase — divide $0.50 by $25 and multiply by 100 for the percentage increase." },
      ],
      solution: [
        "Extra wage cost = $1.00 − $0.50 = $0.50.",
        "New retail price = $25.00 + $0.50 = $25.50.",
        "Percentage increase in retail price = {{0.50 / 25 * 100}} = 2%!",
      ],
      hints: [
        "Find the new retail price first: $25 + $0.50 = $25.50.",
        "Compute ((25.50 − 25) ÷ 25) × 100.",
      ],
      strategy: "Distinguish percentage change of a component from percentage change of the total.",
    },
    {
      id: "fast-fashion-interconnections-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "fast-fashion-impacts",
      question: "A polyester fleece sheds 250,000 plastic microfibres per wash. A shopper washes it 24 times a year. Installing a washing-machine microfibre filter traps 80% of those fibres. How many microfibres STILL escape into waterways over 1 year?",
      answer: { type: "number", value: 1200000, display: "1200000" },
      traps: [
        { spec: { type: "number", value: 4800000 }, feedback: "4,800,000 is the 80% TRAPPED by the filter — calculate the remaining 20% that still escape!" },
        { spec: { type: "number", value: 6000000 }, feedback: "6,000,000 is the total shed before filtering — remember the filter traps 80%, leaving 20% escaping." },
      ],
      solution: [
        "Total fibres shed per year = 250,000 × 24 = 6,000,000 fibres.",
        "If 80% are trapped, 100% − 80% = 20% still escape.",
        "20% of 6,000,000 = 0.20 × 6,000,000 = 1,200,000 microfibres.",
      ],
      hints: [
        "First find total fibres shed in 24 washes: 250,000 × 24.",
        "If 80% are caught by the filter, what percentage still escapes? (20%.)",
        "Calculate 20% of 6,000,000.",
      ],
      strategy: "Use the complement percentage (100% − 80% = 20%).",
    },
    {
      id: "fast-fashion-interconnections-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sustainable-slow-fashion",
      question: "A shopper chooses ONE durable $72 shirt (12 kg CO₂e, 2,700 L water) worn 60 times instead of SIX cheap $15 shirts (10 kg CO₂e and 2,700 L water EACH) worn 10 times each. How many kg of CO₂e are saved by choosing the single durable shirt?",
      answer: { type: "number", value: 48, display: "48 kg" },
      traps: [
        { spec: { type: "number", value: 60 }, feedback: "60 kg CO₂e is the total of the 6 cheap shirts — remember to subtract the 12 kg CO₂e of the 1 durable shirt!" },
      ],
      solution: [
        "Six cheap shirts: 6 × 10 = 60 kg CO₂e (and 6 × 2,700 = 16,200 L water; cost $90).",
        "One durable shirt: 12 kg CO₂e (and 2,700 L water; cost $72).",
        "CO₂e saved = 60 − 12 = 48 kg CO₂e (an 80% cut, plus 13,500 L water and $18 saved!).",
      ],
      hints: [
        "Find total CO₂e for 6 cheap shirts: 6 × 10 kg.",
        "Subtract the 12 kg CO₂e of the single durable shirt.",
      ],
      strategy: "Compare equal total wears (60 wears vs 60 wears).",
    },
    {
      id: "fast-fashion-interconnections-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "year9-geo-skills",
      question: "A student calculates the mean ecological footprint of 5 countries as 4.0 gha/person, then adds a 6th country (USA at 8.2 gha/person). What is the new mean of all 6 countries?",
      options: [
        "4.7 gha/person",
        "6.1 gha/person",
        "4.2 gha/person",
        "5.6 gha/person",
      ],
      answerIndex: 0,
      explanation:
        "The original 5 countries sum to 5 × 4.0 = 20.0 gha. Adding the 6th country gives 20.0 + 8.2 = 28.2 gha. Dividing by 6 countries: {{28.2 / 6}} = 4.7 gha/person. (Averaging 4.0 and 8.2 directly gives the trap 6.1!)",
      hints: [
        "Never average an old mean directly with one new number!",
        "Find the original total sum first: 5 × 4.0 = 20.0.",
        "Add 8.2 to get 28.2, then divide by 6.",
      ],
      strategy: "Work backwards from Mean to Total Sum first.",
    },
    {
      id: "fast-fashion-interconnections-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "year9-geo-skills",
      diagram: `<svg viewBox="0 0 560 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph showing Aral Sea surface area falling from 68 thousand sq km in 1960 to 10.2 thousand sq km in 2020"><rect x="0" y="0" width="560" height="215" rx="12" fill="var(--surface)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Aral Sea Surface Area (thousand km²), 1960–2020</text><line x1="65" y1="38" x2="65" y2="176" stroke="var(--ink-2)" stroke-width="1.5"/><line x1="65" y1="176" x2="515" y2="176" stroke="var(--ink-2)" stroke-width="1.5"/><text x="57" y="180" text-anchor="end" font-size="9.5" fill="var(--ink-2)">0</text><text x="57" y="146" text-anchor="end" font-size="9.5" fill="var(--ink-2)">20</text><text x="57" y="112" text-anchor="end" font-size="9.5" fill="var(--ink-2)">40</text><text x="57" y="78" text-anchor="end" font-size="9.5" fill="var(--ink-2)">60</text><text x="57" y="44" text-anchor="end" font-size="9.5" fill="var(--ink-2)">80</text><polyline points="90,60 190,82 290,115 390,147 490,159" fill="none" stroke="var(--brand)" stroke-width="2.5"/><circle cx="90" cy="60" r="4.5" fill="var(--brand)"/><text x="90" y="50" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">68.0</text><circle cx="190" cy="82" r="4.5" fill="var(--brand)"/><text x="190" y="72" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">55.0</text><circle cx="290" cy="115" r="4.5" fill="var(--brand)"/><text x="290" y="105" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">36.0</text><circle cx="390" cy="147" r="4.5" fill="var(--brand)"/><text x="390" y="137" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">17.0</text><circle cx="490" cy="159" r="4.5" fill="var(--bad)"/><text x="490" y="149" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">10.2</text><text x="90" y="193" text-anchor="middle" font-size="10" fill="var(--ink-2)">1960</text><text x="190" y="193" text-anchor="middle" font-size="10" fill="var(--ink-2)">1975</text><text x="290" y="193" text-anchor="middle" font-size="10" fill="var(--ink-2)">1990</text><text x="390" y="193" text-anchor="middle" font-size="10" fill="var(--ink-2)">2005</text><text x="490" y="193" text-anchor="middle" font-size="10" fill="var(--ink-2)">2020</text></svg>`,
      question: "Using the graph above, calculate the percentage decrease in the Aral Sea's surface area between 1960 (68.0 thousand km²) and 2020 (10.2 thousand km²).",
      answer: { type: "number", value: 85, display: "85%" },
      traps: [
        { spec: { type: "number", value: 15 }, feedback: "15% is the area still REMAINING (10.2 ÷ 68.0 = 15%) — the percentage DECREASE is 85%!" },
        { spec: { type: "number", value: 57.8 }, feedback: "57.8 thousand km² is the absolute loss — divide 57.8 by 68.0 and multiply by 100." },
      ],
      solution: [
        "Loss in area = 68.0 − 10.2 = 57.8 thousand km².",
        "Percentage decrease = {{57.8 / 68.0 * 100}} = 85%.",
      ],
      hints: [
        "Find the total drop in area: 68.0 − 10.2 = 57.8.",
        "Divide 57.8 by the 1960 starting area (68.0) and multiply by 100.",
      ],
      strategy: "Check complement: 10.2 ÷ 68 = 0.15 remaining → 85% lost.",
    },
    {
      id: "fast-fashion-interconnections-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "sustainable-slow-fashion",
      question: "An ultra-fast online retailer launches an AI demand tool that cuts unsold deadstock from 20% to 5%, while still dropping 5,000 brand-new cheap polyester styles EVERY DAY at $6 each. How should a geographer evaluate this claim of 'sustainability'?",
      options: [
        "It solves all of fast fashion's climate and plastic problems completely",
        "Cutting unsold deadstock helps slightly, yet ultra-fast micro-seasons and cheap polyester still drive huge waste",
        "Dropping 5,000 styles daily reduces total global garment production by half",
        "Cheap $6 polyester dresses automatically eliminate microfibre pollution in oceans",
      ],
      answerIndex: 1,
      explanation:
        "Even with smaller factory deadstock, releasing thousands of disposable $6 polyester styles daily accelerates impulse buying, post-consumer waste mountains (Atacama/Ghana), fossil-fuel CO₂ and marine microfibres — classic partial efficiency masking rising total volume.",
      hints: [
        "Think about the 'rebound effect' — does making less unsold stock fix selling billions of disposable $6 polyester outfits?",
        "Evaluate BOTH the narrow efficiency gain AND the massive volume/material harm.",
      ],
    },
    {
      id: "fast-fashion-interconnections-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "year9-geo-skills",
      marks: 4,
      diagram: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter graph comparing GDP per capita against annual clothing bought per person across 6 countries with Japan as a low-waste anomaly"><rect x="0" y="0" width="560" height="220" rx="12" fill="var(--surface)"/><text x="280" y="21" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">GDP per Capita (US$) vs Annual Garments Bought per Person</text><line x1="65" y1="36" x2="65" y2="176" stroke="var(--ink-2)" stroke-width="1.5"/><line x1="65" y1="176" x2="515" y2="176" stroke="var(--ink-2)" stroke-width="1.5"/><line x1="75" y1="164" x2="490" y2="52" stroke="var(--brand)" stroke-width="1.6" stroke-dasharray="5 4"/><text x="57" y="180" text-anchor="end" font-size="9.5" fill="var(--ink-2)">0</text><text x="57" y="145" text-anchor="end" font-size="9.5" fill="var(--ink-2)">15</text><text x="57" y="110" text-anchor="end" font-size="9.5" fill="var(--ink-2)">30</text><text x="57" y="75" text-anchor="end" font-size="9.5" fill="var(--ink-2)">45</text><text x="57" y="40" text-anchor="end" font-size="9.5" fill="var(--ink-2)">60</text><text x="120" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">$10k</text><text x="230" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">$30k</text><text x="340" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">$50k</text><text x="450" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">$70k</text><circle cx="88" cy="157" r="5" fill="var(--brand)"/><text x="96" y="154" font-size="9.5" font-weight="600" fill="var(--ink)">India ($3k, 8)</text><circle cx="136" cy="134" r="5" fill="var(--brand)"/><text x="144" y="131" font-size="9.5" font-weight="600" fill="var(--ink)">China ($13k, 18)</text><circle cx="290" cy="148" r="6" fill="var(--bad)"/><text x="299" y="146" font-size="9.5" font-weight="700" fill="var(--bad)">Country X ($41k, 12)</text><circle cx="335" cy="96" r="5" fill="var(--brand)"/><text x="343" y="93" font-size="9.5" font-weight="600" fill="var(--ink)">UK ($49k, 34)</text><circle cx="385" cy="78" r="5" fill="var(--brand)"/><text x="393" y="75" font-size="9.5" font-weight="600" fill="var(--ink)">Australia ($60k, 42)</text><circle cx="465" cy="54" r="5" fill="var(--brand)"/><text x="458" y="46" text-anchor="end" font-size="9.5" font-weight="600" fill="var(--ink)">USA ($75k, 52)</text><text x="290" y="209" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Illustrative cross-country comparison (garments/person/year)</text></svg>`,
      question: "Using the scatter graph above, write a complete T-E-A description (3 marks) and suggest ONE geographical reason explaining the anomaly (1 mark).",
      modelAnswer:
        "Trend: There is a strong positive correlation showing that as GDP per capita increases, the number of garments bought per person per year rises sharply. Evidence: India has a low GDP of $3k and buys just 8 garments/person/year, whereas the USA has a high GDP of $75k and buys 52 garments/person/year (a rise of 44 garments, or +550%). Anomaly: Country X breaks the pattern with a relatively high GDP of $41k yet buying only 12 garments/person/year, far below the trend line. Reason for anomaly: Country X may have a strong cultural tradition of minimalist capsule wardrobes, high garment durability and repair, or strict producer-responsibility/eco-taxes discouraging disposable fast fashion.",
      markScheme: [
        {
          point: "Trend: identifies strong positive correlation (higher GDP → more garments purchased)",
          keywords: ["positive correlation", "positive trend", "rises", "increases", "higher gdp"],
        },
        {
          point: "Evidence: quotes exact paired data with units from at least two countries (e.g., India $3k/8 vs USA $75k/52)",
          keywords: ["india", "usa", "52", "75", "8", "3k", "44", "550%"],
        },
        {
          point: "Anomaly: identifies Country X ($41k, 12 garments) sitting well below the trend line",
          keywords: ["country x", "41k", "41", "12", "anomaly", "outlier", "below"],
        },
        {
          point: "Plausible geographical reason for Country X's low buying (minimalist culture, slow fashion, repair, circular laws/taxes)",
          keywords: ["minimalist", "capsule", "repair", "slow fashion", "durab", "tax", "second-hand", "culture", "epr"],
        },
      ],
      hints: [
        "State the correlation direction clearly (positive or negative) for T.",
        "Quote both x and y figures with units for two countries (e.g., India and USA) for E.",
        "Name Country X and its exact coordinates ($41k, 12) for A.",
        "Add one realistic policy or cultural reason why a rich country might buy far fewer clothes.",
      ],
    },
    {
      id: "fast-fashion-interconnections-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "sustainable-slow-fashion",
      marks: 6,
      question: "'Government laws (such as Extended Producer Responsibility and binding factory safety accords) are far more effective than individual consumer choices in solving fast fashion's problems.' To what extent do you agree?",
      modelAnswer:
        "I agree to a large extent that binding government and international laws are the most decisive lever, though informed consumer choices remain an important catalyst. On one hand, individual shoppers face affordability barriers and widespread greenwashing: cash-strapped families may struggle to pay $75 upfront for slow-fashion coats, and voluntary boycotts rarely force footloose TNCs to open their factory lists. By contrast, legally binding rules level the playing field for every brand at once — the 2013 Bangladesh Accord forced >200 TNCs to fund verified structural and fire fixes across thousands of factories, while European Extended Producer Responsibility (EPR) laws, digital product passports, bans on destroying unsold stock and France's repair bonus directly penalise disposable design and subsidise circular mending. On the other hand, individual slow-fashion actions still matter: wearing garments twice as long immediately cuts water and CO₂e per wear by 50%, thrifting and swapping curb demand for 52 micro-seasons, and vocal public campaigns ('Who Made My Clothes?') create the political pressure that convinces governments to pass laws in the first place. Overall, consumer shifts build momentum and shrink personal footprints, but binding laws and producer fees are essential to enforce safe wages and circularity across the entire global supply chain.",
      markScheme: [
        {
          point: "Clear evaluative judgement taking a nuanced stance ('agree to a large extent' / 'partially')",
          keywords: ["large extent", "partially", "decisive", "catalyst", "however", "overall"],
        },
        {
          point: "Explains limits of consumer-only action (affordability/upfront cost, greenwashing, footloose TNCs)",
          keywords: ["afford", "upfront", "greenwash", "footloose", "voluntary", "cannot"],
        },
        {
          point: "Evidence FOR binding laws/regulation (Bangladesh Accord, EPR, digital passports, repair bonus, unsold-stock ban)",
          keywords: ["accord", "epr", "extended producer", "repair bonus", "passport", "binding", "unsold"],
        },
        {
          point: "Explains HOW laws work at scale (level playing field, penalise waste, fund repairs/inspections)",
          keywords: ["level the playing field", "scale", "penalis", "inspect", "every brand", "enforce", "subsidis"],
        },
        {
          point: "Counter-argument FOR individual action (wearing 2× longer = −50%, thrifting/swapping, public pressure/campaigns)",
          keywords: ["50%", "twice as long", "thrift", "swap", "capsule", "campaign", "demand", "pressure"],
        },
        {
          point: "Weighed final conclusion integrating both consumer momentum and decisive binding law",
          keywords: ["momentum", "essential", "together", "combin", "entire", "supply chain"],
        },
      ],
      hints: [
        "Open with a clear stance ('agree to a large extent, though…').",
        "PEEL 1 (For laws): explain why greenwashing and upfront prices limit shoppers, then cite the Bangladesh Accord, EPR and France's repair bonus.",
        "PEEL 2 (For consumers): cite wearing 2× longer (−50% per wear), thrifting/swaps and how public campaigns push governments to legislate.",
        "Conclude by explaining why binding laws are decisive for global scale.",
      ],
    },
  ],
};
