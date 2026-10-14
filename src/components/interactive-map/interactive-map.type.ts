import { Marker } from 'maplibre-gl';
import type { FuelType, Station } from '@/types';

export type InteractiveMapProps = {
  stations?: Station[];
  selectedFuelType?: FuelType;
};

export type InteractiveMapEmits = {
  (e: 'selectStation', station: Station): void;
};

export type MountedStationMarker = {
  stationId: string;
  element: HTMLDivElement;
  marker: Marker;
};