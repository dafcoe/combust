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
});
