import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Mitigation & Adaptation Core Concepts (15 MCQs)
  // answerIndex spread: 0:4, 1:4, 2:4, 3:3
  // =========================================================================
  {
    id: "solving-climate-crisis-m1",
    title: "MCQ Paper 1: Mitigation vs Adaptation Strategies",
    questions: [
      {
        id: "solving-climate-crisis-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mitigation-strategies",
        question: "Which statement accurately distinguishes climate mitigation from climate adaptation?",
        options: [
          "Mitigation cuts or removes greenhouse gases at the source; adaptation reduces harm from climate impacts.",
          "Mitigation builds taller concrete sea walls along beaches; adaptation installs solar farms across cities.",
          "Mitigation only applies to low-income island nations; adaptation only applies to wealthy industrial states.",
          "Mitigation replaces short-wave sunlight with infrared rays; adaptation stops volcanic ash from cooling Earth.",
        ],
        answerIndex: 0,
        hints: [
          "Remember the bathtub analogy: turning down the tap (root cause) vs mopping/waterproofing the floor (impacts).",
          "Use the mnemonic M = Cause (Make less gas), A = Aftermath (Adjust to survive).",
        ],
        explanation:
          "Mitigation tackles the root cause of climate change by cutting or removing greenhouse gases, whereas adaptation adjusts human systems to live safely with inevitable warming. Putting sea walls under mitigation and solar farms under adaptation reverses the two concepts.",
      },
      {
        id: "solving-climate-crisis-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mitigation-strategies",
        question: "What does it mean for a country like Singapore to reach 'net-zero emissions' by 2050?",
        options: [
          "Stopping all electricity generation completely across homes, schools and factories.",
          "Cutting greenhouse emissions deeply and balancing any tiny remainder with carbon removal.",
          "Exporting all remaining coal power stations to neighbouring countries across the sea.",
          "Doubling national greenhouse gas output while raising coastal dikes by two metres.",
        ],
        answerIndex: 1,
        hints: [
          "Focus on the word 'net' — think of emissions going in minus carbon removed going out.",
          "Net zero does not mean shutting down modern life; it means Emissions − Removals = 0.",
        ],
        explanation:
          "Net zero means slashing human greenhouse gas emissions as close to zero as possible and balancing any small unavoidable remainder (such as aviation or cement) with equivalent carbon removals (sinks or CCS). Stopping all electricity is unrealistic and misses the meaning of 'net'.",
      },
      {
        id: "solving-climate-crisis-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mitigation-strategies",
        question: "Solar and wind are now the cheapest new electricity sources worldwide. What is their main technical limitation that requires battery storage and smart grids?",
        options: [
          "They emit more CO₂ per megawatt-hour during operation than coal power plants.",
          "They permanently deplete atmospheric oxygen levels around coastal turbines.",
          "Their power output is intermittent because sunshine and wind speeds fluctuate daily.",
          "They can only generate electricity near active volcanic subduction trenches.",
        ],
        answerIndex: 2,
        hints: [
          "What happens to a solar farm at midnight or a wind farm on a calm afternoon?",
          "Look for the key geographical term describing variable power supply.",
        ],
        explanation:
          "Solar and wind generate zero operational CO₂, but their output is intermittent as sunlight and wind fluctuate — requiring grid-scale batteries, pumped hydro or interconnected grids to ensure steady 24/7 electricity.",
      },
      {
        id: "solving-climate-crisis-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mitigation-strategies",
        question: "Which pairing correctly identifies ONE strength and ONE limitation of nuclear fission power as a climate mitigation option?",
        options: [
          "Strength: zero construction cost; Limitation: releases vast amounts of methane gas.",
          "Strength: works only during sunny afternoons; Limitation: floods fertile river valleys.",
          "Strength: removes CO₂ directly from soil; Limitation: relies on tropical wind speeds.",
          "Strength: reliable baseload power with near-zero operational CO₂; Limitation: costly with radioactive waste.",
        ],
        answerIndex: 3,
        hints: [
          "Nuclear reactors run steadily day and night without burning fossil fuels.",
          "Think about upfront construction bills, build times and long-term waste storage.",
        ],
        explanation:
          "Nuclear fission provides steady, high-output baseload electricity with near-zero operational CO₂, but suffers from very high upfront costs, long build times and radioactive waste management. Flooding river valleys is a limitation of large hydroelectric dams, not nuclear plants.",
      },
      {
        id: "solving-climate-crisis-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mitigation-strategies",
        question: "How does Carbon Capture and Storage (CCS) aim to reduce industrial CO₂ emissions?",
        options: [
          "By trapping CO₂ from smokestacks, compressing it and injecting it deep underground into rock reservoirs.",
          "By filtering methane out of coastal seawater and releasing it rapidly into the upper stratosphere.",
          "By painting factory roofs bright white so incoming long-wave radiation bounces back to the Sun.",
          "By turning captured concrete rubble into elevated coastal embankments around river deltas.",
        ],
        answerIndex: 0,
        hints: [
          "Break down the three words: Carbon Capture (at the source) and Storage (deep geological rock).",
          "Used especially for hard-to-abate industries like cement and steel.",
        ],
        explanation:
          "CCS captures CO₂ from industrial smokestacks (such as cement or steel plants), compresses it and pumps it deep underground into depleted oil/gas fields or saline aquifers. Painting roofs white is urban cooling adaptation, not CCS.",
      },
      {
        id: "solving-climate-crisis-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mitigation-strategies",
        question: "Why can shifting toward plant-rich diets and cutting food waste deliver rapid near-term climate benefits?",
        options: [
          "Because rotting vegetables in landfills emit CFCs that thin polar ozone layers.",
          "Because beef farming and landfill food waste are major sources of potent short-lived methane.",
          "Because plant crops completely stop oceans from absorbing excess atmospheric CO₂.",
          "Because food waste is the primary energy source powering global coal electricity stations.",
        ],
        answerIndex: 1,
        hints: [
          "Think about which greenhouse gas cattle digestion and rotting landfill waste emit.",
          "Methane stays aloft ~12 years but traps ~80× more heat than CO₂ over 20 years.",
        ],
        explanation:
          "Cattle farming (enteric fermentation) and rotting food waste in landfills emit large volumes of methane (CH₄). Because methane is intense yet short-lived (~12 years), cutting it slows near-term warming rapidly.",
      },
      {
        id: "solving-climate-crisis-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "adaptation-strategies",
        question: "Why must nations invest in adaptation even if global CO₂ emissions dropped to zero overnight?",
        options: [
          "Because eliminating CO₂ would immediately plunge Earth into a permanent global ice age.",
          "Because solar panels cannot operate unless every coastline is lined with concrete sea walls.",
          "Because CO₂ already aloft and deep-ocean heat lock in decades of continuing sea-level rise.",
          "Because volcanic eruptions would double in frequency once coal power stations shut down.",
        ],
        answerIndex: 2,
        hints: [
          "Remember how long CO₂ stays in the atmosphere and how slowly deep oceans finish expanding.",
          "Significant warming and sea-level rise are already 'locked in'.",
        ],
        explanation:
          "CO₂ already emitted persists for centuries and oceans continue expanding thermally for decades, locking in unavoidable sea-level rise and weather extremes — making adaptation essential alongside mitigation.",
      },
      {
        id: "solving-climate-crisis-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "adaptation-strategies",
        question: "Which coastal protection project is an example of SOFT (nature-based) engineering rather than HARD engineering?",
        options: [
          "Constructing a 5-metre reinforced concrete sea wall along an urban port",
          "Building mechanical steel tidal storm-surge gates across a river mouth",
          "Reclaiming a low-lying polder enclosed by stone dikes and electric pumps",
          "Restoring coastal mangrove forests whose roots absorb 50–70% of wave energy",
        ],
        answerIndex: 3,
        hints: [
          "Hard engineering uses concrete, rock and steel structures; soft engineering works with natural ecosystems.",
          "Look for living coastal vegetation that traps sediment and buffers storm waves.",
        ],
        explanation:
          "Mangrove restoration is nature-based soft engineering: intertwined mangrove roots dissipate 50–70% of incoming wave energy, trap sediment and store blue carbon. Concrete walls, steel tidal gates and pumped polders are all hard engineering.",
      },
      {
        id: "solving-climate-crisis-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "adaptation-strategies",
        question: "What is a 'polder', such as the coastal defence engineering used in the Netherlands and Singapore's Pulau Tekong?",
        options: [
          "Low-lying reclaimed land ringed by raised dikes and kept dry using drainage pumps.",
          "A floating offshore wind farm anchored kilometres away from rocky headlands.",
          "A natural desert oasis irrigated exclusively by deep glacial meltwater aquifers.",
          "An underground rock chamber designed to inject liquid CO₂ from cement factories.",
        ],
        answerIndex: 0,
        hints: [
          "Think of classic Dutch coastal engineering protecting land below sea level.",
          "It combines a protective outer embankment (dike) with internal pumps and drains.",
        ],
        explanation:
          "A polder is reclaimed low-lying land enclosed by raised dikes and drained mechanically by pumps, saving vast volumes of fill sand compared with traditional reclamation while protecting against sea-level rise.",
      },
      {
        id: "solving-climate-crisis-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "adaptation-strategies",
        question: "How does a 'sponge city' approach — such as Singapore's naturalised Bishan–Ang Mo Kio Park — adapt cities to intense tropical downpours?",
        options: [
          "By paving every park with impermeable concrete to speed storm runoff into basements.",
          "By using permeable surfaces, rain gardens and retention parks to soak up excess rainwater.",
          "By firing silver iodide rockets to stop all tropical rain clouds from reaching urban areas.",
          "By pumping salty ocean water through underground city drains during dry heatwaves.",
        ],
        answerIndex: 1,
        hints: [
          "Ask what a kitchen sponge does when water spills onto a table.",
          "Naturalised rivers, bioswales and permeable paving slow and absorb stormwater rather than overwhelming concrete canals.",
        ],
        explanation:
          "Sponge cities replace rigid impermeable surfaces with permeable paving, bioswales, rain gardens and flood-retention parks that absorb and temporarily store heavy downpours, reducing flash floods while cooling neighbourhoods.",
      },
      {
        id: "solving-climate-crisis-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "adaptation-strategies",
        question: "Why does upgrading from open-channel flood irrigation to drip irrigation help semi-arid Sahel farmers adapt to hotter droughts?",
        options: [
          "Drip irrigation increases surface evaporation so humid rain clouds form instantly overhead.",
          "Drip irrigation replaces freshwater completely with untreated coastal saltwater.",
          "Drip irrigation delivers water directly to plant roots, cutting evaporation waste by 50–70%.",
          "Drip irrigation eliminates atmospheric methane emitted by nearby urban coal power stations.",
        ],
        answerIndex: 2,
        hints: [
          "In scorching heat, what happens to water lying open across wide flooded soil channels?",
          "Delivering droplets right to the root zone prevents huge evaporation losses.",
        ],
        explanation:
          "Drip irrigation pipes water slowly straight to crop roots, slashing evaporation waste by 50–70% compared with open flood irrigation and helping drought-prone farms maintain harvests with scarce water.",
      },
      {
        id: "solving-climate-crisis-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "adaptation-strategies",
        question: "Bangladesh cut cyclone death tolls from over 300,000 in 1970 to under 100 in similarly fierce modern storms. Which adaptation combination drove this dramatic success?",
        options: [
          "Relocating the entire nation permanently onto raised concrete platforms in the Himalayas.",
          "Installing giant offshore wind turbines that physically reverse cyclone wind directions.",
          "Banning all rice farming across the Ganges delta during every tropical monsoon season.",
          "Building thousands of elevated cyclone shelters backed by satellite and SMS early warnings.",
        ],
        answerIndex: 3,
        hints: [
          "Think of low-cost, high-impact preparedness that gives coastal villagers hours to reach safety.",
          "Remember Bangladesh's 76,000 community volunteers plus elevated concrete shelters.",
        ],
        explanation:
          "Combining satellite cyclone tracking, rapid community SMS/megaphone alerts and thousands of elevated concrete shelters allowed millions of coastal villagers to evacuate safely before storm surges hit — proving low-cost adaptation saves immense numbers of lives.",
      },
      {
        id: "solving-climate-crisis-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "international-agreements",
        question: "What is the headline temperature goal agreed by ~195 nations under the 2015 Paris Agreement?",
        options: [
          "Hold global warming well below 2 °C above pre-industrial levels, pursuing 1.5 °C.",
          "Return global average temperatures to −18 °C by eliminating the natural greenhouse effect.",
          "Allow warming up to +4.5 °C before requiring any nation to submit climate pledges.",
          "Freeze Arctic winter temperatures at 0 °C while ignoring equatorial ocean warming.",
        ],
        answerIndex: 0,
        hints: [
          "Recall the slogan championed by Small Island Developing States: '1.5 to Stay Alive'.",
          "There is an upper limit ('well below __ °C') and an aspirational target ('pursuing __ °C').",
        ],
        explanation:
          "The 2015 Paris Agreement commits parties to hold global average temperature rise well below 2 °C above pre-industrial levels while pursuing efforts to limit warming to 1.5 °C. Eliminating the natural greenhouse effect would freeze Earth to −18 °C.",
      },
      {
        id: "solving-climate-crisis-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "singapore-green-plan-action",
        question: "How many additional trees does Singapore's 'City in Nature' pillar aim to plant between 2020 and 2030?",
        options: [
          "100,000 more trees",
          "1 million more trees",
          "10 million more trees",
          "100 million more trees",
        ],
        answerIndex: 1,
        hints: [
          "Think of NParks' famous movement name under the Singapore Green Plan 2030.",
          "One ____ Trees!",
        ],
        explanation:
          "Under the City in Nature pillar of the Singapore Green Plan 2030, the OneMillionTrees movement targets planting 1 million more trees across Singapore by 2030 to sequester carbon and cool streets.",
      },
      {
        id: "solving-climate-crisis-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-green-plan-action",
        question: "Why is painting city rooftops bright white ('cool roofs') an effective urban heat adaptation strategy?",
        options: [
          "White paint absorbs more outgoing infrared heat and converts it into clean electricity.",
          "White paint lowers roof albedo so buildings trap extra winter warmth overnight.",
          "White paint raises surface albedo, reflecting incoming sunlight to cool urban buildings.",
          "White paint captures atmospheric CO₂ chemically to replace urban tree planting.",
        ],
        answerIndex: 2,
        hints: [
          "Connect back to surface albedo from Climate Science!",
          "Bright reflective surfaces reflect short-wave sunlight instead of heating dark tarmac and concrete.",
        ],
        explanation:
          "Cool white roofs raise urban surface albedo, reflecting far more incoming short-wave solar radiation away from buildings and lowering indoor cooling demand and the Urban Heat Island effect. Lowering albedo would absorb *more* heat.",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: Paris Agreement, COP & Singapore Green Plan 2030 (15 MCQs)
  // answerIndex spread: 0:4, 1:4, 2:3, 3:4
  // =========================================================================
  {
    id: "solving-climate-crisis-m2",
    title: "MCQ Paper 2: Paris Diplomacy & Singapore Green Plan 2030",
    questions: [
      {
        id: "solving-climate-crisis-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "international-agreements",
        question: "What are 'Nationally Determined Contributions' (NDCs) under the Paris Agreement?",
        options: [
          "Mandatory legal fines collected by the United Nations from nations that build wind farms.",
          "Fixed global carbon taxes set identically by Paris diplomats for every factory worldwide.",
          "Emergency coastal embankments funded exclusively by Small Island Developing States.",
          "Voluntary national climate pledges submitted and strengthened by each country every 5 years.",
        ],
        answerIndex: 3,
        hints: [
          "Notice the words 'Nationally Determined' — who sets each country's pledge?",
          "Recall how often countries review and tighten these pledges under the 'ratchet mechanism'.",
        ],
        explanation:
          "NDCs are bottom-up voluntary emissions-reduction pledges designed by each country and updated every 5 years to grow more ambitious over time. Paris does not levy legally binding UN fines.",
      },
      {
        id: "solving-climate-crisis-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "international-agreements",
        question: "What is the 'Ambition Gap' highlighted by climate scientists reviewing Paris Agreement pledges?",
        options: [
          "Current national NDC pledges still leave Earth heading for ~2.5–2.7 °C rather than 1.5 °C.",
          "Countries have already pledged so many cuts that Earth will cool below pre-industrial levels.",
          "Small island nations have refused to sign the Paris Agreement because it is too strict.",
          "Scientists lack satellites capable of measuring atmospheric CO₂ concentrations accurately.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the Paris target of 1.5 °C or well below 2 °C with where existing country pledges actually take us.",
          "A 'gap' means current pledges fall short of the agreed temperature goal.",
        ],
        explanation:
          "Even if all existing national pledges are fulfilled, combined emissions trajectories still put Earth on course for roughly 2.5–2.7 °C warming by 2100 — leaving a major ambition gap above the 1.5 °C target.",
      },
      {
        id: "solving-climate-crisis-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "international-agreements",
        question: "How does the 'free-rider problem' make international climate treaties difficult to enforce?",
        options: [
          "Public buses in European cities offer free fares during annual UN COP summits.",
          "Nations may skip costly domestic cuts while still enjoying climate gains paid for by others.",
          "Solar panel ships transport electricity across oceans without paying maritime port fees.",
          "Volcanic eruptions cross borders without signing diplomatic emissions agreements.",
        ],
        answerIndex: 1,
        hints: [
          "Remember the 195 factories sharing one lake: what happens if one big factory refuses to buy filters?",
          "Atmosphere benefits are shared globally, while transition costs are paid locally.",
        ],
        explanation:
          "Because CO₂ mixes globally, any nation tempted to 'free-ride' avoids expensive domestic decarbonisation while benefiting from other countries' cuts — undermining trust and collective ambition.",
      },
      {
        id: "solving-climate-crisis-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "international-agreements",
        question: "Why is 'climate finance' (such as $100B+/year and the Loss and Damage Fund from HICs to LICs/SIDS) central to COP negotiations?",
        options: [
          "To help wealthy HICs purchase extra coal power stations from developing tropical nations.",
          "To pay polar explorers to build concrete walls around melting Antarctic ice shelves.",
          "To address climate injustice by funding clean energy, adaptation and disaster recovery in LICs.",
          "To replace all voluntary NDC pledges with automatic military sanctions against island states.",
        ],
        answerIndex: 2,
        hints: [
          "Link climate finance back to climate injustice: who emitted most historically vs who faces the steepest adaptation bill?",
          "Finance helps LICs leapfrog to renewables and recover from unavoidable loss and damage.",
        ],
        explanation:
          "HICs built industrial wealth through historical emissions; climate finance and the Loss and Damage Fund channel resources to LICs and SIDS so they can adopt clean energy, build coastal/drought resilience and recover from climate disasters.",
      },
      {
        id: "solving-climate-crisis-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "international-agreements",
        question: "Why do rapidly industrialising NEEs (such as India or Indonesia) often clash with HICs at COP summits over rapid coal phase-out timelines?",
        options: [
          "NEEs have no access to sunshine or wind resources anywhere inside their borders.",
          "HICs refuse to use any renewable electricity until every NEE shuts down all factories.",
          "NEEs believe rising sea levels and heatwaves will never affect tropical Asian coastlines.",
          "NEEs need affordable energy to lift millions from poverty, while HICs already grew using fossil fuels.",
        ],
        answerIndex: 3,
        hints: [
          "Think of the tension called 'development vs decarbonisation'.",
          "Compare per-capita emissions and historical cumulative CO₂ between HICs and NEEs.",
        ],
        explanation:
          "NEEs point out that HICs industrialised using two centuries of fossil fuels and retain higher per-capita emissions, so NEEs demand fair transition timelines and climate finance while expanding electricity access to lift millions out of poverty.",
      },
      {
        id: "solving-climate-crisis-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-green-plan-action",
        question: "Why is Singapore classified as 'alternative-energy disadvantaged' compared with countries like Norway or Iceland?",
        options: [
          "Its tiny land area, low wind speeds and lack of large rivers or geothermal vents limit local renewables.",
          "Its equatorial location receives almost zero direct tropical sunshine throughout the year.",
          "Its citizens refuse to install rooftop solar panels on any public HDB housing blocks.",
          "Its surrounding seas are completely frozen during winter, blocking clean electricity cables.",
        ],
        answerIndex: 0,
        hints: [
          "Look at Singapore's physical geography (~735 km², flat tropical island, light winds, no big rivers or volcanoes).",
          "Notice that solar IS viable on roofs/reservoirs, whereas hydro, wind and geothermal are severely constrained.",
        ],
        explanation:
          "Singapore lacks space for vast wind/solar farms, has low average wind speeds, and has no large rivers for hydroelectricity or geothermal vents — forcing creative solutions like rooftop/floating solar and regional ASEAN clean electricity imports.",
      },
      {
        id: "solving-climate-crisis-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-green-plan-action",
        question: "How does Singapore's Energy Reset pillar overcome scarce land to reach its ≥2 GWp solar target by 2030?",
        options: [
          "By clearing Bukit Timah Nature Reserve completely to construct desert solar fields.",
          "By deploying panels across HDB rooftops, building facades and floating reservoirs like Tengeh.",
          "By replacing every MRT train track with mobile solar mirrors during morning rush hour.",
          "By importing frozen solar panels from Antarctica during southern summer months.",
        ],
        answerIndex: 1,
        hints: [
          "Think of unused spaces in a dense high-rise island city with large inland water reservoirs.",
          "Remember the 60 MWp floating solar farm spanning 45 football fields on Tengeh Reservoir!",
        ],
        explanation:
          "Singapore maximises dual-use urban surfaces — HDB rooftops, industrial roofs, vertical facades and floating solar farms like Tengeh Reservoir — to reach ≥2 GWp without sacrificing precious nature reserves.",
      },
      {
        id: "solving-climate-crisis-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-green-plan-action",
        question: "What is the Singapore Green Plan 2030 target for newly registered cars and taxis starting from 2030?",
        options: [
          "All new cars must run exclusively on imported diesel fuel from neighbouring states.",
          "Private car ownership will be doubled while public MRT lines are closed permanently.",
          "All new car and taxi registrations must be cleaner-energy models, backed by 60,000 EV chargers.",
          "Only solar-powered flying taxis will be permitted to operate along East Coast highways.",
        ],
        answerIndex: 2,
        hints: [
          "Think about electrifying road transport under Singapore's Energy Reset pillar.",
          "Look for the exact transition to cleaner-energy vehicles (EVs/hybrids) and 60,000 charging points.",
        ],
        explanation:
          "From 2030, 100% of new car and taxi registrations in Singapore must be cleaner-energy models (EVs/hybrids), supported by 60,000 EV charging points nationwide and a full internal-combustion phase-out by 2040.",
      },
      {
        id: "solving-climate-crisis-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-green-plan-action",
        question: "Why does Singapore's proposed East Coast 'Long Island' project stand out as a smart multi-purpose adaptation design?",
        options: [
          "It replaces East Coast beaches with offshore oil rigs that fund national coal plants.",
          "It lowers sea temperatures across the entire Pacific Ocean by blocking equatorial currents.",
          "It captures 100% of Singapore's industrial CO₂ emissions inside hollow concrete breakwaters.",
          "It reclaims ~800 ha of raised land to block storm surges while creating a freshwater reservoir and parks.",
        ],
        answerIndex: 3,
        hints: [
          "Compare a plain 3-metre sea wall blocking ocean views against reclaiming raised offshore land.",
          "What sits *between* the new raised offshore island and existing East Coast Park?",
        ],
        explanation:
          "Long Island reclaims ~800 hectares of elevated land off East Coast Park to defend low-lying coastal neighbourhoods from sea-level rise while enclosing a brand-new coastal freshwater reservoir and 20 km of waterfront parks.",
      },
      {
        id: "solving-climate-crisis-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-green-plan-action",
        question: "How does Singapore's progressively rising carbon tax (S$25/t in 2024 → S$45/t in 2026–27 → S$50–80/t by 2030) encourage mitigation?",
        options: [
          "By making fossil-fuel emissions steadily costlier so industries invest earlier in clean efficiency.",
          "By paying coastal homeowners directly to build taller concrete walls around beachfront villas.",
          "By banning all international trade and food imports arriving through Jurong and Tuas ports.",
          "By removing all financial incentives for companies to install solar panels or upgrade chillers.",
        ],
        answerIndex: 0,
        hints: [
          "Think about how a predictable rising price per tonne of CO₂ shifts company budgets.",
          "Cutting emissions saves the company real money every year.",
        ],
        explanation:
          "A predictable rising carbon price sends a clear financial signal to power plants, refineries and factories: investing now in solar, energy efficiency and low-carbon tech saves millions in future carbon tax bills.",
      },
      {
        id: "solving-climate-crisis-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-green-plan-action",
        question: "Which pairing correctly classifies TWO Singapore Green Plan 2030 actions as BOTH mitigation and adaptation ('win–win' policies)?",
        options: [
          "Building Marina Barrage tidal gates and raising Pulau Tekong polder dikes",
          "Planting 1 million more urban trees and restoring Sungei Buloh coastal mangroves",
          "Raising Singapore's carbon tax to S$50/t and installing 60,000 EV charging points",
          "Expanding underground MRT tunnels to 360 km and cutting Semakau landfill waste",
        ],
        answerIndex: 1,
        hints: [
          "Which natural actions BOTH absorb CO₂ (mitigation) AND cool streets / block storm waves (adaptation)?",
          "Check every pair carefully — some options are pure adaptation or pure mitigation.",
        ],
        explanation:
          "Planting 1 million trees absorbs CO₂ (mitigation) while shading streets against urban heat (adaptation), and restoring coastal mangroves sequesters blue carbon (mitigation) while absorbing storm-wave energy (adaptation). Marina Barrage/polders are pure adaptation; EVs/carbon tax are pure mitigation.",
      },
      {
        id: "solving-climate-crisis-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "international-agreements",
        question: "A nation emitted 400 Mt of CO₂ in 2015 and pledges a 35% cut in its 2030 Paris NDC. What is its 2030 target cap in Mt?",
        options: [
          "140 Mt of CO₂",
          "240 Mt of CO₂",
          "260 Mt of CO₂",
          "365 Mt of CO₂",
        ],
        answerIndex: 2,
        hints: [
          "Be careful: 35% of 400 is the amount CUT, not the remaining target cap!",
          "Compute 400 − (0.35 × 400), or directly 0.65 × 400.",
        ],
        explanation:
          "A 35% reduction cuts 0.35 × 400 = 140 Mt, leaving a 2030 target cap of 400 − 140 = 260 Mt. Choosing 140 Mt gives the amount *cut* instead of the remaining cap, while 365 Mt mistakenly subtracts 35 directly instead of 35%.",
      },
      {
        id: "solving-climate-crisis-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mitigation-strategies",
        question: "Why is afforestation alone unable to replace phasing out coal, oil and natural gas?",
        options: [
          "Living forests emit far more methane each year than global cattle and rice farms.",
          "Photosynthesis only absorbs nitrogen gas and plays zero role in capturing atmospheric CO₂.",
          "Trees grow instantaneously in one week, causing severe global cooling below −18 °C.",
          "There is insufficient land to offset ~37 billion tonnes of annual CO₂, and wildfires can release it.",
        ],
        answerIndex: 3,
        hints: [
          "Think about scale (~37 Gt CO₂/year), land competition with food farming, growth time and permanence.",
          "What happens to stored forest carbon if a climate-fuelled wildfire burns the trees?",
        ],
        explanation:
          "Afforestation is a valuable complementary carbon sink, but planting enough forest to offset ~37 billion tonnes of annual fossil-fuel CO₂ would displace vast farmland, takes decades to mature, and risks re-releasing carbon in wildfires.",
      },
      {
        id: "solving-climate-crisis-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-green-plan-action",
        question: "Why is systemic government and corporate action considered essential alongside individual green habits?",
        options: [
          "Individuals alone cannot decarbonise national power grids, build 360 km MRT lines or tax heavy industry.",
          "Individual actions like taking public transit or cutting food waste have zero measurable effect anywhere.",
          "Only multinational fossil-fuel companies are legally permitted to plant street trees or recycle plastics.",
          "Governments can solve climate change purely through voluntary citizen recycling without clean energy.",
        ],
        answerIndex: 0,
        hints: [
          "Ask what an individual student CAN control versus what requires national infrastructure and law.",
          "Balance both roles: systemic policy delivers scale and makes individual green choices easy and affordable.",
        ],
        explanation:
          "Individual habits lower personal footprints and drive public demand, yet individuals cannot convert power grids to solar, build MRT networks, set carbon taxes or engineer Long Island — requiring systemic government and corporate leadership.",
      },
      {
        id: "solving-climate-crisis-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "adaptation-strategies",
        question: "A semi-arid farm uses 20,000 litres/day with open flood irrigation and switches to drip irrigation, cutting water demand by 55%. How many litres/day does it NOW use?",
        options: [
          "11,000 litres/day",
          "9,000 litres/day",
          "5,500 litres/day",
          "14,500 litres/day",
        ],
        answerIndex: 1,
        hints: [
          "Read carefully: does the question ask for water SAVED or water NOW USED?",
          "Cutting by 55% leaves 45% still used: compute 0.45 × 20,000.",
        ],
        explanation:
          "Cutting water use by 55% saves 0.55 × 20,000 = 11,000 L/day, leaving 20,000 − 11,000 = 9,000 L/day used. Answering 11,000 L/day gives the water *saved* rather than the new usage.",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Mastery Evaluation, Trade-offs & Data Calculations (15 MCQs)
  // answerIndex spread: 0:3, 1:4, 2:4, 3:4
  // =========================================================================
  {
    id: "solving-climate-crisis-m3",
    title: "MCQ Paper 3: Mastery Evaluation & Climate Policy Data",
    questions: [
      {
        id: "solving-climate-crisis-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mitigation-strategies",
        question: "A country shifts 100,000 MWh of annual electricity from coal (0.92 t CO₂/MWh) to solar PV (0.04 t CO₂/MWh). How many tonnes of CO₂ are saved per year?",
        options: [
          "4,000 tonnes saved",
          "92,000 tonnes saved",
          "88,000 tonnes saved",
          "96,000 tonnes saved",
        ],
        answerIndex: 2,
        hints: [
          "First find the net CO₂ saving per MWh: 0.92 − 0.04.",
          "Multiply 0.88 tonnes/MWh by 100,000 MWh.",
        ],
        explanation:
          "Switching saves 0.92 − 0.04 = 0.88 t CO₂ per MWh. Over 100,000 MWh, total annual savings = 100,000 × 0.88 = 88,000 tonnes. Answering 92,000 ignores solar's small 0.04 lifecycle manufacturing footprint, while 96,000 mistakenly adds instead of subtracting.",
      },
      {
        id: "solving-climate-crisis-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mitigation-strategies",
        question: "Why can critics warn that relying heavily on Carbon Capture and Storage (CCS) creates a 'moral hazard'?",
        options: [
          "Because CCS pumps pure oxygen underground, instantly triggering destructive earthquakes everywhere.",
          "Because CCS produces electricity cheaper than sunlight, forcing wind farms to close globally.",
          "Because CCS removes too much CO₂ from air, plunging Earth into a rapid polar ice age.",
          "Because promising future CCS may be used as an excuse to delay retiring fossil fuels today.",
        ],
        answerIndex: 3,
        hints: [
          "Think about how fossil-fuel companies might argue for keeping coal/gas plants open if CCS is promised.",
          "CCS is vital for hard-to-abate cement/steel, yet remains costly and tiny compared to total global CO₂.",
        ],
        explanation:
          "While CCS has a legitimate role in hard-to-abate industries like cement and steel, over-promising expensive future CCS risks creating a 'moral hazard' — delaying immediate, cheaper transitions to solar, wind and efficiency today.",
      },
      {
        id: "solving-climate-crisis-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "adaptation-strategies",
        question: "A resort builds a steep vertical concrete sea wall to protect its beachfront. What unintended coastal side effect often occurs along unprotected beaches immediately downdrift?",
        options: [
          "Reflected wave energy and blocked sand transport accelerate erosion on neighbouring unprotected coasts.",
          "Healthy mangrove forests sprout spontaneously across deep offshore shipping channels within days.",
          "Sea levels drop by two metres along the adjacent shoreline due to thermal ocean contraction.",
          "Coral bleaching reverses immediately because concrete walls lower tropical water temperatures.",
        ],
        answerIndex: 0,
        hints: [
          "Think of a limitation of hard coastal engineering from Section 2.",
          "Waves bouncing off rigid concrete scour beach sand and starve downdrift coasts of sediment.",
        ],
        explanation:
          "Rigid concrete sea walls reflect wave energy downward and interrupt natural sediment drift, often accelerating scouring and erosion along unprotected neighbouring shorelines — one key reason engineers increasingly pair walls with soft nature-based buffers.",
      },
      {
        id: "solving-climate-crisis-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "adaptation-strategies",
        question: "Why do coastal planners increasingly prefer 'hybrid' defences (planting mangroves in front of a raised dike) over building an extra-tall bare concrete sea wall?",
        options: [
          "Mangroves completely stop global warming so sea levels never rise another millimetre.",
          "Mangroves cut incoming wave energy 50–70%, allowing shorter, cheaper walls plus blue-carbon storage.",
          "Mangroves grow fully mature in 48 hours and require zero coastal space in busy ports.",
          "Bare concrete walls cannot block tides unless mangrove trees are planted directly on top of concrete.",
        ],
        answerIndex: 1,
        hints: [
          "Compare the wave-dissipating power of mangroves with the construction/maintenance bill of ultra-tall concrete walls.",
          "Also recall the extra ecological and carbon-sink co-benefits.",
        ],
        explanation:
          "Living mangroves dissipate 50–70% of wave energy before waves hit the dike behind them, lowering construction/maintenance costs while supporting fisheries and storing blue carbon — uniting soft and hard engineering strengths.",
      },
      {
        id: "solving-climate-crisis-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "international-agreements",
        question: "Why did the 2015 Paris Agreement win participation from ~195 nations after the 1997 Kyoto Protocol struggled to secure universal backing?",
        options: [
          "Paris exempted all high-income countries from submitting any national emissions plans.",
          "Paris deployed international UN police forces to shut down non-compliant coal mines.",
          "Paris let every nation set voluntary bottom-up NDCs with 5-year reviews rather than top-down caps.",
          "Paris abolished all national carbon taxes in exchange for planting coastal sea walls.",
        ],
        answerIndex: 2,
        hints: [
          "Compare Kyoto's rigid top-down HIC-only caps with Paris's bottom-up voluntary NDC structure.",
          "This design brought HICs, NEEs and LICs into one shared framework.",
        ],
        explanation:
          "Unlike Kyoto's top-down caps restricted to developed nations (which major emitters exited or avoided), Paris invited all ~195 nations to submit self-determined voluntary NDCs backed by transparent 5-year stocktakes.",
      },
      {
        id: "solving-climate-crisis-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "singapore-green-plan-action",
        question: "An industrial facility in Singapore emits 60,000 tonnes of CO₂ per year. How much MORE annual carbon tax (in S$) will it pay when the tax rises from S$25/tonne to S$45/tonne?",
        options: [
          "S$1,500,000 extra per year",
          "S$2,700,000 extra per year",
          "S$600,000 extra per year",
          "S$1,200,000 extra per year",
        ],
        answerIndex: 3,
        hints: [
          "First find the tax INCREASE per tonne: S$45 − S$25 = S$20/tonne.",
          "Multiply S$20/tonne by 60,000 tonnes.",
        ],
        explanation:
          "The tax rises by S$45 − S$25 = S$20 per tonne, so 60,000 × S$20 = S$1,200,000 extra per year. S$1.5M is the old tax bill at S$25/t and S$2.7M is the total new bill at S$45/t rather than the increase.",
      },
      {
        id: "solving-climate-crisis-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "singapore-green-plan-action",
        question: "Singapore's solar capacity grew from 0.4 GWp in 2020 toward a target of 2.0 GWp by 2030. What percentage increase does this represent?",
        options: [
          "400% increase",
          "500% increase",
          "160% increase",
          "80% increase",
        ],
        answerIndex: 0,
        hints: [
          "Find the rise: 2.0 − 0.4 = 1.6 GWp.",
          "Divide 1.6 by the original 0.4 GWp, then multiply by 100. (Careful: growing 5× is NOT a 500% increase!)",
        ],
        explanation:
          "Increase = 2.0 − 0.4 = 1.6 GWp. Percentage increase = (1.6 ÷ 0.4) × 100 = 400%. Choosing 500% confuses a 5-fold final total (500% OF original) with the percentage *increase* (+400%).",
      },
      {
        id: "solving-climate-crisis-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "singapore-green-plan-action",
        question: "Today, over 90% of Singapore's electricity comes from natural gas. Why does transitioning from petrol cars to EVs STILL cut CO₂ emissions now AND cut even more over time?",
        options: [
          "EV batteries generate free nuclear electricity inside each car without plugging into the grid.",
          "Electric motors are far more energy-efficient than petrol engines, and EVs get cleaner as solar/imports grow.",
          "Petrol engines emit pure water vapour whereas EV tyres absorb CO₂ directly from asphalt roads.",
          "Natural gas power plants release zero CO₂ when burning methane for urban street lighting.",
        ],
        answerIndex: 1,
        hints: [
          "Compare the efficiency of an electric motor (~85–90%) against a petrol engine (~25–30%), plus think about future grid decarbonisation.",
          "As Singapore adds ≥2 GWp solar and ASEAN clean imports, every EV already on the road gets cleaner automatically!",
        ],
        explanation:
          "Electric motors convert ~85–90% of battery energy into motion (versus ~25–30% for petrol engines), cutting emissions even on a gas grid — and unlike petrol cars locked into fossil fuel forever, EVs grow progressively cleaner as solar and ASEAN clean imports expand.",
      },
      {
        id: "solving-climate-crisis-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "international-agreements",
        question: "Why does the 'Just Transition' matter when coal-dependent regions close mines and coal power stations to meet Paris targets?",
        options: [
          "It requires coal workers to pay higher personal taxes than renewable energy executives.",
          "It prevents solar and wind farms from ever hiring former industrial technicians.",
          "It retrains fossil-fuel workers and invests in local clean-energy jobs to keep climate policy fair and supported.",
          "It allows every coal-exporting nation to opt out of Paris climate reporting permanently.",
        ],
        answerIndex: 2,
        hints: [
          "Think about what happens politically and socially if a coal town loses its main employer with no support.",
          "'Just' means fair — protecting livelihoods during the shift to green energy.",
        ],
        explanation:
          "A Just Transition supports coal and oil workers through retraining, social protection and clean-energy investment in affected regions — making rapid decarbonisation socially fair and politically durable.",
      },
      {
        id: "solving-climate-crisis-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "singapore-green-plan-action",
        question: "Why does Singapore pair coastal protection (Long Island) with its '30 by 30' indoor/vertical agri-tech goal under the Resilient Future pillar?",
        options: [
          "Because indoor vertical farms physically block storm-surge waves along East Coast beaches.",
          "Because Singapore wants to export 90% of its vegetables to desert countries across Africa.",
          "Because vertical farms require zero electricity and replace solar panels on HDB rooftops.",
          "Because coastal defences protect local land while local food production buffers global climate harvest shocks.",
        ],
        answerIndex: 3,
        hints: [
          "Recall Singapore's TWO distinct vulnerabilities: 30% low-lying land AND >90% imported food!",
          "Long Island tackles coastal flooding; '30 by 30' tackles global food-supply shocks.",
        ],
        explanation:
          "Climate resilience requires tackling both local physical hazards (coastal flooding via Long Island) and imported supply-chain risks (raising local nutritional output to 30% by 2030 so climate droughts abroad do not trigger severe food shortages).",
      },
      {
        id: "solving-climate-crisis-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mitigation-strategies",
        question: "Why does cutting a country's electricity demand through insulation, LEDs and smart district cooling accelerate the transition to renewables?",
        options: [
          "Lower total demand means fewer solar farms, turbines and grid batteries are needed to reach 100% clean power.",
          "Using less electricity causes wind speeds and daily tropical sunshine hours to increase automatically.",
          "Building insulation absorbs methane directly from urban streets and converts it into liquid hydrogen.",
          "LED bulbs operate only when connected directly to underground geothermal steam reservoirs.",
        ],
        answerIndex: 0,
        hints: [
          "Remember: 'the cleanest kilowatt-hour is the one never wasted'.",
          "Think how much easier it is to power a smaller total energy load using clean renewables.",
        ],
        explanation:
          "Improving energy efficiency shrinks the total electricity a society needs, making it far faster, cheaper and less land-intensive for solar, wind and batteries to replace fossil fuels completely.",
      },
      {
        id: "solving-climate-crisis-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "adaptation-strategies",
        question: "Why can relying exclusively on hard engineering (such as ever-taller sea walls) become unsustainable for low-income coastal countries over a 100-year horizon?",
        options: [
          "Concrete sea walls melt instantly whenever tropical ocean temperatures exceed 26.5 °C.",
          "Escalating sea-level rise demands hugely expensive repeated height upgrades and maintenance that LICs cannot afford.",
          "Sea walls cause global atmospheric CO₂ to double every decade through concrete evaporation.",
          "Hard engineering is legally forbidden by the Paris Agreement for all countries south of the equator.",
        ],
        answerIndex: 1,
        hints: [
          "Think about capital cost, ongoing maintenance, rising baseline seas and LIC budgets.",
          "What happens if an expensive wall is eventually overtopped (recall Japan 2011 or rising storm surges)?",
        ],
        explanation:
          "Hard coastal structures carry huge upfront and ongoing upgrade costs as seas continue climbing, straining LIC budgets and risking catastrophic flooding if overtopped — which is why combining soft mangroves, early warnings and managed retreat is vital.",
      },
      {
        id: "solving-climate-crisis-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "singapore-green-plan-action",
        question: "Floating solar farms like Singapore's 60 MWp Tengeh Reservoir installation offer TWO special advantages over land-based solar farms in a dense city-state. What are they?",
        options: [
          "They block all coastal tsunamis and generate electricity exclusively during midnight rainstorms.",
          "They replace freshwater reservoirs with seawater and eliminate the need for MRT rail networks.",
          "They conserve scarce urban land while cooling panels over water to boost electrical efficiency.",
          "They filter plastic microfibres chemically while injecting liquid CO₂ beneath reservoir rock.",
        ],
        answerIndex: 2,
        hints: [
          "Think about land scarcity in ~735 km² Singapore AND how heat affects solar panel performance.",
          "Also consider reduced water evaporation from the shaded reservoir!",
        ],
        explanation:
          "Floating solar panels avoid competing for scarce urban land (for housing, parks or industry) AND benefit from natural evaporative cooling over water, boosting solar panel efficiency by ~5–15% while reducing reservoir evaporation.",
      },
      {
        id: "solving-climate-crisis-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "international-agreements",
        question: "At COP27 and COP28, vulnerable nations secured a historic 'Loss and Damage Fund'. How does Loss and Damage differ from ordinary mitigation or adaptation funding?",
        options: [
          "It exclusively finances new offshore oil exploration across wealthy European coastlines.",
          "It pays only for rooftop solar panels installed inside high-income capital cities.",
          "It replaces all national coastal adaptation plans with mandatory space-based sunshades.",
          "It helps vulnerable nations recover from irreversible climate harms that adaptation could not prevent.",
        ],
        answerIndex: 3,
        hints: [
          "Think of the three pillars of UN climate action: Mitigation (preventing warming), Adaptation (preparing), and Loss & Damage (when impacts exceed adaptation limits).",
          "Examples: destroyed coastal villages, permanently salinised farmland or lost islands.",
        ],
        explanation:
          "Loss and Damage addresses irreversible climate harm — such as permanently submerged land, wiped-out harvests or extreme storm destruction — that goes beyond what vulnerable LICs and SIDS can adapt away.",
      },
      {
        id: "solving-climate-crisis-m3-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-green-plan-action",
        question: "How does expanding Singapore's MRT rail network to 360 km by 2030 connect systemic policy directly to individual climate action?",
        options: [
          "It bans all pedestrians from walking outdoors during tropical afternoon showers.",
          "It makes low-carbon commuting fast, affordable and convenient so individuals choose transit over cars.",
          "It eliminates the need for Singapore to import any clean electricity via the ASEAN Power Grid.",
          "It raises personal petrol consumption by encouraging longer private highway commutes.",
        ],
        answerIndex: 1,
        hints: [
          "Think about how government infrastructure makes the 'green choice' the easiest everyday habit.",
          "Goal: 8 in 10 households within a 10-minute walk of an MRT station.",
        ],
        explanation:
          "When government investment puts 8 in 10 households within a 10-minute walk of an MRT station, choosing low-carbon public transport becomes faster and cheaper than driving — showing how systemic action unlocks widespread individual action.",
      },
    ],
  },
];
