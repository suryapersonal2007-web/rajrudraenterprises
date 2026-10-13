import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductName?: string;
  initialCategory?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialProductName = '',
  initialCategory = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: initialCategory || 'Bathroom Fittings',
    product: initialProductName || '',
    message: '',
    consent: true
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductName) {
      setFormData(prev => ({
        ...prev,
        product: initialProductName,
        category: initialCategory || prev.category
      }));
    }
  }, [initialProductName, initialCategory]);

  if (!isOpen) return null;

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errors.phone = 'Valid phone number is required.';
    }
    if (!formData.consent) errors.consent = 'Consent is required.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleWhatsAppChat = () => {
    const text = `Hello Raj Rudra Enterprises,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nProduct: ${formData.product || 'General'}\nNote: ${formData.message || 'Looking for pricing and availability'}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#1C1D1A] border border-[#C89536]/40 p-6 md:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#96958F] hover:text-[#F5F0E7] hover:bg-[#10110F] border border-[#333] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C89536]/20 border border-[#C89536] flex items-center justify-center text-[#E4BD70] mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#E4BD70]" />
            </div>
            <h3 className="text-lg font-bold text-[#F5F0E7]">Enquiry Submitted</h3>
            <p className="text-xs text-[#96958F] max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name}. We have received your request for <span className="text-[#E4BD70]">{formData.product || formData.category}</span>.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={handleWhatsAppChat}
                className="px-4 py-2.5 rounded-lg bg-[#25D366] text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-lg border border-[#333] text-xs font-medium text-[#96958F] hover:text-[#F5F0E7]"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#E4BD70]">
                Raj Rudra Enterprises
              </div>
              <h3 className="text-xl font-bold font-heading text-[#F5F0E7]">
                Quick Product Enquiry
              </h3>
              <p className="text-xs text-[#96958F] mt-1">
                Receive pricing details and stock confirmation for your requirements.
              </p>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1">
                Name <span className="text-[#E4BD70]">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-xl bg-[#10110F] border border-[#C89536]/25 text-xs text-[#F5F0E7] focus:outline-none focus:border-[#E4BD70]"
              />
              {formErrors.name && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {formErrors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1">
                Phone Number <span className="text-[#E4BD70]">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98941 40053"
                className="w-full px-3 py-2 rounded-xl bg-[#10110F] border border-[#C89536]/25 text-xs text-[#F5F0E7] focus:outline-none focus:border-[#E4BD70]"
              />
              {formErrors.phone && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-xl bg-[#10110F] border border-[#C89536]/25 text-xs text-[#F5F0E7] focus:outline-none focus:border-[#E4BD70]"
                >
                  <option value="Bathroom Fittings">Bathroom Fittings</option>
                  <option value="Sanitaryware">Sanitaryware</option>
                  <option value="Electrical Products">Electrical Products</option>
                  <option value="Plumbing Solutions">Plumbing Solutions</option>
                  <option value="Lighting Solutions">Lighting Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1">
                  Product / Brand
                </label>
                <input
                  type="text"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  placeholder="e.g. Jaquar Tap"
                  className="w-full px-3 py-2 rounded-xl bg-[#10110F] border border-[#C89536]/25 text-xs text-[#F5F0E7] focus:outline-none focus:border-[#E4BD70]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#96958F] font-semibold mb-1">
                Note / Questions
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Any special finish or size requirement..."
                className="w-full px-3 py-2 rounded-xl bg-[#10110F] border border-[#C89536]/25 text-xs text-[#F5F0E7] focus:outline-none focus:border-[#E4BD70]"
              />
            </div>

            <label className="flex items-start gap-2 cursor-pointer text-[11px] text-[#96958F]">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-0.5 rounded accent-[#C89536]"
              />
              <span>I confirm this enquiry for Raj Rudra Enterprises.</span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#10110F] bg-gradient-to-r from-[#E4BD70] to-[#C89536] hover:from-[#F5F0E7] hover:to-[#E4BD70] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Product Enquiry'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
