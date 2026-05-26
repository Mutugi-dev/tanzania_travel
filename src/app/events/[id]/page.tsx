"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HDImage from "@/components/HDImage";
import Link from "next/link";
import { Calendar, MapPin, ChevronLeft, Ticket, CheckCircle2, Check } from "lucide-react";
import { EVENTS } from "@/data/events";
import { use } from "react";

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const event = EVENTS.find((e) => e.id === id);

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!event) {
    notFound();
  }

  const isAwards = event.type === "Awards Gala";
  const isConcert = event.type === "Live Concert";

  const formHeading = isAwards
    ? "Request Your Invitation"
    : isConcert
    ? "Get Your Tickets"
    : "Register Your Interest";

  const formSubheading = isAwards
    ? "This is an invitation-only event. Please provide your affiliation with Tanzania tourism or conservation to be considered."
    : isConcert
    ? "Tickets are limited. Submit your details and we will confirm availability and send payment instructions."
    : "Complete the form below to register your interest. Our team will follow up with full participation details.";

  const messagePlaceholder = isAwards
    ? "Please explain your affiliation with Tanzania tourism or conservation..."
    : isConcert
    ? "Number of tickets required, and any special requirements..."
    : "Your role, organization, or any specific questions...";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 font-sans py-12 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="w-full mb-8">
            <Link href="/events" className="inline-flex items-center gap-1 text-sm font-bold text-tz-blue hover:text-tz-blue-hover transition-colors uppercase tracking-wider">
              <ChevronLeft className="w-4 h-4" /> Back to Events
            </Link>
          </div>

          <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col mb-16">
            {/* Banner Cover */}
            <div className="relative h-72 sm:h-[400px] w-full shrink-0">
              <HDImage
                src={event.img}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Category overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col gap-4">
                <span className="text-[10px] font-black tracking-widest text-tz-charcoal bg-tz-gold py-1.5 px-4 rounded-full uppercase self-start shadow-md">
                  {event.type}
                </span>
                <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-3xl">
                  {event.title}
                </h1>
              </div>
            </div>

            {/* Quick Info Bar */}
            <div className="bg-[#003452] text-white p-6 sm:px-12 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-tz-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Date</span>
                  <span className="font-bold text-sm tracking-wide">{event.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-tz-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Venue</span>
                  <span className="font-bold text-sm tracking-wide">{event.venue}</span>
                </div>
              </div>
            </div>

            {/* Content paragraph */}
            <div className="p-8 sm:p-12 flex-1 font-sans flex flex-col gap-6 text-tz-charcoal">
              
              <div className="prose prose-lg prose-slate max-w-none">
                {event.fullText.map((paragraph, index) => (
                  <p key={index} className="text-slate-600 mb-6 text-base sm:text-lg font-light leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Registration / Ticketing Section */}
              <div className="mt-12 bg-[#eaeff2]/50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-6">
                  <Ticket className="w-8 h-8 text-tz-blue" />
                </div>
                <h3 className="font-display font-black text-2xl text-tz-charcoal mb-2">{formHeading}</h3>
                <p className="text-sm text-slate-500 mb-8 max-w-md leading-relaxed">
                  {formSubheading}
                </p>
                
                {submitted ? (
                  <div className="w-full max-w-lg bg-emerald-50 border border-emerald-200 rounded-2xl p-8 flex flex-col items-center gap-4 animate-fade-in-up">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center">
                      <Check className="w-7 h-7 text-emerald-600 stroke-[2.5px]" />
                    </div>
                    <h4 className="font-display font-black text-xl text-emerald-800">Submission Received!</h4>
                    <p className="text-sm text-emerald-700 font-light leading-relaxed text-center max-w-sm">
                      Thank you, <strong>{name}</strong>! We have received your request for <strong>{event.title}</strong>. Our team will be in touch at <strong>{email}</strong> within 2–3 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4 text-left">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Jane Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 ring-tz-blue/30 border border-slate-200 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="jane@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 ring-tz-blue/30 border border-slate-200 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                        {isAwards ? "Affiliation / Organization" : isConcert ? "Ticket Details" : "Message / Inquiry"}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={messagePlaceholder}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white py-3.5 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 ring-tz-blue/30 border border-slate-200 transition-all resize-none"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full mt-4 bg-tz-blue hover:bg-tz-blue-hover text-white py-4 rounded-xl text-sm font-black tracking-widest uppercase transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                    >
                      {event.buttonText} <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
              
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
