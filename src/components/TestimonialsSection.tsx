import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  // Duplicate testimonials array to ensure seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials-section" className="py-16 md:py-24 bg-zinc-950 border-b border-white/5 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            O Que Dizem Os Treinadores
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Avaliações e depoimentos reais de quem aplica as sessões de treinamento diariamente.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Testimonials Marquee */}
      <div className="relative w-full overflow-hidden py-4 group">
        {/* Gradient Edge Blurs */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] sm:w-[360px] shrink-0 bg-zinc-900 border border-white/10 hover:border-orange-500/50 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between group/card"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-700 group-hover/card:text-orange-500/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-zinc-300 text-sm sm:text-base font-medium italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-orange-600/80 shrink-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-sm truncate">
                      {item.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <span className="text-xs text-zinc-400 font-medium truncate block">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation Style */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};
