export type Language = 'ar' | 'en';

export interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  category: '3d-fashion' | 'haute-couture' | 'heritage' | 'concept';
  categoryLabelAr: string;
  categoryLabelEn: string;
  descriptionAr: string;
  descriptionEn: string;
  conceptAr: string;
  conceptEn: string;
  detailsAr: string[];
  detailsEn: string[];
  fabricSwatches: { name: string; hex: string; texture: string }[];
  images: { url: string; captionAr: string; captionEn: string }[];
  featured: boolean;
  year: string;
}

export interface Service {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  pricingAr: string;
  pricingEn: string;
  icon: string;
  featuresAr: string[];
  featuresEn: string[];
}

export interface Certification {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  isMain: boolean;
  icon: string;
}

export interface WorkflowStep {
  step: number;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  categoryAr: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  budget: string;
  message: string;
}
