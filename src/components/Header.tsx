import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, PhoneCall, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

interface HeaderProps {
  onOpenEnquiry: (productName?: string, category?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Brands', href: '#brands' },
    { label: '3D Studio', href: '#studio-3d' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#10110F]/90 backdrop-blur-md border-b border-[#C89536]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center shrink-0 group">
          <BrandLogo variant="full" />
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#96958F]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 transition-colors hover:text-[#E4BD70] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89536] py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action button & mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenEnquiry()}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-[#10110F] bg-gradient-to-r from-[#E4BD70] to-[#C89536] hover:from-[#F5F0E7] hover:to-[#E4BD70] transition-all shadow-md shadow-black/30 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89536]"
          >
            Enquire Now
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg border border-[#C89536]/25 bg-[#1C1D1A] text-[#F5F0E7] hover:text-[#E4BD70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89536]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#10110F] border-b border-[#C89536]/25 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#F5F0E7] hover:text-[#E4BD70] py-1.5 border-b border-[#1C1D1A]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#10110F] bg-gradient-to-r from-[#E4BD70] to-[#C89536] text-center"
            >
              Submit Product Enquiry
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#C89536]/30 bg-[#1C1D1A] text-xs font-medium text-[#F5F0E7] hover:text-[#E4BD70]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C89536]" />
                Call Us
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#25D366]/40 bg-[#1C1D1A] text-xs font-medium text-[#25D366]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
