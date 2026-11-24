import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Check the care label inside your collar right now: how many countries did the cotton farmer, dye mill, factory stitcher and container ship connect just to put that single shirt in your wardrobe?",
  didYouKnow: [
    "Between 2000 and 2020, global clothing production doubled to roughly 100 billion garments per year — more than 12 brand-new items for every human being alive on Earth.",
    "One pair of conventional cotton jeans can consume 7,500 to 10,000 litres of virtual water across irrigation and indigo dyeing — roughly equivalent to 60–75 days of direct Singapore household tap use.",
    "If you double the average number of times you wear an item of clothing before retiring it, you immediately cut its production water and carbon footprint per wear by 50% — with zero new technology required.",
    "At Accra's bustling Kantamanto Market in Ghana, roughly 15 million second-hand garments arrive every single week from HICs; talented local tailors upcycle millions, yet ~40% arrive too flimsy or stained to sell.",
    "Over 60% of clothing sold worldwide today contains oil-based synthetic fibres like polyester — meaning a single synthetic laundry load can shed hundreds of thousands of microscopic plastic fibres.",
  ],
  activities: [
    {
      title: "Wardrobe World-Map & Fibre Tag Audit",
      emoji: "🗺️",
      materials: [
        "12 items from your own wardrobe (T-shirts, hoodies, sportswear, jeans)",
        "Blank world outline map + 2 coloured highlighters",
        "Notebook & calculator",
      ],
      steps: [
        "Check the inside tag of 12 garments and record BOTH the 'Made in ___' country and the fibre percentages (e.g., 100% cotton vs 60% cotton / 40% polyester).",
        "Tally how many items came from each country (Bangladesh, Vietnam, China, India, Cambodia, Turkey, etc.) and plot proportional circles on your world map.",
        "Calculate the percentage of your 12 garments that contain synthetic oil-based fibres (polyester, nylon, elastane, acrylic) and the percentage that are blended fabrics (hard to recycle!).",
        "Pick your favourite durable garment and estimate its Cost per Wear (Price ÷ Total Wears so far) — compare it with the least-worn item hanging in your cupboard.",
      ],
      maths:
        "Combines proportional symbol mapping, percentage composition, and Cost-per-Wear numeracy ({{Price / Wears}}) to uncover your personal fashion footprint.",
    },
    {
      title: "10-Minute Stitch & Upcycle Repair Challenge",
      emoji: "🧵",
      materials: [
        "One garment with a loose button, small seam tear, or faded plain cotton T-shirt",
        "Basic needle, thread, scissors (or fabric paint/patch)",
      ],
      steps: [
        "Inspect your family's wardrobe for one item set aside because of a missing button, tiny tear or popped hem.",
        "Research a simple running stitch or button-sewing technique and repair the item instead of throwing it away.",
        "Calculate how many litres of virtual water (~2,700 L for a T-shirt, ~7,500 L for jeans) and how much money you saved by avoiding a replacement purchase.",
        "If every student in a Year 9 cohort of 200 pupils repaired just 2 cotton T-shirts a year instead of replacing them, calculate the cohort's combined water saving (200 × 2 × 2,700 L = 1,080,000 litres!).",
      ],
      maths:
        "Demonstrates the circular-economy multiplier: keeping 400 cotton T-shirts in circulation avoids over 1 million litres of virtual water extraction.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Where Does Your $20 Fast-Fashion T-Shirt Go?",
      svg: `<svg viewBox="0 0 560 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal stacked breakdown of a 20 dollar fast fashion T-shirt showing 55 percent brand and retail, 20 percent fabric, 15 percent factory overhead, 8 percent shipping and tax, and 2 percent worker wage"><rect x="0" y="0" width="560" height="225" rx="12" fill="var(--surface)"/><text x="280" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Price Breakdown of a Typical $20 Fast-Fashion T-Shirt</text><rect x="30" y="48" width="500" height="44" rx="6" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/><rect x="30" y="48" width="275" height="44" rx="4" fill="var(--brand)"/><text x="167" y="74" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--surface)">Brand Profit, Rent &amp; Marketing: $11.00 (55%)</text><rect x="305" y="48" width="100" height="44" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/><text x="355" y="74" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Fabric $4 (20%)</text><rect x="405" y="48" width="75" height="44" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="442" y="74" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--ink)">Factory $3</text><rect x="480" y="48" width="40" height="44" fill="var(--line)"/><rect x="520" y="48" width="10" height="44" fill="var(--bad)"/><line x1="500" y1="92" x2="500" y2="116" stroke="var(--ink-2)" stroke-width="1.3"/><text x="462" y="130" text-anchor="middle" font-size="10" fill="var(--ink-2)">Shipping &amp; Tax: $1.60 (8%)</text><line x1="525" y1="92" x2="525" y2="148" stroke="var(--bad)" stroke-width="1.8"/><polygon points="521,145 525,153 529,145" fill="var(--bad)"/><rect x="240" y="156" width="295" height="50" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="387" y="176" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--bad)">Garment Worker Wage: ~$0.40 (Just 2%!)</text><text x="387" y="194" text-anchor="middle" font-size="10" fill="var(--ink-2)">Doubling the worker's wage adds just $0.40 to the $20 tag!</text></svg>`,
      caption: "HIC brands and retailers capture over half of the retail dollar, while garment stitchers typically receive only 1%–3%.",
    },
    {
      title: "Choosing the Right Map: Choropleth vs Proportional Symbol",
      svg: `<svg viewBox="0 0 560 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side by side comparison of a choropleth map using graduated area shading versus a proportional symbol map using scaled circles"><rect x="0" y="0" width="560" height="225" rx="12" fill="var(--surface)"/><text x="280" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Thematic Maps Compared: Choropleth vs Proportional Symbol</text><rect x="20" y="38" width="252" height="172" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4"/><text x="146" y="58" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">Choropleth Map (Rates / Densities)</text><rect x="44" y="72" width="66" height="44" fill="var(--brand)" stroke="var(--surface)" stroke-width="1.5"/><rect x="110" y="72" width="66" height="44" fill="var(--brand-soft)" stroke="var(--surface)" stroke-width="1.5"/><rect x="176" y="72" width="66" height="44" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/><text x="77" y="98" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--surface)">High</text><text x="143" y="98" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Medium</text><text x="209" y="98" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-2)">Low</text><text x="34" y="138" font-size="10" fill="var(--good)">✓ Instant spatial pattern across regions</text><text x="34" y="156" font-size="10" fill="var(--bad)">✗ Hides variation inside large countries</text><text x="34" y="174" font-size="10" fill="var(--bad)">✗ Sharp abrupt jumps at borders</text><text x="34" y="194" font-size="9.5" fill="var(--ink-2)">Best for: Footprint/capita, GDP/capita</text><rect x="288" y="38" width="252" height="172" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.4"/><text x="414" y="58" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--good)">Proportional Symbols (Totals)</text><rect x="312" y="72" width="204" height="44" rx="4" fill="var(--surface)" stroke="var(--line)" stroke-width="1"/><circle cx="352" cy="94" r="18" fill="var(--good)" fill-opacity="0.75" stroke="var(--good)" stroke-width="1.5"/><circle cx="414" cy="94" r="12" fill="var(--brand)" fill-opacity="0.75" stroke="var(--brand)" stroke-width="1.5"/><circle cx="476" cy="94" r="6" fill="var(--bad)" fill-opacity="0.8"/><text x="302" y="138" font-size="10" fill="var(--good)">✓ Shows true totals (tiny states visible!)</text><text x="302" y="156" font-size="10" fill="var(--bad)">✗ Big circles can overlap in dense clusters</text><text x="302" y="174" font-size="10" fill="var(--bad)">✗ Exact values harder without a clear key</text><text x="302" y="194" font-size="9.5" fill="var(--ink-2)">Best for: Garment exports ($ bn), city pop</text></svg>`,
      caption: "Use choropleths for per-capita rates or densities, and proportional symbols for absolute totals so small high-export nations stay visible.",
    },
  ],
  history: {
    title: "How 'White Gold' Cotton Erased the World's Fourth-Largest Lake: The Aral Sea",
    story:
      "In 1960, the Aral Sea straddling Kazakhstan and Uzbekistan covered 68,000 square kilometres — teeming with sturgeon, thriving fishing ports like Moynaq, and a mild coastal microclimate. Then Soviet planners launched a vast scheme to transform arid Central Asia into a cotton powerhouse ('white gold'), digging unlined desert canals to siphon water out of the Amu Darya and Syr Darya rivers. Within four decades, over 90% of the lake vanished. Fishing boats rusted on salted sand over 100 km from the shrunken shoreline, salinity tripled until native fish perished, and winds swept toxic pesticide-laced salt dust across towns and farmland. A small ray of hope emerged in 2005 when Kazakhstan's Kok-Aral Dam revived part of the smaller Northern Aral Sea — a vivid geographical reminder both of how distant cotton choices reshape watersheds and how smart engineering can begin to heal ecosystems.",
  },
};
