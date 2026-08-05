import React from 'react';
import { Layers, Library, Target, Smartphone } from 'lucide-react';

const featureCards = [
  {
    icon: Layers,
    emoji: '🏐',
    title: 'Sessões prontas para aplicar',
    description: 'Tenha diferentes opções de treinamento para trabalhar fundamentos, situações de jogo e objetivos específicos com sua equipe.'
  },
  {
    icon: Library,
    emoji: '📚',
    title: 'Sessões organizadas por objetivo e nível',
    description: 'Encontre com mais facilidade o tipo de treinamento que você procura, desde trabalhos de base até sessões voltadas ao desenvolvimento e rendimento.'
  },
  {
    icon: Target,
    emoji: '🎯',
    title: 'Exercícios com orientação de aplicação',
    description: 'Cada sessão apresenta as informações necessárias para entender o objetivo do treino, sua organização e como desenvolvê-lo na quadra.'
  },
  {
    icon: Smartphone,
    emoji: '📱',
    title: 'Acesso pelo celular, tablet ou computador',
    description: 'Receba o material em PDF e consulte suas sessões onde estiver, sempre que precisar.'
  }
];

export const WhatYouReceive: React.FC = React.memo(() => {
  return (
    <section id="what-you-receive" className="py-16 md:py-24 bg-zinc-950 relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
            O que você vai receber
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-zinc-400 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
              Um acervo completo de sessões de vôlei organizado para ajudar você a planejar seus treinamentos sem precisar começar do zero toda vez.
            </p>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-900/80 border border-white/10 hover:border-orange-600/50 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group hover:-translate-y-1"
              >
                <div>
                  {/* Header / Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-black shadow-[0_0_20px_rgba(234,88,12,0.3)] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className="text-2xl">{card.emoji}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base sm:text-lg font-black italic uppercase tracking-tight text-white mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {card.description}
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

