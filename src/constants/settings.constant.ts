import { DEFAULT_THEME_MODE } from './theme.constant.ts';
import type { UserSettings } from '@/types';

export const DEFAULT_USER_SETTINGS: UserSettings = {
  theme: DEFAULT_THEME_MODE,
  fuelType: 'gasoline95',
  radiusKm: 10,
  sortBy: 'price',
};

export const USER_SETTINGS_STORAGE_KEY = 'combust_user_settings';
