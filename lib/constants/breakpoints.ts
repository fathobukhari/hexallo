/**
 * Responsive breakpoints configuration
 * Mobile-first approach: 375px to 2200px+
 */

export const breakpoints = {
  xs: '375px',   // Extra small devices (mobile)
  sm: '640px',   // Small devices (tablet portrait)
  md: '768px',   // Medium devices (tablet landscape)
  lg: '1024px', // Large devices (desktop)
  xl: '1280px', // Extra large devices
  '2xl': '1536px', // 2X large devices
  '3xl': '1920px', // 3X large devices
  '4xl': '2200px', // 4X large devices
} as const;

/**
 * Tailwind responsive class prefixes
 * Usage: sm:text-lg md:text-xl lg:text-2xl
 */
export const responsiveClasses = {
  mobile: '',           // Base (375px+)
  tablet: 'md:',       // 768px+
  desktop: 'lg:',      // 1024px+
  wide: 'xl:',         // 1280px+
  extraWide: '2xl:',   // 1536px+
  ultraWide: '3xl:',   // 1920px+
  maxWide: '4xl:',     // 2200px+
} as const;

