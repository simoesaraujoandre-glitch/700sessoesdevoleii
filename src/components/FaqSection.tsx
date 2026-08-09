import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/content';

export const FaqSection: React.FC = React.memo(() => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="faq" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 relative z-10 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-[#1677FF] font-black italic uppercase text-xs tracking-wider">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#071A33] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:border-[#FF7A00]/50"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg hover:text-[#FF7A00] transition-colors focus:outline-none"
                >
                  <span className="pr-2 font-black italic uppercase tracking-tight">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg bg-[#0D2B52] text-zinc-300 transition-transform duration-300 shrink-0 border border-white/10 ${isOpen ? 'rotate-180 bg-[#FF7A00] text-black border-[#FF7A00]' : ''}`}>
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-zinc-200 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-4 bg-[#071A33]/90 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});

