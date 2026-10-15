export function createMatchMediaMock(initialMatches: boolean) {
  let changeHandler: ((event: MediaQueryListEvent) => void) | null = null;

  const mql = {
    matches: initialMatches,
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn((event: string, callback: (e: MediaQueryListEvent) => void) => {
      if (event === 'change') changeHandler = callback;
    }),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };

  window.matchMedia = vi.fn().mockReturnValue(mql);

  return {
    mql,
    dispatchThemeChange: (matches: boolean): void => {
      mql.matches = matches;
      if (changeHandler) changeHandler({ matches } as MediaQueryListEvent);
    },
  };
}