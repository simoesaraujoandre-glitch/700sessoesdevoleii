import React from 'react';
import { Clock, Layers, Target, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    emoji: '⏱️',
    title: 'Economize horas de planejamento',
    description: 'Pare de gastar seu tempo procurando exercícios e tentando montar cada sessão do zero. Tenha centenas de opções prontas para consultar quando precisar.'
  },
  {
    icon: Layers,
    emoji: '🏐',
    title: 'Amplie seu repertório de treinos',
    description: 'Tenha mais variedade para trabalhar diferentes fundamentos, situações de jogo e objetivos — sem depender sempre dos mesmos exercícios.'
  },
  {
    icon: Target,
    emoji: '🎯',
    title: 'Treine com mais propósito',
    description: 'Escolha sessões de acordo com aquilo que você quer desenvolver na sua equipe e tenha uma estrutura para orientar o trabalho na quadra.'
  },
  {
    icon: TrendingUp,
    emoji: '📈',
    title: 'Use seu tempo para desenvolver seus atletas',
    description: 'Quanto menos tempo você precisa gastar montando o próximo treino, mais tempo e energia pode dedicar ao que realmente importa: observar, corrigir e desenvolver seus atletas.'
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

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-900/90 border border-white/10 hover:border-orange-600/50 rounded-2xl p-6 sm:p-7 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-600/10 border border-orange-600/30 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-600 group-hover:text-black transition-all shadow-[0_0_15px_rgba(234,88,12,0.15)]">
                      <Icon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className="text-2xl">{item.emoji}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black italic uppercase tracking-tight text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});

