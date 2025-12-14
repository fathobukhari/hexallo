/**
 * TypeScript types for home page sections
 * All data structures for home page components
 */

export interface EventCardData {
  id: string;
  image: string;
  category: string;
  title: string;
  date?: string;
  time: string;
  location: string;
  price: string;
  rating?: number;
  href: string;
}

export interface ExclusiveCardData {
  id: string;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

export interface CategoryCardData {
  id: string;
  image: string;
  title: string;
  rating: number;
  href: string;
}

export interface DealCardData {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  background: string;
  href?: string;
}

export interface CountdownData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  endDate: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  searchPlaceholders: {
    event: string;
    where: string;
    when: string;
  };
  backgroundImages: string[];
  currentSlide?: number;
}

export interface SectionConfig {
  title: string;
  viewAllHref?: string;
}

