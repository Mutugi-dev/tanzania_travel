"use client";

import Link from "next/link";
import { Compass, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Register Service Worker for PWA Offline Support
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => console.log("[Service Worker] Registered successfully:", reg.scope))
          .catch((err) => console.error("[Service Worker] Registration failed:", err));
      });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Be Inspired", href: "/be-inspired" },
    { name: "Things To Do", href: "/things-to-do" },
    { name: "Places To Go", href: "/places-to-go" },
    { name: "Events", href: "/events" },
    { name: "News", href: "/news" },
    { name: "Trip Builder", href: "/trip-builder" },
    { name: "Visa Checker", href: "/visa-checker" },
  ];

  return (
    <header className="w-full flex flex-col z-50">
      {/* Top Banner */}
      <div className="w-full bg-[#003452] text-white py-2.5 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-sm gap-2 border-b border-white/10 font-sans">
        <div className="flex items-center gap-1.5 flex-wrap justify-center text-center sm:text-left">
          <span className="font-light opacity-95">Tanzania Is Welcoming 70 Countries Visa-Free,</span>
          <Link 
            href="/visa-checker" 
            className="text-tz-gold hover:text-amber-300 font-semibold underline underline-offset-2 decoration-tz-gold/50 hover:decoration-amber-300 transition-all flex items-center gap-0.5"
          >
            Check Your Visa Status Here <ChevronRight className="w-3.5 h-3.5 inline-block" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-tz-gold transition-colors" aria-label="Facebook">
            <svg className="w-4 h-4 fill-white hover:fill-tz-gold transition-colors" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-tz-gold transition-colors" aria-label="Instagram">
            <svg className="w-4 h-4 fill-none stroke-white hover:stroke-tz-gold stroke-2 transition-colors" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-tz-gold transition-colors" aria-label="Twitter">
            <svg className="w-4 h-4 fill-white hover:fill-tz-gold transition-colors" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`w-full py-4 px-6 sm:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled 
            ? "fixed top-0 bg-white/95 backdrop-blur-md shadow-md py-3 text-tz-charcoal" 
            : "bg-white text-tz-charcoal"
        }`}
        style={scrolled ? { width: "100%" } : {}}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center bg-[#003452] text-white p-2 sm:p-2.5 rounded-lg font-bold tracking-tight border border-white/10 shadow-[0_4px_20px_rgba(0,52,82,0.15)] transition-all duration-300 hover:shadow-[0_4px_25px_rgba(245,158,11,0.2)] group-hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {/* Elegant SVG Compass Logo Emblem */}
            <div className="mr-2.5 flex items-center justify-center bg-gradient-to-br from-[#004e7a] to-[#00263d] w-10 h-10 rounded-md border border-white/10 relative shadow-inner">
              <Compass className="w-5 h-5 text-tz-gold group-hover:rotate-45 transition-transform duration-500 ease-out" />
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-tz-gold rounded-full animate-ping"></div>
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-tz-gold rounded-full"></div>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="font-display text-xl sm:text-2xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-white via-white to-amber-100 bg-clip-text text-transparent">
                TZ <span className="text-tz-gold font-black">Travels</span>
              </span>
              <span className="font-sans text-[9px] tracking-[0.3em] text-white/70 font-semibold uppercase mt-0.5">
                Explore Tanzania
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center gap-8 font-sans font-medium text-[15px]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-1.5 transition-colors duration-200 hover:text-tz-blue ${
                  isActive ? "text-tz-blue font-bold" : "text-[#1c1c1c] opacity-90"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-tz-gold rounded-full shadow-[0_2px_8px_rgba(245,158,11,0.7)]"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation Toggle (Hamburger Icon) */}
        <div className="lg:hidden flex items-center">
          <button 
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Toggle Menu"
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu");
              if (mobileMenu) {
                mobileMenu.classList.toggle("hidden");
              }
            }}
          >
            <svg className="w-6 h-6 text-tz-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        id="mobile-menu" 
        className="hidden lg:hidden w-full bg-white border-t border-slate-100 py-4 px-6 flex flex-col gap-4 font-sans font-medium text-base shadow-lg animate-fade-in-up"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) mobileMenu.classList.add("hidden");
              }}
              className={`py-2.5 px-3 rounded-lg border-l-4 transition-all flex justify-between items-center ${
                isActive 
                  ? "bg-[#003452]/5 border-tz-gold text-[#003452] font-bold shadow-sm" 
                  : "border-transparent text-tz-charcoal hover:text-tz-blue hover:bg-slate-50"
              }`}
            >
              <span>{item.name}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-tz-gold translate-x-1" : "opacity-40"}`} />
            </Link>
          );
        })}
      </div>
    </header>
  );
}
