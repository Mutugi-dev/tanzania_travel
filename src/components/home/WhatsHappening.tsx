import Link from "next/link";
import { ChevronRight } from "lucide-react";
import HDImage from "@/components/HDImage";
import { MONTHLY_GUIDES, MonthlyActivity } from "@/data/monthly-guides";
import { ACTIVITIES } from "@/data/activities";

function getGuideImage(guide: MonthlyActivity): string {
  return guide.img ?? ACTIVITIES.find(a => a.id === guide.activityId)?.images.card ?? "";
}

export default function WhatsHappening() {
  const currentMonth = "may"; // Target month for the homepage section
  const guides = MONTHLY_GUIDES[currentMonth].slice(0, 2);

  return (
    <section id="whats-happening" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto font-sans">
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
          What&apos;s happening <span className="text-[#006d96]">this {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} 2026</span>
        </h2>
        <div className="w-20 h-1 bg-tz-gold mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {guides.map((guide, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div className="flex flex-col gap-4 mb-8 text-left">
              <span className={`text-xs font-bold tracking-widest uppercase py-1.5 px-4 rounded-full self-start ${index === 0 ? "text-tz-blue bg-tz-blue/15" : "text-[#006d96] bg-cyan-100/50"}`}>
                {guide.badge} {index === 0 && "FEATURE"}
              </span>
              <h3 className={`font-display font-black text-3xl text-tz-charcoal leading-tight transition-colors ${index === 0 ? "group-hover:text-tz-blue" : "group-hover:text-[#006d96]"}`}>
                {guide.title}
              </h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">
                {guide.desc}
              </p>
            </div>

            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg mt-auto">
              <HDImage
                src={getGuideImage(guide)}
                alt={guide.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              
              {/* Action button overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h4 className="text-white font-display font-black text-lg sm:text-xl tracking-wider leading-snug drop-shadow-md uppercase px-4">
                  DISCOVER {guide.title}
                </h4>
                <Link 
                  href={`/be-inspired/${guide.id}`} 
                  className="mt-4 bg-tz-gold hover:bg-tz-gold-hover text-white text-[10px] font-bold py-2.5 px-6 rounded-md uppercase tracking-widest transition-all shadow-md flex items-center gap-1.5 hover:scale-105"
                >
                  Learn More <ChevronRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
