import type { FuelType, Station } from '@/types';

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