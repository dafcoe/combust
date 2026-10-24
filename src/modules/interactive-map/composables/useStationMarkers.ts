import { Marker, type Map as MaplibreMap } from 'maplibre-gl';
import type { ClusterFeature } from 'supercluster';
import {
  createVNode,
  type Ref,
  ref,
  render,
  watch,
} from 'vue';
import StationClusterMarker from '../components/StationClusterMarker.vue';
import StationMarker from '../components/StationMarker.vue';
import type {
  ActiveMarkerInstance,
  StationClusterMarkerProps,
  StationPointFeature,
} from '../interactive-map.type.ts';
import { mapStationsToStationPointFeatures } from '../mappers/supercluster.mapper.ts';
import { getMapBoundingBox } from '../utils/maplibre.util.ts';
import { createSuperclusterInstance, isClusterFeature } from '../utils/supercluster.util.ts';
import type { FuelType } from '@/modules/fuel';
import type { Station } from '@/modules/station';

export function useStationMarkers(
  map: Ref<MaplibreMap | null>,
  stations: Ref<Station[]>,
  selectedFuelType: Ref<FuelType | undefined>,
  onSelectCallback: CallableFunction,
) {
  const selectedStationId = ref<string | null>(null);
  const activeMarkers = new Map<string, ActiveMarkerInstance>();
  const supercluster = createSuperclusterInstance();
  let registeredMap: MaplibreMap | null = null;

  function loadSuperclusterPointFeatures(): void {
    const features = mapStationsToStationPointFeatures(stations.value || []);

    supercluster.load(features);
  }

  function createClusterStationMarkerVNode(
    clusterId: number,
    pointCount: number,
    coords: [number, number],
    markerEl: HTMLElement,
  ): void {
    const onSelect = () => {
      if (!map.value) return;

      map.value.easeTo({
        center: coords,
        zoom: supercluster.getClusterExpansionZoom(clusterId),
      });
    };

    const markerVNode = createVNode(StationClusterMarker, {
      id: clusterId,
      count: pointCount,
      onSelect,
    });

    render(markerVNode, markerEl);
  }

  function createStationMarkerVNode(station: Station, markerEl: HTMLElement): void {
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

  function attachMarkerToMap(
    element: HTMLDivElement,
    coords: [number, number],
    anchor: 'center' | 'bottom',
  ): Marker {
    const marker = new Marker({ element, anchor }).setLngLat(coords);

    if (map.value) marker.addTo(map.value);

    return marker;
  }

  function syncClusterMarker(feature: ClusterFeature<StationClusterMarkerProps>): string {
    const clusterId = feature.properties.cluster_id;
    const markerKey = `cluster-${clusterId}`;

    if (!activeMarkers.has(markerKey)) {
      const coords = feature.geometry.coordinates as [number, number];
      const markerEl = document.createElement('div');

      createClusterStationMarkerVNode(clusterId, feature.properties.point_count, coords, markerEl);

      const marker = attachMarkerToMap(markerEl, coords, 'center');

      activeMarkers.set(markerKey, {
        type: 'cluster',
        clusterId,
        element: markerEl,
        marker,
      });
    }

    return markerKey;
  }

  function syncStationMarker(feature: StationPointFeature): string {
    const station = feature.properties.station;
    const markerKey = `station-${station.id}`;
    const isExistingMarker = activeMarkers.get(markerKey);

    if (isExistingMarker) {
      if (isExistingMarker.type === 'station' && isExistingMarker.station !== station) {
        isExistingMarker.station = station;
        createStationMarkerVNode(station, isExistingMarker.element);
      }
    } else {
      const coords: [number, number] = [station.location.longitude, station.location.latitude];
      const markerEl = document.createElement('div');

      createStationMarkerVNode(station, markerEl);

      const marker = attachMarkerToMap(markerEl, coords, 'bottom');

      activeMarkers.set(markerKey, {
        type: 'station',
        station,
        element: markerEl,
        marker,
      });
    }

    return markerKey;
  }

  function pruneInactiveMarkers(markerKeys: Set<string>): void {
    for (const [key, markerInstance] of activeMarkers.entries()) {
      if (markerKeys.has(key)) continue;

      destroyMarker(markerInstance);
      activeMarkers.delete(key);
    }
  }

  function destroyMarker(markerInstance: ActiveMarkerInstance): void {
    render(null, markerInstance.element);
    markerInstance.marker.remove();
  }

  function destroyMarkers(): void {
    activeMarkers.forEach(destroyMarker);
    activeMarkers.clear();
  }

  function getMapViewport(): {
    boundingBox: [number, number, number, number];
    zoom: number;
  } | null {
    if (!map.value || typeof map.value.getBounds !== 'function' || typeof map.value.getZoom !== 'function') {
      return null;
    }

    const bounds = map.value.getBounds();
    if (!bounds) return null;

    const boundingBox = getMapBoundingBox(map.value);
    const zoom = Math.floor(map.value.getZoom());

    return { boundingBox, zoom };
  }

  function updateVisibleMarkers(): void {
    const mapViewport = getMapViewport();

    if (!mapViewport || !map.value) return;

    const { boundingBox, zoom } = mapViewport;
    const features = supercluster.getClusters(boundingBox, zoom) as Array<
      ClusterFeature<StationClusterMarkerProps> | StationPointFeature
    >;
    const markerKeys = new Set<string>();

    for (const feature of features) {
      const key = isClusterFeature(feature)
        ? syncClusterMarker(feature)
        : syncStationMarker(feature);

      markerKeys.add(key);
    }

    pruneInactiveMarkers(markerKeys);
  }

  function updateStationMarkers(): void {
    activeMarkers.forEach((activeMarker) => {
      if (activeMarker.type === 'station') {
        createStationMarkerVNode(activeMarker.station, activeMarker.element);
      }
    });
  }

  function registerMapListeners(): void {
    if (!map.value || registeredMap === map.value) return;

    unregisterMapListeners();

    if (typeof map.value.on === 'function') {
      map.value.on('moveend', updateVisibleMarkers);
      registeredMap = map.value;
    }
  }

  function unregisterMapListeners(): void {
    if (registeredMap && typeof registeredMap.off === 'function') {
      registeredMap.off('moveend', updateVisibleMarkers);
    }

    registeredMap = null;
  }

  function initMarkers(): void {
    loadSuperclusterPointFeatures();
    registerMapListeners();
    updateVisibleMarkers();
  }

  function removeMarkers(): void {
    unregisterMapListeners();
    destroyMarkers();
  }

  watch(
    stations,
    () => {
      loadSuperclusterPointFeatures();
      updateVisibleMarkers();
    },
    { deep: true },
  );

  watch(
    selectedFuelType,
    updateStationMarkers,
  );

  watch(
    selectedStationId,
    updateStationMarkers,
  );

  watch(
    map,
    (newMap) => {
      if (newMap) {
        registerMapListeners();
        updateVisibleMarkers();
      } else {
        unregisterMapListeners();
      }
    },
  );

  return {
    initMarkers,
    removeMarkers,
  };
}
