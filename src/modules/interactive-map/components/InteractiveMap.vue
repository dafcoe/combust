<script setup lang="ts">
import {
  AttributionControl,
  Map,
  Marker,
  NavigationControl,
  type MapOptions,
  type MarkerOptions,
} from 'maplibre-gl';
import { onMounted, onUnmounted, shallowRef, toRef, useTemplateRef, watch } from 'vue';
import type { InteractiveMapEmits, InteractiveMapProps } from '../interactive-map.type.ts';
import { useGeolocation, useTheme } from '@/composables';
import { DEFAULT_MAP_ZOOM, MAP_STYLE_DARK, MAP_STYLE_LIGHT } from '@/constants';
import { dummyStationFixture } from '@/fixtures';
import { useStationMarkers } from '@/modules/station-marker/composables/useStationMarkers.ts';
import type { GeolocationCoordinates, Station } from '@/types';

const props = withDefaults(defineProps<InteractiveMapProps>(), {
  stations: () => [dummyStationFixture],
});

const emits = defineEmits<InteractiveMapEmits>();

const mapContainer = useTemplateRef('map-container');
const map = shallowRef<Map | null>(null);

let userMarker: Marker | null = null;

const { coords } = useGeolocation();
const { isDarkTheme } = useTheme();

const {
  initMarkers: initStationMarkers,
  removeMarkers: removeStationMarkers,
} = useStationMarkers(
  map,
  toRef(props, 'stations'),
  toRef(props, 'selectedFuelType'),
  (station: Station) => emits('selectStation', station),
);

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

  map.value = new Map(mapOptions);
}

function addControlsToMap(): void {
  map.value?.addControl(
    new AttributionControl({ compact: true }),
    'bottom-left',
  );

  map.value?.addControl(
    new NavigationControl({ showCompass: true, showZoom: true }),
    'bottom-right',
  );
}

function registerMapEventListeners(): void {
  map.value?.on(
    'load',
    () => { map.value?.resize(); },
  );

  map.value?.on(
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
  if (!map.value) return;

  map.value.remove();
  map.value = null;
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
  if (!map.value) return;

  userMarker?.addTo(map.value);
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
  if (!map.value) return;

  map.value.setStyle(isDark ? MAP_STYLE_DARK : MAP_STYLE_LIGHT);
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
