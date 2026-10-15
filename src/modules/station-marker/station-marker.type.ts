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

export type StationMarkerFuelBadgeStyle = {
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  chipBg: string;
  chipText: string;
};

export type StationMarkerInstance = {
  stationId: string;
  element: HTMLDivElement;
  marker: Marker;
};