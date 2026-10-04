import { computed, ref, watch } from 'vue';
import { useUserSettings } from '../use-user-settings/useUserSettings.ts';
import type { EffectiveThemeMode } from '@/types';

const { theme: userSettingsTheme, setTheme } = useUserSettings();

const systemPrefersDark = ref(false);

let mediaQueryList: MediaQueryList | null = null;
let mediaQueryHandler: ((event: MediaQueryListEvent) => void) | null = null;

const theme = computed<EffectiveThemeMode>(() => {
  if (userSettingsTheme.value === 'system') return systemPrefersDark.value ? 'dark' : 'light';

  return userSettingsTheme.value;
});

const isDarkTheme = computed<boolean>(() => theme.value === 'dark');

function applyTheme(): void {
  const rootElementClassList = document.documentElement.classList;

  if (isDarkTheme.value) {
    rootElementClassList.add('dark');
    rootElementClassList.remove('light');
  } else {
    rootElementClassList.add('light');
    rootElementClassList.remove('dark');
  }
}

function initSystemThemeListener(): void {
  if (typeof window === 'undefined' || !window.matchMedia) return;

  cleanupSystemThemeListener();

  mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  systemPrefersDark.value = mediaQueryList.matches;

  mediaQueryHandler = (event: MediaQueryListEvent): void => {
    systemPrefersDark.value = event.matches;
    applyTheme();
  };

  mediaQueryList.addEventListener('change', mediaQueryHandler);
}

function cleanupSystemThemeListener(): void {
  if (!mediaQueryList || !mediaQueryHandler) return;

  mediaQueryList.removeEventListener('change', mediaQueryHandler);
  mediaQueryList = null;
  mediaQueryHandler = null;
}

watch(
  theme,
  () => {
    applyTheme();
  },
  { immediate: true },
);

initSystemThemeListener();

export function resetTheme(): void {
  initSystemThemeListener();
  applyTheme();
}

export function useTheme() {
  return {
    theme,
    isDarkTheme,
    setTheme,
  };
}
