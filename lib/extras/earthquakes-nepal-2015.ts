import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "An M7.8 earthquake like Nepal 2015 doesn't release slightly more energy than an M5.8 tremor—it unleashes 1,000 TIMES more energy in under a minute, lifting Kathmandu by nearly a metre!",
  didYouKnow: [
    "GPS stations in Kathmandu recorded the city lurching roughly 1.5 metres southward and rising almost 1 metre upward in less than 60 seconds during the 25 April 2015 Gorkha rupture.",
    "The 2015 Nepal earthquake struck at 11:56 am on a Saturday—Nepal's weekly school holiday. Because >7,000 schools collapsed or were badly damaged, that single day-of-week coincidence saved tens of thousands of children's lives.",
    "Earthquakes never produce the same Mercalli score everywhere: during Nepal 2015, soft ancient lake-bed clay beneath Kathmandu amplified shaking far more fiercely than nearby hard granite hills.",
    "Taipei 101's golden 660-tonne steel sphere (a tuned mass damper) is open for visitors to watch right inside the tower—it visibly swings like a giant pendulum during typhoons and earthquakes!",
    "The largest earthquake ever recorded by instruments was the 1960 Valdivia (Chile) megathrust quake at M9.5—releasing over 350 times more energy than Nepal's 2015 M7.8 rupture.",
  ],
  activities: [
    {
      title: "Spaghetti & Marshmallow Cross-Bracing Shake Table",
      emoji: "🏗️",
      materials: [
        "30 uncooked spaghetti sticks (structural steel columns/beams)",
        "20 mini marshmallows or small clay balls (joints)",
        "1 flat baking tray resting on 4 marbles or pencils (a DIY shake table)",
      ],
      steps: [
        "Build Tower A: a two-storey cube made ONLY of vertical and horizontal spaghetti sticks (unreinforced box frame).",
        "Build Tower B: an identical two-storey cube, then add diagonal spaghetti X-braces across all four outer walls (steel cross-bracing!).",
        "Place both towers on the baking tray and gently slide the tray back and forth for 10 seconds to simulate horizontal S-waves.",
        "Observe how Tower A shears sideways into a parallelogram and pancakes, while Tower B's triangles stay rigid—just like aseismic buildings in Tokyo or San Francisco!",
      ],
      maths: "Adding diagonal cross-braces splits each 4-sided square bay into 2 rigid triangles; because a triangle's side lengths fix its angles uniquely, sideways shear deformation drops dramatically.",
    },
    {
      title: "Spaghetti Logarithmic Energy Snap Demo",
      emoji: "🍝",
      materials: [
        "1 pack of thin dry spaghetti",
        "A tray to catch snapped pieces",
      ],
      steps: [
        "Snap 1 single strand of spaghetti—that represents the energy of a small M5.0 earthquake.",
        "Now bundle 32 strands together and try to snap them all at once—that represents an M6.0 earthquake (+1.0 step ≈ 32× energy!).",
        "To represent an M7.0 earthquake (+2.0 steps), you would have to snap 1,000 spaghetti strands simultaneously (about 3 full supermarket packets!), and an M8.0 needs 31,600 strands (~100 packets)!",
      ],
      maths: "Because energy scales as 10^(1.5 × ΔM), each +1.0 jump multiplies energy by ≈ 31.6× (≈ 32×) and each +2.0 jump multiplies energy by exactly 1,000×.",
    },
  ],
  bonusDiagrams: [
    {
      title: "P-Waves vs S-Waves & Earthquake Early Warning Race",
      caption: "Fast P-waves (~6.0 km/s) trigger sensors milliseconds after rupture; radio alerts travel near light speed, beating slower destructive S-waves (~3.5 km/s) by 5–60 seconds.",
      svg:
        `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram comparing fast P-waves triggering an electronic early warning signal ahead of slower destructive S-waves arriving at a city">` +
        `<rect x="0" y="0" width="560" height="220" rx="10" fill="var(--surface)"/>` +
        `<text x="280" y="22" font-size="13" font-weight="800" text-anchor="middle" fill="var(--ink)">How Earthquake Early Warning (EEW) Beats Destructive S-Waves</text>` +
        `<rect x="20" y="138" width="520" height="62" rx="6" fill="var(--surface-2)" stroke="var(--line)"/>` +
        `<circle cx="72" cy="172" r="8" fill="var(--bad)"/>` +
        `<text x="72" y="193" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--bad)">Focus (t = 0 s)</text>` +
        `<rect x="132" y="116" width="16" height="22" rx="3" fill="var(--brand)"/>` +
        `<text x="140" y="108" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--brand)">Sensor</text>` +
        `<line x1="78" y1="168" x2="134" y2="136" stroke="var(--brand)" stroke-width="2.5"/>` +
        `<text x="92" y="150" font-size="9" font-weight="700" fill="var(--brand)">P-wave (6 km/s)</text>` +
        `<path d="M 148 122 C 235 44, 385 44, 472 104" fill="none" stroke="var(--good)" stroke-width="2.8" stroke-dasharray="6 4"/>` +
        `<polygon points="480,109 467,108 474,97" fill="var(--good)"/>` +
        `<text x="315" y="54" font-size="10.5" font-weight="800" text-anchor="middle" fill="var(--good)">Instant Radio/SMS Alert (300,000 km/s)</text>` +
        `<text x="315" y="68" font-size="9.2" text-anchor="middle" fill="var(--ink-2)">Brakes trains, shuts gas valves, warns phones 5–60 s early</text>` +
        `<path d="M 82 172 Q 150 156, 218 172 T 354 172 T 468 172" fill="none" stroke="var(--bad)" stroke-width="3"/>` +
        `<polygon points="478,172 465,166 465,178" fill="var(--bad)"/>` +
        `<text x="275" y="192" font-size="10" font-weight="800" text-anchor="middle" fill="var(--bad)">Destructive S-Waves (~3.5 km/s — arrive later!)</text>` +
        `<rect x="484" y="88" width="18" height="50" fill="var(--ink-2)"/>` +
        `<rect x="506" y="76" width="22" height="62" fill="var(--ink-2)"/>` +
        `<text x="506" y="68" font-size="10" font-weight="800" text-anchor="middle" fill="var(--ink)">City</text>` +
        `</svg>`,
    },
    {
      title: "HIC High-Tech vs LIC Appropriate Earthquake Protection",
      caption: "Both save lives under 'Protect'—yet affordable local timber bands and lightweight roofs protect vastly more rural families per dollar in LICs like Nepal.",
      svg:
        `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison diagram contrasting HIC high-tech base-isolated skyscrapers with LIC low-cost timber ring-beam reinforced rural homes">` +
        `<rect x="0" y="0" width="560" height="220" rx="10" fill="var(--surface)"/>` +
        `<text x="280" y="22" font-size="13" font-weight="800" text-anchor="middle" fill="var(--ink)">'Protect' Across Wealth Levels — HIC vs LIC Engineering</text>` +
        `<rect x="16" y="36" width="254" height="168" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.3"/>` +
        `<text x="143" y="56" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--brand)">HIC High-Tech (e.g. Japan / Taiwan)</text>` +
        `<text x="28" y="80" font-size="10" fill="var(--ink)">• Rubber &amp; lead base isolation pads</text>` +
        `<text x="28" y="100" font-size="10" fill="var(--ink)">• Diagonal steel X cross-bracing</text>` +
        `<text x="28" y="120" font-size="10" fill="var(--ink)">• 660-tonne tuned mass dampers</text>` +
        `<text x="28" y="140" font-size="10" fill="var(--ink)">• Shatterproof glass &amp; auto gas shut-off</text>` +
        `<text x="143" y="176" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--brand)">Cost: Millions per tower · Strict code</text>` +
        `<rect x="290" y="36" width="254" height="168" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.3"/>` +
        `<text x="417" y="56" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--good)">LIC Appropriate Tech (e.g. Nepal)</text>` +
        `<text x="302" y="80" font-size="10" fill="var(--ink)">• Horizontal timber / concrete ring-beams</text>` +
        `<text x="302" y="100" font-size="10" fill="var(--ink)">• Reinforced masonry wall corners</text>` +
        `<text x="302" y="120" font-size="10" fill="var(--ink)">• Lightweight tin roofs (not heavy stone)</text>` +
        `<text x="302" y="140" font-size="10" fill="var(--ink)">• Local masons trained (~50,000+)</text>` +
        `<text x="417" y="176" font-size="9.5" font-weight="800" text-anchor="middle" fill="var(--good)">Cost: ~$3,000/home · Saves most rural lives</text>` +
        `</svg>`,
    },
  ],
  history: {
    title: "From Mercalli (1902) to Richter (1935) to Moment Magnitude (1979)",
    story:
      "Before modern electronics, Italian volcanologist Giuseppe Mercalli ranked earthquakes in 1902 purely by what people felt and how badly churches and stone houses cracked (I–XII). That helped map local damage, yet an M7 quake in an empty desert scored Mercalli I while a weak quake in a poorly built town scored IX! In 1935, Caltech seismologist Charles Richter (working with Beno Gutenberg) invented a logarithmic seismograph scale—shrinking million-fold wave differences onto neat numbers like 4.0 to 8.0. Decades later, when giant subduction quakes like Chile 1960 (M9.5) 'saturated' Richter's local needles, Hiroo Kanamori and Thomas Hanks introduced the modern Moment Magnitude Scale ($M_w$) in 1979, directly measuring fault rupture area, slip distance, and rock stiffness—the gold standard geographers use for Nepal 2015 (M7.8) and Japan 2011 (M9.0) today.",
  },
};
