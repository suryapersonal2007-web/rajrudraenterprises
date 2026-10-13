import React, { useState } from 'react';
import { MessageSquare, X, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: "Bathroom & Sanitaryware", text: "Hello Raj Rudra Enterprises, I would like to enquire about bathroom fittings and sanitaryware availability." },
    { label: "Electrical Switches & Wires", text: "Hello Raj Rudra Enterprises, I would like to enquire about modular switches and electrical wires." },
    { label: "Plumbing Pipes & Valves", text: "Hello Raj Rudra Enterprises, I would like to enquire about CPVC/UPVC pipes and plumbing fittings." },
    { label: "Architectural & LED Lighting", text: "Hello Raj Rudra Enterprises, I would like to enquire about LED panels and architectural lighting fixtures." },
    { label: "Showroom Visit & Location", text: "Hello Raj Rudra Enterprises, I am planning to visit your showroom at Kaka Thoppu Street, Madurai." }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Option Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-32px)] rounded-2xl bg-[#1C1D1A] border border-[#25D366]/40 p-4 shadow-2xl animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#333] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
              <span className="text-xs font-bold text-[#F5F0E7]">Raj Rudra Enterprises</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#96958F] hover:text-[#F5F0E7]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-[#96958F] mb-3">
            Chat with proprietor Vinoth Haran and our Madurai team on WhatsApp:
          </p>

          <div className="space-y-1.5">
            {quickMessages.map((item, idx) => (
              <a
                key={idx}
                href={getWhatsAppUrl(item.text)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-3 py-2 rounded-lg bg-[#10110F] hover:bg-[#25D366]/15 hover:border-[#25D366]/40 border border-[#222] text-xs text-[#F5F0E7] flex items-center justify-between transition-colors group"
              >
                <span className="text-[11px] group-hover:text-[#25D366] transition-colors">{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#96958F] group-hover:text-[#25D366]" />
              </a>
            ))}
          </div>

          <div className="pt-3 mt-3 border-t border-[#333] text-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Open Blank WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Chat on WhatsApp with Raj Rudra Enterprises"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <MessageSquare className="w-5 h-5 text-black" />
        <span className="hidden sm:inline font-bold tracking-wide">WhatsApp</span>
        <span className="text-[10px] bg-black/20 text-black px-1.5 py-0.5 rounded-full font-mono">
          98941 40053
        </span>
      </button>
    </div>
  );
};
