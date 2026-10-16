import { ref } from 'vue';
import { DEFAULT_COORDS } from '../../geolocation.constant.ts';
import type {
  GeolocationCoordinates,
  GeolocationError,
  GeolocationPermissionStatus,
} from '../../geolocation.type.ts';

export const mockCoords = ref<GeolocationCoordinates>({ ...DEFAULT_COORDS });
export const mockPermissionStatus = ref<GeolocationPermissionStatus>('prompt');
export const mockIsLocating = ref<boolean>(false);
export const mockGeolocationError = ref<GeolocationError | null>(null);

export const mockGetCurrentPosition = vi.fn(async () => {});
export const mockWatchPosition = vi.fn();
export const mockStopWatching = vi.fn();

export function resetGeolocationMock(): void {
  mockCoords.value = { ...DEFAULT_COORDS };
  mockPermissionStatus.value = 'prompt';
  mockIsLocating.value = false;
  mockGeolocationError.value = null;
  mockGetCurrentPosition.mockClear();
  mockWatchPosition.mockClear();
  mockStopWatching.mockClear();
}

export const mockUseGeolocation = vi.fn(() => ({
  coords: mockCoords,
  permissionStatus: mockPermissionStatus,
  isLocating: mockIsLocating,
  error: mockGeolocationError,
  getCurrentPosition: mockGetCurrentPosition,
  watchPosition: mockWatchPosition,
  stopWatching: mockStopWatching,
}));
