import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How do you defend a low-lying tropical island against rising seas *without* hiding its beaches behind an ugly concrete wall? Singapore's engineers answered with a wild idea: build an 800-hectare 'Long Island' offshore that doubles as a giant freshwater reservoir and waterfront park.",
  didYouKnow: [
    "Between 2010 and 2024, the global cost of utility-scale **solar photovoltaic electricity plummeted by over 85%**, turning solar into the cheapest new power source in human history.",
    "Floating solar panels on Singapore's **Tengeh Reservoir** stay cooler over water than panels baked on hot concrete roofs — boosting their electrical efficiency by **5–15%** while simultaneously cutting reservoir water evaporation!",
    "Hectare for hectare, coastal **mangrove forests** lock away **3 to 5 times more carbon** ('blue carbon') in their waterlogged mud than inland tropical rainforests — while absorbing 50–70% of incoming storm-wave energy.",
    "Singapore's first **polder** on **Pulau Tekong** cuts the amount of scarce imported reclamation sand needed by roughly **40%** compared with traditional land reclamation.",
    "Thanks to satellite radar, 76,000 community volunteers and thousands of elevated concrete cyclone shelters, **Bangladesh** reduced deaths from major Category 4–5 cyclones from over **300,000 in 1970** to **fewer than 100** in recent comparable storms.",
  ],
  activities: [
    {
      title: "Sponge City vs Concrete Jungle: Flash-Flood Tray Test",
      emoji: "🌧️",
      materials: [
        "Two shallow baking trays or foil pans tilted slightly into measuring jugs",
        "Tray A: lined with smooth aluminium foil or a plastic sheet (representing impermeable concrete roads)",
        "Tray B: lined with kitchen sponges, soil/pebbles and moss (representing permeable pavements and Bishan–Ang Mo Kio rain gardens)",
        "Two 500 ml jugs of water and a stopwatch",
      ],
      steps: [
        "Prop both trays at the exact same gentle slope (around 10°) emptying into separate measuring jugs.",
        "Pour **500 ml of water** briskly over **Tray A (concrete)** to simulate a sudden Singapore tropical cloudburst. Time how quickly peak runoff hits the jug and measure the total runoff volume after 30 seconds.",
        "Repeat with **500 ml of water** poured at the same speed over **Tray B (sponge city)**.",
        "Calculate the percentage reduction in peak flood volume after 30 seconds — and discuss how permeable parks prevent urban flash floods!",
      ],
      maths:
        "Impermeable concrete sends nearly **90–100%** of heavy rain rushing into drains within seconds, overwhelming canals. A sponge-city surface absorbs and delays **40–70%** of peak runoff, flattening the flood hydrograph — just like PUB's naturalised Bishan–Ang Mo Kio River!",
    },
    {
      title: "Tanglin Campus Micro-Climate: Shade, Albedo & Urban Heat Audit",
      emoji: "🌳",
      materials: [
        "A handheld infrared or digital thermometer (or smartphone weather probe)",
        "A clip-board sketch map of 5 outdoor campus spots (e.g. dark tarmac car park, sunny concrete court, shaded tree canopy walkway, grass field, white-painted wall)",
        "Pen and calculator",
      ],
      steps: [
        "Visit all 5 campus spots within a 15-minute window around midday (when sunlight is consistent).",
        "Measure surface or shaded air temperature at each spot and classify its albedo (low/dark vs high/bright) and vegetation cover.",
        "Calculate the **temperature difference (°C)** between the hottest dark paved surface and the coolest tree-shaded green zone.",
        "Draft a 3-point mini Green Plan recommending two cool-roof/shade adaptations and one energy-efficiency mitigation action for your campus.",
      ],
      maths:
        "Midday dark tarmac often registers **10–18 °C hotter** on its surface than nearby shaded grass or canopy paths — proving directly why Singapore's **1 million more trees** and reflective cool roofs cut the Urban Heat Island effect!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Singapore's Proposed East Coast 'Long Island': Dual-Purpose Coastal Adaptation",
      caption: "Instead of sealing East Coast Park behind a high concrete wall, reclaiming ~800 ha of raised offshore land blocks storm surges while creating a huge freshwater reservoir and 20 km of waterfront parks.",
      svg:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Singapore proposed East Coast Long Island coastal protection barrier and enclosed freshwater reservoir">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<text x="280" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--ink)">Singapore East Coast &lsquo;Long Island&rsquo; Concept (~800 ha)</text>` +
        `<rect x="18" y="138" width="142" height="72" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.3" />` +
        `<text x="89" y="170" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">Singapore Strait</text>` +
        `<text x="89" y="185" text-anchor="middle" font-size="9.5" fill="var(--bad)">Higher future tides &amp;</text>` +
        `<text x="89" y="198" text-anchor="middle" font-size="9.5" fill="var(--bad)">storm surges →</text>` +
        `<line x1="20" y1="126" x2="158" y2="126" stroke="var(--bad)" stroke-width="1.6" stroke-dasharray="4 3" />` +
        `<text x="89" y="120" text-anchor="middle" font-size="9" font-weight="700" fill="var(--bad)">2100 Extreme Tide Level</text>` +
        `<polygon points="154,210 172,102 276,102 292,210" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.8" />` +
        `<circle cx="204" cy="92" r="10" fill="var(--good)" opacity="0.3" stroke="var(--good)" />` +
        `<circle cx="242" cy="90" r="12" fill="var(--good)" opacity="0.3" stroke="var(--good)" />` +
        `<text x="224" y="138" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--good)">&lsquo;Long Island&rsquo;</text>` +
        `<text x="224" y="153" text-anchor="middle" font-size="9.5" fill="var(--ink)">Raised offshore land</text>` +
        `<text x="224" y="167" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Parks, homes &amp; higher</text>` +
        `<text x="224" y="180" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">coastal barrier</text>` +
        `<rect x="292" y="148" width="114" height="62" fill="var(--brand-2)" opacity="0.22" stroke="var(--brand-2)" stroke-width="1.4" />` +
        `<text x="349" y="174" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand-2)">New Freshwater</text>` +
        `<text x="349" y="188" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand-2)">Reservoir</text>` +
        `<text x="349" y="202" text-anchor="middle" font-size="8.8" fill="var(--ink-2)">(Water security + kayaking)</text>` +
        `<rect x="406" y="128" width="136" height="82" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4" />` +
        `<rect x="434" y="88" width="28" height="40" fill="var(--surface)" stroke="var(--ink-2)" />` +
        `<rect x="470" y="76" width="32" height="52" fill="var(--surface)" stroke="var(--ink-2)" />` +
        `<rect x="508" y="94" width="24" height="34" fill="var(--surface)" stroke="var(--ink-2)" />` +
        `<text x="474" y="154" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Existing East Coast</text>` +
        `<text x="474" y="169" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Park &amp; Low-Lying</text>` +
        `<text x="474" y="182" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Estates (Protected!)</text>` +
        `<text x="280" y="234" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--ink-2)">1. Flood defence + 2. Freshwater storage + 3. New coastal parks &amp; land</text>` +
        `</svg>`,
    },
    {
      title: "The Climate Action Leverage Pyramid: Individual, City, National & Global",
      caption: "Individual choices build cultural momentum and consumer demand, while systemic city, national and international policies unlock rapid planetary scale.",
      svg:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-tier climate action pyramid comparing individual habits, local community, national systemic policy and global COP cooperation">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">How Individual Action Connects to Systemic Scale</text>` +
        `<rect x="148" y="38" width="264" height="40" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />` +
        `<text x="280" y="55" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">1. Individual Habits (Spark &amp; Demand)</text>` +
        `<text x="280" y="70" text-anchor="middle" font-size="9.5" fill="var(--ink)">MRT/cycling, less beef &amp; flying, 25 °C AC, less waste</text>` +
        `<rect x="104" y="88" width="352" height="40" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5" />` +
        `<text x="280" y="105" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--good)">2. School &amp; City Infrastructure (Enable)</text>` +
        `<text x="280" y="120" text-anchor="middle" font-size="9.5" fill="var(--ink)">360 km MRT, 60k EV chargers, 1M trees, sponge parks</text>` +
        `<rect x="60" y="138" width="440" height="40" rx="8" fill="var(--surface-2)" stroke="var(--brand-2)" stroke-width="1.5" />` +
        `<text x="280" y="155" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand-2)">3. National Law &amp; Corporate Reform (Scale)</text>` +
        `<text x="280" y="170" text-anchor="middle" font-size="9.5" fill="var(--ink)">Rising carbon tax (S$50–80/t), ≥2 GWp solar, clean ASEAN grid, Long Island</text>` +
        `<rect x="20" y="188" width="520" height="44" rx="8" fill="var(--bad)" opacity="0.14" stroke="var(--bad)" stroke-width="1.5" />` +
        `<text x="280" y="206" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">4. Global Cooperation (Planetary Commons)</text>` +
        `<text x="280" y="222" text-anchor="middle" font-size="9.5" fill="var(--ink)">Paris Agreement (&lt;2 °C / 1.5 °C), 5-year NDC ratchets &amp; $100B+ Climate Finance</text>` +
        `</svg>`,
    },
  ],
  history: {
    title: "12 December 2015: How Tiny Island Nations Won '1.5 to Stay Alive' in Paris",
    story:
      "Heading into **COP21 in Paris (2015)**, most powerful nations expected the final treaty to settle for a **2 °C** warming limit. To diplomats from major economies, 2 °C sounded ambitious enough. To delegates from low-lying coral nations like the **Marshall Islands** and the **Maldives**, 2 °C sounded like a death sentence for their coral reefs, freshwater lenses and homeland islands.\n\n" +
      "Led by Marshall Islands Foreign Minister **Tony de Brum**, a tiny Pacific coalition quietly stitched together an unexpected alliance called the **High Ambition Coalition** — uniting vulnerable African, Caribbean and Pacific island states with the European Union and eventually the United States and Brazil. Behind closed doors during sleepless nights at Le Bourget, island negotiators held firm behind their rallying cry: **'1.5 to Stay Alive.'** On the evening of **12 December 2015**, French Foreign Minister Laurent Fabius banged a green leaf-shaped gavel as **195 nations** cheered in unison, locking both **'well below 2 °C'** and **'pursuing 1.5 °C'** into global diplomacy. Closing the ambition gap remains humanity's defining test — yet that night proved even Earth's smallest nations can reshape global geography when science and justice speak together.",
  },
};
