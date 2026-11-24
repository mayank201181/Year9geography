import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "climate-change-science-impacts",
  title: "Climate Change: Causes & Global Impacts",
  strand: "The Climate Crisis",
  icon: "🌡️",
  summary: "Discover how greenhouse gases trap heat, how scientists read 800,000 years of climate history, and why warming hits communities unequally.",
  intro:
    "Earth sits 150 million kilometres from the Sun — far enough that without an atmosphere our planet would be a frozen ball averaging **−18 °C**. Instead, Earth averages a comfortable **+15 °C**, thanks to a thin blanket of heat-trapping gases. Over the past 250 years, human activity has thickened that blanket dramatically. In this topic, you will investigate the physics of the **enhanced greenhouse effect**, weigh natural versus human causes, examine multi-source scientific evidence from ice cores to satellites, trace **positive feedback loops**, and evaluate why a **+1.2 °C** global temperature rise produces deeply unequal consequences from the Maldives and the Sahel to Singapore.",

  guide: [
    // =========================================================================
    // SECTION 1: greenhouse-effect-causes
    // =========================================================================
    {
      id: "greenhouse-effect-causes",
      heading: "Natural vs Enhanced Greenhouse Effect & Causes",
      discovery: {
        problem:
          "Venus is nearly twice as far from the Sun as Mercury, yet Venus has a scorching surface temperature of **465 °C** — hotter than Mercury's sunlit side (430 °C) and hot enough to melt lead. Meanwhile, Earth without its atmosphere would average **−18 °C** instead of **+15 °C**. If an atmosphere lets sunlight *in*, why does it make a planet dramatically *warmer* instead of shading it?",
        idea:
          "It comes down to **wavelength**! Sunlight arrives mostly as **short-wave radiation** (visible light), which passes easily through greenhouse gases like CO₂ and methane. Once Earth's surface absorbs that energy and warms up, it emits heat back out as **long-wave infrared radiation**. Greenhouse gas molecules vibrate and absorb outgoing long-wave heat, re-emitting much of it back toward the surface — acting like a one-way thermal blanket. Venus has a crushing 96% CO₂ atmosphere; Earth has a delicate trace of greenhouse gases that human activity is now thickening.",
      },
      body:
        "### Weather vs Climate\n\n" +
        "Before diagnosing climate change, never confuse **weather** with **climate**. **Weather** is the short-term state of the atmosphere over hours or days (for instance, a sudden thunderstorm over Orchard Road or a chilly winter week in London). **Climate** is the long-term average pattern of temperature, rainfall and wind measured over at least **30 years**. One cool week does not disprove global warming, just as one hot afternoon does not prove it — climate change is detected in multi-decade global trends.\n\n" +
        "### The Natural vs Enhanced Greenhouse Effect\n\n" +
        "The **natural greenhouse effect** is essential for life. Naturally occurring greenhouse gases — chiefly **water vapour (H₂O)**, **carbon dioxide (CO₂)**, **methane (CH₄)** and **nitrous oxide (N₂O)** — let incoming **short-wave solar radiation** pass down to Earth's surface, then absorb and re-emit outgoing **long-wave (infrared) heat radiation**. This natural process adds **33 °C** of warmth, lifting Earth from −18 °C to +15 °C.\n\n" +
        "The **enhanced greenhouse effect** occurs when human (anthropogenic) activities release extra greenhouse gases into the atmosphere. More greenhouse gas molecules intercept a greater share of outgoing long-wave infrared radiation, trapping extra thermal energy in the lower atmosphere (troposphere) and warming the planet.\n\n" +
        "Crucially, the greenhouse effect has **nothing to do with the ozone hole**. Ozone depletion (caused by CFC chemicals thinning stratospheric ozone) allows more harmful ultraviolet (UV) radiation to reach the ground. Climate change is driven by greenhouse gases trapping *outgoing infrared heat*.\n\n" +
        "### Natural Causes of Past Climate Change\n\n" +
        "Earth's climate has shifted naturally throughout geological history for three main reasons:\n" +
        "- **Milankovitch (orbital) cycles**: Over tens of thousands of years, slow changes in Earth's orbital shape (**eccentricity**, ~100,000 years), axial tilt (**obliquity**, ~41,000 years) and axial wobble (**precession**, ~26,000 years) alter how much solar energy reaches high northern latitudes, triggering ice ages (glacials) and warm interglacials.\n" +
        "- **Solar output variation**: Sunspot activity fluctuates on an 11-year cycle and occasionally over centuries (such as the Maunder Minimum during Europe's Little Ice Age). However, satellite data since 1978 show solar energy has remained flat or slightly dipped while Earth warmed sharply.\n" +
        "- **Volcanic eruptions**: Major explosive eruptions (e.g. **Mount Pinatubo, 1991**) blast ash and **sulphur dioxide (SO₂)** high into the stratosphere. SO₂ forms reflective sulphate aerosol droplets that bounce sunlight back to space, causing **short-term global cooling** of ~0.5 °C for 1–3 years. Volcanoes emit less than 1% of humanity's annual CO₂.\n\n" +
        "### Human (Anthropogenic) Causes Since 1750\n\n" +
        "Natural cycles operate over millennia or cause brief cooling — they cannot explain the rapid warming since the **Industrial Revolution (~1750)**. Three human drivers dominate:\n" +
        "- **Burning fossil fuels (coal, oil, natural gas)**: Power stations, factories, cement production, cars and aircraft burn carbon-rich fuels locked underground for millions of years, releasing massive quantities of **CO₂** (accounting for over 75% of human warming). Atmospheric CO₂ has climbed from **~280 ppm** in 1750 to **over 420 ppm** today.\n" +
        "- **Agriculture & livestock**: Ruminant livestock (cattle and sheep) produce **methane (CH₄)** during digestion, and bacteria in flooded rice paddies also emit CH₄. Methane traps roughly **28–30 times** more heat per tonne than CO₂ over 100 years (and ~80 times over 20 years). Artificial nitrogen fertilisers emit **nitrous oxide (N₂O)**, ~273 times more potent than CO₂.\n" +
        "- **Deforestation & land-use change**: Clearing tropical rainforests (such as the Amazon or Southeast Asian peat forests) for cattle ranching, palm oil or timber delivers a double blow — burning or rotting trees **releases stored carbon** directly into the air AND **removes a carbon sink** that previously absorbed CO₂ through photosynthesis.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of the natural greenhouse effect and the human-enhanced greenhouse effect">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<line x1="280" y1="14" x2="280" y2="236" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4" />` +
        `<text x="140" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">Natural Greenhouse Effect</text>` +
        `<text x="420" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--bad)">Enhanced Greenhouse Effect</text>` +
        `<rect x="18" y="64" width="244" height="32" rx="14" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2" opacity="0.85" />` +
        `<text x="140" y="84" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Normal GHG Layer (~280 ppm CO₂)</text>` +
        `<rect x="298" y="56" width="244" height="46" rx="16" fill="var(--bad)" opacity="0.22" stroke="var(--bad)" stroke-width="1.8" />` +
        `<text x="420" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">Thicker GHG Layer (420+ ppm CO₂)</text>` +
        `<text x="420" y="92" text-anchor="middle" font-size="9.5" fill="var(--ink)">Extra CO₂, CH₄ &amp; N₂O from human activity</text>` +
        `<rect x="18" y="198" width="244" height="34" rx="6" fill="var(--surface-2)" stroke="var(--line)" />` +
        `<text x="140" y="219" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Earth Surface (~+15 °C balance)</text>` +
        `<rect x="298" y="198" width="244" height="34" rx="6" fill="var(--bad)" opacity="0.18" stroke="var(--bad)" />` +
        `<text x="420" y="219" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Warmer Earth Surface (+1.2 °C &amp; rising)</text>` +
        `<line x1="65" y1="36" x2="65" y2="192" stroke="var(--brand)" stroke-width="2.5" />` +
        `<polygon points="65,196 60,186 70,186" fill="var(--brand)" />` +
        `<text x="26" y="130" font-size="9.5" font-weight="700" fill="var(--brand)">Short-wave</text>` +
        `<text x="26" y="142" font-size="9.5" fill="var(--ink-2)">solar in</text>` +
        `<line x1="150" y1="194" x2="150" y2="38" stroke="var(--good)" stroke-width="2.2" stroke-dasharray="5 3" />` +
        `<polygon points="150,34 145,44 155,44" fill="var(--good)" />` +
        `<text x="157" y="130" font-size="9.5" font-weight="700" fill="var(--good)">Most IR</text>` +
        `<text x="157" y="142" font-size="9.5" fill="var(--ink-2)">escapes</text>` +
        `<path d="M 210 194 Q 210 112 228 96 Q 242 112 238 190" fill="none" stroke="var(--bad)" stroke-width="1.8" />` +
        `<polygon points="238,194 233,184 243,185" fill="var(--bad)" />` +
        `<text x="218" y="160" text-anchor="middle" font-size="9" fill="var(--bad)">Some IR</text>` +
        `<text x="218" y="171" text-anchor="middle" font-size="9" fill="var(--bad)">trapped</text>` +
        `<line x1="342" y1="36" x2="342" y2="192" stroke="var(--brand)" stroke-width="2.5" />` +
        `<polygon points="342,196 337,186 347,186" fill="var(--brand)" />` +
        `<text x="303" y="130" font-size="9.5" font-weight="700" fill="var(--brand)">Short-wave</text>` +
        `<text x="303" y="142" font-size="9.5" fill="var(--ink-2)">solar in</text>` +
        `<line x1="406" y1="194" x2="406" y2="38" stroke="var(--good)" stroke-width="1.4" stroke-dasharray="4 4" />` +
        `<polygon points="406,34 402,43 410,43" fill="var(--good)" />` +
        `<text x="412" y="128" font-size="9" fill="var(--good)">Less IR</text>` +
        `<text x="412" y="139" font-size="9" fill="var(--ink-2)">escapes</text>` +
        `<path d="M 462 194 Q 460 112 480 102 Q 496 112 490 190" fill="none" stroke="var(--bad)" stroke-width="2.8" />` +
        `<polygon points="490,195 485,184 495,185" fill="var(--bad)" />` +
        `<path d="M 505 194 Q 505 112 520 102 Q 535 112 530 190" fill="none" stroke="var(--bad)" stroke-width="2.8" />` +
        `<polygon points="530,195 525,184 535,185" fill="var(--bad)" />` +
        `<text x="498" y="162" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--bad)">More long-wave</text>` +
        `<text x="498" y="174" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--bad)">IR re-emitted</text>` +
        `</svg>`,
      diagramCaption: "Short-wave sunlight enters easily in both panels, but a thicker human-enhanced greenhouse gas layer traps and re-emits much more outgoing long-wave infrared heat.",
      whyItWorks:
        "Different molecules absorb specific wavelengths of radiation depending on how their chemical bonds vibrate. Two-atom molecules like nitrogen (N₂, 78% of air) and oxygen (O₂, 21% of air) are symmetric and transparent to infrared heat. Tri-atomic and larger molecules like CO₂, H₂O and CH₄ bend and stretch at the exact frequencies of Earth's outgoing long-wave infrared radiation — which is why trace gases making up under 0.1% of dry air control planetary temperature.",
      keyPoints: [
        "**Weather** is short-term (hours–days); **climate** is the 30-year average pattern of temperature and precipitation.",
        "Incoming **short-wave solar radiation** passes through the atmosphere; greenhouse gases absorb and re-emit outgoing **long-wave infrared heat**.",
        "The **natural greenhouse effect** keeps Earth habitable (+15 °C vs −18 °C); the **enhanced greenhouse effect** is human-driven warming — and is completely separate from the **ozone hole**.",
        "Natural drivers (**Milankovitch cycles**, **solar output**, **volcanic sulphate cooling**) cannot explain rapid warming since 1750; human **fossil fuels (CO₂)**, **livestock/rice (CH₄)** and **deforestation** dominate.",
      ],
      strategies: [
        "Use the **SW-In / LW-Trap** chain whenever explaining the greenhouse effect so you never lose marks by writing vague phrases like 'traps the Sun's rays'.",
        "Check **timescale and direction** when sorting causes: Milankovitch cycles take 26,000–100,000 years and volcanic ash *cools* Earth for 1–3 years — neither matches rapid multi-decade warming.",
        "Pair every human activity with its **specific greenhouse gas** (fossil fuels → CO₂; cattle & rice paddies → CH₄; fertilisers → N₂O; deforestation → releases CO₂ + removes carbon sink).",
      ],
      thinkDeeper:
        "If nitrogen (78%) and oxygen (21%) make up 99% of dry air, why do geographers worry so much about CO₂ rising from 0.028% (280 ppm) to 0.042% (420 ppm)? Think about molecular transparency versus infrared absorption — and compare it to adding a small dose of dye to a clear glass of water.",
      workedExamples: [
        {
          title: "Calculating the Percentage Rise in Atmospheric CO₂",
          problem:
            "Pre-industrial atmospheric CO₂ concentration in 1750 was **280 ppm** (parts per million). By 2024, measurements at Mauna Loa reached **420 ppm**. Calculate the **percentage increase** in atmospheric CO₂.",
          steps: [
            "Find the absolute change: {{420 - 280 = 140}} ppm.",
            "Divide the change by the **original** (1750) value: {{140 / 280 = 0.5}}.",
            "Multiply by 100 to convert to a percentage: {{0.5 * 100 = 50}}%.",
          ],
          answer: "50%",
          yourTurn: {
            question:
              "Suppose an ice core records CO₂ at **280 ppm** in 1750 and **392 ppm** in 2011. Calculate the percentage increase in CO₂ from 1750 to 2011.",
            answer: { type: "number", value: 40, display: "40%" },
            solution: "Change = 392 − 280 = 112 ppm. Percentage increase = (112 ÷ 280) × 100 = 40%.",
          },
        },
        {
          title: "Explaining Why Volcanoes Do Not Explain Modern Global Warming",
          problem:
            "A student claims: 'Global warming is caused by volcanoes erupting hot lava and CO₂.' Give **two** scientific reasons why this claim is incorrect.",
          steps: [
            "First, address **explosive aerosol cooling**: large volcanic eruptions inject sulphur dioxide (SO₂) into the stratosphere, forming reflective sulphate aerosols that scatter incoming sunlight and cause *short-term cooling* (e.g. ~0.5 °C after Mount Pinatubo in 1991), not long-term warming.",
            "Second, compare **CO₂ emissions scale**: all Earth's volcanoes combined release roughly 0.2–0.3 billion tonnes of CO₂ per year — less than **1%** of the ~37 billion tonnes released annually by human fossil-fuel burning.",
          ],
          answer:
            "Large volcanic eruptions cause short-term cooling via stratospheric sulphate aerosols, and global volcanic CO₂ emissions are less than 1% of human fossil-fuel emissions.",
        },
      ],
    },

    // =========================================================================
    // SECTION 2: evidence-climate-change
    // =========================================================================
    {
      id: "evidence-climate-change",
      heading: "Scientific Evidence for Climate Change",
      discovery: {
        problem:
          "Global thermometer networks only began around **1850**, and weather satellites launched in the **1970s**. How can climate scientists confidently state that today's CO₂ concentration (420+ ppm) is higher than at any point in the last **800,000 years**?",
        idea:
          "Nature keeps its own archives called **climate proxies**. As snow falls on Antarctica each year and compresses into glacial ice, tiny bubbles of ancient air are sealed inside — like time capsules! Scientists drill multi-kilometre **ice cores** to measure trapped CO₂ directly and use oxygen isotope ratios in the ice to reconstruct ancient temperatures.",
      },
      body:
        "### Multiple Independent Lines of Evidence\n\n" +
        "Strong geographical arguments never rely on a single measurement. Climate scientists combine **direct instrumental records** (from the past ~175 years) with **proxy (indirect) records** stretching back hundreds of thousands of years — and every independent line points in the same direction.\n\n" +
        "### 1. Direct Instrumental & Satellite Records\n" +
        "- **Global temperature records**: Thousands of land weather stations, ships, ocean buoys (Argo floats) and satellites show Earth's average surface temperature has risen by **~+1.2 °C** since the 1850–1900 pre-industrial baseline, with the past ten years the warmest decade ever recorded.\n" +
        "- **Shrinking cryosphere (ice & snow)**: Satellite observations since 1979 show Arctic late-summer sea-ice extent shrinking by roughly **12–13% per decade**. Mountain glaciers across the Alps, Andes and Himalayas are retreating rapidly, and both the **Greenland** and **Antarctic** ice sheets are losing mass at accelerating rates.\n" +
        "- **Rising global sea levels**: Tide gauges and satellite altimeters record roughly **20–24 cm** of global mean sea-level rise since 1900. Crucially, the *rate* of rise has more than doubled — from ~1.4 mm/year during most of the 20th century to **over 3.6–4.5 mm/year** in the last decade — driven by two mechanisms: **thermal expansion** of warming ocean water and **melting land ice** (glaciers and ice sheets). *(Melting floating sea ice does not directly raise sea levels because it already displaces its own mass of water.)*\n\n" +
        "### 2. Proxy (Indirect) Palaeoclimate Evidence\n" +
        "- **Ice cores**: Drilled up to 3 km deep in Antarctica (e.g. EPICA Dome C, Vostok) and Greenland, ice cores preserve **800,000 years** of trapped atmospheric bubbles. They show that throughout eight glacial–interglacial cycles, CO₂ naturally fluctuated between **~180 ppm** (ice ages) and **~280–300 ppm** (warm interglacials) in tight lockstep with temperature — before shooting vertically past **420 ppm** since 1750.\n" +
        "- **Tree rings (dendrochronology)**: Trees add one growth ring per year; **wider rings** indicate warmer, wetter growing conditions, while **narrow rings** reflect cold or drought stress. Overlapping ancient timbers extend records back several thousand years.\n" +
        "- **Phenology & historical records**: **Phenology** is the timing of seasonal biological events. Across the Northern Hemisphere, spring flowers bloom earlier (Kyoto's 1,200-year cherry blossom diaries show peak bloom advancing markedly since 1900), birds migrate earlier, and plant/insect ranges are shifting poleward and uphill.\n\n" +
        "### Describing Climate Graphs with T-E-A\n\n" +
        "When answering Year 9 Geography graph questions, always apply **TEA**:\n" +
        "1. **T — Trend**: State the overall direction and pace (e.g. 'Global temperature anomaly rises steadily, accelerating sharply after 1980').\n" +
        "2. **E — Evidence**: Quote at least **two** accurate data points with years and units (e.g. 'from −0.1 °C in 1900 to +1.2 °C in 2023').\n" +
        "3. **A — Anomaly**: Identify any short-term dip or spike that bucks the overall pattern (e.g. 'a brief cooling dip between 1945 and 1970' or 'an unusually sharp El Niño spike in 2016').",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scientific evidence for climate change: ice-core CO2 history and the two drivers of sea-level rise">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<line x1="296" y1="16" x2="296" y2="234" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4" />` +
        `<text x="148" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">Ice-Core CO₂ Record (800,000 yrs)</text>` +
        `<line x1="46" y1="196" x2="278" y2="196" stroke="var(--ink-2)" stroke-width="1.5" />` +
        `<line x1="46" y1="42" x2="46" y2="196" stroke="var(--ink-2)" stroke-width="1.5" />` +
        `<rect x="47" y="114" width="218" height="58" fill="var(--brand-soft)" opacity="0.55" />` +
        `<text x="155" y="109" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">Natural glacial–interglacial band (180–280 ppm)</text>` +
        `<text x="41" y="175" text-anchor="end" font-size="9.5" fill="var(--ink-2)">180</text>` +
        `<text x="41" y="118" text-anchor="end" font-size="9.5" fill="var(--ink-2)">280</text>` +
        `<text x="41" y="54" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--bad)">420</text>` +
        `<text x="16" y="122" text-anchor="middle" font-size="9.5" fill="var(--ink-2)" transform="rotate(-90 16 122)">CO₂ (ppm)</text>` +
        `<polyline points="50,152 68,124 85,168 106,120 124,164 146,126 168,170 190,118 210,165 234,122 252,166 265,116 271,52" fill="none" stroke="var(--brand)" stroke-width="2.3" />` +
        `<circle cx="271" cy="52" r="4.5" fill="var(--bad)" />` +
        `<text x="258" y="45" text-anchor="end" font-size="9.5" font-weight="800" fill="var(--bad)">Today: 420+ ppm</text>` +
        `<text x="52" y="212" font-size="9.5" fill="var(--ink-2)">800k yrs ago</text>` +
        `<text x="158" y="212" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">400k yrs ago</text>` +
        `<text x="276" y="212" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--ink)">Now</text>` +
        `<text x="162" y="232" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Trapped air bubbles in Antarctic ice cores</text>` +
        `<text x="428" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">Why Global Sea Level Rises</text>` +
        `<rect x="314" y="42" width="228" height="54" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4" />` +
        `<text x="326" y="61" font-size="11" font-weight="800" fill="var(--brand)">1. Thermal Expansion (~40–50%)</text>` +
        `<text x="326" y="77" font-size="10" fill="var(--ink)">Oceans absorb &gt;90% of excess heat;</text>` +
        `<text x="326" y="90" font-size="10" fill="var(--ink-2)">warmer water molecules expand in volume.</text>` +
        `<rect x="314" y="106" width="228" height="54" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4" />` +
        `<text x="326" y="125" font-size="11" font-weight="800" fill="var(--bad)">2. Melting Land Ice (~50–60%)</text>` +
        `<text x="326" y="141" font-size="10" fill="var(--ink)">Glaciers, Greenland &amp; Antarctica add</text>` +
        `<text x="326" y="154" font-size="10" fill="var(--ink-2)">new meltwater directly into the sea.</text>` +
        `<rect x="314" y="172" width="228" height="54" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4" />` +
        `<text x="326" y="191" font-size="10.5" font-weight="800" fill="var(--ink)">Note: Floating Sea Ice (Arctic)</text>` +
        `<text x="326" y="207" font-size="9.8" fill="var(--ink-2)">Already displaces water → no direct rise,</text>` +
        `<text x="326" y="220" font-size="9.8" fill="var(--ink-2)">but lower albedo speeds up warming!</text>` +
        `</svg>`,
      diagramCaption: "Antarctic ice cores prove today's CO₂ spike breaks an 800,000-year ceiling, while sea-level rise is powered by thermal expansion plus land-ice melt.",
      whyItWorks:
        "Why does melting *land* ice raise sea level while melting *floating* sea ice does not? By Archimedes' Principle, a floating block of sea ice already displaces a volume of water equal to its own weight — just like an ice cube melting in a full glass of water without overflowing. In contrast, ice resting on rock in Greenland, Antarctica or Himalayan valleys is *outside* the ocean; when it melts and flows to the sea, it adds brand-new water volume!",
      keyPoints: [
        "Instrumental records show global mean temperature has risen by **~+1.2 °C** since pre-industrial times (1850–1900).",
        "**Ice cores** preserve ancient air bubbles proving CO₂ remained between 180–280 ppm for 800,000 years before surging above 420 ppm.",
        "**Sea-level rise** (~20–24 cm since 1900, now >3.6–4.5 mm/yr) is caused by **thermal expansion** AND **melting land ice** (glaciers & ice sheets), not directly by floating sea ice.",
        "**Tree rings**, **retreating glaciers**, **shrinking Arctic sea ice** and **earlier phenology** (spring blooms/migrations) provide independent confirmation.",
      ],
      strategies: [
        "Always structure graph-description answers with **TEA** (Trend + quoted Evidence with units/years + Anomaly).",
        "Distinguish **direct records** (thermometers, tide gauges, satellites since ~1850/1979) from **proxy records** (ice cores, tree rings, pollen, historical bloom diaries).",
        "When asked *why* sea levels are rising, always give **both** mechanisms: thermal expansion AND melting land ice — naming only ice melt misses half the marks!",
      ],
      thinkDeeper:
        "Why is a 1,200-year record of cherry blossom bloom dates in Kyoto useful evidence for climate change, yet insufficient on its own to prove *global* warming? Think about spatial scale and local urban heat islands.",
      workedExamples: [
        {
          title: "Calculating Accelerating Sea-Level Rise",
          problem:
            "Global mean sea level rose at an average rate of **1.5 mm/year** during the 20th century, and accelerated to **4.5 mm/year** in the recent decade. (a) Calculate the **percentage increase** in the rate of sea-level rise. (b) If the 4.5 mm/year rate continued for **50 years**, how many **centimetres (cm)** would sea level rise?",
          steps: [
            "(a) Increase in rate = {{4.5 - 1.5 = 3.0}} mm/year.",
            "Percentage increase = {{(3.0 / 1.5) * 100 = 200}}% (the rate has tripled).",
            "(b) Total rise in mm = {{4.5 * 50 = 225}} mm.",
            "Convert mm to cm by dividing by 10: {{225 / 10 = 22.5}} cm.",
          ],
          answer: "(a) 200% increase; (b) 22.5 cm",
          yourTurn: {
            question:
              "If global sea level rises at a steady rate of **4 mm/year** over **40 years**, calculate the total sea-level rise in **centimetres (cm)**.",
            answer: { type: "number", value: 16, display: "16 cm" },
            solution: "Total rise = 4 × 40 = 160 mm. Divide by 10 to convert to cm: 160 ÷ 10 = 16 cm.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 3: physical-impacts
    // =========================================================================
    {
      id: "physical-impacts",
      heading: "Physical Impacts on Earth's Systems",
      discovery: {
        problem:
          "Fresh snow and bright sea ice reflect up to **85%** of incoming sunlight back to space, whereas dark open ocean water absorbs over **90%**. Imagine the Arctic warms slightly and melts a wide patch of sea ice. Does that make the Arctic warm *slower*, *at the same speed*, or *faster*?",
        idea:
          "It makes the Arctic warm **much faster**! Replacing bright white ice with dark ocean lowers Earth's **albedo** (reflectivity). The dark ocean absorbs far more solar energy, warming the water further and melting even more ice. Geographers call this self-reinforcing spiral a **positive feedback loop** — 'positive' here means *amplifying*, NOT 'good'!",
      },
      body:
        "### Positive Feedback Loops: Climate Amplifiers\n\n" +
        "One of the most alarming discoveries in climate science is that warming triggers **positive feedback loops** — processes where an initial rise in temperature causes a physical change that accelerates warming even further:\n" +
        "- **Ice–albedo feedback**: **Albedo** measures how strongly a surface reflects sunlight (fresh ice ~0.85; dark ocean ~0.06). As warming melts Arctic sea ice and snow cover, darker ocean and land are exposed, absorbing extra short-wave solar radiation and amplifying warming. This is the main reason for **Arctic amplification**, where the Arctic is warming **3 to 4 times faster** than the global average.\n" +
        "- **Permafrost–methane feedback**: Vast areas of Siberia, Alaska and northern Canada are underlain by **permafrost** (ground frozen continuously for at least two years), locking away an estimated 1,400–1,600 billion tonnes of ancient organic carbon. As permafrost thaws, soil microbes decompose that organic matter and release **CO₂** and **methane (CH₄)** into the air — thickening the greenhouse blanket and triggering further thawing.\n\n" +
        "### Ocean Impacts: Warming, Bleaching & Acidification\n\n" +
        "- **Thermal expansion & coastal flooding**: Because the oceans absorb **over 90%** of excess heat trapped by greenhouse gases, ocean water expands and raises baseline sea levels, making coastal storm surges push much further inland.\n" +
        "- **Coral bleaching**: Reef-building corals rely on microscopic symbiotic algae (*zooxanthellae*) living inside their tissues to photosynthesise and provide food and vibrant colour. When marine heatwaves raise sea-surface temperatures by just **1–2 °C** above normal summer peaks, stressed corals expel their algae, turning stark white (**bleaching**). If heat persists, corals starve and die — as seen in repeated mass bleaching events on Australia's Great Barrier Reef.\n" +
        "- **Ocean acidification**: Oceans absorb roughly **25–30%** of human CO₂ emissions. Dissolved CO₂ reacts with seawater to form weak **carbonic acid**, lowering ocean pH (surface ocean pH has dropped from ~8.2 to ~8.1 — a **~30% increase in acidity** because pH is logarithmic!). Acidification reduces carbonate ions, weakening the calcium carbonate shells and skeletons of corals, oysters, pteropods and marine plankton.\n\n" +
        "### Extreme Weather & Shifting Biomes\n\n" +
        "- **Intensifying tropical storms**: Tropical cyclones (typhoons/hurricanes) draw energy from warm ocean surfaces (**>26.5 °C**). Warmer seas increase evaporation and latent heat, fuelling higher peak wind speeds and heavier extreme rainfall.\n" +
        "- **Heatwaves, droughts & wildfires**: A warmer atmosphere holds roughly **7% more water vapour per +1 °C** of warming (the Clausius–Clapeyron relationship), making wet extremes wetter while pulling moisture faster out of soils in dry regions — lengthening fire seasons and fuelling megafires (e.g. Australia 2019–20, Canada 2023).\n" +
        "- **Shifting biomes & biodiversity loss**: Temperature and rainfall zones are shifting poleward and uphill. Cold-adapted alpine and Arctic species (such as polar bears and pika) run out of habitat, while semi-arid edges face expanding **desertification**.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two climate positive feedback loops: the ice-albedo feedback loop and the permafrost-methane feedback loop">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<line x1="280" y1="16" x2="280" y2="234" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4" />` +
        `<text x="140" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">Loop 1: Ice–Albedo Feedback</text>` +
        `<rect x="66" y="38" width="148" height="32" rx="8" fill="var(--bad)" opacity="0.2" stroke="var(--bad)" stroke-width="1.5" />` +
        `<text x="140" y="58" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">1. Global Warming</text>` +
        `<rect x="146" y="106" width="122" height="38" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4" />` +
        `<text x="207" y="123" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">2. Bright Sea Ice</text>` +
        `<text x="207" y="136" text-anchor="middle" font-size="10" fill="var(--ink-2)">&amp; Snow Melt</text>` +
        `<rect x="52" y="182" width="176" height="40" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4" />` +
        `<text x="140" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">3. Dark Ocean Exposed</text>` +
        `<text x="140" y="213" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Lower albedo → more sun absorbed</text>` +
        `<rect x="14" y="106" width="114" height="38" rx="8" fill="var(--bad)" opacity="0.14" stroke="var(--bad)" stroke-width="1.4" />` +
        `<text x="71" y="123" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">4. Extra Warming</text>` +
        `<text x="71" y="136" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">(Arctic 3–4× faster)</text>` +
        `<path d="M 214 54 Q 246 72 228 102" fill="none" stroke="var(--brand)" stroke-width="2" />` +
        `<polygon points="226,106 225,96 234,100" fill="var(--brand)" />` +
        `<path d="M 220 144 Q 232 168 206 182" fill="none" stroke="var(--brand)" stroke-width="2" />` +
        `<polygon points="201,184 208,176 212,184" fill="var(--brand)" />` +
        `<path d="M 68 182 Q 44 166 56 148" fill="none" stroke="var(--bad)" stroke-width="2" />` +
        `<polygon points="59,144 50,150 58,154" fill="var(--bad)" />` +
        `<path d="M 58 106 Q 48 72 64 58" fill="none" stroke="var(--bad)" stroke-width="2" />` +
        `<polygon points="67,54 58,56 64,63" fill="var(--bad)" />` +
        `<text x="420" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--bad)">Loop 2: Permafrost–Methane</text>` +
        `<rect x="346" y="38" width="148" height="32" rx="8" fill="var(--bad)" opacity="0.2" stroke="var(--bad)" stroke-width="1.5" />` +
        `<text x="420" y="58" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">1. Arctic Warming</text>` +
        `<rect x="426" y="106" width="122" height="38" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4" />` +
        `<text x="487" y="123" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">2. Frozen Soil</text>` +
        `<text x="487" y="136" text-anchor="middle" font-size="10" fill="var(--ink-2)">(Permafrost) Thaws</text>` +
        `<rect x="332" y="182" width="176" height="40" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4" />` +
        `<text x="420" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">3. Microbes Decay Carbon</text>` +
        `<text x="420" y="213" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Release CH₄ &amp; CO₂ into air</text>` +
        `<rect x="294" y="106" width="114" height="38" rx="8" fill="var(--bad)" opacity="0.14" stroke="var(--bad)" stroke-width="1.4" />` +
        `<text x="351" y="123" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">4. Stronger</text>` +
        `<text x="351" y="136" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Greenhouse Effect</text>` +
        `<path d="M 494 54 Q 526 72 508 102" fill="none" stroke="var(--bad)" stroke-width="2" />` +
        `<polygon points="506,106 505,96 514,100" fill="var(--bad)" />` +
        `<path d="M 500 144 Q 512 168 486 182" fill="none" stroke="var(--bad)" stroke-width="2" />` +
        `<polygon points="481,184 488,176 492,184" fill="var(--bad)" />` +
        `<path d="M 348 182 Q 324 166 336 148" fill="none" stroke="var(--bad)" stroke-width="2" />` +
        `<polygon points="339,144 330,150 338,154" fill="var(--bad)" />` +
        `<path d="M 338 106 Q 328 72 344 58" fill="none" stroke="var(--bad)" stroke-width="2" />` +
        `<polygon points="347,54 338,56 344,63" fill="var(--bad)" />` +
        `</svg>`,
      diagramCaption: "In both positive feedback loops, initial warming triggers a physical change that feeds back to amplify the original warming.",
      whyItWorks:
        "Why does ocean acidification happen *even without* ocean warming? Because CO₂ dissolves directly into surface seawater to form carbonic acid (H₂CO₃), releasing hydrogen ions (H⁺). So ocean acidification is often called 'the other CO₂ problem' — cutting CO₂ emissions is the only way to solve both warming and acidification together.",
      keyPoints: [
        "A **positive feedback loop** amplifies an initial change (it means *self-reinforcing*, not beneficial).",
        "**Ice–albedo feedback** exposes dark, low-albedo ocean water, accelerating **Arctic amplification** (3–4× global warming rate).",
        "**Permafrost thaw** releases trapped **methane (CH₄)** and **CO₂**, amplifying the enhanced greenhouse effect.",
        "Warming oceans drive **thermal expansion**, **coral bleaching** (expulsion of symbiotic algae), stronger **tropical storms**, while dissolved CO₂ causes **ocean acidification**.",
      ],
      strategies: [
        "Trace feedback questions as a **4-step closed loop** (Warming → Physical change → Extra heat/gas trapped → Further warming) so the examiner sees why it is a *loop* and not a one-way chain.",
        "Separate **coral bleaching** (caused by *heat stress* expelling symbiotic algae) from **ocean acidification** (caused by *dissolved CO₂* lowering pH and weakening calcium carbonate shells).",
        "Remember the water-vapour rule: roughly **+7% moisture capacity per +1 °C**, explaining why storms drop heavier rain even while dry regions suffer fiercer droughts.",
      ],
      thinkDeeper:
        "Melting floating Arctic sea ice does not directly raise sea levels by displacement — yet climate scientists warn that losing Arctic sea ice will still speed up global sea-level rise. Trace the exact causal chain connecting floating Arctic sea ice to rising water in Singapore!",
      workedExamples: [
        {
          title: "Quantifying Arctic Amplification & Albedo Energy Absorption",
          problem:
            "Suppose Earth's global average temperature rises by **1.2 °C**, and the Arctic warms **3.5 times** faster due to ice–albedo feedback. (a) Calculate the Arctic temperature rise. (b) If a patch of bright ice reflects **85%** of incoming solar energy, while dark seawater reflects **10%**, how many percentage points *more* solar energy does the seawater absorb?",
          steps: [
            "(a) Arctic warming = {{1.2 * 3.5 = 4.2}} °C.",
            "(b) Bright ice absorbs {{100 - 85 = 15}}% of sunlight; dark seawater absorbs {{100 - 10 = 90}}% of sunlight.",
            "Extra solar energy absorbed = {{90 - 15 = 75}} percentage points (6 times as much absorbed energy!).",
          ],
          answer: "(a) 4.2 °C; (b) 75 percentage points more",
          yourTurn: {
            question:
              "If global average temperature rises by **1.5 °C** and the Arctic warms **3 times** faster due to Arctic amplification, calculate the Arctic temperature rise in °C.",
            answer: { type: "number", value: 4.5, display: "4.5 °C" },
            solution: "Arctic warming = 1.5 × 3 = 4.5 °C.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 4: impacts-on-people
    // =========================================================================
    {
      id: "impacts-on-people",
      heading: "How Climate Change Impacts People Unequally",
      discovery: {
        problem:
          "The Maldives produces less than **0.01%** of global greenhouse gas emissions, yet **80%** of its islands sit less than **1 metre** above sea level. Meanwhile, some high-income nations emit over **14 tonnes** of CO₂ per person each year and can afford multi-billion-dollar sea walls. What makes climate change a problem of **geography and justice**, not only physics?",
        idea:
          "Climate risk depends on three interacting factors: **physical exposure** (e.g. low-lying coast or semi-arid belt), **economic dependence on climate-sensitive livelihoods** (farming, fishing, reef tourism), and **capacity to adapt** (wealth, infrastructure, healthcare). Crucially, the people least responsible for historical emissions often face the sharpest danger — a pattern geographers call **climate injustice**.",
      },
      body:
        "### Climate Injustice: Lowest Emitters, Highest Risk\n\n" +
        "Climate change is a global process, yet its human impacts are starkly **unequal**. **High-Income Countries (HICs)** built their wealth over two centuries of fossil-fuel industrialisation and remain responsible for the largest share of historical cumulative CO₂ emissions per person. Yet **Low-Income Countries (LICs)** and **Small Island Developing States (SIDS)** often sit in tropical or low-lying zones, depend heavily on rain-fed farming or coastal fisheries, and lack the capital to engineer expensive defences. This mismatch between who *caused* the problem and who *pays the highest human price* is **climate injustice**.\n\n" +
        "### Four Contrasting Case Studies\n\n" +
        "| Location | Geographic Context | Key Climate Impacts on People | Vulnerability & Adaptation Capacity |\n" +
        "|---|---|---|---|\n" +
        "| **Maldives** (SIDS) | ~1,200 coral atolls; average height ~1.5 m, **80% < 1 m** above sea level | Coastal erosion, saltwater intrusion contaminating freshwater lenses, coral bleaching hitting fishing & tourism (>25% of GDP), risk of whole-island loss | Extreme physical exposure; limited land to retreat inland; costly artificial raised islands (e.g. Hulhumalé) |\n" +
        "| **Bangladesh** (LIC/NEE) | Low-lying Ganges–Brahmaputra–Meghna river delta; dense population (>170M) | A 1 m sea-level rise could submerge ~10–15% of land, displacing 15–20M+ people; salinisation ruins fertile rice paddies; deadlier cyclone storm surges | High poverty & rural farming dependence; growing cyclone shelters & embankments, but vast coastline |\n" +
        "| **The Sahel** (LIC belt) | Semi-arid zone south of the Sahara (Mali, Niger, Chad, Burkina Faso, Sudan) | Rising heat, erratic rains & prolonged droughts accelerate **desertification**, causing crop failure, livestock deaths, food/water conflict and **climate migration** | Heavy reliance on rain-fed subsistence farming; limited irrigation & social safety nets |\n" +
        "| **Singapore** (HIC city-state) | Tropical island; **~30% of land lies < 5 m** above mean sea level; imports **>90%** of its food | Coastal flood risk (East Coast, Marina Bay, Changi), intense flash-flood downpours, urban heat stress, rising **dengue** risk & global food-supply price shocks | High physical coastal & food-import exposure, but **high adaptive capacity** (S$100B+ coastal defence budget, drainage, cooling) |\n\n" +
        "### Health, Migration & Interconnected Impacts\n\n" +
        "- **Climate migrants / refugees**: When farmland turns to dust (the Sahel) or coastal villages flood repeatedly (Bangladesh, Pacific/Indian Ocean atolls), families are forced to move — mostly internally to overcrowded urban slums, and increasingly across borders (note: international law under the 1951 Refugee Convention does not yet formally recognise 'climate refugees').\n" +
        "- **Vector-borne diseases**: Warmer temperatures and heavier rainfall expand habitats and speed up breeding cycles for disease-carrying insects (**vectors**), such as *Aedes* mosquitoes spreading **dengue fever** in Singapore and Southeast Asia, and *Anopheles* mosquitoes pushing **malaria** into previously cool East African highlands.\n" +
        "- **Unequal heat stress**: Extreme heatwaves reduce outdoor working hours in construction and agriculture, disproportionately harming low-income outdoor labourers and elderly residents without air conditioning.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparing unequal climate risks and adaptive capacity across the Maldives, Bangladesh, the Sahel and Singapore">` +
        `<rect width="560" height="250" rx="10" fill="var(--surface)" />` +
        `<text x="280" y="23" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Unequal Climate Risk: Exposure vs Adaptive Capacity</text>` +
        `<rect x="16" y="38" width="256" height="92" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4" />` +
        `<text x="28" y="57" font-size="11.5" font-weight="800" fill="var(--bad)">Maldives (SIDS)</text>` +
        `<text x="260" y="57" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--ink-2)">&lt;0.01% global CO₂</text>` +
        `<text x="28" y="74" font-size="10" fill="var(--ink)">• 80% of land &lt;1 m above sea level</text>` +
        `<text x="28" y="90" font-size="10" fill="var(--ink)">• Saltwater ruins freshwater lenses</text>` +
        `<text x="28" y="106" font-size="10" fill="var(--ink)">• Coral bleaching threatens tourism &amp; fish</text>` +
        `<rect x="28" y="114" width="180" height="7" rx="3" fill="var(--line)" />` +
        `<rect x="28" y="114" width="166" height="7" rx="3" fill="var(--bad)" />` +
        `<text x="214" y="121" font-size="8.5" font-weight="700" fill="var(--bad)">Extreme Risk</text>` +
        `<rect x="288" y="38" width="256" height="92" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4" />` +
        `<text x="300" y="57" font-size="11.5" font-weight="800" fill="var(--bad)">Bangladesh (Low-Lying Delta)</text>` +
        `<text x="532" y="57" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--ink-2)">~0.3% global CO₂</text>` +
        `<text x="300" y="74" font-size="10" fill="var(--ink)">• 1 m rise floods ~10–15% of land</text>` +
        `<text x="300" y="90" font-size="10" fill="var(--ink)">• Rice farms damaged by salinisation</text>` +
        `<text x="300" y="106" font-size="10" fill="var(--ink)">• Cyclone surges displace millions</text>` +
        `<rect x="300" y="114" width="180" height="7" rx="3" fill="var(--line)" />` +
        `<rect x="300" y="114" width="160" height="7" rx="3" fill="var(--bad)" />` +
        `<text x="486" y="121" font-size="8.5" font-weight="700" fill="var(--bad)">Very High</text>` +
        `<rect x="16" y="142" width="256" height="92" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4" />` +
        `<text x="28" y="161" font-size="11.5" font-weight="800" fill="var(--bad)">The Sahel (Semi-Arid Belt)</text>` +
        `<text x="260" y="161" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--ink-2)">Tiny per-capita CO₂</text>` +
        `<text x="28" y="178" font-size="10" fill="var(--ink)">• Droughts &amp; erratic rainfall → desertification</text>` +
        `<text x="28" y="194" font-size="10" fill="var(--ink)">• Crop failure &amp; livestock loss → hunger</text>` +
        `<text x="28" y="210" font-size="10" fill="var(--ink)">• Water competition &amp; climate migration</text>` +
        `<rect x="28" y="218" width="180" height="7" rx="3" fill="var(--line)" />` +
        `<rect x="28" y="218" width="158" height="7" rx="3" fill="var(--bad)" />` +
        `<text x="214" y="225" font-size="8.5" font-weight="700" fill="var(--bad)">Very High</text>` +
        `<rect x="288" y="142" width="256" height="92" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4" />` +
        `<text x="300" y="161" font-size="11.5" font-weight="800" fill="var(--brand)">Singapore (HIC City-State)</text>` +
        `<text x="532" y="161" text-anchor="end" font-size="9.5" font-weight="700" fill="var(--ink-2)">High adaptive wealth</text>` +
        `<text x="300" y="178" font-size="10" fill="var(--ink)">• ~30% of land &lt;5 m above sea level</text>` +
        `<text x="300" y="194" font-size="10" fill="var(--ink)">• Urban heat, flash floods &amp; dengue risk</text>` +
        `<text x="300" y="210" font-size="10" fill="var(--ink)">• Imports &gt;90% of food (global supply risk)</text>` +
        `<rect x="300" y="218" width="180" height="7" rx="3" fill="var(--line)" />` +
        `<rect x="300" y="218" width="118" height="7" rx="3" fill="var(--brand)" />` +
        `<text x="486" y="225" font-size="8.5" font-weight="700" fill="var(--brand)">Managed</text>` +
        `</svg>`,
      diagramCaption: "Physical exposure alone does not determine human suffering — wealth, governance and food/water security create sharp inequalities between HICs, LICs and SIDS.",
      whyItWorks:
        "Why can two low-lying coastal places — say Bangladesh and Singapore — face similar sea-level rise yet vastly different death tolls and displacement? Because **vulnerability = exposure × sensitivity ÷ adaptive capacity**. Singapore can invest S$100 billion over the next century into coastal defences, drainage and diversified food imports; a low-income rural delta community relies directly on unprotected coastal farmland with little insurance or state rescue funding.",
      keyPoints: [
        "**Climate injustice**: Countries with the lowest historical CO₂ emissions per person (LICs and SIDS) frequently suffer the harshest climate impacts.",
        "**Maldives** (80% of land <1 m) and **Bangladesh** (low-lying delta) face coastal flooding, saltwater intrusion into freshwater/rice soil, and mass displacement.",
        "**The Sahel** faces hotter droughts, desertification, crop failure and climate-driven migration.",
        "**Singapore** has high physical exposure (~30% of land <5 m, urban heat, dengue, >90% food imports) but stronger financial and engineering capacity to adapt.",
      ],
      strategies: [
        "When comparing human impacts in two places, analyse **both physical exposure** (elevation, climate zone) AND **human adaptive capacity** (GDP, healthcare, building quality, livelihood dependence).",
        "Drop specific **place-based facts** (e.g. '80% of the Maldives is below 1 m', 'Singapore imports >90% of its food', 'Ganges–Brahmaputra delta salinisation') to earn top-band Year 9 marks.",
        "Link physical impacts to **social, economic and health** consequences (e.g. sea-level rise → salinisation → crop failure → loss of income → migration).",
      ],
      thinkDeeper:
        "Singapore emits roughly 0.1% of total global greenhouse gases, yet its *per-capita* emissions are higher than the global average. Why do geographers inspect **both** total national emissions AND emissions per person when debating climate justice?",
      workedExamples: [
        {
          title: "Measuring Emissions Inequality (Per-Capita Ratio)",
          problem:
            "In a given year, Country A (an HIC) emits **14 tonnes of CO₂ per person**, while Country B (an LIC in the Sahel) emits **0.7 tonnes of CO₂ per person**. How many times greater are Country A's per-capita emissions than Country B's?",
          steps: [
            "Divide Country A's per-capita emissions by Country B's: {{14 / 0.7}}.",
            "Multiply numerator and denominator by 10 to remove the decimal: {{140 / 7 = 20}}.",
            "Conclude clearly: the average resident in Country A emits **20 times** more CO₂ than the average resident in Country B.",
          ],
          answer: "20 times greater",
          yourTurn: {
            question:
              "If Country X emits **15 tonnes of CO₂ per person** and Country Y emits **0.6 tonnes of CO₂ per person**, how many times greater are Country X's per-capita emissions?",
            answer: { type: "number", value: 25, display: "25" },
            solution: "15 ÷ 0.6 = 150 ÷ 6 = 25 times greater.",
          },
        },
      ],
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What is the difference between weather and climate?",
        back: "Weather is the short-term atmospheric state over hours or days; climate is the long-term average pattern measured over at least 30 years.",
      },
      {
        front: "How does the greenhouse effect trap heat in terms of radiation wavelengths?",
        back: "Incoming short-wave solar radiation passes through the atmosphere to warm Earth, which emits outgoing long-wave (infrared) heat that greenhouse gases absorb and re-emit back toward the surface.",
      },
      {
        front: "What is the difference between the natural and enhanced greenhouse effect?",
        back: "The natural greenhouse effect keeps Earth habitable (+15 °C instead of −18 °C). The enhanced greenhouse effect is extra warming caused by human emissions thickening the greenhouse gas layer.",
      },
      {
        front: "Why is climate change NOT caused by the ozone hole?",
        back: "Ozone depletion (caused by CFCs) lets in harmful UV radiation; climate change is caused by greenhouse gases (CO₂, CH₄, N₂O) trapping outgoing long-wave infrared heat.",
      },
      {
        front: "Name the three natural causes of past climate change.",
        back: "1. Milankovitch orbital cycles (eccentricity, tilt, wobble over 26k–100k years); 2. Solar output variation (sunspots); 3. Major volcanic eruptions (sulphate aerosols causing short-term cooling).",
      },
      {
        front: "Why is deforestation a 'double blow' for climate change?",
        back: "Cutting/burning trees both releases stored carbon into the air as CO₂ AND destroys a living carbon sink that absorbed CO₂ via photosynthesis.",
      },
      {
        front: "How much has atmospheric CO₂ risen since pre-industrial times (1750)?",
        back: "From ~280 ppm in 1750 to over 420 ppm today — an increase of more than 50%, breaking an 800,000-year natural ceiling.",
      },
      {
        front: "What are the two main causes of global sea-level rise?",
        back: "1. Thermal expansion of warming ocean water; 2. Melting land ice (mountain glaciers plus the Greenland and Antarctic ice sheets). Floating sea ice does not directly raise sea level.",
      },
      {
        front: "How do Antarctic ice cores reveal climates from 800,000 years ago?",
        back: "Tiny trapped air bubbles preserve ancient CO₂ and CH₄ directly, while oxygen/hydrogen isotope ratios in the frozen ice reveal past temperatures.",
      },
      {
        front: "Explain the ice–albedo positive feedback loop.",
        back: "Warming melts bright, reflective ice (high albedo) → exposes dark ocean/land (low albedo) → absorbs more solar energy → warms further → melts even more ice.",
      },
      {
        front: "Explain the permafrost–methane positive feedback loop.",
        back: "Arctic warming thaws permanently frozen soil → microbes decompose ancient organic carbon → releases methane (CH₄) and CO₂ → intensifies greenhouse warming → thaws more permafrost.",
      },
      {
        front: "Distinguish coral bleaching from ocean acidification.",
        back: "Coral bleaching is caused by marine heat stress making corals expel symbiotic algae; ocean acidification is caused by dissolved CO₂ forming carbonic acid, lowering pH and weakening shells/skeletons.",
      },
      {
        front: "What is climate injustice?",
        back: "The unfair pattern where low-income countries and small island states with the smallest historical greenhouse gas emissions suffer the worst climate impacts and have the fewest resources to adapt.",
      },
      {
        front: "Give two reasons why Singapore is vulnerable to climate change despite its wealth.",
        back: "~30% of Singapore's land lies less than 5 m above sea level (coastal flood risk), it faces urban heat & dengue spikes, and it imports >90% of its food (exposed to global crop failures).",
      },
    ],
    mustKnow: [
      "Can you clearly distinguish **weather** (hours–days) from **climate** (30-year average)?",
      "Can you explain the greenhouse effect using **short-wave solar radiation** in and **long-wave infrared heat** trapped?",
      "Can you explain why the **enhanced greenhouse effect** is completely separate from the **ozone hole**?",
      "Can you contrast **three natural causes** (Milankovitch, solar output, volcanic cooling) with **three human causes** (fossil fuels, agriculture/livestock, deforestation)?",
      "Can you cite **direct evidence** (+1.2 °C warming, retreating glaciers, rising sea level) AND **proxy evidence** (ice cores, tree rings, phenology)?",
      "Can you explain **both** drivers of sea-level rise (**thermal expansion** + **melting land ice**) and why floating sea ice does not directly raise sea level?",
      "Can you describe a climate graph using **TEA** (Trend, Evidence with figures/years, Anomaly) and calculate **percentage change**?",
      "Can you trace **two positive feedback loops** (ice–albedo and permafrost–methane) step by step?",
      "Can you distinguish **coral bleaching** (heat stress) from **ocean acidification** (dissolved CO₂ lowering pH)?",
      "Can you compare unequal human impacts across **Maldives, Bangladesh, the Sahel and Singapore** using exposure and adaptive capacity?",
    ],
    misconceptions: [
      {
        wrong: "Climate change is caused by the hole in the ozone layer letting more heat from the Sun reach Earth.",
        right: "Climate change is caused by the enhanced greenhouse effect — greenhouse gases (CO₂, CH₄, N₂O) trapping outgoing long-wave infrared heat. Ozone depletion is a separate issue caused by CFCs letting in UV light.",
      },
      {
        wrong: "The greenhouse effect is bad and we need to stop it completely.",
        right: "The NATURAL greenhouse effect is vital — without it Earth would average −18 °C. It is the human-ENHANCED greenhouse effect that causes dangerous warming.",
      },
      {
        wrong: "Melting Arctic sea ice directly makes global sea levels rise.",
        right: "Floating sea ice already displaces its own mass of water, so melting it does not directly raise sea level; sea-level rise comes from thermal expansion and melting LAND ice (glaciers, Greenland, Antarctica). Losing sea ice still speeds up warming via lower albedo!",
      },
      {
        wrong: "Volcanic eruptions cause global warming because volcanoes are hot and emit CO₂.",
        right: "Major explosive eruptions inject sulphur dioxide aerosols into the stratosphere that reflect sunlight and cause 1–3 years of global COOLING, and volcanoes emit <1% of humanity's annual CO₂.",
      },
      {
        wrong: "A 'positive' feedback loop means a good or helpful outcome for Earth.",
        right: "In geography and science, 'positive feedback' means self-AMPLIFYING — initial warming triggers changes (ice melt, permafrost thaw) that cause even faster warming.",
      },
      {
        wrong: "One unusually cold winter week proves global warming is not happening.",
        right: "A cold week is short-term local weather; climate change is measured by 30-year global average temperature trends (+1.2 °C since pre-industrial times).",
      },
    ],
    examMistakes: [
      "Writing 'greenhouse gases trap sunlight' instead of specifying incoming **short-wave solar radiation** passing through and outgoing **long-wave infrared heat** being trapped.",
      "Forgetting to say **enhanced** greenhouse effect when explaining human-caused warming.",
      "Blaming sea-level rise only on 'melting ice' without specifying **land ice** AND **thermal expansion** of warming ocean water.",
      "Describing a climate graph with vague words ('it goes up') instead of quoting **TEA** figures (years, units, overall trend and an anomaly).",
      "Confusing **coral bleaching** (marine heat stress) with **ocean acidification** (dissolved CO₂ lowering pH).",
      "Describing impacts on people generically ('people lose homes') without place-specific evidence (e.g. 80% of Maldives <1 m, Bangladesh delta salinisation, Sahel drought/desertification, Singapore's 30% low-lying land).",
      "Dividing by the *new* number instead of the *original* number when calculating percentage increase in CO₂ or sea-level rise rate.",
    ],
    mnemonics: [
      {
        topic: "Greenhouse Physics",
        device: "SW-In, LW-Trap",
        explanation: "Short-Wave solar radiation enters freely; Long-Wave infrared heat is absorbed and re-emitted (trapped) by greenhouse gases.",
      },
      {
        topic: "Natural vs Human Causes",
        device: "M-S-V vs F-A-D",
        explanation: "Natural causes: Milankovitch cycles, Solar output, Volcanoes. Human causes: Fossil fuels (CO₂), Agriculture/livestock (CH₄/N₂O), Deforestation.",
      },
      {
        topic: "Describing Climate Graphs",
        device: "T-E-A",
        explanation: "Trend (overall direction & pace), Evidence (quote at least two values with years & units), Anomaly (any dip, spike or exception).",
      },
    ],
    realWorld: [
      {
        title: "The Keeling Curve at Mauna Loa, Hawaii",
        detail: "Since 1958, continuous measurements atop Hawaii's Mauna Loa volcano have tracked CO₂ climbing from 315 ppm to over 420 ppm — with a sawtooth yearly wiggle as Northern Hemisphere forests breathe in during summer and release CO₂ in winter.",
        emoji: "📈",
      },
      {
        title: "Singapore's Warmer Nights & Dengue Outbreaks",
        detail: "Singapore is warming roughly twice as fast as the global average due to global climate change plus the Urban Heat Island effect. Warmer temperatures shorten the breeding cycle of Aedes mosquitoes, contributing to major dengue surges.",
        emoji: "🦟",
      },
      {
        title: "Mass Bleaching on the Great Barrier Reef",
        detail: "Australia's 2,300 km coral reef suffered five widespread mass bleaching events between 2016 and 2024 as marine heatwaves pushed sea temperatures past corals' thermal tolerance.",
        emoji: "🪸",
      },
      {
        title: "Hulhumalé: Building Higher Ground in the Maldives",
        detail: "Because 80% of the Maldives lies under 1 metre above sea level, the government pumped sand from the seabed to build Hulhumalé — an artificial island raised ~2 metres above sea level to house tens of thousands of residents.",
        emoji: "🏝️",
      },
      {
        title: "Kyoto's 1,200-Year Cherry Blossom Diaries",
        detail: "Imperial court records in Kyoto, Japan have logged the peak cherry blossom date since 812 CE. After a millennium of stable mid-April blooms, peak flowering has jumped into late March — vivid phenological proof of warming.",
        emoji: "🌸",
      },
    ],
    videos: [
      {
        title: "How the Greenhouse Effect Actually Works (Short-wave vs Long-wave)",
        channel: "NASA Climate / Kurzgesagt",
        url: "https://www.youtube.com/results?search_query=greenhouse+effect+short+wave+long+wave+infrared+geography",
      },
      {
        title: "Ice Cores: Unlocking 800,000 Years of Climate Evidence",
        channel: "British Antarctic Survey / TED-Ed",
        url: "https://www.youtube.com/results?search_query=ice+cores+climate+change+evidence+800000+years",
      },
      {
        title: "Positive Feedback Loops: Albedo & Thawing Permafrost Explained",
        channel: "TED-Ed / Vox",
        url: "https://www.youtube.com/results?search_query=climate+change+positive+feedback+loops+albedo+permafrost",
      },
      {
        title: "Climate Injustice: Maldives, Bangladesh & Singapore Sea-Level Rise",
        channel: "CNA Insider / BBC Earth",
        url: "https://www.youtube.com/results?search_query=sea+level+rise+maldives+bangladesh+singapore+climate+change",
      },
    ],
    formulas: [
      {
        name: "Enhanced Greenhouse Effect",
        formula: "Human GHGs (CO₂, CH₄, N₂O) → absorb & re-emit more outgoing long-wave IR → net warming",
        note: "Distinct from the natural greenhouse effect (+33 °C) and completely separate from ozone depletion.",
      },
      {
        name: "Percentage Change",
        formula: "{{(New - Original) / Original * 100}}%",
        note: "Always divide by the ORIGINAL (earlier) value when computing CO₂ or sea-level rate increases.",
      },
      {
        name: "Albedo",
        formula: "Fraction of incoming solar radiation reflected by a surface (0 = absorbs all, 1 = reflects all)",
        note: "Fresh ice/snow ≈ 0.85; dark open ocean ≈ 0.06 — drives the ice–albedo feedback loop.",
      },
      {
        name: "Thermal Expansion",
        formula: "Warmer ocean water → molecules move faster → larger volume → higher sea level",
        note: "Accounts for ~40–50% of observed global sea-level rise alongside land-ice melt.",
      },
      {
        name: "Positive Feedback Loop",
        formula: "Initial warming → physical change → amplifies original warming",
        note: "Key examples: ice–albedo feedback and permafrost–methane release.",
      },
      {
        name: "Ocean Acidification",
        formula: "CO₂ + H₂O → H₂CO₃ (carbonic acid) → lower ocean pH & fewer carbonate ions",
        note: "Weakens calcium carbonate shells of corals, shellfish and marine plankton.",
      },
      {
        name: "Coral Bleaching",
        formula: "Marine heatwave (+1–2 °C) → corals expel symbiotic zooxanthellae algae → coral turns white & starves",
        note: "Driven by heat stress, distinct from ocean acidification.",
      },
      {
        name: "Phenology",
        formula: "Study of the timing of seasonal biological events (blooms, migrations, breeding)",
        note: "Earlier spring flowering and poleward species shifts provide biological evidence of warming.",
      },
      {
        name: "Permafrost",
        formula: "Ground (soil/rock/ice) remaining at or below 0 °C continuously for ≥ 2 consecutive years",
        note: "Thawing releases vast stores of ancient carbon as CO₂ and methane (CH₄).",
      },
      {
        name: "Climate Injustice",
        formula: "Low historical emissions + High physical exposure + Low adaptive capacity = disproportionate harm",
        note: "Seen starkly in SIDS (Maldives) and LICs (Bangladesh, the Sahel).",
      },
    ],
  },
};
