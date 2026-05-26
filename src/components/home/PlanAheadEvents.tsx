"use client";

import Link from "next/link";
import { Calendar, MapPin, Globe } from "lucide-react";
import HDImage from "@/components/HDImage";
import { EVENTS } from "@/data/events";

export default function PlanAheadEvents() {
  // Only show a preview of 3 trade expos/tradeshows on the homepage
  const events = EVENTS.filter(e => e.type.includes("Expo") || e.type.includes("Tradeshow") || e.type.includes("Forum")).slice(0, 3);

  return (
    <section id="upcoming-events" className="py-24 bg-[#eaeff2]/40 border-t border-slate-100 px-6 sm:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
            Plan Ahead &ndash; <span className="text-[#006d96]">Upcoming Events</span>
          </h2>
          <div className="w-20 h-1 bg-tz-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* News crosslink banner */}
        <div className="w-full max-w-7xl bg-white border border-slate-100/80 shadow-md rounded-3xl p-6 mb-12 text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-3xl shrink-0">✈️</span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-black text-tz-gold uppercase tracking-[0.2em]">RECENT EXPOSITION UPDATE</span>
              <span className="text-sm font-black text-tz-charcoal leading-snug">FITUR 2026 International Tourism Trade Fair concluded in Madrid on January 26 with strong milestones.</span>
            </div>
          </div>
          <Link href="/news/fitur-madrid" className="bg-[#005e7c] hover:bg-tz-blue-hover text-white py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap active:scale-95 shadow-md">
            Read Press Release &rarr;
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Panel */}
                <div className="relative h-56 w-full overflow-hidden">
                  <HDImage
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Type Tag Overlay */}
                  <div className="absolute top-4 left-4 bg-[#003c66] text-white py-1 px-3 rounded-md text-[8.5px] font-black uppercase tracking-wider shadow-md">
                    {event.type}
                  </div>
                </div>

                {/* Info Text Area */}
                <div className="p-7 text-left flex flex-col gap-3.5">
                  <h3 className="font-display font-black text-xl text-tz-charcoal leading-snug group-hover:text-tz-blue transition-colors">
                    {event.title}
                  </h3>
                  
                  {/* Date line */}
                  <div className="flex items-center gap-2 text-xs font-bold text-tz-blue uppercase tracking-wider">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>

                  <p className="text-xs font-light text-slate-500 leading-relaxed mt-1 line-clamp-3">
                    {event.desc}
                  </p>
                </div>
              </div>

              {/* Action Buttons Strip */}
              <div className="p-7 pt-0 flex mt-auto">
                <Link
                  href={`/events/${event.id}`}
                  className="flex-1 bg-[#005e7c] hover:bg-tz-blue-hover text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  {event.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Events Link */}
        <div className="mt-12">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold text-tz-blue hover:text-tz-blue-hover transition-colors uppercase tracking-wider border-b-2 border-tz-gold pb-1">
            View Full Events Calendar &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
