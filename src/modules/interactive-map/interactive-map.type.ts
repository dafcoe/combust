import type { FuelType, Station } from '@/types';

export type InteractiveMapProps = {
  stations?: Station[];
  selectedFuelType?: FuelType;
};

export type InteractiveMapEmits = {
  (e: 'selectStation', station: Station): void;
};
