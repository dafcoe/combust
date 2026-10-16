import { readonly, ref } from 'vue';
import {
  stationBpLisbonFixture,
  stationGalpLisbonFixture,
  stationMoeveMadridFixture,
  stationRepsolMadridFixture,
  stationsFixture,
} from '../../testing/fixtures/stations.fixture.ts';
import { mapIfcStationsToStations } from '../station.mapper.ts';
import {
  ifcStationBpLisbonFixture,
  ifcStationGalpLisbonFixture,
  ifcStationMoeveMadridFixture,
  ifcStationRepsolMadridFixture,
  ifcStationsFixture,
} from '@/modules/iberian-fuel/index.testing.ts';

vi.mock('../../utils/brand.util.ts', () => ({
  getBrandLogoUrl: (brand: string) => `/src/assets/brands/${brand.toLowerCase()}.svg`,
}));

describe('station.mapper', () => {
  describe('mapIfcStationsToStations', () => {
    it('should return an empty array when given an empty list', () => {
      const result = mapIfcStationsToStations([]);

      expect(result).toEqual([]);
    });

    it('should map a station with all 4 fuels correctly', () => {
      const result = mapIfcStationsToStations([ifcStationGalpLisbonFixture]);

      expect(result).toEqual([stationGalpLisbonFixture]);
    });

    it('should map a station with partial fuels defaulting missing ones to null', () => {
      const result = mapIfcStationsToStations([ifcStationRepsolMadridFixture]);

      expect(result).toEqual([stationRepsolMadridFixture]);
    });

    it('should map a station with empty fuels array setting all prices to null', () => {
      const result = mapIfcStationsToStations([ifcStationBpLisbonFixture]);

      expect(result).toEqual([stationBpLisbonFixture]);
    });

    it('should ignore unrecognized or unsupported fuel types setting prices to null', () => {
      const result = mapIfcStationsToStations([ifcStationMoeveMadridFixture]);

      expect(result).toEqual([stationMoeveMadridFixture]);
    });

    it('should map multiple stations preserving count and order', () => {
      const result = mapIfcStationsToStations(ifcStationsFixture);

      expect(result).toEqual(stationsFixture);
    });

    it('should handle DeepReadonly / reactive state inputs', () => {
      const reactiveStations = readonly(ref(ifcStationsFixture));
      const result = mapIfcStationsToStations(reactiveStations.value);

      expect(result).toEqual(stationsFixture);
    });
  });
});
