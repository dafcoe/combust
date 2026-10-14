<script setup lang="ts">
import {
  AttributionControl,
  Map,
  NavigationControl,
  type MapOptions,
} from 'maplibre-gl';
import { onMounted, onUnmounted, shallowRef, toRef, useTemplateRef, watch } from 'vue';
import type { InteractiveMapEmits, InteractiveMapProps } from '../interactive-map.type.ts';
import { useGeolocation, useTheme } from '@/composables';
import { DEFAULT_MAP_ZOOM, MAP_STYLE_DARK, MAP_STYLE_LIGHT } from '@/constants';
import { dummyStationFixture } from '@/fixtures';
import { useStationMarkers } from '@/modules/station-marker';
import { useUserMarker } from '@/modules/user-marker';
import type { Station } from '@/types';

const props = withDefaults(defineProps<InteractiveMapProps>(), {
  stations: () => [dummyStationFixture],
});

const emits = defineEmits<InteractiveMapEmits>();

const mapContainer = useTemplateRef('map-container');
const map = shallowRef<Map | null>(null);

const { coords } = useGeolocation();
const { isDarkTheme } = useTheme();

const {
  initMarker: initUserMarker,
  removeMarker: removeUserMarker,
} = useUserMarker(map);

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
