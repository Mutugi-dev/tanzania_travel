"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Calendar, Compass, AlertCircle } from "lucide-react";
import HDImage from "@/components/HDImage";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");

  return (
    <section className="relative w-full h-[600px] sm:h-[680px] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image with premium dark overlays */}
      <div className="absolute inset-0 z-0">
        <HDImage
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80"
          alt="Serengeti Safari Jeep Wildlife"
          fill
          priority
          className="object-cover object-center scale-105 animate-infinite-scroll [animation-duration:180s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-tz-green/10 mix-blend-multiply"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 flex flex-col items-center text-center text-white mt-12">
        <span className="font-display font-bold text-base sm:text-lg text-tz-gold tracking-[0.25em] uppercase drop-shadow-md animate-fade-in-up">
          Tanzania Unforgettable
        </span>
        
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1] mt-4 max-w-4xl drop-shadow-lg animate-fade-in-up [animation-delay:0.1s]">
          Karibu Tanzania
        </h1>
        
        <p className="font-sans font-light text-lg sm:text-xl md:text-2xl tracking-wide opacity-90 mt-5 max-w-2xl drop-shadow-md animate-fade-in-up [animation-delay:0.2s]">
          Where Unforgettable Experiences Begin
        </p>

        {/* Dynamic Search / Planning Panel */}
        <div className="w-full max-w-3xl mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/20 shadow-2xl animate-fade-in-up [animation-delay:0.35s] hover:border-white/35 transition-all duration-300">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/things-to-do?search=${encodeURIComponent(searchQuery)}`;
            }}
            className="flex flex-col sm:flex-row gap-2 w-full"
          >
            {/* Search Input */}
            <div className="flex-1 bg-white text-tz-charcoal rounded-xl py-3 px-4 flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for? (e.g. Serengeti, Zanzibar, Kilimanjaro...)"
                className="w-full bg-transparent text-sm font-medium focus:outline-none placeholder-slate-400"
              />
            </div>

            {/* Category Selector */}
            <div className="bg-white text-tz-charcoal rounded-xl py-3 px-4 flex items-center gap-3 min-w-[160px]">
              <Compass className="w-5 h-5 text-slate-400 shrink-0" />
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="bg-transparent text-sm font-semibold focus:outline-none w-full cursor-pointer"
              >
                <option value="all">All Activities</option>
                <option value="safari">Wildlife Safaris</option>
                <option value="beaches">Zanzibar Beaches</option>
                <option value="trekking">Mountain Climbing</option>
                <option value="culture">Cultural Experience</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-tz-blue hover:bg-tz-blue-hover text-white py-3 px-8 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md shrink-0 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Now
            </button>
          </form>
        </div>

        {/* Small floating visa shortcut */}
        <div className="mt-8 flex items-center gap-2.5 py-2 px-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-tz-sand animate-fade-in-up [animation-delay:0.5s]">
          <AlertCircle className="w-4 h-4 text-tz-gold stroke-[2px]" />
          <span>70 countries visa-free.</span>
          <Link href="/visa-checker" className="text-tz-gold hover:underline font-bold">
            Check your eligibility &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
