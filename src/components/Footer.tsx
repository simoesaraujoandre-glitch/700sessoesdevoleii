import React from 'react';

interface FooterProps {
  onOpenEdit?: () => void;
}

export const Footer: React.FC<FooterProps> = React.memo(({ onOpenEdit }) => {
  return (
    <footer id="footer" className="py-8 bg-zinc-950 border-t border-white/5 text-center text-zinc-500 text-xs font-medium space-y-4 relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Treinamentos de Vôlei. Todos os direitos reservados.</p>
        {onOpenEdit && (
          <button
            onClick={onOpenEdit}
            className="text-zinc-600 hover:text-zinc-400 text-[11px] transition-colors"
          >
            Configurações da Página
          </button>
        )}
      </div>
    </footer>
  );
});
