import type { FuelType } from '@/modules/fuel/fuel.type.ts';

/**
 * Ordered list of all supported fuel types.
 */
export const FUEL_TYPES: readonly FuelType[] = [
  'gasoline95',
  'gasoline98',
  'diesel',
  'lpg',
] as const;

/**
 * Map between internal FuelType and short display badges.
 */
export const FUEL_TYPE_SHORT_LABELS: Record<FuelType, string> = {
  gasoline95: '95',
  gasoline98: '98',
  diesel: 'Diesel',
  lpg: 'LPG',
} as const;