import type { ExamPaper } from "../types";

const SVG_GREENHOUSE = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy transfer diagram of the greenhouse effect with arrows labelled W, X, Y and Z">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Earth's Atmospheric Energy Balance</text>
  <!-- Sun -->
  <circle cx="62" cy="64" r="22" fill="var(--bad)" fill-opacity="0.25" stroke="var(--bad)" stroke-width="2"/>
  <text x="62" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Sun</text>
  <!-- Space label -->
  <text x="488" y="48" text-anchor="middle" font-size="11" fill="var(--ink-2)">Outer Space</text>
  <!-- Atmosphere greenhouse gas band -->
  <rect x="24" y="96" width="512" height="36" rx="8" fill="var(--brand)" fill-opacity="0.18" stroke="var(--brand)" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="280" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Greenhouse Gas Layer (CO₂, CH₄, N₂O)</text>
  <!-- Earth surface -->
  <rect x="24" y="198" width="512" height="34" rx="6" fill="var(--good)" fill-opacity="0.22" stroke="var(--ink)" stroke-width="1.8"/>
  <text x="280" y="219" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Earth's Surface</text>
  <!-- Arrow W: Incoming solar radiation reaching surface -->
  <line x1="88" y1="74" x2="174" y2="190" stroke="var(--ink)" stroke-width="2.5"/>
  <polygon points="168,191 179,197 177,185" fill="var(--ink)"/>
  <circle cx="136" cy="144" r="12" fill="var(--ink)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="136" y="148" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">W</text>
  <!-- Arrow X: Reflected solar radiation back to space -->
  <line x1="176" y1="192" x2="246" y2="56" stroke="var(--ink-2)" stroke-width="2" stroke-dasharray="5 3"/>
  <polygon points="240,56 250,48 250,61" fill="var(--ink-2)"/>
  <circle cx="222" cy="78" r="12" fill="var(--ink-2)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="222" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">X</text>
  <!-- Arrow Y: Outgoing long-wave heat rising from surface -->
  <line x1="334" y1="196" x2="366" y2="136" stroke="var(--bad)" stroke-width="2.8"/>
  <polygon points="360,136 370,128 370,141" fill="var(--bad)"/>
  <circle cx="348" cy="166" r="12" fill="var(--bad)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="348" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">Y</text>
  <!-- Small portion escaping to space -->
  <line x1="376" y1="96" x2="404" y2="52" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <polygon points="399,52 409,45 408,57" fill="var(--bad)"/>
  <!-- Arrow Z: Re-radiated downward back to Earth -->
  <line x1="406" y1="132" x2="452" y2="190" stroke="var(--brand)" stroke-width="2.8"/>
  <polygon points="446,192 458,197 455,185" fill="var(--brand)"/>
  <circle cx="436" cy="162" r="12" fill="var(--brand)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="436" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">Z</text>
</svg>`;

const SVG_TEMP_ANOMALY = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of global mean surface temperature anomaly from 1900 to 2020 in degrees Celsius">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Global Temperature Anomaly (Relative to 1850–1900 Baseline)</text>
  <!-- Grid lines and Y axis labels (0.0 at y=200, 1.2 at y=56, 120px per 1.0 C) -->
  <line x1="72" y1="200" x2="516" y2="200" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="72" y1="152" x2="516" y2="152" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="72" y1="104" x2="516" y2="104" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="72" y1="56" x2="516" y2="56" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="72" y1="46" x2="72" y2="200" stroke="var(--ink)" stroke-width="1.6"/>
  <text x="64" y="204" text-anchor="end" font-size="11" fill="var(--ink-2)">0.0°C</text>
  <text x="64" y="156" text-anchor="end" font-size="11" fill="var(--ink-2)">+0.4°C</text>
  <text x="64" y="108" text-anchor="end" font-size="11" fill="var(--ink-2)">+0.8°C</text>
  <text x="64" y="60" text-anchor="end" font-size="11" fill="var(--ink-2)">+1.2°C</text>
  <!-- Data polyline: 1900(96,200), 1940(228,176:+0.2), 1980(360,152:+0.4), 1992(400,170:+0.25 dip), 2000(426,116:+0.7), 2020(492,56:+1.2) -->
  <polyline points="96,200 228,176 360,152 400,170 426,116 492,56" fill="none" stroke="var(--bad)" stroke-width="3"/>
  <!-- Data points and labels -->
  <circle cx="96" cy="200" r="4.5" fill="var(--bad)"/>
  <circle cx="228" cy="176" r="4.5" fill="var(--bad)"/>
  <text x="228" y="166" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">+0.2°C</text>
  <circle cx="360" cy="152" r="4.5" fill="var(--bad)"/>
  <text x="352" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">+0.4°C</text>
  <circle cx="400" cy="170" r="4.5" fill="var(--brand)"/>
  <text x="408" y="186" text-anchor="middle" font-size="10" fill="var(--brand)">1992 dip</text>
  <circle cx="426" cy="116" r="4.5" fill="var(--bad)"/>
  <text x="412" y="108" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">+0.7°C</text>
  <circle cx="492" cy="56" r="5" fill="var(--bad)"/>
  <text x="492" y="45" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">+1.2°C</text>
  <!-- X-axis labels -->
  <text x="96" y="218" text-anchor="middle" font-size="11" fill="var(--ink-2)">1900</text>
  <text x="228" y="218" text-anchor="middle" font-size="11" fill="var(--ink-2)">1940</text>
  <text x="360" y="218" text-anchor="middle" font-size="11" fill="var(--ink-2)">1980</text>
  <text x="426" y="218" text-anchor="middle" font-size="11" fill="var(--ink-2)">2000</text>
  <text x="492" y="218" text-anchor="middle" font-size="11" fill="var(--ink-2)">2020</text>
  <text x="294" y="238" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">Year</text>
</svg>`;

const SVG_SG_SOLAR = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing Singapore solar capacity growing from 0.4 GWp in 2020 to 1.5 GWp in 2025 and a 2.0 GWp target in 2030">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Singapore Green Plan 2030: Solar Capacity (GWp)</text>
  <!-- Axes -->
  <line x1="80" y1="198" x2="508" y2="198" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="80" y1="52" x2="80" y2="198" stroke="var(--ink)" stroke-width="1.6"/>
  <!-- Horizontal grid (0 to 2.0 GWp -> 140px = 70px per GWp) -->
  <line x1="80" y1="163" x2="508" y2="163" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="80" y1="128" x2="508" y2="128" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="80" y1="93" x2="508" y2="93" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="80" y1="58" x2="508" y2="58" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="70" y="202" text-anchor="end" font-size="11" fill="var(--ink-2)">0.0</text>
  <text x="70" y="167" text-anchor="end" font-size="11" fill="var(--ink-2)">0.5</text>
  <text x="70" y="132" text-anchor="end" font-size="11" fill="var(--ink-2)">1.0</text>
  <text x="70" y="97" text-anchor="end" font-size="11" fill="var(--ink-2)">1.5</text>
  <text x="70" y="62" text-anchor="end" font-size="11" fill="var(--ink-2)">2.0</text>
  <!-- Bar 1: 2020 = 0.4 GWp -> height 28px -> y=170 -->
  <rect x="132" y="170" width="76" height="28" rx="4" fill="var(--brand)" fill-opacity="0.72"/>
  <text x="170" y="162" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">0.4 GWp</text>
  <text x="170" y="218" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink-2)">2020</text>
  <!-- Bar 2: 2025 = 1.5 GWp -> height 105px -> y=93 -->
  <rect x="262" y="93" width="76" height="105" rx="4" fill="var(--brand)" fill-opacity="0.88"/>
  <text x="300" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">1.5 GWp</text>
  <text x="300" y="218" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink-2)">2025</text>
  <!-- Bar 3: 2030 Target = 2.0 GWp -> height 140px -> y=58 -->
  <rect x="392" y="58" width="76" height="140" rx="4" fill="var(--good)" fill-opacity="0.82"/>
  <text x="430" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">2.0 GWp</text>
  <text x="430" y="218" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink-2)">2030 Target</text>
  <text x="294" y="238" text-anchor="middle" font-size="11" fill="var(--ink-2)">Installed Solar Photovoltaic Capacity (Gigawatt-peak)</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-2",
  title: "Year 9 Geography Mock 2: The Climate Crisis (Science, Impacts & Solutions)",
  calculator: true,
  minutes: 45,
  questions: [
    // ======================== SECTION A: MCQ (10) ==========================
    {
      id: "exam-2-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "climate-change-science-impacts",
      guideRef: "greenhouse-effect-causes",
      question: "Which statement accurately distinguishes **weather** from **climate**?",
      options: [
        "Weather is measured only over oceans, whereas climate is measured only over land.",
        "Weather describes short-term daily conditions, whereas climate is the 30-year average pattern.",
        "Weather tracks greenhouse gas levels, whereas climate records sudden afternoon storms.",
        "Weather never varies between seasons, whereas climate changes completely every single week.",
      ],
      answerIndex: 1,
      explanation:
        "Weather refers to day-to-day atmospheric conditions (such as today's temperature or a brief thunderstorm), while climate is the long-term average weather pattern of a place calculated over at least 30 years.",
      hints: [
        "Think about the classic saying: climate is what you expect; weather is what you get today.",
        "Which timescale (days versus 30+ years) defines climate?",
      ],
    },
    {
      id: "exam-2-q02",
      kind: "mcq",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "greenhouse-effect-causes",
      diagram: SVG_GREENHOUSE,
      question:
        "Study the diagram of Earth's atmospheric energy balance. What form of energy is represented by arrow Y?",
      options: [
        "Incoming short-wave ultraviolet sunlight passing straight through clear air.",
        "Solar radiation bouncing off bright polar ice sheets straight into outer space.",
        "Geothermal heat conducted directly from Earth's molten outer core through rock.",
        "Outgoing long-wave infrared heat radiated upward from Earth's warmed surface.",
      ],
      answerIndex: 3,
      explanation:
        "Earth's surface absorbs incoming short-wave solar radiation (W) and warms up, then emits outgoing long-wave infrared heat (Y). Greenhouse gases absorb part of this infrared radiation and re-radiate it back toward Earth (Z).",
      hints: [
        "Look at where arrow Y starts (Earth's surface) and where it stops (the greenhouse gas layer).",
        "Incoming sunlight is short-wave; what wavelength of heat does a warmed Earth emit?",
      ],
    },
    {
      id: "exam-2-q03",
      kind: "mcq",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "evidence-climate-change",
      question:
        "Why do climate scientists drill deep ice cores in Antarctica and Greenland to study past climate change?",
      options: [
        "Tiny trapped air bubbles preserve ancient atmospheric CO₂ levels from up to 800,000 years ago.",
        "Solid glacier ice records exact daily wind speeds and tornado tracks from ancient centuries.",
        "Frozen seawater layers show the exact year every volcanic island first erupted on Earth.",
        "Ice cores trap fossilised tropical fish that prove polar regions were always warm deserts.",
      ],
      answerIndex: 0,
      explanation:
        "As snow compacts into glacier ice over hundreds of thousands of years, microscopic bubbles of ancient air are sealed inside. Analysing those bubbles lets scientists measure past CO₂ and methane concentrations alongside temperature proxies.",
      hints: [
        "Think about what gets sealed inside annual snow layers as they compress into solid ice.",
        "How can scientists measure atmospheric CO₂ from thousands of years before thermometers existed?",
      ],
    },
    {
      id: "exam-2-q04",
      kind: "mcq",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "physical-impacts",
      question:
        "Why does melting land-based ice in Greenland raise global sea levels, whereas melting floating Arctic sea ice does **not** directly raise sea levels?",
      options: [
        "Arctic sea ice evaporates instantly into outer space before turning into liquid water.",
        "Greenland ice is made of heavier salty water that sinks to push beaches upward.",
        "Floating sea ice already displaces its own mass of seawater, unlike land-based ice.",
        "Arctic sea ice never melts during summer because ocean currents stay below freezing.",
      ],
      answerIndex: 2,
      explanation:
        "Just like an ice cube melting in a glass of water, floating sea ice already displaces a volume of water equal to its weight. By contrast, glaciers and ice sheets resting on land (Greenland, Antarctica) add brand-new water to the ocean when they melt. (Melting sea ice still matters because dark ocean absorbs more heat!)",
      hints: [
        "Imagine an ice cube floating in a full glass of water — does the glass overflow when it melts?",
        "Now imagine dropping an extra ice cube from the table (land ice) into the glass.",
      ],
    },
    {
      id: "exam-2-q05",
      kind: "mcq",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "impacts-on-people",
      question: "Which statement best explains the concept of **climate injustice**?",
      options: [
        "All countries release identical per-capita CO₂ emissions and face equal coastal flood risks.",
        "Wealthy nations experience the worst droughts because they build too many renewable wind farms.",
        "Mountainous countries cause global sea-level rise by pumping freshwater into coastal seas.",
        "Low-emitting LICs suffer severe climate impacts while having the least wealth to adapt.",
      ],
      answerIndex: 3,
      explanation:
        "Climate injustice highlights the deep unfairness that Low-Income Countries and small island states have contributed a tiny share of historical greenhouse gas emissions, yet suffer disproportionately severe floods, droughts, and cyclones with far fewer financial resources to adapt.",
      hints: [
        "Compare who emitted the most historical CO₂ with who faces the harshest climate risks.",
        "Why is this mismatch considered a question of global fairness or justice?",
      ],
    },
    {
      id: "exam-2-q06",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "solving-climate-crisis",
      guideRef: "mitigation-strategies",
      question:
        "Which action is an example of **climate mitigation** rather than **climate adaptation**?",
      options: [
        "Raising coastal sea walls around low-lying island airports to hold back storm surges.",
        "Replacing coal-fired power stations with offshore wind turbines and rooftop solar panels.",
        "Planting drought-tolerant crops to cope with lower annual rainfall in semi-arid regions.",
        "Installing early-warning heatwave SMS alerts for elderly residents in dense cities.",
      ],
      answerIndex: 1,
      explanation:
        "Mitigation tackles the root cause of climate change by reducing or removing greenhouse gas emissions — switching from coal to wind and solar cuts CO₂ output. Raising sea walls, drought-tolerant crops, and heatwave alerts are all adaptation measures helping people live safely with climate impacts.",
      hints: [
        "Mitigation = cutting or removing greenhouse gases; Adaptation = adjusting to live with the effects.",
        "Which option reduces CO₂ entering the atmosphere?",
      ],
    },
    {
      id: "exam-2-q07",
      kind: "mcq",
      difficulty: "core",
      topicId: "solving-climate-crisis",
      guideRef: "adaptation-strategies",
      question:
        "How does restoring coastal mangrove forests act as a soft-engineering climate adaptation?",
      options: [
        "Dense mangrove roots trap sediment, stabilise shorelines, and absorb storm-surge wave energy.",
        "Tall mangrove canopies reflect incoming sunlight to freeze tropical seawater into protective ice.",
        "Mangrove trunks replace concrete floodgates by pumping seawater inland into freshwater lakes.",
        "Mangrove leaves filter salt out of ocean waves so floods can irrigate inland wheat farms.",
      ],
      answerIndex: 0,
      explanation:
        "Mangroves work with natural coastal processes (soft engineering): their tangled aerial roots slow incoming waves, reduce storm-surge erosion, trap mud to build up coastlines, and simultaneously store huge amounts of 'blue carbon'.",
      hints: [
        "Think about the physical structure of mangrove roots along tropical shorelines.",
        "How do dense roots affect wave energy and coastal sediment?",
      ],
    },
    {
      id: "exam-2-q08",
      kind: "mcq",
      difficulty: "core",
      topicId: "solving-climate-crisis",
      guideRef: "international-agreements",
      question:
        "What is the central global temperature target agreed by nations under the 2015 Paris Agreement?",
      options: [
        "Freeze global average temperature permanently below 0°C by shutting down all shipping.",
        "Allow global warming to reach 4.0°C so northern countries can grow extra cereal crops.",
        "Limit global warming well below 2°C above pre-industrial levels and pursue efforts for 1.5°C.",
        "Reduce atmospheric CO₂ to zero parts per million so Earth loses its natural greenhouse effect.",
      ],
      answerIndex: 2,
      explanation:
        "Nearly 200 nations signed the 2015 Paris Agreement pledging to hold global temperature rise well below 2°C above pre-industrial levels while pursuing efforts to limit warming to 1.5°C, avoiding the worst tipping points.",
      hints: [
        "Recall the two famous degree figures cited at every COP climate summit since 2015.",
        "Zero CO₂ would freeze Earth completely, while 4°C would be catastrophic.",
      ],
    },
    {
      id: "exam-2-q09",
      kind: "mcq",
      difficulty: "core",
      topicId: "solving-climate-crisis",
      guideRef: "singapore-green-plan-action",
      question:
        "Which combination of policies forms part of the **Singapore Green Plan 2030**?",
      options: [
        "Building new coal-fired power stations and clearing central nature reserves for highways.",
        "Abandoning public MRT rail networks in favour of subsidised petrol cars for every household.",
        "Stopping all rainwater collection to rely completely on bottled water imported by aircraft.",
        "Planting one million more trees, expanding solar energy, and transitioning to cleaner-energy vehicles.",
      ],
      answerIndex: 3,
      explanation:
        "The Singapore Green Plan 2030 spans five pillars — including City in Nature (planting 1 million more trees), Energy Reset (scaling solar to 2 GWp and cleaner-energy vehicles), and Resilient Future (coastal protection and food security).",
      hints: [
        "Recall Singapore's 'City in Nature' and 'Energy Reset' pillars.",
        "Eliminate options that increase fossil fuel use or destroy urban biodiversity.",
      ],
    },
    {
      id: "exam-2-q10",
      kind: "mcq",
      difficulty: "challenge",
      topicId: "volcanoes-living-with-risk",
      guideRef: "volcanic-hazards",
      question:
        "Why did the massive 1991 eruption of Mount Pinatubo in the Philippines cause a brief dip of about `0.5°C` in global average temperatures during 1992?",
      options: [
        "Lava flowing into the Pacific Ocean absorbed enough heat to chill the entire atmosphere.",
        "Sulphate aerosols and fine ash blasted into the stratosphere reflected incoming solar radiation.",
        "Falling volcanic ash smothered forests worldwide, doubling oxygen levels across the tropics.",
        "Explosive eruptions sucked greenhouse gases out of the stratosphere back into the mantle.",
      ],
      answerIndex: 1,
      explanation:
        "Major explosive volcanic eruptions inject millions of tonnes of sulphur dioxide into the stratosphere, forming tiny reflective sulphate aerosol droplets that bounce incoming sunlight back into space, temporarily cooling Earth for 1–2 years (a natural climate factor).",
      hints: [
        "Think about what reaches high into the stratosphere during a giant explosive eruption.",
        "Does a hazy reflective veil of sulphate droplets trap heat or block incoming sunlight?",
      ],
    },

    // =================== SECTION B: SHORT ANSWER (11) ======================
    {
      id: "exam-2-q11",
      kind: "short",
      difficulty: "warmup",
      topicId: "climate-change-science-impacts",
      guideRef: "greenhouse-effect-causes",
      question:
        "Name the potent greenhouse gas (chemical formula `CH₄`) released in large quantities by cattle livestock, flooded rice paddies, landfill sites, and thawing permafrost.",
      answer: {
        type: "text",
        accept: ["methane", "ch4"],
        display: "Methane",
      },
      traps: [
        {
          spec: { type: "text", accept: ["carbon dioxide", "co2"] },
          feedback:
            "Carbon dioxide (CO₂) comes mainly from burning fossil fuels and deforestation; CH₄ from livestock and permafrost is methane.",
        },
        {
          spec: { type: "text", accept: ["nitrous oxide", "n2o"] },
          feedback: "Nitrous oxide is N₂O (mainly from fertilisers); CH₄ is methane.",
        },
      ],
      solution: [
        "`CH₄` consists of one carbon atom and four hydrogen atoms: **methane**.",
        "Although methane stays in the atmosphere for a shorter time than CO₂, it traps far more heat per molecule over a 20-year period.",
      ],
      commonError: "Writing 'carbon dioxide' whenever any greenhouse gas is asked.",
      hints: [
        "Its chemical formula is CH₄.",
        "It is the main gas produced by ruminant livestock (like cows) and decomposing organic matter without oxygen.",
      ],
    },
    {
      id: "exam-2-q12",
      kind: "short",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "physical-impacts",
      question:
        "Name the physical process in which warming ocean water increases in volume, causing roughly half of modern global sea-level rise.",
      answer: {
        type: "text",
        accept: ["thermal expansion", "ocean thermal expansion"],
        display: "Thermal expansion",
      },
      traps: [
        {
          spec: { type: "text", accept: ["ocean acidification", "acidification"] },
          feedback:
            "Ocean acidification occurs when seawater absorbs CO₂ and lowers pH; warming water taking up more space is thermal expansion.",
        },
        {
          spec: { type: "text", accept: ["coral bleaching", "bleaching"] },
          feedback:
            "Coral bleaching is corals expelling algae in warm water; the physical volume increase of warm ocean water is thermal expansion.",
        },
      ],
      solution: [
        "When ocean water absorbs excess heat from the atmosphere, water molecules move faster and spread slightly farther apart.",
        "Across oceans several kilometres deep, this **thermal expansion** raises global sea level significantly alongside melting land ice.",
      ],
      commonError: "Assuming sea-level rise comes solely from melting ice and forgetting warm water expands.",
      hints: [
        "It is a two-word physics term: 'thermal' (heat) + the noun for getting larger in volume.",
        "What happens to most liquids when you heat them up?",
      ],
    },
    {
      id: "exam-2-q13",
      kind: "short",
      difficulty: "warmup",
      topicId: "climate-change-science-impacts",
      guideRef: "evidence-climate-change",
      diagram: SVG_TEMP_ANOMALY,
      question:
        "Using the Global Temperature Anomaly graph, calculate the rise in temperature anomaly (in `°C`) between `1980` and `2020`.",
      answer: {
        type: "number",
        value: 0.8,
        display: "0.8°C",
      },
      traps: [
        {
          spec: { type: "number", value: 1.6 },
          feedback: "You added +1.2°C and +0.4°C instead of finding the difference (+1.2 − +0.4).",
        },
        {
          spec: { type: "number", value: 1.2 },
          feedback: "+1.2°C is the 2020 anomaly above the 1850–1900 baseline; subtract the 1980 value (+0.4°C).",
        },
      ],
      solution: [
        "Read the 1980 value from the graph: `+0.4°C`.",
        "Read the 2020 value from the graph: `+1.2°C`.",
        "Subtract to find the increase: {{1.2 - 0.4 = 0.8}}°C.",
      ],
      commonError: "Reading only the final 2020 figure (+1.2°C) instead of subtracting the 1980 starting point.",
      hints: [
        "Locate both 1980 and 2020 on the horizontal axis and read their vertical values.",
        "Subtract the 1980 anomaly (+0.4°C) from the 2020 anomaly (+1.2°C).",
      ],
    },
    {
      id: "exam-2-q14",
      kind: "short",
      difficulty: "core",
      topicId: "fast-fashion-interconnections",
      guideRef: "year9-geo-skills",
      question:
        "When geographers describe a climate graph using the **TEA** structure, `T` stands for Trend and `E` stands for Evidence. What single word does `A` stand for — referring to a data point (such as a brief cooling dip after a volcanic eruption) that breaks the main pattern?",
      answer: {
        type: "text",
        accept: ["anomaly", "anomalies"],
        display: "Anomaly",
      },
      traps: [
        {
          spec: { type: "text", accept: ["average", "axis"] },
          feedback:
            "In TEA graph description, A stands for Anomaly — an unusual value that does not fit the general trend.",
        },
      ],
      solution: [
        "TEA stands for **T**rend (overall pattern), **E**vidence (specific figures with units), and **A**nomaly (any exception or outlier that departs from the trend).",
      ],
      commonError: "Forgetting to mention anomalies and losing the top mark in graph-description exam questions.",
      hints: [
        "It is another word for an outlier or exception to a trend.",
        "It begins with 'an-' and also appears in 'temperature anomaly'.",
      ],
    },
    {
      id: "exam-2-q15",
      kind: "short",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "physical-impacts",
      question:
        "Rising Arctic temperatures thaw frozen permafrost, releasing trapped greenhouse gases that trap even more heat and thaw yet more permafrost. Is this amplifying cycle called a **positive** or **negative** feedback loop?",
      answer: {
        type: "text",
        accept: ["positive", "positive feedback", "positive feedback loop"],
        display: "Positive feedback loop",
      },
      traps: [
        {
          spec: { type: "text", accept: ["negative", "negative feedback", "negative feedback loop"] },
          feedback:
            "In science and Geography, 'positive' does NOT mean 'good' — it means amplifying the original change. A negative feedback loop stabilises or cancels a change.",
        },
      ],
      solution: [
        "A **positive feedback loop** amplifies an initial change so it speeds up further.",
        "Even though permafrost thaw is harmful to people, it reinforces warming, so it is a **positive** feedback loop.",
      ],
      commonError: "Writing 'negative' because permafrost thaw has bad consequences for humanity.",
      hints: [
        "Careful! In climate science, 'positive' means amplifying (reinforcing), NOT 'good'.",
        "Does the loop reverse the warming or accelerate it in the same direction?",
      ],
    },
    {
      id: "exam-2-q16",
      kind: "short",
      difficulty: "core",
      topicId: "solving-climate-crisis",
      guideRef: "mitigation-strategies",
      question:
        "Write out the full name of the mitigation technology abbreviated as **CCS**, which traps CO₂ emissions from power plants or factories and pumps the gas deep underground into porous rock formations.",
      answer: {
        type: "text",
        accept: ["carbon capture and storage", "carbon capture & storage", "carbon capture storage"],
        display: "Carbon capture and storage",
      },
      traps: [
        {
          spec: { type: "text", accept: ["carbon offsetting", "carbon credit", "carbon credits"] },
          feedback:
            "Carbon offsetting pays for emissions cuts elsewhere (e.g. planting trees); CCS stands for Carbon Capture and Storage.",
        },
      ],
      solution: [
        "**C**arbon **C**apture and **S**torage (CCS) captures CO₂ before it enters the atmosphere and stores it permanently in deep geological reservoirs such as depleted oil/gas fields.",
      ],
      commonError: "Confusing CCS with carbon offsetting or afforestation.",
      hints: [
        "The first C stands for the element in CO₂; the second C means trapping it.",
        "The S refers to keeping the trapped gas permanently underground.",
      ],
    },
    {
      id: "exam-2-q17",
      kind: "short",
      difficulty: "core",
      topicId: "solving-climate-crisis",
      guideRef: "international-agreements",
      question:
        "Under the 2015 Paris Agreement, each country submits its own voluntary national emissions-reduction pledge, reviewed every five years. What does the abbreviation **NDC** stand for?",
      answer: {
        type: "text",
        accept: [
          "nationally determined contribution",
          "nationally determined contributions",
        ],
        display: "Nationally Determined Contribution",
      },
      traps: [
        {
          spec: { type: "text", accept: ["national development plan", "new climate deal"] },
          feedback:
            "NDC stands for Nationally Determined Contribution — each nation's self-set pledge to cut emissions under the Paris Agreement.",
        },
      ],
      solution: [
        "Each country decides its own emissions target rather than having one imposed from above.",
        "Therefore **NDC** stands for **Nationally Determined Contribution**.",
      ],
      commonError: "Forgetting the exact wording 'Nationally Determined Contribution' in exam papers.",
      hints: [
        "N = Nationally (set by each nation); D = Determined (decided by themselves).",
        "What C-word means each country's share or pledge toward the global effort?",
      ],
    },
    {
      id: "exam-2-q18",
      kind: "short",
      difficulty: "core",
      topicId: "solving-climate-crisis",
      guideRef: "singapore-green-plan-action",
      diagram: SVG_SG_SOLAR,
      question:
        "Use the Singapore Green Plan 2030 bar chart to calculate the **percentage increase** in Singapore's solar capacity from `2020` (`0.4 GWp`) to the `2030` target (`2.0 GWp`).",
      answer: {
        type: "number",
        value: 400,
        display: "400%",
      },
      traps: [
        {
          spec: { type: "number", value: 500 },
          feedback: "2.0 is 500% of 0.4, so the increase is 500% − 100% = 400% (or (2.0 − 0.4) ÷ 0.4 × 100).",
        },
        {
          spec: { type: "number", value: 160 },
          feedback: "1.6 GWp is the absolute rise; you still need to divide 1.6 by the original 0.4 before multiplying by 100.",
        },
      ],
      solution: [
        "Find the absolute increase: {{2.0 - 0.4 = 1.6}} GWp.",
        "Divide by the starting value (0.4 GWp): {{1.6 / 0.4 = 4}}.",
        "Multiply by 100 to get the percentage increase: {{4 * 100 = 400}}%.",
      ],
      commonError: "Calculating (2.0 ÷ 0.4) × 100 = 500% and forgetting to subtract the starting 100%.",
      hints: [
        "Use Percentage Increase = ((New − Old) ÷ Old) × 100.",
        "Compute (2.0 − 0.4) ÷ 0.4, then multiply by 100.",
      ],
    },
    {
      id: "exam-2-q19",
      kind: "short",
      difficulty: "challenge",
      topicId: "fast-fashion-interconnections",
      guideRef: "year9-geo-skills",
      question:
        "Four countries record annual CO₂ emissions per capita of `14.4`, `8.2`, `2.6`, and `0.8` tonnes. Calculate the **mean** CO₂ emissions per capita (in tonnes) across these four countries.",
      answer: {
        type: "number",
        value: 6.5,
        display: "6.5",
      },
      traps: [
        {
          spec: { type: "number", value: 13.6 },
          feedback: "13.6 is the range (14.4 − 0.8), not the mean. Add all four numbers and divide by 4.",
        },
        {
          spec: { type: "number", value: 5.4 },
          feedback: "5.4 is the median ((8.2 + 2.6) ÷ 2). To find the mean, sum all four values and divide by 4.",
        },
      ],
      solution: [
        "Add the four values: {{14.4 + 8.2 + 2.6 + 0.8 = 26.0}} tonnes.",
        "Divide by the number of countries (4): {{26.0 / 4 = 6.5}} tonnes per capita.",
      ],
      commonError: "Calculating the range or median instead of the arithmetic mean.",
      hints: [
        "Sum all four numbers carefully first (check that 14.4 + 2.6 = 17.0 and 8.2 + 0.8 = 9.0).",
        "Divide your total by 4.",
      ],
    },
    {
      id: "exam-2-q20",
      kind: "short",
      difficulty: "core",
      topicId: "consumption-food-water",
      guideRef: "water-management-singapore",
      question:
        "As climate change triggers longer dry spells in Southeast Asia, which of Singapore's Four National Taps purifies used wastewater via microfiltration, reverse osmosis, and UV disinfection to guarantee a weather-resilient supply?",
      answer: {
        type: "text",
        accept: ["newater", "new water", "reclaimed water"],
        display: "NEWater",
      },
      traps: [
        {
          spec: { type: "text", accept: ["desalination", "desalinated water"] },
          feedback:
            "Desalination removes salt from seawater; Singapore's ultra-clean reclaimed wastewater tap is NEWater.",
        },
        {
          spec: { type: "text", accept: ["local catchment", "catchment", "imported water"] },
          feedback:
            "Local catchment and imported water from Johor depend directly on rainfall; reclaimed wastewater is NEWater.",
        },
      ],
      solution: [
        "**NEWater** recycles treated used water through dual-membrane (microfiltration + reverse osmosis) and UV technology.",
        "Because it does not rely on rainfall, NEWater strengthens Singapore's resilience against climate-driven droughts.",
      ],
      commonError: "Confusing NEWater (reclaimed wastewater) with desalination (seawater).",
      hints: [
        "Think of Singapore's famous branded name for ultra-clean recycled water.",
        "It combines 'NEW' and 'water' into a single word.",
      ],
    },
    {
      id: "exam-2-q21",
      kind: "short",
      difficulty: "challenge",
      topicId: "consumption-food-water",
      guideRef: "global-water-scarcity",
      question:
        "A Himalayan glacier supplying dry-season meltwater to millions of farmers loses `15%` of its `400` cubic kilometres of ice due to warming. How many cubic kilometres of ice remain?",
      answer: {
        type: "number",
        value: 340,
        display: "340",
      },
      traps: [
        {
          spec: { type: "number", value: 60 },
          feedback: "60 km³ is the ice lost! Subtract 60 from 400 to find how much ice remains.",
        },
        {
          spec: { type: "number", value: 385 },
          feedback: "15% of 400 is 60, not 15. Subtract 60 from 400.",
        },
      ],
      solution: [
        "Calculate 15% of 400: {{0.15 * 400 = 60}} cubic kilometres lost.",
        "Subtract from the original volume: {{400 - 60 = 340}} cubic kilometres remaining (or directly {{0.85 * 400 = 340}}).",
      ],
      commonError: "Stopping after calculating the 15% loss (60) instead of subtracting to find the remaining volume.",
      hints: [
        "First find 15% of 400 (10% = 40, 5% = 20).",
        "Read carefully: the question asks how much ice REMAINS, not how much melted.",
      ],
    },

    // ==================== SECTION C: WRITTEN (4) ===========================
    {
      id: "exam-2-q22",
      kind: "written",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "greenhouse-effect-causes",
      marks: 3,
      question:
        "Explain how modern industry and land-use change thicken Earth's heat-trapping blanket, naming TWO distinct trace gases and linking each to a major source. (3 marks)",
      modelAnswer:
        "Extra greenhouse gases absorb more outgoing long-wave infrared radiation from Earth's surface and re-radiate heat back downward, causing global temperatures to rise. Carbon dioxide (CO₂) is released primarily by burning fossil fuels (coal, oil, and gas) in power stations and transport, as well as deforestation which destroys carbon sinks. Methane (CH₄) is emitted in large quantities by cattle farming, flooded rice paddies, and decomposing organic waste in landfills.",
      markScheme: [
        {
          point: "Explains the mechanism: extra gases absorb and re-radiate/trap more outgoing long-wave (infrared) heat toward Earth's surface.",
          keywords: ["long-wave", "long wave", "infrared", "re-radiat", "trap more heat", "outgoing"],
        },
        {
          point: "Names carbon dioxide (CO₂) accurately linked to burning fossil fuels (coal/oil/gas) or deforestation.",
          keywords: ["fossil fuel", "coal", "deforestation", "carbon dioxide", "co2"],
        },
        {
          point: "Names methane (CH₄) (or nitrous oxide N₂O) accurately linked to livestock/cattle, rice paddies, landfills, or fertilisers.",
          keywords: ["methane", "ch4", "cattle", "livestock", "rice", "landfill", "nitrous", "fertilis"],
        },
      ],
      commonError: "Claiming greenhouse gases 'destroy the ozone layer' or 'let extra sunlight in' rather than trapping outgoing infrared heat.",
      hints: [
        "Never confuse the enhanced greenhouse effect with the ozone hole!",
        "Explain the heat-trapping step (outgoing infrared radiation), then give two gas + source pairs (CO₂ and CH₄).",
      ],
    },
    {
      id: "exam-2-q23",
      kind: "written",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "impacts-on-people",
      marks: 3,
      question:
        "Explain why low-lying nations such as the Maldives and Bangladesh face extreme risk from warming oceans, referring to BOTH physical geography and economic vulnerability. (3 marks)",
      modelAnswer:
        "Physically, most land in the Maldives sits less than 2 metres above sea level and Bangladesh sits on the low-lying Ganges-Brahmaputra delta, so thermal expansion, glacier melt, and stronger cyclone storm surges cause frequent coastal flooding and saltwater contamination of farmland and freshwater wells. Economically, both nations rely heavily on vulnerable coastal sectors — tourism and fishing in the Maldives, and low-lying rice agriculture in Bangladesh — while limited national wealth restricts their ability to afford expensive hard-engineering seawalls, creating risk of displaced climate refugees.",
      markScheme: [
        {
          point: "Explains physical exposure: very low elevation (<2 m / river delta) facing sea-level rise and storm surges.",
          keywords: ["elevation", "delta", "storm surge", "sea-level", "sea level", "below 2", "less than 2", "flooding"],
        },
        {
          point: "Identifies a knock-on environmental/livelihood impact (saltwater intrusion ruining soil/freshwater, or loss of rice farming/tourism/fishing).",
          keywords: ["saltwater", "salini", "farmland", "tourism", "fishing", "rice", "freshwater", "crop"],
        },
        {
          point: "Explains economic vulnerability: limited funds/GDP to afford costly coastal defences (seawalls) or risk of climate refugees.",
          keywords: ["afford", "costly", "expensive", "seawall", "refugee", "displac", "limited wealth", "funding"],
        },
      ],
      commonError: "Mentioning only 'they will flood' without explaining WHY physically (low elevation/delta/storm surges) AND economically (cost of defences/livelihoods).",
      hints: [
        "Include a physical reason (elevation/delta + sea-level rise/storm surges).",
        "Add a specific economic vulnerability (dependence on farming/tourism and the high cost of sea walls).",
      ],
    },
    {
      id: "exam-2-q24",
      kind: "written",
      difficulty: "challenge",
      topicId: "solving-climate-crisis",
      guideRef: "adaptation-strategies",
      marks: 4,
      question:
        "Contrast climate mitigation with climate adaptation using ONE concrete example of each, and explain why coastal cities like Singapore must invest in BOTH at the same time. (4 marks)",
      modelAnswer:
        "Climate mitigation addresses the root cause by cutting or removing greenhouse gas emissions — for example, scaling up rooftop solar farms and electric vehicles under the Singapore Green Plan 2030. Climate adaptation adjusts human infrastructure and habits to live safely with inevitable impacts — for example, building polders, restoring coastal mangroves, or developing the Long Island coastal protection project against rising seas. Investing in both is essential because greenhouse gases already in the atmosphere have locked in decades of ongoing sea-level rise and hotter weather, meaning adaptation is needed right now to prevent flooding. At the same time, without aggressive mitigation, warming will accelerate past tipping points where coastal defences become unaffordable or fail completely.",
      markScheme: [
        {
          point: "Defines mitigation (cutting/removing greenhouse gas emissions) with a concrete example (renewables, EVs, CCS, afforestation).",
          keywords: ["root cause", "cutting", "reducing emissions", "solar", "renewable", "electric vehicle", "afforestation", "ccs"],
        },
        {
          point: "Defines adaptation (adjusting to cope with inevitable impacts) with a concrete example (polders, mangroves, seawalls, Long Island, drought crops).",
          keywords: ["adjust", "live safely", "cope", "polder", "mangrove", "seawall", "long island", "barrage", "drip irrigation"],
        },
        {
          point: "Explains why adaptation is unavoidable now: past emissions have already locked in warming and sea-level rise.",
          keywords: ["locked in", "already", "inevitable", "ongoing", "cannot stop immediately"],
        },
        {
          point: "Explains why mitigation is simultaneously essential: unchecked warming would overwhelm adaptation/defences or trigger tipping points.",
          keywords: ["tipping point", "unaffordable", "overwhelm", "fail", "accelerate", "unchecked"],
        },
      ],
      commonError: "Swapping mitigation and adaptation examples, or forgetting to explain WHY both are needed simultaneously.",
      hints: [
        "Start with clear definitions + one specific example for mitigation and one for adaptation.",
        "Then answer the 'why both?' link: past gases already locked in warming (so we must adapt), while unchecked future emissions would eventually defeat defences (so we must mitigate).",
      ],
    },
    {
      id: "exam-2-q25",
      kind: "written",
      difficulty: "challenge",
      topicId: "solving-climate-crisis",
      guideRef: "international-agreements",
      marks: 4,
      question:
        "\"Global climate treaties such as the 2015 Paris Agreement cannot keep warming below 1.5°C unless individual nations pass much tougher domestic laws.\" To what extent do you agree? Give a balanced evaluation. (4 marks)",
      modelAnswer:
        "I largely agree because Paris Agreement pledges (NDCs) are voluntary and lack legally binding fines if a country misses its target, encouraging free-riding where some governments delay costly decarbonisation to protect short-term economic growth. Current global pledges still put the planet on track for over 2°C of warming, showing why binding domestic laws — such as carbon taxes, EV mandates, and phasing out coal — are vital to enforce real cuts. On the other hand, international treaties remain indispensable: COP summits create shared global pressure, trigger five-year ratchet reviews, mobilise climate finance from HICs to help LICs leapfrog to clean energy, and send clear investment signals that have driven down solar and battery costs worldwide. Overall, global treaties provide essential coordination and finance, but binding national legislation is the decisive force needed to turn promises into rapid emissions reductions.",
      markScheme: [
        {
          point: "Explains a limitation of the Paris Agreement (voluntary NDCs, non-binding enforcement, free-riding, or current pledges exceeding 1.5°C).",
          keywords: ["voluntary", "non-binding", "free-riding", "free riding", "ndc", "fine", "enforce", "exceed"],
        },
        {
          point: "Explains how stronger domestic/national laws enforce real emissions cuts (e.g. carbon taxes, coal phase-outs, EV mandates, legal targets).",
          keywords: ["carbon tax", "phase out", "phase-out", "mandate", "legislation", "binding", "coal"],
        },
        {
          point: "Provides a balanced counter-argument highlighting value of global agreements (COP pressure, climate finance for LICs, shared standards/clean-tech investment).",
          keywords: ["climate finance", "cop", "global pressure", "cooperation", "leapfrog", "ratchet", "investment signal"],
        },
        {
          point: "Concludes with a clear, reasoned overall judgement weighing global treaties against national action.",
          keywords: ["largely agree", "partly agree", "overall", "decisive", "on the other hand", "indispensable"],
        },
      ],
      commonError: "Writing only about why Paris fails without acknowledging what international summits actually achieve (finance, cooperation, global targets).",
      hints: [
        "Argue both sides: first explain weaknesses of voluntary NDCs and why national laws (carbon taxes, coal bans) matter.",
        "Then add a counter-point ('On the other hand...') explaining why COP summits and climate finance for LICs are still essential, and finish with a verdict.",
      ],
    },
  ],
};
