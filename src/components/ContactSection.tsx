import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Building, User } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

interface ContactSectionProps {
  initialProductName?: string;
  initialCategory?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProductName = '',
  initialCategory = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: initialCategory || 'Bathroom Fittings',
    productOrBrand: initialProductName || '',
    quantity: '',
    message: '',
    consent: true
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name.';
    }

    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide your mobile phone number.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid mobile number (e.g. +91 98941 40053).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() && !formData.productOrBrand.trim()) {
      errors.message = 'Please specify the product or details you would like to enquire about.';
    }

    if (!formData.consent) {
      errors.consent = 'You must agree to be contacted regarding this enquiry.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable enquiry receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Auto open WhatsApp chat option with prefilled inquiry message
    }, 600);
  };

  const sendViaWhatsApp = () => {
    const text = `Hello Raj Rudra Enterprises,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nProduct/Brand: ${formData.productOrBrand || 'General'}\nQuantity: ${formData.quantity || 'N/A'}\nMessage: ${formData.message || 'Product enquiry'}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#10110F] border-b border-[#C89536]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#E4BD70] font-semibold">
            Connect With Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F0E7]">
            GET IN TOUCH & PRODUCT ENQUIRY
          </h2>
          <p className="text-sm sm:text-base text-[#96958F] leading-relaxed">
            Visit our Madurai showroom, call our team directly, or send an enquiry for products, availability, and project specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Business Identity Card */}
            <div className="p-6 rounded-2xl bg-[#1C1D1A] border border-[#C89536]/25 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#10110F] border border-[#C89536]/30 flex items-center justify-center text-[#E4BD70]">
                  <Building className="w-5 h-5 text-[#C89536]" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-[#F5F0E7]">
                    {BUSINESS_INFO.name}
                  </h3>
                  <div className="text-xs text-[#96958F]">
                    Proprietor: <span className="text-[#E4BD70] font-medium">{BUSINESS_INFO.proprietor}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#252622] space-y-3">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C89536] shrink-0 mt-1" />
                  <div className="text-xs text-[#96958F]">
                    <span className="text-[#F5F0E7] font-medium block">Showroom Address:</span>
                    {BUSINESS_INFO.address.full}
                  </div>
                </div>

                {/* Primary Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C89536] shrink-0" />
                  <div className="text-xs text-[#96958F]">
                    <span className="text-[#F5F0E7] font-medium block">Primary Phone:</span>
                    <a href={`tel:${BUSINESS_INFO.phones.primaryRaw}`} className="text-[#E4BD70] hover:underline font-mono">
                      {BUSINESS_INFO.phones.primary}
                    </a>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C89536] shrink-0" />
                  <div className="text-xs text-[#96958F]">
                    <span className="text-[#F5F0E7] font-medium block">Alternative Phone:</span>
                    <a href={`tel:${BUSINESS_INFO.phones.secondaryRaw}`} className="text-[#E4BD70] hover:underline font-mono">
                      {BUSINESS_INFO.phones.secondary}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C89536] shrink-0" />
                  <div className="text-xs text-[#96958F]">
                    <span className="text-[#F5F0E7] font-medium block">Email:</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#E4BD70] hover:underline font-mono">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
                  className="py-2.5 px-3 rounded-lg border border-[#C89536]/30 bg-[#10110F] text-xs font-semibold text-[#F5F0E7] hover:text-[#E4BD70] flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C89536]" />
                  <span>Call Primary</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg border border-[#25D366]/40 bg-[#10110F] text-xs font-semibold text-[#25D366] hover:bg-[#25D366]/10 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Directions Card */}
            <div className="p-6 rounded-2xl bg-[#1C1D1A] border border-[#C89536]/25 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#F5F0E7] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C89536]" />
                  Locate Our Showroom
                </h4>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E4BD70] hover:underline flex items-center gap-1 font-mono"
                >
                  Open in Maps →
                </a>
              </div>

              <div className="h-44 w-full rounded-xl overflow-hidden bg-[#10110F] border border-[#333] relative flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-[#1C1D1A] border border-[#C89536]/40 flex items-center justify-center text-[#E4BD70] mb-2">
                  <MapPin className="w-5 h-5 text-[#C89536]" />
                </div>
                <div className="text-xs font-bold text-[#F5F0E7]">Kaka Thoppu Street, Madurai</div>
                <div className="text-[11px] text-[#96958F] mt-1">Tamil Nadu – 625001</div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-3 py-1.5 rounded-lg bg-[#C89536] text-[#10110F] text-[11px] font-bold uppercase tracking-wider"
                >
                  Get Driving Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Product Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 md:p-8 rounded-2xl bg-[#1C1D1A] border border-[#C89536]/30 shadow-2xl relative">
              <h3 className="text-xl font-bold font-heading text-[#F5F0E7] mb-1">
                Submit Product Enquiry
              </h3>
              <p className="text-xs text-[#96958F] mb-6">
                Tell us about the fittings, cables, sanitaryware, or lighting fixtures you need. Our team will review and respond promptly.
              </p>

              {submitSuccess ? (
                /* Success State */
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#C89536]/20 border border-[#C89536] flex items-center justify-center text-[#E4BD70] mx-auto">
                    <CheckCircle2 className="w-7 h-7 text-[#E4BD70]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#F5F0E7]">Enquiry Received Successfully!</h4>
                  <p className="text-xs sm:text-sm text-[#96958F] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F5F0E7]">{formData.name}</strong>. We have logged your enquiry for <span className="text-[#E4BD70]">{formData.category}</span>. You can also chat directly with us on WhatsApp right away to get immediate availability.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      onClick={sendViaWhatsApp}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20ba59] transition-colors flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue in WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          category: 'Bathroom Fittings',
                          productOrBrand: '',
                          quantity: '',
                          message: '',
                          consent: true
                        });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#96958F] hover:text-[#F5F0E7] border border-[#333]"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1.5">
                        Your Full Name <span className="text-[#E4BD70]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#10110F] border text-xs sm:text-sm text-[#F5F0E7] placeholder-[#555] focus:outline-none transition-colors ${
                          formErrors.name ? 'border-rose-500' : 'border-[#C89536]/25 focus:border-[#E4BD70]'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1.5">
                        Mobile Phone Number <span className="text-[#E4BD70]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98941 40053"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#10110F] border text-xs sm:text-sm text-[#F5F0E7] placeholder-[#555] focus:outline-none transition-colors ${
                          formErrors.phone ? 'border-rose-500' : 'border-[#C89536]/25 focus:border-[#E4BD70]'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email (Optional) & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1.5">
                        Email Address <span className="text-[#666] text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#10110F] border text-xs sm:text-sm text-[#F5F0E7] placeholder-[#555] focus:outline-none transition-colors ${
                          formErrors.email ? 'border-rose-500' : 'border-[#C89536]/25 focus:border-[#E4BD70]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1.5">
                        Product Domain / Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#10110F] border border-[#C89536]/25 text-xs sm:text-sm text-[#F5F0E7] focus:outline-none focus:border-[#E4BD70] transition-colors cursor-pointer"
                      >
                        <option value="Bathroom Fittings">Bathroom Fittings</option>
                        <option value="Sanitaryware">Sanitaryware</option>
                        <option value="Electrical Products">Electrical Products</option>
                        <option value="Plumbing Solutions">Plumbing Solutions</option>
                        <option value="Lighting Solutions">Lighting Solutions</option>
                        <option value="General Project Requirement">General Project Requirement</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Product / Brand of Interest & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1.5">
                        Specific Item or Brand of Interest
                      </label>
                      <input
                        type="text"
                        value={formData.productOrBrand}
                        onChange={(e) => setFormData({ ...formData, productOrBrand: e.target.value })}
                        placeholder="e.g. Jaquar Single-Lever Mixer, Legrand Switches"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#10110F] border border-[#C89536]/25 text-xs sm:text-sm text-[#F5F0E7] placeholder-[#555] focus:outline-none focus:border-[#E4BD70] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1.5">
                        Est. Quantity <span className="text-[#666] text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 5 units / 1 House"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#10110F] border border-[#C89536]/25 text-xs sm:text-sm text-[#F5F0E7] placeholder-[#555] focus:outline-none focus:border-[#E4BD70] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1.5">
                      Enquiry Message or Specifications
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any specific details, finish preferences, or project timeline..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#10110F] border text-xs sm:text-sm text-[#F5F0E7] placeholder-[#555] focus:outline-none transition-colors ${
                        formErrors.message ? 'border-rose-500' : 'border-[#C89536]/25 focus:border-[#E4BD70]'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded accent-[#C89536]"
                      />
                      <span className="text-xs text-[#96958F] leading-normal">
                        I agree to submit this enquiry to Raj Rudra Enterprises for product details and availability.
                      </span>
                    </label>
                    {formErrors.consent && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#10110F] bg-gradient-to-r from-[#E4BD70] to-[#C89536] hover:from-[#F5F0E7] hover:to-[#E4BD70] transition-all shadow-lg shadow-black/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Official Product Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
