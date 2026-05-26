import Link from "next/link";
import { Compass, Footprints, Users } from "lucide-react";
import HDImage from "@/components/HDImage";
import { ACTIVITIES } from "@/data/activities";

export default function TenBestThings() {
  // Grab 3 top activities for the homepage highlight
  const signatureActivities = ACTIVITIES.filter(a => a.topPick);

  // Map icons based on category/id (fallback to Compass)
  const getIcon = (id: string) => {
    switch(id) {
      case "safari": return <Compass className="w-4 h-4" />;
      case "hiking": return <Footprints className="w-4 h-4" />;
      case "swahili-culture": return <Users className="w-4 h-4" />;
      default: return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 bg-tz-sand-dark px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
            Signature Tanzanian <span className="text-[#006d96]">Highlights</span>
          </h2>
          <div className="w-20 h-1 bg-tz-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {signatureActivities.map((card) => (
            <Link
              key={card.id}
              href={`/things-to-do/${card.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100/50 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <HDImage
                  src={card.images.card}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-widest text-white uppercase">
                  {getIcon(card.id)}
                  <span>{card.badge}</span>
                </div>
              </div>

              {/* Card Footer styled in Deep Teal Box */}
              <div className="p-8 bg-[#005e7c] text-white flex-1 flex flex-col justify-between group-hover:bg-[#004e67] transition-colors duration-300">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-75">{card.badge}</span>
                  <h3 className="font-display font-extrabold text-2xl group-hover:text-tz-gold transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed opacity-85 mt-2 line-clamp-3">
                    {card.desc}
                  </p>
                </div>
                <span className="mt-8 text-xs font-bold tracking-wider text-tz-gold group-hover:underline underline-offset-4 flex items-center gap-1 uppercase">
                  EXPLORE ACTIVITY &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-16">
          <Link
            href="/things-to-do"
            className="inline-flex items-center justify-center bg-[#005e7c] hover:bg-tz-blue-hover text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-sm tracking-widest uppercase"
          >
            See all experiences
          </Link>
        </div>
      </div>
    </section>
  );
}
