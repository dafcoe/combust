import { formatStationClusterCount, formatStationDistance } from '../formatter.util.ts';

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

  describe('formatStationClusterCount', () => {
    it('formats point count when less than 1000', () => {
      expect(formatStationClusterCount(5)).toBe('5');
      expect(formatStationClusterCount(999)).toBe('999');
    });

    it('formats point count when greater than or equal to 1000', () => {
      expect(formatStationClusterCount(1000)).toBe('1.0k');
      expect(formatStationClusterCount(1500)).toBe('1.5k');
    });
  });
});
