import type { FuelType } from '@/modules/fuel';
import type { ThemeMode } from '@/modules/theme';

export type SortMode = 'price' | 'distance';

export type UserSettings = {
  theme: ThemeMode;
  fuelType: FuelType;
  radiusKm: number;
  sortBy: SortMode;
};
