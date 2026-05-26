"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HDImage from "@/components/HDImage";
import { MapPin, ChevronRight, SearchX } from "lucide-react";
import { ACTIVITIES, Activity } from "@/data/activities";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Reusable card — defined outside component to avoid recreating on each render
function ActivityCard({ card, tall = false }: { card: Activity; tall?: boolean }) {
  return (
    <Link
      href={`/things-to-do/${card.id}`}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col h-full text-left cursor-pointer"
    >
      <div className={`relative ${tall ? "h-60" : "h-56"} overflow-hidden`}>
        <HDImage
          src={card.images.card}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 py-1.5 px-3.5 rounded-full bg-white text-[9px] font-black tracking-widest text-tz-charcoal shadow-md uppercase">
          {card.badge}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-2.5">
          <h3 className="font-display font-black text-xl text-tz-charcoal group-hover:text-tz-blue transition-colors leading-tight">
            {card.title}
          </h3>
          <p className="text-xs font-light text-slate-500 leading-relaxed font-sans line-clamp-3">
            {card.desc}
          </p>
        </div>
        <div className="mt-6 pt-5 border-t border-slate-100 flex justify-between items-center w-full">
          <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-tz-blue shrink-0" />
            <span className="truncate max-w-[140px]">{card.location}</span>
          </div>
          <span className="text-[10px] font-black text-tz-blue flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
            Explore &amp; Book <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ThingsToDoContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // Filter dynamically by category property
  const signatureActivities = ACTIVITIES.filter(a => a.category === "signature");
  const coastalExperiences = ACTIVITIES.filter(a => a.category === "coastal");
  const adventureEncounters = ACTIVITIES.filter(a => a.category === "adventure");
  const editorsHighlights = ACTIVITIES.filter(a => a.category === "editors");

  const searchResults = searchQuery
    ? ACTIVITIES.filter(a => 
        a.title.toLowerCase().includes(searchQuery) || 
        a.desc.toLowerCase().includes(searchQuery) ||
        a.location.toLowerCase().includes(searchQuery)
      )
    : [];

  return (
    <main className="flex-1 bg-slate-50 font-sans py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
            {searchQuery ? "Search Results" : "Things To Do \u2014 Explore Activities"}
          </h1>
          <p className="text-sm font-light text-slate-500 mt-3 max-w-xl leading-relaxed mx-auto">
            {searchQuery 
              ? `Showing results for "${searchQuery}"` 
              : "Unlock the ultimate Tanzanian itinerary. Explore 15 curated experiences \u2014 from classic safaris and summit climbs to chimpanzee treks, kite surfing, and flamingo lakes. Browse certified local tour operators and book direct."
            }
          </p>
          <div className="w-20 h-1 bg-tz-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {searchQuery ? (
          <section className="w-full text-left mb-20 min-h-[40vh]">
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map(card => <ActivityCard key={card.id} card={card} />)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <SearchX className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="font-display font-black text-2xl text-tz-charcoal">No activities found</h3>
                <p className="text-slate-500 mt-2 max-w-md">We couldn't find any activities matching "{searchQuery}". Try searching for something else like "safari" or "zanzibar".</p>
                <Link href="/things-to-do" className="mt-8 bg-[#005e7c] hover:bg-tz-blue-hover text-white py-3 px-8 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md">
                  View All Activities
                </Link>
              </div>
            )}
          </section>
        ) : (
          <>
            {/* Section 1: Signature Expeditions */}
            <section className="w-full text-left mb-20">
              <div className="mb-10 text-left">
                <h2 className="font-display font-black text-3xl sm:text-4xl text-tz-charcoal tracking-tight">
                  Signature <span className="text-[#005e7c]">Expeditions</span>
                </h2>
                <p className="text-sm font-light text-slate-500 mt-2 max-w-2xl leading-relaxed">
                  Tanzania&apos;s bucket-list signature journeys: classic game safaris, Zanzibar beach retreats, and Uhuru Peak summits.
                </p>
                <div className="w-16 h-1 bg-tz-gold mt-4 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {signatureActivities.map(card => <ActivityCard key={card.id} card={card} />)}
              </div>
            </section>

            {/* Section 2: Sea • Sun • Sand */}
            <section className="w-full text-left mb-20">
              <div className="mb-10 text-left">
                <h2 className="font-display font-black text-3xl sm:text-4xl text-tz-charcoal tracking-tight">
                  Explore <span className="text-[#005e7c]">Sea &bull; Sun &bull; Sand</span>
                </h2>
                <p className="text-sm font-light text-slate-500 mt-2 max-w-2xl leading-relaxed">
                  Pick an experience &mdash; then build your coastal itinerary with beaches, marine adventures, culture, and sunset moments.
                </p>
                <div className="w-16 h-1 bg-tz-gold mt-4 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coastalExperiences.map(card => <ActivityCard key={card.id} card={card} />)}
              </div>
            </section>

            {/* Section 3: Adventure & Nature Encounters (NEW) */}
            <section className="w-full text-left mb-20">
              <div className="mb-10 text-left">
                <h2 className="font-display font-black text-3xl sm:text-4xl text-tz-charcoal tracking-tight">
                  Adventure &amp; <span className="text-[#005e7c]">Nature Encounters</span>
                </h2>
                <p className="text-sm font-light text-slate-500 mt-2 max-w-2xl leading-relaxed">
                  Beyond the classic safari &mdash; ride Zanzibar&apos;s trade winds, fish the deep Pemba Channel, trek to find chimpanzees at Gombe, and witness a million flamingos at Lake Natron.
                </p>
                <div className="w-16 h-1 bg-tz-gold mt-4 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {adventureEncounters.map(card => <ActivityCard key={card.id} card={card} />)}
              </div>
            </section>

            {/* Section 4: Editor's Highlights */}
            <section className="w-full text-left mb-24">
              <div className="mb-10 text-left">
                <h2 className="font-display font-black text-3xl sm:text-4xl text-tz-charcoal tracking-tight">
                  Editor&apos;s <span className="text-[#005e7c]">Highlights</span>
                </h2>
                <p className="text-sm font-light text-slate-500 mt-2 max-w-xl leading-relaxed">
                  Curated picks to help you choose what to do first &mdash; especially if you&apos;re adding the coast after safari.
                </p>
                <div className="w-16 h-1 bg-tz-gold mt-4 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mr-auto">
                {editorsHighlights.map(card => <ActivityCard key={card.id} card={card} tall />)}
              </div>
            </section>
          </>
        )}

        {/* Bottom Call-To-Action Banner */}
        <div className="w-full bg-[#003452] rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="bottom-tribal" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 0 25 L 25 0 L 50 25 L 25 50 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#bottom-tribal)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
            <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase">
              READY TO BEGIN YOUR TANZANIAN EXPEDITION?
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl leading-tight">
              Curate Your Custom Dream Itinerary
            </h3>
            <p className="text-xs sm:text-sm font-light opacity-90 leading-relaxed max-w-lg mt-1">
              Explore all {ACTIVITIES.length} curated activities, read safety profiles, travel tips, and secure direct tour operator quotes instantly on each activity&apos;s dedicated page.
            </p>
            <Link 
              href="/trip-builder" 
              className="mt-6 inline-flex items-center justify-center bg-white hover:bg-tz-sand text-[#003452] font-black py-4 px-10 rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              Launch Interactive Trip Builder &rarr;
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

export default function ThingsToDo() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <main className="flex-1 bg-slate-50 font-sans py-32 px-6 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tz-blue"></div>
        </main>
      }>
        <ThingsToDoContent />
      </Suspense>
      <Footer />
    </>
  );
}
