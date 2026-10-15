import { useLocalStorage } from '@vueuse/core';
import { computed } from 'vue';
import { DEFAULT_USER_SETTINGS, USER_SETTINGS_STORAGE_KEY } from '@/modules/user-settings/user-settings.constant.ts';
import type { FuelType, SortMode, ThemeMode } from '@/types';
import type { UserSettings } from '../user-settings.type.ts';

const storageSettings = useLocalStorage<UserSettings>(
  USER_SETTINGS_STORAGE_KEY,
  { ...DEFAULT_USER_SETTINGS },
  { mergeDefaults: true },
);

const theme = computed(() => storageSettings.value.theme);
const fuelType = computed(() => storageSettings.value.fuelType);
const radiusKm = computed(() => storageSettings.value.radiusKm);
const sortBy = computed(() => storageSettings.value.sortBy);

function setTheme(newTheme: ThemeMode): void {
  storageSettings.value.theme = newTheme;
}

function setFuelType(newFuelType: FuelType): void {
  storageSettings.value.fuelType = newFuelType;
}

function setRadiusKm(newRadius: number): void {
  if (!Number.isFinite(newRadius) || newRadius <= 0) return;
  storageSettings.value.radiusKm = newRadius;
}

function setSortBy(newSortBy: SortMode): void {
  storageSettings.value.sortBy = newSortBy;
}

export function resetUserSettings(): void {
  storageSettings.value = { ...DEFAULT_USER_SETTINGS };
}

export function useUserSettings() {
  return {
    theme,
    fuelType,
    radiusKm,
    sortBy,
    setTheme,
    setFuelType,
    setRadiusKm,
    setSortBy,
  };
}
