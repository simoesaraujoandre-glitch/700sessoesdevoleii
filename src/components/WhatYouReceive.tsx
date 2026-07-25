import React from 'react';
import { BookOpen, Calendar, Users, CheckCircle2 } from 'lucide-react';

export const WhatYouReceive: React.FC = () => {
  const cards = [
    {
      icon: BookOpen,
      title: '700 Sessões Completas',
      description: 'Sessões prontas para aplicar, organizadas com objetivos claros e progressão de aprendizagem.',
      bullets: [
        'Treinos desenvolvidos para diferentes níveis, do iniciante ao avançado, facilitando a evolução dos atletas.',
        'Material digital disponível para celular, tablet ou computador, com acesso vitalício.'
      ]
    },
    {
      icon: Calendar,
      title: 'Planejamentos Passo a Passo',
      description: 'Sessões completas que facilitam a organização de toda a temporada.',
      bullets: [
        'Diferentes níveis de dificuldade',
        'Resultados mensuráveis',
        'Fácil implementação'
      ]
    },
    {
      icon: Users,
      title: 'Para Todas as Equipes',
      description: 'Ideal para treinadores, academias e clubes esportivos.',
      bullets: [
        'Categorias infantis',
        'Categorias juvenis',
        'Equipes adultas'
      ]
    }
  ];

  return (
    <section id="what-you-receive" className="py-16 md:py-24 bg-zinc-950 relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            O Que Você Vai Receber
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Tudo o que você precisa para treinar como um profissional.
          </p>
        </div>

        {/* 3 Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-900/80 border border-white/10 hover:border-orange-600/50 rounded-2xl p-6 sm:p-7 shadow-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center text-black mb-5 shadow-[0_0_20px_rgba(234,88,12,0.3)] group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-black italic uppercase tracking-tight text-white mb-2">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  {/* Bullet Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {card.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
