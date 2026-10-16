import { getBrandLogoUrl } from '../brand.util.ts';

describe('brand.util', () => {
  describe('getBrandLogoUrl', () => {
    it('should return the logo URL for a known brand', () => {
      expect(getBrandLogoUrl('galp')).toBeTypeOf('string');
      expect(getBrandLogoUrl('galp')).not.toBe(getBrandLogoUrl('unknown'));
    });

    it('should match brands case-insensitively', () => {
      const expected = getBrandLogoUrl('galp');

      expect(getBrandLogoUrl('GALP')).toBe(expected);
      expect(getBrandLogoUrl('GaLp')).toBe(expected);
    });

    it('should return the default logo for an unknown brand', () => {
      const expected = getBrandLogoUrl('unknown');

      expect(getBrandLogoUrl('nonexistent')).toBe(expected);
    });

    it('should return the default logo for an empty string', () => {
      const expected = getBrandLogoUrl('unknown');

      expect(getBrandLogoUrl('')).toBe(expected);
    });
  });
});
