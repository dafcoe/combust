import type { StationPointFeature } from '../interactive-map.type.ts';
import type { Station } from '@/modules/station';

function mapStationToStationPointFeature(station: Station): StationPointFeature {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [station.location.longitude, station.location.latitude],
    },
    properties: { station },
  };
}

export function mapStationsToStationPointFeatures(stations: Station[]): StationPointFeature[] {
  return stations.map(mapStationToStationPointFeature);
}
