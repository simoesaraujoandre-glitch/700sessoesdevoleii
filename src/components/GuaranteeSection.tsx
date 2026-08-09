import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export const GuaranteeSection: React.FC = React.memo(() => {
  return (
    <section id="garantia" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 relative z-10 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          
          {/* Orange Shield Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FF7A00] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#FF7A00]/20">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
          </div>

          <div className="space-y-3">
            <span className="text-emerald-400 font-bold uppercase text-xs tracking-wider">
              GARANTIA TOTAL DE 7 DIAS
            </span>

            <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter text-white">
              RISCO ZERO: 7 DIAS DE GARANTIA INCONDICIONAL
            </h2>


            {/* Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs text-zinc-300">
              <div className="inline-flex items-center gap-1.5 bg-[#0D2B52] px-3 py-1 rounded-md border border-white/10">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Reembolso 100% garantido</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-[#0D2B52] px-3 py-1 rounded-md border border-white/10">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sem burocracia</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-[#0D2B52] px-3 py-1 rounded-md border border-white/10">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>7 dias para testar</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
});

