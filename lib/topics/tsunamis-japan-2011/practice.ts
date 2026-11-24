import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "tsunamis-japan-2011-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "tsunami-causes-shoaling",
      question:
        "At which type of plate boundary do submarine megathrust earthquakes snap vertically upward to generate the largest tsunamis?",
      options: [
        "Destructive subduction margin",
        "Conservative transform margin",
        "Continental collision mountain belt",
        "Inactive continental shield plain",
      ],
      answerIndex: 0,
      hints: [
        "Recall the Japan Trench off north-eastern Japan.",
        "Vertical seabed uplift displaces the entire ocean water column.",
      ],
      explanation:
        "Destructive subduction margins lock oceanic and overriding plates together until the megathrust snaps vertically upward, displacing the entire water column. Conservative margins slip sideways and continental collisions occur inland.",
    },
    {
      id: "tsunamis-japan-2011-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "tsunami-causes-shoaling",
      question:
        "What geographical term describes the process where shallow seabed friction slows a tsunami, shrinks its wavelength, and makes its height tower to 10–40 m?",
      answer: {
        type: "text",
        accept: ["shoaling", "coastal shoaling", "wave shoaling"],
        display: "coastal shoaling",
      },
      traps: [
        {
          spec: { type: "text", accept: ["drawdown", "coastal drawdown"] },
          feedback:
            "Drawdown is the sea retreating ahead of a crest; the height amplification caused by shallow seabed friction is **coastal shoaling**.",
        },
      ],
      hints: [
        "Derived from the word 'shoal' meaning shallow water near shore.",
        "Follows the sequence: shallower depth → friction → shorter wavelength → taller wave.",
      ],
      solution: [
        "Friction slowing the wave front in shallow water and piling water upward is called **coastal shoaling**.",
      ],
    },
    {
      id: "tsunamis-japan-2011-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "tsunami-causes-shoaling",
      question:
        "Using {{v = sqrt(10 * d)}}, find the speed in **m/s** of a tsunami crossing an ocean basin **1,000 m** deep.",
      answer: {
        type: "number",
        value: 100,
        display: "100 m/s",
      },
      traps: [
        {
          spec: { type: "number", value: 10000 },
          feedback:
            "10,000 is 10 × 1,000 — remember to take the **square root** to get 100 m/s.",
        },
      ],
      hints: [
        "Multiply 10 × 1,000 = 10,000.",
        "Take the square root: {{sqrt(10000)}}.",
      ],
      solution: [
        "v = {{sqrt(10 * 1000)}} = {{sqrt(10000)}} = **100 m/s** (= 360 km/h).",
      ],
    },
    {
      id: "tsunamis-japan-2011-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "japan-2011-impacts",
      question:
        "What Moment Magnitude was recorded for the 11 March 2011 Tōhoku earthquake off north-eastern Japan? (Give the number to 1 decimal place)",
      answer: {
        type: "number",
        value: 9.0,
        display: "9.0",
      },
      hints: [
        "It was the strongest earthquake ever recorded in Japanese history.",
        "Remember the anchor mnemonic 11-9-40-18.5-235.",
      ],
      solution: [
        "The 11 March 2011 Tōhoku earthquake measured **Magnitude 9.0**.",
      ],
    },
    {
      id: "tsunamis-japan-2011-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "japan-2011-impacts",
      question:
        "Which coastal facility suffered three nuclear reactor core meltdowns after a ~15 m tsunami flooded its basement backup diesel generators in March 2011?",
      options: [
        "Sendai International Airport",
        "Fukushima Daiichi Power Plant",
        "Tokyo Bay Geothermal Station",
        "Kamaishi Harbour Rail Terminal",
      ],
      answerIndex: 1,
      hints: [
        "Over 150,000 residents were evacuated from a 20 km exclusion zone around this plant.",
        "Its 5.7 m coastal seawall was easily overtopped by a ~15 m wave.",
      ],
      explanation:
        "The Fukushima Daiichi nuclear power plant lost cooling power when a ~15 m tsunami overtopped its 5.7 m seawall and drowned basement backup diesel generators, leading to three core meltdowns.",
    },
    {
      id: "tsunamis-japan-2011-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "japan-2011-responses",
      question:
        "How many passengers died on Japan's **27 Shinkansen bullet trains** running during the M9.0 Tōhoku earthquake thanks to P-wave automatic braking?",
      options: [
        "About 450 passengers",
        "About 120 passengers",
        "Zero passengers died",
        "About 2,500 passengers",
      ],
      answerIndex: 2,
      hints: [
        "Japan's UrEDAS system detected faster P-waves seconds ahead of destructive S-waves.",
        "Every single bullet train braked safely to a halt with zero derailments.",
      ],
      explanation:
        "Zero passengers died — P-wave early-warning sensors cut power and engaged emergency brakes automatically across all 27 Shinkansen trains before violent S-waves arrived.",
    },
    {
      id: "tsunamis-japan-2011-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "japan-2011-responses",
      question:
        "Classify **building ~400 km of reinforced 14-metre concrete seawalls and relocating homes to higher ground** as either an `immediate` or `long-term` response.",
      answer: {
        type: "text",
        accept: ["long-term", "long term", "long-term response", "long term response"],
        display: "long-term",
      },
      hints: [
        "Did rebuilding towns uphill and constructing 400 km of walls happen in days or over many years?",
        "Actions designed to reduce future disaster risk over months and years belong to which category?",
      ],
      solution: [
        "Constructing 14 m seawalls and relocating residential zones onto hillside terraces took years of planning and construction → **long-term** response.",
      ],
    },
    {
      id: "tsunamis-japan-2011-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "hic-vs-lic-comparison",
      question:
        "Comparing Japan 2011 (HIC) with Nepal 2015 (LIC), which statement accurately captures the economic impact paradox?",
      options: [
        "Nepal lost far more total US dollars than Japan did",
        "Japan lost 25% of GDP whereas Nepal lost only 4%",
        "Both countries lost virtually identical total US dollars",
        "Japan lost far more total dollars, yet Nepal lost ~25% vs ~4% of GDP",
      ],
      answerIndex: 3,
      hints: [
        "Compare absolute losses ($235B+ in Japan vs $5B in Nepal).",
        "Now compare losses as a share of each nation's annual GDP (~4% vs ~25%).",
      ],
      explanation:
        "Japan suffered vastly higher absolute dollar damage ($235B+ vs $5B) because of dense, expensive insured infrastructure, yet Nepal suffered a far deeper shock relative to its economy (~25% of annual GDP vs ~4% in Japan).",
    },
    {
      id: "tsunamis-japan-2011-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "tsunami-causes-shoaling",
      marks: 4,
      question:
        "Explain how an open-ocean tsunami barely 1 metre tall transforms into a towering 20–40 metre coastal wall as it approaches land. (4 marks)",
      hints: [
        "Follow the S-F-W-H chain in order: shallower depth → friction slows front → wavelength shrinks → height rises.",
        "Explain WHY the back of the wave catches up with the front.",
      ],
      modelAnswer:
        "As the fast-moving open-ocean wave enters shallow coastal water over the continental shelf, friction against the rising seabed slows the front of the wave down sharply. Meanwhile, deeper water moving faster behind catches up, compressing the wavelength tightly. Because total wave energy is conserved in a smaller, shallower space, the water piles vertically upward into a 20–40 metre surge — a process called shoaling.",
      markScheme: [
        {
          point: "Notes transition into shallow coastal water / rising seabed",
          keywords: ["shallow", "shallower", "seabed", "shelf", "seafloor"],
        },
        {
          point: "Identifies seabed friction slowing the front of the wave",
          keywords: ["friction", "slows", "slowed", "slowing"],
        },
        {
          point: "Explains trailing water catching up and compressing/shortening wavelength",
          keywords: ["wavelength", "compress", "shrink", "shortens", "catches up", "bunches"],
        },
        {
          point: "Links energy conservation / piling upward to dramatic increase in wave height (shoaling)",
          keywords: ["shoaling", "piles", "pile", "energy", "height", "vertical"],
        },
      ],
      commonError:
        "Saying 'coastal winds blow the wave taller' instead of explaining seabed friction, wavelength compression, and shoaling.",
    },
    {
      id: "tsunamis-japan-2011-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "japan-2011-impacts",
      marks: 3,
      question:
        "Explain how the March 2011 Tōhoku tsunami triggered the secondary nuclear emergency at Fukushima Daiichi. (3 marks)",
      hints: [
        "Mention the seawall height mismatch (5.7 m wall vs ~15 m tsunami).",
        "Identify what the seawater flooded (basement emergency backup diesel generators).",
        "Link lost cooling power to reactor core meltdowns and radiation evacuation.",
      ],
      modelAnswer:
        "Although the reactors shut down safely during shaking, a ~15-metre wave overtopped the plant's 5.7-metre seawall. Seawater flooded the basement emergency diesel generators, cutting electricity to the reactor cooling pumps. Without cooling, three cores overheated and melted down, releasing radioactivity and forcing ~150,000 residents out of a 20 km exclusion zone.",
      markScheme: [
        {
          point: "Wave (~14–15 m) overtopped the plant's 5.7 m coastal seawall",
          keywords: ["overtop", "seawall", "5.7", "15", "wall"],
        },
        {
          point: "Seawater flooded backup diesel generators, disabling cooling pumps",
          keywords: ["generator", "generators", "diesel", "cooling", "power", "pumps"],
        },
        {
          point: "Cores overheated / melted down, causing radiation release or 20 km / ~150,000 evacuation",
          keywords: ["melt", "meltdown", "meltdowns", "radioact", "radiation", "evacuat", "exclusion"],
        },
      ],
      commonError:
        "Claiming the earthquake shaking directly cracked the reactors open rather than tsunami flooding knocking out backup cooling generators.",
    },
  ],

  papers: [
    {
      id: "tsunamis-japan-2011-p1",
      title: "Practice Paper 1: Tsunami Physics & Japan 2011 Case Study",
      questions: [
        {
          id: "tsunamis-japan-2011-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "tsunami-causes-shoaling",
          question:
            "What natural coastal warning sign occurs when the trough of an approaching tsunami arrives first, abruptly draining seawater hundreds of metres offshore and exposing bare mudflats?",
          answer: {
            type: "text",
            accept: ["drawdown", "coastal drawdown", "draw down", "coastal draw down"],
            display: "coastal drawdown",
          },
          hints: [
            "Two words (or one compound word) describing water being 'drawn down' away from the beach.",
          ],
          solution: [
            "Abnormal rapid retreat of seawater exposing bare seabed before a tsunami crest arrives is called **coastal drawdown**.",
          ],
        },
        {
          id: "tsunamis-japan-2011-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "tsunami-causes-shoaling",
          question:
            "Using {{v = sqrt(10 * d)}}, calculate the speed in **m/s** of a tsunami crossing an ocean trench **4,000 m** deep.",
          answer: {
            type: "number",
            value: 200,
            display: "200 m/s",
          },
          traps: [
            {
              spec: { type: "number", value: 40000 },
              feedback:
                "40,000 is 10 × 4,000 — now take the square root of 40,000 to get **200 m/s**.",
            },
          ],
          hints: [
            "Multiply 10 × 4,000 = 40,000.",
            "Find {{sqrt(40000)}}.",
          ],
          solution: [
            "v = {{sqrt(10 * 4000)}} = {{sqrt(40000)}} = **200 m/s** (which equals 720 km/h).",
          ],
        },
        {
          id: "tsunamis-japan-2011-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "tsunami-causes-shoaling",
          question:
            "Convert a tsunami's open-ocean speed of **200 m/s** into **km/h**.",
          answer: {
            type: "number",
            value: 720,
            display: "720 km/h",
          },
          traps: [
            {
              spec: { type: "number", value: 72 },
              feedback:
                "Check the factor of 10: multiply 200 by 3.6 (not 0.36) → **720 km/h**.",
            },
          ],
          hints: [
            "To convert m/s to km/h, multiply by 3.6.",
            "Compute 200 × 3.6 = 20 × 36.",
          ],
          solution: [
            "Speed in km/h = 200 × 3.6 = **720 km/h** (jetliner cruise speed).",
          ],
        },
        {
          id: "tsunamis-japan-2011-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "tsunami-causes-shoaling",
          question:
            "Why does a Magnitude 8.0 submarine earthquake on a **destructive subduction** margin produce a huge tsunami, whereas a Magnitude 8.0 submarine quake on a **conservative** margin usually does not?",
          options: [
            "Subduction faults snap vertically upward, lifting the whole water column",
            "Conservative faults sit exclusively beneath dry mountain continents",
            "Subduction zones have warmer water that boils into tall surf",
            "Conservative faults only release gentle P-waves with zero S-waves",
          ],
          answerIndex: 0,
          hints: [
            "Focus on the direction of crust movement: vertical uplift vs horizontal sliding.",
            "Which motion physically shoves billions of tonnes of overlying seawater upward?",
          ],
          explanation:
            "Destructive megathrusts snap vertically upward, shoving the entire overlying ocean column upward to launch tsunami waves. Conservative faults slip sideways horizontally, displacing very little vertical water.",
        },
        {
          id: "tsunamis-japan-2011-p1-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "japan-2011-impacts",
          question:
            "Which oceanic tectonic plate subducted beneath the Okhotsk/Eurasian plate at the Japan Trench to trigger the 11 March 2011 Tōhoku disaster?",
          answer: {
            type: "text",
            accept: ["pacific", "pacific plate", "the pacific plate"],
            display: "Pacific Plate",
          },
          hints: [
            "Named after the world's largest ocean directly east of Japan.",
          ],
          solution: [
            "The dense oceanic **Pacific Plate** subducts westward beneath the Okhotsk/Eurasian plate along the Japan Trench.",
          ],
        },
        {
          id: "tsunamis-japan-2011-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "japan-2011-impacts",
          question:
            "Along narrow Sanriku coastal inlets in March 2011, maximum tsunami run-up reached approximately how many metres — roughly four times higher than Japan's 10-metre seawalls? (Give a round whole number)",
          answer: {
            type: "number",
            value: 40,
            tolerance: 1,
            display: "40 m",
          },
          hints: [
            "Four times higher than a 10 m seawall!",
            "Remember the anchor sequence 11-9-40-18.5-235.",
          ],
          solution: [
            "Funnelling inside narrow V-shaped bays drove maximum tsunami run-up to roughly **40 m** (up to 40.5 m recorded near Miyako).",
          ],
        },
        {
          id: "tsunamis-japan-2011-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "japan-2011-impacts",
          question:
            "How far inland did the 2011 tsunami surge across the flat coastal plain around Sendai, submerging Sendai Airport?",
          options: [
            "About 500 metres inland",
            "Up to 10 kilometres inland",
            "About 50 kilometres inland",
            "Over 120 kilometres inland",
          ],
          answerIndex: 1,
          hints: [
            "Unlike narrow mountain inlets where waves piled up to 40 m vertically, the flat Sendai plain let water spread far horizontally.",
            "It swept right across coastal rice paddies and airport runways up to ~10 km from shore.",
          ],
          explanation:
            "Across the flat low-lying Sendai plain, 10–15 m tsunami surges swept up to 10 km inland, inundating Sendai Airport, coastal roads, and farmland.",
        },
        {
          id: "tsunamis-japan-2011-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "tsunami-causes-shoaling",
          question:
            "A submarine earthquake snaps 120 km east of a Japanese harbour. If the tsunami travels toward shore at an average speed of **480 km/h**, how many **minutes** do residents have to evacuate before impact?",
          answer: {
            type: "number",
            value: 15,
            display: "15 minutes",
          },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback:
                "You computed speed ÷ distance (480 ÷ 120). Use time = distance ÷ speed, then multiply hours by 60.",
            },
            {
              spec: { type: "number", value: 0.25 },
              feedback:
                "0.25 is the time in **hours** — multiply by 60 to convert to **minutes**.",
            },
          ],
          hints: [
            "Time in hours = distance ÷ speed = 120 ÷ 480 = 0.25 hours.",
            "Convert 0.25 hours into minutes (0.25 × 60).",
          ],
          solution: [
            "Time in hours = {{120 / 480}} = 0.25 hours.",
            "Time in minutes = 0.25 × 60 = **15 minutes**.",
          ],
        },
        {
          id: "tsunamis-japan-2011-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "japan-2011-responses",
          question:
            "Which combination lists **two immediate responses** carried out in Japan during March 2011?",
          options: [
            "Installing S-net seafloor cables and building 14 m seawalls",
            "Relocating towns onto hills and shifting to offshore wind",
            "Broadcasting P-wave SMS alerts and deploying 100,000 SDF troops",
            "Redrawing long-term red zones and tightening nuclear reactor laws",
          ],
          answerIndex: 2,
          hints: [
            "Check that BOTH items happened within seconds to weeks to save lives and provide relief.",
            "Seawalls, relocating towns, S-net, and energy policy took months to years (long-term).",
          ],
          explanation:
            "P-wave SMS warnings/auto-braking and deploying 100,000 Self-Defense Force rescue troops happened within seconds to days (immediate responses). Seawalls, hillside relocation, S-net cables, and energy reforms were long-term responses.",
        },
        {
          id: "tsunamis-japan-2011-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "japan-2011-responses",
          question:
            "What is the name of the post-2011 network of 150 cabled seafloor pressure and seismic observatories deployed along the Japan Trench to measure real-time offshore tsunami height?",
          answer: {
            type: "text",
            accept: ["s-net", "snet", "s net"],
            display: "S-net",
          },
          hints: [
            "Short hyphenated name starting with 'S-' followed by 'net' (Seafloor observation network).",
            "It uses 5,500 km of fibre-optic cable directly over the Japan Trench.",
          ],
          solution: [
            "Japan installed the **S-net** seafloor cable network to measure actual offshore wave height minutes earlier.",
          ],
        },
        {
          id: "tsunamis-japan-2011-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "hic-vs-lic-comparison",
          question:
            "Which pairing accurately matches **Japan 2011 (HIC)** and **Nepal 2015 (LIC)** with their tectonic plate boundary types?",
          options: [
            "Japan: conservative margin; Nepal: constructive ocean ridge",
            "Japan: continental collision; Nepal: destructive subduction",
            "Japan: mantle-plume hotspot; Nepal: conservative fault line",
            "Japan: destructive subduction; Nepal: continental collision",
          ],
          answerIndex: 3,
          hints: [
            "Japan sits next to the oceanic Pacific Japan Trench (subduction → tsunami).",
            "Nepal sits in the Himalayas where the Indian and Eurasian continental plates crash head-on.",
          ],
          explanation:
            "Japan 2011 occurred on a destructive oceanic-continental subduction margin (Pacific under Okhotsk/Eurasian), whereas Nepal 2015 occurred on an inland continental collision margin (Indian colliding with Eurasian).",
        },
        {
          id: "tsunamis-japan-2011-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "tsunami-causes-shoaling",
          marks: 4,
          question:
            "Describe the full process by which a subduction earthquake generates a tsunami and explain why ships in deep water barely notice it while coastal towns face devastating waves. (4 marks)",
          hints: [
            "Point 1: Locked submarine megathrust fault snaps vertically upward, lifting/displacing the entire water column.",
            "Point 2: In deep open ocean, wave height is tiny (~1 m) across a huge wavelength (100–200 km) moving ~800 km/h.",
            "Point 3: Near shore, shallow seabed friction slows the front and compresses wavelength.",
            "Point 4: Trailing water piles upward (shoaling) into a 10–40 m wall slamming towns.",
          ],
          modelAnswer:
            "At a destructive margin, a locked submarine megathrust fault snaps vertically upward, displacing the entire overlying ocean water column. Out in the deep open ocean, the wave travels around 800 km/h with a tiny ~1 m height stretched across a 100–200 km wavelength, so ships barely feel a gentle swell. Entering shallow water, seabed friction slows the wave front sharply and compresses the wavelength. Trailing fast water piles vertically upward through shoaling, turning the swell into a 10–40 m surge that sweeps coastal towns away.",
          markScheme: [
            {
              point: "Vertical upward snap of submarine megathrust fault displaces entire water column",
              keywords: ["vertical", "upward", "megathrust", "displac", "column"],
            },
            {
              point: "Deep-ocean traits explaining why ships ignore it (~1 m low height, 100–200 km long wavelength, ~800 km/h)",
              keywords: ["800", "100", "200", "1 m", "low", "swell"],
            },
            {
              point: "Shallow seabed friction slows the front and shrinks/compresses wavelength",
              keywords: ["friction", "slows", "shallow", "wavelength", "compress", "shrink"],
            },
            {
              point: "Shoaling forces trailing water upward into a towering 10–40 m coastal surge",
              keywords: ["shoaling", "piles", "pile", "10–40", "40 m", "surge", "tower"],
            },
          ],
          commonError:
            "Saying the earthquake 'pushes water sideways' instead of vertical uplift, or omitting seabed friction during shoaling.",
        },
        {
          id: "tsunamis-japan-2011-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "japan-2011-impacts",
          marks: 4,
          question:
            "Using exact statistics, outline two primary impacts and two secondary impacts of the 2011 Japan (Tōhoku) disaster. (4 marks)",
          hints: [
            "Primary 1: ~18,500 dead/missing (>90% drowning) OR waves up to 40 m overtopping 10 m seawalls.",
            "Primary 2: 120,000+ buildings destroyed / Sendai Airport flooded up to 10 km inland.",
            "Secondary 1: Fukushima Daiichi 3 nuclear reactor meltdowns & ~150,000+ evacuated from 20 km zone.",
            "Secondary 2: US$235B+ economic cost / 450,000 displaced in snow / 4.4M without power / global car & tech shortages.",
          ],
          modelAnswer:
            "Primary impacts included towering waves up to 40 metres that overtopped 10-metre seawalls and killed or left missing around 18,500 people (over 90% by drowning). In addition, surging water flooded up to 10 km inland across Sendai Airport and completely destroyed over 120,000 coastal buildings. Secondary impacts included three reactor meltdowns at Fukushima Daiichi after backup diesel generators flooded, forcing ~150,000 residents out of a 20 km exclusion zone. Economically, total damage exceeded US$235 billion — disrupting global car and electronics supply chains while 450,000 people sheltered in winter snow without power.",
          markScheme: [
            {
              point: "First quantified primary impact (~18,500 dead/missing, >90% drowning, or waves up to 40 m overtopping 10 m seawalls)",
              keywords: ["18,500", "18500", "40", "drowning", "overtop"],
            },
            {
              point: "Second quantified primary impact (120,000+ buildings destroyed, Sendai Airport flooded, or 10 km inland)",
              keywords: ["120,000", "sendai", "airport", "10 km", "destroyed"],
            },
            {
              point: "First quantified secondary impact (Fukushima Daiichi 3 meltdowns / ~150,000 evacuated / 20 km exclusion zone)",
              keywords: ["fukushima", "meltdown", "meltdowns", "150,000", "20 km", "nuclear"],
            },
            {
              point: "Second quantified secondary impact (US$235B+ cost, 450,000 displaced, 4.4M without power, or global supply chains)",
              keywords: ["235", "450,000", "4.4", "supply chain", "toyota", "snow"],
            },
          ],
          commonError:
            "Giving generic unquantified statements ('lots of houses broke and many died') without Japan 2011 case study figures.",
        },
        {
          id: "tsunamis-japan-2011-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "japan-2011-responses",
          marks: 4,
          question:
            "Explain two immediate responses and two long-term responses to the 2011 Tōhoku earthquake and tsunami in Japan. (4 marks)",
          hints: [
            "Immediate 1: P-wave SMS/TV alerts + automatic braking stopping all 27 Shinkansen trains with zero deaths.",
            "Immediate 2: 100,000 SDF troops + international search-and-rescue, 2,000 heated shelters, or Kamaishi school evacuation drills.",
            "Long-term 1: ~400 km of taller concrete seawalls (up to 14 m) OR relocating residential neighbourhoods uphill onto terraces.",
            "Long-term 2: S-net 150 seafloor sensors OR strict nuclear safety review and renewable energy expansion.",
          ],
          modelAnswer:
            "Immediately, Japan's P-wave early warning system broadcast SMS and TV alerts within seconds and automatically braked all 27 Shinkansen bullet trains safely with zero fatalities. Within 48 hours, 100,000 Self-Defense Force troops and international teams launched search-and-rescue missions and opened over 2,000 emergency shelters with food and medical aid. In the long term, Japan constructed roughly 400 km of taller reinforced seawalls (up to 14 m) and relocated coastal homes permanently onto elevated hillsides out of red zones. Authorities also installed 150 cabled S-net seafloor gauges along the Japan Trench and tightened nuclear safety rules while expanding solar and wind renewables.",
          markScheme: [
            {
              point: "First immediate response (P-wave SMS/TV alerts, automatic Shinkansen braking, or rehearsed drills like Kamaishi)",
              keywords: ["p-wave", "sms", "shinkansen", "bullet", "braked", "braking", "kamaishi"],
            },
            {
              point: "Second immediate response (100,000 SDF troops, international rescue, 2,000 emergency shelters, or 20 km evacuation)",
              keywords: ["sdf", "self-defense", "100,000", "shelters", "rescue", "20 km"],
            },
            {
              point: "First long-term response (~400 km of taller 14 m seawalls OR relocating homes uphill / red-zone bans)",
              keywords: ["14 m", "400 km", "seawall", "seawalls", "relocat", "hillside", "high ground"],
            },
            {
              point: "Second long-term response (S-net seafloor pressure gauges OR nuclear safety review & renewable energy shift)",
              keywords: ["s-net", "seafloor", "nuclear", "renewable", "solar", "wind"],
            },
          ],
          commonError:
            "Confusing immediate rescue with long-term rebuilding, or omitting specific Japanese case details.",
        },
        {
          id: "tsunamis-japan-2011-p1-q15",
          kind: "mcq",
          difficulty: "core",
          guideRef: "japan-2011-responses",
          question:
            "Why did Japan's 2011 tsunami alert initially underestimate the wave height along the Tōhoku coast as just 3–6 metres for the first 20 minutes?",
          options: [
            "Coastal sirens along eastern Honshu had been switched off for repairs",
            "The Japan Meteorological Agency possessed zero digital seismographs",
            "Waves slowed to 2 km/h offshore so sensors could not detect motion",
            "Standard land seismometers saturated and initially read M7.9 instead of M9.0",
          ],
          answerIndex: 3,
          hints: [
            "The quake was so colossal (M9.0) that early automated magnitude algorithms clipped/saturated at M7.9.",
            "That exact flaw led Japan to build the S-net offshore seafloor pressure gauge array afterwards.",
          ],
          explanation:
            "Early rapid-magnitude algorithms saturated during the gigantic M9.0 rupture and initially estimated M7.9, producing a 3–6 m forecast that misled some residents until revised upwards — motivating the post-2011 S-net seafloor sensor network.",
        },
      ],
    },
    {
      id: "tsunamis-japan-2011-p2",
      title: "Practice Paper 2: Responses, Quantitative Skills & HIC vs LIC",
      questions: [
        {
          id: "tsunamis-japan-2011-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "hic-vs-lic-comparison",
          question:
            "What approximate percentage of Nepal's annual GDP was wiped out by its US$5 billion earthquake loss in 2015 (given GDP ≈ US$20 billion)?",
          answer: {
            type: "number",
            value: 25,
            display: "25%",
          },
          hints: [
            "Compute {{(5 / 20) * 100}}.",
          ],
          solution: [
            "Economic burden = {{5 / 20}} × 100 = **25%** of Nepal's entire annual GDP (compared with only ~4% in Japan 2011).",
          ],
        },
        {
          id: "tsunamis-japan-2011-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "tsunami-causes-shoaling",
          question:
            "Using {{v = sqrt(10 * d)}}, calculate the speed in **km/h** of a tsunami travelling through water **250 m** deep on a continental shelf.",
          answer: {
            type: "number",
            value: 180,
            display: "180 km/h",
          },
          traps: [
            {
              spec: { type: "number", value: 50 },
              feedback:
                "50 is the speed in **m/s**! Remember to multiply by 3.6 to convert to **km/h**.",
            },
          ],
          hints: [
            "First calculate v in m/s: {{sqrt(10 * 250)}} = {{sqrt(2500)}} = 50 m/s.",
            "Convert 50 m/s into km/h by multiplying by 3.6.",
          ],
          solution: [
            "v = {{sqrt(10 * 250)}} = {{sqrt(2500)}} = 50 m/s.",
            "In km/h = 50 × 3.6 = **180 km/h**.",
          ],
        },
        {
          id: "tsunamis-japan-2011-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "hic-vs-lic-comparison",
          question:
            "Approximately how many people were left homeless in LIC Nepal (2015) compared with the ~450,000 initially displaced in HIC Japan (2011)?",
          options: [
            "About 150,000 homeless in Nepal",
            "About 3.5 million homeless in Nepal",
            "About 50,000 homeless in Nepal",
            "About 500,000 homeless in Nepal",
          ],
          answerIndex: 1,
          hints: [
            "Unreinforced stone, mud-mortar, and brick homes collapsed across entire mountain districts of Nepal.",
            "Recall Nepal 2015's key statistics: ~9,000 dead, ~22,000 injured, and millions made homeless.",
          ],
          explanation:
            "Roughly 3.5 million people were left homeless in Nepal 2015 because widespread unreinforced brick and stone housing collapsed across Kathmandu and rural districts — nearly eight times more homeless than in Japan 2011 despite a much smaller magnitude.",
        },
        {
          id: "tsunamis-japan-2011-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "japan-2011-impacts",
          question:
            "A coastal town had a 9.5 m seawall before March 2011, and its shoreline permanently subsided (sank) by 0.8 m during the M9.0 quake. If a 16.7 m tsunami hit minutes later, by how many **metres** did the wave overtop the lowered seawall?",
          answer: {
            type: "number",
            value: 8,
            display: "8 m",
          },
          traps: [
            {
              spec: { type: "number", value: 7.2 },
              feedback:
                "7.2 m ignores the 0.8 m coastal subsidence! Lower the seawall from 9.5 m to 8.7 m first, then subtract from 16.7 m.",
            },
          ],
          hints: [
            "First calculate the effective seawall height after 0.8 m subsidence: 9.5 − 0.8 = 8.7 m.",
            "Now subtract 8.7 m from the 16.7 m tsunami height.",
          ],
          solution: [
            "Effective seawall height after subsidence = 9.5 − 0.8 = 8.7 m.",
            "Overtopping margin = 16.7 − 8.7 = **8 m**.",
          ],
        },
        {
          id: "tsunamis-japan-2011-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "japan-2011-responses",
          question:
            "In Kamaishi, 2,994 out of 3,000 schoolchildren survived the 2011 tsunami through rehearsed uphill evacuation drills. What **percentage** of the pupils survived? (Give your answer to 1 decimal place)",
          answer: {
            type: "number",
            value: 99.8,
            display: "99.8%",
          },
          hints: [
            "Compute {{(2994 / 3000) * 100}}.",
            "Notice 6 out of 3,000 is 0.2%, so 100% − 0.2% = ?",
          ],
          solution: [
            "Survival rate = {{2994 / 3000}} × 100 = **99.8%** — famously celebrated as the 'Miracle of Kamaishi'.",
          ],
        },
        {
          id: "tsunamis-japan-2011-p2-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "japan-2011-responses",
          question:
            "Why did some Tōhoku communities like Rikuzentakata invest billions in **raising entire town sites by 10+ metres** using excavated hillside soil rather than relying solely on taller seawalls?",
          options: [
            "Excavated hillside soil stops future subduction earthquakes forever",
            "Concrete seawalls are illegal along north-eastern Japanese coasts",
            "Elevated land lowers flood exposure even if giant walls are overtopped",
            "Raising town ground guarantees coastal beaches stay completely flat",
          ],
          answerIndex: 2,
          hints: [
            "Think about 'multi-layered defence' after learning that even 10 m concrete walls can be breached.",
            "Moving buildings permanently above projected flood height reduces reliance on one single wall.",
          ],
          explanation:
            "Raising town platforms and relocating homes uphill physically removes residents from low flood zones so that even if an extreme megathrust wave overtops coastal walls, homes stay dry and safe.",
        },
        {
          id: "tsunamis-japan-2011-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "hic-vs-lic-comparison",
          question:
            "A coastal HIC has an annual GDP of $4,000 billion and suffers $120 billion in tsunami damage. Calculate its economic damage as a **percentage of GDP**.",
          answer: {
            type: "number",
            value: 3,
            display: "3%",
          },
          traps: [
            {
              spec: { type: "number", value: 30 },
              feedback:
                "Check your decimal place: 120 ÷ 4,000 = 0.03, and 0.03 × 100 = **3%** (not 30%).",
            },
          ],
          hints: [
            "Compute (120 ÷ 4,000) × 100.",
            "Cancel zeros: 12 ÷ 400 = 3 ÷ 100 = 3%.",
          ],
          solution: [
            "Economic burden = {{120 / 4000}} × 100 = **3%** of annual GDP.",
          ],
        },
        {
          id: "tsunamis-japan-2011-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "hic-vs-lic-comparison",
          question:
            "Why did international NGOs and foreign governments play a vastly larger role in immediate relief and rebuilding after Nepal 2015 than after Japan 2011?",
          options: [
            "Japan refused every single offer of foreign rescue teams in 2011",
            "Nepal had zero domestic police officers or soldiers anywhere",
            "Japan suffered almost zero physical damage to coastal settlements",
            "LIC Nepal lacked the state funds, rescue fleets, and insurance of HIC Japan",
          ],
          answerIndex: 3,
          hints: [
            "Note that Japan DID accept international teams from 20+ nations, yet funded nearly all rebuilding itself.",
            "Compare domestic tax revenue, insurance, and SDF equipment in Japan versus LIC Nepal.",
          ],
          explanation:
            "Although Japan welcomed international rescue teams, HIC Japan possessed massive domestic state reserves, 100,000 SDF troops, and insurance to fund recovery itself, whereas LIC Nepal depended heavily on foreign aid and NGOs for rescue, shelters, and reconstruction.",
        },
        {
          id: "tsunamis-japan-2011-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "tsunami-causes-shoaling",
          question:
            "A tsunami wave has a deep-ocean wavelength of **160 km** at 720 km/h and slows to **90 km/h** near the coast. Because wave frequency stays constant, wavelength shrinks by the exact same factor as speed. What is the new coastal wavelength in **km**?",
          answer: {
            type: "number",
            value: 20,
            display: "20 km",
          },
          traps: [
            {
              spec: { type: "number", value: 8 },
              feedback:
                "8 is the slowdown factor (720 ÷ 90) — now divide the original 160 km wavelength by 8 to get **20 km**.",
            },
          ],
          hints: [
            "Find the slowdown factor: 720 ÷ 90 = 8 times slower.",
            "Divide the original 160 km wavelength by 8.",
          ],
          solution: [
            "Speed ratio = {{720 / 90}} = 8 times slower.",
            "Coastal wavelength = {{160 / 8}} = **20 km** (forcing water to pile much higher!).",
          ],
        },
        {
          id: "tsunamis-japan-2011-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "japan-2011-impacts",
          question:
            "Why did a natural disaster in north-eastern Japan cause automobile assembly lines in Britain and the United States to halt production weeks later?",
          options: [
            "Tōhoku factories made specialised microchips and sensors used globally",
            "Tsunami waves crossed the entire Atlantic Ocean into British ports",
            "Japan permanently halted all international ocean shipping in 2011",
            "Global steel mines ran completely empty right after March 2011",
          ],
          answerIndex: 0,
          hints: [
            "Think about modern 'just-in-time' global supply chains for cars and electronics (Toyota, Honda, Sony).",
            "A single flooded factory making specialised automotive microchips in Tōhoku stalled overseas assembly plants.",
          ],
          explanation:
            "Modern manufacturing relies on global just-in-time supply chains; flooding and power cuts at Tōhoku factories producing specialised microchips, paint pigments, and sensors halted overseas assembly lines — a striking secondary global economic impact.",
        },
        {
          id: "tsunamis-japan-2011-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "japan-2011-responses",
          question:
            "On 11 March 2011, an offshore P-wave travelling at **6 km/s** and an S-wave at **3 km/s** both left a fault **120 km** away from a coastal hospital. How many **seconds** of early warning did the P-wave give before the destructive S-wave arrived?",
          answer: {
            type: "number",
            value: 20,
            display: "20 seconds",
          },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback:
                "40 seconds is the S-wave arrival time — subtract the P-wave's 20-second travel time to find the warning lead time.",
            },
          ],
          hints: [
            "P-wave time = 120 ÷ 6 = 20 s; S-wave time = 120 ÷ 3 = 40 s.",
            "Subtract P-wave time from S-wave time.",
          ],
          solution: [
            "P-wave arrives in {{120 / 6}} = 20 seconds; S-wave arrives in {{120 / 3}} = 40 seconds.",
            "Warning lead time = 40 − 20 = **20 seconds**.",
          ],
        },
        {
          id: "tsunamis-japan-2011-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "japan-2011-responses",
          marks: 4,
          question:
            "Evaluate whether Japan should rely primarily on **14-metre concrete seawalls** OR on **relocating homes to high ground and early-warning drills** to protect coastal communities from future tsunamis. (4 marks)",
          hints: [
            "Advantage of 14 m seawalls: blocks moderate tsunamis completely and buys extra escape minutes.",
            "Disadvantage of seawalls: massive expense, harms sea views/fisheries/tourism, and risks false security during 30–40 m megathrust waves.",
            "Advantage of relocating uphill + drills: permanent safety beyond reach of extreme waves (proven by Kamaishi 99.8% & tsunami stones), though relocating fishing communities is socially and financially challenging.",
            "Finish with a clear evaluative judgement (e.g., hillside relocation + drills backed by selective walls).",
          ],
          modelAnswer:
            "Fourteen-metre concrete seawalls have the advantage of completely blocking frequent moderate tsunamis and buying vital evacuation minutes during larger surges. However, they are extremely expensive, sever fishing towns from ocean views and tourism, damage coastal habitats, and can breed dangerous false security if a 30–40 metre megathrust wave overtops them. By contrast, permanently relocating homes to higher ground and running regular drills (such as Kamaishi's 99.8% pupil survival rate) removes residents from flood red zones altogether, although moving historic fishing communities uphill is socially difficult and costly. Overall, hillside relocation paired with S-net warnings and drills is far more reliable for saving lives, with seawalls best used selectively to defend key ports and infrastructure.",
          markScheme: [
            {
              point: "Gives a clear strength of 14 m seawalls (blocks moderate waves / buys evacuation time)",
              keywords: ["moderate", "buys", "buy", "minutes", "block", "blocks", "protect"],
            },
            {
              point: "Gives a clear limitation of seawalls (high cost, blocks sea views/tourism/fisheries, ecosystem harm, or false security)",
              keywords: ["views", "tourism", "fisheries", "false security", "overtop", "expensive", "habitats"],
            },
            {
              point: "Develops relocating uphill & drills (removes homes from red zones, Kamaishi 99.8% / tsunami stones, notes relocation challenge)",
              keywords: ["red zone", "red zones", "kamaishi", "99.8", "removes", "permanent", "hillside", "socially"],
            },
            {
              point: "Reaches a balanced evaluative judgement combining strategies sensibly",
              keywords: ["overall", "more reliable", "selectively", "whereas", "paired", "best"],
            },
          ],
          commonError:
            "Listing only criticisms of seawalls without acknowledging their real benefit against moderate waves or reaching a balanced judgement.",
        },
        {
          id: "tsunamis-japan-2011-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "hic-vs-lic-comparison",
          marks: 4,
          question:
            "Explain two economic reasons and two human/governance reasons why tectonic disasters affect an HIC (Japan 2011) very differently from an LIC (Nepal 2015). (4 marks)",
          hints: [
            "Economic 1: Absolute $ cost is far higher in HIC Japan ($235B+ vs $5B) due to dense high-value insured infrastructure.",
            "Economic 2: Relative burden (% GDP) is far worse in LIC Nepal (~25% of GDP vs ~4% in Japan), forcing heavy foreign-aid dependence.",
            "Governance/Human 1: Strict enforced aseismic building codes in Japan prevented building collapses, whereas unreinforced brick/mud homes collapsed widely in Nepal.",
            "Governance/Human 2: P-wave warnings, drills, and rapid 100,000-troop SDF + hospital capacity vs blocked mountain roads and scarce healthcare in Nepal.",
          ],
          modelAnswer:
            "Economically, HIC Japan suffered vastly higher absolute dollar losses ($235B+ vs $5B) because expensive insured factories, ports, bullet trains, and nuclear stations stood in the hazard zone. However, LIC Nepal experienced a far deeper relative shock — losing ~25% of its annual GDP compared with ~4% in Japan — leaving Nepal heavily reliant on international aid with much slower recovery. In governance and protection, Japan's strictly enforced aseismic building codes kept structures standing during M9.0 shaking, whereas unreinforced brick and mud-mortar homes collapsed across Nepal. Furthermore, Japan deployed P-wave early warnings, annual school drills, and 100,000 SDF troops with abundant hospitals, whereas mountainous landslides and limited emergency fleets slowed rescue across rural Nepal.",
          markScheme: [
            {
              point: "Higher absolute $ cost in HIC Japan ($235B+ vs $5B) due to valuable insured infrastructure",
              keywords: ["235", "5b", "insured", "infrastructure", "absolute", "expensive"],
            },
            {
              point: "Far higher % of GDP shock (~25% vs ~4%) and heavier foreign-aid dependence in LIC Nepal",
              keywords: ["25%", "4%", "gdp", "aid", "slower", "recovery"],
            },
            {
              point: "Building quality contrast (enforced aseismic codes in Japan vs unreinforced brick/mud collapse in Nepal)",
              keywords: ["aseismic", "codes", "unreinforced", "brick", "mud", "collapsed"],
            },
            {
              point: "Preparedness/healthcare contrast (P-wave warnings, drills, SDF & hospitals vs landslides & scarce rescue in Nepal)",
              keywords: ["p-wave", "drills", "sdf", "hospitals", "landslides", "rescue", "healthcare"],
            },
          ],
          commonError:
            "Forgetting to pair Japan and Nepal explicitly with data ($235B / 4% GDP vs $5B / 25% GDP).",
        },
        {
          id: "tsunamis-japan-2011-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "hic-vs-lic-comparison",
          marks: 3,
          question:
            "Explain why physical geography — not just wealth — must be considered when comparing the death tolls of Japan 2011 (~18,500) and Nepal 2015 (~9,000). (3 marks)",
          hints: [
            "Compare earthquake magnitude & energy: M9.0 in Japan released ~60× more energy than M7.8 in Nepal.",
            "Compare hazard type: coastal subduction trench generating a 40 m tsunami (>90% of Japanese deaths) vs landlocked Nepal with zero tsunami.",
            "Add Nepal's own physical amplifier: shallow focus (~8–15 km) and steep Himalayan slopes triggering landslides/avalanches.",
          ],
          modelAnswer:
            "Japan's M9.0 megathrust earthquake released roughly 60 times more seismic energy than Nepal's M7.8 quake, making the raw physical hazard dramatically larger. Crucially, Japan's offshore subduction trench generated towering tsunami waves up to 40 m that caused over 90% of its fatalities, whereas landlocked Nepal faced no tsunami at all. Meanwhile, Nepal's own physical geography — a shallow 8–15 km focus beneath steep Himalayan valleys — amplified ground shaking and triggered lethal avalanches and road-blocking landslides, showing physical hazards shape deaths alongside wealth.",
          markScheme: [
            {
              point: "Contrasts magnitude / seismic energy (M9.0 releasing ~60× more energy than M7.8)",
              keywords: ["9.0", "7.8", "60", "energy", "magnitude"],
            },
            {
              point: "Contrasts coastal subduction tsunami (>90% of Japan deaths, 40 m waves) vs landlocked Nepal (no tsunami)",
              keywords: ["tsunami", "40", "90%", "landlocked", "subduction", "offshore"],
            },
            {
              point: "Identifies Nepal's physical factors (shallow focus / steep Himalayan slopes causing landslides & avalanches)",
              keywords: ["shallow", "himalayan", "landslides", "avalanches", "steep", "valleys"],
            },
          ],
          commonError:
            "Claiming Japan had more deaths because Japan was poorer or less prepared than Nepal.",
        },
        {
          id: "tsunamis-japan-2011-p2-q15",
          kind: "mcq",
          difficulty: "core",
          guideRef: "tsunami-causes-shoaling",
          question:
            "A coastal town sits behind a gently sloping shallow continental shelf 40 km wide, while another sits beside a deep ocean drop-off only 2 km offshore. How does shelf width affect tsunami arrival?",
          options: [
            "Wide shallow shelves speed the tsunami up to over 1,500 km/h offshore",
            "Deep drop-offs eliminate shoaling completely so waves never rise",
            "Shelf width has zero effect because tsunamis travel at constant speed",
            "Wide shallow shelves slow the wave earlier, giving extra warning minutes",
          ],
          answerIndex: 3,
          hints: [
            "Remember {{v = sqrt(g * d)}}: shallow water means much slower wave speed!",
            "Crossing 40 km of shallow water at 70 km/h takes far longer than crossing 40 km of deep trench at 720 km/h.",
          ],
          explanation:
            "Because tsunami speed falls dramatically in shallow water ({{v = sqrt(g * d)}}), a wide shallow continental shelf slows the incoming wave much earlier and stretches travel time across the final kilometres compared with a steep drop-off right next to shore.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "tsunamis-japan-2011-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "tsunami-causes-shoaling",
      strategy: "Split the journey into deep-ocean and shallow-shelf legs",
      question:
        "A submarine megathrust snaps **225 km** from a port: the first **180 km** is deep ocean (**4,000 m** deep), and the final **45 km** is a shallow shelf (**250 m** deep). Using {{v = sqrt(10 * d)}} (and converting m/s to km/h via ×3.6), calculate the **total arrival time in minutes** for the tsunami to reach the port.",
      answer: {
        type: "number",
        value: 30,
        display: "30 minutes",
      },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback:
            "15 minutes is only the deep-ocean leg (or only the shallow-shelf leg) — add BOTH legs together (15 + 15 = **30 minutes**)!",
        },
        {
          spec: { type: "number", value: 18.75 },
          feedback:
            "You kept the deep-ocean 720 km/h speed for all 225 km — remember the tsunami slows to 180 km/h over the 45 km shallow shelf!",
        },
      ],
      hints: [
        "Leg 1 (deep, d = 4,000 m): find speed in m/s using {{sqrt(10 * 4000)}}, convert to km/h (×3.6), then find time for 180 km in minutes.",
        "Leg 2 (shelf, d = 250 m): find speed in m/s using {{sqrt(10 * 250)}}, convert to km/h (×3.6), then find time for 45 km in minutes.",
        "Add Leg 1 minutes + Leg 2 minutes!",
      ],
      solution: [
        "Deep ocean (4,000 m): v₁ = {{sqrt(40000)}} = 200 m/s = 720 km/h → t₁ = {{180 / 720}} × 60 = 15 minutes.",
        "Shallow shelf (250 m): v₂ = {{sqrt(2500)}} = 50 m/s = 180 km/h → t₂ = {{45 / 180}} × 60 = 15 minutes.",
        "Total arrival time = 15 + 15 = **30 minutes** (notice the short 45 km shallow leg takes as long as the 180 km deep leg!).",
      ],
    },
    {
      id: "tsunamis-japan-2011-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "tsunami-causes-shoaling",
      strategy: "Track wave-energy flux conservation",
      question:
        "Why can a tsunami moving at just **36 km/h** near the beach smash through reinforced concrete houses that easily survive 100 km/h storm winds?",
      options: [
        "Seawater is ~800 times denser than air and carries millions of tonnes in a long wall",
        "Tsunami water is superheated to 700 °C by submarine trench magma",
        "Storm winds push vertically upward while tsunamis pull buildings down",
        "Tsunamis contain solid granite boulders generated inside open-ocean swells",
      ],
      answerIndex: 0,
      hints: [
        "Compare the density of seawater (~1,025 kg/m³) with air (~1.2 kg/m³) AND compare a 10-second surfing wave with a 15-minute-long tsunami surge.",
        "Force scales with density × volume × velocity² — plus floating cars, ships, and timber act as battering rams.",
      ],
      explanation:
        "Seawater is roughly 800 times denser than air, and because a tsunami's compressed wavelength is still kilometres long, millions of tonnes of debris-laden water keep pushing forward continuously for minutes — exerting vastly greater destructive force than wind or brief surf waves.",
    },
    {
      id: "tsunamis-japan-2011-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "japan-2011-impacts",
      strategy: "Compare logarithmic magnitude energy scaling",
      question:
        "Each step of **+1.0** on the Moment Magnitude scale releases roughly **32 times** more energy (so +0.2 releases ~2× more energy). Using +1.0 = 32× and +0.2 = 2×, approximately how many times more seismic energy did Japan 2011 (**M9.0**) release than Nepal 2015 (**M7.8**)?",
      answer: {
        type: "number",
        value: 64,
        display: "64",
      },
      traps: [
        {
          spec: { type: "number", value: 34 },
          feedback:
            "On a logarithmic scale, factors **multiply**, they do not add! Compute 32 × 2 = **64** (not 32 + 2).",
        },
        {
          spec: { type: "number", value: 1.2 },
          feedback:
            "1.2 is the difference in magnitude numbers — convert +1.0 (×32) and +0.2 (×2) into an energy ratio: 32 × 2 = **64**.",
        },
      ],
      hints: [
        "Split the difference 9.0 − 7.8 = 1.2 into 1.0 + 0.2.",
        "Remember: logarithmic energy factors MULTIPLY (not add)!",
        "Multiply the +1.0 factor (32) by the +0.2 factor (2).",
      ],
      solution: [
        "Magnitude gap = 9.0 − 7.8 = +1.2 = +1.0 + 0.2.",
        "Energy multiplier = 32 × 2 = **64 times** more seismic energy released in Japan 2011 than in Nepal 2015.",
      ],
    },
    {
      id: "tsunamis-japan-2011-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "japan-2011-responses",
      strategy: "Diagnose systemic engineering failure",
      question:
        "Before 2011, engineers at Fukushima Daiichi placed emergency diesel backup generators in **coastal basements behind a 5.7 m seawall** because historical records since 1900 showed no wave above 5 m there. What fundamental risk-planning mistake did they make?",
      options: [
        "Overbuilding 40-metre walls that trapped rainwater inside coastal cooling towers",
        "Placing nuclear turbines high on mountain ridges away from cooling seawater",
        "Relying exclusively on solar panels that stopped working during March snowfall",
        "Designing defences purely for short recent records while ignoring 1,000-year geological extremes",
      ],
      answerIndex: 3,
      hints: [
        "Geological sand deposits inland near Sendai already documented the massive AD 869 Jōgan tsunami.",
        "Compare a 100-year instrument record with the recurrence interval of M9.0 subduction megathrusts.",
      ],
      explanation:
        "Designing critical infrastructure purely for ~100 years of instrumental records ignored geological evidence of rare 1,000-year M9 tsunamis (like AD 869) and created a single point of failure by putting backup generators in low basements.",
    },
    {
      id: "tsunamis-japan-2011-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "hic-vs-lic-comparison",
      strategy: "Compute relative GDP vulnerability ratio",
      question:
        "Japan's 2011 loss was **$235B** out of a **$5,875B** GDP; Nepal's 2015 loss was **$5B** out of a **$20B** GDP. How many times **larger** was Nepal's **% of GDP economic burden** compared with Japan's? (Give an exact decimal)",
      answer: {
        type: "number",
        value: 6.25,
        display: "6.25",
      },
      traps: [
        {
          spec: { type: "number", value: 47 },
          feedback:
            "47 is the ratio of Japan's absolute dollars to Nepal's ($235B ÷ $5B). Now divide Nepal's % GDP burden (25%) by Japan's (4%)!",
        },
      ],
      hints: [
        "Step 1: Find Japan's % GDP loss = (235 ÷ 5,875) × 100 = 4%.",
        "Step 2: Find Nepal's % GDP loss = (5 ÷ 20) × 100 = 25%.",
        "Step 3: Divide 25 by 4.",
      ],
      solution: [
        "Japan % GDP loss = {{235 / 5875}} × 100 = 4%.",
        "Nepal % GDP loss = {{5 / 20}} × 100 = 25%.",
        "Relative burden ratio = {{25 / 4}} = **6.25 times** heavier relative to national income in LIC Nepal.",
      ],
    },
    {
      id: "tsunamis-japan-2011-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "hic-vs-lic-comparison",
      strategy: "Balanced 6-mark PEEL essay",
      marks: 6,
      question:
        "\"A country's level of economic development is the most important factor deciding the impact of a tectonic hazard.\" To what extent do you agree? Use Japan 2011 (HIC) and Nepal 2015 (LIC) to support your judgement. (6 marks)",
      hints: [
        "Agree (Development matters hugely): strict aseismic building codes, P-wave early warnings/Shinkansen brakes, Kamaishi drills, 100,000 SDF troops, insurance & self-funded recovery (~4% GDP) in Japan vs unreinforced brick collapses, 3.5M homeless, ~25% GDP blow, and foreign-aid dependence in Nepal.",
        "Counter-argument (Physical geography & extreme hazard limits): Japan's M9.0 released ~64× more energy than Nepal's M7.8 and generated a 40 m coastal tsunami (>90% of its ~18,500 deaths) plus Fukushima meltdowns, while Nepal's shallow inland Himalayan slopes drove deadly landslides.",
        "Judgement: Reach a nuanced 'to what extent' conclusion weighing both development AND extreme physical magnitude/hazard type.",
      ],
      modelAnswer:
        "Economic development powerfully shapes how societies withstand and recover from tectonic hazards. In HIC Japan (2011), strict aseismic building codes kept skyscrapers intact through M9.0 shaking, P-wave alerts stopped 27 Shinkansen trains with zero deaths, and 100,000 SDF troops plus insurance cushioned its US$235B loss (~4% of GDP) into swift rebuilding. By contrast, in LIC Nepal (2015), poverty and weak code enforcement left unreinforced brick homes collapsing widely — leaving ~9,000 dead and 3.5 million homeless — while $5B in damage wiped out ~25% of annual GDP, creating heavy foreign-aid dependence and slow recovery. However, physical geography remains decisive too: Japan's M9.0 subduction quake released ~64 times more energy than Nepal's M7.8 collision quake and generated a 40-metre tsunami that overtopped 10-metre seawalls, causing over 90% of Japan's ~18,500 fatalities and triggering Fukushima's meltdowns. Meanwhile, landlocked Nepal faced zero tsunami yet suffered severe mountain avalanches and road-blocking landslides. Overall, I largely agree that development is the strongest controllable factor shaping building survival and recovery speed, yet extreme physical magnitude and coastal tsunamis can still overwhelm even the wealthiest HIC.",
      markScheme: [
        {
          point: "Develops HIC Japan preparedness & recovery strengths with data (aseismic codes, P-wave/Shinkansen, SDF, ~4% GDP / insurance)",
          keywords: ["aseismic", "shinkansen", "p-wave", "sdf", "insurance", "4%"],
        },
        {
          point: "Develops LIC Nepal vulnerability with data (unreinforced brick collapse, 3.5M homeless, ~25% GDP, foreign aid / slow recovery)",
          keywords: ["unreinforced", "3.5", "25%", "aid", "brick", "slow"],
        },
        {
          point: "Notes economic paradox comparing absolute US$ ($235B+ vs $5B) alongside % of GDP",
          keywords: ["235", "5b", "gdp"],
        },
        {
          point: "Counter-argument using physical severity in Japan (M9.0 / ~64× energy + 40 m tsunami causing >90% deaths & Fukushima)",
          keywords: ["64", "40", "90%", "fukushima", "overtop", "subduction"],
        },
        {
          point: "Notes Nepal's physical geography (M7.8 shallow collision, landlocked/no tsunami, Himalayan landslides/avalanches)",
          keywords: ["landlocked", "landslides", "avalanches", "collision", "7.8"],
        },
        {
          point: "Clear, justified 'to what extent' conclusion weighing both development and physical extremes",
          keywords: ["overall", "largely agree", "partly agree", "controllable", "overwhelm", "both"],
        },
      ],
      commonError:
        "Arguing 100% that wealth is all that matters (ignoring Japan's 40 m tsunami & M9.0 energy) OR failing to include paired case-study data.",
    },
    {
      id: "tsunamis-japan-2011-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "japan-2011-responses",
      strategy: "Multi-layered resilience design",
      marks: 5,
      question:
        "Design a **multi-layered tsunami resilience plan** for a coastal Japanese fishing town rebuilt after 2011, explaining why combining engineering, land-use planning, monitoring, and social preparation beats relying on any single strategy alone. (5 marks)",
      hints: [
        "Layer 1 (Monitoring): S-net offshore seafloor gauges + P-wave SMS alerts & sirens to remove underestimation delays.",
        "Layer 2 (Engineering): Moderate coastal seawalls / elevated coastal roads to block frequent waves without destroying the harbour completely.",
        "Layer 3 (Land-use zoning): Keep ports/parks in low red zones while permanently relocating homes, schools, and elderly care uphill.",
        "Layer 4 (Social preparation): Regular school/community drills (Kamaishi model) + mobility buddy systems for ageing residents.",
        "Synthesis: Explain why layered 'defence in depth' protects lives even if one barrier fails.",
      ],
      modelAnswer:
        "A resilient coastal plan needs four interlocking layers so no single failure turns fatal. First, real-time monitoring via S-net seafloor pressure gauges paired with P-wave SMS alerts and loud sirens ensures accurate wave-height forecasts minutes earlier. Second, selective hard-and-soft engineering — moderate seawalls backed by elevated coastal highways and tree buffers — blocks common surges and buys time without walling off fisheries entirely. Third, strict land-use zoning reserves low coastal red zones for daytime ports and memorial parks while permanently relocating homes, schools, and hospitals onto higher ground. Fourth, community preparation pairs Kamaishi-style drills with neighbourhood buddy systems and vertical evacuation towers to assist elderly residents with limited mobility. Combining all four layers delivers defence in depth: if an extreme 30–40 metre wave breaches the seawall, early warnings, uphill zoning, and practised drills still save lives.",
      markScheme: [
        {
          point: "Monitoring layer (S-net offshore seafloor gauges + P-wave SMS/sirens for accurate early warning)",
          keywords: ["s-net", "seafloor", "p-wave", "sms", "sirens"],
        },
        {
          point: "Selective engineering layer (moderate seawalls, elevated highways, or tree buffers without ruining fisheries)",
          keywords: ["seawalls", "elevated", "highways", "tree", "buffers", "fisheries"],
        },
        {
          point: "Land-use zoning layer (ports/parks in low red zones; homes, schools & hospitals relocated uphill)",
          keywords: ["red zones", "parks", "relocating", "relocated", "higher ground", "uphill"],
        },
        {
          point: "Social preparation layer (Kamaishi-style drills + vertical towers / buddy systems for ageing/elderly residents)",
          keywords: ["kamaishi", "drills", "elderly", "mobility", "buddy", "vertical"],
        },
        {
          point: "Explicit synthesis explaining why layered 'defence in depth' beats any single measure alone",
          keywords: ["defence in depth", "single failure", "interlocking", "breaches", "layers"],
        },
      ],
      commonError:
        "Focusing purely on building taller walls without incorporating zoning, seafloor monitoring, and ageing-population evacuation support.",
    },
    {
      id: "tsunamis-japan-2011-ch-q08",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "hic-vs-lic-comparison",
      strategy: "Apply HIC/LIC vulnerability patterns to a new NEE scenario",
      question:
        "A rapidly urbanising coastal **NEE** builds glass high-rise hotels and container ports near a subduction trench, yet leaves millions of migrant workers in unreinforced concrete slums along low river estuaries with weak sirens. What disaster pattern would geographers predict if an M8.8 tsunami struck?",
      options: [
        "Low dollar cost and zero deaths because ports sit on flat shores",
        "High absolute dollar losses AND high slum death tolls — both HIC and LIC risks",
        "High insurance payouts rebuilding all slums in under two weeks",
        "Zero tsunami shoaling because estuaries are wider than ocean trenches",
      ],
      answerIndex: 1,
      hints: [
        "Notice the two contrasting zones inside the same NEE city: wealthy commercial ports/hotels vs vulnerable unreinforced low-lying slums.",
        "Think of the 'worst of both worlds' risk profile in fast-growing NEEs.",
      ],
      explanation:
        "Fast-growing coastal NEEs often combine high-value commercial ports and hotels (creating steep absolute dollar losses like an HIC) with dense, unreinforced, unwarned informal housing (creating severe casualties and slow recovery like an LIC).",
    },
  ],
};
