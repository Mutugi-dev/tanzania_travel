"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Compass, Calendar, DollarSign, Users, Sparkles, Printer, ChevronRight, Check } from "lucide-react";

interface ItineraryDay {
  day: number;
  title: string;
  desc: string;
  tips: string;
}

export default function TripBuilder() {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState("mid");
  const [duration, setDuration] = useState("7-10");
  const [group, setGroup] = useState("couple");
  const [itinerary, setItinerary] = useState<ItineraryDay[] | null>(null);

  const interestsList = [
    { id: "safari", label: "🦁 Wildlife Safari", desc: "Serengeti migration & Big Five spots" },
    { id: "beach", label: "🏝️ Zanzibar Beaches", desc: "Turquoise waters & coral diving" },
    { id: "hiking", label: "🏔️ Mountain Trekking", desc: "Summiting Mount Kilimanjaro or Meru" },
    { id: "culture", label: "🌍 Cultural Heritage", desc: "Engaging with Maasai & local crafts" }
  ];

  const handleInterestToggle = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const generateItinerary = () => {
    // Basic rules to formulate a custom plan
    const generated: ItineraryDay[] = [];
    let dayCount = duration === "3-5" ? 4 : duration === "7-10" ? 8 : 12;

    if (selectedInterests.includes("safari")) {
      generated.push({
        day: 1,
        title: "Arrive in Arusha & Safari Briefing",
        desc: "Land at Kilimanjaro International Airport (JRO). Transfer to Arusha for check-in at your lodge and a warm safari briefing from your guide.",
        tips: "Make sure to change some currency to Tanzanian Shillings for tips!"
      });
      generated.push({
        day: 2,
        title: "Tarangire National Park Game Drive",
        desc: "Explore Tarangire, famous for colossal elephant herds and massive iconic baobab trees.",
        tips: "Keep your binoculars ready near the Tarangire River banks."
      });
      generated.push({
        day: 3,
        title: "Ngorongoro Crater Descent",
        desc: "Descend into the 600m deep volcanic caldera. A true paradise harboring over 25,000 large mammals, including rare black rhinos.",
        tips: "Avoid wearing bright blue clothes to protect against tsetse flies."
      });
      generated.push({
        day: 4,
        title: "Serengeti Plains - Golden Safaris",
        desc: "Enter the endless plains of the Serengeti. Track lion prides and cheetahs sprinting across the grasslands.",
        tips: "Ask your guide to stop near the kopjes (rock formations) where leopards lounge."
      });
    }

    if (selectedInterests.includes("hiking")) {
      generated.push({
        day: generated.length + 1,
        title: "Kilimanjaro Trailhead - Marangu/Machame Gate",
        desc: "Register at the gate and begin trekking through the lush, emerald montane rain forest zone.",
        tips: "Walk extremely slowly ('Pole Pole' in Swahili) to acclimatize."
      });
      generated.push({
        day: generated.length + 1,
        title: "Alpine Moorland Trekking",
        desc: "Traverse high alpine moorlands with giant groundsels and lobelias. Stunning views of Kibo peak.",
        tips: "Drink at least 4-5 liters of water daily to prevent altitude sickness."
      });
    }

    if (selectedInterests.includes("beach")) {
      generated.push({
        day: generated.length + 1,
        title: "Fly to Zanzibar & Stone Town Heritage",
        desc: "Arrive in Zanzibar. Walk through Stone Town's spice-scented alleyways and admire carved wooden doors.",
        tips: "Dress modestly when walking in the historic town out of respect for local traditions."
      });
      generated.push({
        day: generated.length + 1,
        title: "Zanzibar White Beach Haven",
        desc: "Transfer to Nungwi beach. Relax on powder-white sands and swim in crystal-clear turquoise waters.",
        tips: "Go for a romantic sunset dhow cruise to cap off your day."
      });
    }

    if (selectedInterests.includes("culture")) {
      generated.push({
        day: generated.length + 1,
        title: "Maasai Boma Cultural Experience",
        desc: "Interact with traditional Maasai warriors. Participate in the jumping dance and learn about livestock values.",
        tips: "Always ask for permission before taking close-up portraits."
      });
    }

    // Fill in remaining days if generated is less than dayCount
    let currentDay = generated.length + 1;
    while (currentDay <= dayCount) {
      generated.push({
        day: currentDay,
        title: `Adventure Highlights & Leisure`,
        desc: "A relaxed day to explore local craft markets, buy Tanzanite gemstones, or lounge by your tropical pool.",
        tips: "Don't hesitate to bargain gently at local souvenir shops!"
      });
      currentDay++;
    }

    setItinerary(generated.slice(0, dayCount));
    setStep(4);
  };

  return (
    <>
      <Header />
      
      <main className="flex-1 bg-slate-50 font-sans py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Header Card */}
          <div className="text-center mb-12">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
              Interactive Trip Builder
            </h1>
            <p className="text-sm font-light text-slate-500 mt-3 max-w-xl leading-relaxed mx-auto">
              Design a customized, dream Tanzanian adventure in seconds. Our builder matches your interests, budget, and time window to map out the perfect itinerary.
            </p>
            <div className="w-20 h-1 bg-tz-gold mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Progress Indicators */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-4 mb-8 w-full max-w-md">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                    step >= num 
                      ? "bg-tz-blue text-white" 
                      : "bg-slate-200 text-slate-500"
                  }`}>
                    {num}
                  </div>
                  {num < 3 && <div className={`w-8 h-0.5 ${step > num ? "bg-tz-blue" : "bg-slate-200"}`}></div>}
                </div>
              ))}
            </div>
          )}

          {/* Wizard Panels */}
          <div className="w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100/80 text-left">
            {/* Step 1: Select Interests */}
            {step === 1 && (
              <div className="flex flex-col gap-6 animate-fade-in-up">
                <h3 className="font-display font-black text-2xl text-tz-charcoal flex items-center gap-2">
                  <Compass className="w-6 h-6 text-tz-blue" /> What is your travel focus?
                </h3>
                <p className="text-xs text-slate-400 -mt-3">Select one or more categories that inspire you</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {interestsList.map((item) => {
                    const isSelected = selectedInterests.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleInterestToggle(item.id)}
                        className={`p-6 rounded-2xl border text-left flex justify-between items-center transition-all ${
                          isSelected 
                            ? "bg-tz-blue/5 border-tz-blue/30 ring-1 ring-tz-blue/30" 
                            : "bg-slate-50 hover:bg-slate-100 border-slate-200/50"
                        }`}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-base text-tz-charcoal">{item.label}</span>
                          <span className="text-[11px] text-slate-400 font-light">{item.desc}</span>
                        </div>
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                          isSelected ? "bg-tz-blue border-tz-blue text-white" : "border-slate-300 bg-white"
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  disabled={selectedInterests.length === 0}
                  onClick={() => setStep(2)}
                  className="mt-6 bg-[#003452] hover:bg-[#00243a] text-white py-3.5 px-8 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md self-end disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  Next Step <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Budget & Duration */}
            {step === 2 && (
              <div className="flex flex-col gap-6 animate-fade-in-up">
                <h3 className="font-display font-black text-2xl text-tz-charcoal flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-tz-blue" /> Duration &amp; Comfort Level
                </h3>
                <p className="text-xs text-slate-400 -mt-3">Choose how long you plan to explore and comfort levels</p>
                
                <div className="flex flex-col gap-6">
                  {/* Duration selections */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Trip Duration</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "3-5", label: "3-5 Days", desc: "Express Highlight" },
                        { id: "7-10", label: "7-10 Days", desc: "Classic Circuit" },
                        { id: "14+", label: "14+ Days", desc: "Grand Overland" }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setDuration(item.id)}
                          className={`p-4 rounded-xl border text-center flex flex-col gap-1 transition-all ${
                            duration === item.id
                              ? "bg-tz-blue/5 border-tz-blue/30 ring-1 ring-tz-blue/30"
                              : "bg-slate-50 hover:bg-slate-100 border-slate-200/50"
                          }`}
                        >
                          <span className="font-bold text-sm text-tz-charcoal">{item.label}</span>
                          <span className="text-[9px] text-slate-400">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget selections */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5" /> Comfort &amp; Budget</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "budget", label: "Adventure Pack", desc: "Affordable Camping" },
                        { id: "mid", label: "Classic Comfort", desc: "Premium Lodges" },
                        { id: "premium", label: "Luxe Canopy", desc: "Ultra-Luxury Tents" }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setBudget(item.id)}
                          className={`p-4 rounded-xl border text-center flex flex-col gap-1 transition-all ${
                            budget === item.id
                              ? "bg-tz-blue/5 border-tz-blue/30 ring-1 ring-tz-blue/30"
                              : "bg-slate-50 hover:bg-slate-100 border-slate-200/50"
                          }`}
                        >
                          <span className="font-bold text-sm text-tz-charcoal">{item.label}</span>
                          <span className="text-[9px] text-slate-400">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-slate-100 hover:bg-slate-200 text-tz-charcoal py-3.5 px-8 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-[#003452] hover:bg-[#00243a] text-white py-3.5 px-8 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-1.5"
                  >
                    Next Step <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Traveler Group */}
            {step === 3 && (
              <div className="flex flex-col gap-6 animate-fade-in-up">
                <h3 className="font-display font-black text-2xl text-tz-charcoal flex items-center gap-2">
                  <Users className="w-6 h-6 text-tz-blue" /> Who is traveling?
                </h3>
                <p className="text-xs text-slate-400 -mt-3">Help us align lodging and group configurations</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { id: "solo", icon: "🧍", label: "Solo Traveler" },
                    { id: "couple", icon: "👩‍❤️‍👨", label: "Couple" },
                    { id: "family", icon: "👨‍👩‍👧‍👦", label: "Family" },
                    { id: "friends", icon: "🤝", label: "Friends Group" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGroup(item.id)}
                      className={`p-6 rounded-2xl border text-center flex flex-col gap-2.5 transition-all ${
                        group === item.id
                          ? "bg-tz-blue/5 border-tz-blue/30 ring-1 ring-tz-blue/30"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200/50"
                      }`}
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span className="font-bold text-xs text-tz-charcoal">{item.label}</span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-slate-100 hover:bg-slate-200 text-tz-charcoal py-3.5 px-8 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={generateItinerary}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-10 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Generate Itinerary <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Custom Itinerary Output */}
            {step === 4 && itinerary && (
              <div className="flex flex-col gap-8 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-slate-100 pb-5 flex-wrap gap-4 text-left">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-tz-blue uppercase tracking-widest">YOUR CUSTOM PLAN</span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-tz-charcoal mt-1">
                      Your Tanzania Expedition
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.print()}
                      className="p-3 bg-slate-100 hover:bg-slate-200 text-tz-charcoal rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                    >
                      <Printer className="w-4 h-4" /> Print
                    </button>
                    <button
                      onClick={() => setStep(1)}
                      className="p-3 bg-tz-blue hover:bg-tz-blue-hover text-white rounded-xl transition-all text-xs font-bold uppercase tracking-wider"
                    >
                      Reset Builder
                    </button>
                  </div>
                </div>

                {/* Day-by-Day Card Deck */}
                <div className="flex flex-col gap-6 text-left">
                  {itinerary.map((dayPlan) => (
                    <div
                      key={dayPlan.day}
                      className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col sm:flex-row gap-5 items-stretch group"
                    >
                      <div className="w-14 h-14 bg-tz-blue text-white rounded-xl flex flex-col items-center justify-center shrink-0 font-bold">
                        <span className="text-[10px] opacity-75 uppercase tracking-wider leading-none">DAY</span>
                        <span className="text-xl leading-none font-display font-black mt-0.5">{dayPlan.day}</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-between gap-3">
                        <div className="flex flex-col gap-1">
                          <h4 className="font-display font-black text-lg text-tz-charcoal group-hover:text-tz-blue transition-colors leading-tight">
                            {dayPlan.title}
                          </h4>
                          <p className="text-xs font-light text-slate-500 leading-relaxed mt-1">
                            {dayPlan.desc}
                          </p>
                        </div>
                        {/* Tip overlay */}
                        <div className="bg-white/80 border border-amber-200/50 p-3 rounded-lg text-[10px] text-amber-800 font-medium flex gap-2 items-center">
                          <span className="text-xs">💡</span>
                          <span><strong>Local Tip:</strong> {dayPlan.tips}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#003452] p-8 rounded-3xl text-center text-white flex flex-col items-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern id="itinerary-tribal" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 0 20 L 20 0 L 40 20 L 20 40 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#itinerary-tribal)" />
                    </svg>
                  </div>
                  <h4 className="font-display font-black text-xl tracking-wider text-yellow-400 uppercase">
                    Ready to turn this plan into reality?
                  </h4>
                  <p className="text-xs font-light max-w-xl opacity-90 leading-relaxed">
                    Connect with a certified, registered local tour operator to book this exact itinerary. You will receive customized quotes for lodgings, game drive jeeps, and transfers.
                  </p>
                  <a
                    href="/things-to-do"
                    className="bg-white hover:bg-tz-sand text-tz-charcoal py-3.5 px-8 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    Browse Certified Tour Operators
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
