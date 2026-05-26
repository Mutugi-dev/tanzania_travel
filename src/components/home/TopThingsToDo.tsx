import Link from "next/link";
import { Palmtree, Compass, Mountain, Fish, Bird, Waves, Footprints } from "lucide-react";
import HDImage from "@/components/HDImage";
import { ACTIVITIES } from "@/data/activities";

export default function TopThingsToDo() {
  const topActivities = ACTIVITIES.filter(a => a.featured);

  const getIcon = (id: string) => {
    switch(id) {
      case "zanzibar-escape": return <Palmtree className="w-5 h-5" />;
      case "kite-surfing": return <Waves className="w-5 h-5" />;
      case "chimp-trekking": return <Footprints className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto font-sans">
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
          Top <span className="text-[#006d96]">3 things</span> to do this week
        </h2>
        <div className="w-20 h-1 bg-tz-gold mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topActivities.map((card) => (
          <Link
            key={card.id}
            href={`/things-to-do/${card.id}`}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col h-full"
          >
            {/* Image Container with Hover zoom */}
            <div className="relative h-64 overflow-hidden">
              <HDImage
                src={card.images.card}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-widest text-white uppercase">
                {getIcon(card.id)}
                <span>{card.badge}</span>
              </div>
            </div>

            {/* Card Content styled inside a high-end deep-teal footer card box */}
            <div className="p-8 bg-[#004e6c] text-white flex-1 flex flex-col justify-between group-hover:bg-[#003e57] transition-colors duration-300">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold tracking-widest uppercase opacity-75">{card.badge}</span>
                <h3 className="font-display font-extrabold text-2xl group-hover:text-tz-gold transition-colors leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm font-light leading-relaxed opacity-85 mt-2 line-clamp-3">
                  {card.desc}
                </p>
              </div>
              <span className="mt-8 text-xs font-bold tracking-wider text-tz-gold group-hover:underline underline-offset-4 flex items-center gap-1 uppercase">
                LEARN MORE &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
