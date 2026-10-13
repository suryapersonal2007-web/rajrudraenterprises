import React, { useState } from 'react';
import { Lightbulb, Sliders, Sun, Zap } from 'lucide-react';

interface LightingPreset {
  kelvin: number;
  label: string;
  mood: string;
  colorHex: string;
  glowRgba: string;
  recommendedFor: string;
}

const LIGHTING_PRESETS: LightingPreset[] = [
  {
    kelvin: 3000,
    label: "3000K Warm Gold",
    mood: "Intimate, relaxing, luxurious ambience",
    colorHex: "#FFD180",
    glowRgba: "rgba(255, 209, 128, 0.45)",
    recommendedFor: "Master Bathrooms, Vanity Niches, Living Rooms"
  },
  {
    kelvin: 4000,
    label: "4000K Natural Neutral",
    mood: "Balanced, crisp, true architectural clarity",
    colorHex: "#FFF3E0",
    glowRgba: "rgba(255, 243, 224, 0.4)",
    recommendedFor: "Grooming Mirrors, Kitchens, Showroom Counters"
  },
  {
    kelvin: 6500,
    label: "6500K Crisp Daylight",
    mood: "High-focus, energizing, modern task illumination",
    colorHex: "#E1F5FE",
    glowRgba: "rgba(225, 245, 254, 0.35)",
    recommendedFor: "Workspaces, Utility Areas, Commercial Displays"
  }
];

export const LightingSimulator: React.FC = () => {
  const [selectedKelvin, setSelectedKelvin] = useState<number>(3000);
  const [intensity, setIntensity] = useState<number>(85);
  const [beamAngle, setBeamAngle] = useState<'24' | '38' | '60'>('38');

  const current = LIGHTING_PRESETS.find(p => p.kelvin === selectedKelvin) || LIGHTING_PRESETS[0];

  const beamSpreadWidth = beamAngle === '24' ? 'w-48' : beamAngle === '38' ? 'w-72' : 'w-96';

  return (
    <div className="relative w-full rounded-2xl bg-[#1C1D1A]/90 border border-[#C89536]/25 p-6 md:p-8 overflow-hidden shadow-2xl">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#C89536]/15">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Lightbulb className="w-4 h-4 text-[#C89536]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E4BD70]">
              Architectural Lighting Lab
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-heading text-[#F5F0E7]">
            Color Temperature & Lux Visualizer
          </h3>
          <p className="text-xs text-[#96958F] mt-1">
            Explore how different Kelvin temperatures and beam spreads transform modern interior spaces.
          </p>
        </div>

        {/* Quick Spec Badge */}
        <div className="flex items-center gap-3 bg-[#10110F] px-4 py-2 rounded-xl border border-[#C89536]/20 self-start md:self-auto">
          <Zap className="w-4 h-4 text-[#C89536]" />
          <div>
            <div className="text-[10px] uppercase text-[#96958F]">Current Temperature</div>
            <div className="text-sm font-bold font-mono text-[#F5F0E7]">{current.kelvin}K Kelvin</div>
          </div>
        </div>
      </div>

      {/* Main Visual Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Light Simulator Wall (7 cols) */}
        <div className="lg:col-span-7 h-72 md:h-80 rounded-xl bg-[#10110F] relative overflow-hidden border border-[#C89536]/20 flex flex-col items-center justify-start pt-3">
          {/* Ceiling Recessed Luminaire Fixture */}
          <div className="relative z-20 flex flex-col items-center">
            <div className="w-16 h-3 rounded-b-md bg-[#2A2B27] border-b border-x border-[#C89536]/40 flex items-center justify-center">
              <div
                className="w-10 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: current.colorHex,
                  boxShadow: `0 0 16px ${current.colorHex}`
                }}
              />
            </div>
          </div>

          {/* Dynamic Light Beam Cone */}
          <div
            className={`relative transition-all duration-500 origin-top flex flex-col items-center pointer-events-none ${beamSpreadWidth}`}
            style={{
              opacity: intensity / 100
            }}
          >
            {/* Soft Downward Gradient Cone */}
            <div
              className="w-full h-56 transition-all duration-500"
              style={{
                background: `radial-gradient(ellipse at top, ${current.glowRgba} 0%, rgba(16,17,15,0) 70%)`,
                filter: 'blur(12px)'
              }}
            />

            {/* Floor/Wall Pool of Illumination */}
            <div
              className="w-4/5 h-16 rounded-full -mt-10 transition-all duration-500"
              style={{
                background: `radial-gradient(ellipse, ${current.colorHex} 0%, rgba(16,17,15,0) 75%)`,
                opacity: 0.7,
                filter: 'blur(16px)'
              }}
            />
          </div>

          {/* Modern Minimalist Pedestal / Object inside the light pool */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
            {/* Brass architectural faucet outline silhouette */}
            <div className="w-16 h-20 border border-[#C89536]/40 rounded-t-xl bg-[#161715]/80 flex items-center justify-center text-[10px] font-mono text-[#E4BD70]/90">
              Target Lux
            </div>
            <div className="w-28 h-2 bg-[#222] rounded-full mt-1 border-t border-[#C89536]/20" />
          </div>

          {/* Overlay Status Bar */}
          <div className="absolute top-3 left-3 text-[11px] font-mono text-[#96958F] bg-[#1C1D1A]/80 px-2 py-0.5 rounded border border-[#333]">
            {beamAngle}° Beam Spread · {intensity}% Output
          </div>
        </div>

        {/* Controls Panel (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* 1. Color Temperature Selection */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#96958F] font-semibold block mb-2">
              Color Temperature (Kelvin)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {LIGHTING_PRESETS.map(preset => {
                const isSelected = selectedKelvin === preset.kelvin;
                return (
                  <button
                    key={preset.kelvin}
                    onClick={() => setSelectedKelvin(preset.kelvin)}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      isSelected
                        ? 'border-[#C89536] bg-[#10110F] text-[#F5F0E7] shadow-sm ring-1 ring-[#C89536]/40'
                        : 'border-[#333] bg-[#10110F]/60 text-[#96958F] hover:border-[#555] hover:text-[#F5F0E7]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: preset.colorHex }}
                      />
                      <span className="text-xs font-bold font-mono">{preset.kelvin}K</span>
                    </div>
                    <div className="text-[10px] text-[#96958F] line-clamp-1">
                      {preset.label.split(' ')[1]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Beam Angle Selection */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#96958F] font-semibold block mb-2">
              Optical Beam Angle
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { angle: '24', label: '24° Spot' },
                { angle: '38', label: '38° Medium' },
                { angle: '60', label: '60° Flood' }
              ].map(b => (
                <button
                  key={b.angle}
                  onClick={() => setBeamAngle(b.angle as any)}
                  className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors ${
                    beamAngle === b.angle
                      ? 'border-[#C89536] bg-[#C89536]/15 text-[#E4BD70]'
                      : 'border-[#333] bg-[#10110F]/60 text-[#96958F] hover:text-[#F5F0E7]'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Dimming Intensity Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-[#96958F] font-semibold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[#C89536]" />
                Dimmer Level
              </span>
              <span className="text-xs font-mono font-bold text-[#E4BD70]">{intensity}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              aria-label="Dimmer level"
              className="w-full accent-[#C89536] bg-[#10110F] h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          {/* Curated Space Recommendation Card */}
          <div className="p-3.5 rounded-xl bg-[#10110F] border border-[#C89536]/20">
            <div className="text-[11px] font-medium text-[#E4BD70] flex items-center gap-1.5 mb-1">
              <Sun className="w-3.5 h-3.5" />
              Design Application:
            </div>
            <p className="text-xs text-[#96958F] leading-relaxed">
              {current.recommendedFor} — {current.mood}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
