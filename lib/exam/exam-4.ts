import type { ExamPaper } from "../types";

const SVG_FOUR_SETTINGS = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four schematic tectonic settings labelled J, K, L and M">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Four Global Tectonic Settings (J, K, L and M)</text>
  <!-- Panel J (top-left): Diverging -->
  <rect x="18" y="34" width="256" height="98" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
  <circle cx="38" cy="52" r="11" fill="var(--brand)"/>
  <text x="38" y="56" text-anchor="middle" font-size="11" font-weight="700" fill="var(--surface)">J</text>
  <rect x="36" y="76" width="96" height="20" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6"/>
  <rect x="160" y="76" width="96" height="20" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6"/>
  <path d="M 146 124 L 146 72" stroke="var(--bad)" stroke-width="4"/>
  <polygon points="140,76 146,66 152,76" fill="var(--bad)"/>
  <line x1="104" y1="86" x2="62" y2="86" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="62,82 54,86 62,90" fill="var(--ink)"/>
  <line x1="188" y1="86" x2="230" y2="86" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="230,82 238,86 230,90" fill="var(--ink)"/>
  <text x="146" y="122" text-anchor="middle" font-size="10" fill="var(--ink-2)">Plates moving apart</text>
  <!-- Panel K (top-right): Subduction -->
  <rect x="286" y="34" width="256" height="98" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
  <circle cx="306" cy="52" r="11" fill="var(--bad)"/>
  <text x="306" y="56" text-anchor="middle" font-size="11" font-weight="700" fill="var(--surface)">K</text>
  <path d="M 300 84 L 396 84 L 444 126 L 424 126 L 386 96 L 300 96 Z" fill="var(--brand)" fill-opacity="0.28" stroke="var(--ink)" stroke-width="1.6"/>
  <path d="M 402 88 L 434 68 L 466 68 L 482 46 L 498 68 L 528 68 L 528 96 L 418 96 Z" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="316" y1="90" x2="366" y2="90" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="366,86 374,90 366,94" fill="var(--ink)"/>
  <line x1="482" y1="116" x2="482" y2="48" stroke="var(--bad)" stroke-width="2.5" stroke-dasharray="4 3"/>
  <text x="414" y="122" text-anchor="middle" font-size="10" fill="var(--ink-2)">Thin crust sinking under thick</text>
  <!-- Panel L (bottom-left): Collision -->
  <rect x="18" y="142" width="256" height="98" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
  <circle cx="38" cy="160" r="11" fill="var(--good)"/>
  <text x="38" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="var(--surface)">L</text>
  <path d="M 36 186 L 116 186 L 146 154 L 176 186 L 256 186 L 256 212 L 36 212 Z" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="56" y1="199" x2="104" y2="199" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="104,195 112,199 104,203" fill="var(--ink)"/>
  <line x1="236" y1="199" x2="188" y2="199" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="188,195 180,199 188,203" fill="var(--ink)"/>
  <text x="146" y="230" text-anchor="middle" font-size="10" fill="var(--ink-2)">Two thick crusts crumpling up</text>
  <!-- Panel M (bottom-right): Hotspot -->
  <rect x="286" y="142" width="256" height="98" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
  <circle cx="306" cy="160" r="11" fill="var(--ink)"/>
  <text x="306" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="var(--surface)">M</text>
  <rect x="302" y="182" width="226" height="18" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6"/>
  <path d="M 418 228 L 418 164" stroke="var(--bad)" stroke-width="5"/>
  <path d="M 398 182 Q 418 164 438 182 Z" fill="var(--bad)" fill-opacity="0.3" stroke="var(--ink)" stroke-width="1.4"/>
  <path d="M 352 182 Q 368 172 384 182 Z" fill="var(--ink-2)" fill-opacity="0.25" stroke="var(--ink-2)" stroke-width="1.2"/>
  <line x1="484" y1="191" x2="444" y2="191" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="444,187 436,191 444,195" fill="var(--ink)"/>
  <text x="414" y="232" text-anchor="middle" font-size="10" fill="var(--ink-2)">Mid-plate rising thermal plume</text>
</svg>`;

const SVG_PERMAFROST_LOOP = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circular positive feedback loop diagram showing Arctic warming, permafrost thaw, missing greenhouse gas step 3, and stronger warming">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Arctic Permafrost Feedback Cycle</text>
  <!-- Box 1: Top -->
  <rect x="176" y="38" width="208" height="40" rx="8" fill="var(--bad)" fill-opacity="0.16" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="280" y="56" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1. Global temperatures rise</text>
  <text x="280" y="70" text-anchor="middle" font-size="10" fill="var(--ink-2)">Arctic warms faster than average</text>
  <!-- Box 2: Right -->
  <rect x="372" y="106" width="166" height="44" rx="8" fill="var(--brand)" fill-opacity="0.16" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="455" y="125" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. Permafrost thaws</text>
  <text x="455" y="140" text-anchor="middle" font-size="10" fill="var(--ink-2)">Frozen organic soil melts</text>
  <!-- Box 3: Bottom (Mystery ?) -->
  <rect x="176" y="182" width="208" height="46" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6 3"/>
  <text x="280" y="202" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">3. Trapped gas (?) released</text>
  <text x="280" y="218" text-anchor="middle" font-size="10" fill="var(--ink-2)">Microbes decompose thawed matter</text>
  <!-- Box 4: Left -->
  <rect x="22" y="106" width="166" height="44" rx="8" fill="var(--bad)" fill-opacity="0.14" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="105" y="125" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">4. Stronger heat trapping</text>
  <text x="105" y="140" text-anchor="middle" font-size="10" fill="var(--ink-2)">Enhanced greenhouse effect</text>
  <!-- Curved arrows connecting 1->2->3->4->1 -->
  <path d="M 384 58 Q 455 58 455 98" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="450,96 455,105 460,96" fill="var(--ink)"/>
  <path d="M 455 150 Q 455 205 392 205" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="394,200 385,205 394,210" fill="var(--ink)"/>
  <path d="M 176 205 Q 105 205 105 158" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="100,160 105,151 110,160" fill="var(--ink)"/>
  <path d="M 105 106 Q 105 58 168 58" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="166,53 175,58 166,63" fill="var(--ink)"/>
  <!-- Centre label -->
  <text x="280" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Positive</text>
  <text x="280" y="139" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Feedback</text>
</svg>`;

const SVG_TSHIRT_COST = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart breaking down the S$25.00 retail price of a fast-fashion T-shirt across five components">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Cost Breakdown of a S$25.00 Fast-Fashion T-Shirt</text>
  <!-- Axis: x=176 is S$0, x=496 is S$16 -> 320px / 16 = 20px per S$ -->
  <line x1="176" y1="44" x2="176" y2="206" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="176" y1="206" x2="508" y2="206" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="256" y1="44" x2="256" y2="206" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="336" y1="44" x2="336" y2="206" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="416" y1="44" x2="416" y2="206" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="496" y1="44" x2="496" y2="206" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="176" y="222" text-anchor="middle" font-size="10" fill="var(--ink-2)">S$0</text>
  <text x="256" y="222" text-anchor="middle" font-size="10" fill="var(--ink-2)">S$4</text>
  <text x="336" y="222" text-anchor="middle" font-size="10" fill="var(--ink-2)">S$8</text>
  <text x="416" y="222" text-anchor="middle" font-size="10" fill="var(--ink-2)">S$12</text>
  <text x="496" y="222" text-anchor="middle" font-size="10" fill="var(--ink-2)">S$16</text>
  <!-- 1. Retail and Brand Profit: S$14.50 (290px) -->
  <text x="168" y="68" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Retail &amp; Brand</text>
  <rect x="176" y="53" width="290" height="22" rx="4" fill="var(--brand)" fill-opacity="0.86"/>
  <text x="472" y="68" text-anchor="start" font-size="11" font-weight="700" fill="var(--ink)">S$14.50</text>
  <!-- 2. Fabric and Materials: S$4.50 (90px) -->
  <text x="168" y="100" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Fabric &amp; Materials</text>
  <rect x="176" y="85" width="90" height="22" rx="4" fill="var(--brand)" fill-opacity="0.58"/>
  <text x="272" y="100" text-anchor="start" font-size="11" font-weight="700" fill="var(--ink)">S$4.50</text>
  <!-- 3. Transport and Taxes: S$3.50 (70px) -->
  <text x="168" y="132" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Transport &amp; Taxes</text>
  <rect x="176" y="117" width="70" height="22" rx="4" fill="var(--ink-2)" fill-opacity="0.52"/>
  <text x="252" y="132" text-anchor="start" font-size="11" font-weight="700" fill="var(--ink)">S$3.50</text>
  <!-- 4. Factory Overhead: S$1.50 -> 30px -->
  <text x="168" y="164" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">Factory Overhead</text>
  <rect x="176" y="149" width="30" height="22" rx="4" fill="var(--good)" fill-opacity="0.65"/>
  <text x="212" y="164" text-anchor="start" font-size="11" font-weight="700" fill="var(--ink)">S$1.50</text>
  <!-- 5. Garment Worker Wage: S$1.00 -> 20px -->
  <text x="168" y="196" text-anchor="end" font-size="11" font-weight="700" fill="var(--bad)">Worker Wage</text>
  <rect x="176" y="181" width="20" height="22" rx="4" fill="var(--bad)" fill-opacity="0.88"/>
  <text x="202" y="196" text-anchor="start" font-size="11" font-weight="700" fill="var(--bad)">S$1.00</text>
  <text x="342" y="240" text-anchor="middle" font-size="10" fill="var(--ink-2)">Total retail price = S$25.00</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-4",
  title: "Year 9 Geography Full End-of-Year Mock Paper (All 8 Units)",
  calculator: true,
  minutes: 45,
  questions: [
    // ======================== SECTION A: MCQ (10) ==========================
    {
      id: "exam-4-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "plate-tectonics-margins",
      guideRef: "destructive-collision",
      diagram: SVG_FOUR_SETTINGS,
      question:
        "Study the four tectonic settings labelled J, K, L, and M. Which setting produces a deep ocean trench, megathrust earthquakes, and explosive composite volcanoes?",
      options: [
        "Setting J, where two tectonic plates spread steadily apart.",
        "Setting L, where two buoyant continental plates crumple upward.",
        "Setting K, where denser oceanic crust sinks beneath continental.",
        "Setting M, where an isolated plume melts mid-plate ocean crust.",
      ],
      answerIndex: 2,
      explanation:
        "Setting K shows a destructive (subduction) margin: the denser oceanic plate sinks beneath the less dense continental plate, forming a deep trench, triggering megathrust earthquakes, and generating thick magma that builds explosive composite volcanoes. Setting L (collision) creates fold mountains without volcanoes.",
      hints: [
        "Look for the panel showing a thin oceanic plate plunging underneath a thicker continental plate.",
        "Recall which margin forms both deep ocean trenches and composite stratovolcanoes.",
      ],
    },
    {
      id: "exam-4-q02",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "earthquakes-nepal-2015",
      guideRef: "nepal-2015-causes-effects",
      question:
        "Why did the April 2015 Nepal earthquake (Magnitude 7.8) cause devastating building collapse across the Kathmandu Valley?",
      options: [
        "A shallow focus delivered intense shaking to densely packed, unreinforced masonry buildings.",
        "A giant coastal tsunami swept inland from the Indian Ocean across the Himalayan foothills.",
        "Explosive composite volcanoes erupted beside Kathmandu moments before the fault ruptured.",
        "Deep earthquakes below 300 km always cause stronger surface shaking than shallow quakes.",
      ],
      answerIndex: 0,
      explanation:
        "Nepal's 2015 earthquake had a very shallow focus (~8–15 km), so seismic waves reached the surface with minimal energy loss, violently shaking poorly reinforced brick and concrete buildings across the crowded Kathmandu Valley. Nepal is completely landlocked, so no tsunami occurred.",
      hints: [
        "Remember Nepal is a landlocked Himalayan nation along a continental collision margin.",
        "How do focus depth and building construction quality affect earthquake damage?",
      ],
    },
    {
      id: "exam-4-q03",
      kind: "mcq",
      difficulty: "core",
      topicId: "volcanoes-living-with-risk",
      guideRef: "shield-vs-composite",
      question:
        "Which combination accurately describes a **shield volcano** such as Mauna Loa in Hawaii?",
      options: [
        "Thick acidic magma, steep conical slopes, and violent pyroclastic blasts.",
        "Alternating ash and rock strata formed exclusively at destructive ocean trenches.",
        "Frozen mudflows and sticky lava plugs blocking the summit crater for centuries.",
        "Runny low-viscosity basaltic lava forming a wide base with gentle slopes.",
      ],
      answerIndex: 3,
      explanation:
        "Shield volcanoes erupt low-viscosity, runny basaltic lava that flows long distances before cooling, creating broad, gently sloping mountains with frequent effusive (less explosive) eruptions at constructive margins and hotspots.",
      hints: [
        "Picture a warrior's shield lying flat on the ground — wide and gently curved.",
        "What kind of lava flows far enough to build gentle slopes rather than a steep cone?",
      ],
    },
    {
      id: "exam-4-q04",
      kind: "mcq",
      difficulty: "core",
      topicId: "tsunamis-japan-2011",
      guideRef: "tsunami-causes-shoaling",
      question:
        "Which sudden coastal observation provides an urgent natural warning that a tsunami wave may strike within minutes?",
      options: [
        "A gentle sea breeze shifts direction from onshore to offshore at sunset.",
        "The ocean rapidly retreats far past normal low-tide marks in a coastal drawdown.",
        "Coastal seawater warms by five degrees Celsius during a calm afternoon.",
        "Small regular wind ripples disappear completely while harbour water stays level.",
      ],
      answerIndex: 1,
      explanation:
        "When the trough of an approaching tsunami arrives before the crest, seawater drains rapidly off the beach far beyond normal low tide — called coastal drawdown. Anyone witnessing this must move immediately to high ground.",
      hints: [
        "Think about what happens at the shoreline if the wave trough reaches the beach before the towering crest.",
        "Why did beachgoers who walked out onto exposed seabed face fatal danger in past tsunamis?",
      ],
    },
    {
      id: "exam-4-q05",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "climate-change-science-impacts",
      guideRef: "evidence-climate-change",
      question:
        "Which pair provides strong scientific evidence that Earth's climate is warming rapidly?",
      options: [
        "Retreating mountain glaciers and rising satellite-measured global sea levels.",
        "A single chilly winter weekend in London and expanding tropical rainforests.",
        "Stable Arctic sea-ice extent and cooler deep-ocean temperatures since 1950.",
        "Increasing volcanic ash layers and slower tectonic plate motion in the Atlantic.",
      ],
      answerIndex: 0,
      explanation:
        "Multiple independent datasets confirm rapid warming: global surface temperatures have risen by roughly +1.2°C since pre-industrial times, mountain glaciers and Arctic sea ice are shrinking, and global sea levels are rising due to thermal expansion and land-ice melt.",
      hints: [
        "Distinguish long-term global indicators from one-off local weather events.",
        "What is happening to mountain glaciers and global ocean levels?",
      ],
    },
    {
      id: "exam-4-q06",
      kind: "mcq",
      difficulty: "core",
      topicId: "climate-change-science-impacts",
      guideRef: "physical-impacts",
      diagram: SVG_PERMAFROST_LOOP,
      question:
        "Study the Arctic Permafrost Feedback Cycle diagram. Which greenhouse gas is released at Step 3 (`?`) when microbes decompose newly thawed organic soil?",
      options: [
        "Pure nitrogen gas cooling the lower stratosphere.",
        "Stratospheric ozone blocking incoming visible sunlight.",
        "Methane gas amplifying the enhanced greenhouse effect.",
        "Liquid water vapour freezing polar oceans into thicker ice.",
      ],
      answerIndex: 2,
      explanation:
        "Arctic permafrost locks away vast stores of frozen organic plant and animal matter. When it thaws, anaerobic microbes break down this material and release methane (CH₄) alongside CO₂, amplifying atmospheric warming in a positive feedback loop.",
      hints: [
        "Recall which potent greenhouse gas (CH₄) is trapped in frozen Arctic peat and soils.",
        "Why does Step 3 feed straight into Step 4 ('Stronger heat trapping')?",
      ],
    },
    {
      id: "exam-4-q07",
      kind: "mcq",
      difficulty: "core",
      topicId: "solving-climate-crisis",
      guideRef: "mitigation-strategies",
      question:
        "Which climate-mitigation action works specifically as a natural **carbon sink** by removing CO₂ already present in the atmosphere?",
      options: [
        "Constructing concrete storm barriers across vulnerable urban river estuaries.",
        "Installing reflective white rooftops to cool office towers during heatwaves.",
        "Expanding coal-fired power stations equipped with taller chimney exhausts.",
        "Carrying out large-scale afforestation by planting diverse native woodlands.",
      ],
      answerIndex: 3,
      explanation:
        "Growing trees absorb atmospheric CO₂ during photosynthesis and lock carbon away in trunks, roots, and soils, acting as a natural carbon sink. Concrete storm barriers and white roofs are adaptation measures, while taller coal chimneys still emit CO₂.",
      hints: [
        "A carbon sink actively draws CO₂ OUT of the air and stores it.",
        "Which biological process turns atmospheric CO₂ into stored woody biomass?",
      ],
    },
    {
      id: "exam-4-q08",
      kind: "mcq",
      difficulty: "core",
      topicId: "consumption-food-water",
      guideRef: "global-water-scarcity",
      question:
        "Although Earth looks blue from space, roughly what share of Earth's total water is readily accessible liquid freshwater in rivers, lakes, and shallow aquifers?",
      options: [
        "Roughly 50%, shared evenly across every continent.",
        "Less than 1%, as most water is salty or frozen ice.",
        "Around 25%, stored mostly inside tropical clouds.",
        "Nearly 70%, flowing continuously through coastal deltas.",
      ],
      answerIndex: 1,
      explanation:
        "About 97.5% of Earth's water is salty ocean water. Only ~2.5% is freshwater, and most of that is locked inside Antarctic/Greenland ice sheets, glaciers, or deep underground aquifers — leaving less than 1% as readily accessible liquid freshwater.",
      hints: [
        "First remember that ~97.5% of Earth's water is salty ocean water.",
        "Of the tiny ~2.5% that is freshwater, most is frozen in ice caps and glaciers.",
      ],
    },
    {
      id: "exam-4-q09",
      kind: "mcq",
      difficulty: "core",
      topicId: "consumption-food-water",
      guideRef: "global-food-security",
      question:
        "Why is Singapore investing heavily in high-tech indoor vertical farms and closed-containment aquaculture?",
      options: [
        "To expand local food production toward 30 by 30 and cushion global import shocks.",
        "To clear its central rainforest reserves so traditional cattle ranches can expand.",
        "To export millions of tonnes of cheap wheat to landlocked European countries.",
        "To replace all four water taps with untreated rainwater collected from farm roofs.",
      ],
      answerIndex: 0,
      explanation:
        "Because Singapore has less than 1% of its land available for farming and imports over 90% of its food, vertical agri-tech farms maximise yields per square metre with minimal water, helping meet the '30 by 30' goal and reducing vulnerability to global supply disruptions.",
      hints: [
        "Think about Singapore's severe land scarcity and heavy reliance on imported food.",
        "How do vertical farms stack crops upward to overcome limited land?",
      ],
    },
    {
      id: "exam-4-q10",
      kind: "mcq",
      difficulty: "core",
      topicId: "fast-fashion-interconnections",
      guideRef: "fast-fashion-impacts",
      question:
        "Where have towering mountains of unsold and discarded second-hand fast-fashion garments created major environmental waste crises?",
      options: [
        "Along the frozen ice shelves of Antarctica and central Greenland.",
        "Inside protected alpine glaciers across Switzerland and Austria.",
        "In Chile's Atacama Desert and around Accra's Kantamanto market in Ghana.",
        "Across deep hydrothermal vents along the Mid-Atlantic Ocean Ridge.",
      ],
      answerIndex: 2,
      explanation:
        "Vast quantities of unsold or poor-quality donated fast-fashion clothing from HICs are exported to Chile's Atacama Desert and Ghana's Kantamanto market (Accra), where unwearable synthetic textiles pile into toxic dumps and wash onto beaches.",
      hints: [
        "Recall the two famous global textile-dumping hotspots studied in the Fast Fashion unit.",
        "One is an arid South American desert; the other is a West African capital city.",
      ],
    },

    // =================== SECTION B: SHORT ANSWER (11) ======================
    {
      id: "exam-4-q11",
      kind: "short",
      difficulty: "warmup",
      topicId: "plate-tectonics-margins",
      guideRef: "earths-structure-movement",
      question:
        "Name the soft, semi-molten upper layer of Earth's mantle on which rigid tectonic plates slowly move.",
      answer: {
        type: "text",
        accept: ["asthenosphere", "the asthenosphere"],
        display: "Asthenosphere",
      },
      traps: [
        {
          spec: { type: "text", accept: ["lithosphere", "the lithosphere"] },
          feedback:
            "The lithosphere is the rigid outer shell (crust + uppermost solid mantle) that forms the plates; the soft layer underneath is the asthenosphere.",
        },
        {
          spec: { type: "text", accept: ["inner core", "outer core", "core"] },
          feedback: "The core lies thousands of kilometres deeper at Earth's centre, beneath the mantle.",
        },
      ],
      solution: [
        "Rigid tectonic plates (the **lithosphere**) move slowly over the ductile, semi-molten upper mantle layer called the **asthenosphere**.",
      ],
      commonError: "Swapping lithosphere (rigid plates) and asthenosphere (semi-molten upper mantle).",
      hints: [
        "It starts with 'astheno-' (meaning weak/soft) and ends with '-sphere'.",
        "It lies directly beneath the rigid lithosphere.",
      ],
    },
    {
      id: "exam-4-q12",
      kind: "short",
      difficulty: "core",
      topicId: "earthquakes-nepal-2015",
      guideRef: "earthquake-management-3ps",
      question:
        "Name the aseismic building technique in which a structure sits on flexible rubber-and-steel shock absorbers so the ground can shift horizontally without transferring full shaking into the tower above.",
      answer: {
        type: "text",
        accept: ["base isolation", "seismic isolation", "shock absorbers", "base-isolation"],
        display: "Base isolation",
      },
      traps: [
        {
          spec: { type: "text", accept: ["cross-bracing", "cross bracing", "steel bracing"] },
          feedback:
            "Cross-bracing uses diagonal steel beams in the walls to stop twisting; separating the foundation on flexible bearings is base isolation.",
        },
        {
          spec: { type: "text", accept: ["shatterproof glass", "counterweight", "tuned mass damper"] },
          feedback:
            "Counterweights sit at the top of skyscrapers and shatterproof glass protects windows; flexible foundation pads are base isolation.",
        },
      ],
      solution: [
        "Placing flexible bearings or shock absorbers between the ground and a building's foundation isolates the superstructure from ground motion — called **base isolation**.",
      ],
      commonError: "Confusing base isolation (at the foundation) with cross-bracing (diagonal wall struts) or tuned mass dampers (at the roof).",
      hints: [
        "Think about WHERE the flexible shock absorbers are placed: at the 'base' of the building.",
        "Two words: b___ i________.",
      ],
    },
    {
      id: "exam-4-q13",
      kind: "short",
      difficulty: "core",
      topicId: "volcanoes-living-with-risk",
      guideRef: "volcanic-hazards",
      question:
        "Name the deadliest primary volcanic hazard: a dense, superheated avalanche of toxic gas, ash, and rock fragments up to `700°C` that races down a composite volcano's flanks at over `100 km/h`.",
      answer: {
        type: "text",
        accept: ["pyroclastic flow", "pyroclastic flows", "pyroclastic surge"],
        display: "Pyroclastic flow",
      },
      traps: [
        {
          spec: { type: "text", accept: ["lahar", "lahars", "mudflow"] },
          feedback:
            "A lahar is a secondary volcanic mudflow of ash and water; a scorching cloud of superheated gas and ash is a pyroclastic flow.",
        },
        {
          spec: { type: "text", accept: ["lava", "lava flow", "lava flows"] },
          feedback:
            "Lava flows are molten rock and are generally much slower than 100 km/h; the fast superheated gas-and-ash avalanche is a pyroclastic flow.",
        },
      ],
      solution: [
        "'Pyro' means fire and 'clastic' means broken rock fragments.",
        "A fast-moving cloud of superheated volcanic gas, tephra, and rock fragments is a **pyroclastic flow**.",
      ],
      commonError: "Mixing up pyroclastic flows (primary, superheated gas/ash) and lahars (secondary, water + ash mudflows).",
      hints: [
        "It combines 'pyro-' (fire) and '-clastic' (rock fragments).",
        "Two words: p__________ flow.",
      ],
    },
    {
      id: "exam-4-q14",
      kind: "short",
      difficulty: "core",
      topicId: "volcanoes-living-with-risk",
      guideRef: "predict-prepare-volcanoes",
      question:
        "A sudden spike in emissions of which pungent volcanic gas (chemical formula `SO₂`) warns volcanologists that fresh magma is rising close to the surface vent?",
      answer: {
        type: "text",
        accept: ["sulphur dioxide", "sulfur dioxide", "so2"],
        display: "Sulphur dioxide",
      },
      traps: [
        {
          spec: { type: "text", accept: ["carbon dioxide", "co2"] },
          feedback: "CO₂ is carbon dioxide; the gas with chemical formula SO₂ is sulphur dioxide.",
        },
        {
          spec: { type: "text", accept: ["methane", "ch4"] },
          feedback: "Methane is CH₄; SO₂ consists of sulphur and two oxygen atoms — sulphur dioxide.",
        },
      ],
      solution: [
        "`S` represents sulphur and `O₂` represents two oxygen atoms: **sulphur dioxide** (also spelled **sulfur dioxide**).",
        "Volcanologists measure rising SO₂ plumes with spectrometers to forecast imminent eruptions.",
      ],
      commonError: "Writing 'sulphur' alone instead of the compound 'sulphur dioxide' (SO₂).",
      hints: [
        "Decode the chemical formula SO₂: S = sulphur, O₂ = dioxide.",
        "Both British ('sulphur') and American ('sulfur') spellings are accepted.",
      ],
    },
    {
      id: "exam-4-q15",
      kind: "short",
      difficulty: "warmup",
      topicId: "tsunamis-japan-2011",
      guideRef: "japan-2011-impacts",
      question:
        "Name the coastal Japanese nuclear power station where the March 2011 tsunami flooded backup cooling generators, causing three reactor meltdowns and a mass radioactive evacuation.",
      answer: {
        type: "text",
        accept: ["fukushima", "fukushima daiichi", "fukushima dai-ichi", "fukushima nuclear power plant"],
        display: "Fukushima Daiichi",
      },
      traps: [
        {
          spec: { type: "text", accept: ["sendai", "sendai airport"] },
          feedback: "Sendai was a heavily hit coastal city and airport, whereas the nuclear plant was Fukushima Daiichi.",
        },
        {
          spec: { type: "text", accept: ["chernobyl", "tokyo"] },
          feedback: "Chernobyl was in Ukraine (1986). The 2011 Japanese nuclear disaster happened at Fukushima Daiichi.",
        },
      ],
      solution: [
        "Waves overtopped the coastal defences at **Fukushima Daiichi**, knocking out backup diesel generators and triggering nuclear meltdowns — a major secondary impact of the 2011 tsunami.",
      ],
      commonError: "Confusing Sendai (city/airport flooded) with Fukushima Daiichi (nuclear power station).",
      hints: [
        "It lies on Japan's northeast coast south of Sendai.",
        "Starts with 'Fuku_____'.",
      ],
    },
    {
      id: "exam-4-q16",
      kind: "short",
      difficulty: "challenge",
      topicId: "plate-tectonics-margins",
      guideRef: "global-hazard-distribution",
      question:
        "In a volcanic hotspot island chain, an extinct island lies `400 km` from the currently active volcano and formed `5,000,000` years ago. Using `1 km = 100,000 cm`, calculate the average speed of the tectonic plate in **centimetres per year** (give the number only).",
      answer: {
        type: "number",
        value: 8,
        display: "8",
      },
      traps: [
        {
          spec: { type: "number", value: 80 },
          feedback: "Check the zeroes carefully! 400 × 100,000 = 40,000,000 cm, and 40,000,000 ÷ 5,000,000 = 8, not 80.",
        },
        {
          spec: { type: "number", value: 0.08 },
          feedback: "0.08 is in metres per year! Convert 400 km to 40,000,000 cm before dividing by 5,000,000 years.",
        },
      ],
      solution: [
        "Convert distance from kilometres to centimetres: {{400 * 100000 = 40000000}} cm.",
        "Divide distance by time in years: {{40000000 / 5000000 = 40 / 5 = 8}} cm per year.",
      ],
      commonError: "Dropping a zero when converting kilometres to centimetres (1 km = 1,000 m = 100,000 cm).",
      hints: [
        "First convert 400 km into centimetres by multiplying by 100,000.",
        "Cancel six zeroes from both 40,000,000 and 5,000,000 to simplify to 40 ÷ 5.",
      ],
    },
    {
      id: "exam-4-q17",
      kind: "short",
      difficulty: "core",
      topicId: "solving-climate-crisis",
      guideRef: "singapore-green-plan-action",
      question:
        "Under the Singapore Green Plan 2030, Singapore plans to plant `1,000,000` more trees over `10` years. If `650,000` trees have been planted after `6` years, how many trees **per year** on average must be planted during the remaining `4` years to meet the target?",
      answer: {
        type: "number",
        value: 87500,
        display: "87,500",
      },
      traps: [
        {
          spec: { type: "number", value: 350000 },
          feedback: "350,000 is the TOTAL number of trees still left to plant; now divide by the 4 remaining years.",
        },
        {
          spec: { type: "number", value: 100000 },
          feedback: "100,000/year was the original 10-year average, but since 650,000 are already planted, fewer are needed each remaining year.",
        },
      ],
      solution: [
        "Calculate remaining trees to plant: {{1000000 - 650000 = 350000}} trees.",
        "Divide evenly across the remaining 4 years: {{350000 / 4 = 87500}} trees per year.",
      ],
      commonError: "Forgetting the second step of dividing remaining trees (350,000) by remaining years (4).",
      hints: [
        "First subtract 650,000 from 1,000,000 to find how many trees remain.",
        "Divide that remaining total by 4 years.",
      ],
    },
    {
      id: "exam-4-q18",
      kind: "short",
      difficulty: "warmup",
      topicId: "consumption-food-water",
      guideRef: "consumption-circular-economy",
      question:
        "Name the two-word economic model based on a one-way \"take–make–waste\" path, where raw resources are extracted, turned into disposable goods, and dumped in landfill.",
      answer: {
        type: "text",
        accept: ["linear economy", "linear", "linear model"],
        display: "Linear economy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["circular economy", "circular"] },
          feedback:
            "A circular economy eliminates waste through repair, reuse, and recycling; the one-way 'take–make–waste' path is a linear economy.",
        },
      ],
      solution: [
        "Because resources move in a straight line from extraction to landfill disposal, this unsustainable model is called a **linear economy**.",
      ],
      commonError: "Writing 'circular economy' (which is the sustainable opposite of take–make–waste).",
      hints: [
        "Think about the geometric word for a straight line (opposite of circular).",
        "Two words: l_____ economy.",
      ],
    },
    {
      id: "exam-4-q19",
      kind: "short",
      difficulty: "core",
      topicId: "fast-fashion-interconnections",
      guideRef: "year9-geo-skills",
      diagram: SVG_TSHIRT_COST,
      question:
        "Use the cost-breakdown chart for a `S$25.00` fast-fashion T-shirt. What **percentage** of the total retail price goes directly to the garment worker's wage (`S$1.00`)?",
      answer: {
        type: "number",
        value: 4,
        display: "4%",
      },
      traps: [
        {
          spec: { type: "number", value: 1 },
          feedback: "S$1.00 is the wage in dollars; calculate (1 ÷ 25) × 100 to convert it into a percentage.",
        },
        {
          spec: { type: "number", value: 25 },
          feedback: "25 is the total retail price in dollars (and 25 ÷ 1), not the worker's percentage share.",
        },
      ],
      solution: [
        "Divide the worker wage (`S$1.00`) by the full retail price (`S$25.00`): {{1 / 25 = 0.04}}.",
        "Multiply by 100 to express as a percentage: {{0.04 * 100 = 4}}%.",
      ],
      commonError: "Writing the dollar figure (1) or dividing 25 by 1 instead of (1 ÷ 25) × 100.",
      hints: [
        "Use Percentage = (Part ÷ Whole) × 100.",
        "Calculate (1 ÷ 25) × 100 (or notice 25 × 4 = 100).",
      ],
    },
    {
      id: "exam-4-q20",
      kind: "short",
      difficulty: "challenge",
      topicId: "fast-fashion-interconnections",
      guideRef: "fast-fashion-impacts",
      question:
        "Manufacturing a single cotton T-shirt requires approximately `2,700` litres of virtual water. If one person drinks `3` litres of water per day, how many **days** of drinking water equal the water footprint of one cotton T-shirt?",
      answer: {
        type: "number",
        value: 900,
        display: "900 days",
      },
      traps: [
        {
          spec: { type: "number", value: 8100 },
          feedback: "You multiplied 2,700 × 3 instead of dividing 2,700 L by 3 L per day.",
        },
        {
          spec: { type: "number", value: 90 },
          feedback: "Check the zeroes: 27 ÷ 3 = 9, so 2,700 ÷ 3 = 900 days (almost 2.5 years!).",
        },
      ],
      solution: [
        "Divide total virtual water by daily drinking consumption: {{2700 / 3 = 900}} days (nearly 2.5 years of drinking water for one shirt!).",
      ],
      commonError: "Multiplying instead of dividing, or dropping a zero to get 90 days.",
      hints: [
        "How many 3-litre daily servings fit inside 2,700 litres?",
        "Compute 2,700 ÷ 3.",
      ],
    },
    {
      id: "exam-4-q21",
      kind: "short",
      difficulty: "challenge",
      topicId: "tsunamis-japan-2011",
      guideRef: "japan-2011-responses",
      question:
        "As a long-term response after the 2011 Tōhoku tsunami, a Japanese coastal town raised its concrete sea wall from `6 m` to `13.5 m`. Calculate the **percentage increase** in sea wall height.",
      answer: {
        type: "number",
        value: 125,
        display: "125%",
      },
      traps: [
        {
          spec: { type: "number", value: 225 },
          feedback: "225% is 13.5 ÷ 6 × 100. For percentage increase, subtract the original 6 m first: (13.5 − 6) ÷ 6 × 100.",
        },
        {
          spec: { type: "number", value: 7.5 },
          feedback: "7.5 m is the absolute height increase in metres; now divide by 6 m and multiply by 100.",
        },
      ],
      solution: [
        "Find the height added: {{13.5 - 6 = 7.5}} m.",
        "Divide by the original height and multiply by 100: {{(7.5 / 6) * 100 = 1.25 * 100 = 125}}%.",
      ],
      commonError: "Calculating (New ÷ Old) × 100 = 225% instead of ((New − Old) ÷ Old) × 100 = 125%.",
      hints: [
        "First subtract 6 m from 13.5 m to get the increase (7.5 m).",
        "Divide 7.5 by the original 6, then multiply by 100.",
      ],
    },

    // ==================== SECTION C: WRITTEN (4) ===========================
    {
      id: "exam-4-q22",
      kind: "written",
      difficulty: "core",
      topicId: "plate-tectonics-margins",
      guideRef: "constructive-conservative",
      marks: 3,
      question:
        "Contrast how tectonic plates move at the Mid-Atlantic Ridge versus the San Andreas Fault, and explain why one produces volcanic eruptions while the other does not. (3 marks)",
      modelAnswer:
        "At the Mid-Atlantic Ridge (a constructive or divergent margin), two tectonic plates pull apart, whereas at the San Andreas Fault (a conservative or transform margin), plates slide horizontally past each other in opposite directions or at different speeds. Pulling apart at the constructive margin reduces pressure and lets magma rise through the gap to build new crust and shield volcanoes (as in Iceland). At the conservative margin, no crust is created or melted — locked friction causes stick-slip pressure release producing powerful earthquakes, but without rising magma there are no volcanoes.",
      markScheme: [
        {
          point: "Contrasts plate motion accurately: Mid-Atlantic Ridge pulls apart (constructive/divergent) vs San Andreas slides sideways (conservative/transform).",
          keywords: ["pull apart", "divergent", "constructive", "slide", "conservative", "transform", "move apart"],
        },
        {
          point: "Explains why the constructive margin forms volcanoes: magma rises through the gap to create new oceanic crust / shield volcanoes.",
          keywords: ["magma rises", "rising magma", "shield volcano", "new crust", "gap", "iceland"],
        },
        {
          point: "Explains why the conservative margin has no volcanoes: no crust is melted or created; friction only causes stick-slip earthquakes.",
          keywords: ["no magma", "friction", "stick-slip", "earthquakes only", "no crust", "neither created"],
        },
      ],
      commonError: "Claiming friction along the San Andreas Fault melts rock to produce volcanoes — conservative margins have NO volcanoes!",
      hints: [
        "Name both margin types (constructive vs conservative) and contrast their directions of plate motion.",
        "Link volcanism specifically to rising magma at the ridge versus friction-only earthquakes at the fault.",
      ],
    },
    {
      id: "exam-4-q23",
      kind: "written",
      difficulty: "core",
      topicId: "earthquakes-nepal-2015",
      guideRef: "nepal-2015-responses",
      marks: 3,
      question:
        "Distinguish between urgent short-term aid and longer-horizon recovery after the April 2015 Nepal earthquake, giving a specific case-study example of each and explaining why both stages matter. (3 marks)",
      modelAnswer:
        "Immediate responses take place in the hours and days after the tremor to save lives and provide basic survival — for instance, international search-and-rescue teams from India, China, and the UK pulled survivors from rubble, emergency tents and clean water were distributed, and social media helped locate missing people. Long-term responses span months and years to rebuild safely — for example, Nepal enforced stricter aseismic building codes, repaired mountain roads and water pipelines, and reconstructed Kathmandu's heritage sites to revive tourism. Both stages are essential because immediate aid prevents extra deaths from injuries or disease, while long-term rebuilding restores livelihoods and lowers vulnerability to future Himalayan earthquakes.",
      markScheme: [
        {
          point: "Explains immediate responses with a specific Nepal 2015 example (international search & rescue from India/China/UK, emergency tents/water/food, or social media locating).",
          keywords: ["search and rescue", "search & rescue", "tent", "india", "china", "social media", "clean water", "medical"],
        },
        {
          point: "Explains long-term responses with a specific Nepal 2015 example (stricter seismic building codes, repairing roads/water supply, rebuilding heritage/tourism).",
          keywords: ["building code", "aseismic", "heritage", "tourism", "repair", "reconstruct", "water supply"],
        },
        {
          point: "Explains why both stages are necessary (saving lives/preventing disease immediately AND reducing future risk/restoring economy long-term).",
          keywords: ["save lives", "disease", "future", "vulnerab", "livelihood", "resilien"],
        },
      ],
      commonError: "Listing generic phrases like 'send help' instead of specific Nepal 2015 details (India/China/UK rescue, heritage/tourism, seismic codes).",
      hints: [
        "Give concrete Nepal 2015 examples for both timeframes: immediate rescue/tents/social media AND long-term codes/roads/tourism.",
        "Finish with one clear sentence explaining why a country needs BOTH immediate survival aid and long-term safer rebuilding.",
      ],
    },
    {
      id: "exam-4-q24",
      kind: "written",
      difficulty: "challenge",
      topicId: "climate-change-science-impacts",
      guideRef: "physical-impacts",
      marks: 4,
      question:
        "Explain how rising atmospheric CO₂ harms marine ecosystems through BOTH coral bleaching and ocean acidification, and explain one serious knock-on impact for tropical coastal populations. (4 marks)",
      modelAnswer:
        "First, warmer sea-surface temperatures stress corals into expelling the microscopic symbiotic algae (zooxanthellae) that give them colour and energy; if heatwaves persist, these bleached white reefs starve and die. Second, oceans absorb roughly a quarter of human CO₂ emissions, which dissolves in seawater to form carbonic acid, lowering ocean pH (acidification) and making it harder for corals and shellfish to build calcium carbonate skeletons. Because coral reefs act as nurseries for fish and natural breakwaters that absorb tropical storm waves, reef collapse severely reduces local fishing harvests, damages ecotourism income, and leaves low-lying coastal towns far more exposed to flooding and erosion.",
      markScheme: [
        {
          point: "Explains coral bleaching: warmer seawater stresses corals into expelling symbiotic algae (zooxanthellae), turning white and starving.",
          keywords: ["expel", "algae", "zooxanthellae", "warmer", "starve", "white", "stress"],
        },
        {
          point: "Explains ocean acidification: oceans absorb dissolved CO₂ forming carbonic acid / lowering pH.",
          keywords: ["carbonic acid", "absorb", "lower", "ph", "acidic", "dissolve"],
        },
        {
          point: "Explains biological damage from acidification: harder for corals/shellfish to build calcium carbonate skeletons or shells.",
          keywords: ["skeleton", "shell", "calcium carbonate", "weaken", "corrode", "shellfish"],
        },
        {
          point: "Explains a clear human knock-on impact (collapse of coastal fishing/food security, lost tourism income, or weaker storm-wave protection).",
          keywords: ["fishing", "fish", "tourism", "food security", "storm", "wave", "erosion", "income"],
        },
      ],
      commonError: "Thinking coral bleaching and ocean acidification are the same process — bleaching is caused by HEAT, while acidification is caused by absorbed CO₂ lowering pH.",
      hints: [
        "Keep the two processes distinct: bleaching = warm water expelling algae; acidification = dissolved CO₂ forming carbonic acid and weakening shells/skeletons.",
        "Then link healthy coral reefs to people: fish stocks, tourism jobs, and natural coastal wave protection.",
      ],
    },
    {
      id: "exam-4-q25",
      kind: "written",
      difficulty: "challenge",
      topicId: "solving-climate-crisis",
      guideRef: "singapore-green-plan-action",
      marks: 4,
      question:
        "\"Personal consumer choices alone cannot solve the climate and overconsumption crises — national government policies and global treaties matter far more.\" To what extent do you agree? Use specific Year 9 examples to support a balanced judgement. (4 marks)",
      modelAnswer:
        "I largely agree that government legislation and international treaties carry far greater scale than individual actions alone. Only governments can decarbonise national electricity grids, expand public MRT rail, pass producer-responsibility rules, and fund large-scale infrastructure — as seen in the Singapore Green Plan 2030 (planting one million trees, scaling solar to 2 GWp, EV mandates, and coastal defences like Long Island) and the Four National Taps. Likewise, global frameworks like the 2015 Paris Agreement coordinate 1.5°C targets and climate finance across borders. Nevertheless, personal choices still matter significantly: adopting slow fashion, repairing clothes, cutting beef and food waste, and conserving water reduce everyday carbon and virtual-water footprints while sending powerful signals to TNCs and voters that demand tougher sustainability laws. Overall, individual habits build essential cultural pressure, yet systemic government and global action is indispensable to cut emissions fast enough.",
      markScheme: [
        {
          point: "Explains why government policy has greater scale using a specific national example (Singapore Green Plan 2030, solar/EV targets, coastal defences, MRT, or laws/taxes).",
          keywords: ["green plan", "2 gwp", "long island", "legislation", "mrt", "mandate", "grid", "infrastructure"],
        },
        {
          point: "Explains the role of global cooperation (Paris Agreement 1.5°C/2°C target, NDCs, climate finance, or regulating global TNCs).",
          keywords: ["paris", "1.5", "climate finance", "ndc", "cop", "international", "tnc"],
        },
        {
          point: "Provides a balanced counter-argument explaining how personal consumer choices still contribute (slow fashion, cutting beef/food waste, saving water, shifting business/voter demand).",
          keywords: ["slow fashion", "beef", "food waste", "virtual water", "second-hand", "signal", "voter", "demand"],
        },
        {
          point: "Reaches a clear, reasoned synoptic 'to what extent' judgement weighing individual action against systemic policy.",
          keywords: ["largely agree", "partly agree", "overall", "nevertheless", "indispensable", "systemic"],
        },
      ],
      commonError: "Writing a one-sided rant that individuals 'do nothing' or forgetting to include specific Year 9 case studies (Singapore Green Plan 2030, Paris Agreement, slow fashion).",
      hints: [
        "Bring together concrete examples from across Year 9 Geography: Singapore Green Plan 2030, Paris Agreement, slow fashion, and food/water footprints.",
        "Weigh BOTH sides carefully (systemic scale of laws/grids vs demand-shifting power of citizens/shoppers) before giving your final verdict.",
      ],
    },
  ],
};
