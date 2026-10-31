export type Language = 'en' | 'bn';

export interface ServiceItem {
  id: string;
  icon: string;
  titleEn: string;
  titleBn: string;
  shortDescEn: string;
  shortDescBn: string;
  fullDescEn: string;
  fullDescBn: string;
  keyPointsEn: string[];
  keyPointsBn: string[];
  imageUrl: string;
  badge?: string;
}

export type PetCategory = 'dogs' | 'cats' | 'birds' | 'rabbits' | 'small_mammals';

export interface PetGuideItem {
  id: string;
  species: PetCategory;
  titleEn: string;
  titleBn: string;
  summaryEn: string;
  summaryBn: string;
  vaccinesEn: string[];
  vaccinesBn: string[];
  dietTipsEn: string[];
  dietTipsBn: string[];
  warningSignsEn: string[];
  warningSignsBn: string[];
  image: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  category: string;
  categoryBn: string;
  titleEn: string;
  titleBn: string;
  summaryEn: string;
  summaryBn: string;
  contentEn: string[];
  contentBn: string[];
  keyTakeawaysEn: string[];
  keyTakeawaysBn: string[];
  author: string;
  readTime: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  petName: string;
  petType: string;
  rating: number;
  commentEn: string;
  commentBn: string;
  date: string;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
  category: string;
}

export interface AppointmentFormData {
  ownerName: string;
  phone: string;
  email: string;
  petName: string;
  petSpecies: string;
  petBreed: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string;
  isEmergency: boolean;
}
