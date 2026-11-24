import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "solving-climate-crisis",
  title: "Solving the Climate Crisis: Mitigation & Adaptation",
  strand: "The Climate Crisis",
  icon: "🌱",
  summary: "Evaluate how humanity cuts emissions (mitigation), builds resilience (adaptation), negotiates Paris COP treaties, and transforms Singapore through the Green Plan 2030.",
  intro:
    "Knowing *why* Earth is warming is only half of Year 9 Geography — the bigger question is **what can humanity actually do about it?** Solving the climate crisis demands two twin strategies working side by side: **mitigation** (tackling the root cause by cutting and removing greenhouse gases) and **adaptation** (protecting people and cities from warming that is already locked in). In this topic, you will weigh clean energy against carbon capture, compare hard sea walls with living mangroves, unpack the **Paris Agreement (2015)** and COP diplomacy, and evaluate how **Singapore's Green Plan 2030** turns a tiny, land-scarce island into a blueprint for resilience.",

  guide: [
    // =========================================================================
    // SECTION 1: mitigation-strategies
    // =========================================================================
    {
      id: "mitigation-strategies",
      heading: "Mitigation: Cutting & Removing Greenhouse Gases",
      discovery: {
        problem:
          "Imagine walking into a bathroom where the bathtub tap is pouring at full blast and water is already flooding across the floor. You have a tap valve AND a stack of mop buckets. Should you turn off the tap, mop the floor, or do both — and what happens if you *only* mop while leaving the tap wide open?",
        idea:
          "Turning down the tap is **mitigation** — stopping extra greenhouse gases from filling the atmosphere (fixing the *root cause*). Mopping up and waterproofing the floor is **adaptation** — living safely with water already spilled. If humanity only adapts without mitigating, the rising flood eventually overwhelms every defence!",
      },
      body:
        "### What Is Climate Mitigation?\n\n" +
        "**Mitigation** means taking action to **reduce or prevent greenhouse gas emissions**, or **remove CO₂ already in the atmosphere**, in order to slow and eventually halt global warming. Mitigation tackles the **cause** of climate change — not just its symptoms. Reaching **net zero** means cutting emissions as close to zero as possible and balancing any tiny unavoidable remainder (e.g. aviation or cement) with equivalent carbon removal.\n\n" +
        "### 1. Transitioning to Clean Energy\n" +
        "Because electricity and heating from coal, oil and gas form the single largest share of global CO₂, decarbonising the power grid is the #1 mitigation lever:\n" +
        "- **Solar photovoltaic (PV) & wind power**: Now the cheapest new electricity sources in most countries and emit zero CO₂ during operation. *Limitation*: sunlight and wind are **intermittent** (variable), requiring **grid-scale battery storage**, pumped hydro and smart interconnected grids.\n" +
        "- **Hydroelectricity & geothermal**: Deliver steady, low-carbon electricity where rivers or volcanic heat exist (e.g. Iceland, Norway), though large dams can flood valleys and displace communities.\n" +
        "- **Nuclear fission**: Generates reliable, high-output **baseload** electricity with near-zero operational CO₂, helping stabilise grids alongside renewables. *Limitations*: very high upfront construction costs, long build times, radioactive waste storage and safety concerns (e.g. Fukushima 2011).\n\n" +
        "### 2. Electrifying Transport & Boosting Energy Efficiency\n" +
        "- **Electric Vehicles (EVs) & Public Transit**: Shifting cars, buses and freight from petrol/diesel to EVs powered by clean electricity slashes tailpipe CO₂ and urban air pollution. Expanding high-capacity **MRT / rail networks** and cycling lanes cuts energy use per passenger even further.\n" +
        "- **Energy efficiency**: LED lighting, building insulation, smart district cooling and high-efficiency air conditioners cut total energy demand — the cheapest, cleanest kilowatt-hour is the one never wasted.\n\n" +
        "### 3. Carbon Capture & Storage (CCS) and Natural Carbon Sinks\n" +
        "- **Carbon Capture & Storage (CCS)**: Technology that traps CO₂ directly from industrial smokestacks (such as cement, steel or gas plants), compresses it into a liquid and injects it deep underground into depleted oil/gas reservoirs or porous saline aquifers. *Evaluation*: valuable for hard-to-abate heavy industry, yet currently **expensive, energy-intensive** and still tiny in global scale — it cannot replace rapid fossil-fuel phase-out.\n" +
        "- **Afforestation & Reforestation**: **Afforestation** plants trees on land that has not recently been forested; **reforestation** replants cleared forests. Growing trees absorb CO₂ via photosynthesis cheaply while restoring biodiversity. *Limitations*: trees take decades to mature, require vast land area (potentially competing with food farms), and stored carbon can re-escape if wildfires strike.\n\n" +
        "### 4. Cutting Food & Methane Emissions\n" +
        "Agriculture drives roughly a quarter of global emissions. Cutting **food waste** (rotting landfill food emits CH₄), shifting toward **plant-rich diets** (producing 1 kg of beef emits ~15–30× more greenhouse gases than 1 kg of tofu or lentils), adding methane-suppressing **red seaweed** to cattle feed, and using **alternate wetting and drying** in rice paddies rapidly lower methane — giving a fast near-term cooling benefit.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Climate Bathtub analogy showing four mitigation levers turning down greenhouse gas emissions and expanding carbon sinks">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Mitigation: Turning Down the Tap &amp; Widening the Drain</text>` +
        `<rect x="18" y="38" width="166" height="196" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4" />` +
        `<text x="101" y="57" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">Emissions Tap (Sources)</text>` +
        `<text x="28" y="80" font-size="10" fill="var(--ink)">1. Fossil-fuel power (CO₂)</text>` +
        `<text x="28" y="102" font-size="10" fill="var(--ink)">2. Petrol transport (CO₂)</text>` +
        `<text x="28" y="124" font-size="10" fill="var(--ink)">3. Steel &amp; cement (CO₂)</text>` +
        `<text x="28" y="146" font-size="10" fill="var(--ink)">4. Cattle, rice &amp; waste (CH₄)</text>` +
        `<text x="28" y="168" font-size="10" fill="var(--ink)">5. Deforestation (CO₂)</text>` +
        `<rect x="28" y="186" width="146" height="36" rx="6" fill="var(--bad)" opacity="0.16" />` +
        `<text x="101" y="202" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--bad)">Goal: Slash inflow via</text>` +
        `<text x="101" y="215" text-anchor="middle" font-size="9.5" fill="var(--ink)">Renewables, EVs &amp; Diet</text>` +
        `<rect x="206" y="70" width="148" height="110" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8" />` +
        `<text x="280" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">Atmospheric</text>` +
        `<text x="280" y="112" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">Carbon Stock</text>` +
        `<text x="280" y="135" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">420+ ppm CO₂</text>` +
        `<text x="280" y="156" text-anchor="middle" font-size="9.5" fill="var(--ink)">Net Zero =</text>` +
        `<text x="280" y="169" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Inflow equals Outflow</text>` +
        `<line x1="184" y1="122" x2="202" y2="122" stroke="var(--bad)" stroke-width="3" />` +
        `<polygon points="206,122 197,116 197,128" fill="var(--bad)" />` +
        `<line x1="354" y1="122" x2="372" y2="122" stroke="var(--good)" stroke-width="3" />` +
        `<polygon points="376,122 367,116 367,128" fill="var(--good)" />` +
        `<rect x="376" y="38" width="166" height="196" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.4" />` +
        `<text x="459" y="57" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Carbon Drain (Sinks)</text>` +
        `<text x="386" y="82" font-size="10" font-weight="700" fill="var(--ink)">Natural Removals:</text>` +
        `<text x="386" y="98" font-size="9.8" fill="var(--ink-2)">• Afforestation &amp; reforestation</text>` +
        `<text x="386" y="114" font-size="9.8" fill="var(--ink-2)">• Mangroves &amp; peatlands</text>` +
        `<text x="386" y="130" font-size="9.8" fill="var(--ink-2)">• Ocean carbon uptake</text>` +
        `<text x="386" y="154" font-size="10" font-weight="700" fill="var(--ink)">Tech Removals:</text>` +
        `<text x="386" y="170" font-size="9.8" fill="var(--ink-2)">• Carbon Capture &amp; Storage</text>` +
        `<text x="386" y="184" font-size="9.8" fill="var(--ink-2)">  (CCS) deep underground</text>` +
        `<rect x="386" y="196" width="146" height="28" rx="6" fill="var(--good)" opacity="0.16" />` +
        `<text x="459" y="214" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--good)">Removes leftover CO₂</text>` +
        `</svg>`,
      diagramCaption: "Mitigation works at both ends of Earth's carbon budget: slashing greenhouse gas inflows at the source AND expanding natural and engineered carbon sinks.",
      whyItWorks:
        "Why does cutting **methane (CH₄)** buy humanity immediate breathing room while cutting **CO₂** locks in long-term safety? Methane stays in the atmosphere for only ~12 years (yet traps ~80× more heat per tonne over 20 years), so cutting livestock, rice and landfill methane bends the warming curve *this decade*. CO₂ accumulates for centuries — so both deep CO₂ cuts and fast CH₄ cuts are essential together.",
      keyPoints: [
        "**Mitigation** targets the **root cause** of climate change by cutting emissions or removing CO₂ from the air to reach **net zero**.",
        "Clean energy (**solar, wind, hydro, nuclear**) replaces fossil fuels — balancing renewables' low cost against **intermittency** (needing battery storage).",
        "**Electrifying transport** (EVs, MRT/rail) and improving building **energy efficiency** cut demand while cleaning urban air.",
        "**CCS** captures industrial CO₂ underground (expensive, best for cement/steel), while **afforestation/reforestation** and **diet/food-waste shifts** provide vital nature-based and methane cuts.",
      ],
      strategies: [
        "Apply the **Cause Test**: if a strategy lowers atmospheric CO₂ or CH₄ concentration, it is **mitigation**; if it protects people from floods, heat or drought without cutting gases, it is **adaptation**.",
        "For top marks in evaluation questions, give **one strength AND one limitation** for every mitigation method (e.g. solar: cheap & zero operational CO₂, *but* intermittent and land-hungry).",
        "Always check whether **EVs** are paired with a **clean electricity grid** — EVs powered by solar/wind slash lifecycle emissions far more than EVs charged from coal.",
      ],
      thinkDeeper:
        "Can tree planting (afforestation) alone cancel out humanity's fossil-fuel emissions? Estimate what would happen to global farmland and food prices if we tried to plant enough forests to offset ~37 billion tonnes of CO₂ every year without retiring coal and oil.",
      workedExamples: [
        {
          title: "Calculating CO₂ Saved by Switching from Coal to Solar Power",
          problem:
            "A coastal town uses **500,000 MWh** of electricity per year. Currently all of it comes from coal (emitting **0.90 tonnes of CO₂ per MWh**). If the town switches **40%** of its electricity to solar PV (lifecycle emissions **0.05 tonnes of CO₂ per MWh**), how many tonnes of CO₂ are **saved** each year?",
          steps: [
            "Find the electricity shifted to solar: {{40 / 100 * 500000 = 200000}} MWh.",
            "Find CO₂ saved per MWh switched: {{0.90 - 0.05 = 0.85}} tonnes/MWh.",
            "Multiply to find total annual CO₂ saved: {{200000 * 0.85 = 170000}} tonnes of CO₂/year.",
          ],
          answer: "170,000 tonnes of CO₂/year saved",
          yourTurn: {
            question:
              "A town switches **50,000 MWh** of annual electricity from coal (**0.90 t CO₂/MWh**) to offshore wind (**0.02 t CO₂/MWh**). Calculate the tonnes of CO₂ saved per year (give the number only).",
            answer: { type: "number", value: 44000, display: "44,000" },
            solution: "Saving per MWh = 0.90 − 0.02 = 0.88 t/MWh. Total saved = 50,000 × 0.88 = 44,000 tonnes of CO₂/year.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 2: adaptation-strategies
    // =========================================================================
    {
      id: "adaptation-strategies",
      heading: "Adaptation: Living Safely with Inevitable Change",
      discovery: {
        problem:
          "Suppose every coal plant, petrol car and cattle ranch on Earth shut down tonight — dropping human greenhouse gas emissions to zero instantly. Would sea levels stop rising tomorrow morning?",
        idea:
          "**No!** CO₂ already in the atmosphere stays aloft for centuries, and deep oceans take decades to finish warming and expanding while glaciers keep adjusting. Because significant climate change is already locked in, every community MUST invest in **adaptation** — redesigning coasts, farms, water systems and cities to live safely with inevitable impacts.",
      },
      body:
        "### What Is Climate Adaptation?\n\n" +
        "**Adaptation** means adjusting human infrastructure, agriculture, cities and ecosystems to **reduce harm** from actual or expected climate impacts. Unlike mitigation, adaptation does *not* stop global warming — it builds **resilience** so communities survive higher seas, fiercer storms, hotter cities and drier seasons.\n\n" +
        "### 1. Coastal Defences: Hard vs Soft Engineering\n" +
        "- **Hard engineering** (human-built concrete/steel structures):\n" +
        "  - **Sea walls & storm-surge barriers**: Concrete/rock walls and moveable tidal gates (e.g. **Marina Barrage** in Singapore, the **Thames Barrier** in London, **Maeslantkering** in the Netherlands) physically block storm surges and high tides. *Pros*: instant, high protection for valuable dense cities. *Cons*: very costly to build and raise as seas climb, disrupt coastal ecosystems, and can deflect wave erosion onto unprotected neighbouring coasts.\n" +
        "  - **Polders**: Low-lying land reclaimed from the sea, ringed by raised **dikes** (embankments) and kept dry by drainage pumps — perfected in the **Netherlands** and pioneered in Singapore at **Pulau Tekong**.\n" +
        "- **Soft / nature-based engineering**:\n" +
        "  - **Mangrove restoration & coastal wetlands**: Dense intertwined mangrove roots absorb **50–70% of incoming wave energy**, trap sediment to build land upward naturally, create fish nurseries AND store huge 'blue carbon' (making mangrove restoration *both* adaptation and mitigation!). *Cons*: needs coastal space and years to mature, and cannot alone halt multi-metre surges in ultra-dense ports.\n" +
        "  - **Managed retreat & raised land**: Relocating vulnerable homes inland or onto elevated artificial ground (e.g. **Hulhumalé** in the Maldives raised ~2 m above sea level).\n\n" +
        "### 2. Agricultural & Water Adaptation\n" +
        "- **Drought-tolerant & salt-tolerant crops**: Plant breeders and biotechnology develop **GM** and selectively bred crop varieties that survive hotter dry spells (e.g. drought-tolerant maize/millet in the **Sahel**) or brackish coastal soils (salt-tolerant rice in **Bangladesh**).\n" +
        "- **Drip irrigation & water conservation**: Instead of open flood channels where half the water evaporates in tropical heat, **drip irrigation** pipes water slowly right to plant roots, cutting water demand by **50–70%**. Rainwater harvesting, wastewater recycling (**NEWater**) and desalination protect urban supplies.\n\n" +
        "### 3. Early-Warning Systems, Urban Cooling & Sponge Cities\n" +
        "- **Early-warning systems & shelters**: Satellites, weather radar, SMS alerts and elevated community cyclone shelters save tens of thousands of lives cheaply. In **Bangladesh**, a deadly 1970 cyclone killed over **300,000** people; modern early-warning networks and thousands of cyclone shelters kept death tolls under **100** during similarly powerful cyclones in recent years!\n" +
        "- **Sponge cities**: Redesigning concrete cities with **permeable pavements**, **rain gardens**, **bioswales** and naturalised flood-retention parks (like Singapore's **Bishan–Ang Mo Kio Park**) so intense tropical downpours soak into soil and wetlands instead of triggering flash floods.\n" +
        "- **Urban cooling**: Planting street shade trees, painting cool reflective **white roofs** (raising urban albedo!), installing vertical green facades and designing breezy **wind corridors** cut the **Urban Heat Island** effect by 2–4 °C.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section combining soft mangrove coastal protection, hard sea wall and polder dike, and inland sponge city urban cooling">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Layered Adaptation: Coast to Sponge City</text>` +
        `<rect x="16" y="138" width="150" height="72" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2" />` +
        `<text x="72" y="178" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">Rising Sea &amp;</text>` +
        `<text x="72" y="191" text-anchor="middle" font-size="10" fill="var(--brand)">Storm Surge →</text>` +
        `<path d="M 118 148 Q 124 114 134 148 M 136 148 Q 144 108 154 148 M 152 148 Q 160 118 168 148" fill="none" stroke="var(--good)" stroke-width="2.5" />` +
        `<circle cx="130" cy="116" r="14" fill="var(--good)" opacity="0.28" stroke="var(--good)" />` +
        `<circle cx="148" cy="110" r="16" fill="var(--good)" opacity="0.28" stroke="var(--good)" />` +
        `<text x="140" y="54" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">Soft Engineering</text>` +
        `<text x="140" y="67" text-anchor="middle" font-size="9.5" fill="var(--ink)">Mangroves cut wave</text>` +
        `<text x="140" y="79" text-anchor="middle" font-size="9.5" fill="var(--ink)">energy 50–70%</text>` +
        `<line x1="140" y1="84" x2="140" y2="96" stroke="var(--good)" stroke-width="1.4" />` +
        `<polygon points="166,210 176,112 204,112 220,210" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8" />` +
        `<text x="192" y="166" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--ink)">Dike /</text>` +
        `<text x="192" y="178" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--ink)">Wall</text>` +
        `<text x="234" y="54" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">Hard Engineering</text>` +
        `<text x="234" y="67" text-anchor="middle" font-size="9.5" fill="var(--ink)">Sea wall &amp; polder</text>` +
        `<text x="234" y="79" text-anchor="middle" font-size="9.5" fill="var(--ink)">block surges + pumps</text>` +
        `<line x1="212" y1="84" x2="196" y2="108" stroke="var(--bad)" stroke-width="1.4" />` +
        `<rect x="220" y="162" width="324" height="48" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<rect x="242" y="150" width="94" height="14" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" />` +
        `<text x="289" y="160" text-anchor="middle" font-size="8.8" font-weight="700" fill="var(--brand)">Retention Park</text>` +
        `<rect x="356" y="102" width="54" height="60" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5" />` +
        `<rect x="354" y="96" width="58" height="7" rx="3" fill="var(--good)" />` +
        `<rect x="426" y="88" width="60" height="74" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5" />` +
        `<rect x="424" y="82" width="64" height="7" rx="3" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4" />` +
        `<text x="430" y="54" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">Sponge City &amp; Urban Cooling</text>` +
        `<text x="430" y="67" text-anchor="middle" font-size="9.5" fill="var(--ink)">Green roofs, reflective cool roofs,</text>` +
        `<text x="430" y="79" text-anchor="middle" font-size="9.5" fill="var(--ink)">permeable drains &amp; early alerts</text>` +
        `<rect x="498" y="138" width="38" height="24" rx="4" fill="var(--good)" opacity="0.22" stroke="var(--good)" />` +
        `<text x="517" y="153" text-anchor="middle" font-size="8.5" font-weight="800" fill="var(--good)">Drip</text>` +
        `<text x="280" y="232" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--ink-2)">Combining soft + hard coastal barriers with sponge-city parks delivers resilient multi-layered defence</text>` +
        `</svg>`,
      diagramCaption: "Modern adaptation layers nature-based soft defences (mangroves, rain parks) alongside hard engineering (sea walls, polders) and early-warning alerts.",
      whyItWorks:
        "Why do geographers praise **hybrid** coastal defences (mangroves *in front of* a dike or sea wall) over bare concrete walls alone? Living mangroves knock down 50–70% of incoming wave height before waves ever strike the wall — allowing engineers to build a shorter, cheaper, longer-lasting barrier while boosting local fisheries and storing blue carbon!",
      keyPoints: [
        "**Adaptation** builds resilience to **inevitable** warming impacts (treats symptoms rather than cutting emissions).",
        "**Hard coastal engineering** (sea walls, storm-surge barriers, polders) protects high-value cities immediately, while **soft engineering** (mangrove restoration) absorbs wave energy naturally and stores blue carbon.",
        "**Drought/salt-tolerant crops** and **drip irrigation** (cutting water waste 50–70%) protect farming in the Sahel and Bangladesh.",
        "**Sponge cities** (rain gardens, permeable paving), **cool roofs/trees** and **early-warning systems** slash flood and cyclone death tolls.",
      ],
      strategies: [
        "Notice rare **win–win strategies** that achieve BOTH mitigation and adaptation: planting urban trees & restoring mangroves absorb CO₂ (mitigation) AND cool cities / block storm waves (adaptation)!",
        "When evaluating hard vs soft coastal engineering, compare **cost, lifespan, visual/ecological impact and space needed**.",
        "Quote Bangladesh's cyclone transformation (**300,000+ deaths in 1970 → <100 in modern cyclones**) as killer evidence for low-cost early-warning adaptation.",
      ],
      thinkDeeper:
        "A rich coastal resort builds a tall concrete sea wall to protect its luxury beachfront hotels, while a fishing village 3 km down the coast has no defences. How might the resort's hard engineering unintentionally *increase* erosion and flooding at the fishing village?",
      workedExamples: [
        {
          title: "Calculating Water Saved Through Drip Irrigation",
          problem:
            "A semi-arid farm in the Sahel uses **12,000 litres/day** with traditional open-channel flood irrigation. Upgrading to **drip irrigation** reduces water consumption by **60%**. (a) How many litres/day are saved? (b) How many litres/day does the farm now use?",
          steps: [
            "(a) Water saved = {{60 / 100 * 12000 = 7200}} litres/day.",
            "(b) New daily water use = {{12000 - 7200 = 4800}} litres/day (equivalently {{40 / 100 * 12000 = 4800}} L/day).",
          ],
          answer: "(a) 7,200 L/day saved; (b) 4,800 L/day used",
          yourTurn: {
            question:
              "A farm using **15,000 litres/day** installs drip irrigation that cuts water consumption by **40%**. Calculate the farm's **new** daily water use in litres.",
            answer: { type: "number", value: 9000, display: "9,000 L" },
            solution: "Water remaining = 100% − 40% = 60%. 0.60 × 15,000 = 9,000 litres/day.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 3: international-agreements
    // =========================================================================
    {
      id: "international-agreements",
      heading: "Global Cooperation: COP & the Paris Agreement",
      discovery: {
        problem:
          "Imagine 195 factories share a single freshwater lake. Cleaning up costs each factory millions, while dumping waste is cheap. If 194 factories install clean filters, yet the 3 biggest factories refuse so they can undercut competitors on price, what happens to the lake — and how can the 195 factories ever get everyone to cooperate?",
        idea:
          "Earth's atmosphere is a **global commons**: CO₂ mixes evenly worldwide regardless of which country's chimney emitted it. Without global agreements, individual countries face the **free-rider temptation** — hoping others bear the cost of cutting emissions while they keep burning cheap fossil fuels. That is why annual **UN COP** summits and the **Paris Agreement (2015)** exist!",
      },
      body:
        "### COP Summits & The Paris Agreement (2015)\n\n" +
        "Every year, nearly 200 nations meet at the UN **Conference of the Parties (COP)** to negotiate global climate action. The landmark breakthrough was **COP21 in Paris (2015)**, which created the **Paris Agreement** — signed by almost every country on Earth (~195 parties):\n" +
        "- **Core Temperature Goal**: Hold global average warming to **well below 2 °C** above pre-industrial levels, and pursue efforts to limit it to **1.5 °C** (pushed urgently by Small Island Developing States like the Maldives using the slogan *'1.5 to Stay Alive'*).\n" +
        "- **Nationally Determined Contributions (NDCs)**: Unlike the earlier 1997 Kyoto Protocol (which imposed top-down caps only on HICs and saw major emitters opt out), Paris uses a bottom-up system where *every* nation submits its own voluntary **NDC** pledge explaining how much it will cut emissions.\n" +
        "- **The 5-Year Ratchet Mechanism**: Every **5 years**, countries must conduct a 'Global Stocktake' and submit **stronger, more ambitious** updated NDCs — they are expected never to backslide.\n" +
        "- **Climate Finance & Loss and Damage**: Recognising **climate injustice**, HICs pledged **$100 billion per year** (with higher post-2025 targets) to help LICs and SIDS leapfrog to solar/wind energy and fund coastal/drought adaptation. At COP27/COP28, nations also established a **Loss and Damage Fund** to help vulnerable countries recover from irreversible climate disasters.\n\n" +
        "### Evaluating Successes vs Challenges of Global Agreements\n\n" +
        "| Strengths of the Paris Agreement | Challenges & Limitations |\n" +
        "|---|---|\n" +
        "| Near-universal participation (~195 nations, including HICs, NEEs and LICs) | **Non-binding targets**: NDC pledges are voluntary with **no legal fines** if a nation misses its target |\n" +
        "| Clear shared scientific benchmark (1.5 °C / <2 °C) guiding investors toward solar, wind & EVs | **The Ambition Gap**: current national pledges still put Earth on course for **~2.5–2.7 °C** warming |\n" +
        "| 5-year ratchet & transparent reporting apply diplomatic peer pressure | **Free-riding & political swings**: governments can withdraw or weaken policies after elections |\n" +
        "| Dedicated climate finance & Loss and Damage Fund acknowledge climate justice | **Development vs decarbonisation**: NEEs (e.g. India, Indonesia) need affordable energy to end poverty, while HICs often fall short on promised climate finance |",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paris Agreement temperature targets, the ambition gap against current pledges, and climate finance flow from HICs to LICs">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Paris Agreement (2015): Targets, Ambition Gap &amp; Finance</text>` +
        `<text x="150" y="44" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">Temperature Benchmarks (by 2100)</text>` +
        `<rect x="20" y="58" width="260" height="28" rx="6" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<rect x="20" y="58" width="104" height="28" rx="6" fill="var(--brand)" opacity="0.25" />` +
        `<text x="28" y="76" font-size="10" font-weight="800" fill="var(--ink)">Today: +1.2 °C</text>` +
        `<text x="272" y="76" text-anchor="end" font-size="9.5" fill="var(--ink-2)">Observed now</text>` +
        `<rect x="20" y="94" width="260" height="28" rx="6" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5" />` +
        `<rect x="20" y="94" width="130" height="28" rx="6" fill="var(--good)" opacity="0.28" />` +
        `<text x="28" y="112" font-size="10" font-weight="800" fill="var(--good)">Paris Aim: +1.5 °C</text>` +
        `<text x="272" y="112" text-anchor="end" font-size="9.5" fill="var(--good)">&ldquo;1.5 to Stay Alive&rdquo;</text>` +
        `<rect x="20" y="130" width="260" height="28" rx="6" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4" />` +
        `<rect x="20" y="130" width="174" height="28" rx="6" fill="var(--brand)" opacity="0.22" />` +
        `<text x="28" y="148" font-size="10" font-weight="800" fill="var(--brand)">Paris Upper Limit: &lt;2.0 °C</text>` +
        `<text x="272" y="148" text-anchor="end" font-size="9.5" fill="var(--ink-2)">Well below 2 °C</text>` +
        `<rect x="20" y="166" width="260" height="28" rx="6" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.6" />` +
        `<rect x="20" y="166" width="234" height="28" rx="6" fill="var(--bad)" opacity="0.28" />` +
        `<text x="28" y="184" font-size="10" font-weight="800" fill="var(--bad)">Current Pledges: ~2.5–2.7 °C</text>` +
        `<text x="150" y="214" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">↑ The Ambition Gap (NDCs still too weak!)</text>` +
        `<line x1="296" y1="38" x2="296" y2="232" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4" />` +
        `<text x="428" y="44" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">How COP Cooperation Works</text>` +
        `<rect x="312" y="58" width="232" height="50" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.3" />` +
        `<text x="322" y="76" font-size="10.5" font-weight="800" fill="var(--brand)">5-Year NDC Ratchet</text>` +
        `<text x="322" y="92" font-size="9.5" fill="var(--ink)">195 nations submit &amp; tighten voluntary</text>` +
        `<text x="322" y="103" font-size="9.5" fill="var(--ink-2)">national pledges every 5 years</text>` +
        `<rect x="312" y="118" width="232" height="50" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.3" />` +
        `<text x="322" y="136" font-size="10.5" font-weight="800" fill="var(--good)">Climate Finance &amp; Loss/Damage</text>` +
        `<text x="322" y="152" font-size="9.5" fill="var(--ink)">HICs → $100B+/yr to LICs &amp; SIDS for</text>` +
        `<text x="322" y="163" font-size="9.5" fill="var(--ink-2)">clean energy &amp; coastal/drought resilience</text>` +
        `<rect x="312" y="178" width="232" height="50" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.3" />` +
        `<text x="322" y="196" font-size="10.5" font-weight="800" fill="var(--bad)">Core Diplomatic Hurdles</text>` +
        `<text x="322" y="212" font-size="9.5" fill="var(--ink)">No legal fines · Free-rider risk ·</text>` +
        `<text x="322" y="223" font-size="9.5" fill="var(--ink-2)">Development vs decarbonisation tension</text>` +
        `</svg>`,
      diagramCaption: "The Paris Agreement united ~195 nations behind the 1.5 °C / <2 °C goal and 5-year NDC ratchets, yet closing the ambition gap remains a fierce political challenge.",
      whyItWorks:
        "Why did Paris succeed in signing up ~195 countries when earlier strict treaties stalled? By letting each nation design its own **NDC** (respecting different development levels) while making **reporting and 5-year reviews** legally transparent, Paris traded courtroom punishments for universal participation, peer pressure and a clear market signal that has already driven solar and battery costs down over 80%.",
      keyPoints: [
        "Because greenhouse gases mix across borders, climate change is a **global commons** problem requiring international treaties.",
        "The **Paris Agreement (2015, COP21)** aims to keep warming **well below 2 °C**, pursuing **1.5 °C** through voluntary **NDCs** tightened every **5 years**.",
        "**Climate finance** ($100B+/yr) and the **Loss and Damage Fund** aim to address climate injustice by supporting clean energy and adaptation in LICs and SIDS.",
        "Key obstacles include **no binding legal fines**, **free-riding**, **political changes** and the tension between **poverty reduction (development)** and **decarbonisation** in NEEs.",
      ],
      strategies: [
        "When evaluating the Paris Agreement in an extended response, ALWAYS argue **both sides** (universal participation + 5-year ratchet + market signal vs non-binding NDCs + ~2.5–2.7 °C ambition gap + finance shortfalls).",
        "Explain *why* NEEs like India argue for **'common but differentiated responsibilities'** — HICs produced most historical CO₂ and have higher per-capita emissions.",
        "Never write that Paris 'forces' countries with fines — emphasise voluntary NDCs plus transparent peer pressure.",
      ],
      thinkDeeper:
        "Suppose a rapidly developing nation has 200 million citizens still lacking reliable electricity. Should it be required to make the exact same percentage emissions cut by 2030 as a wealthy nation that industrialised with coal 150 years ago? Explain how **climate finance** tries to bridge that deadlock.",
      workedExamples: [
        {
          title: "Calculating a Country's Paris NDC Emissions Cap",
          problem:
            "Country K emitted **240 million tonnes (Mt)** of CO₂ in 2015. In its Paris Agreement **NDC**, it pledges a **35% reduction** below 2015 levels by 2030. Calculate Country K's maximum allowed annual emissions in 2030 (in Mt).",
          steps: [
            "Calculate the 35% cut: {{35 / 100 * 240 = 84}} Mt reduced.",
            "Subtract from the 2015 baseline: {{240 - 84 = 156}} Mt.",
            "Quick check: keeping {{100 - 35 = 65}}% of 240 gives {{0.65 * 240 = 156}} Mt.",
          ],
          answer: "156 Mt of CO₂/year",
          yourTurn: {
            question:
              "A country emitted **300 Mt** of CO₂ in 2015 and submits an NDC pledging a **40% reduction** by 2030. Calculate its 2030 target cap in Mt (number only).",
            answer: { type: "number", value: 180, display: "180" },
            solution: "Keeping 100% − 40% = 60% of 300 Mt gives 0.60 × 300 = 180 Mt.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 4: singapore-green-plan-action
    // =========================================================================
    {
      id: "singapore-green-plan-action",
      heading: "Local & Individual Action: Singapore Green Plan 2030",
      discovery: {
        problem:
          "Singapore covers only **~735 km²** — it has no giant rivers for hydro, low average wind speeds, no geothermal vents, and scarce open land for huge solar farms. Yet it has pledged **net-zero emissions by 2050** while defending a coastline where **30% of land lies below 5 m**. How can a tiny, 'alternative-energy disadvantaged' island pull this off?",
        idea:
          "Through clever **dual-purpose design** and regional cooperation! Singapore packs solar onto **HDB rooftops and floating reservoirs (Tengeh)**, imports clean hydro/solar power via the **ASEAN Power Grid**, turns concrete streets into a **City in Nature (1 million more trees)**, phases in **EVs & a rising carbon tax**, and pairs flood defence with recreation and water storage in East Coast's **Long Island**!",
      },
      body:
        "### The Singapore Green Plan 2030\n\n" +
        "Launched in 2021, the **Singapore Green Plan 2030** is a national sustainability blueprint supporting Singapore's pledge to achieve **net-zero emissions by 2050**. Notice how its pillars cleverly blend **mitigation** and **adaptation**:\n\n" +
        "1. **City in Nature (Mitigation + Adaptation)**:\n" +
        "   - Planting **1 million more trees** across Singapore between 2020 and 2030 (absorbing CO₂ while shading pavements and reducing Urban Heat Island temperatures).\n" +
        "   - Expanding nature parks by 50% so every household lives within a **10-minute walk of a park**, and restoring coastal mangroves (e.g. Sungei Buloh, Pulau Ubin).\n" +
        "2. **Energy Reset (Mitigation)**:\n" +
        "   - **Solar deployment**: Expanding solar power to at least **2 gigawatt-peak (2 GWp)** by 2030 (powering ~350,000 households) by maximising **HDB rooftops**, industrial roofs and **floating solar farms** on reservoirs such as **Tengeh Reservoir**.\n" +
        "   - **Clean electricity imports & carbon tax**: Importing up to ~30% low-carbon electricity via the **ASEAN Power Grid** (e.g. Laos/Malaysia/Indonesia/Cambodia), and steadily raising Singapore's **carbon tax** (from S$5/t to **S$25/t** in 2024, **S$45/t** in 2026–27, targeting **S$50–80/t** by 2030) so polluting industries pay to decarbonise.\n" +
        "   - **Electric Vehicle (EV) transition**: Requiring **all new car and taxi registrations to be cleaner-energy models (EVs/hybrids) from 2030** (phasing out internal combustion engine vehicles by 2040), backed by **60,000 EV charging points**.\n" +
        "3. **Resilient Future — Coastal & Food Protection (Adaptation)**:\n" +
        "   - Investing **S$100 billion+** over the next century in coastal defences: **Pulau Tekong polder**, higher reclaimed land standards, **Marina Barrage** tidal gates, and the proposed **'Long Island'** project off **East Coast Park** — reclaiming ~800 hectares of raised land to shield low-lying East Coast from rising seas while enclosing a brand-new coastal freshwater reservoir and waterfront parks.\n" +
        "   - Advancing the **'30 by 30'** agri-tech target (producing 30% of nutritional needs locally via vertical/indoor farms) to buffer global climate food shocks.\n" +
        "4. **Sustainable Living (Mitigation + Circularity)**:\n" +
        "   - Expanding the **MRT rail network to 360 km** by 2030 so 8 in 10 households live within 10 minutes of a station, and cutting daily waste sent to **Semakau Landfill** by **30%** by 2030.\n\n" +
        "### Evaluating Individual Action vs Systemic Action\n\n" +
        "Can everyday choices by Year 9 students solve climate change, or must governments and corporations lead?\n" +
        "- **Value of individual action**: Taking the MRT/walking, setting air-con to 25 °C, cutting food waste, eating more plant-based meals, flying less and buying fewer fast-fashion items directly lower personal carbon footprints, build public demand for green businesses and signal voters' priorities to leaders.\n" +
        "- **Why individual action alone is NOT enough**: A student cannot personally switch Singapore's power stations from gas to solar, build the 360 km MRT network, levy a S$50/t carbon tax on refineries, or construct Long Island! Even if an individual lived virtually carbon-free, global emissions would barely budge without **systemic government laws, clean infrastructure and corporate supply-chain reform**.\n" +
        "- **Best Year 9 judgement**: Systemic government and corporate action is the **primary driver** needed at planetary speed and scale — while individual choices and civic pressure play a **vital supporting role** in driving adoption and political will.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Singapore Green Plan 2030 four-pillar summary showing City in Nature, Energy Reset, Resilient Future and Sustainable Living">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Singapore Green Plan 2030 → Net Zero by 2050</text>` +
        `<rect x="16" y="36" width="256" height="94" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5" />` +
        `<text x="28" y="55" font-size="11.5" font-weight="800" fill="var(--good)">City in Nature</text>` +
        `<text x="260" y="55" text-anchor="end" font-size="8.8" font-weight="700" fill="var(--good)">MITIGATION + ADAPTATION</text>` +
        `<text x="28" y="74" font-size="10" fill="var(--ink)">• Plant 1 million more trees (2020–2030)</text>` +
        `<text x="28" y="90" font-size="10" fill="var(--ink)">• +50% nature park area (10-min walk)</text>` +
        `<text x="28" y="106" font-size="10" fill="var(--ink)">• Restore mangroves &amp; cool urban streets</text>` +
        `<text x="28" y="121" font-size="9.2" fill="var(--ink-2)">Absorbs CO₂ AND lowers Urban Heat Island</text>` +
        `<rect x="288" y="36" width="256" height="94" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5" />` +
        `<text x="300" y="55" font-size="11.5" font-weight="800" fill="var(--brand)">Energy Reset</text>` +
        `<text x="532" y="55" text-anchor="end" font-size="8.8" font-weight="700" fill="var(--brand)">MITIGATION</text>` +
        `<text x="300" y="74" font-size="10" fill="var(--ink)">• ≥2 GWp solar (HDB roofs &amp; Tengeh floating)</text>` +
        `<text x="300" y="90" font-size="10" fill="var(--ink)">• 100% cleaner-energy new cars by 2030</text>` +
        `<text x="300" y="106" font-size="10" fill="var(--ink)">• 60,000 EV chargers &amp; ASEAN clean imports</text>` +
        `<text x="300" y="121" font-size="9.2" fill="var(--ink-2)">Carbon tax rising S$25 → S$50–80/t by 2030</text>` +
        `<rect x="16" y="142" width="256" height="94" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5" />` +
        `<text x="28" y="161" font-size="11.5" font-weight="800" fill="var(--bad)">Resilient Future</text>` +
        `<text x="260" y="161" text-anchor="end" font-size="8.8" font-weight="700" fill="var(--bad)">ADAPTATION</text>` +
        `<text x="28" y="180" font-size="10" fill="var(--ink)">• S$100B+ century coastal defence budget</text>` +
        `<text x="28" y="196" font-size="10" fill="var(--ink)">• East Coast &lsquo;Long Island&rsquo; (~800 ha barrier)</text>` +
        `<text x="28" y="212" font-size="10" fill="var(--ink)">• Pulau Tekong polder &amp; Marina Barrage</text>` +
        `<text x="28" y="227" font-size="9.2" fill="var(--ink-2)">Protects 30% low-lying land + adds reservoir</text>` +
        `<rect x="288" y="142" width="256" height="94" rx="8" fill="var(--surface-2)" stroke="var(--brand-2)" stroke-width="1.5" />` +
        `<text x="300" y="161" font-size="11.5" font-weight="800" fill="var(--brand-2)">Sustainable Living</text>` +
        `<text x="532" y="161" text-anchor="end" font-size="8.8" font-weight="700" fill="var(--brand-2)">MITIGATION + CIRCULAR</text>` +
        `<text x="300" y="180" font-size="10" fill="var(--ink)">• Expand MRT rail network to 360 km</text>` +
        `<text x="300" y="196" font-size="10" fill="var(--ink)">• Cut waste to Semakau Landfill by 30%</text>` +
        `<text x="300" y="212" font-size="10" fill="var(--ink)">• &lsquo;30 by 30&rsquo; local agri-tech food resilience</text>` +
        `<text x="300" y="227" font-size="9.2" fill="var(--ink-2)">Systemic infrastructure makes green living easy</text>` +
        `</svg>`,
      diagramCaption: "Singapore Green Plan 2030 pairs land-smart mitigation (floating solar, MRT, EVs, carbon tax) with multi-purpose adaptation (Long Island, 1M trees, 30 by 30).",
      whyItWorks:
        "Why is Singapore's **carbon tax** such an influential systemic tool compared with relying only on voluntary promises? Putting a predictable rising price on every tonne of CO₂ emitted (S$25/t → S$45/t → S$50–80/t by 2030) makes dirty energy progressively more expensive while rewarding companies that invest early in solar, efficiency and clean technology — changing entire industries at once.",
      keyPoints: [
        "Singapore is **alternative-energy disadvantaged** (small area, low wind, no hydro/geothermal), so it innovates via **rooftop & floating solar (≥2 GWp)** and **ASEAN clean electricity imports**.",
        "**City in Nature (1 million more trees)** delivers dual mitigation (CO₂ uptake) and adaptation (cooling Urban Heat Island).",
        "**Energy Reset** combines a rising **carbon tax (up to S$50–80/t by 2030)** with **100% cleaner-energy new cars by 2030** and **60,000 EV chargers**.",
        "**Resilient Future** defends low-lying coasts via **Pulau Tekong polder** and East Coast **Long Island** (~800 ha barrier + freshwater reservoir); solving climate change requires **systemic policy** leading alongside **individual action**.",
      ],
      strategies: [
        "Always check whether a Singapore Green Plan policy is **mitigation** (2 GWp solar, EVs, carbon tax, 360 km MRT), **adaptation** (Long Island, Tekong polder, Marina Barrage) or **both** (1 million trees, mangroves)!",
        "When evaluating 'individual vs government action', build a **PEEL balanced conclusion**: credit individual habits for shifting culture and demand, then prove why systemic infrastructure/carbon pricing is indispensable for rapid scale.",
        "Quote exact Singapore Green Plan 2030 metrics (**1M trees, ≥2 GWp solar, 60,000 EV chargers, 360 km MRT, 30% Semakau waste cut, ~800 ha Long Island**) for top-band Year 9 Geography answers.",
      ],
      thinkDeeper:
        "Because Singapore's electricity grid currently generates over 90% of its power from natural gas, does switching a petrol car to an EV in Singapore cut CO₂ *today* — and why does it cut even *more* CO₂ every year as 2 GWp solar and ASEAN clean imports come online?",
      workedExamples: [
        {
          title: "Evaluating Singapore's Solar Expansion & Carbon Tax",
          problem:
            "Singapore's solar capacity stood at **0.4 GWp** in 2020 and targets **2.0 GWp** by 2030 under the Green Plan. (a) Calculate the **percentage increase** in solar capacity from 2020 to 2030. (b) If an industrial plant emits **40,000 tonnes** of CO₂ per year, how much more carbon tax (in S$) does it pay at **S$45/tonne** than at **S$25/tonne**?",
          steps: [
            "(a) Increase = {{2.0 - 0.4 = 1.6}} GWp. Percentage increase = {{(1.6 / 0.4) * 100 = 400}}% (capacity grows 5-fold!).",
            "(b) Tax increase per tonne = {{45 - 25 = 20}} S$/tonne.",
            "Extra annual carbon tax = {{40000 * 20 = 800000}} S$ (creating a strong financial incentive to cut emissions!).",
          ],
          answer: "(a) 400% increase; (b) S$800,000 extra per year",
          yourTurn: {
            question:
              "Under Singapore's OneMillionTrees movement, suppose **450,000 trees** have been planted out of the **1,000,000** goal. What **percentage** of the 1 million tree target still remains to be planted?",
            answer: { type: "number", value: 55, display: "55%" },
            solution: "Remaining trees = 1,000,000 − 450,000 = 550,000. Percentage remaining = (550,000 ÷ 1,000,000) × 100 = 55%.",
          },
        },
      ],
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What is the key difference between climate mitigation and climate adaptation?",
        back: "Mitigation tackles the ROOT CAUSE by cutting or removing greenhouse gases; adaptation tackles the SYMPTOMS by helping people and cities live safely with inevitable impacts.",
      },
      {
        front: "What does 'net zero' emissions mean?",
        back: "Cutting human greenhouse gas emissions as close to zero as possible and balancing any small remaining emissions with equivalent carbon removal (sinks or CCS).",
      },
      {
        front: "Give one strength and one limitation of solar and wind power.",
        back: "Strength: cheapest new electricity and zero operational CO₂. Limitation: intermittent (depends on sun/wind), requiring battery storage and smart grids.",
      },
      {
        front: "What is Carbon Capture and Storage (CCS), and what is its main limitation?",
        back: "CCS captures CO₂ from industrial smokestacks and injects it deep underground into rock reservoirs; it is currently expensive and energy-intensive, so it cannot replace phasing out fossil fuels.",
      },
      {
        front: "Distinguish afforestation from reforestation.",
        back: "Afforestation plants trees on land with no recent forest cover; reforestation replants forests on recently cleared land. Both absorb CO₂ via photosynthesis.",
      },
      {
        front: "Why is mangrove restoration praised as BOTH mitigation and adaptation?",
        back: "Dense mangrove roots absorb 50–70% of storm-wave energy (soft coastal adaptation) AND store vast amounts of 'blue carbon' in waterlogged mud (mitigation).",
      },
      {
        front: "What is a polder, and where is Singapore using one?",
        back: "A polder is low-lying reclaimed land enclosed by raised dikes and drained by pumps (pioneered in the Netherlands and built at Singapore's Pulau Tekong).",
      },
      {
        front: "How does a 'sponge city' adapt to climate change?",
        back: "It uses permeable pavements, rain gardens, bioswales and retention parks (like Bishan–Ang Mo Kio Park) to soak up intense downpours and prevent urban flash floods.",
      },
      {
        front: "State the temperature target and pledge system of the 2015 Paris Agreement.",
        back: "Hold global warming well below 2 °C (pursuing 1.5 °C) via voluntary Nationally Determined Contributions (NDCs) reviewed and strengthened every 5 years.",
      },
      {
        front: "Explain the 'free-rider problem' in international climate agreements.",
        back: "Because CO₂ mixes globally, a nation may avoid costly domestic emissions cuts while enjoying the climate benefits paid for by other cooperating countries.",
      },
      {
        front: "Why is Singapore considered 'alternative-energy disadvantaged', and how does it respond?",
        back: "Its tiny land area (~735 km²), low winds and lack of large rivers/geothermal limit domestic renewables — so it uses HDB rooftop & floating solar (Tengeh, ≥2 GWp) plus ASEAN clean electricity imports.",
      },
      {
        front: "Name four headline targets of the Singapore Green Plan 2030.",
        back: "Plant 1 million more trees; deploy ≥2 GWp solar; 100% cleaner-energy new cars (with 60,000 EV chargers); expand MRT to 360 km and cut Semakau landfill waste by 30%.",
      },
      {
        front: "How does East Coast's proposed 'Long Island' project deliver dual adaptation benefits?",
        back: "Reclaiming ~800 ha of raised land shields low-lying East Coast from rising sea levels while creating a brand-new coastal freshwater reservoir and public waterfront parks.",
      },
      {
        front: "Why is individual action valuable yet insufficient on its own to solve the climate crisis?",
        back: "Individual habits lower personal footprints and build public demand, but only systemic government/corporate action can decarbonise power grids, set carbon taxes, expand MRT lines and build sea defences.",
      },
    ],
    mustKnow: [
      "Can you clearly classify any strategy as **mitigation**, **adaptation**, or **both**?",
      "Can you evaluate **solar/wind, hydro, nuclear, EVs, CCS, afforestation and dietary shifts** with both strengths and limitations?",
      "Can you contrast **hard coastal engineering** (sea walls, polders, Marina Barrage) with **soft nature-based engineering** (mangroves, managed retreat)?",
      "Can you explain how **drought/salt-tolerant crops, drip irrigation, sponge cities and early-warning systems** build resilience?",
      "Can you explain the **Paris Agreement 2015** temperature goals (<2 °C / 1.5 °C), **NDCs**, **5-year ratchet** and **climate finance / Loss & Damage**?",
      "Can you evaluate **why COP agreements struggle** (non-binding targets, ~2.5–2.7 °C ambition gap, free-riding, development vs decarbonisation)?",
      "Can you explain why Singapore is **alternative-energy disadvantaged** and cite exact **Green Plan 2030** targets (1M trees, ≥2 GWp solar, EVs, carbon tax, 360 km MRT, Long Island)?",
      "Can you calculate **CO₂ saved**, **irrigation water saved**, **NDC emissions caps** and **carbon tax bills** accurately?",
      "Can you evaluate **individual vs systemic (government & corporate) action** in a balanced Year 9 PEEL conclusion?",
      "Can you explain why **mitigation and adaptation must happen together** using the bathtub analogy and locked-in warming?",
    ],
    misconceptions: [
      {
        wrong: "Building sea walls, storm-surge barriers and polders is a mitigation strategy because it fights climate change.",
        right: "Sea walls and polders are ADAPTATION — they protect coasts from rising seas without reducing atmospheric greenhouse gases. Mitigation cuts or removes GHGs.",
      },
      {
        wrong: "If we stop emitting CO₂ today, sea levels and global temperatures will immediately drop back to normal.",
        right: "Existing CO₂ remains aloft for centuries and oceans keep expanding for decades, so adaptation is still vital alongside rapid mitigation.",
      },
      {
        wrong: "The Paris Agreement legally fines countries millions of dollars if they miss their NDC emissions targets.",
        right: "Paris NDC pledges are voluntary and non-binding with no legal fines — compliance relies on transparent reporting, 5-year reviews and diplomatic peer pressure.",
      },
      {
        wrong: "Planting trees (afforestation) alone can offset all fossil-fuel emissions so we don't need to stop burning coal and oil.",
        right: "There is not enough spare land on Earth to offset ~37 billion tonnes of annual fossil-fuel CO₂ with trees alone, and wildfires can re-release stored carbon — deep fossil-fuel cuts are essential.",
      },
      {
        wrong: "Singapore can easily run 100% on local wind farms and hydroelectric dams.",
        right: "Singapore is alternative-energy disadvantaged (small area, low winds, no large rivers), so it combines rooftop/floating solar (≥2 GWp), ASEAN clean power imports, efficiency and carbon pricing.",
      },
      {
        wrong: "Climate change will be solved if individuals simply recycle plastic bottles and turn off lights.",
        right: "Individual actions matter for norms and demand, but rapid global decarbonisation requires systemic government policies (carbon taxes, clean grids, public transit, EV mandates) and corporate change.",
      },
    ],
    examMistakes: [
      "Mixing up **mitigation** (cutting/removing GHGs) with **adaptation** (coping with impacts) in classification or evaluation questions.",
      "Writing 'Paris Agreement stops warming at 1.5 °C' without noting the actual wording (**well below 2 °C, aiming for 1.5 °C**) AND the **~2.5–2.7 °C ambition gap**.",
      "Evaluating renewables, nuclear or CCS one-sidedly instead of presenting **both** strengths and limitations.",
      "Forgetting to distinguish **hard engineering** (sea walls, polders) from **soft nature-based engineering** (mangrove restoration, rain gardens).",
      "Describing Singapore Green Plan 2030 vaguely ('planting some trees and using green energy') instead of citing specific targets (**1M trees, ≥2 GWp solar, Tengeh floating solar, 2030 cleaner-energy new cars, Long Island**).",
      "In percentage-cut NDC questions (e.g. '35% reduction from 240 Mt'), giving the *amount cut* (84 Mt) when the question asked for the *new target cap* (156 Mt)!",
      "Giving a purely one-sided answer on 'individual vs systemic action' without weighing both roles in a clear concluding judgement.",
    ],
    mnemonics: [
      {
        topic: "Mitigation vs Adaptation",
        device: "M = Cause (Make less gas) · A = Aftermath (Adjust to survive)",
        explanation: "Mitigation reduces the greenhouse gas cause; Adaptation adjusts homes, farms and coasts to survive the aftermath.",
      },
      {
        topic: "Paris Agreement 2015",
        device: "P-A-R-I-S",
        explanation: "Pledges (NDCs), Aiming for 1.5 °C (<2 °C), Ratchet every 5 years, International finance ($100B+/Loss & Damage), Shared global commons (195 nations).",
      },
      {
        topic: "Singapore Green Plan 2030",
        device: "C-E-R-S",
        explanation: "City in Nature (1M trees), Energy Reset (2 GWp solar, EVs, carbon tax), Resilient Future (Long Island, Tekong polder, 30 by 30), Sustainable Living (360 km MRT, −30% Semakau waste).",
      },
    ],
    realWorld: [
      {
        title: "Tengeh Floating Solar Farm, Singapore",
        detail: "Spanning 45 football fields atop Tengeh Reservoir, this 60 MWp floating solar farm powers Singapore's five local water-treatment plants with clean electricity — saving land while cooling solar panels on water for higher efficiency!",
        emoji: "☀️",
      },
      {
        title: "East Coast 'Long Island', Singapore",
        detail: "Instead of building an ugly 3-metre concrete wall blocking East Coast Park's ocean view, Singapore plans to reclaim ~800 hectares of elevated land offshore — blocking future storm surges while creating a huge freshwater reservoir and 20 km of new parks.",
        emoji: "🏝️",
      },
      {
        title: "Bangladesh's Early-Warning Cyclone Revolution",
        detail: "After Cyclone Bhola killed over 300,000 people in 1970, Bangladesh built thousands of elevated concrete cyclone shelters and trained 76,000 community volunteers with megaphones and SMS alerts — slashing deaths from comparable modern cyclones to under 100.",
        emoji: "📡",
      },
      {
        title: "Bishan–Ang Mo Kio Park: Singapore's Sponge City Showcase",
        detail: "PUB tore out a rigid 2.7 km concrete monsoon canal and restored a meandering naturalised river inside a public park — expanding flood storage capacity by 40% during heavy tropical storms while boosting biodiversity and cooling nearby flats.",
        emoji: "🌿",
      },
      {
        title: "The Netherlands' Polders & 'Room for the River'",
        detail: "With roughly a third of the Netherlands below sea level, Dutch engineers combine massive storm-surge barriers and polders with 'Room for the River' — intentionally lowering floodplains so swollen rivers spread safely without bursting city dikes.",
        emoji: "🇳🇱",
      },
    ],
    videos: [
      {
        title: "Mitigation vs Adaptation: How Humanity Tackles Climate Change",
        channel: "TED-Ed / BBC Geography",
        url: "https://www.youtube.com/results?search_query=climate+change+mitigation+vs+adaptation+geography+explained",
      },
      {
        title: "The Paris Agreement & COP Summits Explained Simply",
        channel: "Vox / UNFCCC",
        url: "https://www.youtube.com/results?search_query=paris+agreement+2015+NDC+1.5+degrees+explained",
      },
      {
        title: "Singapore Green Plan 2030: Floating Solar, 1M Trees & Long Island",
        channel: "CNA Insider / Gov.sg",
        url: "https://www.youtube.com/results?search_query=singapore+green+plan+2030+long+island+coastal+protection",
      },
      {
        title: "Sponge Cities & Mangrove Restoration: Nature-Based Adaptation",
        channel: "DW Planet A / World Economic Forum",
        url: "https://www.youtube.com/results?search_query=sponge+cities+mangrove+restoration+climate+adaptation",
      },
    ],
    formulas: [
      {
        name: "Climate Mitigation",
        formula: "Actions that reduce GHG emissions OR remove CO₂ from the atmosphere (addresses root cause)",
        note: "Examples: solar/wind/nuclear, EVs, MRT, CCS, afforestation, methane-reducing diets.",
      },
      {
        name: "Climate Adaptation",
        formula: "Actions that adjust society, farms & coasts to reduce harm from inevitable impacts",
        note: "Examples: sea walls, polders, mangroves, drip irrigation, GM drought crops, sponge cities, early alerts.",
      },
      {
        name: "Net Zero Emissions",
        formula: "Human GHG Emissions − Carbon Removals (Sinks / CCS) = 0",
        note: "Singapore targets net-zero emissions by 2050.",
      },
      {
        name: "NDC Target Cap",
        formula: "Target Cap = Baseline × (1 − {{r / 100}})",
        note: "Always distinguish the amount CUT from the remaining target CAP.",
      },
      {
        name: "Carbon Tax Bill",
        formula: "Annual Tax = Emissions (tonnes CO₂) × Tax Rate (S$/tonne)",
        note: "Singapore's carbon tax rises from S$25/t (2024) → S$45/t (2026–27) → S$50–80/t (2030).",
      },
      {
        name: "Carbon Capture & Storage (CCS)",
        formula: "Capture CO₂ from smokestack → compress → inject deep into geological rock storage",
        note: "Useful for heavy industry (cement/steel), but expensive and cannot replace renewables.",
      },
      {
        name: "Blue Carbon",
        formula: "Carbon captured & stored by coastal mangroves, seagrasses and tidal salt marshes",
        note: "Mangrove restoration achieves BOTH mitigation (blue carbon) and coastal adaptation!",
      },
      {
        name: "Polder",
        formula: "Low-lying reclaimed land ringed by dikes + drained mechanically by pumps",
        note: "Used extensively in the Netherlands and on Singapore's Pulau Tekong.",
      },
      {
        name: "Paris Agreement (2015)",
        formula: "Hold warming well below 2 °C (aiming for 1.5 °C) via 5-year ratcheted NDCs",
        note: "Near-universal (~195 parties), but voluntary targets leave an ambition gap (~2.5–2.7 °C).",
      },
      {
        name: "Free-Rider Problem",
        formula: "Global climate benefits shared by all vs local transition costs borne by one nation",
        note: "Explains why international cooperation, transparency and climate finance are crucial.",
      },
    ],
  },
};
