import type { Fuel } from '@dafcoe/iberian-fuel-client';
import type { DeepReadonly } from 'vue';
import type { Station } from '../station.type.ts';
import type { FuelPrices } from '@/modules/fuel';
import { IFC_FUEL_NAME, type IfcStation } from '@/modules/iberian-fuel';

function mapIfcStationFuelsToFuelPrices(ifcStationFuels: readonly Fuel[] | DeepReadonly<Fuel[]>): FuelPrices {
  const prices: FuelPrices = {
    gasoline95: null,
    gasoline98: null,
    diesel: null,
    lpg: null,
  };

  for (const ifcStationFuel of ifcStationFuels) {
    if (ifcStationFuel.name === IFC_FUEL_NAME.GASOLINE_95) {
      prices.gasoline95 = ifcStationFuel.price;
    } else if (ifcStationFuel.name === IFC_FUEL_NAME.GASOLINE_98) {
      prices.gasoline98 = ifcStationFuel.price;
    } else if (ifcStationFuel.name === IFC_FUEL_NAME.DIESEL) {
      prices.diesel = ifcStationFuel.price;
    } else if (ifcStationFuel.name === IFC_FUEL_NAME.LPG) {
      prices.lpg = ifcStationFuel.price;
    }
  }

  return prices;
}

function mapIfcStationToStation(ifcStation: IfcStation | DeepReadonly<IfcStation>): Station {
  return {
    id: ifcStation.id,
    name: ifcStation.name,
    brand: ifcStation.brand,
    location: {
      latitude: ifcStation.address.latitude,
      longitude: ifcStation.address.longitude,
    },
    address: {
      street: ifcStation.address.street,
      postalCode: ifcStation.address.postalCode,
      town: ifcStation.address.town,
      municipality: ifcStation.address.municipality,
      district: ifcStation.address.district,
      country: ifcStation.address.country,
    },
    prices: mapIfcStationFuelsToFuelPrices(ifcStation.fuels),
  };
}

export function mapIfcStationsToStations(ifcStations: DeepReadonly<IfcStation[]>): Station[] {
  return ifcStations.map(mapIfcStationToStation);
}