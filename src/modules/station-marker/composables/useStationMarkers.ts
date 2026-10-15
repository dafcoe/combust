import { Map, Marker, type MarkerOptions } from 'maplibre-gl';
import { createVNode, type Ref, ref, render, watch } from 'vue';
import StationMarker from '../components/StationMarker.vue';
import type { StationMarkerInstance } from '../station-marker.type.ts';
import type { FuelType } from '@/modules/fuel';
import type { Station } from '@/modules/station';

export function useStationMarkers(
  map: Ref<Map | null>,
  stations: Ref<Station[]>,
  selectedFuelType: Ref<FuelType | undefined>,
  onSelectCallback: CallableFunction,
) {
  const selectedStationId = ref<string | null>(null);
  let markers: StationMarkerInstance[] = [];

  function createMarkerElement(station: Station): HTMLDivElement {
    const markerEl = document.createElement('div');
    const onSelect = (selectedStation: Station) => {
      selectedStationId.value = selectedStation.id;
      onSelectCallback?.(selectedStation);
    };

    const markerVNode = createVNode(StationMarker, {
      station,
      selectedFuelType: selectedFuelType.value,
      isSelected: selectedStationId.value === station.id,
      onSelect,
    });

    render(markerVNode, markerEl);

    return markerEl;
  }

  function createMarker(station: Station): void {
    const { latitude, longitude } = station.location;
    const markerEl = createMarkerElement(station);
    const markerOptions: MarkerOptions = {
      element: markerEl,
      anchor: 'bottom',
    };

    markers.push({
      stationId: station.id,
      element: markerEl,
      marker: new Marker(markerOptions).setLngLat([longitude, latitude]),
    });
  }

  function createMarkers(): void {
    if ((stations.value || []).length === 0) return;

    stations.value.forEach(createMarker);
  }

  function addMarkerToMap({ marker }: StationMarkerInstance): void {
    if (!map.value) return;

    marker.addTo(map.value);
  }

  function addMarkersToMap(): void {
    markers.forEach(addMarkerToMap);
  }

  function initMarkers(): void {
    createMarkers();
    addMarkersToMap();
  }

  function removeMarker({ element, marker }: StationMarkerInstance): void {
    render(null, element);
    marker.remove();
  }

  function removeMarkers(): void {
    markers.forEach(removeMarker);
    markers = [];
  }

  function updateMarkers(): void {
    removeMarkers();
    initMarkers();
  }

  watch(
    [stations, selectedFuelType, selectedStationId],
    updateMarkers,
    { deep: true },
  );

  return {
    initMarkers,
    removeMarkers,
  };
}