import { nextTick } from 'vue';
import {
  resetUserSettings,
  useUserSettings,
} from '../useUserSettings.ts';
import {
  DEFAULT_USER_SETTINGS,
  USER_SETTINGS_STORAGE_KEY,
} from '@/constants';
import type { UserSettings } from '@/types';

describe('useUserSettings', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    resetUserSettings();
  });

  it('should initialize with default settings when localStorage is empty', () => {
    // Assemble
    const { theme, fuelType, radiusKm, sortBy } = useUserSettings();

    // Assert
    expect(theme.value).toBe(DEFAULT_USER_SETTINGS.theme);
    expect(fuelType.value).toBe(DEFAULT_USER_SETTINGS.fuelType);
    expect(radiusKm.value).toBe(DEFAULT_USER_SETTINGS.radiusKm);
    expect(sortBy.value).toBe(DEFAULT_USER_SETTINGS.sortBy);

    const storedSettings = JSON.parse(localStorage.getItem(USER_SETTINGS_STORAGE_KEY)!);
    expect(storedSettings).toEqual(DEFAULT_USER_SETTINGS);
  });

  it('should set and persist user settings', async () => {
    // Assemble
    const { theme, fuelType, radiusKm, sortBy, setTheme, setFuelType, setRadiusKm, setSortBy } = useUserSettings();
    const newSettings: UserSettings = {
      theme: 'dark',
      fuelType: 'diesel',
      radiusKm: 25,
      sortBy: 'distance',
    };

    // Act
    setTheme(newSettings.theme);
    setFuelType(newSettings.fuelType);
    setRadiusKm(newSettings.radiusKm);
    setSortBy(newSettings.sortBy);
    await nextTick();

    // Assert
    expect(theme.value).toBe(newSettings.theme);
    expect(fuelType.value).toBe(newSettings.fuelType);
    expect(radiusKm.value).toBe(newSettings.radiusKm);
    expect(sortBy.value).toBe(newSettings.sortBy);

    const storedSettings = JSON.parse(localStorage.getItem(USER_SETTINGS_STORAGE_KEY)!);
    expect(storedSettings).toEqual(newSettings);
  });

  it('should set and persist radiusKm, ignoring invalid numbers', async () => {
    // Assemble
    const { radiusKm, setRadiusKm } = useUserSettings();

    // Act
    setRadiusKm(-10);

    // Assert
    expect(radiusKm.value).toBe(DEFAULT_USER_SETTINGS.radiusKm);

    // Act
    setRadiusKm(-10);

    // Assert
    expect(radiusKm.value).toBe(DEFAULT_USER_SETTINGS.radiusKm);
  });
});
