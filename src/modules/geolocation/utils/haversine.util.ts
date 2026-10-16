import { EARTH_RADIUS_KM } from '../geolocation.constant.ts';
import type { GeolocationCoordinates } from '../geolocation.type.ts';
import { isValidCoordinate } from './coordinates-validator.util.ts';

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
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
