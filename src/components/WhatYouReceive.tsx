import React from 'react';
import { Layers, TrendingUp, LayoutGrid, CheckCircle2, Smartphone } from 'lucide-react';

const items = [
  {
    icon: Layers,
    title: '+700 TREINOS PRONTOS',
    description: 'Mais de 700 treinos para trabalhar diferentes fundamentos, objetivos e situações de treinamento.'
  },
  {
    icon: TrendingUp,
    title: 'DO BÁSICO AO AVANÇADO',
    description: 'Encontre treinos para diferentes níveis de desenvolvimento dos seus atletas.'
  },
  {
    icon: LayoutGrid,
    title: 'TREINOS ILUSTRADOS',
    description: 'Veja visualmente como cada atividade deve ser organizada dentro da quadra.'
  },
  {
    icon: CheckCircle2,
    title: 'PASSO A PASSO',
    description: 'Entenda a proposta e a execução de cada treino de forma simples.'
  },
  {
    icon: Smartphone,
    title: 'ACESSO DIGITAL',
    description: 'Receba o material em PDF e consulte pelo celular, tablet ou computador.'
  }
];

export const WhatYouReceive: React.FC = React.memo(() => {
  return (
    <section id="o-que-voce-encontra" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 relative z-10 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-[#1677FF] font-black italic uppercase text-xs tracking-wider">
            O QUE VOCÊ ENCONTRA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white max-w-3xl mx-auto leading-tight">
            +700 TREINOS ORGANIZADOS PARA FACILITAR SUA ROTINA
          </h2>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D2B52] border border-white/10 hover:border-[#1677FF]/50 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1677FF]/20 border border-[#1677FF]/40 flex items-center justify-center text-[#1677FF] group-hover:bg-[#FF7A00] group-hover:text-white transition-colors mb-4 shadow-md">
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black italic uppercase tracking-tight text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
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



