import HDImage from "@/components/HDImage";
import { Phone, Globe } from "lucide-react";

export default function CampaignsSection() {
  const campaigns = [
    {
      badge: "PHOTOGRAPHY SEASON",
      title: "WHEN TANZANIA SHOWS IT'S TRUE",
      highlightTitle: "COLORS",
      desc: "Golden light. Clear skies. Living culture. This season, Tanzania becomes a canvas built for photographers and filmmakers.",
      subDesc: "Bring your lens. Capture what the world hasn't seen yet.",
      img: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&w=800&q=80", // Photographer looking out
      colorStyle: "text-amber-400 border-amber-400"
    },
    {
      badge: "SAADANI",
      title: "TURTLE HATCHING",
      highlightTitle: "",
      desc: "Each step to the ocean is survival. This season, Saadani tells that story.",
      subDesc: "Come witness. Capture responsibly. Protect the moment.",
      img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80", // Sea turtle
      colorStyle: "text-cyan-400 border-cyan-400"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
            May 2026 Campaigns
          </h2>
          <div className="w-20 h-1 bg-tz-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
          {campaigns.map((camp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col h-full group"
            >
              {/* Main Poster Body */}
              <div className="relative h-[480px] w-full overflow-hidden flex flex-col justify-between p-8 text-white">
                <HDImage
                  src={camp.img}
                  alt={camp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75 z-0"></div>

                {/* Top Poster Coat of Arms / Tourist Board Header */}
                <div className="relative z-10 flex justify-between items-start w-full">
                  {/* Tanzanian Coat of Arms Simulating Box */}
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md py-1.5 px-3.5 rounded-lg border border-white/10 text-[9px] font-bold tracking-wider">
                    <span className="text-sm">🛡️</span>
                    <div className="flex flex-col leading-none text-left">
                      <span>THE UNITED REPUBLIC</span>
                      <span>OF TANZANIA</span>
                    </div>
                  </div>
                  {/* Tourist Board Logo */}
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md py-1.5 px-3.5 rounded-lg border border-white/10 text-[9px] font-bold tracking-wider text-right">
                    <div className="flex flex-col leading-none">
                      <span className="text-tz-gold font-extrabold uppercase">Tanzania</span>
                      <span className="text-[7px] uppercase tracking-widest mt-0.5">Tourist Board</span>
                    </div>
                    <span className="text-sm">🦒</span>
                  </div>
                </div>

                {/* Center Title / Typography Block */}
                <div className="relative z-10 my-auto text-center flex flex-col gap-2.5">
                  <h3 className="font-display font-black text-3xl sm:text-4xl tracking-wide uppercase leading-tight drop-shadow-md">
                    {camp.title}
                  </h3>
                  {camp.highlightTitle && (
                    <div className="inline-block bg-yellow-400 text-tz-charcoal font-black text-2xl sm:text-3xl px-4 py-1.5 rounded-md uppercase self-center tracking-widest drop-shadow-md">
                      {camp.highlightTitle}
                    </div>
                  )}
                </div>

                {/* Bottom Card Description Block (Glass panel) */}
                <div className="relative z-10 glass-panel-dark p-6 rounded-2xl border border-white/10 flex flex-col gap-3 text-left">
                  <p className="text-sm font-light leading-relaxed opacity-95">
                    {camp.desc}
                  </p>
                  <div className={`border-l-2 ${camp.colorStyle} pl-3 py-0.5 mt-2`}>
                    <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                      {camp.subDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Poster Official Info & Contact Strip (Deep blue matching the screenshots!) */}
              <div className="bg-[#003c66] text-white p-5 flex flex-col sm:flex-row justify-between items-center text-xs gap-4 border-t border-white/10 font-sans">
                {/* Left Side: Contact Phone */}
                <div className="flex items-center gap-2 opacity-90 font-medium">
                  <Phone className="w-4 h-4 text-tz-gold stroke-[2px]" />
                  <span>+255 761 880 000</span>
                </div>

                {/* Middle: Social Handles */}
                <div className="flex items-center gap-3.5">
                  <div className="flex gap-2">
                    {/* Inline SVG Instagram */}
                    <svg className="w-4 h-4 fill-none stroke-white hover:stroke-tz-gold stroke-2 transition-colors" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    {/* Inline SVG Facebook */}
                    <svg className="w-4 h-4 fill-white hover:fill-tz-gold transition-colors" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                    {/* Inline SVG Youtube */}
                    <svg className="w-4 h-4 fill-white hover:fill-tz-gold transition-colors" viewBox="0 0 24 24">
                      <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.096-2.102C19.537 3.75 12 3.75 12 3.75s-7.537 0-9.402.311C1.576 4.337.774 5.141.502 6.163.167 8.043.167 12 .167 12s0 3.957.335 5.837c.272 1.022 1.074 1.826 2.096 2.102 1.865.311 9.402.311 9.402.311s7.537 0 9.402-.311c1.022-.276 1.824-1.08 2.096-2.102.335-1.88.335-5.837.335-5.837s0-3.957-.335-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    {/* Inline SVG Linkedin */}
                    <svg className="w-4 h-4 fill-white hover:fill-tz-gold transition-colors" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <span className="opacity-90 font-medium">@tanzania_unforgettable</span>
                </div>

                {/* Right Side: Website Link */}
                <div className="flex items-center gap-2 opacity-90 font-medium">
                  <Globe className="w-4 h-4 text-tz-gold stroke-[2px]" />
                  <a href="https://www.tanzaniatourism.go.tz" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    www.tanzaniatourism.go.tz
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
