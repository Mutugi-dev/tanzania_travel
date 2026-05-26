export interface Article {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  img: string;
  desc: string;
  fullText: string[];
}

export const ARTICLES: Article[] = [
  {
    id: "wta-nominations",
    title: "Tanzania Shines At World Travel Awards With 41 Nominations",
    category: "awards",
    categoryLabel: "Awards",
    date: "April 15, 2026",
    readTime: "3 min read",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    desc: "Tanzania dominates the World Travel Awards nominations list for 2026, marking a powerful testament to the country's unparalleled conservation efforts and premium destination status.",
    fullText: [
      "In a historic achievement for East African tourism, Destination Tanzania has bagged an unprecedented 41 nominations at the prestigious World Travel Awards (WTA) 2026. The announcement, made during a national press conference, marks the highest number of nominations the country has ever received in a single year.",
      "Key categories include Africa's Leading Destination, Africa's Leading National Park (Serengeti National Park), Africa's Leading Beach Destination (Zanzibar), and Africa's Leading Tourist Board (Tanzania Tourist Board - TTB). Several premium local tour operators and luxury savannah camps have also received individual nomination slots.",
      "Her Excellency the Minister of Natural Resources and Tourism noted that these nominations reflect years of collaborative conservation policies and premium marketing campaigns. Local operators are encouraging travelers worldwide to cast their votes to cement Tanzania's position as the crown jewel of African wilderness and coastal retreats."
    ]
  },
  {
    id: "braydon-showcase",
    title: "Braydon In Tanzania Tour Showcases Iconic Experiences Across Tanzania",
    category: "tours",
    categoryLabel: "Influencer Tour",
    date: "February 10, 2026",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    desc: "A high-profile showcase expedition led by Braydon traverses key landmarks, capturing stunning imagery and generating global digital engagement for Mount Kilimanjaro and Ngorongoro.",
    fullText: [
      "Digital content creator Braydon has officially concluded his landmark 'Braydon In Tanzania' tour, a collaborative campaign with local conservation agencies designed to spotlight lesser-known wilderness circuits alongside iconic landmarks.",
      "The expedition, which was cataloged in real-time for millions of global subscribers, took Braydon and his production team from the rugged summit glaciers of Mount Kilimanjaro down into the caldera floor of the Ngorongoro Crater, before concluding in Zanzibar's historic Stone Town.",
      "Accompanied by rangers and certified operators, the tour generated vast digital impressions, showcasing the safety, infrastructure readiness, and raw beauty of Tanzania's park networks. 'Tanzania isn't just a place you visit; it's a profound feeling that stays with you forever,' Braydon commented during a meeting with local conservation directors."
    ]
  },
  {
    id: "fitur-madrid",
    title: "The International Tourism Trade Fair FITUR 2026 Concluded On January 26, Marking A Strong Milestone For Destination Tanzania.",
    category: "expos",
    categoryLabel: "International Expo",
    date: "January 26, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    desc: "FITUR 2026 in Madrid wraps up with record bookings, private trade partnerships, and high-success collaborations establishing Tanzania as the premier destination for European travelers.",
    fullText: [
      "The International Tourism Trade Fair (FITUR) 2026, held in Madrid, Spain, concluded on January 26 with monumental success for the Tanzanian delegation. The trade fair represents one of the most critical European entry corridors for international tourism trade.",
      "Under the coordination of the Tanzania Tourist Board (TTB) and key local operators, the Tanzanian pavilion stood out for its highly sensory design, featuring interactive vector maps and VR-powered safaris. Dozens of strategic bilateral agreements were inked, establishing direct flight corridor upgrades with major European air carriers.",
      "Travel operators reported a 35% increase in advance booking interest for the upcoming June-October dry season, particularly for combined savannah-and-beach circuits. This milestone signals a highly robust fiscal year ahead for the national tourism economy."
    ]
  },
  {
    id: "samia-oman",
    title: "President Samia Engages Tanzanian Youth In Oman On Global Tourism Promotion Drive",
    category: "diplomacy",
    categoryLabel: "Diplomacy",
    date: "December 18, 2025",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    desc: "Her Excellency President Samia Suluhu Hassan meets with young leaders in Oman, outlining a collaborative global digital campaign to champion Zanzibar beaches and safari conservation.",
    fullText: [
      "As part of her state visit to the Sultanate of Oman, Her Excellency President Samia Suluhu Hassan hosted an interactive forum with Tanzanian youth residing in Muscat. The central topic of discussion was the leveraging of global digital networks to promote the 'Royal Tour' tourism drive.",
      "President Samia urged the diaspora youth to act as active digital ambassadors. She highlighted that modern tourism relies heavily on visual storytelling and digital reach, areas where tech-savvy youth can excel by showing the unique Swahili heritage and coastal investment opportunities.",
      "Bilateral youth engagement pacts were signed to facilitate exchange programs between Omani and Tanzanian hospitality universities, setting a powerful long-term foundation for service excellence in premium resorts."
    ]
  },
  {
    id: "qatar-corridor",
    title: "Strengthening The Tanzania-Qatar Tourism Corridor A New Chapter For Destination Tanzania Unforgettable",
    category: "diplomacy",
    categoryLabel: "Bilateral Trade",
    date: "November 5, 2025",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    desc: "Bilateral tourism pacts signed between Tanzania and Qatar establish direct airways collaborations, luxury resort investment pipelines, and visa simplification procedures.",
    fullText: [
      "In a major development for luxury tourism corridors in the Middle East, delegates from Tanzania and Qatar have formalized a wide-ranging cooperation framework in Doha. The pact focuses on developing premium travel pipelines between the two nations.",
      "The agreements establish expanded flight schedules between Doha (DOH), Kilimanjaro (JRO), and Zanzibar (ZNZ), drastically shortening travel times for high-net-worth individuals. Additionally, Qatari hospitality groups announced several joint-venture investment plans for luxury, low-impact canopy eco-resorts in the Serengeti.",
      "A simplified visa verification program is scheduled to launch under the new corridor framework, ensuring rapid clearance protocols for families and corporate event groups traveling to the islands and savannah parks."
    ]
  },
  // FICTIONAL NEWS ADDED BELOW
  {
    id: "new-eco-lodge-serengeti",
    title: "Pioneering Zero-Emission Eco-Lodge Opens in Northern Serengeti",
    category: "awards",
    categoryLabel: "Eco-Tourism",
    date: "May 2, 2026",
    readTime: "3 min read",
    img: "https://images.unsplash.com/photo-1498442302353-8d6bd1e90b8f?auto=format&fit=crop&w=800&q=80",
    desc: "Setting a new global standard for sustainable luxury, the 'Kusini Canopy Retreat' opens its doors, entirely powered by solar grids and utilizing advanced water recycling systems.",
    fullText: [
      "In a triumphant leap forward for sustainable tourism, the highly anticipated 'Kusini Canopy Retreat' has officially opened in the Northern Serengeti. The retreat holds the distinction of being the first completely zero-emission luxury lodge in East Africa.",
      "Constructed exclusively from locally sourced, biodegradable materials, the lodge runs 100% on a customized micro-solar grid. Furthermore, it employs a revolutionary closed-loop water recycling system that ensures zero waste reaches the surrounding wilderness.",
      "The Minister for Tourism cut the ribbon at the opening ceremony, remarking that Kusini Canopy Retreat serves as a blueprint for the future of the hospitality industry in Tanzania, proving that five-star luxury can seamlessly coexist with uncompromising environmental stewardship."
    ]
  },
  {
    id: "milele-kenya-tour",
    title: "Kenyan Creator Milele Wanjiru Takes Her 3.8M Followers on a Tanzania Safari",
    category: "tours",
    categoryLabel: "Influencer Tour",
    date: "May 20, 2026",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    desc: "East Africa's biggest lifestyle content creator brings her audience of 3.8 million on an immersive journey across Serengeti, Zanzibar beaches, and Stone Town — igniting a regional travel boom.",
    fullText: [
      "Kenyan digital lifestyle creator Milele Wanjiru, whose combined social media following exceeds 3.8 million, concluded a landmark 10-day 'Visit Tanzania' campaign sponsored by the Tanzania Tourist Board. The campaign generated over 240 million organic impressions within its first week.",
      "Milele's itinerary took her team through the Serengeti for a morning hot air balloon safari, into the volcanic floor of Ngorongoro Crater, up to the Machame Gate of Kilimanjaro, and finally to Zanzibar's Nungwi beach and historic Stone Town. Each destination was filmed in cinematic 4K and released as short-form content across TikTok, Instagram, and YouTube.",
      "'Tanzania absolutely broke my expectations. The hospitality, the raw wilderness, the food — it's an experience no camera can fully capture,' Milele told her audience in a tearful final vlog. Following the campaign, her agency reported a 600% surge in direct inquiries for Tanzania safari packages from East African travelers."
    ]
  },
  {
    id: "rhino-conservation-milestone",
    title: "Ngorongoro Conservation Area Celebrates Record Rhino Birth Rates",
    category: "awards",
    categoryLabel: "Conservation",
    date: "May 10, 2026",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1621213076127-10d6eab5d326?auto=format&fit=crop&w=800&q=80",
    desc: "A triumph for anti-poaching units and wildlife biologists as the Ngorongoro crater records its highest number of endangered black rhino births in three decades.",
    fullText: [
      "Conservationists are celebrating a monumental victory this week, as the Ngorongoro Conservation Area Authority (NCAA) announced the highest recorded birth rate of Eastern Black Rhinos in over thirty years.",
      "The surge in the rhino population is directly attributed to the intensified, high-tech anti-poaching patrols and community-led wildlife protection initiatives implemented over the last five years. Drones equipped with thermal imaging and expanded ranger outposts have created a near-impenetrable sanctuary within the crater floor.",
      "This milestone solidifies Tanzania's role as a global leader in protecting endangered species. The newly born calves are reportedly healthy and integrating well, offering a beacon of hope for the critical recovery of the black rhino species across the African continent."
    ]
  },
  {
    id: "direct-flights-tokyo",
    title: "Tanzania and Japan Announce First Direct Flight Route Launching Late 2026",
    category: "diplomacy",
    categoryLabel: "Aviation",
    date: "May 18, 2026",
    readTime: "2 min read",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    desc: "Air Tanzania partners with Japanese aviation authorities to introduce non-stop flights between Tokyo and Kilimanjaro, opening a massive new corridor for Asian tourism.",
    fullText: [
      "In a groundbreaking expansion of its international network, Air Tanzania has signed a bilateral agreement to launch the first-ever direct flight route connecting Tokyo's Narita International Airport to Kilimanjaro International Airport.",
      "Scheduled to commence in late 2026, the new route aims to capitalize on the rapidly growing interest in African safaris and mountain climbing among Japanese and East Asian travelers. The direct 14-hour flight will utilize Air Tanzania's newly acquired Boeing 787 Dreamliner fleet.",
      "Tourism industry experts predict this direct corridor will boost Asian visitor arrivals by an estimated 40% within the first two years, fundamentally shifting the demographic landscape of international tourism in Tanzania."
    ]
  }
];
