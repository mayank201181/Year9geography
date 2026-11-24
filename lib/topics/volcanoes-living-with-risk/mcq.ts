import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "volcanoes-living-with-risk-m1",
    title: "MCQ Paper 1: Volcano Types & Hazards",
    questions: [
      {
        id: "volcanoes-living-with-risk-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "shield-vs-composite",
        question:
          "Which magma property best explains why shield volcanoes develop very wide bases and gentle slopes?",
        options: [
          "Low-viscosity basaltic lava flows far before cooling",
          "High-viscosity acidic lava freezes right near the vent",
          "Alternating ash blasts pile steeply around the crater",
          "Trapped gas pockets shatter the cone during eruptions",
        ],
        answerIndex: 0,
        hints: [
          "Think about pouring warm water versus thick cold honey onto a flat tray.",
          "Does runny lava travel far horizontally or pile up vertically?",
        ],
        explanation:
          "Shield volcanoes erupt low-viscosity (runny) basaltic lava that travels many kilometres before solidifying, creating wide, gently sloped domes (2°–10°). High-viscosity acidic lava and trapped gas pockets describe steep composite volcanoes, not shields.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "shield-vs-composite",
        question:
          "At which tectonic plate setting are steep-sided composite volcanoes (stratovolcanoes) most commonly formed?",
        options: [
          "Conservative margins where plates slide sideways",
          "Destructive margins where oceanic crust subducts",
          "Collision margins where continental plates crumple",
          "Mid-ocean spreading ridges pulling slowly apart",
        ],
        answerIndex: 1,
        hints: [
          "Composite volcanoes ring the Pacific Ocean beside deep ocean trenches.",
          "Which margin melts wet subducting oceanic crust into sticky, gas-rich magma?",
        ],
        explanation:
          "Composite volcanoes form mainly at destructive (convergent) subduction margins, where melting oceanic crust and water produce thick, gas-rich andesitic magma. Conservative and collision margins produce earthquakes without volcanoes, while spreading ridges mostly form shield volcanoes.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shield-vs-composite",
        question:
          "Why is an eruption at Mount Merapi (Indonesia) typically far more explosive than an eruption at Mauna Loa (Hawaii)?",
        options: [
          "Merapi erupts hotter basaltic lava that races downhill",
          "Mauna Loa sits on a destructive trench with high pressure",
          "Merapi's thick silica-rich magma traps expanding gases",
          "Mauna Loa erupts only once every few hundred years",
        ],
        answerIndex: 2,
        hints: [
          "Compare the magma chemistry of a composite volcano (Merapi) with a shield volcano (Mauna Loa).",
          "What happens to dissolved volcanic gases when magma is sticky and high in silica?",
        ],
        explanation:
          "Mount Merapi is a composite volcano with viscous, silica-rich magma that prevents dissolved gases from escaping smoothly, building explosive pressure. Mauna Loa is a hotspot shield volcano with runny, hotter basaltic lava that lets gas vent gently in frequent effusive eruptions.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shield-vs-composite",
        question:
          "Why are composite volcanoes also known scientifically as stratovolcanoes?",
        options: [
          "Their eruptions occur only inside the stratosphere",
          "Their magma originates from straight tectonic faults",
          "Their gently sloping bases stretch across whole oceans",
          "Their steep cones consist of alternating ash and lava layers",
        ],
        answerIndex: 3,
        hints: [
          "Think about the Latin word 'strata', also used in sedimentary geology.",
          "What two erupted materials build up the cone over successive eruptions?",
        ],
        explanation:
          "'Strata' means layers: stratovolcanoes are built over centuries from alternating layers of hardened volcanic ash (tephra) and thick viscous lava. Reaching the stratosphere happens only in huge explosive eruptions, not as the origin of the name.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "volcanic-hazards",
        question:
          "Which volcanic hazard consists of a superheated avalanche of gas, ash, and rock fragments rushing downhill at over 100 km/h?",
        options: [
          "Pyroclastic flow",
          "Basaltic lava flow",
          "Volcanic mudflow",
          "Tectonic foreshock",
        ],
        answerIndex: 0,
        hints: [
          "This is a primary hazard capable of reaching temperatures around 700 °C.",
          "Its name combines Greek roots meaning 'fire' (pyro) and 'broken rock' (clast).",
        ],
        explanation:
          "A pyroclastic flow is a ground-hugging cloud of superheated volcanic gas, ash, and rock fragments moving at 100–300+ km/h. A volcanic mudflow (lahar) requires water mixed with ash, while basaltic lava flows move far more slowly.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "Which statement correctly distinguishes a primary volcanic hazard from a secondary volcanic hazard?",
        options: [
          "Primary hazards occur only on shield volcanoes worldwide",
          "Secondary hazards are knock-on effects triggered afterwards",
          "Primary hazards always cause fewer deaths than secondary ones",
          "Secondary hazards shoot directly from the central volcanic vent",
        ],
        answerIndex: 1,
        hints: [
          "Compare a pyroclastic flow erupting from the vent with a lahar triggered by rain weeks later.",
          "Ask whether the hazard is erupted directly or caused indirectly as a follow-on impact.",
        ],
        explanation:
          "Primary hazards (lava, pyroclastic flows, tephra, volcanic gases) are produced directly by the eruption, whereas secondary hazards (lahars, roof collapse, crop failure, flight bans) are knock-on consequences triggered when volcanic products interact with water, weather, or human systems.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "How is a deadly lahar formed on the steep slopes of a composite volcano such as Mount Merapi or Nevado del Ruiz?",
        options: [
          "Molten basaltic lava cools rapidly inside ocean trenches",
          "Underground steam explodes upward through solid granite rock",
          "Loose volcanic ash mixes with heavy rain or melted summit ice",
          "Acidic volcanic gases condense into glowing embers mid-air",
        ],
        answerIndex: 2,
        hints: [
          "A lahar is a volcanic mudflow that behaves like fast-moving wet concrete.",
          "What two ingredients must combine on the slopes to turn dry ash into a rushing mudflow?",
        ],
        explanation:
          "Lahars form when loose volcanic ash and debris mix with intense rainfall or rapidly melted summit snow/glaciers, sweeping down river valleys at 40–70 km/h. Molten lava cooling in water or condensing gas does not create mudflows.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "Why did the 2010 eruption of Iceland's Eyjafjallajökull force the cancellation of over 100,000 European flights?",
        options: [
          "Glowing lava rivers flooded major runways across Britain",
          "Toxic carbon dioxide filled airport terminals at ground level",
          "Strong seismic shockwaves cracked control towers in Europe",
          "Fine glassy ash particles melt inside hot jet aircraft engines",
        ],
        answerIndex: 3,
        hints: [
          "Remember what volcanic ash is physically made of — it is not soft wood smoke.",
          "Think about what happens when microscopic silicate glass enters a 1,400 °C jet turbine.",
        ],
        explanation:
          "Volcanic ash is made of sharp, microscopic glass and rock shards that melt inside high-temperature jet turbines and re-solidify on blades, risking engine shutdown. Lava rivers and earthquakes stayed local to Iceland and did not reach mainland Europe.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "Why do lava flows cause far fewer human deaths than pyroclastic flows during volcanic eruptions?",
        options: [
          "Lava moves slowly enough for most people to evacuate on foot",
          "Lava cools to harmless room temperature within seconds",
          "Lava flows happen only deep beneath ocean floor trenches",
          "Lava never destroys farmland, housing, or transport roads",
        ],
        answerIndex: 0,
        hints: [
          "Compare the speed of typical lava (a few km/h) with a pyroclastic flow (100+ km/h).",
          "Does lava spare property, or does it mainly spare lives because people can get out of its way?",
        ],
        explanation:
          "Although lava flows permanently destroy buildings and roads, most advance slowly enough for residents to evacuate safely. By contrast, pyroclastic flows race downhill at 100+ km/h, leaving no time to outrun them once triggered.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "Why can a 15 cm blanket of wet volcanic ash cause flat town roofs to collapse during a rainstorm?",
        options: [
          "Volcanic ash dissolves steel girders through instant rusting",
          "Pulverised rock absorbs water and becomes extraordinarily heavy",
          "Ash clouds pull roofs upward by creating vacuum suction",
          "Warm ash always ignites concrete buildings into fierce fires",
        ],
        answerIndex: 1,
        hints: [
          "Remember that volcanic ash is crushed rock, roughly 2.5 times denser than water.",
          "What happens to the load on a roof when rainwater fills the pores between heavy rock grains?",
        ],
        explanation:
          "Volcanic ash is dense crushed rock; when soaked with rain, just 10–15 cm can weigh over 200 kg per square metre — enough to buckle flat roofs. Ash is rock rather than burning coal, so structural weight (not fire or suction) is the cause.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "shield-vs-composite",
        question:
          "Which pair of volcanoes consists of one classic shield volcano followed by one classic composite volcano?",
        options: [
          "Mount Merapi and Mount Fuji",
          "Mount Vesuvius and Mount Etna",
          "Mauna Loa and Mount Merapi",
          "Mount St Helens and Mount Fuji",
        ],
        answerIndex: 2,
        hints: [
          "Recall Hawaii's famous gentle-sloped hotspot volcano.",
          "Match it with a steep explosive stratovolcano on a destructive margin.",
        ],
        explanation:
          "Mauna Loa (Hawaii) is a classic broad shield volcano built by runny basaltic lava, while Mount Merapi (Indonesia) is a steep, explosive composite volcano on a destructive margin. The other pairs list two composite volcanoes together.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "Which hazard from the list below is correctly classified as a **secondary** volcanic hazard?",
        options: [
          "Glowing volcanic bombs ejected from the crater",
          "A 650 °C pyroclastic flow racing down a slope",
          "Sulphur dioxide gas venting from a summit crack",
          "A muddy lahar triggered by rain three weeks later",
        ],
        answerIndex: 3,
        hints: [
          "Apply the direct-from-vent test: which event needs an outside trigger after the eruption?",
          "Bombs, pyroclastic flows, and gases all exit the volcano directly during eruption.",
        ],
        explanation:
          "A lahar triggered by rainfall weeks after ash has settled is a secondary hazard because water mobilises already-erupted material. Volcanic bombs (tephra), pyroclastic flows, and SO₂ gas are all primary hazards released directly from the volcano.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "shield-vs-composite",
        question:
          "A volcano has a silica content of 66%, a summit crater plugged by a hardened lava dome, and 31° flanks. Which hazard poses the greatest sudden lethal threat to valley towns?",
        options: [
          "Fast pyroclastic flows when the viscous dome collapses",
          "Gentle basaltic lava rivers oozing at walking pace",
          "Low-angle shield widening across coastal beaches",
          "Continuous non-explosive fountaining from long rifts",
        ],
        answerIndex: 0,
        hints: [
          "66% silica and 31° slopes identify this immediately as a viscous composite volcano.",
          "What happens when a pressurised lava dome on a steep stratovolcano shatters?",
        ],
        explanation:
          "High-silica (66%) viscous magma plugs the vent in a lava dome; when pressure shatters that dome, superheated pyroclastic flows race down valleys at 100+ km/h. Runny basaltic rivers and gentle rift fountaining occur on low-silica shield volcanoes.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "volcanic-hazards",
        question:
          "Why can an explosive volcanic eruption like Mount Pinatubo (1991) temporarily lower average global temperatures by about 0.5 °C?",
        options: [
          "Cold underground lava absorbs warmth from nearby oceans",
          "Stratospheric SO₂ aerosols reflect incoming solar radiation",
          "Volcanic ash removes all carbon dioxide from the atmosphere",
          "Lahars freeze tropical rivers and chill global trade winds",
        ],
        answerIndex: 1,
        hints: [
          "Focus on what huge explosive plumes inject high into the stratosphere (above weather clouds).",
          "Tiny sulphur-rich droplets act like microscopic mirrors toward incoming sunlight.",
        ],
        explanation:
          "Major explosive eruptions inject sulphur dioxide into the stratosphere, forming tiny sulphate aerosols that spread globally and reflect incoming solar radiation back to space, cooling Earth for 1–2 years. Volcanoes actually emit CO₂ rather than removing it.",
      },
      {
        id: "volcanoes-living-with-risk-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shield-vs-composite",
        question:
          "A geologist measures a volcano's slope at 5° and confirms the rock is dark, fine-grained basalt with no ash layers. Where is this volcano most likely located?",
        options: [
          "Above a continental collision zone like the Himalayas",
          "Along a conservative transform fault like San Andreas",
          "On an oceanic hotspot or constructive spreading ridge",
          "Directly behind a deep destructive subduction trench",
        ],
        answerIndex: 2,
        hints: [
          "5° slope and pure basalt rock with no ash layers point directly to a shield volcano.",
          "Recall the two tectonic settings where shield volcanoes form.",
        ],
        explanation:
          "Pure basalt rock, no ash strata, and a 5° slope are diagnostic of a shield volcano, which forms at constructive margins (like Iceland) or mantle-plume hotspots (like Hawaii). Collision and conservative margins lack volcanic activity.",
      },
    ],
  },
  {
    id: "volcanoes-living-with-risk-m2",
    title: "MCQ Paper 2: Living with Risk & Monitoring",
    questions: [
      {
        id: "volcanoes-living-with-risk-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "why-live-near-volcanoes",
        question:
          "Why do farmers on the lower slopes of Mount Merapi (Java) and Mount Etna (Sicily) achieve exceptionally high crop yields?",
        options: [
          "Weathered volcanic ash enriches soils with plant minerals",
          "Hot lava warms plant roots directly throughout winter",
          "Sulphur dioxide gas acts as an instant organic fertiliser",
          "Volcanic cones block all rainfall and stop soil erosion",
        ],
        answerIndex: 0,
        hints: [
          "Think about what happens to volcanic ash after years of rain and weathering.",
          "Which nutrients (such as potassium and phosphorus) are released into volcanic soils?",
        ],
        explanation:
          "Over time, weathering breaks down volcanic ash and basalt into dark, fertile soils rich in potassium, phosphorus, and magnesium, supporting multiple harvests per year. Fresh hot lava destroys crops, and SO₂ creates damaging acid rain rather than fertiliser.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "why-live-near-volcanoes",
        question:
          "How does Iceland turn its location on a constructive volcanic margin into a major economic advantage?",
        options: [
          "Exporting solidified lava blocks to pave foreign highways",
          "Using underground volcanic heat for geothermal power and heating",
          "Mining diamond pipes formed inside shallow coastal trenches",
          "Growing tropical rice paddies on high snowy glacier peaks",
        ],
        answerIndex: 1,
        hints: [
          "Around 85–90% of Icelandic homes stay warm through sub-zero winters thanks to volcanic energy.",
          "What is the name for electricity and heating derived from Earth's underground heat?",
        ],
        explanation:
          "Iceland harnesses underground volcanic heat to boil groundwater into steam for geothermal electricity (~25–30% of power) and district heating (~85–90% of homes), lowering energy bills dramatically. Iceland sits on a spreading ridge, not a diamond-bearing trench or rice climate.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "why-live-near-volcanoes",
        question:
          "Which statement represents a **social or constraint** reason — rather than an economic pull factor — explaining why people remain near active volcanoes?",
        options: [
          "Hotels and tour guides earn high seasonal visitor wages",
          "Geothermal stations supply low-cost electricity to factories",
          "Poverty and ancestral family ties prevent families relocating",
          "Sulphur miners earn higher daily pay than nearby labourers",
        ],
        answerIndex: 2,
        hints: [
          "Distinguish opportunities that attract wealth from barriers or attachments that keep residents in place.",
          "Tourism, geothermal power, and mining are all economic opportunities.",
        ],
        explanation:
          "Poverty (inability to afford land elsewhere) and strong ancestral/family attachments are social and constraint factors explaining why people stay despite danger. Tourism jobs, geothermal power, and mining wages are all economic pull factors.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "why-live-near-volcanoes",
        question:
          "What valuable industrial mineral do workers extract from volcanic vents at Kawah Ijen in East Java, Indonesia?",
        options: [
          "Crude petroleum oil",
          "Anthracite black coal",
          "Bauxite aluminium ore",
          "Solidified yellow sulphur",
        ],
        answerIndex: 3,
        hints: [
          "Think of the pungent yellow deposits condensed from volcanic fumarole gases.",
          "It is used in matches, fertilisers, rubber vulcanisation, and sugar refining.",
        ],
        explanation:
          "At Kawah Ijen, hydrothermal gases condense through pipes into bright yellow solid sulphur, which miners carry out for chemical and agricultural industries. Oil and coal are fossil fuels from sedimentary basins, not active volcanic craters.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "predict-prepare-volcanoes",
        question:
          "What physical warning sign does a **tiltmeter** mounted on a volcano's flank detect before an eruption?",
        options: [
          "Tiny changes in slope angle as rising magma inflates the ground",
          "Sudden spikes in sulphur dioxide levels inside crater steam",
          "Rapid increases in rainwater pooling inside distant valleys",
          "Exact dates when tectonic plates will reverse direction",
        ],
        answerIndex: 0,
        hints: [
          "Think of a tiltmeter as an ultra-sensitive carpenter's spirit level bolted to the mountainside.",
          "What happens to the surface angle of a volcano when a magma chamber swells underneath?",
        ],
        explanation:
          "A tiltmeter detects microscopic changes in slope angle as magma pools and inflates the volcano's flank (ground bulging). SO₂ spikes are measured by gas spectrometers, and tectonic plates do not reverse direction before eruptions.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "Why do seismometers installed around a dormant volcano record swarms of **harmonic tremors** days before an eruption?",
        options: [
          "Heavy windstorms shake summit weather stations continuously",
          "Rising pressurised magma cracks and vibrates surrounding rock",
          "Cooling surface lava contracts loudly during cold nights",
          "Ocean tides pull magma sideways across coastal beaches",
        ],
        answerIndex: 1,
        hints: [
          "Magma must force open fractures to climb kilometres up through solid crust.",
          "What seismic signal does rhythmic underground rock fracturing produce?",
        ],
        explanation:
          "Harmonic tremors are continuous rhythmic vibrations caused by pressurised magma forcing its way upward and fracturing solid rock beneath the volcano. Neither windstorms nor ocean tides produce deep rhythmic magma-movement tremors.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "Why does a sharp rise in **sulphur dioxide (SO₂)** emissions at a volcano's crater alert scientists to possible eruption?",
        options: [
          "SO₂ forms only when rainwater washes old ash off slopes",
          "Cooling extinct chambers release more gas as they freeze",
          "Rising magma loses pressure, letting trapped gases escape fast",
          "Wind blowing across glaciers creates fresh volcanic gases",
        ],
        answerIndex: 2,
        hints: [
          "Compare magma rising toward the surface with opening a shaken bottle of fizzy soda.",
          "What happens to dissolved gases in magma when overlying rock pressure drops?",
        ],
        explanation:
          "Just like opening a pressurised fizzy bottle, as magma climbs closer to the crater, lower confining pressure lets dissolved gases — especially SO₂ — bubble out rapidly through vents. Rainwater and glaciers do not generate rising magmatic SO₂ spikes.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "Why can scientists usually give days of warning before a major volcanic eruption, whereas major earthquakes still strike without short-term warning?",
        options: [
          "Volcanoes erupt strictly on fixed 50-year calendar cycles",
          "Earthquakes occur only underwater where no sensors can work",
          "Satellites can physically see magma burning inside Earth's core",
          "Rising magma creates clear multi-day physical signs before breaking out",
        ],
        answerIndex: 3,
        hints: [
          "Think about the physical process leading up to an eruption versus a sudden fault slip.",
          "Can instruments detect magma moving upward over days in ways they cannot detect a silent fault snap?",
        ],
        explanation:
          "Before an eruption, rising magma produces days or weeks of measurable precursors — tremors, flank bulging, SO₂ spikes, and rising heat. Tectonic faults lock silently deep underground and snap abruptly without reliable short-term precursors.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "What is the primary purpose of concrete **sabo dams** built across steep river valleys below active volcanoes in Japan and Indonesia?",
        options: [
          "Trapping boulders and slowing destructive lahars before towns",
          "Stopping 700 °C pyroclastic flows from crossing mountain ridges",
          "Blocking airborne tephra plumes from entering flight corridors",
          "Cooling underground magma chambers before eruptions begin",
        ],
        answerIndex: 0,
        hints: [
          "Notice *where* sabo dams are built: across steep river valleys leading away from the cone.",
          "Which heavy water-and-ash hazard follows river channels downhill?",
        ],
        explanation:
          "Sabo (check) dams sit across volcanic river channels to trap boulders and reduce the speed and volume of lahars before they reach valley settlements. They cannot stop superheated pyroclastic flows, airborne ash plumes, or underground magma.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "Why do volcano observatories combine seismometers, tiltmeters, gas spectrometers, and thermal cameras rather than relying on just one sensor?",
        options: [
          "Each instrument works for only two hours per week before reset",
          "Cross-checking multiple signals reduces costly false evacuations",
          "International aviation law bans using seismometers on islands",
          "Tiltmeters operate only on shield volcanoes, never on cones",
        ],
        answerIndex: 1,
        hints: [
          "Think about what happens to public trust if authorities evacuate 100,000 people over a false alarm.",
          "Could a single sensor be triggered by non-eruptive events like heavy rain or stalled magma?",
        ],
        explanation:
          "No single signal guarantees an eruption — for example, rainstorms can shake seismometers or magma can stall underground. Combining four independent measurements confirms active magma ascent and prevents damaging 'cry wolf' false alarms.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "why-live-near-volcanoes",
        question:
          "Why might a long 120-year dormant gap at a composite volcano actually **increase** the number of people living in danger?",
        options: [
          "Dormant cones automatically lose all toxic volcanic gases forever",
          "Long quiet intervals permanently convert composite cones into shields",
          "Residents underestimate risk and expand towns onto hazard valleys",
          "Observatories remove all emergency shelters after ten quiet years",
        ],
        answerIndex: 2,
        hints: [
          "Think about risk perception across three or four human generations with no eruption in living memory.",
          "How does perceived safety affect where families and developers choose to build?",
        ],
        explanation:
          "When generations pass without an eruption, people perceive the volcano as extinct or harmless, encouraging dense settlement along fertile valleys — even though long dormancy on composite volcanoes often precedes violent explosive blasts.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "Which roof design feature helps buildings in ash-prone cities withstand heavy volcanic tephra fallout?",
        options: [
          "Wide flat timber roofs that collect ash for garden soil",
          "Thin glass skylights covering most of the upper ceiling",
          "Hollow bamboo eaves designed to trap wet rainwater pools",
          "Steeply pitched reinforced roofs so heavy ash slides off",
        ],
        answerIndex: 3,
        hints: [
          "Think about how alpine mountain chalets prevent heavy winter snow from collapsing their roofs.",
          "Heavy wet volcanic ash acts similarly to wet concrete piling up on flat surfaces.",
        ],
        explanation:
          "Steeply pitched, reinforced roofs allow heavy volcanic ash to slide off instead of accumulating to collapse weight. Flat timber roofs and glass skylights trap ash load and fail rapidly once rain wets the deposit.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "predict-prepare-volcanoes",
        question:
          "During the 2010 Mount Merapi eruption, why did emergency planners start setting up livestock shelters alongside human evacuation camps?",
        options: [
          "To stop farmers sneaking back into danger zones to feed cattle",
          "Because cattle can predict eruptions earlier than seismometers",
          "To sell milk internationally to pay for concrete sabo dams",
          "Because volcanic ash harms cows but has zero effect on humans",
        ],
        answerIndex: 0,
        hints: [
          "For a Javanese smallholder farmer, one or two dairy cows represent their entire life savings.",
          "What risky decision did farmers make when evacuated without their animals?",
        ],
        explanation:
          "Smallholder farmers' livelihoods depended on their cattle, so many risked their lives crossing roadblocks back into the pyroclastic exclusion zone to tend animals. Evacuating livestock too solved a critical human-behaviour gap in disaster planning.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "why-live-near-volcanoes",
        question:
          "Why does a wealthy tourist resort owner near Mount Etna face lower personal vulnerability than a subsistence farmer near Mount Merapi, even if both live 12 km from the crater?",
        options: [
          "Mount Etna never erupts lava or ash near human settlements",
          "Insurance, savings, and transport make evacuation and recovery easier",
          "Subsistence farms sit on steeper slopes than every Italian town",
          "Volcanic soil on Mount Merapi yields no saleable food crops",
        ],
        answerIndex: 1,
        hints: [
          "Compare HIC financial resilience (insurance, vehicles, state aid) with LIC/NEE livelihood vulnerability.",
          "Who loses their entire income source if one harvest or house is buried?",
        ],
        explanation:
          "Wealth, property insurance, private vehicles, and strong state emergency infrastructure in an HIC reduce vulnerability and speed up recovery. A subsistence farmer with no insurance risks losing both shelter and their sole source of food and income.",
      },
      {
        id: "volcanoes-living-with-risk-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "What is the key difference between a **hazard map** and a temporary **exclusion zone** in volcanic risk management?",
        options: [
          "Hazard maps show global flights while exclusion zones list hotels",
          "Exclusion zones last permanently while hazard maps change hourly",
          "Hazard maps guide long-term zoning; exclusion zones enforce evacuation",
          "Hazard maps track wind speed while exclusion zones cool down lava",
        ],
        answerIndex: 2,
        hints: [
          "Think about long-term planning before unrest versus urgent emergency restrictions during unrest.",
          "Where are buildings banned permanently, versus where are people ordered to leave right now?",
        ],
        explanation:
          "Hazard maps chart long-term risk pathways (past pyroclastic and lahar valleys) to guide land-use planning before crises, whereas exclusion zones are legally enforced perimeters cleared of residents when monitoring signals an imminent eruption.",
      },
    ],
  },
  {
    id: "volcanoes-living-with-risk-m3",
    title: "MCQ Paper 3: Case Studies, Data & Application",
    questions: [
      {
        id: "volcanoes-living-with-risk-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "A pyroclastic flow races 15 km down a valley from a stratovolcano at an average speed of 180 km/h. How long does it take to reach a town at the valley mouth?",
        options: [
          "2 minutes",
          "5 minutes",
          "12 minutes",
          "15 minutes",
        ],
        answerIndex: 1,
        hints: [
          "Use time = distance ÷ speed to find the time in hours first.",
          "Convert 15/180 hours into minutes by multiplying by 60.",
        ],
        explanation:
          "Time = 15 ÷ 180 = 1/12 hour, and (1/12) × 60 = 5 minutes. Dividing 180 by 15 gives 12 (the inverted formula speed ÷ distance), a classic calculation trap.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "An observatory logs volcanic SO₂ emissions rising from 400 tonnes/day to 1,800 tonnes/day in 72 hours. What is the percentage increase in SO₂ emissions?",
        options: [
          "250%",
          "300%",
          "350%",
          "450%",
        ],
        answerIndex: 2,
        hints: [
          "First calculate the absolute increase: 1,800 − 400.",
          "Divide the increase by the original value (400), then multiply by 100.",
        ],
        explanation:
          "Increase = 1,800 − 400 = 1,400 tonnes/day. Percentage increase = (1,400 ÷ 400) × 100 = 350%. Computing 1,800 ÷ 400 × 100 = 450% forgets to subtract the original 100% baseline.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "why-live-near-volcanoes",
        question:
          "A geothermal power plant in Iceland generates 180 MW of electricity, supplying 60% of a town's total 300 MW demand. Which environmental benefit makes geothermal superior to coal?",
        options: [
          "Geothermal stations operate only during sunny summer afternoons",
          "Geothermal turbines release large clouds of volcanic ash locally",
          "Geothermal plants require shipping coal tankers across oceans",
          "Geothermal power provides constant low-carbon renewable energy",
        ],
        answerIndex: 3,
        hints: [
          "Unlike solar or wind, underground volcanic heat flows 24 hours a day, 365 days a year.",
          "Compare the greenhouse gas emissions of volcanic steam turbines with burning coal.",
        ],
        explanation:
          "Geothermal energy runs continuously day and night (reliable baseload) with very low greenhouse gas emissions compared with coal. It does not depend on sunlight, emit volcanic ash, or require imported fossil fuels.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shield-vs-composite",
        question:
          "Which observation from a geological core drilled into a volcano's flank proves it is a **composite** volcano rather than a **shield** volcano?",
        options: [
          "Thick beds of compacted ash alternating with viscous andesite",
          "Continuous stacked sheets of thin, dark basaltic lava flows",
          "Fossilised sea shells resting on a gentle 4° ocean slope",
          "Solid granite basement rock with zero volcanic layers above",
        ],
        answerIndex: 0,
        hints: [
          "Think about the internal structure shown in cross-sections of shield vs composite cones.",
          "Which rock sequence reflects alternating explosive ash blasts and sticky lava eruptions?",
        ],
        explanation:
          "Alternating layers of volcanic ash and viscous andesite lava are the defining internal structure of a composite stratovolcano. Pure stacked sheets of thin basaltic lava form shield volcanoes.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "Why did the 1985 eruption of Nevado del Ruiz in Colombia kill roughly 23,000 people in the town of Armero, 45 km away from the volcano?",
        options: [
          "A slow basaltic lava flow buried the town within two minutes",
          "Melted summit glacier ice mixed with ash to trigger huge lahars",
          "A direct volcanic bomb shattered every building in the valley",
          "Submarine subduction waves flooded the inland mountain town",
        ],
        answerIndex: 1,
        hints: [
          "Notice the town was 45 km away along a river valley, and the summit was snow- and glacier-capped.",
          "What happens when a hot eruption rapidly melts an icy mountain cap covered in ash?",
        ],
        explanation:
          "Heat from the eruption rapidly melted Nevado del Ruiz's summit ice cap, mixing meltwater with volcanic ash to send colossal lahars racing 45 km down river canyons into Armero at night. Neither slow lava nor direct crater bombs can travel 45 km.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "Which combination of monitoring trends gives the strongest evidence that magma is rapidly rising toward a volcano's crater?",
        options: [
          "Falling tremors, flat tiltmeter readings, and dropping SO₂ levels",
          "Steady cool crater lakes, zero quakes, and gentle coastal winds",
          "Rising harmonic tremors, outward flank bulge, and spiking SO₂",
          "Shrinking volcano height, frozen fumaroles, and low humidity",
        ],
        answerIndex: 2,
        hints: [
          "Recall the S-T-G-T warning signs of rising magma.",
          "All independent indicators should intensify together as magma climbs.",
        ],
        explanation:
          "Increasing harmonic tremors (rock cracking), outward ground bulging (magma chamber inflation), and spiking SO₂ emissions (depressurising magma) together form the classic pre-eruption signature. Falling or flat trends point to quiet or stalling magma.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "why-live-near-volcanoes",
        question:
          "Why is fertile soil NOT immediately available the day after a volcanic lava flow cools across a farm?",
        options: [
          "Cooled volcanic rock permanently blocks all rain from soaking in",
          "Volcanic basalt contains zero potassium or phosphorus minerals",
          "Farmers are banned forever from growing crops on igneous rock",
          "Solid rock needs years of weathering to break into mineral soil",
        ],
        answerIndex: 3,
        hints: [
          "Picture walking on a brand-new black cooled lava field in Hawaii or Iceland.",
          "What natural process must break rock and ash down before plant roots can absorb minerals?",
        ],
        explanation:
          "Fresh solidified lava and raw ash are initially barren rock; rain, temperature changes, and biological weathering over years to decades break them down to release rich potassium and phosphorus into fertile soil.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "predict-prepare-volcanoes",
        question:
          "A coastal town near a shield volcano (like Heimaey in Iceland, 1973) faces an advancing 2 km/h basaltic lava flow threatening its vital fishing harbour. Which protection measure can realistically help?",
        options: [
          "Spraying seawater and building earthen diversion walls",
          "Installing steep pitched roofs to bounce molten lava away",
          "Distributing paper dust masks so residents can stay indoors",
          "Waiting for heavy rainfall to turn lava into harmless soil",
        ],
        answerIndex: 0,
        hints: [
          "Remember this is slow-moving basaltic lava on a shield/fissure volcano — NOT a fast pyroclastic flow.",
          "How did Icelanders famously slow and steer the 1973 Heimaey lava flow away from their harbour?",
        ],
        explanation:
          "Slow-moving basaltic lava can sometimes be cooled at its front edge with huge volumes of pumped seawater (solidifying a natural dam) and steered away from key ports by earthen barriers — as achieved at Heimaey in 1973. Roof pitch and dust masks address ashfall, not lava.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "Why are people sheltering in low-lying basements near an active volcano warned about **carbon dioxide (CO₂)** emissions?",
        options: [
          "CO₂ rises rapidly to the stratosphere and blocks radio waves",
          "Dense invisible CO₂ pools in low hollows and causes suffocation",
          "CO₂ glows bright orange and ignites wooden basement floors",
          "CO₂ freezes instantly into solid ice blocks inside doorways",
        ],
        answerIndex: 1,
        hints: [
          "Compare the density of CO₂ gas with normal air.",
          "Think about Lake Nyos (Cameroon, 1986), where volcanic CO₂ flowed invisibly down valleys.",
        ],
        explanation:
          "Carbon dioxide is denser than air, colourless, and odourless; when emitted by volcanoes it can sink into valleys and basements, displacing oxygen and suffocating people and livestock silently. It does not burn or freeze into ice indoors.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "why-live-near-volcanoes",
        question:
          "In a survey of 250 households living within 10 km of Mount Merapi, 115 gave fertile farmland as their main reason for staying. What percentage of surveyed households gave this reason?",
        options: [
          "38%",
          "42%",
          "46%",
          "54%",
        ],
        answerIndex: 2,
        hints: [
          "Calculate (115 ÷ 250) × 100.",
          "Notice that dividing by 250 and multiplying by 100 is the same as multiplying 115 by 0.4.",
        ],
        explanation:
          "(115 ÷ 250) × 100 = 0.46 × 100 = 46%. Multiplying by 0.4 gives 115 × 0.4 = 46%, while 54% represents the remaining 135 households giving other reasons.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "shield-vs-composite",
        question:
          "How does water carried down inside a subducting oceanic plate help trigger explosive composite volcanoes on the overriding plate?",
        options: [
          "Water freezes the mantle completely and halts magma movement",
          "Water washes away silica minerals to create runny basalt",
          "Water pushes continental crust sideways to form transform faults",
          "Water lowers mantle melting points and adds explosive steam",
        ],
        answerIndex: 3,
        hints: [
          "Subducting ocean crust is soaked with seawater and wet ocean sediment.",
          "What does water do both to rock melting temperature and to gas pressure inside sticky magma?",
        ],
        explanation:
          "Water squeezed out of the subducting oceanic slab lowers the melting point of overlying mantle rock (flux melting) and dissolves into silica-rich magma as superheated steam, fuelling violent explosive composite eruptions.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "predict-prepare-volcanoes",
        question:
          "Why is radar satellite monitoring (**InSAR**) especially valuable for monitoring remote active volcanoes in LICs and NEEs?",
        options: [
          "It detects ground swelling across wide areas through cloud cover",
          "It cools crater lava directly using focused orbital microwaves",
          "It replaces the need for local evacuation routes and shelters",
          "It prevents volcanic gases from forming acid rain downwind",
        ],
        answerIndex: 0,
        hints: [
          "Many volcanoes in Indonesia, Africa, and South America lack dense ground tiltmeter networks and are often shrouded in cloud.",
          "What physical surface change can satellite radar track even at night or through cloud?",
        ],
        explanation:
          "Satellite radar (InSAR) tracks millimetre-to-centimetre ground deformation across entire volcanic chains day and night, even through dense tropical cloud, helping scientists spot inflation where ground tiltmeters are scarce. It monitors risk rather than replacing local evacuation.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "volcanic-hazards",
        question:
          "Why can lahar risk around Mount Pinatubo or Mount Merapi remain severe for **years** after the main eruption ends?",
        options: [
          "Lava tubes keep erupting silently beneath city streets forever",
          "Thick loose ash blankets stay on steep slopes until monsoon rain hits",
          "Underground earthquakes turn dry riverbeds into molten magma",
          "Tephra clouds remain frozen in the sky for five full years",
        ],
        answerIndex: 1,
        hints: [
          "Think about how much loose ash sits unconsolidated on mountain slopes after a big explosive eruption.",
          "What happens every single rainy season until plants re-root and stabilise the slopes?",
        ],
        explanation:
          "Huge explosive eruptions drape millions of tonnes of loose, unstable ash across steep flanks; every monsoon downpour or typhoon for years afterwards can wash fresh ash into river channels as deadly secondary lahars until vegetation stabilises the slopes.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "predict-prepare-volcanoes",
        question:
          "In 1991, scientists at Mount Pinatubo issued timely evacuation warnings that saved an estimated 20,000 lives, yet roughly 850 people still died. What caused most of those remaining deaths?",
        options: [
          "Slow basaltic lava flows overtaking motorists on coastal highways",
          "Total failure of seismometers to detect any pre-eruption quakes",
          "Wet ash collapsing roofs during a typhoon and post-eruption lahars",
          "Tsunamis generated by Mount Pinatubo's inland mountain crater",
        ],
        answerIndex: 2,
        hints: [
          "By tragic coincidence, Typhoon Yunya struck the Philippines on the exact day of Pinatubo's climax eruption.",
          "What happens when typhoon rain saturates a thick blanket of falling volcanic ash?",
        ],
        explanation:
          "Typhoon Yunya drenched Pinatubo's falling ash in torrential rain, causing widespread wet-ash roof collapses and massive lahars — showing how secondary hazards can still kill hundreds even after an accurate primary evacuation.",
      },
      {
        id: "volcanoes-living-with-risk-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "why-live-near-volcanoes",
        question:
          "A town beside an active volcano invests heavily in eco-tourism trails, crater museums, and hot-spring spas. What geographical risk must planners balance alongside this economic success?",
        options: [
          "Hot springs cool down the magma chamber and trigger earthquakes",
          "Tourists remove fertile volcanic ash faster than farmers can plant",
          "Eco-tourism bans scientists from installing local tiltmeters",
          "Higher visitor density increases exposure if sudden unrest occurs",
        ],
        answerIndex: 3,
        hints: [
          "Think about what happens to the number of vulnerable people — many unfamiliar with local language and escape routes — inside a hazard zone.",
          "Consider both the benefit (jobs/income) and the hazard exposure trade-off.",
        ],
        explanation:
          "Volcano tourism brings strong income and jobs, yet concentrates thousands of visitors (often unfamiliar with local evacuation routes or warning sirens) near craters, requiring strict access controls and clear tourist alert protocols.",
      },
    ],
  },
];
