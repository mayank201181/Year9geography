import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Foundations of Climate Science & Evidence (15 MCQs)
  // answerIndex spread target: 0:4, 1:4, 2:4, 3:3
  // =========================================================================
  {
    id: "climate-change-science-impacts-m1",
    title: "MCQ Paper 1: Greenhouse Science & Climate Evidence",
    questions: [
      {
        id: "climate-change-science-impacts-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "greenhouse-effect-causes",
        question: "Which statement correctly distinguishes climate from weather?",
        options: [
          "Climate is the 30-year average atmospheric pattern, whereas weather changes over hours or days.",
          "Climate only describes tropical rainfall patterns, whereas weather only measures winter snowstorms.",
          "Climate tracks short-term daily thunderstorms, whereas weather measures multi-century ocean trends.",
          "Climate is measured using Antarctic ice cores alone, whereas weather is measured only by satellites.",
        ],
        answerIndex: 0,
        hints: [
          "Think about the timescale geographers use when defining climate versus daily forecasts.",
          "One cold afternoon is weather; a 30-year trend in temperature and rainfall is climate.",
        ],
        explanation:
          "Climate is the long-term average pattern of temperature, rainfall and wind over at least 30 years, while weather describes short-term atmospheric conditions over hours or days. Saying climate tracks daily thunderstorms reverses the two definitions.",
      },
      {
        id: "climate-change-science-impacts-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "greenhouse-effect-causes",
        question: "How do greenhouse gases warm the lower atmosphere?",
        options: [
          "They block incoming short-wave sunlight completely so solar energy cannot reach Earth's surface.",
          "They let incoming short-wave sunlight pass through, then absorb and re-emit outgoing long-wave infrared heat.",
          "They react with stratospheric ozone molecules to create an ozone hole that admits extra ultraviolet light.",
          "They reflect outgoing visible light straight into space while cooling Earth's crust during daytime hours.",
        ],
        answerIndex: 1,
        hints: [
          "Remember the mnemonic SW-In, LW-Trap.",
          "Greenhouse gases are transparent to visible sunlight coming in, but interact with infrared heat leaving Earth.",
        ],
        explanation:
          "Greenhouse gases allow incoming short-wave solar radiation to pass through to warm Earth, then absorb and re-emit outgoing long-wave infrared radiation back toward the surface. Confusing this with the ozone hole letting in UV light is a classic error.",
      },
      {
        id: "climate-change-science-impacts-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "greenhouse-effect-causes",
        question: "Without the natural greenhouse effect, Earth's average surface temperature would be approximately −18 °C rather than +15 °C. How much warming does the natural greenhouse effect provide?",
        options: [
          "3 °C of natural warming",
          "18 °C of natural warming",
          "33 °C of natural warming",
          "48 °C of natural warming",
        ],
        answerIndex: 2,
        hints: [
          "Find the temperature gap between −18 °C and +15 °C on a number line.",
          "Calculate 15 − (−18).",
        ],
        explanation:
          "Moving from −18 °C up to 0 °C is 18 °C, and from 0 °C up to +15 °C is another 15 °C, giving 18 + 15 = 33 °C of natural warming. Answering 3 °C mistakenly subtracts 15 from 18 instead of taking the full difference across zero.",
      },
      {
        id: "climate-change-science-impacts-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greenhouse-effect-causes",
        question: "Why is the enhanced greenhouse effect completely separate from the hole in the ozone layer?",
        options: [
          "The ozone hole is caused purely by volcanic ash, whereas climate change is caused by ocean tides.",
          "The ozone hole only affects the Arctic winter, whereas the greenhouse effect only warms the tropics.",
          "The ozone hole traps outgoing infrared radiation, whereas greenhouse gases block incoming UV rays.",
          "Ozone depletion is caused by CFCs letting in UV light, whereas climate change traps outgoing infrared heat.",
        ],
        answerIndex: 3,
        hints: [
          "Check which chemical pollutants cause ozone depletion and which type of radiation they let in.",
          "Compare incoming UV radiation (ozone) with outgoing long-wave infrared heat (greenhouse gases).",
        ],
        explanation:
          "Ozone depletion was caused mainly by CFCs thinning stratospheric ozone and letting in harmful UV radiation, whereas climate change is caused by greenhouse gases (CO₂, CH₄, N₂O) trapping outgoing long-wave infrared heat. Reversing UV and infrared mixes up the two mechanisms.",
      },
      {
        id: "climate-change-science-impacts-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greenhouse-effect-causes",
        question: "Which natural climate driver involves 26,000-to-100,000-year changes in Earth's orbital shape, axial tilt and wobble?",
        options: [
          "Milankovitch orbital cycles",
          "Stratospheric aerosol cycles",
          "Thermohaline circulation cycles",
          "Sunspot magnetic reversals",
        ],
        answerIndex: 0,
        hints: [
          "Think of the Serbian scientist who explained Earth's glacial and interglacial ice ages.",
          "Eccentricity (~100,000 yrs), obliquity (~41,000 yrs) and precession (~26,000 yrs) belong to this set of cycles.",
        ],
        explanation:
          "Milankovitch cycles describe slow changes in Earth's orbital eccentricity, axial tilt and precession that drive ice ages over tens of thousands of years. Sunspot cycles occur every 11 years and are far too short and weak to explain ice-age timing.",
      },
      {
        id: "climate-change-science-impacts-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greenhouse-effect-causes",
        question: "What is the immediate global temperature effect of a major explosive volcanic eruption such as Mount Pinatubo in 1991?",
        options: [
          "Long-term warming of +2 °C because volcanoes emit more CO₂ each year than fossil fuels.",
          "Short-term global cooling for 1–3 years as stratospheric sulphate aerosols reflect sunlight.",
          "Permanent cooling lasting thousands of years as ash permanently blocks infrared radiation.",
          "No temperature change at all because volcanic dust never reaches above local cloud height.",
        ],
        answerIndex: 1,
        hints: [
          "Think about what sulphur dioxide (SO₂) forms once blasted into the stratosphere.",
          "Reflective droplets bounce incoming sunlight back to space before it can warm Earth.",
        ],
        explanation:
          "Explosive eruptions inject SO₂ into the stratosphere, forming reflective sulphate aerosols that cool Earth by ~0.5 °C for 1–3 years. Claiming volcanoes out-emit fossil fuels is false: global volcanic CO₂ is under 1% of human emissions.",
      },
      {
        id: "climate-change-science-impacts-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greenhouse-effect-causes",
        question: "Which human activity is the primary source of rising atmospheric methane (CH₄), a gas roughly 28–30 times more potent than CO₂ over 100 years?",
        options: [
          "Generating electricity using nuclear fission and hydroelectric dams",
          "Installing rooftop solar photovoltaic panels across urban rooftops",
          "Rearing ruminant livestock such as cattle alongside flooded rice farming",
          "Manufacturing aluminium cans using wind-powered smelting plants",
        ],
        answerIndex: 2,
        hints: [
          "Remember M-S-V vs F-A-D: which letter represents livestock and rice paddies?",
          "Cattle release CH₄ during digestion and anaerobic bacteria produce CH₄ in waterlogged paddy soils.",
        ],
        explanation:
          "Cattle digestion (enteric fermentation) and anaerobic bacteria in flooded rice paddies are major human sources of methane (CH₄). Nuclear, hydro and solar generation do not emit methane during operation.",
      },
      {
        id: "climate-change-science-impacts-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greenhouse-effect-causes",
        question: "Why do geographers describe tropical deforestation as a 'double blow' for the enhanced greenhouse effect?",
        options: [
          "It creates an ozone hole above the rainforest while cooling nearby coastal ocean currents.",
          "It blocks incoming short-wave radiation while increasing Earth's planetary orbital eccentricity.",
          "It increases atmospheric nitrogen levels while raising regional rainfall across dry savannas.",
          "It releases carbon stored in trees as CO₂ while removing a living carbon sink for photosynthesis.",
        ],
        answerIndex: 3,
        hints: [
          "Think about what happens to carbon when trees are burned or rot, AND what living trees normally absorb.",
          "One blow adds CO₂ immediately; the second removes future CO₂ absorption.",
        ],
        explanation:
          "Clearing and burning forests immediately releases stored carbon as CO₂ AND destroys living trees that previously acted as a carbon sink absorbing CO₂ through photosynthesis. Deforestation has nothing to do with ozone depletion or orbital eccentricity.",
      },
      {
        id: "climate-change-science-impacts-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "evidence-climate-change",
        question: "By approximately how much has Earth's average surface temperature risen since the 1850–1900 pre-industrial period?",
        options: [
          "About +1.2 °C",
          "About +0.1 °C",
          "About +5.5 °C",
          "About +12.0 °C",
        ],
        answerIndex: 0,
        hints: [
          "Think of a seemingly small global average number that already has huge planetary effects.",
          "The Paris Agreement targets limiting warming to 1.5 °C — we are already close to that mark.",
        ],
        explanation:
          "Instrumental records show global average surface temperature has risen by about +1.2 °C since 1850–1900. Although +1.2 °C sounds modest compared to daily weather swings, it represents immense extra planetary heat; +5.5 °C would resemble the entire jump from an ice age to today.",
      },
      {
        id: "climate-change-science-impacts-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evidence-climate-change",
        question: "How do Antarctic ice cores allow scientists to measure atmospheric CO₂ levels from 800,000 years ago?",
        options: [
          "They measure radio signals bounced off ancient volcanic craters buried beneath the sea floor.",
          "They analyse tiny bubbles of ancient air physically trapped inside layers of compressed glacial ice.",
          "They count seasonal growth rings formed inside frozen polar seaweed preserved along coasts.",
          "They inspect historical thermometer diaries buried by explorers across Antarctica since 1850.",
        ],
        answerIndex: 1,
        hints: [
          "When snow compresses into ice year after year, what gets sealed inside tiny pockets?",
          "Ice cores act like a sealed atmospheric time capsule.",
        ],
        explanation:
          "As snow compacts into Antarctic ice sheets, microscopic bubbles of ancient atmosphere are sealed inside; extracting those bubbles lets scientists measure past CO₂ and CH₄ directly over 800,000 years. Thermometer diaries only go back to around 1850.",
      },
      {
        id: "climate-change-science-impacts-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evidence-climate-change",
        question: "Which combination correctly identifies the TWO direct physical drivers of global mean sea-level rise?",
        options: [
          "Melting floating Arctic sea ice and heavier snowfall across Antarctica",
          "Undersea volcanic eruptions and stronger daytime coastal sea breezes",
          "Thermal expansion of warming oceans and melting land-based glaciers and ice sheets",
          "Ocean acidification dissolving coral reefs and faster evaporation from tropical lakes",
        ],
        answerIndex: 2,
        hints: [
          "Remember what happens when a floating ice cube melts in a full glass versus pouring extra water in.",
          "Water expands when heated, and ice sitting on land flows into the ocean when it melts.",
        ],
        explanation:
          "Global sea-level rise is driven directly by thermal expansion (warming seawater takes up more volume) and meltwater entering the ocean from land-based glaciers and ice sheets. Floating Arctic sea ice already displaces its mass of water, so melting it does not directly raise sea level.",
      },
      {
        id: "climate-change-science-impacts-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evidence-climate-change",
        question: "Kyoto's 1,200-year historical diaries show cherry trees now blossom noticeably earlier in spring than in past centuries. Which type of climate evidence is this?",
        options: [
          "Satellite altimetry evidence",
          "Dendrochronology ring evidence",
          "Stratospheric aerosol evidence",
          "Phenological biological evidence",
        ],
        answerIndex: 3,
        hints: [
          "Look for the geographical term describing the seasonal timing of natural life-cycle events.",
          "Spring blooms, bird migrations and leaf-out dates belong to this field.",
        ],
        explanation:
          "Phenology is the study of the timing of seasonal biological events such as spring flowering and animal migration. Dendrochronology specifically studies tree-ring widths rather than blossom calendar dates.",
      },
      {
        id: "climate-change-science-impacts-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "physical-impacts",
        question: "Why does replacing bright white sea ice with dark open ocean speed up Arctic warming?",
        options: [
          "Dark ocean water has a much lower albedo, so it absorbs far more incoming solar radiation.",
          "Dark ocean water has a much higher albedo, so it reflects far more incoming solar radiation.",
          "Melting floating sea ice traps stratospheric ozone directly underneath polar ice shelves.",
          "Open polar seawater stops long-wave infrared radiation from entering Earth's atmosphere.",
        ],
        answerIndex: 0,
        hints: [
          "Compare how much sunlight a white snowfield reflects (~85%) versus dark seawater (~10%).",
          "Lower reflectivity (albedo) means higher absorption of solar energy.",
        ],
        explanation:
          "Bright ice has a high albedo (~0.85), reflecting most sunlight; dark open ocean has a low albedo (~0.06), absorbing over 90% of incoming solar energy and amplifying warming. Claiming dark water has a *higher* albedo reverses the definition of albedo.",
      },
      {
        id: "climate-change-science-impacts-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "physical-impacts",
        question: "What causes coral reefs to turn stark white during a mass coral bleaching event?",
        options: [
          "Cold deep-ocean currents freezing coral limestone skeletons during winter storms.",
          "Warming sea temperatures stressing corals into expelling their symbiotic algae.",
          "Freshwater river floods diluting coastal seawater with high levels of nitrogen.",
          "Rising atmospheric oxygen levels dissolving protective calcium carbonate layers.",
        ],
        answerIndex: 1,
        hints: [
          "What gives healthy corals both their bright colours and much of their food?",
          "When sea-surface temperatures jump +1 to +2 °C above summer norms, corals expel these microscopic partners.",
        ],
        explanation:
          "Marine heatwaves stress corals so they expel their symbiotic photosynthetic algae (zooxanthellae), revealing the white skeleton beneath and risking starvation. Ocean acidification weakens carbonate skeletons via dissolved CO₂ rather than causing heat-induced algal expulsion.",
      },
      {
        id: "climate-change-science-impacts-m1-q15",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "impacts-on-people",
        question: "Which statement best defines the geographical concept of 'climate injustice'?",
        options: [
          "Every country on Earth emits identical amounts of CO₂ and faces identical flood risks.",
          "Wealthy industrialised nations suffer all climate hazards while low-income nations stay unaffected.",
          "Low-emitting countries often face the harshest climate risks with the fewest resources to adapt.",
          "Polar regions receive less sunlight each winter than tropical countries located near the equator.",
        ],
        answerIndex: 2,
        hints: [
          "Compare who produced the largest share of historical emissions with who is most vulnerable to impacts.",
          "Think of the Maldives (<0.01% of global emissions) facing existential sea-level rise.",
        ],
        explanation:
          "Climate injustice describes the unfair mismatch where LICs and small island states with minimal historical emissions suffer severe climate hazards while lacking financial capacity to adapt. Saying every country faces identical risk ignores sharp geographic and economic inequalities.",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: Physical Feedbacks, Data & Global Case Studies (15 MCQs)
  // answerIndex spread target: 0:4, 1:4, 2:3, 3:4
  // =========================================================================
  {
    id: "climate-change-science-impacts-m2",
    title: "MCQ Paper 2: Feedback Loops, Oceans & Human Impacts",
    questions: [
      {
        id: "climate-change-science-impacts-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "physical-impacts",
        question: "Why do climate scientists describe thawing Arctic permafrost as a 'positive feedback loop'?",
        options: [
          "Thawing permafrost cools polar soils, slowing further global temperature increases.",
          "Thawing permafrost creates fertile Arctic farmland, producing beneficial food surpluses.",
          "Thawing permafrost locks away extra atmospheric CO₂ inside newly frozen tundra lakes.",
          "Thawing permafrost releases stored CH₄ and CO₂, amplifying warming and causing further thaw.",
        ],
        answerIndex: 3,
        hints: [
          "Remember: in climate science, 'positive' means self-amplifying, NOT beneficial.",
          "What happens when microbes decompose ancient organic carbon in newly thawed soil?",
        ],
        explanation:
          "As Arctic permafrost thaws, microbes break down ancient organic carbon and release methane (CH₄) and CO₂, strengthening the enhanced greenhouse effect and causing even more permafrost to thaw. Treating 'positive' as 'beneficial farmland' is a common misconception.",
      },
      {
        id: "climate-change-science-impacts-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "physical-impacts",
        question: "How does rising atmospheric CO₂ cause ocean acidification independently of ocean temperature?",
        options: [
          "Seawater absorbs CO₂ to form weak carbonic acid, lowering pH and reducing carbonate ions.",
          "Warm sunlight evaporates salt crystals, raising ocean pH and hardening shellfish shells.",
          "Melting Antarctic glaciers pour acid rain directly into deep mid-ocean volcanic ridges.",
          "Stronger tropical cyclones stir alkaline seabed mud into shallow coastal coral lagoons.",
        ],
        answerIndex: 0,
        hints: [
          "Think about what chemical forms when carbon dioxide dissolves in water (just like fizzy drinks).",
          "Does acidity correspond to a lower pH or a higher pH?",
        ],
        explanation:
          "Oceans absorb roughly 25–30% of human CO₂ emissions, forming weak carbonic acid (H₂CO₃) that lowers seawater pH and depletes carbonate ions needed by corals and shellfish. Raising pH would make seawater more alkaline, not acidic.",
      },
      {
        id: "climate-change-science-impacts-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evidence-climate-change",
        question: "Atmospheric CO₂ rose from 280 ppm in 1750 to 420 ppm in 2024. What is this percentage increase?",
        options: [
          "33.3% increase",
          "50.0% increase",
          "66.7% increase",
          "140.0% increase",
        ],
        answerIndex: 1,
        hints: [
          "First find the absolute rise: 420 − 280.",
          "Divide the rise by the ORIGINAL 1750 value (280), then multiply by 100.",
        ],
        explanation:
          "The increase is 420 − 280 = 140 ppm. Dividing by the original value gives (140 ÷ 280) × 100 = 50.0%. Answering 33.3% mistakenly divides 140 by the *new* value (420) instead of the original value (280).",
      },
      {
        id: "climate-change-science-impacts-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evidence-climate-change",
        question: "When analysing a tree-ring core from a temperate forest, what does a cluster of unusually WIDE annual rings typically indicate?",
        options: [
          "A series of severe multi-year droughts with frozen summer soils",
          "A major volcanic eruption blocking sunlight for several decades",
          "A period of warmer, wetter growing seasons supporting rapid growth",
          "A sudden rise in ocean acidity along distant tropical coastlines",
        ],
        answerIndex: 2,
        hints: [
          "Think about what growing conditions allow a tree to add thick new wood each year.",
          "Narrow rings mean stress (cold or drought); wide rings mean favourable growth.",
        ],
        explanation:
          "Wide tree rings indicate favourable warmer and wetter growing seasons that allow rapid wood growth, whereas narrow rings reflect cold or drought stress. Severe drought or volcanic cooling would produce narrow rings instead.",
      },
      {
        id: "climate-change-science-impacts-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "physical-impacts",
        question: "Why does global warming increase the intensity of extreme tropical cyclone rainfall and peak wind speeds?",
        options: [
          "Cooler equatorial oceans slow down trade winds and prevent clouds from forming over coasts.",
          "Thicker stratospheric ozone layers pull cold polar air straight toward the tropical equator.",
          "Lower atmospheric pressure stops ocean evaporation and keeps tropical air completely dry.",
          "Warmer oceans supply extra heat energy and a warmer atmosphere holds ~7% more water vapour per °C.",
        ],
        answerIndex: 3,
        hints: [
          "Tropical storms draw their power from warm ocean water above 26.5 °C.",
          "Also recall how warming affects how much moisture air can hold.",
        ],
        explanation:
          "Warmer seas provide more evaporation and latent heat to energise tropical cyclones, and warmer air holds roughly 7% more water vapour per +1 °C, producing heavier extreme rainfall. Cooler oceans or drier air would weaken storms, not strengthen them.",
      },
      {
        id: "climate-change-science-impacts-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "impacts-on-people",
        question: "Which geographic statistic best explains why the Maldives faces an existential threat from sea-level rise?",
        options: [
          "Roughly 80% of its coral islands lie less than 1 metre above sea level.",
          "Roughly 80% of its population lives in high-altitude mountain farming valleys.",
          "Roughly 80% of its national income comes from deep underground coal mining.",
          "Roughly 80% of its freshwater flows from melting Himalayan mountain glaciers.",
        ],
        answerIndex: 0,
        hints: [
          "Recall the elevation and landscape of the Maldives' ~1,200 coral atolls.",
          "There is almost no high ground inland for communities to retreat to.",
        ],
        explanation:
          "About 80% of the Maldives lies less than 1 metre above sea level (average elevation ~1.5 m), leaving almost no high ground for retreat and exposing freshwater lenses, homes and reef tourism to flooding and erosion.",
      },
      {
        id: "climate-change-science-impacts-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "impacts-on-people",
        question: "In coastal Bangladesh, how does sea-level rise threaten food security even on farmland that is not permanently underwater?",
        options: [
          "Rising sea levels cool delta soils too much for tropical rice seedlings to germinate.",
          "Saltwater intrusion and storm surges salinise fertile delta soils and poison rice crops.",
          "Higher tides wash away mountain snowpack needed to irrigate upland wheat terraces.",
          "Warmer seawater converts freshwater river fish directly into desert locust swarms.",
        ],
        answerIndex: 1,
        hints: [
          "What happens to freshwater rice paddies when salty seawater seeps into coastal soils and groundwater?",
          "Think of the term 'salinisation'.",
        ],
        explanation:
          "Rising seas and cyclone storm surges push salty water inland into the Ganges–Brahmaputra delta, salinising fertile soils and groundwater so traditional rice varieties cannot grow. Bangladesh's delta is flat lowland, not upland wheat terraces.",
      },
      {
        id: "climate-change-science-impacts-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "impacts-on-people",
        question: "Which climate hazard is the primary driver of crop failure, livestock loss and human displacement across the Sahel region of Africa?",
        options: [
          "Melting coastal permafrost collapsing arctic oil pipelines",
          "Tsunami waves generated by subduction earthquakes offshore",
          "Prolonged droughts, erratic rainfall and accelerating desertification",
          "Heavy winter blizzards burying lowland tropical mangrove swamps",
        ],
        answerIndex: 2,
        hints: [
          "Locate the Sahel on the world map — it is the semi-arid belt just south of the Sahara Desert.",
          "Think about how rising heat and unreliable rain affect rain-fed subsistence farming.",
        ],
        explanation:
          "The Sahel is a semi-arid belt south of the Sahara where hotter temperatures and unreliable rainfall drive severe droughts and desertification, devastating rain-fed crops and pastures and triggering climate migration. Permafrost and blizzards belong to polar/cold zones.",
      },
      {
        id: "climate-change-science-impacts-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "impacts-on-people",
        question: "Which pair of factors highlights Singapore's specific physical and economic exposure to climate change?",
        options: [
          "High reliance on rain-fed wheat exports and thawing mountain permafrost",
          "Active coastal composite volcanoes and frequent sub-zero winter frosts",
          "Vast inland desert borders and shrinking glacial meltwater reservoirs",
          "About 30% of land under 5 m elevation and importing over 90% of its food",
        ],
        answerIndex: 3,
        hints: [
          "Think about Singapore's coastal elevation around East Coast, Marina Bay and Changi.",
          "Also consider where most of Singapore's daily food supply comes from.",
        ],
        explanation:
          "Roughly 30% of Singapore lies less than 5 metres above mean sea level (creating coastal flood risk), and Singapore imports over 90% of its food, exposing it to climate-driven harvest shocks abroad. Singapore has no volcanoes, permafrost or deserts.",
      },
      {
        id: "climate-change-science-impacts-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "impacts-on-people",
        question: "How does climate warming increase the burden of vector-borne diseases such as dengue fever in Singapore and malaria in highland East Africa?",
        options: [
          "Warmer, wetter conditions expand mosquito ranges and speed up breeding cycles.",
          "Higher CO₂ concentrations turn drinking water directly into bacterial pathogens.",
          "Stronger ocean acidification pushes tropical mosquitoes out of coastal cities forever.",
          "Cooler nighttime temperatures force mosquitoes to hibernate for longer dry seasons.",
        ],
        answerIndex: 0,
        hints: [
          "What is a 'vector' in health geography?",
          "Think about how heat and standing rainwater affect Aedes and Anopheles mosquitoes.",
        ],
        explanation:
          "Disease vectors such as Aedes (dengue) and Anopheles (malaria) mosquitoes breed faster in warmer conditions and spread into higher altitudes or latitudes that were previously too cool. CO₂ itself does not convert water into pathogens.",
      },
      {
        id: "climate-change-science-impacts-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greenhouse-effect-causes",
        question: "Satellite measurements since 1978 show that total solar irradiance has stayed flat or dipped slightly while global temperatures climbed sharply. What does this evidence show?",
        options: [
          "Earth's orbit suddenly changed shape during the late twentieth century.",
          "Changes in solar output cannot explain recent rapid global warming.",
          "Greenhouse gases no longer absorb outgoing long-wave infrared radiation.",
          "Thermometers on land must be completely disconnected from ocean warming.",
        ],
        answerIndex: 1,
        hints: [
          "If the Sun is NOT sending more energy, could the Sun be causing the sharp post-1978 warming?",
          "Compare natural solar forcing with rising human greenhouse gas concentrations.",
        ],
        explanation:
          "Because solar output has remained steady or dipped slightly since 1978 while global temperatures surged, solar variation cannot account for modern warming — pointing directly to the human-enhanced greenhouse effect. Orbital eccentricity changes over 100,000 years, not decades.",
      },
      {
        id: "climate-change-science-impacts-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evidence-climate-change",
        question: "Global mean sea level rose at 1.4 mm/year in the 20th century and recently accelerated to 4.2 mm/year. By what percentage has the rate increased?",
        options: [
          "66.7% increase",
          "100% increase",
          "200% increase",
          "300% increase",
        ],
        answerIndex: 2,
        hints: [
          "Find the increase in rate: 4.2 − 1.4 = 2.8 mm/year.",
          "Divide 2.8 by the original rate 1.4, then multiply by 100. (Careful: tripling is NOT a 300% increase!)",
        ],
        explanation:
          "The increase is 4.2 − 1.4 = 2.8 mm/year. Percentage increase = (2.8 ÷ 1.4) × 100 = 200%. A very common exam slip is choosing 300% because 4.2 is 3 × 1.4 — tripling an amount is a 200% increase above the original 100%.",
      },
      {
        id: "climate-change-science-impacts-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evidence-climate-change",
        question: "In the TEA framework for describing a climate graph, what does the 'A' require a geographer to identify?",
        options: [
          "The atmospheric altitude of the weather station",
          "The average albedo of nearby polar glaciers",
          "The annual agricultural output of each continent",
          "An anomaly — a short dip, spike or exception to the main trend",
        ],
        answerIndex: 3,
        hints: [
          "T = Trend, E = Evidence (quoted figures with years and units)...",
          "What do you call a single point or brief period that bucks the overall direction?",
        ],
        explanation:
          "In TEA, T stands for Trend, E for Evidence (specific numbers, years and units) and A for Anomaly — noting a brief dip, unusual spike or outlier that stands out from the overall trend.",
      },
      {
        id: "climate-change-science-impacts-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "physical-impacts",
        question: "Global average surface temperature has risen by ~1.2 °C, yet parts of the Arctic have warmed by ~4.2 °C. What is this regional gap called?",
        options: [
          "Arctic amplification",
          "Equatorial cooling",
          "Stratospheric inversion",
          "Continental drift",
        ],
        answerIndex: 0,
        hints: [
          "Think of the term describing why the far north warms 3–4 times faster than Earth as a whole.",
          "It is powered strongly by the ice–albedo positive feedback loop.",
        ],
        explanation:
          "Arctic amplification refers to the Arctic warming 3–4 times faster than the global average, largely because melting snow and sea ice expose dark ocean/land (lowering albedo) and amplify regional heat absorption.",
      },
      {
        id: "climate-change-science-impacts-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "impacts-on-people",
        question: "Why can Singapore manage a 1-metre coastal flood risk far more effectively than rural coastal Bangladesh despite both having low-lying coastlines?",
        options: [
          "Singapore experiences zero tropical rainfall and lies far outside equatorial seas.",
          "Singapore has much higher GDP, engineering capacity and public funds for coastal defences.",
          "Singapore sits at an average elevation of 500 metres above surrounding ocean tides.",
          "Bangladesh has far fewer coastal rivers and virtually no population living near deltas.",
        ],
        answerIndex: 1,
        hints: [
          "Recall the vulnerability equation: exposure × sensitivity ÷ adaptive capacity.",
          "Compare financial and engineering resources in an HIC city-state versus a densely populated rural delta.",
        ],
        explanation:
          "Vulnerability depends on adaptive capacity as well as physical exposure. As a wealthy HIC city-state, Singapore can fund multi-billion-dollar sea walls, barrages and coastal reclamation, whereas rural Bangladesh has far less capital per person and vast low-lying agricultural deltas.",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Mastery, Multi-Step Data & Synoptic Climate Reasoning (15 MCQs)
  // answerIndex spread target: 0:3, 1:4, 2:4, 3:4
  // =========================================================================
  {
    id: "climate-change-science-impacts-m3",
    title: "MCQ Paper 3: Mastery Data & Synoptic Evaluation",
    questions: [
      {
        id: "climate-change-science-impacts-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "physical-impacts",
        question: "Melting floating Arctic sea ice does not directly raise sea levels by displacement. Why do scientists still warn that Arctic sea-ice loss accelerates global sea-level rise?",
        options: [
          "Floating sea ice contains twice as much salt as liquid seawater, making oceans heavier.",
          "Open polar water freezes instantly into thicker glaciers across the Antarctic continent.",
          "Lower albedo warms Arctic air and oceans, speeding up nearby Greenland land-ice melt and thermal expansion.",
          "Disappearing floating sea ice stops Milankovitch orbital cycles from cooling Earth every decade.",
        ],
        answerIndex: 2,
        hints: [
          "Separate *direct* displacement from *indirect* feedback effects.",
          "Once bright Arctic sea ice vanishes, what happens to regional ocean temperatures and nearby Greenland's *land* ice sheet?",
        ],
        explanation:
          "While melting floating sea ice does not directly raise sea level, exposing dark ocean lowers albedo and amplifies Arctic warming — which speeds up the melting of nearby *land* ice on Greenland and increases ocean thermal expansion.",
      },
      {
        id: "climate-change-science-impacts-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "greenhouse-effect-causes",
        question: "Nitrogen (78%) and oxygen (21%) make up 99% of dry air, whereas CO₂ makes up only ~0.042%. Why does such a tiny concentration of CO₂ control Earth's temperature?",
        options: [
          "CO₂ molecules are far heavier and sink into Earth's core to generate geothermal heat.",
          "Nitrogen and oxygen completely block short-wave solar light before it reaches clouds.",
          "CO₂ destroys water vapour in the stratosphere so no rain clouds can ever form.",
          "Unlike symmetric N₂ and O₂, CO₂ molecules vibrate and absorb outgoing long-wave infrared heat.",
        ],
        answerIndex: 3,
        hints: [
          "Think about the 'Why it works' chemistry of two-atom vs three-atom gas molecules.",
          "Which gases are transparent to infrared radiation and which absorb it?",
        ],
        explanation:
          "Symmetric two-atom molecules (N₂ and O₂) do not absorb outgoing infrared radiation, whereas tri-atomic CO₂ (and CH₄, H₂O, N₂O) bend and stretch to absorb and re-emit long-wave infrared heat — letting trace concentrations strongly control planetary temperature.",
      },
      {
        id: "climate-change-science-impacts-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "evidence-climate-change",
        question: "Ice cores show that over the last 800,000 years, natural CO₂ peaked around 280–300 ppm during warm interglacials. A graph shows CO₂ climbing from 280 ppm (1750) to 420 ppm (2024). Why does this rule out Milankovitch cycles as today's main driver?",
        options: [
          "The modern rise is far faster (centuries, not 10,000+ years) and 120+ ppm higher than any natural peak.",
          "Milankovitch cycles only influence Mars and Venus and have zero effect on Earth's ice ages.",
          "Ice cores cannot preserve CO₂ bubbles older than 200 years because oxygen dissolves the ice.",
          "Natural interglacials always caused CO₂ to rise above 600 ppm every single 11-year cycle.",
        ],
        answerIndex: 0,
        hints: [
          "Compare both the *speed* (rate) and the *ceiling* (maximum concentration) of today's CO₂ surge against Milankovitch cycles.",
          "Natural orbital shifts take tens of thousands of years and stayed below ~300 ppm.",
        ],
        explanation:
          "Milankovitch orbital shifts change CO₂ gradually over tens of thousands of years within a 180–300 ppm ceiling. Shooting from 280 to 420+ ppm in ~270 years is far too rapid and far above the natural range to be orbital.",
      },
      {
        id: "climate-change-science-impacts-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "physical-impacts",
        question: "Surface ocean pH has fallen from 8.2 to 8.1 since pre-industrial times. Why does a seemingly tiny 0.1 drop represent roughly a 30% increase in ocean acidity?",
        options: [
          "Because ocean temperature doubles every time pH drops by 0.1 units.",
          "Because the pH scale is logarithmic, so small numerical drops mean large rises in H⁺ ions.",
          "Because pH measures salinity in grams per litre rather than dissolved carbonic acid.",
          "Because seawater changes instantaneously from fresh water to pure sulphuric acid below pH 8.1.",
        ],
        answerIndex: 1,
        hints: [
          "Think about how logarithmic scales work (just like the Richter earthquake scale!).",
          "A 1.0 drop in pH is a 10× jump in hydrogen ion (H⁺) acidity, so 0.1 is roughly 10^0.1 ≈ 1.26 (nearly +30%).",
        ],
        explanation:
          "Because pH is a base-10 logarithmic scale, each 1-unit fall multiplies hydrogen ion concentration by 10, meaning a 0.1 fall represents ~26–30% greater acidity. Seawater remains slightly alkaline (>7), not pure sulphuric acid, yet the rapid shift already stresses calcifying marine life.",
      },
      {
        id: "climate-change-science-impacts-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greenhouse-effect-causes",
        question: "Over a 20-year timescale, 1 tonne of methane (CH₄) traps roughly 80 times more heat than 1 tonne of CO₂, yet CO₂ remains the single largest contributor to total human warming. Why?",
        options: [
          "Methane only absorbs incoming UV rays, whereas CO₂ absorbs visible light from the Sun.",
          "Human activities emit zero methane outside small volcanic islands in the Pacific Ocean.",
          "Humanity emits vastly greater quantities of CO₂ and CO₂ remains in the atmosphere for centuries.",
          "Methane freezes immediately into solid ice crystals as soon as it leaves cattle pastures.",
        ],
        answerIndex: 2,
        hints: [
          "Think about *how much* CO₂ we emit (tens of billions of tonnes per year) and *how long* it stays aloft.",
          "Methane breaks down in ~12 years; CO₂ accumulates for centuries.",
        ],
        explanation:
          "Although methane is far stronger per tonne in the short term, humans release tens of billions of tonnes of CO₂ annually from fossil fuels, and CO₂ persists in the atmosphere for centuries — making CO₂ the largest cumulative warming driver.",
      },
      {
        id: "climate-change-science-impacts-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "evidence-climate-change",
        question: "A tide gauge records global sea level rising at 4.5 mm/year. If that rate remained constant over 80 years, how many centimetres would sea level rise?",
        options: [
          "3.6 cm",
          "18.0 cm",
          "360 cm",
          "36.0 cm",
        ],
        answerIndex: 3,
        hints: [
          "First multiply 4.5 mm/year × 80 years to find the total rise in millimetres.",
          "Remember there are 10 mm in 1 cm — divide your millimetre total by 10!",
        ],
        explanation:
          "4.5 × 80 = 360 mm. Converting millimetres to centimetres (÷ 10) gives 36.0 cm. Answering 360 cm forgets to convert from mm to cm, while 3.6 cm divides by 100 by mistake.",
      },
      {
        id: "climate-change-science-impacts-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "impacts-on-people",
        question: "Country P has 5 million people and emits 60 million tonnes of CO₂/year. Country Q has 150 million people and emits 180 million tonnes of CO₂/year. Which comparison is mathematically accurate?",
        options: [
          "Country Q emits 3× more total CO₂, yet Country P emits 10× more CO₂ per person.",
          "Country Q emits 10× more total CO₂ and also emits 3× more CO₂ per person.",
          "Country P emits 3× more total CO₂ and emits 10× less CO₂ per person.",
          "Both countries emit identical total CO₂ and identical CO₂ per person.",
        ],
        answerIndex: 0,
        hints: [
          "Compare totals first: 180 million ÷ 60 million.",
          "Now compute per-capita emissions for each: P = 60 ÷ 5 = 12 t/person; Q = 180 ÷ 150 = 1.2 t/person.",
        ],
        explanation:
          "Total emissions: 180M ÷ 60M = 3× higher in Country Q. Per-capita emissions: Country P = 60 ÷ 5 = 12 t/person, while Country Q = 180 ÷ 150 = 1.2 t/person, so Country P is 12 ÷ 1.2 = 10× higher per person! This illustrates why geographers examine both total and per-capita data.",
      },
      {
        id: "climate-change-science-impacts-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "physical-impacts",
        question: "How can climate change make extreme downpours wetter in some regions AND severe droughts worse in others?",
        options: [
          "Warming stops all wind circulation so rain falls only over the North and South Poles.",
          "Warmer air pulls moisture faster from dry soils while carrying more water vapour into storms.",
          "Extra CO₂ removes oxygen from clouds over deserts while freezing clouds over coastal cities.",
          "Melting glaciers add freshwater directly into storm clouds above continental desert basins.",
        ],
        answerIndex: 1,
        hints: [
          "Think of warmer air acting like a bigger sponge: it *absorbs* water faster from dry ground, and *squeezes out* heavier rain when lifted in storms.",
          "Recall the ~7% moisture-capacity increase per +1 °C.",
        ],
        explanation:
          "Warmer air has greater evaporative demand (drying out soils and vegetation faster in arid/dry-season zones) while holding ~7% more water vapour per °C, releasing more intense downpours when storm systems form.",
      },
      {
        id: "climate-change-science-impacts-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "physical-impacts",
        question: "A massive megafire burns millions of hectares of boreal forest in Canada. Why can severe wildfires become a positive feedback loop for global climate change?",
        options: [
          "Fire ash permanently raises ocean pH and cools tropical coastlines for a century.",
          "Burned tree trunks instantly turn into buried coal seams that lock carbon underground.",
          "Hotter droughts fuel bigger fires that release huge pulses of CO₂, causing even more warming.",
          "Wildfire smoke increases tropical forest growth worldwide by blocking long-wave heat.",
        ],
        answerIndex: 2,
        hints: [
          "Trace the 4-step feedback loop: warming/drought → wildfire → what gas is released? → what happens to warming?",
          "Also consider what happened to the trees' ability to act as a carbon sink.",
        ],
        explanation:
          "Climate warming dries soils and forests, fuelling larger wildfires that release huge amounts of stored CO₂ while destroying living carbon sinks — accelerating warming and creating drier conditions for future fires.",
      },
      {
        id: "climate-change-science-impacts-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evidence-climate-change",
        question: "Why do climate scientists combine ice cores, tree rings, satellite records and ocean floats rather than relying on a single weather station?",
        options: [
          "Because satellites cannot detect surface temperatures anywhere south of the equator.",
          "Because single weather stations only measure atmospheric methane rather than air temperature.",
          "Because tree rings extend back 800,000 years while ice cores only cover the past decade.",
          "Because independent direct and proxy lines cross-check global patterns across all timescales.",
        ],
        answerIndex: 3,
        hints: [
          "Think about spatial coverage (local vs global) and time span (last ~175 years vs 800,000 years).",
          "Agreement across independent methods builds high scientific confidence.",
        ],
        explanation:
          "Combining direct instrumental/satellite data (global modern coverage) with independent proxies like ice cores (800,000 yrs) and tree rings (thousands of yrs) eliminates local bias and confirms global warming across timescales. Reversing tree rings and ice core spans is incorrect.",
      },
      {
        id: "climate-change-science-impacts-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "impacts-on-people",
        question: "Why do climate-driven droughts in major grain-exporting regions pose a direct economic risk to residents living in Singapore?",
        options: [
          "Singapore imports over 90% of its food, so global harvest failures push up local food prices.",
          "Singapore's economy relies primarily on exporting rain-fed wheat across Southeast Asia.",
          "Droughts in distant continents immediately drain Singapore's coastal desalination plants.",
          "Global grain shortages cause immediate sea-level drops along the Singapore Strait.",
        ],
        answerIndex: 0,
        hints: [
          "Recall Singapore's food-security vulnerability discussed in Section 4.",
          "Globalised trade means physical climate shocks abroad ripple quickly into import-dependent cities.",
        ],
        explanation:
          "Because Singapore imports more than 90% of its food, heatwaves or droughts disrupting harvests in exporting nations tighten supply and drive up food prices in Singapore — showing how climate impacts ripple through global supply chains.",
      },
      {
        id: "climate-change-science-impacts-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "impacts-on-people",
        question: "Why is the phrase 'climate refugee' legally complicated under international law today?",
        options: [
          "No one has ever migrated internally because of drought, flooding or sea-level rise.",
          "The 1951 UN Refugee Convention does not formally grant refugee status for climate displacement.",
          "International treaties require every coastal nation to purchase islands inside Antarctica.",
          "Small island states have already moved their entire populations permanently to Europe.",
        ],
        answerIndex: 1,
        hints: [
          "Think about what the 1951 UN Refugee Convention originally protected (persecution, war, violence).",
          "Many geographers therefore use 'climate migrants' or 'climate-displaced people' alongside discussing legal gaps.",
        ],
        explanation:
          "Millions have already been displaced by storms, droughts and coastal erosion, mostly within their own countries, yet the 1951 UN Refugee Convention defines refugees around persecution rather than environmental loss — leaving a legal protection gap for cross-border climate migrants.",
      },
      {
        id: "climate-change-science-impacts-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "physical-impacts",
        question: "If bright Arctic sea ice reflects 84% of incoming sunlight and dark exposed seawater reflects 12%, how many times more solar energy does dark seawater absorb than sea ice?",
        options: [
          "2.5 times more solar energy",
          "4.0 times more solar energy",
          "5.5 times more solar energy",
          "7.0 times more solar energy",
        ],
        answerIndex: 2,
        hints: [
          "First convert reflection % to ABSORPTION % (100% − reflected %).",
          "Ice absorbs 100 − 84 = 16%; seawater absorbs 100 − 12 = 88%. Now calculate 88 ÷ 16.",
        ],
        explanation:
          "Sea ice absorbs 100% − 84% = 16% of incoming sunlight, while dark seawater absorbs 100% − 12% = 88%. Dividing gives 88 ÷ 16 = 5.5 times more absorbed solar energy! Choosing 7.0 mistakenly divides the reflection figures (84 ÷ 12) instead of absorption.",
      },
      {
        id: "climate-change-science-impacts-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "impacts-on-people",
        question: "How does coral reef destruction in the Maldives create a chain of BOTH physical and economic impacts on local communities?",
        options: [
          "Dead reefs block incoming short-wave sunlight and cool Indian Ocean surface waters.",
          "Dead reefs raise island elevation by 2 metres while creating new inland freshwater lakes.",
          "Dead reefs eliminate monsoon winds while doubling national fisheries catches overnight.",
          "Dead reefs weaken natural wave protection, worsening erosion while hurting fishing and tourism.",
        ],
        answerIndex: 3,
        hints: [
          "Think about two roles healthy coral reefs play for coral atoll nations: physical coastal barrier AND economic livelihood.",
          "Tourism (>25% of GDP) and reef fishing both depend on living coral ecosystems.",
        ],
        explanation:
          "Living coral reefs act as natural submerged breakwaters that absorb storm-wave energy AND sustain reef fisheries and dive tourism (>25% of Maldives GDP). Bleaching and acidification degrade both coastal defence and local incomes simultaneously.",
      },
      {
        id: "climate-change-science-impacts-m3-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greenhouse-effect-causes",
        question: "Which pairing correctly matches a human climate driver, its main greenhouse gas, and its effect on Earth's energy budget?",
        options: [
          "Coal power stations → ozone (O₃) → blocks incoming short-wave solar light",
          "Synthetic nitrogen fertilisers → nitrous oxide (N₂O) → traps outgoing long-wave infrared heat",
          "Solar panel manufacturing → water vapour (H₂O) → reflects stratospheric ultraviolet rays",
          "Urban tree planting → methane (CH₄) → accelerates Milankovitch orbital eccentricity",
        ],
        answerIndex: 1,
        hints: [
          "Check each part of the trio: human activity → correct GHG → traps outgoing long-wave infrared heat.",
          "Recall which powerful greenhouse gas (~273× CO₂) comes from synthetic nitrogen fertilisers.",
        ],
        explanation:
          "Synthetic nitrogen fertilisers emit nitrous oxide (N₂O), a potent greenhouse gas (~273× CO₂) that absorbs and re-emits outgoing long-wave infrared heat. Coal power stations emit CO₂ (not ozone) and greenhouse gases trap outgoing infrared rather than blocking incoming short-wave light.",
      },
    ],
  },
];
