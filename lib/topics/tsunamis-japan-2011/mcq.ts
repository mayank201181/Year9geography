import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "tsunamis-japan-2011-m1",
    title: "MCQ Paper 1: Tsunami Physics & Japan 2011 Impacts",
    questions: [
      {
        id: "tsunamis-japan-2011-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "tsunami-causes-shoaling",
        question:
          "Which tectonic mechanism generates the vast majority of catastrophic ocean-wide tsunamis?",
        options: [
          "Submarine subduction fault snapping vertically upward",
          "Continental plates crumpling high above dry inland plains",
          "Conservative transform faults grinding slowly sideways",
          "Strong tropical storm winds pushing warm surface ripples",
        ],
        answerIndex: 0,
        hints: [
          "To start a tsunami, the entire vertical column of ocean water must be shoved upward.",
          "Think about destructive subduction trenches like the Japan Trench.",
        ],
        explanation:
          "At destructive subduction margins, a locked submarine megathrust fault snaps vertically upward, displacing billions of tonnes of seawater from seafloor to surface. Conservative faults move horizontally, continental collisions happen on land, and wind only creates shallow surface surf.",
      },
      {
        id: "tsunamis-japan-2011-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "tsunami-causes-shoaling",
        question:
          "Why do crews aboard ships in the deep open Pacific Ocean (~4,000 m deep) rarely notice a passing tsunami?",
        options: [
          "Tsunamis travel along the seabed without touching the surface",
          "Wave height is under 1 m across a 100–200 km wavelength",
          "Open-ocean tsunamis move slower than ordinary fishing boats",
          "Deep ocean water absorbs all seismic energy before shore",
        ],
        answerIndex: 1,
        hints: [
          "Compare a tsunami's tiny open-ocean height (~0.5–1 m) with its gigantic wavelength (100–200 km).",
          "Rising 1 metre gently over 15 minutes feels completely flat on a moving ocean.",
        ],
        explanation:
          "In deep ocean basins, a tsunami moves at ~720–800 km/h with a tiny amplitude (~0.5–1 m) spread across a 100–200 km wavelength, so ships experience only an imperceptible gentle swell. The energy is NOT absorbed — it stays intact until shallow coastal shoaling.",
      },
      {
        id: "tsunamis-japan-2011-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tsunami-causes-shoaling",
        question:
          "What sequence of physical changes occurs during **coastal shoaling** as a tsunami approaches shallow beaches?",
        options: [
          "Speed doubles, wavelength stretches, and wave height shrinks",
          "Speed drops, wavelength stretches, and wave height stays flat",
          "Friction slows the wave, wavelength shrinks, and height towers",
          "Friction speeds the wave, depth rises, and wind lifts spray",
        ],
        answerIndex: 2,
        hints: [
          "Recall the S-F-W-H shoaling sequence from the study guide.",
          "Think of fast traffic suddenly hitting a bottleneck: trailing water catches up and piles upward.",
        ],
        explanation:
          "During coastal shoaling, friction against the rising shallow seabed slows the wave front; trailing water catches up, compressing the wavelength and forcing wave height vertically upward to 10–40 m. Speed falls rather than doubles.",
      },
      {
        id: "tsunamis-japan-2011-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "tsunami-causes-shoaling",
        question:
          "What should coastal residents do immediately if they witness **coastal drawdown** (the sea suddenly retreating hundreds of metres offshore)?",
        options: [
          "Walk out onto the exposed seabed to gather stranded fish",
          "Stay indoors on the ground floor beside coastal windows",
          "Drive parallel along the beach road to watch the horizon",
          "Evacuate immediately uphill or to a tall reinforced roof",
        ],
        answerIndex: 3,
        hints: [
          "Drawdown happens when the tsunami trough arrives minutes before the towering crest.",
          "Getting high above sea level immediately is the only safe action.",
        ],
        explanation:
          "Coastal drawdown is a deadly natural warning that a tsunami trough has arrived just minutes ahead of the incoming wall of water. Residents must evacuate immediately to high ground or a reinforced vertical evacuation shelter — never walk onto the bare beach.",
      },
      {
        id: "tsunamis-japan-2011-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "japan-2011-impacts",
        question:
          "Which tectonic plate interaction triggered the Magnitude 9.0 Tōhoku earthquake off Japan on 11 March 2011?",
        options: [
          "Pacific Plate subducting beneath the Okhotsk/Eurasian plate",
          "Indian Plate colliding head-on into the Eurasian continental plate",
          "Pacific Plate pulling apart from the Nazca Plate at a mid-ocean ridge",
          "North American Plate sliding sideways along the San Andreas Fault",
        ],
        answerIndex: 0,
        hints: [
          "Japan sits directly west of the deep Pacific Japan Trench.",
          "Which dense oceanic plate is sinking westward under north-eastern Japan?",
        ],
        explanation:
          "The 2011 M9.0 Tōhoku megathrust occurred along the destructive Japan Trench where the dense oceanic Pacific Plate subducts beneath the Okhotsk microplate (part of the Eurasian/North American margin). Indian–Eurasian collision caused Nepal 2015.",
      },
      {
        id: "tsunamis-japan-2011-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-impacts",
        question:
          "What caused more than 90% of the ~18,500 deaths and missing persons in the Japan 2011 Tōhoku disaster?",
        options: [
          "Modern Tokyo skyscrapers pancaking during earthquake shaking",
          "Drowning in towering coastal tsunami waves up to 40 metres",
          "Immediate acute radiation sickness from Fukushima reactors",
          "Pyroclastic flows erupting simultaneously from Mount Fuji",
        ],
        answerIndex: 1,
        hints: [
          "Japan's strict aseismic building codes kept almost all modern buildings standing during M9.0 shaking.",
          "Separate primary tsunami deaths from secondary nuclear evacuations.",
        ],
        explanation:
          "Strict Japanese aseismic engineering kept modern structures intact during the M9.0 shaking; over 90% of the ~18,500 fatalities were caused by drowning in tsunami waves up to 40 m. Mount Fuji did not erupt, and zero immediate radiation-sickness deaths occurred at Fukushima.",
      },
      {
        id: "tsunamis-japan-2011-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-impacts",
        question:
          "Why did three nuclear reactors melt down at the Fukushima Daiichi power plant in March 2011?",
        options: [
          "Fault rupture cracked the underground steel reactor domes open",
          "Operators accidentally turned off cooling pumps before the quake",
          "A ~15 m tsunami overtopped the seawall and flooded backup diesels",
          "Freezing winter snowstorms blocked all coastal intake pipelines",
        ],
        answerIndex: 2,
        hints: [
          "Remember: the reactors shut down automatically and survived the M9.0 earthquake shaking intact.",
          "Compare the tsunami height (~15 m) with the plant's coastal seawall (5.7 m) and basement diesel generators.",
        ],
        explanation:
          "The reactors shut down automatically during shaking, but a ~14–15 m tsunami overtopped the 5.7 m seawall and drowned basement emergency diesel generators, cutting power to cooling pumps so three cores overheated and melted down.",
      },
      {
        id: "tsunamis-japan-2011-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-impacts",
        question:
          "Which impact from Japan 2011 is correctly classified as a **secondary** impact rather than a primary impact?",
        options: [
          "10–15 m tsunami waves flooding Sendai Airport runways",
          "Over 120,000 coastal homes flattened by incoming surges",
          "Coastal Honshu land subsiding by nearly 1 metre at fault slip",
          "Global car and tech factory shutdowns and nuclear evacuations",
        ],
        answerIndex: 3,
        hints: [
          "Primary impacts happen directly from shaking or tsunami water; secondary impacts are knock-on crises afterwards.",
          "Think about Fukushima's 150,000 evacuees and international Toyota/Sony component shortages.",
        ],
        explanation:
          "Fukushima's nuclear evacuation (~150,000 residents) and worldwide automotive/electronics supply-chain shutdowns were knock-on secondary impacts triggered after the tsunami damaged power plants and coastal factories. Flooding Sendai Airport, flattening homes, and coastal subsidence were primary impacts.",
      },
      {
        id: "tsunamis-japan-2011-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tsunami-causes-shoaling",
        question:
          "Why did tsunami run-up reach nearly 40 m in narrow Sanriku coastal inlets (such as Miyako) while reaching 10–15 m across the broad, flat Sendai plain?",
        options: [
          "Narrow V-shaped bays funnelled and squeezed water upward",
          "The earthquake epicentre sat directly beneath Miyako beach",
          "Sendai's flat beaches lacked any seabed friction offshore",
          "Strong offshore typhoons pushed extra waves only into Miyako",
        ],
        answerIndex: 0,
        hints: [
          "Picture pouring a bucket of water into a wide flat tray versus a narrow V-shaped funnel.",
          "Both coastlines were hit by the same offshore tsunami wave train.",
        ],
        explanation:
          "Steep, narrow V-shaped ria bays along the Sanriku coast funnel incoming tsunami energy sideways as well as vertically, concentrating water into run-ups reaching 38–40 m. Across the wide Sendai plain, water spread horizontally up to 10 km inland instead.",
      },
      {
        id: "tsunamis-japan-2011-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tsunami-causes-shoaling",
        question:
          "Using {{v = sqrt(10 * d)}}, what is the approximate speed in **m/s** (to the nearest whole number) of a tsunami travelling across ocean water that is **1,600 m** deep?",
        options: [
          "40 m/s",
          "126 m/s",
          "160 m/s",
          "400 m/s",
        ],
        answerIndex: 1,
        hints: [
          "Multiply 10 × 1,600 = 16,000.",
          "Estimate {{sqrt(16000)}}: notice 120² = 14,400 and 130² = 16,900!",
        ],
        explanation:
          "v = √(10 × 1,600) = √16,000 ≈ 126.5 m/s (~126 m/s, or ~455 km/h). Writing 40 m/s takes √1,600 without multiplying by g = 10 first, while 400 m/s confuses √160,000 with √16,000.",
      },
      {
        id: "tsunamis-japan-2011-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-impacts",
        question:
          "Approximately how much direct economic damage did the World Bank estimate for the Japan 2011 Tōhoku disaster?",
        options: [
          "About US$5 billion",
          "About US$45 billion",
          "Over US$235 billion",
          "About US$950 billion",
        ],
        answerIndex: 2,
        hints: [
          "It remains the costliest natural disaster in modern world history.",
          "Remember the anchor mnemonic 11-9-40-18.5-235 (whereas $5B was Nepal 2015).",
        ],
        explanation:
          "Direct economic losses topped US$235 billion — the costliest natural disaster on record — reflecting dense insured coastal cities, ports, factories, railways, and nuclear infrastructure. US$5 billion was the loss in LIC Nepal 2015.",
      },
      {
        id: "tsunamis-japan-2011-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tsunami-causes-shoaling",
        question:
          "Why is returning to a coastal home right after the **first** tsunami wave pulls back extremely dangerous?",
        options: [
          "Retreating seawater turns coastal sand into solid granite",
          "Underwater volcanic lava always follows every ocean wave",
          "The first wave automatically lowers regional sea level permanently",
          "Tsunamis arrive as multi-wave trains and later waves are often taller",
        ],
        answerIndex: 3,
        hints: [
          "Does a megathrust fault produce only one isolated splash or a series of waves?",
          "Emergency rules require waiting until authorities officially lift all tsunami advisories.",
        ],
        explanation:
          "A tsunami is a wave train of multiple crests arriving 10–60 minutes apart over many hours, and reflected/resonating second or third waves are frequently higher and deadlier than the first surge.",
      },
      {
        id: "tsunamis-japan-2011-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "tsunami-causes-shoaling",
        question:
          "A submarine megathrust snaps off a deep subduction trench where tsunami waves travel at ~570 km/h across open water. Why is warning time along Japan's Tōhoku coast so short compared with Hawaii?",
        options: [
          "The Japan Trench lies only 70–130 km offshore, giving 15–30 minutes",
          "Tsunamis travel slower toward Hawaii because Pacific water is shallow",
          "Japan's seismometers switch off automatically during M9 earthquakes",
          "Hawaii sits inside a continental collision zone safe from ocean waves",
        ],
        answerIndex: 0,
        hints: [
          "Compare the travel distance from the Japan Trench to Sendai (~70–130 km) vs across the Pacific to Hawaii (~6,000 km).",
          "At ~700–800 km/h, 6,000 km takes ~7–8 hours whereas 100–130 km takes barely 15–30 minutes!",
        ],
        explanation:
          "Near-field tsunamis generated along the Japan Trench only 70–130 km offshore reach Tōhoku towns in 15–30 minutes, leaving minimal evacuation time — whereas distant Pacific islands like Hawaii receive 7–8 hours of advance warning.",
      },
      {
        id: "tsunamis-japan-2011-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "japan-2011-impacts",
        question:
          "During the 2011 earthquake, parts of north-eastern Japan's coastline permanently **subsided (sank)** by ~1 metre. How did this worsen the primary tsunami impact?",
        options: [
          "Sinking land stopped seawater from reaching inland river valleys",
          "Effective seawall height dropped by 1 m and low coastal plains stayed flooded",
          "Subsidence raised offshore water temperatures and evaporated the wave",
          "Sinking crust pushed the Pacific Plate backward and ended aftershocks",
        ],
        answerIndex: 1,
        hints: [
          "If a 10 m seawall sinks downward by 1 m relative to sea level, how high is it now above the ocean?",
          "Think also about drainage after the tsunami passes if coastal farmland sits below high tide.",
        ],
        explanation:
          "Tectonic subsidence lowered seawalls by ~1 m right before the tsunami hit (making overtopping easier) and dropped coastal farmland below high-tide level, leaving towns waterlogged long after the surge passed.",
      },
      {
        id: "tsunamis-japan-2011-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-impacts",
        question:
          "Why did freezing March winter weather in Tōhoku magnify the **secondary** human crisis after the 2011 tsunami?",
        options: [
          "Snowstorms caused all nuclear reactors in western Japan to melt down",
          "Freezing temperatures turned Pacific Ocean waves into solid glaciers",
          "450,000 displaced survivors faced snow and hypothermia without power",
          "Winter frost blocked Japan's Shinkansen brakes from functioning safely",
        ],
        answerIndex: 2,
        hints: [
          "Remember 4.4 million homes lost electricity and 1.5 million lost running water in sub-zero March snow.",
          "Think especially about elderly coastal residents inside unheated school gyms.",
        ],
        explanation:
          "Sub-zero snowstorms struck immediately after the disaster while 450,000 people sheltered in damaged schools without electricity, heating fuel, or clean water — severely straining elderly survivors and relief logistics.",
      },
    ],
  },
  {
    id: "tsunamis-japan-2011-m2",
    title: "MCQ Paper 2: Japan Responses & HIC vs LIC Comparison",
    questions: [
      {
        id: "tsunamis-japan-2011-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "japan-2011-responses",
        question:
          "How did Japan's automatic early-warning system prevent any fatalities aboard the **27 Shinkansen bullet trains** running on 11 March 2011?",
        options: [
          "Detecting fast P-waves first triggered automatic emergency braking",
          "Drivers spotted coastal drawdown from windows and slowed manually",
          "Rubber shock towers lifted railway tracks above incoming waves",
          "Satellites predicted the exact M9.0 rupture three days in advance",
        ],
        answerIndex: 0,
        hints: [
          "Remember the two kinds of earthquake body waves: faster P-waves arrive before destructive S-waves.",
          "Electronic signals travel much faster than seismic waves through rock.",
        ],
        explanation:
          "Seismometers detected faster P-waves seconds ahead of violent S-waves, automatically cutting track power and braking all 27 Shinkansen trains safely with zero derailments or deaths. Exact multi-day earthquake prediction remains impossible.",
      },
      {
        id: "tsunamis-japan-2011-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "japan-2011-responses",
        question:
          "Which action taken after Japan 2011 is a **long-term response** rather than an immediate emergency response?",
        options: [
          "Deploying 100,000 Self-Defense Force troops for coastal rescue",
          "Relocating coastal towns uphill and building 14 m seawalls",
          "Sending SMS phone warnings and sounding harbour sirens",
          "Opening 2,000 emergency school shelters with blankets and food",
        ],
        answerIndex: 1,
        hints: [
          "Immediate responses happen within seconds to weeks to save lives; long-term responses take months to years.",
          "Which option permanently reshapes towns and coastal engineering?",
        ],
        explanation:
          "Relocating residential neighbourhoods onto hillside terraces and constructing ~400 km of reinforced 14 m seawalls took years of planning and investment (long-term responses). SDF rescue, SMS warnings, and emergency shelters were immediate responses.",
      },
      {
        id: "tsunamis-japan-2011-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-responses",
        question:
          "What major geographical criticism have local residents and scientists raised against Japan's massive post-2011 14-metre concrete seawalls?",
        options: [
          "Concrete seawalls dissolve rapidly in cold Pacific seawater",
          "Seawalls increase earthquake magnitudes along subduction trenches",
          "Giant walls cut towns off from sea views, fisheries, and tourism",
          "Tall walls prevent P-wave SMS alerts from reaching mobile phones",
        ],
        answerIndex: 2,
        hints: [
          "Imagine living in a coastal fishing and tourist village walled behind a 4-storey windowless concrete cliff.",
          "Also consider whether giant walls can tempt residents to feel overly safe if a 30 m wave arrives.",
        ],
        explanation:
          "While tall walls block moderate tsunamis, critics highlight huge construction costs, blocked ocean views hurting fishing/tourism identity, ecosystem damage, and false security if extreme waves overtop them — leading many communities to prefer hillside relocation.",
      },
      {
        id: "tsunamis-japan-2011-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-responses",
        question:
          "Why did Japan build the **S-net** network of 150 cabled seafloor pressure observatories along the Japan Trench after 2011?",
        options: [
          "To mine volcanic sulphur deposits along deep ocean trenches",
          "To pump seawater inland to cool coastal solar power panels",
          "To push the subducting Pacific Plate backward and stop quakes",
          "To measure real-time offshore wave heights and speed up alerts",
        ],
        answerIndex: 3,
        hints: [
          "In 2011, land-based seismometers initially underestimated the magnitude as M7.9 and forecast 3–6 m waves.",
          "Measuring actual water pressure directly above the trench removes that blind spot.",
        ],
        explanation:
          "Cabled seafloor pressure gauges detect actual water-column displacement directly above the Japan Trench in real time, giving earlier, more accurate wave-height forecasts than land seismometers alone.",
      },
      {
        id: "tsunamis-japan-2011-m2-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "hic-vs-lic-comparison",
        question:
          "Why did **HIC Japan (2011)** suffer a vastly higher **total US dollar loss** ($235B+) than **LIC Nepal (2015)** ($5B)?",
        options: [
          "Japan had far denser, expensive insured infrastructure in hazard zones",
          "Nepal experienced almost zero physical damage to homes or temples",
          "Japan refused all insurance payouts and rebuilt solely with foreign aid",
          "Nepal's GDP per capita was forty times higher than Japan's in 2015",
        ],
        answerIndex: 0,
        hints: [
          "Compare the replacement cost of modern ports, Shinkansen tracks, microchip factories, and power plants versus rural brick homes.",
          "Absolute dollar cost depends directly on the financial value of exposed assets.",
        ],
        explanation:
          "HICs like Japan concentrate extraordinarily high-value infrastructure (nuclear plants, high-tech factories, bullet trains, ports, insured urban property) inside hazard zones, driving huge absolute dollar losses — even though rebuilding is easier relative to national income.",
      },
      {
        id: "tsunamis-japan-2011-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hic-vs-lic-comparison",
        question:
          "Why was Nepal's US$5 billion earthquake damage in 2015 economically more crippling to Nepal than Japan's US$235 billion loss was to Japan?",
        options: [
          "Nepal had to pay Japan compensation after the Tōhoku disaster",
          "Nepal's loss equalled ~25% of its annual GDP versus ~4% in Japan",
          "Japan had zero factories or power stations damaged in March 2011",
          "Nepal spent all $5 billion building 14-metre concrete coastal walls",
        ],
        answerIndex: 1,
        hints: [
          "Always compare damage relative to the size of the country's economy (% of GDP)!",
          "Compare 5/20 = 25% with 235/5,875 ≈ 4%.",
        ],
        explanation:
          "Relative to national economic size, Nepal lost roughly a quarter (~25%) of its annual GDP with minimal insurance, leaving it heavily reliant on international aid, whereas Japan's $235B loss equalled ~4% of its $5.9 trillion economy and was cushioned by insurance and state reserves.",
      },
      {
        id: "tsunamis-japan-2011-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hic-vs-lic-comparison",
        question:
          "How did **building quality** create a stark contrast between Japan 2011 (M9.0) and Nepal 2015 (M7.8)?",
        options: [
          "Wooden Nepali farmhouses withstood shaking better than Tokyo towers",
          "Both nations suffered identical collapse rates across all city centres",
          "Japan's strict aseismic codes prevented collapses; Nepal's brick homes failed",
          "Japan's concrete skyscrapers collapsed first while brick villages survived",
        ],
        answerIndex: 2,
        hints: [
          "Think about cross-bracing, base isolation, and strict enforcement in Japan versus unreinforced brick/mud-mortar homes in Kathmandu and Gorkha.",
          "Recall that >90% of Japan's deaths came from the tsunami, NOT collapsing buildings.",
        ],
        explanation:
          "Strictly enforced aseismic building codes kept Japanese skyscrapers and modern homes standing through M9.0 shaking (most deaths were tsunami drownings), whereas unreinforced brick and mud-mortar homes in LIC Nepal collapsed widely during M7.8 shaking.",
      },
      {
        id: "tsunamis-japan-2011-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hic-vs-lic-comparison",
        question:
          "Why was immediate search-and-rescue far slower in rural Nepal (2015) than along Japan's Tōhoku coast (2011)?",
        options: [
          "Nepal banned international medical charities from crossing borders",
          "Japan had zero damaged roads or blocked railways after the tsunami",
          "Nepal's earthquake struck offshore beneath a deep ocean trench",
          "Landslides blocked steep mountain roads and Nepal lacked rescue fleets",
        ],
        answerIndex: 3,
        hints: [
          "Combine physical geography (steep Himalayan terrain, blocked single-lane mountain roads) with LIC resource limits (few helicopters/ambulances).",
          "Contrast with Japan's 100,000 SDF troops, aircraft, and dense infrastructure.",
        ],
        explanation:
          "In landlocked, mountainous Nepal, earthquake-triggered landslides severed narrow valley roads while limited national helicopter fleets and scarce hospitals left remote villages waiting days for foreign rescue teams — contrasting sharply with Japan's immediate 100,000-troop SDF deployment.",
      },
      {
        id: "tsunamis-japan-2011-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-responses",
        question:
          "What saved 99.8% of roughly 3,000 schoolchildren during the famous **'Miracle of Kamaishi'** on 11 March 2011?",
        options: [
          "Regular tsunami drills training pupils to flee uphill independently",
          "A 45-metre concrete dome built completely over Kamaishi harbour",
          "Military helicopters lifting every classroom before shaking started",
          "Forecasts warning families to leave town two full days earlier",
        ],
        answerIndex: 0,
        hints: [
          "This famous example illustrates the life-saving power of **preparation and education**.",
          "Pupils did not wait passively — older children guided younger ones higher uphill when they saw the wave rising.",
        ],
        explanation:
          "Years of practical disaster education taught Kamaishi pupils not to rely blindly on hazard lines, to take initiative, and to climb higher uphill immediately — proving that human preparation saves lives even when engineering fails.",
      },
      {
        id: "tsunamis-japan-2011-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-responses",
        question:
          "How did the Fukushima Daiichi nuclear crisis reshape Japan's **long-term national energy policy** after 2011?",
        options: [
          "Japan abolished all electricity grids along its Pacific coast",
          "Nuclear reactors faced strict safety reviews and renewables expanded",
          "Japan built fifty new coastal reactors directly on beach level",
          "Hydroelectric dams replaced 100% of Japan's energy within a year",
        ],
        answerIndex: 1,
        hints: [
          "All reactors were temporarily shut down for tough new flood/quake standards.",
          "Japan increased solar/wind investment while temporarily importing more fossil fuels (LNG) to cover the gap.",
        ],
        explanation:
          "Japan halted its nuclear fleet for strict safety upgrades (elevated backup generators, higher flood barriers) and expanded solar and wind renewables — while temporarily importing more LNG to replace lost nuclear electricity.",
      },
      {
        id: "tsunamis-japan-2011-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hic-vs-lic-comparison",
        question:
          "Why would it be misleading to conclude that Japan (2011) was 'less prepared' than Nepal (2015) purely because Japan had ~18,500 deaths versus Nepal's ~9,000?",
        options: [
          "Nepal experienced a much higher-magnitude earthquake than Japan",
          "Japan actually had fewer people living along its Pacific coast",
          "Japan faced an M9.0 quake (~60× more energy) plus a 40 m tsunami",
          "Nepal suffered a 50-metre coastal tsunami alongside mountain quakes",
        ],
        answerIndex: 2,
        hints: [
          "Remember the logarithmic Moment Magnitude scale: M9.0 releases roughly 60+ times more energy than M7.8!",
          "Nepal is landlocked (zero tsunami), whereas Japan faced waves up to 40 m.",
        ],
        explanation:
          "Physical hazard severity was vastly greater in Japan (M9.0 releasing ~60× more energy than Nepal's M7.8, plus a 40 m coastal tsunami). Comparing death tolls fairly requires accounting for BOTH physical magnitude/hazard type AND human preparedness.",
      },
      {
        id: "tsunamis-japan-2011-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-responses",
        question:
          "In long-term post-2011 land-use zoning across Tōhoku, what uses are permitted in **low-lying coastal red zones** once residential homes are relocated uphill?",
        options: [
          "Hospitals, primary schools, and elderly care homes",
          "Underground nuclear backup generators and wooden dormitories",
          "High-density apartment blocks for low-income coastal commuters",
          "Public memorial parks, fishing ports, and non-residential depots",
        ],
        answerIndex: 3,
        hints: [
          "Think about minimising night-time and vulnerable human exposure in high-risk flood strips.",
          "Ports still need sea access by day, but where should families sleep at night?",
        ],
        explanation:
          "Long-term zoning restricts low tsunami red zones to parks, memorials, ports, and commercial/industrial depots where people do not sleep at night, moving vulnerable uses (homes, schools, hospitals) onto elevated hillside terraces.",
      },
      {
        id: "tsunamis-japan-2011-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hic-vs-lic-comparison",
        question:
          "In the risk equation `Risk = (Hazard × Exposure × Vulnerability) ÷ Capacity to Cope`, how does high economic development (HIC status) change the two sides of a tectonic disaster?",
        options: [
          "It raises insured asset exposure ($) while slashing vulnerability and raising coping capacity",
          "It eliminates physical tectonic hazards along subduction trenches completely",
          "It lowers insured asset exposure ($) while lowering coping capacity and healthcare",
          "It ensures every HIC experiences zero fatalities during any M9 megathrust",
        ],
        answerIndex: 0,
        hints: [
          "Ask what happens to total dollar value of buildings/factories in an HIC (exposure), versus building codes & hospitals (vulnerability & coping capacity).",
          "Does wealth ever eliminate the tectonic hazard itself?",
        ],
        explanation:
          "HIC development raises the dollar value of exposed infrastructure (driving high absolute $ losses) while slashing human vulnerability through strict building codes and boosting coping capacity via warnings, insurance, and rapid emergency fleets.",
      },
      {
        id: "tsunamis-japan-2011-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "japan-2011-responses",
        question:
          "Why did some elderly residents in Tōhoku struggle to survive the 2011 tsunami despite receiving timely SMS warnings and hearing coastal sirens?",
        options: [
          "Coastal sirens could not be heard outside Tokyo's city centre",
          "Ageing populations had limited mobility to climb hills in 15–30 minutes",
          "Japan had never conducted any tsunami evacuation drills before 2011",
          "All roads leading uphill were closed intentionally by local police",
        ],
        answerIndex: 1,
        hints: [
          "Notice that over half of Tōhoku's fatalities were aged 65 or older.",
          "Think about how demographic vulnerability (an ageing coastal population) interacts with a 15–30 minute warning window.",
        ],
        explanation:
          "Rural Tōhoku had a heavily ageing population — over half of fatalities were aged 65+ — who needed assistance climbing steep evacuation routes within 15–30 minutes, highlighting why inclusive buddy systems and vertical evacuation towers are vital.",
      },
      {
        id: "tsunamis-japan-2011-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hic-vs-lic-comparison",
        question:
          "Which key indicator best explains why **long-term recovery** in Nepal after 2015 took far longer than rebuilding core highways and rail links in Japan after 2011?",
        options: [
          "Japan had no damaged coastal bridges or railway stations to repair",
          "Nepal suffered a nuclear meltdown that closed Kathmandu for ten years",
          "Nepal lacked state funds, insurance, and governance capacity to rebuild fast",
          "International donors refused to send any aid or engineers to Nepal",
        ],
        answerIndex: 2,
        hints: [
          "Compare Japan's deep tax base, engineering firms, and insurance markets with LIC Nepal's reliance on pledged foreign aid and political delays.",
          "In Japan, major sections of the Joban highway reopened within weeks.",
        ],
        explanation:
          "HIC Japan financed rapid infrastructure repair from domestic tax reserves, insurance payouts, and skilled engineering firms, whereas LIC Nepal depended heavily on foreign aid pledges, limited domestic funds, and strained governance, leaving families in temporary shelters for years.",
      },
    ],
  },
  {
    id: "tsunamis-japan-2011-m3",
    title: "MCQ Paper 3: Quantitative Skills, Synthesis & Evaluation",
    questions: [
      {
        id: "tsunamis-japan-2011-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tsunami-causes-shoaling",
        question:
          "Using {{v = sqrt(10 * d)}}, a tsunami travels over an ocean basin **3,600 m** deep at 190 m/s, then enters a coastal shelf **10 m** deep. What is its speed in **m/s** at 10 m depth?",
        options: [
          "10 m/s",
          "36 m/s",
          "100 m/s",
          "190 m/s",
        ],
        answerIndex: 0,
        hints: [
          "Substitute d = 10 m directly into {{v = sqrt(10 * d)}}.",
          "Compute {{sqrt(10 * 10)}} = {{sqrt(100)}}.",
        ],
        explanation:
          "At d = 10 m, v = √(10 × 10) = √100 = 10 m/s (36 km/h — notice how 36 is the speed in km/h, not m/s!). Dropping from 190 m/s to 10 m/s causes massive wavelength compression and shoaling height.",
      },
      {
        id: "tsunamis-japan-2011-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tsunami-causes-shoaling",
        question:
          "A tsunami crosses an open ocean channel at **720 km/h** toward an island **240 km** away. How many minutes after the submarine earthquake will the first wave reach the island?",
        options: [
          "15 minutes",
          "20 minutes",
          "30 minutes",
          "45 minutes",
        ],
        answerIndex: 1,
        hints: [
          "Compute time in hours: 240 ÷ 720 = 1/3 hour.",
          "Multiply 1/3 hour by 60 minutes.",
        ],
        explanation:
          "Time = distance ÷ speed = 240 ÷ 720 = 1/3 hour = (1/3) × 60 = 20 minutes. Confusing 240/720 with 1/4 or 1/2 yields 15 or 30 minutes.",
      },
      {
        id: "tsunamis-japan-2011-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-impacts",
        question:
          "A coastal town's pre-2011 seawall stood **10 m** high, yet a **16 m** tsunami wave surged across it. By what percentage did the tsunami height exceed the seawall height?",
        options: [
          "37.5%",
          "45%",
          "60%",
          "160%",
        ],
        answerIndex: 2,
        hints: [
          "Excess height = 16 − 10 = 6 m.",
          "Compute (6 ÷ 10) × 100.",
        ],
        explanation:
          "Excess = 16 − 10 = 6 m; percentage excess over the 10 m wall = (6 ÷ 10) × 100 = 60%. Writing 160% forgets to subtract the original 100% wall height.",
      },
      {
        id: "tsunamis-japan-2011-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hic-vs-lic-comparison",
        question:
          "Country X (GDP $40 billion) suffers $8 billion in earthquake damage, whereas Country Y (GDP $2,000 billion) suffers $60 billion in damage. Which comparison is mathematically accurate?",
        options: [
          "Country X lost more total dollars and a smaller share of GDP",
          "Country Y lost fewer total dollars and a higher share of GDP",
          "Both nations lost the exact same percentage of national GDP",
          "Country Y lost more total dollars, yet Country X lost 20% vs 3% of GDP",
        ],
        answerIndex: 3,
        hints: [
          "Calculate Country X's % GDP loss: (8 ÷ 40) × 100.",
          "Calculate Country Y's % GDP loss: (60 ÷ 2,000) × 100.",
        ],
        explanation:
          "Country X lost 8/40 = 20% of GDP (typical LIC shock), while Country Y lost far more total money ($60B vs $8B) yet only 60/2,000 = 3% of GDP (typical HIC pattern, mirroring Nepal vs Japan).",
      },
      {
        id: "tsunamis-japan-2011-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-responses",
        question:
          "After 2011, a coastal town upgraded its seawall from **8 m** to **14 m**. What was the percentage increase in wall height?",
        options: [
          "75%",
          "57%",
          "60%",
          "175%",
        ],
        answerIndex: 0,
        hints: [
          "Height increase = 14 − 8 = 6 m.",
          "Divide 6 by the original height (8 m) and multiply by 100.",
        ],
        explanation:
          "Increase = 14 − 8 = 6 m; percentage increase = (6 ÷ 8) × 100 = 75%. Dividing 6 by 14 instead of the original 8 gives ~43%, while 175% forgets to subtract 100%.",
      },
      {
        id: "tsunamis-japan-2011-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tsunami-causes-shoaling",
        question:
          "A coastal tsunami wave has a speed of **20 m/s** as it surges past a harbour pier. What is that speed in **km/h**?",
        options: [
          "36 km/h",
          "72 km/h",
          "55 km/h",
          "120 km/h",
        ],
        answerIndex: 1,
        hints: [
          "To convert m/s into km/h, multiply by 3.6 (since there are 3,600 seconds in an hour and 1,000 metres in a km).",
          "Compute 20 × 3.6.",
        ],
        explanation:
          "20 m/s × 3.6 = 72 km/h — far faster than any human can sprint (~25–35 km/h), proving why escaping *before* the wave reaches the shore is essential.",
      },
      {
        id: "tsunamis-japan-2011-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "japan-2011-responses",
        question:
          "On 11 March 2011, P-waves travelled at **7 km/s** and destructive S-waves at **4 km/s** from a hypocentre **140 km** away from a coastal rail station. Ignoring tiny transmission delays, how many seconds of advance warning did P-waves provide before S-waves hit?",
        options: [
          "10 seconds",
          "20 seconds",
          "15 seconds",
          "35 seconds",
        ],
        answerIndex: 2,
        hints: [
          "Find P-wave arrival time: 140 ÷ 7 seconds.",
          "Find S-wave arrival time: 140 ÷ 4 seconds, then subtract the two times!",
        ],
        explanation:
          "P-wave arrival = 140 ÷ 7 = 20 s; S-wave arrival = 140 ÷ 4 = 35 s. Lead time = 35 − 20 = 15 seconds — enough for Japan's UrEDAS network to trigger emergency braking on bullet trains automatically.",
      },
      {
        id: "tsunamis-japan-2011-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-impacts",
        question:
          "Why did coastal pine forests planted along parts of Japan's shore fail to stop the 2011 tsunami completely, yet still remain part of multi-layered long-term planning?",
        options: [
          "Pine roots absorb seawater so coastal aquifers stay salty forever",
          "Tall trees redirect megathrust faults away from coastal harbours",
          "Forests completely stop 40-metre waves without any seawalls needed",
          "Trees slow smaller surges and trap debris, backing up raised land",
        ],
        answerIndex: 3,
        hints: [
          "Think about 'multi-layered defence' (soft + hard engineering + land-use zoning) rather than expecting a single silver bullet.",
          "What do dense coastal trees (or tropical mangroves) do to incoming wave energy and floating wreckage?",
        ],
        explanation:
          "Although a 15–40 m wall flattened most coastal pines in 2011, wooded buffer strips help reduce velocity and trap floating debris during moderate surges, complementing raised roads, seawalls, and hillside housing relocation.",
      },
      {
        id: "tsunamis-japan-2011-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hic-vs-lic-comparison",
        question:
          "Why did landlocked Nepal (2015) experience deadly **avalanches and landslides** as major secondary hazards rather than a coastal tsunami?",
        options: [
          "Its Himalayan collision margin sits high inland on steep slopes",
          "Its oceanic plate subducted too smoothly to shake coastal towns",
          "Its buildings were constructed entirely out of flexible timber",
          "Its earthquake magnitude was too low to trigger any ground motion",
        ],
        answerIndex: 0,
        hints: [
          "Compare the physical geography of Japan (Pacific island arc next to a deep trench) with Nepal (landlocked Himalayan collision mountains).",
          "Recall the Langtang Valley landslide and Everest base-camp avalanche in April 2015.",
        ],
        explanation:
          "Nepal sits on a landlocked continental collision boundary (Indian–Eurasian) surrounded by steep snow-capped Himalayan slopes, so M7.8 shaking triggered devastating avalanches and valley-blocking landslides rather than a marine tsunami.",
      },
      {
        id: "tsunamis-japan-2011-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-impacts",
        question:
          "Out of approximately **18,500** people killed or missing in Japan 2011, about **92%** died by drowning in the tsunami. Roughly how many fatalities were caused by drowning? (Nearest 1,000)",
        options: [
          "About 9,000",
          "About 17,000",
          "About 13,000",
          "About 15,000",
        ],
        answerIndex: 1,
        hints: [
          "Calculate 0.92 × 18,500 (or subtract 8% of 18,500 from 18,500).",
          "8% of 18,500 ≈ 1,480; 18,500 − 1,480 ≈ 17,020.",
        ],
        explanation:
          "0.92 × 18,500 = 17,020 ≈ 17,000 fatalities by drowning — demonstrating that almost the entire death toll came from the tsunami rather than structural earthquake collapse.",
      },
      {
        id: "tsunamis-japan-2011-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "tsunami-causes-shoaling",
        question:
          "A deep-ocean buoy (DART) detects a tsunami wave height of **0.8 m** at **4,000 m** depth. Using Green's shoaling relation (height scales roughly with depth^(-1/4), so cutting depth by 16× doubles height), approximately how tall does the wave grow when depth drops by 256× (to ~16 m)?",
        options: [
          "About 1.6 m",
          "About 2.4 m",
          "About 3.2 m",
          "About 12.8 m",
        ],
        answerIndex: 2,
        hints: [
          "Notice 256 = 16 × 16! Each 16× reduction in ocean depth doubles the wave height.",
          "Double 0.8 m once (16× shallower → 1.6 m), then double it a second time (256× shallower → ?).",
        ],
        explanation:
          "Since 256 = 16 × 16, cutting depth by 256× doubles the wave height twice (×4 total): 0.8 m × 4 = 3.2 m (and further shallowing to 1 m plus V-bay funnelling pushes coastal run-up into the 10–40 m range!).",
      },
      {
        id: "tsunamis-japan-2011-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "japan-2011-responses",
        question:
          "Why did ancient stone tablets ('tsunami stones') carved centuries ago on Tōhoku hillsides prove more reliable than modern 10-metre concrete seawalls for several villages in 2011?",
        options: [
          "Stone tablets physically blocked 40-metre waves from flooding ports",
          "The carved stones transmitted automatic radio warnings to phones",
          "Ancient stones stopped tectonic subsidence along the Japan Trench",
          "They preserved multi-century memory of rare M9 floods and kept homes uphill",
        ],
        answerIndex: 3,
        hints: [
          "Remember what the ancient stone in Aneyoshi said: 'Do not build your homes below this point!'",
          "Compare permanent avoidance (land-use zoning uphill) with trying to hold back a 1,000-year megathrust using a fixed wall.",
        ],
        explanation:
          "Tsunami stones preserved oral and historical records of rare 1,000-year megathrust run-ups (like AD 869 Jōgan); villages like Aneyoshi that respected the uphill building boundary avoided exposure completely, whereas seawalls designed for smaller modern quakes were overtopped.",
      },
      {
        id: "tsunamis-japan-2011-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hic-vs-lic-comparison",
        question:
          "In a balanced essay comparing Japan 2011 (HIC) and Nepal 2015 (LIC), which concluding statement shows the highest level of geographical evaluation?",
        options: [
          "Economic wealth always eliminates tectonic deaths completely inside every coastal HIC",
          "Wealth cuts building deaths and aids recovery, yet extreme hazards still overwhelm defences",
          "Low-income nations always lose far more absolute US dollars than wealthy insured HICs",
          "Physical earthquake magnitude alone decides death tolls regardless of building codes",
        ],
        answerIndex: 1,
        hints: [
          "Top-band Geography avoids extreme 'always/never/eliminates all' claims.",
          "Look for a balanced judgement recognising BOTH development level (HIC resilience) AND extreme physical hazards (M9.0 + 40 m tsunami).",
        ],
        explanation:
          "High development dramatically cuts building-collapse deaths and speeds self-funded recovery, yet extreme physical events (like an M9.0 megathrust generating 40 m waves) can still overwhelm even world-leading HIC defences — proving both human and physical factors matter.",
      },
      {
        id: "tsunamis-japan-2011-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "japan-2011-impacts",
        question:
          "Why did the flooding of **Sendai Airport** on 11 March 2011 worsen immediate disaster relief in north-eastern Japan?",
        options: [
          "Sendai Airport housed Japan's only national P-wave seismometer",
          "All 27 Shinkansen bullet trains parked inside the airport terminal",
          "Submerged runways temporarily blocked emergency relief aircraft",
          "Airport fuel tanks caused the M9.0 rupture along the Japan Trench",
        ],
        answerIndex: 2,
        hints: [
          "Think about how rescue supplies, medical personnel, and relief aid fly into a devastated coastal region.",
          "US and Japanese military engineers raced to clear mud and wrecked vehicles off the runway within days.",
        ],
        explanation:
          "Sendai Airport sat on flat coastal land and was submerged under waves and wreckage, temporarily halting relief flights until SDF and US teams cleared the runway for emergency aid deliveries.",
      },
      {
        id: "tsunamis-japan-2011-m3-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hic-vs-lic-comparison",
        question:
          "Why does widespread **property and business insurance** in HICs like Japan accelerate long-term rebuilding compared with LICs like Nepal?",
        options: [
          "Insurance companies prevent future earthquakes along plate margins",
          "Insurance pays for free international rescue helicopters on Day 1",
          "Insured buildings can never be damaged by tsunami water surges",
          "Payouts inject rapid private capital to rebuild homes and firms",
        ],
        answerIndex: 3,
        hints: [
          "Think about where families and factories get money to rebuild months after a catastrophe.",
          "In LICs, most families are uninsured and must wait for slow government grants or overseas charities.",
        ],
        explanation:
          "Insurance payouts inject tens of billions of dollars quickly back into households and businesses so rebuilding begins promptly, whereas uninsured families in LICs face long delays waiting for scarce state funds and foreign aid.",
      },
    ],
  },
];
