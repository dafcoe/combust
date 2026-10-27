import { watch } from 'vue';
import type { InteractiveMapFlyToOptions } from '../interactive-map.type.ts';
import { useInteractiveMap } from './useInteractiveMap.ts';
import { type GeolocationCoordinates, useGeolocation } from '@/modules/geolocation';

export function useInteractiveMapPositioner() {
  const { map } = useInteractiveMap();
  const { coords, getCurrentPosition, permissionStatus } = useGeolocation();

  function flyToCoordinates(
    { longitude, latitude }: GeolocationCoordinates,
    options: InteractiveMapFlyToOptions = {},
  ): void {
    map.value?.flyTo({
      center: [longitude, latitude],
      essential: true,
      ...options,
    });
  }

  async function flyToUserLocation(options: InteractiveMapFlyToOptions = {}): Promise<void> {
    await getCurrentPosition();
    flyToCoordinates(coords.value, options);
  }

  watch(
    () => permissionStatus.value,
    async () => {
      if (permissionStatus.value !== 'granted') return;
      await flyToUserLocation({ animate: false });
    },
  );

  return {
    flyToCoordinates,
    flyToUserLocation,
  };
}
