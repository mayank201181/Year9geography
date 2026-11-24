import type { ExamPaper } from "../types";

const SVG_CIRCULAR = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram contrasting linear disposal pathway L with closed-loop pathway C">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Resource Flow Models: Linear Pathway L vs Closed-Loop Pathway C</text>
  <!-- Stage 1: Extract -->
  <rect x="28" y="88" width="96" height="44" rx="8" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8"/>
  <text x="76" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1. Extract</text>
  <text x="76" y="122" text-anchor="middle" font-size="10" fill="var(--ink-2)">Raw materials</text>
  <!-- Arrow 1->2 -->
  <line x1="124" y1="110" x2="156" y2="110" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="156,105 166,110 156,115" fill="var(--ink)"/>
  <!-- Stage 2: Make -->
  <rect x="168" y="88" width="96" height="44" rx="8" fill="var(--brand)" fill-opacity="0.16" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="216" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. Make</text>
  <text x="216" y="122" text-anchor="middle" font-size="10" fill="var(--ink-2)">Manufacture</text>
  <!-- Arrow 2->3 -->
  <line x1="264" y1="110" x2="296" y2="110" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="296,105 306,110 296,115" fill="var(--ink)"/>
  <!-- Stage 3: Use -->
  <rect x="308" y="88" width="96" height="44" rx="8" fill="var(--brand)" fill-opacity="0.16" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="356" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">3. Use</text>
  <text x="356" y="122" text-anchor="middle" font-size="10" fill="var(--ink-2)">Consumption</text>
  <!-- Pathway L -> Waste -->
  <line x1="404" y1="110" x2="438" y2="110" stroke="var(--bad)" stroke-width="2.4" stroke-dasharray="5 3"/>
  <polygon points="438,105 448,110 438,115" fill="var(--bad)"/>
  <circle cx="424" cy="92" r="11" fill="var(--bad)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="424" y="96" text-anchor="middle" font-size="11" font-weight="700" fill="var(--surface)">L</text>
  <!-- Waste box -->
  <rect x="450" y="88" width="84" height="44" rx="8" fill="var(--bad)" fill-opacity="0.16" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="492" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Waste</text>
  <text x="492" y="122" text-anchor="middle" font-size="10" fill="var(--ink-2)">Landfill / Burn</text>
  <!-- Pathway C: Closed return loop from Use back to Make -->
  <path d="M 356 132 L 356 188 Q 356 204 340 204 L 232 204 Q 216 204 216 188 L 216 140" fill="none" stroke="var(--good)" stroke-width="3"/>
  <polygon points="210,142 216,132 222,142" fill="var(--good)"/>
  <circle cx="286" cy="204" r="13" fill="var(--good)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="286" y="208" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">C</text>
  <text x="286" y="232" text-anchor="middle" font-size="11" font-weight="600" fill="var(--good)">Pathway C: Closed-Loop Return</text>
  <text x="280" y="54" text-anchor="middle" font-size="11" fill="var(--ink-2)">Linear model ends at Waste (L); Closed-loop model cycles via C</text>
</svg>`;

const SVG_VIRTUAL_WATER = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of virtual water footprints: 1 kg beef 15,400 L, 1 pair jeans 7,500 L, 1 cotton T-shirt 2,700 L, 1 kg rice 2,500 L, 1 kg potatoes 290 L">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Embedded Water Use of Everyday Products (Litres)</text>
  <!-- Axes: y=198 is 0, y=54 is 16,000 L -> 144px = 0.009 px/L -->
  <line x1="78" y1="198" x2="532" y2="198" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="78" y1="48" x2="78" y2="198" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="78" y1="162" x2="532" y2="162" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="78" y1="126" x2="532" y2="126" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="78" y1="90" x2="532" y2="90" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="78" y1="54" x2="532" y2="54" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="70" y="202" text-anchor="end" font-size="10" fill="var(--ink-2)">0</text>
  <text x="70" y="166" text-anchor="end" font-size="10" fill="var(--ink-2)">4,000</text>
  <text x="70" y="130" text-anchor="end" font-size="10" fill="var(--ink-2)">8,000</text>
  <text x="70" y="94" text-anchor="end" font-size="10" fill="var(--ink-2)">12,000</text>
  <text x="70" y="58" text-anchor="end" font-size="10" fill="var(--ink-2)">16,000</text>
  <!-- 1 kg Beef: 15,400 L -> h=138.6 -> y=59.4 -->
  <rect x="98" y="59" width="60" height="139" rx="4" fill="var(--bad)" fill-opacity="0.78"/>
  <text x="128" y="52" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">15,400 L</text>
  <text x="128" y="216" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink-2)">1 kg Beef</text>
  <!-- 1 Pair Jeans: 7,500 L -> h=67.5 -> y=130.5 -->
  <rect x="186" y="131" width="60" height="67" rx="4" fill="var(--brand)" fill-opacity="0.85"/>
  <text x="216" y="124" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">7,500 L</text>
  <text x="216" y="216" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink-2)">1 Pair Jeans</text>
  <!-- 1 Cotton T-shirt: 2,700 L -> h=24.3 -> y=173.7 -->
  <rect x="274" y="174" width="60" height="24" rx="4" fill="var(--brand)" fill-opacity="0.65"/>
  <text x="304" y="167" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">2,700 L</text>
  <text x="304" y="216" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink-2)">Cotton T-shirt</text>
  <!-- 1 kg Rice: 2,500 L -> h=22.5 -> y=175.5 -->
  <rect x="362" y="176" width="60" height="22" rx="4" fill="var(--good)" fill-opacity="0.72"/>
  <text x="392" y="169" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">2,500 L</text>
  <text x="392" y="216" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink-2)">1 kg Rice</text>
  <!-- 1 kg Potatoes: 290 L -> h=4 -> y=194 -->
  <rect x="450" y="193" width="60" height="5" rx="2" fill="var(--good)" fill-opacity="0.9"/>
  <text x="480" y="186" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">290 L</text>
  <text x="480" y="216" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink-2)">1 kg Potatoes</text>
  <text x="305" y="236" text-anchor="middle" font-size="10" fill="var(--ink-2)">Source: Global Water Footprint Network estimates</text>
</svg>`;

const SVG_SG_TAPS = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart of Singapore's planned 2060 water supply share: NEWater 55%, Desalinated Water 30%, Local Catchment and Imported 15%">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Singapore's Planned 2060 Water Supply Shares (%)</text>
  <!-- Axis and grid: x=175 is 0%, x=495 is 60% (5.333px per %) -->
  <line x1="175" y1="54" x2="175" y2="206" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="175" y1="206" x2="508" y2="206" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="282" y1="54" x2="282" y2="206" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="388" y1="54" x2="388" y2="206" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="495" y1="54" x2="495" y2="206" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="175" y="224" text-anchor="middle" font-size="11" fill="var(--ink-2)">0%</text>
  <text x="282" y="224" text-anchor="middle" font-size="11" fill="var(--ink-2)">20%</text>
  <text x="388" y="224" text-anchor="middle" font-size="11" fill="var(--ink-2)">40%</text>
  <text x="495" y="224" text-anchor="middle" font-size="11" fill="var(--ink-2)">60%</text>
  <!-- Bar 1: NEWater 55% (width 293px) -->
  <text x="165" y="88" text-anchor="end" font-size="12" font-weight="600" fill="var(--ink)">NEWater</text>
  <rect x="175" y="68" width="293" height="30" rx="5" fill="var(--brand)" fill-opacity="0.86"/>
  <text x="476" y="88" text-anchor="start" font-size="12" font-weight="700" fill="var(--brand)">55%</text>
  <!-- Bar 2: Desalinated Water 30% (width 160px) -->
  <text x="165" y="138" text-anchor="end" font-size="12" font-weight="600" fill="var(--ink)">Desalinated Water</text>
  <rect x="175" y="118" width="160" height="30" rx="5" fill="var(--good)" fill-opacity="0.82"/>
  <text x="343" y="138" text-anchor="start" font-size="12" font-weight="700" fill="var(--good)">30%</text>
  <!-- Bar 3: Local Catchment and Imported 15% (width 80px) -->
  <text x="165" y="184" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Local Catchment</text>
  <text x="165" y="197" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">&amp; Imported</text>
  <rect x="175" y="168" width="80" height="30" rx="5" fill="var(--ink-2)" fill-opacity="0.55"/>
  <text x="263" y="188" text-anchor="start" font-size="12" font-weight="700" fill="var(--ink)">15%</text>
  <text x="340" y="241" text-anchor="middle" font-size="10" fill="var(--ink-2)">Projected 2060 supply shares across Singapore&apos;s Four National Taps (PUB)</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-3",
  title: "Year 9 Geography Mock 3: Global Issues, Water & Fast Fashion",
  calculator: true,
  minutes: 45,
  questions: [
    // ======================== SECTION A: MCQ (10) ==========================
    {
      id: "exam-3-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "consumption-food-water",
      guideRef: "consumption-circular-economy",
      question: "What does **Earth Overshoot Day** mark each calendar year?",
      options: [
        "The date when humanity's resource demand exceeds what Earth can regenerate that year.",
        "The day when global sea levels reach their highest spring tide across the Pacific.",
        "The annual deadline when every country must completely ban single-use plastic bags.",
        "The date when solar farms generate more global electricity than coal and gas plants.",
      ],
      answerIndex: 0,
      explanation:
        "Earth Overshoot Day marks the date when human demand for ecological resources and carbon absorption surpasses what Earth's ecosystems can naturally regenerate in that entire year — meaning we spend the remaining months in ecological deficit.",
      hints: [
        "Think about the word 'overshoot' — spending beyond a sustainable budget.",
        "If Earth's yearly biological budget runs out in August, what does that date signify?",
      ],
    },
    {
      id: "exam-3-q02",
      kind: "mcq",
      difficulty: "core",
      topicId: "consumption-food-water",
      guideRef: "consumption-circular-economy",
      diagram: SVG_CIRCULAR,
      question:
        "Study the resource flow diagram. How does **Pathway C** shift an economy away from the linear 'take–make–waste' model?",
      options: [
        "By digging deeper mines so factories can extract virgin metals twice as quickly.",
        "By shipping worn-out products overseas to open landfills in low-income nations.",
        "By burning discarded plastics to clear warehouse space for cheaper seasonal stock.",
        "By keeping materials in circulation through repair, reuse, remanufacture, and recycling.",
      ],
      answerIndex: 3,
      explanation:
        "Pathway C represents a circular economy: products are designed to last, repaired, reused, refurbished, or recycled back into manufacturing so waste and virgin resource extraction are minimised rather than dumped along linear Pathway L.",
      hints: [
        "Trace the green arrow labelled C: it runs from 'Use' back into 'Make'.",
        "Which actions bring used products and materials back into productive use instead of landfill?",
      ],
    },
    {
      id: "exam-3-q03",
      kind: "mcq",
      difficulty: "core",
      topicId: "consumption-food-water",
      guideRef: "global-food-security",
      question:
        "Why can judging a food's environmental impact **only** by its **food miles** be misleading?",
      options: [
        "Cargo ships burn zero fuel because ocean trade winds push every modern container vessel.",
        "Production emissions from heated greenhouses or cattle methane can far outweigh sea-shipping.",
        "Locally grown vegetables always require ten times more chemical fertiliser than imported ones.",
        "Air freight produces lower carbon emissions per kilogram than coastal cargo container ships.",
      ],
      answerIndex: 1,
      explanation:
        "Food miles measure only transport distance, ignoring HOW food is grown and HOW it travels. Growing out-of-season tomatoes in fossil-fuel-heated greenhouses or raising local beef (high methane) often creates a much larger total carbon footprint than seasonal produce shipped efficiently by sea.",
      hints: [
        "Think about the full lifecycle carbon footprint: farming + heating + transport mode.",
        "Compare local winter greenhouse tomatoes or beef against seasonal produce sent by container ship.",
      ],
    },
    {
      id: "exam-3-q04",
      kind: "mcq",
      difficulty: "core",
      topicId: "consumption-food-water",
      guideRef: "global-water-scarcity",
      question:
        "How does **economic water scarcity** differ from **physical water scarcity**?",
      options: [
        "Economic scarcity happens only in wealthy deserts that refuse to import bottled water.",
        "Economic scarcity means rivers have permanently dried up due to zero annual rainfall.",
        "Economic scarcity occurs where water exists naturally, yet poverty blocks safe supply infrastructure.",
        "Economic scarcity affects only factory cooling towers and never impacts drinking supplies.",
      ],
      answerIndex: 2,
      explanation:
        "In economic water scarcity (common in parts of Sub-Saharan Africa), adequate freshwater exists in rivers or aquifers, but lack of funding, pipes, treatment plants, or governance prevents people from accessing clean water. Physical scarcity occurs when demand genuinely exceeds natural supply (e.g. arid Middle East).",
      hints: [
        "Ask yourself: is the water physically missing from the environment, or is the money/infrastructure missing?",
        "Match 'economic' to investment, pipes, and treatment facilities.",
      ],
    },
    {
      id: "exam-3-q05",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "consumption-food-water",
      guideRef: "water-management-singapore",
      question:
        "Which two of Singapore's Four National Taps are considered **weather-resilient** during severe regional droughts?",
      options: [
        "NEWater reclaimed wastewater and desalinated seawater.",
        "Local catchment reservoirs and imported water from Johor.",
        "Monsoon rainwater drains and imported bottled spring water.",
        "Marina Barrage storage and upstream Malaysian river water.",
      ],
      answerIndex: 0,
      explanation:
        "Both local catchment reservoirs (including Marina Barrage) and imported water from Johor depend directly on regional rainfall. By contrast, NEWater (reclaimed wastewater) and desalination (from the endless surrounding sea) continue producing water even during prolonged droughts.",
      hints: [
        "During a months-long drought, reservoirs in both Singapore and Johor drop.",
        "Which two taps do NOT rely on rain falling into reservoirs?",
      ],
    },
    {
      id: "exam-3-q06",
      kind: "mcq",
      difficulty: "core",
      topicId: "fast-fashion-interconnections",
      guideRef: "global-garment-chains",
      question:
        "Why do large international fast-fashion clothing brands typically keep design and marketing in HICs while outsourcing fabric dyeing and stitching to NEEs and LICs such as Bangladesh and Vietnam?",
      options: [
        "High-income countries lack electricity grids capable of powering electric sewing machines.",
        "International trade treaties strictly forbid clothing factories from operating inside Europe.",
        "Cotton plants can only be stitched together within ten kilometres of tropical coastlines.",
        "Lower wages, large labour forces, and container shipping sharply cut unit production costs.",
      ],
      answerIndex: 3,
      explanation:
        "Transnational corporations outsource labour-intensive stitching to NEEs and LICs to take advantage of lower wage costs, abundant skilled garment workers, looser environmental or labour regulations, and cheap global container shipping, maximising profit margins.",
      hints: [
        "Think about the main cost driver in stitching millions of cheap garments quickly.",
        "What economic advantage do countries like Bangladesh and Vietnam offer clothing TNCs?",
      ],
    },
    {
      id: "exam-3-q07",
      kind: "mcq",
      difficulty: "core",
      topicId: "fast-fashion-interconnections",
      guideRef: "fast-fashion-impacts",
      question:
        "Which Central Asian inland sea lost most of its volume after its feeder rivers were heavily diverted to irrigate thirsty cotton plantations?",
      options: [
        "The Dead Sea on the border of Jordan.",
        "The Aral Sea between Kazakhstan and Uzbekistan.",
        "The Red Sea beside the Arabian Peninsula.",
        "The Baltic Sea in northern mainland Europe.",
      ],
      answerIndex: 1,
      explanation:
        "Beginning in the 1960s, the Amu Darya and Syr Darya rivers were diverted to irrigate vast cotton fields across Central Asia, shrinking the Aral Sea to a tiny fraction of its former size and leaving behind toxic salty dust storms.",
      hints: [
        "It lies in Central Asia between Kazakhstan and Uzbekistan.",
        "Its shrinkage is one of Geography's most famous examples of unsustainable cotton irrigation.",
      ],
    },
    {
      id: "exam-3-q08",
      kind: "mcq",
      difficulty: "core",
      topicId: "fast-fashion-interconnections",
      guideRef: "fast-fashion-impacts",
      question:
        "How do cheap synthetic **polyester** garments pollute oceans even while consumers are still wearing and owning them?",
      options: [
        "Polyester dissolves into liquid petroleum whenever clothes are hung outdoors in sunlight.",
        "Polyester absorbs ocean salt from humid air and releases acid rain over nearby farms.",
        "Domestic machine washing sheds thousands of tiny plastic microfibres into waterways.",
        "Polyester garments attract oil spills directly onto beaches during coastal windstorms.",
      ],
      answerIndex: 2,
      explanation:
        "Polyester is a petroleum-based plastic fibre. Every wash cycle sheds hundreds of thousands of microscopic non-biodegradable plastic microfibres too small for many sewage filters, entering rivers, oceans, and marine food webs.",
      hints: [
        "Remember what polyester is actually made from (crude oil / plastic).",
        "Think about what breaks off synthetic fabric inside a washing machine.",
      ],
    },
    {
      id: "exam-3-q09",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "fast-fashion-interconnections",
      guideRef: "sustainable-slow-fashion",
      question:
        "Which consumer habit best represents **slow fashion** rather than fast fashion?",
      options: [
        "Buying fewer, durable, ethically made garments designed to be worn and repaired for years.",
        "Ordering twenty ultra-cheap trend outfits every month and discarding them after two wears.",
        "Choosing only synthetic polyester outfits because they cost less than organic cotton shirts.",
        "Throwing away any jacket with a loose button so retail brands can launch weekly micro-seasons.",
      ],
      answerIndex: 0,
      explanation:
        "Slow fashion rejects rapid micro-seasons and disposable clothing in favour of durability, capsule wardrobes, repairs, second-hand/thrifted items, and fair pay across transparent supply chains.",
      hints: [
        "Slow fashion prioritises quality and longevity over weekly micro-trends.",
        "Look for the option emphasising durability, repair, and fewer purchases.",
      ],
    },
    {
      id: "exam-3-q10",
      kind: "mcq",
      difficulty: "challenge",
      topicId: "fast-fashion-interconnections",
      guideRef: "year9-geo-skills",
      question:
        "A geographer maps average water use per person by country using a **choropleth map** (colour-shaded nations). What is a key limitation of this mapping technique?",
      options: [
        "Choropleth maps cannot display numerical data and only plot major world capital cities.",
        "Choropleth maps distort coastline shapes so small islands disappear completely from view.",
        "Choropleth maps require live satellite video rather than standard national statistics.",
        "Uniform country shading hides stark regional inequalities between wealthy cities and rural areas.",
      ],
      answerIndex: 3,
      explanation:
        "Because a choropleth map assigns one average colour shade to an entire administrative area (such as a whole country), it masks huge internal variations — for instance, water-rich capitals versus drought-hit rural provinces — and creates abrupt artificial jumps at borders.",
      hints: [
        "Think about what happens when an entire country like India or China is shaded one solid colour.",
        "Does every city and village inside a large nation consume the exact national average?",
      ],
    },

    // =================== SECTION B: SHORT ANSWER (11) ======================
    {
      id: "exam-3-q11",
      kind: "short",
      difficulty: "warmup",
      topicId: "consumption-food-water",
      guideRef: "global-food-security",
      question:
        "Singapore currently imports over `90%` of its food. Under its **\"30 by 30\"** agri-tech food security goal, what percentage of its nutritional needs does Singapore aim to produce locally by `2030`?",
      answer: {
        type: "number",
        value: 30,
        display: "30%",
      },
      traps: [
        {
          spec: { type: "number", value: 10 },
          feedback: "Roughly 10% was Singapore's starting local share; the 2030 target is 30%.",
        },
        {
          spec: { type: "number", value: 70 },
          feedback: "70% is the remaining imported share if Singapore reaches its 30% local production goal.",
        },
      ],
      solution: [
        "The '30 by 30' goal aims to build Singapore's agri-food industry capability to sustainably produce **30%** of its nutritional needs locally by **2030**.",
      ],
      commonError: "Confusing the target local share (30%) with the remaining imported share (70%).",
      hints: [
        "Look closely at the name of Singapore's food security strategy: '30 by 30'.",
        "The first number is the target percentage; the second number is the target year (2030).",
      ],
    },
    {
      id: "exam-3-q12",
      kind: "short",
      difficulty: "core",
      topicId: "consumption-food-water",
      guideRef: "global-water-scarcity",
      question:
        "Name the two-word geographical term for the hidden volume of freshwater used throughout the supply chain to grow, process, and manufacture an everyday item such as a cotton T-shirt or a kilogram of beef.",
      answer: {
        type: "text",
        accept: ["virtual water", "embedded water"],
        display: "Virtual water",
      },
      traps: [
        {
          spec: { type: "text", accept: ["grey water", "gray water"] },
          feedback:
            "Grey water is lightly used household wastewater from sinks/showers; hidden water embedded in products is virtual water.",
        },
        {
          spec: { type: "text", accept: ["potable water", "freshwater"] },
          feedback:
            "Potable water means safe drinking water; the hidden water used to manufacture goods is virtual water.",
        },
      ],
      solution: [
        "Even though you cannot see water inside a finished cotton shirt, thousands of litres were consumed to irrigate cotton, dye fabric, and finish the garment.",
        "Geographers call this hidden water footprint **virtual water**.",
      ],
      commonError: "Writing 'water footprint' alone or confusing it with 'grey water'.",
      hints: [
        "You don't physically see this water in the finished shirt — it is 'hidden' or 'v_____'.",
        "Two words: starts with 'v', ends with 'water'.",
      ],
    },
    {
      id: "exam-3-q13",
      kind: "short",
      difficulty: "core",
      topicId: "consumption-food-water",
      guideRef: "global-water-scarcity",
      diagram: SVG_VIRTUAL_WATER,
      question:
        "Use the Embedded Water Use bar chart to calculate the **total water (in litres)** needed to manufacture `1` pair of jeans and `2` cotton T-shirts.",
      answer: {
        type: "number",
        value: 12900,
        display: "12,900 L",
      },
      traps: [
        {
          spec: { type: "number", value: 10200 },
          feedback: "10,200 L is 1 pair of jeans + only 1 T-shirt (7,500 + 2,700). The question asks for TWO cotton T-shirts!",
        },
        {
          spec: { type: "number", value: 20400 },
          feedback: "You doubled both items! Only the cotton T-shirt is bought twice (1 × 7,500 + 2 × 2,700).",
        },
      ],
      solution: [
        "Read values from the bar chart: 1 pair of jeans = `7,500 L`; 1 cotton T-shirt = `2,700 L`.",
        "Calculate 2 cotton T-shirts: {{2 * 2700 = 5400}} L.",
        "Add 1 pair of jeans: {{7500 + 5400 = 12900}} L.",
      ],
      commonError: "Forgetting to multiply the T-shirt water footprint by 2 before adding.",
      hints: [
        "Read the exact values for '1 Pair Jeans' (7,500 L) and 'Cotton T-shirt' (2,700 L).",
        "Multiply 2,700 by 2 first, then add 7,500.",
      ],
    },
    {
      id: "exam-3-q14",
      kind: "short",
      difficulty: "challenge",
      topicId: "consumption-food-water",
      guideRef: "water-management-singapore",
      diagram: SVG_SG_TAPS,
      question:
        "Use the Singapore 2060 Water Supply chart. If Singapore's total daily water demand reaches `800` million gallons by `2060`, how many **million gallons** per day are planned to be supplied by **NEWater**?",
      answer: {
        type: "number",
        value: 440,
        display: "440",
      },
      traps: [
        {
          spec: { type: "number", value: 240 },
          feedback: "240 million gallons is 30% (Desalinated Water). Read the NEWater bar (55%).",
        },
        {
          spec: { type: "number", value: 360 },
          feedback: "360 million gallons is the remaining 45%, not NEWater's 55% share.",
        },
      ],
      solution: [
        "From the chart, NEWater is planned to supply `55%` of total demand by 2060.",
        "Calculate 55% of 800: {{0.55 * 800 = 440}} million gallons per day.",
      ],
      commonError: "Reading the desalination share (30%) instead of NEWater (55%).",
      hints: [
        "Check NEWater's percentage on the horizontal bar chart (55%).",
        "Calculate 50% of 800 (= 400) plus 5% of 800 (= 40).",
      ],
    },
    {
      id: "exam-3-q15",
      kind: "short",
      difficulty: "warmup",
      topicId: "fast-fashion-interconnections",
      guideRef: "global-garment-chains",
      question:
        "What **three-letter abbreviation** do geographers use for giant global companies (such as Inditex/Zara, H&M, or Nike) that design products in one country and manufacture or retail them across many countries?",
      answer: {
        type: "text",
        accept: ["tnc", "tncs", "transnational corporation", "transnational corporations"],
        display: "TNC",
      },
      traps: [
        {
          spec: { type: "text", accept: ["ngo", "ngos"] },
          feedback: "An NGO is a Non-Governmental Organisation (a charity/campaign group); global businesses are TNCs.",
        },
        {
          spec: { type: "text", accept: ["hic", "nee", "lic"] },
          feedback: "HIC/NEE/LIC classify country income levels; global companies operating across borders are TNCs.",
        },
      ],
      solution: [
        "**TNC** stands for **T**rans**n**ational **C**orporation — a company operating across multiple countries.",
      ],
      commonError: "Confusing TNC (for-profit global company) with NGO (non-governmental charity).",
      hints: [
        "It stands for 'Transnational Corporation'.",
        "Three letters: T _ _.",
      ],
    },
    {
      id: "exam-3-q16",
      kind: "short",
      difficulty: "core",
      topicId: "fast-fashion-interconnections",
      guideRef: "fast-fashion-impacts",
      question:
        "In which **year** did the eight-storey **Rana Plaza** garment factory building collapse in Dhaka, Bangladesh, killing more than `1,100` workers and sparking global scrutiny of fast-fashion safety?",
      answer: {
        type: "number",
        value: 2013,
        display: "2013",
      },
      traps: [
        {
          spec: { type: "number", value: 2015 },
          feedback: "2015 was the Nepal earthquake and the Paris Climate Agreement. Rana Plaza collapsed two years earlier in 2013.",
        },
        {
          spec: { type: "number", value: 2011 },
          feedback: "2011 was the Japan Tōhoku tsunami. Rana Plaza collapsed on 24 April 2013.",
        },
      ],
      solution: [
        "The **Rana Plaza** factory disaster occurred on **24 April 2013** in Savar, near Dhaka, Bangladesh.",
      ],
      commonError: "Mixing up case-study years (Japan 2011, Rana Plaza 2013, Nepal/Paris 2015).",
      hints: [
        "It happened halfway between the Japan tsunami (2011) and the Nepal earthquake (2015).",
        "Exact date: 24 April 20__.",
      ],
    },
    {
      id: "exam-3-q17",
      kind: "short",
      difficulty: "core",
      topicId: "fast-fashion-interconnections",
      guideRef: "sustainable-slow-fashion",
      question:
        "Name the international ethical certification scheme (one or two words) that guarantees cotton farmers in LICs and NEEs receive a guaranteed minimum price plus a community premium and safer working conditions.",
      answer: {
        type: "text",
        accept: ["fairtrade", "fair trade", "fairtrade certification", "fair trade certification"],
        display: "Fairtrade",
      },
      traps: [
        {
          spec: { type: "text", accept: ["greenwashing", "green washing"] },
          feedback:
            "Greenwashing is misleading eco-marketing without real change; the ethical farmer certification label is Fairtrade.",
        },
      ],
      solution: [
        "**Fairtrade** certification sets a Fairtrade Minimum Price to shield cotton growers from price crashes, bans forced/child labour, and funds community projects.",
      ],
      commonError: "Writing vague phrases like 'organic' (which covers pesticides rather than guaranteed minimum farmer prices).",
      hints: [
        "You see its blue-and-green logo on certified cotton clothing, coffee, and chocolate.",
        "Combine the words 'fair' and 'trade'.",
      ],
    },
    {
      id: "exam-3-q18",
      kind: "short",
      difficulty: "challenge",
      topicId: "fast-fashion-interconnections",
      guideRef: "year9-geo-skills",
      question:
        "A fast-fashion brand expands its annual production from `40` million garments to `52` million garments. Calculate the **percentage increase** in garment output.",
      answer: {
        type: "number",
        value: 30,
        display: "30%",
      },
      traps: [
        {
          spec: { type: "number", value: 12 },
          feedback: "12 million is the absolute increase; now divide 12 by the original 40 and multiply by 100.",
        },
        {
          spec: { type: "number", value: 23.1, tolerance: 0.1 },
          feedback: "You divided 12 by the new value (52) instead of the original value (40).",
        },
      ],
      solution: [
        "Find the absolute change: {{52 - 40 = 12}} million garments.",
        "Divide by the original output and multiply by 100: {{(12 / 40) * 100 = 0.3 * 100 = 30}}%.",
      ],
      commonError: "Dividing the increase by the final figure (52) instead of the original figure (40).",
      hints: [
        "Use Percentage Increase = ((New − Old) ÷ Old) × 100.",
        "Compute (52 − 40) ÷ 40, then multiply by 100.",
      ],
    },
    {
      id: "exam-3-q19",
      kind: "short",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "greenhouse-effect-causes",
      question:
        "Producing `1 kg` of beef emits roughly `60 kg` of CO₂-equivalent greenhouse gases, whereas `1 kg` of lentils emits `1.2 kg`. How many **times greater** is the carbon footprint of `1 kg` of beef than `1 kg` of lentils?",
      answer: {
        type: "number",
        value: 50,
        display: "50",
      },
      traps: [
        {
          spec: { type: "number", value: 58.8 },
          feedback: "58.8 kg is the difference (60 − 1.2). 'How many times greater' requires division: 60 ÷ 1.2.",
        },
        {
          spec: { type: "number", value: 72 },
          feedback: "You multiplied 60 × 1.2 instead of dividing 60 ÷ 1.2.",
        },
      ],
      solution: [
        "Divide beef emissions by lentil emissions: {{60 / 1.2 = 600 / 12 = 50}}.",
        "Beef's carbon footprint per kilogram is **50 times** greater than lentils', largely due to cattle methane and pasture deforestation.",
      ],
      commonError: "Subtracting the two values instead of dividing when asked 'how many times greater'.",
      hints: [
        "'How many times greater' means divide the larger number by the smaller number.",
        "Calculate 60 ÷ 1.2 (equivalent to 600 ÷ 12).",
      ],
    },
    {
      id: "exam-3-q20",
      kind: "short",
      difficulty: "core",
      topicId: "solving-climate-crisis",
      guideRef: "adaptation-strategies",
      question:
        "Name the water-efficient farming adaptation in which narrow perforated pipes deliver water slowly drop by drop directly onto crop roots, cutting evaporation losses in arid climates.",
      answer: {
        type: "text",
        accept: ["drip irrigation", "trickle irrigation", "micro-irrigation", "micro irrigation"],
        display: "Drip irrigation",
      },
      traps: [
        {
          spec: { type: "text", accept: ["flood irrigation", "sprinkler irrigation"] },
          feedback:
            "Flood and sprinkler irrigation lose large amounts of water to evaporation; slow root-level delivery is drip irrigation.",
        },
      ],
      solution: [
        "**Drip irrigation** (also called trickle irrigation) targets water directly at plant roots at low pressure, slashing evaporation waste in drought-prone regions.",
      ],
      commonError: "Writing just 'irrigation' without specifying the water-saving method (drip irrigation).",
      hints: [
        "Notice the clue in how the water leaves the narrow pipes: 'drop by drop'.",
        "Two words: ____ irrigation.",
      ],
    },
    {
      id: "exam-3-q21",
      kind: "short",
      difficulty: "challenge",
      topicId: "solving-climate-crisis",
      guideRef: "mitigation-strategies",
      question:
        "Roughly `30%` of food supplied to a city is wasted, creating landfill methane emissions. If a city receiving `2,000` tonnes of food per day halves its waste rate from `30%` down to `15%`, how many **tonnes** of food are saved each day?",
      answer: {
        type: "number",
        value: 300,
        display: "300",
      },
      traps: [
        {
          spec: { type: "number", value: 600 },
          feedback: "600 tonnes was the total waste at 30%. Cutting waste to 15% saves half of that (300 tonnes).",
        },
        {
          spec: { type: "number", value: 15 },
          feedback: "15% is the percentage-point reduction; calculate 15% of 2,000 tonnes.",
        },
      ],
      solution: [
        "Waste rate drops by {{30 - 15 = 15}} percentage points.",
        "Calculate 15% of 2,000 tonnes: {{0.15 * 2000 = 300}} tonnes of food saved every day.",
      ],
      commonError: "Giving the original wasted tonnage (600) instead of the tonnage saved (300).",
      hints: [
        "Find how many tonnes are wasted at 30% of 2,000, and how many at 15% of 2,000.",
        "Subtract the smaller waste figure from the larger one.",
      ],
    },

    // ==================== SECTION C: WRITTEN (4) ===========================
    {
      id: "exam-3-q22",
      kind: "written",
      difficulty: "core",
      topicId: "consumption-food-water",
      guideRef: "water-management-singapore",
      marks: 3,
      question:
        "Explain how Singapore combines THREE distinct supply sources from its Four National Taps to build reliable access to clean water despite having a tiny land area and no natural aquifers. (3 marks)",
      modelAnswer:
        "First, Singapore maximises local catchment by channelling rainwater across two-thirds of the island into 17 reservoirs including Marina Barrage. Second, it purifies treated used water into ultra-clean NEWater using microfiltration, reverse osmosis, and UV disinfection, creating a circular, drought-proof tap. Third, desalination plants remove salt from surrounding seawater via reverse osmosis, ensuring that even when Malaysia's Johor import agreement expires in 2061 or during prolonged dry spells, Singapore stays water self-sufficient.",
      markScheme: [
        {
          point: "Explains Local Catchment (reservoirs / Marina Barrage collecting rainwater across ~2/3 of Singapore) OR Imported Water from Johor.",
          keywords: ["catchment", "marina barrage", "reservoir", "rainwater", "johor", "malaysia", "import"],
        },
        {
          point: "Explains NEWater (reclaimed/recycled wastewater purified via microfiltration/reverse osmosis/UV, weather-resilient).",
          keywords: ["newater", "reclaim", "recycl", "microfiltration", "wastewater", "used water"],
        },
        {
          point: "Explains Desalination (removing salt from seawater via reverse osmosis) and links taps to drought resilience / self-sufficiency.",
          keywords: ["desalinat", "seawater", "salt", "drought", "self-sufficient", "resilien", "2061"],
        },
      ],
      commonError: "Simply listing three tap names without explaining how each source works or contributes to security.",
      hints: [
        "Name three specific taps (e.g. Local Catchment / Marina Barrage, NEWater, and Desalination).",
        "Briefly explain HOW each one supplies water and WHY diversifying taps protects Singapore from droughts.",
      ],
    },
    {
      id: "exam-3-q23",
      kind: "written",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "impacts-on-people",
      marks: 3,
      question:
        "Explain how shifting rainfall and hotter temperatures in semi-arid regions such as the Sahel undermine rural livelihoods and trigger food shortages. (3 marks)",
      modelAnswer:
        "Higher temperatures accelerate evaporation and combine with more erratic, delayed monsoon rains to cause prolonged droughts across the Sahel. Dry, cracked topsoil suffers desertification and fails to support staple crops like millet and sorghum or grazing pastures for livestock, leading directly to harvest failure. Because most rural families are subsistence farmers with low incomes and scarce irrigation infrastructure, falling yields drive up local food prices, cause malnutrition, and force rural-to-urban migration.",
      markScheme: [
        {
          point: "Links warming and erratic rainfall to higher evaporation, prolonged droughts, or soil degradation/desertification.",
          keywords: ["evaporation", "drought", "desertification", "soil", "erratic", "dry"],
        },
        {
          point: "Explains direct agricultural impact: staple crop failure (millet/sorghum), shrinking pastures, or dying livestock.",
          keywords: ["crop failure", "harvest", "livestock", "pasture", "yield", "millet", "cattle"],
        },
        {
          point: "Explains human/socio-economic consequence: higher food prices, hunger/malnutrition, loss of farm income, or forced migration.",
          keywords: ["price", "malnutrition", "hunger", "famine", "migration", "subsistence", "poverty", "income"],
        },
      ],
      commonError: "Saying 'it gets hotter so people starve' without explaining the geographical chain (evaporation/drought → crop & livestock loss → prices/migration).",
      hints: [
        "Build a 3-step causal chain: physical climate change → impact on soil, crops, and livestock → impact on rural families.",
        "Use key vocabulary such as evaporation, drought, desertification, crop failure, and malnutrition or migration.",
      ],
    },
    {
      id: "exam-3-q24",
      kind: "written",
      difficulty: "challenge",
      topicId: "fast-fashion-interconnections",
      guideRef: "fast-fashion-impacts",
      marks: 4,
      question:
        "\"Global apparel manufacturing brings more harm than benefit to NEEs and LICs such as Bangladesh.\" To what extent do you agree? Weigh economic benefits against social and environmental costs. (4 marks)",
      modelAnswer:
        "I largely agree that unregulated fast fashion inflicts severe social and environmental damage on producer nations, yet its economic benefits cannot be ignored. On the harmful side, intense pressure from Western TNCs for rock-bottom prices and rapid turnaround leads to poverty wages, long hours, and dangerous factories — tragically illustrated by the 2013 Rana Plaza collapse in Dhaka killing over 1,100 workers — while untreated toxic textile dyes pollute local rivers and thirsty cotton farming drains freshwater supplies. On the other hand, the garment sector provides millions of formal jobs in Bangladesh (especially empowering women with independent income), generates vital export earnings, and funds national infrastructure such as roads and schools. Overall, fast fashion currently causes greater harm whenever weak regulation lets TNCs shift pollution and safety risks onto workers, though stricter safety accords and Fairtrade wages could tilt the balance toward genuine development.",
      markScheme: [
        {
          point: "Explains social harm with specific evidence (poverty wages, unsafe factories, child labour, or the 2013 Rana Plaza collapse killing >1,100).",
          keywords: ["rana plaza", "1,100", "unsafe", "low wage", "poverty wage", "exploitation", "dhaka", "child labour"],
        },
        {
          point: "Explains environmental harm (toxic textile dyes polluting rivers, huge cotton water use / Aral Sea, or textile waste/microfibres).",
          keywords: ["toxic", "dye", "river", "pollution", "water", "aral sea", "microfibre", "landfill"],
        },
        {
          point: "Provides a balanced counter-argument showing economic benefits (millions of jobs, empowering female workers, export revenue, infrastructure investment).",
          keywords: ["jobs", "employment", "women", "female", "export", "infrastructure", "tax", "development"],
        },
        {
          point: "Reaches a clear, reasoned 'to what extent' judgement weighing harms against development benefits.",
          keywords: ["largely agree", "partly agree", "overall", "however", "on the other hand", "balance", "fairtrade"],
        },
      ],
      commonError: "Describing only factory disasters without acknowledging why countries like Bangladesh actively seek garment exports for jobs and GDP growth.",
      hints: [
        "Include BOTH a social harm (Rana Plaza 2013, low wages) AND an environmental harm (toxic dyes, cotton water use).",
        "Balance this with positive economic impacts (jobs, female empowerment, export income), then give a clear final judgement.",
      ],
    },
    {
      id: "exam-3-q25",
      kind: "written",
      difficulty: "challenge",
      topicId: "solving-climate-crisis",
      guideRef: "singapore-green-plan-action",
      marks: 4,
      question:
        "Explain TWO ways moving to a circular economy cuts greenhouse gas emissions, and evaluate whether individual shoppers or governments have greater power to make this transition succeed. (4 marks)",
      modelAnswer:
        "First, repairing, reusing, and recycling materials such as aluminium, textiles, and electronics sharply lowers the fossil-fuel energy needed to mine, refine, and transport virgin raw materials, cutting industrial CO₂ emissions. Second, diverting organic waste and discarded clothes away from landfills prevents anaerobic decomposition that releases potent methane gas (CH₄) and avoids incinerator emissions. While individual shoppers play a valuable role by embracing slow fashion, capsule wardrobes, and second-hand swaps to shift market demand, governments hold far greater systemic power because they can pass Extended Producer Responsibility laws, ban single-use packaging, fund recycling infrastructure, and enforce targets like the Singapore Green Plan 2030. Therefore, although conscious consumer habits spark cultural momentum, binding government regulation is essential to transform entire global supply chains at speed.",
      markScheme: [
        {
          point: "First mitigation link: reusing/recycling reduces fossil-fuel energy and CO₂ used in extracting and manufacturing virgin raw materials.",
          keywords: ["virgin", "extract", "fossil", "energy", "industrial", "co2", "manufacturing"],
        },
        {
          point: "Second mitigation link: diverting food/textile waste from landfills cuts methane (CH₄) emissions (or avoids incineration CO₂).",
          keywords: ["methane", "ch4", "landfill", "decompos", "incinerat", "organic waste"],
        },
        {
          point: "Explains the role and limits of individual consumers (slow fashion, repair, buying second-hand, shifting demand).",
          keywords: ["slow fashion", "second-hand", "second hand", "repair", "capsule", "demand", "habit"],
        },
        {
          point: "Evaluates why governments hold greater systemic power (producer responsibility laws, bans, recycling infrastructure, Singapore Green Plan) with a clear judgement.",
          keywords: ["producer responsibility", "regulation", "law", "ban", "systemic", "green plan", "therefore"],
        },
      ],
      commonError: "Saying 'recycling is good for the planet' without linking specifically to greenhouse gases (energy/CO₂ in mining & CH₄ in landfills).",
      hints: [
        "Explain two clear GHG pathways: less energy for virgin extraction (less CO₂) and less rotting landfill waste (less CH₄).",
        "Then compare what individuals can do (slow fashion, reuse) against systemic government laws (EPR, bans, national targets) to reach a verdict.",
      ],
    },
  ],
};
