import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../data/business';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#10110F] border-b border-[#C89536]/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#E4BD70] font-semibold">
            Clear Answers & Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F0E7]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-[#96958F] leading-relaxed max-w-xl mx-auto">
            Find immediate answers about our showroom range, brand selection, and enquiry process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#1C1D1A] border border-[#C89536]/20 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-semibold font-heading text-[#F5F0E7] group-hover:text-[#E4BD70] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-[#10110F] border border-[#C89536]/25 text-[#E4BD70] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C89536]/20' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#96958F] leading-relaxed border-t border-[#252622] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1C1D1A] border border-[#C89536]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#F5F0E7]">Have a specific project question?</h4>
            <p className="text-xs text-[#96958F] mt-0.5">
              Proprietor Vinoth Haran and our team are available on WhatsApp and call.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hello Raj Rudra Enterprises, I have a question regarding product availability.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-[#25D366] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 hover:bg-[#20ba59] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
