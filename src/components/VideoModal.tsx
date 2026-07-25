import React, { useState } from 'react';
import { X, Play, Volume2, VolumeX, RotateCcw, CheckCircle } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title = 'Demonstração Prática de Treinamento'
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="bg-zinc-950 px-6 py-4 flex items-center justify-between border-b border-white/5">
          <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-ping" />
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {/* Background Motion Video Simulation Graphic */}
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-6 text-center">
            
            {/* Tactical Court Graphic */}
            <svg className="w-48 h-32 text-orange-600/30 mb-4 animate-pulse" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="5" width="190" height="110" rx="3" />
              <line x1="100" y1="5" x2="100" y2="115" />
              <circle cx="100" cy="60" r="25" />
              <path d="M 30 60 Q 60 30 100 60 T 170 60" stroke="#ea580c" strokeWidth="3" fill="none" />
            </svg>

            <div className="space-y-2 z-10">
              <span className="inline-block bg-orange-600 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                SESSÃO EM VÍDEO HD (EXEMPLO)
              </span>
              <p className="text-white text-sm font-semibold max-w-md">
                Exercício #01: Saque Flutuante + Recepção de Manchete em Velocidade
              </p>
            </div>
          </div>

          {/* Controls Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-orange-600 hover:bg-orange-500 transition-colors"
              >
                <Play className={`w-4 h-4 fill-black ${isPlaying ? 'opacity-90' : ''}`} />
              </button>
              <span className="font-mono">02:14 / 05:00</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 text-zinc-300 hover:text-white"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Video Info Footer */}
        <div className="p-5 bg-zinc-950 border-t border-white/5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
            <CheckCircle className="w-4 h-4" />
            <span>Sessões completas com diagramas explicativos e variações por categoria</span>
          </div>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Você terá acesso a sessões organizadas passo a passo com todo o material pronto para consultar no seu celular, tablet ou computador.
          </p>
        </div>

      </div>
    </div>
  );
};
