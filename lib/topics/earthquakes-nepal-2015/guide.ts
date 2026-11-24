import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "earthquakes-nepal-2015",
  title: "Earthquakes & Nepal 2015 Case Study",
  strand: "Risky World",
  icon: "🏚️",
  summary: "Discover how locked faults unleash seismic waves, why magnitude is logarithmic, what happened in Nepal's 2015 M7.8 Gorkha quake, and how the 3 Ps save lives.",
  intro:
    "Earthquakes give no warning of the exact day they will strike—and as geographers say, 'earthquakes don't kill people; collapsing buildings do.' On 25 April 2015, a shallow M7.8 rupture beneath Nepal's Gorkha district shook Kathmandu Valley violently, killing nearly 9,000 people and unleashing Himalayan avalanches and landslides. Understanding seismic waves, measurement scales, primary versus secondary effects, and the 3 Ps (Predict, Protect, Prepare) reveals how human choices turn a tectonic tremor into either a manageable shock or a national disaster.",
  guide: [
    // =========================================================================
    // SECTION 1: What Causes Earthquakes & How Are They Measured?
    // =========================================================================
    {
      id: "earthquake-causes-measurement",
      heading: "What Causes Earthquakes & How Are They Measured?",
      discovery: {
        problem:
          "Nepal's 2015 earthquake measured **M7.8** and killed nearly 9,000 people, while an **M5.8** earthquake two steps lower on the scale causes only modest damage. Does an M7.8 quake release twice as much energy as an M5.8—or something dramatically bigger?",
        idea:
          "The Moment Magnitude Scale is **logarithmic**, not linear! Moving up **+1.0** means **10×** larger seismic wave amplitude and **≈ 31.6× (often rounded to 32×)** more energy. Moving up **+2.0** (from 5.8 to 7.8) means **100×** larger waves and **1,000×** more energy released!",
      },
      body:
        "### How Tectonic Pressure Triggers an Earthquake\n\n" +
        "Earthquakes occur along **all four plate margins** (and occasionally along ancient intra-plate faults) through a four-step **stick-slip** cycle:\n\n" +
        "1. **Plate movement:** Tectonic plates try to move steadily past, away from, or into each other at centimetres per year.\n" +
        "2. **Friction & locking:** Jagged fault surfaces snag and lock tightly, stopping movement along the fault while rock bends elastically and stores huge strain energy.\n" +
        "3. **Sudden rupture:** When built-up stress exceeds the rock's breaking strength, the fault fractures and snaps forward in seconds.\n" +
        "4. **Seismic waves:** Stored energy radiates outward in all directions as **seismic waves**—fast push-pull **P-waves** (travel through solids and liquids), slower side-to-side **S-waves** (solids only), and rolling **surface waves** that cause the worst building collapse.\n\n" +
        "### Focus vs Epicentre\n\n" +
        "- **Focus (hypocentre):** The exact point **underground** along the fault where rock first breaks and seismic energy is released.\n" +
        "- **Epicentre:** The point on the **Earth's surface** directly vertically above the focus.\n" +
        "- **Why focus depth matters:** **Shallow-focus earthquakes (< 70 km deep)** produce far stronger surface shaking than deep-focus earthquakes (> 300 km) of the exact same magnitude because seismic waves lose far less energy over the short journey to the surface.\n\n" +
        "### Measuring Earthquakes: Magnitude vs Intensity\n\n" +
        "| Feature | Moment Magnitude ({{M_w}}) / Richter ({{M_L}}) | Modified Mercalli Intensity Scale (I–XII) |\n" +
        "|---|---|---|\n" +
        "| **What it measures** | Objective **energy released** at the focus | Subjective **observed shaking & physical damage** at the surface |\n" +
        "| **Instrument** | **Seismometer / seismograph** recordings | Eyewitness accounts & structural damage surveys |\n" +
        "| **Scale type** | Open-ended **logarithmic** decimal scale (e.g. 6.2, 7.8, 9.0) | **Roman numerals I** (barely felt) to **XII** (total destruction) |\n" +
        "| **Values per quake** | **One** single magnitude number per earthquake | **Many** values (highest near epicentre or on soft soil, lower farther away) |\n" +
        "| **Logarithmic step** | +1.0 = **10×** wave amplitude & **≈ 32×** energy (+2.0 = **100×** amplitude & **1,000×** energy) | Descriptive categories (not mathematical powers) |",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section diagram showing underground earthquake focus, surface epicentre directly above, fault line, radiating seismic waves, and logarithmic magnitude scale">` +
        `<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>` +
        `<text x="165" y="20" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Focus, Epicentre &amp; Seismic Waves</text>` +
        `<rect x="14" y="72" width="302" height="148" rx="6" fill="var(--surface-2)" stroke="var(--line)"/>` +
        `<rect x="14" y="72" width="302" height="12" fill="var(--good-soft)"/>` +
        `<line x1="14" y1="72" x2="316" y2="72" stroke="var(--good)" stroke-width="2"/>` +
        `<line x1="108" y1="216" x2="218" y2="72" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="6 4"/>` +
        `<line x1="164" y1="72" x2="164" y2="146" stroke="var(--brand)" stroke-width="2" stroke-dasharray="3 3"/>` +
        `<circle cx="164" cy="146" r="16" fill="none" stroke="var(--bad)" stroke-width="2"/>` +
        `<circle cx="164" cy="146" r="34" fill="none" stroke="var(--bad)" stroke-width="1.6" opacity="0.75"/>` +
        `<circle cx="164" cy="146" r="54" fill="none" stroke="var(--bad)" stroke-width="1.2" opacity="0.5"/>` +
        `<circle cx="164" cy="146" r="6" fill="var(--bad)"/>` +
        `<polygon points="164,62 158,72 170,72" fill="var(--brand)"/>` +
        `<rect x="148" y="46" width="12" height="26" fill="var(--ink-2)" opacity="0.7"/>` +
        `<rect x="172" y="52" width="10" height="20" fill="var(--ink-2)" opacity="0.7"/>` +
        `<text x="164" y="38" font-size="10.5" font-weight="800" text-anchor="middle" fill="var(--brand)">Epicentre (surface)</text>` +
        `<text x="234" y="150" font-size="10.5" font-weight="800" fill="var(--bad)">Focus (underground)</text>` +
        `<text x="94" y="198" font-size="9.5" font-weight="700" fill="var(--ink)">Fault Line</text>` +
        `<text x="164" y="236" font-size="9.8" text-anchor="middle" fill="var(--ink-2)">Shallow focus (&lt;70 km) = stronger surface shaking</text>` +
        `<line x1="332" y1="18" x2="332" y2="236" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>` +
        `<text x="446" y="20" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Logarithmic Magnitude</text>` +
        `<rect x="352" y="176" width="38" height="26" rx="4" fill="var(--brand-soft)" stroke="var(--brand)"/>` +
        `<text x="371" y="216" font-size="10" font-weight="800" text-anchor="middle" fill="var(--ink)">M5</text>` +
        `<text x="371" y="170" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--brand)">1×</text>` +
        `<rect x="424" y="130" width="38" height="72" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>` +
        `<text x="443" y="216" font-size="10" font-weight="800" text-anchor="middle" fill="var(--ink)">M6</text>` +
        `<text x="443" y="124" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--warn)">≈ 32× energy</text>` +
        `<rect x="496" y="54" width="42" height="148" rx="4" fill="var(--bad-soft)" stroke="var(--bad)"/>` +
        `<text x="517" y="216" font-size="10" font-weight="800" text-anchor="middle" fill="var(--ink)">M7</text>` +
        `<text x="517" y="48" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--bad)">1,000× energy</text>` +
        `<text x="446" y="236" font-size="9.8" text-anchor="middle" fill="var(--ink-2)">+1.0 = 10× amplitude &amp; ≈ 32× energy</text>` +
        `</svg>`,
      diagramCaption: "Left: underground focus vs surface epicentre directly above along a fault. Right: logarithmic jump in energy per whole-number magnitude step.",
      workedExamples: [
        {
          title: "Comparing Two Earthquakes on the Moment Magnitude Scale",
          problem:
            "Earthquake A measures **M5.0** and Earthquake B measures **M7.0**. How many times greater is (a) the seismic wave amplitude and (b) the energy released by Earthquake B compared with Earthquake A?",
          steps: [
            "Find the magnitude difference: {{7.0 - 5.0 = 2.0}} whole steps.",
            "**Wave amplitude:** Each +1.0 step multiplies amplitude by 10, so +2.0 steps = {{10^2 = 100}} times larger wave amplitude.",
            "**Energy released:** Each +1.0 step multiplies energy by ≈ 31.623 (≈ 32), and {{31.623^2 = 1000}}, so +2.0 steps releases **1,000×** more energy!",
          ],
          answer: "100× larger seismic wave amplitude and 1,000× more energy released.",
          yourTurn: {
            question: "How many times larger is the seismic wave amplitude of an M8.0 earthquake compared with an M5.0 earthquake?",
            answer: { type: "number", value: 1000, display: "1,000" },
            solution: "Difference = 8.0 − 5.0 = 3.0 steps. Amplitude multiplies by 10³ = 1,000 times.",
          },
        },
        {
          title: "Choosing Between Moment Magnitude and Mercalli",
          problem:
            "An M6.8 earthquake strikes a rural mountain valley. Town X (on soft river mud with unreinforced brick houses) suffers total collapse (Mercalli X), while Town Y (same distance away, on solid bedrock with steel-framed buildings) suffers minor plaster cracks (Mercalli V). Explain how one earthquake can have two different Mercalli scores.",
          steps: [
            "State what Moment Magnitude measures: total energy released underground at the focus—so there is only **one** M6.8 figure for the whole event.",
            "State what Modified Mercalli (I–XII) measures: **observed local shaking and damage** at each surface location.",
            "Explain local differences: soft mud amplifies seismic waves (and can liquefy) while weak unreinforced brick collapses easily, raising Town X to Mercalli X, whereas solid bedrock and engineered frames keep Town Y at Mercalli V.",
          ],
          answer: "Magnitude measures energy at the focus (one value), whereas Mercalli I–XII measures local damage—which varies with geology (soft sediment vs bedrock), distance, and building strength.",
          yourTurn: {
            question: "Which earthquake measurement scale uses Roman numerals I to XII to record observed shaking and physical damage at a specific location?",
            answer: { type: "text", accept: ["Mercalli", "Mercalli scale", "Modified Mercalli", "Modified Mercalli scale", "Modified Mercalli intensity scale"], display: "Mercalli scale" },
            solution: "The Modified Mercalli Intensity Scale (I–XII) measures observed shaking and damage at specific surface sites.",
          },
        },
      ],
      keyPoints: [
        "Earthquakes follow a **stick-slip** sequence: plate motion → friction locks fault → elastic pressure builds → sudden rupture → **seismic waves** (P, S, and surface waves).",
        "The **focus** is the underground rupture point; the **epicentre** is the surface point directly above it. **Shallow foci (< 70 km)** cause far heavier shaking.",
        "**Moment Magnitude ({{M_w}})** (replacing Richter {{M_L}}) is objective and **logarithmic**: +1.0 = **10×** wave amplitude & **≈ 32×** energy (+2.0 = **100×** amplitude & **1,000×** energy).",
        "**Modified Mercalli (I–XII)** is subjective and measures local observed shaking and damage—so one quake has many Mercalli intensities.",
      ],
      whyItWorks:
        "A logarithmic scale compresses an enormous range of physical energy (tiny unnoticed M1 tremors up to M9.5 megathrusts releasing trillions of times more energy) onto a tidy 1-to-10 number line that scientists and the public can read instantly.",
      strategies: [
        "Memorise the **two golden numbers**: `+1.0 magnitude = 10× amplitude, ≈ 32× energy`; `+2.0 magnitude = 100× amplitude, 1,000× energy`.",
        "Always check whether a question asks for **amplitude** (powers of 10) or **energy** (powers of ≈ 31.6 / 32)!",
      ],
      thinkDeeper:
        "Fast P-waves travel through crust at ~6 km/s while destructive S-waves travel at ~3.5 km/s. If a seismometer sits directly above an earthquake epicentre 140 km away from a city, how many seconds of advance electronic warning can an Earthquake Early Warning system flash to residents before the S-waves arrive?",
    },

    // =========================================================================
    // SECTION 2: Nepal 2015 (Gorkha): Causes, Primary & Secondary Effects
    // =========================================================================
    {
      id: "nepal-2015-causes-effects",
      heading: "Nepal 2015 (Gorkha): Causes, Primary & Secondary Effects",
      discovery: {
        problem:
          "Nepal's 2015 earthquake measured **M7.8**—roughly **63 times LESS energy** than Japan's **M9.0** earthquake in 2011. Yet in Kathmandu Valley, whole neighbourhoods of homes and 600-year-old temples crumbled into dust within 60 seconds. What physical AND human factors made Nepal so desperately vulnerable?",
        idea:
          "Physically, the **very shallow focus (≈ 8–15 km)** sent intense waves straight into **Kathmandu's soft ancient lake-bed clay**, amplifying shaking like jelly in a bowl, while steep Himalayan slopes triggered deadly avalanches and landslides. Humanly, Nepal is a **Low-Income Country (LIC)** where rapid urban growth produced dense, **unreinforced brick/masonry homes** lacking strict seismic codes.",
      },
      body:
        "### Fact File: The 2015 Gorkha (Nepal) Earthquake\n\n" +
        "- **Date & Time:** Saturday **25 April 2015**, 11:56 local time (daytime on a weekend — schools were closed and many rural villagers were working outdoors, which prevented an even more catastrophic death toll).\n" +
        "- **Tectonic Cause:** **Collision plate margin** where the continental **Indian Plate** drives northward into the **Eurasian Plate** at **≈ 45 mm/year (4.5 cm/yr)**. Locked stress snapped along the **Main Himalayan Thrust** fault.\n" +
        "- **Magnitude & Focus:** **M7.8** (Moment Magnitude); epicentre near **Barpak, Gorkha District** (≈ 80 km NW of Kathmandu); **very shallow focus (≈ 8–15 km; USGS ≈ 8.2 km)**. A major **M7.3 aftershock** struck on **12 May 2015**, collapsing weakened structures.\n" +
        "- **Why shaking was so intense in Kathmandu:** Kathmandu sits inside a bowl filled with soft ancient lake sediments that trapped and amplified seismic waves.\n\n" +
        "### Primary Effects vs Secondary Effects\n\n" +
        "In Geography exams, you MUST separate **primary effects** (direct, immediate consequences of the ground shaking itself) from **secondary effects** (knock-on consequences triggered afterward by the primary shaking):\n\n" +
        "| Primary Effects (Direct Shaking) | Secondary Effects (Knock-On Consequences) |\n" +
        "|---|---|\n" +
        "| **≈ 9,000 people killed** (~8,964) and **≈ 22,000 injured** | **Avalanches on Mount Everest** (killing ~19–22 climbers at Base Camp) and a catastrophic ice-rock avalanche burying **Langtang Valley** village (~250+ dead/missing) |\n" +
        "| **≈ 3.5 million people made homeless** (>600,000 homes destroyed; ~288,000 damaged) | **Thousands of landslides** blocked steep mountain roads and dammed the **Kali Gandaki River**, cutting off remote villages from rescue and creating flood risks |\n" +
        "| Unreinforced brick/mud-mortar buildings and **UNESCO heritage sites** collapsed (**Dharahara Tower**, Kathmandu **Durbar Square**, Patan & Bhaktapur temples) | Severe **economic loss of ≈ US$5 billion** (≈ 25–35% of Nepal's entire annual GDP) |\n" +
        "| **> 7,000 schools** and **1,000+ health facilities** destroyed/damaged; power, water & phone networks knocked out; Kathmandu airport briefly closed | Collapse in **tourism revenue** (~800,000 tourists/year vital to jobs), buried rice harvests before the monsoon, **food/water shortages**, and sanitation/disease risks in crowded tent camps |",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nepal 2015 Gorkha earthquake schematic showing Indian-Eurasian collision fault, shallow 8-15 km focus, Kathmandu lake-bed amplification, and primary vs secondary impact cards">` +
        `<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>` +
        `<text x="280" y="20" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Nepal 2015 (Gorkha) — M7.8 Collision Quake (25 April 2015)</text>` +
        `<rect x="14" y="32" width="256" height="196" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>` +
        `<path d="M 14 140 L 128 140 L 164 114 L 198 76 L 228 96 L 270 84 L 270 228 L 14 228 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>` +
        `<path d="M 40 222 L 220 120" stroke="var(--bad)" stroke-width="2.6" stroke-dasharray="5 3"/>` +
        `<circle cx="136" cy="168" r="7" fill="var(--bad)"/>` +
        `<circle cx="136" cy="168" r="18" fill="none" stroke="var(--bad)" stroke-width="1.5"/>` +
        `<line x1="136" y1="160" x2="136" y2="122" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="3 2"/>` +
        `<ellipse cx="182" cy="116" rx="22" ry="7" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>` +
        `<line x1="26" y1="184" x2="88" y2="184" stroke="var(--brand)" stroke-width="3"/>` +
        `<polygon points="98,184 86,178 86,190" fill="var(--brand)"/>` +
        `<text x="62" y="202" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--brand)">Indian Plate</text>` +
        `<text x="62" y="213" font-size="8.8" text-anchor="middle" fill="var(--ink-2)">4.5 cm/yr N</text>` +
        `<text x="146" y="192" font-size="9.2" font-weight="800" fill="var(--bad)">Shallow Focus</text>` +
        `<text x="146" y="203" font-size="8.8" fill="var(--bad)">(~8–15 km)</text>` +
        `<text x="128" y="114" font-size="9" font-weight="800" text-anchor="middle" fill="var(--ink)">Gorkha</text>` +
        `<text x="184" y="102" font-size="8.8" font-weight="700" text-anchor="middle" fill="var(--warn)">Kathmandu Basin</text>` +
        `<text x="234" y="68" font-size="9" font-weight="800" text-anchor="middle" fill="var(--ink)">Everest / Langtang</text>` +
        `<rect x="284" y="32" width="262" height="92" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.2"/>` +
        `<text x="415" y="50" font-size="11" font-weight="800" text-anchor="middle" fill="var(--bad)">PRIMARY EFFECTS (Direct Shaking)</text>` +
        `<text x="296" y="68" font-size="9.8" fill="var(--ink)">• ~9,000 killed &amp; ~22,000 injured</text>` +
        `<text x="296" y="84" font-size="9.8" fill="var(--ink)">• ~3.5 million homeless (&gt;600,000 homes)</text>` +
        `<text x="296" y="100" font-size="9.8" fill="var(--ink)">• Durbar Square, Dharahara &amp; 7,000 schools</text>` +
        `<text x="296" y="115" font-size="9.8" fill="var(--ink)">• Power, water &amp; comms networks severed</text>` +
        `<rect x="284" y="134" width="262" height="94" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>` +
        `<text x="415" y="152" font-size="11" font-weight="800" text-anchor="middle" fill="var(--warn)">SECONDARY EFFECTS (Knock-On)</text>` +
        `<text x="296" y="170" font-size="9.8" fill="var(--ink)">• Everest &amp; Langtang avalanches (250+ buried)</text>` +
        `<text x="296" y="186" font-size="9.8" fill="var(--ink)">• Landslides blocked roads &amp; Kali Gandaki R.</text>` +
        `<text x="296" y="202" font-size="9.8" fill="var(--ink)">• ~$5B economic cost (~30% of Nepal's GDP)</text>` +
        `<text x="296" y="218" font-size="9.8" fill="var(--ink)">• Tourism slump, lost harvests &amp; disease risk</text>` +
        `</svg>`,
      diagramCaption: "Shallow collision rupture beneath Gorkha (left) and the exam-critical distinction between Nepal's primary and secondary effects (right).",
      workedExamples: [
        {
          title: "Classifying Primary vs Secondary Effects in Nepal 2015",
          problem:
            "Sort these four impacts of the 2015 Nepal earthquake into **Primary** and **Secondary** effects, justifying each choice: (1) Collapse of Dharahara Tower in Kathmandu; (2) Avalanche at Mount Everest Base Camp killing 19 climbers; (3) Over 600,000 unreinforced homes destroyed leaving 3.5 million homeless; (4) Landslides blocking rural mountain highways and delaying food aid.",
          steps: [
            "**(1) Dharahara Tower collapse → Primary:** Shaking directly fractured and toppled the masonry tower during the quake.",
            "**(2) Mount Everest avalanche → Secondary:** Ground shaking destabilised snow/ice slopes, which then triggered an avalanche as a knock-on hazard.",
            "**(3) 600,000 homes destroyed / 3.5M homeless → Primary:** Direct seismic shaking collapsed weak unreinforced walls immediately.",
            "**(4) Landslides blocking mountain roads → Secondary:** Shaking loosened steep Himalayan hillsides, causing slope failures that later cut off aid access.",
          ],
          answer: "Primary = (1) Dharahara collapse & (3) homes destroyed/homelessness. Secondary = (2) Everest avalanche & (4) landslides blocking roads.",
          yourTurn: {
            question: "Are the deadly avalanches on Mount Everest and in Langtang Valley classified as a **primary** or **secondary** effect of the 2015 Nepal earthquake?",
            answer: { type: "text", accept: ["secondary", "secondary effect", "secondary effects"], display: "secondary" },
            solution: "Avalanches and landslides are triggered *by* the shaking as knock-on hazards, so they are **secondary effects**.",
          },
        },
        {
          title: "Evaluating Economic Vulnerability (GDP Burden)",
          problem:
            "Nepal's 2015 earthquake caused roughly **US$5 billion** in damage when Nepal's annual GDP was approximately **US$20 billion**. Calculate the economic loss as a percentage of Nepal's annual GDP, and explain why this matters more than the raw dollar total alone.",
          steps: [
            "Divide economic loss by annual GDP: {{5 / 20 = 0.25}}.",
            "Multiply by 100 to convert to a percentage: {{0.25 * 100 = 25}}% of annual GDP (estimates ranged from 25% to 35% of GDP).",
            "Interpret geographically: even though $5B is far smaller in raw dollars than Japan's $235B tsunami cost, losing a quarter to a third of an entire year's national output crippled an LIC's ability to rebuild without foreign aid.",
          ],
          answer: "25% of annual GDP — a devastating proportional economic shock for an LIC.",
          yourTurn: {
            question: "If an earthquake causes $6 billion in damage to a country with an annual GDP of $24 billion, what percentage of its annual GDP is lost?",
            answer: { type: "number", value: 25, display: "25%" },
            solution: "(6 ÷ 24) × 100 = 25% of annual GDP.",
          },
        },
      ],
      keyPoints: [
        "**25 April 2015 (Gorkha), M7.8:** Collision of **Indian & Eurasian plates** (~4.5 cm/yr) along the Main Himalayan Thrust with a **very shallow focus (~8–15 km)**.",
        "**Primary effects (direct shaking):** ~9,000 killed, ~22,000 injured, ~3.5 million homeless (>600,000 homes destroyed), Kathmandu UNESCO sites (Durbar Square, Dharahara Tower) and >7,000 schools destroyed.",
        "**Secondary effects (knock-on):** Everest & Langtang Valley avalanches, landslides blocking mountain roads and damming the Kali Gandaki River, ~$5 billion economic cost (~25–35% of GDP), tourism slump, and lost harvests.",
        "Human **vulnerability** (LIC poverty, unreinforced brick homes, Kathmandu's soft ancient lake-bed clay) magnified damage far beyond magnitude alone.",
      ],
      whyItWorks:
        "Separating primary from secondary effects helps disaster planners target different links in the risk chain: stronger buildings reduce **primary** collapse, while slope stabilisation, alternative helicopter airlifts, and emergency stockpiles cut **secondary** isolation and famine.",
      strategies: [
        "Apply the **'Direct Shaking Test'**: did the ground shaking *itself* break it in those 60 seconds? → **Primary**. Was it triggered *by* the shaking afterward (avalanche, landslide, disease, tourism collapse, $5B economic slump)? → **Secondary**.",
        "Always anchor Nepal 2015 answers with **3–4 precise facts**: *25 April 2015, Indian–Eurasian collision, M7.8, ~8–15 km shallow focus, ~9,000 dead, 3.5M homeless, Langtang/Everest avalanches, ~$5B loss*.",
      ],
      thinkDeeper:
        "Why did the earthquake striking at **11:56 am on a Saturday** instead of 11:56 am on a Monday or 2:00 am at night almost certainly save tens of thousands of lives in Nepal?",
    },

    // =========================================================================
    // SECTION 3: Nepal 2015: Immediate vs Long-Term Responses
    // =========================================================================
    {
      id: "nepal-2015-responses",
      heading: "Nepal 2015: Immediate vs Long-Term Responses",
      discovery: {
        problem:
          "Within 6 hours of the 2015 Nepal earthquake, Indian Air Force C-17 planes landed in Kathmandu with rescue dogs and field hospitals—yet some Himalayan mountain villages waited **over a week** for basic tents and food. Why did huge international donations fail to reach everyone immediately?",
        idea:
          "Aid hit three real-world geographical bottlenecks: Kathmandu's **single-runway airport** jammed rapidly with incoming relief flights; **landslides severed steep mountain roads**; and poor weather plus scarce **helicopters** delayed delivery to isolated high-altitude villages.",
      },
      body:
        "Disaster management splits human action after an earthquake into two clear phases: **immediate responses** (hours to weeks — saving lives and meeting basic survival needs) and **long-term responses** (months to years — rebuilding safer infrastructure and reviving the economy).\n\n" +
        "### 1. Immediate Responses (Hours to Weeks)\n\n" +
        "- **Local & International Search and Rescue (SAR):** Nepal's army, police, and local residents dug survivors from rubble by hand before heavy gear arrived. Neighbouring **India** launched *Operation Maitri* within hours, joined by specialist SAR teams from **China, the UK, USA, Japan, and Singapore (SCDF & SAF)** using sniffer dogs and thermal cameras.\n" +
        "- **Emergency Shelter, Water & Medical Aid:** Charities (such as the UK's **Disasters Emergency Committee — DEC**, raising >£85 million, plus Red Cross, Oxfam, and UN agencies) distributed **tents, tarpaulins, clean drinking water, food rations, and mobile field hospitals** to protect 3.5 million homeless people before the summer monsoon.\n" +
        "- **Digital & Social-Media Locating:** **Facebook Safety Check**, **Google Person Finder**, and thousands of global **OpenStreetMap** volunteers rapidly mapped collapsed streets and tent camps to guide rescue helicopters.\n\n" +
        "### 2. Long-Term Responses (Months to Years — 'Build Back Better')\n\n" +
        "- **Stricter Seismic Building Codes & Mason Training:** Nepal's National Reconstruction Authority (NRA) rolled out **'Build Back Better'** cash grants (≈ US$3,000 per family paid in inspected stages) and trained over **50,000 local masons** to build low-cost earthquake-resistant timber-band and reinforced-concrete homes.\n" +
        "- **Rebuilding Infrastructure & Services:** Repairing **> 7,000 schools**, rural health clinics, damaged highways (including the **Araniko Highway** linking Kathmandu to China), rural water pipes, and hydropower stations.\n" +
        "- **Restoring Heritage & Tourism:** Carefully reconstructing UNESCO landmarks (**Kathmandu Durbar Square**, Patan, Bhaktapur, and a new reinforced **Dharahara Tower**) and repairing Mount Everest and Annapurna trekking trails to bring back vital tourist jobs.\n" +
        "- **Hazard Mapping & Preparedness:** Mapping unstable landslide slopes, relocating at-risk communities (such as parts of Langtang), and strengthening local disaster-response committees.\n\n" +
        "### Evaluating Nepal's Recovery Challenges (LIC Context)\n\n" +
        "Despite generous global pledges (~US$4 billion pledged at donors' conferences), recovery took **5+ years**. Rugged Himalayan geography, monsoon rains, political disputes over a new constitution, slow bureaucratic disbursement of housing grants, and a late-2015 border fuel blockade all slowed reconstruction—highlighting why wealth, governance, and terrain heavily shape post-disaster recovery.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline comparing immediate responses in hours to weeks and long-term Build Back Better responses in months to years after the 2015 Nepal earthquake">` +
        `<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>` +
        `<text x="280" y="20" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Nepal 2015 Responses Timeline — Immediate vs Long-Term</text>` +
        `<line x1="28" y1="54" x2="522" y2="54" stroke="var(--brand)" stroke-width="3.5"/>` +
        `<polygon points="534,54 520,47 520,61" fill="var(--brand)"/>` +
        `<circle cx="72" cy="54" r="7" fill="var(--bad)"/>` +
        `<circle cx="205" cy="54" r="7" fill="var(--accent)"/>` +
        `<circle cx="355" cy="54" r="7" fill="var(--brand)"/>` +
        `<circle cx="486" cy="54" r="7" fill="var(--good)"/>` +
        `<text x="72" y="42" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--bad)">Hours 0–72</text>` +
        `<text x="205" y="42" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--warn)">Weeks 1–4</text>` +
        `<text x="355" y="42" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--brand)">Months 3–24</text>` +
        `<text x="486" y="42" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--good)">Years 2–6+</text>` +
        `<rect x="16" y="74" width="254" height="148" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.3"/>` +
        `<text x="143" y="94" font-size="11" font-weight="800" text-anchor="middle" fill="var(--bad)">IMMEDIATE (Save Lives)</text>` +
        `<text x="28" y="114" font-size="9.8" fill="var(--ink)">• SAR teams: India, China, UK, Singapore</text>` +
        `<text x="28" y="132" font-size="9.8" fill="var(--ink)">• Tents, tarpaulins, clean water &amp; rations</text>` +
        `<text x="28" y="150" font-size="9.8" fill="var(--ink)">• Field hospitals &amp; helicopter airlifts</text>` +
        `<text x="28" y="168" font-size="9.8" fill="var(--ink)">• Facebook Safety Check &amp; crisis maps</text>` +
        `<text x="28" y="192" font-size="9.2" font-weight="700" fill="var(--bad)">Bottlenecks: 1 runway + blocked mountain</text>` +
        `<text x="28" y="205" font-size="9.2" font-weight="700" fill="var(--bad)">roads delayed remote rural villages</text>` +
        `<rect x="290" y="74" width="254" height="148" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.3"/>` +
        `<text x="417" y="94" font-size="11" font-weight="800" text-anchor="middle" fill="var(--good)">LONG-TERM ('Build Back Better')</text>` +
        `<text x="302" y="114" font-size="9.8" fill="var(--ink)">• Stricter seismic building codes enforced</text>` +
        `<text x="302" y="132" font-size="9.8" fill="var(--ink)">• 50,000+ masons trained + staged grants</text>` +
        `<text x="302" y="150" font-size="9.8" fill="var(--ink)">• Rebuilding 7,000+ schools, roads &amp; water</text>` +
        `<text x="302" y="168" font-size="9.8" fill="var(--ink)">• Restoring Durbar Square &amp; Everest trails</text>` +
        `<text x="302" y="192" font-size="9.2" font-weight="700" fill="var(--good)">Goal: Reduce future vulnerability so the</text>` +
        `<text x="302" y="205" font-size="9.2" font-weight="700" fill="var(--good)">next Himalayan quake kills far fewer</text>` +
        `<text x="280" y="240" font-size="9.8" text-anchor="middle" fill="var(--ink-2)">Immediate aid prevents deaths now; long-term recovery lowers future risk</text>` +
        `</svg>`,
      diagramCaption: "Immediate humanitarian aid meets urgent survival needs in hours to weeks, whereas long-term 'Build Back Better' programmes strengthen resilience over years.",
      workedExamples: [
        {
          title: "Distinguishing Immediate vs Long-Term Responses",
          problem:
            "Explain the difference between an **immediate response** and a **long-term response** to the 2015 Nepal earthquake, giving one specific example of each. (4 marks)",
          steps: [
            "**Immediate definition:** Action taken within hours to weeks to rescue survivors and provide emergency survival needs (shelter, water, food, medical care).",
            "**Immediate example:** International search-and-rescue teams (e.g. from India, China, UK, and Singapore) rescued survivors from Kathmandu rubble, while charities flew in tents, clean water, and field hospitals.",
            "**Long-term definition:** Action taken over months to years to permanently rebuild infrastructure, restore the economy, and reduce future vulnerability.",
            "**Long-term example:** Enforcing stricter seismic building codes and training 50,000+ local masons under 'Build Back Better' housing grants, alongside restoring UNESCO heritage sites and reopening Everest trekking routes.",
          ],
          answer: "Immediate responses (hours–weeks) save lives (e.g. international SAR teams & emergency tents/water); long-term responses (months–years) rebuild safer resilience (e.g. seismic building codes, mason training & restoring tourism/heritage).",
          yourTurn: {
            question: "Training 50,000 Nepalese masons to construct seismic-resistant homes with inspected grants is an example of which response phase: **immediate** or **long-term**?",
            answer: { type: "text", accept: ["long-term", "long term", "long-term response", "long term response"], display: "long-term" },
            solution: "Training builders and reconstructing safer permanent housing takes months to years, making it a **long-term response**.",
          },
        },
        {
          title: "Evaluating Why Staged 'Build Back Better' Grants Worked Better Than One Lump Sum",
          problem:
            "Nepal's National Reconstruction Authority paid families US$3,000 housing grants in **three separate instalments** (tranches) only after an engineer inspected each building stage (foundation → walls → roof). Explain one advantage and one drawback of this approach.",
          steps: [
            "**Advantage:** Inspecting each stage forced builders to include seismic features (corner reinforcement and horizontal timber/concrete bands), preventing families from rebuilding unsafe mud-brick traps.",
            "**Drawback:** Waiting for engineers to reach remote Himalayan villages delayed payments, leaving many poor families stuck in corrugated-iron temporary shelters through multiple cold winters and monsoons.",
          ],
          answer: "Advantage: ensured genuine earthquake-resistant construction; Drawback: bureaucratic inspection delays slowed permanent rehousing in remote mountain areas.",
          yourTurn: {
            question: "Which single-runway transport hub became heavily congested immediately after the 2015 Nepal earthquake, slowing international relief deliveries?",
            answer: { type: "text", accept: ["Kathmandu airport", "Tribhuvan International Airport", "Tribhuvan airport", "Tribhuvan"], display: "Tribhuvan International Airport" },
            solution: "Kathmandu's single-runway **Tribhuvan International Airport** quickly filled with relief aircraft, bottlenecking immediate aid.",
          },
        },
      ],
      keyPoints: [
        "**Immediate responses (hours–weeks)** save lives: local & international SAR (India, China, UK, Singapore), emergency tents/water/food, field hospitals, helicopters, and digital locating tools (Facebook Safety Check, Google Person Finder).",
        "**Immediate bottlenecks** in Nepal included Kathmandu's congested single runway, landslide-blocked mountain highways, and severe shortages of heavy lifting gear and helicopters.",
        "**Long-term responses (months–years)** focus on **'Build Back Better'**: stricter seismic building codes, training local masons, rebuilding >7,000 schools/roads/water pipes, and restoring UNESCO heritage & tourism.",
        "Recovery in an **LIC** like Nepal was slowed by rugged terrain, monsoon rains, low government tax revenue, political delays, and heavy reliance on foreign aid.",
      ],
      whyItWorks:
        "If a country only hands out tents and rebuilds identical weak mud-brick houses, the very next Himalayan rupture will kill thousands all over again. Pairing rapid immediate rescue with long-term 'Build Back Better' training breaks the disaster cycle.",
      strategies: [
        "Use the **'Monsoon Clock' test**: tents, rescue dogs, Facebook Safety Check, and clean water within days = **Immediate**. Building codes, mason training, restored Durbar Square, and rebuilt schools over years = **Long-Term**.",
        "To earn evaluation marks on response questions, mention **both** successes (e.g. rapid Indian/global aid, >50,000 masons trained) **and** constraints (blocked mountain roads, airport congestion, LIC funding gaps).",
      ],
      thinkDeeper:
        "Why did many international NGOs urge tourists to *return* to Nepal just months after the 2015 earthquake rather than stay away out of sympathy?",
    },

    // =========================================================================
    // SECTION 4: Reducing Earthquake Risk: Predict, Protect & Prepare
    // =========================================================================
    {
      id: "earthquake-management-3ps",
      heading: "Reducing Earthquake Risk: Predict, Protect & Prepare",
      discovery: {
        problem:
          "Volcanologists often give days or weeks of warning before an eruption—yet even Japan's billion-dollar monitoring network could NOT tell citizens the morning of 11 March 2011 that an M9.0 quake would strike at 2:46 pm. Why is exact earthquake prediction still scientifically impossible, and how do high-risk nations save lives anyway?",
        idea:
          "Unlike rising magma that bulges a volcano and releases gas days in advance, buried fault rocks accumulate hidden elastic stress kilometres underground and fracture abruptly in milliseconds without reliable precursors. Because exact **prediction** is impossible, successful hazard management pours resources into **Protect** (aseismic engineering) and **Prepare** (drills, kits, and P-wave early warning)!",
      },
      body:
        "Geographers group earthquake risk-reduction strategies into the **3 Ps: Predict, Protect, and Prepare**.\n\n" +
        "### 1. PREDICT (Monitoring & Probability — NOT Exact Forecasts!)\n\n" +
        "- **The Golden Rule:** Scientists **CANNOT predict** the exact date, time, magnitude, and location of an earthquake.\n" +
        "- **What scientists CAN do:**\n" +
        "  - **Long-term probability forecasting:** Mapping historical recurrence intervals and **'seismic gaps'** (locked fault stretches that haven't slipped for centuries, such as western Nepal or California's southern San Andreas) to estimate percentage probability over the next 30 years.\n" +
        "  - **Monitoring weak precursors:** Seismometers (watching foreshocks), GPS/laser strainmeters (measuring slow crustal bending), and radon gas detectors—useful for research, but none give reliable day-by-day warnings.\n" +
        "  - **Earthquake Early Warning (EEW):** Systems like Japan's **J-Alert** detect fast, low-damage **P-waves** the instant a fault ruptures and flash automated radio/SMS alerts **5–60 seconds** *before* slower, destructive **S-waves** arrive—automatically braking Shinkansen bullet trains, shutting gas valves, and letting citizens take cover. *(Crucial exam nuance: EEW is real-time **detection after rupture**, NOT prediction before rupture!)*\n\n" +
        "### 2. PROTECT (Aseismic Engineering & Land-Use Planning)\n\n" +
        "Designing buildings to **bend and absorb seismic energy rather than snap**:\n\n" +
        "- **Cross-bracing:** Diagonal steel X-braces reinforce walls so buildings resist twisting and sideways shear.\n" +
        "- **Base isolation:** Flexible rubber-and-lead shock-absorbing bearings sit between the foundation and superstructure, decoupling the building from violent ground motion.\n" +
        "- **Tuned mass dampers (counterweights):** Giant computer-controlled steel pendulums near skyscraper tops (e.g. Taipei 101's 660-tonne sphere) swing opposite to earthquake sway to cancel vibration.\n" +
        "- **Additional features:** Deep piled foundations anchored into solid bedrock, ductile steel frames, **shatterproof laminated glass**, automatic gas/electricity shut-off valves (preventing secondary fires!), open evacuation parks, and **appropriate low-cost LIC retrofits** (horizontal timber ring-beams, lightweight corrugated roofs, bamboo/wire-mesh reinforced walls).\n\n" +
        "### 3. PREPARE (Education, Drills & Emergency Plans)\n\n" +
        "- **Regular drills:** Teaching **'Drop, Cover, and Hold On'** in schools and workplaces (e.g. Japan's annual **Disaster Prevention Day** on 1 September).\n" +
        "- **Emergency grab-bags (72-hour kits):** Bottled water, non-perishable food, torch, whistle (to signal rescuers under rubble), first-aid kit, battery/wind-up radio, spare medicine, and copies of IDs.\n" +
        "- **Home & community readiness:** Bolting heavy bookcases and water heaters to walls, clear family meeting points, trained neighbourhood first-aid teams, and pre-positioned emergency medical/tent stockpiles.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Annotated cross-section of an aseismic earthquake-resistant skyscraper showing tuned mass damper, steel cross-bracing, shatterproof glass, base isolation shock absorbers, and deep foundations">` +
        `<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>` +
        `<text x="175" y="20" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Aseismic Building ('Protect')</text>` +
        `<rect x="20" y="198" width="290" height="34" rx="4" fill="var(--surface-2)" stroke="var(--line)"/>` +
        `<rect x="115" y="42" width="100" height="136" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>` +
        `<line x1="115" y1="88" x2="215" y2="88" stroke="var(--brand)" stroke-width="1.5"/>` +
        `<line x1="115" y1="134" x2="215" y2="134" stroke="var(--brand)" stroke-width="1.5"/>` +
        `<line x1="115" y1="88" x2="215" y2="134" stroke="var(--bad)" stroke-width="2.2"/>` +
        `<line x1="215" y1="88" x2="115" y2="134" stroke="var(--bad)" stroke-width="2.2"/>` +
        `<line x1="115" y1="134" x2="215" y2="178" stroke="var(--bad)" stroke-width="2.2"/>` +
        `<line x1="215" y1="134" x2="115" y2="178" stroke="var(--bad)" stroke-width="2.2"/>` +
        `<line x1="165" y1="42" x2="165" y2="62" stroke="var(--ink)" stroke-width="2"/>` +
        `<circle cx="165" cy="68" r="10" fill="var(--accent)" stroke="var(--ink)" stroke-width="1.4"/>` +
        `<rect x="122" y="178" width="22" height="14" rx="3" fill="var(--ink)" />` +
        `<rect x="154" y="178" width="22" height="14" rx="3" fill="var(--ink)" />` +
        `<rect x="186" y="178" width="22" height="14" rx="3" fill="var(--ink)" />` +
        `<rect x="128" y="198" width="8" height="28" fill="var(--ink-2)"/>` +
        `<rect x="194" y="198" width="8" height="28" fill="var(--ink-2)"/>` +
        `<line x1="175" y1="68" x2="232" y2="56" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<text x="236" y="60" font-size="9.5" font-weight="700" fill="var(--ink)">Tuned Mass Damper</text>` +
        `<line x1="215" y1="112" x2="232" y2="112" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<text x="236" y="116" font-size="9.5" font-weight="700" fill="var(--bad)">Steel Cross-Bracing</text>` +
        `<line x1="208" y1="185" x2="232" y2="182" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<text x="236" y="185" font-size="9.5" font-weight="700" fill="var(--ink)">Base Isolation Pads</text>` +
        `<line x1="202" y1="214" x2="232" y2="214" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<text x="236" y="218" font-size="9.5" font-weight="700" fill="var(--ink-2)">Deep Bedrock Piles</text>` +
        `<line x1="354" y1="18" x2="354" y2="238" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>` +
        `<text x="456" y="20" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--ink)">The 3 Ps Summary</text>` +
        `<rect x="368" y="34" width="178" height="58" rx="7" fill="var(--accent-soft)" stroke="var(--accent)"/>` +
        `<text x="457" y="51" font-size="10.5" font-weight="800" text-anchor="middle" fill="var(--warn)">1. PREDICT (Limited!)</text>` +
        `<text x="457" y="66" font-size="9.2" text-anchor="middle" fill="var(--ink)">Exact timing impossible;</text>` +
        `<text x="457" y="79" font-size="9.2" text-anchor="middle" fill="var(--ink)">probabilities &amp; P-wave EEW</text>` +
        `<rect x="368" y="102" width="178" height="60" rx="7" fill="var(--brand-soft)" stroke="var(--brand)"/>` +
        `<text x="457" y="119" font-size="10.5" font-weight="800" text-anchor="middle" fill="var(--brand)">2. PROTECT (Engineering)</text>` +
        `<text x="457" y="134" font-size="9.2" text-anchor="middle" fill="var(--ink)">Base isolation, X-bracing,</text>` +
        `<text x="457" y="148" font-size="9.2" text-anchor="middle" fill="var(--ink)">auto gas shut-off, LIC rings</text>` +
        `<rect x="368" y="172" width="178" height="60" rx="7" fill="var(--good-soft)" stroke="var(--good)"/>` +
        `<text x="457" y="189" font-size="10.5" font-weight="800" text-anchor="middle" fill="var(--good)">3. PREPARE (People)</text>` +
        `<text x="457" y="204" font-size="9.2" text-anchor="middle" fill="var(--ink)">Drop-Cover-Hold drills,</text>` +
        `<text x="457" y="218" font-size="9.2" text-anchor="middle" fill="var(--ink)">72-hr kits &amp; bolted shelves</text>` +
        `</svg>`,
      diagramCaption: "Key aseismic engineering features inside a modern quake-resistant tower (left) alongside the 3 Ps earthquake management framework (right).",
      workedExamples: [
        {
          title: "Explaining How Base Isolation & Cross-Bracing Protect Buildings",
          problem:
            "Explain how **base isolation** and **steel cross-bracing** reduce the risk of building collapse during a major earthquake. (4 marks)",
          steps: [
            "**Base isolation mechanism:** Flexible rubber-and-lead shock-absorbing pads sit between the building's foundations and upper structure.",
            "**Base isolation effect:** When the ground lurches sideways, the pads absorb seismic energy so far less violent shaking is transmitted into the building above.",
            "**Cross-bracing mechanism:** Diagonal steel X-shaped frames are fitted across wall bays.",
            "**Cross-bracing effect:** They lock rectangular wall frames into rigid triangles that resist sideways twisting and shear forces, preventing pancake collapse.",
          ],
          answer: "Base isolation uses flexible rubber/lead bearings to absorb ground motion beneath the structure, while diagonal steel cross-bracing prevents walls twisting and shearing during shaking.",
          yourTurn: {
            question: "Which aseismic building feature places flexible rubber-and-lead shock absorbers beneath a building's foundation to decouple it from ground shaking?",
            answer: { type: "text", accept: ["base isolation", "base isolators", "rubber shock absorbers"], display: "base isolation" },
            solution: "**Base isolation** uses rubber/lead shock absorbers beneath the structure so the ground moves beneath without violently shaking the building above.",
          },
        },
        {
          title: "Calculating P-Wave Early-Warning Time",
          problem:
            "An earthquake ruptures 210 km away from a city. Fast P-waves travel at **6.0 km/s** and destructive S-waves travel at **3.5 km/s**. If an Earthquake Early Warning system triggers the instant P-waves hit the epicentre sensor, how many seconds of warning does the city get before the destructive S-waves arrive? (Assume electronic alerts travel instantaneously at light speed.)",
          steps: [
            "Calculate S-wave travel time: {{210 / 3.5 = 60}} seconds.",
            "Compare with a local sensor at the city itself (where P-waves arrive in {{210 / 6.0 = 35}} s): the gap between P-wave arrival and S-wave arrival at the city is {{60 - 35 = 25}} seconds.",
            "With an epicentre sensor flashing instantly at t = 0 s, the city gains up to **60 seconds** (or **25 seconds** from a city-edge P-wave detector)—enough to stop bullet trains and let people Drop, Cover, and Hold On!",
          ],
          answer: "60 seconds from an epicentre sensor (or 25 seconds gap between P- and S-waves at the city).",
          yourTurn: {
            question: "At a station 105 km from an earthquake focus, P-waves (6.0 km/s) arrive in 17.5 s and S-waves (3.5 km/s) arrive in 30.0 s. How many seconds of warning exist between the P-wave and S-wave arrivals?",
            answer: { type: "number", value: 12.5, display: "12.5 s" },
            solution: "30.0 s − 17.5 s = 12.5 seconds between P-wave detection and destructive S-wave arrival.",
          },
        },
      ],
      keyPoints: [
        "**Predict:** Exact earthquake date/time prediction is **impossible**; scientists produce long-term **probabilities** (seismic gaps) and **Earthquake Early Warning (EEW)** alerts detecting P-waves seconds before S-waves.",
        "**Protect:** Aseismic engineering (**base isolation**, **steel cross-bracing**, **tuned mass dampers**, shatterproof glass, auto gas shut-off valves) plus affordable **LIC retrofits** (timber ring-beams, lightweight roofs).",
        "**Prepare:** Regular **Drop, Cover, Hold On** drills (e.g. Japan's 1 September Disaster Prevention Day), **72-hour emergency kits**, bolted furniture, and trained local responders.",
        "Because HIC skyscrapers with base isolation are unaffordable for rural LIC families, **appropriate technology** (reinforced timber-band masonry & community drills) saves the most lives per dollar in countries like Nepal.",
      ],
      whyItWorks:
        "You cannot stop tectonic plates moving, and you cannot forecast the exact hour a fault snaps—so reducing vulnerability through **Protect** (stronger structures) and **Prepare** (fast human reactions) is the only proven way to turn an M7.8 rupture from a catastrophe into a survivable shock.",
      strategies: [
        "Never confuse **volcano prediction** (possible days/weeks ahead via gas, tiltmeters, tremors) with **earthquake prediction** (exact timing remains impossible!).",
        "In 6-mark evaluation essays ('Which P is most effective?'), argue that **Protect** and **Prepare** outperform **Predict**, and contrast **HIC high-tech engineering** (base isolation, dampers) with **LIC appropriate technology** (timber ring-beams, drills).",
      ],
      thinkDeeper:
        "Why might spending $10 million on training local Nepalese builders in low-cost timber-band masonry and school earthquake drills save *far more lives* than spending $10 million installing high-tech base isolators under two luxury hotels in Kathmandu?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is the difference between an earthquake's focus and its epicentre?", back: "The **focus** (hypocentre) is the exact point underground where the fault ruptures; the **epicentre** is the point on Earth's surface directly above it." },
      { front: "Why do shallow-focus earthquakes (< 70 km) usually cause much greater damage than deep-focus quakes?", back: "Seismic waves travel a shorter distance to the surface and lose far less energy, producing much more intense ground shaking." },
      { front: "How much stronger is an M7.0 earthquake than an M6.0 earthquake on the Moment Magnitude Scale?", back: "It has **10×** greater seismic wave amplitude and releases **≈ 31.6× (≈ 32×)** more energy." },
      { front: "How much more energy does an M8.0 quake release than an M6.0 quake (+2.0 steps)?", back: "**100×** greater wave amplitude and **1,000×** more energy released." },
      { front: "Compare Moment Magnitude ({{M_w}}) and Modified Mercalli (I–XII).", back: "Moment Magnitude is objective, logarithmic, and measured by seismometers (1 value per quake); Mercalli is subjective (I–XII) measuring observed local shaking & damage (many values per quake)." },
      { front: "Give the date, magnitude, plate margin, and focus depth of the 2015 Nepal (Gorkha) earthquake.", back: "**25 April 2015**, **M7.8**, **collision margin** (Indian & Eurasian plates), **very shallow focus (~8–15 km)**." },
      { front: "Name four PRIMARY effects of the 2015 Nepal earthquake.", back: "~9,000 deaths, ~22,000 injured, ~3.5 million homeless (>600,000 homes destroyed), collapse of Durbar Square/Dharahara Tower and >7,000 schools." },
      { front: "Name four SECONDARY effects of the 2015 Nepal earthquake.", back: "Everest & Langtang Valley avalanches (~250+ buried in Langtang), landslides blocking mountain roads & Kali Gandaki River, ~$5B economic loss (~25–35% GDP), tourism slump & lost harvests." },
      { front: "Why was shaking in Kathmandu Valley amplified during the 2015 earthquake?", back: "Kathmandu sits on soft ancient lake-bed sediments that amplified seismic waves, compounded by dense unreinforced brick buildings." },
      { front: "Name three IMMEDIATE responses to the 2015 Nepal earthquake.", back: "International Search & Rescue (India, China, UK, Singapore), emergency tents/water/food/field hospitals, and digital locating (Facebook Safety Check, Google Person Finder)." },
      { front: "Name three LONG-TERM ('Build Back Better') responses in Nepal after 2015.", back: "Stricter seismic building codes & training >50,000 local masons with staged grants, rebuilding >7,000 schools/roads/water pipes, and restoring UNESCO heritage & trekking tourism." },
      { front: "Why did immediate aid struggle to reach remote Himalayan villages after the 2015 quake?", back: "Kathmandu's single-runway airport jammed quickly, landslides severed steep mountain roads, and helicopter shortages delayed airlifts." },
      { front: "Can scientists predict the exact date and time of an earthquake?", back: "**No** — exact prediction is currently impossible; scientists can only calculate long-term probabilities (seismic gaps) and send P-wave Early Warning alerts *after* rupture starts." },
      { front: "How does Earthquake Early Warning (EEW) give 5–60 seconds of warning?", back: "Sensors detect fast, less-damaging **P-waves** immediately upon rupture and transmit electronic alerts before slower, destructive **S-waves** arrive." },
      { front: "Explain how base isolation and cross-bracing protect a building during an earthquake.", back: "**Base isolation** uses rubber/lead shock absorbers beneath foundations to decouple the building from shaking ground; **cross-bracing** uses diagonal steel X-frames to stop walls twisting and shearing." },
      { front: "Give two low-cost 'appropriate technology' earthquake protections suited to LICs like Nepal.", back: "Horizontal timber/concrete ring-beams tying masonry walls together, lightweight roofs (corrugated sheet instead of heavy stone), and wire-mesh/bamboo wall reinforcement." },
    ],
    mustKnow: [
      "Explain the stick-slip mechanism of earthquakes (friction, pressure build-up, rupture, P/S/surface seismic waves).",
      "Distinguish clearly between **focus** (underground origin) and **epicentre** (surface point directly above) and explain why shallow foci are deadlier.",
      "Calculate logarithmic amplitude (10× per +1.0) and energy (≈ 32× per +1.0; 1,000× per +2.0) jumps on the Moment Magnitude Scale.",
      "Compare the objective Moment Magnitude/Richter scale with the subjective Modified Mercalli Intensity Scale (I–XII).",
      "Recall exact 2015 Nepal (Gorkha) facts: 25 April 2015, Indian–Eurasian collision, M7.8, ~8–15 km focus, ~9,000 dead, ~22,000 injured, 3.5M homeless, ~$5B loss.",
      "Classify Nepal 2015 impacts accurately into **primary effects** (direct shaking) vs **secondary effects** (avalanches, landslides, GDP/tourism slump).",
      "Classify Nepal 2015 actions into **immediate responses** (SAR, tents, water, social media) vs **long-term responses** (building codes, mason training, heritage & road rebuilding).",
      "Explain why exact earthquake prediction is impossible and distinguish long-term probability/EEW from true prediction.",
      "Explain aseismic engineering features (**cross-bracing**, **base isolation**, **tuned mass dampers**, **shatterproof glass**, auto gas shut-off) plus low-cost LIC retrofits.",
      "Explain how **Prepare** measures (Drop–Cover–Hold drills, 72-hour kits, secured furniture) complement engineering.",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: An M7.0 earthquake is only slightly bigger (or 1/6 bigger) than an M6.0 earthquake.",
        right: "Write Instead ✅: Moment Magnitude is **logarithmic**: M7.0 has **10×** larger wave amplitude and releases **≈ 32×** more energy than M6.0 (and M8.0 releases **1,000×** more energy than M6.0).",
      },
      {
        wrong: "Never Write ❌: The epicentre is the underground point where the earthquake begins.",
        right: "Write Instead ✅: The **focus** (hypocentre) is the underground rupture point; the **epicentre** is the point on Earth's **surface** directly above the focus.",
      },
      {
        wrong: "Never Write ❌: The Mount Everest and Langtang avalanches were primary effects because people died right away.",
        right: "Write Instead ✅: Avalanches and landslides were **secondary effects** because they were knock-on slope failures triggered *by* the primary ground shaking.",
      },
      {
        wrong: "Never Write ❌: Scientists use seismometers to predict the exact date an earthquake will strike.",
        right: "Write Instead ✅: Exact earthquake prediction is currently **impossible**; seismometers record waves *after* rupture begins (enabling seconds-long P-wave Early Warning) and map long-term probabilities.",
      },
      {
        wrong: "Never Write ❌: Nepal's 2015 earthquake happened at a destructive subduction margin with active volcanoes.",
        right: "Write Instead ✅: Nepal's 2015 earthquake occurred at a **continental collision margin** (Indian & Eurasian plates) with powerful shallow quakes and **NO active volcanoes**.",
      },
      {
        wrong: "Never Write ❌: Providing emergency tents and food rations is a long-term response.",
        right: "Write Instead ✅: Emergency tents, water, food, and SAR are **immediate responses** (hours–weeks); enforcing seismic building codes and rebuilding permanent schools/roads are **long-term responses** (months–years).",
      },
      {
        wrong: "Never Write ❌: Base isolation makes skyscrapers completely rigid so they never move at all.",
        right: "Write Instead ✅: Aseismic design lets structures **flex and absorb energy** (via rubber/lead base-isolation pads and ductile steel frames) instead of snapping rigidly.",
      },
    ],
    examMistakes: [
      "Mixing up **primary** and **secondary** effects—always ask: 'Did shaking directly break this, or did shaking trigger another event (avalanche, landslide, fire, disease, tourism collapse)?'",
      "Mixing up **immediate** and **long-term** responses—check the timescale (hours–weeks saving lives vs months–years rebuilding safely).",
      "Confusing **wave amplitude** (10× per +1.0) with **energy released** (≈ 32× per +1.0; 1,000× per +2.0) in magnitude calculations.",
      "Writing generic Nepal answers ('many people died, lots of buildings broke') instead of citing exact facts (**M7.8**, **~9,000 dead**, **3.5M homeless**, **Langtang/Everest**, **~$5B**).",
      "Writing that **Earthquake Early Warning** predicts quakes before they happen—it actually detects fast **P-waves** *after* rupture starts!",
      "Swapping the definitions of **focus** (underground) and **epicentre** (surface directly above).",
      "Suggesting $50 million tuned mass dampers as the solution for rural Nepalese villages instead of **appropriate low-cost LIC retrofits** (timber ring-beams, lightweight roofs, mason training).",
      "Forgetting why Mercalli (I–XII) varies across cities for the *same* earthquake (distance from epicentre, soft soil vs bedrock, building quality).",
    ],
    mnemonics: [
      {
        topic: "Focus vs Epicentre",
        device: "F = Floor/Below (Focus is subterranean), E = Earth's surface (Epicentre is above)",
        explanation: "**F**ocus = deep in the **F**ault underground; **E**picentre = on **E**arth's surface directly above it.",
      },
      {
        topic: "Logarithmic Scale Jumps",
        device: "10× Shake, 32× Energy (+1.0) · 100× Shake, 1,000× Energy (+2.0)",
        explanation: "Memorise both pairs so you never mix wave amplitude (10×) with energy release (≈ 32× / 1,000×).",
      },
      {
        topic: "Earthquake Safety Action",
        device: "Drop, Cover, Hold On!",
        explanation: "**Drop** to hands and knees, take **Cover** under a sturdy desk away from windows, and **Hold On** until shaking stops.",
      },
      {
        topic: "Earthquake Management",
        device: "The 3 Ps — Predict (can't pinpoint), Protect (build strong), Prepare (drill & kit)",
        explanation: "Use all three Ps in management essays—and explain why Protect + Prepare carry far more weight than Predict.",
      },
    ],
    realWorld: [
      {
        emoji: "🏔️",
        title: "Saturday 11:56 am — How Timing Saved Thousands in Nepal",
        detail: "Over 7,000 Nepalese schools collapsed or suffered severe damage during the 2015 quake. Because Saturday is Nepal's weekly school holiday and many farmers were outdoors at midday, hundreds of thousands of children escaped being trapped inside classrooms.",
      },
      {
        emoji: "🇸🇬",
        title: "Singapore's Operation Lionheart in Nepal",
        detail: "Within hours of the April 2015 quake, Singapore deployed SCDF's 55-strong Operation Lionheart urban search-and-rescue contingent alongside SAF medical and C-130 airlift teams to deliver relief supplies and treat injured villagers.",
      },
      {
        emoji: "🏗️",
        title: "Taipei 101's Giant 660-Tonne Steel Pendulum",
        detail: "Suspended between the 87th and 92nd floors of Taipei 101 in earthquake-prone Taiwan hangs a golden 660-tonne steel sphere (a tuned mass damper) that swings opposite to earthquake tremors and typhoon gusts, cutting building sway by up to 40%.",
      },
      {
        emoji: "🚅",
        title: "How Japan's Shinkansen Stopped Automatically",
        detail: "When P-wave sensors triggered Japan's Early Warning network in 2011, 27 high-speed Shinkansen bullet trains travelling up to 270 km/h applied emergency brakes automatically seconds before S-waves arrived—achieving zero derailments and zero passenger fatalities.",
      },
      {
        emoji: "🧱",
        title: "Low-Cost Timber Bands Saving Rural Himalayan Homes",
        detail: "After 2015, engineers showed Nepalese masons that tying stone-and-mud walls together with horizontal timber or reinforced-concrete 'ring beams' and lighter tin roofs adds little cost yet prevents deadly wall collapse.",
      },
    ],
    videos: [
      {
        title: "How Earthquakes Happen, Focus vs Epicentre & Logarithmic Magnitude",
        channel: "YouTube Search (Geography & Seismology)",
        url: "https://www.youtube.com/results?search_query=earthquake+focus+epicentre+moment+magnitude+mercalli+scale+GCSE+geography",
      },
      {
        title: "Nepal 2015 Gorkha Earthquake Case Study — Causes, Effects & Responses",
        channel: "YouTube Search (GCSE Geography)",
        url: "https://www.youtube.com/results?search_query=Nepal+2015+earthquake+case+study+primary+secondary+effects+responses+GCSE+geography",
      },
      {
        title: "How Earthquake-Proof Buildings Work: Base Isolation, Cross-Bracing & Dampers",
        channel: "YouTube Search (Engineering & Geography)",
        url: "https://www.youtube.com/results?search_query=how+earthquake+proof+buildings+work+base+isolation+cross+bracing+tuned+mass+damper",
      },
      {
        title: "Earthquake Early Warning Systems — P-Waves vs S-Waves Explained",
        channel: "YouTube Search (Earth Science)",
        url: "https://www.youtube.com/results?search_query=earthquake+early+warning+P+waves+S+waves+explained",
      },
    ],
    formulas: [
      { name: "Focus (Hypocentre)", formula: "Underground point on fault where rupture begins", note: "Shallow (< 70 km) causes much heavier surface shaking than deep (> 300 km)." },
      { name: "Epicentre", formula: "Surface point directly vertically above the focus", note: "Usually highest Mercalli intensity unless amplified elsewhere by soft sediment." },
      { name: "Magnitude Amplitude Rule", formula: "Amplitude ratio = {{10^(Delta M)}} (each +1.0 = 10× amplitude)", note: "+2.0 = 100× amplitude; +3.0 = 1,000× amplitude." },
      { name: "Magnitude Energy Rule", formula: "Energy ratio ≈ {{31.6^(Delta M)}} (+1.0 ≈ 32× · +2.0 = 1,000×)", note: "Exact formula: 10^(1.5 × ΔM)." },
      { name: "Modified Mercalli Scale", formula: "Roman numerals I (not felt) to XII (total destruction)", note: "Subjective local shaking & damage — varies by site." },
      { name: "P-wave vs S-wave Warning Gap", formula: "{{t_warning = d / v_S - d / v_P}}", note: "P-waves ≈ 6 km/s (fastest); destructive S-waves ≈ 3.5 km/s." },
      { name: "Nepal 2015 Key Stats", formula: "25 Apr 2015 · M7.8 · focus ≈ 8–15 km · ≈ 9,000 dead · 3.5M homeless · ≈ $5B", note: "Indian–Eurasian collision margin (~4.5 cm/yr)." },
      { name: "Primary vs Secondary Effects", formula: "Primary = direct shaking; Secondary = knock-on hazards triggered afterward", note: "Nepal secondary: Everest/Langtang avalanches, road landslides, $5B/GDP hit." },
      { name: "Immediate vs Long-Term Responses", formula: "Immediate = hours–weeks (save lives); Long-Term = months–years ('Build Back Better')", note: "SAR/tents/water vs building codes/mason training/heritage restoration." },
      { name: "The 3 Ps Framework", formula: "Predict (probabilities/EEW only) · Protect (aseismic design) · Prepare (drills/kits)", note: "Exact earthquake date/time prediction remains impossible." },
    ],
  },
};
