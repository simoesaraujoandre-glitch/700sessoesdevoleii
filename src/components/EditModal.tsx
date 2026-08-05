import React, { useState } from 'react';
import { X, Save, Settings, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SalesPageConfig } from '../types';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SalesPageConfig;
  onSave: (newConfig: SalesPageConfig) => void;
  onReset: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset
}) => {
  const [form, setForm] = useState<SalesPageConfig>({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'countdownMinutes' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2 text-white font-bold">
            <Settings className="w-5 h-5 text-orange-400" />
            <span>Editar Textos, Preços e Links de Checkout</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto">
          
          {savedSuccess && (
            <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-3 rounded-xl flex items-center gap-2 text-xs font-bold animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Alterações salvas com sucesso! A página foi atualizada.</span>
            </div>
          )}

          {/* Headline */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase">
              Título Principal da Oferta
            </label>
            <input
              type="text"
              name="heroHeadline"
              value={form.heroHeadline}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:border-orange-500 focus:outline-none"
            />
          </div>

          {/* Subtitle */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase">
              Subtítulo
            </label>
            <textarea
              name="heroSubtitle"
              rows={2}
              value={form.heroSubtitle}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:border-orange-500 focus:outline-none resize-none"
            />
          </div>

          {/* Pricing Grid Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
            {/* Basic Plan */}
            <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-black text-slate-400 uppercase">
                PLANO BÁSICO
              </span>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-400">Preço Atual</label>
                <input
                  type="text"
                  name="basicPlanPrice"
                  value={form.basicPlanPrice}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-400">Link de Checkout (Kiwify, Hotmart...)</label>
                <input
                  type="text"
                  name="basicPlanCheckoutUrl"
                  value={form.basicPlanCheckoutUrl}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Complete Plan */}
            <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-orange-500/30">
              <span className="text-xs font-black text-orange-400 uppercase">
                PLANO COMPLETO (RECOMENDADO)
              </span>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-400">Preço Atual</label>
                <input
                  type="text"
                  name="completePlanPrice"
                  value={form.completePlanPrice}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-400">Link de Checkout (Kiwify, Hotmart...)</label>
                <input
                  type="text"
                  name="completePlanCheckoutUrl"
                  value={form.completePlanCheckoutUrl}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Hero CTA Button Text */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase">
              Texto do Botão CTA
            </label>
            <input
              type="text"
              name="heroCtaText"
              value={form.heroCtaText}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white text-xs focus:border-orange-500 focus:outline-none"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                onReset();
                setForm({ ...config });
              }}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold py-2.5 px-4 rounded-xl transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restaurar Padrão</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Alterações</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
