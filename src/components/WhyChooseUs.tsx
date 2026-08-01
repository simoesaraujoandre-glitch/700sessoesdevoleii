import React from 'react';
import { Clock, Lightbulb, Flame, LayoutGrid, Trophy } from 'lucide-react';

const items = [
  {
    icon: Clock,
    text: 'Economize horas de planejamento toda semana.'
  },
  {
    icon: Lightbulb,
    text: 'Nunca mais vai ficar sem ideias.'
  },
  {
    icon: Flame,
    text: 'Aumente a motivação dos seus jogadores.'
  },
  {
    icon: LayoutGrid,
    text: 'Organize temporadas completas.'
  },
  {
    icon: Trophy,
    text: 'Treine com metodologia profissional.'
  }
];

export const WhyChooseUs: React.FC = React.memo(() => {

  return (
    <section id="why-choose-us" className="py-16 md:py-20 bg-zinc-950 border-b border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            Por Que Escolher Nosso Material?
          </h2>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-900/90 border border-white/10 hover:border-orange-600/50 rounded-xl p-5 sm:p-6 flex items-center gap-4 shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-600/30 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-600 group-hover:text-black transition-all">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <p className="text-zinc-200 text-sm sm:text-base font-semibold leading-snug">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});
