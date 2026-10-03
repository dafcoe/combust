import { type FuelType, IFC_FUEL_NAME } from '@/types';

/**
 * Map between internal FuelType and Iberian Fuel Client FUEL_NAME enum.
 */
export const FUEL_TYPE_TO_IFC_FUEL_NAME: Record<FuelType, IFC_FUEL_NAME> = {
  gasoline95: IFC_FUEL_NAME.GASOLINE_95,
  gasoline98: IFC_FUEL_NAME.GASOLINE_98,
  diesel: IFC_FUEL_NAME.DIESEL,
  lgp: IFC_FUEL_NAME.LPG,
} as const;

/**
 * Map between internal FuelType and friendly display labels.
 */
export const FUEL_TYPE_LABELS: Record<FuelType, string> = {
  gasoline95: 'Gasoline 95',
  gasoline98: 'Gasoline 98',
  diesel: 'Diesel',
  lgp: 'LPG',
} as const;