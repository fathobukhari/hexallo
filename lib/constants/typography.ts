// /**
//  * Typography System
//  * Centralized typography definitions for consistent text styling
//  * Font sizes, line heights, font weights, and letter spacing
//  * Responsive typography scale
//  */

// /**
//  * Font Sizes
//  * Responsive font size scale
//  * Mobile-first approach
//  */
// export const fontSize = {
//   xs: {
//     base: '0.75rem',    // 12px
//     lineHeight: '1rem', // 16px
//     mobile: 'text-xs',
//     tablet: 'md:text-xs',
//     desktop: 'lg:text-xs',
//   },
//   sm: {
//     base: '0.875rem',  // 14px
//     lineHeight: '1.25rem', // 20px
//     mobile: 'text-sm',
//     tablet: 'md:text-sm',
//     desktop: 'lg:text-sm',
//   },
//   base: {
//     base: '1rem',      // 16px
//     lineHeight: '1.5rem', // 24px
//     mobile: 'text-base',
//     tablet: 'md:text-base',
//     desktop: 'lg:text-base',
//   },
//   lg: {
//     base: '1.125rem',  // 18px
//     lineHeight: '1.75rem', // 28px
//     mobile: 'text-lg',
//     tablet: 'md:text-lg',
//     desktop: 'lg:text-lg',
//   },
//   xl: {
//     base: '1.25rem',   // 20px
//     lineHeight: '1.75rem', // 28px
//     mobile: 'text-xl',
//     tablet: 'md:text-xl',
//     desktop: 'lg:text-xl',
//   },
//   '2xl': {
//     base: '1.5rem',    // 24px
//     lineHeight: '2rem', // 32px
//     mobile: 'text-2xl',
//     tablet: 'md:text-2xl',
//     desktop: 'lg:text-2xl',
//   },
//   '3xl': {
//     base: '1.875rem',  // 30px
//     lineHeight: '2.25rem', // 36px
//     mobile: 'text-3xl',
//     tablet: 'md:text-3xl',
//     desktop: 'lg:text-3xl',
//   },
//   '4xl': {
//     base: '2.25rem',   // 36px
//     lineHeight: '2.5rem', // 40px
//     mobile: 'text-4xl',
//     tablet: 'md:text-4xl',
//     desktop: 'lg:text-4xl',
//   },
//   '5xl': {
//     base: '3rem',      // 48px
//     lineHeight: '1',   // 48px
//     mobile: 'text-5xl',
//     tablet: 'md:text-5xl',
//     desktop: 'lg:text-5xl',
//   },
//   '6xl': {
//     base: '3.75rem',   // 60px
//     lineHeight: '1',   // 60px
//     mobile: 'text-6xl',
//     tablet: 'md:text-6xl',
//     desktop: 'lg:text-6xl',
//   },
//   '7xl': {
//     base: '4.5rem',    // 72px
//     lineHeight: '1',   // 72px
//     mobile: 'text-7xl',
//     tablet: 'md:text-7xl',
//     desktop: 'lg:text-7xl',
//   },
//   '8xl': {
//     base: '6rem',      // 96px
//     lineHeight: '1',   // 96px
//     mobile: 'text-8xl',
//     tablet: 'md:text-8xl',
//     desktop: 'lg:text-8xl',
//   },
//   '9xl': {
//     base: '8rem',      // 128px
//     lineHeight: '1',   // 128px
//     mobile: 'text-9xl',
//     tablet: 'md:text-9xl',
//     desktop: 'lg:text-9xl',
//   },
// } as const;

// /**
//  * Font Weights
//  * Available font weights for Montserrat and Inter
//  */
// export const fontWeight = {
//   light: {
//     value: '300',
//     class: 'font-light',
//   },
//   normal: {
//     value: '400',
//     class: 'font-normal',
//   },
//   medium: {
//     value: '500',
//     class: 'font-medium',
//   },
//   semibold: {
//     value: '600',
//     class: 'font-semibold',
//   },
//   bold: {
//     value: '700',
//     class: 'font-bold',
//   },
//   extrabold: {
//     value: '800',
//     class: 'font-extrabold',
//   },
// } as const;

// /**
//  * Line Heights
//  * Standard line height scale
//  */
// export const lineHeight = {
//   none: '1',
//   tight: '1.25',
//   snug: '1.375',
//   normal: '1.5',
//   relaxed: '1.625',
//   loose: '2',
// } as const;

// /**
//  * Letter Spacing
//  * Character spacing scale
//  */
// export const letterSpacing = {
//   tighter: '-0.05em',
//   tight: '-0.025em',
//   normal: '0em',
//   wide: '0.025em',
//   wider: '0.05em',
//   widest: '0.1em',
// } as const;

// /**
//  * Typography Presets
//  * Pre-configured text styles for common use cases
//  */
// export const typography = {
//   // Headings
//   h1: {
//     fontSize: 'text-4xl md:text-5xl lg:text-6xl',
//     fontWeight: 'font-bold',
//     lineHeight: 'leading-tight',
//     letterSpacing: 'tracking-tight',
//     fontFamily: 'font-montserrat',
//   },
//   h2: {
//     fontSize: 'text-3xl md:text-4xl lg:text-5xl',
//     fontWeight: 'font-bold',
//     lineHeight: 'leading-tight',
//     letterSpacing: 'tracking-tight',
//     fontFamily: 'font-montserrat',
//   },
//   h3: {
//     fontSize: 'text-2xl md:text-3xl lg:text-4xl',
//     fontWeight: 'font-semibold',
//     lineHeight: 'leading-snug',
//     letterSpacing: 'tracking-tight',
//     fontFamily: 'font-montserrat',
//   },
//   h4: {
//     fontSize: 'text-xl md:text-2xl lg:text-3xl',
//     fontWeight: 'font-semibold',
//     lineHeight: 'leading-snug',
//     letterSpacing: 'tracking-normal',
//     fontFamily: 'font-montserrat',
//   },
//   h5: {
//     fontSize: 'text-lg md:text-xl lg:text-2xl',
//     fontWeight: 'font-semibold',
//     lineHeight: 'leading-normal',
//     letterSpacing: 'tracking-normal',
//     fontFamily: 'font-montserrat',
//   },
//   h6: {
//     fontSize: 'text-base md:text-lg lg:text-xl',
//     fontWeight: 'font-semibold',
//     lineHeight: 'leading-normal',
//     letterSpacing: 'tracking-normal',
//     fontFamily: 'font-montserrat',
//   },
//   // Body text
//   body: {
//     fontSize: 'text-base md:text-lg',
//     fontWeight: 'font-normal',
//     lineHeight: 'leading-relaxed',
//     letterSpacing: 'tracking-normal',
//     fontFamily: 'font-inter',
//   },
//   bodySmall: {
//     fontSize: 'text-sm md:text-base',
//     fontWeight: 'font-normal',
//     lineHeight: 'leading-relaxed',
//     letterSpacing: 'tracking-normal',
//     fontFamily: 'font-inter',
//   },
//   // Labels and captions
//   label: {
//     fontSize: 'text-sm md:text-base',
//     fontWeight: 'font-medium',
//     lineHeight: 'leading-normal',
//     letterSpacing: 'tracking-wide',
//     fontFamily: 'font-inter',
//   },
//   caption: {
//     fontSize: 'text-xs md:text-sm',
//     fontWeight: 'font-normal',
//     lineHeight: 'leading-normal',
//     letterSpacing: 'tracking-normal',
//     fontFamily: 'font-inter',
//   },
// } as const;

// /**
//  * Typography size type
//  */
// export type FontSize = keyof typeof fontSize;
// export type FontWeight = keyof typeof fontWeight;
// export type LineHeight = keyof typeof lineHeight;
// export type LetterSpacing = keyof typeof letterSpacing;
// export type TypographyPreset = keyof typeof typography;

