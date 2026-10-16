import type { Station } from '../../station.type.ts';
import {
  stationBpLisbonFixture,
  stationGalpLisbonFixture,
  stationRepsolMadridFixture,
} from '../../testing/fixtures/stations.fixture.ts';
import {
  filterStations,
  hydrateStationsDistance,
  sortStations,
} from '../station.util.ts';
import { lisbonGeolocationCoordinatesFixture } from '@/modules/geolocation/index.testing.ts';

describe('station.util', () => {
  describe('hydrateStationsDistance', () => {
    it('should return an empty array when given an empty list', () => {
      const result = hydrateStationsDistance([], lisbonGeolocationCoordinatesFixture);

      expect(result).toEqual([]);
    });

    it('should calculate and attach distanceKm to each station based on origin location', () => {
      const result = hydrateStationsDistance(
        [stationGalpLisbonFixture, stationRepsolMadridFixture],
        lisbonGeolocationCoordinatesFixture,
      );

      expect(result).toHaveLength(2);

      const [lisbonStation, madridStation] = result;

      expect(lisbonStation.id).toBe(stationGalpLisbonFixture.id);
      expect(lisbonStation.distanceKm).toBeDefined();
      expect(lisbonStation.distanceKm).toBeLessThan(1);

      expect(madridStation.id).toBe(stationRepsolMadridFixture.id);
      expect(madridStation.distanceKm).toBeDefined();
      expect(madridStation.distanceKm).toBeGreaterThan(500);
    });

    it('should preserve existing station properties when hydrating distance', () => {
      const [result] = hydrateStationsDistance(
        [stationGalpLisbonFixture],
        lisbonGeolocationCoordinatesFixture,
      );

      expect(result).toMatchObject({
        id: stationGalpLisbonFixture.id,
        name: stationGalpLisbonFixture.name,
        brand: stationGalpLisbonFixture.brand,
        location: stationGalpLisbonFixture.location,
        address: stationGalpLisbonFixture.address,
        prices: stationGalpLisbonFixture.prices,
      });
    });
  });

  describe('filterStations', () => {
    const nearbyWithDiesel: Station = {
      ...stationGalpLisbonFixture,
      id: 'station-1',
      distanceKm: 5,
      prices: { diesel: 1.6, gasoline95: 1.7, gasoline98: null, lpg: null },
    };

    const nearbyWithoutDiesel: Station = {
      ...stationGalpLisbonFixture,
      id: 'station-2',
      distanceKm: 5,
      prices: { diesel: null, gasoline95: 1.7, gasoline98: null, lpg: null },
    };

    const farWithDiesel: Station = {
      ...stationGalpLisbonFixture,
      id: 'station-3',
      distanceKm: 25,
      prices: { diesel: 1.5, gasoline95: 1.6, gasoline98: null, lpg: null },
    };

    const withoutDistance: Station = {
      ...stationGalpLisbonFixture,
      id: 'station-4',
      distanceKm: undefined,
      prices: { diesel: 1.5, gasoline95: null, gasoline98: null, lpg: null },
    };

    it('should return an empty array when given an empty list', () => {
      const result = filterStations([], 'diesel', 10);

      expect(result).toEqual([]);
    });

    it('should include stations that have the selected fuel price and are within max radius', () => {
      const stations = [nearbyWithDiesel, nearbyWithoutDiesel, farWithDiesel];
      const result = filterStations(stations, 'diesel', 10);

      expect(result).toEqual([nearbyWithDiesel]);
    });

    it('should exclude stations that do not have price for selected fuel', () => {
      const stations = [nearbyWithDiesel, nearbyWithoutDiesel];
      const result = filterStations(stations, 'gasoline98', 10);

      expect(result).toEqual([]);
    });

    it('should exclude stations that are outside max radius', () => {
      const stations = [nearbyWithDiesel, farWithDiesel];
      const result = filterStations(stations, 'diesel', 10);

      expect(result).not.toContainEqual(farWithDiesel);
    });

    it('should include stations exactly on the max radius boundary', () => {
      const boundaryStation: Station = {
        ...stationGalpLisbonFixture,
        distanceKm: 10,
        prices: { ...stationGalpLisbonFixture.prices, diesel: 1.6 },
      };

      const result = filterStations([boundaryStation], 'diesel', 10);

      expect(result).toEqual([boundaryStation]);
    });

    it('should exclude stations without distanceKm defined', () => {
      const stations = [withoutDistance];
      const result = filterStations(stations, 'diesel', 10);

      expect(result).toEqual([]);
    });
  });

  describe('sortStations', () => {
    const stationA: Station = {
      ...stationGalpLisbonFixture,
      id: 'station-a',
      distanceKm: 5,
      prices: { diesel: 1.7, gasoline95: 1.8, gasoline98: null, lpg: null },
    };

    const stationB: Station = {
      ...stationGalpLisbonFixture,
      id: 'station-b',
      distanceKm: 10,
      prices: { diesel: 1.5, gasoline95: 1.6, gasoline98: null, lpg: null },
    };

    const stationSameDistanceCheaper: Station = {
      ...stationGalpLisbonFixture,
      id: 'station-c',
      distanceKm: 5,
      prices: { diesel: 1.4, gasoline95: 1.5, gasoline98: null, lpg: null },
    };

    const stationSamePriceCloser: Station = {
      ...stationGalpLisbonFixture,
      id: 'station-d',
      distanceKm: 2,
      prices: { diesel: 1.7, gasoline95: 1.8, gasoline98: null, lpg: null },
    };

    const stationNoPrice: Station = {
      ...stationBpLisbonFixture,
      id: 'station-e',
      distanceKm: 1,
      prices: { diesel: null, gasoline95: null, gasoline98: null, lpg: null },
    };

    const stationNoDistance: Station = {
      ...stationGalpLisbonFixture,
      id: 'station-f',
      distanceKm: undefined,
      prices: { diesel: 1.2, gasoline95: 1.3, gasoline98: null, lpg: null },
    };

    it('should return an empty array when given an empty list', () => {
      const result = sortStations([], 'diesel', 'distance');

      expect(result).toEqual([]);
    });

    it('should not mutate the input array', () => {
      const stations = [stationB, stationA];
      const stationsCopy = [...stations];

      sortStations(stations, 'diesel', 'distance');

      expect(stations).toEqual(stationsCopy);
    });

    describe('when sortMode is "distance"', () => {
      it('should sort primarily by ascending distanceKm', () => {
        const stations = [stationB, stationA];
        const result = sortStations(stations, 'diesel', 'distance');

        expect(result.map((station) => station.id)).toEqual(['station-a', 'station-b']);
      });

      it('should break distance ties by ascending fuel price', () => {
        const stations = [stationA, stationSameDistanceCheaper];
        const result = sortStations(stations, 'diesel', 'distance');

        expect(result.map((station) => station.id)).toEqual(['station-c', 'station-a']);
      });

      it('should place stations with undefined distanceKm at the end', () => {
        const stations = [stationNoDistance, stationA];
        const result = sortStations(stations, 'diesel', 'distance');

        expect(result.map((station) => station.id)).toEqual(['station-a', 'station-f']);
      });
    });

    describe('when sortMode is "price"', () => {
      it('should sort primarily by ascending fuel price', () => {
        const stations = [stationA, stationB];
        const result = sortStations(stations, 'diesel', 'price');

        expect(result.map((station) => station.id)).toEqual(['station-b', 'station-a']);
      });

      it('should break price ties by ascending distanceKm', () => {
        const stations = [stationA, stationSamePriceCloser];
        const result = sortStations(stations, 'diesel', 'price');

        expect(result.map((station) => station.id)).toEqual(['station-d', 'station-a']);
      });

      it('should place stations with null fuel price at the end', () => {
        const stations = [stationNoPrice, stationA];
        const result = sortStations(stations, 'diesel', 'price');

        expect(result.map((station) => station.id)).toEqual(['station-a', 'station-e']);
      });
    });
  });
});
