import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#003452] text-white overflow-hidden py-16 px-6 sm:px-12 md:px-24">
      {/* Premium African tribal pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tribal" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 0 40 L 40 0 L 80 40 L 40 80 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="5" fill="none" stroke="#ffffff" strokeWidth="1" />
              <path d="M 0 0 L 80 80 M 80 0 L 0 80" stroke="#ffffff" strokeWidth="0.5" />
              <path d="M 10 40 H 70 M 40 10 V 70" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3,3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tribal)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 font-sans">
        {/* Contact Info / Address */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <div className="flex flex-col leading-tight">
              <span className="font-display text-2xl font-extrabold tracking-wide uppercase text-white">
                TZ <span className="text-tz-gold">Travels</span>
              </span>
              <span className="font-sans text-[9px] tracking-[0.3em] text-white/60 font-semibold uppercase mt-0.5">
                Explore Tanzania
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 text-sm opacity-90 font-light">
            <h4 className="font-bold text-base tracking-wide uppercase text-tz-gold font-display mt-2">Tanzania Tourism Board</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-tz-gold shrink-0 mt-0.5 stroke-[1.5px]" />
              <div className="flex flex-col">
                <span>Plot No.1, Laibon Street, Oysterbay</span>
                <span>P.O. Box 2485 | Dar es Salaam</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-tz-gold shrink-0 mt-0.5 stroke-[1.5px]" />
              <div className="flex flex-col">
                <span>+255 22 2664878</span>
                <span>+255 22 2664879</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-tz-gold shrink-0 mt-0.5 stroke-[1.5px]" />
              <a href="mailto:dg@tanzaniatourism.go.tz" className="hover:text-tz-gold transition-colors">
                dg@tanzaniatourism.go.tz
              </a>
            </div>
          </div>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col gap-5">
          <h3 className="font-display font-bold text-lg text-tz-gold uppercase tracking-wider">Explore</h3>
          <ul className="flex flex-col gap-3.5 text-sm font-light opacity-90">
            <li>
              <Link href="/#planning-hub" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Plan your Trip</Link>
            </li>
            <li>
              <Link href="/things-to-do" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Things to do</Link>
            </li>
            <li>
              <Link href="/places-to-go" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Places to go</Link>
            </li>
            <li>
              <Link href="/visa-checker" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Visa Application</Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-5">
          <h3 className="font-display font-bold text-lg text-tz-gold uppercase tracking-wider">Useful Links</h3>
          <ul className="flex flex-col gap-3.5 text-sm font-light opacity-90">
            <li>
              <a href="https://www.hat-tz.org" target="_blank" rel="noopener noreferrer" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Hotel Association of Tanzania (HAT)</a>
            </li>
            <li>
              <a href="https://www.tatotz.org" target="_blank" rel="noopener noreferrer" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Tanzania Tour Operators (TATO)</a>
            </li>
            <li>
              <a href="https://www.tic.go.tz" target="_blank" rel="noopener noreferrer" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Tanzania Investment Centre (TIC)</a>
            </li>
            <li>
              <a href="https://www.tanzaniatourism.go.tz" target="_blank" rel="noopener noreferrer" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Official Tanzania Tourism Board</a>
            </li>
          </ul>
        </div>

        {/* More Links */}
        <div className="flex flex-col gap-5">
          <h3 className="font-display font-bold text-lg text-tz-gold uppercase tracking-wider">More</h3>
          <ul className="flex flex-col gap-3.5 text-sm font-light opacity-90">
            <li>
              <Link href="/places-to-go" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Interactive Maps</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Events &amp; Festivals</Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Travel News</Link>
            </li>
            <li>
              <Link href="/trip-builder" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Plan Your Trip</Link>
            </li>
            <li>
              <Link href="/be-inspired" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Be Inspired</Link>
            </li>
            <li>
              <Link href="/visa-checker" className="hover:text-tz-gold transition-all hover:translate-x-1 inline-block">Visa Checker</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright bottom strip */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs opacity-75 font-light gap-4 relative z-10 font-sans">
        <p className="text-center sm:text-left">
          &copy; Copyright 2026 Tanzania Tourist Board | The Official Tourism Portal for Tanzania.
        </p>
        <div className="flex gap-4">
          <Link href="/news" className="hover:text-tz-gold transition-colors">Privacy Policy</Link>
          <span>&bull;</span>
          <Link href="/news" className="hover:text-tz-gold transition-colors">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
