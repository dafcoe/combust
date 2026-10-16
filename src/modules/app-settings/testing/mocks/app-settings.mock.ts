import { ref } from 'vue';
import { DEFAULT_APP_SETTINGS } from '../../app-settings.constant.ts';
import type {
  AppSettings,
  SortMode,
  ThemeMode,
} from '../../app-settings.type.ts';
import type { FuelType } from '@/modules/fuel';

export const mockAppSettings = ref<AppSettings>({ ...DEFAULT_APP_SETTINGS });
export const mockIsThemeDark = ref<boolean>(false);

export const mockSetTheme = vi.fn((theme: ThemeMode) => {
  mockAppSettings.value.theme = theme;
});

export const mockSetFuelType = vi.fn((fuelType: FuelType) => {
  mockAppSettings.value.fuelType = fuelType;
});

export const mockSetRadiusKm = vi.fn((radiusKm: number) => {
  mockAppSettings.value.radiusKm = radiusKm;
});

export const mockSetSortBy = vi.fn((sortBy: SortMode) => {
  mockAppSettings.value.sortBy = sortBy;
});

export function resetAppSettingsMock(): void {
  mockAppSettings.value = { ...DEFAULT_APP_SETTINGS };
  mockIsThemeDark.value = false;
  mockSetTheme.mockClear();
  mockSetFuelType.mockClear();
  mockSetRadiusKm.mockClear();
  mockSetSortBy.mockClear();
}

export const mockUseAppSettings = vi.fn(() => ({
  appSettings: mockAppSettings,
  isThemeDark: mockIsThemeDark,
  setTheme: mockSetTheme,
  setFuelType: mockSetFuelType,
  setRadiusKm: mockSetRadiusKm,
  setSortBy: mockSetSortBy,
}));
