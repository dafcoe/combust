import { resetState, useGeolocation } from '../useGeolocation.ts';
import {
  mockGeolocationDenied,
  mockGeolocationSuccess,
  mockGeolocationUnavailable,
  mockPermissionsDenied,
  PERMISSION_DENIED,
} from './useGeolocation.spec-utils.ts';
import { DEFAULT_COORDS, MADRID_COORDS } from '@/constants';

describe('useGeolocation', () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
    resetState();
  });

  it('should update state on successful getCurrentPosition', async () => {
    // Assemble
    mockGeolocationSuccess(MADRID_COORDS.latitude, MADRID_COORDS.longitude);
    const { coords, permissionStatus, isLocating, error, getCurrentPosition } = useGeolocation();

    // Act
    await getCurrentPosition();

    // Assert
    expect(coords.value).toEqual(MADRID_COORDS);
    expect(permissionStatus.value).toBe('granted');
    expect(isLocating.value).toBe(false);
    expect(error.value).toBeNull();
  });

  it('should update state on denied getCurrentPosition using fall back DEFAULT_COORDS', async () => {
    // Assemble
    mockGeolocationDenied();
    const { coords, error, permissionStatus, isLocating, getCurrentPosition } = useGeolocation();

    // Act
    await getCurrentPosition();

    // Assert
    expect(coords.value).toEqual(DEFAULT_COORDS);
    expect(permissionStatus.value).toBe('denied');
    expect(isLocating.value).toBe(false);
    expect(error.value).not.toBeNull();
    expect(error.value?.code).toBe(PERMISSION_DENIED);
  });

  it('should update state gracefully when geolocation API is unavailable', async () => {
    // Assemble
    mockGeolocationUnavailable();
    const { coords, permissionStatus, isLocating, error, getCurrentPosition } = useGeolocation();

    // Act
    await getCurrentPosition();

    // Assert
    expect(coords.value).toEqual(DEFAULT_COORDS);
    expect(permissionStatus.value).toBe('unavailable');
    expect(isLocating.value).toBe(false);
    expect(error.value).toBeNull();
  });

  it('should return early with denied status when permissions query state is denied', async () => {
    // Assemble
    mockPermissionsDenied();
    const { coords, permissionStatus, isLocating, error, getCurrentPosition } = useGeolocation();

    // Act
    await getCurrentPosition();

    // Assert
    expect(coords.value).toEqual(DEFAULT_COORDS);
    expect(permissionStatus.value).toBe('denied');
    expect(isLocating.value).toBe(false);
    expect(error.value).toBeNull();
    expect(navigator.geolocation.getCurrentPosition).not.toHaveBeenCalled();
  });

  it('should update state on successful watchPosition', () => {
    // Assemble
    mockGeolocationSuccess(MADRID_COORDS.latitude, MADRID_COORDS.longitude);
    const { coords, permissionStatus, isLocating, error, watchPosition } = useGeolocation();

    // Act
    watchPosition();

    // Assert
    expect(coords.value).toEqual(MADRID_COORDS);
    expect(permissionStatus.value).toBe('granted');
    expect(isLocating.value).toBe(false);
    expect(error.value).toBeNull();
  });

  it('should update state on denied watchPosition using fall back DEFAULT_COORDS', () => {
    // Assemble
    mockGeolocationDenied();
    const { coords, permissionStatus, isLocating, error, watchPosition } = useGeolocation();

    // Act
    watchPosition();

    // Assert
    expect(coords.value).toEqual(DEFAULT_COORDS);
    expect(permissionStatus.value).toBe('denied');
    expect(isLocating.value).toBe(false);
    expect(error.value).not.toBeNull();
    expect(error.value?.code).toBe(PERMISSION_DENIED);
  });

  it('should update state gracefully on watchPosition when geolocation unavailable', () => {
    // Assemble
    mockGeolocationUnavailable();
    const { coords, permissionStatus, isLocating, error, watchPosition } = useGeolocation();

    // Act
    watchPosition();

    // Assert
    expect(coords.value).toEqual(DEFAULT_COORDS);
    expect(permissionStatus.value).toBe('unavailable');
    expect(isLocating.value).toBe(false);
    expect(error.value).toBeNull();
  });

  it('should call clearWatch on stopWatching', () => {
    // Assemble
    mockGeolocationSuccess(MADRID_COORDS.latitude, MADRID_COORDS.longitude);
    const { watchPosition, stopWatching } = useGeolocation();

    // Act
    watchPosition();
    stopWatching();

    // Assert
    expect(navigator.geolocation.clearWatch).toHaveBeenCalledWith(1);
  });
});
