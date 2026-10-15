import type { ThemeMode } from '@/modules/theme';
import type { FuelType, SortMode } from '@/types';

export type UserSettings = {
  theme: ThemeMode;
  fuelType: FuelType;
  radiusKm: number;
  sortBy: SortMode;
};
