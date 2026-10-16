import type { GeolocationCoordinates } from '../../geolocation.type.ts';
import {
  lisbonGeolocationCoordinatesFixture,
  londonGeolocationCoordinatesFixture,
  madridGeolocationCoordinatesFixture,
  parisGeolocationCoordinatesFixture,
} from '../../testing/fixtures/location-coordinates.fixture.ts';
import { haversineDistanceKm } from '../haversine.util.ts';

describe('haversineDistanceKm', () => {
  it('should return 0 for the same point', () => {
    const distance = haversineDistanceKm(
      lisbonGeolocationCoordinatesFixture,
      lisbonGeolocationCoordinatesFixture,
    );

    expect(distance).toBe(0);
  });

  it('should calculate the distance between Lisbon and Madrid accurately', () => {
    // Known distance: ~502 km
    const distance = haversineDistanceKm(
      lisbonGeolocationCoordinatesFixture,
      madridGeolocationCoordinatesFixture,
    );

    expect(distance).toBeGreaterThan(500);
    expect(distance).toBeLessThan(510);
  });

  it('should be symmetric (distance A→B equals B→A)', () => {
    const distanceLisbonMadrid = haversineDistanceKm(
      lisbonGeolocationCoordinatesFixture,
      madridGeolocationCoordinatesFixture,
    );

    const distanceMadridLisbon = haversineDistanceKm(
      madridGeolocationCoordinatesFixture,
      lisbonGeolocationCoordinatesFixture,
    );

    expect(distanceLisbonMadrid).toBe(distanceMadridLisbon);
  });

  it('should handle coordinates crossing the prime meridian', () => {
    // Known distance: ~343 km
    const distance = haversineDistanceKm(
      londonGeolocationCoordinatesFixture,
      parisGeolocationCoordinatesFixture,
    );

    expect(distance).toBeGreaterThan(340);
    expect(distance).toBeLessThan(350);
  });

  describe('defensive coordinate validation', () => {
    it('should return NaN when either coordinate is invalid', () => {
      const invalidPoint: GeolocationCoordinates = { latitude: 91, longitude: 0 };

      const distanceInvalidFrom = haversineDistanceKm(
        invalidPoint,
        lisbonGeolocationCoordinatesFixture,
      );
      const distanceInvalidTo = haversineDistanceKm(
        lisbonGeolocationCoordinatesFixture,
        invalidPoint,
      );

      expect(Number.isNaN(distanceInvalidFrom)).toBe(true);
      expect(Number.isNaN(distanceInvalidTo)).toBe(true);
    });
  });
});

