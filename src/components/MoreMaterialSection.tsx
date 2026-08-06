import React from 'react';

const materialImages = [
  'https://i.ibb.co/7dvHN9sf/IMG-5306.jpg',
  'https://i.ibb.co/hF85LS4N/IMG-5305.jpg',
  'https://i.ibb.co/39wv14G7/IMG-5304.jpg',
  'https://i.ibb.co/HTYBD90t/IMG-5302.jpg',
  'https://i.ibb.co/XfhwTBXS/IMG-5301.jpg',
  'https://i.ibb.co/bRmcTXsZ/IMG-5300.jpg',
  'https://i.ibb.co/8LZC4fCq/IMG-5298.jpg',
  'https://i.ibb.co/cX804rYh/IMG-5296.jpg',
  'https://i.ibb.co/spjBy50z/IMG-5295.jpg',
  'https://i.ibb.co/9mwKxJ86/IMG-5297.jpg',
  'https://i.ibb.co/JWy4N99J/IMG-5294.jpg'
];

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
