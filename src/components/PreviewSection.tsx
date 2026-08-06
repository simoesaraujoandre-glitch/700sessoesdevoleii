import React from 'react';
import p1 from '../assets/images/produto principal (1).PNG';
import p2 from '../assets/images/produto principal (2).PNG';
import p3 from '../assets/images/produto principal (3).PNG';
import p4 from '../assets/images/produto principal (4).PNG';
import p5 from '../assets/images/produto principal (5).PNG';
import p6 from '../assets/images/produto principal (6).PNG';
import p7 from '../assets/images/produto principal (7).PNG';
import p8 from '../assets/images/produto principal (8).PNG';
import p9 from '../assets/images/produto principal (9).PNG';
import p10 from '../assets/images/produto principal (10).PNG';
import p11 from '../assets/images/produto principal (11).PNG';

const row1Images = [p1, p2, p3, p4, p5, p6];
const row2Images = [p7, p8, p9, p10, p11, p1];

const duplicatedRow1 = [...row1Images, ...row1Images, ...row1Images];
const duplicatedRow2 = [...row2Images, ...row2Images, ...row2Images];

export const PreviewSection: React.FC = React.memo(() => {
  return (
    <section id="preview-section" className="py-8 md:py-10 bg-zinc-950 border-b border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            Demonstração do Produto Principal
          </h2>

        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Row 1 - Scroll Left */}
        <div className="relative w-full overflow-hidden py-1 group">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

          <div className="flex gap-3 sm:gap-6 w-max animate-marquee-left hover:[animation-play-state:paused] will-change-transform transform-gpu [backface-visibility:hidden]">
            {duplicatedRow1.map((imgUrl, index) => (
              <img
                key={`r1-${index}`}
                src={imgUrl}
                alt={`Demonstração PDF Cima ${index + 1}`}
                className="h-[180px] sm:h-[260px] md:h-[320px] w-auto shrink-0 rounded-xl object-contain drop-shadow-md"
                loading="eager"
                decoding="async"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="relative w-full overflow-hidden py-1 group">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

          <div className="flex gap-3 sm:gap-6 w-max animate-marquee-right hover:[animation-play-state:paused] will-change-transform transform-gpu [backface-visibility:hidden]">
            {duplicatedRow2.map((imgUrl, index) => (
              <img
                key={`r2-${index}`}
                src={imgUrl}
                alt={`Demonstração PDF Baixo ${index + 1}`}
                className="h-[180px] sm:h-[260px] md:h-[320px] w-auto shrink-0 rounded-xl object-contain drop-shadow-md"
                loading="eager"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-left {
          animation: marqueeLeft 28s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 28s linear infinite;
        }
      `}</style>
    </section>
  );
});
