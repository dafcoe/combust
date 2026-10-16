import type { FuelType } from '@/modules/fuel';

export type ThemeMode = 'system' | 'light' | 'dark';

export type SortMode = 'price' | 'distance';

export type AppSettings = {
  theme: ThemeMode;
  fuelType: FuelType;
  radiusKm: number;
  sortBy: SortMode;
};
