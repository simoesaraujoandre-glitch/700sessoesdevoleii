import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

interface HeroSectionProps {
  headline: string;
  subtitle: string;
  ctaText: string;
  checkoutUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = React.memo(({
  headline,
  subtitle,
  ctaText,
}) => {

  return (
    <section id="hero-section" className="relative overflow-hidden bg-[#071A33] pt-8 pb-12 md:pt-12 md:pb-16 border-b border-white/10">
      {/* Background glow effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#1677FF]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#FF7A00]/15 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1677FF]/20 border border-[#1677FF]/40 text-[#1677FF] font-black italic uppercase text-xs sm:text-sm tracking-wide">
          PARA PROFESSORES E TREINADORES DE VÔLEI
        </div>

        {/* Main Headline */}
        <h1 id="hero-headline" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.08] tracking-tighter text-white">
          {headline}
        </h1>

        {/* Subtitle */}
        <p id="hero-subtitle" className="text-zinc-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Hero Mockup Image */}
        <div className="py-2 flex justify-center">
          <div className="relative mx-auto max-w-[420px] sm:max-w-[540px] w-full flex justify-center items-center">
            <div className="absolute inset-0 bg-[#FF7A00]/20 rounded-full blur-3xl pointer-events-none" />
            
            <img
              src="/images/hero_mockup.webp"
              alt="Mockup do Produto"
              width={540}
              height={360}
              className="relative z-10 w-full max-w-[460px] sm:max-w-[540px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(255,122,0,0.3)]"
              loading="eager"
            />
          </div>
        </div>

        {/* Bullet List */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-1 text-sm sm:text-base font-bold text-white">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-black shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span>+700 treinos prontos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-black shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span>Do básico ao avançado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-black shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span>Ilustrados e explicados passo a passo</span>
          </div>
        </div>

        {/* CTA Action Area */}
        <div className="pt-2 space-y-4">
          <div className="flex items-center justify-center">
            <a
              id="hero-cta-button"
              href="#planos"
              onClick={(e) => {
                const el = document.getElementById('planos');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative inline-flex items-center justify-center bg-[#FF7A00] hover:bg-[#e66e00] text-white font-black italic uppercase text-lg sm:text-xl px-10 py-4.5 rounded-md shadow-[0_0_35px_rgba(255,122,0,0.5)] hover:shadow-[0_0_50px_rgba(255,122,0,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center tracking-tight border border-[#FF7A00]/60"
            >
              <span className="relative z-10 drop-shadow-sm">{ctaText}</span>
              <div className="absolute inset-0 rounded-md bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Acesso imediato • Pagamento seguro • Garantia de 7 dias</span>
          </div>
        </div>

      </div>
    </section>
  );
});


