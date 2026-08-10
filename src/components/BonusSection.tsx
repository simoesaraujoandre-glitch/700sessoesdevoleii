import React, { useState } from 'react';
import { BookOpen, Gift } from 'lucide-react';
import { bonusList } from '../data/content';

const bonusImages: Record<number, string> = {
  1: '/images/bonus_1.webp', // 1.000 exercícios extras
  2: '/images/bonus_2.webp', // 50 sistemas táticos
  3: '/images/bonus_3.webp', // 75 sessões de recepção
};

export const BonusSection: React.FC = React.memo(() => {
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="bonus-section" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 relative z-10 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-[#FF7A00] font-black italic uppercase text-xs tracking-wider">
            BÔNUS GRATUITOS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            E AINDA LEVE 3 BÔNUS GRATUITOS
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-lg mx-auto">
            Escolhendo o Plano Completo, você recebe três materiais extras sem pagar nada a mais.
          </p>
        </div>

        {/* 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {bonusList.map((bonus) => {
            const primarySrc = bonusImages[bonus.id] || bonus.coverImage;
            const hasFailed = failedImages[bonus.id];

            return (
              <div
                key={bonus.id}
                className="bg-[#0D2B52] border border-white/10 hover:border-[#FF7A00]/40 rounded-2xl p-6 text-center flex flex-col justify-between space-y-4 shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  {/* Badge Header */}
                  <div className="flex items-center justify-between w-full">
                    <span className="bg-[#FF7A00] text-white font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                      {bonus.badge}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase">
                      HOJE GRÁTIS
                    </span>
                  </div>

                  {/* Ebook Cover Image */}
                  <div className="relative aspect-[3/4] max-w-[180px] mx-auto w-full flex items-center justify-center p-2 my-1">
                    {!hasFailed ? (
                      <img
                        src={primarySrc}
                        alt={bonus.title}
                        className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                        width={200}
                        height={260}
                        loading="lazy"
                        decoding="async"
                        onError={() => handleImageError(bonus.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#071A33] flex flex-col items-center justify-center p-3 text-center space-y-2 rounded-xl border border-white/10">
                        <BookOpen className="w-6 h-6 text-[#FF7A00]" />
                        <span className="text-xs font-black text-white italic">
                          {bonus.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bonus Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-black italic uppercase tracking-tight text-white leading-snug">
                      {bonus.title}
                    </h3>

                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>

                {/* Price Tag */}
                <div className="pt-3 border-t border-white/10 w-full text-center flex items-center justify-center gap-2">
                  <span className="text-xs text-zinc-400 line-through font-mono">{bonus.oldPrice}</span>
                  <span className="text-xs font-black text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded">
                    HOJE GRÁTIS
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Bonus Summary Card */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 bg-[#0D2B52] border border-[#FF7A00]/40 rounded-2xl px-6 py-4 shadow-xl max-w-2xl mx-auto hover:border-[#FF7A00] transition-colors duration-300">
            <div className="w-8 h-8 rounded-full bg-[#FF7A00]/15 text-[#FF7A00] flex items-center justify-center shrink-0 border border-[#FF7A00]/30">
              <Gift className="w-4 h-4 text-[#FF7A00]" />
            </div>
            <span className="text-xs sm:text-sm md:text-base font-black text-white uppercase tracking-tight">
              R$114 EM BÔNUS EXTRAS — <span className="text-[#FF7A00]">HOJE GRÁTIS</span> NO PLANO COMPLETO
            </span>
          </div>
        </div>

      </div>
    </section>
  );
});



