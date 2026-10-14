import { Map, Marker, type MarkerOptions } from 'maplibre-gl';
import { createVNode, type Ref, render, watch } from 'vue';
import UserMarker from '../components/UserMarker.vue';
import { useGeolocation } from '@/composables';
import type { GeolocationCoordinates } from '@/types';

export function useUserMarker(map: Ref<Map | null>) {
  let marker: Marker | null = null;

  const { coords } = useGeolocation();

  function createMarkerElement(): HTMLDivElement {
    const markerEl = document.createElement('div');
    const markerVNode = createVNode(UserMarker);

    render(markerVNode, markerEl);

    return markerEl;
  }

  function createMarker(): void {
    const { latitude, longitude } = coords.value;
    const markerOptions: MarkerOptions = {
      element: createMarkerElement(),
      anchor: 'center',
    };

    marker = new Marker(markerOptions).setLngLat([longitude, latitude]);
  }

  function addMarkerToMap(): void {
    if (!map.value) return;

    marker?.addTo(map.value);
  }

  function initMarker(): void {
    createMarker();
    addMarkerToMap();
  }

  function updateMarker({ longitude, latitude }: GeolocationCoordinates): void {
    if (!marker) return;

    marker.setLngLat([longitude, latitude]);
  }

  function removeMarker(): void {
    if (!marker) return;

    marker.remove();
    marker = null;
  }

  watch(
    () => coords.value,
    updateMarker,
    { deep: true },
  );

  return {
    initMarker,
    removeMarker,
  };
}