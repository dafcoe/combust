import { formatStationDistance } from '../formatter.util.ts';

describe('formatter.util', () => {
  describe('formatStationDistance', () => {
    it('should format a distance to 1 decimal place with unit', () => {
      expect(formatStationDistance(5.74)).toBe('5.7 km');
    });

    it('should pad a whole number with trailing zero', () => {
      expect(formatStationDistance(10)).toBe('10.0 km');
    });

    it('should format a distance without unit when withUnit is false', () => {
      expect(formatStationDistance(5.74, false)).toBe('5.7');
    });

    it('should return a dash for null', () => {
      expect(formatStationDistance(null)).toBe('—');
    });

    it('should return a dash for undefined', () => {
      expect(formatStationDistance(undefined)).toBe('—');
    });
  });
});
