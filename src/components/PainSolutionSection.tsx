import React from 'react';
import { Clock, ClipboardList, RotateCcw } from 'lucide-react';

export const PainSolutionSection: React.FC = React.memo(() => {
  return (
    <section id="dor-solucao" className="py-8 md:py-12 bg-[#071A33] text-white relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white leading-tight">
            VOCÊ NÃO PRECISA PERDER SEU TEMPO MONTANDO CADA TREINO DO ZERO
          </h2>
        </div>

        {/* 3 Dores */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-2">
          <div className="bg-[#0D2B52] border border-white/10 hover:border-[#FF7A00]/40 rounded-2xl p-5 text-center flex flex-col items-center space-y-3 transition-all duration-300 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00]">
              <Clock className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h3 className="text-base font-black italic uppercase text-white tracking-tight">
              PERDER HORAS PLANEJANDO
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Chega de passar horas pensando no próximo treino.
            </p>
          </div>

          <div className="bg-[#0D2B52] border border-white/10 hover:border-[#FF7A00]/40 rounded-2xl p-5 text-center flex flex-col items-center space-y-3 transition-all duration-300 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00]">
              <ClipboardList className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h3 className="text-base font-black italic uppercase text-white tracking-tight">
              CRIAR UM TREINO NOVO TODA VEZ
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Você não precisa montar um treino do zero para cada aula.
            </p>
          </div>

          <div className="bg-[#0D2B52] border border-white/10 hover:border-[#FF7A00]/40 rounded-2xl p-5 text-center flex flex-col items-center space-y-3 transition-all duration-300 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00]">
              <RotateCcw className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h3 className="text-base font-black italic uppercase text-white tracking-tight">
              FICAR REPETINDO OS MESMOS TREINOS
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Tenha centenas de opções para variar seus treinamentos.
            </p>
          </div>
        </div>

        {/* Solução em layout limpo */}
        <div className="text-center space-y-3 pt-2">
          <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight text-white leading-tight">
            NÓS JÁ ESTRUTURAMOS TUDO PARA VOCÊ
          </h3>

          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            São <strong className="text-[#FF7A00] font-black">mais de 700 treinos prontos de vôlei</strong>, do básico ao avançado. É só abrir, escolher o treino e aplicar direto na quadra.
          </p>
        </div>

      </div>
    </section>
  );
});



