import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck, Compass, Sparkles, Building } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreProducts }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#C89536]/20 bg-[#10110F]">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 bg-architectural-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C89536]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Kicker - Clean unboxed text with typographic separator (Anti-Slop rule) */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-[#E4BD70] font-medium tracking-wide mb-4">
          <span>Madurai, Tamil Nadu</span>
          <span aria-hidden="true" className="text-[#C89536]">·</span>
          <span>Proprietor: Vinoth Haran</span>
          <span aria-hidden="true" className="text-[#C89536]">·</span>
          <span className="text-[#96958F]">Kaka Thoppu Street</span>
        </div>

        {/* 2-Column Desktop Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-xs md:text-sm uppercase tracking-widest text-[#96958F] font-semibold">
                Complete Bathroom, Electrical & Lighting Solution
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F0E7] font-heading leading-[1.1] text-balance">
                COMPLETE SOLUTIONS.<br />
                <span className="gold-gradient-text">UNDER ONE ROOF.</span>
              </h1>

              <div className="text-base sm:text-lg md:text-xl font-medium text-[#E4BD70] pt-1">
                Bathroom. Electrical. Plumbing. Lighting.
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#96958F] max-w-2xl leading-relaxed text-balance">
              Discover a complete range of bathroom fittings, sanitaryware, electrical essentials, plumbing products, and lighting solutions from leading brands at Raj Rudra Enterprises in Madurai.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wider text-[#10110F] bg-gradient-to-r from-[#E4BD70] to-[#C89536] hover:from-[#F5F0E7] hover:to-[#E4BD70] transition-all shadow-lg shadow-black/40 flex items-center gap-2 group whitespace-nowrap cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wider text-[#F5F0E7] bg-[#1C1D1A] border border-[#C89536]/30 hover:border-[#E4BD70] hover:text-[#E4BD70] transition-all whitespace-nowrap cursor-pointer"
              >
                Contact Our Team
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wider text-[#25D366] bg-[#1C1D1A] border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Calling & Address Helper */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#96958F] border-t border-[#1C1D1A]">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#C89536]" />
                <span>Call: <a href={`tel:${BUSINESS_INFO.phones.primaryRaw}`} className="text-[#F5F0E7] hover:text-[#E4BD70] font-mono font-medium">{BUSINESS_INFO.phones.primary}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#C89536]" />
                <span>No. 23, Kaka Thoppu Street, Madurai – 625001</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Cinematic Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C89536]/30 bg-[#1C1D1A] shadow-2xl group">
              {/* Luxury modern bathroom visual */}
              <div className="relative h-80 sm:h-96 lg:h-[460px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern luxury bathroom interior with brushed fixtures and ambient lighting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10110F] via-transparent to-transparent opacity-80" />

                {/* Floating Architectural Badge */}
                <div className="absolute top-4 right-4 bg-[#10110F]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#C89536]/30 text-[11px] font-mono text-[#E4BD70] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C89536]" />
                  <span>Curated Collection</span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#10110F]/90 backdrop-blur-md p-4 rounded-xl border border-[#C89536]/25">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5F0E7]">
                      Comprehensive Showroom Solutions
                    </span>
                    <span className="text-[10px] text-[#C89536] font-mono">Madurai</span>
                  </div>
                  <p className="text-xs text-[#96958F] line-clamp-2">
                    Premium sanitaryware, brass tapware, modular switchboards, CPVC piping & architectural lighting for modern spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Positioning Strip below hero split */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#C89536]/20">
          <div className="p-4 rounded-xl bg-[#1C1D1A]/60 border border-[#C89536]/15">
            <div className="text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1">
              Product Categories
            </div>
            <div className="text-base sm:text-lg font-bold font-heading text-[#F5F0E7]">
              5 Complete Domains
            </div>
            <div className="text-xs text-[#96958F] mt-1">
              Bath, Sanitary, Electrical, Plumbing, Light
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1C1D1A]/60 border border-[#C89536]/15">
            <div className="text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1">
              Verified Brands
            </div>
            <div className="text-base sm:text-lg font-bold font-heading text-[#E4BD70]">
              Leading Industry Names
            </div>
            <div className="text-xs text-[#96958F] mt-1">
              Hindware, Jaquar, Legrand, Polycab, Supreme
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1C1D1A]/60 border border-[#C89536]/15">
            <div className="text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1">
              Showroom Location
            </div>
            <div className="text-base sm:text-lg font-bold font-heading text-[#F5F0E7]">
              Central Madurai
            </div>
            <div className="text-xs text-[#96958F] mt-1">
              No. 23, Kaka Thoppu Street – 625001
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1C1D1A]/60 border border-[#C89536]/15">
            <div className="text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1">
              Quick Enquiries
            </div>
            <div className="text-base sm:text-lg font-bold font-heading text-[#C89536]">
              Direct Phone & WhatsApp
            </div>
            <div className="text-xs text-[#96958F] mt-1">
              Instant product and availability guidance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
