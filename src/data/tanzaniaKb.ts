export interface KbEntry {
  category: "fees" | "packing" | "weather" | "visa" | "rules";
  keywords: string[];
  title: string;
  content: string;
  tags: string[];
}

export const tanzaniaKnowledgeBase: KbEntry[] = [
  {
    category: "fees",
    keywords: ["fee", "fees", "cost", "price", "entry", "permit", "serengeti", "ngorongoro", "kilimanjaro"],
    title: "Official Park Conservation & Entry Fees (2026)",
    content: `Official Tanzanian National Parks (TANAPA) daily conservation rates for non-residents:
- 🦁 **Serengeti National Park**: $82.60 USD per adult/day (Peak season: Jul-Jan) / $70.80 USD (Low season: Feb-Jun).
- 🌋 **Ngorongoro Crater Entry Fee**: $70.80 USD per adult/day. Plus an additional **$295 USD per vehicle** crater service fee per descent.
- 🏔️ **Mount Kilimanjaro National Park**: $82.60 USD per adult/day, plus camping fees ($59 USD/night) or hut fees ($60/night).
- 🐘 **Tarangire & Lake Manyara**: $59 USD per adult/day (Peak) / $53.10 USD (Low).
*Note: All fees are subject to 18% VAT and must be paid via credit/debit card or government control number. Cash is not accepted at park gates.*`,
    tags: ["Serengeti", "Ngorongoro", "Kilimanjaro", "Budget"]
  },
  {
    category: "packing",
    keywords: ["pack", "packing", "checklist", "bring", "gear", "clothes", "safari", "trek", "trekking"],
    title: "Official Safari & Trekking Packing Checklists",
    content: `Recommended checklists to pack for your Tanzania adventure:
1. 🦁 **Safari Packing Gear**:
   - Neutral khaki/beige/olive clothing (avoid bright blue/black which attract tsetse flies).
   - Long-sleeved shirts and trousers (for mosquito defense during evening drives).
   - High-quality binoculars and a zoom camera (75-300mm lens).
   - Wide-brimmed sun hat, polarized sunglasses, and SPF 50+ sunscreen.
2. 🏔️ **Kilimanjaro Trekking Gear**:
   - Thermal base layers, fleece mid-layers, and a heavy waterproof down jacket.
   - Broken-in, waterproof hiking boots with warm thermal socks.
   - Telescopic trekking poles and a 30L daypack + 90L duffel bag for porters.
   - Headlamp with extra batteries and personal hydration packs (e.g. Camelbak).`,
    tags: ["Safari Tips", "Kilimanjaro", "Preparation"]
  },
  {
    category: "weather",
    keywords: ["weather", "season", "seasons", "rain", "rainy", "dry", "climate", "best time", "month", "months", "visit"],
    title: "Tanzania Seasons & Weather Guide",
    content: `Tanzania experiences two distinct rainy seasons and two dry seasons:
- ☀️ **Long Dry Season (June to October)**: The best time for wildlife safaris. Animals gather around permanent water sources. High summit success rates on Kilimanjaro. Zanzibar is dry and breezy.
- 🌧️ **Short Rainy Season (November to December)**: Brief afternoon showers. Beautiful lush green landscapes and excellent bird watching.
- ⛅ **Short Dry Season (January to February)**: Very warm. The calving season in Southern Serengeti, attracting hundreds of cheetahs and lions.
- 🌧️ **Long Rainy Season / Green Season (March to May)**: Heavy tropical rain. Many remote lodges close, but active lodges offer massive discounts. Lush scenery and excellent photography.`,
    tags: ["Planning", "Safari Tips", "Weather"]
  },
  {
    category: "visa",
    keywords: ["visa", "entry", "passport", "status", "free", "countries", "e-visa", "arrival"],
    title: "Tanzania Visa & Entry Requirements",
    content: `Entry guidelines for international visitors to Tanzania:
- 🛂 **Visa-Free Countries (70 Countries)**: Citizens of Commonwealth and SADC/EAC states (including South Africa, Kenya, Uganda, Malaysia, Singapore, Jamaica) enter visa-free for up to 90 days.
- 💻 **Tourist e-Visa**: Most other nationals (including USA, UK, Canada, Australia, EU) require a tourist visa. You can apply online via the official portal (visa.immigration.go.tz) for $50 USD ($100 USD for US citizens, who receive a 1-year multiple entry visa).
- 📋 **Documents Required**: Passport with at least 6 months validity, return flight ticket, and a Yellow Fever vaccination certificate if arriving from an endemic zone.`,
    tags: ["Visa Portal", "Immigration", "Airport"]
  },
  {
    category: "rules",
    keywords: ["rule", "rules", "safety", "health", "safety tips", "vaccine", "drones", "plastic"],
    title: "Practical Safety, Health & Environmental Rules",
    content: `Crucial safety and local regulations for visitors in Tanzania:
- 🚫 **Plastic Bag Ban**: Single-use plastic carrier bags are strictly banned. Do not bring zip-lock bags or shopping bags in your luggage, as you could face heavy fines at airport customs.
- 🚁 **Drones**: Flying recreational drones is strictly prohibited in national parks without prior military, civil aviation, and TANAPA permits. Unlicensed drones will be confiscated at park gates.
- 🦟 **Malaria & Yellow Fever**: Malaria is prevalent in low-lying areas. Consult your doctor for prophylaxis (e.g. Malarone). Yellow fever vaccines are mandatory if arriving from an endemic country (like Kenya).
- 🐘 **Safari Etiquette**: Never feed animals, do not stand up in safari vehicles outside designated zones, and follow your guide's instructions at all times.`,
    tags: ["Safety", "Rules", "Environment"]
  }
];
