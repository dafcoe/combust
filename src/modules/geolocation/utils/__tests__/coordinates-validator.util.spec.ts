import type { GeolocationCoordinates } from '../../geolocation.type.ts';
import { lisbonGeolocationCoordinatesFixture } from '../../testing/fixtures/location-coordinates.fixture.ts';
import { isValidCoordinate } from '../coordinates-validator.util.ts';

describe('isValidCoordinate', () => {
  describe('valid coordinates', () => {
    it('should return true for valid coordinates', () => {
      expect(isValidCoordinate(lisbonGeolocationCoordinatesFixture)).toBe(true);
      expect(isValidCoordinate({ latitude: 0, longitude: 0 })).toBe(true);
    });

    it('should return true for edge boundary coordinates', () => {
      expect(isValidCoordinate({ latitude: 90, longitude: 180 })).toBe(true);
      expect(isValidCoordinate({ latitude: -90, longitude: -180 })).toBe(true);
      expect(isValidCoordinate({ latitude: 90, longitude: -180 })).toBe(true);
      expect(isValidCoordinate({ latitude: -90, longitude: 180 })).toBe(true);
    });
  });

  describe('invalid coordinates', () => {
    it('should return false when latitude is out of range [-90, 90]', () => {
      expect(isValidCoordinate({ latitude: 90.1, longitude: 0 })).toBe(false);
      expect(isValidCoordinate({ latitude: 91, longitude: 0 })).toBe(false);
      expect(isValidCoordinate({ latitude: -90.1, longitude: 0 })).toBe(false);
      expect(isValidCoordinate({ latitude: -91, longitude: 0 })).toBe(false);
    });

    it('should return false when longitude is out of range [-180, 180]', () => {
      expect(isValidCoordinate({ latitude: 0, longitude: 180.1 })).toBe(false);
      expect(isValidCoordinate({ latitude: 0, longitude: 181 })).toBe(false);
      expect(isValidCoordinate({ latitude: 0, longitude: -180.1 })).toBe(false);
      expect(isValidCoordinate({ latitude: 0, longitude: -181 })).toBe(false);
    });

    it('should return false when coordinates contain NaN or Infinity', () => {
      expect(isValidCoordinate({ latitude: Number.NaN, longitude: 0 })).toBe(false);
      expect(isValidCoordinate({ latitude: 0, longitude: Number.NaN })).toBe(false);
      expect(isValidCoordinate({ latitude: Number.POSITIVE_INFINITY, longitude: 0 })).toBe(false);
      expect(isValidCoordinate({ latitude: 0, longitude: Number.NEGATIVE_INFINITY })).toBe(false);
    });

    it('should return false when coordinates are not numbers', () => {
      expect(isValidCoordinate({ latitude: '38.72' as unknown as number, longitude: 0 })).toBe(false);
      expect(isValidCoordinate({ latitude: 0, longitude: 'invalid' as unknown as number })).toBe(false);
      expect(isValidCoordinate({
        latitude: true as unknown as number,
        longitude: false as unknown as number,
      })).toBe(false);
    });

    it('should return false when coordinate is null, undefined, or not an object', () => {
      expect(isValidCoordinate(null)).toBe(false);
      expect(isValidCoordinate(undefined)).toBe(false);
      expect(isValidCoordinate('invalid' as unknown as GeolocationCoordinates)).toBe(false);
      expect(isValidCoordinate(123 as unknown as GeolocationCoordinates)).toBe(false);
      expect(isValidCoordinate(true as unknown as GeolocationCoordinates)).toBe(false);
    });
  });
});
