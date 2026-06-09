'use client';

import type { Transition, Variants } from 'framer-motion';

/**
 * Motion utilities that respect prefers-reduced-motion.
 * When reduced motion is preferred, animations are minimized or disabled.
 */

// Check reduced motion preference (safe for SSR)
function isReducedMotionPreferred(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Get transition props that respect reduced motion
export function getTransition(base?: Transition): Transition {
  if (isReducedMotionPreferred()) {
    return { duration: 0 };
  }
  return base ?? { duration: 0.3 };
}

// Get variants that respect reduced motion
export function getVariants(variants: Variants): Variants {
  if (isReducedMotionPreferred()) {
    // For reduced motion, skip animations - just show/hide
    const reduced: Variants = {};
    for (const key of Object.keys(variants)) {
      reduced[key] = { opacity: 1 };
    }
    return reduced;
  }
  return variants;
}

// Common animation presets with reduced motion support
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
};

// Get animation props that respect reduced motion
export function getMotionProps(baseProps: Record<string, unknown> = {}): Record<string, unknown> {
  if (isReducedMotionPreferred()) {
    return {
      ...baseProps,
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 },
    };
  }
  return baseProps;
}

// CSS class for elements that should disable animation
export const reducedMotionClass = 'motion-reduce:transition-none motion-reduce:animate-none';
