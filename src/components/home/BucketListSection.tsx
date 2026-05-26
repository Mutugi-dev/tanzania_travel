"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckSquare, Phone, Globe } from "lucide-react";
import HDImage from "@/components/HDImage";
import { MONTHLY_GUIDES, MonthlyActivity } from "@/data/monthly-guides";
import { ACTIVITIES } from "@/data/activities";

function getGuideImage(card: MonthlyActivity): string {
  return card.bucketListImg ?? card.img ?? ACTIVITIES.find(a => a.id === card.activityId)?.images.card ?? "";
}

export default function BucketListSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Collect all bucket-list-tagged monthly guide entries in chronological month order, then sort by bucketListOrder
  const bucketListCards = Object.values(MONTHLY_GUIDES)
    .flat()
    .filter(g => g.bucketList)
    .sort((a, b) => (a.bucketListOrder ?? 99) - (b.bucketListOrder ?? 99));

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-[#eaeff2]/40 border-y border-slate-100 px-6 sm:px-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title Block */}
        <div className="text-center mb-4">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
            2026 Bucket List
          </h2>
          <p className="text-sm font-light text-slate-500 mt-2.5">
            Swipe through Tanzania&apos;s must-do moments for 2026.
          </p>
        </div>

        {/* Scrolling Deck */}
        <div className="relative w-full mt-12 group/deck">
          {/* Scroll Left Trigger */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg border border-slate-100 hover:scale-105 active:scale-95 transition-all text-tz-charcoal opacity-0 group-hover/deck:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5px]" />
          </button>

          {/* Scrolling Row */}
          <div
            ref={scrollRef}
            className="w-full flex gap-6 overflow-x-auto pb-8 pt-4 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {bucketListCards.map((card) => (
              <Link
                key={card.id}
                href={`/be-inspired/${card.id}`}
                className="w-[280px] sm:w-[320px] h-[480px] flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 flex flex-col justify-between snap-center snap-always relative hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Image & Dark Gradient */}
                <div className="absolute inset-0 z-0">
                  <HDImage
                    src={getGuideImage(card)}
                    alt={card.bucketListSubtitle ?? card.title}
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75"></div>
                </div>

                {/* Top Story Header Banner */}
                <div className="relative z-10 p-5 flex justify-between items-start w-full bg-black/10 backdrop-blur-xs border-b border-white/5">
                  <div className="flex items-center gap-1.5 text-[8px] font-bold text-white tracking-widest uppercase">
                    <span>🛡️ </span>
                    <span>TANZANIA</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#f59e0b] text-[#111827] py-0.5 px-2 rounded-full text-[8px] font-extrabold uppercase shadow-sm">
                    <CheckSquare className="w-2.5 h-2.5" />
                    <span>BUCKET LIST</span>
                  </div>
                </div>

                {/* Middle Story Content Block */}
                <div className="relative z-10 p-6 flex flex-col justify-center items-center text-center my-auto gap-3">
                  <div className="flex flex-col items-center">
                    <span className="text-tz-gold font-display font-black text-2xl tracking-wider leading-none drop-shadow-md">
                      {card.bucketListIndex}
                    </span>
                    <h3 className="text-white font-display font-black text-xl leading-snug tracking-wide uppercase max-w-[240px] mt-1.5 drop-shadow-md">
                      {card.bucketListTitle}
                    </h3>
                  </div>

                  <div className="bg-yellow-400 text-[#111827] text-[10px] font-black tracking-widest px-3 py-1.5 rounded-md uppercase drop-shadow-md max-w-[200px]">
                    {card.bucketListSubtitle}
                  </div>
                </div>

                {/* Bottom Story Footer */}
                <div className="relative z-10 bg-[#003c66] text-white p-4.5 flex flex-col items-center gap-2 border-t border-white/5 font-sans">
                  {/* Yellow Location Tag */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-tz-charcoal text-[9px] font-black tracking-widest py-1 px-3.5 rounded-full uppercase shadow-md whitespace-nowrap">
                    {card.location}
                  </div>

                  <div className="flex justify-between w-full items-center text-[8px] font-bold tracking-wider opacity-90 mt-2.5">
                    <div className="flex items-center gap-1">
                      <Phone className="w-2.5 h-2.5 text-tz-gold" />
                      <span>+255 761 880</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-2.5 h-2.5 text-tz-gold" />
                      <span>www.tanzaniatourism.go.tz</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Right Trigger */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg border border-slate-100 hover:scale-105 active:scale-95 transition-all text-tz-charcoal opacity-0 group-hover/deck:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
