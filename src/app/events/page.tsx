import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HDImage from "@/components/HDImage";
import Link from "next/link";
import { Calendar, MapPin, ChevronRight, Sparkles } from "lucide-react";
import { EVENTS } from "@/data/events";

export const metadata = {
  title: "Events & Festivals - Tanzania Tourism",
  description: "Discover upcoming events, festivals, expos, and awards happening in Tanzania.",
};

export default function EventsPage() {
  // Sort events by date if needed (we'll just use the array order for now)
  const mainEvent = EVENTS[1]; // Castle Lite Unlocks
  const otherEvents = EVENTS.filter(e => e.id !== mainEvent.id);

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 font-sans py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-16">
            <span className="text-xs font-black text-tz-gold uppercase tracking-[0.2em] mb-4 block">
              EXPERIENCE TANZANIA
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-tz-charcoal tracking-tight">
              Events &amp; Festivals
            </h1>
            <p className="text-sm font-light text-slate-500 mt-4 max-w-2xl leading-relaxed mx-auto">
              From high-energy music festivals to prestigious tourism awards and global tradeshows, find out what's happening and how to get involved.
            </p>
            <div className="w-24 h-1 bg-tz-gold mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Featured Event */}
          <Link href={`/events/${mainEvent.id}`} className="w-full relative h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-24 group block cursor-pointer">
            <HDImage
              src={mainEvent.img}
              alt={mainEvent.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 sm:p-16 text-left max-w-2xl text-white">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 bg-white/10 backdrop-blur-md py-1.5 px-4 rounded-full border border-white/10 mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> FEATURED EVENT
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl leading-tight mb-4 text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {mainEvent.title}
              </h2>
              <div className="flex flex-wrap gap-6 mb-8 text-xs font-bold tracking-wider">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Calendar className="w-4 h-4" /> {mainEvent.date}
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="w-4 h-4" /> {mainEvent.venue}
                </div>
              </div>
              <p className="text-sm font-light leading-relaxed opacity-90 mb-8 max-w-lg line-clamp-3">
                {mainEvent.desc}
              </p>
              
              <div className="bg-cyan-600 hover:bg-cyan-700 text-white py-3.5 px-8 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md flex items-center gap-2">
                Event Details <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* All Events Grid */}
          <div className="w-full mb-12 flex items-center justify-between">
            <h2 className="font-display font-black text-3xl text-tz-charcoal">All Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {otherEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <HDImage
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-tz-gold text-tz-charcoal py-1 px-3 rounded-md text-[9px] font-black uppercase tracking-wider shadow-md">
                    {event.type}
                  </div>
                </div>

                <div className="p-7 text-left flex flex-col flex-1 gap-4">
                  <h3 className="font-display font-black text-xl text-tz-charcoal leading-snug group-hover:text-tz-blue transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex items-center gap-2 text-xs font-bold text-tz-blue uppercase tracking-wider">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#005e7c]">
                    <span>{event.buttonText}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
