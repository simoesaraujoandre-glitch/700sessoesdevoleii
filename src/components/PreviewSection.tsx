import React, { useState } from 'react';
import { FileText, Play, CheckCircle2, Trophy, Volleyball } from 'lucide-react';

interface PreviewSectionProps {
  onSelectSession?: (session: any) => void;
}

const carouselImages1 = [
  'https://i.ibb.co/v60BVSyK/IMG-4991.jpg',
  'https://i.ibb.co/MD3cpYQq/IMG-4992.jpg',
  'https://i.ibb.co/Kck6hPL4/IMG-4993.jpg',
  'https://i.ibb.co/3YfxxGzC/IMG-4994.jpg',
  'https://i.ibb.co/Fk80WjzY/IMG-4995.jpg',
  'https://i.ibb.co/6zLJV4J/IMG-4996.jpg',
  'https://i.ibb.co/Ps3XhsYh/IMG-4997.jpg',
];

const carouselImages2 = [
  'https://i.ibb.co/Zzg8HYnm/IMG-4998.jpg',
  'https://i.ibb.co/BK7wLwQg/IMG-4999.jpg',
  'https://i.ibb.co/NdGpcsB7/IMG-5001.jpg',
  'https://i.ibb.co/JwG845B0/IMG-5002.jpg',
  'https://i.ibb.co/5gMv3RX4/IMG-5003.jpg',
];

const duplicatedImages1 = [...carouselImages1, ...carouselImages1];
const duplicatedImages2 = [...carouselImages2, ...carouselImages2, ...carouselImages2];

export const PreviewSection: React.FC<PreviewSectionProps> = React.memo(() => {
  // Track failed images to display a rich custom fallback preview card
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const renderCardContent = (imgUrl: string, index: number, rowKey: string) => {
    const cardId = `${rowKey}-${index}-${imgUrl}`;
    const hasFailed = failedImages[cardId];

    if (hasFailed) {
      return (
        <div className="w-full h-full p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 flex flex-col justify-between border border-orange-500/30 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="bg-orange-600 text-black font-black text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
                SESSÃO #{(index % 12) + 1}
              </span>
              <div className="flex items-center gap-1 text-xs text-orange-400 font-bold">
                <FileText className="w-3.5 h-3.5" />
                <span>PDF PRONTO</span>
              </div>
            </div>

            <h4 className="text-white font-black italic text-sm sm:text-base uppercase leading-tight">
              Apostila Completa de Treino de Vôlei
            </h4>

            <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
              Ficha detalhada com aquecimento, objetivos técnicos, rotações e ilustrações táticas de quadra.
            </p>
          </div>

          <div className="space-y-2 pt-3 border-t border-white/10">
            <div className="flex items-center justify-between text-[11px] text-zinc-300">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> 4 Exercícios Práticos
              </span>
              <span className="font-mono text-orange-400 font-bold">60 MIN</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-lg p-2.5 text-[11px] text-zinc-400 font-mono text-center border border-white/5">
              [ DIAGRAMA TÁTICO DE QUADRA ]
            </div>
          </div>
        </div>
      );
    }

    return (
      <img
        src={imgUrl}
        alt={`Demonstração do Produto ${index + 1}`}
        className="h-full w-full object-cover sm:object-contain rounded-2xl"
        width={320}
        height={460}
        loading="lazy"
        decoding="async"
        onError={() => handleImageError(cardId)}
      />
    );
  };

  return (
    <section id="preview-section" className="py-16 md:py-24 bg-zinc-950 border-b border-white/5 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            Demonstração do Produto
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Confira uma prévia real do material completo que você receberá imediatamente após a confirmação.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Carousels Container */}
      <div className="space-y-6">
        {/* Carousel 1 (Scrolling Left) */}
        <div className="relative w-full overflow-hidden py-2 group">
          {/* Gradient Edge Blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

          {/* Carousel Track */}
          <div className="flex gap-4 sm:gap-6 w-max animate-marquee hover:[animation-play-state:paused] will-change-transform">
            {duplicatedImages1.map((imgUrl, index) => (
              <div
                key={`c1-${index}`}
                className="relative shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl w-[220px] sm:w-[280px] md:w-[320px] h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center"
              >
                {renderCardContent(imgUrl, index, 'row1')}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel 2 (Scrolling Right - Opposite Direction) */}
        <div className="relative w-full overflow-hidden py-2 group">
          {/* Gradient Edge Blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

          {/* Carousel Track */}
          <div className="flex gap-4 sm:gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] will-change-transform">
            {duplicatedImages2.map((imgUrl, index) => (
              <div
                key={`c2-${index}`}
                className="relative shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl w-[220px] sm:w-[280px] md:w-[320px] h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center"
              >
                {renderCardContent(imgUrl, index, 'row2')}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation for infinite seamless scrolling */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
      `}</style>
    </section>
  );
});

