"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HDImage from "@/components/HDImage";
import { MapPin, ChevronRight, Sun, Thermometer, Compass, Star, Eye, Calendar, Sparkles } from "lucide-react";

import { MONTHLY_GUIDES, MonthlyActivity } from "@/data/monthly-guides";
import { ACTIVITIES } from "@/data/activities";

interface SeasonalStat {
  temp: string;
  wildlifeRating: string;
  coastalCondition: string;
  summary: string;
  crowds: "Low" | "Moderate" | "Peak";
  suitability: string;
}

const SEASONAL_STATS: Record<string, SeasonalStat> = {
  january: {
    temp: "26°C / 78°F",
    wildlifeRating: "85% (Green Season Grazing)",
    coastalCondition: "Very Calm & Warm",
    summary: "Lush emerald plains, beautiful photography lighting, fewer tourists, and peaceful game viewing corridors.",
    crowds: "Moderate",
    suitability: "Romance, Slower Safaris, Photography"
  },
  february: {
    temp: "27°C / 81°F",
    wildlifeRating: "98% (Ndutu Calving Peak)",
    coastalCondition: "Excellent Dive Clarity",
    summary: "ミラクル Calving Season! Over 500,000 baby wildebeests born within a small window, attracting intense predator chases.",
    crowds: "Peak",
    suitability: "Action Wildlife, Great Migration, Safaris"
  },
  march: {
    temp: "27°C / 81°F",
    wildlifeRating: "80% (Resident Prides)",
    coastalCondition: "Vernal Calm Winds",
    summary: "Warm weather transitions. Quiet off-peak savannah rates combined with absolute optimal trade winds for island sailing.",
    crowds: "Low",
    suitability: "Couples Beach, Hiking, Value Safaris"
  },
  april: {
    temp: "24°C / 75°F",
    wildlifeRating: "70% (Wetland Migrations)",
    coastalCondition: "Warm Coastal Showers",
    summary: "Tanzania's 'Garden of God' blooms. Highland grasslands turn into a vibrant explosion of wildflowers and orchids.",
    crowds: "Low",
    suitability: "Botany Hikes, Off-grid Nature, Peace"
  },
  may: {
    temp: "25°C / 77°F",
    wildlifeRating: "75% (Photographic Green)",
    coastalCondition: "Quiet Tropical Shores",
    summary: "Dramatic cloudy skies, sweeping green plains, and clean dust-free air create the absolute best conditions for photographers.",
    crowds: "Low",
    suitability: "Landscape Photography, Secluded Beaches"
  },
  june: {
    temp: "24°C / 75°F",
    wildlifeRating: "90% (Grumeti River Action)",
    coastalCondition: "Kusi Trade Winds Starting",
    summary: "Dry season launch. Snow-capped trails on Kilimanjaro open up under crisp blue skies; dolphin spotting peaks in Nungwi.",
    crowds: "Moderate",
    suitability: "Summit Climbing, Marine Diving, Safaris"
  },
  july: {
    temp: "23°C / 73°F",
    wildlifeRating: "99% (Mara Crossing Peak)",
    coastalCondition: "Cool Marine Breezes",
    summary: "The ultimate show: thousands of wildebeest and zebra braving dangerous Nile crocodiles crossing the Mara River.",
    crowds: "Peak",
    suitability: "Mara River Crossings, Stone Town Culture"
  },
  august: {
    temp: "24°C / 75°F",
    wildlifeRating: "95% (Predator Spotting)",
    coastalCondition: "Strong Kusi Trade Winds",
    summary: "Dry yellow grass makes spotting lions and leopards extremely easy. Winds hit Paje Lagoon at a perfect, consistent pace.",
    crowds: "Peak",
    suitability: "Big Cat Safaris, Kite Surfing, Adventure"
  },
  september: {
    temp: "25°C / 77°F",
    wildlifeRating: "90% (Southern Circuit Walks)",
    coastalCondition: "Warm Coastal Calmness",
    summary: "Walking safari perfection. Track big game on foot with rangers in Ruaha; ideal seas for big game sport fishing in Pemba.",
    crowds: "Moderate",
    suitability: "Walking Safaris, Sport Fishing, Deep Sea"
  },
  october: {
    temp: "27°C / 81°F",
    wildlifeRating: "88% (Primate Forest Treks)",
    coastalCondition: "Ultra Dive Visibility (30m+)",
    summary: "Dry forest floor makes tracking chimpanzees at Gombe highly accessible; Indian Ocean achieves absolute crystal-clear transparency.",
    crowds: "Moderate",
    suitability: "Chimp Trekking, Reef Diving, Adventure"
  },
  november: {
    temp: "28°C / 82°F",
    wildlifeRating: "92% (Lesser Flamingo Arrivals)",
    coastalCondition: "Warm Sunny Shores",
    summary: "Millions of pink lesser flamingos turn Lake Natron's shores bright pink; short rains bring a sudden lush rebirth to dry grasslands.",
    crowds: "Low",
    suitability: "Birding Photography, Unique Landscapes"
  },
  december: {
    temp: "28°C / 82°F",
    wildlifeRating: "90% (Festive Safari Congre)",
    coastalCondition: "Warm Calm Festive Seas",
    summary: "Lively holiday energy. The Ngorongoro caldera floor is booming with animals; beach resort bars light up with fires and seafood curries.",
    crowds: "Peak",
    suitability: "Festive Holidays, Luxury Resorts, Safaris"
  }
};

function getGuideImage(guide: MonthlyActivity): string {
  return guide.img ?? ACTIVITIES.find(a => a.id === guide.activityId)?.images.card ?? "";
}

export default function BeInspired() {
  const [selectedMonth, setSelectedMonth] = useState("january");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const monthParam = params.get("month")?.toLowerCase();

      if (monthParam && MONTHLY_GUIDES[monthParam]) {
        setSelectedMonth(monthParam);

        // Scroll to calendar section
        setTimeout(() => {
          const calendarSection = document.getElementById("calendar-section");
          if (calendarSection) {
            calendarSection.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 150);
      }
    }
  }, []);

  const months = [
    { id: "january", name: "Jan" },
    { id: "february", name: "Feb" },
    { id: "march", name: "Mar" },
    { id: "april", name: "Apr" },
    { id: "may", name: "May" },
    { id: "june", name: "Jun" },
    { id: "july", name: "Jul" },
    { id: "august", name: "Aug" },
    { id: "september", name: "Sep" },
    { id: "october", name: "Oct" },
    { id: "november", name: "Nov" },
    { id: "december", name: "Dec" }
  ];

  const activeGuides = MONTHLY_GUIDES[selectedMonth] || MONTHLY_GUIDES.january;
  const stats = SEASONAL_STATS[selectedMonth] || SEASONAL_STATS.january;

  return (
    <>
      <Header />
      
      <main className="flex-1 bg-[#eaeff2]/30 font-sans py-16 px-4 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Header Card */}
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-tz-blue bg-tz-blue/10 backdrop-blur-md py-1.5 px-4 rounded-full border border-tz-blue/15 mb-3 inline-block">
              DISCOVER SEASONAL TANZANIA
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-tz-charcoal tracking-tight leading-none mt-2">
              Be Inspired &mdash; Calendar
            </h1>
            <p className="text-sm font-light text-slate-500 mt-4 max-w-xl leading-relaxed mx-auto">
              Tanzania changes its skin monthly. Track the migrations, wildflower blooms, film festivals, and wind currents to plan your ultimate, highly tailored escape.
            </p>
            <div className="w-20 h-1 bg-tz-gold mx-auto mt-6 rounded-full"></div>
          </div>

          {/* DYNAMIC TIMELINE & MONTH COMPASS SECTION */}
          <section id="calendar-section" className="w-full text-left mb-16 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-2xl relative overflow-hidden">
            {/* Native tribal visual pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="calendar-tribal" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 0 30 L 30 0 L 60 30 L 30 60 Z" fill="none" stroke="#003c66" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#calendar-tribal)" />
              </svg>
            </div>

            <div className="relative z-10 w-full">
              
              {/* Dynamic timeline horizontal row */}
              <div className="w-full overflow-x-auto pb-5 mb-8 scrollbar-thin">
                <div className="flex gap-2 min-w-[700px] sm:min-w-0 pr-6 relative py-2">
                  
                  {/* Subtle connecting gold timeline line */}
                  <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 -translate-y-1/2 z-0 hidden sm:block"></div>
                  
                  {months.map((m) => {
                    const isActive = selectedMonth === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setSelectedMonth(m.id)}
                        className={`relative z-10 py-3.5 px-6 rounded-full text-xs font-black transition-all cursor-pointer tracking-wider flex-1 text-center shrink-0 uppercase active:scale-95 border ${
                          isActive
                            ? "bg-[#005e7c] text-white shadow-xl border-[#005e7c] scale-105"
                            : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"
                        }`}
                      >
                        {m.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SEASONAL SUMMARY BOARD: A dynamic glassmorphic stat panel for UI excellence */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 bg-[#eaeff2]/35 shadow-inner grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-center">
                
                {/* Board Left: Current Season Status */}
                <div className="flex flex-col gap-1.5 md:border-r border-slate-200/80 pr-6 text-left">
                  <span className="text-[10px] font-black text-tz-blue uppercase tracking-widest flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-tz-gold" /> SEASON COMPASS STATUS
                  </span>
                  <h3 className="font-display font-black text-2xl text-tz-charcoal capitalize mt-1.5 flex items-center gap-1.5">
                    {selectedMonth} Highlights <Sparkles className="w-4 h-4 text-tz-gold shrink-0 animate-pulse" />
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-[9px] font-black uppercase py-1 px-3 bg-[#005e7c] text-white rounded-md tracking-wider">
                      Crowd Index: {stats.crowds}
                    </span>
                  </div>
                </div>

                {/* Board Middle: Live Stats */}
                <div className="grid grid-cols-2 gap-4 md:border-r border-slate-200/80 px-2 sm:px-6 text-left">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5 text-red-400" /> Temperature
                    </span>
                    <span className="text-xs font-black text-tz-charcoal">{stats.temp}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Sun className="w-3.5 h-3.5 text-tz-gold" /> Coastal Sea
                    </span>
                    <span className="text-xs font-black text-tz-charcoal truncate">{stats.coastalCondition}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 col-span-2">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-tz-blue" /> Primal Wildlife Index
                    </span>
                    <span className="text-xs font-black text-tz-blue">{stats.wildlifeRating}</span>
                  </div>
                </div>

                {/* Board Right: Travel Suitability Info */}
                <div className="flex flex-col gap-2 pl-2 sm:pl-6 text-left h-full justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-tz-gold shrink-0" /> Recommended For
                    </span>
                    <span className="text-xs font-semibold text-tz-charcoal italic leading-snug">{stats.suitability}</span>
                  </div>
                  <p className="text-xs font-light text-slate-500 leading-relaxed mt-2 border-t border-slate-200/40 pt-2 font-sans line-clamp-2">
                    {stats.summary}
                  </p>
                </div>

              </div>

              {/* STREAMLINED 2-COLUMN PREMIUM GRID: 100% UNIQUE DIVERSE IMAGES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
                {activeGuides.map((guide, idx) => (
                  <Link
                    key={`${selectedMonth}-calendar-${guide.title}`}
                    href={`/be-inspired/${guide.id}`}
                    className="group bg-slate-50 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/60 hover:border-slate-100 shadow-lg hover:shadow-2xl hover:scale-[1.008] transition-all duration-300 flex flex-col h-full cursor-pointer text-left relative"
                  >
                    {/* Image Box */}
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden shrink-0">
                      <HDImage
                        src={getGuideImage(guide)}
                        alt={guide.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"></div>
                      
                      {/* Premium Category Overlay */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-tz-charcoal py-1.5 px-3.5 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-md">
                        {guide.badge}
                      </div>

                      {/* Micro interaction eye count indicator */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md py-1 px-2.5 rounded-md border border-white/10 text-white text-[8px] font-bold tracking-wider">
                        <Eye className="w-3 h-3 text-tz-gold" />
                        <span>Bookable Package</span>
                      </div>
                    </div>

                    {/* Premium description content */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
                      <div className="flex flex-col gap-3">
                        <h3 className="font-display font-black text-xl sm:text-2xl text-tz-charcoal group-hover:text-tz-blue transition-colors leading-tight">
                          {guide.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-light text-slate-500 leading-relaxed font-sans line-clamp-3">
                          {guide.desc}
                        </p>
                      </div>

                      {/* Location bar details */}
                      <div className="mt-4 pt-5 border-t border-slate-200/60 flex items-center justify-between w-full">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate max-w-[200px]">
                          <MapPin className="w-4 h-4 text-tz-blue shrink-0" />
                          <span className="truncate">{guide.location}</span>
                        </div>
                        
                        <span className="text-[10px] font-black text-tz-blue uppercase tracking-widest flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          Read Story &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>

          {/* BOTTOM BANNER: Ready to plan your Tanzania trip? */}
          <div className="w-full bg-[#f1f5f9] rounded-3xl p-10 sm:p-12 text-left text-tz-charcoal shadow-inner border border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-tz-charcoal leading-tight">
                Ready to plan your Tanzania trip?
              </h3>
              <p className="text-xs sm:text-sm font-light text-slate-500 leading-relaxed font-sans">
                Find everything you need, visas, travel tips, safety, currency, and inspiration - in one place.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 shrink-0 justify-center">
              <Link
                href="/trip-builder"
                className="bg-[#003452] hover:bg-[#00243a] text-white py-3.5 px-8 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md flex items-center justify-center cursor-pointer active:scale-95"
              >
                Open Plan Your Trip
              </Link>
              <Link
                href="/visa-checker"
                className="bg-white hover:bg-slate-50 border border-slate-200 text-tz-charcoal py-3.5 px-8 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer"
              >
                Visa Application
              </Link>
              <Link
                href="/things-to-do"
                className="bg-white hover:bg-slate-50 border border-slate-200 text-tz-charcoal py-3.5 px-8 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer"
              >
                Things To Do
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
