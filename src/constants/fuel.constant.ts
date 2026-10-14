import { type FuelType, IFC_FUEL_NAME } from '@/types';

/**
 * Map between internal FuelType and Iberian Fuel Client FUEL_NAME enum.
 */
export const FUEL_TYPE_TO_IFC_FUEL_NAME: Record<FuelType, IFC_FUEL_NAME> = {
  gasoline95: IFC_FUEL_NAME.GASOLINE_95,
  gasoline98: IFC_FUEL_NAME.GASOLINE_98,
  diesel: IFC_FUEL_NAME.DIESEL,
  lpg: IFC_FUEL_NAME.LPG,
} as const;

/**
 * Map between internal FuelType and friendly display labels.
 */
export const FUEL_TYPE_LABELS: Record<FuelType, string> = {
  gasoline95: 'Gasoline 95',
  gasoline98: 'Gasoline 98',
  diesel: 'Diesel',
  lpg: 'LPG',
} as const;

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