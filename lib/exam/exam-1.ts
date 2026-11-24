import type { ExamPaper } from "../types";

const SVG_SUBDUCTION = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a destructive plate margin with lettered zones P, Q, R and S">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Cross-Section of a Destructive Plate Margin</text>
  <!-- Ocean water -->
  <path d="M 24 84 L 260 84 L 222 128 L 24 108 Z" fill="var(--brand)" fill-opacity="0.18"/>
  <line x1="24" y1="84" x2="262" y2="84" stroke="var(--brand)" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="95" y="76" text-anchor="middle" font-size="11" font-weight="600" fill="var(--brand)">Ocean</text>
  <!-- Mantle background -->
  <path d="M 24 128 L 536 128 L 536 232 L 24 232 Z" fill="var(--bad)" fill-opacity="0.08"/>
  <text x="92" y="216" text-anchor="middle" font-size="11" fill="var(--ink-2)">Semi-molten mantle</text>
  <!-- Subducting oceanic plate (Q) -->
  <path d="M 24 108 L 204 108 Q 248 112 288 156 L 368 232 L 328 232 L 260 166 Q 230 132 196 128 L 24 128 Z" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Movement arrows on oceanic plate -->
  <line x1="58" y1="118" x2="112" y2="118" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="112,113 122,118 112,123" fill="var(--ink)"/>
  <!-- Continental plate and fold mountains -->
  <path d="M 222 128 L 262 84 L 330 84 L 372 44 L 414 84 L 536 84 L 536 142 L 292 142 L 246 130 Z" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Movement arrow on continental plate -->
  <line x1="504" y1="112" x2="450" y2="112" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="450,107 440,112 450,117" fill="var(--ink)"/>
  <!-- Rising magma conduit and volcano vent (R) -->
  <path d="M 358 188 Q 372 150 372 44" fill="none" stroke="var(--bad)" stroke-width="4" stroke-dasharray="6 4"/>
  <ellipse cx="360" cy="196" rx="22" ry="11" fill="var(--bad)" fill-opacity="0.32" stroke="var(--bad)" stroke-width="1.8"/>
  <!-- Seismic focus marker (S) -->
  <circle cx="294" cy="166" r="7" fill="var(--bad)" stroke="var(--surface)" stroke-width="2"/>
  <circle cx="294" cy="166" r="14" fill="none" stroke="var(--bad)" stroke-width="1.4" stroke-dasharray="3 3"/>
  <!-- Zone P callout (deep trench) -->
  <circle cx="222" cy="118" r="12" fill="var(--brand)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="222" y="122" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">P</text>
  <!-- Zone Q callout (subducting plate) -->
  <circle cx="154" cy="118" r="12" fill="var(--ink)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="154" y="122" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">Q</text>
  <!-- Zone R callout (volcano cone) -->
  <circle cx="372" cy="64" r="12" fill="var(--bad)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="372" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">R</text>
  <!-- Zone S callout (focus) -->
  <line x1="308" y1="166" x2="438" y2="166" stroke="var(--ink-2)" stroke-width="1.2"/>
  <circle cx="452" cy="166" r="12" fill="var(--good)" stroke="var(--surface)" stroke-width="1.5"/>
  <text x="452" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">S</text>
  <text x="480" y="68" text-anchor="middle" font-size="11" fill="var(--ink-2)">Continental crust</text>
</svg>`;

const SVG_VOLCANOES = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of two volcano cross-section profiles labelled Volcano X and Volcano Y">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Comparison of Two Volcano Profiles (Not to Same Horizontal Scale)</text>
  <!-- Left panel: Volcano X (wide, gentle slopes) -->
  <rect x="20" y="40" width="252" height="194" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
  <text x="146" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Volcano X</text>
  <path d="M 34 196 Q 112 146 140 140 L 152 140 Q 180 146 258 196 Z" fill="var(--brand)" fill-opacity="0.22" stroke="var(--ink)" stroke-width="2"/>
  <rect x="143" y="140" width="6" height="56" fill="var(--bad)"/>
  <line x1="34" y1="196" x2="258" y2="196" stroke="var(--ink)" stroke-width="2"/>
  <text x="146" y="214" text-anchor="middle" font-size="11" fill="var(--ink-2)">Wide base &amp; gentle slopes (~8°)</text>
  <text x="146" y="228" text-anchor="middle" font-size="11" fill="var(--ink-2)">Layers of runny lava only</text>
  <!-- Right panel: Volcano Y (steep, alternating strata) -->
  <rect x="288" y="40" width="252" height="194" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
  <text x="414" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">Volcano Y</text>
  <polygon points="340,196 408,82 420,82 488,196" fill="var(--bad)" fill-opacity="0.18" stroke="var(--ink)" stroke-width="2"/>
  <!-- Alternating strata lines -->
  <line x1="358" y1="166" x2="470" y2="166" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="6 3"/>
  <line x1="376" y1="136" x2="452" y2="136" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="6 3"/>
  <line x1="392" y1="108" x2="436" y2="108" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="6 3"/>
  <rect x="411" y="82" width="6" height="114" fill="var(--bad)"/>
  <!-- Plume cloud -->
  <ellipse cx="414" cy="72" rx="18" ry="7" fill="var(--ink-2)" fill-opacity="0.35"/>
  <line x1="312" y1="196" x2="516" y2="196" stroke="var(--ink)" stroke-width="2"/>
  <text x="414" y="214" text-anchor="middle" font-size="11" fill="var(--ink-2)">Narrow base &amp; steep cone (~32°)</text>
  <text x="414" y="228" text-anchor="middle" font-size="11" fill="var(--ink-2)">Alternating ash &amp; thick lava layers</text>
</svg>`;

const SVG_TSUNAMI = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a tsunami wave travelling from deep ocean onto a shallow continental shelf">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Tsunami Wave Behaviour: Deep Ocean to Shallow Coast</text>
  <!-- Water body -->
  <path d="M 24 114 Q 100 108 176 114 Q 250 116 320 108 Q 378 96 420 58 Q 442 46 462 114 L 462 150 L 330 206 L 24 206 Z" fill="var(--brand)" fill-opacity="0.22" stroke="var(--brand)" stroke-width="2"/>
  <!-- Seabed and coast -->
  <path d="M 24 206 L 330 206 L 474 142 L 536 142 L 536 232 L 24 232 Z" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>
  <!-- Deep ocean annotations -->
  <text x="150" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Deep Ocean</text>
  <text x="150" y="80" text-anchor="middle" font-size="11" fill="var(--ink-2)">Depth: 4,000 m</text>
  <text x="150" y="96" text-anchor="middle" font-size="11" fill="var(--ink-2)">Speed: 800 km/h · Height: ~1 m</text>
  <!-- Direction arrow -->
  <line x1="88" y1="154" x2="210" y2="154" stroke="var(--brand)" stroke-width="2.5"/>
  <polygon points="210,148 222,154 210,160" fill="var(--brand)"/>
  <text x="150" y="172" text-anchor="middle" font-size="11" fill="var(--brand)">Long wavelength (~200 km)</text>
  <!-- Shallow coast annotations -->
  <text x="456" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Shallow Coast</text>
  <text x="498" y="132" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">Land</text>
  <text x="442" y="184" text-anchor="middle" font-size="11" fill="var(--ink-2)">Shallow coastal zone</text>
  <text x="442" y="198" text-anchor="middle" font-size="11" fill="var(--ink-2)">front of wave</text>
  <text x="442" y="216" text-anchor="middle" font-size="11" font-weight="600" fill="var(--bad)">Wave piles up (10–40 m)</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-1",
  title: "Year 9 Geography Mock 1: Risky World (Tectonics, Nepal & Japan)",
  calculator: true,
  minutes: 45,
  questions: [
    // ======================== SECTION A: MCQ (10) ==========================
    {
      id: "exam-1-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "plate-tectonics-margins",
      guideRef: "earths-structure-movement",
      question: "Which statement accurately compares oceanic crust with continental crust?",
      options: [
        "Oceanic crust is thicker, older, and less dense than continental crust.",
        "Oceanic crust is granite-rich and cannot be subducted into the mantle.",
        "Oceanic crust is thinner, younger, and denser than continental crust.",
        "Oceanic crust has the same density and thickness as continental crust.",
      ],
      answerIndex: 2,
      explanation:
        "Oceanic crust (mostly basalt) is thin (~5–10 km), geologically young, and denser than continental crust (mostly granite, ~30–70 km thick). Because it is denser, oceanic crust sinks during subduction rather than floating above continental crust.",
      hints: [
        "Think about what happens when oceanic crust meets continental crust at a destructive margin.",
        "Which type of crust is denser and therefore sinks downward into the mantle?",
      ],
    },
    {
      id: "exam-1-q02",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "plate-tectonics-margins",
      guideRef: "constructive-conservative",
      question:
        "Along the San Andreas Fault in California, two tectonic plates slide horizontally past one another. Which tectonic hazards occur at this type of plate margin?",
      options: [
        "Powerful earthquakes caused by locked friction, with no volcanic eruptions.",
        "Frequent gentle shield volcanoes fed by magma rising through a wide gap.",
        "Explosive composite volcanoes triggered by oceanic crust melting at depth.",
        "Deep ocean trenches and tall fold mountains with regular lava flows.",
      ],
      answerIndex: 0,
      explanation:
        "At a conservative (transform) margin, plates slide past each other without creating or destroying crust. Locked friction builds pressure and snaps to cause earthquakes, but no magma is generated so there are no volcanoes.",
      hints: [
        "Is crust being created or melted when two plates slide sideways past each other?",
        "Remember: volcanic eruptions require a supply of rising magma.",
      ],
    },
    {
      id: "exam-1-q03",
      kind: "mcq",
      difficulty: "core",
      topicId: "plate-tectonics-margins",
      guideRef: "destructive-collision",
      diagram: SVG_SUBDUCTION,
      question:
        "Study the cross-section of a destructive plate margin. Which geographical feature is located at zone P?",
      options: [
        "A mid-ocean ridge where fresh basaltic crust spreads outward.",
        "A transform fault where plates grind sideways with zero melting.",
        "A volcanic hotspot plume rising beneath the middle of a plate.",
        "A deep ocean trench where the denser oceanic plate bends downward.",
      ],
      answerIndex: 3,
      explanation:
        "Zone P marks the deep V-shaped ocean trench created where the denser oceanic plate (Q) bends and subducts beneath the continental plate. Mid-ocean ridges form at constructive margins where plates pull apart, not at subduction zones.",
      hints: [
        "Look closely at the seafloor directly where plate Q starts to bend downward.",
        "Does the ocean floor rise into a ridge there, or plunge into a deep trench?",
      ],
    },
    {
      id: "exam-1-q04",
      kind: "mcq",
      difficulty: "core",
      topicId: "plate-tectonics-margins",
      guideRef: "global-hazard-distribution",
      question:
        "Most active volcanoes lie in linear belts such as the Pacific Ring of Fire, yet Hawaii sits thousands of kilometres from any plate margin. What explains Hawaii's volcanic activity?",
      options: [
        "Two continental plates colliding beneath the central Pacific Ocean.",
        "A stationary mantle-plume hotspot burning upward through the moving plate.",
        "Rapid seafloor spreading splitting the Pacific Plate directly in two.",
        "Extreme ocean-wave erosion thinning the crust until lava leaks out.",
      ],
      answerIndex: 1,
      explanation:
        "Hawaii is an intra-plate anomaly formed above a stationary mantle-plume hotspot. As the Pacific Plate drifts over the rising plume of unusually hot mantle rock, magma punches through to build a chain of volcanic islands.",
      hints: [
        "Hawaii is located in the middle of a plate, not along a margin.",
        "What geological feature creates isolated mid-plate volcanic island chains?",
      ],
    },
    {
      id: "exam-1-q05",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "earthquakes-nepal-2015",
      guideRef: "earthquake-causes-measurement",
      question: "How does the Mercalli scale differ from the Moment Magnitude scale?",
      options: [
        "Mercalli rates observed shaking and damage (I–XII); Moment Magnitude measures energy released.",
        "Mercalli measures underground focus depth in kilometres; Moment Magnitude counts total deaths.",
        "Mercalli uses seismometers at a single station; Moment Magnitude only estimates tsunami height.",
        "Mercalli applies only to volcanic tremors; Moment Magnitude applies only to oceanic faults.",
      ],
      answerIndex: 0,
      explanation:
        "The Moment Magnitude scale is a logarithmic instrument measurement of total seismic energy released at the fault, whereas the Mercalli scale (Roman numerals I to XII) rates intensity based on observed ground shaking and building damage, which varies with distance and construction quality.",
      hints: [
        "Recall which scale uses Roman numerals I–XII based on what people feel and what buildings suffer.",
        "Think about the difference between earthquake energy (magnitude) and local impact (intensity).",
      ],
    },
    {
      id: "exam-1-q06",
      kind: "mcq",
      difficulty: "core",
      topicId: "earthquakes-nepal-2015",
      guideRef: "nepal-2015-causes-effects",
      question:
        "Which of the following was a **secondary effect** of the April 2015 Gorkha earthquake in Nepal?",
      options: [
        "Immediate ground shaking collapsing unreinforced brick temples in Kathmandu.",
        "Sudden upward rupture along the fault between the Indian and Eurasian plates.",
        "Massive snow avalanches on Mount Everest and landslides blocking mountain roads.",
        "Direct structural cracking of schools and homes during the initial tremor.",
      ],
      answerIndex: 2,
      explanation:
        "Secondary effects happen as a knock-on consequence of primary ground shaking. The 2015 tremor triggered deadly avalanches at Everest Base Camp and in the Langtang valley, plus landslides that cut off remote rural villages. Immediate building collapse from shaking is a primary effect.",
      hints: [
        "Primary effects happen directly because of ground shaking; secondary effects are triggered afterward.",
        "Which hazard was triggered by shaking unstable Himalayan slopes and snowpacks?",
      ],
    },
    {
      id: "exam-1-q07",
      kind: "mcq",
      difficulty: "core",
      topicId: "volcanoes-living-with-risk",
      guideRef: "shield-vs-composite",
      diagram: SVG_VOLCANOES,
      question:
        "Study the two volcano profiles. Why does Volcano Y produce far more violent, explosive eruptions than Volcano X?",
      options: [
        "Its runny basaltic lava lets gas bubbles escape gently before reaching the vent.",
        "Its wide base spreads magma thinly across flat plains so pressure never builds.",
        "It always forms along constructive mid-ocean ridges where water cools the crust.",
        "Its thick, viscous acidic magma traps rising gases until pressure blasts apart.",
      ],
      answerIndex: 3,
      explanation:
        "Volcano Y is a steep composite volcano (stratovolcano) built from thick, silica-rich acidic magma. High viscosity traps volcanic gases inside the conduit, allowing huge pressure to build until it erupts explosively. Volcano X is a gentle shield volcano with runny basaltic lava that allows gases to escape steadily.",
      hints: [
        "Identify which profile shows a composite volcano and which shows a shield volcano.",
        "How does magma viscosity (thickness) affect whether trapped gas escapes quietly or builds pressure?",
      ],
    },
    {
      id: "exam-1-q08",
      kind: "mcq",
      difficulty: "core",
      topicId: "volcanoes-living-with-risk",
      guideRef: "volcanic-hazards",
      question: "What makes a **lahar** distinct from a **pyroclastic flow**?",
      options: [
        "A lahar is a slow basaltic lava stream, whereas a pyroclastic flow is cold floodwater.",
        "A lahar is a volcanic mudflow of ash and water, whereas a pyroclastic flow is superheated gas and ash.",
        "A lahar is an invisible cloud of sulphur gas, whereas a pyroclastic flow is falling hail.",
        "A lahar occurs only underwater at trenches, whereas a pyroclastic flow forms at hotspots.",
      ],
      answerIndex: 1,
      explanation:
        "A lahar is a fast-moving secondary volcanic mudflow formed when loose volcanic ash mixes with heavy rainfall or melted summit snow/ice, racing down river valleys like wet concrete. A pyroclastic flow is a primary avalanche of superheated gas, tephra, and rock (up to 700°C).",
      hints: [
        "Think about the role of heavy rain or melting glacier ice on a volcano's ash-covered slopes.",
        "Which hazard is a dense mudflow, and which is a scorching gas-and-ash cloud?",
      ],
    },
    {
      id: "exam-1-q09",
      kind: "mcq",
      difficulty: "core",
      topicId: "tsunamis-japan-2011",
      guideRef: "tsunami-causes-shoaling",
      question:
        "A tsunami travels across the deep ocean barely 1 metre high, yet can strike the coastline as a wall of water over 20 metres tall. What causes this dramatic increase in height?",
      options: [
        "Seabed friction slows the wave front in shallow water, compressing wavelength and piling water upward.",
        "Strong onshore winds blow extra seawater onto the wave crest during the final kilometre.",
        "Deep ocean pressure keeps the wave crushed flat until warm coastal currents make it boil.",
        "Underwater earthquakes fire repeated shockwaves that push the wave faster near beaches.",
      ],
      answerIndex: 0,
      explanation:
        "This process is coastal shoaling. In shallow water, friction with the rising seabed slows the front of the wave while the rear continues moving rapidly; the wavelength shortens and the enormous volume of water is forced upward into a towering wave.",
      hints: [
        "Think about what happens to wave speed and wavelength when water gets shallow.",
        "If the front of a long wave slows down while the water behind keeps rushing forward, where must the water go?",
      ],
    },
    {
      id: "exam-1-q10",
      kind: "mcq",
      difficulty: "challenge",
      topicId: "tsunamis-japan-2011",
      guideRef: "hic-vs-lic-comparison",
      question:
        "The 2011 Japan disaster caused over $235 billion in economic losses, compared with roughly $5 billion in Nepal in 2015. Why do HIC tectonic disasters usually have much higher total financial costs than LIC disasters?",
      options: [
        "HICs refuse international aid, so governments must double the price of all repairs.",
        "HIC buildings are constructed more cheaply and collapse more easily than LIC buildings.",
        "HICs contain dense, high-value infrastructure, insured property, ports, and industrial plants.",
        "HICs always suffer higher-magnitude earthquakes than LICs due to deeper continental crust.",
      ],
      answerIndex: 2,
      explanation:
        "High-Income Countries have dense networks of high-value infrastructure — bullet trains, airports, factories, power stations (like Fukushima), and insured homes — so physical damage adds up to huge dollar totals, even though better engineering and warnings keep proportional death rates far lower than in LICs.",
      hints: [
        "Compare the monetary value of infrastructure destroyed in Sendai/Fukushima versus rural Nepal.",
        "Does a higher dollar loss necessarily mean weaker buildings or worse preparation?",
      ],
    },

    // =================== SECTION B: SHORT ANSWER (11) ======================
    {
      id: "exam-1-q11",
      kind: "short",
      difficulty: "warmup",
      topicId: "plate-tectonics-margins",
      guideRef: "earths-structure-movement",
      question:
        "Name the strongest driving force behind plate movement, in which a cold, dense subducting oceanic plate sinks into the mantle and drags the trailing plate behind it.",
      answer: {
        type: "text",
        accept: ["slab pull", "slab-pull"],
        display: "Slab pull",
      },
      traps: [
        {
          spec: { type: "text", accept: ["ridge push", "ridge-push"] },
          feedback:
            "Ridge push pushes plates away from raised mid-ocean ridges; the sinking pull at subduction zones is slab pull.",
        },
        {
          spec: { type: "text", accept: ["convection", "convection currents", "mantle convection"] },
          feedback:
            "Convection currents help circulate heat in the mantle, but the specific sinking drag of a dense oceanic plate is slab pull.",
        },
      ],
      solution: [
        "At a destructive margin, cold, dense oceanic lithosphere sinks steeply into the asthenosphere under gravity.",
        "This downward weight pulls the rest of the tectonic plate behind it — known as **slab pull**.",
      ],
      commonError: "Confusing slab pull (at subduction zones) with ridge push (at constructive mid-ocean ridges).",
      hints: [
        "It is a two-word term naming the sinking 'slab' of oceanic crust.",
        "Unlike ridge push at diverging ridges, this mechanism pulls the plate downward.",
      ],
    },
    {
      id: "exam-1-q12",
      kind: "short",
      difficulty: "core",
      topicId: "plate-tectonics-margins",
      guideRef: "destructive-collision",
      question:
        "Name the specific type of convergent plate margin where the Indian and Eurasian continental plates crumpled upward to form the Himalayas without any subduction or volcanoes.",
      answer: {
        type: "text",
        accept: ["collision", "collision margin", "collision boundary", "continental collision"],
        display: "Collision margin",
      },
      traps: [
        {
          spec: { type: "text", accept: ["destructive", "destructive margin", "subduction"] },
          feedback:
            "Destructive subduction margins involve oceanic crust sinking and creating volcanoes. Two continental plates crumpling upward form a collision margin.",
        },
        {
          spec: { type: "text", accept: ["constructive", "divergent"] },
          feedback: "Constructive margins pull plates apart rather than pushing two continental plates together.",
        },
      ],
      solution: [
        "Both the Indian and Eurasian plates are buoyant continental crust, so neither can subduct deeply into the mantle.",
        "Instead, rock folds and thrusts upward into fold mountains at a **collision margin**, causing powerful earthquakes but no volcanoes.",
      ],
      commonError: "Writing 'destructive' instead of distinguishing a continental-continental collision margin.",
      hints: [
        "Both plates are continental, so neither sinks — they crash head-on.",
        "This margin shares its name with the noun for two objects crashing together.",
      ],
    },
    {
      id: "exam-1-q13",
      kind: "short",
      difficulty: "warmup",
      topicId: "earthquakes-nepal-2015",
      guideRef: "earthquake-causes-measurement",
      question:
        "Name the point on the Earth's surface located directly above the underground origin of an earthquake.",
      answer: {
        type: "text",
        accept: ["epicentre", "epicenter"],
        display: "Epicentre",
      },
      traps: [
        {
          spec: { type: "text", accept: ["focus", "hypocentre", "hypocenter"] },
          feedback:
            "The focus (hypocentre) is the underground point where the rock ruptures; the surface point directly above it is the epicentre.",
        },
      ],
      solution: [
        "Rock fractures underground at the **focus** (hypocentre).",
        "The point on the ground surface vertically above the focus — where shaking is usually strongest — is the **epicentre**.",
      ],
      commonError: "Swapping focus (underground) and epicentre (on the surface).",
      hints: [
        "The prefix 'epi-' means 'upon' or 'above'.",
        "News reports usually plot this surface location on a map.",
      ],
    },
    {
      id: "exam-1-q14",
      kind: "short",
      difficulty: "challenge",
      topicId: "earthquakes-nepal-2015",
      guideRef: "earthquake-causes-measurement",
      question:
        "On the logarithmic earthquake magnitude scale, each whole-number increase of `1.0` multiplies seismic wave amplitude by `10`. How many times greater is the seismic wave amplitude of a Magnitude `9.0` earthquake than a Magnitude `7.0` earthquake?",
      answer: {
        type: "number",
        value: 100,
        display: "100",
      },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback:
            "A logarithmic scale multiplies by 10 for each step rather than adding 10: two steps give 10 × 10 = 100, not 2 × 10 = 20.",
        },
        {
          spec: { type: "number", value: 2 },
          feedback: "2 is the difference in magnitude numbers, not the amplitude multiplier.",
        },
      ],
      solution: [
        "Find the magnitude difference: {{9.0 - 7.0 = 2.0}} whole steps.",
        "Each whole step multiplies seismic wave amplitude by 10, so two steps multiply amplitude by {{10^2 = 10 * 10 = 100}}.",
      ],
      commonError: "Multiplying the step difference by 10 (2 × 10 = 20) instead of raising 10 to the power of 2.",
      hints: [
        "How many whole-number steps separate 7.0 and 9.0?",
        "Multiply by 10 once to reach 8.0, then multiply by 10 a second time to reach 9.0.",
      ],
    },
    {
      id: "exam-1-q15",
      kind: "short",
      difficulty: "core",
      topicId: "earthquakes-nepal-2015",
      guideRef: "nepal-2015-responses",
      question:
        "After the 2015 Nepal earthquake, introducing stricter seismic building codes and restoring historic Kathmandu heritage sites to revive tourism are classed as which timeframe of response: immediate or long-term?",
      answer: {
        type: "text",
        accept: ["long-term", "long term", "long-term response", "long term response", "long-term responses", "long term responses"],
        display: "Long-term",
      },
      traps: [
        {
          spec: { type: "text", accept: ["immediate", "short-term", "short term"] },
          feedback:
            "Immediate responses happen within hours or days to save lives (search and rescue, tents, clean water). Rebuilding infrastructure and enforcing codes are long-term responses.",
        },
      ],
      solution: [
        "Immediate responses address urgent survival in the first hours and days (rescue teams, medical aid, emergency shelter).",
        "Reconstructing permanent buildings, upgrading seismic codes, and restoring tourism take months or years, making them **long-term** responses.",
      ],
      commonError: "Classifying reconstruction of permanent roads and codes as immediate aid.",
      hints: [
        "Do stricter building laws and rebuilding monuments happen in the first 48 hours, or over months and years?",
        "Choose between the two standard disaster-response categories named in the question.",
      ],
    },
    {
      id: "exam-1-q16",
      kind: "short",
      difficulty: "warmup",
      topicId: "volcanoes-living-with-risk",
      guideRef: "why-live-near-volcanoes",
      question:
        "Name the renewable energy resource harnessed in volcanic regions like Iceland, where underground magmatic heat turns water into steam to drive electricity turbines and heat homes.",
      answer: {
        type: "text",
        accept: ["geothermal", "geothermal energy", "geothermal power"],
        display: "Geothermal energy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["hydroelectric", "hep", "hydropower"] },
          feedback:
            "Hydroelectric power uses falling river water, whereas electricity generated from volcanic underground heat is geothermal energy.",
        },
        {
          spec: { type: "text", accept: ["solar", "solar power", "solar energy"] },
          feedback: "Solar power uses sunlight rather than heat from Earth's crust.",
        },
      ],
      solution: [
        "'Geo' means Earth and 'thermal' means heat.",
        "Using underground volcanic heat to produce steam for turbines and district heating is **geothermal energy**.",
      ],
      commonError: "Writing 'hydroelectric' because water is turned into steam.",
      hints: [
        "Combine the Greek roots meaning 'Earth' and 'heat'.",
        "Iceland generates roughly a quarter of its electricity and heats most homes this way.",
      ],
    },
    {
      id: "exam-1-q17",
      kind: "short",
      difficulty: "core",
      topicId: "volcanoes-living-with-risk",
      guideRef: "predict-prepare-volcanoes",
      question:
        "Name the monitoring instrument placed on a volcano's flank to measure tiny changes in slope angle when rising magma causes the mountain to bulge outward.",
      answer: {
        type: "text",
        accept: ["tiltmeter", "tiltmeters", "tilt meter"],
        display: "Tiltmeter",
      },
      traps: [
        {
          spec: { type: "text", accept: ["seismometer", "seismograph", "seismometers"] },
          feedback:
            "A seismometer records underground harmonic tremors; the instrument that detects changes in slope tilt is a tiltmeter.",
        },
        {
          spec: { type: "text", accept: ["spectrometer", "thermal camera"] },
          feedback:
            "Spectrometers track volcanic gases like SO₂ and thermal cameras measure surface heat; slope swelling is measured by a tiltmeter.",
        },
      ],
      solution: [
        "As magma forces its way into a chamber below the volcano, the flanks inflate slightly, changing the angle of the ground.",
        "A **tiltmeter** works like a super-sensitive spirit level to detect this ground tilt.",
      ],
      commonError: "Writing 'seismometer' for all volcanic monitoring instruments instead of matching each tool to its warning sign.",
      hints: [
        "Think about the word for a slope leaning or tilting slightly.",
        "Combine 'tilt' with '-meter'.",
      ],
    },
    {
      id: "exam-1-q18",
      kind: "short",
      difficulty: "core",
      topicId: "tsunamis-japan-2011",
      guideRef: "tsunami-causes-shoaling",
      diagram: SVG_TSUNAMI,
      question:
        "Use the deep-ocean tsunami speed shown on the diagram (`800 km/h`). If a submarine megathrust earthquake generates a tsunami `2,000 km` offshore, how many hours will the first wave take to reach the coast?",
      answer: {
        type: "number",
        value: 2.5,
        display: "2.5 hours",
      },
      traps: [
        {
          spec: { type: "number", value: 0.4 },
          feedback: "You divided speed by distance (800 ÷ 2,000). Use Time = Distance ÷ Speed.",
        },
        {
          spec: { type: "number", value: 4 },
          feedback: "Check the division: 2,000 ÷ 800 = 20 ÷ 8 = 2.5, not 4.",
        },
      ],
      solution: [
        "Use the formula {{Time = Distance / Speed}}.",
        "{{2000 / 800 = 2.5}} hours (2 hours 30 minutes).",
      ],
      commonError: "Inverting the formula and dividing speed by distance.",
      hints: [
        "Recall the speed–distance–time triangle: Time = Distance ÷ Speed.",
        "Divide 2,000 km by 800 km/h.",
      ],
    },
    {
      id: "exam-1-q19",
      kind: "short",
      difficulty: "core",
      topicId: "tsunamis-japan-2011",
      guideRef: "japan-2011-impacts",
      question:
        "During the 2011 Tōhoku tsunami, a narrow bay with a `10 m` concrete sea wall was overtopped by a `38 m` wave. Calculate the percentage increase from the sea wall height to the tsunami wave height.",
      answer: {
        type: "number",
        value: 280,
        display: "280%",
      },
      traps: [
        {
          spec: { type: "number", value: 380 },
          feedback: "380% is 38 ÷ 10 × 100. For percentage increase, subtract the original 10 m first: (38 − 10) ÷ 10 × 100.",
        },
        {
          spec: { type: "number", value: 28 },
          feedback: "28 m is the height difference in metres; now express it as a percentage of the original 10 m wall.",
        },
      ],
      solution: [
        "Find the increase in height: {{38 - 10 = 28}} m.",
        "Divide by the original height and multiply by 100: {{(28 / 10) * 100 = 280}}%.",
      ],
      commonError: "Dividing the new value directly by the old value (38 ÷ 10 × 100 = 380%) without subtracting the original height.",
      hints: [
        "Use Percentage Increase = ((New − Old) ÷ Old) × 100.",
        "First subtract 10 m from 38 m, then divide by 10 m and multiply by 100.",
      ],
    },
    {
      id: "exam-1-q20",
      kind: "short",
      difficulty: "core",
      topicId: "plate-tectonics-margins",
      guideRef: "constructive-conservative",
      question:
        "Two tectonic plates diverge along a constructive mid-ocean ridge at a combined rate of `2.5 cm` per year. How many **metres** wider will the ocean basin become after `1,000` years?",
      answer: {
        type: "number",
        value: 25,
        display: "25 m",
      },
      traps: [
        {
          spec: { type: "number", value: 2500 },
          feedback: "2,500 is the widening in centimetres! Divide by 100 to convert centimetres into metres.",
        },
        {
          spec: { type: "number", value: 250 },
          feedback: "There are 100 cm in 1 m, not 10 cm. Divide 2,500 cm by 100.",
        },
      ],
      solution: [
        "Calculate total widening in centimetres: {{2.5 * 1000 = 2500}} cm.",
        "Convert centimetres to metres by dividing by 100: {{2500 / 100 = 25}} m.",
      ],
      commonError: "Forgetting to convert centimetres into metres after multiplying by 1,000 years.",
      hints: [
        "First multiply 2.5 cm/year by 1,000 years to get centimetres.",
        "Remember 100 cm = 1 m, so divide your centimetre answer by 100.",
      ],
    },
    {
      id: "exam-1-q21",
      kind: "short",
      difficulty: "challenge",
      topicId: "earthquakes-nepal-2015",
      guideRef: "nepal-2015-causes-effects",
      question:
        "The 2015 Nepal earthquake caused approximately `$5 billion` in economic damage in a country whose annual GDP was `$20 billion`. What percentage of Nepal's annual GDP was lost?",
      answer: {
        type: "number",
        value: 25,
        display: "25%",
      },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "4 is 20 ÷ 5. Divide damage ($5bn) by total GDP ($20bn), then multiply by 100.",
        },
        {
          spec: { type: "number", value: 15 },
          feedback: "15 is the difference ($20bn − $5bn), not the percentage of GDP lost.",
        },
      ],
      solution: [
        "Divide the economic loss by total annual GDP: {{5 / 20 = 0.25}}.",
        "Multiply by 100 to express as a percentage: {{0.25 * 100 = 25}}%.",
      ],
      commonError: "Dividing the larger number by the smaller number instead of (part ÷ whole) × 100.",
      hints: [
        "What fraction of $20 billion is $5 billion?",
        "Convert 5/20 (which simplifies to 1/4) into a percentage.",
      ],
    },

    // ==================== SECTION C: WRITTEN (4) ===========================
    {
      id: "exam-1-q22",
      kind: "written",
      difficulty: "core",
      topicId: "earthquakes-nepal-2015",
      guideRef: "earthquake-management-3ps",
      marks: 3,
      question:
        "Explain why scientists cannot forecast the exact date of a major quake, and describe TWO structural design features that help modern towers survive violent ground shaking. (3 marks)",
      modelAnswer:
        "Scientists cannot give an exact warning because underground stress along locked faults snaps suddenly without reliable short-term precursors; monitoring historical recurrence and foreshocks only yields long-term probabilities. To protect towers, engineers install base isolation bearings (flexible rubber-and-steel shock absorbers) beneath the foundations to absorb horizontal motion, and add diagonal steel cross-bracing to reinforce the frame against twisting and collapse.",
      markScheme: [
        {
          point: "Explains exact forecasting is impossible because fault rupture is sudden/unpredictable and monitoring only gives probabilities.",
          keywords: ["probabilit", "sudden", "unpredictable", "precursor", "foreshock", "recurrence", "cannot pinpoint"],
        },
        {
          point: "Describes a first valid aseismic engineering feature (e.g. base isolation / shock absorbers) and how it protects the building.",
          keywords: ["base isolation", "shock absorber", "rubber bearing", "isolated foundation", "absorbs"],
        },
        {
          point: "Describes a second distinct aseismic feature (e.g. steel cross-bracing, tuned mass damper/counterweight, or shatterproof glass).",
          keywords: ["cross-bracing", "cross bracing", "counterweight", "mass damper", "shatterproof", "flexible steel"],
        },
      ],
      commonError: "Listing 'evacuation drills' or 'emergency kits' instead of structural building design features.",
      hints: [
        "First explain what fault monitoring can give (probabilities) versus what it cannot give (exact timing).",
        "Then describe two physical features built into earthquake-resistant skyscrapers — think about foundations, frames, or roof weights.",
      ],
    },
    {
      id: "exam-1-q23",
      kind: "written",
      difficulty: "core",
      topicId: "volcanoes-living-with-risk",
      guideRef: "why-live-near-volcanoes",
      marks: 3,
      question:
        "Explain THREE distinct reasons why millions of people continue to settle on or near active volcanic slopes despite the danger of eruptions. (3 marks)",
      modelAnswer:
        "First, weathered volcanic ash creates mineral-rich, highly fertile soils that support high-yield farming on places like Java and the slopes of Mount Etna. Second, volcanic landscapes attract major tourism income and provide local jobs in hospitality, guiding, or sulphur mining. Third, many residents remain because of poverty and lack of funds to relocate, strong family and cultural ties to ancestral land, or confidence that scientific monitoring will give time to evacuate.",
      markScheme: [
        {
          point: "Fertile, mineral-rich volcanic soils supporting productive agriculture/high crop yields.",
          keywords: ["fertile", "mineral", "crop", "farming", "agriculture", "soil"],
        },
        {
          point: "Economic opportunities such as tourism jobs, geothermal energy, or sulphur/mineral mining.",
          keywords: ["tourism", "geothermal", "mining", "sulphur", "sulfur", "jobs", "income"],
        },
        {
          point: "Social or economic constraint/belief such as poverty/cannot afford to move, family ties, or trust in monitoring/warnings.",
          keywords: ["poverty", "afford", "family", "ties", "relocate", "monitoring", "evacuate", "rare"],
        },
      ],
      commonError: "Giving three minor variations of farming instead of three distinct economic/social/physical reasons.",
      hints: [
        "Aim for three different categories: agriculture, another economic benefit (tourism/energy/mining), and a social reason.",
        "Explain WHY each factor keeps people there rather than writing single-word bullet points.",
      ],
    },
    {
      id: "exam-1-q24",
      kind: "written",
      difficulty: "challenge",
      topicId: "tsunamis-japan-2011",
      guideRef: "japan-2011-responses",
      marks: 4,
      question:
        "Evaluate the effectiveness of Japan's immediate and long-term responses to the 2011 Tōhoku disaster, including BOTH major successes and clear limitations. (4 marks)",
      modelAnswer:
        "Japan's immediate warning systems were highly effective: rapid SMS and TV alerts reached millions within seconds, and automatic braking halted Shinkansen bullet trains safely with zero passenger deaths, while the Self-Defense Force rescued tens of thousands. However, an immediate limitation was that waves up to 40 m overtopped existing seawalls and flooded Fukushima Daiichi's backup generators, triggering severe nuclear meltdowns. In the long term, Japan rebuilt taller seawalls up to 14 m, relocated vulnerable neighbourhoods onto higher ground, and shifted investment toward renewables and stricter nuclear safety. Nevertheless, rebuilding coastal towns was slow and costly, and huge seawalls have been criticised for harming fishing access and giving a false sense of security.",
      markScheme: [
        {
          point: "Identifies a specific immediate success (e.g. rapid SMS/TV early warnings, automatic Shinkansen braking, or Self-Defense Force rescue).",
          keywords: ["sms", "shinkansen", "bullet train", "early warning", "self-defense", "self defense", "braking"],
        },
        {
          point: "Identifies a clear immediate limitation (e.g. waves overtopping seawalls, Fukushima nuclear meltdowns, or ~18,500 dead/missing).",
          keywords: ["overtop", "fukushima", "meltdown", "nuclear", "18,500", "backup generator"],
        },
        {
          point: "Identifies a specific long-term response (e.g. taller 14 m seawalls, relocating homes to higher ground, or nuclear safety review/renewables).",
          keywords: ["higher ground", "relocat", "14 m", "taller seawall", "renewable", "safety review"],
        },
        {
          point: "Evaluates a long-term limitation or gives a balanced overall judgement (e.g. huge $235B cost, slow recovery, fishing impact, or false sense of security).",
          keywords: ["costly", "false sense", "fishing", "slow", "overall", "highly effective", "criticis"],
        },
      ],
      commonError: "Describing the earthquake's impacts without evaluating both immediate and long-term responses.",
      hints: [
        "Cover both immediate (minutes/days) and long-term (months/years) actions.",
        "For 'Evaluate', weigh what worked brilliantly (warnings, trains, relocation) against what failed or remained costly (seawalls overtopped, Fukushima).",
      ],
    },
    {
      id: "exam-1-q25",
      kind: "written",
      difficulty: "challenge",
      topicId: "tsunamis-japan-2011",
      guideRef: "hic-vs-lic-comparison",
      marks: 4,
      question:
        "\"National wealth is the main reason why the 2015 Nepal earthquake had a far worse proportional human impact than the 2011 Japan earthquake.\" To what extent do you agree? Give a balanced argument with case study evidence. (4 marks)",
      modelAnswer:
        "I largely agree that national wealth was decisive, because Japan's status as a High-Income Country funded strict aseismic building codes, earthquake drills, well-equipped healthcare, and automated early-warning networks, keeping deaths from actual ground shaking very low despite a Magnitude 9.0 event. By contrast, Nepal — a Low-Income Country — had widespread unreinforced masonry homes, fragile hospitals, and heavy reliance on foreign aid, contributing to roughly 9,000 deaths and 3.5 million made homeless from a smaller Magnitude 7.8 quake. However, physical geography also played a major role: Nepal's shallow focus (~8–15 km), mountainous terrain triggering landslides and Everest avalanches, and landlocked access hindered rescue regardless of income, while Japan's coastal subduction fault generated a catastrophic 40 m tsunami that killed most of its ~18,500 victims. Overall, wealth heavily shapes preparedness and recovery speed, yet physical hazard characteristics still determine how deadly an event becomes.",
      markScheme: [
        {
          point: "Explains how Japan's wealth (HIC) reduced vulnerability via strict building codes, warnings, drills, or healthcare.",
          keywords: ["building code", "aseismic", "early-warning", "early warning", "healthcare", "hic", "high-income"],
        },
        {
          point: "Provides contrasting Nepal (LIC) evidence linking lower wealth to unreinforced buildings, ~9,000 deaths, 3.5 million homeless, or aid dependence.",
          keywords: ["unreinforced", "9,000", "3.5 million", "foreign aid", "lic", "low-income", "masonry"],
        },
        {
          point: "Introduces a counter-argument focusing on physical/geographical factors (shallow focus, Himalayan landslides/avalanches, or Japan's M9.0 tsunami).",
          keywords: ["shallow", "landslide", "avalanche", "mountainous", "landlocked", "tsunami", "physical"],
        },
        {
          point: "Reaches a clear, reasoned 'to what extent' judgement weighing wealth against physical geography.",
          keywords: ["largely agree", "partly agree", "overall", "decisive", "however", "weigh"],
        },
      ],
      commonError: "Writing a one-sided answer that mentions wealth without considering physical factors like focus depth, terrain, or tsunami generation.",
      hints: [
        "Use PEEL structure: first argue why wealth mattered using Japan (HIC) vs Nepal (LIC) evidence.",
        "Then add a counter-paragraph ('However...') discussing physical geography (shallow focus, Himalayan slopes, tsunami), and finish with a clear overall judgement.",
      ],
    },
  ],
};
