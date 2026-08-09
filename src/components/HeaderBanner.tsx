import React from 'react';

interface HeaderBannerProps {
  text?: string;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = React.memo(({ text }) => {
  return (
    <div
      id="header-banner"
      className="bg-[#FF7A00] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-black italic uppercase tracking-wider shadow-lg flex flex-wrap items-center justify-center gap-2 sm:gap-4 relative z-20"
    >
      <div className="flex items-center gap-2">
        <span>{text || 'DESCONTO ESPECIAL • ACESSO IMEDIATO • MATERIAL EM PDF'}</span>
      </div>
    </div>
  );
});



