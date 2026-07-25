import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes?: number;
  className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialMinutes = 11,
  className = ''
}) => {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60 + 52);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : initialMinutes * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, [initialMinutes]);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div
      id="countdown-timer-box"
      className={`inline-flex items-center gap-2.5 bg-slate-900/90 border border-slate-700/80 rounded-lg px-3.5 py-2 text-slate-200 text-xs sm:text-sm font-medium shadow-inner ${className}`}
    >
      <Clock className="w-4 h-4 text-orange-400 animate-spin" style={{ animationDuration: '6s' }} />
      <span>A oferta termina em:</span>
      <div className="font-mono font-bold text-orange-400 bg-slate-950 px-2 py-0.5 rounded border border-orange-500/20 tracking-wider">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </div>
    </div>
  );
};
