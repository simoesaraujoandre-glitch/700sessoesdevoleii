import React from 'react';
import { Lock } from 'lucide-react';

interface FinalCtaSectionProps {
  headline: string;
  checkoutUrl: string;
  countdownMinutes: number;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = React.memo(({
  headline,
}) => {
  return (
    <section id="final-cta-section" className="py-16 md:py-24 bg-zinc-950 relative border-b border-white/5 overflow-hidden z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(234,88,12,0.15)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
          {headline}
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl mx-auto">
          Planeje meses de treinamento em minutos e nunca mais fique sem ideias para seus treinos.
        </p>

        {/* Action Button */}
        <div className="pt-2 max-w-2xl mx-auto space-y-6">
          <a
            id="final-cta-button"
            href="#planos"
            onClick={(e) => {
              const el = document.getElementById('planos');
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative inline-flex items-center justify-center w-full bg-orange-600 hover:bg-orange-500 text-black font-black italic text-lg sm:text-xl py-5 px-8 rounded-sm shadow-[0_0_50px_rgba(234,88,12,0.5)] hover:shadow-[0_0_60px_rgba(234,88,12,0.7)] transition-all duration-300 uppercase tracking-tight border border-orange-400/40 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            JÁ TIREI MINHAS DÚVIDAS, QUERO COMEÇAR AGORA!
          </a>

          <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Compra 100% segura • Garantia de 7 dias</span>
          </div>
        </div>

      </div>
    </section>
  );
});

