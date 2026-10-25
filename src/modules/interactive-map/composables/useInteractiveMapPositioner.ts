import { useInteractiveMap } from './useInteractiveMap.ts';
import { type GeolocationCoordinates, useGeolocation } from '@/modules/geolocation';

export function useInteractiveMapPositioner() {
  const { map } = useInteractiveMap();
  const { coords, getCurrentPosition } = useGeolocation();

  function flyToCoordinates({ longitude, latitude }: GeolocationCoordinates): void {
    map.value?.flyTo({
      center: [longitude, latitude],
      essential: true,
    });
  }

  async function flyToUserLocation(): Promise<void> {
    await getCurrentPosition();
    flyToCoordinates(coords.value);
  }

  return {
    flyToCoordinates,
    flyToUserLocation,
  };
}
