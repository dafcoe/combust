import type { FuelPriceBadgeStyle, FuelType } from './fuel.type.ts';

/**
 * Ordered list of all supported fuel types.
 */
export const FUEL_TYPES: readonly FuelType[] = [
  'gasoline95',
  'gasoline98',
  'diesel',
  'lpg',
] as const;

export const FUEL_TYPE_SHORT_LABELS_MAP: Record<FuelType, string> = {
  gasoline95: '95',
  gasoline98: '98',
  diesel: 'Diesel',
  lpg: 'LPG',
} as const;

export const FUEL_PRICE_BADGE_STYLES: Record<FuelType, FuelPriceBadgeStyle> = {
  gasoline95: {
    badgeBg: 'bg-emerald-200 dark:bg-emerald-950/40',
    badgeText: 'text-emerald-900 dark:text-emerald-300',
    badgeBorder: 'border-emerald-300/80 dark:border-emerald-800/80',
  },
  gasoline98: {
    badgeBg: 'bg-sky-200 dark:bg-sky-950/40',
    badgeText: 'text-sky-900 dark:text-sky-300',
    badgeBorder: 'border-sky-300/80 dark:border-sky-800/80',
  },
  diesel: {
    badgeBg: 'bg-amber-200 dark:bg-amber-950/40',
    badgeText: 'text-amber-900 dark:text-amber-300',
    badgeBorder: 'border-amber-300/80 dark:border-amber-800/80',
  },
  lpg: {
    badgeBg: 'bg-purple-200 dark:bg-purple-950/40',
    badgeText: 'text-purple-900 dark:text-purple-300',
    badgeBorder: 'border-purple-300/80 dark:border-purple-800/80',
  },
};