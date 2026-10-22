import type { Marker } from 'maplibre-gl';
import type { FuelType } from '@/modules/fuel';
import type { Station } from '@/modules/station';

export type StationMarkerProps = {
  station: Station;
  selectedFuelType?: FuelType | null;
  isSelected?: boolean;
};

export type StationMarkerEmits = {
  (e: 'select', station: Station): void;
  (e: 'click', station: Station): void;
};

export type StationMarkerInstance = {
  station: Station;
  element: HTMLDivElement;
  marker: Marker;
};

export type InteractiveMapProps = {
  stations?: Station[];
  selectedFuelType?: FuelType;
};

export type InteractiveMapEmits = {
  (e: 'selectStation', station: Station): void;
};