import React from 'react';
import m1 from '../assets/images/mais do que voce vai receber   (1).PNG';
import m2 from '../assets/images/mais do que voce vai receber   (2).PNG';
import m3 from '../assets/images/mais do que voce vai receber   (3).PNG';
import m4 from '../assets/images/mais do que voce vai receber   (4).PNG';
import m5 from '../assets/images/mais do que voce vai receber   (5).PNG';
import m6 from '../assets/images/mais do que voce vai receber   (6).PNG';
import m7 from '../assets/images/mais do que voce vai receber   (7).PNG';
import m8 from '../assets/images/mais do que voce vai receber   (8).PNG';
import m9 from '../assets/images/mais do que voce vai receber   (9).PNG';
import m10 from '../assets/images/mais do que voce vai receber   (10).PNG';
import m11 from '../assets/images/mais do que voce vai receber   (11).PNG';

const materialImages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11];

const duplicatedImages = [...materialImages, ...materialImages, ...materialImages];

export const MoreMaterialSection: React.FC = React.memo(() => {
  return (
    <section id="more-material-section" className="py-8 md:py-10 bg-zinc-950 border-b border-white/5 relative z-10 overflow-hidden">
      {/* Title */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
          Mais do Material Que Você Receberá
        </h2>
      </div>

      {/* Marquee Track with Images Only */}
      <div className="relative w-full overflow-hidden py-1 group">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

        <div className="flex gap-3 sm:gap-6 w-max animate-marquee-more hover:[animation-play-state:paused] will-change-transform transform-gpu [backface-visibility:hidden]">
          {duplicatedImages.map((imgUrl, index) => (
            <img
              key={`more-${index}`}
              src={imgUrl}
              alt={`Mais do Material ${index + 1}`}
              className="h-[180px] sm:h-[260px] md:h-[320px] w-auto shrink-0 rounded-xl object-contain drop-shadow-md"
              loading="eager"
              decoding="async"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeMore {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .animate-marquee-more {
          animation: marqueeMore 28s linear infinite;
        }
      `}</style>
    </section>
  );
});
