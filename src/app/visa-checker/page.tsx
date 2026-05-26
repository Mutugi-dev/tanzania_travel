"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, CheckCircle, AlertTriangle, FileText, Landmark, Clock } from "lucide-react";

// List of some common visa-free countries (out of the 70 countries)
const visaFreeCountries = [
  "Antigua and Barbuda", "Angola", "Bahamas", "Barbados", "Belize", "Botswana", "Brunei", "Burundi", 
  "Cyprus", "Dominica", "Eswatini", "Fiji", "Gambia", "Ghana", "Grenada", "Guyana", "Hong Kong", 
  "Jamaica", "Kenya", "Kiribati", "Lesotho", "Malawi", "Malaysia", "Mauritius", "Madagascar", 
  "Mozambique", "Namibia", "Nauru", "Papua New Guinea", "Rwanda", "Romania", "Samoa", "Seychelles", 
  "Singapore", "Solomon Islands", "South Africa", "South Sudan", "St. Kitts and Nevis", "St. Lucia", 
  "St. Vincent and the Grenadines", "Swaziland", "Tonga", "Trinidad and Tobago", "Tuvalu", "Uganda", 
  "Vanuatu", "Zambia", "Zimbabwe"
];

// E-visa required common countries
const eVisaCountries = [
  "United States", "United Kingdom", "Canada", "Germany", "France", "Italy", "Spain", "Australia", 
  "New Zealand", "Netherlands", "Belgium", "Switzerland", "Sweden", "Norway", "Denmark", "Finland", 
  "Ireland", "China", "India", "Japan", "South Korea", "Brazil", "Argentina", "Mexico", "Saudi Arabia", 
  "United Arab Emirates", "Russia", "Turkey", "Egypt", "Poland", "Austria"
];

export default function VisaChecker() {
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [result, setResult] = useState<"free" | "evisa" | "referral" | null>(null);

  const handleSearch = (countryName: string) => {
    setSelectedCountry(countryName);
    const cleanName = countryName.trim().toLowerCase();
    
    const isFree = visaFreeCountries.some(c => c.toLowerCase() === cleanName);
    const isEvisa = eVisaCountries.some(c => c.toLowerCase() === cleanName);

    if (isFree) {
      setResult("free");
    } else if (isEvisa) {
      setResult("evisa");
    } else {
      // Default to eVisa / standard tourist policy
      setResult("evisa");
    }
  };

  const allCountries = [...new Set([...visaFreeCountries, ...eVisaCountries])].sort();

  return (
    <>
      <Header />
      
      <main className="flex-1 bg-slate-50 font-sans py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Header Card */}
          <div className="text-center mb-12">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-tz-charcoal tracking-tight">
              Tanzania Visa Checker Portal
            </h1>
            <p className="text-sm font-light text-slate-500 mt-3 max-w-xl leading-relaxed mx-auto">
              Find out if your country is among the 70 visa-free nations welcoming tourists to Tanzania, or verify e-Visa application requirements instantly.
            </p>
            <div className="w-20 h-1 bg-tz-gold mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Interactive Search Tool Container */}
          <div className="w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100/80 flex flex-col gap-6 text-left relative overflow-hidden">
            {/* Ambient African pattern details */}
            <div className="absolute right-0 top-0 w-24 h-24 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <path d="M 0 0 L 100 100 M 100 0 L 0 100" stroke="#003c66" strokeWidth="5" />
              </svg>
            </div>

            <h3 className="font-display font-black text-xl text-tz-charcoal">
              Check Entry Requirements
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {/* Dropdown Select & Input */}
              <div className="flex-1 bg-slate-100 rounded-xl py-3 px-4 flex items-center gap-3 border border-transparent focus-within:border-tz-blue/30 focus-within:bg-white transition-all">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <select
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-tz-charcoal focus:outline-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>Select your passport country...</option>
                  {allCountries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                  <option value="other">Other Country</option>
                </select>
              </div>
            </div>

            {/* Results Sheet */}
            {selectedCountry && result && (
              <div className="mt-4 p-6 rounded-2xl border bg-slate-50/50 animate-fade-in-up">
                {result === "free" ? (
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 border border-emerald-200">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-display font-black text-xl text-emerald-800">
                        Visa-Free Entry Allowed!
                      </h4>
                      <p className="text-sm font-light text-slate-600 leading-relaxed">
                        Great news! Citizens of <strong className="font-bold text-tz-charcoal">{selectedCountry}</strong> do not require a tourist visa to enter Tanzania for stays up to 90 days.
                      </p>
                      <ul className="text-xs text-slate-500 font-light list-disc pl-5 mt-2 space-y-1">
                        <li>Passport must be valid for at least 6 months from arrival.</li>
                        <li>Return or onward ticket is required.</li>
                        <li>Yellow Fever Certificate may be requested if arriving from endemic countries.</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
                      <AlertTriangle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-display font-black text-xl text-amber-800">
                        Tourist e-Visa Required
                      </h4>
                      <p className="text-sm font-light text-slate-600 leading-relaxed">
                        Citizens of <strong className="font-bold text-tz-charcoal">{selectedCountry}</strong> require a visa to enter Tanzania. We recommend applying for a single-entry <strong className="font-bold text-tz-charcoal">e-Visa online</strong> before your travel.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-200/50">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-tz-blue shrink-0" />
                          <div className="flex flex-col leading-tight">
                            <span className="text-[10px] font-extrabold uppercase text-slate-400">FEES</span>
                            <span className="text-xs font-bold text-tz-charcoal">$50 USD</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-tz-blue shrink-0" />
                          <div className="flex flex-col leading-tight">
                            <span className="text-[10px] font-extrabold uppercase text-slate-400">DURATION</span>
                            <span className="text-xs font-bold text-tz-charcoal">Up to 90 Days</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Landmark className="w-5 h-5 text-tz-blue shrink-0" />
                          <div className="flex flex-col leading-tight">
                            <span className="text-[10px] font-extrabold uppercase text-slate-400">PROCESS</span>
                            <span className="text-xs font-bold text-tz-charcoal">Online Portal</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://visa.immigration.go.tz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 bg-[#003452] hover:bg-[#00243a] text-white py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md self-start inline-flex items-center gap-2 hover:scale-[1.02]"
                      >
                        Apply for e-Visa Online
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* e-Visa Application Steps Block */}
          <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg text-left flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-tz-blue text-sm">
                01
              </div>
              <h4 className="font-display font-black text-lg text-tz-charcoal">
                Fill Application
              </h4>
              <p className="text-xs font-light text-slate-500 leading-relaxed">
                Visit the official immigration e-Visa portal, upload passport photos, bios, and flight details.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg text-left flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-tz-blue text-sm">
                02
              </div>
              <h4 className="font-display font-black text-lg text-tz-charcoal">
                Pay Online
              </h4>
              <p className="text-xs font-light text-slate-500 leading-relaxed">
                Pay the $50 application fee securely online using Visa, Mastercard, or electronic bank transfer.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg text-left flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-tz-blue text-sm">
                03
              </div>
              <h4 className="font-display font-black text-lg text-tz-charcoal">
                Get e-Visa
              </h4>
              <p className="text-xs font-light text-slate-500 leading-relaxed">
                Once reviewed (within 5-7 working days), you will receive a print-ready e-Visa approval document.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
