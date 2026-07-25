import React from 'react';
import { X, Video, Clock, CheckCircle2, Play } from 'lucide-react';
import { TrainingSession } from '../types';

interface SessionDetailModalProps {
  session: TrainingSession | null;
  onClose: () => void;
  onOpenVideo: () => void;
}

export const SessionDetailModal: React.FC<SessionDetailModalProps> = ({
  session,
  onClose,
  onOpenVideo
}) => {
  if (!session) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white font-black text-xs px-2.5 py-1 rounded uppercase">
              SESSÃO #{session.number}
            </span>
            <span className="text-xs font-bold text-slate-400 font-mono">
              {session.duration}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Title & Category */}
          <div>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">
              {session.category}
            </span>
            <h3 className="text-xl font-black text-white leading-tight">
              {session.title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              {session.description}
            </p>
          </div>

          {/* Objectives */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Objetivos da Sessão:
            </h4>
            <div className="space-y-2">
              {session.objectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Drill Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Estrutura dos Exercícios ({session.drills.length} etapas):
            </h4>

            <div className="space-y-2.5">
              {session.drills.map((drill, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-400 block">
                      {idx + 1}. {drill.name}
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {drill.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-1 rounded text-[10px] font-mono font-bold text-slate-300 shrink-0">
                    <Clock className="w-3 h-3 text-orange-400" />
                    {drill.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenVideo();
            }}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-lg transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>VER DEMONSTRAÇÃO E SESSÕES ORGANIZADAS</span>
          </button>
        </div>

      </div>
    </div>
  );
};
