import { nextTick } from 'vue';
import { resetTheme, useTheme } from '../useTheme.ts';
import { createMatchMediaMock } from './useTheme.spec-utils.ts';

describe('useTheme', () => {
  let matchMediaController: ReturnType<typeof createMatchMediaMock>;

  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    document.documentElement.classList.remove('dark', 'light');
    matchMediaController = createMatchMediaMock(false);
    resetTheme();
  });

  it('should initialize light theme by default', () => {
    // Assemble
    const { theme, isDarkTheme } = useTheme();

    // Assert
    expect(theme.value).toBe('light');
    expect(isDarkTheme.value).toBe(false);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should apply the dark/light theme when matchMedia changes', async () => {
    // Assemble
    const { theme, isDarkTheme } = useTheme();

    // Act
    matchMediaController.dispatchThemeChange(true);
    await nextTick();

    // Assert
    expect(theme.value).toBe('dark');
    expect(isDarkTheme.value).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);

    // Act
    matchMediaController.dispatchThemeChange(false);
    await nextTick();

    // Assert
    expect(theme.value).toBe('light');
    expect(isDarkTheme.value).toBe(false);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should apply the dark/light theme via setTheme', async () => {
    // Assemble
    const { theme, isDarkTheme, setTheme } = useTheme();

    // Act
    setTheme('dark');
    await nextTick();

    // Assert
    expect(theme.value).toBe('dark');
    expect(isDarkTheme.value).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);

    // Act
    setTheme('light');
    await nextTick();

    // Assert
    expect(theme.value).toBe('light');
    expect(isDarkTheme.value).toBe(false);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
