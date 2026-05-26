"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HDImage from "@/components/HDImage";
import { Search, Calendar, Clock, ChevronRight, Mail, Send, Check } from "lucide-react";
import { ARTICLES } from "@/data/news";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const categories = [
    { id: "all", name: "All News" },
    { id: "awards", name: "Awards & Nominations" },
    { id: "tours", name: "Influencer Tours" },
    { id: "expos", name: "International Expos" },
    { id: "diplomacy", name: "Diplomacy & Pacts" }
  ];

  // Filtering logic
  const filteredArticles = ARTICLES.filter(art => {
    const matchesCategory = selectedCategory === "all" || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSuccess(true);
      setEmailInput("");
    }
  };

  return (
    <>
      <Header />
      
      <main className="flex-1 bg-slate-50 font-sans py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Header Card */}
          <div className="text-center mb-16">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
              News &mdash; Tourism Hub updates
            </h1>
            <p className="text-sm font-light text-slate-500 mt-3 max-w-xl leading-relaxed mx-auto">
              Follow official press statements, industry nominations, international trade expositions, and bilateral partnerships establishing Destination Tanzania Unforgettable.
            </p>
            <div className="w-20 h-1 bg-tz-gold mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Filtering & Search Bar */}
          <div className="w-full flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-white p-6 rounded-3xl border border-slate-100 shadow-md">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[#005e7c] text-white shadow-md scale-102"
                      : "bg-slate-50 hover:bg-slate-100 text-tz-charcoal border border-slate-200/50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 py-3 pl-10 pr-4 rounded-xl text-xs border border-slate-200 focus:outline-none focus:bg-white focus:border-tz-blue/35 text-tz-charcoal transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          {/* News Cards Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-20 text-left">
              {filteredArticles.map((art) => (
                <Link
                  key={art.id}
                  href={`/news/${art.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col h-full cursor-pointer"
                >
                  {/* Image Container with Zoom */}
                  <div className="relative h-56 overflow-hidden">
                    <HDImage
                      src={art.img}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 py-1.5 px-3.5 rounded-full bg-white text-[9px] font-black tracking-widest text-tz-charcoal shadow-md uppercase">
                      {art.categoryLabel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col gap-3">
                      
                      {/* Meta Date & read time */}
                      <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{art.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{art.readTime}</span>
                        </div>
                      </div>

                      <h3 className="font-display font-black text-lg sm:text-xl text-tz-charcoal group-hover:text-tz-blue transition-colors leading-tight line-clamp-3">
                        {art.title}
                      </h3>
                      
                      <p className="text-xs font-light text-slate-500 leading-relaxed font-sans line-clamp-4">
                        {art.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                      <span className="text-[10px] font-black text-tz-blue flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
                        Read Article <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="w-full bg-white rounded-3xl p-16 text-center border border-slate-100 shadow-md mb-20">
              <h3 className="text-xl font-black text-tz-charcoal">No articles found</h3>
              <p className="text-xs font-light text-slate-400 mt-1">Try modifying your category filter or search keywords.</p>
            </div>
          )}

          {/* SECTION: Newsletter subscription card */}
          <div className="w-full bg-[#003452] rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl mb-12">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="news-tribal" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 20 L 20 0 L 40 20 L 20 40 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#news-tribal)" />
              </svg>
            </div>
            
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-xl">
                📬
              </div>
              <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase">
                STAY UNFORGETTABLY INFORMED
              </span>
              <h3 className="font-display font-black text-3xl leading-tight">
                Join the Savannah Circle
              </h3>
              <p className="text-xs sm:text-sm font-light opacity-90 leading-relaxed max-w-md">
                Register to receive monthly summaries on conservation policy, flight schedule corridor updates, seasonal migration alerts, and premium tour operator deals.
              </p>
              
              {newsletterSuccess ? (
                <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-2xl p-4 w-full text-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4 animate-fade-in-up">
                  <Check className="w-4 h-4 stroke-[3px]" /> Welcome to the Circle! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full mt-4">
                  <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl py-3 px-4.5 text-xs text-white focus:outline-none focus:bg-white/15 focus:border-yellow-400 placeholder-white/50"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-tz-charcoal py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                  >
                    Subscribe <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
