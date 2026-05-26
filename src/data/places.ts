export interface PlaceImages {
  card: string;       // Geographic preview card image (human-free scenery)
  banner: string;     // Panoramic wide visual for detailed page headers
  map: string;        // Small preview visual for maps/drawers
}

export interface Place {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  desc: string;
  images: PlaceImages; // Unified Decoupled Asset Pool
  coords: string;
  temp: string;
  bestTime: string;
  x: number; // Percent position on SVG map
  y: number;
  highlights: string[];
  primaryActivityId: string; // links to activities.ts for CTA URL
}

export const PLACES: Place[] = [
  {
    id: "serengeti",
    name: "Serengeti National Park",
    shortName: "Serengeti",
    badge: "SAFARI CROWN JEWEL",
    desc: "Vast golden grasslands, classic acacia thorn trees, and massive animal migrations. Serengeti offers unmatched sightings of prides of lions, cheetah sprints, and the epic Wildebeest Great Migration.",
    images: {
      card: "https://images.pexels.com/photos/10222036/pexels-photo-10222036.jpeg?auto=compress&cs=tinysrgb&w=800#pos=bottom",
      banner: "https://images.pexels.com/photos/10222036/pexels-photo-10222036.jpeg?auto=compress&cs=tinysrgb&w=1200#pos=bottom",
      map: "https://images.pexels.com/photos/10222036/pexels-photo-10222036.jpeg?auto=compress&cs=tinysrgb&w=300#pos=bottom"
    },
    coords: "2.1540° S, 34.6857° E",
    temp: "26°C / 78°F",
    bestTime: "June - October (Dry season migration)",
    x: 25,
    y: 20,
    highlights: ["Great Migration", "Lions on Kopjes", "Hot Air Ballooning"],
    primaryActivityId: "safari"
  },
  {
    id: "ngorongoro",
    name: "Ngorongoro Crater",
    shortName: "Ngorongoro",
    badge: "VOLCANIC CALDERA WONDER",
    desc: "A massive, intact volcanic caldera harboring over 25,000 large mammals in a self-contained ecological haven. Home to the highest density of predators and rare black rhinos.",
    images: {
      card: "https://images.pexels.com/photos/18387270/pexels-photo-18387270.jpeg?auto=compress&cs=tinysrgb&w=800",
      banner: "https://images.pexels.com/photos/18387270/pexels-photo-18387270.jpeg?auto=compress&cs=tinysrgb&w=1200",
      map: "https://images.pexels.com/photos/18387270/pexels-photo-18387270.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    coords: "3.2444° S, 35.4807° E",
    temp: "22°C / 72°F",
    bestTime: "Year-Round wildlife viewing",
    x: 38,
    y: 26,
    highlights: ["Big Five Caldera", "Black Rhinos", "Lush Crater Rim"],
    primaryActivityId: "safari"
  },
  {
    id: "kilimanjaro",
    name: "Mount Kilimanjaro",
    shortName: "Kilimanjaro",
    badge: "THE ROOF OF AFRICA",
    desc: "Tanzania's sleeping volcanic giant is the highest free-standing mountain in the world (5,895m). Traverse through 5 distinct climatic zones, from tropical rain forests to absolute arctic glaciers.",
    images: {
      card: "https://images.pexels.com/photos/10804209/pexels-photo-10804209.jpeg?auto=compress&cs=tinysrgb&w=800#pos=bottom",
      banner: "https://images.pexels.com/photos/10804209/pexels-photo-10804209.jpeg?auto=compress&cs=tinysrgb&w=1200#pos=bottom",
      map: "https://images.pexels.com/photos/10804209/pexels-photo-10804209.jpeg?auto=compress&cs=tinysrgb&w=300#pos=bottom"
    },
    coords: "3.0674° S, 37.3556° E",
    temp: "-5°C / 23°F (Summit)",
    bestTime: "January - March, July - October",
    x: 52,
    y: 24,
    highlights: ["Uhuru Peak 5,895m", "5 Climate Zones", "Scenic Solstice Climb"],
    primaryActivityId: "hiking"
  },
  {
    id: "zanzibar",
    name: "Zanzibar Archipelago",
    shortName: "Zanzibar",
    badge: "SPICE ISLAND PARADISE",
    desc: "An exotic archipelago of coral islands fringed by coconut palms and white beaches. Explore Stone Town's Arabic heritage and snorkel in turquoise reef networks.",
    images: {
      card: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
      banner: "https://images.unsplash.com/photo-1501179691627-eeabeb5df608?auto=format&fit=crop&w=1200&q=80",
      map: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=300&q=80"
    },
    coords: "6.1659° S, 39.2026° E",
    temp: "29°C / 84°F",
    bestTime: "June - October, January - February",
    x: 68,
    y: 52,
    highlights: ["Stone Town Alleys", "Mnemba Reef Sanctuary", "Spice Farm Tours"],
    primaryActivityId: "beach"
  },
  {
    id: "mafia",
    name: "Mafia Island",
    shortName: "Mafia Island",
    badge: "MARINE REEF SANCTUARY",
    desc: "A quiet, serene island sanctuary offering magical snorkeling with whale sharks and harmless jellyfish. Known for deep-sea diving, mangroves, and secluded historic ruins.",
    images: {
      card: "https://images.pexels.com/photos/1021073/pexels-photo-1021073.jpeg?auto=compress&cs=tinysrgb&w=800",
      banner: "https://images.pexels.com/photos/1021073/pexels-photo-1021073.jpeg?auto=compress&cs=tinysrgb&w=1200",
      map: "https://images.pexels.com/photos/1021073/pexels-photo-1021073.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    coords: "7.8541° S, 39.8166° E",
    temp: "28°C / 82°F",
    bestTime: "October - March (Whale Sharks feeding)",
    x: 74,
    y: 65,
    highlights: ["Whale Sharks", "Protected Reefs", "Historic Ruins"],
    primaryActivityId: "snorkeling"
  },
  {
    id: "saadani",
    name: "Saadani National Park",
    shortName: "Saadani",
    badge: "BUSH MEETS BEACH",
    desc: "The only coastal national park in East Africa where the savannah directly meets the Indian Ocean. Witness green sea turtle hatchings and see elephants walking on sandy shores.",
    images: {
      card: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
      banner: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80",
      map: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=300&q=80"
    },
    coords: "5.8828° S, 38.7753° E",
    temp: "27°C / 81°F",
    bestTime: "July - September, January - February",
    x: 62,
    y: 44,
    highlights: ["Beachfront Elephants", "Savannah River Safari", "Sea Turtle Hatcheries"],
    primaryActivityId: "safari"
  }
];
