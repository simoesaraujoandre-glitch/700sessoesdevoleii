import React, { useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

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
  useEffect(() => {
    if (isOpen) {
      // Dynamically load Wistia scripts only when the user opens the modal
      if (!document.querySelector('script[src*="fast.wistia.com/player.js"]')) {
        const s1 = document.createElement('script');
        s1.src = 'https://fast.wistia.com/player.js';
        s1.async = true;
        document.head.appendChild(s1);
      }
      if (!document.querySelector('script[src*="fast.wistia.com/embed/socq98yhri.js"]')) {
        const s2 = document.createElement('script');
        s2.src = 'https://fast.wistia.com/embed/socq98yhri.js';
        s2.async = true;
        s2.type = 'module';
        document.head.appendChild(s2);
      }
    }
  }, [isOpen]);

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

        {/* Video Player Box */}
        <div className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto bg-black flex items-center justify-center overflow-hidden my-4 rounded-xl border border-orange-500/30 p-1">
          <wistia-player media-id="socq98yhri" aspect="0.5625"></wistia-player>
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
