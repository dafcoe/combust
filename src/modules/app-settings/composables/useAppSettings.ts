import { useLocalStorage } from '@vueuse/core';
import { readonly, toRef } from 'vue';
import { APP_SETTINGS_STORAGE_KEY, DEFAULT_APP_SETTINGS } from '../app-settings.constant.ts';
import type {
  AppSettings,
  SortMode,
  ThemeMode,
} from '../app-settings.type.ts';
import { useThemeHandler } from './useThemeHandler.ts';
import type { FuelType } from '@/modules/fuel';

const appSettings = useLocalStorage<AppSettings>(
  APP_SETTINGS_STORAGE_KEY,
  { ...DEFAULT_APP_SETTINGS },
  { mergeDefaults: true },
);

export function useAppSettings() {
  const { isThemeDark } = useThemeHandler(toRef(appSettings.value, 'theme'));

  function setTheme(theme: ThemeMode): void {
    appSettings.value.theme = theme;
  }

  function setFuelType(fuelType: FuelType): void {
    appSettings.value.fuelType = fuelType;
  }

  function setRadiusKm(radiusKm: number): void {
    if (!Number.isFinite(radiusKm) || radiusKm <= 0) return;

    appSettings.value.radiusKm = radiusKm;
  }

  function setSortBy(sortBy: SortMode): void {
    appSettings.value.sortBy = sortBy;
  }

  return {
    appSettings: readonly(appSettings),
    isThemeDark,
    setTheme,
    setFuelType,
    setRadiusKm,
    setSortBy,
  };
}
