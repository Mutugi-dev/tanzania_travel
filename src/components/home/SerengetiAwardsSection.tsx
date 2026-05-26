"use client";

import Link from "next/link";
import HDImage from "@/components/HDImage";
import { Calendar, MapPin, KeyRound, Mic, Award, Sparkles } from "lucide-react";

export default function SerengetiAwardsSection() {
  return (
    <section id="awards-events" className="py-24 bg-white px-6 sm:px-12 font-sans relative">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Event 1: Serengeti Awards 2026 */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl flex flex-col lg:flex-row gap-10 items-stretch hover:shadow-2xl transition-all duration-300 group">
          {/* Left Side: Brand Poster */}
          <div className="w-full lg:w-[45%] bg-gradient-to-tr from-[#003452] to-[#005e7c] rounded-2xl overflow-hidden p-8 flex flex-col justify-between items-center text-center relative text-white min-h-[300px]">
            {/* Elegant SVG tribal circle */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
              <svg width="220" height="220" viewBox="0 0 100 100" className="animate-spin [animation-duration:120s]">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="3,3" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#ffffff" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner">
                🏆
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl tracking-wide uppercase mt-2 drop-shadow-md">
                The
              </h3>
              <h3 className="font-display font-black text-3xl sm:text-4xl tracking-wider text-tz-gold uppercase mt-1 drop-shadow-md">
                SERENGETI
              </h3>
              <h4 className="font-display font-black text-4xl tracking-widest text-white uppercase mt-0.5 drop-shadow-md">
                Awards
              </h4>
            </div>

            <div className="relative z-10 w-full bg-black/35 backdrop-blur-xs py-2.5 px-4 rounded-xl border border-white/10 text-xs font-bold tracking-widest uppercase">
              EXCELLENCE IN CONSERVATION AND TOURISM
            </div>

            <div className="relative z-10 text-[10px] font-extrabold tracking-widest text-yellow-400 bg-[#001c2e] py-1.5 px-6 rounded-full uppercase mt-4">
              INVITATION ONLY
            </div>
          </div>

          {/* Right Side: Details Sheet */}
          <div className="w-full lg:w-[55%] flex flex-col justify-between text-left">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-tz-blue">
                <Award className="w-5 h-5 stroke-[2px]" />
                <span className="text-xs font-extrabold uppercase tracking-widest">ANNUAL GALA</span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-tz-charcoal leading-tight">
                Serengeti Awards 2026
              </h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">
                The Serengeti Awards will take place on <strong className="font-semibold text-tz-charcoal">Saturday, 31 January 2026</strong> at <strong className="font-semibold text-tz-charcoal">Mount Meru Hotel, Arusha</strong>, recognising excellence in Tanzania&apos;s tourism and hospitality sector.{" "}
                <Link href="/news/wta-nominations" className="text-[#005e7c] hover:underline font-bold inline-flex items-center gap-1.5 transition-colors">
                  Tanzania shines with 41 World Travel Awards nominations &rarr;
                </Link>
              </p>
            </div>

            {/* Structured Fields Block (Exactly matching the style!) */}
            <div className="mt-8 border border-slate-200/60 rounded-2xl overflow-hidden shadow-inner font-sans bg-white divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-tz-blue" /> DATE
                </span>
                <span className="text-sm font-bold text-tz-charcoal">31 January 2026</span>
              </div>
              <div className="flex justify-between items-center p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-tz-blue" /> VENUE
                </span>
                <span className="text-sm font-bold text-tz-charcoal">Mount Meru Hotel, Arusha</span>
              </div>
              <div className="flex justify-between items-center p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-tz-blue" /> ACCESS
                </span>
                <span className="text-xs font-extrabold text-[#003452] bg-[#f59e0b] py-1 px-3 rounded-full uppercase tracking-wider">
                  Invitation Only
                </span>
              </div>
            </div>

            <Link
              href="/events/serengeti-awards"
              className="mt-8 bg-[#003452] hover:bg-[#00243a] text-white py-3.5 px-8 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-md self-start hover:scale-[1.02] active:scale-[0.98] inline-block text-center"
            >
              Request Access
            </Link>
          </div>
        </div>

        {/* Event 2: Castle Lite Unlocks concert */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl flex flex-col lg:flex-row gap-10 items-stretch hover:shadow-2xl transition-all duration-300 group">
          {/* Left Side: Stage Poster */}
          <div className="w-full lg:w-[45%] relative rounded-2xl overflow-hidden min-h-[300px] flex flex-col justify-end p-8 text-white">
            <HDImage
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80"
              alt="Concert Crowds Live Music Stage"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091522] via-black/35 to-transparent z-0"></div>

            <div className="relative z-10 flex flex-col items-start gap-1">
              <span className="bg-cyan-500 text-[#111827] py-1 px-3.5 rounded-md text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                LIVE CONCERT
              </span>
              <span className="text-xs font-bold text-yellow-400 mt-2.5 tracking-wider uppercase">
                FEB 2026 &bull; DAR ES SALAAM
              </span>
            </div>
          </div>

          {/* Right Side: Details Sheet */}
          <div className="w-full lg:w-[55%] flex flex-col justify-between text-left">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-cyan-600">
                <Sparkles className="w-5 h-5 stroke-[2px]" />
                <span className="text-xs font-extrabold uppercase tracking-widest">LIFESTYLE &amp; MUSIC</span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-tz-charcoal leading-tight">
                Castle Lite Unlocks: Dar es Salaam
              </h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">
                A major live music and lifestyle experience under the Castle Lite Unlocks brand, delivering festival-style entertainment in Dar es Salaam.
              </p>
            </div>

            {/* Structured Fields Block */}
            <div className="mt-8 border border-slate-200/60 rounded-2xl overflow-hidden shadow-inner font-sans bg-white divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-600" /> DATE
                </span>
                <span className="text-sm font-bold text-tz-charcoal">Saturday, 7 February 2026</span>
              </div>
              <div className="flex justify-between items-center p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-600" /> VENUE
                </span>
                <span className="text-sm font-bold text-tz-charcoal">Lugalo Golf Club, Kawe</span>
              </div>
              <div className="flex justify-between items-center p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Mic className="w-4 h-4 text-cyan-600" /> HEADLINER
                </span>
                <span className="text-sm font-black text-tz-blue">Davido</span>
              </div>
            </div>

            <Link
              href="/events/castle-lite-unlocks"
              className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white py-3.5 px-8 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-md self-start hover:scale-[1.02] active:scale-[0.98] inline-block text-center"
            >
              Get Tickets
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
