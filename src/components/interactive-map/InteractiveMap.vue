<script setup lang="ts">
import {
  AttributionControl,
  Map,
  Marker,
  NavigationControl,
  type MapOptions,
  type MarkerOptions,
} from 'maplibre-gl';
import { onMounted, onUnmounted, useTemplateRef, watch } from 'vue';
import { useGeolocation, useTheme } from '@/composables';
import { DEFAULT_MAP_ZOOM, MAP_STYLE_DARK, MAP_STYLE_LIGHT } from '@/constants';
import type { GeolocationCoordinates } from '@/types';

const mapContainer = useTemplateRef('map-container');
let map: Map | null = null;
let userLocationMarker: Marker | null = null;

const { coords } = useGeolocation();
const { isDarkTheme } = useTheme();

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

function createUserLocationMarker(): void {
  const { latitude, longitude } = coords.value;
  const markerOptions: MarkerOptions = {
    element: createUserMarkerElement(),
    anchor: 'center',
  };

  userLocationMarker = new Marker(markerOptions).setLngLat([longitude, latitude]);
}

function addUserLocationMarkerToMap(): void {
  if (!map) return;

  userLocationMarker?.addTo(map);
}

function initUserLocationMarker(): void {
  createUserLocationMarker();
  addUserLocationMarkerToMap();
}

function initMap(): void {
  createMap();
  addControlsToMap();
  registerMapEventListeners();
  initUserLocationMarker();
}

function removeUserLocationMarker(): void {
  if (!userLocationMarker) return;

  userLocationMarker.remove();
  userLocationMarker = null;
}

function removeMap(): void {
  if (!map) return;

  map.remove();
  map = null;
}

function destroyMap(): void {
  removeUserLocationMarker();
  removeMap();
}

function updateUserLocation({ longitude, latitude }: GeolocationCoordinates): void {
  if (!userLocationMarker) return;

  userLocationMarker.setLngLat([longitude, latitude]);
}

function updateMapTheme(isDark: boolean): void {
  if (!map) return;

  map.setStyle(isDark ? MAP_STYLE_DARK : MAP_STYLE_LIGHT);
}

watch(
  () => coords.value,
  updateUserLocation,
  { deep: true },
);

watch(
  isDarkTheme,
  updateMapTheme,
);

onMounted(initMap);
onUnmounted(destroyMap);
</script>

<template>
  <div class="interactive-map relative w-full h-full overflow-hidden">
    <div
      ref="map-container"
      class="absolute inset-0 w-full h-full"
    />
  </div>
</template>
