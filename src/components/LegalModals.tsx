import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface LegalModalsProps {
  privacyOpen: boolean;
  termsOpen: boolean;
  onClosePrivacy: () => void;
  onCloseTerms: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  privacyOpen,
  termsOpen,
  onClosePrivacy,
  onCloseTerms
}) => {
  return (
    <>
      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#1C1D1A] border border-[#C89536]/40 p-6 md:p-8 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
            <button
              onClick={onClosePrivacy}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#96958F] hover:text-[#F5F0E7] bg-[#10110F] border border-[#333]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#E4BD70]">
                <Shield className="w-4 h-4 text-[#C89536]" />
                <span>Privacy Policy</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-[#F5F0E7]">
                Privacy & Data Policy — {BUSINESS_INFO.name}
              </h3>

              <div className="text-xs text-[#96958F] space-y-3 leading-relaxed pt-2">
                <p>
                  At <strong className="text-[#F5F0E7]">{BUSINESS_INFO.name}</strong>, we respect your personal privacy. This Privacy Policy details how we handle information submitted when you browse our website or make an enquiry.
                </p>
                <h4 className="text-sm font-bold text-[#F5F0E7] pt-2">1. Information We Collect</h4>
                <p>
                  When you submit a product enquiry via our contact form or contact us through WhatsApp, we collect only necessary details: your name, phone number, optional email address, and the product or service categories of interest.
                </p>
                <h4 className="text-sm font-bold text-[#F5F0E7] pt-2">2. How We Use Your Information</h4>
                <p>
                  Information provided is used solely to respond to your product enquiry, clarify stock availability, provide specifications, or assist with showroom directions. We do not sell, rent, or trade your contact information to third parties.
                </p>
                <h4 className="text-sm font-bold text-[#F5F0E7] pt-2">3. Direct Contact & WhatsApp</h4>
                <p>
                  Conversations initiated via WhatsApp or direct phone calls are handled directly by proprietor Vinoth Haran and our Madurai staff. You may request to remove your contact details from our records at any time.
                </p>
                <h4 className="text-sm font-bold text-[#F5F0E7] pt-2">4. Contacting Us</h4>
                <p>
                  For any privacy questions, contact us at: {BUSINESS_INFO.address.full} | Email: {BUSINESS_INFO.email} | Phone: {BUSINESS_INFO.phones.primary}.
                </p>
              </div>

              <div className="pt-4 border-t border-[#333]">
                <button
                  onClick={onClosePrivacy}
                  className="w-full py-2.5 rounded-xl bg-[#10110F] border border-[#C89536]/30 text-xs font-semibold text-[#F5F0E7] hover:text-[#E4BD70]"
                >
                  Close Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {termsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#1C1D1A] border border-[#C89536]/40 p-6 md:p-8 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
            <button
              onClick={onCloseTerms}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#96958F] hover:text-[#F5F0E7] bg-[#10110F] border border-[#333]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#E4BD70]">
                <FileText className="w-4 h-4 text-[#C89536]" />
                <span>Terms & Conditions</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-[#F5F0E7]">
                Terms & Conditions — {BUSINESS_INFO.name}
              </h3>

              <div className="text-xs text-[#96958F] space-y-3 leading-relaxed pt-2">
                <p>
                  Welcome to the official catalog website of <strong className="text-[#F5F0E7]">{BUSINESS_INFO.name}</strong>, Madurai. By using this website, you agree to these Terms and Conditions.
                </p>
                <h4 className="text-sm font-bold text-[#F5F0E7] pt-2">1. Product Catalogue & Availability</h4>
                <p>
                  The products, images, specifications, and brand listings displayed on this website represent available product categories and sample catalogue entries. Actual stock availability, finishes, models, and pricing are subject to verification at our showroom or via direct phone / WhatsApp communication.
                </p>
                <h4 className="text-sm font-bold text-[#F5F0E7] pt-2">2. Brand Trademarks</h4>
                <p>
                  All brand names, trademarks, logos, and emblems (including Hindware, Jaquar, Legrand, Polycab, Supreme, Finolex, Philips, and others) belong to their respective registered owners and are referenced here for product identification and customer discovery purposes.
                </p>
                <h4 className="text-sm font-bold text-[#F5F0E7] pt-2">3. Enquiries & Quotations</h4>
                <p>
                  Website submissions and WhatsApp messages constitute non-binding enquiries. Final purchases, billing, and order confirmations take place directly with our showroom team in Madurai.
                </p>
                <h4 className="text-sm font-bold text-[#F5F0E7] pt-2">4. Governing Law</h4>
                <p>
                  These terms are governed by the laws applicable in Madurai, Tamil Nadu, India.
                </p>
              </div>

              <div className="pt-4 border-t border-[#333]">
                <button
                  onClick={onCloseTerms}
                  className="w-full py-2.5 rounded-xl bg-[#10110F] border border-[#C89536]/30 text-xs font-semibold text-[#F5F0E7] hover:text-[#E4BD70]"
                >
                  Close Terms & Conditions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
