import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "climate-change-science-impacts-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "greenhouse-effect-causes",
      question: "Which type of radiation passes easily IN through greenhouse gases, and which type is trapped going OUT?",
      options: [
        "Short-wave solar radiation enters; long-wave infrared heat is trapped.",
        "Long-wave infrared heat enters; short-wave visible sunlight is trapped.",
        "Ultraviolet rays enter through ozone holes; radio waves are trapped.",
        "Gamma rays enter from volcanoes; short-wave microwaves are trapped.",
      ],
      answerIndex: 0,
      hints: [
        "Use the mnemonic SW-In, LW-Trap.",
        "Sunlight arrives mostly as visible short-wave radiation; warm Earth emits long-wave infrared.",
      ],
      explanation:
        "Incoming short-wave solar radiation passes readily through greenhouse gases to warm Earth's surface, which then radiates outgoing long-wave infrared heat that greenhouse gases absorb and re-emit.",
    },
    {
      id: "climate-change-science-impacts-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "greenhouse-effect-causes",
      question: "What is the minimum number of years of atmospheric data geographers normally average to define a place's **climate**?",
      answer: { type: "number", value: 30, display: "30 years" },
      traps: [
        { spec: { type: "number", value: 1 }, feedback: "One year is too short — natural year-to-year weather swings (like El Niño) must be averaged out over 30 years." },
        { spec: { type: "number", value: 10 }, feedback: "A single decade is still shorter than the standard WMO climate averaging period of 30 years." },
      ],
      hints: [
        "The World Meteorological Organization uses a standard multi-decade period.",
        "Think of three decades.",
      ],
      solution: [
        "Weather covers hours to days, whereas climate is the long-term average pattern.",
        "Geographers standardly measure climate over at least **30 years**.",
      ],
    },
    {
      id: "climate-change-science-impacts-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "greenhouse-effect-causes",
      question: "Name the potent greenhouse gas (chemical formula CH₄) emitted in large quantities by cattle digestion, flooded rice paddies and thawing Arctic permafrost.",
      answer: { type: "text", accept: ["methane", "ch4", "methane gas"], display: "methane" },
      traps: [
        { spec: { type: "text", accept: ["carbon dioxide", "co2"] }, feedback: "CO₂ is mainly from fossil fuels and deforestation; CH₄ is methane." },
        { spec: { type: "text", accept: ["nitrous oxide", "n2o"] }, feedback: "Nitrous oxide (N₂O) comes mainly from nitrogen fertilisers; CH₄ is methane." },
      ],
      hints: [
        "It has one carbon atom and four hydrogen atoms (CH₄).",
        "It traps roughly 28–30 times more heat per tonne than CO₂ over 100 years.",
      ],
      solution: [
        "The formula CH₄ represents **methane**.",
        "Major sources include ruminant livestock (cattle), flooded rice paddies and thawing permafrost.",
      ],
    },
    {
      id: "climate-change-science-impacts-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "evidence-climate-change",
      question: "Atmospheric CO₂ rose from **280 ppm** in 1750 to **350 ppm** in 1988. Calculate the **percentage increase** in atmospheric CO₂ over that period.",
      answer: { type: "number", value: 25, display: "25%" },
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "Careful! You divided 70 by the new value (350) instead of the original 1750 value (280)." },
        { spec: { type: "number", value: 70 }, feedback: "70 ppm is the absolute increase — divide by 280 and multiply by 100 to find the percentage increase." },
      ],
      hints: [
        "First find the absolute increase: 350 − 280.",
        "Divide that increase by the original value (280), then multiply by 100.",
      ],
      solution: [
        "Absolute rise = {{350 - 280 = 70}} ppm.",
        "Percentage increase = {{(70 / 280) * 100 = 25}}%.",
      ],
      commonError: "Dividing by the final value (350) instead of the original value (280), which wrongly gives 20%.",
    },
    {
      id: "climate-change-science-impacts-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "evidence-climate-change",
      question: "Why does melting floating Arctic sea ice NOT directly raise global sea level?",
      options: [
        "Floating sea ice evaporates straight into the stratosphere before melting.",
        "Floating sea ice already displaces a mass of seawater equal to its own mass.",
        "Arctic ocean currents pull melted sea ice down into deep tectonic trenches.",
        "Polar sea ice contains zero liquid water when warmed above freezing point.",
      ],
      answerIndex: 1,
      hints: [
        "Think about an ice cube melting in a full glass of water.",
        "Recall Archimedes' Principle for floating objects.",
      ],
      explanation:
        "Because floating sea ice already displaces its own weight of seawater, melting it leaves sea level unchanged directly (though exposing dark water lowers albedo and speeds up warming of nearby land ice).",
    },
    {
      id: "climate-change-science-impacts-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "physical-impacts",
      question: "What single geographical term measures the fraction of incoming solar radiation that a surface reflects (high for bright snow/ice, low for dark ocean)?",
      answer: { type: "text", accept: ["albedo", "surface albedo", "albedo effect"], display: "albedo" },
      hints: [
        "Fresh snow has a value around 0.85; dark open ocean is around 0.06.",
        "It forms the second word of the 'ice–____ feedback loop'.",
      ],
      solution: [
        "**Albedo** measures how strongly a surface reflects sunlight.",
        "When bright high-albedo ice melts to reveal dark low-albedo seawater, more solar energy is absorbed.",
      ],
    },
    {
      id: "climate-change-science-impacts-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "physical-impacts",
      question: "Which process directly causes ocean acidification rather than coral bleaching?",
      options: [
        "Marine heatwaves making corals expel symbiotic algae from their tissues",
        "Melting glaciers cooling coastal seawater below tropical reef thresholds",
        "Seawater absorbing atmospheric CO₂ to form carbonic acid and lower pH",
        "Stronger cyclone winds depositing dry desert dust across ocean surfaces",
      ],
      answerIndex: 2,
      hints: [
        "Separate heat stress (coral bleaching) from chemical dissolution of CO₂ (acidification).",
        "Remember the equation CO₂ + H₂O → H₂CO₃.",
      ],
      explanation:
        "Ocean acidification happens when dissolved CO₂ reacts with seawater to form weak carbonic acid, lowering pH and depleting carbonate ions. Coral bleaching is triggered by heat stress causing corals to expel symbiotic algae.",
    },
    {
      id: "climate-change-science-impacts-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "physical-impacts",
      question: "If Earth's global average temperature rises by **1.2 °C** and the Arctic warms **3.5 times** faster due to Arctic amplification, calculate the Arctic temperature rise in °C.",
      answer: { type: "number", value: 4.2, display: "4.2 °C" },
      hints: [
        "Multiply the global average rise by the Arctic amplification factor.",
        "Compute 1.2 × 3.5.",
      ],
      solution: [
        "Arctic warming = {{1.2 * 3.5 = 4.2}} °C.",
      ],
    },
    {
      id: "climate-change-science-impacts-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "impacts-on-people",
      question: "Which semi-arid belt south of the Sahara is experiencing severe droughts, desertification, crop failure and climate-driven migration?",
      options: [
        "The Pampas",
        "The Siberian Tundra",
        "The Amazon Basin",
        "The Sahel",
      ],
      answerIndex: 3,
      hints: [
        "It includes countries such as Mali, Niger, Chad and Burkina Faso.",
        "It lies immediately along the southern edge of the Sahara Desert.",
      ],
      explanation:
        "The Sahel is the semi-arid transition belt south of the Sahara where hotter temperatures and erratic rainfall drive severe drought, desertification and food insecurity. The Siberian Tundra is polar permafrost and the Amazon is equatorial rainforest.",
    },
    {
      id: "climate-change-science-impacts-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "greenhouse-effect-causes",
      marks: 3,
      question: "Explain how the **enhanced greenhouse effect** causes global temperatures to rise. (3 marks)",
      hints: [
        "Start with what enters Earth's atmosphere from the Sun (specify wavelength).",
        "Explain what Earth's warm surface emits and what extra human gases do to it.",
      ],
      modelAnswer:
        "Incoming short-wave solar radiation passes through the atmosphere and warms Earth's surface. Earth then radiates heat outward as long-wave infrared energy. Extra human-emitted carbon dioxide and methane thicken the atmospheric layer, absorbing and re-emitting more outgoing infrared energy back toward the ground so heat is trapped.",
      markScheme: [
        {
          point: "Incoming short-wave solar radiation passes through the atmosphere to warm Earth's surface.",
          keywords: ["short-wave", "short wave", "solar radiation", "sunlight"],
        },
        {
          point: "Earth re-radiates heat outward as long-wave infrared radiation.",
          keywords: ["long-wave", "long wave", "infrared"],
        },
        {
          point: "Extra human-emitted gases (e.g. CO₂, CH₄) absorb and re-emit / trap more outgoing heat back toward the surface.",
          keywords: ["carbon dioxide", "co2", "methane", "absorb", "re-emit", "trap"],
        },
      ],
      commonError: "Writing that greenhouse gases 'block the Sun' or mentioning 'the ozone hole' — both score zero because greenhouse gases trap outgoing long-wave infrared heat.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (p1 & p2, 15 questions each, 4 written per paper)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: Causes, Evidence & Data Skills (15 questions: 6 short, 5 mcq, 4 written)
    // -----------------------------------------------------------------------
    {
      id: "climate-change-science-impacts-p1",
      title: "Practice Paper 1: Causes, Evidence & Climate Data",
      questions: [
        {
          id: "climate-change-science-impacts-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "greenhouse-effect-causes",
          question: "Earth's average surface temperature is **+15 °C**, whereas without the natural greenhouse effect it would be **−18 °C**. Calculate how many °C of warming the natural greenhouse effect provides.",
          answer: { type: "number", value: 33, display: "33 °C" },
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "Watch the negative sign! From −18 °C up to +15 °C spans 18 + 15 = 33 °C, not 18 − 15." },
          ],
          hints: [
            "Calculate the difference: 15 − (−18).",
          ],
          solution: [
            "Temperature difference = {{15 - (-18) = 15 + 18 = 33}} °C.",
          ],
        },
        {
          id: "climate-change-science-impacts-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "greenhouse-effect-causes",
          question: "Name the natural multi-millennial climate cycles involving changes in Earth's orbital eccentricity, axial tilt and precession that trigger glacial and interglacial periods.",
          answer: { type: "text", accept: ["milankovitch cycles", "milankovitch", "milankovitch orbital cycles", "orbital cycles"], display: "Milankovitch cycles" },
          hints: [
            "Named after Serbian mathematician Milutin ____.",
            "They run on ~100,000, ~41,000 and ~26,000 year timescales.",
          ],
          solution: [
            "Slow orbital changes in eccentricity, obliquity (tilt) and precession are **Milankovitch cycles**.",
          ],
        },
        {
          id: "climate-change-science-impacts-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "greenhouse-effect-causes",
          question: "A classmate says: 'Burning fossil fuels punches a hole in the ozone layer, letting extra heat into Earth.' Why is this explanation scientifically wrong?",
          options: [
            "Ozone depletion lets in UV radiation due to CFCs; climate change traps outgoing infrared via GHGs.",
            "Fossil fuels only release nitrogen gas, which freezes stratospheric ozone into polar ice clouds.",
            "The ozone layer sits inside Earth's liquid outer core and never interacts with solar radiation.",
            "Burning coal cools the stratosphere completely by reflecting all short-wave sunlight to space.",
          ],
          answerIndex: 0,
          hints: [
            "Separate the two environmental issues: CFCs + UV light vs greenhouse gases + outgoing infrared heat.",
            "Remember why the 'Never Write' rule warns against mentioning the ozone hole in climate answers.",
          ],
          explanation:
            "Ozone depletion is caused by CFCs letting harmful UV radiation through the stratosphere; climate change is caused by greenhouse gases (CO₂, CH₄, N₂O) trapping outgoing long-wave infrared heat in the lower atmosphere.",
        },
        {
          id: "climate-change-science-impacts-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "greenhouse-effect-causes",
          question: "In 1991, Mount Pinatubo injected sulphur dioxide into the stratosphere, cooling global temperatures by roughly **0.5 °C** for 1–2 years. What reflective tiny particles formed from that sulphur dioxide to scatter sunlight back to space?",
          answer: { type: "text", accept: ["sulphate aerosols", "sulfate aerosols", "aerosols", "volcanic aerosols"], display: "sulphate aerosols" },
          hints: [
            "Sulphur dioxide reacts with water vapour high in the stratosphere to make reflective droplets.",
            "The key term is 'sulphate ____' (or just 'aerosols').",
          ],
          solution: [
            "Stratospheric SO₂ forms reflective **sulphate aerosols** that scatter incoming sunlight back into space, temporarily cooling Earth.",
          ],
        },
        {
          id: "climate-change-science-impacts-p1-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "greenhouse-effect-causes",
          marks: 4,
          question: "Contrast **two natural** and **two human** drivers of climate change, explaining why natural drivers alone cannot account for rapid warming since 1850. (4 marks)",
          hints: [
            "Name two natural drivers (e.g. Milankovitch orbital cycles, volcanic eruptions or sunspot variations) and state their timescale or direction.",
            "Name two human drivers (e.g. burning fossil fuels releasing CO₂, livestock/rice releasing CH₄, or deforestation).",
            "Explain explicitly why the pace/direction of natural cycles fails to match rapid post-1850 warming.",
          ],
          modelAnswer:
            "Naturally, Milankovitch orbital cycles shift Earth's tilt and orbit over tens of thousands of years to trigger ice ages, while major volcanic eruptions inject stratospheric sulphate aerosols that reflect sunlight and cool Earth for 1–3 years. By contrast, human burning of coal, oil and gas releases huge amounts of carbon dioxide (CO₂), while livestock farming and deforestation emit methane (CH₄) and remove carbon sinks. Natural orbital shifts act far too slowly over millennia and volcanic aerosols cause temporary cooling rather than sustained warming, whereas human greenhouse emissions match the rapid post-industrial temperature rise.",
          markScheme: [
            {
              point: "Identifies and describes two natural drivers (e.g. Milankovitch orbital cycles, solar output/sunspots, volcanic sulphate aerosol cooling).",
              keywords: ["milankovitch", "orbital", "volcanic", "sulphate", "sulfate", "aerosol", "sunspot"],
            },
            {
              point: "Identifies fossil fuel burning releasing CO₂ as a major human driver.",
              keywords: ["fossil", "coal", "oil", "carbon dioxide", "co2"],
            },
            {
              point: "Identifies a second human driver (agriculture/livestock emitting CH₄/N₂O or deforestation removing carbon sinks).",
              keywords: ["livestock", "cattle", "methane", "ch4", "deforestation", "carbon sink", "fertiliser", "fertilizer"],
            },
            {
              point: "Explains why natural factors cannot explain modern warming (orbital changes take millennia; solar output flat; volcanoes cool briefly).",
              keywords: ["millennia", "slowly", "cooling", "flat", "cannot explain", "too slow"],
            },
          ],
        },
        {
          id: "climate-change-science-impacts-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "evidence-climate-change",
          question: "Antarctic ice cores preserve tiny trapped bubbles of ancient air reaching back roughly **800,000 years**. During natural warm interglacials before 1750, CO₂ peaked near **280 ppm**. By 2024 it reached **420 ppm**. How many ppm higher is 420 ppm than 280 ppm? (Give the number only.)",
          answer: { type: "number", value: 140, display: "140" },
          hints: [
            "Subtract the pre-industrial concentration from the 2024 concentration.",
            "Compute 420 − 280.",
          ],
          solution: [
            "Increase = {{420 - 280 = 140}} ppm above the pre-industrial baseline.",
          ],
        },
        {
          id: "climate-change-science-impacts-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "evidence-climate-change",
          question: "Which pairing lists ONE direct instrumental climate record and ONE indirect proxy record?",
          options: [
            "Satellite sea-ice maps (direct) and global weather station thermometers (proxy)",
            "Tide-gauge sea-level records (direct) and Antarctic ice-core air bubbles (proxy)",
            "Tree-ring widths (direct) and Kyoto cherry blossom historical diaries (proxy)",
            "Ocean Argo temperature floats (proxy) and ancient pollen cores (direct)",
          ],
          answerIndex: 1,
          hints: [
            "Direct records use human-built measuring instruments (thermometers, tide gauges, satellites, floats).",
            "Proxy records reconstruct past climate indirectly from natural or historical archives (ice cores, tree rings, bloom diaries).",
          ],
          explanation:
            "Tide gauges directly measure modern sea level, whereas Antarctic ice-core bubbles are natural proxy archives reconstructing ancient atmospheres. Thermometers and satellites are both direct; tree rings and bloom diaries are both proxies.",
        },
        {
          id: "climate-change-science-impacts-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "evidence-climate-change",
          question: "Global mean sea level rose at **1.6 mm/year** in the mid-20th century and recently reached **4.0 mm/year**. Calculate the **percentage increase** in the rate of sea-level rise.",
          answer: { type: "number", value: 150, display: "150%" },
          traps: [
            { spec: { type: "number", value: 250 }, feedback: "4.0 is 250% OF 1.6 — subtract the original 100% to get the percentage INCREASE (150%)." },
            { spec: { type: "number", value: 60 }, feedback: "You divided 2.4 by the new rate (4.0) instead of the original rate (1.6)." },
          ],
          hints: [
            "First find the rise in rate: 4.0 − 1.6 = 2.4 mm/year.",
            "Divide 2.4 by the original rate 1.6, then multiply by 100.",
          ],
          solution: [
            "Increase = {{4.0 - 1.6 = 2.4}} mm/year.",
            "Percentage increase = {{(2.4 / 1.6) * 100 = 150}}%.",
          ],
        },
        {
          id: "climate-change-science-impacts-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "evidence-climate-change",
          question: "Name the physical process by which warming ocean water increases in volume, contributing roughly 40–50% of observed global sea-level rise.",
          answer: { type: "text", accept: ["thermal expansion", "thermal expansion of water", "thermal expansion of seawater", "thermal expansion of the oceans"], display: "thermal expansion" },
          hints: [
            "When liquids heat up, their molecules move slightly further apart and occupy more space.",
            "Two words: '____ expansion'.",
          ],
          solution: [
            "Warming seawater increases in volume via **thermal expansion**, accounting for roughly 40–50% of global sea-level rise.",
          ],
        },
        {
          id: "climate-change-science-impacts-p1-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "evidence-climate-change",
          marks: 3,
          question: "A global temperature anomaly table records: **1900: −0.1 °C**, **1940: +0.1 °C**, **1965: −0.05 °C**, **1990: +0.45 °C**, **2016: +1.0 °C**, **2023: +1.2 °C**. Use the **TEA** framework to describe the pattern shown. (3 marks)",
          hints: [
            "T (Trend): describe the overall upward direction and where warming accelerates.",
            "E (Evidence): quote exact values with years and °C units from the data.",
            "A (Anomaly): point out the brief dip in 1965 (or sharp spike in 2016).",
          ],
          modelAnswer:
            "Overall, there is a clear upward trend in warming, accelerating steeply after 1965. Specifically, temperatures climb from a −0.1 °C baseline in 1900 to +0.45 °C in 1990 and peak at +1.2 °C by 2023 (an overall rise of 1.3 °C). An anomaly occurs in 1965, when the value briefly dips back down to −0.05 °C before rapid acceleration resumes.",
          markScheme: [
            {
              point: "States overall upward trend (and acceleration after 1965/1990).",
              keywords: ["upward", "increases", "rising", "accelerating", "climb", "steeper"],
            },
            {
              point: "Quotes accurate supporting evidence (at least two values with years/units or total 1.3 °C rise).",
              keywords: ["1.3", "baseline", "peak", "2023", "1900"],
            },
            {
              point: "Identifies a clear anomaly (the temporary cooling dip in 1965 to −0.05 °C).",
              keywords: ["dip", "drops", "temporarily", "exception", "anomaly"],
            },
          ],
        },
        {
          id: "climate-change-science-impacts-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "evidence-climate-change",
          question: "What does it mean when climate biologists report that European spring phenology has shifted earlier by 10–14 days since 1970?",
          options: [
            "Glaciers in the Alps have grown thicker during hotter summer months.",
            "Volcanic ash clouds have delayed autumn snowfall across Northern Europe.",
            "Seasonal biological events like flowering and bird migration occur earlier.",
            "Earth's axial tilt has shortened the length of the calendar year by two weeks.",
          ],
          answerIndex: 2,
          hints: [
            "Recall the definition of phenology from Kyoto's cherry blossom example.",
            "It tracks when living organisms respond to seasonal warmth.",
          ],
          explanation:
            "Phenology tracks seasonal biological timing; an earlier shift of 10–14 days means plants blossom and birds migrate noticeably earlier as spring temperatures warm.",
        },
        {
          id: "climate-change-science-impacts-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "physical-impacts",
          question: "Which sequence accurately represents the ice–albedo positive feedback loop in the Arctic?",
          options: [
            "Warming → more ice forms → higher albedo → extra sunlight reflected → rapid cooling",
            "Cooling → permafrost thaws → higher albedo → ocean freezes → stronger methane release",
            "Warming → sea ice melts → higher albedo → less sunlight absorbed → warming slows down",
            "Warming → sea ice melts → dark ocean lowers albedo → more solar energy absorbed → extra warming",
          ],
          answerIndex: 3,
          hints: [
            "Check whether dark ocean has a LOWER or HIGHER albedo than white sea ice.",
            "A positive feedback loop must end with *extra warming*.",
          ],
          explanation:
            "Warming melts high-albedo white sea ice, exposing low-albedo dark ocean that absorbs far more solar radiation and drives extra warming. Saying dark ocean has a *higher* albedo reverses the physics.",
        },
        {
          id: "climate-change-science-impacts-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "evidence-climate-change",
          question: "At a constant sea-level rise rate of **3.5 mm/year**, how many **centimetres (cm)** would sea level rise over **60 years**?",
          answer: { type: "number", value: 21, display: "21 cm" },
          traps: [
            { spec: { type: "number", value: 210 }, feedback: "210 is in millimetres — divide by 10 to convert to centimetres!" },
          ],
          hints: [
            "Multiply 3.5 mm/year by 60 years.",
            "Convert your answer from mm to cm by dividing by 10.",
          ],
          solution: [
            "Total rise in mm = {{3.5 * 60 = 210}} mm.",
            "Convert to cm: {{210 / 10 = 21}} cm.",
          ],
        },
        {
          id: "climate-change-science-impacts-p1-q14",
          kind: "mcq",
          difficulty: "core",
          guideRef: "impacts-on-people",
          question: "Which statement accurately compares historical emissions with climate vulnerability between HICs and SIDS like the Maldives?",
          options: [
            "HICs produced most historical CO₂ while SIDS emit tiny shares yet face extreme coastal danger.",
            "SIDS produced most historical CO₂ while HICs emit almost none and face total submergence.",
            "HICs lack the financial capital to build sea walls while SIDS enjoy vast mountainous interiors.",
            "Both HICs and SIDS emit identical tonnes of CO₂ per person and share equal adaptive capacity.",
          ],
          answerIndex: 0,
          hints: [
            "Connect this to the definition of climate injustice.",
            "Remember the Maldives emits <0.01% of global CO₂ yet 80% of its land sits below 1 metre.",
          ],
          explanation:
            "HICs generated the majority of historical cumulative emissions through industrialisation and possess greater adaptive wealth, whereas SIDS such as the Maldives emit tiny fractions yet face severe sea-level danger.",
        },
        {
          id: "climate-change-science-impacts-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "evidence-climate-change",
          marks: 4,
          question: "Explain **two** direct causes of rising global sea levels AND explain why melting floating Arctic sea ice does not directly raise sea levels yet still matters. (4 marks)",
          hints: [
            "Cause 1: what happens to the volume of ocean water as it absorbs heat?",
            "Cause 2: where must melting ice be located to add new water to the ocean?",
            "Floating sea ice: mention Archimedes/displacement, AND explain its indirect albedo link to warming.",
          ],
          modelAnswer:
            "First, oceans absorb over 90% of excess heat, causing warmer seawater to increase in volume through thermal expansion. Second, melting land-based glaciers and the Greenland and Antarctic ice sheets adds new meltwater directly into the oceans. Floating sea ice already displaces its own mass of water, so melting it causes no direct rise; however, losing bright ice exposes dark ocean with lower albedo, absorbing extra sunlight that warms the region and accelerates Greenland ice-sheet melt.",
          markScheme: [
            {
              point: "Explains thermal expansion (warming ocean water occupies a larger volume).",
              keywords: ["thermal expansion", "expands", "volume"],
            },
            {
              point: "Explains melting land ice (mountain glaciers, Greenland or Antarctic ice sheets adding new water).",
              keywords: ["land", "glaciers", "greenland", "antarctic", "ice sheets", "meltwater"],
            },
            {
              point: "Explains floating sea ice already displaces its own mass/volume of water (Archimedes' Principle).",
              keywords: ["displaces", "displacement", "archimedes"],
            },
            {
              point: "Explains why losing sea ice still matters (lower albedo exposes dark water, accelerating warming / land-ice melt).",
              keywords: ["albedo", "dark ocean", "reflects", "accelerates"],
            },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: Physical Feedbacks, Case Studies & Unequal Impacts (15 questions: 5 short, 6 mcq, 4 written)
    // -----------------------------------------------------------------------
    {
      id: "climate-change-science-impacts-p2",
      title: "Practice Paper 2: Feedback Loops & Unequal Global Impacts",
      questions: [
        {
          id: "climate-change-science-impacts-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "physical-impacts",
          question: "What name is given to permanently frozen Arctic ground (frozen for at least two consecutive years) that releases trapped methane and CO₂ when it thaws?",
          answer: { type: "text", accept: ["permafrost", "arctic permafrost"], display: "permafrost" },
          hints: [
            "Combine 'permanent' and 'frost'.",
            "Covers huge stretches of Siberia, Alaska and northern Canada.",
          ],
          solution: [
            "Permanently frozen ground is **permafrost**.",
          ],
        },
        {
          id: "climate-change-science-impacts-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "physical-impacts",
          question: "Bright snow reflects **85%** of incoming solar radiation while dark seawater reflects **10%**. How many **percentage points** more solar radiation does dark seawater absorb than bright snow?",
          answer: { type: "number", value: 75, display: "75%" },
          traps: [
            { spec: { type: "number", value: 90 }, feedback: "90% is the total absorbed by seawater — subtract the 15% absorbed by bright snow to find the difference (75)." },
          ],
          hints: [
            "First find how much each surface ABSORBS: 100% − reflected %.",
            "Snow absorbs 15%; seawater absorbs 90%. Now subtract 90 − 15.",
          ],
          solution: [
            "Bright snow absorbs {{100 - 85 = 15}}%; dark seawater absorbs {{100 - 10 = 90}}%.",
            "Difference = {{90 - 15 = 75}} percentage points.",
          ],
        },
        {
          id: "climate-change-science-impacts-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "physical-impacts",
          question: "Why is coral bleaching dangerous even if the coral polyp does not die immediately after turning white?",
          options: [
            "Expelling symbiotic algae removes the coral's main food source, causing starvation if heat persists.",
            "White coral skeletons absorb far more sunlight and instantly boil surrounding lagoon seawater.",
            "Bleached corals turn rapidly into floating icebergs that drift away from tropical coastlines.",
            "Bleached reefs emit massive volumes of CFC gases that destroy stratospheric ozone overhead.",
          ],
          answerIndex: 0,
          hints: [
            "What do the microscopic algae (zooxanthellae) provide to the coral animal besides colour?",
            "Without photosynthetic food, prolonged marine heatwaves kill the reef.",
          ],
          explanation:
            "Symbiotic zooxanthellae algae supply corals with most of their energy via photosynthesis; if sea temperatures stay too high after expulsion, bleached corals starve and die.",
        },
        {
          id: "climate-change-science-impacts-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "physical-impacts",
          question: "Which chemical change happens when the oceans absorb roughly a quarter of human CO₂ emissions?",
          options: [
            "Seawater turns strongly alkaline as extra carbonate ions multiply rapidly.",
            "Dissolved CO₂ forms carbonic acid, lowering pH and weakening marine shells.",
            "Ocean salinity drops to zero because CO₂ converts salt into freshwater.",
            "Deep-sea volcanic vents shut down permanently beneath mid-ocean ridges.",
          ],
          answerIndex: 1,
          hints: [
            "Recall the process called ocean acidification.",
            "Lower pH means higher acidity and fewer carbonate ions for calcium carbonate shells.",
          ],
          explanation:
            "Dissolved CO₂ forms carbonic acid (H₂CO₃), lowering ocean pH and reducing carbonate ions so corals, shellfish and plankton struggle to build calcium carbonate shells.",
        },
        {
          id: "climate-change-science-impacts-p2-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "physical-impacts",
          marks: 4,
          question: "Explain how the **permafrost–methane positive feedback loop** amplifies Arctic climate change. (4 marks)",
          hints: [
            "Start with initial Arctic warming and what happens to frozen soil.",
            "Explain the biological process releasing stored greenhouse gases.",
            "Connect those gases back to the enhanced greenhouse effect and close the loop.",
          ],
          modelAnswer:
            "Rising temperatures in Siberia, Alaska and northern Canada thaw permanently frozen ground that stores vast reserves of ancient organic matter. Once thawed, soil microbes decompose this organic carbon and release methane (CH₄) and carbon dioxide (CO₂) into the atmosphere. Because methane is roughly 28–30 times more potent than CO₂ over 100 years, these emissions thicken the greenhouse blanket and trap extra outgoing infrared heat. This drives even faster warming, thawing yet more frozen ground in a self-reinforcing spiral.",
          markScheme: [
            {
              point: "Initial warming thaws permanently frozen ground storing ancient organic carbon.",
              keywords: ["thaw", "organic", "siberia", "alaska", "canada", "frozen ground"],
            },
            {
              point: "Microbes decompose organic matter, releasing CH₄ and CO₂ into the atmosphere.",
              keywords: ["microbes", "decompose", "decomposition", "decay", "co2", "ch4", "carbon dioxide"],
            },
            {
              point: "Extra gases intensify the enhanced greenhouse effect / trap more outgoing infrared heat.",
              keywords: ["greenhouse", "infrared", "trap", "potent", "28"],
            },
            {
              point: "Closes the loop: extra warming causes further thawing in a self-reinforcing cycle.",
              keywords: ["further", "self-reinforcing", "spiral", "more", "faster warming"],
            },
          ],
        },
        {
          id: "climate-change-science-impacts-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "impacts-on-people",
          question: "Approximately what percentage of Singapore's total land area lies less than **5 metres** above mean sea level, creating significant coastal flood exposure?",
          answer: { type: "number", value: 30, display: "30%" },
          traps: [
            { spec: { type: "number", value: 80 }, feedback: "80% (<1 m) is the statistic for the Maldives! For Singapore, about 30% of land lies below 5 m." },
          ],
          hints: [
            "Recall the Singapore case study table from Section 4.",
            "Includes low-lying zones such as East Coast, Marina Bay and Changi — roughly three-tenths of the island.",
          ],
          solution: [
            "Roughly **30%** of Singapore's land lies less than 5 metres above mean sea level.",
          ],
        },
        {
          id: "climate-change-science-impacts-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "impacts-on-people",
          question: "Country H emits **12.8 tonnes** of CO₂ per person each year, whereas Country L emits **0.8 tonnes** per person. How many times greater are Country H's per-capita emissions than Country L's?",
          answer: { type: "number", value: 16, display: "16" },
          hints: [
            "Divide 12.8 by 0.8.",
            "Multiply both numbers by 10 to make it an easy integer division: 128 ÷ 8.",
          ],
          solution: [
            "Ratio = {{12.8 / 0.8 = 128 / 8 = 16}} times greater.",
          ],
        },
        {
          id: "climate-change-science-impacts-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "impacts-on-people",
          question: "In the Maldives, how does rising sea level threaten fresh drinking water even before islands completely submerge?",
          options: [
            "Higher sea temperatures freeze underground coral aquifers into solid ice blocks.",
            "Warmer monsoon breezes turn coastal rainwater straight into acidic carbonic gas.",
            "Saltwater intrusion seeps into shallow freshwater lenses beneath coral islands.",
            "Melting Antarctic ice sheets redirect Himalayan rivers away from Indian Ocean atolls.",
          ],
          answerIndex: 2,
          hints: [
            "Coral atolls have no rivers — residents rely on rainwater and a thin underground freshwater layer.",
            "What happens when rising salty ocean water pushes upward and inward into that layer?",
          ],
          explanation:
            "Coral atolls depend on fragile shallow freshwater lenses floating atop denser seawater; sea-level rise and storm overwash push saltwater into these lenses (saltwater intrusion), contaminating drinking water.",
        },
        {
          id: "climate-change-science-impacts-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "impacts-on-people",
          question: "A 1-metre sea-level rise in Bangladesh could submerge ~10–15% of national land area. Why would the human displacement impact be enormous?",
          options: [
            "Because Bangladesh's entire population lives inside elevated Himalayan mountain cities.",
            "Because Bangladesh has almost no agricultural land located near coastal rivers.",
            "Because Bangladesh receives zero monsoon rain and consists purely of rocky desert.",
            "Because over 170 million people live in a flat, densely populated delta relying on rice farming.",
          ],
          answerIndex: 3,
          hints: [
            "Think about population density, elevation and livelihoods in the Ganges–Brahmaputra–Meghna delta.",
            "Even 10–15% of land area in such a dense delta means 15–20 million+ residents affected.",
          ],
          explanation:
            "Bangladesh's vast Ganges–Brahmaputra–Meghna delta is extremely flat, densely populated (>170M total population) and dependent on coastal rice agriculture, so flooding and salinisation could displace 15–20 million+ people.",
        },
        {
          id: "climate-change-science-impacts-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "impacts-on-people",
          marks: 4,
          question: "Compare how climate change threatens **the Sahel** and **Singapore**, explaining one reason why their vulnerability differs. (4 marks)",
          hints: [
            "Detail the key physical hazard & human impact in the Sahel (drought, desertification, crop/livestock loss, migration).",
            "Detail Singapore's key exposure (~30% land <5 m, urban heat/dengue, >90% food imports).",
            "Contrast adaptive capacity (wealth, coastal engineering funds, healthcare) to explain why vulnerability differs.",
          ],
          modelAnswer:
            "In the semi-arid belt south of the Sahara, hotter temperatures and unreliable rainfall cause severe drought and desertification, leading to crop failure, livestock deaths, hunger and forced migration. By contrast, as a low-lying tropical city-state, ~30% of the island lies below 5 metres above sea level, exposing infrastructure to coastal flooding alongside urban heat stress, rising dengue outbreaks and food-price shocks because over 90% of food is imported. Although both face real physical hazards, adaptive capacity differs sharply: high GDP allows multi-billion-dollar sea walls, drainage and diversified food imports, whereas subsistence farming communities in low-income drylands lack irrigation, insurance and state funding.",
          markScheme: [
            {
              point: "Explains Sahel physical hazard and human impact (drought, desertification, crop failure, livestock loss or migration).",
              keywords: ["drought", "desertification", "crop failure", "livestock", "migration", "hunger"],
            },
            {
              point: "Explains Singapore's physical/economic exposure (~30% land <5 m, coastal flooding, dengue, urban heat or >90% food imports).",
              keywords: ["30%", "5 metres", "5 m", "coastal", "dengue", "90%", "imported", "heat"],
            },
            {
              point: "Identifies contrasting adaptive capacity / wealth / governance between HIC city-state and LIC drylands.",
              keywords: ["adaptive capacity", "gdp", "wealth", "sea walls", "funding", "subsistence", "insurance"],
            },
            {
              point: "Links adaptive capacity explicitly to resulting difference in human suffering / resilience.",
              keywords: ["resilience", "diversified", "lack irrigation", "state funding", "multi-billion"],
            },
          ],
        },
        {
          id: "climate-change-science-impacts-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "physical-impacts",
          question: "As global climate zones shift poleward and uphill, which group of ecosystems faces the highest risk of 'running out of habitat'?",
          options: [
            "Cold-adapted alpine mountaintop and Arctic tundra species",
            "Warm-adapted tropical invasive weeds spreading across lowlands",
            "Deep-sea hydrothermal vent bacteria living miles beneath ocean floors",
            "Urban street pigeons nesting inside heated temperate city centres",
          ],
          answerIndex: 0,
          hints: [
            "If you already live near the top of a mountain or at the North Pole, where can you move when it gets warmer?",
            "Think of polar bears and high-altitude alpine plants/mammals.",
          ],
          explanation:
            "Species already living on cold mountaintops or Arctic sea ice have nowhere higher or further poleward to migrate as temperatures rise, pushing them toward extinction.",
        },
        {
          id: "climate-change-science-impacts-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "physical-impacts",
          question: "For every **+1 °C** of atmospheric warming, air can hold roughly **7%** more water vapour. Approximately how much more moisture (%) can air hold after **+2.5 °C** of warming? (Use a linear estimate.)",
          answer: { type: "number", value: 17.5, display: "17.5%" },
          hints: [
            "Multiply 7% per °C by 2.5 °C.",
            "7 × 2 = 14, plus 7 × 0.5 = 3.5.",
          ],
          solution: [
            "Moisture increase ≈ {{7 * 2.5 = 17.5}}%.",
          ],
        },
        {
          id: "climate-change-science-impacts-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "impacts-on-people",
          question: "Why do climate change heatwaves disproportionately harm low-income outdoor workers in tropical cities compared with office workers?",
          options: [
            "Office buildings are always located far outside urban heat island zones.",
            "Outdoor labourers in construction and farming face direct wet-bulb heat stress without cooling.",
            "High-income office workers have naturally lower body temperatures during tropical heatwaves.",
            "Heatwaves only occur in rural agricultural fields and never affect concrete city centres.",
          ],
          answerIndex: 1,
          hints: [
            "Think about who works in direct sunlight and humidity versus air-conditioned spaces.",
            "Consider both health risk and lost wages when unsafe heat stops outdoor work.",
          ],
          explanation:
            "Outdoor construction, transport and agricultural workers experience direct heat and humidity stress with limited access to air conditioning, risking heatstroke and lost daily wages — illustrating social inequality within cities as well as between countries.",
        },
        {
          id: "climate-change-science-impacts-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "physical-impacts",
          marks: 3,
          question: "Distinguish clearly between **coral bleaching** and **ocean acidification**, naming the cause and impact of each. (3 marks)",
          hints: [
            "State the trigger and biological mechanism of coral bleaching.",
            "State the chemical trigger and shell/skeleton impact of ocean acidification.",
            "Make the contrast explicit (heat stress vs dissolved CO₂).",
          ],
          modelAnswer:
            "Bleaching is driven by marine heatwaves (+1–2 °C above normal summer highs), which stress corals into expelling their symbiotic photosynthetic algae (zooxanthellae), turning reefs white and risking starvation. By contrast, acidification happens when seawater absorbs excess atmospheric CO₂ to form carbonic acid, lowering ocean pH and depleting carbonate ions so corals and shellfish cannot easily build strong calcium carbonate shells or skeletons. Thus one is caused by excess heat while the other is a direct chemical consequence of dissolved CO₂.",
          markScheme: [
            {
              point: "Explains coral bleaching trigger (warm water/marine heatwave) and expulsion of symbiotic algae / starvation.",
              keywords: ["heatwave", "warm", "algae", "zooxanthellae", "expel", "starvation"],
            },
            {
              point: "Explains ocean acidification cause (dissolved CO₂ forming carbonic acid, lowering pH).",
              keywords: ["co2", "carbonic acid", "ph", "dissolve", "absorbs"],
            },
            {
              point: "Explains acidification impact (fewer carbonate ions, weakening calcium carbonate shells/skeletons).",
              keywords: ["carbonate", "shells", "skeletons", "shellfish", "weaken"],
            },
          ],
        },
        {
          id: "climate-change-science-impacts-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "impacts-on-people",
          marks: 4,
          question: "Using the **Maldives** and **Bangladesh**, explain why climate change is described as a crisis of **climate injustice**. (4 marks)",
          hints: [
            "Define climate injustice: mismatch between historical responsibility and impact severity/adaptive capacity.",
            "Cite specific facts for the Maldives (<0.01% emissions, 80% <1 m, saltwater/tourism/coral).",
            "Cite specific facts for Bangladesh (~0.3% emissions, low-lying dense delta, salinisation of rice/displacement).",
          ],
          modelAnswer:
            "Climate injustice occurs because the communities with the smallest historical greenhouse gas emissions frequently endure the harshest physical risks and have limited financial resources to defend themselves. For example, coral atolls in the Indian Ocean generate under 0.01% of global emissions, yet 80% of land sits below 1 metre above sea level — threatening freshwater lenses with saltwater intrusion and undermining reef tourism and fishing. Similarly, the densely populated Ganges–Brahmaputra delta produces roughly 0.3% of global CO₂, yet a 1-metre rise could submerge 10–15% of land, salinise vital rice paddies and displace millions of low-income rural farmers. Meanwhile, wealthy high-emitting nations hold far greater capital to build coastal engineering defences.",
          markScheme: [
            {
              point: "Defines climate injustice (lowest historical emitters suffering highest risk / lower adaptive capacity).",
              keywords: ["smallest", "historical", "lowest", "emissions", "limited financial", "unfair", "mismatch"],
            },
            {
              point: "Provides accurate place detail for the Maldives (<0.01% CO₂, 80% <1 m, freshwater lens / coral tourism).",
              keywords: ["0.01%", "80%", "1 metre", "1 m", "freshwater", "saltwater", "tourism", "atolls"],
            },
            {
              point: "Provides accurate place detail for Bangladesh (low-lying Ganges–Brahmaputra delta, 10–15% flooded, rice salinisation, millions displaced).",
              keywords: ["delta", "10–15%", "10-15%", "rice", "salinis", "displace", "millions"],
            },
            {
              point: "Contrasts with wealthy high-emitting nations possessing stronger capital/engineering capacity to adapt.",
              keywords: ["wealthy", "high-emitting", "hic", "capital", "defences", "defenses", "adapt"],
            },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-rigour Year 9 Geography challenge problems)
  // =========================================================================
  challenge: [
    {
      id: "climate-change-science-impacts-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "greenhouse-effect-causes",
      strategy: "Compare rates across timescales",
      question: "At the end of the last Ice Age, natural CO₂ rose by **90 ppm** (from 190 ppm to 280 ppm) over **9,000 years**. Between 1960 and 2020 (**60 years**), human-driven CO₂ rose by **96 ppm** (from 317 ppm to 413 ppm). How many **times faster** was the 1960–2020 rate of CO₂ rise (in ppm/year) than the natural post-Ice-Age rate?",
      answer: { type: "number", value: 160, display: "160" },
      traps: [
        { spec: { type: "number", value: 150 }, feedback: "150 is the ratio of time spans (9,000 ÷ 60) — remember the amounts also differed slightly (96 ppm vs 90 ppm)!" },
      ],
      hints: [
        "Calculate the natural rate first: 90 ppm ÷ 9,000 years = 0.01 ppm/year.",
        "Calculate the 1960–2020 rate: 96 ppm ÷ 60 years = 1.6 ppm/year.",
        "Divide the modern rate by the natural rate: 1.6 ÷ 0.01.",
      ],
      solution: [
        "Natural post-Ice-Age rate = {{90 / 9000 = 0.01}} ppm/year.",
        "Modern 1960–2020 rate = {{96 / 60 = 1.6}} ppm/year.",
        "Speed ratio = {{1.6 / 0.01 = 160}} times faster!",
      ],
    },
    {
      id: "climate-change-science-impacts-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "physical-impacts",
      strategy: "Weighted surface albedo",
      question: "An Arctic ocean grid cell is initially **80% sea ice** (albedo **0.85**) and **20% open ocean** (albedo **0.10**). After severe summer melt, it becomes **30% sea ice** and **70% open ocean**. By how many **percentage points** does the fraction of incoming sunlight **absorbed** by the grid cell increase?",
      answer: { type: "number", value: 37.5, display: "37.5%" },
      traps: [
        { spec: { type: "number", value: 0.375 }, feedback: "0.375 is the decimal change — multiply by 100 to convert into percentage points (37.5)!" },
      ],
      hints: [
        "Compute the initial weighted albedo: (0.80 × 0.85) + (0.20 × 0.10) = 0.68 + 0.02 = 0.70 (70% reflected, so 30% absorbed).",
        "Compute the post-melt weighted albedo: (0.30 × 0.85) + (0.70 × 0.10) = 0.255 + 0.070 = 0.325 (32.5% reflected, so 67.5% absorbed).",
        "Find the rise in absorbed percentage: 67.5 − 30.",
      ],
      solution: [
        "Initial albedo = {{0.80 * 0.85 + 0.20 * 0.10 = 0.70}} → absorbs {{100 - 70 = 30}}% of sunlight.",
        "Post-melt albedo = {{0.30 * 0.85 + 0.70 * 0.10 = 0.325}} → absorbs {{100 - 32.5 = 67.5}}% of sunlight.",
        "Increase in absorbed solar energy = {{67.5 - 30 = 37.5}} percentage points (more than double!).",
      ],
    },
    {
      id: "climate-change-science-impacts-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "evidence-climate-change",
      strategy: "Identify scientific controls",
      question: "A sceptic points to a 1998–2012 surface thermometer chart that looks flatter than the 1980–1998 stretch and claims global warming stopped. Which piece of physical evidence BEST refutes that claim?",
      options: [
        "Argo ocean floats showed over 90% of trapped heat kept pouring into the deep oceans throughout 1998–2012.",
        "Sunspot numbers tripled during 1998–2012, blocking incoming infrared radiation from heating land cities.",
        "Global CO₂ concentrations fell back down to 280 ppm between 1998 and 2012 before rising again later.",
        "Stratospheric ozone holes disappeared entirely in 1998, permanently stopping the greenhouse effect.",
      ],
      answerIndex: 0,
      hints: [
        "Where does >90% of Earth's excess trapped energy actually go?",
        "Think about picking a starting year (1998) that had a huge warm El Niño spike, plus checking ocean heat content!",
      ],
      explanation:
        "Cherry-picking a huge El Niño peak year (1998) hides the 30-year trend, and Argo deep-ocean measurements proved Earth kept accumulating massive heat inside the oceans (>90% of total warming) right through 1998–2012 — followed by record surface heat after 2014.",
    },
    {
      id: "climate-change-science-impacts-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "impacts-on-people",
      strategy: "Total vs per-capita arithmetic",
      question: "Nation A has a population of **6 million** and emits **48 million tonnes** of CO₂ per year. Nation B has a population of **160 million** and emits **128 million tonnes** of CO₂ per year. Calculate the ratio of **Nation A's per-capita emissions** to **Nation B's per-capita emissions** (how many times greater A is than B).",
      answer: { type: "number", value: 10, display: "10" },
      traps: [
        { spec: { type: "number", value: 0.375 }, feedback: "That compares total national emissions (48 ÷ 128) — remember to divide each nation's emissions by its population first!" },
      ],
      hints: [
        "Find Nation A's emissions per person: 48 million ÷ 6 million = 8 tonnes/person.",
        "Find Nation B's emissions per person: 128 million ÷ 160 million = 0.8 tonnes/person.",
        "Divide A's per-capita figure by B's: 8 ÷ 0.8.",
      ],
      solution: [
        "Nation A per capita = {{48 / 6 = 8}} tonnes/person.",
        "Nation B per capita = {{128 / 160 = 0.8}} tonnes/person.",
        "Per-capita ratio = {{8 / 0.8 = 10}} times greater in Nation A, even though Nation B emits more in total!",
      ],
    },
    {
      id: "climate-change-science-impacts-ch-q05",
      kind: "written",
      difficulty: "challenge",
      guideRef: "physical-impacts",
      strategy: "Link indirect physical chains",
      marks: 4,
      question: "Explain how warming in the **Arctic** (thousands of kilometres away) can directly worsen coastal flooding in **Singapore** and **the Maldives**. (4 marks)",
      hints: [
        "Start with Arctic amplification via the ice–albedo feedback loop.",
        "Link polar warming to melting *land* ice on Greenland and permafrost CH₄ release.",
        "Connect added ocean water + global thermal expansion to global mean sea-level rise.",
        "Tie explicitly to coastal elevation in Singapore (~30% <5 m) and the Maldives (80% <1 m).",
      ],
      modelAnswer:
        "Arctic sea-ice melt lowers surface albedo, exposing dark ocean that absorbs more sunlight and drives Arctic amplification (warming 3–4× faster than the global average). This intense regional heat accelerates melting of the nearby Greenland land-based ice sheet, pouring huge volumes of new meltwater into the world's interconnected oceans, while thawing permafrost releases methane that raises global temperatures and ocean thermal expansion everywhere. Because ocean basins are connected, global mean sea levels climb across the tropics too — exposing low-lying land (80% under 1 m on Indian Ocean atolls and 30% under 5 m around Marina Bay and East Coast) to higher storm surges and inundation.",
      markScheme: [
        {
          point: "Explains Arctic amplification via ice–albedo feedback (lower albedo exposing dark ocean).",
          keywords: ["albedo", "dark ocean", "amplification", "3–4", "3-4"],
        },
        {
          point: "Connects Arctic heat to Greenland land-ice melt adding new water to connected global oceans.",
          keywords: ["greenland", "land", "ice sheet", "meltwater", "interconnected", "connected"],
        },
        {
          point: "Connects permafrost methane release / extra greenhouse warming to global thermal expansion.",
          keywords: ["permafrost", "methane", "thermal expansion", "global mean sea"],
        },
        {
          point: "Applies specific low-lying vulnerability evidence for Singapore (~30% <5 m) and/or Maldives (80% <1 m).",
          keywords: ["80%", "1 m", "30%", "5 m", "storm surges", "east coast", "atolls"],
        },
      ],
    },
    {
      id: "climate-change-science-impacts-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "greenhouse-effect-causes",
      strategy: "Evaluate counter-arguments",
      question: "A debate speaker argues: 'Water vapour is the most abundant natural greenhouse gas, so human CO₂ emissions barely matter.' What is the strongest scientific rebuttal?",
      options: [
        "Water vapour stays in the air for millennia while CO₂ rains back down within one week.",
        "Water vapour acts as a fast feedback controlled by temperature, whereas CO₂ sets the thermostat.",
        "Water vapour only traps outgoing UV rays and plays zero role in Earth's natural warming.",
        "Human factories cannot produce CO₂ unless atmospheric humidity drops to zero percent.",
      ],
      answerIndex: 1,
      hints: [
        "How long does water vapour stay in the atmosphere before condensing as rain (~days) versus CO₂ (~centuries)?",
        "When CO₂ warms the air slightly, what happens to evaporation — creating a water-vapour feedback?",
      ],
      explanation:
        "Water vapour condenses and rains out within days, so its concentration is controlled by air temperature (a feedback). Long-lived CO₂ acts as Earth's control knob: adding CO₂ warms the air, which holds more water vapour (~7%/°C), amplifying CO₂'s initial warming!",
    },
    {
      id: "climate-change-science-impacts-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "evidence-climate-change",
      strategy: "Evaluate reliability of evidence",
      marks: 4,
      question: "Evaluate the strengths and limitations of **Antarctic ice cores** versus **satellite observations** as evidence for climate change. (4 marks)",
      hints: [
        "Strength of ice cores: 800,000-year time depth showing natural CO₂/temperature range before humans.",
        "Limitation of ice cores: proxy/polar location, lower year-by-year resolution in ancient deep layers.",
        "Strength of satellites: global, real-time, direct measurements (sea ice, sea level, solar output).",
        "Limitation of satellites: short time record (only since ~1978–1979).",
      ],
      modelAnswer:
        "Ice-core air bubbles provide an extraordinary 800,000-year record proving that modern 420+ ppm CO₂ far exceeds the natural 180–280 ppm glacial–interglacial ceiling. However, ice cores only sample polar locations and deep ancient layers compress so fine annual swings blur together. By contrast, spaceborne instruments deliver direct, high-precision global coverage of Arctic sea-ice shrinkage, rising sea heights and solar output every single day. Their main weakness is a short historical span — starting only in the late 1970s — which is why combining both long-term proxies and modern global instruments gives rock-solid proof.",
      markScheme: [
        {
          point: "Identifies strength of ice cores (800,000-year span proving modern CO₂ exceeds natural 180–280 ppm ceiling).",
          keywords: ["800,000", "800000", "420", "180", "280", "natural", "ceiling"],
        },
        {
          point: "Identifies limitation of ice cores (polar location only / compressed deep resolution / indirect isotope temperature proxy).",
          keywords: ["polar", "compress", "resolution", "blur", "proxy", "indirect"],
        },
        {
          point: "Identifies strength of satellites (direct global coverage of sea ice, sea level, solar output / high precision).",
          keywords: ["global", "direct", "real-time", "precision", "sea-ice", "sea ice", "solar output"],
        },
        {
          point: "Identifies limitation of satellites (short time span starting only in late 1970s) and value of combining lines.",
          keywords: ["1970s", "1978", "1979", "short", "combining"],
        },
      ],
    },
    {
      id: "climate-change-science-impacts-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "impacts-on-people",
      strategy: "Balanced PEEL evaluation",
      marks: 5,
      question: "'Wealth protects a country completely from the impacts of climate change.' To what extent do you agree with this statement? Use named case studies in your evaluation. (5 marks)",
      hints: [
        "State a balanced judgement ('partially agree / disagree overall').",
        "Argue FOR the role of wealth: contrast Singapore's S$100B+ adaptive capacity against Bangladesh/Sahel/Maldives.",
        "Argue AGAINST 'completely': show how Singapore still faces physical sea-level rise (~30% <5 m), heat/dengue, and global >90% food-import shocks (plus HICs face megafires/heatwaves).",
        "Finish with a clear concluding verdict weighing physical exposure vs adaptive wealth.",
      ],
      modelAnswer:
        "I only partially agree: high income dramatically reduces death tolls and speeds recovery, yet it cannot insulate any nation completely from planetary warming. On one hand, strong GDP gives Singapore far greater adaptive capacity than rural Bangladesh or the Sahel — Singapore can fund multi-billion-dollar coastal barrages, upgraded drains and healthcare, whereas low-income delta farmers face mass displacement from rice salinisation and Sahel communities endure hunger from desertification. On the other hand, even wealthy states remain physically and economically exposed: roughly 30% of Singapore lies below 5 metres above sea level, urban heatwaves and dengue surges threaten outdoor workers, and importing over 90% of its food leaves residents vulnerable to climate-driven harvest shocks abroad — while HICs like Australia and Canada suffer devastating megafires. Therefore, wealth buys stronger protection and resilience, but without global emissions cuts even the richest nations face escalating costs and disruption.",
      markScheme: [
        {
          point: "Gives a clear, nuanced stance ('partially agree' / 'disagree with completely').",
          keywords: ["partially", "to some extent", "cannot insulate", "not completely"],
        },
        {
          point: "Argues how wealth reduces vulnerability using contrast (e.g. Singapore coastal funds/healthcare vs LIC Bangladesh or Sahel).",
          keywords: ["adaptive capacity", "gdp", "bangladesh", "sahel", "salinisation", "desertification", "barrages"],
        },
        {
          point: "Challenges 'completely' with specific wealthy-country physical exposure (e.g. Singapore 30% <5 m, dengue, heatwaves, or Australia/Canada megafires).",
          keywords: ["30%", "5 metres", "5 m", "dengue", "megafires", "australia", "canada"],
        },
        {
          point: "Identifies global interconnected vulnerability (e.g. Singapore importing >90% of food exposed to global crop shocks).",
          keywords: ["90%", "import", "harvest", "food", "supply"],
        },
        {
          point: "Reaches a justified concluding verdict weighing wealth/adaptation against the need for emissions cuts.",
          keywords: ["therefore", "overall", "escalating", "emissions cuts", "resilience"],
        },
      ],
    },
  ],
};
