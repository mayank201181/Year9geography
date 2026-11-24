import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "fast-fashion-interconnections-m1",
    title: "MCQ Paper 1 — Supply Chains, Impacts & Geo-Skills Basics",
    questions: [
      {
        id: "fast-fashion-interconnections-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "global-garment-chains",
        question: "Why do fast-fashion TNCs headquartered in HICs usually outsource stitching and dyeing to countries like Bangladesh, Vietnam and India?",
        options: [
          "Lower labour costs, dense textile clusters and lower factory overheads increase profits",
          "HIC countries legally forbid operating sewing machines inside European or Asian cities",
          "Cotton plants can only be woven into wearable fabric within 100 km of the Equator",
          "Exporting garments from distant factories always doubles the shop retail price",
        ],
        answerIndex: 0,
        explanation:
          "TNCs split their supply chains to place labour-intensive stitching where wages, factory rents and regulatory costs are much lower, while keeping high-margin design and branding in HICs.",
        hints: [
          "Think about the 'spatial division of labour' between HIC headquarters and NEE/LIC garment hubs.",
          "Compare factory wages in Europe/USA with wages in Bangladesh or Vietnam.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "global-garment-chains",
        question: "How did standardised containerisation transform global clothing supply chains?",
        options: [
          "It forced TNCs to build stitching factories directly next to European shopping malls",
          "It slashed port handling time and cut sea-freight cost to pennies per garment",
          "It eliminated the need for textile dyeing or cotton irrigation across Asia",
          "It required every T-shirt to be shipped individually by express cargo aeroplane",
        ],
        answerIndex: 1,
        explanation:
          "Intermodal steel containers move smoothly between ships, cranes, trains and lorries, slashing transport cost and time so long-distance outsourcing became far cheaper than domestic HIC manufacturing.",
        hints: [
          "Think about moving standardised steel TEU boxes smoothly from ship to truck without unpacking.",
          "How did cheaper, faster sea freight make global outsourcing profitable?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "global-garment-chains",
        question: "Roughly what share of a typical $20 fast-fashion T-shirt's retail price goes directly to the garment worker's wage?",
        options: [
          "About 50%–60% ($10–$12)",
          "About 25%–30% ($5–$6)",
          "About 1%–3% ($0.20–$0.60)",
          "About 15%–20% ($3–$4)",
        ],
        answerIndex: 2,
        explanation:
          "On a typical $20 fast-fashion T-shirt, brand retail overhead, marketing and profit capture ~50%–60%, raw fabric takes ~15%–20%, and the garment worker stitching it typically receives just ~1%–3% ($0.20–$0.60).",
        hints: [
          "Remember where the biggest chunk of a $20 retail price goes: brand retail overhead and profit (~55%).",
          "The worker's wage is only a tiny single-digit percentage of the shop price.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "fast-fashion-impacts",
        question: "Approximately how much freshwater is needed across farming and processing to produce ONE conventional cotton T-shirt?",
        options: [
          "About 27 litres",
          "About 270 litres",
          "About 27,000 litres",
          "About 2,700 litres",
        ],
        answerIndex: 3,
        explanation:
          "Producing one conventional cotton T-shirt consumes roughly 2,700 litres of freshwater — enough drinking water for one person for about 2.5 years.",
        hints: [
          "It is equivalent to roughly 2.5 years of drinking water for one person (~3 L/day × 900 days).",
          "Watch the number of zeroes carefully: not 270 and not 27,000!",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fast-fashion-impacts",
        question: "What caused Central Asia's Aral Sea to shrink by roughly 90% since the 1960s?",
        options: [
          "Diverting the Amu Darya and Syr Darya rivers to irrigate vast desert cotton farms",
          "Tectonic plate subduction opening a deep ocean trench beneath the lake bed",
          "Pumping Aral Sea water across pipelines to supply European desalination plants",
          "Dumping untreated synthetic polyester microfibres directly into coastal harbours",
        ],
        answerIndex: 0,
        explanation:
          "Soviet planners diverted the two rivers feeding the Aral Sea (Amu Darya and Syr Darya) into open desert canals to irrigate cotton, starving the lake of water, tripling salinity and leaving toxic dust storms.",
        hints: [
          "Think about the thirsty natural fibre crop grown across arid Uzbekistan and Kazakhstan.",
          "Which two rivers normally fed the Aral Sea before irrigation canals diverted them?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fast-fashion-impacts",
        question: "Why do synthetic garments such as polyester fleece and nylon sportswear pose a growing threat to marine ecosystems?",
        options: [
          "They dissolve rapidly into fertile organic compost inside coastal salt marshes",
          "Washing them sheds thousands of tiny plastic microfibres into rivers and food chains",
          "Manufacturing polyester requires more river irrigation water than growing desert cotton",
          "Polyester garments sink directly into oceanic trenches during container-ship crossings",
        ],
        answerIndex: 1,
        explanation:
          "Polyester and nylon are oil-based plastics. Every domestic laundry cycle releases hundreds of thousands of microscopic plastic fibres that pass through treatment plants into oceans and marine food webs.",
        hints: [
          "Remember what polyester is chemically made from: crude oil (plastic).",
          "What tiny pollutants come loose every time synthetic clothes tumble in a washing machine?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "fast-fashion-impacts",
        question: "What happened at Rana Plaza in Dhaka, Bangladesh on 24 April 2013?",
        options: [
          "A coastal tsunami flooded Bangladesh's main container-shipping terminal",
          "A major cotton irrigation dam burst across the Ganges–Brahmaputra delta",
          "An eight-storey garment factory building collapsed, killing 1,134 workers",
          "All European fashion TNCs permanently shut down their Asian retail stores",
        ],
        answerIndex: 2,
        explanation:
          "Despite visible structural cracks reported the day before, workers were ordered back into the illegally extended eight-storey Rana Plaza building, which collapsed killing 1,134 people and injuring over 2,500.",
        hints: [
          "Recall the landmark 2013 industrial tragedy that exposed deadly building-safety neglect in fast fashion.",
          "It led over 200 brands to sign the legally binding Bangladesh Safety Accord.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainable-slow-fashion",
        question: "What does the 'slow fashion' movement prioritise?",
        options: [
          "Delivering 52 micro-seasons a year using express cargo flights from factories",
          "Replacing all natural fabrics with disposable single-wear synthetic blends",
          "Exporting unworn seasonal store stock to desert landfills every January",
          "Buying fewer durable, ethically made garments worn far longer and repaired",
        ],
        answerIndex: 3,
        explanation:
          "Slow fashion counters rapid overconsumption by focusing on timeless design, higher durability, ethical wages, repair, swapping and keeping clothes in use far longer.",
        hints: [
          "Contrast 'fast fashion' (high volume, disposable trends) with its opposite.",
          "Think about durability, repair and buying fewer better-made pieces.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainable-slow-fashion",
        question: "Which example best illustrates 'greenwashing' by a fast-fashion TNC?",
        options: [
          "Advertising a tiny 'eco' range while hiding factories and expanding weekly overproduction",
          "Publishing full Tier 1–3 factory addresses alongside audited living-wage reports",
          "Paying into a legally binding structural-safety fund and cutting output by 40%",
          "Offering free lifetime garment mending and take-back refurbishment in all stores",
        ],
        answerIndex: 0,
        explanation:
          "Greenwashing uses eco-friendly slogans or a tiny token 'conscious' line to distract shoppers while the core business continues mass overproduction and opaque supply chains.",
        hints: [
          "Greenwashing is misleading eco-marketing rather than genuine systemic reform.",
          "Spot the option where marketing claims clash with unchanged overproduction and secrecy.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainable-slow-fashion",
        question: "How does Fairtrade Cotton certification directly support cotton farmers in LICs and NEEs?",
        options: [
          "It replaces all rural smallholder farmers with automated European indoor factories",
          "It guarantees a Fairtrade Minimum Price plus a community premium for schools or clinics",
          "It removes all safety and environmental inspections to lower international yarn prices",
          "It requires cotton farmers to ship raw bales exclusively by high-speed air freight",
        ],
        answerIndex: 1,
        explanation:
          "Fairtrade protects farmers against global price crashes via a guaranteed Fairtrade Minimum Price and provides an extra Fairtrade Premium invested democratically in local healthcare, education or clean water.",
        hints: [
          "Recall the two financial pillars of Fairtrade: a price safety net and a community fund.",
          "Think about how a guaranteed floor price protects rural smallholders when global cotton prices crash.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "year9-geo-skills",
        question: "What do the three letters T-E-A stand for when describing a geographical graph?",
        options: [
          "Total, Equation, Axis",
          "Time, Elevation, Area",
          "Trend, Evidence, Anomaly",
          "Table, Estimate, Average",
        ],
        answerIndex: 2,
        explanation:
          "TEA ensures complete graph descriptions: Trend (overall direction/correlation), Evidence (exact data values, units and changes), and Anomaly (any outlier breaking the main pattern).",
        hints: [
          "Start with the big-picture pattern, prove it with numbers, then spot the odd-one-out.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "What is the main limitation of using a world choropleth map to display national ecological footprints?",
        options: [
          "Choropleth maps cannot display more than two countries on the same page",
          "Choropleth maps only work for plotting volcanic earthquakes along plate margins",
          "Choropleth maps forbid using darker shading for higher numerical values",
          "Choropleth maps average whole countries and hide major internal regional inequalities",
        ],
        answerIndex: 3,
        explanation:
          "Because a choropleth map shades each whole country one uniform colour based on its national average, it hides sharp variations between wealthy megacities and poorer rural provinces inside the same country.",
        hints: [
          "Think about shading all of India or China one single uniform colour.",
          "Does every region inside a giant country share the exact same average value?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "Annual clothing output rose from 50 billion garments in 2000 to 100 billion garments in 2020. What was the percentage increase?",
        options: [
          "+100%",
          "+50%",
          "+200%",
          "+25%",
        ],
        answerIndex: 0,
        explanation:
          "Percentage change = {{(New - Old) / Old * 100}} = {{(100 - 50) / 50 * 100}} = +100%. Dividing by 100 (the new value) gives the classic trap answer of 50%!",
        hints: [
          "Use the N-O-O formula: ((New − Old) ÷ Old) × 100.",
          "Doubling a quantity is ALWAYS a +100% increase, never +50%.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "In a PEEL evaluation paragraph, what does the second 'E' (Explain) require you to do?",
        options: [
          "Copy the exact wording of the exam question twice to fill more lines",
          "Develop a causal chain showing HOW and WHY your evidence leads to an impact",
          "List five unrelated vocabulary terms without connecting them to the topic",
          "Draw a shaded choropleth map inside the margin of your essay answer",
        ],
        answerIndex: 1,
        explanation:
          "Point states your argument, Evidence provides a named case study or statistic, Explain builds the cause-and-effect link ('this leads to… which means…'), and Link ties directly back to 'to what extent'.",
        hints: [
          "PEEL = Point, Evidence, Explain, Link.",
          "Think about connectives like 'because', 'therefore' and 'this leads to…'.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fast-fashion-impacts",
        question: "Which two locations are famous geographical case studies of exported fast-fashion textile waste piles?",
        options: [
          "Marina Barrage (Singapore) and the Mid-Atlantic Ridge (Iceland)",
          "The Himalayas (Nepal) and the Nile Delta (Egypt)",
          "The Atacama Desert (Chile) and Kantamanto / Accra (Ghana)",
          "The San Andreas Fault (USA) and Mount Fuji (Japan)",
        ],
        answerIndex: 2,
        explanation:
          "Tens of thousands of tonnes of unsold or discarded HIC garments accumulate annually in Chile's arid Atacama Desert and around Accra's Kantamanto second-hand market and beaches in Ghana.",
        hints: [
          "One is an arid South American desert; the other is a West African capital's giant second-hand clothing hub.",
          "Think of Chile and Ghana rather than tectonic or river-dam case studies.",
        ],
      },
    ],
  },
  {
    id: "fast-fashion-interconnections-m2",
    title: "MCQ Paper 2 — Case Studies, Slow Fashion & Geo-Numeracy",
    questions: [
      {
        id: "fast-fashion-interconnections-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-garment-chains",
        question: "What does shifting from 4 seasonal collections to '52 micro-seasons' per year achieve for a fast-fashion TNC?",
        options: [
          "It cuts total global textile production in half every decade",
          "It gives cotton farmers twelve months of extra rest between harvests",
          "It slows down container ships to reduce international fuel spending",
          "It pushes weekly trend turnover and rapid repeat impulse purchases",
        ],
        answerIndex: 3,
        explanation:
          "Dropping new styles every week creates constant artificial scarcity ('buy now before it's gone') and makes clothes feel outdated rapidly, driving up sales volume and waste.",
        hints: [
          "Notice there are 52 weeks in a year — what does a new 'season' every week do to shopper behaviour?",
          "Compare buying seasonal basics twice a year versus seeing brand-new trends drop every Friday.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-garment-chains",
        question: "A pair of fast-fashion trainers retails for $80. If the factory stitchers earn 2% of the retail price, how much goes to stitcher wages per pair?",
        options: [
          "$1.60",
          "$16.00",
          "$0.80",
          "$4.00",
        ],
        answerIndex: 0,
        explanation:
          "2% of $80 = 0.02 × 80 = $1.60. ($16.00 is 20%, a tenfold decimal slip; $0.80 is 1%.)",
        hints: [
          "First find 1% of $80 by dividing by 100 ($0.80).",
          "Multiply 1% by 2 to get 2%.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fast-fashion-impacts",
        question: "A student buys 4 conventional cotton T-shirts (2,700 L each) and 1 pair of jeans (7,500 L). What is the combined virtual water footprint?",
        options: [
          "10,200 litres",
          "18,300 litres",
          "15,600 litres",
          "21,000 litres",
        ],
        answerIndex: 1,
        explanation:
          "4 T-shirts = 4 × 2,700 = 10,800 L. Add 1 pair of jeans (7,500 L): 10,800 + 7,500 = 18,300 litres. (10,200 L only counts 1 T-shirt + 1 jeans.)",
        hints: [
          "Calculate 4 × 2,700 first.",
          "Add 7,500 to your T-shirt subtotal.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fast-fashion-impacts",
        question: "Why do geographers argue AGAINST a total consumer boycott of Bangladeshi-made clothing after disasters like Rana Plaza?",
        options: [
          "Bangladesh no longer operates any textile factories or export ports today",
          "Boycotting clothes instantly forces TNCs to double every factory worker's salary",
          "Over 4 million workers (mostly women) rely on garment jobs for family income and exports",
          "All Bangladeshi garment factories are now completely automated with zero human workers",
        ],
        answerIndex: 2,
        explanation:
          "Bangladesh's garment sector employs >4 million people (mostly women gaining economic independence) and generates >80% of export revenue. Pulling orders out harms workers; staying while enforcing binding safety and living-wage agreements improves lives.",
        hints: [
          "Think about the positive economic side of the garment industry in Bangladesh.",
          "What happens to 4 million families if global brands simply walk away overnight?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fast-fashion-impacts",
        question: "Approximately what share of global carbon emissions and global industrial wastewater pollution is attributed to the fashion industry?",
        options: [
          "~1% of global carbon emissions and ~2% of industrial wastewater",
          "~45% of global carbon emissions and ~80% of industrial wastewater",
          "~25% of global carbon emissions and ~1% of industrial wastewater",
          "~8%–10% of global carbon emissions and ~20% of industrial wastewater",
        ],
        answerIndex: 3,
        explanation:
          "The UN estimates fashion generates ~8%–10% of global carbon emissions (more than international flights and maritime shipping combined) and ~20% of global industrial wastewater pollution from dyeing and finishing.",
        hints: [
          "Fashion's carbon share is roughly one-tenth (~8%–10%), and its industrial wastewater share is roughly one-fifth (~20%).",
          "It emits more carbon than international aviation and shipping combined, while wet-dyeing drives wastewater pollution.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainable-slow-fashion",
        question: "A cheap jacket costs $24 and is worn 6 times. A durable jacket costs $75 and is worn 50 times. How do their costs per wear compare?",
        options: [
          "Cheap jacket: $4.00/wear vs Durable jacket: $1.50/wear",
          "Cheap jacket: $1.50/wear vs Durable jacket: $4.00/wear",
          "Cheap jacket: $6.00/wear vs Durable jacket: $2.50/wear",
          "Cheap jacket: $4.00/wear vs Durable jacket: $3.00/wear",
        ],
        answerIndex: 0,
        explanation:
          "Cost per wear = Price ÷ Wears. Cheap jacket: {{24 / 6}} = $4.00/wear. Durable jacket: {{75 / 50}} = $1.50/wear — over twice as good value per wear!",
        hints: [
          "Use Cost per wear = Price ÷ Number of wears.",
          "Compute 24 ÷ 6 and 75 ÷ 50 carefully.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainable-slow-fashion",
        question: "If you keep a T-shirt twice as long — wearing it 40 times instead of 20 times — how does its virtual water footprint per wear change?",
        options: [
          "It doubles (+100%)",
          "It halves (−50%)",
          "It falls by 20%",
          "It stays completely unchanged",
        ],
        answerIndex: 1,
        explanation:
          "Spreading the same 2,700 L production footprint across 40 wears (67.5 L/wear) instead of 20 wears (135 L/wear) cuts the water footprint per wear exactly in half (−50%).",
        hints: [
          "Compare 2,700 ÷ 20 with 2,700 ÷ 40.",
          "Doubling the denominator cuts a fraction in half!",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainable-slow-fashion",
        question: "Why was the 2013 Bangladesh Accord on Fire and Building Safety far more effective than previous voluntary brand pledges?",
        options: [
          "It allowed brands to keep all factory safety inspection reports strictly secret",
          "It closed every garment factory in Dhaka permanently for ten years",
          "It was legally binding, required independent inspections and funded verified repairs",
          "It shifted all responsibility for factory safety onto individual HIC shoppers",
        ],
        answerIndex: 2,
        explanation:
          "Unlike voluntary codes brands could quietly ignore, the Bangladesh Accord legally bound >200 TNCs to fund independent structural, electrical and fire inspections with public progress tracking.",
        hints: [
          "Think about the crucial difference between a 'voluntary promise' and a 'legally binding agreement'.",
          "Remember that independent engineers inspected factories and brands had to fund verified structural repairs.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainable-slow-fashion",
        question: "What is the key difference between 'upcycling' and 'downcycling' old clothing?",
        options: [
          "Upcycling burns textiles for electricity, whereas downcycling buries them in deserts",
          "Upcycling requires crude oil, whereas downcycling grows organic cotton in fields",
          "Upcycling ships garments overseas, whereas downcycling sells them in HIC malls",
          "Upcycling transforms waste fabric into higher-value items, whereas downcycling makes lower-grade rags",
        ],
        answerIndex: 3,
        explanation:
          "Upcycling creatively redesigns discarded textiles into higher-value garments or bags (e.g., Kantamanto tailors or patchwork designers), whereas downcycling shreds fibres into lower-grade insulation or wiping rags.",
        hints: [
          "Look at the prefixes 'up-' (higher value) versus 'down-' (lower grade/value).",
          "Patchwork redesigning into boutique jackets raises value; shredding into cleaning rags lowers value.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "Five textile hubs record monthly water pollution scores of: 18, 22, 26, 24, 30. What is the arithmetic mean?",
        options: [
          "24",
          "26",
          "12",
          "25",
        ],
        answerIndex: 0,
        explanation:
          "Sum = 18 + 22 + 26 + 24 + 30 = 120. Divide by 5 values: {{120 / 5}} = 24. (12 is the range: 30 − 18.)",
        hints: [
          "Add all five numbers together first.",
          "Divide the sum by 5.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "A factory cuts its wastewater discharge from 800,000 L/day to 600,000 L/day after installing closed-loop dyeing. What is the percentage decrease?",
        options: [
          "33.3% decrease",
          "25% decrease",
          "20% decrease",
          "75% decrease",
        ],
        answerIndex: 1,
        explanation:
          "Decrease = 800,000 − 600,000 = 200,000 L. Divide by the ORIGINAL value (800,000): {{200000 / 800000 * 100}} = 25% decrease. (Dividing by 600,000 gives the classic trap of 33.3%!)",
        hints: [
          "Find the decrease: 800,000 − 600,000 = 200,000.",
          "Always divide by the ORIGINAL value (800,000), not 600,000!",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "Which thematic map technique is BEST for comparing the total US$ value of garment exports from China, Bangladesh, Vietnam and tiny Singapore without land area distorting the visual?",
        options: [
          "A plain political boundary outline map with no key",
          "An unweighted choropleth map shaded by total land area",
          "A proportional symbol map using circles scaled to export value",
          "A topographic contour map showing elevation above sea level",
        ],
        answerIndex: 2,
        explanation:
          "Proportional symbol maps scale circles or bars directly to total export value, so tiny high-trade hubs like Singapore or compact Bangladesh are represented fairly rather than hidden by small land area.",
        hints: [
          "Choropleth maps work best for rates/densities per area or per person; which map shows total magnitudes best?",
          "Think about scaled circles placed over each country.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "year9-geo-skills",
        question: "Monthly wages at a small garment firm are: $120, $125, $130, $135 and $2,490 (owner). Why is the MEDIAN ($130) a much fairer summary of typical worker pay than the MEAN ($600)?",
        options: [
          "The median always produces a larger dollar figure than the arithmetic mean",
          "The mean cannot legally be calculated when a dataset has five numbers",
          "The median ignores all four garment workers and measures only the owner's pay",
          "The extreme $2,490 anomaly pulls the mean far above what any worker actually earns",
        ],
        answerIndex: 3,
        explanation:
          "The arithmetic mean ($3,000 ÷ 5 = $600) is heavily skewed upward by the single $2,490 outlier, making pay look nearly five times higher than reality. The median ($130) resists extreme anomalies.",
        hints: [
          "Compare $600 with what the four actual garment stitchers earn ($120–$135).",
          "Which average is distorted by one extreme outlier?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sustainable-slow-fashion",
        question: "A brand switches from virgin polyester to recycled polyester (rPET) made from plastic bottles. Which environmental impact STILL remains a concern with rPET clothing?",
        options: [
          "Washing rPET clothes still sheds synthetic microplastic fibres into waterways",
          "Producing rPET requires diverting Central Asian rivers to irrigate cotton fields",
          "Recycled polyester rots into methane gas within three days of wearing",
          "rPET fabrics cannot be dyed without using twice as much freshwater as cotton",
        ],
        answerIndex: 0,
        explanation:
          "rPET lowers virgin petroleum use and diverts bottles from landfill, yet it is still plastic — meaning every wash still sheds marine microfibres and the garment remains non-biodegradable at end-of-life.",
        hints: [
          "Remember what rPET is still chemically made of: PET plastic!",
          "Does recycling a plastic bottle into fleece stop microfibre shedding in a washing machine?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-garment-chains",
        question: "What does 'footloose capital' mean when describing fast-fashion TNCs?",
        options: [
          "Factories must stay tied forever to the exact mountain valley where wool is sheared",
          "Brands can rapidly shift garment orders to cheaper countries if wages or rules rise",
          "Container ships abandon fixed port routes and drift freely on monsoon currents",
          "Garment workers can freely relocate to HIC headquarters whenever they choose",
        ],
        answerIndex: 1,
        explanation:
          "Because TNCs rarely own the factories directly, they can quickly move contracts from one country to another if wages or taxes rise — creating a 'race to the bottom' unless international standards apply.",
        hints: [
          "Think of 'footloose' as not tied down to one fixed location.",
          "How does the threat of moving orders elsewhere keep factory wages artificially low?",
        ],
      },
    ],
  },
  {
    id: "fast-fashion-interconnections-m3",
    title: "MCQ Paper 3 — Trade-Offs, TEA Graphs & Evaluation",
    questions: [
      {
        id: "fast-fashion-interconnections-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "fast-fashion-impacts",
        question: "Why did diverting rivers to irrigate cotton around the Aral Sea trigger a SECOND disaster — respiratory illness among local communities — even kilometres away from the shrinking shore?",
        options: [
          "Rising sea levels flooded desert villages with cold Arctic freshwater",
          "Increased fish populations polluted coastal air with natural methane gas",
          "Wind blew salt and toxic cotton-pesticide dust off the exposed dry lakebed",
          "New tropical rainforests growing on the seabed trapped heavy humid smog",
        ],
        answerIndex: 2,
        explanation:
          "As the Aral Sea evaporated, agricultural pesticides and heavy salts that had washed off cotton fields lay exposed on the dry seabed. High steppe winds whipped them into toxic dust storms causing respiratory and kidney illnesses.",
        hints: [
          "Think about what settled on the bottom of the lake after decades of cotton-farm runoff.",
          "What happens when strong winds sweep across thousands of square kilometres of dry salty mud?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sustainable-slow-fashion",
        question: "How does an Extended Producer Responsibility (EPR) law in Europe shift incentives for fast-fashion TNCs?",
        options: [
          "It bans citizens from repairing or reselling second-hand jackets privately",
          "It pays brands extra government cash for every extra million T-shirts produced",
          "It removes customs checks on exported charity clothing shipped to West Africa",
          "It charges brands fees per garment to fund collection, repair and textile recycling",
        ],
        answerIndex: 3,
        explanation:
          "EPR applies the 'polluter pays' principle: brands pay higher fees for short-lived, unrecyclable blended garments and lower fees for durable, repairable circular designs — rewarding sustainable design financially.",
        hints: [
          "Look closely at the name: Extended PRODUCER Responsibility.",
          "Who pays for a garment's end-of-life waste management under EPR?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "A scatter graph plots GDP per capita (x-axis) against textile waste per person (y-axis) across 20 countries. Almost all dots rise steadily from bottom-left to top-right, EXCEPT Country Q which has high GDP ($65,000) yet low waste (4 kg/person). Which TEA summary is strongest?",
        options: [
          "Strong positive correlation overall, rising with GDP, with Country Q ($65,000; 4 kg) as a clear anomaly",
          "Negative correlation overall because one wealthy country creates less textile waste than others",
          "No pattern exists on the graph because Country Q does not sit directly on the trend line",
          "The graph proves GDP always decreases whenever nations recycle old winter coats",
        ],
        answerIndex: 0,
        explanation:
          "A top TEA summary captures the overall positive correlation (Trend), cites concrete figures (Evidence), and specifically highlights Country Q ($65,000; 4 kg/person) as the Anomaly — one outlier does not erase a strong overall correlation!",
        hints: [
          "Dots rising from bottom-left to top-right show a positive correlation.",
          "How should you handle Country Q using the 'A' in TEA?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "year9-geo-skills",
        question: "A student writes for a 6-mark 'To what extent' question: 'Fast fashion is totally bad because it wastes 2,700 L of water per shirt and caused Rana Plaza, so it should be banned completely.' Why would this answer NOT reach the top mark band?",
        options: [
          "It mentions specific numbers and a named Bangladeshi case study",
          "It is completely one-sided, ignoring economic benefits and lacking a weighed evaluation",
          "It uses too many technical geography terms like water footprint and Rana Plaza",
          "It agrees too cautiously instead of writing only one short sentence",
        ],
        answerIndex: 1,
        explanation:
          "Even with accurate facts, 'To what extent' essays require balanced PEEL arguments covering BOTH sides (e.g., >4 million jobs and >80% export earnings in Bangladesh, plus reform alternatives) leading to a weighed conclusion.",
        hints: [
          "What does the command phrase 'To what extent' ALWAYS demand?",
          "Check whether the student examined both costs and benefits before judging.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "fast-fashion-impacts",
        question: "Why is organic cotton generally better for farmworkers and soils than conventional cotton, yet NOT a complete zero-impact miracle?",
        options: [
          "Organic cotton is spun from crude oil and therefore releases marine plastic microfibres",
          "Organic cotton cannot be sewn in factories located inside Bangladesh or Vietnam",
          "It avoids toxic synthetic pesticides, but still needs large amounts of land and water",
          "It uses three times more synthetic chemical fertiliser than conventional cotton",
        ],
        answerIndex: 2,
        explanation:
          "Organic cotton eliminates hazardous synthetic pesticides (protecting soil microbes, rivers and farmers' health), yet cotton remains a thirsty crop and lower yields per hectare can require slightly more farmland unless rain-fed.",
        hints: [
          "Think about what organic farming removes (synthetic pesticides) versus what a cotton plant still biologically needs (water and land).",
          "Unless it is rain-fed, cotton remains a water-intensive crop even without chemical sprays.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-garment-chains",
        question: "Which example best demonstrates global 'interdependence' in the fashion industry?",
        options: [
          "A self-sufficient village weaving wool solely from its own sheep for local winter use",
          "An isolated island banning all container ships from entering its coastal harbour",
          "A museum displaying medieval silk robes woven inside the same city centuries ago",
          "A drought in Indian cotton fields raising fabric costs in Dhaka factories and Singapore malls",
        ],
        answerIndex: 3,
        explanation:
          "Interdependence means places rely on one another so an event in one country (an Indian drought) ripples directly through factories in Bangladesh and retail prices in Singapore.",
        hints: [
          "Look for a chain where a shock in one country directly affects workers and shoppers in two other countries.",
          "Interdependence connects distant farms, stitching hubs and retail markets into one linked web.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sustainable-slow-fashion",
        question: "Why are mixed-fibre fast-fashion fabrics (such as 60% cotton / 40% polyester blends) much harder to recycle into new cloth than 100% pure cotton or 100% wool?",
        options: [
          "Intertwined natural and plastic fibres are costly and difficult to separate chemically",
          "Pure 100% cotton garments cannot be shredded or spun into recycled yarn at all",
          "Blended cotton-polyester shirts dissolve instantly when exposed to rainwater",
          "International trade laws ban recycling any garment containing more than one colour",
        ],
        answerIndex: 0,
        explanation:
          "Mechanically shredding a cotton–polyester blend produces weak mixed pulp, and chemically separating plant cellulose from plastic polymers is expensive — which is why circular fashion promotes mono-material design!",
        hints: [
          "Imagine trying to un-bake flour and plastic beads once spun tightly into the exact same thread.",
          "Circular design favours 'mono-materials' (single fibre types) for easy recycling.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "A city's textile recycling rate rises from 12% in 2020 to 18% in 2025. What is the relative PERCENTAGE INCREASE (not percentage-point increase)?",
        options: [
          "6% increase",
          "50% increase",
          "33.3% increase",
          "150% increase",
        ],
        answerIndex: 1,
        explanation:
          "Change = 18 − 12 = 6 percentage points. Divide by the original rate (12): {{6 / 12 * 100}} = 50% relative increase! (6 is percentage points; 33.3% wrongly divides by 18.)",
        hints: [
          "Be careful: 18 − 12 = 6 is the percentage-point change.",
          "For relative percentage increase, compute ((18 − 12) ÷ 12) × 100.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sustainable-slow-fashion",
        question: "France introduced a government 'repair bonus' paying €6–€25 toward fixing torn clothes and worn shoes at certified tailors. Which economic barrier does this policy directly overcome?",
        options: [
          "It bans French consumers from ever washing cotton clothes in cold water",
          "It forces European ports to import twice as many cheap polyester garments",
          "It closes the price gap where mending used to cost almost as much as buying a cheap new item",
          "It replaces every local tailor shop with automated fast-fashion warehouses",
        ],
        answerIndex: 2,
        explanation:
          "Because ultra-fast fashion is artificially cheap, paying a tailor $15 to fix a zip on a $18 jacket felt irrational to shoppers. Subsidising repairs makes circular mending cheaper than linear replacement while creating local jobs.",
        hints: [
          "Think about why shoppers often throw away a $15 shirt with a broken zip instead of paying a tailor $12.",
          "How does subsidising the repair price change that everyday decision?",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "When reading a climate graph of a cotton-growing desert basin (like Uzbekistan near the Aral Sea), what two features would you expect to see?",
        options: [
          "High rainfall bars above 250 mm every month and a flat temperature line at 28°C",
          "Freezing temperatures below −10°C year-round with constant monsoon downpours",
          "Zero seasonal temperature range and heavy rainfall concentrated in every summer week",
          "Very low rainfall bars (under 200 mm/year total) and a wide seasonal temperature swing",
        ],
        answerIndex: 3,
        explanation:
          "Continental arid basins like Uzbekistan have very low annual rainfall (making cotton wholly dependent on river irrigation) alongside hot summers above 30°C and cold winters (wide temperature range).",
        hints: [
          "Remember Uzbekistan is an arid continental interior — NOT equatorial Singapore!",
          "Low precipitation explains why cotton required massive river diversions from the Amu Darya.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "fast-fashion-impacts",
        question: "Why do ~40% of second-hand clothing bales arriving at Ghana's Kantamanto Market end up dumped as waste rather than resold?",
        options: [
          "Ultra-fast fashion items are often stained, synthetic or poorly stitched and fall apart quickly",
          "Ghanaian tailors lack the skill to repair, alter or upcycle donated garments",
          "Local residents in Accra legally forbid buying or wearing second-hand T-shirts",
          "All garments shipped from Europe arrive brand new in sealed luxury wooden boxes",
        ],
        answerIndex: 0,
        explanation:
          "Kantamanto actually has thousands of highly skilled local upcyclers and tailors, but the sheer volume and flimsy quality of modern fast-fashion synthetics means ~40% of arriving bales are unsellable waste.",
        hints: [
          "Think about the declining fabric quality of modern ultra-fast fashion versus older durable clothes.",
          "Kantamanto tailors are extraordinarily skilled — the problem is the quality and volume shipped from HICs.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "year9-geo-skills",
        question: "A dataset of garment factory daily outputs (in hundreds) is: 12, 19, 15, 28, 16. What is the RANGE of this dataset?",
        options: [
          "18",
          "16",
          "15",
          "40",
        ],
        answerIndex: 1,
        explanation:
          "Range = Maximum − Minimum = 28 − 12 = 16 (hundred garments). (18 is the arithmetic mean: 90 ÷ 5 = 18; 40 is the sum of max + min.)",
        hints: [
          "Find the largest number (28) and the smallest number (12).",
          "Range = Maximum − Minimum.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "global-garment-chains",
        question: "Why does the Port of Singapore play a strategic role in global fast-fashion supply chains even though Singapore has very few large garment stitching factories?",
        options: [
          "Singapore grows most of Asia's irrigated raw cotton on vertical indoor rooftops",
          "All European fashion brands are legally required to register their design studios in Jurong",
          "It is a world-leading container transshipment hub linking Asian factories to global markets",
          "Singapore supplies free coal electricity to dye houses across Bangladesh and India",
        ],
        answerIndex: 2,
        explanation:
          "As one of the world's busiest container transshipment hubs along the Strait of Malacca, the Port of Singapore consolidates and transfers containerised garments from South and Southeast Asian factories onto mega-vessels bound for Europe, Australia and the Americas.",
        hints: [
          "Think about Singapore's position on global maritime trade routes and containerisation.",
          "Most goods passing through PSA Singapore are transferred from feeder vessels onto mega-container ships.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sustainable-slow-fashion",
        question: "Why does the motto 'the most sustainable garment is the one already in your wardrobe' capture circular-fashion science better than buying a brand-new 'organic' T-shirt every month?",
        options: [
          "Old clothes absorb carbon dioxide straight out of bedroom air every night",
          "Organic cotton T-shirts emit ten times more microplastic fibres than virgin polyester",
          "Existing garments cannot be washed, so they use zero household tap water forever",
          "Wearing existing clothes avoids ALL new farming water, dyeing chemicals and factory energy",
        ],
        answerIndex: 3,
        explanation:
          "Even certified organic or recycled new garments still require land, water, dye, factory energy and shipping. Extending the life of clothes already made avoids 100% of new manufacturing impacts.",
        hints: [
          "Compare zero new manufacturing inputs against producing a brand-new shirt (even an organic one).",
          "Extending existing garment life avoids fresh cotton farming, dye-house energy and shipping completely.",
        ],
      },
      {
        id: "fast-fashion-interconnections-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "year9-geo-skills",
        question: "When evaluating 'To what extent can consumers alone make fast fashion sustainable?', which concluding sentence earns the highest Year 9 Geography evaluation mark?",
        options: [
          "Consumers shift demand through slow fashion, yet binding EPR and safety laws remain decisive for global scale",
          "Consumers are completely responsible for everything, so governments and TNCs do not need any laws",
          "Fast fashion uses lots of water and dyes, and graphs should always be described using TEA",
          "Neither consumers nor governments can ever change how clothes are designed, made or recycled",
        ],
        answerIndex: 0,
        explanation:
          "A top evaluative conclusion weighs BOTH sides explicitly — crediting consumer slow-fashion demand signals while explaining why mandatory laws (EPR, Bangladesh Accord) are decisive to reform the whole industry fairly at scale.",
        hints: [
          "Look for the conclusion that weighs BOTH sides and states clearly which lever carries greater decisive weight and why.",
          "Avoid one-sided extremes or off-topic statements.",
        ],
      },
    ],
  },
];
