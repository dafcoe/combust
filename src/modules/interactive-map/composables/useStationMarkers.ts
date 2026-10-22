import {
  Map,
  Marker,
  type MarkerOptions,
} from 'maplibre-gl';
import {
  createVNode,
  type Ref,
  ref,
  render,
  watch,
} from 'vue';
import StationMarker from '../components/StationMarker.vue';
import type { StationMarkerInstance } from '../interactive-map.type.ts';
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

  function createMarkerVNode(station: Station, markerEl: HTMLElement): void {
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
  }

  function createMarkerElement(): HTMLDivElement {
    return document.createElement('div');
  }

  function createMarker(station: Station): void {
    const { latitude, longitude } = station.location;
    const markerEl = createMarkerElement();
    const markerOptions: MarkerOptions = {
      element: markerEl,
      anchor: 'bottom',
    };

    createMarkerVNode(station, markerEl);

    markers.push({
      station,
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

  function resetMarkers(): void {
    removeMarkers();
    initMarkers();
  }

  function updateSelectedMarker(): void {
    markers.forEach((marker) => {
      createMarkerVNode(marker.station, marker.element);
    });
  }

  watch(
    [stations, selectedFuelType],
    resetMarkers,
    { deep: true },
  );

  watch(
    selectedStationId,
    updateSelectedMarker,
  );

  return {
    initMarkers,
    removeMarkers,
  };
}