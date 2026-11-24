import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In March 2011, Japan's M9.0 Tōhoku earthquake shifted the entire main island of Honshu 2.4 metres eastward, sped up Earth's daily spin by 1.8 microseconds, and stopped 27 bullet trains without a single passenger death — yet 40-metre waves still overwhelmed world-leading seawalls.",
  didYouKnow: [
    "The M9.0 Tōhoku megathrust shifted Earth's figure axis by about 17 cm and shortened the length of an Earth day by roughly 1.8 microseconds!",
    "All 27 Shinkansen bullet trains operating in north-eastern Japan during the 11 March 2011 earthquake braked automatically on P-wave detection and halted safely with zero fatalities.",
    "In the tiny coastal village of Aneyoshi, residents obeyed a centuries-old carved stone tablet warning 'Do not build your homes below this point' — the 2011 tsunami stopped just 90 metres below the stone, leaving every house untouched.",
    "During the 'Miracle of Kamaishi', 99.8% of ~3,000 schoolchildren survived waves that destroyed their classrooms because years of practical drills trained older pupils to lead younger ones uphill immediately.",
    "Japan's post-2011 S-net observatory laid 5,500 km of fibre-optic cable along the Japan Trench seafloor — longer than the direct distance from Singapore to Tokyo — to detect real-time offshore tsunami wave heights.",
  ],
  activities: [
    {
      title: "Classroom Ripple Tank: Shoaling & V-Bay Funnelling",
      emoji: "🌊",
      materials: [
        "1 long clear plastic storage tray (at least 60 cm long)",
        "Water (4–5 cm deep) + a flat plastic ruler or board",
        "Modelling clay or stacked books under one end to build a gently sloping 'continental shelf' and a V-shaped 'bay'",
      ],
      steps: [
        "Sculpt a rising shallow seabed slope at one end of the tray using clay, leaving the other end deep.",
        "Lay the flat ruler on the deep floor and lift it briskly straight upward by 1 cm (modelling vertical megathrust uplift — NOT splashing sideways!).",
        "Watch the wave speed and height as it crosses the deep end versus when it climbs onto the shallow clay shelf.",
        "Next, shape two clay headlands into a narrow V-shaped inlet (like Sanriku/Miyako) and repeat the exact same upward lift. Observe how much higher water climbs up the narrow bay walls!",
      ],
      maths:
        "Shallow-water wave speed follows {{v = sqrt(g * d)}}: as depth d drops over the shelf, speed v drops sharply, compressing wavelength and forcing wave height upward (shoaling), while V-shaped bays concentrate energy sideways too.",
    },
    {
      title: "UN Disaster Finance Desk: HIC (Japan) vs LIC (Nepal) Audit",
      emoji: "📊",
      materials: [
        "Calculator, ruler, and two sheets of squared paper",
        "Paired data cards: Japan 2011 ($235B loss, $5,875B GDP, ~18,500 dead/missing, M9.0 + tsunami) and Nepal 2015 ($5B loss, $20B GDP, ~9,000 dead, 3.5M homeless, M7.8)",
      ],
      steps: [
        "Draw Bar Chart 1 showing absolute economic loss in US$ billions for Japan ($235B) vs Nepal ($5B).",
        "Now calculate (% GDP loss = Loss ÷ GDP × 100) for both nations and draw Bar Chart 2 right beside Chart 1.",
        "Compare the two charts visually — notice how the taller bar completely flips sides!",
        "Write a 4-sentence briefing explaining to a donor committee why Nepal needed far greater international reconstruction aid even though Japan's dollar bill was 47 times higher.",
      ],
      maths:
        "Ratio of absolute dollars: {{235 / 5}} = 47× higher in Japan. Ratio of % GDP shock: {{25 / 4}} = 6.25× deeper in Nepal — proving why relative ratios (% GDP) are essential in geographical evaluation.",
    },
  ],
  bonusDiagrams: [
    {
      title: "How Japan's P-Wave Early Warning Stopped 27 Shinkansen Trains",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing fast P-waves reaching coastal seismometers before destructive S-waves, triggering radio alerts and automatic bullet-train braking"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">How P-Wave Early Warning Saves Lives in Seconds</text><rect x="20" y="168" width="520" height="58" fill="var(--surface-2)" stroke="var(--line)"/><path d="M 20 168 L 195 168 L 195 154 L 540 154 L 540 168 Z" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.5"/><rect x="20" y="138" width="175" height="30" fill="var(--info-soft)"/><circle cx="72" cy="198" r="9" fill="var(--bad)"/><text x="72" y="220" text-anchor="middle" font-size="9" font-weight="800" fill="var(--bad)">Focus (Offshore)</text><circle cx="72" cy="198" r="46" fill="none" stroke="var(--bad)" stroke-width="2.5" stroke-dasharray="5 3"/><circle cx="72" cy="198" r="98" fill="none" stroke="var(--brand)" stroke-width="2.5"/><text x="148" y="114" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--brand)">Fast P-wave (~7 km/s)</text><text x="148" y="127" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">Low shaking · arrives first</text><text x="148" y="218" text-anchor="middle" font-size="9" font-weight="800" fill="var(--bad)">Slow S-wave (~4 km/s)</text><rect x="218" y="128" width="26" height="26" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/><text x="231" y="145" text-anchor="middle" font-size="9" font-weight="800" fill="var(--brand)">S1</text><text x="231" y="118" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">Coastal Sensor</text><path d="M 231 128 Q 315 44 435 96" fill="none" stroke="var(--good)" stroke-width="2.4" stroke-dasharray="6 3"/><polygon points="432,88 444,98 429,102" fill="var(--good)"/><rect x="266" y="42" width="176" height="36" rx="8" fill="var(--good-soft)" stroke="var(--good)"/><text x="354" y="57" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--good)">Radio / Fibre Signal (~300,000 km/s)</text><text x="354" y="70" text-anchor="middle" font-size="8.5" fill="var(--ink)">Outraces S-wave by 15–60 seconds!</text><rect x="404" y="132" width="114" height="22" rx="10" fill="var(--brand)"/><rect x="420" y="137" width="16" height="8" rx="2" fill="var(--surface)"/><rect x="442" y="137" width="16" height="8" rx="2" fill="var(--surface)"/><rect x="464" y="137" width="16" height="8" rx="2" fill="var(--surface)"/><rect x="486" y="137" width="16" height="8" rx="2" fill="var(--surface)"/><text x="461" y="123" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--ink)">Shinkansen Auto-Brakes</text><text x="461" y="188" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">27 trains halted · 0 deaths</text><text x="461" y="203" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">+ SMS alerts &amp; factory shutoffs</text></svg>`,
      caption:
        "Electronic warnings travel at light speed once coastal sensors feel the first P-wave, giving inland cities and bullet trains 15–60 crucial seconds before destructive S-waves hit.",
    },
    {
      title: "Multi-Layered Tsunami Defence: Why Japan Combines Four Protections",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Japan post-2011 multi-layered tsunami resilience combining S-net offshore gauges, seawall, elevated coastal road, red-zone park, and hillside residential town"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Post-2011 Multi-Layered Coastal Resilience (Defence in Depth)</text><rect x="16" y="156" width="136" height="70" fill="var(--info-soft)"/><path d="M 16 156 Q 54 144 92 156 Q 124 164 152 156" fill="none" stroke="var(--info)" stroke-width="2.5"/><path d="M 16 226 L 152 206 L 380 182 L 452 126 L 544 126 L 544 236 L 16 236 Z" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8"/><circle cx="72" cy="212" r="6" fill="var(--brand)"/><line x1="72" y1="212" x2="152" y2="202" stroke="var(--brand)" stroke-width="2" stroke-dasharray="4 3"/><text x="78" y="192" text-anchor="middle" font-size="9" font-weight="800" fill="var(--brand)">1 · S-net Sensor</text><text x="78" y="203" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">Real-time wave alert</text><rect x="152" y="140" width="18" height="66" fill="var(--ink-2)"/><text x="161" y="120" text-anchor="middle" font-size="9" font-weight="800" fill="var(--ink)">2 · Seawall</text><text x="161" y="132" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">(Up to 14 m)</text><circle cx="212" cy="176" r="10" fill="var(--good)" opacity="0.75"/><circle cx="230" cy="174" r="10" fill="var(--good)" opacity="0.75"/><rect x="210" y="186" width="4" height="14" fill="var(--warn)"/><rect x="228" y="184" width="4" height="14" fill="var(--warn)"/><text x="234" y="148" text-anchor="middle" font-size="9" font-weight="800" fill="var(--good)">3 · Park &amp; Trees</text><text x="234" y="160" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">No homes in red zone</text><polygon points="292,190 314,162 346,162 368,184" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.8"/><text x="330" y="148" text-anchor="middle" font-size="9" font-weight="800" fill="var(--warn)">4 · Raised Road</text><text x="330" y="160" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">Second flood barrier</text><rect x="458" y="100" width="24" height="26" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/><polygon points="455,100 470,88 485,100" fill="var(--brand)"/><rect x="494" y="96" width="32" height="30" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/><polygon points="491,96 510,83 529,96" fill="var(--brand)"/><text x="492" y="64" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--brand)">5 · Relocated Homes</text><text x="492" y="76" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">Elevated hillside terraces</text><text x="280" y="244" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Even if an extreme wave overtops the seawall, homes &amp; schools sit safely uphill</text></svg>`,
      caption:
        "Modern tsunami resilience never relies on one wall alone — combining offshore sensors, seawalls, red-zone parks, raised roads, and hillside residential towns.",
    },
  ],
  history: {
    title: "The Miracle of Kamaishi & The Stone Tablet of Aneyoshi",
    story:
      "When the M9.0 Tōhoku earthquake rocked the coastal city of Kamaishi on 11 March 2011, junior high school students did not wait to check whether their school sat outside the official tsunami hazard line. For six years, disaster educator Professor Toshitaka Katada had trained them on three golden principles: never trust assumptions blindly, do your utmost, and be the first to evacuate so others follow. As sirens wailed, teenagers ran straight to the neighbouring elementary school, grabbed younger children by the hand, and led all ~3,000 pupils up steep hillside trails — climbing higher a second time when they spotted water rising over the harbour seawall. Within minutes, the tsunami erased their classrooms, yet **99.8% of Kamaishi's schoolchildren survived**. Just up the coast in tiny Aneyoshi, residents had followed an even older lesson carved into a 1933 hillside stone tablet after earlier killer tsunamis: *'High dwellings are the peace and harmony of our descendants. Remember the calamity of the great tsunamis. Do not build any homes below this point.'* Every single house above that stone survived 2011 dry and intact.",
  },
};
