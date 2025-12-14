/**
 * Site configuration
 * Centralized data for SEO, metadata, and dynamic content
 */

import { MetadataProps } from '@/lib/types';

export const siteConfig = {
  name: 'Hexallo',
  description: 'Professional Next.js application built with TypeScript and Tailwind CSS',
  url: 'https://hexallo.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/hexallo',
    github: 'https://github.com/hexallo',
  },
} as const;

export const defaultMetadata: MetadataProps = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
  ogImage: siteConfig.ogImage,
};

