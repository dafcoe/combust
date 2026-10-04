import { readonly, ref } from 'vue';
import { DEFAULT_COORDS } from '@/constants';
import type { GeolocationCoordinates, GeolocationError, GeolocationPermissionStatus } from '@/types';

const coords = ref<GeolocationCoordinates>(DEFAULT_COORDS);
const permissionStatus = ref<GeolocationPermissionStatus>('prompt');
const isLocating = ref(false);
const error = ref<GeolocationError | null>(null);

let watchId: number | null = null;

function updateState(
  newCoords: GeolocationCoordinates,
  newPermissionStatus: GeolocationPermissionStatus,
  newError: GeolocationError | null = null,
): void {
  coords.value = newCoords;
  permissionStatus.value = newPermissionStatus;
  isLocating.value = false;
  error.value = newError;
}

function buildGeolocationError({ code, message }: GeolocationPositionError): GeolocationError {
  return { code, message };
}

function onSuccess(geolocationPosition: GeolocationPosition): void {
  const newCoords = {
    latitude: geolocationPosition.coords.latitude,
    longitude: geolocationPosition.coords.longitude,
  };

  updateState(newCoords, 'granted');
}

function onError(rawError: GeolocationPositionError): void {
  updateState(DEFAULT_COORDS, 'denied', buildGeolocationError(rawError));
}

/**
 * Request the user's current position once.
 * Falls back to default coordinates if permission is denied or unavailable.
 */
async function getCurrentPosition(): Promise<void> {
  if (!navigator.geolocation) {
    updateState(DEFAULT_COORDS, 'unavailable');
    return;
  }

  isLocating.value = true;
  error.value = null;

  try {
    if ('permissions' in navigator) {
      const geolocationPermission = await navigator.permissions.query({ name: 'geolocation' });

      if (geolocationPermission.state === 'denied') {
        updateState(DEFAULT_COORDS, 'denied');
        return;
      }
    }
  } catch {}

  navigator.geolocation.getCurrentPosition(onSuccess, onError, {
    enableHighAccuracy: true,
    timeout: 10_000,
    maximumAge: 30_000,
  });
}

/**
 * Watch the user's position continuously.
 * Falls back to default coordinates if permission is denied.
 */
function watchPosition(): void {
  if (!navigator.geolocation) {
    updateState(DEFAULT_COORDS, 'unavailable');
    return;
  }

  stopWatching();
  isLocating.value = true;
  error.value = null;

  watchId = navigator.geolocation.watchPosition(onSuccess, onError, {
    enableHighAccuracy: true,
    timeout: 10_000,
    maximumAge: 5_000,
  });
}

/**
 * Stop an active watchPosition subscription.
 */
function stopWatching(): void {
  if (watchId === null || !navigator.geolocation) return;

  navigator.geolocation.clearWatch(watchId);
  watchId = null;
}

export function resetState(): void {
  updateState(DEFAULT_COORDS, 'prompt');
  watchId = null;
}

export function useGeolocation() {
  return {
    coords: readonly(coords),
    permissionStatus: readonly(permissionStatus),
    isLocating: readonly(isLocating),
    error: readonly(error),
    getCurrentPosition,
    watchPosition,
    stopWatching,
  };
}
