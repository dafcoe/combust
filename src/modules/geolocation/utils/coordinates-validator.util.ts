import type { GeolocationCoordinates } from '../geolocation.type.ts';

export function isValidCoordinate(coords: GeolocationCoordinates | null | undefined): boolean {
  if (!coords || typeof coords !== 'object') return false;

  const { latitude, longitude } = coords;

  return (
    typeof latitude === 'number'
    && typeof longitude === 'number'
    && Number.isFinite(latitude)
    && Number.isFinite(longitude)
    && latitude >= -90
    && latitude <= 90
    && longitude >= -180
    && longitude <= 180
  );
}