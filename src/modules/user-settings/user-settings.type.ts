import type { FuelType, SortMode, ThemeMode } from '@/types';

export type UserSettings = {
  theme: ThemeMode;
  fuelType: FuelType;
  radiusKm: number;
  sortBy: SortMode;
};
