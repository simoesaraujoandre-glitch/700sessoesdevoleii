import React, { useState } from 'react';
import { Gift, Check, BookOpen } from 'lucide-react';
import { bonusList } from '../data/content';
import bonus1Img from '../assets/images/bonus 1.png';
import bonus2Img from '../assets/images/50sistemas.png';
import bonus3Img from '../assets/images/75sessoes.png';

const bonusLocalImages: Record<number, string> = {
  1: bonus1Img,
  2: bonus2Img,
  3: bonus3Img,
};

export const BonusSection: React.FC = React.memo(() => {
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="bonus-section" className="py-8 md:py-12 bg-zinc-950 border-b border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            Receba 3 Bônus Exclusivos GRÁTIS!
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Garanta acesso imediato a esses conteúdos complementares sem nenhum custo adicional.
          </p>
        </div>

        {/* 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">
          {bonusList.map((bonus) => {
            const imageSrc = bonusLocalImages[bonus.id] || bonus.coverImage;
            const hasFailed = failedImages[bonus.id] || !imageSrc;

            return (
              <div
                key={bonus.id}
                className="bg-zinc-900 border border-white/10 hover:border-orange-600/50 rounded-2xl p-6 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group"
              >
                <div>
                  {/* Badge Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-orange-600 text-black font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                      {bonus.badge}
                    </span>
                    <span className="text-[11px] font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-tight">
                      Incluso Grátis
                    </span>
                  </div>

                  {/* 3D Ebook Cover Thumbnail */}
                  <div className="relative aspect-[3/4] w-full mb-5 rounded-xl overflow-hidden bg-zinc-950 border border-white/10 shadow-inner flex items-center justify-center p-3 group-hover:border-orange-500/30 transition-colors">
                    {!hasFailed ? (
                      <img
                        src={imageSrc}
                        alt={bonus.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        width={300}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        onError={() => handleImageError(bonus.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-4 text-center space-y-3 rounded-lg border border-orange-500/20">
                        <div className="w-12 h-12 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-black text-white uppercase italic">
                          {bonus.badge}
                        </span>
                        <p className="text-[11px] text-zinc-400 line-clamp-3">
                          {bonus.title}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bonus Title */}
                  <h3 className="text-lg font-black italic uppercase tracking-tight text-white mb-2 leading-snug">
                    {bonus.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {bonus.description}
                  </p>
                </div>

                {/* Price & Free Tag */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-xs font-semibold text-zinc-500 text-center line-through font-mono">
                    {bonus.oldPrice}
                  </div>
                  <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-black text-sm sm:text-base py-2 px-3 rounded-lg text-center uppercase tracking-wider shadow-sm">
                    HOJE GRÁTIS
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Bonus Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2.5 bg-orange-600/10 border border-orange-600/30 text-orange-500 text-sm sm:text-base font-bold px-6 py-3 rounded-full uppercase tracking-tight shadow-lg">
            <Gift className="w-5 h-5 text-orange-500 animate-bounce shrink-0" />
            <span>Total em bônus: R$114 — HOJE GRÁTIS!</span>
          </div>
        </div>

      </div>
    </section>
  );
});

