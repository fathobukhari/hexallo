/**
 * System-wide Container Sizes
 * Standardized container widths for consistent layout across the application
 * Mobile-first responsive design: 375px to 2200px+
 */

export const containerSizes = {
  /**
   * Extra Small - Narrow content (blog posts, forms)
   * Max-width: 640px (40rem)
   */
  xs: {
    maxWidth: 'max-w-xl', // 576px
    description: 'Narrow content containers',
  },
  
  /**
   * Small - Standard content width
   * Max-width: 768px (48rem)
   */
  sm: {
    maxWidth: 'max-w-2xl', // 672px
    description: 'Standard content width',
  },
  
  /**
   * Medium - Default content width
   * Max-width: 896px (56rem)
   */
  md: {
    maxWidth: 'max-w-4xl', // 896px
    description: 'Default content width',
  },
  
  /**
   * Large - Wide content (default)
   * Max-width: 1152px (72rem)
   */
  lg: {
    maxWidth: 'max-w-6xl', // 1152px
    description: 'Wide content containers (default)',
  },
  
  /**
   * Extra Large - Extra wide content
   * Max-width: 1280px (80rem)
   */
  xl: {
    maxWidth: 'max-w-[1360px]', // 1280px
    description: 'Extra wide content containers',
  },
  
  /**
   * 2X Large - Maximum content width
   * Max-width: 1536px (96rem)
   */
  '2xl': {
    maxWidth: 'max-w-[1536px]', // 1536px
    description: 'Maximum content width',
  },
  
  /**
   * 3X Large - Ultra wide screens
   * Max-width: 1920px (120rem)
   */
  '3xl': {
    maxWidth: 'max-w-[1920px]', // 1920px
    description: 'Ultra wide screen containers',
  },
  
  /**
   * Full - No max-width constraint
   * Full width with padding only
   */
  full: {
    maxWidth: 'max-w-full',
    description: 'Full width containers',
  },
} as const;

/**
 * Responsive padding presets
 * Different padding sizes for different use cases
 */

/**
 * Small Padding - Minimal spacing
 * Use for: Tight layouts, compact sections
 */
// export const paddingSmall = [
//   'px-3',        // Mobile: 12px
//   'sm:px-4',     // Tablet: 16px
//   'md:px-5',     // Tablet Landscape: 20px
//   'lg:px-6',     // Desktop: 24px
//   'xl:px-8',     // Wide: 32px
//   '2xl:px-10',   // Extra Wide: 40px
//   '3xl:px-12',   // Ultra Wide: 48px
//   '4xl:px-16',   // Max Wide: 64px
// ].join(' ');

/**
 * Medium Padding - Standard spacing (default)
 * Use for: Most content sections, default containers
 */
export const paddingMedium = [
  'px-6',        // Mobile: 16px
  'sm:px-6',     // Tablet: 24px
//   'md:px-8',     // Tablet Landscape: 32px
  'lg:px-8',    // Desktop: 48px
//   'xl:px-8',    // Wide: 64px
//   '2xl:px-20',   // Extra Wide: 80px
//   '3xl:px-24',   // Ultra Wide: 96px
//   '4xl:px-32',   // Max Wide: 128px
].join(' ');

/**
 * Large Padding - Generous spacing
 * Use for: Hero sections, featured content, spacious layouts
 */
// export const paddingLarge = [
//   'px-5',        // Mobile: 20px
//   'sm:px-8',     // Tablet: 32px
//   'md:px-10',    // Tablet Landscape: 40px
//   'lg:px-16',    // Desktop: 64px
//   'xl:px-20',    // Wide: 80px
//   '2xl:px-24',   // Extra Wide: 96px
//   '3xl:px-32',   // Ultra Wide: 128px
//   '4xl:px-40',   // Max Wide: 160px
// ].join(' ');

/**
 * Extra Large Padding - Maximum spacing
 * Use for: Landing pages, hero sections, premium layouts
 */
// export const paddingXLarge = [
//   'px-6',        // Mobile: 24px
//   'sm:px-10',    // Tablet: 40px
//   'md:px-12',    // Tablet Landscape: 48px
//   'lg:px-20',    // Desktop: 80px
//   'xl:px-24',    // Wide: 96px
//   '2xl:px-32',   // Extra Wide: 128px
//   '3xl:px-40',   // Ultra Wide: 160px
//   '4xl:px-48',   // Max Wide: 192px
// ].join(' ');

/**
 * Padding size mapping
 * Easy access to padding presets
 */
export const paddingSizes = {
//   small: paddingSmall,
  medium: paddingMedium,
//   large: paddingLarge,
//   xlarge: paddingXLarge,
} as const;

/**
 * Default padding (medium)
 * Backward compatibility
 */
export const responsivePadding = paddingMedium;

/**
 * Padding size type
 */
export type PaddingSize = keyof typeof paddingSizes;

/**
 * Container size type
 */
export type ContainerSize = keyof typeof containerSizes;

