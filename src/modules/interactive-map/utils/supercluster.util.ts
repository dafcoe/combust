import Supercluster, {
  type AnyProps,
  type ClusterFeature,
  type Options,
  type PointFeature,
} from 'supercluster';
import { CLUSTER_MAX_ZOOM, CLUSTER_RADIUS } from '../interactive-map.constant.ts';
import type { StationPointProperties } from '../interactive-map.type.ts';

export function createSuperclusterInstance(
  options?: Options<StationPointProperties, AnyProps>,
): Supercluster<StationPointProperties> {
  return new Supercluster({
    radius: CLUSTER_RADIUS,
    maxZoom: CLUSTER_MAX_ZOOM,
    ...options,
  });
}

export function isClusterFeature<C = AnyProps>(
  feature: ClusterFeature<C> | PointFeature<unknown>,
): feature is ClusterFeature<C> {
  return Boolean(
    feature.properties
      && typeof feature.properties === 'object'
      && 'cluster' in feature.properties
      && (feature.properties as { cluster?: unknown }).cluster === true,
  );
}
