import type { Fuel } from '@dafcoe/iberian-fuel-client';
import { type FuelPrices, IFC_FUEL_NAME, type IfcStation, type Station } from '@/types';

function mapIfcStationFuelsToFuelPrices(ifcStationFuels: Fuel[]): FuelPrices {
  const prices: FuelPrices = {
    gasoline95: null,
    gasoline98: null,
    diesel: null,
    lgp: null,
  };

  for (const ifcStationFuel of ifcStationFuels) {
    if (ifcStationFuel.name === IFC_FUEL_NAME.GASOLINE_95) {
      prices.gasoline95 = ifcStationFuel.price;
    } else if (ifcStationFuel.name === IFC_FUEL_NAME.GASOLINE_98) {
      prices.gasoline98 = ifcStationFuel.price;
    } else if (ifcStationFuel.name === IFC_FUEL_NAME.DIESEL) {
      prices.diesel = ifcStationFuel.price;
    } else if (ifcStationFuel.name === IFC_FUEL_NAME.LPG) {
      prices.lgp = ifcStationFuel.price;
    }
  }

  return prices;
}

function mapIfcStationToStation(ifcStation: IfcStation): Station {
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

export function mapIfcStationsToStations(ifcStations: IfcStation[]): Station[] {
  return ifcStations.map(mapIfcStationToStation);
}