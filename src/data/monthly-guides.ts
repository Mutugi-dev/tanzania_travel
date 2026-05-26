export interface MonthlyActivity {
  id: string;
  title: string;
  badge: string;
  location: string;
  desc: string;
  activityId: string;
  img?: string; // Optional custom visual to override default activity image
  // Bucket List carousel metadata
  bucketList?: boolean;
  bucketListIndex?: string;
  bucketListTitle?: string;
  bucketListSubtitle?: string;
  bucketListOrder?: number;
  bucketListImg?: string;
}

export const MONTHLY_GUIDES: Record<string, MonthlyActivity[]> = {
  january: [
    {
      id: "january-green-season-safari",
      title: "Green Season Safari Moments",
      badge: "JANUARY 2026",
      location: "Serengeti • Ngorongoro • Tarangire",
      desc: "Lush emerald grasslands, dramatic skies, fewer crowds, and gorgeous photography backdrops. Perfect for exploring northern game parks at a relaxed, unhurried pace.",
      activityId: "safari",
      img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      bucketList: true,
      bucketListIndex: "INTRO",
      bucketListTitle: "THIS IS EXACTLY WHERE I'M MEANT TO BE.",
      bucketListSubtitle: "TANZANIA WILDLIFE",
      bucketListOrder: 1
    },
    {
      id: "january-island-escapes",
      title: "Island & Coast Escapes",
      badge: "JANUARY 2026",
      location: "Stone Town • Nungwi • Paje beaches",
      desc: "Start the year on the tropical Swahili coast. Experience sailing on wooden dhows, exploring spice plantations, and walking historic Stone Town corridors.",
      activityId: "zanzibar-escape",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80"
    }
  ],
  february: [
    {
      id: "february-wildebeest-calving",
      title: "Wildebeest Calving Season",
      badge: "FEBRUARY 2026",
      location: "Serengeti Plains • Ndutu Area",
      desc: "Witness the miracle of life in the southern Serengeti plains. Over 500,000 wildebeest calves are born within a 3-week window, attracting prides of hunting lions and leopards.",
      activityId: "safari",
      img: "https://images.pexels.com/photos/11895511/pexels-photo-11895511.jpeg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "february-whale-shark",
      title: "Whale Shark Snorkeling",
      badge: "FEBRUARY 2026",
      location: "Mafia Island Marine Park",
      desc: "Swim alongside gentle giants. February is the absolute peak feeding season for whale sharks migrating in the warm waters off Mafia Island Marine Park.",
      activityId: "snorkeling",
      img: "https://images.pexels.com/photos/7905797/pexels-photo-7905797.jpeg?auto=compress&cs=tinysrgb&w=800",
      bucketList: true,
      bucketListIndex: "MID",
      bucketListTitle: "DRIFTING WITH THE WHALE SHARKS",
      bucketListSubtitle: "OF MAFIA ISLAND",
      bucketListOrder: 3
    }
  ],
  march: [
    {
      id: "march-coastal-dhow",
      title: "Coastal Dhow Sailing",
      badge: "MARCH 2026",
      location: "Zanzibar Island Sandbanks",
      desc: "Set sail at the vernal equity. Explore pristine isolated sandbanks, enjoy private seafood beach barbecues, and snorkel shallow marine conservation reefs.",
      activityId: "dhow-cruises",
      img: "https://images.pexels.com/photos/27742231/pexels-photo-27742231.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "march-meru-hiking",
      title: "Meru Foothills Hiking",
      badge: "MARCH 2026",
      location: "Mount Meru Conservation Area",
      desc: "Enjoy active day hikes through lush montane forests. Spot black-and-white colobus monkeys and enjoy beautiful waterfalls flowing off the volcanic slopes.",
      activityId: "hiking",
      img: "https://images.pexels.com/photos/12738166/pexels-photo-12738166.jpeg?auto=compress&cs=tinysrgb&w=800",
      bucketList: true,
      bucketListIndex: "#6",
      bucketListTitle: "DISCOVERING THE HIDDEN FALLS",
      bucketListSubtitle: "OF MPANGA KIPENGERE",
      bucketListOrder: 5
    }
  ],
  april: [
    {
      id: "april-highland-wildflower",
      title: "Highland Wildflower Blooms",
      badge: "APRIL 2026",
      location: "Kitulo Plateau Grasslands",
      desc: "Explore the 'Garden of God'. April brings a spectacular explosion of orchids, irises, and lilies across the highland meadows of Kitulo Plateau National Park.",
      activityId: "hiking",
      bucketList: true,
      bucketListIndex: "#3",
      bucketListTitle: "WALKING THROUGH THE BLOOMS",
      bucketListSubtitle: "OF KITULO",
      bucketListOrder: 4
    },
    {
      id: "april-swahili-culinary",
      title: "Swahili Culinary Journeys",
      badge: "APRIL 2026",
      location: "Stone Town Spices & Markets",
      desc: "Take part in interactive Swahili cooking classes. Gather fresh cardamom and coconut from local trees, and cook dynamic coconut seafood curries.",
      activityId: "swahili-cuisine",
      img: "https://images.unsplash.com/photo-r_UUezIShIw?auto=format&fit=crop&w=800&q=80"
    }
  ],
  may: [
    {
      id: "may-swahili-heritage",
      title: "Swahili Coast Heritage Walks",
      badge: "MAY 2026",
      location: "Kilwa Kisiwani UNESCO ruins",
      desc: "Explore 14th-century Great Mosque stone archways, Sultan palaces, and Bagamoyo's deep colonial trading ports without off-season rushes.",
      activityId: "swahili-culture",
      img: "https://images.pexels.com/photos/33075905/pexels-photo-33075905.jpeg?auto=compress&cs=tinysrgb&w=800",
      bucketList: true,
      bucketListIndex: "#7",
      bucketListTitle: "EXPLORING THE ANCIENT RUINS",
      bucketListSubtitle: "OF KILWA",
      bucketListOrder: 6,
      bucketListImg: "https://images.pexels.com/photos/6342313/pexels-photo-6342313.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "may-paje-pampering",
      title: "Paje Beach Resort Pampering",
      badge: "MAY 2026",
      location: "South Coast Paje eco-camps",
      desc: "Pamper yourself with coconut-clove spa oils, beachfront infinity pools, and quiet coastal wellness retreats on isolated Unguja shores.",
      activityId: "resort-stays",
      img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
    }
  ],
  june: [
    {
      id: "june-kilimanjaro-summit",
      title: "Kilimanjaro Summiting Launch",
      badge: "JUNE 2026",
      location: "Machame & Lemosho Gates",
      desc: "The dry climbing season officially begins. Clear blue skies, crisp alpine air, and excellent trail conditions make June perfect to summit Uhuru Peak.",
      activityId: "hiking",
      img: "https://images.pexels.com/photos/10804209/pexels-photo-10804209.jpeg?auto=compress&cs=tinysrgb&w=800#pos=bottom",
      bucketList: true,
      bucketListIndex: "#1",
      bucketListTitle: "REACHING THE ROOF OF AFRICA",
      bucketListSubtitle: "MOUNT KILIMANJARO",
      bucketListOrder: 2
    },
    {
      id: "june-mnemba-diving",
      title: "Diving at Mnemba Atoll",
      badge: "JUNE 2026",
      location: "Zanzibar Marine Sanctuary",
      desc: "Explore absolute marine paradise. Under crystal-clear June waters, dive with pods of wild dolphins and green sea turtles in coral reefs.",
      activityId: "snorkeling",
      img: "https://images.unsplash.com/photo-9y7y26C-l4Y?auto=format&fit=crop&w=800&q=80"
    }
  ],
  july: [
    {
      id: "july-mara-crossings",
      title: "Epic Mara River Crossings",
      badge: "JULY 2026",
      location: "Northern Serengeti Corridor",
      desc: "Observe the crown jewel of African safaris: thousands of wildebeests braving the strong currents of the Mara River at the Kenyan border.",
      activityId: "safari",
      img: "https://images.unsplash.com/photo-HjvpwKGD_FE?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "july-ziff",
      title: "Zanzibar Film Festival (ZIFF)",
      badge: "JULY 2026",
      location: "Stone Town Historic Center",
      desc: "Immerse yourself in Swahili film and music heritage. Stone Town comes alive with traditional Taarab concerts and craft street markets.",
      activityId: "swahili-culture",
      img: "https://images.pexels.com/photos/35564244/pexels-photo-35564244.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ],
  august: [
    {
      id: "august-zanzibar-kiting",
      title: "Zanzibar Kite Surfing Cup",
      badge: "AUGUST 2026",
      location: "Paje Beach South-East",
      desc: "Catch the Kusi winds. Paje Beach becomes a vibrant hotspot as professional and beginner kite surfers glide across Zanzibar's shallow turquoise lagoons.",
      activityId: "kite-surfing",
      img: "https://images.pexels.com/photos/13211818/pexels-photo-13211818.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "august-meru-summit",
      title: "Meru Crater Rim Summiting",
      badge: "AUGUST 2026",
      location: "Mount Meru volcanic rim",
      desc: "Take on a rugged trekking challenge. Summit Mount Meru (4,562m) under clear dry skies with breathtaking views of Mount Kilimanjaro rising in the distance.",
      activityId: "hiking",
      img: "https://images.pexels.com/photos/12738166/pexels-photo-12738166.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ],
  september: [
    {
      id: "september-deep-sea-fishing",
      title: "Deep Sea Big Game Fishing",
      badge: "SEPTEMBER 2026",
      location: "Pemba Channel Waters",
      desc: "Take part in high-visibility ocean runs. The deep trenches of the Pemba Channel offer prime conditions for catching sailfish, marlins, and yellowfin tuna.",
      activityId: "deep-sea-fishing",
      img: "https://images.unsplash.com/photo-6_HqvY1E7NI?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "september-tortoise-encounters",
      title: "Giant Tortoise Encounters",
      badge: "SEPTEMBER 2026",
      location: "Changuu Prison Island",
      desc: "Cross the waters by dhow to visit Prison Island. Hand-feed giant Aldabra tortoises, some over 150 years old, and swim in calm surrounding sands.",
      activityId: "zanzibar-escape",
      img: "https://images.unsplash.com/photo-1535262412227-85541e910204?auto=format&fit=crop&w=800&q=80"
    }
  ],
  october: [
    {
      id: "october-chimp-trekking",
      title: "Chimpanzee Trekking Runs",
      badge: "OCTOBER 2026",
      location: "Gombe Stream • Mahale Mountains",
      desc: "Track our closest relatives. Dry forest pathways are easily accessible, offering intimate chimpanzee family encounters in Gombe Stream.",
      activityId: "chimp-trekking"
    },
    {
      id: "october-coral-reef-diving",
      title: "Zanzibar Coral Reef Diving",
      badge: "OCTOBER 2026",
      location: "Mafia & Zanzibar islands",
      desc: "Optimal underwater visibility. Dive deep walls, swim in tropical fish schools, and photograph marine conservation reefs under gentle October breezes.",
      activityId: "snorkeling",
      img: "https://images.unsplash.com/photo-9y7y26C-l4Y?auto=format&fit=crop&w=800&q=80"
    }
  ],
  november: [
    {
      id: "november-nesting-birds",
      title: "Nesting Bird Arrivals",
      badge: "NOVEMBER 2026",
      location: "Lake Natron Salt Flats",
      desc: "Watch millions of pink lesser flamingos gather to breed in the warm, mineral-rich salt flats of Lake Natron. An unmatched visual photography feast.",
      activityId: "bird-watching",
      img: "https://images.unsplash.com/photo-T0hhz0_Lydc?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "november-savannah-rebirth",
      title: "Savannah Rebirth Short-Rains",
      badge: "NOVEMBER 2026",
      location: "Serengeti Endless Grasslands",
      desc: "Witness the savannah turn deep green. The short rains trigger a sudden rebirth of golden grasslands, welcoming back migratory wildebeest herds.",
      activityId: "safari",
      img: "https://images.unsplash.com/photo-oymHjI4qPJI?auto=format&fit=crop&w=800&q=80"
    }
  ],
  december: [
    {
      id: "december-tropical-beach",
      title: "Tropical Beach Celebration",
      badge: "DECEMBER 2026",
      location: "Zanzibar Sandbanks • Paje",
      desc: "Spend the holidays on Zanzibar's white beaches. Enjoy sunset dhow cruises, live acoustic beach fires, Swahili food feasts, and ocean resort events.",
      activityId: "resort-stays",
      img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "december-festive-safaris",
      title: "Serengeti Festive Safaris",
      badge: "DECEMBER 2026",
      location: "Ngorongoro Crater Rim",
      desc: "Gather for a festive safari. The Ngorongoro Crater floor and central Serengeti plains are bustling with wildlife herds, making for an unforgettable journey.",
      activityId: "safari",
      img: "https://images.unsplash.com/photo-nf7W_hn6DKQ?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
