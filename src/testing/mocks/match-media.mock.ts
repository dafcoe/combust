export type MockMatchMedia = {
  addEventListenerMock: ReturnType<typeof vi.fn>;
  matchMediaMock: ReturnType<typeof vi.fn>;
  removeEventListenerMock: ReturnType<typeof vi.fn>;
  triggerChange: (matches: boolean) => void;
};

export function setupMatchMedia(initialMatches = false): MockMatchMedia {
  let listeners: Array<(event: MediaQueryListEvent) => void> = [];

  const addEventListenerMock = vi.fn((event: string, callback: EventListenerOrEventListenerObject) => {
    if (event === 'change' && typeof callback === 'function') {
      listeners.push(callback as (event: MediaQueryListEvent) => void);
    }
  });

  const removeEventListenerMock = vi.fn((event: string, callback: EventListenerOrEventListenerObject) => {
    if (event === 'change') {
      listeners = listeners.filter((listener) => listener !== callback);
    }
  });

  const matchMediaMock = vi.fn().mockImplementation((query: string) => ({
    matches: initialMatches,
    media: query,
    onchange: null,
    addEventListener: addEventListenerMock,
    removeEventListener: removeEventListenerMock,
    dispatchEvent: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }));

  vi.stubGlobal('matchMedia', matchMediaMock);

  const triggerChange = (matches: boolean): void => {
    const event = { matches } as MediaQueryListEvent;
    listeners.forEach((listener) => { listener(event); });
  };

  return {
    addEventListenerMock,
    matchMediaMock,
    removeEventListenerMock,
    triggerChange,
  };
}
