import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/content';

export const FaqSection: React.FC = React.memo(() => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-zinc-950 border-b border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-orange-500 transition-colors focus:outline-none"
                >
                  <span className="pr-2 font-bold tracking-tight">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg bg-zinc-950 text-zinc-400 transition-transform duration-300 shrink-0 border border-white/5 ${isOpen ? 'rotate-180 bg-orange-600 text-black border-orange-500' : ''}`}>
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4 bg-zinc-950/60 font-normal">
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
