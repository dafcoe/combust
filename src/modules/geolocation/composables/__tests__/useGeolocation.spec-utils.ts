export const PERMISSION_DENIED = 1;
export const POSITION_UNAVAILABLE = 2;
export const TIMEOUT_ERROR = 3;

export function mockGeolocationSuccess(latitude: number, longitude: number): void {
  const position: GeolocationPosition = {
    coords: {
      latitude,
      longitude,
      accuracy: 10,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null,
      toJSON: vi.fn(),
    },
    timestamp: Date.now(),
    toJSON: vi.fn(),
  };

  vi.stubGlobal('navigator', {
    geolocation: {
      getCurrentPosition: vi.fn((success: PositionCallback) => success(position)),
      watchPosition: vi.fn((success: PositionCallback) => {
        success(position);
        return 1;
      }),
      clearWatch: vi.fn(),
    },
    permissions: undefined,
  });
}

export function mockGeolocationDenied(): void {
  const posError = {
    code: PERMISSION_DENIED,
    message: 'User denied geolocation',
    PERMISSION_DENIED,
    POSITION_UNAVAILABLE,
    TIMEOUT: TIMEOUT_ERROR,
  } as GeolocationPositionError;

  vi.stubGlobal('navigator', {
    geolocation: {
      getCurrentPosition: vi.fn((_: PositionCallback, error: PositionErrorCallback) => error(posError)),
      watchPosition: vi.fn((_: PositionCallback, error: PositionErrorCallback) => {
        error(posError);
        return 2;
      }),
      clearWatch: vi.fn(),
    },
    permissions: undefined,
  });
}

export function mockGeolocationUnavailable(): void {
  vi.stubGlobal('navigator', {
    geolocation: undefined,
    permissions: undefined,
  });
}

export function mockPermissionsDenied(): void {
  vi.stubGlobal('navigator', {
    geolocation: {
      getCurrentPosition: vi.fn(),
      watchPosition: vi.fn(),
      clearWatch: vi.fn(),
    },
    permissions: {
      query: vi.fn().mockResolvedValue({ state: 'denied' }),
    },
  });
}