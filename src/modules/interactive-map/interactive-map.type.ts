import type { FlyToOptions, Marker } from 'maplibre-gl';
import type { PointFeature } from 'supercluster';
import type { FuelType } from '@/modules/fuel';
import type { Station } from '@/modules/station';

export type InteractiveMapProps = {
  stations?: Station[];
  selectedFuelType?: FuelType;
};

export type InteractiveMapEmits = {
  (event: 'selectStation', station: Station): void;
};

export type InteractiveMapFlyToOptions = Pick<FlyToOptions, 'animate'>;

export type StationMarkerProps = {
  station: Station;
  selectedFuelType?: FuelType | null;
  isSelected?: boolean;
};

export type StationMarkerEmits = {
  (event: 'select', station: Station): void;
  (event: 'click', station: Station): void;
};

export type StationMarkerInstance = {
  station: Station;
  element: HTMLDivElement;
  marker: Marker;
};

export type StationClusterMarkerProps = {
  id: number;
  count: number;
};

export type StationClusterMarkerEmits = {
  (event: 'select', stationClusterId: number): void;
  (event: 'click', stationClusterId: number): void;
};

export type StationClusterMarkerInstance = {
  clusterId: number;
  element: HTMLDivElement;
  marker: Marker;
};

export type ActiveMarkerInstance =
  | ({ type: 'station' } & StationMarkerInstance)
  | ({ type: 'cluster' } & StationClusterMarkerInstance);

export type StationPointProperties = {
  station: Station;
};

export type StationPointFeature = PointFeature<StationPointProperties>;
