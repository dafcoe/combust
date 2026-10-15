import { LISBON_COORDS, MADRID_COORDS } from '../../geolocation.constant.ts';
import type { GeolocationCoordinates } from '../../geolocation.type.ts';
import { haversineDistanceKm } from '../haversine.util.ts';

describe('haversineDistanceKm', () => {
  it('should return 0 for the same point', () => {
    expect(haversineDistanceKm(LISBON_COORDS, LISBON_COORDS)).toBe(0);
  });

  it('should calculate the distance between Lisbon and Madrid accurately', () => {
    // Known distance: ~502 km
    const distance = haversineDistanceKm(LISBON_COORDS, MADRID_COORDS);

    expect(distance).toBeGreaterThan(500);
    expect(distance).toBeLessThan(510);
  });

  it('should be symmetric (distance A→B equals B→A)', () => {
    expect(
      haversineDistanceKm(LISBON_COORDS, MADRID_COORDS),
    ).toBe(
      haversineDistanceKm(MADRID_COORDS, LISBON_COORDS),
    );
  });

  it('should handle coordinates crossing the prime meridian', () => {
    const london: GeolocationCoordinates = { latitude: 51.5074, longitude: -0.1278 };
    const paris: GeolocationCoordinates = { latitude: 48.8566, longitude: 2.3522 };

    // Known distance: ~343 km
    const distance = haversineDistanceKm(london, paris);

    expect(distance).toBeGreaterThan(340);
    expect(distance).toBeLessThan(350);
  });

  describe('defensive coordinate validation', () => {
    const validPoint = LISBON_COORDS;

    it('should return NaN when latitude is out of range [-90, 90]', () => {
      const invalidPointNorth: GeolocationCoordinates = { latitude: 91, longitude: 0 };
      const invalidPointSouth: GeolocationCoordinates = { latitude: -90.1, longitude: 0 };

      expect(Number.isNaN(haversineDistanceKm(invalidPointNorth, validPoint))).toBe(true);
      expect(Number.isNaN(haversineDistanceKm(validPoint, invalidPointSouth))).toBe(true);
    });

    it('should return NaN when longitude is out of range [-180, 180]', () => {
      const invalidPointEast: GeolocationCoordinates = { latitude: 0, longitude: 180.1 };
      const invalidPointWest: GeolocationCoordinates = { latitude: 0, longitude: -181 };

      expect(Number.isNaN(haversineDistanceKm(invalidPointEast, validPoint))).toBe(true);
      expect(Number.isNaN(haversineDistanceKm(validPoint, invalidPointWest))).toBe(true);
    });

    it('should return NaN when coordinates contain NaN or Infinity', () => {
      const nanPoint: GeolocationCoordinates = { latitude: Number.NaN, longitude: 0 };
      const infinityPoint: GeolocationCoordinates = { latitude: 0, longitude: Number.POSITIVE_INFINITY };

      expect(Number.isNaN(haversineDistanceKm(nanPoint, validPoint))).toBe(true);
      expect(Number.isNaN(haversineDistanceKm(validPoint, infinityPoint))).toBe(true);
    });

    it('should return NaN when coordinate is null, undefined, or not an object', () => {
      expect(
        Number.isNaN(haversineDistanceKm(null as unknown as GeolocationCoordinates, validPoint)),
      ).toBe(true);
      expect(
        Number.isNaN(haversineDistanceKm(validPoint, undefined as unknown as GeolocationCoordinates)),
      ).toBe(true);
      expect(
        Number.isNaN(haversineDistanceKm('invalid' as unknown as GeolocationCoordinates, validPoint)),
      ).toBe(true);
    });
  });
});
