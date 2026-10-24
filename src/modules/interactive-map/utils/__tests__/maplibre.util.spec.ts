import type { Map } from 'maplibre-gl';
import { getMapBoundingBox } from '../maplibre.util.ts';

describe('maplibre.util', () => {
  describe('getMapBoundingBox', () => {
    it('extracts bounding box coordinates in [west, south, east, north] order', () => {
      const mockMap = {
        getBounds: () => ({
          getWest: () => -9.2,
          getSouth: () => 38.6,
          getEast: () => -9.1,
          getNorth: () => 38.8,
        }),
      } as unknown as Map;

      const mapBoundingBox = getMapBoundingBox(mockMap);

      expect(mapBoundingBox).toEqual([-9.2, 38.6, -9.1, 38.8]);
    });
  });
});
