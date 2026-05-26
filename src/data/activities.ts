export interface ActivityImages {
  card: string;       // Punchy, high-contrast visual for card grids (action-focused)
  banner: string;     // Expansive panoramic backdrop for detailed pages
  thumbnail: string;  // Micro preview (calendar, lists)
}

export interface Activity {
  id: string;
  title: string;
  badge: string;
  desc: string;
  detailedDesc: string;
  images: ActivityImages; // Unified decoupled asset pool
  location: string;
  tags: string[];
  operatorId: "safari" | "beach" | "hiking";
  difficulty: "Easy" | "Moderate" | "Challenging" | "Expert Summit";
  bestSeason: string;
  duration: string;
  highlights: string[];
  itinerary: { step: string; detail: string }[];
  category: "signature" | "coastal" | "adventure" | "editors";
  featured?: boolean;  // shown in "Top 3 Things to Do" section
  topPick?: boolean;   // shown in "Signature Highlights" section
}

export const ACTIVITIES: Activity[] = [
  // Primary Signature Activities
  {
    id: "safari",
    title: "Wildlife & Game Safaris",
    badge: "SIGNATURE SAFARI",
    desc: "Embark on classic game drives through the Serengeti, Ngorongoro, and Tarangire. Witness herds of elephants, observe prides of lions, and marvel at the epic Wildebeest Great Migration.",
    detailedDesc: "Traverse the endless plains of the Serengeti and drop into the stunning Ngorongoro Crater. This signature package offers a comprehensive expedition tracking the famous Big Five (Lion, Leopard, Elephant, Buffalo, Rhino). Drive in high-spec, open-roof 4x4 Landcruisers accompanied by expert certified naturalists who know every secret migration route.",
    images: {
      card: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1602491453979-53a99888c09d?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1534188753412-b8940c229a2e?auto=format&fit=crop&w=300&q=80"
    },
    location: "Serengeti, Ngorongoro, Tarangire",
    tags: ["Big Five", "Great Migration", "4x4 Drives"],
    operatorId: "safari",
    category: "signature",
    difficulty: "Easy",
    bestSeason: "June - October (Dry season migrations)",
    duration: "4 - 8 Days",
    topPick: true,
    highlights: [
      "Track the Great Wildebeest Migration crossing dangerous river corridors.",
      "Descent into Ngorongoro Crater - a self-contained ecological caldera wonder.",
      "Stay in authentic luxury canvassed tents under the star-lit African skies."
    ],
    itinerary: [
      { step: "Day 1: Arusha Entry & Briefing", detail: "Arrive at JRO airport, transfer to Arusha lodge, and meet your head safari guide." },
      { step: "Day 2: Tarangire Elephant Savannah", detail: "Full day game drive amid massive iconic baobabs and giants herds of elephants." },
      { step: "Day 3: Ngorongoro Crater Descent", detail: "Descend 600m into the caldera. Spot predators and endangered black rhinos." },
      { step: "Day 4: Serengeti Plains Entry", detail: "Enter the endless plains. Chase lion prides lounging on rocky granite kopjes." }
    ]
  },
  {
    id: "beach",
    title: "Beach Retreats & Snorkeling",
    badge: "COASTAL ESCAPE",
    desc: "Relax on powder-white sand beaches in Zanzibar or Mafia Island. Go diving in Mnemba Atoll reef networks, swim with majestic Whale Sharks, or try kite surfing in Paje.",
    detailedDesc: "Immerse yourself in the ultimate Indian Ocean beach experience. From powder-white sands in Zanzibar and Mafia Island to deep coral diving in Mnemba reef sanctuaries, this coastal getaway is perfect for romance, rejuvenation, and marine encounters. Witness the stunning ocean shades of turquoise and try Swahili spice culinary delicacies.",
    images: {
      card: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=300&q=80"
    },
    location: "Zanzibar, Mafia Island, Pemba",
    tags: ["White Sands", "Coral Reefs", "Relaxation"],
    operatorId: "beach",
    category: "signature",
    difficulty: "Easy",
    bestSeason: "July - February (Warm coastal waters)",
    duration: "3 - 7 Days",
    highlights: [
      "Relax on Paje Beach - one of the world's top kite-surfing spots.",
      "Snorkel the pristine marine sanctuary at Mnemba Atoll with PADI guides.",
      "Sunset Dhow sailing with fresh seafood and acoustic Swahili vibes."
    ],
    itinerary: [
      { step: "Day 1: Zanzibar Shore Arrival", detail: "Fly in, check into your boutique beach resort, and relax by the Indian Ocean." },
      { step: "Day 2: Coral Reef Snorkel Safari", detail: "Board a wooden dhow to snorkel alongside sea turtles and hundreds of tropical fish." },
      { step: "Day 3: Spice Farm & Stone Town Tour", detail: "Smell cloves, nutmeg, and vanilla in local plantations, then walk Stone Town alleyways." }
    ]
  },
  {
    id: "hiking",
    title: "Mountain Treks & Hiking",
    badge: "HIGH ADVENTURE",
    desc: "Summit Mount Kilimanjaro (the Roof of Africa, 5,895m) or climb the rugged volcanic peak of Mount Meru. Trek through Kitulo's blooming highland grasslands, known as the 'Garden of God'.",
    detailedDesc: "Take on the ultimate trekking challenge: Mount Kilimanjaro, the highest free-standing peak on the planet. Journey through five distinct climatic zones, starting in lush tropical rain forests and finishing on absolute arctic glaciers. Backed by highly equipped alpine teams, high-spec tents, and deep oxygen safety monitoring.",
    images: {
      card: "https://images.unsplash.com/photo-1578496781985-47f199917d08?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1589553460732-5967c7b57890?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80"
    },
    location: "Mount Kilimanjaro, Mount Meru",
    tags: ["Mountaineering", "Kilimanjaro Summit", "Alpine Grasslands"],
    operatorId: "hiking",
    category: "signature",
    difficulty: "Expert Summit",
    bestSeason: "January - March, July - October",
    duration: "6 - 9 Days",
    topPick: true,
    highlights: [
      "Acclimatize safely using professional high-altitude medical monitoring protocols.",
      "Summit Uhuru Peak (5,895m) at sunrise for breathtaking cloud-inversion views.",
      "Climb through changing climates: from rain forests to absolute volcanic glaciers."
    ],
    itinerary: [
      { step: "Day 1: Rainforest Trailhead Start", detail: "Register at Machame/Marangu Gate, trek through rainforests, and camp at 3,000m." },
      { step: "Day 2: Alpine Moorland Plateau", detail: "Trek high volcanic plateaus with giant groundsels, entering the alpine desert." },
      { step: "Day 3: Barranco Wall Scramble", detail: "Climb the scenic Barranco Wall, establishing safety base before summit push." },
      { step: "Day 4: Glacier Summit Push", detail: "Begin midnight climb. Reach Uhuru Peak at sunrise. Descend safely to Mweka." }
    ]
  },
  
  // Coastal Experiences (Sea, Sun, Sand)
  {
    id: "zanzibar-escape",
    title: "Zanzibar Island Escape",
    badge: "TOP PICK",
    desc: "Powder-soft beaches, Stone Town heritage, spice tours, and oceanfront stays.",
    detailedDesc: "Enjoy the perfect blend of leisure and history. Zanzibar Island Escape invites you to walk through spice plantations, explore the ancient stone architectures of Stone Town, and sleep right on the turquoise shores of the Indian Ocean.",
    images: {
      card: "https://images.unsplash.com/photo-1535262412227-85541e910204?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=300&q=80"
    },
    location: "Stone Town, Nungwi, Paje",
    tags: ["Beaches", "Culture", "Spice Tours"],
    operatorId: "beach",
    category: "coastal",
    difficulty: "Easy",
    bestSeason: "June - October, January - February",
    duration: "4 Days",
    featured: true,
    highlights: [
      "Wander Stone Town's Arabic-influenced carved wooden doorways.",
      "Scent local spices directly off the vine in custom farm tours.",
      "Bathe in absolute calm, clear warm turquoise coastal waves."
    ],
    itinerary: [
      { step: "Day 1: Stone Town Antiquity", detail: "Check into a restored Sultan palace and do a cultural architectural tour." },
      { step: "Day 2: Organic Spice Farm Excursion", detail: "Smell fresh cardamom, cinnamon, and pepper, followed by a Swahili lunch." },
      { step: "Day 3: Luxury Nungwi Shore relaxation", detail: "Transfer north to Nungwi. Unwind on pristine white beaches." }
    ]
  },
  {
    id: "dhow-cruises",
    title: "Dhow Cruises & Sandbanks",
    badge: "SUNSET",
    desc: "Sail at golden hour, picnic on sandbanks, and swim in calm, clear lagoons.",
    detailedDesc: "Cruise in elegance on a handcrafted wooden Swahili dhow. Drop anchor at isolated white-sand sandbanks for private beach barbecues, and jump into absolute calm lagoons to swim at your own relaxed pace.",
    images: {
      card: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=300&q=80"
    },
    location: "Zanzibar Island Sandbanks",
    tags: ["Dhow", "Sandbanks", "Romance"],
    operatorId: "beach",
    category: "coastal",
    difficulty: "Easy",
    bestSeason: "Year-Round (except peak rain April/May)",
    duration: "1 Day",
    highlights: [
      "Board a classic, hand-carved wooden Swahili dhow.",
      "Barbecue fresh rock lobster and catch-of-the-day fish on a sandbank.",
      "Watch the African sun dip below the ocean horizon at golden hour."
    ],
    itinerary: [
      { step: "10:00 AM: Dhow Boarding", detail: "Set sail from Fumba coast with cold tropical beverages and music." },
      { step: "12:30 PM: Private Sandbank Barbecue", detail: "Dock at a sandbar in the ocean for a massive lobster seafood barbecue feast." },
      { step: "4:30 PM: Sunset Cruise Sailing", detail: "Set sails for the golden hour, enjoying tropical fruit platters." }
    ]
  },
  {
    id: "snorkeling",
    title: "Snorkeling & Diving",
    badge: "MARINE",
    desc: "Reefs, turtles, and colorful fish - ideal for beginners and experienced divers.",
    detailedDesc: "Uncover a vibrant underwater kingdom. Snorkel and dive through protected coral gardens and deep walls at Mnemba Atoll, where dolphins jump alongside your boat and turtles feed off the sea grasses.",
    images: {
      card: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1560275669-46c5a88d6a4c?auto=format&fit=crop&w=300&q=80"
    },
    location: "Mnemba Atoll, Mafia Marine Park",
    tags: ["Snorkel", "Dive", "Reefs"],
    operatorId: "beach",
    category: "coastal",
    difficulty: "Moderate",
    bestSeason: "October - March (Best underwater visibility)",
    duration: "1 - 2 Days",
    highlights: [
      "Dive inside the world-famous Mnemba Atoll marine sanctuary conservation zone.",
      "Swim alongside pods of wild bottlenose dolphins in clear ocean waters.",
      "High-spec snorkeling gear and certified PADI divemasters included."
    ],
    itinerary: [
      { step: "8:00 AM: PADI Dive Briefing", detail: "Gear fitment and safety briefing at the local marine shop." },
      { step: "9:30 AM: Sanctuary Reef Dives", detail: "Complete two deep coral dives or snorkel in shallow turquoise gardens." },
      { step: "1:30 PM: Seaside Lunch", detail: "Sail back to the shores for a delicious seafood buffet." }
    ]
  },
  {
    id: "resort-stays",
    title: "Resort & Beach Stays",
    badge: "RELAX",
    desc: "From boutique hideaways to family-friendly resorts - choose your pace and style.",
    detailedDesc: "Lounge in complete tropical luxury. From cozy boutique eco-resorts in quiet coves to premium family-friendly oceanfront stays, find absolute peace, private infinity pools, and full spa wellness operations.",
    images: {
      card: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80"
    },
    location: "Nungwi Beach, Kiwengwa, Paje Resort Strip",
    tags: ["Resorts", "Family", "Wellness"],
    operatorId: "beach",
    category: "coastal",
    difficulty: "Easy",
    bestSeason: "June - March",
    duration: "3 - 10 Days",
    highlights: [
      "Lounge in beachfront infinity pools overlooking the Indian Ocean.",
      "Pamper yourself in oceanfront spa sanctuaries with coconut-clove oils.",
      "Gourmet international and Swahili fusion dining at your doorstep."
    ],
    itinerary: [
      { step: "Day 1: Ocean Oasis Check-In", detail: "Arrive at your premium resort with a welcoming tropical coconut cocktail." },
      { step: "Day 2: Beachfront Spa Day", detail: "Indulge in organic deep-tissue massage and private ocean lounging." },
      { step: "Day 3: Coastal Excursion or Poolside Cocktails", detail: "Enjoy poolside drinks, sea views, or stroll down white sands." }
    ]
  },
  {
    id: "swahili-culture",
    title: "Swahili Coast Culture",
    badge: "HERITAGE",
    desc: "Old ports, food markets, crafts, and historic streets across the coast and islands.",
    detailedDesc: "Trace the historic heart of the Swahili Coast. Walk through Kilwa Kisiwani's historic stone archways, tour old Arabic dhow ports, visit lively spice markets, and interact with welcoming coastal craftsmen.",
    images: {
      card: "https://images.unsplash.com/photo-1605538032432-a9f0c8d9baac?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=300&q=80"
    },
    location: "Kilwa Kisiwani, Stone Town, Bagamoyo",
    tags: ["Culture", "History", "Markets"],
    operatorId: "safari",
    category: "coastal",
    difficulty: "Easy",
    bestSeason: "Year-Round",
    duration: "2 - 3 Days",
    topPick: true,
    highlights: [
      "Explore the 14th-century Great Mosque Ruins of Kilwa Kisiwani (UNESCO).",
      "Interact with local handcraft weavers and master wooden dhow builders.",
      "Tour Bagamoyo's historical ports and 19th-century colonial structures."
    ],
    itinerary: [
      { step: "Day 1: UNESCO Ruins Excursion", detail: "Take a boat to Kilwa Kisiwani island and tour massive stone ruins." },
      { step: "Day 2: Historic Ports Tour", detail: "Drive to Bagamoyo to study spice trade histories and old ports." }
    ]
  },
  {
    id: "seasonal-coastal",
    title: "Seasonal Coastal Moments",
    badge: "SEASONAL",
    desc: "Warm waters, fresh seafood, and quieter beaches - perfect for a slower escape.",
    detailedDesc: "Experience the tranquil green season along the Swahili Coast. With warm ocean breezes, fresh seafood, and quieter beaches, this slower escape offers peace and dramatic sunset photography opportunities.",
    images: {
      card: "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=300&q=80"
    },
    location: "Zanzibar, Saadani National Park shores",
    tags: ["Green Season", "Photography", "Quiet"],
    operatorId: "safari",
    category: "coastal",
    difficulty: "Easy",
    bestSeason: "November - May (Lush coastal savannah colors)",
    duration: "3 - 5 Days",
    highlights: [
      "Quiet, crowd-free beaches at Zanzibar's southern shorelines.",
      "Vibrant green savannahs at Saadani National Park bordering the ocean.",
      "Dramatic lightning storms and golden sunset photography setups."
    ],
    itinerary: [
      { step: "Day 1: Low-season Serenity Check-In", detail: "Arrive at a secluded lodge and enjoy quiet coastal landscapes." },
      { step: "Day 2: Saadani Savannah Coastal Drive", detail: "Spot elephants and baboons playing directly on Saadani's sandy shores." }
    ]
  },

  // Editor's Highlights
  {
    id: "zanzibar-combo",
    title: "Zanzibar: Sea & Culture in One Trip",
    badge: "START HERE",
    desc: "Combine beach time with Stone Town heritage, spice farms, and dhow cruises - an easy add-on to any safari itinerary.",
    detailedDesc: "The ultimate introductory multi-experience coastal vacation. This combo covers the absolute highlights of Zanzibar: historic Stone Town alleyways, ocean spice farms, and pristine marine sandbank dhow safaris.",
    images: {
      card: "https://images.unsplash.com/photo-1473116763269-255ea7b0b5f6?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=300&q=80"
    },
    location: "Zanzibar Archipelago",
    tags: ["Stone Town", "Spice", "Beaches"],
    operatorId: "beach",
    category: "editors",
    difficulty: "Easy",
    bestSeason: "June - March",
    duration: "3 - 4 Days",
    highlights: [
      "Sleep in both historic Stone Town and northern sandy beach resorts.",
      "Fully guided private tours covering history, food, and marine life.",
      "Includes private land cruiser transfers between all island districts."
    ],
    itinerary: [
      { step: "Day 1: Sultan Palaces & Spice Markets", detail: "Full day Stone Town heritage tour, tasting Swahili coffees and visiting spice stalls." },
      { step: "Day 2: Blue Safari Dhow Excursion", detail: "Sail to sandbanks, swim in blue lagoons, and snorkel Mnemba corals." },
      { step: "Day 3: North Nungwi beach luxury", detail: "Relax on Nungwi white sands and watch fiery coastal dhow sunsets." }
    ]
  },
  {
    id: "swahili-cuisine",
    title: "Seafood & Swahili Cuisine",
    badge: "FLAVOURS",
    desc: "Taste fresh catch, spices, and coastal street food - best enjoyed at sunset markets.",
    detailedDesc: "Set your taste buds alight with rich, coconut-infused Swahili coastal delicacies. Tour traditional spice markets, watch ocean catches grilled right in front of you at Forodhani Gardens, and learn local recipes.",
    images: {
      card: "https://images.unsplash.com/photo-1534080391025-a77af6ebc1a5?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80"
    },
    location: "Stone Town Forodhani, Zanzibar Spices",
    tags: ["Seafood", "Spice", "Markets"],
    operatorId: "beach",
    category: "editors",
    difficulty: "Easy",
    bestSeason: "Year-Round",
    duration: "1 - 2 Days",
    highlights: [
      "Taste fresh grilled octopus, lobster, and Zanzibari pizzas at Forodhani.",
      "Interactive Swahili cooking class inside a local village home.",
      "Guided street food food-market walks with local spice experts."
    ],
    itinerary: [
      { step: "4:00 PM: Organic Spice Gathering", detail: "Collect lemongrass, fresh ginger, and coconut from local trees." },
      { step: "6:00 PM: Swahili Cooking Class", detail: "Cook dynamic coconut fish curry and fresh chapati breads." },
      { step: "8:30 PM: Forodhani Street Food market", detail: "Visit Stone Town's seaside garden to feast on grilled sea delicacies." }
    ]
  },

  // Adventure & Nature Encounters
  {
    id: "kite-surfing",
    title: "Kite Surfing & Water Sports",
    badge: "WATER SPORTS",
    desc: "Ride the legendary Kusi trade winds across Zanzibar's turquoise lagoons. Paje Beach is one of the top 5 kite surfing destinations on the planet - for beginners and pros alike.",
    detailedDesc: "Paje Beach on Zanzibar's south-east coast transforms into a kite surfer's paradise from June to September when the powerful Kusi trade winds sweep across the shallow lagoon. With consistent side-shore winds, crystal-clear warm water, and a flat sandy bottom, Paje is perfectly suited for learning, freestyle, and wave riding. Certified IKO instructors offer beginner to advanced lessons, equipment rental, and safety training in both English and Swahili.",
    images: {
      card: "https://images.unsplash.com/photo-1530870110042-98b2cb110834?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1516245556508-7d60d4ff0f39?auto=format&fit=crop&w=300&q=80"
    },
    location: "Paje Beach, South-East Zanzibar",
    tags: ["Kite Surfing", "Water Sports", "Paje Beach"],
    operatorId: "beach",
    category: "adventure",
    difficulty: "Moderate",
    bestSeason: "June - September (Kusi trade winds)",
    duration: "2 - 5 Days",
    featured: true,
    highlights: [
      "Ride the legendary Kusi winds across Zanzibar's shallow turquoise lagoon.",
      "Certified IKO kite surfing lessons for all levels — beginner to advanced.",
      "Zanzibar Kite Cup held annually in August draws world-class competitors."
    ],
    itinerary: [
      { step: "Day 1: Wind & Water Orientation", detail: "Meet your IKO certified instructor, learn kite control on the beach, body drag in shallow water." },
      { step: "Day 2: Board Start Training", detail: "Take your first runs on the board under full instructor supervision with safety gear." },
      { step: "Day 3: Independent Riding", detail: "Ride the lagoon freely, experiment with turns, and enjoy sunset sessions over the Indian Ocean." }
    ]
  },
  {
    id: "deep-sea-fishing",
    title: "Deep Sea & Sport Fishing",
    badge: "SPORT FISHING",
    desc: "Cast your lines in the Pemba Channel and Mafia Island deep waters — world-renowned for sailfish, blue marlin, yellowfin tuna, and dorado. IGFA-recognized big game fishing runs all year.",
    detailedDesc: "Tanzania's offshore waters are among the finest sport fishing destinations in the Indian Ocean. The deep-water Pemba Channel between Pemba Island and the mainland drops to over 800 metres, creating rip currents that drive pelagic fish to the surface. Mafia Island's southern tip offers calm inshore reefs for snapper and grouper alongside full offshore big game runs for marlin, sailfish, and giant trevally.",
    images: {
      card: "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=300&q=80"
    },
    location: "Pemba Channel & Mafia Island",
    tags: ["Sport Fishing", "Marlin", "Big Game"],
    operatorId: "beach",
    category: "adventure",
    difficulty: "Moderate",
    bestSeason: "August - November (peak Pemba Channel runs)",
    duration: "1 - 3 Days",
    highlights: [
      "Target blue marlin, sailfish, and yellowfin tuna in the Pemba Channel.",
      "Fully equipped sport fishing boats with outriggers, fighting chairs, and live bait.",
      "Catch-and-release or trophy fishing with IGFA-certified captains."
    ],
    itinerary: [
      { step: "6:00 AM: Pre-dawn Boat Departure", detail: "Board your chartered sport fishing vessel at Shimoni or Mafia Island harbor." },
      { step: "7:30 AM: Deep Water Trolling Runs", detail: "Set lures and outriggers in the Pemba Channel while scanning bird activity for marlin signs." },
      { step: "2:00 PM: Inshore Reef Fishing", detail: "Target snapper, grouper, and giant trevally on the coral reef drop-offs." }
    ]
  },
  {
    id: "chimp-trekking",
    title: "Chimpanzee Trekking",
    badge: "PRIMATE SAFARI",
    desc: "Track our closest relatives through the forests of Gombe Stream and Mahale Mountains. Jane Goodall began her legendary chimpanzee research at Gombe — and you can follow in her footsteps.",
    detailedDesc: "Tanzania is home to two world-class chimpanzee trekking destinations: Gombe Stream National Park on the eastern shore of Lake Tanganyika — made famous by Dr Jane Goodall's lifelong research — and the remote Mahale Mountains, accessible only by boat, where habituated chimpanzee communities roam free. Treks are led by certified TANAPA guides and park rangers, with group sizes strictly limited to protect the primates.",
    images: {
      card: "https://images.unsplash.com/photo-1540573133827-2e116e78877a?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1522030299832-26194310dd2c?auto=format&fit=crop&w=300&q=80"
    },
    location: "Gombe Stream & Mahale Mountains",
    tags: ["Chimpanzees", "Primates", "Forest Trek"],
    operatorId: "safari",
    category: "adventure",
    difficulty: "Moderate",
    bestSeason: "July - October (dry forest trails)",
    duration: "2 - 4 Days",
    featured: true,
    highlights: [
      "Track habituated chimpanzee families in Jane Goodall's Gombe Stream Park.",
      "Boat-access-only Mahale Mountains — one of Africa's most remote primate sanctuaries.",
      "Strict group limits of 6 people per trek for intimate and responsible wildlife encounters."
    ],
    itinerary: [
      { step: "Day 1: Lake Tanganyika Arrival", detail: "Fly or boat into Kigoma, transfer to Gombe by water taxi, briefing at ranger station." },
      { step: "Day 2: Morning Chimp Trek", detail: "Depart at dawn with your ranger guide to locate and observe chimpanzee family groups in the forest." },
      { step: "Day 3: Mahale Boat Transfer (optional)", detail: "Travel by lake boat to the remote Mahale Mountains for a second community encounter." }
    ]
  },
  {
    id: "bird-watching",
    title: "Bird Watching & Flamingo Lakes",
    badge: "BIRDING",
    desc: "Tanzania hosts over 1,100 bird species — one of the highest concentrations in Africa. From millions of lesser flamingos at Lake Natron to forest hornbills and coastal waders, every landscape delivers.",
    detailedDesc: "Tanzania is a world-class birding destination, with habitats ranging from alpine Kilimanjaro montane forest to the Serengeti's open savannah, Rufiji Delta mangroves, and Lake Natron's soda flats. November to April brings millions of migratory species from Europe and Asia. Lake Manyara's fig forest hosts the largest breeding colony of pink-backed pelicans in East Africa, while Lake Natron is the primary breeding site for lesser flamingos on the continent.",
    images: {
      card: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      banner: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
    },
    location: "Lake Natron, Lake Manyara, Rufiji Delta",
    tags: ["Flamingos", "Birding", "Migratory Species"],
    operatorId: "safari",
    category: "adventure",
    difficulty: "Easy",
    bestSeason: "November - April (migratory season peak)",
    duration: "2 - 4 Days",
    highlights: [
      "Witness millions of pink lesser flamingos at Lake Natron's soda breeding flats.",
      "1,100+ bird species including endemics, migrants, and rare coastal waders.",
      "Lake Manyara tree-climbing lions AND one of Africa's largest pelican colonies."
    ],
    itinerary: [
      { step: "Day 1: Lake Natron Arrival", detail: "Drive north from Arusha through the Rift Valley. Arrive at Lake Natron as flamingos gather at dusk." },
      { step: "Day 2: Dawn Flamingo Walk", detail: "Wade the lake edge at dawn with your naturalist guide. Photograph thousands of flamingos at first light." },
      { step: "Day 3: Lake Manyara Forest Birding", detail: "Drive south to Manyara. Spot pelicans, storks, kingfishers, and hornbills in the fig tree forest canopy." }
    ]
  }
];
