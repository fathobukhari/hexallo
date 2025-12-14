/**
 * Global TypeScript types and interfaces
 * Centralized type definitions for type safety and code reusability
 */

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Responsive breakpoints
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Common data structures
export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LinkData {
  href: string;
  label: string;
  external?: boolean;
}

// SEO Metadata
export interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

