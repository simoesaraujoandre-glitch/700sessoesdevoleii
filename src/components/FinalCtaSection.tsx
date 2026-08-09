import React from 'react';
import { Lock } from 'lucide-react';

interface FinalCtaSectionProps {
  headline?: string;
  checkoutUrl?: string;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = React.memo(({
  checkoutUrl = 'https://pay.wiapy.com/i--jJ3B2UuwN',
}) => {
  return (
    <section id="cta-final" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 relative z-10 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        
        {/* Badge */}
        <span className="text-[#FF7A00] font-black italic uppercase text-xs tracking-wider">
          ACESSO IMEDIATO
        </span>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white max-w-2xl mx-auto leading-tight">
          CHEGA DE PERDER TEMPO PLANEJANDO TREINOS DO ZERO
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mx-auto">
          Garanta agora mais de 700 treinos prontos de vôlei e simplifique a preparação das suas aulas e treinos.
        </p>

        {/* Action Button */}
        <div className="pt-4 max-w-xl mx-auto space-y-4">
          <a
            id="final-cta-button"
            href={checkoutUrl}
            className="group relative inline-flex items-center justify-center w-full bg-[#FF7A00] hover:bg-[#e66e00] text-white font-black italic text-lg sm:text-xl py-5 px-8 rounded-md shadow-[0_0_40px_rgba(255,122,0,0.4)] hover:shadow-[0_0_50px_rgba(255,122,0,0.6)] transition-all duration-300 uppercase tracking-tight transform hover:-translate-y-0.5 cursor-pointer"
          >
            QUERO O ACESSO AOS +700 TREINOS AGORA
          </a>

          <div className="flex items-center justify-center gap-2 text-zinc-300 text-xs sm:text-sm font-medium">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Compra 100% segura • Acesso imediato no e-mail</span>
          </div>
        </div>

      </div>
    </section>
  );
});


