export type MockGeolocation = {
  clearWatchMock: ReturnType<typeof vi.fn>;
  getCurrentPositionMock: ReturnType<typeof vi.fn>;
  permissionsQueryMock: ReturnType<typeof vi.fn>;
  restore: () => void;
  setPermissionState: (state: 'granted' | 'denied' | 'prompt') => void;
  triggerError: (error: { code: number; message: string }) => void;
  triggerSuccess: (coords: { latitude: number; longitude: number }) => void;
  watchPositionMock: ReturnType<typeof vi.fn>;
};

export function setupGeolocationMock(): MockGeolocation {
  let nextWatchId = 0;
  let permissionState: 'granted' | 'denied' | 'prompt' = 'prompt';
  const pendingSuccessCallbacks: Array<(position: GeolocationPosition) => void> = [];
  const pendingErrorCallbacks: Array<(error: GeolocationPositionError) => void> = [];
  const activeWatchers = new Map<number, {
    onError: (error: GeolocationPositionError) => void;
    onSuccess: (position: GeolocationPosition) => void;
  }>();

  const getCurrentPositionMock = vi.fn((
    success: (position: GeolocationPosition) => void,
    error?: (error: GeolocationPositionError) => void,
  ) => {
    pendingSuccessCallbacks.push(success);
    if (error) pendingErrorCallbacks.push(error);
  });

  const watchPositionMock = vi.fn((
    success: (position: GeolocationPosition) => void,
    error?: (error: GeolocationPositionError) => void,
  ) => {
    nextWatchId += 1;
    activeWatchers.set(nextWatchId, {
      onSuccess: success,
      onError: error ?? (() => {}),
    });
    return nextWatchId;
  });

  const clearWatchMock = vi.fn((watchId: number) => {
    activeWatchers.delete(watchId);
  });

  const permissionsQueryMock = vi.fn(async () => ({
    state: permissionState,
  }));

  const originalGeolocationDescriptor = Object.getOwnPropertyDescriptor(navigator, 'geolocation');
  const originalPermissionsDescriptor = Object.getOwnPropertyDescriptor(navigator, 'permissions');

  Object.defineProperty(navigator, 'geolocation', {
    value: {
      getCurrentPosition: getCurrentPositionMock,
      watchPosition: watchPositionMock,
      clearWatch: clearWatchMock,
    },
    configurable: true,
    writable: true,
  });

  Object.defineProperty(navigator, 'permissions', {
    value: {
      query: permissionsQueryMock,
    },
    configurable: true,
    writable: true,
  });

  const triggerSuccess = (coords: { latitude: number; longitude: number }): void => {
    const position = {
      coords: {
        accuracy: 10,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: coords.latitude,
        longitude: coords.longitude,
        speed: null,
      },
      timestamp: Date.now(),
    } as GeolocationPosition;

    while (pendingSuccessCallbacks.length > 0) {
      const cb = pendingSuccessCallbacks.shift();
      cb?.(position);
    }
    pendingErrorCallbacks.length = 0;

    activeWatchers.forEach(({ onSuccess }) => {
      onSuccess(position);
    });
  };

  const triggerError = (err: { code: number; message: string }): void => {
    const positionError = {
      code: err.code,
      message: err.message,
      PERMISSION_DENIED: 1,
      POSITION_UNAVAILABLE: 2,
      TIMEOUT: 3,
    } as GeolocationPositionError;

    while (pendingErrorCallbacks.length > 0) {
      const cb = pendingErrorCallbacks.shift();
      cb?.(positionError);
    }
    pendingSuccessCallbacks.length = 0;

    activeWatchers.forEach(({ onError }) => {
      onError(positionError);
    });
  };

  const setPermissionState = (state: 'granted' | 'denied' | 'prompt'): void => {
    permissionState = state;
  };

  const restore = (): void => {
    if (originalGeolocationDescriptor) {
      Object.defineProperty(navigator, 'geolocation', originalGeolocationDescriptor);
    } else {
      Reflect.deleteProperty(navigator, 'geolocation');
    }

    if (originalPermissionsDescriptor) {
      Object.defineProperty(navigator, 'permissions', originalPermissionsDescriptor);
    } else {
      Reflect.deleteProperty(navigator, 'permissions');
    }
  };

  return {
    clearWatchMock,
    getCurrentPositionMock,
    permissionsQueryMock,
    restore,
    setPermissionState,
    triggerError,
    triggerSuccess,
    watchPositionMock,
  };
}
