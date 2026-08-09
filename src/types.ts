export interface SalesPageConfig {
  announcementText: string;
  heroHeadline: string;
  heroSubtitle: string;
  heroCtaText: string;
  countdownMinutes: number;
  basicPlanPrice: string;
  basicPlanOldPrice: string;
  basicPlanCheckoutUrl: string;
  completePlanPrice: string;
  completePlanOldPrice: string;
  completePlanCheckoutUrl: string;
  supportWhatsapp: string;
}

export interface BonusItem {
  id: number;
  badge: string;
  title: string;
  oldPrice: string;
  coverImage: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

