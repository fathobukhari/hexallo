/**
 * Font utility functions
 * Helper functions for consistent font usage across the application
 */

/**
 * Get font class names for Montserrat
 * Usage: className={getMontserratClass('font-semibold')}
 */
export const getMontserratClass = (additionalClasses?: string): string => {
  return `font-montserrat ${additionalClasses || ''}`.trim();
};

/**
 * Get font class names for Inter
 * Usage: className={getInterClass('font-medium')}
 */
export const getInterClass = (additionalClasses?: string): string => {
  return `font-inter ${additionalClasses || ''}`.trim();
};

/**
 * Font weight constants for type safety
 */
export const fontWeights = {
  light: 'font-light',      // 300
  normal: 'font-normal',    // 400
  medium: 'font-medium',    // 500
  semibold: 'font-semibold', // 600
  bold: 'font-bold',        // 700
  extrabold: 'font-extrabold', // 800
} as const;

