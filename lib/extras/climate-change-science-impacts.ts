import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Every May and October, Earth's entire Northern Hemisphere inhales and exhales billions of tonnes of carbon dioxide — leaving a jagged sawtooth heartbeat on Hawaii's Mauna Loa graph as the planet warms.",
  didYouKnow: [
    "Over **90%** of the extra heat trapped by human greenhouse gas emissions since 1971 has been absorbed by the **oceans**, not the air — without oceans acting as a giant heat sink, land temperatures would already be unrecognisable.",
    "Antarctica's **EPICA Dome C** ice core is **3,270 metres** long — taller than ten Marina Bay Sands towers stacked end to end — and traps ancient air bubbles stretching back **800,000 years**.",
    "Because the pH scale is **logarithmic**, surface seawater dropping from pH 8.2 to pH 8.1 represents roughly a **30% jump in acidity** — fast enough to stress coral skeletons and tiny sea butterflies (pteropods) at the base of polar food webs.",
    "All of Earth's volcanoes combined release around **0.2–0.3 billion tonnes** of CO₂ per year — less than **1%** of humanity's ~37 billion tonnes from burning fossil fuels and making cement.",
    "Singapore has warmed at roughly **0.25 °C per decade** since 1948 — around twice the global average — because global warming stacks directly on top of Singapore's dense **Urban Heat Island** effect.",
  ],
  activities: [
    {
      title: "Land Ice vs Floating Sea Ice: The Two-Cup Sea-Level Proof",
      emoji: "🧊",
      materials: [
        "Two identical clear glasses or plastic cups",
        "A handful of ice cubes (equal number for each cup)",
        "A small stone, Lego brick or inverted ramekin (to act as 'land' inside Cup B)",
        "Cold water and a waterproof marker pen",
      ],
      steps: [
        "Place 3–4 ice cubes directly into **Cup A** (representing floating Arctic sea ice) and fill with cold water until the ice floats freely. Mark the exact water line on the outside.",
        "Build a dry 'island' in **Cup B** using the stone/Lego sticking above the water. Fill Cup B with water to the same level, mark the exact water line, then rest 3–4 ice cubes *on top* of the island (representing Greenland/Antarctica land ice).",
        "Leave both cups side by side for 30–45 minutes until all ice melts completely.",
        "Compare the final water level in both cups against your starting marker lines!",
      ],
      maths:
        "Cup A's water line stays virtually unchanged because floating ice already displaces its own mass of water (Archimedes' Principle). Cup B's water line rises visibly because melting **land ice** adds brand-new volume to the ocean — just like Greenland and Antarctic glaciers!",
    },
    {
      title: "Sunlight & Albedo: White vs Black Thermometer Challenge",
      emoji: "☀️",
      materials: [
        "One sheet of bright white paper (high albedo ~0.8) and one sheet of matte black paper (low albedo ~0.08)",
        "Two identical thermometers (or a digital infrared thermometer)",
        "A sunny windowsill or desk lamp",
        "A stopwatch and notebook",
      ],
      steps: [
        "Fold each sheet into a small sleeve or lay both side by side under direct sunlight or equal distance beneath a lamp.",
        "Record the starting temperature under both sheets at 0 minutes.",
        "Record temperatures every 2 minutes for 10 minutes, then calculate the temperature rise (°C) and percentage difference between the dark and bright surfaces.",
        "Discuss how replacing bright Arctic sea ice with dark open ocean creates a self-reinforcing positive feedback loop.",
      ],
      maths:
        "The black sheet absorbs roughly **80–90%** of incoming short-wave light and re-radiates heat, climbing several °C hotter than the reflective white sheet — modelling the exact **ice–albedo feedback** driving 3–4× Arctic amplification.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Keeling Curve: Earth's Seasonal Breathing & Upward Climb",
      caption: "CO₂ dips each Northern Hemisphere summer as forests photosynthesise, then rebounds in winter — stacked atop an unmistakable human-driven climb from 315 ppm (1958) to 420+ ppm.",
      svg:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Keeling Curve showing atmospheric CO2 rising from 315 ppm in 1958 to over 420 ppm with seasonal sawtooth oscillations">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<text x="280" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The Keeling Curve (Mauna Loa, Hawaii: 1958–Present)</text>` +
        `<line x1="60" y1="205" x2="520" y2="205" stroke="var(--ink-2)" stroke-width="1.5" />` +
        `<line x1="60" y1="44" x2="60" y2="205" stroke="var(--ink-2)" stroke-width="1.5" />` +
        `<line x1="60" y1="185" x2="520" y2="185" stroke="var(--line)" stroke-dasharray="3 3" />` +
        `<line x1="60" y1="130" x2="520" y2="130" stroke="var(--line)" stroke-dasharray="3 3" />` +
        `<line x1="60" y1="75" x2="520" y2="75" stroke="var(--line)" stroke-dasharray="3 3" />` +
        `<text x="52" y="189" text-anchor="end" font-size="10" fill="var(--ink-2)">315</text>` +
        `<text x="52" y="134" text-anchor="end" font-size="10" fill="var(--ink-2)">370</text>` +
        `<text x="52" y="79" text-anchor="end" font-size="10" font-weight="800" fill="var(--bad)">420</text>` +
        `<text x="20" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-2)" transform="rotate(-90 20 128)">CO₂ (ppm)</text>` +
        `<polyline points="72,186 84,180 94,185 108,177 120,182 134,173 146,178 162,167 174,173 190,160 202,166 218,152 230,159 248,144 260,151 278,135 292,143 310,126 324,134 344,116 358,124 378,105 392,113 412,94 426,102 448,83 462,92 484,71 498,79 514,62" fill="none" stroke="var(--bad)" stroke-width="2.4" />` +
        `<circle cx="72" cy="186" r="4" fill="var(--brand)" />` +
        `<circle cx="514" cy="62" r="4.5" fill="var(--bad)" />` +
        `<rect x="78" y="48" width="218" height="52" rx="8" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<text x="90" y="67" font-size="10.5" font-weight="800" fill="var(--brand)">Why the seasonal sawtooth?</text>` +
        `<text x="90" y="81" font-size="9.5" fill="var(--ink)">• May–Oct: NH forests absorb CO₂ (dip)</text>` +
        `<text x="90" y="94" font-size="9.5" fill="var(--ink)">• Nov–Apr: leaves decay → CO₂ rises</text>` +
        `<text x="72" y="222" text-anchor="middle" font-size="10" fill="var(--ink-2)">1958</text>` +
        `<text x="182" y="222" text-anchor="middle" font-size="10" fill="var(--ink-2)">1975</text>` +
        `<text x="292" y="222" text-anchor="middle" font-size="10" fill="var(--ink-2)">1990</text>` +
        `<text x="402" y="222" text-anchor="middle" font-size="10" fill="var(--ink-2)">2008</text>` +
        `<text x="512" y="222" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">2024+</text>` +
        `</svg>`,
    },
    {
      title: "Why Melting Land Ice Raises Sea Level While Floating Sea Ice Does Not",
      caption: "Floating sea ice already displaces its own mass of seawater, whereas land-based glaciers and ice sheets add brand-new water volume to the oceans.",
      svg:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison showing floating sea ice melting without raising water line versus land ice on rock raising water level">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<line x1="280" y1="18" x2="280" y2="232" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4" />` +
        `<text x="140" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">Floating Sea Ice (Arctic Ocean)</text>` +
        `<text x="420" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--bad)">Land Ice (Greenland &amp; Glaciers)</text>` +
        `<rect x="38" y="108" width="204" height="82" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />` +
        `<rect x="92" y="88" width="96" height="44" rx="6" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.5" />` +
        `<text x="140" y="114" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Floating Ice</text>` +
        `<line x1="28" y1="108" x2="252" y2="108" stroke="var(--brand)" stroke-width="2" stroke-dasharray="5 3" />` +
        `<text x="140" y="158" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Water line stays SAME when melted</text>` +
        `<text x="140" y="174" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">(already displaces its own mass)</text>` +
        `<text x="140" y="212" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--ink)">Indirect danger: exposes dark sea</text>` +
        `<text x="140" y="226" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">→ lower albedo → extra warming!</text>` +
        `<rect x="318" y="118" width="204" height="72" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />` +
        `<rect x="318" y="96" width="204" height="22" fill="var(--bad)" opacity="0.25" />` +
        `<polygon points="318,190 318,108 398,108 424,190" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.4" />` +
        `<text x="362" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Bedrock</text>` +
        `<rect x="326" y="64" width="70" height="44" rx="6" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.6" />` +
        `<text x="361" y="90" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">Land Ice</text>` +
        `<path d="M 396 86 Q 424 88 430 110" fill="none" stroke="var(--bad)" stroke-width="2.2" />` +
        `<polygon points="430,115 425,105 435,105" fill="var(--bad)" />` +
        `<line x1="308" y1="96" x2="532" y2="96" stroke="var(--bad)" stroke-width="2" />` +
        `<text x="476" y="88" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--bad)">NEW higher sea level ↑</text>` +
        `<text x="420" y="212" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--bad)">Adds brand-new meltwater to sea</text>` +
        `<text x="420" y="226" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">+ ocean thermal expansion = sea-level rise</text>` +
        `</svg>`,
    },
  ],
  history: {
    title: "Eunice Newton Foote (1856) & Charles David Keeling (1958): Discovering Earth's Heat Trap",
    story:
      "Long before satellites or supercomputers existed, American scientist and women's-rights pioneer **Eunice Newton Foote** ran a remarkably simple sunlight experiment in **1856**. She filled glass cylinders with different gases — ordinary air, hydrogen, oxygen and 'carbonic acid gas' (**CO₂**) — placed thermometers inside, and set them in the sun. The CO₂ cylinder grew dramatically hotter and stayed warm far longer in the shade. In a three-page paper read to the American Association for the Advancement of Science (read aloud by a male colleague because women were rarely permitted to present), Foote made an astonishing prophecy: *'An atmosphere of that gas would give to our earth a high temperature.'* Three years later, Irish physicist John Tyndall independently identified the exact infrared absorption physics — and for over a century Foote's name was almost forgotten.\n\n" +
      "A century later, in **1958**, young geochemist **Charles David Keeling** set up a precision gas analyser 3,400 metres up the volcanic slope of **Mauna Loa, Hawaii**, far from city chimneys. Within two years he uncovered two breathtaking truths: first, the planet breathes every year in a rhythmic seasonal sawtooth; and second, each year's peak sat relentlessly higher than the last — rising from **315 ppm** in 1958 past **420 ppm** today. Together, Foote's tabletop cylinders and Keeling's mountain curve turned the enhanced greenhouse effect from a bold hypothesis into the best-documented planetary change in modern geography.",
  },
};
