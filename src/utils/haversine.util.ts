import type { GeolocationCoordinates } from '@/types';

const EARTH_RADIUS_KM = 6_371;

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

function isValidCoordinate(coords: GeolocationCoordinates | null | undefined): boolean {
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

/**
 * Calculate the great-circle distance between two geographic points
 * using the Haversine formula.
 */
export function haversineDistanceKm(
  fromLocation: GeolocationCoordinates,
  toLocation: GeolocationCoordinates,
): number {
  if (!isValidCoordinate(fromLocation) || !isValidCoordinate(toLocation)) return Number.NaN;

  const distanceLatitude = toRadians(toLocation.latitude - fromLocation.latitude);
  const distanceLongitude = toRadians(toLocation.longitude - fromLocation.longitude);

  const a =
    Math.sin(distanceLatitude / 2) ** 2
    + Math.cos(toRadians(fromLocation.latitude))
    * Math.cos(toRadians(toLocation.latitude))
    * Math.sin(distanceLongitude / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(EARTH_RADIUS_KM * c * 100) / 100;
}
