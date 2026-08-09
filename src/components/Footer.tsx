import React from 'react';

interface FooterProps {
  onOpenEdit?: () => void;
}

export const Footer: React.FC<FooterProps> = React.memo(({ onOpenEdit }) => {
  return (
    <footer id="footer" className="py-10 bg-[#071A33] border-t border-white/10 text-center text-zinc-300 text-xs sm:text-sm space-y-4 relative z-10">
      <div className="max-w-4xl mx-auto px-4 space-y-3">
        <h3 className="text-base sm:text-lg font-black italic uppercase tracking-wider text-white">
          +700 TREINOS PRONTOS DE VÔLEI
        </h3>
        
        <p className="text-zinc-300 max-w-xl mx-auto text-xs sm:text-sm">
          Material exclusivo para professores, treinadores e acadêmicos de Educação Física.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
          <span>Avisos Legais</span>
          <span>•</span>
          <span>Termos de Uso</span>
          <span>•</span>
          <span>Política de Privacidade</span>
        </div>

        <p className="text-zinc-400 text-xs pt-2">
          © {new Date().getFullYear()} +700 Treinos Prontos de Vôlei. Todos os direitos reservados.
        </p>

        {onOpenEdit && (
          <div className="pt-2">
            <button
              onClick={onOpenEdit}
              className="text-zinc-500 hover:text-zinc-300 text-[11px] transition-colors"
            >
              Configurações da Página
            </button>
          </div>
        )}
      </div>
    </footer>
  );
});

