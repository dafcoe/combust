import type { AppSettings } from './app-settings.type.ts';

export const DEFAULT_APP_SETTINGS: AppSettings = {
  theme: 'system',
  fuelType: 'gasoline95',
  radiusKm: 10,
  sortBy: 'price',
};

export const APP_SETTINGS_STORAGE_KEY = 'combust_app_settings';
