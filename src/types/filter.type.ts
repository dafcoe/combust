import type { FuelType } from './fuel.type.ts';

export type SortMode = 'price' | 'distance';

export type FilterOptions = {
  fuelType: FuelType;
  radiusKm: number;
  sortBy: SortMode;
};