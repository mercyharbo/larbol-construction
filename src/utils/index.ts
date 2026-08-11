import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class names and merges Tailwind CSS classes efficiently
 * @param inputs - Class names or conditional class objects
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Usage example:
 * cn('px-4 py-2', {
 *   'bg-blue-500': isActive,
 *   'bg-gray-500': !isActive
 * }, 'hover:bg-opacity-90')
 */
