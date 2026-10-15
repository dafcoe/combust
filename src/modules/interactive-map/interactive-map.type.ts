import type { FuelType } from '@/modules/fuel';
import type { Station } from '@/modules/station';

export type InteractiveMapProps = {
  stations?: Station[];
  selectedFuelType?: FuelType;
};

export type InteractiveMapEmits = {
  (e: 'selectStation', station: Station): void;
};
