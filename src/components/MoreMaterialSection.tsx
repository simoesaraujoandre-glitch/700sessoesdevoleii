import React from 'react';
import m1 from '../assets/images/material_1.jpg';
import m2 from '../assets/images/material_2.jpg';
import m3 from '../assets/images/material_3.jpg';
import m4 from '../assets/images/material_4.jpg';
import m5 from '../assets/images/material_5.jpg';
import m6 from '../assets/images/material_6.jpg';
import m7 from '../assets/images/material_7.jpg';
import m8 from '../assets/images/material_8.jpg';
import m9 from '../assets/images/material_9.jpg';
import m10 from '../assets/images/material_10.jpg';
import m11 from '../assets/images/material_11.jpg';

import p1 from '../assets/images/p_1.jpg';
import p2 from '../assets/images/p_2.jpg';
import p3 from '../assets/images/p_3.jpg';
import p4 from '../assets/images/p_4.jpg';
import p5 from '../assets/images/p_5.jpg';
import p6 from '../assets/images/p_6.jpg';
import p7 from '../assets/images/p_7.jpg';
import p8 from '../assets/images/p_8.jpg';
import p9 from '../assets/images/p_9.jpg';
import p10 from '../assets/images/p_10.jpg';
import p11 from '../assets/images/p_11.jpg';

const materialImages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11];
const duplicatedImages = [...materialImages, ...materialImages, ...materialImages];

const secondMaterialImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
const duplicatedSecondImages = [...secondMaterialImages, ...secondMaterialImages, ...secondMaterialImages];

export const MoreMaterialSection: React.FC = React.memo(() => {
  return (
    <section id="demonstracao-produto" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 relative z-10 overflow-hidden text-white">
      {/* Title */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 mb-6 text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
          VEJA ALGUNS DOS TREINOS QUE VOCÊ IRÁ RECEBER
        </h2>
      </div>

      {/* Marquee Track 1 - Moving Left */}
      <div className="relative w-full overflow-hidden py-2 group">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#071A33] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#071A33] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 w-max animate-marquee-more hover:[animation-play-state:paused] will-change-transform transform-gpu [backface-visibility:hidden]">
          {duplicatedImages.map((imgUrl, index) => (
            <img
              key={`more-1-${index}`}
              src={imgUrl}
              alt={`Página real do material ${index + 1}`}
              className="h-[200px] sm:h-[260px] md:h-[300px] w-auto shrink-0 rounded-xl object-contain shadow-xl border border-white/10 bg-[#0D2B52] p-1"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Marquee Track 2 - Moving Right (Opposite Direction) */}
      <div className="relative w-full overflow-hidden py-2 mt-2 sm:mt-4 group">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#071A33] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#071A33] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] will-change-transform transform-gpu [backface-visibility:hidden]">
          {duplicatedSecondImages.map((imgUrl, index) => (
            <img
              key={`more-2-${index}`}
              src={imgUrl}
              alt={`Página demonstrativa ${index + 1}`}
              className="h-[200px] sm:h-[260px] md:h-[300px] w-auto shrink-0 rounded-xl object-contain shadow-xl border border-white/10 bg-[#0D2B52] p-1"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Explanatory text without card container */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6 text-center">
        <h3 className="text-lg sm:text-xl font-black italic uppercase text-[#FF7A00] tracking-tight">
          +700 TREINOS ILUSTRADOS E EXPLICADOS PASSO A PASSO
        </h3>
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
        @keyframes marqueeReverse {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-more {
          animation: marqueeMore 28s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marqueeReverse 28s linear infinite;
        }
      `}</style>
    </section>
  );
});

