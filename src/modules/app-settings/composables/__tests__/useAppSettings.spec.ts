import {
  isReadonly,
  nextTick,
  ref,
} from 'vue';
import { APP_SETTINGS_STORAGE_KEY, DEFAULT_APP_SETTINGS } from '../../app-settings.constant.ts';
import type { ThemeMode } from '../../app-settings.type.ts';
import { useAppSettings } from '../useAppSettings.ts';
import { useThemeHandler } from '../useThemeHandler.ts';
import type { FuelType } from '@/modules/fuel';
import { cleanupScope, withScope } from '@/testing';

const mockIsThemeDark = ref(false);

vi.mock('../useThemeHandler.ts', () => ({
  useThemeHandler: vi.fn(() => ({
    isThemeDark: mockIsThemeDark,
  })),
}));

describe('useAppSettings', () => {
  function resetSettingsToDefaults(): void {
    const {
      setFuelType,
      setRadiusKm,
      setSortBy,
      setTheme,
    } = withScope(() => useAppSettings());

    setTheme(DEFAULT_APP_SETTINGS.theme);
    setFuelType(DEFAULT_APP_SETTINGS.fuelType);
    setRadiusKm(DEFAULT_APP_SETTINGS.radiusKm);
    setSortBy(DEFAULT_APP_SETTINGS.sortBy);
  }

  beforeEach(() => {
    localStorage.clear();
    resetSettingsToDefaults();
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanupScope();
    localStorage.clear();
    resetSettingsToDefaults();
    vi.clearAllMocks();
  });

  describe('initial state and defaults', () => {
    it('initializes with default app settings', () => {
      const { appSettings } = withScope(() => useAppSettings());

      expect(appSettings.value).toEqual(DEFAULT_APP_SETTINGS);
    });

    it('exposes appSettings as a readonly ref', () => {
      const { appSettings } = withScope(() => useAppSettings());

      expect(isReadonly(appSettings)).toBe(true);
    });

    it('delegates theme handling to useThemeHandler and returns isThemeDark', () => {
      const { isThemeDark } = withScope(() => useAppSettings());

      expect(useThemeHandler).toHaveBeenCalledWith(
        expect.objectContaining({ value: DEFAULT_APP_SETTINGS.theme }),
      );
      expect(isThemeDark).toBe(mockIsThemeDark);
    });
  });

  describe('setTheme', () => {
    it('updates theme setting', () => {
      const { appSettings, setTheme } = withScope(() => useAppSettings());

      setTheme('dark');
      expect(appSettings.value.theme).toBe('dark');

      setTheme('light');
      expect(appSettings.value.theme).toBe('light');

      setTheme('system');
      expect(appSettings.value.theme).toBe('system');
    });

    it('passes updated theme ref reactively to useThemeHandler', () => {
      const { setTheme } = withScope(() => useAppSettings());

      const passedThemeRef = vi.mocked(useThemeHandler).mock.calls[0]?.[0] as { value: ThemeMode };

      setTheme('dark');
      expect(passedThemeRef.value).toBe('dark');
    });
  });

  describe('setFuelType', () => {
    it('updates fuelType setting', () => {
      const { appSettings, setFuelType } = withScope(() => useAppSettings());

      const newFuelType: FuelType = 'diesel';
      setFuelType(newFuelType);

      expect(appSettings.value.fuelType).toBe(newFuelType);
    });
  });

  describe('setRadiusKm', () => {
    it('updates radiusKm when given a positive finite number', () => {
      const { appSettings, setRadiusKm } = withScope(() => useAppSettings());

      setRadiusKm(25);
      expect(appSettings.value.radiusKm).toBe(25);

      setRadiusKm(0.5);
      expect(appSettings.value.radiusKm).toBe(0.5);
    });

    it('ignores non-positive numbers (zero and negative numbers)', () => {
      const { appSettings, setRadiusKm } = withScope(() => useAppSettings());

      setRadiusKm(15);
      expect(appSettings.value.radiusKm).toBe(15);

      setRadiusKm(0);
      expect(appSettings.value.radiusKm).toBe(15);

      setRadiusKm(-10);
      expect(appSettings.value.radiusKm).toBe(15);
    });

    it('ignores non-finite numbers (NaN, Infinity, -Infinity)', () => {
      const { appSettings, setRadiusKm } = withScope(() => useAppSettings());

      setRadiusKm(15);
      expect(appSettings.value.radiusKm).toBe(15);

      setRadiusKm(Number.NaN);
      expect(appSettings.value.radiusKm).toBe(15);

      setRadiusKm(Number.POSITIVE_INFINITY);
      expect(appSettings.value.radiusKm).toBe(15);

      setRadiusKm(Number.NEGATIVE_INFINITY);
      expect(appSettings.value.radiusKm).toBe(15);
    });
  });

  describe('setSortBy', () => {
    it('updates sortBy setting', () => {
      const { appSettings, setSortBy } = withScope(() => useAppSettings());

      setSortBy('distance');
      expect(appSettings.value.sortBy).toBe('distance');

      setSortBy('price');
      expect(appSettings.value.sortBy).toBe('price');
    });
  });

  describe('persistence', () => {
    it('persists changes to localStorage under APP_SETTINGS_STORAGE_KEY', async () => {
      const { setFuelType, setRadiusKm } = withScope(() => useAppSettings());

      setFuelType('lpg');
      setRadiusKm(30);
      await nextTick();

      const storedRaw = localStorage.getItem(APP_SETTINGS_STORAGE_KEY);
      expect(storedRaw).not.toBeNull();

      const parsed = JSON.parse(storedRaw!);
      expect(parsed).toMatchObject({
        fuelType: 'lpg',
        radiusKm: 30,
      });
    });
  });

  describe('singleton shared state', () => {
    it('shares state updates across multiple composable calls', () => {
      const instance1 = withScope(() => useAppSettings());
      const instance2 = withScope(() => useAppSettings());

      instance1.setRadiusKm(45);

      expect(instance2.appSettings.value.radiusKm).toBe(45);
    });
  });
});
