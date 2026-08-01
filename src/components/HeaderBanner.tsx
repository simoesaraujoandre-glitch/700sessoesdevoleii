import React, { useState, useEffect } from 'react';

interface HeaderBannerProps {
  text?: string;
  countdownMinutes?: number;
}

function getFormattedTodayDate(): string {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = React.memo(({ text }) => {
  const [currentDate, setCurrentDate] = useState<string>(getFormattedTodayDate);

  useEffect(() => {
    // Update date automatically when day changes
    const interval = setInterval(() => {
      setCurrentDate(getFormattedTodayDate());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="header-banner"
      className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 text-zinc-950 py-2.5 px-4 text-center text-xs sm:text-sm font-black italic uppercase tracking-wider shadow-lg border-b border-orange-500/30 flex flex-wrap items-center justify-center gap-2 sm:gap-4 relative z-20"
    >
      <div className="flex items-center gap-1.5">
        <span>{text || 'DESCONTO EXCLUSIVO SÓ HOJE'} • {currentDate}</span>
      </div>
    </div>
  );
});


