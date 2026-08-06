import React from 'react';

const row1Images = [
  'https://i.ibb.co/60CQ23x8/IMG-5307.jpg',
  'https://i.ibb.co/sdMG25yg/IMG-5309.jpg',
  'https://i.ibb.co/GQWXkpWx/IMG-5311.jpg',
  'https://i.ibb.co/jkVHfSLW/IMG-5308.jpg',
  'https://i.ibb.co/hRHwVLwB/IMG-5310.jpg',
  'https://i.ibb.co/SXtQrLPn/IMG-5313.jpg'
];

const row2Images = [
  'https://i.ibb.co/nThRFPW/IMG-5312.jpg',
  'https://i.ibb.co/Lzyrcqtg/IMG-5314.jpg',
  'https://i.ibb.co/m5XPJd7K/IMG-5315.jpg',
  'https://i.ibb.co/rKtNMYGF/IMG-5316.jpg',
  'https://i.ibb.co/6J40LK39/IMG-5317.jpg',
  'https://i.ibb.co/60CQ23x8/IMG-5307.jpg'
];

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

          <div className="flex gap-4 sm:gap-6 w-max animate-marquee-left hover:[animation-play-state:paused] will-change-transform">
            {duplicatedRow1.map((imgUrl, index) => (
              <img
                key={`r1-${index}`}
                src={imgUrl}
                alt={`Demonstração PDF Cima ${index + 1}`}
                className="h-[240px] sm:h-[300px] md:h-[360px] w-auto shrink-0 rounded-xl object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="relative w-full overflow-hidden py-1 group">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

          <div className="flex gap-4 sm:gap-6 w-max animate-marquee-right hover:[animation-play-state:paused] will-change-transform">
            {duplicatedRow2.map((imgUrl, index) => (
              <img
                key={`r2-${index}`}
                src={imgUrl}
                alt={`Demonstração PDF Baixo ${index + 1}`}
                className="h-[240px] sm:h-[300px] md:h-[360px] w-auto shrink-0 rounded-xl object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
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
