import {
  isReadonly,
  type Ref,
  toRaw,
} from 'vue';
import { DEFAULT_COORDS } from '../../geolocation.constant.ts';
import type {
  GeolocationCoordinates,
  GeolocationError,
  GeolocationPermissionStatus,
} from '../../geolocation.type.ts';
import { madridGeolocationCoordinatesFixture } from '../../testing/fixtures/location-coordinates.fixture.ts';
import { useGeolocation } from '../useGeolocation.ts';
import {
  cleanupScope,
  setupGeolocationMock,
  type MockGeolocation,
  withScope,
} from '@/testing';

describe('useGeolocation', () => {
  let geoMock: MockGeolocation;

  function resetState(): void {
    const {
      coords,
      error,
      isLocating,
      permissionStatus,
      stopWatching,
    } = withScope(() => useGeolocation());

    stopWatching();
    (toRaw(coords) as Ref<GeolocationCoordinates>).value = { ...DEFAULT_COORDS };
    (toRaw(permissionStatus) as Ref<GeolocationPermissionStatus>).value = 'prompt';
    (toRaw(isLocating) as Ref<boolean>).value = false;
    (toRaw(error) as Ref<GeolocationError | null>).value = null;
  }

  beforeEach(() => {
    geoMock = setupGeolocationMock();
    resetState();
  });

  afterEach(() => {
    cleanupScope();
    resetState();
    geoMock.restore();
  });

  describe('initial state and readonly exposures', () => {
    it('initializes with default values', () => {
      const {
        coords,
        error,
        isLocating,
        permissionStatus,
      } = withScope(() => useGeolocation());

      expect(coords.value).toEqual(DEFAULT_COORDS);
      expect(permissionStatus.value).toBe('prompt');
      expect(isLocating.value).toBe(false);
      expect(error.value).toBeNull();
    });

    it('exposes state refs as readonly', () => {
      const {
        coords,
        error,
        isLocating,
        permissionStatus,
      } = withScope(() => useGeolocation());

      expect(isReadonly(coords)).toBe(true);
      expect(isReadonly(permissionStatus)).toBe(true);
      expect(isReadonly(isLocating)).toBe(true);
      expect(isReadonly(error)).toBe(true);
    });
  });

  describe('getCurrentPosition', () => {
    it('sets permissionStatus to unavailable when navigator.geolocation is undefined', async () => {
      geoMock.restore();
      const originalDesc = Object.getOwnPropertyDescriptor(navigator, 'geolocation');
      Object.defineProperty(navigator, 'geolocation', { value: undefined, configurable: true });

      const { getCurrentPosition, permissionStatus } = withScope(() => useGeolocation());

      await getCurrentPosition();

      expect(permissionStatus.value).toBe('unavailable');

      if (originalDesc) {
        Object.defineProperty(navigator, 'geolocation', originalDesc);
      }
    });

    it('updates permissionStatus to denied without requesting position when permissions query is denied', async () => {
      geoMock.setPermissionState('denied');

      const {
        coords,
        getCurrentPosition,
        permissionStatus,
      } = withScope(() => useGeolocation());

      await getCurrentPosition();

      expect(permissionStatus.value).toBe('denied');
      expect(coords.value).toEqual(DEFAULT_COORDS);
      expect(geoMock.getCurrentPositionMock).not.toHaveBeenCalled();
    });

    it('updates coords and permissionStatus to granted on successful position fetch', async () => {
      const {
        coords,
        error,
        getCurrentPosition,
        isLocating,
        permissionStatus,
      } = withScope(() => useGeolocation());

      const fetchPromise = getCurrentPosition();
      expect(isLocating.value).toBe(true);
      expect(error.value).toBeNull();

      await Promise.resolve();
      geoMock.triggerSuccess(madridGeolocationCoordinatesFixture);
      await fetchPromise;

      expect(coords.value).toEqual(madridGeolocationCoordinatesFixture);
      expect(permissionStatus.value).toBe('granted');
      expect(isLocating.value).toBe(false);
      expect(error.value).toBeNull();
    });

    it('passes high accuracy and timeout options to getCurrentPosition', async () => {
      const { getCurrentPosition } = withScope(() => useGeolocation());

      const fetchPromise = getCurrentPosition();
      await Promise.resolve();
      geoMock.triggerSuccess(madridGeolocationCoordinatesFixture);
      await fetchPromise;

      expect(geoMock.getCurrentPositionMock).toHaveBeenCalledWith(
        expect.any(Function),
        expect.any(Function),
        {
          enableHighAccuracy: true,
          timeout: 10_000,
          maximumAge: 30_000,
        },
      );
    });

    it('updates error and resets coords to default when position fetch fails', async () => {
      const {
        coords,
        error,
        getCurrentPosition,
        isLocating,
        permissionStatus,
      } = withScope(() => useGeolocation());

      const fetchPromise = getCurrentPosition();

      await Promise.resolve();
      geoMock.triggerError({ code: 1, message: 'User denied Geolocation' });
      await fetchPromise;

      expect(coords.value).toEqual(DEFAULT_COORDS);
      expect(permissionStatus.value).toBe('denied');
      expect(error.value).toEqual({ code: 1, message: 'User denied Geolocation' });
      expect(isLocating.value).toBe(false);
    });

    it('falls back to getCurrentPosition when navigator.permissions query throws', async () => {
      geoMock.permissionsQueryMock.mockRejectedValueOnce(new Error('Permissions query failed'));

      const { getCurrentPosition, permissionStatus } = withScope(() => useGeolocation());

      const fetchPromise = getCurrentPosition();
      await Promise.resolve();
      geoMock.triggerSuccess(madridGeolocationCoordinatesFixture);
      await fetchPromise;

      expect(geoMock.getCurrentPositionMock).toHaveBeenCalled();
      expect(permissionStatus.value).toBe('granted');
    });

    it('proceeds to getCurrentPosition when navigator.permissions is not in navigator', async () => {
      const originalPermissions = navigator.permissions;
      Reflect.deleteProperty(navigator, 'permissions');

      const { getCurrentPosition, permissionStatus } = withScope(() => useGeolocation());

      const fetchPromise = getCurrentPosition();
      await Promise.resolve();
      geoMock.triggerSuccess(madridGeolocationCoordinatesFixture);
      await fetchPromise;

      expect(geoMock.getCurrentPositionMock).toHaveBeenCalled();
      expect(permissionStatus.value).toBe('granted');

      Object.defineProperty(navigator, 'permissions', {
        value: originalPermissions,
        configurable: true,
        writable: true,
      });
    });
  });

  describe('watchPosition and stopWatching', () => {
    it('sets permissionStatus to unavailable when navigator.geolocation is undefined', () => {
      geoMock.restore();
      const originalDesc = Object.getOwnPropertyDescriptor(navigator, 'geolocation');
      Object.defineProperty(navigator, 'geolocation', { value: undefined, configurable: true });

      const { permissionStatus, watchPosition } = withScope(() => useGeolocation());

      watchPosition();

      expect(permissionStatus.value).toBe('unavailable');

      if (originalDesc) {
        Object.defineProperty(navigator, 'geolocation', originalDesc);
      }
    });

    it('starts watching position and updates state on success', () => {
      const {
        coords,
        error,
        isLocating,
        permissionStatus,
        watchPosition,
      } = withScope(() => useGeolocation());

      watchPosition();

      expect(geoMock.watchPositionMock).toHaveBeenCalledWith(
        expect.any(Function),
        expect.any(Function),
        {
          enableHighAccuracy: true,
          timeout: 10_000,
          maximumAge: 5_000,
        },
      );
      expect(isLocating.value).toBe(true);

      geoMock.triggerSuccess(madridGeolocationCoordinatesFixture);

      expect(coords.value).toEqual(madridGeolocationCoordinatesFixture);
      expect(permissionStatus.value).toBe('granted');
      expect(isLocating.value).toBe(false);
      expect(error.value).toBeNull();
    });

    it('updates error and resets coords when watching encounters an error', () => {
      const {
        coords,
        error,
        isLocating,
        permissionStatus,
        watchPosition,
      } = withScope(() => useGeolocation());

      watchPosition();

      geoMock.triggerError({ code: 2, message: 'Position unavailable' });

      expect(coords.value).toEqual(DEFAULT_COORDS);
      expect(permissionStatus.value).toBe('denied');
      expect(error.value).toEqual({ code: 2, message: 'Position unavailable' });
      expect(isLocating.value).toBe(false);
    });

    it('stops watching and clears active watchId', () => {
      const { stopWatching, watchPosition } = withScope(() => useGeolocation());

      watchPosition();
      stopWatching();

      expect(geoMock.clearWatchMock).toHaveBeenCalledWith(1);
    });

    it('clears previous watch before re-watching when watchPosition is called repeatedly', () => {
      const { watchPosition } = withScope(() => useGeolocation());

      watchPosition();
      watchPosition();

      expect(geoMock.clearWatchMock).toHaveBeenCalledWith(1);
      expect(geoMock.watchPositionMock).toHaveBeenCalledTimes(2);
    });

    it('does not invoke clearWatch when stopWatching is called without an active watch', () => {
      const { stopWatching } = withScope(() => useGeolocation());

      stopWatching();

      expect(geoMock.clearWatchMock).not.toHaveBeenCalled();
    });
  });

  describe('singleton shared state', () => {
    it('shares reactive coordinates across multiple composable instances', async () => {
      const instance1 = withScope(() => useGeolocation());
      const instance2 = withScope(() => useGeolocation());

      const fetchPromise = instance1.getCurrentPosition();
      await Promise.resolve();
      geoMock.triggerSuccess(madridGeolocationCoordinatesFixture);
      await fetchPromise;

      expect(instance2.coords.value).toEqual(madridGeolocationCoordinatesFixture);
      expect(instance2.permissionStatus.value).toBe('granted');
    });
  });
});
