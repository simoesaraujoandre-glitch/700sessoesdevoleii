import React from 'react';
import { ShieldCheck } from 'lucide-react';
import mockupImg from '../assets/images/mockupp-removebg-preview.png';

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
    <section id="hero-section" className="relative overflow-hidden bg-zinc-950 pt-8 pb-10 md:pt-12 md:pb-14 border-b border-white/5">
      {/* Background court grid and ambient glow effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        
        {/* Main Headline */}
        <h1 id="hero-headline" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tighter text-white">
          {headline}
        </h1>

        {/* Hero Mockup Image */}
        <div className="py-2 flex justify-center">
          <div className="relative mx-auto max-w-[420px] sm:max-w-[520px] w-full flex justify-center items-center">
            {/* Ambient glow behind mockup */}
            <div className="absolute inset-0 bg-orange-600/25 rounded-full blur-3xl pointer-events-none" />
            
            <img
              src={mockupImg}
              alt="Mockup do Produto"
              width={520}
              height={350}
              className="relative z-10 w-full max-w-[450px] sm:max-w-[520px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(234,88,12,0.35)]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p id="hero-subtitle" className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

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
              className="group relative inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-black font-black italic uppercase text-lg sm:text-xl px-10 py-4.5 rounded-sm shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center tracking-tight border border-orange-400/40"
            >
              <span className="relative z-10 drop-shadow-sm">{ctaText}</span>
              <div className="absolute inset-0 rounded-sm bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Acesso instantâneo via e-mail • Pagamento 100% seguro</span>
          </div>
        </div>

      </div>
    </section>
  );
});

