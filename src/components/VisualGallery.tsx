import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from '../data/gallery';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const VisualGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard controls for lightbox
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, handleClose, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#10110F] border-b border-[#C89536]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#E4BD70] font-semibold mb-2">
              Visual Storytelling
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F0E7]">
              DESIGN & INSTALLATION GALLERY
            </h2>
            <p className="text-sm md:text-base text-[#96958F] mt-2 max-w-2xl">
              Explore architectural bathroom layouts, brass tapware, contemporary switches, and modern illumination inspirations.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {GALLERY_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C89536] text-[#10110F] shadow-sm'
                    : 'bg-[#1C1D1A] text-[#96958F] hover:text-[#F5F0E7] border border-[#C89536]/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#1C1D1A] border border-[#C89536]/20 cursor-pointer shadow-lg hover:shadow-black/70 hover:border-[#E4BD70]/60 transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10110F] via-black/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 text-[11px] font-mono text-[#E4BD70] bg-[#10110F]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#C89536]/30">
                  {item.category}
                </div>

                {/* Zoom Icon Hover Indicator */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-[#10110F]/80 text-[#96958F] opacity-0 group-hover:opacity-100 transition-opacity border border-[#C89536]/30">
                  <Maximize2 className="w-3.5 h-3.5 text-[#E4BD70]" />
                </div>

                {/* Bottom Content Bar */}
                <div className="absolute bottom-3 left-3 right-3 p-2">
                  <h3 className="text-sm font-bold font-heading text-[#F5F0E7] line-clamp-1 group-hover:text-[#E4BD70] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#96958F] line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Keyboard Navigation */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Main Lightbox Box */}
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-[#1C1D1A] border border-[#C89536]/40 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-[#333] bg-[#10110F]/80">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E4BD70]">
                <span>{activeItem.category}</span>
                <span>·</span>
                <span className="text-[#96958F]">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                onClick={handleClose}
                aria-label="Close lightbox"
                className="p-1.5 rounded-lg border border-[#333] text-[#96958F] hover:text-[#F5F0E7] hover:bg-[#222] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image Preview Slot */}
            <div className="relative max-h-[65vh] w-full bg-[#10110F] flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[65vh] w-auto object-contain"
              />

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={handlePrev}
                aria-label="Previous gallery image"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 border border-[#C89536]/30 text-[#F5F0E7] hover:text-[#E4BD70] hover:bg-black transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next gallery image"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 border border-[#C89536]/30 text-[#F5F0E7] hover:text-[#E4BD70] hover:bg-black transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-4 bg-[#10110F]/90 border-t border-[#333] space-y-1">
              <h3 className="text-base font-bold text-[#F5F0E7]">{activeItem.title}</h3>
              <p className="text-xs text-[#96958F]">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
