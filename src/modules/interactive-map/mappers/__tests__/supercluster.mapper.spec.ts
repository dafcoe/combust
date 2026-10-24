import { mapStationsToStationPointFeatures } from '../supercluster.mapper.ts';
import { stationGalpLisbonFixture, stationRepsolMadridFixture } from '@/modules/station/index.testing';

describe('supercluster.mapper', () => {
  describe('mapStationsToStationPointFeatures', () => {
    it('maps an array of stations to an array of point features', () => {
      const stations = [stationGalpLisbonFixture, stationRepsolMadridFixture];
      const features = mapStationsToStationPointFeatures(stations);

      expect(features).toHaveLength(2);
      expect(features[0].properties.station).toBe(stationGalpLisbonFixture);
      expect(features[1].properties.station).toBe(stationRepsolMadridFixture);
    });

    it('returns an empty array when given an empty list', () => {
      expect(mapStationsToStationPointFeatures([])).toEqual([]);
    });
  });
});
