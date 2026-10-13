import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Interactive3DSection } from './components/Interactive3DSection';
import { ProductCatalogue } from './components/ProductCatalogue';
import { BrandShowcase } from './components/BrandShowcase';
import { VisualGallery } from './components/VisualGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState<string>('');
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('');

  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleOpenEnquiry = (productName?: string, category?: string) => {
    setSelectedProductName(productName || '');
    setSelectedProductCategory(category || '');
    setEnquiryModalOpen(true);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#10110F] text-[#F5F0E7] flex flex-col selection:bg-[#C89536] selection:text-[#10110F]">
      {/* Top Navigation */}
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiry()}
          onExploreProducts={scrollToProducts}
        />

        {/* 2. About The Business Section */}
        <AboutSection />

        {/* 3. Interactive 3D Product & Lighting Simulator */}
        <Interactive3DSection />

        {/* 4. Functional Product Catalogue */}
        <ProductCatalogue onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Featured Verified Brands */}
        <BrandShowcase />

        {/* 6. Visual Design Gallery */}
        <VisualGallery />

        {/* 7. Why Choose Us (The Raj Rudra Advantage) */}
        <WhyChooseUs />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Contact & Product Enquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Global Product Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialProductName={selectedProductName}
        initialCategory={selectedProductCategory}
      />

      {/* Legal Modals (Privacy & Terms) */}
      <LegalModals
        privacyOpen={privacyModalOpen}
        termsOpen={termsModalOpen}
        onClosePrivacy={() => setPrivacyModalOpen(false)}
        onCloseTerms={() => setTermsModalOpen(false)}
      />
    </div>
  );
}
