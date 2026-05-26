"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { tanzaniaKnowledgeBase } from "@/data/tanzaniaKb";

interface Message {
  id: string;
  text: string;
  sender: "user" | "cheetah";
  timestamp: Date;
}

export default function SpeedyCheetahChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessageAlert, setShowMessageAlert] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Jambo! 🐆 Welcome to Tanzania! I am Speedy Cheetah, your virtual travel guide. Ask me about park fees, packing lists, weather seasons, visa requirements, or safety guidelines, and I will fetch the official details for you with cheetah speed!",
      sender: "cheetah",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickOptions = [
    { text: "💵 Park Fees", query: "What are the entry fees for Serengeti and Ngorongoro?" },
    { text: "🧳 Safari Packing List", query: "What is on the packing list for safaris?" },
    { text: "⛅ Weather & Seasons", query: "When is the best time to visit and what is the weather?" },
    { text: "🚫 Plastic & Drones Rules", query: "Are plastic bags and drones banned in parks?" },
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessageAlert(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const getCheetahResponse = (query: string): string => {
    const q = query.toLowerCase().trim();
    
    // RAG-simulated search in our local knowledge base
    let bestMatch = null;
    let maxScore = 0;

    for (const entry of tanzaniaKnowledgeBase) {
      let score = 0;
      for (const word of entry.keywords) {
        if (q.includes(word)) {
          score++;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = entry;
      }
    }

    if (bestMatch && maxScore > 0) {
      return `Here is what I found in our official database under "${bestMatch.title}":\n\n${bestMatch.content}`;
    }

    // Fallbacks
    if (q.includes("hello") || q.includes("hi") || q.includes("jambo") || q.includes("mambo")) {
      return "Jambo! How are you doing today? I am ready to guide you on park conservation fees, travel checklist items, weather seasons, and visa guidelines. What would you like to search? 🐆";
    }
    
    return "That sounds like a beautiful adventure! I couldn't find exact matches for that query in our local index, but Tanzania offers incredibly diverse experiences. Ask me about park fees (Serengeti, Ngorongoro), seasonal rain conditions, visa-free entries, or what gear to pack! 🇹🇿";
  };

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}-user`,
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowMessageAlert(false);
    setIsTyping(true);

    // Simulate natural typing delay (fast like a cheetah!)
    setTimeout(() => {
      const reply = getCheetahResponse(textToSend);
      const cheetahMsg: Message = {
        id: `msg-${Date.now()}-cheetah`,
        text: reply,
        sender: "cheetah",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, cheetahMsg]);
      setIsTyping(false);
    }, 700); // 700ms instead of 1200ms to emphasize speed!
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
      {/* Floating Chat Alert Bar */}
      {showMessageAlert && !isOpen && (
        <div className="bg-white text-tz-charcoal py-3 px-4.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 mr-3 mb-3 animate-fade-in-up max-w-sm">
          {/* Custom animated pulsing cheetah ring */}
          <div className="relative w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 shrink-0">
            <span className="text-2xl">🐆</span>
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-tz-green rounded-full border-2 border-white animate-pulse"></span>
          </div>
          <div className="flex flex-col gap-0.5 text-left pr-2">
            <h5 className="font-bold text-sm text-tz-charcoal">Need some help?</h5>
            <p className="text-xs text-tz-blue font-semibold hover:underline cursor-pointer" onClick={() => setIsOpen(true)}>
              Chat with Speedy Cheetah
            </p>
          </div>
          <button 
            onClick={() => setShowMessageAlert(false)} 
            className="p-1 hover:bg-slate-100 rounded-full shrink-0 transition-colors text-slate-400 hover:text-slate-600"
            aria-label="Close alert"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setShowMessageAlert(false);
          }}
          className="bg-white hover:bg-slate-50 text-tz-charcoal shadow-2xl p-1 rounded-full border border-slate-100 hover:scale-105 transition-all duration-300 flex items-center gap-3 pr-5 pl-2"
          aria-label="Chat with Speedy Cheetah"
        >
          <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 text-2xl relative">
            🐆
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Need some help?</span>
            <span className="text-sm font-bold text-tz-charcoal">Chat with Speedy Cheetah</span>
          </div>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-[#003452] text-white p-5 flex justify-between items-center relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              {/* African tribal pattern overlay */}
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="chat-tribal" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 0 15 L 15 0 L 30 15 L 15 30 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#chat-tribal)" />
              </svg>
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl border border-white/20">
                🐆
              </div>
              <div className="flex flex-col text-left leading-tight">
                <h4 className="font-bold text-base tracking-wide flex items-center gap-1.5">
                  Speedy Cheetah <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                </h4>
                <span className="text-xs opacity-75 font-light">Tanzania Travel Assistant</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors relative z-10 text-white"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 stroke-[2.5px]" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50 no-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div
                  className={`py-3 px-4 rounded-2xl text-[14px] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-tz-blue text-white rounded-tr-none shadow-md font-medium"
                      : "bg-white text-tz-charcoal rounded-tl-none border border-slate-100 shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col max-w-[80%] mr-auto items-start">
                <div className="bg-white text-tz-charcoal py-3.5 px-5 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick FAQ Options */}
          {messages.length === 1 && !isTyping && (
            <div className="px-5 py-2.5 bg-white border-t border-slate-100 flex flex-wrap gap-2">
              {quickOptions.map((opt) => (
                <button
                  key={opt.text}
                  onClick={() => handleSend(opt.query)}
                  className="text-xs bg-slate-100 hover:bg-tz-blue hover:text-white transition-all text-tz-charcoal py-2 px-3 rounded-full font-medium"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-4 border-t border-slate-100 bg-white flex gap-2 items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about Kilimanjaro, Zanzibar, Safari..."
              className="flex-1 py-2.5 px-4 bg-slate-100 rounded-full text-sm text-tz-charcoal placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-tz-blue/30 focus:bg-white transition-all border border-transparent focus:border-tz-blue/20"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-[#003452] hover:bg-tz-blue text-white flex items-center justify-center transition-all shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 ml-0.5 stroke-[2px]" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
