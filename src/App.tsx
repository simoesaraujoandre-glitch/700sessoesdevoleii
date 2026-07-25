/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { WhatYouReceive } from './components/WhatYouReceive';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PreviewSection } from './components/PreviewSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

import { defaultConfig } from './data/content';
import { SalesPageConfig, TrainingSession } from './types';

const VideoModal = lazy(() => import('./components/VideoModal').then(m => ({ default: m.VideoModal })));
const SessionDetailModal = lazy(() => import('./components/SessionDetailModal').then(m => ({ default: m.SessionDetailModal })));
const EditModal = lazy(() => import('./components/EditModal').then(m => ({ default: m.EditModal })));

const STORAGE_KEY = 'treinamentos_basquete_config_v1';

export default function App() {
  const [config, setConfig] = useState<SalesPageConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.basicPlanCheckoutUrl || !parsed.basicPlanCheckoutUrl.startsWith('https://pay.wiapy.com')) {
          parsed.basicPlanCheckoutUrl = defaultConfig.basicPlanCheckoutUrl;
        }
        if (!parsed.completePlanCheckoutUrl || !parsed.completePlanCheckoutUrl.startsWith('https://pay.wiapy.com')) {
          parsed.completePlanCheckoutUrl = defaultConfig.completePlanCheckoutUrl;
        }
        parsed.completePlanOldPrice = defaultConfig.completePlanOldPrice;
        parsed.completePlanPrice = defaultConfig.completePlanPrice;
        return { ...defaultConfig, ...parsed };
      }
      return defaultConfig;
    } catch (e) {
      return defaultConfig;
    }
  });

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<TrainingSession | null>(null);

  const handleSaveConfig = (newConfig: SalesPageConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.error('Failed to save config', e);
    }
  };

  const handleResetConfig = () => {
    setConfig(defaultConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to reset config', e);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-600 selection:text-black antialiased relative">
      
      {/* 1. Header Urgency Banner with integrated countdown */}
      <HeaderBanner text={config.announcementText} countdownMinutes={config.countdownMinutes} />

      {/* 2. Hero Section */}
      <HeroSection
        headline={config.heroHeadline}
        subtitle={config.heroSubtitle}
        ctaText={config.heroCtaText}
        checkoutUrl={config.completePlanCheckoutUrl}
        countdownMinutes={config.countdownMinutes}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* 3. O Que Você Vai Receber */}
      <WhatYouReceive />

      {/* 4. Por Que Escolher Nosso Material */}
      <WhyChooseUs />

      {/* 5. Prévia Do Que Você Vai Receber */}
      <PreviewSection onSelectSession={(session) => setSelectedSession(session)} />

      {/* 6. Receba 3 Bônus Incríveis GRÁTIS */}
      <BonusSection />

      {/* 7. Escolha Seu Plano (Pricing) */}
      <PricingSection
        basicPrice={config.basicPlanPrice}
        basicOldPrice={config.basicPlanOldPrice}
        basicCheckoutUrl={config.basicPlanCheckoutUrl}
        completePrice={config.completePlanPrice}
        completeOldPrice={config.completePlanOldPrice}
        completeCheckoutUrl={config.completePlanCheckoutUrl}
      />

      {/* 8. O Que Dizem Os Treinadores (WhatsApp + Testimonials) */}
      <TestimonialsSection />

      {/* 9. Garantia Incondicional de 7 Dias */}
      <GuaranteeSection />

      {/* 10. Perguntas Frequentes (FAQ) */}
      <FaqSection />

      {/* 11. Final CTA conversion banner */}
      <FinalCtaSection
        headline={config.heroHeadline}
        checkoutUrl={config.completePlanCheckoutUrl}
        countdownMinutes={config.countdownMinutes}
      />

      {/* 12. Footer with edit link */}
      <Footer onOpenEdit={() => setIsEditModalOpen(true)} />

      {/* Modals wrapped in Suspense for lazy loading */}
      <Suspense fallback={null}>
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />

        <SessionDetailModal
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        <EditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          config={config}
          onSave={handleSaveConfig}
          onReset={handleResetConfig}
        />
      </Suspense>

    </div>
  );
}
