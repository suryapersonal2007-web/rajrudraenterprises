import React from 'react';
import { UserCheck, MapPin, Layers, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#10110F] border-b border-[#C89536]/20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with architectural border (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C89536]/30 bg-[#1C1D1A] shadow-2xl">
              <div className="h-[440px] w-full relative">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern architectural bathroom showroom and sanitaryware installation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10110F] via-transparent to-transparent opacity-75" />

                {/* Overlaid Verified Proprietor Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#10110F]/90 backdrop-blur-md p-4 rounded-xl border border-[#C89536]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1C1D1A] border border-[#C89536]/40 flex items-center justify-center text-[#E4BD70] shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#96958F] font-medium">Proprietor</div>
                      <div className="text-sm font-bold font-heading text-[#F5F0E7]">{BUSINESS_INFO.proprietor}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative architectural offset border */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-[#C89536]/20 rounded-2xl -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Editorial Text & Verified Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs md:text-sm uppercase tracking-widest text-[#E4BD70] font-semibold">
                About The Business
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F0E7] leading-tight">
                WHERE EVERY ESSENTIAL<br />
                <span className="gold-gradient-text">COMES TOGETHER</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-[#96958F] leading-relaxed">
              <strong className="text-[#F5F0E7]">Raj Rudra Enterprises</strong>, located in Madurai, Tamil Nadu, is established as a single destination for building essentials. We bring together high-performance bathroom fittings, vitreous sanitaryware, electrical accessories, copper wires, plumbing pipes, and modern lighting systems from leading industry manufacturers.
            </p>

            <div className="p-5 rounded-xl bg-[#1C1D1A] border border-[#C89536]/20 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#E4BD70]">
                Under One Roof Principle
              </div>
              <p className="text-sm text-[#96958F] leading-relaxed">
                Rather than coordinating across disjointed vendors, our showroom at Kaka Thoppu Street enables homeowners, architects, electrical contractors, and plumbers to discover coordinated fittings and trusted brands in one place.
              </p>
            </div>

            {/* Key Verified Business Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C89536] shrink-0 mt-1" />
                <div className="text-sm">
                  <span className="font-semibold text-[#F5F0E7] block">Bathroom & Sanitaryware</span>
                  <span className="text-[#96958F] text-xs">Faucets, showers, wash basins, and water closets.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C89536] shrink-0 mt-1" />
                <div className="text-sm">
                  <span className="font-semibold text-[#F5F0E7] block">Electrical & Wiring</span>
                  <span className="text-[#96958F] text-xs">Modular switches, plates, and fire-resistant cables.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C89536] shrink-0 mt-1" />
                <div className="text-sm">
                  <span className="font-semibold text-[#F5F0E7] block">Pipes & Plumbing</span>
                  <span className="text-[#96958F] text-xs">CPVC/UPVC water lines and forged brass valves.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C89536] shrink-0 mt-1" />
                <div className="text-sm">
                  <span className="font-semibold text-[#F5F0E7] block">Lighting Solutions</span>
                  <span className="text-[#96958F] text-xs">Recessed COB downlights and magnetic profiles.</span>
                </div>
              </div>
            </div>

            {/* Location & Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-[#1C1D1A] text-xs text-[#96958F]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C89536]" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#C89536]" />
                <a href={`tel:${BUSINESS_INFO.phones.primaryRaw}`} className="text-[#E4BD70] hover:underline font-mono">
                  {BUSINESS_INFO.phones.primary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
