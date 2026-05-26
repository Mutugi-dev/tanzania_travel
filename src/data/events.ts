export interface TourismEvent {
  id: string;
  type: string;
  title: string;
  date: string;
  venue: string;
  desc: string;
  fullText: string[];
  img: string;
  buttonText: string;
}

export const EVENTS: TourismEvent[] = [
  {
    id: "serengeti-awards",
    type: "Awards Gala",
    title: "Serengeti Awards 2026",
    date: "31 January 2026",
    venue: "Mount Meru Hotel, Arusha",
    desc: "Recognising excellence in Tanzania's tourism and hospitality sector with an exclusive invitation-only gala.",
    fullText: [
      "The Serengeti Awards is the premier annual event dedicated to honoring the very best in Tanzania's tourism, conservation, and hospitality industries.",
      "Held in the vibrant safari hub of Arusha, this black-tie gala brings together industry leaders, conservationists, lodge owners, and government officials. The awards celebrate outstanding contributions to sustainable tourism, luxury hospitality, and wildlife protection.",
      "This year's event is particularly special following Tanzania's 41 nominations at the World Travel Awards. Space is highly limited and attendance is strictly by invitation only."
    ],
    img: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Request Access"
  },
  {
    id: "castle-lite-unlocks",
    title: "Castle Lite Unlocks: Dar es Salaam",
    type: "Live Concert",
    date: "7 February 2026",
    venue: "Lugalo Golf Club, Kawe",
    desc: "A major live music and lifestyle experience under the Castle Lite Unlocks brand, delivering festival-style entertainment in Dar es Salaam.",
    fullText: [
      "Castle Lite Unlocks is bringing an unprecedented festival experience to the coastal city of Dar es Salaam. Prepare for an unforgettable night of high-energy performances, immersive lifestyle zones, and premium entertainment.",
      "Headlined by international Afrobeats superstar Davido, the concert will take place at the expansive Lugalo Golf Club in Kawe. The event promises state-of-the-art stage production, interactive sponsor activations, and a vibrant atmosphere celebrating African music culture.",
      "Tickets are expected to sell out quickly. Secure your spot now to be part of the most anticipated lifestyle event of the year."
    ],
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    buttonText: "Get Tickets"
  },
  {
    id: "poate-uganda",
    type: "Tourism Expo",
    title: "Pearl of Africa Tourism Expo 2026",
    date: "21–23 May 2026",
    venue: "Speke Resort Munyonyo, Kampala, Uganda",
    desc: "Meet Tanzania Tourism at the Pearl of Africa Tourism Expo (POATE) 2026. Explore tourism partnerships, networking opportunities, and business growth across the region.",
    fullText: [
      "The Pearl of Africa Tourism Expo (POATE) is East Africa's premier tourism exhibition, hosted annually in Kampala, Uganda.",
      "The Tanzania Tourist Board, along with top-tier tour operators and hoteliers, will be exhibiting at the event to showcase Tanzania's unique offerings, from the Great Migration to the pristine beaches of Zanzibar.",
      "This is a prime opportunity for B2B networking, establishing cross-border safari packages, and expanding regional tourism investments. Join us at the Tanzania Pavilion."
    ],
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    buttonText: "Register Now"
  },
  {
    id: "seoul-travel-fair",
    type: "Tradeshow",
    title: "Seoul International Travel Fair 2026",
    date: "4–7 June 2026",
    venue: "COEX, Seoul, South Korea",
    desc: "Discover unique travel experiences, cultural heritage, and investment opportunities across Tanzania's leading destinations at SITF 2026.",
    fullText: [
      "The Seoul International Travel Fair (SITF) is one of Asia's largest and most influential tourism exhibitions.",
      "Tanzania's delegation will be presenting tailored safari itineraries, mountain climbing expeditions, and luxury coastal retreats specifically designed for the discerning South Korean outbound market.",
      "We invite travel agents, media, and investors to visit our booth to discuss direct partnerships, familiarize themselves with our diverse tourism products, and learn about the new upcoming direct flight routes."
    ],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    buttonText: "Register Now"
  },
  {
    id: "africa-travel-indaba",
    type: "Tradeshow",
    title: "Africa's Travel Indaba 2026",
    date: "11–14 May 2026",
    venue: "Durban ICC, South Africa",
    desc: "Meet Tanzania Tourism at Africa's Travel Indaba 2026 in Durban and explore diverse tourism offerings while building strategic partnerships across the African travel trade.",
    fullText: [
      "Africa's Travel Indaba is one of the largest tourism marketing events on the African calendar and one of the top three 'must visit' events of its kind on the global calendar.",
      "Destination Tanzania will have a massive presence, showcasing the full spectrum of our tourism portfolio: from the endless plains of the Serengeti and the majesty of Mount Kilimanjaro to the rich Swahili culture of Zanzibar.",
      "We look forward to engaging with global buyers, showcasing new eco-luxury developments, and fostering partnerships that will drive sustainable tourism growth."
    ],
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    buttonText: "Register Now"
  },
  {
    id: "china-roadshow",
    type: "Tradeshow",
    title: "China Roadshow 2026",
    date: "30 May - 5 June 2026",
    venue: "Shanghai, Changsha, Shenzhen",
    desc: "Engage with key travel trade partners across major Chinese cities, promoting Tanzania's safari, beach, and premium travel experiences.",
    fullText: [
      "The Tanzania Tourism China Roadshow is a strategic initiative designed to penetrate one of the world's fastest-growing outbound tourism markets.",
      "Over the course of a week, our delegation will travel across Shanghai, Changsha, and Shenzhen, hosting exclusive B2B workshops, media briefings, and cultural showcases.",
      "This roadshow aims to strengthen bilateral tourism ties, educate Chinese travel professionals about our diverse offerings, and facilitate direct booking channels with Tanzanian operators."
    ],
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    buttonText: "Register Now"
  },
  {
    id: "south-korea-roadshow",
    type: "Tradeshow",
    title: "South Korea Roadshow 2026",
    date: "9-13 June 2026",
    venue: "Seoul, Busan, Incheon",
    desc: "Engage with key travel trade partners across Seoul, Busan, and Incheon, showcasing Tanzania's experiences while expanding partnerships.",
    fullText: [
      "Following the Seoul International Travel Fair, the Tanzania Tourism delegation will embark on a comprehensive roadshow across South Korea's major metropolitan hubs.",
      "The roadshow will focus on interactive presentations, virtual reality safari experiences, and one-on-one meetings with top-tier Korean travel agencies and luxury tour operators.",
      "Our goal is to solidify Tanzania as the preferred African destination for Korean travelers seeking authentic wilderness adventures and premium hospitality."
    ],
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    buttonText: "Register Now"
  },
  {
    id: "egypt-investment-forum",
    type: "Investment Forum",
    title: "Tanzania & Egypt Tourism, Business & Investment Forum 2026",
    date: "08-09 June 2026",
    venue: "Cairo, Egypt",
    desc: "Explore B2B networking opportunities, promote Tanzania as a premier destination, and engage with potential tourism and investment partners in Egypt.",
    fullText: [
      "The Tanzania & Egypt Tourism, Business & Investment Forum is a landmark event designed to foster robust economic ties and cross-sector collaborations between the two nations.",
      "The forum will highlight lucrative investment opportunities within Tanzania's hospitality, infrastructure, and blue economy sectors. It will also serve as a platform to promote bilateral tourism flows.",
      "Key government ministers, industry captains, and investors will convene for high-level panel discussions, project pitch sessions, and exclusive networking events."
    ],
    img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80",
    buttonText: "Register Now"
  },
  {
    id: "ziff-zanzibar",
    type: "Cultural Festival",
    title: "Zanzibar International Film Festival (ZIFF) 2026",
    date: "18–26 July 2026",
    venue: "Stone Town, Zanzibar",
    desc: "Celebrating the rich Swahili culture, arts, and cinema from across the African continent and Dhow countries.",
    fullText: [
      "The Zanzibar International Film Festival (ZIFF) is the largest cultural event in East Africa, bringing together film, music, and performing arts from across the globe.",
      "For nine days, the historic Stone Town of Zanzibar is transformed into a vibrant cultural hub. Film screenings take place at the iconic Old Fort (Ngome Kongwe), while beaches and historic sites host live traditional Taarab music concerts, street performances, and craft workshops.",
      "ZIFF celebrates the unique Swahili heritage and provides an indispensable platform for African filmmakers and actors to showcase their narratives to international audiences."
    ],
    img: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80",
    buttonText: "Learn More & Tickets"
  },
  {
    id: "kili-marathon",
    type: "Sports Tourism",
    title: "Kilimanjaro Marathon 2026",
    date: "1 March 2026",
    venue: "Moshi Cooperative University (MoCU), Moshi",
    desc: "Run in the shadow of the Roof of Africa. Tanzania's biggest annual sporting event drawing thousands of runners worldwide.",
    fullText: [
      "The Kilimanjaro Marathon is a world-renowned athletic event hosted annually in Moshi, right at the foothills of Mount Kilimanjaro.",
      "Featuring a full 42km marathon, a 21km half marathon, and a 5km fun run, it attracts thousands of elite professional athletes and amateur runners from over 50 countries. The scenic routes wind through coffee plantations and local villages, with the snow-capped peak of Kilimanjaro as a constant backdrop.",
      "This sports tourism event is fully registered and recognized by World Athletics, serving as a powerful platform for fundraising and highlighting the region's conservation efforts."
    ],
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",
    buttonText: "Register to Run"
  },
  {
    id: "karibu-kili-fair",
    type: "Tourism Expo",
    title: "Karibu-Kili Fair (TATE) 2026",
    date: "5–7 June 2026",
    venue: "Magereza Ground, Arusha",
    desc: "East Africa's largest outdoor tourism exposition, bringing together travel trade professionals from across the continent.",
    fullText: [
      "The Karibu-Kili Fair is the ultimate outdoor B2B and B2C tourism event in East Africa, co-organized by the Tanzania Association of Tour Operators (TATO).",
      "The exposition serves as a strategic networking hub for international travel buyers, destination management companies, luxury safari lodges, and regional airlines. Visitors can discover new tour products, negotiate contract rates, and sample Swahili coffee.",
      "With over 400 exhibitors and B2B matchmaking services, it is the premier platform to expand tourism business operations across the East African safari circuit."
    ],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    buttonText: "Exhibitor & Buyer Registration"
  }
];
