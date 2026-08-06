import React from 'react';
import { Check, X, ShieldCheck, Zap, Lock } from 'lucide-react';

interface PricingSectionProps {
  basicPrice: string;
  completePrice: string;
  basicOldPrice?: string;
  completeOldPrice?: string;
  basicCheckoutUrl?: string;
  completeCheckoutUrl?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = React.memo(({
  basicPrice,
  completePrice,
  basicOldPrice,
  completeOldPrice,
  basicCheckoutUrl,
  completeCheckoutUrl
}) => {
  // Links de fallback se não forem passados via props
  const finalBasicCheckoutUrl = basicCheckoutUrl || 'https://pay.wiapy.com/S-KlsfJ5jJ3z';
  const finalCompleteCheckoutUrl = completeCheckoutUrl
    ? completeCheckoutUrl
    : 'https://pay.wiapy.com/ippq8cRXBeIr';

  return (
    <section id="planos" className="py-8 md:py-12 bg-zinc-950 border-b border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            Escolha Seu Plano
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* PLANO COMPLETO (HIGHLIGHTED) */}
          <div className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-orange-600 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(234,88,12,0.3)] transform md:-translate-y-2">
            
            {/* Popular Badge Top */}
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-orange-600 text-black font-black text-xs px-4 py-1.5 rounded-full shadow-lg uppercase tracking-tighter flex items-center gap-1 border border-orange-400">
                <Zap className="w-3.5 h-3.5 fill-black" />
                MAIS POPULAR — MELHOR CUSTO-BENEFÍCIO
              </span>
            </div>

            <div>
              <div className="text-center pt-2 pb-6 border-b border-white/5">
                <span className="inline-block bg-orange-600/10 text-orange-500 border border-orange-600/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  PLANO COMPLETO
                </span>
                
                <div className="flex items-center justify-center gap-2 font-mono">
                  <span className="text-zinc-500 line-through text-lg font-bold">
                    {completeOldPrice}
                  </span>
                  <span className="text-4xl sm:text-5xl font-black text-orange-500">
                    {completePrice}
                  </span>
                </div>
              </div>

              {/* Feature Items with Bonuses Included */}
              <ul className="py-6 space-y-3.5 text-xs sm:text-sm text-zinc-200">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold bg-zinc-950/90 px-2 py-0.5 rounded border border-white/5">700 Sessões de Treinamento</span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold bg-zinc-950/90 px-2 py-0.5 rounded border border-white/5">Acesso Imediato e Vitalício</span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold bg-zinc-950/90 px-2 py-0.5 rounded border border-white/5">Garantia de 7 dias</span>
                </li>

                <li className="flex items-center gap-3 text-orange-400">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold bg-zinc-950/90 px-2 py-0.5 rounded border border-orange-500/30">1.000 Exercícios Extras</span>
                </li>

                <li className="flex items-center gap-3 text-orange-400">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold bg-zinc-950/90 px-2 py-0.5 rounded border border-orange-500/30">50 Sistemas Táticos do Vôlei Moderno</span>
                </li>

                <li className="flex items-center gap-3 text-orange-400">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold bg-zinc-950/90 px-2 py-0.5 rounded border border-orange-500/30">75 Sessões de Recepção, Defesa e Transição</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={finalCompleteCheckoutUrl}
                className="block w-full text-center bg-orange-600 hover:bg-orange-500 text-black font-black italic text-base sm:text-lg py-4 px-6 rounded-sm shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] transition-all duration-300 uppercase tracking-tight border border-orange-400/40 transform hover:-translate-y-0.5 cursor-pointer relative z-20"
              >
                QUERO ACESSO COMPLETO!
              </a>

              <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs text-center font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Compra 100% segura • Garantia de 7 dias</span>
              </div>
            </div>

          </div>

          {/* PLANO BÁSICO */}
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
            <div>
              <div className="text-center pb-6 border-b border-white/5">
                <span className="inline-block bg-zinc-950 text-zinc-400 border border-white/5 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  PLANO BÁSICO
                </span>
                
                <div className="flex items-center justify-center gap-2 font-mono">
                  <span className="text-zinc-500 line-through text-lg font-bold">
                    {basicOldPrice}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {basicPrice}
                  </span>
                </div>
              </div>

              {/* Feature Items */}
              <ul className="py-6 space-y-4 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium bg-zinc-950/80 px-2 py-0.5 rounded border border-white/5">700 Sessões de Treinamento</span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium bg-zinc-950/80 px-2 py-0.5 rounded border border-white/5">Acesso Imediato e Vitalício</span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium bg-zinc-950/80 px-2 py-0.5 rounded border border-white/5">Garantia de 7 dias</span>
                </li>

                <li className="flex items-center gap-3 text-zinc-500">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="line-through">Não inclui os bônus</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href={finalBasicCheckoutUrl}
                className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-zinc-200 font-bold text-sm sm:text-base py-3.5 px-6 rounded-sm transition-all duration-300 uppercase tracking-wider cursor-pointer relative z-20"
              >
                ESCOLHER BÁSICO
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
});
