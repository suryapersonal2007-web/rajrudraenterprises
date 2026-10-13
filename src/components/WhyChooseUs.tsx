import React from 'react';
import { Layers, Award, Sparkles, HelpCircle, MessageSquareText, Home } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Home,
    title: "Complete Solutions Under One Roof",
    description: "Source bathroom fittings, sanitaryware, electrical accessories, wiring, plumbing pipes, and modern lighting together without fragmented vendor trips."
  },
  {
    icon: Award,
    title: "Featured Leading Brands",
    description: "Curated collections from recognized industry leaders including Hindware, Jaquar, Legrand, Polycab, Finolex, Supreme, and Philips."
  },
  {
    icon: Layers,
    title: "Multiple Coordinated Categories",
    description: "Comprehensive depth across 5 essential building categories to ensure finishes, dimensions, and specifications align seamlessly."
  },
  {
    icon: Sparkles,
    title: "Quality-Focused Selection",
    description: "Products selected for durability against Indian water and electrical conditions, from brass valve internals to flame-retardant wiring."
  },
  {
    icon: HelpCircle,
    title: "Product Selection Assistance",
    description: "Get personalized guidance for home construction, bathroom remodels, or commercial installations from proprietor Vinoth Haran and our team."
  },
  {
    icon: MessageSquareText,
    title: "Convenient Enquiry Options",
    description: "Verify stock and discuss specifications via direct phone calls, in-person showroom visits, or instant pre-filled WhatsApp conversations."
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#10110F] border-b border-[#C89536]/20 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#E4BD70] font-semibold">
            The Raj Rudra Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F0E7]">
            EVERY ESSENTIAL. ONE DESTINATION.
          </h2>
          <p className="text-sm sm:text-base text-[#96958F] leading-relaxed">
            Built to provide homeowners, contractors, and architects in Madurai with convenience, trusted product variety, and professional guidance.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-[#1C1D1A] border border-[#C89536]/20 hover:border-[#E4BD70]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#10110F] border border-[#C89536]/30 flex items-center justify-center text-[#E4BD70] group-hover:scale-110 group-hover:border-[#E4BD70] transition-all">
                    <Icon className="w-6 h-6 text-[#C89536] group-hover:text-[#E4BD70]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-heading text-[#F5F0E7] group-hover:text-[#E4BD70] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#96958F] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#252622] flex items-center justify-between text-[11px] font-mono text-[#C89536]/80">
                  <span>0{index + 1}. Distinction</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89536]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
