import React, { useState } from 'react';
import { VERIFIED_BRANDS, BrandItem } from '../data/brands';
import { Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export const BrandShowcase: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'Sanitaryware & Bath',
    'Wires & Electrical',
    'Switches & Automation',
    'Pipes & Plumbing',
    'Lighting Solutions'
  ];

  const filteredBrands = selectedFilter === 'All'
    ? VERIFIED_BRANDS
    : VERIFIED_BRANDS.filter(b => b.category === selectedFilter);

  return (
    <section id="brands" className="py-20 lg:py-28 bg-[#10110F] border-b border-[#C89536]/20 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#E4BD70] font-semibold">
            Industry Benchmarks
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F0E7]">
            FEATURED BRANDS UNDER ONE ROOF
          </h2>
          <p className="text-sm sm:text-base text-[#96958F] leading-relaxed">
            We partner with and supply verified products from India's most reputed manufacturers across bathroom fittings, electrical networks, plumbing systems, and modern lighting.
          </p>
        </div>

        {/* Dynamic Continuous Marquee Ticker with Pause-on-Hover */}
        <div className="relative w-full overflow-hidden mb-12 py-3 border-y border-[#C89536]/20 bg-[#161715]/50">
          <div className="flex w-max animate-marquee space-x-8 hover:[animation-play-state:paused]">
            {[...VERIFIED_BRANDS, ...VERIFIED_BRANDS].map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#1C1D1A] border border-[#C89536]/25 select-none"
              >
                <span className="w-2 h-2 rounded-full bg-[#C89536]" />
                <span className="text-sm font-bold font-mono text-[#F5F0E7] tracking-wider">
                  {brand.name}
                </span>
                <span className="text-[11px] text-[#96958F]">· {brand.category.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Segmented Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#C89536] text-[#10110F] shadow-sm'
                  : 'bg-[#1C1D1A] text-[#96958F] hover:text-[#F5F0E7] border border-[#C89536]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="p-5 rounded-xl bg-[#1C1D1A] border border-[#C89536]/20 hover:border-[#E4BD70]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Brand Badge Monogram */}
                <div className="flex items-center justify-between">
                  <div className="px-2.5 py-1 rounded bg-[#10110F] border border-[#C89536]/30 text-[11px] font-mono font-bold tracking-wider text-[#E4BD70] group-hover:border-[#E4BD70] transition-colors">
                    {brand.badge}
                  </div>
                  <Building2 className="w-4 h-4 text-[#C89536]/60 group-hover:text-[#E4BD70] transition-colors" />
                </div>

                <div>
                  <h3 className="text-base font-bold font-heading text-[#F5F0E7] group-hover:text-[#E4BD70] transition-colors">
                    {brand.name}
                  </h3>
                  <div className="text-[11px] text-[#96958F] mt-0.5">
                    {brand.category}
                  </div>
                </div>

                <p className="text-xs text-[#96958F] leading-relaxed line-clamp-2">
                  {brand.shortDescription}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#252622] flex items-center justify-between text-[11px] text-[#C89536]">
                <span>Verified Brand</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C89536]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
