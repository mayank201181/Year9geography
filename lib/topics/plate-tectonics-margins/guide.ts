import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "plate-tectonics-margins",
  title: "Earth's Structure & Plate Boundaries",
  strand: "Risky World",
  icon: "🌐",
  summary: "Journey inside Earth's four layers, see what drives tectonic plates, and decode all four plate boundaries plus the Pacific Ring of Fire.",
  intro:
    "Earth's solid surface feels permanent beneath our feet, yet it is cracked into giant slabs of rock drifting at roughly the speed your fingernails grow. Those slow centimetres per year build the Himalayas, split Iceland in two, and explain why Japan faces megathrust quakes while Hawaii erupts in the middle of an ocean. Master Earth's structure and the four plate margins, and almost every tectonic hazard on the planet falls into place.",
  guide: [
    // =========================================================================
    // SECTION 1: Inside the Earth & Why Tectonic Plates Move
    // =========================================================================
    {
      id: "earths-structure-movement",
      heading: "Inside the Earth & Why Tectonic Plates Move",
      discovery: {
        problem:
          "Earth's inner core is hotter than the surface of the Sun (around 5,500 °C), yet iron melts at just 1,538 °C at the surface. Why hasn't the inner core melted into liquid, and why does oceanic crust sink beneath continental crust even though oceanic crust is much thinner?",
        idea:
          "Crushing pressure from over 5,000 km of overlying rock squeezes the iron-nickel atoms in the inner core so tightly together that they stay solid despite extreme heat. Near the surface, thickness does not decide what sinks — **density** does! Thin basaltic oceanic crust (≈ 3.0 g/cm³) is denser than thick granitic continental crust (≈ 2.7 g/cm³), so whenever they collide, the oceanic slab sinks.",
      },
      body:
        "Geographers divide Earth into **four concentric layers** from the centre outwards:\n\n" +
        "| Layer | Depth / Thickness | State & Composition | Approx. Temperature |\n" +
        "|---|---|---|---|\n" +
        "| **Inner core** | Radius ≈ 1,220 km (centre ≈ 6,370 km deep) | Solid iron & nickel (kept solid by immense pressure) | 5,000–6,000 °C |\n" +
        "| **Outer core** | ≈ 2,200 km thick | Liquid iron & nickel (generates Earth's magnetic field) | 4,000–5,000 °C |\n" +
        "| **Mantle** | ≈ 2,900 km thick | Silicate rock; mostly solid, flows slowly like warm toffee over millions of years; upper semi-molten zone = **asthenosphere** | 1,000–3,700 °C |\n" +
        "| **Crust** | 5–70 km thick | Thin brittle outer shell; forms the **lithosphere** together with the rigid uppermost mantle | 0–1,000 °C |\n\n" +
        "### Oceanic Crust vs Continental Crust\n\n" +
        "The lithosphere is broken into major and minor **tectonic plates** (such as the Pacific, Eurasian, Indian, Nazca, and North American plates). Two very different types of crust sit on top of those plates:\n\n" +
        "| Property | Oceanic Crust | Continental Crust |\n" +
        "|---|---|---|\n" +
        "| **Thickness** | Thin (5–10 km) | Thick (30–70 km, average ≈ 35 km) |\n" +
        "| **Density** | Denser (≈ 3.0 g/cm³) | Less dense / more buoyant (≈ 2.7 g/cm³) |\n" +
        "| **Main rock** | Dark basalt | Lighter granite |\n" +
        "| **Age** | Young (< 200 million years) | Ancient (up to 4 billion years) |\n" +
        "| **Can it subduct?** | Yes — constantly created at ridges and destroyed at trenches | No — too buoyant to sink into the mantle |\n\n" +
        "### Why Do Tectonic Plates Move?\n\n" +
        "Plates travel at **1 to 15 cm per year** driven by three linked engines powered ultimately by Earth's internal heat (especially **radioactive decay** in the core and mantle):\n\n" +
        "1. **Mantle convection currents:** Hotter, less dense mantle rock rises slowly toward the lithosphere, spreads sideways, cools, becomes denser, and sinks back down.\n" +
        "2. **Ridge push:** At constructive mid-ocean ridges, hot upwelling magma creates an elevated ridge. As newly formed oceanic lithosphere cools and thickens, gravity causes it to slide downhill away from the ridge.\n" +
        "3. **Slab pull:** At destructive subduction zones, old, cold, dense oceanic crust sinks steeply into the mantle, pulling the rest of the trailing tectonic plate behind it. Modern geologists recognise **slab pull** as the single strongest driving force behind plate motion.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Earth's four layers alongside ridge push, convection currents, and slab pull driving plate motion">` +
        `<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>` +
        `<text x="140" y="22" font-size="13" font-weight="800" text-anchor="middle" fill="var(--ink)">Earth's Four Layers</text>` +
        `<circle cx="135" cy="135" r="92" fill="var(--brand)" opacity="0.22" stroke="var(--brand)" stroke-width="2.5"/>` +
        `<circle cx="135" cy="135" r="82" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5"/>` +
        `<circle cx="135" cy="135" r="46" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>` +
        `<circle cx="135" cy="135" r="22" fill="var(--accent)" stroke="var(--ink)" stroke-width="1.2"/>` +
        `<line x1="135" y1="45" x2="232" y2="45" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<text x="236" y="49" font-size="10.5" font-weight="700" fill="var(--ink)">Crust (5–70 km)</text>` +
        `<line x1="185" y1="78" x2="232" y2="78" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<text x="236" y="82" font-size="10.5" font-weight="700" fill="var(--ink)">Mantle (2,900 km)</text>` +
        `<line x1="170" y1="122" x2="232" y2="122" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<text x="236" y="126" font-size="10.5" font-weight="700" fill="var(--ink)">Outer Core (liquid)</text>` +
        `<line x1="145" y1="145" x2="232" y2="165" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<text x="236" y="169" font-size="10.5" font-weight="700" fill="var(--ink)">Inner Core (solid)</text>` +
        `<line x1="342" y1="26" x2="342" y2="232" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>` +
        `<text x="452" y="22" font-size="13" font-weight="800" text-anchor="middle" fill="var(--ink)">Plate-Driving Forces</text>` +
        `<rect x="354" y="96" width="194" height="122" rx="8" fill="var(--bad-soft)" stroke="var(--line)"/>` +
        `<path d="M 358 96 L 400 72 L 484 96 L 516 176 L 502 182 L 474 106 L 400 84 L 358 106 Z" fill="var(--brand)" opacity="0.85"/>` +
        `<path d="M 484 94 L 548 94 L 548 112 L 488 112 Z" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.2"/>` +
        `<path d="M 400 198 C 392 162, 392 135, 400 108" fill="none" stroke="var(--bad)" stroke-width="2.2"/>` +
        `<polygon points="400,102 395,112 405,112" fill="var(--bad)"/>` +
        `<path d="M 412 114 C 440 116, 456 126, 464 166" fill="none" stroke="var(--bad)" stroke-width="2" stroke-dasharray="4 3"/>` +
        `<polygon points="466,172 459,163 469,161" fill="var(--bad)"/>` +
        `<text x="402" y="64" font-size="10" font-weight="800" text-anchor="middle" fill="var(--brand)">Ridge Push</text>` +
        `<text x="434" y="156" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">Convection</text>` +
        `<text x="515" y="198" font-size="10" font-weight="800" text-anchor="middle" fill="var(--ink)">Slab Pull</text>` +
        `<text x="452" y="236" font-size="10" text-anchor="middle" fill="var(--ink-2)">Slab pull &amp; ridge push work with mantle convection</text>` +
        `</svg>`,
      diagramCaption: "Earth's four internal layers (left) and the three linked forces moving tectonic plates across the asthenosphere (right).",
      workedExamples: [
        {
          title: "Comparing Oceanic & Continental Crust",
          problem:
            "A rock core drilled from the floor of the Pacific Ocean is 80 million years old, made of basalt, and has a density of 3.0 g/cm³. Explain why this crust will eventually disappear, whereas 3-billion-year-old granite in Canada remains at the surface.",
          steps: [
            "Identify the two crust types: Pacific basalt = **oceanic crust** (thin, ≈ 3.0 g/cm³); Canadian granite = **continental crust** (thick, ≈ 2.7 g/cm³).",
            "Compare buoyancy: because oceanic crust is denser than continental crust (and becomes even denser as it cools with age), it sinks (**subducts**) back into the mantle at destructive margins.",
            "Conclude why ages differ: oceanic crust is continuously recycled every ~200 million years, whereas buoyant continental crust never subducts and can survive for billions of years.",
          ],
          answer: "Oceanic crust is denser (≈ 3.0 g/cm³) so it subducts and is recycled in under 200 million years; buoyant continental crust (≈ 2.7 g/cm³) stays at the surface for billions of years.",
          yourTurn: {
            question: "Which type of crust is denser and can subduct back into the mantle: oceanic or continental?",
            answer: { type: "text", accept: ["oceanic", "oceanic crust"], display: "oceanic crust" },
            solution: "Oceanic crust is denser (≈ 3.0 g/cm³, basaltic) than continental crust (≈ 2.7 g/cm³, granitic), so oceanic crust subducts into the mantle.",
          },
        },
        {
          title: "Plate Movement Over Geological Time",
          problem:
            "The Atlantic Ocean widens by an average of 2.5 cm per year as the North American and Eurasian plates move apart. How many kilometres wider does the Atlantic become in 4 million years?",
          steps: [
            "Multiply annual rate by time: {{2.5 * 4000000 = 10000000}} cm.",
            "Convert centimetres to metres (divide by 100): {{10000000 / 100 = 100000}} m.",
            "Convert metres to kilometres (divide by 1,000): {{100000 / 1000 = 100}} km.",
          ],
          answer: "100 km",
          yourTurn: {
            question: "If two plates move apart at 4 cm per year, how many kilometres wider does the ocean become in 5 million years?",
            answer: { type: "number", value: 200, display: "200 km" },
            solution: "4 cm/yr × 5,000,000 yr = 20,000,000 cm = 200,000 m = 200 km.",
          },
        },
      ],
      keyPoints: [
        "Earth has four main layers: solid **inner core**, liquid **outer core**, semi-solid **mantle** (with a ductile **asthenosphere**), and brittle **crust**.",
        "The **lithosphere** (crust + rigid upper mantle) is fractured into moving tectonic plates.",
        "**Oceanic crust** is thin (5–10 km), dense (≈ 3.0 g/cm³), young (<200 Myr), basaltic, and subducts; **continental crust** is thick (30–70 km), less dense (≈ 2.7 g/cm³), ancient, granitic, and buoyant.",
        "Plates are driven by **slab pull** (strongest force), **ridge push**, and **mantle convection currents** powered by internal radioactive decay.",
      ],
      whyItWorks:
        "Heat from radioactive decay inside Earth must escape outward. Because rock conducts heat poorly, the mantle transfers heat by slow convective flow while cold, dense oceanic slabs sink under gravity at trenches—turning Earth's interior into a giant heat engine.",
      strategies: [
        "Link **density → subduction → age**: denser oceanic crust sinks, which is why no oceanic floor is older than ~200 million years.",
        "In exam answers on *why plates move*, name **all three forces** (convection currents, ridge push, slab pull) and state clearly that **slab pull** is the strongest.",
        "Check units carefully in plate-speed calculations: 1 km = 100,000 cm, so `cm/yr × Myr ÷ 0.1`? Easier: `1 cm/yr for 1 million years = 10 km`!",
      ],
      thinkDeeper:
        "Using the shortcut `1 cm/yr × 1 million years = 10 km`, explain why the Pacific Plate (bordered by huge subduction zones and moving at ~8–10 cm/yr) travels much faster than the African Plate (~2 cm/yr), which has almost no subducting slab attached to it.",
    },

    // =========================================================================
    // SECTION 2: Constructive (Divergent) & Conservative (Transform) Margins
    // =========================================================================
    {
      id: "constructive-conservative",
      heading: "Constructive (Divergent) & Conservative (Transform) Margins",
      discovery: {
        problem:
          "Iceland has both earthquakes and dramatic lava fountains, while California's San Andreas Fault produces devastating earthquakes yet has ZERO volcanoes along the fault. Why does one boundary erupt magma while the other never does?",
        idea:
          "In Iceland, the North American and Eurasian plates are **pulling apart** (constructive margin), lowering pressure on the hot mantle below so magma rises and erupts. Along the San Andreas Fault, plates **slide sideways** past each other (conservative margin): no crust sinks to melt, and no gap opens for magma to reach the surface!",
      },
      body:
        "A **plate margin** (or plate boundary) is the zone where two tectonic plates meet. The first two types either **create** new crust or **conserve** existing crust.\n\n" +
        "### 1. Constructive (Divergent) Margins — Plates Move Apart\n\n" +
        "- **Process:** Two plates diverge (pull apart). As the lithosphere thins and fractures, pressure drops on the hot upper mantle beneath, triggering partial melting (**decompression melting**). Runny, low-viscosity basaltic magma rises through the gap, cools, and solidifies into brand-new oceanic crust.\n" +
        "- **Landforms created:** Submarine **mid-ocean ridges** (such as the **Mid-Atlantic Ridge**), volcanic islands where the ridge breaks sea level (**Iceland**, where the North American and Eurasian plates diverge), gentle-sloped **shield volcanoes**, and continental **rift valleys** where a continent begins splitting (e.g. the **East African Rift Valley**).\n" +
        "- **Hazards:** Frequent **effusive (non-explosive) volcanic eruptions** with fast-flowing runny lava, plus **shallow, usually mild-to-moderate earthquakes** caused by rocks stretching and faulting.\n\n" +
        "### 2. Conservative (Transform) Margins — Plates Slide Past Each Other\n\n" +
        "- **Process:** Two plates move horizontally past one another—either in opposite directions or in the same direction at different speeds. Crust is **neither created nor destroyed** (it is *conserved*).\n" +
        "- **Stick-slip mechanism:** Plate edges are jagged, not smooth. Intense **friction** locks the plates together while the interiors keep moving. Pressure builds over decades or centuries until the rock fractures and lurches suddenly forward.\n" +
        "- **Landforms & Examples:** Offset rivers, linear fault valleys, and fault scarps—best seen along the **San Andreas Fault** in California (Pacific Plate sliding northwest past the North American Plate at ~3–5 cm/yr).\n" +
        "- **Hazards:** **Shallow, powerful earthquakes** (such as San Francisco 1906, M7.9, and Loma Prieta 1989, M6.9). **NO volcanoes**, because no crust is subducted and no rift opens to let magma rise.\n\n" +
        "| Feature | Constructive (Divergent) | Conservative (Transform) |\n" +
        "|---|---|---|\n" +
        "| **Plate movement** | Apart (← →) | Sideways past each other (↑ ↓) |\n" +
        "| **Crust change** | New crust created | Neither created nor destroyed |\n" +
        "| **Volcanoes?** | Yes — gentle shield volcanoes (runny basaltic lava) | **NO volcanoes** |\n" +
        "| **Earthquakes?** | Shallow, usually small/moderate | Shallow, can be very powerful |\n" +
        "| **Key example** | Mid-Atlantic Ridge / Iceland; East African Rift | San Andreas Fault, California |",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side diagrams of a constructive divergent plate margin forming new crust and a conservative transform margin sliding horizontally">` +
        `<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>` +
        `<text x="140" y="22" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Constructive (Divergent)</text>` +
        `<rect x="16" y="38" width="248" height="58" fill="var(--info-soft)"/>` +
        `<rect x="16" y="138" width="248" height="72" fill="var(--bad-soft)"/>` +
        `<polygon points="16,96 112,96 130,80 130,138 16,138" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.3"/>` +
        `<polygon points="150,80 168,96 264,96 264,138 150,138" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.3"/>` +
        `<polygon points="130,138 134,82 140,72 146,82 150,138" fill="var(--bad)"/>` +
        `<line x1="92" y1="116" x2="48" y2="116" stroke="var(--brand)" stroke-width="3"/>` +
        `<polygon points="40,116 52,110 52,122" fill="var(--brand)"/>` +
        `<line x1="188" y1="116" x2="232" y2="116" stroke="var(--brand)" stroke-width="3"/>` +
        `<polygon points="240,116 228,110 228,122" fill="var(--brand)"/>` +
        `<line x1="140" y1="188" x2="140" y2="148" stroke="var(--bad)" stroke-width="2.5"/>` +
        `<polygon points="140,140 134,150 146,150" fill="var(--bad)"/>` +
        `<text x="140" y="64" font-size="10" font-weight="800" text-anchor="middle" fill="var(--ink)">Mid-Ocean Ridge</text>` +
        `<text x="140" y="200" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">Magma rises &amp; cools</text>` +
        `<text x="140" y="232" font-size="10" text-anchor="middle" fill="var(--ink-2)">Shield volcanoes + mild quakes (Iceland)</text>` +
        `<line x1="280" y1="18" x2="280" y2="238" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>` +
        `<text x="420" y="22" font-size="12.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Conservative (Transform — Map View)</text>` +
        `<rect x="304" y="42" width="112" height="162" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>` +
        `<rect x="424" y="42" width="112" height="162" rx="6" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>` +
        `<path d="M 420 42 L 417 70 L 423 98 L 417 126 L 423 154 L 419 204" fill="none" stroke="var(--bad)" stroke-width="2.5"/>` +
        `<line x1="360" y1="158" x2="360" y2="88" stroke="var(--brand)" stroke-width="3.5"/>` +
        `<polygon points="360,76 353,90 367,90" fill="var(--brand)"/>` +
        `<line x1="480" y1="88" x2="480" y2="158" stroke="var(--ink)" stroke-width="3.5"/>` +
        `<polygon points="480,170 473,156 487,156" fill="var(--ink)"/>` +
        `<circle cx="420" cy="122" r="10" fill="none" stroke="var(--bad)" stroke-width="2"/>` +
        `<circle cx="420" cy="122" r="18" fill="none" stroke="var(--bad)" stroke-width="1.2" stroke-dasharray="3 3"/>` +
        `<text x="360" y="182" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">Pacific Plate</text>` +
        `<text x="480" y="68" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">N. American</text>` +
        `<text x="420" y="232" font-size="10" text-anchor="middle" fill="var(--ink-2)">Friction → quakes only, NO volcanoes</text>` +
        `</svg>`,
      diagramCaption: "Constructive margins pull apart to build new crust and shield volcanoes (left); conservative margins grind sideways with friction and no volcanism (right).",
      workedExamples: [
        {
          title: "Explaining Earthquakes on the San Andreas Fault",
          problem:
            "Explain how earthquakes happen at a conservative plate margin such as the San Andreas Fault, and state why volcanoes do not form there. (4 marks)",
          steps: [
            "**Movement:** Two plates (Pacific and North American) slide horizontally past each other in opposite directions or at different speeds.",
            "**Friction & Pressure:** The rough edges lock together due to friction, causing stress and pressure to build up over many years.",
            "**Sudden Release:** When stress exceeds the rock's strength, the plates jolt forward suddenly, releasing stored energy as seismic waves (a shallow earthquake).",
            "**No Volcanoes:** Because crust is neither subducted into the mantle nor pulled apart, no magma rises to the surface, so volcanoes do not occur.",
          ],
          answer: "Plates slide past and lock through friction; built-up pressure releases suddenly as seismic waves. No subduction or rifting occurs, so no magma rises and no volcanoes form.",
          yourTurn: {
            question: "At which type of plate margin is crust neither created nor destroyed, producing earthquakes but NO volcanoes?",
            answer: { type: "text", accept: ["conservative", "conservative margin", "transform", "transform margin"], display: "conservative" },
            solution: "At a conservative (transform) plate margin, plates slide horizontally past each other—crust is conserved, friction triggers earthquakes, and no volcanoes form.",
          },
        },
        {
          title: "Tracking New Crust Formation in Iceland",
          problem:
            "At the Mid-Atlantic Ridge in Iceland, the North American and Eurasian plates move apart at 2.0 cm/year. How wide a strip of brand-new basaltic rock forms across the rift over 10,000 years (in metres)?",
          steps: [
            "Total widening in cm = {{2.0 * 10000 = 20000}} cm.",
            "Convert cm to metres by dividing by 100: {{20000 / 100 = 200}} m.",
            "Note that this 200 m of new crust is split roughly equally (100 m added to each plate edge) as magma fills the central rift.",
          ],
          answer: "200 m",
          yourTurn: {
            question: "If a constructive ridge spreads at 3 cm/year, how many metres of new crust form in 5,000 years?",
            answer: { type: "number", value: 150, display: "150 m" },
            solution: "3 cm/yr × 5,000 yr = 15,000 cm = 150 m.",
          },
        },
      ],
      keyPoints: [
        "**Constructive (divergent)** margins pull plates apart; rising basaltic magma cools to form new oceanic crust, mid-ocean ridges (Mid-Atlantic Ridge), rift valleys (East African Rift), and gentle shield volcanoes.",
        "**Conservative (transform)** margins slide plates sideways past each other (San Andreas Fault); crust is neither created nor destroyed.",
        "Friction at conservative margins creates a **stick-slip** cycle that releases shallow, powerful earthquakes—with **NO volcanoes**.",
        "Remember: two plates moving in the *same* direction at *different speeds* still form a conservative margin!",
      ],
      whyItWorks:
        "Melting rock requires either extra heat, added water, or lower pressure. Pulling plates apart lowers pressure above hot mantle rock (decompression melting → magma at constructive margins). Sliding plates sideways keeps pressure unchanged and adds no water, so mantle rock stays solid and volcanoes never appear.",
      strategies: [
        "Decode the name: **Constructive** *constructs* new crust; **Conservative** *conserves* crust (no creation, no destruction).",
        "Always check the **volcano test**: if a case study has earthquakes *and* gentle runny basaltic lava, think constructive; if it has fierce shallow quakes and *no* volcanoes on a strike-slip fault, think conservative.",
      ],
      thinkDeeper:
        "Iceland sits on a constructive margin *and* above a mantle hotspot. Why does Iceland stick up above the Atlantic Ocean as dry land, whereas almost the entire rest of the 16,000 km Mid-Atlantic Ridge stays 2,500 m underwater?",
    },

    // =========================================================================
    // SECTION 3: Destructive (Convergent) & Collision Margins
    // =========================================================================
    {
      id: "destructive-collision",
      heading: "Destructive (Convergent) & Collision Margins",
      discovery: {
        problem:
          "The Andes in South America are packed with explosive volcanoes like Cotopaxi, whereas the Himalayas in Asia are even taller yet have NO active volcanoes at all. Both mountain chains formed where two plates crashed head-on. What is the crucial difference?",
        idea:
          "In the Andes, a dense **oceanic** plate (Nazca) sinks beneath a **continental** plate (South American) — a **destructive subduction margin** where water from the sinking slab melts the mantle to feed explosive volcanoes. In the Himalayas, **two buoyant continental plates** (Indian & Eurasian) crash — a **collision margin** where neither plate can subduct, so crust crumples upward with fierce quakes but no volcanoes!",
      },
      body:
        "When two plates move *towards* each other (converge), the outcome depends entirely on which types of crust meet.\n\n" +
        "### 1. Destructive (Convergent Subduction) Margins\n\n" +
        "Here a **denser oceanic plate** meets a **less dense continental plate** (e.g. **Nazca Plate** subducting under the **South American Plate**, or **Pacific Plate** under the Eurasian/Okhotsk Plate in Japan):\n\n" +
        "1. **Subduction & Ocean Trench:** Gravity pulls the heavier oceanic crust down into the mantle (**subduction**), bending the seafloor into a deep V-shaped **ocean trench** (e.g. Peru-Chile Trench, Japan Trench, Mariana Trench).\n" +
        "2. **Melting & Composite Volcanoes:** As the wet oceanic slab descends into hot mantle rock, trapped seawater is squeezed out, lowering the mantle's melting point (**flux melting**). Friction adds extra heat. Thick, sticky, silica-rich (**viscous**) magma rises through the continental crust, trapping gas bubbles until it erupts violently to build steep-sided **composite volcanoes (stratovolcanoes)**.\n" +
        "3. **Fold Mountains:** Sediment scraped off the ocean floor and the crumpled edge of the continental plate buckle upward into **fold mountains** (e.g. the Andes).\n" +
        "4. **Powerful Earthquakes:** Friction as the subducting slab grinds past the overriding plate along the angled **Benioff zone** locks and snaps to trigger Earth's largest **megathrust earthquakes** (shallow to deep, up to M9.0+).\n\n" +
        "*(Note: When two **oceanic** plates converge, the older, denser oceanic plate subducts beneath the younger one, forming a deep ocean trench and a curved **volcanic island arc** such as Japan, Indonesia, or the Mariana Islands.)*\n\n" +
        "### 2. Collision Margins — Continental Meets Continental\n\n" +
        "When **two continental plates** move towards each other (e.g. the **Indian Plate** colliding with the **Eurasian Plate** at ~4.5 cm/yr):\n\n" +
        "- **No Subduction:** Both plates have low density (≈ 2.7 g/cm³) and great thickness, so neither can sink into the mantle.\n" +
        "- **Fold Mountains:** Instead, ancient ocean-floor sediments trapped between them and both continental edges buckle, fold, and thrust skyward, building Earth's highest **fold mountains** — the **Himalayas** (still rising by a few millimetres every year!).\n" +
        "- **Hazards:** Intense crustal compression creates frequent, devastating **shallow earthquakes** (such as **Nepal 2015**, M7.8), but **NO active volcanoes** because no wet oceanic crust subducts to melt the mantle.\n\n" +
        "| Feature | Destructive (Oceanic + Continental) | Collision (Continental + Continental) |\n" +
        "|---|---|---|\n" +
        "| **Subduction?** | Yes — denser oceanic plate sinks | **No** — both plates are too buoyant |\n" +
        "| **Ocean trench?** | Yes (e.g. Peru-Chile Trench) | No |\n" +
        "| **Fold mountains?** | Yes (e.g. Andes) | Yes, towering (e.g. Himalayas, Alps) |\n" +
        "| **Volcanoes?** | Yes — violent **composite** volcanoes | **NO active volcanoes** |\n" +
        "| **Earthquakes?** | Powerful, shallow to deep (megathrust) | Powerful, shallow-to-intermediate |",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-sections comparing a destructive oceanic-continental subduction margin with a continental-continental collision margin">` +
        `<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>` +
        `<text x="145" y="20" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">Destructive (Subduction)</text>` +
        `<rect x="14" y="42" width="106" height="44" fill="var(--info-soft)"/>` +
        `<rect x="14" y="138" width="262" height="72" fill="var(--bad-soft)"/>` +
        `<path d="M 14 86 L 94 86 L 166 190 L 146 200 L 82 104 L 14 104 Z" fill="var(--brand)" opacity="0.88"/>` +
        `<path d="M 106 88 L 154 76 L 178 46 L 202 76 L 276 76 L 276 138 L 136 138 Z" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.3"/>` +
        `<polygon points="168,76 178,42 188,76" fill="var(--bad)" opacity="0.85"/>` +
        `<path d="M 178 148 C 174 118, 178 96, 178 76" fill="none" stroke="var(--bad)" stroke-width="3"/>` +
        `<path d="M 174 38 C 166 28, 186 24, 198 30" fill="none" stroke="var(--ink-2)" stroke-width="2" stroke-dasharray="3 2"/>` +
        `<line x1="30" y1="95" x2="72" y2="95" stroke="var(--surface)" stroke-width="2.5"/>` +
        `<polygon points="80,95 70,90 70,100" fill="var(--surface)"/>` +
        `<line x1="256" y1="106" x2="218" y2="106" stroke="var(--ink)" stroke-width="2.5"/>` +
        `<polygon points="210,106 220,101 220,111" fill="var(--ink)"/>` +
        `<text x="108" y="64" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--info)">Trench</text>` +
        `<text x="226" y="54" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--bad)">Composite Volcano</text>` +
        `<text x="148" y="232" font-size="9.8" text-anchor="middle" fill="var(--ink-2)">Oceanic sinks → trench, Andes &amp; volcanoes</text>` +
        `<line x1="286" y1="18" x2="286" y2="238" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>` +
        `<text x="424" y="20" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">Collision (Continental + Continental)</text>` +
        `<rect x="298" y="138" width="248" height="72" fill="var(--bad-soft)"/>` +
        `<path d="M 298 86 L 382 86 L 406 54 L 424 38 L 444 58 L 464 86 L 546 86 L 546 138 L 448 164 L 398 164 L 298 138 Z" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.4"/>` +
        `<path d="M 424 38 L 414 162" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4 3"/>` +
        `<line x1="316" y1="112" x2="366" y2="112" stroke="var(--brand)" stroke-width="3"/>` +
        `<polygon points="376,112 364,106 364,118" fill="var(--brand)"/>` +
        `<line x1="528" y1="112" x2="478" y2="112" stroke="var(--brand)" stroke-width="3"/>` +
        `<polygon points="468,112 480,106 480,118" fill="var(--brand)"/>` +
        `<text x="424" y="28" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Fold Mountains (Himalayas)</text>` +
        `<text x="342" y="100" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Indian Plate</text>` +
        `<text x="504" y="100" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Eurasian</text>` +
        `<text x="424" y="232" font-size="9.8" text-anchor="middle" fill="var(--ink-2)">No subduction → quakes, NO volcanoes</text>` +
        `</svg>`,
      diagramCaption: "Destructive subduction (left) recycles oceanic crust and fuels explosive volcanoes; continental collision (right) builds fold mountains with earthquakes but no volcanoes.",
      workedExamples: [
        {
          title: "Sequencing Processes at a Destructive Margin",
          problem:
            "Explain how a composite volcano and an ocean trench form where the Nazca Plate meets the South American Plate. (4 marks)",
          steps: [
            "**Density & Subduction:** The denser oceanic Nazca Plate moves towards and subducts beneath the less dense continental South American Plate.",
            "**Ocean Trench:** Where the oceanic slab bends downward into the mantle, a deep **ocean trench** (Peru-Chile Trench) forms on the seafloor.",
            "**Magma Generation:** Water released from the sinking slab lowers the mantle's melting point (flux melting) and friction heats rock, producing thick, viscous, gas-rich magma.",
            "**Volcano Formation:** Magma is less dense than surrounding rock, so it rises through cracks in the continental crust and erupts explosively in alternating ash and lava layers, forming steep **composite volcanoes** in the Andes.",
          ],
          answer: "The denser oceanic Nazca plate subducts under the continental South American plate (forming a trench); water and heat melt mantle rock into viscous magma that rises and erupts explosively as composite volcanoes.",
          yourTurn: {
            question: "What name is given to the deep seafloor landform created where a denser oceanic plate bends downward into the mantle?",
            answer: { type: "text", accept: ["ocean trench", "trench", "deep ocean trench", "oceanic trench"], display: "ocean trench" },
            solution: "An ocean trench (such as the Peru-Chile Trench or Mariana Trench) forms where the subducting oceanic plate bends downward.",
          },
        },
        {
          title: "Distinguishing Destructive vs Collision",
          problem:
            "A tectonic margin features 7,000 m fold mountains and devastating M7.8 earthquakes, yet geologists record zero active volcanoes and no deep ocean trench. Identify the margin type and explain both missing features.",
          steps: [
            "Identify the margin: **collision margin** (two continental plates converging, e.g. Indian and Eurasian plates).",
            "Explain the missing trench: neither continental plate is dense enough to subduct, so the crust crumples upward instead of plunging down into a trench.",
            "Explain the missing volcanoes: without a wet subducting oceanic slab to trigger mantle melting, magma chambers do not feed active surface volcanoes.",
          ],
          answer: "Collision margin: two equally buoyant continental plates cannot subduct (so no trench and no flux melting to feed volcanoes), forcing crust upward into fold mountains.",
          yourTurn: {
            question: "Which plate margin forms the Himalayas, producing powerful earthquakes and fold mountains but NO active volcanoes?",
            answer: { type: "text", accept: ["collision", "collision margin", "collision boundary", "continental collision"], display: "collision margin" },
            solution: "A collision margin occurs where two continental plates (Indian and Eurasian) collide, buckling upward into the Himalayas without subduction or volcanoes.",
          },
        },
      ],
      keyPoints: [
        "At a **destructive margin**, denser oceanic crust subducts beneath less dense continental crust → **ocean trench**, **fold mountains**, **composite volcanoes**, and shallow-to-deep **megathrust earthquakes**.",
        "At a **collision margin**, two buoyant continental plates crumple upward into towering **fold mountains** (Himalayas) → **powerful earthquakes**, **NO volcanoes**, **NO ocean trench**.",
        "Earthquakes happen at **all four** plate margins; volcanoes occur only at **constructive** and **destructive** margins (plus intraplate hotspots).",
        "Subduction magma is **viscous** (sticky, silica-rich, gas-trapping), making destructive-margin volcanoes far more explosive than constructive shield volcanoes.",
      ],
      whyItWorks:
        "Water acts like salt on icy roads: just as salt lowers ice's melting point, seawater locked inside subducted oceanic minerals lowers the mantle's melting temperature by hundreds of degrees, creating magma right above the sinking slab—about 100–200 km inland from the trench.",
      strategies: [
        "Never write \"the plates melt because they rub together\" as your only explanation—mention **subduction of denser oceanic crust** and **water/heat melting mantle rock** to earn top marks.",
        "Use a 2-step flowchart for converging plates: *Is an oceanic plate involved?* Yes → **Destructive** (subduction + volcanoes). No, both continental → **Collision** (crumple up, no volcanoes).",
      ],
      thinkDeeper:
        "Why do the deepest earthquakes on Earth (up to ~700 km below the surface) happen *only* at destructive subduction zones and never at constructive or conservative boundaries?",
    },

    // =========================================================================
    // SECTION 4: Global Distribution of Earthquakes & Volcanoes
    // =========================================================================
    {
      id: "global-hazard-distribution",
      heading: "Global Distribution of Earthquakes & Volcanoes",
      discovery: {
        problem:
          "Over 75% of Earth's active volcanoes form a giant horseshoe around the Pacific Ocean—yet Kīlauea in Hawaii erupts almost non-stop right in the *middle* of the Pacific Plate, 3,500 km from the nearest plate boundary! How can both patterns be true at once?",
        idea:
          "The horseshoe (**Pacific Ring of Fire**) traces destructive and constructive plate margins encircling the Pacific Plate. Hawaii is an **anomaly** caused by a stationary **mantle-plume hotspot**: a rising column of superheated mantle rock burns a hole through the middle of the moving Pacific Plate like a blowtorch under a moving conveyor belt.",
      },
      body:
        "When geographers examine a world tectonic hazard map, they do not just say \"there are dots everywhere.\" Top exam answers use the **TEA** structure — **Trend, Evidence, Anomaly**:\n\n" +
        "### 1. Trend (Overall Pattern)\n\n" +
        "- Earthquakes and volcanoes are **unevenly distributed** across the globe. They cluster in **narrow, linear belts** along tectonic **plate margins**, leaving vast plate interiors (such as central Australia, Siberia, and eastern Brazil) mostly quiet.\n" +
        "- **Crucial difference:** Earthquakes occur along **all four** margin types (including the Himalayas and San Andreas Fault), whereas volcanoes are concentrated along **destructive** and **constructive** margins and are **absent** along conservative and collision margins.\n\n" +
        "### 2. Evidence (Named Regions & Numbers)\n\n" +
        "- **The Pacific Ring of Fire:** A 40,000 km horseshoe-shaped belt bordering the Pacific Ocean where the Pacific, Nazca, Cocos, and Philippine Sea plates meet surrounding plates. It contains **≈ 75% of the world's active volcanoes** (over 450) and experiences **≈ 80–90% of global earthquakes** — spanning Chile, Peru, Mexico, California, Alaska, Japan, the Philippines, Indonesia, and New Zealand.\n" +
        "- **Mid-ocean ridge belts:** A continuous line of mild earthquakes and submarine volcanoes runs down the centre of the Atlantic Ocean (**Mid-Atlantic Ridge**, surfacing at Iceland).\n" +
        "- **Alpide (Himalayan–Mediterranean) belt:** A broad collision zone stretching from southern Europe through Turkey and Iran to Nepal and Tibet — intense earthquakes, but volcanoes only where small oceanic slabs still subduct (e.g. Italy/Greece), NOT in the Himalayas.\n\n" +
        "### 3. Anomaly (Exceptions to the Rule — Hotspots)\n\n" +
        "- **Intra-plate hotspots** sit thousands of kilometres *inside* a tectonic plate, far from any boundary. A fixed column of abnormally hot mantle rock (**mantle plume**) rises from near the core–mantle boundary, melting the base of the overlying plate.\n" +
        "- **Hawaiian Islands chain:** As the Pacific Plate drifts northwest at ~8–10 cm/yr over the stationary Hawaiian hotspot, each volcano is carried off the plume and becomes extinct while a brand-new shield volcano grows above the plume. That is why **Hawaiʻi (Big Island)** in the southeast is actively erupting (Kīlauea, Mauna Loa), while **Kauaʻi** to the northwest is ~5 million years old, extinct, and deeply eroded!\n" +
        "- Other famous hotspots include **Yellowstone** (inside the North American Plate) and **Galápagos**.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified Pacific Ring of Fire map and Hawaiian mantle-plume hotspot island chain diagram">` +
        `<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>` +
        `<text x="155" y="20" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">Pacific Ring of Fire (Trend &amp; Evidence)</text>` +
        `<rect x="14" y="30" width="282" height="186" rx="8" fill="var(--info-soft)" stroke="var(--line)"/>` +
        `<path d="M 30 62 L 66 56 L 78 96 L 62 150 L 38 182 L 22 162 Z" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<path d="M 244 48 L 284 52 L 288 106 L 266 138 L 274 186 L 246 196 L 236 140 L 222 104 Z" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1"/>` +
        `<path d="M 78 190 C 66 146, 70 98, 92 66 C 122 44, 198 44, 232 76 C 254 106, 258 156, 244 192" fill="none" stroke="var(--bad)" stroke-width="4" stroke-dasharray="6 4"/>` +
        `<circle cx="78" cy="116" r="4" fill="var(--bad)"/>` +
        `<circle cx="96" cy="64" r="4" fill="var(--bad)"/>` +
        `<circle cx="155" cy="48" r="4" fill="var(--bad)"/>` +
        `<circle cx="228" cy="74" r="4" fill="var(--bad)"/>` +
        `<circle cx="250" cy="142" r="4" fill="var(--bad)"/>` +
        `<circle cx="156" cy="126" r="6" fill="var(--accent)" stroke="var(--bad)" stroke-width="2"/>` +
        `<text x="156" y="146" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--ink)">Hawaii Hotspot</text>` +
        `<text x="156" y="158" font-size="8.8" text-anchor="middle" fill="var(--ink-2)">(Intra-plate anomaly)</text>` +
        `<text x="48" y="114" font-size="9" font-weight="700" text-anchor="middle" fill="var(--ink)">Japan /</text>` +
        `<text x="48" y="125" font-size="9" font-weight="700" text-anchor="middle" fill="var(--ink)">Indonesia</text>` +
        `<text x="266" y="150" font-size="9" font-weight="700" text-anchor="middle" fill="var(--ink)">Andes</text>` +
        `<text x="155" y="232" font-size="9.8" text-anchor="middle" fill="var(--ink-2)">≈ 75% of volcanoes &amp; ≈ 80–90% of quakes</text>` +
        `<text x="430" y="20" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">Hotspot Conveyor Belt</text>` +
        `<rect x="312" y="30" width="234" height="186" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>` +
        `<rect x="312" y="126" width="234" height="90" rx="4" fill="var(--bad-soft)"/>` +
        `<rect x="312" y="96" width="234" height="30" fill="var(--brand)" opacity="0.75"/>` +
        `<path d="M 488 216 L 478 144 L 486 96 L 494 96 L 502 144 L 494 216 Z" fill="var(--bad)"/>` +
        `<polygon points="468,96 490,68 512,96" fill="var(--bad)"/>` +
        `<polygon points="416,96 432,78 448,96" fill="var(--ink-2)" opacity="0.65"/>` +
        `<polygon points="364,96 376,84 388,96" fill="var(--ink-2)" opacity="0.45"/>` +
        `<line x1="454" y1="111" x2="366" y2="111" stroke="var(--surface)" stroke-width="2.5"/>` +
        `<polygon points="356,111 368,105 368,117" fill="var(--surface)"/>` +
        `<text x="490" y="58" font-size="9" font-weight="800" text-anchor="middle" fill="var(--bad)">Active (0 Myr)</text>` +
        `<text x="432" y="70" font-size="8.8" font-weight="700" text-anchor="middle" fill="var(--ink-2)">Older</text>` +
        `<text x="376" y="78" font-size="8.8" font-weight="700" text-anchor="middle" fill="var(--ink-2)">Oldest</text>` +
        `<text x="410" y="182" font-size="9.5" font-weight="700" text-anchor="middle" fill="var(--bad)">Stationary Mantle Plume</text>` +
        `<text x="430" y="232" font-size="9.8" text-anchor="middle" fill="var(--ink-2)">Pacific Plate drifts NW over fixed plume</text>` +
        `</svg>`,
      diagramCaption: "Left: linear hazard belt around the Pacific Ring of Fire plus the Hawaiian anomaly. Right: how a fixed mantle plume builds an age-ordered chain of islands.",
      workedExamples: [
        {
          title: "Describing Global Hazard Distribution Using TEA",
          problem:
            "Describe the global distribution of earthquakes and volcanoes shown on a world tectonic map. (3 marks)",
          steps: [
            "**T — Trend:** Both earthquakes and volcanoes are unevenly distributed, forming narrow, linear belts mainly along tectonic plate margins.",
            "**E — Evidence:** The largest concentration is the Pacific Ring of Fire (≈ 75% of active volcanoes and ≈ 80–90% of earthquakes, including Japan, Indonesia, and Chile), alongside the Mid-Atlantic Ridge; however, collision zones like the Himalayas and conservative margins like the San Andreas Fault have earthquakes without volcanoes.",
            "**A — Anomaly:** Not all volcanoes lie on plate margins—intra-plate hotspots such as Hawaii in the middle of the Pacific Plate erupt over stationary mantle plumes.",
          ],
          answer: "Linear belts along plate margins (Trend), especially the Pacific Ring of Fire with ~75% of volcanoes and ~80–90% of quakes (Evidence), plus intra-plate hotspot anomalies like Hawaii far from boundaries (Anomaly).",
          yourTurn: {
            question: "Name the 40,000 km horseshoe-shaped belt around the Pacific Ocean that contains roughly 75% of the world's active volcanoes.",
            answer: { type: "text", accept: ["Pacific Ring of Fire", "Ring of Fire", "the Pacific Ring of Fire", "the Ring of Fire"], display: "Pacific Ring of Fire" },
            solution: "The Pacific Ring of Fire encircles the Pacific Ocean along plate boundaries and contains ~75% of active volcanoes and ~80–90% of earthquakes.",
          },
        },
        {
          title: "Calculating Pacific Plate Speed From the Hawaiian Chain",
          problem:
            "The extinct volcanic island of Kauaʻi lies about 500 km northwest of the active Hawaiian hotspot, and its volcanic rocks are 5 million years old. Estimate the average speed of the Pacific Plate in cm/year.",
          steps: [
            "Convert distance from km to cm: {{500 * 100000 = 50000000}} cm.",
            "Divide distance by time in years: {{50000000 / 5000000 = 10}} cm/year.",
            "Quick shortcut check: `km ÷ Myr ÷ 10` = {{500 / 5 / 10 = 10}} cm/year.",
          ],
          answer: "10 cm/year",
          yourTurn: {
            question: "An extinct hotspot island lies 360 km from an active mantle plume and is 4 million years old. What is the plate speed in cm/year?",
            answer: { type: "number", value: 9, display: "9" },
            solution: "360 km = 36,000,000 cm. Dividing by 4,000,000 years gives 9 cm/year.",
          },
        },
      ],
      keyPoints: [
        "Use **TEA (Trend, Evidence, Anomaly)** for every map-description question in Year 9 Geography.",
        "**Trend:** Tectonic hazards cluster in linear belts along plate margins rather than randomly across continents.",
        "**Evidence:** The **Pacific Ring of Fire** hosts ~75% of active volcanoes and ~80–90% of earthquakes; volcanoes are absent on conservative and collision margins.",
        "**Anomaly:** Stationary **mantle-plume hotspots** (e.g. **Hawaii**, Yellowstone) create intra-plate volcanoes far from plate margins and leave age-ordered island chains showing plate speed and direction.",
      ],
      whyItWorks:
        "Because tectonic stresses and melting are concentrated where rigid lithospheric plates tear apart, grind past, or plunge beneath one another, the edges of plates light up with hazards—while a deep mantle plume acts as a rare vertical shortcut straight through a plate's interior.",
      strategies: [
        "Never answer a distribution question with just \"on the coast\" or \"near oceans\"—name **plate margins**, the **Pacific Ring of Fire**, and a **specific anomaly (Hawaii)**.",
        "Spot the island-age clue: in a hotspot chain, the **youngest/active** volcano sits directly over the plume, and the line from youngest to oldest points in the **direction the plate is moving**.",
      ],
      thinkDeeper:
        "Singapore lies roughly 400–600 km east of the Sunda Subduction Trench in Sumatra (Indonesia). Why does Singapore almost never experience destructive earthquakes or volcanic eruptions directly, yet residents occasionally feel gentle swaying in tall HDB/condo towers?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Why is Earth's inner core solid even though it reaches ~5,500 °C?", back: "Immense overlying pressure from >5,000 km of rock forces the iron and nickel atoms tightly together into a solid." },
      { front: "What is the outer core made of, and what vital feature does it generate?", back: "Liquid iron and nickel; its swirling convective motion generates Earth's protective magnetic field." },
      { front: "What is the asthenosphere?", back: "The semi-molten, ductile upper layer of the mantle on which the rigid lithospheric tectonic plates slowly move." },
      { front: "What makes up the lithosphere?", back: "The brittle crust plus the rigid uppermost part of the mantle, fractured into tectonic plates." },
      { front: "Compare oceanic and continental crust (thickness, density, rock, age).", back: "Oceanic: 5–10 km, dense (~3.0 g/cm³), dark basalt, young (<200 Myr), subducts. Continental: 30–70 km, less dense (~2.7 g/cm³), granite, ancient (up to 4 Byr), buoyant." },
      { front: "Name the three forces that move tectonic plates and identify the strongest.", back: "Mantle convection currents, ridge push, and slab pull — with **slab pull** (sinking cold dense oceanic crust) recognised as the strongest." },
      { front: "What happens at a constructive (divergent) plate margin?", back: "Two plates move apart, magma rises to cool into new oceanic crust, forming mid-ocean ridges (Mid-Atlantic Ridge), rift valleys, shield volcanoes, and mild earthquakes." },
      { front: "What happens at a conservative (transform) plate margin?", back: "Two plates slide sideways past each other (e.g. San Andreas Fault). Crust is neither created nor destroyed; friction builds pressure → powerful shallow earthquakes, NO volcanoes." },
      { front: "What happens at a destructive (oceanic–continental) margin?", back: "Denser oceanic crust subducts under continental crust → deep ocean trench, fold mountains (Andes), viscous magma feeding explosive composite volcanoes, and powerful megathrust earthquakes." },
      { front: "What happens at a collision (continental–continental) margin?", back: "Two buoyant continental plates collide and crumple upward into fold mountains (e.g. Himalayas). Powerful shallow earthquakes occur, but NO volcanoes and NO ocean trench." },
      { front: "Which two plate margins produce NO active volcanoes?", back: "Conservative (transform) margins and continental collision margins." },
      { front: "What is the Pacific Ring of Fire?", back: "A 40,000 km horseshoe belt of plate boundaries around the Pacific Ocean containing ~75% of Earth's active volcanoes and ~80–90% of earthquakes." },
      { front: "How does a hotspot like Hawaii form volcanoes far from any plate margin?", back: "A stationary column of superheated mantle rock (mantle plume) burns through the interior of the moving Pacific Plate, creating an age-ordered chain of shield volcanoes." },
      { front: "In the Hawaiian island chain, why is Kauaʻi (NW) extinct while Big Island (SE) is active?", back: "The Pacific Plate drifts northwest over the fixed hotspot, carrying older islands away from the magma supply so they go extinct while new volcanoes grow in the southeast." },
      { front: "What does TEA stand for when describing a geographical distribution map?", back: "**T**rend (overall pattern), **E**vidence (named regions/figures), **A**nomaly (exceptions such as hotspots)." },
      { front: "Why does magma form above a subducting oceanic plate?", back: "Seawater squeezed out of the sinking oceanic slab lowers the melting point of the overlying mantle rock (flux melting), aided by heat and friction." },
    ],
    mustKnow: [
      "Name Earth's four layers in order, giving the state (solid/liquid/semi-solid) and key property of each.",
      "Compare oceanic crust and continental crust across thickness, density, rock type, age, and ability to subduct.",
      "Explain how mantle convection currents, ridge push, and slab pull drive tectonic plate motion.",
      "Draw and label cross-sections of constructive, conservative, destructive, and collision plate margins.",
      "State the exact hazards (earthquakes/volcanoes) and one named real-world example for every single plate margin.",
      "Explain *why* conservative and collision margins have powerful earthquakes but NO active volcanoes.",
      "Use the TEA framework (Trend, Evidence, Anomaly) to describe the global distribution of earthquakes and volcanoes.",
      "Explain how a stationary mantle-plume hotspot creates an age-ordered island chain like Hawaii.",
      "Calculate plate movement distances or plate speeds cleanly from cm/yr and millions of years.",
      "Distinguish between the lithosphere (rigid plates) and the asthenosphere (ductile upper mantle underneath).",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: The mantle is completely liquid lava that plates float on like boats.",
        right: "Write Instead ✅: The mantle is mostly solid silicate rock that flows very slowly over millions of years; rigid lithospheric plates move over the semi-molten, ductile asthenosphere.",
      },
      {
        wrong: "Never Write ❌: Continental crust sinks at destructive margins because it is heavier and thicker.",
        right: "Write Instead ✅: Oceanic crust subducts because it is **denser** (~3.0 g/cm³ basalt) than continental crust (~2.7 g/cm³ granite), even though oceanic crust is thinner.",
      },
      {
        wrong: "Never Write ❌: Volcanoes erupt at all four plate boundaries whenever plates hit or rub.",
        right: "Write Instead ✅: Earthquakes occur at all four margins, but volcanoes form only at **constructive** and **destructive** margins (plus intra-plate hotspots) — NOT at conservative or collision margins.",
      },
      {
        wrong: "Never Write ❌: Earthquakes and volcanoes are randomly spread across the continents.",
        right: "Write Instead ✅: They form narrow, linear belts along plate margins (especially the Pacific Ring of Fire), with rare intra-plate anomalies such as the Hawaiian hotspot.",
      },
      {
        wrong: "Never Write ❌: At a conservative margin, plates must move in opposite directions.",
        right: "Write Instead ✅: Conservative plates slide past each other either in opposite directions OR in the same direction at different speeds (e.g. along the San Andreas Fault).",
      },
      {
        wrong: "Never Write ❌: The inner core is liquid because it is the hottest part of Earth.",
        right: "Write Instead ✅: Despite temperatures of 5,000–6,000 °C, immense overlying pressure keeps the iron-nickel inner core **solid**; only the outer core is liquid.",
      },
      {
        wrong: "Never Write ❌: Hotspots move underneath stationary tectonic plates to make island chains.",
        right: "Write Instead ✅: The mantle plume hotspot stays essentially **stationary** while the overlying tectonic plate drifts across it like a conveyor belt.",
      },
    ],
    examMistakes: [
      "Confusing **destructive** (oceanic + continental → subduction + volcanoes) with **collision** (continental + continental → Himalayas, NO volcanoes).",
      "Forgetting to mention **density** when explaining why oceanic crust subducts beneath continental crust.",
      "Writing \"plates rub together and cause an earthquake\" without naming **friction**, **pressure build-up**, and **sudden release of seismic waves**.",
      "Omitting an **anomaly** (such as Hawaii) in a 3- or 4-mark \"Describe the global distribution\" question—costing the top TEA mark.",
      "Claiming Iceland or the Mid-Atlantic Ridge produces violent explosive composite volcanoes instead of runny-lava **shield** volcanoes.",
      "Mixing up the **lithosphere** (rigid plates) and **asthenosphere** (ductile upper mantle beneath).",
      "Forgetting unit conversions in plate-rate calculations (remember: `1 km = 100,000 cm`, so `1 cm/yr × 1 Myr = 10 km`).",
      "Listing vague examples like \"America\" instead of precise named locations such as the **San Andreas Fault (California)**, **Nazca–South American (Andes)**, or **Indian–Eurasian (Himalayas)**.",
    ],
    mnemonics: [
      {
        topic: "Describing Global Maps",
        device: "T-E-A (Trend, Evidence, Anomaly)",
        explanation: "Every map-distribution answer needs a **T**rend (linear belts on plate margins), **E**vidence (Pacific Ring of Fire, Mid-Atlantic Ridge, named countries), and an **A**nomaly (Hawaii hotspot).",
      },
      {
        topic: "Which Margins Have Volcanoes?",
        device: "C-D Erupts, C-C Shakes Only (Constructive & Destructive = Volcanoes; Conservative & Collision = NO Volcanoes)",
        explanation: "Volcanoes need either rifting (**C**onstructive) or subduction (**D**estructive). **C**onservative sliding and **C**ontinental **C**ollision shake violently with zero active volcanoes.",
      },
      {
        topic: "Oceanic vs Continental Crust",
        device: "B-O-D vs G-C-B (Basalt–Oceanic–Dense sinks; Granite–Continental–Buoyant stays)",
        explanation: "**B**asaltic **O**ceanic crust is **D**ense (~3.0 g/cm³) and dives down; **G**ranitic **C**ontinental crust is **B**uoyant (~2.7 g/cm³) and stays afloat.",
      },
      {
        topic: "Earth's Layers Inside-Out",
        device: "I-O-M-C (Inwards-Out: Inner solid, Outer liquid, Mantle toffee, Crust brittle)",
        explanation: "Solid **I**nner core → liquid **O**uter core → ductile **M**antle → brittle **C**rust.",
      },
    ],
    realWorld: [
      {
        emoji: "🇮🇸",
        title: "Swimming Between Two Plates in Iceland",
        detail: "At the Silfra Fissure in Þingvellir National Park, snorkellers can literally touch the North American Plate with one hand and the Eurasian Plate with the other as the constructive margin widens ~2 cm every year.",
      },
      {
        emoji: "🏔️",
        title: "Mount Everest Is Still Growing",
        detail: "Because the Indian Plate keeps ramming north into Eurasia at ~4.5 cm/year along the Himalayan collision margin, Mount Everest rises by roughly 4–5 mm per year—offset slightly by erosion and earthquakes.",
      },
      {
        emoji: "🌺",
        title: "A Brand-New Hawaiian Island Under the Sea",
        detail: "About 35 km southeast of Hawaii's Big Island, the submarine hotspot volcano Kamaʻehuakanaloa (formerly Lōʻihi) is steadily erupting 975 m below sea level and will emerge as the newest Hawaiian island in ~10,000–100,000 years.",
      },
      {
        emoji: "🌊",
        title: "Why Mariana Trench Is Deeper Than Everest Is Tall",
        detail: "Where ancient, extra-cold Pacific oceanic crust subducts steeply beneath the Mariana Plate, it drags the seafloor down to 10,984 m—over 2 km deeper than Mount Everest's height above sea level.",
      },
      {
        emoji: "🇸🇬",
        title: "Singapore's Shelter Inside the Sunda Plate",
        detail: "Singapore sits on the stable interior of the Sunda Plate ~500 km northeast of Sumatra's destructive trench—sparing it direct fault ruptures, though giant Sumatran megathrust quakes send low-frequency seismic waves that make tall towers sway.",
      },
    ],
    videos: [
      {
        title: "Plate Tectonics Explained — Earth's Layers, Convection & Slab Pull",
        channel: "YouTube Search (Geography & Geology)",
        url: "https://www.youtube.com/results?search_query=plate+tectonics+slab+pull+ridge+push+convection+currents+GCSE+geography",
      },
      {
        title: "The Four Plate Boundaries: Constructive, Destructive, Collision & Conservative",
        channel: "YouTube Search (GCSE Geography)",
        url: "https://www.youtube.com/results?search_query=four+plate+boundaries+constructive+destructive+collision+conservative+geography",
      },
      {
        title: "Pacific Ring of Fire & How the Hawaiian Hotspot Islands Formed",
        channel: "YouTube Search (Earth Science)",
        url: "https://www.youtube.com/results?search_query=Pacific+Ring+of+Fire+and+Hawaiian+hotspot+mantle+plume+explained",
      },
      {
        title: "Oceanic vs Continental Crust — Why Does Oceanic Crust Subduct?",
        channel: "YouTube Search (Geography)",
        url: "https://www.youtube.com/results?search_query=oceanic+vs+continental+crust+subduction+density+GCSE+geography",
      },
    ],
    formulas: [
      { name: "Inner Core", formula: "Solid Fe/Ni · radius ≈ 1,220 km · 5,000–6,000 °C", note: "Kept solid by extreme overlying pressure." },
      { name: "Outer Core", formula: "Liquid Fe/Ni · ≈ 2,200 km thick · 4,000–5,000 °C", note: "Generates Earth's magnetic field." },
      { name: "Mantle & Asthenosphere", formula: "≈ 2,900 km thick silicate rock; upper ductile zone = asthenosphere", note: "Mostly solid rock that creeps plastically over geological time." },
      { name: "Lithosphere", formula: "Crust + rigid uppermost mantle (divided into tectonic plates)", note: "Typically 70–150 km thick." },
      { name: "Oceanic Crust", formula: "5–10 km thick · ≈ 3.0 g/cm³ · basalt · < 200 Myr old", note: "Denser → subducts and is recycled." },
      { name: "Continental Crust", formula: "30–70 km thick · ≈ 2.7 g/cm³ · granite · up to 4 Byr old", note: "Less dense (buoyant) → cannot subduct." },
      { name: "Plate Displacement Rule", formula: "{{d = r * t}} (shortcut: 1 cm/yr × 1 Myr = 10 km)", note: "Convert cm to km by dividing by 100,000." },
      { name: "Constructive (Divergent) Margin", formula: "Plates move apart → new basaltic crust, ridge, shield volcanoes, mild quakes", note: "Examples: Mid-Atlantic Ridge, Iceland, East African Rift." },
      { name: "Conservative (Transform) Margin", formula: "Plates slide sideways → friction, stick-slip quakes, NO volcanoes", note: "Example: San Andreas Fault (Pacific & North American)." },
      { name: "Destructive (Subduction) Margin", formula: "Denser oceanic sinks under continental → trench, composite volcanoes, megathrust quakes", note: "Examples: Nazca/South American (Andes), Pacific/Eurasian (Japan)." },
      { name: "Collision Margin", formula: "Two continental plates crumple upward → fold mountains, shallow quakes, NO volcanoes", note: "Example: Indian & Eurasian plates (Himalayas)." },
      { name: "Mantle-Plume Hotspot", formula: "Stationary superheated plume inside a plate → age-ordered shield volcano chain", note: "Example: Hawaiian Islands (intra-plate anomaly)." },
    ],
  },
};
