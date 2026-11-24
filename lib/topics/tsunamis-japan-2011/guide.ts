import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "tsunamis-japan-2011",
  title: "Tsunamis & Japan 2011 Case Study",
  strand: "Risky World",
  icon: "🌊",
  summary:
    "Trace how a seafloor megathrust snap turns an invisible 1 m ocean swell into a towering 40 m wall of water, examine Japan's 2011 Tōhoku disaster and responses, and compare tectonic risk in HICs vs LICs.",
  intro:
    "At **14:46 on 11 March 2011**, one of the most powerful earthquakes ever recorded (**Magnitude 9.0**) tore open the Pacific seafloor off north-eastern Japan. Even Japan's world-leading early warnings, automatic bullet-train brakes, and 10-metre seawalls could not stop waves reaching **40 metres** from sweeping entire coastal towns inland and triggering nuclear meltdowns at Fukushima Daiichi. In this topic you will master the physics of **tsunami generation and coastal shoaling**, analyse Japan 2011's primary/secondary impacts and responses, and evaluate why tectonic disasters hurt **HICs (Japan)** and **LICs (Nepal)** so differently.",
  guide: [
    {
      id: "tsunami-causes-shoaling",
      heading: "How Subduction Earthquakes Generate Tsunamis",
      discovery: {
        problem:
          "Ships floating right above a passing tsunami in the deep Pacific Ocean rarely even notice it — the sea rises by less than 1 metre over 15 minutes! Yet 30 minutes later, that exact same wave slams into coastal towns as a 20–40 metre wall of water. Where does all that towering height suddenly come from?",
        idea: "A tsunami carries enormous energy through the **entire depth** of the ocean at jetliner speed (~800 km/h). When it enters shallow coastal water, **friction with the rising seabed slows the front of the wave**, causing the faster water behind to pile upward — shrinking wavelength and multiplying wave height dramatically (**coastal shoaling**).",
      },
      body: `The Japanese word **tsunami** means *"harbour wave"*. Unlike ordinary wind-driven surf waves — which ripple only the top few metres of the sea — a tsunami displaces the **entire vertical column of ocean water** from seafloor to surface.

**1. Generation at a Destructive Subduction Margin**
- At a **destructive (convergent) margin**, a denser oceanic plate sinks slowly beneath an overriding plate. Friction locks the two plates together for centuries, bending the edge of the overriding plate downward like a spring.
- Eventually stress exceeds friction and the **submarine megathrust fault snaps violently upward** (by 5–10+ metres vertically across hundreds of kilometres of seafloor).
- That sudden vertical jolt lifts billions of tonnes of seawater upward, sending a series of waves (a **wave train**, not a single wave) radiating outward in all directions.
- *Crucial rule:* Sideways conservative faults rarely generate big tsunamis because they move crust horizontally rather than lifting the water column vertically.

**2. Deep Open Ocean vs Coastal Shoaling**
Wave speed in deep water obeys the shallow-water gravity wave relation **{{v = sqrt(g * d)}}** (where *g* ≈ 10 m/s² and *d* is water depth in metres):
- **Deep open ocean (e.g., 4,000 m deep):** Speed reaches **~720–800 km/h** (as fast as a passenger jet!), **wavelength** is huge (**100–200+ km** between crests), and **wave height** is tiny (**~0.5–1 m**) — practically invisible to ships.
- **Shallow coastal water (coastal shoaling):** As depth drops over the continental shelf, friction with the rising seabed slows the wave front to **30–50 km/h**. Because wave energy is conserved and trailing water catches up, **wavelength compresses sharply** (down to a few km) and **wave height towers to 10–40 m**. Rather than curling like a surfing wave, a tsunami surges inland like an unstoppable, debris-filled wall of rising tide.

**3. Coastal Drawdown (Natural Warning Sign)**
When the **trough** of a tsunami reaches shore before the crest, seawater suddenly drains hundreds of metres outward, exposing fish flopping on bare mudflats — called **coastal drawdown**. Residents who know this natural sign immediately run for high ground rather than walking onto the exposed beach.

| Property | Deep Open Ocean (~4,000 m) | Shallow Coast (Shoaling) |
|---|---|---|
| Wave speed | ~720–800 km/h (jetliner pace) | ~30–50 km/h (urban traffic pace) |
| Wavelength | Very long (100–200+ km) | Compressed sharply (a few km) |
| Wave height | Low (~0.5–1 m, barely noticed) | Towering (10–40 m wall / surge) |
| Energy movement | Spread through full ocean depth | Concentrated into shallow coastal zone |`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section showing submarine subduction fault snapping upward to generate a fast low open-ocean tsunami that shoals into a towering coastal wave"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Tsunami Generation &amp; Coastal Shoaling</text><path d="M 16 112 Q 100 104 184 112 Q 268 118 340 112 Q 378 106 408 82 Q 422 70 434 94 L 444 112 L 444 196 L 16 196 Z" fill="var(--info-soft)"/><path d="M 16 112 Q 100 104 184 112 Q 268 118 340 112 Q 378 106 408 82 Q 422 70 434 94 L 444 112" fill="none" stroke="var(--info)" stroke-width="3"/><path d="M 16 196 L 270 196 Q 360 190 430 132 L 544 132 L 544 236 L 16 236 Z" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8"/><path d="M 16 218 L 138 218 L 210 236" fill="none" stroke="var(--bad)" stroke-width="3"/><polygon points="108,194 122,194 115,172" fill="var(--bad)"/><line x1="115" y1="194" x2="115" y2="128" stroke="var(--bad)" stroke-width="2.5" stroke-dasharray="4 3"/><polygon points="109,134 121,134 115,120" fill="var(--bad)"/><text x="115" y="212" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--bad)">Megathrust snaps UP</text><text x="115" y="227" text-anchor="middle" font-size="9" fill="var(--ink-2)">Displaces entire water column</text><rect x="26" y="40" width="166" height="44" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="109" y="56" text-anchor="middle" font-size="10" font-weight="800" fill="var(--info)">1 · Open Ocean (~4,000 m)</text><text x="109" y="71" text-anchor="middle" font-size="9" fill="var(--ink)">Speed ~800 km/h · Height ~1 m</text><text x="240" y="96" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-2)">Long wavelength (100–200 km)</text><line x1="168" y1="101" x2="312" y2="101" stroke="var(--ink-2)" stroke-width="1.4"/><rect x="336" y="34" width="206" height="44" rx="8" fill="var(--bad-soft)" stroke="var(--bad)"/><text x="439" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">2 · Coastal Shoaling (Shallow)</text><text x="439" y="65" text-anchor="middle" font-size="9" fill="var(--ink)">Friction slows wave → piles to 10–40 m</text><rect x="462" y="108" width="24" height="24" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><polygon points="459,108 474,97 489,108" fill="var(--accent)"/><rect x="496" y="102" width="28" height="30" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.5"/><text x="492" y="148" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Coastal town</text><text x="356" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="var(--brand)">Seabed friction slows front</text></svg>`,
      diagramCaption:
        "Upward vertical slip on a submarine subduction fault displaces the whole water column; seabed friction near shore compresses the wavelength and amplifies wave height into a 10–40 m surge.",
      workedExamples: [
        {
          title: "Calculating deep-ocean tsunami speed & travel time",
          problem:
            "Using the gravity wave speed formula {{v = sqrt(g * d)}} with g = 10 m/s², calculate the speed (in m/s and km/h) of a tsunami travelling across a 4,000 m deep ocean basin, and find how many minutes it takes to cover 180 km.",
          steps: [
            "Substitute d = 4,000 m and g = 10 m/s²: v = {{sqrt(10 * 4000)}} = {{sqrt(40000)}} = 200 m/s.",
            "Convert m/s to km/h by multiplying by 3.6: 200 × 3.6 = 720 km/h.",
            "Find travel time across 180 km: time = {{180 / 720}} = 0.25 hours = 0.25 × 60 = 15 minutes.",
          ],
          answer: "200 m/s (720 km/h); reaches coast in 15 minutes.",
          yourTurn: {
            question:
              "Using {{v = sqrt(10 * d)}}, calculate the speed in **m/s** of a tsunami entering coastal water that is only **90 m** deep.",
            answer: {
              type: "number",
              value: 30,
              display: "30 m/s",
            },
            solution:
              "Substitute d = 90 m: v = {{sqrt(10 * 90)}} = {{sqrt(900)}} = **30 m/s** (108 km/h — much slower than 200 m/s offshore, causing the wave to pile upward!).",
          },
        },
        {
          title: "Explaining why conservative margins rarely trigger tsunamis",
          problem:
            "A Magnitude 7.8 earthquake strikes along an underwater conservative (transform) plate boundary. Explain why it is far less likely to generate a catastrophic tsunami than a Magnitude 7.8 subduction earthquake.",
          steps: [
            "Describe plate motion at a conservative margin: plates grind horizontally sideways past each other rather than snapping vertically.",
            "Link to water displacement: generating a major tsunami requires sudden **vertical uplift** of the seabed to shove the overlying water column upward.",
          ],
          answer:
            "Conservative faults slip sideways horizontally and displace little water vertically, whereas destructive megathrusts snap upward to lift a huge column of seawater.",
        },
      ],
      keyPoints: [
        "Most major tsunamis occur at **destructive subduction margins** when a locked megathrust fault snaps **vertically upward**, displacing the entire water column.",
        "In the deep open ocean, tsunamis move at **~720–800 km/h** with long wavelengths (100–200 km) and low heights (~1 m).",
        "During **coastal shoaling**, seabed friction slows the wave front, compresses wavelength, and forces trailing water upward into **10–40 m** walls of water.",
        "**Coastal drawdown** (sea suddenly retreating far offshore) is a critical natural warning sign to evacuate to high ground immediately — and remember tsunamis arrive as a **series of waves**, not just one.",
      ],
      whyItWorks:
        "Wave energy travels as a continuous flow (power ∝ height² × speed). When shallow water cuts the tsunami's speed from 200 m/s down to 20 m/s (a tenfold slowdown), the same energy must squeeze into a shorter space, forcing water height to shoot upward — just like fast cars bunching up on a motorway when traffic ahead hits a sudden bottleneck.",
      strategies: [
        "Trace the **four-link shoaling sequence** in exam questions: *shallower seabed → friction slows wave front → wavelength shrinks → trailing water piles up (height increases)*.",
        "Always check units when calculating speed: multiply **m/s by 3.6** to get **km/h**, and multiply **hours by 60** to get **minutes**.",
      ],
      thinkDeeper:
        "Why is the **second or third wave** of a tsunami wave train often taller and deadlier than the first wave — and why do people sometimes return to coastal homes far too soon?",
    },
    {
      id: "japan-2011-impacts",
      heading: "Japan 2011 (Tōhoku): Causes & Primary/Secondary Impacts",
      discovery: {
        problem:
          "Japan spent billions building reinforced 10-metre coastal seawalls and the strictest earthquake-proof skyscrapers on Earth. When the M9.0 Tōhoku earthquake struck on 11 March 2011, skyscrapers in Tokyo swayed safely without collapsing — yet ~18,500 people still died and damage topped US$235 billion. What went unexpectedly wrong?",
        idea: "Japan's buildings survived the M9.0 shaking remarkably well — **over 90% of deaths were caused by drowning in the tsunami**, not collapsing buildings! The seafloor dropped coastal land by ~1 metre while the 15–40 m tsunami overtopped 10 m seawalls, sweeping towns away and knocking out backup cooling generators at the Fukushima Daiichi nuclear plant.",
      },
      body: `The **Great East Japan (Tōhoku) Earthquake and Tsunami** of **11 March 2011** is one of the most thoroughly studied tectonic disasters in geography.

**1. Tectonic Cause (11 March 2011, 14:46 local time)**
- Along the **Japan Trench** (a **destructive subduction margin**), the dense oceanic **Pacific Plate** subducts westward beneath the **Okhotsk microplate** (part of the **North American / Eurasian** convergence zone) at ~8–9 cm/year.
- Locked rock ruptured along a **~500 km** megathrust zone at a shallow depth (~24–30 km), about **70–130 km east of Sendai**, unleashing a **Magnitude 9.0** earthquake — the strongest ever recorded in Japan.
- The seafloor snapped upward by **up to 7–10 m**, displacing a colossal water column while coastal eastern Honshu actually subsided (sank) by up to 1 metre.

**2. Primary Impacts (Direct from Shaking &amp; Tsunami)**
- **Human loss:** Approximately **18,500 people dead or missing** (~15,900 confirmed dead and ~2,500 missing), plus over **6,000 injured**; more than **90% died by drowning** in the tsunami rather than building collapse.
- **Extreme wave run-up:** Tsunami waves arrived in **15–30 minutes**, reaching **10–15 m** along flat Sendai plains (traveling up to **10 km inland**, submerging **Sendai Airport**) and towering up to **38–40.5 m** in narrow funnel-shaped V-bays along the Sanriku coast (such as Miyako), overtopping existing 10 m seawalls.
- **Physical destruction:** Over **120,000 buildings completely destroyed** (and 1 million+ damaged), coastal towns like Minamisanriku and Rikuzentakata flattened, and roads, railways, and ports swept away.

**3. Secondary Impacts (Knock-on Disasters)**
- **Fukushima Daiichi nuclear meltdowns:** A ~14–15 m tsunami wave overtopped the plant's 5.7 m seawall, flooding basement emergency diesel generators. Without cooling power, **three reactor cores melted down**, releasing radioactive fallout and forcing the long-term evacuation of **~150,000+ residents** from a 20 km exclusion zone.
- **Displacement &amp; infrastructure crisis:** Over **450,000 people** were initially displaced into shelters in freezing winter snow; **4.4 million homes** lost electricity and **1.5 million** lost running water.
- **Global economic shock ($235B+):** The World Bank estimated direct economic damage at **US$235 billion+** — the costliest natural disaster in world history — disrupting global car and electronics supply chains (Toyota, Sony, Honda) and shutting down Japan's nuclear power fleet.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Japan 2011 Tohoku disaster summary showing Pacific Plate subduction at the Japan Trench, 14-40 m tsunami overtopping seawalls, and primary versus secondary impacts"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Japan 2011 (Tōhoku): Cause → Primary → Secondary Chain</text><rect x="18" y="38" width="160" height="194" rx="10" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.8"/><text x="98" y="58" text-anchor="middle" font-size="11" font-weight="800" fill="var(--info)">TECTONIC CAUSE</text><text x="98" y="76" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">11 March 2011 · M9.0</text><text x="98" y="96" text-anchor="middle" font-size="9" fill="var(--ink-2)">Pacific Plate subducts</text><text x="98" y="110" text-anchor="middle" font-size="9" fill="var(--ink-2)">under Okhotsk / Eurasian</text><text x="98" y="128" text-anchor="middle" font-size="9" fill="var(--ink-2)">Japan Trench megathrust</text><text x="98" y="142" text-anchor="middle" font-size="9" fill="var(--ink-2)">snaps up 7–10 m</text><text x="98" y="162" text-anchor="middle" font-size="9" fill="var(--ink-2)">70–130 km off Sendai</text><text x="98" y="182" text-anchor="middle" font-size="9" font-weight="700" fill="var(--info)">Waves hit coast in</text><text x="98" y="196" text-anchor="middle" font-size="9" font-weight="700" fill="var(--info)">15–30 minutes</text><polygon points="182,135 196,127 196,143" fill="var(--ink-2)" transform="rotate(180 189 135)"/><rect x="200" y="38" width="160" height="194" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.8"/><text x="280" y="58" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">PRIMARY IMPACTS</text><text x="280" y="78" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Waves up to 40 m</text><text x="280" y="96" text-anchor="middle" font-size="9" fill="var(--ink-2)">Overtopped 10 m seawalls</text><text x="280" y="114" text-anchor="middle" font-size="9" font-weight="700" fill="var(--bad)">~18,500 dead/missing</text><text x="280" y="128" text-anchor="middle" font-size="9" fill="var(--ink-2)">(&gt;90% by drowning)</text><text x="280" y="148" text-anchor="middle" font-size="9" fill="var(--ink-2)">Sendai Airport flooded</text><text x="280" y="162" text-anchor="middle" font-size="9" fill="var(--ink-2)">10 km inland surge</text><text x="280" y="182" text-anchor="middle" font-size="9" fill="var(--ink-2)">120,000+ buildings</text><text x="280" y="196" text-anchor="middle" font-size="9" fill="var(--ink-2)">completely destroyed</text><polygon points="364,135 378,127 378,143" fill="var(--ink-2)" transform="rotate(180 371 135)"/><rect x="382" y="38" width="160" height="194" rx="10" fill="var(--warn-soft)" stroke="var(--warn)" stroke-width="1.8"/><text x="462" y="58" text-anchor="middle" font-size="11" font-weight="800" fill="var(--warn)">SECONDARY IMPACTS</text><text x="462" y="78" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Fukushima Meltdowns</text><text x="462" y="96" text-anchor="middle" font-size="9" fill="var(--ink-2)">15 m wave flooded backup</text><text x="462" y="110" text-anchor="middle" font-size="9" fill="var(--ink-2)">diesels → 3 meltdowns</text><text x="462" y="128" text-anchor="middle" font-size="9" fill="var(--ink-2)">~150,000 nuclear evacuees</text><text x="462" y="148" text-anchor="middle" font-size="9" font-weight="700" fill="var(--warn)">US$235B+ Cost</text><text x="462" y="164" text-anchor="middle" font-size="9" fill="var(--ink-2)">450,000 displaced in snow</text><text x="462" y="180" text-anchor="middle" font-size="9" fill="var(--ink-2)">4.4M without power</text><text x="462" y="196" text-anchor="middle" font-size="9" fill="var(--ink-2)">Global car/tech shortages</text></svg>`,
      diagramCaption:
        "Notice the cascade in Tōhoku 2011: an offshore M9.0 subduction quake triggered a primary 40 m tsunami, which in turn triggered the secondary Fukushima nuclear crisis and US$235B+ global supply-chain shock.",
      workedExamples: [
        {
          title: "Explaining the Fukushima Daiichi chain of failure",
          problem:
            "Explain how a natural tsunami wave led to the secondary nuclear disaster at Fukushima Daiichi in March 2011.",
          steps: [
            "Note that the reactors shut down automatically and survived the M9.0 earthquake shaking intact.",
            "Identify the engineering mismatch: a ~14–15 m tsunami overtopped the plant's 5.7 m coastal seawall.",
            "Trace the technical failure: seawater flooded the low-lying basement diesel backup generators, cutting cooling-pump electricity so three reactor cores overheated and melted down, releasing radiation and forcing a 20 km evacuation.",
          ],
          answer:
            "The ~15 m tsunami overtopped Fukushima's 5.7 m seawall and flooded basement backup generators, disabling reactor cooling pumps and causing three nuclear meltdowns and radiation evacuations.",
          yourTurn: {
            question:
              "At the Fukushima Daiichi nuclear plant, a 15 m tsunami overtopped a 5.7 m seawall. By how many metres did the wave exceed the top of the seawall?",
            answer: {
              type: "number",
              value: 9.3,
              display: "9.3 m",
            },
            solution:
              "Overtopping height = 15 − 5.7 = **9.3 m** of seawater pouring over the defence wall into the generator rooms.",
          },
        },
        {
          title: "Why narrow V-shaped bays experienced 40 m waves",
          problem:
            "On the open Sendai plain, waves averaged 10–15 m, yet inside narrow Sanriku coastal inlets waves reached nearly 40 m. Explain why coastline shape changed wave height so dramatically.",
          steps: [
            "Describe the coastline shape: Sanriku has steep, narrow, V-shaped bays (rias) that funnel incoming seawater inward.",
            "Link funnelling to wave height: squeezing the same huge volume of water into a narrower and shallower channel forces water to pile much higher up the valley walls (run-up).",
          ],
          answer:
            "Narrow V-shaped bays funnelled and compressed the incoming tsunami sideways as well as vertically, amplifying coastal run-up up to 40 m.",
        },
      ],
      keyPoints: [
        "**Date, plate margin &amp; magnitude:** 11 March 2011, M9.0 destructive subduction earthquake along the Japan Trench (Pacific Plate beneath Okhotsk/Eurasian plate).",
        "**Primary impacts:** Waves up to **40 m** overtopped 10 m seawalls, killing/missing **~18,500 people** (>90% by drowning), flooding Sendai Airport 10 km inland, and destroying 120,000+ buildings.",
        "**Secondary impacts:** **Fukushima Daiichi nuclear meltdowns** (~150,000+ nuclear evacuees), 450,000 displaced in snow, 4.4M without electricity, and **US$235B+** in economic losses disrupting global supply chains.",
        "Always distinguish clearly between **earthquake shaking** (which Japan's aseismic buildings largely survived) and the **tsunami surge** (which caused >90% of deaths and flooded Fukushima).",
      ],
      whyItWorks:
        "Even world-class defences fail when engineers design for *recent historical averages* rather than rare geological extremes. Planners built seawalls for ~6–10 m tsunamis typical of M8 quakes — overlooking geological sand layers proving that rare M9 megathrusts strike Tōhoku roughly once every 1,000 years.",
      strategies: [
        "Memorise the **5 anchor facts** for Japan 2011: **11 March 2011 · M9.0 · 40 m max wave · ~18,500 dead/missing · Fukushima + $235B+**.",
        "Separate **primary** (drowning, washed-away towns, Sendai Airport) from **secondary** (Fukushima meltdowns, 450,000 in cold shelters, power cuts, global car/tech factory shutdowns).",
      ],
      thinkDeeper:
        "Why did Japan's economic damage ($235B+) eclipse every other natural disaster in history even though its death toll (~18,500) was more than ten times lower than the 2004 Indian Ocean tsunami (~230,000)?",
    },
    {
      id: "japan-2011-responses",
      heading: "Japan 2011: Immediate & Long-Term Responses",
      discovery: {
        problem:
          "At 14:46 on 11 March 2011, 27 Shinkansen bullet trains were speeding along north-eastern Japan at up to 270 km/h carrying thousands of passengers. How many passengers died on those Shinkansen trains during the Magnitude 9.0 earthquake?",
        idea: "**Zero!** Japan's Earthquake Early Warning system detected the faster, less-destructive **P-waves** seconds before destructive **S-waves** arrived, automatically cutting track power and triggering emergency brakes on all 27 bullet trains — bringing every single train to a safe stop without a single derailment or death.",
      },
      body: `Geographers divide disaster management into **immediate responses** (seconds to days: saving lives and meeting basic survival needs) and **long-term responses** (months to years: rebuilding safer, reducing future risk, and changing national policy).

**1. Immediate Responses (Seconds to Weeks)**
- **Early-warning alerts &amp; automatic shutdowns:** Within **seconds** of P-wave detection, the Japan Meteorological Agency (JMA) broadcast automatic SMS cell-phone alarms, TV/radio interruptions, and coastal sirens — warning millions to duck and head for high ground. Automatic braking safely halted **all 27 Shinkansen bullet trains** with **zero fatalities**.
- **Community evacuation drills:** Annual school and neighbourhood drills saved tens of thousands — famously in **Kamaishi**, where 99.8% of ~3,000 schoolchildren immediately led younger pupils uphill to safety (the *"Miracle of Kamaishi"*).
- **Search, rescue &amp; aid:** Japan deployed **~100,000 Self-Defense Force (SDF) troops** within 48 hours alongside search-and-rescue teams from over 20 nations (including UK, USA, China, and Singapore), setting up over 2,000 heated shelters with food, blankets, and medical teams.
- **Nuclear containment:** Engineers and firefighters risked severe radiation exposure to pump seawater onto overheating Fukushima reactors and established an immediate **20 km exclusion zone**.

**2. Long-Term Responses (Months to Years)**
- **Taller seawalls &amp; coastal engineering:** Japan invested tens of billions of dollars building **~400 km of new reinforced concrete seawalls** up to **12.5–14.7 m** high along the Tōhoku coast, alongside coastal pine forests and elevated coastal highways acting as second-line flood barriers. *(Debate: critics note giant walls block ocean views, harm fisheries/tourism, and can still foster false security.)*
- **Land-use zoning &amp; relocating towns uphill:** Severely damaged towns (such as Rikuzentakata and Minamisanriku) **raised ground levels by 10+ m** or permanently **relocated residential neighbourhoods onto hillsides**, banning homes from low-lying tsunami red zones (kept for parks, ports, or warehouses).
- **Upgraded tsunami forecasting:** Deploying **S-net** — 150+ seafloor pressure and seismic observatories wired by fibre-optic cable directly along the Japan Trench to measure real-time wave height offshore rather than underestimating M9 quakes.
- **Nuclear safety overhaul &amp; energy shift:** Japan temporarily shut down all nuclear reactors for strict new safety rules (elevated backup generators, higher flood walls), accelerated solar/offshore wind **renewable energy**, and imported LNG — though reducing nuclear power also raised fossil-fuel import bills and CO₂ emissions temporarily.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline comparing Japan 2011 immediate responses in seconds to weeks with long-term rebuilding responses over months to years"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Japan 2011: Immediate vs Long-Term Responses</text><line x1="32" y1="54" x2="528" y2="54" stroke="var(--brand)" stroke-width="3"/><circle cx="150" cy="54" r="7" fill="var(--bad)"/><circle cx="410" cy="54" r="7" fill="var(--good)"/><text x="150" y="42" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">IMMEDIATE (Seconds → Weeks)</text><text x="410" y="42" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">LONG-TERM (Months → Years)</text><rect x="20" y="72" width="252" height="158" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.6"/><text x="34" y="94" font-size="10" font-weight="800" fill="var(--ink)">• P-Wave SMS &amp; TV Alerts:</text><text x="42" y="109" font-size="9.5" fill="var(--ink-2)">Stopped 27 Shinkansen trains (0 deaths)</text><text x="34" y="131" font-size="10" font-weight="800" fill="var(--ink)">• Rehearsed Evacuation Drills:</text><text x="42" y="146" font-size="9.5" fill="var(--ink-2)">Saved tens of thousands (Kamaishi 99.8%)</text><text x="34" y="168" font-size="10" font-weight="800" fill="var(--ink)">• 100,000 SDF Troops + Aid:</text><text x="42" y="183" font-size="9.5" fill="var(--ink-2)">Search &amp; rescue, 2,000 shelters, food/water</text><text x="34" y="205" font-size="10" font-weight="800" fill="var(--ink)">• Fukushima 20 km Exclusion:</text><text x="42" y="220" font-size="9.5" fill="var(--ink-2)">Seawater cooling &amp; radiation evacuation</text><rect x="288" y="72" width="252" height="158" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.6"/><text x="302" y="94" font-size="10" font-weight="800" fill="var(--ink)">• Taller Seawalls (up to 14+ m):</text><text x="310" y="109" font-size="9.5" fill="var(--ink-2)">~400 km rebuilt walls + elevated roads</text><text x="302" y="131" font-size="10" font-weight="800" fill="var(--ink)">• Relocating Towns to High Ground:</text><text x="310" y="146" font-size="9.5" fill="var(--ink-2)">Homes banned from low tsunami red zones</text><text x="302" y="168" font-size="10" font-weight="800" fill="var(--ink)">• S-net Seafloor Sensors:</text><text x="310" y="183" font-size="9.5" fill="var(--ink-2)">150+ deep pressure gauges on Japan Trench</text><text x="302" y="205" font-size="10" font-weight="800" fill="var(--ink)">• Nuclear Review &amp; Renewables:</text><text x="310" y="220" font-size="9.5" fill="var(--ink-2)">Higher backup generators; solar/wind growth</text></svg>`,
      diagramCaption:
        "Immediate responses focus on saving lives within seconds to weeks, while long-term responses transform coastal engineering, land-use planning, forecasting, and energy policy for decades.",
      workedExamples: [
        {
          title: "Evaluating Japan's new 14-metre seawalls",
          problem:
            "Give one major argument in favour of Japan's post-2011 14-metre seawalls and one significant geographical criticism against them.",
          steps: [
            "Argument in favour: Taller reinforced walls (up to 14 m) can block frequent moderate tsunamis completely and buy precious extra evacuation minutes even during extreme megathrust surges.",
            "Criticism / limitation: Giant concrete walls are extraordinarily expensive, sever coastal fishing towns from ocean views (hurting tourism and marine ecosystems), and can create a dangerous false sense of security if a 25–40 m wave still overtops them.",
          ],
          answer:
            "Pro: Blocks moderate tsunamis and buys evacuation time during major waves. Con: Very costly, harms tourism/fisheries by cutting off ocean access, and risks false security during extreme 30–40 m events.",
          yourTurn: {
            question:
              "Which fast-travelling seismic waves were detected first by Japan's early-warning sensors to trigger automatic Shinkansen braking before destructive S-waves arrived? (Write two characters, e.g. P-waves or S-waves)",
            answer: {
              type: "text",
              accept: ["p-waves", "p waves", "p wave", "p-wave", "p", "primary waves", "primary wave"],
              display: "P-waves",
            },
            solution:
              "**P-waves** (primary compressional waves) travel fastest through Earth's crust, giving automatic warning systems vital seconds before slower, destructive S-waves hit.",
          },
        },
        {
          title: "Classifying responses as immediate vs long-term",
          problem:
            "Sort these four actions after Japan 2011 into immediate or long-term responses: (1) Automatic Shinkansen braking, (2) Relocating homes to hillside terraces, (3) Deploying 100,000 SDF rescue troops, (4) Installing 150 S-net seafloor sensors.",
          steps: [
            "Check timing & purpose: actions happening within seconds to days to save lives are **immediate** → (1) Shinkansen braking and (3) SDF search & rescue.",
            "Actions taking months to years to rebuild safer infrastructure and upgrade warning networks are **long-term** → (2) Relocating homes uphill and (4) S-net seafloor sensors.",
          ],
          answer: "Immediate: (1) & (3). Long-term: (2) & (4).",
        },
      ],
      keyPoints: [
        "**Immediate responses** (seconds–weeks): P-wave SMS/TV early warnings, automatic braking on all 27 Shinkansen trains (zero deaths), annual school drills (99.8% survival in Kamaishi), 100,000 SDF troops + international aid, and Fukushima 20 km evacuation.",
        "**Long-term responses** (months–years): ~400 km of taller seawalls (up to 14 m), permanently relocating homes onto higher ground, S-net seafloor pressure sensors, and stricter nuclear safety plus renewable energy expansion.",
        "Always link **preparation before the hazard** (drills, P-wave sensors, aseismic building codes) to why Japan's death toll was far lower than it could have been for an M9.0 catastrophe.",
        "Top exam answers **evaluate trade-offs** — e.g., giant seawalls protect coasts yet harm tourism/ecosystems and cannot beat relocating homes uphill.",
      ],
      whyItWorks:
        "P-waves travel at ~6–8 km/s while destructive S-waves travel at ~3.5–4.5 km/s. Because electronic radio/fibre-optic signals travel at nearly the speed of light (~300,000 km/s), coastal sensors close to the epicentre can alert Tokyo and bullet-train control rooms 15–60 seconds before violent shaking arrives!",
      strategies: [
        "Apply the **time-horizon test**: saving lives & emergency shelter = **immediate**; rebuilding safer, zoning land, upgrading energy/warning systems = **long-term**.",
        "Include one **balanced evaluation** sentence on seawalls vs relocating uphill to earn top-level Year 9 Geography marks.",
      ],
      thinkDeeper:
        "Why did Japan's initial tsunami alert in March 2011 underestimate the wave height at just 3–6 metres for the first 20 minutes — and how does the new S-net seafloor cable network fix that exact flaw?",
    },
    {
      id: "hic-vs-lic-comparison",
      heading: "Comparing Tectonic Impacts: HIC (Japan) vs LIC (Nepal)",
      discovery: {
        problem:
          "Compare two devastating Risky World disasters: **Japan 2011 (HIC)** suffered an **M9.0** earthquake releasing roughly **60 times more energy** than **Nepal 2015 (LIC, M7.8)** — plus a 40-metre tsunami and nuclear meltdowns! Yet Nepal's economic loss ($5B) was **25% of its entire annual GDP**, whereas Japan's staggering $235B loss was only **~4% of Japan's GDP**, and thousands died in Nepal purely from collapsing buildings. Why do HICs and LICs experience tectonic disasters so differently?",
        idea: "Wealth shapes vulnerability in a striking paradox: **HICs lose far more total money** (because expensive insured infrastructure, factories, and power plants are damaged), whereas **LICs suffer higher proportional death tolls, catastrophic % GDP losses, slower recovery, and heavier dependence on foreign aid**.",
      },
      body: `Comparing an **HIC case study (Japan 2011, Tōhoku)** with an **LIC case study (Nepal 2015, Gorkha)** reveals how development level, governance, and geography shape human vulnerability.

| Comparison Factor | Japan 2011 (HIC — Tōhoku) | Nepal 2015 (LIC — Gorkha) |
|---|---|---|
| Plate margin &amp; hazard | Destructive subduction (M9.0 + 40 m tsunami) | Continental collision (M7.8, shallow focus ~8–15 km, landlocked) |
| GDP per capita (approx. at event) | High (~US$46,000) | Very low (~US$750) |
| Human toll | ~18,500 dead/missing (&gt;90% tsunami drowning; very few building-collapse deaths) | ~9,000 dead, ~22,000 injured, 3.5 million homeless (mostly unreinforced building collapse) |
| Total economic cost | **~US$235 billion+** (highest ever recorded) | **~US$5 billion** |
| Economic cost as **% of national GDP** | **~4% of Japan's GDP** (absorbed via insurance &amp; state reserves) | **~25% of Nepal's GDP** (crippling long-term blow) |
| Building quality | Strict enforced aseismic building codes (base isolation, cross-bracing) | Many informal brick/mud-mortar homes; poorly enforced codes |
| Early warning &amp; healthcare | P-wave SMS alerts, Shinkansen auto-brakes, rapid SDF &amp; abundant hospitals | No early warning, mountain landslides cut roads, scarce doctors/ambulances |
| Aid &amp; recovery speed | Largely self-funded; key roads reopened in weeks; long-term resilience upgrades | Heavily dependent on international NGOs &amp; foreign aid; slow rebuilding taking years |

**Four Reasons for the HIC vs LIC Contrast**
1. **Building quality &amp; governance:** Strict Japanese building laws saved tens of thousands during M9.0 shaking — skyscrapers swayed instead of pancaking. In Nepal (LIC), rapid urban growth in Kathmandu and rural poverty left millions in unreinforced stone and brick buildings that collapsed immediately.
2. **Economic paradox (Absolute $ vs % GDP):** HIC cities pack high-value insured ports, bullet trains, nuclear plants, and microchip factories into hazard zones — driving astronomical dollar losses ($235B). Yet Japan's huge economy (~$5.9 trillion GDP) and widespread insurance cushioned recovery, whereas Nepal's $5B loss wiped out a quarter of its entire national income and devastated its vital mountain tourism sector.
3. **Emergency response &amp; healthcare:** Japan mobilised 100,000 trained SDF troops, helicopters, and modern hospitals within hours. In landlocked, mountainous Nepal, landslides blocked narrow mountain roads, leaving remote Langtang and Gorkha villages waiting days for foreign helicopters and international medical aid.
4. **Physical geography still matters:** Even HIC wealth cannot erase extreme physical forces — Japan's higher absolute death toll (~18,500 vs ~9,000) occurred ONLY because an extraordinary M9.0 megathrust triggered a 40 m coastal tsunami, whereas Nepal's M7.8 inland quake lacked any ocean tsunami.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side bar chart comparing Japan 2011 HIC and Nepal 2015 LIC on absolute economic damage versus percentage of GDP lost"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)"/><text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The HIC vs LIC Tectonic Paradox: Japan 2011 vs Nepal 2015</text><line x1="280" y1="36" x2="280" y2="232" stroke="var(--line)" stroke-dasharray="4 4"/><text x="142" y="46" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">Absolute Economic Cost (US$ Billion)</text><text x="142" y="60" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">HIC loses vastly more total $ (expensive assets)</text><line x1="42" y1="184" x2="246" y2="184" stroke="var(--ink-2)" stroke-width="1.5"/><rect x="70" y="76" width="56" height="108" rx="6" fill="var(--brand)"/><text x="98" y="70" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">$235B+</text><text x="98" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Japan (HIC)</text><text x="98" y="214" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">M9.0 + Tsunami</text><rect x="164" y="178" width="56" height="6" rx="2" fill="var(--bad)"/><text x="192" y="171" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">$5B</text><text x="192" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Nepal (LIC)</text><text x="192" y="214" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">M7.8 Collision</text><text x="418" y="46" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">Economic Burden (% of National GDP)</text><text x="418" y="60" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">LIC suffers far deeper relative economic shock</text><line x1="316" y1="184" x2="520" y2="184" stroke="var(--ink-2)" stroke-width="1.5"/><rect x="344" y="166" width="56" height="18" rx="4" fill="var(--brand)"/><text x="372" y="159" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">~4% GDP</text><text x="372" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Japan (HIC)</text><text x="372" y="214" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">Insured &amp; self-funded</text><rect x="438" y="76" width="56" height="108" rx="6" fill="var(--bad)"/><text x="466" y="70" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">~25% GDP</text><text x="466" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Nepal (LIC)</text><text x="466" y="214" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">Aid-dependent recovery</text><text x="280" y="240" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Always compare BOTH total dollars AND % of GDP in HIC vs LIC evaluations!</text></svg>`,
      diagramCaption:
        "Japan's absolute bill ($235B+) was 47 times larger than Nepal's ($5B), yet relative to national income Nepal suffered a shock over six times deeper (~25% of GDP vs ~4% of GDP).",
      workedExamples: [
        {
          title: "Calculating & interpreting economic burden (% of GDP)",
          problem:
            "Japan's 2011 disaster caused ~$235 billion in damage in an economy with ~$5,875 billion GDP. Nepal's 2015 earthquake caused ~$5 billion in damage in an economy with ~$20 billion GDP. Calculate each nation's economic loss as a percentage of GDP and explain what this reveals.",
          steps: [
            "Japan % of GDP = {{235 / 5875}} × 100 = 0.04 × 100 = **4%**.",
            "Nepal % of GDP = {{5 / 20}} × 100 = 0.25 × 100 = **25%**.",
            "Interpret: Although Japan lost 47 times more total dollars due to high-value infrastructure, Nepal lost a **quarter** of its entire annual economy — leaving it far more dependent on foreign aid and facing slower recovery.",
          ],
          answer: "Japan: 4% of GDP; Nepal: 25% of GDP — showing much deeper relative economic vulnerability in the LIC.",
          yourTurn: {
            question:
              "If Japan's 2011 economic loss was $235 billion and Nepal's 2015 economic loss was $5 billion, how many times larger was Japan's absolute dollar loss than Nepal's?",
            answer: {
              type: "number",
              value: 47,
              display: "47",
            },
            solution:
              "Ratio = {{235 / 5}} = **47 times** larger in absolute US dollars — yet a much smaller fraction of Japan's total GDP.",
          },
        },
        {
          title: "Comparing why people died in Japan 2011 vs Nepal 2015",
          problem:
            "Why did building collapse cause the majority of deaths in Nepal 2015 (M7.8), whereas Japan 2011 (M9.0) experienced very few deaths from building collapse despite vastly stronger shaking?",
          steps: [
            "Explain Japan (HIC): Strictly enforced aseismic building codes (cross-bracing, base isolation, flexible steel frames) allowed skyscrapers and modern homes to sway without collapsing during M9.0 shaking; >90% of deaths came instead from the 40 m tsunami.",
            "Explain Nepal (LIC): Rapid unplanned urbanisation, poverty, and weak enforcement left millions in unreinforced brick and mud-mortar homes that collapsed rapidly under shallow M7.8 shaking.",
          ],
          answer:
            "Japan's strictly enforced aseismic building codes kept buildings standing during M9.0 shaking (tsunami drowning caused >90% of deaths), whereas unreinforced brick/mud buildings in LIC Nepal collapsed widely under M7.8 shaking.",
        },
      ],
      keyPoints: [
        "**HICs (Japan)** suffer vastly higher **absolute economic costs** ($235B+) because dense, high-value, insured infrastructure, factories, and ports are damaged.",
        "**LICs (Nepal)** suffer far higher **relative economic shock** (~25% of GDP vs ~4% in Japan), much **higher deaths from building collapse**, slower recovery, and heavier dependence on international aid.",
        "Always evaluate **both development factors** (building codes, healthcare, early warning, insurance, governance) **and physical factors** (magnitude, depth, coastal tsunami vs inland mountains).",
        "Beware the common trap: Japan 2011 had more total deaths (~18,500) than Nepal 2015 (~9,000) ONLY because Japan faced an M9.0 quake (~60× more energy) **plus a 40 m tsunami** — for earthquake shaking alone, Japan's building survival rate vastly outperformed Nepal's.",
      ],
      whyItWorks:
        "Natural hazards only become **disasters** where physical hazard meets human vulnerability (`Risk = Hazard × Exposure × Vulnerability ÷ Capacity to Cope`). Wealth raises the dollar value of exposed assets (higher absolute $ cost), while simultaneously slashing vulnerability and raising coping capacity (lower building-collapse deaths and faster self-funded recovery).",
      strategies: [
        "Use the **exact comparative structure** (`Whereas Japan… Nepal…`) backed by paired statistics (`$235B / 4% GDP` vs `$5B / 25% GDP`).",
        "Never claim wealth alone explains everything — always acknowledge **physical magnitude and hazard type** (M9.0 + 40 m tsunami vs M7.8 inland collision) for top-band Geography evaluation.",
      ],
      thinkDeeper:
        "Why might a rapidly growing **NEE** (Newly Emerging Economy) sometimes suffer the 'worst of both worlds' — rising absolute economic costs like an HIC alongside weak building enforcement like an LIC?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "How does a subduction earthquake generate a tsunami?",
        back: "A locked submarine megathrust fault at a destructive margin snaps violently upward, lifting and displacing the entire vertical column of ocean water.",
      },
      {
        front: "Why do conservative (transform) faults rarely trigger big tsunamis?",
        back: "Plates grind sideways horizontally rather than snapping vertically upward, so very little water column is lifted.",
      },
      {
        front: "Open-ocean tsunami speed, wavelength & height (~4,000 m depth)?",
        back: "Speed ~720–800 km/h (jetliner pace), very long wavelength (100–200+ km), low wave height (~0.5–1 m, barely noticed by ships).",
      },
      {
        front: "What is coastal shoaling?",
        back: "As a tsunami enters shallow coastal water, seabed friction slows the wave front, shrinking wavelength and piling trailing water upward into a 10–40 m wall.",
      },
      {
        front: "What is coastal drawdown and what must people do if they see it?",
        back: "When a tsunami trough arrives first, sea water suddenly retreats far offshore exposing bare seabed — people must immediately evacuate to high ground.",
      },
      {
        front: "State the date, magnitude & plate margin of the Japan 2011 Tōhoku disaster.",
        back: "11 March 2011; Magnitude 9.0; destructive subduction margin along the Japan Trench (Pacific Plate subducting beneath Okhotsk/Eurasian plate).",
      },
      {
        front: "State four key primary impacts of Japan 2011.",
        back: "1) Waves up to 40 m overtopped 10 m seawalls; 2) ~18,500 dead/missing (>90% drowning); 3) Sendai Airport & towns swept away (10 km inland); 4) 120,000+ buildings destroyed.",
      },
      {
        front: "State three major secondary impacts of Japan 2011.",
        back: "1) Fukushima Daiichi 3 nuclear reactor meltdowns (~150,000+ nuclear evacuees); 2) US$235B+ economic cost (costliest disaster ever) & global auto/tech shortages; 3) 450,000 displaced in snow & 4.4M without power.",
      },
      {
        front: "How did Japan's immediate early-warning system save bullet-train passengers in 2011?",
        back: "Seismometers detected fast P-waves seconds before destructive S-waves, automatically cutting power and braking all 27 Shinkansen trains safely with zero deaths.",
      },
      {
        front: "Give three long-term responses Japan implemented after 2011.",
        back: "1) ~400 km of taller seawalls (up to 14+ m); 2) Relocating homes onto high ground / banning low red-zone housing; 3) S-net seafloor pressure gauges & nuclear safety overhaul + renewable shift.",
      },
      {
        front: "What is the HIC vs LIC economic paradox (Japan 2011 vs Nepal 2015)?",
        back: "HIC Japan lost vastly more total money ($235B+ vs $5B) due to expensive insured assets, yet LIC Nepal suffered a far deeper relative shock (~25% of GDP vs ~4% of GDP).",
      },
      {
        front: "Why did most people die in Japan 2011 vs Nepal 2015?",
        back: "In Japan (HIC), strict aseismic building codes kept structures standing so >90% died by tsunami drowning; in Nepal (LIC), unreinforced brick/mud buildings collapsed widely during M7.8 shaking.",
      },
      {
        front: "What is the tsunami wave-speed formula?",
        back: "{{v = sqrt(g * d)}} (with g ≈ 10 m/s² and depth d in metres) — deeper water means faster speed; shallower water means slower speed and taller shoaling waves.",
      },
      {
        front: "Give one pro and one con of Japan's new 14-metre concrete seawalls.",
        back: "Pro: Blocks moderate tsunamis and buys evacuation minutes during extreme waves. Con: Extremely costly, blocks sea views/tourism/ecosystems, and risks false security.",
      },
    ],
    mustKnow: [
      "Explain step-by-step how vertical megathrust uplift at a destructive margin generates a tsunami.",
      "Compare open-ocean tsunami characteristics (~800 km/h, 100–200 km wavelength, ~1 m height) with coastal shoaling (30–50 km/h, compressed wavelength, 10–40 m height).",
      "Calculate tsunami speed using {{v = sqrt(10 * d)}} (converting m/s to km/h via ×3.6) and coastal arrival time.",
      "Recognise coastal drawdown as a natural warning sign and remember tsunamis arrive as a multi-wave train.",
      "Recall exact Japan 2011 case study data: 11 March 2011, M9.0, Pacific/Okhotsk subduction, 40 m max wave, ~18,500 dead/missing, Sendai Airport, Fukushima meltdowns, $235B+.",
      "Distinguish primary impacts from secondary impacts in Japan 2011 (especially the Fukushima generator-flooding cascade).",
      "Distinguish immediate responses (P-wave SMS alerts, 27 Shinkansen trains stopped, Kamaishi school drills, 100,000 SDF troops) from long-term responses (14 m seawalls, hillside relocation, S-net sensors, nuclear review).",
      "Evaluate Japan's giant seawalls versus relocating towns to high ground.",
      "Compare HIC (Japan 2011) and LIC (Nepal 2015) impacts across building codes, absolute $ cost vs % GDP lost, healthcare/aid dependence, and recovery speed.",
      "Explain why both human development AND physical hazard factors (M9.0 + tsunami vs M7.8 inland quake) must be weighed in HIC vs LIC comparisons.",
    ],
    misconceptions: [
      {
        wrong: "A tsunami is just a giant curling surfing wave caused by strong winds or tides.",
        right: "Tsunamis are **not** tidal or wind waves — they are generated by submarine seafloor displacement (mostly subduction quakes) and surge inland like a fast-rising, debris-filled wall of water.",
      },
      {
        wrong: "Once the first tsunami wave retreats, it is safe to go back down to the beach.",
        right: "Tsunamis arrive as a **wave train** over hours, and the **second or third wave** is frequently taller and deadlier than the first.",
      },
      {
        wrong: "Most of the ~18,500 deaths in Japan 2011 happened because skyscrapers collapsed during the M9.0 earthquake.",
        right: "Japan's strict aseismic codes saved nearly all modern buildings during shaking; **over 90% of deaths were caused by drowning** in the 10–40 m tsunami.",
      },
      {
        wrong: "The earthquake shaking directly cracked Fukushima Daiichi's nuclear reactors open.",
        right: "The reactors shut down safely during shaking; it was the **~15 m tsunami overtopping the 5.7 m seawall** that flooded basement backup cooling generators and caused the meltdowns.",
      },
      {
        wrong: "HICs suffer smaller economic losses than LICs during earthquakes because HICs have better buildings.",
        right: "HICs usually suffer **much higher absolute dollar losses** ($235B+ in Japan vs $5B in Nepal) because of expensive insured infrastructure — while LICs suffer far higher **% of GDP losses** (~25% vs ~4%).",
      },
      {
        wrong: "Because Japan 2011 had more deaths (~18,500) than Nepal 2015 (~9,000), Japan must have been less prepared than Nepal.",
        right: "Japan faced an **M9.0 megathrust (~60× more energy) plus a 40 m tsunami**; Japan's early warnings, drills, and aseismic buildings actually prevented hundreds of thousands of additional deaths.",
      },
    ],
    examMistakes: [
      "Calling a tsunami a 'tidal wave' — geographers strictly avoid this because tides are driven by the Moon's gravity, not submarine earthquakes.",
      "Forgetting to explain **seabed friction** when asked why tsunamis grow taller near the coast (shoaling).",
      "Confusing Japan 2011's **primary impacts** (waves, drowning, collapsed ports) with **secondary impacts** (Fukushima meltdowns, 450,000 in snowy shelters, global Toyota/Sony supply-chain delays).",
      "Mixing up **immediate responses** (seconds–weeks: SMS alerts, Shinkansen braking, SDF rescue) with **long-term responses** (months–years: 14 m seawalls, hillside relocation, S-net gauges).",
      "Comparing only total dollar damage ($235B vs $5B) between Japan and Nepal without calculating or quoting **% of national GDP** (~4% vs ~25%).",
      "Forgetting to convert **m/s to km/h (×3.6)** or **hours to minutes (×60)** in tsunami travel-time questions.",
      "Giving a one-sided verdict on Japan's new 14 m seawalls without weighing both protective benefits and environmental/tourism/false-security drawbacks.",
    ],
    mnemonics: [
      {
        topic: "Coastal Shoaling Sequence",
        device: "S-F-W-H: Shallower depth → Friction slows front → Wavelength shrinks → Height towers",
        explanation:
          "Follow S-F-W-H in exact order for a guaranteed 4/4 explanation of why a 1 m open-ocean wave becomes a 20–40 m coastal wall.",
      },
      {
        topic: "Japan 2011 Anchor Numbers",
        device: "11-9-40-18.5-235: 11 March 2011 · M9.0 · 40 m max wave · 18,500 dead/missing · $235B+ cost",
        explanation:
          "Five crisp statistics unlock top-band case study detail across causes, primary impacts, and secondary economic impacts.",
      },
      {
        topic: "HIC vs LIC Comparison Checklist",
        device: "B-E-H-A-G: Buildings · Economy ($ vs % GDP) · Healthcare & Warnings · Aid dependence · Geography",
        explanation:
          "Cover B-E-H-A-G whenever comparing Japan 2011 (HIC) with Nepal 2015 (LIC) so you hit both development and physical factors.",
      },
    ],
    realWorld: [
      {
        title: "The 'Miracle of Kamaishi' (2011)",
        detail:
          "Years of tsunami drills taught 3,000 schoolchildren in Kamaishi three simple rules: don't trust fixed hazard maps alone, try your hardest, and run uphill first. 99.8% survived waves that flattened their schools.",
        emoji: "🏃",
      },
      {
        title: "Shinkansen P-Wave Auto-Braking",
        detail:
          "Japan's UrEDAS seismic network detected P-waves seconds before S-waves on 11 March 2011 and halted 27 bullet trains travelling up to 270 km/h with zero passenger injuries or deaths.",
        emoji: "🚄",
      },
      {
        title: "Centuries-Old Japanese Tsunami Stones",
        detail:
          "Ancient stone tablets carved across Tōhoku hillsides warned: 'Do not build your homes below this point!' Villages that obeyed the stones survived 2011 completely unscathed.",
        emoji: "🪨",
      },
      {
        title: "S-net Seafloor Fibre-Optic Observatory",
        detail:
          "After 2011, Japan laid 5,500 km of undersea cable linking 150 seafloor pressure gauges along the Japan Trench to detect real-time tsunami heights minutes earlier.",
        emoji: "📡",
      },
      {
        title: "Global Auto & Tech Supply Shock",
        detail:
          "Flooded component factories in north-eastern Japan forced temporary pauses at car assembly plants in Europe and North America — proving how local hazards ripple across a globalised economy.",
        emoji: "🏭",
      },
    ],
    videos: [
      {
        title: "How Tsunamis Work — Subduction & Coastal Shoaling Explained",
        channel: "TED-Ed / Geography Revision",
        url: "https://www.youtube.com/results?search_query=how+tsunamis+work+ted+ed+shoaling",
      },
      {
        title: "Japan 2011 Tōhoku Earthquake & Tsunami Case Study (GCSE / Year 9)",
        channel: "Geography Case Studies",
        url: "https://www.youtube.com/results?search_query=japan+2011+tohoku+earthquake+tsunami+case+study+geography",
      },
      {
        title: "Fukushima Daiichi & Japan's Long-Term Rebuilding (14 m Seawalls)",
        channel: "BBC / NHK Geography",
        url: "https://www.youtube.com/results?search_query=japan+tsunami+seawalls+rebuilding+fukushima+explained",
      },
      {
        title: "HIC vs LIC Tectonic Disasters: Japan 2011 vs Nepal 2015",
        channel: "GCSE Geography Revision",
        url: "https://www.youtube.com/results?search_query=hic+vs+lic+earthquake+comparison+japan+nepal+geography",
      },
    ],
    formulas: [
      {
        name: "Tsunami Wave Speed",
        formula: "{{v = sqrt(g * d)}} (with g ≈ 10 m/s² and water depth d in m; multiply m/s by 3.6 for km/h).",
        note: "Deeper water = faster speed (~720–800 km/h offshore); shallower water = slower speed & taller shoaling wave.",
      },
      {
        name: "Submarine Megathrust",
        formula: "A huge locked fault at a destructive subduction margin that snaps vertically upward, displacing the entire ocean column.",
      },
      {
        name: "Coastal Shoaling",
        formula: "Seabed friction in shallow water slows a tsunami's front, compresses wavelength, and forces wave height to tower to 10–40 m.",
      },
      {
        name: "Coastal Drawdown",
        formula: "Sudden abnormal retreat of seawater exposing bare seabed when a tsunami trough reaches shore ahead of the towering crest.",
      },
      {
        name: "Japan 2011 (Tōhoku)",
        formula: "11 March 2011 · M9.0 · Pacific/Okhotsk subduction · 40 m max wave · ~18,500 dead/missing · Fukushima meltdowns · $235B+.",
      },
      {
        name: "Fukushima Daiichi Cascade",
        formula: "~15 m tsunami overtopped 5.7 m seawall → flooded backup diesel generators → cooling failure → 3 reactor meltdowns & 20 km evacuation.",
      },
      {
        name: "P-Wave Early Warning",
        formula: "Detecting fast primary seismic waves seconds ahead of destructive S-waves to trigger SMS alerts and automatic Shinkansen braking.",
      },
      {
        name: "Immediate vs Long-Term Response",
        formula: "Immediate (seconds–weeks): alerts, rescue, shelters. Long-term (months–years): 14 m seawalls, hillside relocation, S-net, energy policy.",
      },
      {
        name: "Economic Burden (% of GDP)",
        formula: "{{(Economic Loss / Annual GDP) * 100}} — Japan 2011 ≈ 4% of GDP ($235B) vs Nepal 2015 ≈ 25% of GDP ($5B).",
      },
      {
        name: "Disaster Risk Equation",
        formula: "Risk = (Hazard × Exposure × Vulnerability) ÷ Capacity to Cope — explains why HICs lose more total $ while LICs suffer higher proportional devastation.",
      },
    ],
  },
};
