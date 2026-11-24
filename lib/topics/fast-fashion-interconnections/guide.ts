import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "fast-fashion-interconnections",
  title: "Fast Fashion & Geographical Skills",
  strand: "Global Issues & Interconnections",
  icon: "👕",
  summary: "Trace fast-fashion TNC supply chains, evaluate the Aral Sea and Rana Plaza impacts, explore slow fashion, and master Year 9 geo-skills.",
  intro:
    "A $15 cotton T-shirt bought in a Singapore mall has often travelled over 25,000 kilometres across four countries, consumed 2,700 litres of freshwater and linked rural cotton farmers, garment stitchers and global shipping ports. In this topic, we unpack how fast fashion interconnects places unevenly — and sharpen the core Year 9 geographical skills (maps, TEA graphs, numeracy and PEEL evaluation) you need to analyse any global issue.",
  guide: [
    {
      id: "global-garment-chains",
      heading: "Globalisation & Fast Fashion Supply Chains",
      discovery: {
        problem:
          "How can a global clothing brand design a T-shirt in Madrid or Stockholm, grow the cotton in India, dye and stitch it in Bangladesh, ship it 9,000 km in a steel container, and still sell it in a high-rent shopping mall for just $15?",
        idea:
          "Two engines of **globalisation** make it possible: **outsourcing** labour-intensive stitching to low-wage NEEs/LICs (where the garment worker receives only ~1%–3% of the retail price, around $0.30–$0.50 per shirt) and **containerisation** (standardised steel shipping containers that slash sea-freight cost to just a few cents per garment).",
      },
      body:
        "**Globalisation** is the growing interconnection and interdependence of people and places worldwide through trade, technology, migration and **Transnational Corporations (TNCs)** — giant companies that operate across multiple countries.\n\n" +
        "### The Fast Fashion Business Model\n" +
        "Until the 1990s, fashion brands released 2 to 4 seasonal collections per year. Modern **fast fashion** TNCs (such as Inditex/Zara, H&M and ultra-fast online retailers like Shein) turned clothing into **52 micro-seasons per year** — dropping new styles weekly or daily at bargain prices to encourage rapid impulse buying. Between 2000 and 2020, global clothing production roughly **doubled to over 100 billion garments per year**, while the average number of times a garment is worn before disposal plunged by over a third.\n\n" +
        "### Spatial Division of Labour Along the Supply Chain\n" +
        "TNCs split production globally so each stage occurs where it is cheapest or most profitable:\n\n" +
        "| Supply Chain Stage | Typical Location | Why Here? |\n" +
        "|---|---|---|\n" +
        "| **Design, Branding & HQ** | HICs (Spain, UK, USA, Sweden) | Skilled fashion graduates, media hubs, high consumer spending |\n" +
        "| **Raw Fibre Farming / Oil** | India, China, USA, Uzbekistan | Warm sunny climates for cotton; petrochemical plants for polyester |\n" +
        "| **Spinning, Dyeing & Stitching** | Bangladesh, Vietnam, India, Cambodia | Low wages, dense textile clusters, weaker environmental/labour enforcement |\n" +
        "| **Global Shipping & Logistics** | Port of Shanghai, Port of Singapore, Rotterdam | Standardised steel **containers (TEUs)** cut transport cost to pennies per shirt |\n" +
        "| **Retail & Consumption** | HICs & wealthy NEE cities | High disposable incomes and fast digital e-commerce |\n\n" +
        "### Where Does Your $20 Go?\n" +
        "In a typical **$20 fast-fashion T-shirt**, the brand's retail overhead, store rent, marketing and profit absorb roughly **$10–$12 (50%–60%)**, raw cotton and fabric cost ~$3–$4 (15%–20%), factory overhead/shipping/taxes take ~$3–$4, and the **garment worker's wage** is often just **$0.40–$0.60 (2%–3%)**. Because brands can rapidly shift orders from one supplier country to another (**footloose capital**), factories face intense pressure to keep wages and costs razor-thin.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Global fast fashion supply chain from HIC design to LIC farming and stitching, container shipping, retail and waste"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/><text x="280" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">The Global Fast Fashion Supply Chain (TNC Outsourcing)</text><rect x="18" y="42" width="118" height="74" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="77" y="61" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">1. HIC HQ &amp; Design</text><text x="77" y="78" text-anchor="middle" font-size="9.5" fill="var(--ink)">Spain / UK / USA</text><text x="77" y="93" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">52 micro-seasons</text><text x="77" y="107" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">~55% of price</text><line x1="136" y1="79" x2="154" y2="79" stroke="var(--ink-2)" stroke-width="1.8"/><polygon points="154,75 162,79 154,83" fill="var(--ink-2)"/><rect x="164" y="42" width="118" height="74" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/><text x="223" y="61" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">2. Fibre Farming</text><text x="223" y="78" text-anchor="middle" font-size="9.5" fill="var(--ink)">India / USA / China</text><text x="223" y="93" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Cotton or oil</text><text x="223" y="107" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">~2,700 L water</text><line x1="282" y1="79" x2="300" y2="79" stroke="var(--ink-2)" stroke-width="1.8"/><polygon points="300,75 308,79 300,83" fill="var(--ink-2)"/><rect x="310" y="42" width="118" height="74" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="369" y="61" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">3. Dye &amp; Stitch</text><text x="369" y="78" text-anchor="middle" font-size="9.5" fill="var(--ink)">Bangladesh / Vietnam</text><text x="369" y="93" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Low-cost factories</text><text x="369" y="107" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">~2% worker wage</text><line x1="428" y1="79" x2="446" y2="79" stroke="var(--ink-2)" stroke-width="1.8"/><polygon points="446,75 454,79 446,83" fill="var(--ink-2)"/><rect x="456" y="42" width="88" height="74" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="500" y="61" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">4. Shipping</text><text x="500" y="78" text-anchor="middle" font-size="9.5" fill="var(--ink)">Containers</text><text x="500" y="93" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Port hubs</text><text x="500" y="107" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Cents/shirt</text><path d="M 500 116 L 500 144 L 400 144" fill="none" stroke="var(--ink-2)" stroke-width="1.8"/><polygon points="402,140 394,144 402,148" fill="var(--ink-2)"/><rect x="234" y="132" width="158" height="58" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="313" y="152" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">5. Retail &amp; Rapid Use</text><text x="313" y="168" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">HIC malls &amp; online stores</text><text x="313" y="182" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Worn only 7–10 times avg</text><line x1="234" y1="161" x2="206" y2="161" stroke="var(--bad)" stroke-width="1.8"/><polygon points="206,157 198,161 206,165" fill="var(--bad)"/><rect x="18" y="132" width="178" height="58" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="107" y="152" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">6. Disposal / Exported Waste</text><text x="107" y="168" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Landfill, incineration or</text><text x="107" y="182" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Atacama / Ghana dumps</text><rect x="28" y="206" width="504" height="30" rx="6" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="280" y="225" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">High profits &amp; design cluster in HICs · Water, pollution &amp; wage pressures shift to NEEs/LICs</text></svg>`,
      diagramCaption:
        "Fast fashion separates where value is captured (HIC design and retail) from where environmental and labour costs occur (NEE/LIC farms, factories and waste sites).",
      workedExamples: [
        {
          title: "Calculating Garment Worker Share of Retail Price",
          problem:
            "A fast-fashion jacket retails in Singapore for $40. The garment worker who stitched it receives 2.5% of the retail price. How much does the worker earn per jacket?",
          steps: [
            "Convert 2.5% to a decimal: 2.5 ÷ 100 = 0.025.",
            "Multiply by retail price: 0.025 × $40 = $1.00 per jacket.",
            "Even doubling the worker's wage to $2.00 would add just $1.00 (2.5%) to the jacket's shop price!",
          ],
          answer: "$1.00 per jacket.",
          yourTurn: {
            question:
              "A cotton hoodie sells for $50 in a retail store. If the factory stitcher receives 2% of the retail price, how many dollars does the stitcher earn per hoodie?",
            answer: { type: "number", value: 1, display: "$1" },
            solution: "2% of $50 = 0.02 × 50 = $1.",
          },
        },
        {
          title: "Explaining Why Containerisation Powered Fast Fashion",
          problem:
            "Explain how the invention of standardised shipping containers enabled TNCs to outsource garment manufacturing thousands of kilometres away.",
          steps: [
            "Standardised steel containers move seamlessly between ships, cranes, trains and lorries without unpacking individual boxes (intermodal freight).",
            "This slashed port loading times, theft and per-garment freight costs to just cents per T-shirt, making cheap overseas wages far more profitable than local HIC factories.",
          ],
          answer:
            "Intermodal containers cut loading time and sea-freight cost to pennies per garment, making long-distance outsourcing to lower-wage countries highly profitable.",
        },
      ],
      keyPoints: [
        "Fast fashion TNCs keep high-profit design, marketing and retail in HICs while outsourcing farming, dyeing and stitching to NEEs/LICs like Bangladesh, Vietnam and India.",
        "Brands shifted from 2–4 seasons to 52 micro-seasons per year, doubling global garment output to ~100 billion items annually.",
        "Containerisation made intercontinental shipping cheap and predictable, powering globalised garment chains.",
        "Garment workers typically receive only ~1%–3% of a fast-fashion item's retail price because footloose TNCs pressure supplier factories to cut costs.",
      ],
      whyItWorks:
        "Understanding the spatial division of labour explains why 'cheap' fashion is never truly cheap: the real economic, social and ecological costs are externalised onto distant rivers, ecosystems and low-paid workers.",
      strategies: [
        "Follow the Money & Follow the Matter — trace BOTH where the retail dollar goes and where the raw cotton/oil physically travels.",
        "Use Exact Geographical Vocabulary — terms like TNC, outsourcing, containerisation, micro-seasons and spatial division of labour immediately elevate Year 9 explanations.",
      ],
      thinkDeeper:
        "If doubling a garment worker's wage on a $20 T-shirt adds only around $0.40 to $0.60 to the shop price, why don't all fast-fashion TNCs automatically raise factory pay tomorrow?",
    },
    {
      id: "fast-fashion-impacts",
      heading: "Environmental & Social Impacts of Fast Fashion",
      discovery: {
        problem:
          "In 1960, the Aral Sea in Central Asia was the fourth-largest lake on Earth — bigger than Switzerland and home to bustling fishing ports. By 2010, fishing trawlers lay rusted on dry salty sand 100 km from any water. What everyday wardrobe item drove one of Earth's worst ecological disasters?",
        idea:
          "**Cotton!** Starting in the 1960s, planners diverted the **Amu Darya** and **Syr Darya** rivers feeding the Aral Sea to irrigate vast desert cotton plantations. Because a single conventional cotton T-shirt requires roughly **2,700 litres** of freshwater, draining those rivers shrank the Aral Sea by **~90%**, destroying fisheries and unleashing toxic dust storms.",
      },
      body:
        "Fast fashion generates huge **environmental** and **social** consequences across every stage of a garment's life cycle — alongside real economic trade-offs that geographers must weigh carefully.\n\n" +
        "### Environmental Impacts\n" +
        "1. **Extreme Water Depletion**: Growing and dyeing **one cotton T-shirt uses ~2,700 litres** of water (equivalent to one person's drinking water for ~2.5 years), and **one pair of jeans uses ~7,500–10,000 litres**. Irrigating cotton in arid Central Asia diverted the Amu Darya and Syr Darya rivers, shrinking the **Aral Sea by ~90%**.\n" +
        "2. **Toxic Textile Dyes**: Textile dyeing and finishing cause roughly **20% of global industrial water pollution**. Untreated dyes and heavy metals (such as chromium and lead) turn rivers near factory belts — like Dhaka's **Buriganga River** — black or violet, killing aquatic life and contaminating local drinking water.\n" +
        "3. **Synthetic Microfibres & Carbon Emissions**: Over **60%** of modern garments contain synthetic plastics (**polyester, nylon, acrylic**) made from crude oil. Washing synthetic clothes sheds hundreds of thousands of invisible **microplastic fibres** per load into rivers and marine food chains. Globally, the fashion industry generates **~8%–10% of all carbon emissions**.\n" +
        "4. **Landfill Mountains**: Fast fashion produces vast textile waste. Unsold garments and unwanted HIC 'charity' bales pile up in open dumps such as Chile's **Atacama Desert** (~39,000 tonnes/year) and around **Kantamanto Market in Accra, Ghana**, where ~40% of imported used clothes are too poor quality to resell and clog drains and beaches.\n\n" +
        "### Social Impacts: Exploitation vs Development (A Balanced View)\n" +
        "- **Severe Negatives (Exploitation & Safety Failures)**: Tight TNC deadlines and rock-bottom order prices lead to poverty wages, 12–14 hour shifts and neglected building safety. On **24 April 2013**, the eight-storey **Rana Plaza** garment factory complex in Dhaka, Bangladesh collapsed after structural cracks were ignored by owners — killing **1,134 workers** and injuring over **2,500**, sparking global outrage.\n" +
        "- **Real Economic Positives (Why Geographers Avoid Simple Boycotts)**: At the same time, Bangladesh's ready-made garment (RMG) industry employs **over 4 million people** (the majority women, gaining financial independence), generates **over 80% of Bangladesh's export earnings**, and has funded rapid rises in literacy, healthcare and poverty reduction via the **multiplier effect**. That is why ethical geographers push for **safer factories and living wages** rather than pulling jobs out of LICs altogether.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four major environmental and social impacts of fast fashion: 2700 L water and Aral Sea, toxic dyes and microfibres, Atacama and Ghana landfills, and Rana Plaza 2013"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/><text x="280" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Fast Fashion's Four Global Footprint Pressures</text><rect x="20" y="38" width="252" height="92" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="34" y="57" font-size="11.5" font-weight="700" fill="var(--brand)">1. Water &amp; The Aral Sea</text><text x="34" y="75" font-size="10" fill="var(--ink)">• ~2,700 L per cotton T-shirt</text><text x="34" y="91" font-size="10" fill="var(--ink)">• ~7,500+ L per pair of jeans</text><text x="34" y="107" font-size="10" fill="var(--ink-2)">• Cotton irrigation shrank Aral Sea ~90%</text><text x="34" y="121" font-size="10" fill="var(--ink-2)">• Salt &amp; pesticide dust storms</text><rect x="288" y="38" width="252" height="92" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="302" y="57" font-size="11.5" font-weight="700" fill="var(--bad)">2. Dyes, Carbon &amp; Microfibres</text><text x="302" y="75" font-size="10" fill="var(--ink)">• ~20% of global industrial wastewater</text><text x="302" y="91" font-size="10" fill="var(--ink)">• ~8%–10% of global carbon emissions</text><text x="302" y="107" font-size="10" fill="var(--ink-2)">• &gt;60% clothes use oil-based polyester</text><text x="302" y="121" font-size="10" fill="var(--ink-2)">• Washing sheds marine microplastics</text><rect x="20" y="142" width="252" height="94" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="34" y="161" font-size="11.5" font-weight="700" fill="var(--bad)">3. Global Textile Landfills</text><text x="34" y="179" font-size="10" fill="var(--ink)">• ~100 billion garments made/year</text><text x="34" y="195" font-size="10" fill="var(--ink)">• Atacama Desert (Chile) dumps</text><text x="34" y="211" font-size="10" fill="var(--ink-2)">• Kantamanto / Accra (Ghana) waste</text><text x="34" y="225" font-size="10" fill="var(--ink-2)">• Synthetics take 200+ yrs to decay</text><rect x="288" y="142" width="252" height="94" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="302" y="161" font-size="11.5" font-weight="700" fill="var(--ink)">4. Social Trade-Off: Rana Plaza</text><text x="302" y="179" font-size="10" fill="var(--bad)">✗ 2013 collapse: 1,134 workers killed</text><text x="302" y="195" font-size="10" fill="var(--bad)">✗ Poverty wages &amp; long overtime</text><text x="302" y="211" font-size="10" fill="var(--good)">✓ &gt;4M Bangladesh jobs (mostly women)</text><text x="302" y="225" font-size="10" fill="var(--good)">✓ &gt;80% of exports lifting families</text></svg>`,
      diagramCaption:
        "Fast fashion creates heavy ecological burdens and severe labour abuses (Rana Plaza 2013), yet also provides vital export income and women's employment in NEEs/LICs.",
      workedExamples: [
        {
          title: "Calculating Wardrobe Virtual Water Footprint",
          problem:
            "A teenager buys 8 new conventional cotton T-shirts (2,700 L each) and 2 pairs of cotton jeans (7,500 L each) over a year. (a) Calculate the total virtual water used. (b) If one person drinks 3 litres of water per day, roughly how many days of drinking water does that represent?",
          steps: [
            "T-shirts: 8 × 2,700 = 21,600 L.",
            "Jeans: 2 × 7,500 = 15,000 L.",
            "Total virtual water = 21,600 + 15,000 = 36,600 litres.",
            "Days of drinking water = {{36600 / 3}} = 12,200 days (over 33 years of drinking water!).",
          ],
          answer: "36,600 litres (12,200 days of drinking water).",
          yourTurn: {
            question:
              "A shopper buys 5 cotton T-shirts (2,700 L each) and 1 pair of jeans (7,500 L). What is the total water footprint in litres?",
            answer: { type: "number", value: 21000, display: "21000 L" },
            solution: "T-shirts: 5 × 2,700 = 13,500 L. Add 1 pair of jeans: 13,500 + 7,500 = 21,000 L.",
          },
        },
        {
          title: "Weighing Social Costs vs Economic Benefits in Bangladesh",
          problem:
            "Give one social cost and one economic benefit of Bangladesh's garment export sector.",
          steps: [
            "Social cost: weak enforcement of safety and wage standards led to tragedies like the 2013 Rana Plaza collapse (1,134 deaths) alongside long shifts and low pay.",
            "Economic benefit: the sector creates over 4 million jobs (empowering millions of women with independent income) and earns >80% of Bangladesh's foreign export revenue.",
          ],
          answer:
            "Cost: unsafe factories (Rana Plaza 2013) and low wages. Benefit: >4 million jobs (mostly women) and >80% of export earnings lifting families out of poverty.",
        },
      ],
      keyPoints: [
        "One cotton T-shirt requires ~2,700 L of freshwater; desert cotton irrigation diverted the Amu Darya & Syr Darya, shrinking the Aral Sea by ~90%.",
        "Fast fashion causes ~20% of global industrial wastewater pollution, ~8%–10% of carbon emissions, and marine polyester microfibre shedding.",
        "Exported unsold/charity clothing creates massive textile waste mountains in places like Chile's Atacama Desert and Accra, Ghana.",
        "The 2013 Rana Plaza collapse (1,134 deaths) exposed deadly safety failures, yet Bangladesh's garment sector also supports >4 million jobs and >80% of exports.",
      ],
      whyItWorks:
        "Holding both sides in mind — ecological destruction and labour exploitation alongside vital LIC employment — is the hallmark of mature Year 9 geographical evaluation.",
      strategies: [
        "Avoid Single-Fibre Traps — switching from cotton to virgin polyester saves irrigation water, but creates fossil-fuel CO₂ and marine microplastics! Always check trade-offs.",
        "Link Case Studies to Exact Numbers — quote ~2,700 L, ~90% Aral Sea loss, Rana Plaza 2013 (1,134 deaths) and >4M Bangladesh jobs for top PEEL evidence.",
      ],
      thinkDeeper:
        "Donating unwanted fast-fashion clothes to charity bins feels virtuous, yet ~40% of bales shipped to Ghana's Kantamanto Market end up dumped as rubbish. Why does charity donation fail to solve fast fashion's overproduction problem?",
    },
    {
      id: "sustainable-slow-fashion",
      heading: "Towards Sustainable & Circular Fashion",
      discovery: {
        problem:
          "Maya buys a cheap $12 shirt and wears it 4 times before it loses shape and is thrown away. Ravi buys a durable $48 shirt and wears it 60 times over three years. Whose shirt actually has the lower 'cost per wear' AND the smaller environmental footprint per wear?",
        idea:
          "Maya pays {{12 / 4}} = **$3.00 per wear**, while Ravi pays {{48 / 60}} = **$0.80 per wear** — nearly four times cheaper per wear! And by wearing one shirt 60 times instead of buying 15 disposable shirts, Ravi slashes water, dye and carbon footprints by over 90%.",
      },
      body:
        "Transforming fashion from a linear *take–make–wear-7-times–dump* industry into a sustainable, ethical system requires action from **consumers**, **brands** and **governments** working together:\n\n" +
        "### 1. Consumer & Wardrobe Strategies (Slow Fashion)\n" +
        "- **Slow fashion & capsule wardrobes**: buying fewer, timeless, durable garments designed to last years rather than chasing 52 micro-seasons. Simply **doubling the number of times a garment is worn cuts its carbon and water footprint per wear by ~50%**!\n" +
        "- **Repair, swap, rent & second-hand (thrifting)**: mending hems/buttons, buying pre-loved clothing (e.g., Refash or Cloop swaps in Singapore) and renting formal outfits extend garment life with zero new farming or dyeing.\n" +
        "- **Upcycling**: creatively transforming damaged or discarded textiles into higher-value new designs (unlike downcycling into rags).\n" +
        "- **Care habits**: washing clothes less often, on cold cycles, line-drying instead of tumble-drying, and using **microfibre-catching wash bags/filters** when washing synthetic sportswear.\n\n" +
        "### 2. Better Materials & Ethical Certification\n" +
        "- **Organic cotton**: grown without synthetic pesticides or chemical fertilisers, protecting soil health and farmworkers' lungs (though still requires water unless rain-fed).\n" +
        "- **Recycled fibres (rPET / recycled cotton) & closed-loop lyocell (Tencel)**: divert plastic bottles or textile scraps from landfill and recycle ~99% of water/solvents in closed-loop pulp mills.\n" +
        "- **Fairtrade Cotton & ethical standards**: guarantees cotton farmers a **Fairtrade Minimum Price** (shielding them from market crashes) plus a **Fairtrade Premium** invested in community schools, clinics and clean water.\n\n" +
        "### 3. Structural Industry & Government Solutions\n" +
        "- **Legally Binding Safety Accords**: After Rana Plaza (2013), over 200 global brands signed the **Bangladesh Accord on Fire and Building Safety**, funding independent engineers to inspect and repair thousands of factories — proving binding rules beat voluntary checklists.\n" +
        "- **Supply-Chain Transparency**: Publishing full Tier 1–3 factory lists (" +
        "*'Who Made My Clothes?'*) lets journalists, unions and shoppers verify wages and wastewater treatment instead of falling for vague **greenwashing** (misleading 'eco' marketing claims).\n" +
        "- **Extended Producer Responsibility (EPR) & Regulation**: Laws such as the EU's upcoming **Digital Product Passports**, bans on destroying unsold stock, and France's **repair bonus** force brands to pay for collection, repair and recycling at end-of-life.",
      diagram: `<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sustainable and circular fashion hierarchy showing Wear Longer, Repair and Reuse, Better Materials, Fairtrade and EPR Laws"><rect x="0" y="0" width="560" height="245" rx="12" fill="var(--surface)"/><text x="280" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Building Circular &amp; Ethical Fashion (3 Action Levels)</text><rect x="20" y="42" width="164" height="150" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.6"/><text x="102" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">1. Citizens (Slow)</text><text x="32" y="84" font-size="10" fill="var(--ink)">• Capsule wardrobe</text><text x="32" y="102" font-size="10" fill="var(--ink)">• Wear 2× longer (−50%)</text><text x="32" y="120" font-size="10" fill="var(--ink)">• Repair, swap &amp; thrift</text><text x="32" y="138" font-size="10" fill="var(--ink)">• Upcycle old fabrics</text><text x="32" y="156" font-size="10" fill="var(--ink)">• Cold wash &amp; filters</text><text x="102" y="180" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">Cuts demand at source</text><rect x="198" y="42" width="164" height="150" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.6"/><text x="280" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">2. Brands (Design)</text><text x="210" y="84" font-size="10" fill="var(--ink)">• Organic / recycled fibre</text><text x="210" y="102" font-size="10" fill="var(--ink)">• Closed-loop dyeing</text><text x="210" y="120" font-size="10" fill="var(--ink)">• Fairtrade certification</text><text x="210" y="138" font-size="10" fill="var(--ink)">• Living wages paid</text><text x="210" y="156" font-size="10" fill="var(--ink)">• Open factory lists</text><text x="280" y="180" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">Stops greenwashing</text><rect x="376" y="42" width="164" height="150" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.6"/><text x="458" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">3. Laws (Systemic)</text><text x="388" y="84" font-size="10" fill="var(--ink)">• Bangladesh Accord</text><text x="388" y="102" font-size="10" fill="var(--ink)">• EPR producer fees</text><text x="388" y="120" font-size="10" fill="var(--ink)">• Ban burning unsold</text><text x="388" y="138" font-size="10" fill="var(--ink)">• Digital passports</text><text x="388" y="156" font-size="10" fill="var(--ink)">• Repair subsidies</text><text x="458" y="180" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Enforces scale &amp; fairness</text><rect x="20" y="204" width="520" height="28" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.1"/><text x="280" y="222" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Most Sustainable Garment = The One Already Hanging in Your Wardrobe!</text></svg>`,
      diagramCaption:
        "True circular fashion links slower consumer habits with transparent, Fairtrade brand supply chains and binding producer-responsibility laws.",
      workedExamples: [
        {
          title: "Calculating Cost Per Wear & Footprint Per Wear",
          problem:
            "A cheap fast-fashion jumper costs $18, emits 12 kg CO₂e and is worn 6 times. A durable wool/organic-cotton jumper costs $72, emits 16 kg CO₂e and is worn 80 times. Compare both (a) cost per wear and (b) CO₂e per wear.",
          steps: [
            "Fast-fashion jumper: cost/wear = {{18 / 6}} = $3.00; CO₂e/wear = {{12 / 6}} = 2.0 kg CO₂e/wear.",
            "Durable jumper: cost/wear = {{72 / 80}} = $0.90; CO₂e/wear = {{16 / 80}} = 0.2 kg CO₂e/wear.",
            "The durable jumper is over 3× cheaper per wear and produces 10× less CO₂e per wear!",
          ],
          answer: "Fast fashion: $3.00 and 2.0 kg CO₂e/wear. Durable: $0.90 and 0.2 kg CO₂e/wear.",
          yourTurn: {
            question:
              "A durable jacket costs $90 and is worn 75 times over four years. What is its cost per wear in dollars? (Give your answer as a decimal.)",
            answer: { type: "number", value: 1.2, display: "$1.2" },
            solution: "Cost per wear = {{90 / 75}} = $1.20 (or $1.2).",
          },
        },
        {
          title: "Spotting Greenwashing vs Genuine Transparency",
          problem:
            "Brand X launches a 'Conscious Line' of 50 T-shirts made with 20% recycled polyester while still releasing 1,000 new fast-fashion styles every week and keeping factory addresses secret. Why do geographers call this greenwashing?",
          steps: [
            "Greenwashing uses eco-friendly branding on a tiny fraction of products to distract from an unchanged, high-volume linear business model.",
            "Without publishing factory lists, proving living wages, or cutting total overproduction, a small 'green' capsule does not make the TNC sustainable.",
          ],
          answer:
            "It markets a tiny eco-line while hiding supply chains and maintaining massive weekly overproduction — classic greenwashing.",
        },
      ],
      keyPoints: [
        "Slow fashion reduces overproduction via capsule wardrobes, repair, thrifting, swapping and upcycling; wearing clothes 2× longer halves footprint per wear.",
        "Better materials (organic cotton, closed-loop Tencel, recycled fibres) reduce impacts, though every fibre has trade-offs (e.g., recycled polyester still sheds microfibres).",
        "Fairtrade guarantees farmers a minimum price plus a community premium; binding rules like the Bangladesh Accord improved building safety far more than voluntary codes.",
        "Supply-chain transparency and Extended Producer Responsibility (EPR) laws tackle greenwashing and hold TNCs accountable for waste.",
      ],
      whyItWorks:
        "Combining inner-loop habits (wear longer, repair, reuse) with binding laws (Accord, EPR) solves the 'collective action' problem: ethical brands are no longer undercut by polluters when every brand must follow the same safety and waste rules.",
      strategies: [
        "Check for Greenwashing — ask three questions: What % of the brand's line is certified? Are factories publicly named? Are total garment volumes falling?",
        "Scale Your Solutions — organise answers across Individual, Corporate/Brand and Government/International levels for top evaluation marks.",
      ],
      thinkDeeper:
        "Why might low-income families in HICs struggle to afford expensive slow-fashion ethical brands — and how do second-hand markets, repair schemes and producer laws help make sustainable fashion fairer for everyone?",
    },
    {
      id: "year9-geo-skills",
      heading: "Year 9 Geographical Skills: Data, Maps & Evaluation",
      discovery: {
        problem:
          "Look at a world choropleth map shading India a medium colour for ecological footprint (1.2 gha/person). Does every resident in Mumbai and rural Bihar have an ecological footprint of 1.2 gha? And if global clothing output rose from 50 billion items in 2000 to 100 billion in 2020, is that a 50% increase or a 100% increase?",
        idea:
          "Two classic Year 9 geo-skills traps caught in one go! First, a **choropleth map** averages whole countries, hiding huge rich–poor gaps *within* a nation. Second, percentage change divides by the **original** value: {{(100 - 50) / 50 * 100}} = **+100%** increase (doubling = +100%, NOT +50%!).",
      },
      body:
        "Strong geographers back every argument with maps, graphs, calculations and balanced evaluation. Master these four core Year 9 toolkit skills:\n\n" +
        "### 1. Thematic Maps: Choropleth vs Proportional Symbols\n" +
        "- **Choropleth maps** shade entire regions/countries on a graduated colour scale (darker = higher density or rate, e.g., water stress or footprint per capita).\n" +
        "  - *Strength*: immediate visual spatial pattern across the globe.\n" +
        "  - *Limitations*: **hides internal variation** inside large countries (e.g., wealthy coastal cities vs rural regions) and creates false sharp jumps at national borders.\n" +
        "- **Proportional symbol maps** place circles or bars whose **size scales with total magnitude** (e.g., total garment exports in US$ billions).\n" +
        "  - *Strength*: shows true totals without being distorted by a country's land area (tiny Singapore or Bangladesh stands out clearly!).\n" +
        "  - *Limitation*: big symbols can overlap in dense clusters and exact values are harder to read without a key.\n\n" +
        "### 2. Analysing Graphs Using T-E-A\n" +
        "Whenever an exam asks you to *'Describe the pattern shown in the graph'* (line graph, bar chart, scatter graph or climate graph), apply **TEA**:\n" +
        "- **T — Trend**: state the overall direction or correlation (*'strong positive correlation'*, *'steady upward trend from 2000 to 2024'*).\n" +
        "- **E — Evidence**: quote at least two exact figures with units from BOTH axes — and calculate the change or percentage change!\n" +
        "- **A — Anomaly**: identify any data point that breaks the main pattern (e.g., a sharp dip during 2020 COVID lockdowns or a high-GDP outlier with low emissions) and quote its exact value.\n\n" +
        "### 3. Essential Geographical Numeracy\n" +
        "- **Percentage change**: {{((New - Old) / Old) * 100}}% — **always** divide by the **Old (starting)** value!\n" +
        "- **Mean**: sum of all values ÷ count of values (great overall average, but distorted by extreme anomalies).\n" +
        "- **Median**: middle value once sorted in order (resistant to extreme outliers).\n" +
        "- **Range**: Maximum − Minimum (shows spread of data).\n\n" +
        "### 4. Structuring 'To What Extent' PEEL Evaluations\n" +
        "For 6-mark or 8-mark evaluation questions, never write a one-sided rant:\n" +
        "1. **Opening Judgement**: State your stance clearly (*'I agree to a large / partial / limited extent…'*).\n" +
        "2. **PEEL Paragraph 1 (Agreeing Side)**: **P**oint → **E**vidence (named case study + numbers) → **E**xplain (causal chain: *'this leads to… which means…'*) → **L**ink back to question.\n" +
        "3. **PEEL Paragraph 2 (Counter-Argument)**: Use *'However, on the other hand…'* with equally crisp evidence and explanation.\n" +
        "4. **Weighed Conclusion**: Decide *which* factor matters most (e.g., short-term vs long-term, or why combining strategies wins) without introducing random new topics.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Annotated TEA scatter and line graph demonstrating Trend, Evidence with numbers, and an Anomaly outlier"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/><text x="280" y="22" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">TEA Graph Analysis: Global Clothing Output (2000–2024)</text><line x1="64" y1="42" x2="64" y2="196" stroke="var(--ink-2)" stroke-width="1.5"/><line x1="64" y1="196" x2="360" y2="196" stroke="var(--ink-2)" stroke-width="1.5"/><line x1="64" y1="158" x2="360" y2="158" stroke="var(--line)" stroke-dasharray="3 3"/><line x1="64" y1="120" x2="360" y2="120" stroke="var(--line)" stroke-dasharray="3 3"/><line x1="64" y1="82" x2="360" y2="82" stroke="var(--line)" stroke-dasharray="3 3"/><line x1="64" y1="44" x2="360" y2="44" stroke="var(--line)" stroke-dasharray="3 3"/><text x="56" y="200" text-anchor="end" font-size="9.5" fill="var(--ink-2)">0</text><text x="56" y="162" text-anchor="end" font-size="9.5" fill="var(--ink-2)">40</text><text x="56" y="124" text-anchor="end" font-size="9.5" fill="var(--ink-2)">80</text><text x="56" y="86" text-anchor="end" font-size="9.5" fill="var(--ink-2)">120</text><text x="56" y="48" text-anchor="end" font-size="9.5" fill="var(--ink-2)">160 bn</text><text x="80" y="213" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">2000</text><text x="148" y="213" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">2008</text><text x="216" y="213" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">2016</text><text x="276" y="213" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">2020</text><text x="344" y="213" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">2024</text><polyline points="80,148 148,125 216,102 276,120 344,78" fill="none" stroke="var(--brand)" stroke-width="2.5"/><circle cx="80" cy="148" r="4.5" fill="var(--brand)"/><circle cx="148" cy="125" r="4.5" fill="var(--brand)"/><circle cx="216" cy="102" r="4.5" fill="var(--brand)"/><circle cx="276" cy="120" r="6" fill="var(--bad)" stroke="var(--surface)" stroke-width="1.5"/><circle cx="344" cy="78" r="4.5" fill="var(--brand)"/><line x1="276" y1="126" x2="276" y2="150" stroke="var(--bad)" stroke-width="1.4"/><text x="276" y="164" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">2020 Anomaly</text><text x="276" y="176" text-anchor="middle" font-size="9" fill="var(--bad)">(COVID dip: 80 bn)</text><rect x="374" y="42" width="168" height="174" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/><text x="386" y="62" font-size="11" font-weight="700" fill="var(--brand)">T — Trend</text><text x="386" y="77" font-size="9.5" fill="var(--ink)">Strong overall rise</text><text x="386" y="90" font-size="9.5" fill="var(--ink)">from 2000 to 2024.</text><text x="386" y="114" font-size="11" font-weight="700" fill="var(--good)">E — Evidence</text><text x="386" y="129" font-size="9.5" fill="var(--ink)">50 bn (2000) to</text><text x="386" y="142" font-size="9.5" fill="var(--ink)">125 bn (2024): +150%.</text><text x="386" y="166" font-size="11" font-weight="700" fill="var(--bad)">A — Anomaly</text><text x="386" y="181" font-size="9.5" fill="var(--ink)">2020 dipped to 80 bn</text><text x="386" y="194" font-size="9.5" fill="var(--ink)">during global lockdowns.</text><text x="212" y="236" text-anchor="middle" font-size="10" fill="var(--ink-2)">Illustrative trend data (billions of garments/year)</text></svg>`,
      diagramCaption:
        "Always check all three TEA letters: overall Trend, exact numerical Evidence with units, and any Anomaly that breaks the pattern.",
      workedExamples: [
        {
          title: "Calculating Percentage Change & Mean on Fashion Export Data",
          problem:
            "A factory's monthly garment output (in thousands of shirts) over 5 months was: 40, 44, 48, 36, 52. (a) Calculate the mean monthly output. (b) Calculate the percentage increase from Month 1 (40) to Month 5 (52).",
          steps: [
            "Sum = 40 + 44 + 48 + 36 + 52 = 220 thousand shirts.",
            "Mean = {{220 / 5}} = 44 thousand shirts.",
            "Percentage change from 40 to 52 = {{(52 - 40) / 40 * 100}} = {{12 / 40 * 100}} = +30%.",
          ],
          answer: "Mean = 44 thousand shirts; Percentage increase = +30%.",
          yourTurn: {
            question:
              "Annual garment exports from Country K rose from $25 billion in 2015 to $40 billion in 2023. Calculate the percentage increase.",
            answer: { type: "number", value: 60, display: "60%" },
            solution: "Change = 40 − 25 = 15. Divide by original (25): {{15 / 25 * 100}} = 60%.",
          },
        },
        {
          title: "Writing a 3-Mark TEA Description",
          problem:
            "Using the graph above (2000: 50 bn, 2016: 100 bn, 2020: 80 bn, 2024: 125 bn), write a full 3-mark TEA description.",
          steps: [
            "Trend (1 mark): Global clothing production shows a steep overall upward trend between 2000 and 2024.",
            "Evidence (1 mark): Output rose from 50 billion garments in 2000 to 125 billion in 2024, an increase of 75 billion (+150%).",
            "Anomaly (1 mark): However, 2020 is a clear anomaly where output dipped sharply to 80 billion garments during COVID-19 lockdowns before rebounding.",
          ],
          answer:
            "Steep upward trend (T) from 50 bn in 2000 to 125 bn in 2024 (+150%) (E), with an anomalous dip to 80 bn in 2020 (A).",
        },
      ],
      keyPoints: [
        "Choropleth maps show regional rates clearly but hide variation inside countries; proportional symbol maps show true totals independent of land area.",
        "Always describe graphs with TEA: Trend (overall pattern), Evidence (quoted numbers + units + change), Anomaly (outlier that breaks the pattern).",
        "Percentage change = ((New − Old) ÷ Old) × 100 — always divide by the ORIGINAL value, never the new value!",
        "Structure 'To what extent' questions with an opening thesis, balanced PEEL paragraphs for both sides, and a weighed final judgement.",
      ],
      whyItWorks:
        "Examiners award top bands for precision and balance: TEA prevents vague 'it goes up' descriptions, accurate percentage change turns raw numbers into evidence, and PEEL guarantees your argument flows logically from claim to case study to conclusion.",
      strategies: [
        "Tick Off T-E-A in the Margin — never finish a 'Describe the graph' answer without checking all three letters.",
        "Divide by Old, Check Sign — doubling (e.g., 50 → 100) is +100%, while halving (100 → 50) is −50%.",
      ],
      thinkDeeper:
        "If five garment workers earn $110, $115, $120, $125 and a factory director earns $3,030 per month, calculate both the mean and the median salary. Which average gives a more honest picture of typical worker pay, and why?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Transnational Corporation (TNC)", back: "A large company operating across multiple countries, typically keeping HQ/design in HICs and outsourcing manufacturing to NEEs/LICs." },
      { front: "Outsourcing / Offshoring", back: "Moving manufacturing stages (such as stitching or dyeing) to external suppliers or lower-cost countries to cut labour and overhead expenses." },
      { front: "Fast fashion & micro-seasons", back: "A high-turnover clothing business model releasing up to 52 micro-seasons/year of cheap trend-driven garments." },
      { front: "Containerisation", back: "Use of standardised steel intermodal shipping containers (TEUs) that cut port handling times and freight cost to cents per garment." },
      { front: "Garment worker share of retail price", back: "Typically only ~1%–3% of a fast-fashion garment's retail price (around $0.40–$0.60 on a $20 T-shirt)." },
      { front: "Virtual water in 1 cotton T-shirt", back: "Approximately 2,700 litres of freshwater (equivalent to ~2.5 years of drinking water for one person)." },
      { front: "Aral Sea disaster", back: "Central Asian inland lake that shrank by ~90% after the Amu Darya & Syr Darya rivers were diverted to irrigate desert cotton farms." },
      { front: "Microfibres", back: "Tiny synthetic plastic fibres (polyester, nylon, acrylic) shed during laundry washes that enter rivers, oceans and marine food chains." },
      { front: "Rana Plaza (24 April 2013)", back: "Eight-storey garment factory complex in Dhaka, Bangladesh that collapsed killing 1,134 workers and injuring >2,500 — exposing safety failures." },
      { front: "Textile landfill case studies", back: "Atacama Desert (Chile, ~39,000+ t/year dumped) and Kantamanto Market / Accra beaches (Ghana, ~40% of charity bales unusable waste)." },
      { front: "Slow fashion & cost per wear", back: "Buying fewer durable, timeless items worn many times; Cost per wear = Price ÷ Number of wears (wearing 2× longer halves footprint per wear)." },
      { front: "Greenwashing", back: "Misleading 'eco-friendly' marketing claims (e.g., a tiny 'conscious' capsule) used to hide unchanged high-volume polluting practices." },
      { front: "Extended Producer Responsibility (EPR)", back: "Laws making brands legally and financially responsible for collecting, repairing and recycling garments at end-of-life." },
      { front: "Choropleth vs Proportional Symbol map", back: "Choropleth shades areas by rate/density (hides internal variation); proportional symbols scale circles/bars to show totals independent of land area." },
      { front: "TEA graph analysis", back: "T = Trend (overall pattern), E = Evidence (exact figures & units), A = Anomaly (outlier breaking the pattern)." },
      { front: "PEEL evaluation structure", back: "Point → Evidence (case study & stats) → Explain (causal chain) → Link back to question, balanced across both sides with a weighed conclusion." },
    ],
    mustKnow: [
      "Explain how TNCs, outsourcing and containerisation interconnect HIC consumers with NEE/LIC farms, dye mills and stitching factories.",
      "State the typical virtual water footprint of 1 cotton T-shirt (~2,700 L) and explain how cotton irrigation shrank the Aral Sea by ~90%.",
      "Describe fast fashion's pollution impacts: ~20% of industrial wastewater, ~8%–10% of carbon emissions, synthetic microfibres, and Atacama/Ghana landfill mountains.",
      "Evaluate Bangladesh's garment sector in balance: Rana Plaza 2013 (1,134 deaths) and low wages vs >4 million jobs (mostly women) and >80% of exports.",
      "Calculate cost per wear and evaluate slow fashion, repair, thrifting, Fairtrade, the Bangladesh Accord and EPR laws.",
      "Spot greenwashing and compare individual consumer choices with corporate and government regulation.",
      "Evaluate strengths and limitations of choropleth maps versus proportional symbol maps.",
      "Describe any geography graph accurately using T-E-A (Trend, Evidence, Anomaly).",
      "Calculate percentage change ((New − Old) ÷ Old × 100), mean, median and range accurately.",
      "Write a balanced 'To what extent' evaluation using PEEL paragraphs and a weighed final judgement.",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: 'Switching from cotton to polyester automatically solves fast fashion's environmental problem.'",
        right: "Write Instead ✅: 'Polyester uses less irrigation water than cotton, but it is made from crude oil (fossil CO₂), sheds marine microplastic fibres when washed, and takes centuries to break down.'",
      },
      {
        wrong: "Never Write ❌: 'HIC shoppers should immediately boycott all clothes made in Bangladesh to help garment workers.'",
        right: "Write Instead ✅: 'A total boycott could throw over 4 million workers (mostly women) into deeper poverty; ethical pressure should instead demand living wages, transparency and binding safety accords.'",
      },
      {
        wrong: "Never Write ❌: 'Donating unwanted fast-fashion clothes to charity bins eliminates textile waste.'",
        right: "Write Instead ✅: 'Oversupply means many donated garments are shipped to places like Ghana's Kantamanto Market where ~40% end up dumped on beaches or landfills — buying less and wearing longer matters first.'",
      },
      {
        wrong: "Never Write ❌: 'If output doubles from 50 billion to 100 billion, that is a 50% increase.'",
        right: "Write Instead ✅: 'Percentage change always divides by the original value: ((100 − 50) ÷ 50) × 100 = +100% increase.'",
      },
      {
        wrong: "Never Write ❌: 'A choropleth map shows exact data for every single town inside a country.'",
        right: "Write Instead ✅: 'A choropleth map shows one shaded average per region/country, which hides major inequalities between wealthy cities and poorer rural areas.'",
      },
      {
        wrong: "Never Write ❌: 'In a TEA graph question, just write that the line goes up.'",
        right: "Write Instead ✅: 'State the overall Trend, back it with exact Evidence (values, years, units and % change), and explicitly quote any Anomaly that breaks the trend.'",
      },
    ],
    examMistakes: [
      "Dividing by the NEW value instead of the ORIGINAL (Old) value when calculating percentage change.",
      "Forgetting units (litres, billions, %, US$) when quoting Evidence in a TEA graph question.",
      "Writing only negative points about Bangladesh's garment sector — always include jobs (>4 million) and >80% export earnings for balanced evaluation.",
      "Confusing choropleth maps (shaded area rates) with proportional symbol maps (scaled circles/bars for totals).",
      "Describing mean as always better than median — when a dataset has an extreme anomaly (like a CEO salary), the median is far more representative.",
      "Forgetting to include an anomaly (the 'A' in TEA) even when one year or country clearly sits off the main line.",
      "Using vague sentences like 'it is bad for the environment' instead of named mechanisms (e.g., azo dyes polluting the Buriganga River, microfibres entering marine food chains).",
    ],
    mnemonics: [
      {
        topic: "Describing Any Geography Graph",
        device: "T-E-A (Trend, Evidence, Anomaly)",
        explanation: "Pour a cup of TEA on every graph: Trend (direction), Evidence (exact data + units), Anomaly (exception).",
      },
      {
        topic: "Structuring Evaluation Paragraphs",
        device: "P-E-E-L (Point, Evidence, Explain, Link)",
        explanation: "Make a clear Point, drop named Evidence, Explain the chain of cause-and-effect, and Link back to 'to what extent'.",
      },
      {
        topic: "Percentage Change Formula",
        device: "N-O-O (New minus Old, over Old)",
        explanation: "Always put Old on the bottom: ((New − Old) ÷ Old) × 100 — never divide by New!",
      },
    ],
    realWorld: [
      {
        title: "Rana Plaza & The Bangladesh Accord (Dhaka)",
        detail: "After the 2013 collapse killed 1,134 garment workers, >200 global brands signed the legally binding Bangladesh Accord, completing tens of thousands of structural, fire and electrical fixes.",
        emoji: "🏭",
      },
      {
        title: "The Shrinking Aral Sea (Uzbekistan / Kazakhstan)",
        detail: "Satellite images from 1960 to today show one of Earth's biggest human-made ecological collapses after rivers were diverted to irrigate desert cotton.",
        emoji: "🏜️",
      },
      {
        title: "Kantamanto Market, Accra (Ghana)",
        detail: "One of the world's largest second-hand clothing hubs receives ~15 million garments every week from HICs; skilled local tailors upcycle many, yet ~40% are unusable fast-fashion waste.",
        emoji: "♻️",
      },
      {
        title: "Atacama Desert Textile Mountain (Chile)",
        detail: "Tens of thousands of tonnes of unsold or discarded synthetic clothing shipped through Iquique port pile up in arid dunes, leaking dyes and microplastics.",
        emoji: "⛰️",
      },
      {
        title: "Singapore Circular Fashion Hubs (Cloop & Refash)",
        detail: "Local thrift stores, textile recycling bins and swap boutiques help Singapore shoppers extend garment life and keep wearable textiles out of Semakau Landfill.",
        emoji: "🇸🇬",
      },
    ],
    videos: [
      {
        title: "The Life Cycle of a T-Shirt (TED-Ed)",
        channel: "TED-Ed Search",
        url: "https://www.youtube.com/results?search_query=TED-Ed+life+cycle+of+a+t-shirt+cotton+water",
      },
      {
        title: "How Cotton Irrigation Shrank the Aral Sea",
        channel: "Geography Documentary Search",
        url: "https://www.youtube.com/results?search_query=Aral+Sea+cotton+irrigation+shrinkage+geography",
      },
      {
        title: "Rana Plaza 2013 & The True Cost of Fast Fashion",
        channel: "Geography Case Study Search",
        url: "https://www.youtube.com/results?search_query=Rana+Plaza+2013+Bangladesh+fast+fashion+geography",
      },
      {
        title: "Geography Skills: TEA Graphs, Choropleth Maps & Percentage Change",
        channel: "GCSE & Year 9 Geography Skills Search",
        url: "https://www.youtube.com/results?search_query=geography+skills+TEA+graph+choropleth+map+percentage+change",
      },
    ],
    formulas: [
      { name: "Percentage Change", formula: "{{(New - Old) / Old * 100}}%", note: "Always divide by the Old (starting) value." },
      { name: "Arithmetic Mean", formula: "{{(Sum of all values) / (Number of values)}}", note: "Sensitive to extreme anomalies." },
      { name: "Range", formula: "Maximum value − Minimum value", note: "Measures total spread of a dataset." },
      { name: "Cost per Wear", formula: "{{(Garment Price) / (Number of Wears)}}", note: "Durable slow fashion beats disposable clothing over time." },
      { name: "Footprint per Wear", formula: "{{(Total Garment Water or CO₂e) / (Number of Wears)}}", note: "Wearing 2× as long cuts footprint per wear by 50%." },
      { name: "Cotton T-Shirt Water", formula: "≈ 2,700 litres per conventional cotton T-shirt", note: "Jeans ≈ 7,500–10,000 litres." },
      { name: "Fashion Global Impacts", formula: "~8%–10% global CO₂ · ~20% industrial wastewater · ~100 bn items/yr", note: "Synthetic fibres make up >60% of garments." },
      { name: "Rana Plaza (2013)", formula: "24 April 2013, Dhaka, Bangladesh — 1,134 deaths, >2,500 injured", note: "Led to the binding Bangladesh Safety Accord." },
      { name: "TEA Graph Method", formula: "Trend + Evidence (exact data & units) + Anomaly (outlier)", note: "Use for all line, bar, climate and scatter graphs." },
      { name: "PEEL Evaluation", formula: "Point → Evidence → Explain → Link (both sides + weighed judgement)", note: "Core structure for 'To what extent' questions." },
    ],
  },
};
