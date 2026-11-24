import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Right now, North America and Europe are drifting farther apart at the speed your fingernails grow—while India keeps ramming into Asia, pushing Mount Everest millimetres higher every single year!",
  didYouKnow: [
    "Earth's longest mountain range isn't the Himalayas or the Andes—it is the 65,000 km Mid-Ocean Ridge system winding across the ocean floor, mostly more than 2,500 m underwater.",
    "At Silfra Fissure in Iceland, glacial meltwater fills the widening crack between the North American and Eurasian plates so clearly that divers can see 100 m ahead while touching two tectonic plates at once.",
    "The limestone rock at the summit of Mount Everest (8,849 m) contains fossils of ancient sea lilies and trilobites—proof that the Himalayas rose from an ancient ocean floor squeezed between India and Eurasia.",
    "Every time oceanic crust forms at the Mid-Atlantic Ridge, cooling iron minerals lock in Earth's magnetic polarity like a tape recorder—creating mirror-image magnetic stripes across the Atlantic seafloor.",
    "About 250 million years from now, geologists predict continued subduction could close the Pacific or Atlantic and weld Earth's continents back into a future supercontinent nicknamed 'Pangaea Proxima'.",
  ],
  activities: [
    {
      title: "Kitchen-Towel & Biscuit Plate-Margin Lab",
      emoji: "🍪",
      materials: [
        "2 thick biscuits or sponge slices (continental crust) + 1 thin cracker (oceanic crust)",
        "A shallow tray with thick yoghurt, custard, or warm syrup (ductile asthenosphere)",
        "A damp cloth and a phone camera to record short clips",
      ],
      steps: [
        "Lay two biscuits side by side on the yoghurt and slowly pull them apart—watch the 'mantle' well up between them (constructive margin).",
        "Slide two biscuits sideways past each other with dry, rough edges touching—feel them snag and jolt suddenly (conservative stick-slip fault).",
        "Push a thin cracker steadily against a thick biscuit so the cracker dips downward underneath (destructive subduction).",
        "Push two dampened soft sponge/biscuit halves head-on so both edges crumple skyward with neither sinking (Himalayan collision).",
      ],
      maths: "Real plate speeds average 2–10 cm/year: using 1 cm/year × 1 million years = 10 km, even a tiny 4 cm/year drift adds up to 400 km of mountain building or ocean opening in 10 million years.",
    },
    {
      title: "Conveyor-Belt Hotspot Simulator",
      emoji: "🌋",
      materials: [
        "1 long strip of plain paper (the moving Pacific Plate)",
        "1 felt-tip marker held completely still (the stationary mantle plume)",
        "A ruler and stopwatch",
      ],
      steps: [
        "Hold the marker tip fixed against the table while your partner pulls the paper strip smoothly northwest for 10 seconds.",
        "Every 2 seconds, gently tap the marker down for half a second to 'erupt' an island onto the moving strip.",
        "Stop and inspect your island chain: which dot is youngest (still over the pen), and which direction did the oldest dot travel?",
        "Measure the distance from the oldest dot to the pen in mm and divide by 10 seconds to calculate your paper-plate speed—exactly how geologists measure Pacific Plate velocity from Hawaii!",
      ],
      maths: "In the Hawaiian chain, Kauaʻi sits ~500 km NW of active Big Island and is ~5 Myr old → speed = 500 ÷ (5 × 10) = 10 cm/year NW.",
    },
  ],
  bonusDiagrams: [
    {
      title: "All Four Plate Margins at a Glance",
      caption: "Use this quick matrix to check plate direction, crust change, landforms, volcanoes, and earthquakes for every margin.",
      svg:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison grid of constructive, conservative, destructive, and collision plate margins with arrows and volcano status">` +
        `<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>` +
        `<text x="280" y="22" font-size="13" font-weight="800" text-anchor="middle" fill="var(--ink)">The Four Plate Margins — Quick Decision Matrix</text>` +
        `<rect x="14" y="34" width="258" height="96" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.3"/>` +
        `<text x="143" y="54" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--brand)">1. Constructive (← →)</text>` +
        `<text x="143" y="72" font-size="10" text-anchor="middle" fill="var(--ink)">New crust created · Mid-Atlantic Ridge</text>` +
        `<text x="143" y="90" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">Volcanoes: YES (Shield / runny)</text>` +
        `<text x="143" y="108" font-size="10" text-anchor="middle" fill="var(--ink-2)">Quakes: Shallow, mild–moderate</text>` +
        `<rect x="288" y="34" width="258" height="96" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.3"/>` +
        `<text x="417" y="54" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--ink)">2. Conservative (↑ ↓)</text>` +
        `<text x="417" y="72" font-size="10" text-anchor="middle" fill="var(--ink)">Crust conserved · San Andreas Fault</text>` +
        `<text x="417" y="90" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">Volcanoes: NO (no melting/rifting)</text>` +
        `<text x="417" y="108" font-size="10" text-anchor="middle" fill="var(--ink-2)">Quakes: Shallow, very powerful</text>` +
        `<rect x="14" y="142" width="258" height="96" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.3"/>` +
        `<text x="143" y="162" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--bad)">3. Destructive (→ ← Subduct)</text>` +
        `<text x="143" y="180" font-size="10" text-anchor="middle" fill="var(--ink)">Oceanic sinks · Trench &amp; Andes</text>` +
        `<text x="143" y="198" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">Volcanoes: YES (Composite / explosive)</text>` +
        `<text x="143" y="216" font-size="10" text-anchor="middle" fill="var(--ink-2)">Quakes: Shallow to deep (megathrust)</text>` +
        `<rect x="288" y="142" width="258" height="96" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"/>` +
        `<text x="417" y="162" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--warn)">4. Collision (→ ← Crumple)</text>` +
        `<text x="417" y="180" font-size="10" text-anchor="middle" fill="var(--ink)">2 continents buckle · Himalayas</text>` +
        `<text x="417" y="198" font-size="10" font-weight="700" text-anchor="middle" fill="var(--bad)">Volcanoes: NO (no subduction)</text>` +
        `<text x="417" y="216" font-size="10" text-anchor="middle" fill="var(--ink-2)">Quakes: Powerful, shallow (Nepal 2015)</text>` +
        `</svg>`,
    },
    {
      title: "Why Oceanic Crust Subducts: Density vs Thickness",
      caption: "Even though continental granite is 4–6× thicker, basaltic oceanic crust is denser (~3.0 vs ~2.7 g/cm³), so gravity pulls oceanic lithosphere downward.",
      svg:
        `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scale diagram contrasting thin dense basaltic oceanic crust with thick buoyant granitic continental crust resting on the upper mantle">` +
        `<rect x="0" y="0" width="560" height="220" rx="10" fill="var(--surface)"/>` +
        `<text x="280" y="22" font-size="13" font-weight="800" text-anchor="middle" fill="var(--ink)">Oceanic vs Continental Crust (Isostasy &amp; Density)</text>` +
        `<rect x="24" y="128" width="512" height="72" rx="6" fill="var(--bad-soft)" stroke="var(--line)"/>` +
        `<text x="280" y="184" font-size="11" font-weight="700" text-anchor="middle" fill="var(--bad)">Upper Mantle / Asthenosphere (density ≈ 3.3 g/cm³)</text>` +
        `<rect x="38" y="64" width="210" height="32" fill="var(--info-soft)"/>` +
        `<text x="143" y="84" font-size="10" font-weight="700" text-anchor="middle" fill="var(--info)">Ocean Water</text>` +
        `<rect x="38" y="96" width="210" height="26" rx="4" fill="var(--brand)" stroke="var(--ink)" stroke-width="1.2"/>` +
        `<text x="143" y="113" font-size="10.5" font-weight="800" text-anchor="middle" fill="var(--brand-ink)">Oceanic: 5–10 km · 3.0 g/cm³</text>` +
        `<text x="143" y="52" font-size="10.5" font-weight="800" text-anchor="middle" fill="var(--brand)">Basalt · Young (&lt;200 Myr) · Subducts</text>` +
        `<rect x="282" y="54" width="240" height="100" rx="6" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>` +
        `<text x="402" y="96" font-size="11" font-weight="800" text-anchor="middle" fill="var(--ink)">Continental: 30–70 km</text>` +
        `<text x="402" y="114" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink-2)">2.7 g/cm³ · Granite · Up to 4 Byr</text>` +
        `<text x="402" y="132" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">Buoyant — floats high &amp; never subducts</text>` +
        `</svg>`,
    },
  ],
  history: {
    title: "From Ridicule to Revolution: Wegener (1912) & Marie Tharp (1957)",
    story:
      "In 1912, German meteorologist Alfred Wegener proposed 'Continental Drift', noting how South America and Africa fit like jigsaw pieces and share identical 250-million-year-old fossils and matching glacial scratches. Senior geologists ridiculed him for decades because he could not explain *what force* could push continents through solid seafloor. Decades later, in the 1950s, American oceanographer Marie Tharp painstakingly plotted thousands of Atlantic sonar depth soundings by hand—even while women were barred from research ships—and revealed the 16,000 km Mid-Atlantic Ridge with its dramatic central rift valley! Combined with symmetrical magnetic seafloor stripes and Benioff-zone earthquake maps in the 1960s, her map proved seafloor spreading and unified Earth science under modern Plate Tectonics.",
  },
};
