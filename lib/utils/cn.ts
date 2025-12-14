/**
 * Utility function for conditional class names
 * Combines Tailwind classes with conditional logic
 * Professional pattern for clean, maintainable code
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with conditional logic
 * Prevents class conflicts and ensures proper class ordering
 * 
 * @example
 * cn('px-4', isActive && 'bg-blue-500', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

