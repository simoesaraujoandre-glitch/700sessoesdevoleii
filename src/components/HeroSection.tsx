import React, { useState } from 'react';
import { ShieldCheck, Play, FileText, Volleyball, CheckCircle2 } from 'lucide-react';
import { heroMediaThumb } from '../data/content';

interface HeroSectionProps {
  headline: string;
  subtitle: string;
  ctaText: string;
  checkoutUrl: string;
  countdownMinutes: number;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subtitle,
  ctaText,
  checkoutUrl,
  countdownMinutes,
  onOpenVideo
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero-section" className="relative overflow-hidden bg-zinc-950 pt-10 pb-16 md:pt-16 md:pb-24 border-b border-white/5">
      {/* Background court grid and ambient glow effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        
        {/* Main Headline */}
        <h1 id="hero-headline" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tighter text-white">
          {headline}
        </h1>

        {/* Image Mockup directly below H1 */}
        <div className="py-2 flex justify-center">
          {!imgError ? (
            <img
              id="hero-video-frame"
              src={heroMediaThumb}
              alt="Mockup do Treinamento"
              onClick={onOpenVideo}
              onError={() => setImgError(true)}
              loading="eager"
              decoding="async"
              className="w-full max-w-[560px] h-auto object-contain cursor-pointer hover:scale-[1.02] transition-transform duration-300 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] mx-auto"
            />
          ) : (
            <div
              onClick={onOpenVideo}
              className="w-full max-w-[560px] bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-orange-500/40 rounded-2xl p-6 sm:p-8 cursor-pointer hover:scale-[1.01] transition-all shadow-[0_0_50px_rgba(234,88,12,0.2)] text-left relative overflow-hidden group mx-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-orange-600 text-black font-black text-xs px-3 py-1 rounded uppercase tracking-wider">
                  +700 SESSÕES
                </span>
                <span className="text-orange-400 font-bold text-xs flex items-center gap-1.5 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  <Play className="w-3.5 h-3.5 fill-current" /> CLIQUE PARA VER VÍDEO
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black italic text-white uppercase mb-2">
                PACOTE COMPLETO DE TREINAMENTOS DE VÔLEI
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mb-4">
                Receba acesso digital instantâneo a +700 sessões práticas com objetivos, tempos e material organizado.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-zinc-300 pt-3 border-t border-white/10">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Acesso Imediato</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Formato PDF</span>
              </div>
            </div>
          )}
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
};

