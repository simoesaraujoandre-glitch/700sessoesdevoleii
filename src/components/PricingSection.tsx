import React from 'react';
import { Check, Star, ShieldCheck, Lock } from 'lucide-react';

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
  const finalBasicCheckoutUrl = basicCheckoutUrl || 'https://pay.wiapy.com/ippq8cRXBeIr';
  const finalCompleteCheckoutUrl = completeCheckoutUrl || 'https://pay.wiapy.com/i--jJ3B2UuwN';

  return (
    <section id="planos" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 relative z-10 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            ESCOLHA SEU PLANO
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* PLANO COMPLETO (HIGHLIGHTED) */}
          <div className="relative bg-[#0D2B52] border-2 border-[#FF6A00] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(255,106,0,0.3)] transform md:-translate-y-2">
            
            {/* Popular Badge Top */}
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-[#FF6A00] text-white font-black text-xs px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1 border border-orange-300">
                <Star className="w-3.5 h-3.5 fill-white text-white" />
                MAIS POPULAR • MELHOR CUSTO-BENEFÍCIO
              </span>
            </div>

            <div>
              <div className="text-center pt-3 pb-6 border-b border-white/10">
                <span className="inline-block bg-[#163B6B] text-white border border-white/20 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  PLANO COMPLETO
                </span>
                
                <div className="flex items-center justify-center gap-3 font-mono">
                  <span className="text-[#AAB8C7] line-through text-xl font-bold">
                    {completeOldPrice || 'R$183'}
                  </span>
                  <span className="text-4xl sm:text-5xl font-black text-[#FF6A00]">
                    {completePrice || 'R$29'}
                  </span>
                </div>
                <p className="text-xs text-[#D5DFEA] mt-2 font-medium">Você recebe:</p>
              </div>

              {/* Feature Items with Bonuses Included */}
              <ul className="py-6 space-y-3.5 text-sm sm:text-base text-white">
                <li className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>+700 treinos prontos de vôlei</span>
                </li>

                <li className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Acesso imediato e vitalício</span>
                </li>

                <li className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>1.000 exercícios extras</span>
                </li>

                <li className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>50 sistemas táticos do vôlei moderno</span>
                </li>

                <li className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>75 sessões de recepção, defesa e transição</span>
                </li>

                <li className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={finalCompleteCheckoutUrl}
                className="block w-full text-center bg-[#FF6A00] hover:bg-[#e55f00] text-white font-black italic text-lg py-4 px-6 rounded-md shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)] transition-all duration-300 uppercase tracking-tight transform hover:-translate-y-0.5 cursor-pointer relative z-20"
              >
                QUERO O ACESSO COMPLETO
              </a>

              <div className="flex items-center justify-center gap-2 text-zinc-300 text-xs text-center font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Compra 100% segura • Acesso imediato</span>
              </div>
            </div>

          </div>

          {/* PLANO BÁSICO */}
          <div className="bg-[#0D2B52] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-center pb-6 border-b border-white/10">
                <span className="inline-block bg-[#071A33] text-zinc-300 border border-white/10 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  PLANO BÁSICO
                </span>
                
                <div className="flex items-center justify-center gap-3 font-mono">
                  <span className="text-zinc-400 line-through text-xl font-bold">
                    {basicOldPrice || 'R$29'}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {basicPrice || 'R$15'}
                  </span>
                </div>
              </div>

              {/* Feature Items */}
              <ul className="py-6 space-y-4 text-sm sm:text-base text-zinc-200">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>+700 treinos prontos de vôlei</span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Acesso imediato e vitalício</span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href={finalBasicCheckoutUrl}
                className="block w-full text-center bg-[#1677FF] hover:bg-[#1260d4] text-white font-bold text-base py-3.5 px-6 rounded-md transition-all duration-300 uppercase tracking-wider cursor-pointer relative z-20"
              >
                ESCOLHER PLANO BÁSICO
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
});

