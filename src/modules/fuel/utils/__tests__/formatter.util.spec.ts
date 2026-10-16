import { formatFuelPrice } from '../formatter.util.ts';

describe('formatter.util', () => {
  describe('formatFuelPrice', () => {
    it('should format a price to 3 decimal places with currency', () => {
      expect(formatFuelPrice(1.619)).toBe('1.619 €');
    });

    it('should pad a price with trailing zeros to 3 decimal places', () => {
      expect(formatFuelPrice(1.5)).toBe('1.500 €');
    });

    it('should format a price without currency when withCurrency is false', () => {
      expect(formatFuelPrice(1.619, false)).toBe('1.619');
    });

    it('should return a dash for null', () => {
      expect(formatFuelPrice(null)).toBe('—');
    });

    it('should return a dash for undefined', () => {
      expect(formatFuelPrice(undefined)).toBe('—');
    });
  });
});
