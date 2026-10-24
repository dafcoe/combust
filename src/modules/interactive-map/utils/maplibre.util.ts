import type { Map } from 'maplibre-gl';

export function getMapBoundingBox(map: Map): [number, number, number, number] {
  const bounds = map.getBounds();

  return [
    bounds.getWest(),
    bounds.getSouth(),
    bounds.getEast(),
    bounds.getNorth(),
  ];
}
