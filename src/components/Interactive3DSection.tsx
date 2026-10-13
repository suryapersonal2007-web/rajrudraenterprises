import React, { useState } from 'react';
import { ThreeDShowcase } from './ThreeDShowcase';
import { LightingSimulator } from './LightingSimulator';
import { Sparkles, Box, Lightbulb } from 'lucide-react';

export const Interactive3DSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'3d-fitting' | 'lighting-lab'>('3d-fitting');

  return (
    <section id="studio-3d" className="py-20 lg:py-28 bg-[#10110F] border-b border-[#C89536]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#E4BD70] font-semibold mb-2">
              Interactive 3D & Digital Lab
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F0E7]">
              CINEMATIC PRODUCT SIMULATOR
            </h2>
            <p className="text-sm md:text-base text-[#96958F] mt-2 max-w-2xl">
              Interact with real-time 3D finishes, test flowing water dynamics, and visualize architectural Kelvin light temperatures for your spaces.
            </p>
          </div>

          {/* Mode Switcher Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#1C1D1A] rounded-xl border border-[#C89536]/25 self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('3d-fitting')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === '3d-fitting'
                  ? 'bg-[#C89536] text-[#10110F] shadow-sm'
                  : 'text-[#96958F] hover:text-[#F5F0E7]'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Fitting Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('lighting-lab')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'lighting-lab'
                  ? 'bg-[#C89536] text-[#10110F] shadow-sm'
                  : 'text-[#96958F] hover:text-[#F5F0E7]'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Lighting Kelvin Lab</span>
            </button>
          </div>
        </div>

        {/* Dynamic Studio Display */}
        {activeTab === '3d-fitting' ? (
          <div className="space-y-4">
            <ThreeDShowcase />
            <div className="flex flex-wrap items-center justify-between text-xs text-[#96958F] px-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C89536]" />
                Procedural 3D model with real-time PVD brass, chrome, and matte physical shading.
              </span>
              <span className="font-mono text-[#E4BD70]">
                WebGL 2.0 Real-time Shading
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <LightingSimulator />
            <div className="flex flex-wrap items-center justify-between text-xs text-[#96958F] px-2">
              <span className="flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-[#C89536]" />
                Simulate Philips & Sturlite architectural fixtures with precise optical beam spreads.
              </span>
              <span className="font-mono text-[#E4BD70]">
                Photometric Kelvin Range: 3000K – 6500K
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
