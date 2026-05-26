"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HDImage from "@/components/HDImage";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Send, 
  Sparkles, 
  Plus, 
  Minus, 
  Star, 
  Printer, 
  Phone, 
  Check, 
  Info,
  ShieldCheck,
  ChevronLeft,
  Compass,
  Award,
  BookOpen
} from "lucide-react";
import { Activity } from "@/data/activities";

interface OperatorDetails {
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  basePrice: number;
  desc: string;
  highlights: string[];
  tag: string;
}

const OPERATORS: Record<string, OperatorDetails> = {
  safari: {
    name: "Serengeti Wilderness Guides",
    logo: "🦁",
    rating: 4.9,
    reviews: 342,
    basePrice: 2450,
    desc: "Tanzania's gold-standard safari agency with 15+ years of experience. Certified naturalists, custom 4x4 open-roof Toyota Landcruisers, and deep migration tracking knowledge.",
    highlights: ["Big Five Sightings Guaranteed", "All National Park Entry Fees Included", "Hot Lunches Served in the Savannah"],
    tag: "Safari Specialists"
  },
  beach: {
    name: "Zanzibar Reef Adventures",
    logo: "🏝️",
    rating: 4.8,
    reviews: 215,
    basePrice: 950,
    desc: "Premier marine and coastal excursion specialists. Offering PADI-certified dive guides, private spice plantation tours, and luxury sunset dhow cruises.",
    highlights: ["Premium Snorkel & Dive Gear Included", "Stone Town Spice Lunch & Tour", "Marine Conservation Permits Paid"],
    tag: "Coast Specialists"
  },
  hiking: {
    name: "Kili Climb Expeditions",
    logo: "🏔️",
    rating: 4.95,
    reviews: 408,
    basePrice: 1890,
    desc: "Top-rated high-altitude mountaineering team with a 98.4% summit success rate on Mount Kilimanjaro and Mount Meru. High-spec medical safety equipped.",
    highlights: ["Pulse Oximeter & Oxygen Monitoring", "Professional Mountain Porters & Chef", "Private Weatherproof Alpine Tents"],
    tag: "Trekking Specialists"
  }
};

export default function ActivityDetailsClient({ activity }: { activity: Activity | undefined }) {
  // Form & booking states
  const [travelersCount, setTravelersCount] = useState(2);
  const [lodgingTier, setLodgingTier] = useState("camp");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [travelDate, setTravelDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingReceipt, setBookingReceipt] = useState<any>(null);

  if (!activity) {
    return (
      <>
        <Header />
        <main className="flex-1 py-20 text-center font-sans">
          <div className="max-w-md mx-auto bg-white p-10 rounded-3xl border border-slate-100 shadow-xl">
            <h1 className="text-2xl font-black text-tz-charcoal">Activity Not Found</h1>
            <p className="text-sm text-slate-500 font-light mt-2 leading-relaxed">
              We couldn&apos;t find the selected signature activity. Explore our full catalog of adventures below.
            </p>
            <Link 
              href="/things-to-do" 
              className="mt-6 inline-flex items-center justify-center bg-[#005e7c] hover:bg-tz-blue-hover text-white py-3 px-8 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Activities
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const activeOperator = OPERATORS[activity.operatorId] || OPERATORS.safari;

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonId) ? prev.filter(a => a !== addonId) : [...prev, addonId]
    );
  };

  // Cost calculations
  const baseCost = activeOperator.basePrice * travelersCount;
  const lodgingUpgradeRate = lodgingTier === "lodge" ? 400 : lodgingTier === "glamping" ? 1200 : 0;
  const lodgingCost = lodgingUpgradeRate * travelersCount;
  
  const transferCost = selectedAddons.includes("transfers") ? 50 : 0;
  const hotelCost = selectedAddons.includes("hotel") ? 150 * travelersCount : 0;
  const photoCost = selectedAddons.includes("photographer") ? 300 : 0;
  const totalCost = baseCost + lodgingCost + transferCost + hotelCost + photoCost;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNumber = `TZ-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    
    const receiptData = {
      refNumber,
      packageName: activity.title,
      operatorName: activeOperator.name,
      operatorLogo: activeOperator.logo,
      fullName,
      email,
      phone,
      travelDate,
      travelersCount,
      lodgingTier,
      selectedAddons,
      invoice: {
        baseCost,
        lodgingCost,
        transferCost,
        hotelCost,
        photoCost,
        totalCost
      }
    };

    setBookingReceipt(receiptData);
    setBookingSuccess(true);

    // Smooth scroll down to invoice receipts
    setTimeout(() => {
      document.getElementById("printable-receipt")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleReset = () => {
    setBookingSuccess(false);
    setBookingReceipt(null);
    setTravelDate("");
    setFullName("");
    setEmail("");
    setPhone("");
    setSpecialRequests("");
    setSelectedAddons([]);
    setLodgingTier("camp");
    setTravelersCount(2);
  };

  return (
    <>
      <Header />
      
      <main className="flex-1 bg-slate-50 font-sans pb-24">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="max-w-6xl mx-auto px-6 py-6 text-left">
          <Link 
            href="/things-to-do" 
            className="inline-flex items-center text-xs font-bold text-tz-blue hover:text-tz-blue-hover uppercase tracking-wider transition-all gap-1 hover:-translate-x-0.5"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Activities
          </Link>
        </div>

        {/* Large Banner Cover */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="relative h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <HDImage 
              src={activity.images.banner} 
              alt={activity.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"></div>
            
            {/* Header text container */}
            <div className="absolute bottom-8 left-8 right-8 text-left text-white flex flex-col gap-3">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-tz-gold bg-white/10 backdrop-blur-md py-1.5 px-3.5 rounded-full border border-white/10 self-start">
                {activity.badge}
              </span>
              <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-none text-white mt-1">
                {activity.title}
              </h1>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 uppercase tracking-wider mt-1">
                <MapPin className="w-4 h-4 text-tz-gold" />
                <span>{activity.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid: Side-by-Side */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-20">
          
          {/* Left Side: Information & Itinerary */}
          <div className="lg:col-span-2 flex flex-col gap-10 text-left">
            
            {/* Overview paragraph */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <h3 className="font-display font-black text-xl text-tz-charcoal mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-tz-blue" /> Experience Overview
              </h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed font-sans">
                {activity.detailedDesc}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <h3 className="font-display font-black text-xl text-tz-charcoal mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-tz-blue" /> Experience Highlights
              </h3>
              <div className="flex flex-col gap-4">
                {activity.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-slate-600 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3px]" />
                    </div>
                    <span className="font-light text-slate-500 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day itinerary */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <h3 className="font-display font-black text-xl text-tz-charcoal mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-tz-blue" /> Sample Expedition Plan
              </h3>
              <div className="flex flex-col gap-6 relative border-l border-slate-200 pl-6 ml-3">
                {activity.itinerary.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Ring timeline marker */}
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-tz-blue bg-white group-hover:bg-tz-blue transition-colors"></span>
                    <h4 className="font-display font-black text-base text-tz-charcoal leading-tight">
                      {step.step}
                    </h4>
                    <p className="text-xs font-light text-slate-500 leading-relaxed mt-1 font-sans">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Meta Details & Operator Matched Profile */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-6">
            
            {/* Quick specifications sheet */}
            <div className="bg-[#003452] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/5 relative overflow-hidden text-left">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="meta-tribal" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 0 10 L 10 0 L 20 10 L 10 20 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#meta-tribal)" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col gap-6">
                <h4 className="font-display font-black text-lg text-yellow-400 tracking-wider uppercase flex items-center gap-1.5">
                  <Compass className="w-5 h-5" /> Expedition Specs
                </h4>
                
                <div className="divide-y divide-white/10 text-xs">
                  <div className="py-3 flex justify-between">
                    <span className="opacity-75 font-light">Trek Difficulty</span>
                    <span className="font-bold tracking-wide uppercase text-yellow-400">{activity.difficulty}</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span className="opacity-75 font-light">Best Season</span>
                    <span className="font-semibold">{activity.bestSeason}</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span className="opacity-75 font-light">Average Duration</span>
                    <span className="font-semibold">{activity.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Matched Operator Profile Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md text-left flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[9px] font-black uppercase tracking-wider text-tz-blue bg-tz-blue/10 py-1 px-3 rounded-full">
                    {activeOperator.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-500 stroke-amber-500" />
                    <span>{activeOperator.rating}</span>
                    <span className="text-[10px] text-slate-400 font-light">({activeOperator.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">{activeOperator.logo}</span>
                  <h4 className="font-display font-black text-lg text-tz-charcoal leading-tight">
                    {activeOperator.name}
                  </h4>
                </div>

                <p className="text-xs text-slate-500 font-light leading-relaxed mb-6 font-sans">
                  {activeOperator.desc}
                </p>

                <div className="flex flex-col gap-2.5">
                  <h5 className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    Operator Inclusion Highlights
                  </h5>
                  {activeOperator.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3px]" />
                      </div>
                      <span className="font-light text-slate-500">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200/50 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tz-blue/10 flex items-center justify-center text-tz-blue shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-tz-charcoal uppercase tracking-wider">TATO REGISTERED</div>
                  <div className="text-[9px] text-slate-400 font-light">Full public liability insurance coverage</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BOOKING PANEL SECTION */}
        <div className="max-w-6xl mx-auto px-6">
          <div
            id="booking-hub"
            className="w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="booking-tribal" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 0 25 L 25 0 L 50 25 L 25 50 Z" fill="none" stroke="#003c66" strokeWidth="1.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#booking-tribal)" />
              </svg>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="flex flex-col gap-3.5 mb-10 text-center items-center">
                <span className="text-xs font-bold tracking-widest text-tz-blue uppercase bg-tz-blue/10 py-1.5 px-4 rounded-full">
                  SECURE RESERVATION PANEL
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-tz-charcoal tracking-tight mt-1">
                  Book with {activeOperator.name}
                </h3>
                <p className="text-xs font-light text-slate-400 max-w-md leading-relaxed">
                  Submit a direct reservation inquiry. Fully customize travelers group sizes, lodging comfort tiers, pre-trip additions, and generate an active receipt quote.
                </p>
                <div className="w-16 h-1 bg-tz-gold mt-2 rounded-full"></div>
              </div>

              {bookingSuccess && bookingReceipt ? (
                // SUCCESS STATE: BEAUTIFUL RECEIPT
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center gap-6 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl text-emerald-600 border border-emerald-200">
                    🎉
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-display font-black text-2xl sm:text-3xl text-emerald-800">
                      Booking Inquiry &amp; Invoice Generated!
                    </h4>
                    <p className="text-sm font-light text-emerald-700 max-w-md leading-relaxed mt-2 mx-auto">
                      Thank you! Your direct booking inquiry has been logged successfully with the operator. Below is your official reservation invoice receipt.
                    </p>
                  </div>

                  {/* Printable Receipt Card */}
                  <div id="printable-receipt" className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md text-left text-tz-charcoal relative">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-tz-blue to-tz-gold rounded-t-2xl"></div>
                    
                    {/* Header bar */}
                    <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-6">
                      <div>
                        <span className="text-[9px] font-black text-slate-400 tracking-wider uppercase">OFFICIAL CONFIRMATION</span>
                        <h5 className="font-display font-black text-lg text-tz-charcoal">Tanzania Expedition Invoice</h5>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-black text-slate-400 tracking-wider uppercase">REFERENCE NO</span>
                        <div className="font-mono text-xs font-black text-tz-blue">{bookingReceipt.refNumber}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Selected Operator</h6>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{bookingReceipt.operatorLogo}</span>
                          <div>
                            <div className="font-bold text-sm text-tz-charcoal">{bookingReceipt.operatorName}</div>
                            <div className="text-[10px] text-tz-blue font-semibold uppercase tracking-wider">Expert Registered Partner</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Package Details</h6>
                        <div>
                          <div className="font-bold text-sm text-tz-charcoal">{bookingReceipt.packageName}</div>
                          <div className="text-xs text-slate-500 font-light mt-0.5">Target Date: {bookingReceipt.travelDate}</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-100 pt-6 mb-6">
                      <div>
                        <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Traveler Information</h6>
                        <div className="text-xs leading-relaxed">
                          <div className="font-bold text-tz-charcoal">{bookingReceipt.fullName}</div>
                          <div className="text-slate-500 font-light">{bookingReceipt.email}</div>
                          <div className="text-slate-500 font-light">{bookingReceipt.phone}</div>
                        </div>
                      </div>

                      <div>
                        <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Configuration</h6>
                        <div className="text-xs leading-relaxed">
                          <div className="text-tz-charcoal font-semibold">Group Size: {bookingReceipt.travelersCount} Traveler(s)</div>
                          <div className="text-slate-500 font-light">
                            Lodging: <span className="font-medium capitalize">{bookingReceipt.lodgingTier === "camp" ? "Standard Adventure Camp" : bookingReceipt.lodgingTier === "lodge" ? "Comfort Mid-Range Lodge" : "Luxury Canopy Glamping"}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cost breakdown invoice table */}
                    <div className="border-t border-slate-100 pt-6 mb-6">
                      <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Itemized Invoice Summary</h6>
                      <div className="divide-y divide-slate-100 text-xs">
                        <div className="py-2.5 flex justify-between">
                          <span className="text-slate-500 font-light">Base Package Fee ({bookingReceipt.travelersCount} x ${activeOperator.basePrice})</span>
                          <span className="font-bold text-tz-charcoal">${bookingReceipt.invoice.baseCost.toLocaleString()}</span>
                        </div>
                        {bookingReceipt.invoice.lodgingCost > 0 && (
                          <div className="py-2.5 flex justify-between">
                            <span className="text-slate-500 font-light">Lodging Tier Upgrade ({bookingReceipt.travelersCount} x ${lodgingUpgradeRate})</span>
                            <span className="font-bold text-tz-charcoal">+${bookingReceipt.invoice.lodgingCost.toLocaleString()}</span>
                          </div>
                        )}
                        {bookingReceipt.invoice.transferCost > 0 && (
                          <div className="py-2.5 flex justify-between">
                            <span className="text-slate-500 font-light">Airport Transfers Add-on (Flat)</span>
                            <span className="font-bold text-tz-charcoal">+$50</span>
                          </div>
                        )}
                        {bookingReceipt.invoice.hotelCost > 0 && (
                          <div className="py-2.5 flex justify-between">
                            <span className="text-slate-500 font-light">Arusha Pre-trip Lodge ({bookingReceipt.travelersCount} x $150)</span>
                            <span className="font-bold text-tz-charcoal">+${bookingReceipt.invoice.hotelCost.toLocaleString()}</span>
                          </div>
                        )}
                        {bookingReceipt.invoice.photoCost > 0 && (
                          <div className="py-2.5 flex justify-between">
                            <span className="text-slate-500 font-light">Private Photographer Guide Add-on (Flat)</span>
                            <span className="font-bold text-tz-charcoal">+$300</span>
                          </div>
                        )}
                        <div className="py-4 flex justify-between items-center text-sm font-black border-t-2 border-slate-100">
                          <span className="text-tz-charcoal">TOTAL ESTIMATED COST</span>
                          <span className="text-tz-gold text-lg sm:text-xl font-display font-black">${bookingReceipt.invoice.totalCost.toLocaleString()} USD</span>
                        </div>
                      </div>
                    </div>

                    {/* Packing recommendation advice based on selected package */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs">
                      <h6 className="font-bold text-tz-blue flex items-center gap-1.5 mb-1.5">
                        <Info className="w-3.5 h-3.5" /> Quick Packing Guide for your {bookingReceipt.packageName}
                      </h6>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                        {activity.operatorId === "safari" && "🦁 Recommended: Pack neutral-toned clothing (khakis, tans), comfortable safari sun hats, protective sunglasses, heavy sunblock, and high-quality binoculars!"}
                        {activity.operatorId === "beach" && "🏝️ Recommended: Pack lightweight, breathable linen shirts/dresses, quality swimwear, reef-safe sunscreen, polarized sunglasses, and a water-resistant backpack!"}
                        {activity.operatorId === "hiking" && "🏔️ Recommended: Pack a thermal sleeping bag, sturdy pre-broken trekking boots, multiple moisture-wicking layers, high-energy trek bars, and trekking poles!"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 flex-wrap justify-center mt-4">
                    <button
                      onClick={() => window.print()}
                      className="bg-tz-blue hover:bg-tz-blue-hover text-white py-3.5 px-8 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Printer className="w-4 h-4" /> Print Reservation Receipt
                    </button>
                    <button
                      onClick={handleReset}
                      className="bg-slate-200 hover:bg-slate-300 text-tz-charcoal py-3.5 px-8 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Book Another Adventure
                    </button>
                  </div>
                </div>
              ) : (
                // BOOKING WIDGET FORM & CALCULATOR
                <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
                  
                  {/* Left Column: Form Controls */}
                  <form onSubmit={handleBookingSubmit} className="w-full lg:w-[60%] flex flex-col gap-6 text-left">
                    <h4 className="font-display font-black text-xl text-tz-charcoal border-b border-slate-100 pb-3 flex items-center gap-2">
                      <span>1.</span> Traveler &amp; Schedule Details
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Active Activity Label */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Activity Package</label>
                        <div className="w-full bg-slate-100/50 py-3.5 px-4 rounded-xl text-sm border font-semibold text-tz-charcoal">
                          {activity.title}
                        </div>
                      </div>

                      {/* Travel Date */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-tz-blue" /> Target Travel Date
                        </label>
                        <input 
                          required 
                          type="date" 
                          value={travelDate}
                          onChange={(e) => setTravelDate(e.target.value)}
                          className="w-full bg-slate-100 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:bg-slate-50 border focus:border-tz-blue/35 transition-all text-tz-charcoal cursor-pointer" 
                        />
                      </div>
                    </div>

                    {/* Group Size Multiplier */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-tz-blue" /> Number of Travelers
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setTravelersCount(prev => Math.max(1, prev - 1))}
                          className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-lg hover:bg-slate-200 transition-all cursor-pointer text-tz-charcoal active:scale-95 select-none"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <div className="w-16 text-center font-display font-black text-xl text-tz-charcoal">
                          {travelersCount}
                        </div>
                        <button
                          type="button"
                          onClick={() => setTravelersCount(prev => Math.min(20, prev + 1))}
                          className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-lg hover:bg-slate-200 transition-all cursor-pointer text-tz-charcoal active:scale-95 select-none"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <span className="text-xs text-slate-400 font-light ml-2">
                          (Pricing dynamically updates per traveler)
                        </span>
                      </div>
                    </div>

                    {/* Lodging Tier Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        2. Accommodation Level
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                          { id: "camp", label: "Adventure Camp", desc: "Cozy dome tents in bush", extra: "+$0" },
                          { id: "lodge", label: "Comfort Lodge", desc: "Private en-suite bungalows", extra: "+$400/person" },
                          { id: "glamping", label: "Luxe Canopy", desc: "Exclusive luxury glamping tents", extra: "+$1,200/person" }
                        ].map((item) => {
                          const isActive = lodgingTier === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setLodgingTier(item.id)}
                              className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-2.5 transition-all h-28 cursor-pointer ${
                                isActive 
                                  ? "bg-tz-blue/5 border-tz-blue/40 ring-1 ring-tz-blue/30" 
                                  : "bg-slate-50 hover:bg-slate-100/70 border-slate-200/60"
                              }`}
                            >
                              <div className="flex flex-col gap-0.5">
                                <span className="font-bold text-xs text-tz-charcoal">{item.label}</span>
                                <span className="text-[9px] text-slate-400 font-light leading-snug">{item.desc}</span>
                              </div>
                              <span className="text-[10px] font-bold text-tz-blue">{item.extra}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Optional Customizer Add-ons */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        3. Extra Reservation Upgrades
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                          { id: "transfers", label: "Airport Transfers", desc: "Two-way VIP shuttles", extra: "+$50 flat" },
                          { id: "hotel", label: "Pre-trip Arusha Lodge", desc: "Arrive 1 day early to rest", extra: "+$150/person" },
                          { id: "photographer", label: "Photographer Guide", desc: "High-spec DSLR coverage", extra: "+$300 flat" }
                        ].map((item) => {
                          const isSelected = selectedAddons.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleAddonToggle(item.id)}
                              className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-2.5 transition-all h-28 cursor-pointer ${
                                isSelected 
                                  ? "bg-tz-blue/5 border-tz-blue/40 ring-1 ring-tz-blue/30" 
                                  : "bg-slate-50 hover:bg-slate-100/70 border-slate-200/60"
                              }`}
                            >
                              <div className="flex justify-between items-start gap-1 w-full">
                                <div className="flex flex-col gap-0.5">
                                  <span className="font-bold text-xs text-tz-charcoal">{item.label}</span>
                                  <span className="text-[9px] text-slate-400 font-light leading-snug">{item.desc}</span>
                                </div>
                                <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                                  isSelected ? "bg-tz-blue border-tz-blue text-white" : "border-slate-300 bg-white"
                                }`}>
                                  {isSelected && <Check className="w-3 h-3 stroke-[3px]" />}
                                </div>
                              </div>
                              <span className="text-[10px] font-bold text-tz-blue">{item.extra}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <h4 className="font-display font-black text-xl text-tz-charcoal border-b border-slate-100 pb-3 mt-4 flex items-center gap-2">
                      <span>4.</span> Personal Details &amp; Contact
                    </h4>

                    {/* Guest Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Full Name</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="Elizabeth Bennett" 
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-slate-100 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:bg-slate-50 border focus:border-tz-blue/35 transition-all text-tz-charcoal" 
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          placeholder="elizabeth@example.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-100 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:bg-slate-50 border focus:border-tz-blue/35 transition-all text-tz-charcoal" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Phone Number</label>
                        <input 
                          required 
                          type="tel" 
                          placeholder="+1 (555) 019-2834" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-slate-100 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:bg-slate-50 border focus:border-tz-blue/35 transition-all text-tz-charcoal" 
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Special Requests / Requirements</label>
                        <input 
                          type="text" 
                          placeholder="Dietary requests, medical conditions, hotel preference..." 
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="w-full bg-slate-100 py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:bg-slate-50 border focus:border-tz-blue/35 transition-all text-tz-charcoal" 
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#003452] hover:bg-[#00243a] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.98] cursor-pointer mt-4"
                    >
                      Confirm Reservation Inquiry <Send className="w-4 h-4 ml-0.5" />
                    </button>
                  </form>

                  {/* Right Column: Dynamic Price Quote & Invoice */}
                  <div className="w-full lg:w-[40%] flex flex-col gap-8 lg:sticky lg:top-6">
                    
                    <div className="bg-[#003452] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/5 relative overflow-hidden text-left flex flex-col justify-between">
                      {/* Geometric background */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <pattern id="invoice-tribal" width="30" height="30" patternUnits="userSpaceOnUse">
                            <path d="M 0 15 L 15 0 L 30 15 L 15 30 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
                          </pattern>
                          <rect width="100%" height="100%" fill="url(#invoice-tribal)" />
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <h4 className="font-display font-black text-lg text-yellow-400 tracking-wider uppercase mb-5 flex items-center gap-1.5">
                          <Sparkles className="w-5 h-5" /> Real-Time Live Quote
                        </h4>

                        <div className="flex flex-col gap-3.5 text-xs">
                          {/* Base package item */}
                          <div className="flex justify-between border-b border-white/10 pb-2.5">
                            <span className="opacity-75 font-light">Base Package ({travelersCount} x ${activeOperator.basePrice})</span>
                            <span className="font-bold">${baseCost.toLocaleString()}</span>
                          </div>

                          {/* Lodging upgrade item */}
                          {lodgingCost > 0 && (
                            <div className="flex justify-between border-b border-white/10 pb-2.5">
                              <span className="opacity-75 font-light">Lodging Level Upgrades</span>
                              <span className="font-bold">+${lodgingCost.toLocaleString()}</span>
                            </div>
                          )}

                          {/* Add-ons itemized list */}
                          {(transferCost > 0 || hotelCost > 0 || photoCost > 0) && (
                            <div className="flex flex-col gap-2.5 border-b border-white/10 pb-2.5">
                              <span className="text-[9px] font-black uppercase text-yellow-400/80 tracking-wider">Selected Add-ons</span>
                              {transferCost > 0 && (
                                <div className="flex justify-between pl-2">
                                  <span className="opacity-75 font-light">· VIP Airport Transfers</span>
                                  <span className="font-semibold">+$50</span>
                                </div>
                              )}
                              {hotelCost > 0 && (
                                <div className="flex justify-between pl-2">
                                  <span className="opacity-75 font-light">· Pre-trip Arusha Lodge ({travelersCount} x $150)</span>
                                  <span className="font-semibold">+${hotelCost.toLocaleString()}</span>
                                </div>
                              )}
                              {photoCost > 0 && (
                                <div className="flex justify-between pl-2">
                                  <span className="opacity-75 font-light">· Private DSLR Photographer</span>
                                  <span className="font-semibold">+$300</span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Total box */}
                          <div className="pt-3 flex justify-between items-center text-sm font-black mt-2">
                            <span>ESTIMATED TOTAL</span>
                            <span className="text-yellow-400 text-2xl font-display font-black">${totalCost.toLocaleString()} USD</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              )}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
