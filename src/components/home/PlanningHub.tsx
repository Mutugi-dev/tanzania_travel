import Image from "next/image";
import Link from "next/link";
import { Compass, Calendar, BookOpen, ShieldCheck } from "lucide-react";

export default function PlanningHub() {
  const cards = [
    {
      icon: <Calendar className="w-6 h-6 text-tz-blue" />,
      title: "Choose your travel season",
      desc: "Discover when to visit for migration, beach holidays, cultural festivals, or quieter off-peak escapes.",
      buttonText: "See best times",
      img: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80",
      href: "/be-inspired"
    },
    {
      icon: <Compass className="w-6 h-6 text-tz-blue" />,
      title: "Pick your destinations",
      desc: "From Serengeti and Ngorongoro to Zanzibar and beyond, explore Tanzania's key regions and attractions.",
      buttonText: "Explore destinations",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      href: "/places-to-go"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-tz-blue" />,
      title: "Design your experience",
      desc: "Safaris, islands, culture, meetings and incentives – browse signature experiences and sample itineraries.",
      buttonText: "View itineraries",
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      href: "/things-to-do"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-tz-blue" />,
      title: "Practical travel information",
      desc: "Find details on visas, getting here, health and safety, local transport, and useful travel tips.",
      buttonText: "Travel information",
      img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      href: "/visa-checker"
    }
  ];

  return (
    <section id="planning-hub" className="py-24 bg-white px-6 sm:px-12 max-w-7xl mx-auto font-sans">
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
          Plan ahead for your Tanzania adventure
        </h2>
        <p className="text-sm font-light text-slate-500 max-w-2xl mt-4 leading-relaxed">
          Thinking about visiting Tanzania? Start planning your journey now &ndash; from the best time to travel, to where to go and how to get here. Use these quick links to design a trip that fits your dreams.
        </p>
        <div className="w-20 h-1 bg-tz-gold mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100/80 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full hover:scale-[1.01]"
          >
            <div>
              {/* Image Top */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Info Block */}
              <div className="p-6 text-left flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center -mt-12 relative z-10 border-2 border-white shadow-md">
                  {card.icon}
                </div>
                <h3 className="font-display font-black text-lg text-tz-charcoal leading-snug group-hover:text-tz-blue transition-colors mt-2">
                  {card.title}
                </h3>
                <p className="text-xs font-light text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="p-6 pt-0 mt-auto">
              <Link
                href={card.href}
                className="w-full bg-[#005e7c] hover:bg-tz-blue-hover text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
              >
                {card.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Hub Link */}
      <div className="mt-16 text-center text-sm font-semibold text-tz-charcoal tracking-wide">
        Ready to start planning? Explore more tools in our{" "}
        <Link href="/visa-checker" className="text-tz-blue hover:underline font-bold">
          Plan Your Trip hub
        </Link>
      </div>
    </section>
  );
}
