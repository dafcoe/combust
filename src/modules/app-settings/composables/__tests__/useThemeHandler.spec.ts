import { nextTick, ref } from 'vue';
import type { ThemeMode } from '../../app-settings.type.ts';
import { useThemeHandler } from '../useThemeHandler.ts';
import {
  cleanupSetup,
  setupMatchMedia,
  withSetup,
} from '@/testing';

describe('useThemeHandler', () => {
  afterEach(() => {
    cleanupSetup();
    document.documentElement.className = '';
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  describe('initial state with explicit theme', () => {
    it('applies light theme to document element and sets isThemeDark to false', () => {
      const { matchMediaMock } = setupMatchMedia(false);
      const theme = ref<ThemeMode>('light');

      const { isThemeDark } = withSetup(() => useThemeHandler(theme));

      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(isThemeDark.value).toBe(false);
      expect(matchMediaMock).not.toHaveBeenCalled();
    });

    it('applies dark theme to document element and sets isThemeDark to true', () => {
      const { matchMediaMock } = setupMatchMedia(false);
      const theme = ref<ThemeMode>('dark');

      const { isThemeDark } = withSetup(() => useThemeHandler(theme));

      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);
      expect(isThemeDark.value).toBe(true);
      expect(matchMediaMock).not.toHaveBeenCalled();
    });
  });

  describe('initial state with system theme', () => {
    it('applies dark theme when system prefers dark', () => {
      const { matchMediaMock, addEventListenerMock } = setupMatchMedia(true);
      const theme = ref<ThemeMode>('system');

      const { isThemeDark } = withSetup(() => useThemeHandler(theme));

      expect(matchMediaMock).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
      expect(addEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function));
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);
      expect(isThemeDark.value).toBe(true);
    });

    it('applies light theme when system prefers light', () => {
      const { matchMediaMock, addEventListenerMock } = setupMatchMedia(false);
      const theme = ref<ThemeMode>('system');

      const { isThemeDark } = withSetup(() => useThemeHandler(theme));

      expect(matchMediaMock).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
      expect(addEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function));
      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(isThemeDark.value).toBe(false);
    });
  });

  describe('reactivity when theme changes', () => {
    it('switches between explicit themes without registering system listener', async () => {
      const { matchMediaMock } = setupMatchMedia(false);
      const theme = ref<ThemeMode>('light');

      const { isThemeDark } = withSetup(() => useThemeHandler(theme));

      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(isThemeDark.value).toBe(false);

      theme.value = 'dark';
      await nextTick();

      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);
      expect(isThemeDark.value).toBe(true);
      expect(matchMediaMock).not.toHaveBeenCalled();
    });

    it('switches from explicit theme to system theme and registers listener', async () => {
      const { matchMediaMock, addEventListenerMock } = setupMatchMedia(true);
      const theme = ref<ThemeMode>('light');

      const { isThemeDark } = withSetup(() => useThemeHandler(theme));

      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(isThemeDark.value).toBe(false);
      expect(matchMediaMock).not.toHaveBeenCalled();

      theme.value = 'system';
      await nextTick();

      expect(matchMediaMock).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
      expect(addEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function));
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);
      expect(isThemeDark.value).toBe(true);
    });

    it('switches from system theme to explicit theme and unregisters system listener', async () => {
      const { removeEventListenerMock } = setupMatchMedia(true);
      const theme = ref<ThemeMode>('system');

      const { isThemeDark } = withSetup(() => useThemeHandler(theme));

      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(isThemeDark.value).toBe(true);

      theme.value = 'light';
      await nextTick();

      expect(removeEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function));
      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(isThemeDark.value).toBe(false);
    });
  });

  describe('system theme changes (media query change event)', () => {
    it('updates theme when OS preference changes while theme is set to system', () => {
      const { triggerChange } = setupMatchMedia(false);
      const theme = ref<ThemeMode>('system');

      const { isThemeDark } = withSetup(() => useThemeHandler(theme));

      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(isThemeDark.value).toBe(false);

      triggerChange(true);

      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);
      expect(isThemeDark.value).toBe(true);

      triggerChange(false);

      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(isThemeDark.value).toBe(false);
    });
  });

  describe('component lifecycle and cleanup', () => {
    it('unregisters media query listener when component unmounts', () => {
      const { removeEventListenerMock } = setupMatchMedia(false);
      const theme = ref<ThemeMode>('system');

      withSetup(() => useThemeHandler(theme));

      cleanupSetup();

      expect(removeEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function));
    });

    it('does not attempt to unregister listener on unmount if none was registered', () => {
      const { removeEventListenerMock } = setupMatchMedia(false);
      const theme = ref<ThemeMode>('light');

      withSetup(() => useThemeHandler(theme));

      cleanupSetup();

      expect(removeEventListenerMock).not.toHaveBeenCalled();
    });
  });
});
