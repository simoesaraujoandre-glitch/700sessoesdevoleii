import React from 'react';
import { BookOpen, CheckCircle, Play } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'ABRA',
    description: 'Acesse os +700 treinos organizados em um único material.',
    icon: BookOpen
  },
  {
    number: '02',
    title: 'ESCOLHA',
    description: 'Escolha o treino de acordo com o nível e o objetivo da sua turma.',
    icon: CheckCircle
  },
  {
    number: '03',
    title: 'APLIQUE',
    description: 'Leve o treino direto para a quadra seguindo as orientações e ilustrações.',
    icon: Play
  }
];

export const HowItWorksSection: React.FC = React.memo(() => {
  return (
    <section id="como-funciona" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 text-white relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <span className="text-[#1677FF] font-black italic uppercase text-xs tracking-wider">
            COMO FUNCIONA
          </span>
          <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-white">
            ABRA. ESCOLHA. APLIQUE.
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#0D2B52] border border-white/10 hover:border-[#1677FF]/50 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col items-center justify-between space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black italic text-[#FF7A00]">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#1677FF]/20 border border-[#1677FF]/40 flex items-center justify-center text-[#1677FF]">
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                <h3 className="text-xl font-black italic uppercase text-white tracking-tight">
                  {step.title}
                </h3>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <p className="text-base sm:text-lg font-black italic uppercase tracking-wider text-[#FF7A00]">
            Simples, rápido e prático.
          </p>
        </div>

      </div>
    </section>
  );
});

