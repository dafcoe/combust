import { haversineDistanceKm } from '../haversine.util.ts';
import type { GeolocationCoordinates } from '@/types';

describe('haversineDistanceKm', () => {
  it('should return 0 for the same point', () => {
    const point: GeolocationCoordinates = { latitude: 38.7223, longitude: -9.1393 };

    expect(haversineDistanceKm(point, point)).toBe(0);
  });

  it('should calculate the distance between Lisbon and Madrid accurately', () => {
    // Known distance: ~502 km
    const lisbon: GeolocationCoordinates = { latitude: 38.7223, longitude: -9.1393 };
    const madrid: GeolocationCoordinates = { latitude: 40.4168, longitude: -3.7038 };

    const distance = haversineDistanceKm(lisbon, madrid);

    expect(distance).toBeGreaterThan(500);
    expect(distance).toBeLessThan(510);
  });

  it('should calculate the distance between Porto and Faro accurately', () => {
    // Known distance: ~466 km
    const porto: GeolocationCoordinates = { latitude: 41.1579, longitude: -8.6291 };
    const faro: GeolocationCoordinates = { latitude: 37.0194, longitude: -7.9304 };

    const distance = haversineDistanceKm(porto, faro);

    expect(distance).toBeGreaterThan(460);
    expect(distance).toBeLessThan(470);
  });

  it('should be symmetric (distance A→B equals B→A)', () => {
    const lisbon: GeolocationCoordinates = { latitude: 38.7223, longitude: -9.1393 };
    const madrid: GeolocationCoordinates = { latitude: 40.4168, longitude: -3.7038 };

    expect(haversineDistanceKm(lisbon, madrid)).toBe(haversineDistanceKm(madrid, lisbon));
  });

  it('should calculate short distances (within the same city)', () => {
    // Rossio to Belém, Lisbon: ~6.3 km
    const rossio: GeolocationCoordinates = { latitude: 38.7139, longitude: -9.1394 };
    const belem: GeolocationCoordinates = { latitude: 38.6977, longitude: -9.2068 };

    const distance = haversineDistanceKm(rossio, belem);

    expect(distance).toBeGreaterThan(5);
    expect(distance).toBeLessThan(8);
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
    const validPoint: GeolocationCoordinates = { latitude: 38.7223, longitude: -9.1393 };

    it('should return NaN when latitude is out of range [-90, 90]', () => {
      const invalidNorth: GeolocationCoordinates = { latitude: 91, longitude: 0 };
      const invalidSouth: GeolocationCoordinates = { latitude: -90.1, longitude: 0 };

      expect(Number.isNaN(haversineDistanceKm(invalidNorth, validPoint))).toBe(true);
      expect(Number.isNaN(haversineDistanceKm(validPoint, invalidSouth))).toBe(true);
    });

    it('should return NaN when longitude is out of range [-180, 180]', () => {
      const invalidEast: GeolocationCoordinates = { latitude: 0, longitude: 180.1 };
      const invalidWest: GeolocationCoordinates = { latitude: 0, longitude: -181 };

      expect(Number.isNaN(haversineDistanceKm(invalidEast, validPoint))).toBe(true);
      expect(Number.isNaN(haversineDistanceKm(validPoint, invalidWest))).toBe(true);
    });

    it('should return NaN when coordinates contain NaN or Infinity', () => {
      const nanPoint: GeolocationCoordinates = { latitude: Number.NaN, longitude: 0 };
      const infinityPoint: GeolocationCoordinates = { latitude: 0, longitude: Number.POSITIVE_INFINITY };

      expect(Number.isNaN(haversineDistanceKm(nanPoint, validPoint))).toBe(true);
      expect(Number.isNaN(haversineDistanceKm(validPoint, infinityPoint))).toBe(true);
    });

    it('should return NaN when coordinate is null, undefined, or not an object', () => {
      expect(Number.isNaN(haversineDistanceKm(null as unknown as GeolocationCoordinates, validPoint))).toBe(true);
      expect(Number.isNaN(haversineDistanceKm(validPoint, undefined as unknown as GeolocationCoordinates))).toBe(true);
      expect(Number.isNaN(haversineDistanceKm('invalid' as unknown as GeolocationCoordinates, validPoint))).toBe(true);
    });
  });
});
