import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export const GuaranteeSection: React.FC = React.memo(() => {
  return (
    <section id="guarantee-section" className="py-16 md:py-20 bg-zinc-950 border-b border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10 text-center sm:text-left">
            
            {/* Orange Shield Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-black shrink-0 shadow-lg shadow-orange-600/30">
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter text-white">
                Garantia Incondicional de 7 Dias
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                Teste o material por 7 dias completos. Se não ficar satisfeito, devolvemos seu dinheiro.
              </p>

              {/* 3 Guarantee Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-semibold text-zinc-300">
                <div className="inline-flex items-center gap-1.5 bg-zinc-950 px-3 py-1 rounded-full border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Devolução rápida</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-zinc-950 px-3 py-1 rounded-full border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Sem perguntas</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-zinc-950 px-3 py-1 rounded-full border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Risco zero</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
});
