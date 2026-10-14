<script setup lang="ts">
import {
  AttributionControl,
  Map,
  Marker,
  NavigationControl,
  type MapOptions,
  type MarkerOptions,
} from 'maplibre-gl';
import { createVNode, onMounted, onUnmounted, ref, render, useTemplateRef, watch } from 'vue';
import type { InteractiveMapEmits, InteractiveMapProps, MountedStationMarker } from './interactive-map.type';
import StationMarker from '@/components/station-marker/StationMarker.vue';
import { useGeolocation, useTheme } from '@/composables';
import { DEFAULT_MAP_ZOOM, MAP_STYLE_DARK, MAP_STYLE_LIGHT } from '@/constants';
import { dummyStationFixture } from '@/fixtures';
import type { GeolocationCoordinates, Station } from '@/types';

const props = withDefaults(defineProps<InteractiveMapProps>(), {
  stations: () => [dummyStationFixture],
});

const emit = defineEmits<InteractiveMapEmits>();

const mapContainer = useTemplateRef('map-container');
let map: Map | null = null;

let userMarker: Marker | null = null;
let stationMarkers: MountedStationMarker[] = [];

const selectedStationId = ref<string | null>(null);

const { coords } = useGeolocation();
const { isDarkTheme } = useTheme();

// =======================
// MAP
// =======================
function createMap(): void {
  if (!mapContainer.value) return;

  const mapOptions: MapOptions = {
    container: mapContainer.value,
    style: isDarkTheme.value ? MAP_STYLE_DARK : MAP_STYLE_LIGHT,
    center: [coords.value.longitude, coords.value.latitude],
    zoom: DEFAULT_MAP_ZOOM,
    attributionControl: false,
  };

  map = new Map(mapOptions);
}

function addControlsToMap(): void {
  map?.addControl(
    new AttributionControl({ compact: true }),
    'bottom-left',
  );

  map?.addControl(
    new NavigationControl({ showCompass: true, showZoom: true }),
    'bottom-right',
  );
}

function registerMapEventListeners(): void {
  map?.on(
    'load',
    () => { map?.resize(); },
  );

  map?.on(
    'error',
    (event) => { console.error('[MapLibre error]', event); },
  );
}

function initMap(): void {
  createMap();
  addControlsToMap();
  registerMapEventListeners();
}

function removeMap(): void {
  if (!map) return;

  map.remove();
  map = null;
}

// =======================
// USER MARKER
// =======================

function createUserMarkerElement(): HTMLDivElement {
  const markerEl = document.createElement('div');
  const pulseEl = document.createElement('span');
  const dotEl = document.createElement('span');

  markerEl.className = 'relative flex items-center justify-center w-6 h-6 select-none pointer-events-none';
  pulseEl.className = 'animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75';
  dotEl.className = 'relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-600 border-2 border-white shadow-md';

  markerEl.appendChild(pulseEl);
  markerEl.appendChild(dotEl);

  return markerEl;
}

function createUserMarker(): void {
  const { latitude, longitude } = coords.value;
  const markerOptions: MarkerOptions = {
    element: createUserMarkerElement(),
    anchor: 'center',
  };

  userMarker = new Marker(markerOptions).setLngLat([longitude, latitude]);
}

function addUserMarkerToMap(): void {
  if (!map) return;

  userMarker?.addTo(map);
}

function initUserMarker(): void {
  createUserMarker();
  addUserMarkerToMap();
}

function updateUserMarker({ longitude, latitude }: GeolocationCoordinates): void {
  if (!userMarker) return;

  userMarker.setLngLat([longitude, latitude]);
}

function removeUserMarker(): void {
  if (!userMarker) return;

  userMarker.remove();
  userMarker = null;
}

// =======================
// STATION MARKERS
// =======================

function createStationMakerElement(station: Station): HTMLDivElement {
  const markerEl = document.createElement('div');

  const markerVNode = createVNode(StationMarker, {
    station,
    selectedFuelType: props.selectedFuelType,
    isSelected: selectedStationId.value === station.id,
    onSelect: (selectedStation: Station) => {
      selectedStationId.value = selectedStation.id;
      emit('selectStation', selectedStation);
    },
  });

  render(markerVNode, markerEl);

  return markerEl;
}

function createStationMarker(station: Station): void {
  const { latitude, longitude } = station.location;
  const markerEl = createStationMakerElement(station);
  const markerOptions: MarkerOptions = {
    element: markerEl,
    anchor: 'bottom',
  };

  stationMarkers.push({
    stationId: station.id,
    element: markerEl,
    marker: new Marker(markerOptions).setLngLat([longitude, latitude]),
  });
}

function createStationMarkers(): void {
  if ((props.stations || []).length === 0) return;

  props.stations.forEach(createStationMarker);
}

function addStationMarkerToMap({ marker }: MountedStationMarker): void {
  if (!map) return;

  marker.addTo(map);
}

function addStationMarkersToMap(): void {
  stationMarkers.forEach(addStationMarkerToMap);
}

function initStationMarkers(): void {
  createStationMarkers();
  addStationMarkersToMap();
}

function updateStationMarkers(): void {
  removeStationMarkers();
  initStationMarkers();
}

function removeStationMarker({ element, marker }: MountedStationMarker): void {
  render(null, element);
  marker.remove();
}

function removeStationMarkers(): void {
  stationMarkers.forEach(removeStationMarker);
  stationMarkers = [];
}

// =======================
// OTHER
// =======================

function initInteractiveMap(): void {
  initMap();
  initUserMarker();
  initStationMarkers();
}

function removeInteractiveMap(): void {
  removeStationMarkers();
  removeUserMarker();
  removeMap();
}

function updateMapTheme(isDark: boolean): void {
  if (!map) return;

  map.setStyle(isDark ? MAP_STYLE_DARK : MAP_STYLE_LIGHT);
}

watch(
  () => coords.value,
  updateUserMarker,
  { deep: true },
);

watch(
  isDarkTheme,
  updateMapTheme,
);

watch(
  () => props.stations,
  updateStationMarkers,
  { deep: true },
);

watch(
  () => props.selectedFuelType,
  updateStationMarkers,
);

watch(
  selectedStationId,
  updateStationMarkers,
);

onMounted(initInteractiveMap);
onUnmounted(removeInteractiveMap);
</script>

<template>
  <div class="interactive-map relative w-full h-full overflow-hidden">
    <div
      ref="map-container"
      class="absolute inset-0 w-full h-full"
    />
  </div>
</template>
