import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../data/content';

const avatarImages = [
  '/images/t1.webp',
  '/images/t2.webp',
  '/images/t3.webp',
  '/images/t4.webp',
  '/images/t5.webp',
];

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export const TestimonialsSection: React.FC = React.memo(() => {
  return (
    <section id="depoimentos" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 relative z-10 overflow-hidden text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            O QUE DIZEM OUTROS PROFESSORES E TREINADORES
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Testimonials Marquee */}
      <div className="relative w-full overflow-hidden py-4 group">
        {/* Gradient Edge Blurs */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#0D2B52] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#0D2B52] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] sm:w-[360px] shrink-0 bg-[#071A33] border border-white/10 hover:border-[#FF7A00]/50 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between group/card"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FF7A00]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF7A00]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-600 group-hover/card:text-[#FF7A00]/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-zinc-200 text-sm sm:text-base font-medium italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={item.avatar || avatarImages[(item.id - 1) % avatarImages.length]}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#FF7A00] shrink-0"
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
                  <span className="text-xs text-zinc-300 font-medium truncate block">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
});

