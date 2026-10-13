import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';
import { MapPin, Phone, Mail, ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenEnquiry: (productName?: string, category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenEnquiry
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0D0B] text-[#96958F] border-t border-[#C89536]/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#1C1D1A]">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="full" />
            <p className="text-xs text-[#96958F] leading-relaxed max-w-sm pt-2">
              Complete Bathroom, Electrical & Lighting Solution under one roof in Madurai, Tamil Nadu. Premium sanitaryware, modular switches, cables, pipes, and architectural lighting.
            </p>
            <div className="text-xs text-[#E4BD70] font-mono pt-1">
              Proprietor: <span className="text-[#F5F0E7] font-semibold">{BUSINESS_INFO.proprietor}</span>
            </div>
          </div>

          {/* Col 2: Product Domains (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F0E7]">
              Product Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-[#E4BD70] transition-colors">
                  Bathroom Fittings & Faucets
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E4BD70] transition-colors">
                  Vitreous Sanitaryware & Basins
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E4BD70] transition-colors">
                  Modular Switches & Accessories
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E4BD70] transition-colors">
                  Flame Retardant Wires & Cables
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E4BD70] transition-colors">
                  CPVC / UPVC Pipes & Plumbing
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E4BD70] transition-colors">
                  Architectural & LED Lighting
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F0E7]">
              Showroom
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#E4BD70] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-[#E4BD70] transition-colors">
                  Featured Brands
                </a>
              </li>
              <li>
                <a href="#studio-3d" className="hover:text-[#E4BD70] transition-colors">
                  Interactive 3D Studio
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E4BD70] transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E4BD70] transition-colors">
                  Location & Contact
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="hover:text-[#E4BD70] transition-colors text-left"
                >
                  Product Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F0E7]">
              Contact Madurai
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C89536] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C89536] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phones.primaryRaw}`} className="hover:text-[#E4BD70] font-mono">
                  {BUSINESS_INFO.phones.primary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C89536] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phones.secondaryRaw}`} className="hover:text-[#E4BD70] font-mono">
                  {BUSINESS_INFO.phones.secondary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C89536] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#E4BD70]">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            <span className="block sm:inline sm:ml-2 text-[#666]">
              Madurai, Tamil Nadu, India.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#E4BD70] transition-colors text-xs"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#E4BD70] transition-colors text-xs"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1C1D1A] border border-[#333] text-[#96958F] hover:text-[#E4BD70] hover:border-[#E4BD70]/40 transition-colors flex items-center gap-1.5"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
