import type { SortMode } from './filter.type.ts';
import type { FuelType } from './fuel.type.ts';
import type { ThemeMode } from './theme.type.ts';

export type UserSettings = {
  theme: ThemeMode;
  fuelType: FuelType;
  radiusKm: number;
  sortBy: SortMode;
};
