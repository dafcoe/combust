import { mapStationsToStationPointFeatures } from '../../mappers/supercluster.mapper.ts';
import { createSuperclusterInstance, isClusterFeature } from '../supercluster.util.ts';
import { stationGalpLisbonFixture, stationRepsolMadridFixture } from '@/modules/station/index.testing';

describe('supercluster.util', () => {
  describe('createSuperclusterInstance', () => {
    it('creates a Supercluster instance and clusters nearby points', () => {
      const cluster = createSuperclusterInstance();
      const points = mapStationsToStationPointFeatures([
        stationGalpLisbonFixture,
        {
          ...stationRepsolMadridFixture,
          location: {
            ...stationRepsolMadridFixture.location,
            latitude: stationGalpLisbonFixture.location.latitude + 0.0001,
            longitude: stationGalpLisbonFixture.location.longitude + 0.0001,
          },
        },
      ]);

      cluster.load(points);

      // At zoom 0, these two very close points must form a cluster
      const clusters = cluster.getClusters([-180, -85, 180, 85], 0);

      expect(clusters).toHaveLength(1);
      expect(isClusterFeature(clusters[0])).toBe(true);
    });

    it('allows overriding options', () => {
      const cluster = createSuperclusterInstance({ radius: 100 });
      expect(cluster).toBeDefined();
    });
  });

  describe('isClusterFeature', () => {
    it('returns true when feature has cluster: true property', () => {
      const clusterFeature = {
        type: 'Feature' as const,
        geometry: { type: 'Point' as const, coordinates: [0, 0] },
        properties: {
          cluster: true as const,
          cluster_id: 1,
          point_count: 5,
          point_count_abbreviated: 5,
        },
      };

      expect(isClusterFeature(clusterFeature)).toBe(true);
    });

    it('returns false for individual station point features', () => {
      const pointFeature = {
        type: 'Feature' as const,
        geometry: { type: 'Point' as const, coordinates: [0, 0] },
        properties: {
          station: stationGalpLisbonFixture,
        },
      };

      expect(isClusterFeature(pointFeature)).toBe(false);
    });
  });
});
