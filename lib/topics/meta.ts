// ---------------------------------------------------------------------------
// Topic registry for Tanglin Trust School Year 9 Geography.
// Source: Middle School Curriculum Overview p. 16.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Risky World",
  "The Climate Crisis",
  "Global Issues & Interconnections",
];

export const TOPIC_META: TopicMeta[] = [
  // ============================ RISKY WORLD ===============================
  {
    id: "plate-tectonics-margins",
    title: "Earth's Structure & Plate Boundaries",
    strand: "Risky World",
    icon: "🌐",
    curriculum: "Year 9 Risky World — Earth's Structure, How the Crust Moves & Plate Boundaries/Margins",
    sections: [
      {
        id: "earths-structure-movement",
        heading: "Inside the Earth & Why Tectonic Plates Move",
        covers: "Inner core, outer core, mantle (semi-molten asthenosphere) and oceanic vs continental crust (thickness, density, age); mantle convection currents, ridge push and slab pull.",
      },
      {
        id: "constructive-conservative",
        heading: "Constructive (Divergent) & Conservative (Transform) Margins",
        covers: "Constructive margins (plates pulling apart, magma rising, Mid-Atlantic Ridge, Iceland, shield volcanoes & minor earthquakes) vs conservative margins (plates sliding past, friction/stick-slip, San Andreas Fault, earthquakes only — NO volcanoes).",
      },
      {
        id: "destructive-collision",
        heading: "Destructive (Convergent) & Collision Margins",
        covers: "Destructive subduction (denser oceanic plate sinks beneath continental plate → ocean trench, fold mountains, composite volcanoes & powerful earthquakes) vs collision (two continental plates crumple upward into fold mountains like the Himalayas — earthquakes, NO volcanoes).",
      },
      {
        id: "global-hazard-distribution",
        heading: "Global Distribution of Earthquakes & Volcanoes",
        covers: "Describing patterns on a world tectonic map (Pacific Ring of Fire, linear belts along plate margins, anomalies such as mantle-plume hotspots like Hawaii).",
      },
    ],
  },
  {
    id: "earthquakes-nepal-2015",
    title: "Earthquakes & Nepal 2015 Case Study",
    strand: "Risky World",
    icon: "🏚️",
    curriculum: "Year 9 Risky World — Earthquake Causes, Focus/Epicentre, Nepal 2015 Causes/Effects/Responses & 3 Ps",
    sections: [
      {
        id: "earthquake-causes-measurement",
        heading: "What Causes Earthquakes & How Are They Measured?",
        covers: "Pressure build-up along faults, sudden slip releasing seismic waves; focus (underground origin) vs epicentre (surface point directly above); Moment Magnitude/Richter (logarithmic energy) vs Mercalli (observed damage I–XII) scales.",
      },
      {
        id: "nepal-2015-causes-effects",
        heading: "Nepal 2015 (Gorkha): Causes, Primary & Secondary Effects",
        covers: "25 April 2015 collision of Indian & Eurasian plates, M7.8, shallow focus (~8–15 km); primary effects (~9,000 deaths, ~22,000 injured, 3.5M homeless, Kathmandu heritage & unreinforced buildings destroyed) vs secondary effects (Langtang & Everest avalanches, landslides blocking roads, economic loss ~$5B).",
      },
      {
        id: "nepal-2015-responses",
        heading: "Nepal 2015: Immediate vs Long-Term Responses",
        covers: "Immediate responses (international search & rescue from India/China/UK, emergency tents/water/food, social-media locating) vs long-term rebuilding (stricter seismic building codes, repairing roads/water supply, rebuilding heritage & tourism).",
      },
      {
        id: "earthquake-management-3ps",
        heading: "Reducing Earthquake Risk: Predict, Protect & Prepare",
        covers: "Why exact earthquake prediction remains impossible (monitoring foreshocks/radon/history only gives probabilities); aseismic engineering (cross-bracing, base isolation, shatterproof glass) and drills/emergency kits.",
      },
    ],
  },
  {
    id: "volcanoes-living-with-risk",
    title: "Volcanoes, Living with Risk & Preparation",
    strand: "Risky World",
    icon: "🌋",
    curriculum: "Year 9 Risky World — Shield vs Composite Volcanoes, Why People Live Near Volcanoes & Prediction/Preparation",
    sections: [
      {
        id: "shield-vs-composite",
        heading: "Shield vs Composite (Stratovolcano) Features",
        covers: "Shield volcanoes (constructive/hotspots, low-viscosity runny basaltic lava, gentle slopes, frequent effusive eruptions — e.g. Mauna Loa, Iceland) vs composite volcanoes (destructive margins, thick viscous acidic magma, steep alternating ash/lava layers, violent explosive eruptions — e.g. Mount Merapi, Mount Fuji).",
      },
      {
        id: "volcanic-hazards",
        heading: "Volcanic Hazards: Pyroclastic Flows, Lahars & Ash",
        covers: "Primary hazards (lava flows, pyroclastic flows up to 700°C & 100+ km/h, tephra/ashfall, volcanic gases) vs secondary hazards (lahars/volcanic mudflows, flight disruption, roof collapse & crop failure).",
      },
      {
        id: "why-live-near-volcanoes",
        heading: "Why Do People Live Close to Active Volcanoes?",
        covers: "Fertile volcanic soils (ash rich in minerals supporting high-yield farming e.g. Java/Mt Etna), geothermal energy (Iceland), tourism income, sulphur/mineral mining, plus social factors (family ties, poverty/lack of choice, faith in monitoring).",
      },
      {
        id: "predict-prepare-volcanoes",
        heading: "Predicting, Monitoring & Preparing for Eruptions",
        covers: "Warning signs (harmonic tremors on seismometers, ground bulge/tiltmeters/GPS, rising SO₂ gas emissions, thermal cameras); exclusion zones, evacuation plans, hazard maps and diversion barriers.",
      },
    ],
  },
  {
    id: "tsunamis-japan-2011",
    title: "Tsunamis & Japan 2011 Case Study",
    strand: "Risky World",
    icon: "🌊",
    curriculum: "Year 9 Risky World — Tsunami Causes, Japan 2011 Tōhoku Case Study & HIC vs LIC Hazard Comparison",
    sections: [
      {
        id: "tsunami-causes-shoaling",
        heading: "How Subduction Earthquakes Generate Tsunamis",
        covers: "Submarine megathrust fault snaps upward at a destructive margin, displacing a huge water column; open-ocean speed (~800 km/h, low wave height ~1 m) vs coastal shoaling (friction slows wave, wavelength shrinks, wave height towers to 10–40 m); coastal drawdown warning sign.",
      },
      {
        id: "japan-2011-impacts",
        heading: "Japan 2011 (Tōhoku): Causes & Primary/Secondary Impacts",
        covers: "11 March 2011 Pacific plate subducting beneath Okhotsk/Eurasian plate, M9.0; tsunami waves up to 40 m overtopping sea walls; ~18,500 dead/missing, Sendai airport & towns swept away, Fukushima Daiichi nuclear meltdowns & $235B+ economic damage.",
      },
      {
        id: "japan-2011-responses",
        heading: "Japan 2011: Immediate & Long-Term Responses",
        covers: "Early-warning SMS/TV alerts & automatic Shinkansen braking saving tens of thousands; Self-Defense Force & international rescue; long-term taller seawalls (up to 14 m), relocating homes to higher ground, nuclear safety review & renewable shift.",
      },
      {
        id: "hic-vs-lic-comparison",
        heading: "Comparing Tectonic Impacts: HIC (Japan) vs LIC (Nepal)",
        covers: "Why HICs suffer higher economic costs (expensive insured infrastructure) whereas LICs suffer higher proportional death tolls, slower recovery and heavier aid dependence (building quality, healthcare, governance, geography).",
      },
    ],
  },

  // ========================== THE CLIMATE CRISIS ==========================
  {
    id: "climate-change-science-impacts",
    title: "Climate Change: Causes & Global Impacts",
    strand: "The Climate Crisis",
    icon: "🌡️",
    curriculum: "Year 9 The Climate Crisis — What is Climate Change, Evidence, Physical Impacts & Impacts on People",
    sections: [
      {
        id: "greenhouse-effect-causes",
        heading: "Natural vs Enhanced Greenhouse Effect & Causes",
        covers: "Weather vs climate; short-wave solar radiation vs trapped outgoing long-wave (infrared) heat; natural causes (Milankovitch cycles, solar output, volcanic ash) vs human causes (burning fossil fuels CO₂, agriculture/livestock CH₄, deforestation).",
      },
      {
        id: "evidence-climate-change",
        heading: "Scientific Evidence for Climate Change",
        covers: "Direct thermometer/satellite records (~+1.2°C since pre-industrial), shrinking Arctic sea ice & retreating glaciers, rising sea levels (thermal expansion + land ice melt), ice-core CO₂ bubbles, tree rings and shifting phenology.",
      },
      {
        id: "physical-impacts",
        heading: "Physical Impacts on Earth's Systems",
        covers: "Thermal expansion & coastal flooding, intense tropical storms/heatwaves/wildfires, coral bleaching & ocean acidification, permafrost thaw (methane positive feedback loop) and shifting biomes.",
      },
      {
        id: "impacts-on-people",
        heading: "How Climate Change Impacts People Unequally",
        covers: "Low-lying nations (Maldives, Bangladesh, Singapore's coastal vulnerability), drought & crop failure in the Sahel, climate refugees, vector-borne diseases and climate injustice (lowest emitters often face the highest risk).",
      },
    ],
  },
  {
    id: "solving-climate-crisis",
    title: "Solving the Climate Crisis: Mitigation & Adaptation",
    strand: "The Climate Crisis",
    icon: "🌱",
    curriculum: "Year 9 The Climate Crisis — Mitigation Strategies, Adaptation Strategies, International Agreements & Singapore Green Plan 2030",
    sections: [
      {
        id: "mitigation-strategies",
        heading: "Mitigation: Cutting & Removing Greenhouse Gases",
        covers: "Renewable energy transition (solar, wind, hydro, nuclear), electrifying transport & improving energy efficiency, carbon capture & storage (CCS), afforestation/reforestation and reducing food/methane emissions.",
      },
      {
        id: "adaptation-strategies",
        heading: "Adaptation: Living Safely with Inevitable Change",
        covers: "Hard & soft coastal defences (sea walls, polders, mangrove restoration), drought-tolerant GM crops & drip irrigation, early-warning heat/flood systems, urban cooling & sponge cities.",
      },
      {
        id: "international-agreements",
        heading: "Global Cooperation: COP & the Paris Agreement",
        covers: "Paris Agreement 2015 target (well below 2°C, aiming for 1.5°C), nationally determined contributions (NDCs), climate finance for LICs, and challenges of global agreement (free-riding, development vs decarbonisation).",
      },
      {
        id: "singapore-green-plan-action",
        heading: "Local & Individual Action: Singapore Green Plan 2030",
        covers: "Singapore Green Plan 2030 (City in Nature, 1 million more trees, solar deployment, EV transition, coastal protection like Long Island) and evaluating individual vs systemic government/corporate action.",
      },
    ],
  },

  // ================== GLOBAL ISSUES & INTERCONNECTIONS ====================
  {
    id: "consumption-food-water",
    title: "Global Consumption, Food & Water Security",
    strand: "Global Issues & Interconnections",
    icon: "💧",
    curriculum: "Year 9 Global Issues & Interconnections — Consumption Footprints, Global Food Supply & Water Security",
    sections: [
      {
        id: "consumption-circular-economy",
        heading: "Global Consumption, Footprints & Circular Economy",
        covers: "Rising global resource consumption, ecological & carbon footprints (Earth Overshoot Day), uneven HIC vs LIC consumption, plastic & e-waste chains, and linear ('take-make-waste') vs circular economies.",
      },
      {
        id: "global-food-security",
        heading: "Global Food Chains, Food Miles & Food Security",
        covers: "Factors affecting food supply (climate, conflict, poverty, technology); why food miles alone can mislead vs total carbon footprint (e.g. beef methane & heated greenhouses vs shipped seasonal produce); Singapore's '30 by 30' agri-tech goal.",
      },
      {
        id: "global-water-scarcity",
        heading: "Water Security: Physical vs Economic Scarcity",
        covers: "Global freshwater distribution (only ~2.5% freshwater, <1% accessible), physical vs economic water scarcity, virtual water embedded in everyday goods, water stress and transboundary river tensions.",
      },
      {
        id: "water-management-singapore",
        heading: "Managing Water: Singapore's Four National Taps",
        covers: "Local catchment reservoirs (Marina Barrage), imported water (Johor), NEWater (ultra-clean reclaimed water via microfiltration & reverse osmosis) and desalination — plus demand-side water conservation.",
      },
    ],
  },
  {
    id: "fast-fashion-interconnections",
    title: "Fast Fashion & Geographical Skills",
    strand: "Global Issues & Interconnections",
    icon: "👕",
    curriculum: "Year 9 Global Issues & Interconnections — Fast Fashion Supply Chains, Social & Environmental Impacts, Slow Fashion & Geo Skills",
    sections: [
      {
        id: "global-garment-chains",
        heading: "Globalisation & Fast Fashion Supply Chains",
        covers: "How TNCs design in HICs and outsource cotton farming, dyeing and stitching to NEEs/LICs (Bangladesh, Vietnam, India) for lower labour costs and rapid micro-season turnover; containerisation & global trade.",
      },
      {
        id: "fast-fashion-impacts",
        heading: "Environmental & Social Impacts of Fast Fashion",
        covers: "Huge water consumption (~2,700 L per cotton T-shirt, Aral Sea shrinkage), toxic textile dyes, polyester microfibres & landfill mountains (Atacama/Ghana); worker exploitation, low wages & Rana Plaza 2013 collapse vs jobs/development benefits.",
      },
      {
        id: "sustainable-slow-fashion",
        heading: "Towards Sustainable & Circular Fashion",
        covers: "Slow fashion, capsule wardrobes, second-hand/upcycling, organic/recycled fibres, Fairtrade certification, supply-chain transparency and producer responsibility laws.",
      },
      {
        id: "year9-geo-skills",
        heading: "Year 9 Geographical Skills: Data, Maps & Evaluation",
        covers: "Interpreting choropleth maps, proportional symbols, climate/scatter graphs (TEA: Trend, Evidence, Anomaly), calculating percentage change & means, and structuring balanced 'To what extent' PEEL evaluations.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
