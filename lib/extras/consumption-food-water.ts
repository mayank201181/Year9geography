import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Did you know that a single quarter-pound beef burger carries more hidden 'virtual water' than thirty 10-minute showers — and that Singapore engineers turn urban wastewater into ultra-pure water cleaner than bottled spring water?",
  didYouKnow: [
    "Every drop of water used in Singapore is designed to be recycled more than once through the Deep Tunnel Sewerage System and five NEWater plants — turning the city into one of the world's tightest closed urban water loops.",
    "Sending 1 kg of fresh asparagus 9,000 km by cargo aeroplane emits roughly 50 times more transport CO₂ than floating 1 kg of dried lentils the same distance on a container ship.",
    "Semakau Landfill — Singapore's offshore island landfill created by linking two islands with a 7 km rock bund — is lined with impermeable membranes so coral reefs and mangroves thrive right beside it, yet it is still projected to fill up around 2035.",
    "Global agriculture withdraws roughly 70% of all freshwater pumped by humans — far more than all factories (~20%) and household taps (~10%) combined.",
    "Marina Barrage's nine giant steel crest gates can stay closed to block ocean high tides during a tropical downpour while seven massive pumps drain excess city rainwater out to sea at up to 280 cubic metres per second.",
  ],
  activities: [
    {
      title: "Kitchen Fridge Food-Origin & Carbon Audit",
      emoji: "🥗",
      materials: [
        "10 packaged or fresh food items from your home fridge/pantry",
        "Notebook or spreadsheet + ruler",
        "World map or online distance estimator",
      ],
      steps: [
        "List 10 foods in your kitchen along with their 'Country of Origin' printed on the label.",
        "Estimate each item's approximate distance to Singapore (food miles) AND likely transport mode (sea ship, cross-border lorry, or air freight for ultra-perishable berries/fresh fish).",
        "Group the 10 items into high-carbon production (beef, lamb, cheese) vs low-carbon production (legumes, grains, vegetables, tofu).",
        "Identify ONE item with low food miles but high total emissions, and ONE item with long food miles (by container ship) but very low total emissions.",
      ],
      maths:
        "Life-cycle carbon accounting compares production emissions (kg CO₂e/kg) + transport emissions (distance × emission factor: air ≈ 50× sea). Almost everywhere, food type and farming method outweigh sea-shipping distance.",
    },
    {
      title: "One-Day Direct vs Virtual Water Diary",
      emoji: "🚿",
      materials: [
        "Timer (phone stopwatch)",
        "1-litre measuring jug or bucket",
        "Virtual water lookup table (beef 15,400 L/kg; rice 2,500 L/kg; cotton T-shirt 2,700 L; coffee 140 L)",
      ],
      steps: [
        "Time your shower for one day and estimate your direct tap water use (a standard 9 L/min shower for 8 minutes = 72 L; add ~6 L per toilet flush and ~10 L for handwashing/brushing).",
        "Compare your direct total against PUB's 2030 target of 130 litres per person per day.",
        "Now log everything you ate today (grams of meat, rice, dairy, chocolate) and calculate your hidden virtual water total.",
        "Divide your virtual water total by your direct tap total — most Year 9 students discover their hidden water footprint is 15 to 25 times larger than what comes out of their taps!",
      ],
      maths:
        "Total water footprint = Direct domestic use (L/day) + Σ(mass of item × virtual water intensity). Comparing the ratio reveals why dietary choices and cutting food waste transform water security.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Inside a NEWater Plant: The 3-Stage M-R-U Barrier",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three stage NEWater purification flow showing Microfiltration, Reverse Osmosis, and UV Disinfection"><rect x="0" y="0" width="560" height="220" rx="12" fill="var(--surface)"/><text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">How Singapore Turns Used Water into Ultra-Pure NEWater</text><rect x="16" y="64" width="84" height="78" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/><text x="58" y="95" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Treated</text><text x="58" y="110" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Used Water</text><text x="58" y="128" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">From DTSS</text><line x1="100" y1="103" x2="118" y2="103" stroke="var(--brand)" stroke-width="2"/><polygon points="118,99 126,103 118,107" fill="var(--brand)"/><rect x="128" y="54" width="112" height="98" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="184" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">STAGE 1</text><text x="184" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Microfiltration</text><text x="184" y="110" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Blocks solids,</text><text x="184" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">particles &amp;</text><text x="184" y="138" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">bacteria</text><line x1="240" y1="103" x2="258" y2="103" stroke="var(--brand)" stroke-width="2"/><polygon points="258,99 266,103 258,107" fill="var(--brand)"/><rect x="268" y="54" width="116" height="98" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="326" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">STAGE 2</text><text x="326" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Reverse Osmosis</text><text x="326" y="110" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Semi-permeable</text><text x="326" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">membrane strips</text><text x="326" y="138" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">viruses &amp; salts</text><line x1="384" y1="103" x2="402" y2="103" stroke="var(--good)" stroke-width="2"/><polygon points="402,99 410,103 402,107" fill="var(--good)"/><rect x="412" y="54" width="130" height="98" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.6"/><text x="477" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">STAGE 3</text><text x="477" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">UV Disinfection</text><text x="477" y="110" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Destroys any</text><text x="477" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">last microbes →</text><text x="477" y="138" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">Ultra-pure NEWater</text><rect x="65" y="172" width="430" height="32" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.1"/><text x="280" y="192" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">Uses: Semiconductor wafer fabs · Industrial cooling · Dry-spell reservoir blending</text></svg>`,
      caption: "Each stage removes progressively tinier contaminants, making NEWater cleaner than WHO drinking-water guidelines.",
    },
    {
      title: "Virtual Water Hidden in Everyday Products",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar comparison of virtual water in litres for beef, a cotton T-shirt, rice, chocolate and coffee"><rect x="0" y="0" width="560" height="220" rx="12" fill="var(--surface)"/><text x="280" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Hidden Virtual Water Footprint (Litres per Unit)</text><line x1="150" y1="42" x2="150" y2="188" stroke="var(--line)" stroke-width="1.2"/><line x1="150" y1="188" x2="525" y2="188" stroke="var(--line)" stroke-width="1.2"/><text x="142" y="64" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">1 kg Beef</text><rect x="150" y="50" width="338" height="20" rx="3" fill="var(--bad)"/><text x="495" y="64" font-size="10.5" font-weight="700" fill="var(--bad)">15,400 L</text><text x="142" y="96" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">1 Cotton T-Shirt</text><rect x="150" y="82" width="60" height="20" rx="3" fill="var(--brand)"/><text x="217" y="96" font-size="10.5" font-weight="700" fill="var(--ink)">2,700 L</text><text x="142" y="128" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">1 kg Rice</text><rect x="150" y="114" width="55" height="20" rx="3" fill="var(--brand)"/><text x="212" y="128" font-size="10.5" font-weight="700" fill="var(--ink)">2,500 L</text><text x="142" y="160" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)">100 g Chocolate</text><rect x="150" y="146" width="38" height="20" rx="3" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/><text x="195" y="160" font-size="10.5" font-weight="700" fill="var(--ink)">1,700 L</text><text x="142" y="184" text-anchor="end" font-size="10.5" font-weight="600" fill="var(--ink)">1 Cup Coffee</text><rect x="150" y="172" width="5" height="14" rx="2" fill="var(--good)"/><text x="162" y="184" font-size="10" font-weight="700" fill="var(--good)">140 L</text><text x="335" y="207" text-anchor="middle" font-size="10" fill="var(--ink-2)">For comparison: Singapore's 2030 direct household tap target is 130 L/person/day</text></svg>`,
      caption: "Just 1 kg of beef carries as much virtual water as nearly 118 days of direct household tap use at PUB's 130 L/day target.",
    },
  ],
  history: {
    title: "From Rationed Standpipes to NEWater: Singapore's Water Independence Story",
    story:
      "During severe droughts in 1963 and 1964, Singapore residents queued at street standpipes with metal buckets under strict water rationing, and independence in 1965 left the tiny island heavily reliant on cross-border pipes from Johor. In the 1970s, engineers first piloted reclaiming used water, but membranes were too costly and unreliable. By the late 1990s, breakthroughs in microfiltration and reverse osmosis changed the equation completely. After two years of rigorous international safety testing (passing over 150,000 scientific checks), Singapore launched NEWater in 2002 — famously celebrating National Day with 60,000 people toasting bottles of NEWater together! Paired with Marina Barrage (2008), five desalination plants and strict public conservation, Singapore transformed its greatest geographical weakness into a world-renowned blueprint for urban water security.",
  },
};
