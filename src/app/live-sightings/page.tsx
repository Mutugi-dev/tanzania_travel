"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, MapPin, Clock, Eye, AlertCircle, Sparkles, X, PlusCircle } from "lucide-react";

interface Sighting {
  id: string;
  animal: string;
  emoji: string;
  location: string;
  time: string;
  details: string;
  reporter: string;
  img: string;
}

export default function LiveSightings() {
  const [sightings, setSightings] = useState<Sighting[]>([
    {
      id: "s1",
      animal: "Pride of Lions",
      emoji: "🦁",
      location: "Seronera River Valley, Serengeti",
      time: "12 minutes ago",
      details: "Two male lions and three lionesses relaxing on the granite kopjes near the river crossing loop.",
      reporter: "Safari Guide Emmanuel",
      img: "https://images.unsplash.com/photo-1614027164847-1b2809eb7b9b?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "s2",
      animal: "Leopard in Acacia",
      emoji: "🐆",
      location: "Lemek Hills, Serengeti",
      time: "45 minutes ago",
      details: "Spotted a solitary female leopard resting in the branches of a large yellow fever acacia tree, guarding a fresh kill.",
      reporter: "Trekker Sarah J.",
      img: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "s3",
      animal: "Elephant Family Crossing",
      emoji: "🐘",
      location: "Tarangire River Bed, Tarangire",
      time: "2 hours ago",
      details: "A large herd of about 30 elephants, including two tiny calves, crossing the dry sandy river bed towards the waterholes.",
      reporter: "Photographer Robert H.",
      img: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "s4",
      animal: "Rare Black Rhino",
      emoji: "🦏",
      location: "Ngorongoro Crater Floor",
      time: "3 hours ago",
      details: "Incredible luck sighting a rare black rhino grazing near the edge of Lerai forest. Accompanied by two rangers at a distance.",
      reporter: "Guide Josephat",
      img: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&w=400&q=80"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animalInput, setAnimalInput] = useState("Lions");
  const [emojiInput, setEmojiInput] = useState("🦁");
  const [locationInput, setLocationInput] = useState("Serengeti National Park");
  const [detailsInput, setDetailsInput] = useState("");
  const [reporterInput, setReporterInput] = useState("");

  const handleAnimalSelect = (val: string) => {
    setAnimalInput(val);
    const emojiMap: Record<string, string> = {
      "Lions": "🦁",
      "Leopard": "🐆",
      "Elephants": "🐘",
      "Cheetah": "⚡",
      "Rhino": "🦏",
      "Giraffe": "🦒",
      "Zebra": "🦓"
    };
    setEmojiInput(emojiMap[val] || "🐾");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!detailsInput || !reporterInput) return;

    const newSighting: Sighting = {
      id: `s-${Date.now()}`,
      animal: animalInput,
      emoji: emojiInput,
      location: locationInput,
      time: "Just now",
      details: detailsInput,
      reporter: reporterInput,
      img: "https://images.unsplash.com/photo-1504829857797-ddff28127792?auto=format&fit=crop&w=400&q=80"
    };

    setSightings(prev => [newSighting, ...prev]);
    setIsModalOpen(false);
    setDetailsInput("");
    setReporterInput("");
  };

  return (
    <>
      <Header />
      
      <main className="flex-1 bg-slate-50 font-sans py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Header Card */}
          <div className="text-center mb-12 flex flex-col items-center">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
              Live Safari Sightings
            </h1>
            <p className="text-sm font-light text-slate-500 mt-3 max-w-xl leading-relaxed mx-auto">
              Real-time wildlife spotting dashboard contributed by registered safari guides and travelers across Serengeti, Ngorongoro, and Tarangire.
            </p>
            <div className="w-20 h-1 bg-tz-gold mt-6 rounded-full"></div>

            {/* Float Call to Action */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 bg-tz-blue hover:bg-tz-blue-hover text-white py-3.5 px-8 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" /> Report a Sighting
            </button>
          </div>

          {/* Sighting alert bar */}
          <div className="w-full bg-emerald-50 text-emerald-800 p-4.5 rounded-2xl border border-emerald-100 flex items-center gap-3.5 mb-10 text-left">
            <AlertCircle className="w-5 h-5 text-emerald-600 shrink-0 stroke-[2px]" />
            <span className="text-xs font-medium">
              <strong>Tip for Travelers:</strong> Respect park speed limits and safety borders. Keeping guides updated on rare spots helps prevent off-road congestion.
            </span>
          </div>

          {/* Sightings Grid Feed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {sightings.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100/80 hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row items-stretch group text-left"
              >
                {/* Visual Cover (Small Card side) */}
                <div className="w-full sm:w-[40%] relative min-h-[160px]">
                  <Image
                    src={s.img}
                    alt={s.animal}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Animal Emoji Overlay */}
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-xl shadow-md border border-slate-100">
                    {s.emoji}
                  </div>
                </div>

                {/* Details Sheet */}
                <div className="w-full sm:w-[60%] p-6 flex flex-col justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <h4 className="font-display font-black text-lg text-tz-charcoal leading-tight">
                        {s.animal}
                      </h4>
                      <span className="text-[10px] font-bold text-tz-blue uppercase tracking-wider flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {s.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                      <MapPin className="w-3.5 h-3.5 text-tz-blue" />
                      <span>{s.location}</span>
                    </div>

                    <p className="text-[11px] font-light text-slate-500 leading-relaxed mt-1">
                      {s.details}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 text-[10px] font-semibold text-slate-400">
                    <span className="flex items-center gap-1.5 uppercase tracking-wider">
                      <Eye className="w-3.5 h-3.5 text-tz-blue" /> By {s.reporter}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Reporting Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 font-sans animate-fade-in-up">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 border border-slate-100 shadow-2xl relative text-left">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-tz-charcoal" />
            </button>

            <h3 className="font-display font-black text-2xl text-tz-charcoal flex items-center gap-2">
              Report Wildlife Spot <Sparkles className="w-5 h-5 text-tz-gold" />
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Add a real-time wildlife spot in national parks.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Animal Type</label>
                <select
                  value={animalInput}
                  onChange={(e) => handleAnimalSelect(e.target.value)}
                  className="w-full bg-slate-100 py-3 px-4.5 rounded-xl text-sm focus:outline-none focus:bg-slate-50 border focus:border-tz-blue/35 transition-all text-tz-charcoal cursor-pointer"
                >
                  <option value="Lions">Pride of Lions 🦁</option>
                  <option value="Leopard">Leopard 🐆</option>
                  <option value="Cheetah">Cheetah ⚡</option>
                  <option value="Elephants">Elephants herd 🐘</option>
                  <option value="Rhino">Black Rhino 🦏</option>
                  <option value="Giraffe">Giraffe 🦒</option>
                  <option value="Zebra">Zebra herd 🦓</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Park Location</label>
                <select
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  className="w-full bg-slate-100 py-3 px-4.5 rounded-xl text-sm focus:outline-none focus:bg-slate-50 border focus:border-tz-blue/35 transition-all text-tz-charcoal cursor-pointer"
                >
                  <option value="Seronera Valley, Serengeti">Seronera Valley, Serengeti</option>
                  <option value="Ngorongoro Crater Floor">Ngorongoro Crater Floor</option>
                  <option value="Tarangire River Loop">Tarangire River Loop</option>
                  <option value="Manyara Forest Path">Manyara Forest Path</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Details / Sighting description</label>
                <textarea
                  required
                  rows={2}
                  value={detailsInput}
                  onChange={(e) => setDetailsInput(e.target.value)}
                  placeholder="E.g., spotted a mother cheetah with two cubs playing in the shade of a baobab tree."
                  className="w-full bg-slate-100 py-3 px-4.5 rounded-xl text-sm focus:outline-none focus:bg-slate-50 border focus:border-tz-blue/35 transition-all text-tz-charcoal resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Your Name / Guide License</label>
                <input
                  required
                  type="text"
                  value={reporterInput}
                  onChange={(e) => setReporterInput(e.target.value)}
                  placeholder="E.g. Guide Peter K."
                  className="w-full bg-slate-100 py-3 px-4.5 rounded-xl text-sm focus:outline-none focus:bg-slate-50 border focus:border-tz-blue/35 transition-all text-tz-charcoal"
                />
              </div>

              <div className="flex gap-3.5 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-tz-charcoal py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all shadow-md"
                >
                  Submit Spot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
