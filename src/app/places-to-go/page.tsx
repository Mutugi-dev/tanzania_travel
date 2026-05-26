"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Compass, MapPin, Sun, Cloud } from "lucide-react";
import HDImage from "@/components/HDImage";
import { PLACES, Place } from "@/data/places";

export default function PlacesToGo() {
  const destinations = PLACES.map(p => ({
    ...p,
    activityUrl: `/things-to-do/${p.primaryActivityId}`
  }));

  const [activeDest, setActiveDest] = useState<Place & { activityUrl: string }>(destinations[0]);


  return (
    <>
      <Header />
      
      <main className="flex-1 bg-slate-50 font-sans py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Header Card */}
          <div className="text-center mb-16">
            <span className="text-xs font-black text-tz-gold uppercase tracking-[0.2em] mb-4 block">
              REGIONAL DISCOVERY
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
              Interactive Map Hub
            </h1>
            <p className="text-sm font-light text-slate-500 mt-3 max-w-xl leading-relaxed mx-auto">
              Explore Tanzania&apos;s circuits geographically. Click on the map pins or use the quick-tabs to unlock weather stats, coordinate badges, and curated safari highlights.
            </p>
            <div className="w-20 h-1 bg-tz-gold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 w-full items-stretch">
            
            {/* Left Side: Interactive SVG Map Container */}
            <div className="w-full lg:w-[55%] bg-[#003452] rounded-3xl p-8 border border-white/5 shadow-2xl relative min-h-[420px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
              {/* Geometric pattern background */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="map-tribal" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 0 30 L 30 0 L 60 30 L 30 60 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#map-tribal)" />
                </svg>
              </div>

              {/* Tanzania Interactive SVG Vector map */}
              <div className="relative w-full max-w-[400px] aspect-[4/5] z-10 select-none">
                <svg viewBox="0 0 100 120" className="w-full h-full fill-none stroke-white/10 stroke-1">
                  <path
                    d="M 15 20 C 25 15, 45 10, 60 15 C 65 17, 72 14, 75 22 C 78 28, 70 36, 73 42 C 76 48, 82 52, 80 60 C 78 68, 70 82, 75 90 C 78 96, 72 105, 60 108 C 48 110, 32 102, 25 96 C 18 90, 22 75, 18 68 C 14 62, 8 50, 10 38 C 12 28, 5 22, 15 20 Z"
                    fill="rgba(255, 255, 255, 0.05)"
                    stroke="rgba(255, 255, 255, 0.25)"
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />
                  <path
                    d="M 25 20 L 38 26 L 52 24 L 62 44 L 68 52 L 74 65"
                    stroke="rgba(245, 158, 11, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                </svg>

                {/* Interactive Clickable Pins & Labels Overlay */}
                {destinations.map((dest) => {
                  const isActive = activeDest.id === dest.id;
                  return (
                    <div
                      key={dest.id}
                      style={{ left: `${dest.x}%`, top: `${dest.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center group z-20"
                    >
                      <button
                        onClick={() => setActiveDest(dest)}
                        className="flex flex-col items-center cursor-pointer relative"
                        aria-label={dest.name}
                      >
                        <span className={`absolute inline-flex h-8 w-8 rounded-full bg-yellow-400 opacity-60 animate-ping [animation-duration:3s] ${
                          isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                        } transition-transform`}></span>
                        
                        <div className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shadow-lg border transition-all duration-300 ${
                          isActive 
                            ? "bg-yellow-400 border-white text-tz-charcoal scale-110" 
                            : "bg-[#005e7c] border-white/40 text-white hover:bg-yellow-400 hover:text-tz-charcoal"
                        }`}>
                          <MapPin className="w-3 h-3 stroke-[2.5px]" />
                        </div>
                      </button>

                      <span
                        onClick={() => setActiveDest(dest)}
                        className={`ml-3 text-[7.5px] sm:text-[8.5px] font-black tracking-widest uppercase cursor-pointer select-none transition-all duration-300 whitespace-nowrap ${
                          isActive 
                            ? "text-yellow-400 translate-x-0.5 scale-102 font-extrabold" 
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        {dest.shortName}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Map Scale indicator */}
              <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-md py-1.5 px-3 rounded-lg border border-white/10 text-[9px] font-bold tracking-widest text-white">
                🗺️ NORTHERN &amp; COASTAL CIRCUITS
              </div>
            </div>

            {/* Right Side: Details Sheet */}
            <div className="w-full lg:w-[45%] flex flex-col justify-between text-left">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-2xl h-full flex flex-col justify-between">
                <div>
                  
                  {/* Tab Selector bar */}
                  <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-100 scrollbar-none">
                    {destinations.map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => setActiveDest(dest)}
                        className={`py-2 px-4 rounded-full text-[9px] font-black uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                          activeDest.id === dest.id
                            ? "bg-[#005e7c] text-white shadow-md scale-102"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-500 border border-slate-200/50"
                        }`}
                      >
                        {dest.shortName}
                      </button>
                    ))}
                  </div>

                  {/* Image cover for selected destination */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-md mb-6">
                    <HDImage
                      src={activeDest.images.card}
                      alt={activeDest.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-yellow-400 text-tz-charcoal py-1 px-3 rounded-md text-[8px] font-black uppercase tracking-wider shadow-md">
                      {activeDest.badge}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 text-left">
                    <h3 className="font-display font-black text-3xl text-tz-charcoal leading-tight">
                      {activeDest.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-xs font-bold text-tz-blue uppercase tracking-wider">
                      <Compass className="w-4 h-4" />
                      <span>{activeDest.coords}</span>
                    </div>

                    <p className="text-xs font-light text-slate-500 leading-relaxed mt-2 border-l-2 border-tz-blue pl-4">
                      {activeDest.desc}
                    </p>

                    {/* Highlights Badges Grid */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {(activeDest.highlights || []).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-3.5 py-1.5 text-[8.5px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1"
                        >
                          🌿 {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Statistics Box */}
                <div className="mt-8 border border-slate-200/60 rounded-2xl overflow-hidden shadow-inner font-sans bg-slate-50/50 divide-y divide-slate-100/60">
                  <div className="flex justify-between items-center p-4">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-tz-blue" /> AVERAGE TEMP
                    </span>
                    <span className="text-xs font-bold text-tz-charcoal">{activeDest.temp}</span>
                  </div>
                  <div className="flex justify-between items-center p-4">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Cloud className="w-3.5 h-3.5 text-tz-blue" /> BEST SEASON
                    </span>
                    <span className="text-xs font-bold text-tz-charcoal text-right max-w-[200px] leading-tight">
                      {activeDest.bestTime}
                    </span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="mt-8 flex gap-3.5">
                  <a
                    href="/trip-builder"
                    className="flex-1 bg-[#003452] hover:bg-[#00243a] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md text-center hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Customize Plan
                  </a>
                  <a
                    href={activeDest.activityUrl || "/things-to-do"}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-tz-charcoal py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border border-yellow-300 text-center hover:scale-[1.01] active:scale-[0.99] shadow-sm flex items-center justify-center gap-1.5"
                  >
                    Explore Activities &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
