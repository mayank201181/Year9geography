import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "volcanoes-living-with-risk",
  title: "Volcanoes, Living with Risk & Preparation",
  strand: "Risky World",
  icon: "🌋",
  summary:
    "Discover why runny lava builds wide shields while sticky magma explodes in steep cones, why millions still farm volcanic slopes, and how scientists read warning signs before eruptions.",
  intro:
    "Over **800 million people** live within 100 km of an active volcano — including tens of millions across Indonesia right next door to Singapore. Why do some volcanoes ooze glowing orange rivers that tourists safely photograph, while others blast superheated ash clouds down their flanks at motorway speeds? In this topic you will connect magma chemistry to volcano shape, separate primary from secondary volcanic hazards, weigh the economic and social reasons people stay in danger zones, and evaluate how monitoring and preparation save lives.",
  guide: [
    {
      id: "shield-vs-composite",
      heading: "Shield vs Composite (Stratovolcano) Features",
      discovery: {
        problem:
          "Pour a spoonful of warm water onto a flat plate, and next to it pour a spoonful of cold thick honey. Which spreads into a wide, low dome, and which piles into a steep, narrow mound? Now imagine trapping fizzy gas bubbles under each one — which bursts more violently?",
        idea: "Thin, low-viscosity liquid spreads far before stopping (gentle slopes) and lets gas escape quietly. Thick, high-viscosity liquid piles steeply near the vent and traps gas until pressure builds to a violent explosion. That single physical idea — **viscosity** — explains almost every difference between shield and composite volcanoes.",
      },
      body: `Not all volcanoes look or behave the same. Their shape and eruption style depend on the **plate margin** where they form and the **viscosity** (stickiness/thickness) of their magma.

**1. Shield Volcanoes**
- **Plate setting:** Mostly at **constructive (divergent) margins** (such as Iceland along the Mid-Atlantic Ridge) or **mantle-plume hotspots** (such as Mauna Loa and Kīlauea in Hawaii).
- **Magma & lava:** **Basaltic lava** — low in silica (~50%), very hot (~1,100–1,200 °C), and **low viscosity** (runny).
- **Shape:** Because runny lava travels many kilometres before cooling and solidifying, shield volcanoes build a **very wide base** with **gentle slopes** (typically 2°–10°), looking like a warrior's shield laid flat on the ground.
- **Eruptions:** **Frequent and effusive** (non-explosive). Gas bubbles escape easily through thin magma, producing glowing lava fountains and steady lava rivers rather than huge ash blasts.

**2. Composite Volcanoes (Stratovolcanoes)**
- **Plate setting:** Mainly at **destructive (convergent) subduction margins** around the Pacific Ring of Fire (such as **Mount Merapi** in Indonesia, **Mount Fuji** in Japan, and **Mount Vesuvius** in Italy).
- **Magma & lava:** **Andesitic or rhyolitic (acidic) magma** — high in silica (~60–70%), cooler (~800–950 °C), and **high viscosity** (thick and sticky).
- **Shape:** Sticky lava cools quickly close to the crater, creating **steep, symmetrical cone slopes** (typically 25°–35°) with a narrow base. Over centuries, alternating eruptions build distinct **layers (strata) of solidified ash and lava** — hence the name *stratovolcano*.
- **Eruptions:** **Infrequent but violently explosive**. Thick magma traps dissolved gases (water vapour, CO₂, SO₂) until internal pressure shatters the blocked vent, blasting tephra, ash plumes, and pyroclastic flows.

| Feature | Shield Volcano | Composite Volcano (Stratovolcano) |
|---|---|---|
| Plate setting | Constructive margins &amp; hotspots | Destructive (subduction) margins |
| Magma type | Basaltic (low silica, ~50%) | Andesitic / acidic (high silica, 60–70%) |
| Viscosity | Low (runny, fast-spreading) | High (thick, sticky, slow-moving) |
| Slope &amp; shape | Wide base, gentle slopes (2°–10°) | Narrower base, steep cone (25°–35°) |
| Structure | Layers of cooled lava only | Alternating layers of ash and lava |
| Eruption style | Frequent, gentle / effusive | Infrequent, violent / explosive |
| Named examples | Mauna Loa (Hawaii), Eyjafjallajökull flank / Skjaldbreiður (Iceland) | Mount Merapi (Indonesia), Mount Fuji (Japan) |`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side cross-section comparing a wide, gently sloped shield volcano with a steep layered composite stratovolcano"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="140" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Shield Volcano</text><text x="140" y="40" text-anchor="middle" font-size="10" fill="var(--ink-2)">Constructive / Hotspot · Runny Basaltic Lava</text><line x1="280" y1="14" x2="280" y2="236" stroke="var(--line)" stroke-dasharray="4 4"/><text x="420" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Composite (Stratovolcano)</text><text x="420" y="40" text-anchor="middle" font-size="10" fill="var(--ink-2)">Destructive Margin · Viscous Acidic Magma</text><rect x="16" y="196" width="248" height="32" fill="var(--surface-2)" stroke="var(--line)"/><path d="M 24 196 Q 90 154 134 148 L 146 148 Q 190 154 256 196 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/><path d="M 134 148 L 134 226 L 146 226 L 146 148 Z" fill="var(--bad)"/><ellipse cx="140" cy="222" rx="34" ry="12" fill="var(--bad)"/><path d="M 134 148 Q 100 158 58 178" fill="none" stroke="var(--bad)" stroke-width="3.5" stroke-linecap="round"/><path d="M 146 148 Q 182 158 224 178" fill="none" stroke="var(--bad)" stroke-width="3.5" stroke-linecap="round"/><text x="140" y="138" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Effusive lava rivers</text><text x="64" y="162" text-anchor="middle" font-size="9.5" fill="var(--ink)">Gentle 2°–10°</text><text x="140" y="214" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--surface)">Magma</text><text x="140" y="242" text-anchor="middle" font-size="10" fill="var(--ink-2)">Wide base · Cooled lava layers only</text><rect x="296" y="196" width="248" height="32" fill="var(--surface-2)" stroke="var(--line)"/><polygon points="342,196 410,96 430,96 498,196" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/><path d="M 358 172 L 482 172" stroke="var(--ink-2)" stroke-width="3" stroke-dasharray="6 3"/><path d="M 374 148 L 466 148" stroke="var(--bad)" stroke-width="3"/><path d="M 390 124 L 450 124" stroke="var(--ink-2)" stroke-width="3" stroke-dasharray="6 3"/><path d="M 414 96 L 414 226 L 426 226 L 426 96 Z" fill="var(--bad)"/><path d="M 426 140 L 468 156" stroke="var(--bad)" stroke-width="4" stroke-linecap="round"/><ellipse cx="420" cy="222" rx="34" ry="12" fill="var(--bad)"/><path d="M 410 92 Q 395 66 420 52 Q 446 66 430 92 Z" fill="var(--ink-2)" opacity="0.35"/><circle cx="406" cy="64" r="10" fill="var(--ink-2)" opacity="0.35"/><circle cx="436" cy="62" r="12" fill="var(--ink-2)" opacity="0.35"/><text x="420" y="68" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Ash &amp; gas plume</text><text x="342" y="136" text-anchor="middle" font-size="9.5" fill="var(--ink)">Steep 25°–35°</text><text x="502" y="152" text-anchor="middle" font-size="9" fill="var(--bad)">Secondary</text><text x="502" y="163" text-anchor="middle" font-size="9" fill="var(--bad)">vent</text><text x="420" y="214" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--surface)">Magma</text><text x="420" y="242" text-anchor="middle" font-size="10" fill="var(--ink-2)">Narrower base · Alternating ash &amp; lava layers</text></svg>`,
      diagramCaption:
        "Viscosity controls volcano profile: runny basaltic lava spreads into a broad shield (left), whereas thick, gas-rich magma piles into a steep layered composite cone (right).",
      workedExamples: [
        {
          title: "Classifying an unfamiliar volcano from field data",
          problem:
            "A volcano sits 180 km inland from an oceanic trench. Geologists measure slopes of 32°, alternating bands of hardened volcanic ash and andesite rock, and a silica content of 64%. Identify the volcano type and predict its eruption style.",
          steps: [
            "Check the tectonic location: an oceanic trench indicates a destructive (subduction) margin.",
            "Check the magma & geometry: 64% silica means high-viscosity (sticky) magma; 32° slopes and alternating ash/lava bands match a stratovolcano.",
            "Link viscosity to eruption style: sticky magma traps dissolved gases until pressure builds sharply, causing infrequent but violently explosive eruptions.",
          ],
          answer:
            "Composite volcano (stratovolcano), with infrequent, violently explosive eruptions.",
          yourTurn: {
            question:
              "A volcano on a mid-ocean island has gentle 6° slopes, runny basaltic lava (50% silica), and frequent non-explosive lava rivers. What type of volcano is it? (Write one word: shield or composite)",
            answer: {
              type: "text",
              accept: ["shield", "shield volcano"],
              display: "shield",
            },
            solution:
              "Gentle slopes (6°), low-silica runny basaltic lava, and frequent effusive eruptions are classic traits of a **shield** volcano.",
          },
        },
        {
          title: "Explaining why high viscosity causes steep slopes",
          problem:
            "Explain in two clear causal steps why composite volcanoes have much steeper sides than shield volcanoes.",
          steps: [
            "State the magma property: composite volcanoes erupt high-silica, high-viscosity (thick, sticky) lava.",
            "Trace the physical consequence: because sticky lava resists flowing, it moves slowly and cools into solid rock close to the central vent, piling up steeply — reinforced by layers of fallen ash.",
          ],
          answer:
            "High-silica lava is viscous and slow-moving, so it cools quickly near the vent and builds steep cones (alongside alternating ash layers).",
        },
      ],
      keyPoints: [
        "**Viscosity** (controlled mainly by silica content and temperature) links magma chemistry directly to slope angle and explosivity.",
        "**Shield volcanoes** form at constructive margins and hotspots with runny basaltic lava, wide bases, gentle slopes (2°–10°), and frequent effusive eruptions.",
        "**Composite volcanoes** (stratovolcanoes) form at destructive subduction margins with viscous acidic/andesitic magma, steep alternating ash-and-lava cones (25°–35°), and explosive eruptions.",
        "Always pair a physical feature with its cause in exam answers (e.g., *high silica → high viscosity → traps gas → violent explosion*).",
      ],
      whyItWorks:
        "Silica (SiO₂) molecules link together into long, tangled chains inside molten rock. The more silica present, the longer those molecular chains become, making the magma resist flow (higher viscosity) and preventing expanding gas bubbles from escaping smoothly — just like blowing air through thick mud instead of water.",
      strategies: [
        "Build a **cause-and-effect chain**: Plate margin → Silica/Viscosity → Gas trapping → Slope angle &amp; Eruption style.",
        "Check **two independent clues** (slope angle AND rock/lava type) before classifying any volcano diagram.",
      ],
      thinkDeeper:
        "Mauna Loa in Hawaii rises over 9 km from the Pacific seafloor — taller than Mount Everest from base to peak — yet its sides look remarkably flat. How can the largest volcano on Earth also be one of the gentlest in slope?",
    },
    {
      id: "volcanic-hazards",
      heading: "Volcanic Hazards: Pyroclastic Flows, Lahars & Ash",
      discovery: {
        problem:
          "Many people assume glowing red lava rivers are the deadliest volcanic hazard. Yet during the 2010 eruption of Mount Merapi in Indonesia (353 deaths) and the 1985 eruption of Nevado del Ruiz in Colombia (23,000 deaths), lava flows killed almost nobody. What volcanic hazards actually move too fast to outrun — even in a car?",
        idea: "Lava usually creeps at walking pace, giving residents time to evacuate. The true killers are **pyroclastic flows** (superheated avalanches of gas and rock rushing downhill at 100+ km/h) and **lahars** (volcanic mudflows racing down river valleys like wet concrete).",
      },
      body: `Geographers classify volcanic hazards into **primary hazards** (caused directly by the eruption itself) and **secondary hazards** (knock-on impacts triggered afterwards by the erupted material mixing with water, weather, or human systems).

**Primary Volcanic Hazards**
1. **Pyroclastic flows:** Ground-hugging avalanches of superheated volcanic gases, ash, and rock fragments reaching **300–700 °C** and speeds of **100–300+ km/h**. They form when an explosive eruption column collapses or a lava dome shatters, incinerating and burying everything in their path (e.g., Mount Merapi 2010; Pompeii AD 79).
2. **Tephra &amp; volcanic ashfall:** Solid fragments blasted into the air — from house-sized volcanic bombs near the vent to microscopic jagged glass ash carried hundreds of kilometres downwind. Heavy ashfall collapses roofs, contaminates drinking water, and damages lungs.
3. **Lava flows:** Streams of molten rock (700–1,200 °C). They rarely kill people because most move slowly enough to evacuate, yet they destroy buildings, farmland, and roads permanently (e.g., Kīlauea 2018; La Palma 2021).
4. **Volcanic gases:** Toxic releases of **sulphur dioxide (SO₂)**, carbon dioxide (CO₂), and hydrogen sulphide (H₂S). Dense CO₂ can pool invisibly in low valleys and suffocate people and livestock; SO₂ forms acid rain.

**Secondary Volcanic Hazards**
1. **Lahars (volcanic mudflows):** Loose volcanic ash on steep slopes mixes with **heavy tropical rain** or **rapidly melted summit snow/glaciers** to form dense, fast-moving mudflows (40–70 km/h) that channel down river valleys, sweeping away bridges and towns — even **days or years** after an eruption (e.g., Armero, Colombia 1985; Mount Pinatubo 1991).
2. **Aviation &amp; economic disruption:** Fine silicate ash melts inside jet engines and stalls turbines. In 2010, Iceland's Eyjafjallajökull ash plume closed European airspace for six days, cancelling over 100,000 flights and costing airlines billions.
3. **Roof collapse, crop failure &amp; climate cooling:** Wet ash is as heavy as wet concrete (just 10–15 cm can buckle a roof), smothers rice paddies and grazing pasture, and — in colossal eruptions like Mount Pinatubo 1991 — injects SO₂ aerosols into the stratosphere that reflect sunlight and cool global temperatures by ~0.5 °C for 1–2 years.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Annotated cross-section of primary and secondary volcanic hazards around a composite volcano"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Primary vs Secondary Volcanic Hazards</text><polygon points="160,218 258,92 284,92 382,218" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/><path d="M 265 92 L 265 218 L 277 218 L 277 92 Z" fill="var(--bad)"/><path d="M 258 88 Q 225 46 272 34 Q 325 36 375 46 Q 440 50 515 62" fill="none" stroke="var(--ink-2)" stroke-width="18" stroke-linecap="round" opacity="0.28"/><path d="M 271 88 Q 282 54 340 48 L 480 58" fill="none" stroke="var(--ink-2)" stroke-width="2" stroke-dasharray="5 3"/><text x="415" y="42" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Tephra / Ash Plume (Primary)</text><text x="442" y="79" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Downwind roof collapse &amp; flight bans (Secondary)</text><path d="M 258 96 Q 214 134 150 176 L 94 206" fill="none" stroke="var(--bad)" stroke-width="12" stroke-linecap="round" opacity="0.35"/><path d="M 258 96 Q 214 134 150 176 L 94 206" fill="none" stroke="var(--bad)" stroke-width="3" stroke-dasharray="6 3"/><text x="108" y="130" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">Pyroclastic Flow</text><text x="108" y="143" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Primary · 700 °C · 100+ km/h</text><line x1="156" y1="142" x2="188" y2="152" stroke="var(--bad)" stroke-width="1.5"/><path d="M 284 96 Q 320 140 364 186 Q 418 214 528 216" fill="none" stroke="var(--brand)" stroke-width="10" stroke-linecap="round" opacity="0.45"/><path d="M 284 96 Q 320 140 364 186 Q 418 214 528 216" fill="none" stroke="var(--brand)" stroke-width="2.5"/><text x="454" y="168" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">Lahar (Volcanic Mudflow)</text><text x="454" y="181" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Secondary · Ash + rain / meltwater</text><line x1="422" y1="185" x2="404" y2="204" stroke="var(--brand)" stroke-width="1.5"/><rect x="18" y="218" width="524" height="16" fill="var(--surface-2)" stroke="var(--line)"/><rect x="34" y="196" width="22" height="22" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><polygon points="31,196 45,185 59,196" fill="var(--accent)"/><text x="45" y="244" text-anchor="middle" font-size="9" fill="var(--ink-2)">Valley village at risk</text><text x="272" y="244" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Primary = direct from eruption · Secondary = triggered afterwards</text></svg>`,
      diagramCaption:
        "Primary hazards (ash plumes, pyroclastic flows, lava, toxic gases) emerge directly from the vent; secondary hazards (lahars, roof collapse, aviation bans) happen when volcanic material interacts with water, weather, or infrastructure.",
      workedExamples: [
        {
          title: "Distinguishing primary from secondary volcanic hazards",
          problem:
            "Three weeks after an explosive eruption coats Mount Merapi's slopes in loose ash, a heavy monsoon downpour washes ash down the Kali Putih river valley, burying 40 homes in thick mud. Classify this hazard and explain why it belongs in that category.",
          steps: [
            "Name the hazard accurately: loose ash mixed with heavy rainwater flowing down a river channel is a **lahar** (volcanic mudflow).",
            "Decide primary vs secondary: the mudflow was not erupted directly from the vent — it was triggered later when rainwater mobilised deposited ash.",
            "Write a concise justification connecting the trigger (rain + loose ash) to the classification (**secondary hazard**).",
          ],
          answer:
            "A **lahar** — a **secondary hazard** because it is triggered after the eruption when heavy rain mixes with loose volcanic ash on the slopes.",
          yourTurn: {
            question:
              "A dense cloud of 600 °C gas, ash, and rock fragments rushes down a volcano's flank at 180 km/h immediately after a dome collapse. Name this specific primary hazard.",
            answer: {
              type: "text",
              accept: [
                "pyroclastic flow",
                "pyroclastic flows",
                "pyroclastic density current",
              ],
              display: "pyroclastic flow",
            },
            solution:
              "A superheated, fast-moving avalanche of volcanic gas, ash, and rock rushing directly downslope is a **pyroclastic flow**.",
          },
        },
        {
          title: "Calculating travel time of a pyroclastic flow",
          problem:
            "A village lies 12 km down-valley from a stratovolcano's crater. If a pyroclastic flow travels at 144 km/h, how many minutes does it take to reach the village?",
          steps: [
            "Use the speed-distance-time formula: time = distance ÷ speed.",
            "Compute time in hours: {{12 / 144}} = {{1 / 12}} hour.",
            "Convert hours to minutes: {{1 / 12}} × 60 = 5 minutes — far too fast for spontaneous evacuation once the flow starts.",
          ],
          answer: "5 minutes",
        },
      ],
      keyPoints: [
        "**Primary hazards** occur directly during the eruption: pyroclastic flows, tephra/ashfall, lava flows, and volcanic gases (SO₂, CO₂).",
        "**Pyroclastic flows** (up to 700 °C and 100+ km/h) are far deadlier than lava flows because they cannot be outrun and incinerate everything in valleys.",
        "**Secondary hazards** happen as knock-on effects: **lahars** (ash + rain or melted glacier water), roof collapse from heavy wet ash, crop failure, and flight disruption.",
        "Lahars can strike **weeks or even years** after an eruption whenever heavy rain mobilises loose ash on steep slopes.",
      ],
      whyItWorks:
        "Volcanic ash is not soft wood-fire ash — it consists of microscopic shards of pulverized volcanic rock and glass. Because rock is ~2.5 times denser than water, a 15 cm blanket of rain-soaked ash weighs over 200 kg per square metre (the weight of three adults standing on every single square metre of roof) and turns into a concrete-like slurry when rain channels it down valleys.",
      strategies: [
        "Apply the **direct-from-vent test**: did it shoot or ooze straight out of the volcano (primary), or did water, wind, or human systems trigger a knock-on consequence (secondary)?",
        "Quote **specific physical numbers** (700 °C, 100+ km/h for pyroclastic flows; 40–70 km/h for lahars) to sharpen exam explanations.",
      ],
      thinkDeeper:
        "Why do composite volcanoes generate deadly pyroclastic flows and lahars far more often than shield volcanoes?",
    },
    {
      id: "why-live-near-volcanoes",
      heading: "Why Do People Live Close to Active Volcanoes?",
      discovery: {
        problem:
          "Java (Indonesia) is roughly the size of England, holds over 30 active volcanoes, and yet supports more than 150 million people — making it one of the most densely populated islands on Earth. Why would rational families choose to build homes, farms, and cities right beside an active volcano?",
        idea: "Living near a volcano is a classic geographical trade-off between **high everyday benefits** (rich soils, cheap clean energy, tourism jobs, mineral wealth) and **rare, infrequent risks** — combined with powerful social constraints like family roots and poverty.",
      },
      body: `Students sometimes assume people live near volcanoes simply because they do not know the danger. In reality, geographers group the reasons into **economic opportunities** (pull factors) and **social / constraint factors** (why leaving is difficult or undesirable).

**Economic Opportunities (Why Volcanic Regions Attract People)**
1. **Fertile volcanic soils (agriculture):** Weathered volcanic ash and basalt break down rapidly in warm, wet climates to release rich plant nutrients — especially potassium, phosphorus, and magnesium. Around **Mount Merapi (Java)** and **Mount Etna (Sicily)**, farmers harvest **two to three crops per year** (rice, coffee, grapes, citrus) instead of one, earning far higher incomes than on non-volcanic soils.
2. **Geothermal energy:** Underground magma heats groundwater into pressurised steam that spins turbines to generate clean, cheap, renewable electricity and district heating. **Iceland** generates around **25–30% of its electricity** and heats roughly **85–90% of its homes** using geothermal power, keeping energy bills low and attracting energy-intensive industries.
3. **Tourism income:** Dramatic craters, lava fields, hot springs, and crater lakes attract millions of visitors. **Mount Fuji (Japan)**, **Iceland's Blue Lagoon**, and **Pompeii/Mount Vesuvius (Italy)** support hotels, guides, transport operators, and local restaurants.
4. **Mineral &amp; sulphur mining:** Rising hydrothermal fluids concentrate valuable deposits — **sulphur** (hand-mined at Kawah Ijen in Java for matches, fertiliser, and sugar refining), **copper, gold, silver**, and **pumice/basalt** for construction materials.

**Social Factors &amp; Lack of Choice**
- **Family, cultural &amp; ancestral ties:** Generations have farmed the same slopes; sacred traditions (such as Javanese spiritual ceremonies around Merapi) anchor identity and community support networks.
- **Poverty &amp; lack of alternatives:** In LICs and NEEs, poor farming families often cannot afford land elsewhere, cannot buy insurance, and depend on daily volcanic soil harvests to feed their children.
- **Perceived low risk &amp; faith in monitoring:** Many composite volcanoes lie dormant for decades or centuries between major blasts, creating a false sense of security (*"it hasn't erupted in my lifetime"*), while residents in HICs trust observatories and evacuation plans to warn them in time.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balanced diagram showing economic opportunities and social reasons people live near active volcanoes"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Why 800 Million+ People Live Near Active Volcanoes</text><polygon points="222,196 270,110 290,110 338,196" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/><path d="M 276 110 L 276 196 L 284 196 L 284 110 Z" fill="var(--bad)"/><text x="280" y="214" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Active Volcano</text><text x="280" y="228" text-anchor="middle" font-size="9" fill="var(--ink-2)">High daily reward vs rare hazard</text><rect x="16" y="40" width="176" height="44" rx="8" fill="var(--good-soft)" stroke="var(--good)"/><text x="104" y="57" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--good)">Fertile Volcanic Soils</text><text x="104" y="72" text-anchor="middle" font-size="9" fill="var(--ink)">Ash minerals · Java rice &amp; Etna vines</text><line x1="192" y1="68" x2="258" y2="132" stroke="var(--good)" stroke-width="1.6" stroke-dasharray="4 3"/><rect x="16" y="98" width="176" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/><text x="104" y="115" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">Geothermal Energy</text><text x="104" y="130" text-anchor="middle" font-size="9" fill="var(--ink)">Cheap clean steam · Iceland (~90% heat)</text><line x1="192" y1="126" x2="246" y2="156" stroke="var(--brand)" stroke-width="1.6" stroke-dasharray="4 3"/><rect x="16" y="156" width="176" height="44" rx="8" fill="var(--info-soft)" stroke="var(--info)"/><text x="104" y="173" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--info)">Tourism &amp; Jobs</text><text x="104" y="188" text-anchor="middle" font-size="9" fill="var(--ink)">Hot springs &amp; trails · Mt Fuji, Pompeii</text><line x1="192" y1="178" x2="230" y2="180" stroke="var(--info)" stroke-width="1.6" stroke-dasharray="4 3"/><rect x="368" y="40" width="176" height="44" rx="8" fill="var(--accent-soft)" stroke="var(--accent)"/><text x="456" y="57" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--warn)">Mineral &amp; Sulphur Mining</text><text x="456" y="72" text-anchor="middle" font-size="9" fill="var(--ink)">Kawah Ijen sulphur, copper &amp; pumice</text><line x1="368" y1="68" x2="302" y2="132" stroke="var(--accent)" stroke-width="1.6" stroke-dasharray="4 3"/><rect x="368" y="98" width="176" height="44" rx="8" fill="var(--bad-soft)" stroke="var(--bad)"/><text x="456" y="115" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">Poverty &amp; Lack of Choice</text><text x="456" y="130" text-anchor="middle" font-size="9" fill="var(--ink)">Cannot afford safe land elsewhere</text><line x1="368" y1="126" x2="314" y2="156" stroke="var(--bad)" stroke-width="1.6" stroke-dasharray="4 3"/><rect x="368" y="156" width="176" height="44" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)"/><text x="456" y="173" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">Family Ties &amp; Trust</text><text x="456" y="188" text-anchor="middle" font-size="9" fill="var(--ink-2)">Ancestral land + faith in monitoring</text><line x1="368" y1="178" x2="330" y2="180" stroke="var(--ink-2)" stroke-width="1.6" stroke-dasharray="4 3"/></svg>`,
      diagramCaption:
        "People remain near active volcanoes because of both strong economic pull factors (left &amp; top-right) and social/financial constraints (middle &amp; bottom-right).",
      workedExamples: [
        {
          title: "Evaluating economic vs social reasons in a 4-mark answer",
          problem:
            "Explain two different reasons — one economic and one social — why farming families continue to live on the flanks of Mount Merapi in Java, Indonesia.",
          steps: [
            "Economic point + development: Weathered volcanic ash produces mineral-rich fertile soils (potassium and phosphorus), allowing farmers to harvest multiple high-yield rice and vegetable crops per year for higher income.",
            "Social point + development: Many families have strong ancestral ties to their village community or face poverty that prevents them from affording safe farmland elsewhere, while long quiet periods make the eruption risk feel distant.",
          ],
          answer:
            "Economic: mineral-rich volcanic ash creates highly fertile soil supporting multiple high-yield harvests. Social: poverty limits relocation options and generations of family/cultural ties anchor residents to the slopes.",
          yourTurn: {
            question:
              "Which renewable energy source uses underground volcanic heat to boil water into steam that turns electricity turbines in countries like Iceland?",
            answer: {
              type: "text",
              accept: [
                "geothermal",
                "geothermal energy",
                "geothermal power",
              ],
              display: "geothermal energy",
            },
            solution:
              "Underground volcanic heat generates **geothermal energy** — powering turbines and heating roughly 85–90% of Icelandic homes.",
          },
        },
        {
          title: "Comparing crop yield gain on volcanic soils",
          problem:
            "A Javanese rice farmer harvests 4.5 tonnes per hectare on non-volcanic land, compared with 7.2 tonnes per hectare on volcanic soil near Mount Merapi. Calculate the percentage increase in yield.",
          steps: [
            "Find the increase in yield: 7.2 − 4.5 = 2.7 tonnes/ha.",
            "Divide by the original (non-volcanic) yield: {{2.7 / 4.5}} = 0.6.",
            "Multiply by 100 to convert to a percentage: 0.6 × 100 = 60%.",
          ],
          answer: "60% higher yield",
        },
      ],
      keyPoints: [
        "People stay near volcanoes because **daily economic benefits** (fertile soils, geothermal energy, tourism, mining) outweigh infrequent eruption risks.",
        "**Fertile volcanic soils** form after volcanic ash weathers over time — fresh raw ash or solid lava is initially barren until weathered.",
        "**Geothermal power** provides cheap, low-carbon electricity and heating (e.g., Iceland heats ~90% of homes geothermally).",
        "Never ignore **social and structural reasons**: poverty (no money to move), strong family/cultural attachment, and trust in early-warning systems.",
      ],
      whyItWorks:
        "Hazard geographers call this **risk perception**: humans naturally weigh a *certain, immediate reward* (today's harvest, tourism income, or low heating bills) much more heavily than a *low-probability future catastrophe* that might only strike once every 50–200 years.",
      strategies: [
        "Aim for **balance across categories** in extended answers: cover at least one **economic** factor (soils, geothermal, tourism, mining) AND one **social** factor (poverty, family ties, faith in monitoring).",
        "Drop in **named case studies** (Java/Mount Merapi, Mount Etna, Iceland, Kawah Ijen) to push explanations into top mark bands.",
      ],
      thinkDeeper:
        "Why might a wealthy hotel owner near Mount Etna and a subsistence rice farmer near Mount Merapi both stay in a volcanic hazard zone — yet for completely different reasons?",
    },
    {
      id: "predict-prepare-volcanoes",
      heading: "Predicting, Monitoring & Preparing for Eruptions",
      discovery: {
        problem:
          "Unlike earthquakes — which strike without reliable short-term warning — major volcanic eruptions like Mount Pinatubo (1991) and Mount Merapi (2010) were successfully predicted days in advance, allowing tens of thousands of people to evacuate safely. What physical changes happen inside a mountain *before* magma breaks through the surface?",
        idea: "Before magma erupts, it has to force its way upward through kilometres of solid rock. As it rises, it cracks rock (**earthquakes**), inflates the mountain (**ground tilt/bulge**), boils off trapped **SO₂ gas**, and **heats** crater rocks — giving scientists four measurable warning signals.",
      },
      body: `Volcanoes cannot be stopped, so hazard managers use the **3 Ps** — **Predict (monitor warning signs)**, **Protect (engineering &amp; land-use zoning)**, and **Prepare (evacuation plans &amp; education)** — to cut deaths dramatically.

**1. Monitoring &amp; Prediction (Reading the Four Warning Signs)**
- **Seismometers (harmonic tremors):** Rising magma fractures surrounding rock, creating swarms of small earthquakes and continuous rhythmic vibrations called **harmonic tremors**.
- **Tiltmeters &amp; satellite GPS / InSAR:** Magma pooling in a shallow chamber makes the volcano's flank **bulge outward** by centimetres to metres. Tiltmeters work like hyper-sensitive spirit levels detecting tiny angle shifts, while GPS and radar satellites measure ground swelling from space.
- **Gas spectrometers (rising SO₂):** As magma climbs closer to the surface, lower pressure allows dissolved gases — especially **sulphur dioxide (SO₂)** — to escape rapidly through fumaroles. A sudden spike in SO₂ flux signals fresh magma near the vent.
- **Thermal imaging cameras &amp; groundwater sensors:** Infrared satellites and drones detect rising crater temperatures, melting summit snow, and warming or more acidic crater lakes.

**2. Protection &amp; Land-Use Planning**
- **Hazard maps &amp; exclusion zones:** Geologists map past pyroclastic flow and lahar valleys to ban permanent housing in high-risk river channels and enforce temporary **exclusion zones** (e.g., 10–20 km radius around Mount Merapi in 2010).
- **Diversion barriers &amp; lahar channels:** Earthen embankments and concrete **sabo dams** (widely built in Japan and Indonesia) trap boulders and divert slow lava flows or channel lahars away from towns — though they cannot stop massive pyroclastic flows.
- **Steep-pitched reinforced roofs:** In ash-prone cities, steeply angled roofs help volcanic ash slide off rather than piling up and causing collapse.

**3. Preparation &amp; Emergency Response**
- **Alert levels &amp; evacuation drills:** Clear four-tier alert scales (Normal → Advisory → Watch → Warning/Evacuate) paired with rehearsed evacuation routes, emergency shelters, masks (to filter fine ash), and livestock evacuation plans (so farmers do not sneak back into danger zones to rescue cattle).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Volcano monitoring network showing seismometers, tiltmeters, GPS satellites, gas spectrometers, and thermal cameras detecting rising magma"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Volcano Monitoring &amp; Early-Warning Network</text><polygon points="150,214 256,92 304,92 410,214" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/><path d="M 192 166 Q 222 124 256 92" fill="none" stroke="var(--bad)" stroke-width="2.5" stroke-dasharray="5 3"/><path d="M 368 166 Q 338 124 304 92" fill="none" stroke="var(--bad)" stroke-width="2.5" stroke-dasharray="5 3"/><ellipse cx="280" cy="196" rx="44" ry="22" fill="var(--bad)" opacity="0.88"/><path d="M 272 178 L 272 104 L 288 104 L 288 178 Z" fill="var(--bad)"/><text x="280" y="200" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--surface)">Rising magma</text><path d="M 276 86 Q 280 60 294 50 Q 308 42 326 44" fill="none" stroke="var(--warn)" stroke-width="7" stroke-linecap="round" opacity="0.5"/><rect x="334" y="34" width="194" height="36" rx="7" fill="var(--warn-soft)" stroke="var(--warn)"/><text x="431" y="49" text-anchor="middle" font-size="10" font-weight="800" fill="var(--warn)">Gas Spectrometer</text><text x="431" y="62" text-anchor="middle" font-size="9" fill="var(--ink)">Spiking SO₂ signals shallow magma</text><rect x="32" y="34" width="188" height="36" rx="7" fill="var(--info-soft)" stroke="var(--info)"/><text x="126" y="49" text-anchor="middle" font-size="10" font-weight="800" fill="var(--info)">GPS &amp; Thermal Satellites</text><text x="126" y="62" text-anchor="middle" font-size="9" fill="var(--ink)">Tracks ground swell &amp; crater heat</text><line x1="176" y1="70" x2="262" y2="94" stroke="var(--info)" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="18" y="108" width="144" height="40" rx="7" fill="var(--bad-soft)" stroke="var(--bad)"/><text x="90" y="124" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">Tiltmeter on Flank</text><text x="90" y="138" text-anchor="middle" font-size="9" fill="var(--ink)">Detects slope bulge</text><line x1="162" y1="130" x2="216" y2="142" stroke="var(--bad)" stroke-width="1.5"/><circle cx="218" cy="142" r="4.5" fill="var(--bad)"/><rect x="396" y="108" width="148" height="40" rx="7" fill="var(--brand-soft)" stroke="var(--brand)"/><text x="470" y="124" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">Seismometer</text><text x="470" y="138" text-anchor="middle" font-size="9" fill="var(--ink)">Logs harmonic tremors</text><line x1="396" y1="130" x2="344" y2="146" stroke="var(--brand)" stroke-width="1.5"/><circle cx="342" cy="146" r="4.5" fill="var(--brand)"/><path d="M 426 164 L 434 156 L 440 172 L 446 154 L 452 170 L 458 160 L 464 166" fill="none" stroke="var(--brand)" stroke-width="1.8"/><rect x="18" y="214" width="524" height="22" fill="var(--surface-2)" stroke="var(--line)"/><text x="280" y="229" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Warning signs trigger Alert Levels → Exclusion Zones → Planned Evacuation</text></svg>`,
      diagramCaption:
        "Observatories combine four independent instruments — seismometers, tiltmeters, gas spectrometers, and GPS/thermal sensors — so false alarms are minimised before ordering costly evacuations.",
      workedExamples: [
        {
          title: "Matching observatory signals to instruments & actions",
          problem:
            "Over 48 hours at a monitored stratovolcano, harmonic tremors jump from 5 to 180 per hour, tiltmeters record a 9 cm outward flank bulge, and SO₂ emissions triple. State which instruments detected these changes and recommend the top priority preparation action.",
          steps: [
            "Match each signal: harmonic tremors → **seismometers**; flank bulge → **tiltmeters** (confirmed by GPS); tripling SO₂ → **gas spectrometers**.",
            "Interpret the combined trend: magma is actively forcing its way toward the crater under high pressure, meaning an explosive eruption is imminent.",
            "Recommend action: raise the alert level to Red/Warning, enforce a strict **exclusion zone** around the cone and river valleys, and evacuate residents to designated shelters.",
          ],
          answer:
            "Instruments: seismometers, tiltmeters/GPS, and gas spectrometers. Priority action: declare an exclusion zone and evacuate all residents from the hazard zone immediately.",
          yourTurn: {
            question:
              "Which specific monitoring instrument sits on a volcano's slope like a precision spirit level to measure tiny changes in ground angle caused by magma bulging beneath?",
            answer: {
              type: "text",
              accept: ["tiltmeter", "tiltmeters", "tilt meter", "tilt meters"],
              display: "tiltmeter",
            },
            solution:
              "A **tiltmeter** measures microscopic changes in slope angle as rising magma inflates the volcano's flank.",
          },
        },
        {
          title: "Why volcanic prediction is more achievable than earthquake prediction",
          problem:
            "Explain why scientists can often warn residents days before a volcanic eruption, even though they cannot give days of warning before a major earthquake.",
          steps: [
            "Describe the volcanic precursor: magma is a physical mass moving upward over days or weeks, producing visible/measurable rock cracking (tremors), swelling (tilt), heat, and gas spikes.",
            "Contrast with earthquakes: tectonic fault stress builds silently deep underground and snaps suddenly in seconds without a reliable, consistent short-term precursor.",
          ],
          answer:
            "Rising magma generates clear multi-day physical warning signs (tremors, flank bulge, SO₂ spikes, heat), whereas fault ruptures snap abruptly without reliable short-term precursors.",
        },
      ],
      keyPoints: [
        "Volcanoes can be **monitored and predicted** (days to weeks ahead) far more reliably than earthquakes because rising magma creates clear physical warning signs.",
        "The four core monitoring tools are **seismometers** (harmonic tremors), **tiltmeters/GPS** (ground bulge), **gas spectrometers** (rising SO₂), and **thermal cameras** (crater heat).",
        "**Protection** includes hazard zoning, exclusion zones, lahar **sabo dams**, lava diversion barriers, and steep reinforced roofs.",
        "**Preparation** (evacuation drills, shelters, ash masks, and protecting livestock) turns scientific warnings into saved lives — e.g., over 350,000 evacuated safely around Mount Merapi in 2010.",
      ],
      whyItWorks:
        "No single warning sign is 100% foolproof on its own — heavy rain can trigger minor landslides on seismometers, or magma can stall underground without erupting. Combining **multiple independent sensors** (seismic + tilt + SO₂ + thermal) dramatically increases confidence so authorities evacuate in time without causing repeated 'cry wolf' false alarms.",
      strategies: [
        "Always link the **instrument** to the **physical sign** AND the **underground cause** (e.g., *tiltmeter → measures slope bulge → caused by magma inflating the chamber*).",
        "Evaluate limits realistically: barriers can divert slow lava or small lahars, **never** high-speed pyroclastic flows — so evacuation remains essential.",
      ],
      thinkDeeper:
        "During the 2010 Mount Merapi eruption, some farmers repeatedly snuck back past police roadblocks into the exclusion zone to feed their cows. How should emergency planners redesign evacuation plans to solve this human challenge?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What does magma viscosity mean?",
        back: "How thick, sticky, and resistant to flowing molten rock is — controlled mainly by its silica (SiO₂) content and temperature.",
      },
      {
        front: "Shield volcano: plate margin, lava type, slope & eruption style?",
        back: "Constructive margins & hotspots; low-viscosity runny basaltic lava; wide base & gentle slopes (2°–10°); frequent effusive (non-explosive) eruptions.",
      },
      {
        front: "Composite volcano (stratovolcano): plate margin, lava, slope & eruption?",
        back: "Destructive subduction margins; viscous high-silica acidic/andesitic magma; steep alternating ash-and-lava cone (25°–35°); infrequent, violent explosive eruptions.",
      },
      {
        front: "Name two classic examples of shield and composite volcanoes.",
        back: "Shield: Mauna Loa / Kīlauea (Hawaii) or Iceland shields. Composite: Mount Merapi (Indonesia), Mount Fuji (Japan), Mount Vesuvius (Italy).",
      },
      {
        front: "What is a pyroclastic flow?",
        back: "A primary volcanic hazard: a superheated (300–700 °C) avalanche of volcanic gas, ash, and rock racing downslope at 100+ km/h.",
      },
      {
        front: "What is a lahar, and is it primary or secondary?",
        back: "A fast-moving volcanic mudflow (40–70 km/h) formed when loose ash mixes with heavy rain or melted summit snow/ice. It is a **secondary** hazard.",
      },
      {
        front: "What is tephra?",
        back: "Any solid rock fragments and volcanic ash blasted into the air during an explosive eruption — from volcanic bombs to microscopic glass shards.",
      },
      {
        front: "Why can volcanic ash collapse roofs and ground aeroplanes?",
        back: "Volcanic ash is dense pulverised rock (heavy when rain-soaked, collapsing roofs) and its tiny glass shards melt inside hot jet engines, stalling turbines.",
      },
      {
        front: "Give four economic reasons people live near active volcanoes.",
        back: "1) Fertile weathered volcanic soils for farming; 2) Geothermal energy (Iceland); 3) Tourism jobs; 4) Sulphur, copper, gold & pumice mining.",
      },
      {
        front: "Give three social/constraint reasons people stay near volcanoes.",
        back: "1) Poverty / cannot afford land elsewhere; 2) Strong family, ancestral & cultural ties; 3) Long dormancy periods & faith in scientific monitoring.",
      },
      {
        front: "What does a tiltmeter measure on a volcano?",
        back: "Microscopic changes in slope angle caused by the volcano's flank bulging outward as rising magma inflates the magma chamber.",
      },
      {
        front: "What are harmonic tremors, and which instrument records them?",
        back: "Continuous rhythmic small earthquakes caused by magma pushing and cracking rock underground — recorded by **seismometers**.",
      },
      {
        front: "Why does a sudden spike in SO₂ gas warn of an impending eruption?",
        back: "As magma rises closer to the surface, pressure drops and dissolved sulphur dioxide escapes rapidly through vents — detected by gas spectrometers.",
      },
      {
        front: "What is a sabo dam and what is its limit?",
        back: "A reinforced concrete check-dam built across volcanic river valleys (e.g., Japan/Indonesia) to trap boulders and slow lahars — effective against small mudflows, but cannot stop massive pyroclastic flows.",
      },
    ],
    mustKnow: [
      "Compare shield and composite volcanoes across plate margin, silica/viscosity, shape, structure, eruption style, and named examples.",
      "Explain the causal chain linking high silica content → high viscosity → trapped gas → violent explosive eruptions and steep cones.",
      "Classify lava flows, pyroclastic flows, tephra/ashfall, and volcanic gases as primary hazards, and lahars, roof collapse, crop failure, and flight bans as secondary hazards.",
      "Explain why pyroclastic flows and lahars kill far more people than lava flows.",
      "Explain economic pull factors (fertile soils, geothermal power, tourism, mining) with real-world case examples (Java, Mt Etna, Iceland, Kawah Ijen).",
      "Explain social reasons people stay near volcanoes (poverty, lack of choice, family/cultural ties, risk perception, trust in monitoring).",
      "Match all four volcanic monitoring instruments (seismometer, tiltmeter/GPS, gas spectrometer, thermal camera) to the exact physical warning sign they measure.",
      "Explain why volcanic eruptions are far easier to predict days ahead than tectonic earthquakes.",
      "Evaluate protection and preparation methods (exclusion zones, hazard maps, diversion barriers/sabo dams, evacuation drills, shelters).",
      "Calculate percentage yield increases or hazard travel times cleanly from geographical data.",
    ],
    misconceptions: [
      {
        wrong: "Lava flows are the main killer in volcanic eruptions.",
        right: "Most lava moves slowly enough to evacuate; **pyroclastic flows** (100+ km/h, 700 °C) and **lahars** (mudflows) cause the vast majority of volcanic deaths.",
      },
      {
        wrong: "Volcanoes erupt because magma gets hotter at the top, and fresh lava immediately grows great crops.",
        right: "Explosive eruptions happen because **viscous magma traps gas pressure**; fresh lava and ash are initially barren and only create **fertile soils after weathering** releases minerals.",
      },
      {
        wrong: "Lahars are a primary hazard because they contain volcanic ash.",
        right: "Lahars are a **secondary hazard** because they require a knock-on trigger — heavy rainfall or melting snow/glaciers mixing with loose ash after eruption.",
      },
      {
        wrong: "People live near volcanoes only because they are uneducated about the danger.",
        right: "Residents usually understand the risk clearly; they stay for **high economic rewards** (fertile soils, geothermal jobs, tourism, mining), **family roots**, or **poverty** preventing relocation.",
      },
      {
        wrong: "Shield volcanoes have steep sides and composite volcanoes have flat sides.",
        right: "**Shield** volcanoes have **gentle slopes (2°–10°)** from runny basaltic lava; **composite** volcanoes have **steep cones (25°–35°)** from viscous lava and alternating ash layers.",
      },
      {
        wrong: "Concrete barriers and diversion walls can stop every volcanic hazard safely.",
        right: "Barriers can divert slow lava flows or trap small lahars, but **nothing can stop a major pyroclastic flow** — early warning and evacuation remain vital.",
      },
    ],
    examMistakes: [
      "Writing 'volcanoes happen at all plate boundaries' — forgetting that **conservative** and **collision** margins produce earthquakes but NO volcanoes.",
      "Describing magma as 'thick' or 'runny' without using the geographical keyword **viscosity** (high viscosity vs low viscosity).",
      "Confusing **primary** and **secondary** hazards — especially mislabelling **lahars** or **flight disruption** as primary.",
      "Listing only economic reasons (e.g., fertile soil and tourism) when asked *why people live near volcanoes* — missing easy marks for **social factors** (poverty, family ties, faith in monitoring).",
      "Naming a monitoring tool like 'tiltmeter' without stating **what it measures** (flank bulging / slope angle change as magma rises).",
      "Forgetting to name **specific real-world examples** (e.g., Mauna Loa, Mount Merapi, Mount Fuji, Iceland, Mount Etna) in 4–6 mark explain/evaluate questions.",
      "Writing vague statements like 'people prepare by getting ready' instead of concrete measures (**exclusion zones, hazard maps, evacuation shelters, ash masks, alert tiers**).",
    ],
    mnemonics: [
      {
        topic: "Shield vs Composite Volcanoes",
        device: "SHIELD = Spreads Horizontally In Easy Lava Drifts · CONE (Composite) = Crams Thick Sticky Layers & Explodes",
        explanation:
          "Picture a flat warrior's shield for runny basaltic lava (gentle slopes, constructive/hotspot) versus a tall steep ice-cream cone for sticky acidic lava & alternating ash layers (destructive margin).",
      },
      {
        topic: "Four Economic Reasons to Live Near Volcanoes",
        device: "F-G-T-M: Fertile soils · Geothermal energy · Tourism · Mining",
        explanation:
          "Pair F-G-T-M with **F-P-M** for social factors (**Family ties, Poverty/no choice, Monitoring trust**) to guarantee balanced answers.",
      },
      {
        topic: "Four Volcanic Monitoring Instruments",
        device: "S-T-G-T: Shake (Seismometer) · Tilt (Tiltmeter/GPS) · Gas (SO₂ Spectrometer) · Temperature (Thermal camera)",
        explanation:
          "Rising magma shakes rock, tilts the flank, vents SO₂ gas, and heats the crater — four independent checks before evacuating.",
      },
    ],
    realWorld: [
      {
        title: "Mount Merapi, Indonesia (2010)",
        detail:
          "Over 350,000 residents were evacuated using seismometer and tiltmeter warnings around Java's most active composite volcano — saving tens of thousands of lives despite deadly pyroclastic flows.",
        emoji: "🇮🇩",
      },
      {
        title: "Iceland's Geothermal Power Grid",
        detail:
          "Sitting directly on the constructive Mid-Atlantic Ridge, Iceland heats nearly 90% of homes and even warms city pavements and greenhouses with underground volcanic steam.",
        emoji: "🇮🇸",
      },
      {
        title: "Kawah Ijen Sulphur Miners, East Java",
        detail:
          "Miners carry 70–90 kg baskets of solidified yellow volcanic sulphur out of an active crater lake — illustrating how high local wages draw workers despite severe toxic gas hazards.",
        emoji: "⛏️",
      },
      {
        title: "Eyjafjallajökull Aviation Shutdown (2010)",
        detail:
          "A moderate Icelandic eruption sent a fine glassy ash plume across Europe, cancelling more than 100,000 flights over six days and stranding 10 million travellers — a classic secondary global hazard.",
        emoji: "✈️",
      },
      {
        title: "Mount Etna's Vineyards & Orchards, Sicily",
        detail:
          "Rich weathered volcanic soils on Etna's lower slopes produce prized blood oranges, pistachios, and wine, supporting hundreds of thousands of people around Catania.",
        emoji: "🍇",
      },
    ],
    videos: [
      {
        title: "Shield vs Composite Volcanoes — Magma Viscosity Explained",
        channel: "Geography GCSE / KS3 Revision",
        url: "https://www.youtube.com/results?search_query=shield+vs+composite+volcanoes+geography+gcse",
      },
      {
        title: "Pyroclastic Flows and Lahars — Volcanic Hazards in Action",
        channel: "USGS / National Geographic",
        url: "https://www.youtube.com/results?search_query=pyroclastic+flows+and+lahars+volcanic+hazards+explained",
      },
      {
        title: "Why Do People Live Near Volcanoes? (Java, Iceland & Etna)",
        channel: "Geography Case Studies",
        url: "https://www.youtube.com/results?search_query=why+do+people+live+near+volcanoes+geography",
      },
      {
        title: "How Scientists Monitor & Predict Volcanic Eruptions",
        channel: "USGS Volcano Hazards",
        url: "https://www.youtube.com/results?search_query=how+scientists+monitor+predict+volcanoes+tiltmeter+seismometer",
      },
    ],
    formulas: [
      {
        name: "Viscosity",
        formula: "A magma's resistance to flowing (low = runny basaltic; high = thick silica-rich acidic/andesitic).",
        note: "High silica → high viscosity → trapped gas → steep explosive composite volcano.",
      },
      {
        name: "Shield Volcano",
        formula: "Wide, gently sloped volcano (2°–10°) built by frequent effusive flows of runny basaltic lava at constructive margins or hotspots.",
      },
      {
        name: "Composite Volcano (Stratovolcano)",
        formula: "Steep-sided cone (25°–35°) built from alternating layers of ash and viscous lava at destructive subduction margins.",
      },
      {
        name: "Pyroclastic Flow",
        formula: "Primary hazard: superheated (300–700 °C) dense cloud of volcanic gas, ash, and rock racing downslope at 100+ km/h.",
      },
      {
        name: "Lahar",
        formula: "Secondary hazard: fast volcanic mudflow (40–70 km/h) formed when loose volcanic ash mixes with heavy rainfall or melted summit ice/snow.",
      },
      {
        name: "Tephra",
        formula: "Primary hazard: airborne solid rock fragments ejected explosively, ranging from volcanic bombs to fine glassy volcanic ash.",
      },
      {
        name: "Geothermal Energy",
        formula: "Renewable electricity and heating produced when underground volcanic heat turns groundwater into pressurised steam to drive turbines.",
      },
      {
        name: "Harmonic Tremor",
        formula: "Continuous rhythmic swarm of small earthquakes detected by seismometers as rising magma cracks underground rock.",
      },
      {
        name: "Tiltmeter",
        formula: "High-precision slope sensor mounted on a volcano's flank to detect tiny angle changes (ground bulging) as magma pools underground.",
      },
      {
        name: "Exclusion Zone",
        formula: "A legally restricted danger perimeter around an active volcano where residents are evacuated before a predicted eruption.",
      },
    ],
  },
};
