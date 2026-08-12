/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, lazy, Suspense } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { PainSolutionSection } from './components/PainSolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { MoreMaterialSection } from './components/MoreMaterialSection';
import { WhatYouReceive } from './components/WhatYouReceive';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

import { defaultConfig } from './data/content';
import { SalesPageConfig } from './types';

const EditModal = lazy(() => import('./components/EditModal').then(m => ({ default: m.EditModal })));

const STORAGE_KEY = 'treinamentos_volei_config_v2';

export default function App() {
  const [config, setConfig] = useState<SalesPageConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultConfig, ...parsed };
      }
      return defaultConfig;
    } catch (e) {
      return defaultConfig;
    }
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenEdit = useCallback(() => setIsEditModalOpen(true), []);
  const handleCloseEdit = useCallback(() => setIsEditModalOpen(false), []);

  const handleSaveConfig = useCallback((newConfig: SalesPageConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.error('Failed to save config', e);
    }
  }, []);

  const handleResetConfig = useCallback(() => {
    setConfig(defaultConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to reset config', e);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#071A33] text-white font-sans selection:bg-[#FF7A00] selection:text-black antialiased relative">
      
      {/* 1. BARRA SUPERIOR */}
      <HeaderBanner text={config.announcementText} />

      {/* 2. HERO */}
      <HeroSection
        headline={config.heroHeadline}
        subtitle={config.heroSubtitle}
        ctaText={config.heroCtaText}
        checkoutUrl={config.completePlanCheckoutUrl}
      />

      {/* 3. DEMONSTRAÇÃO DO PRODUTO (Fotos reais do material) — logo após o Hero, pra gerar valor de cara */}
      <MoreMaterialSection />

      {/* 4. A REALIDADE DE QUEM PLANEJA TREINOS (Dor & Solução) */}
      <PainSolutionSection />

      {/* 5. COMO FUNCIONA */}
      <HowItWorksSection />

      {/* 6. O QUE VOCÊ ENCONTRA */}
      <WhatYouReceive />

      {/* 7. BÔNUS */}
      <BonusSection />

      {/* 8. OFERTA / PLANOS */}
      <PricingSection
        basicPrice={config.basicPlanPrice}
        basicOldPrice={config.basicPlanOldPrice}
        basicCheckoutUrl={config.basicPlanCheckoutUrl}
        completePrice={config.completePlanPrice}
        completeOldPrice={config.completePlanOldPrice}
        completeCheckoutUrl={config.completePlanCheckoutUrl}
      />

      {/* 9. DEPOIMENTOS */}
      <TestimonialsSection />

      {/* 10. GARANTIA */}
      <GuaranteeSection />

      {/* 11. FAQ */}
      <FaqSection />

      {/* 12. CTA FINAL */}
      <FinalCtaSection
        headline={config.heroHeadline}
        checkoutUrl={config.completePlanCheckoutUrl}
      />

      {/* 13. FOOTER */}
      <Footer onOpenEdit={handleOpenEdit} />

      {/* Modals */}
      <Suspense fallback={null}>
        <EditModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEdit}
          config={config}
          onSave={handleSaveConfig}
          onReset={handleResetConfig}
        />
      </Suspense>

    </div>
  );
}

