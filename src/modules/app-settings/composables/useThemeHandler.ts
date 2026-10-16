import {
  computed,
  onMounted,
  onUnmounted,
  type Ref,
  ref,
  watch,
} from 'vue';
import type { ThemeMode } from '../app-settings.type';

export function useThemeHandler(theme: Ref<ThemeMode>) {
  let mediaQueryList: MediaQueryList | null = null;
  const systemPrefersDark = ref<boolean>(false);

  const applicableTheme = computed<ThemeMode>(() => {
    if (theme.value !== 'system') return theme.value;

    return systemPrefersDark.value ? 'dark' : 'light';
  });

  const isThemeDark = computed<boolean>(() => applicableTheme.value === 'dark');

  function applyTheme(): void {
    const rootElClassList = document.documentElement.classList;

    rootElClassList.remove('light', 'dark');
    rootElClassList.add(applicableTheme.value);
  }

  function onMediaQueryListChange(event: MediaQueryListEvent): void {
    systemPrefersDark.value = event.matches;
    applyTheme();
  }

  function registerSystemThemeListener(): void {
    unregisterSystemThemeListener();

    mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    systemPrefersDark.value = mediaQueryList.matches;

    mediaQueryList.addEventListener('change', onMediaQueryListChange);
  }

  function unregisterSystemThemeListener(): void {
    if (!mediaQueryList) return;

    mediaQueryList.removeEventListener('change', onMediaQueryListChange);
    mediaQueryList = null;
  }

  watch(
    theme,
    (newTheme) => {
      if (newTheme === 'system') {
        registerSystemThemeListener();
      } else {
        unregisterSystemThemeListener();
      }

      applyTheme();
    },
  );

  onMounted(() => {
    if (theme.value === 'system') registerSystemThemeListener();
    applyTheme();
  });

  onUnmounted(() => {
    unregisterSystemThemeListener();
  });

  return {
    isThemeDark,
  };
}
