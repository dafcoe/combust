import { IFC_COUNTRY_NAME, IFC_FUEL_NAME, type IfcStation, type Station } from '@/types';

export const ifcStationGalpLisboaFixture: IfcStation = {
  id: 'PT-1234',
  name: 'Galp Lisboa Centro',
  brand: 'GALP',
  address: {
    street: 'Av. da Liberdade 100',
    postalCode: '1250-140',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: IFC_COUNTRY_NAME.PT,
    latitude: 38.7223,
    longitude: -9.1393,
  },
  fuels: [
    {
      id: '1',
      name: IFC_FUEL_NAME.GASOLINE_95,
      price: 1.759,
      updatedAt: new Date('2026-10-04T10:00:00Z'),
    },
    {
      id: '2',
      name: IFC_FUEL_NAME.DIESEL,
      price: 1.619,
      updatedAt: new Date('2026-10-04T10:00:00Z'),
    },
  ],
};

export const ifcStationRepsolMadridFixture: IfcStation = {
  id: 'ES-5678',
  name: 'Repsol Madrid Gran Via',
  brand: 'REPSOL',
  address: {
    street: 'Gran Via 25',
    postalCode: '28013',
    town: 'Madrid',
    municipality: 'Madrid',
    district: 'Madrid',
    country: IFC_COUNTRY_NAME.ES,
    latitude: 40.4200,
    longitude: -3.7050,
  },
  fuels: [
    {
      id: '3',
      name: IFC_FUEL_NAME.GASOLINE_98,
      price: 1.899,
      updatedAt: new Date('2026-10-04T10:00:00Z'),
    },
    {
      id: '4',
      name: IFC_FUEL_NAME.LPG,
      price: 0.989,
      updatedAt: new Date('2026-10-04T10:00:00Z'),
    },
  ],
};

export const ifcStationBpLisboaFixture: IfcStation = {
  id: 'PT-9999',
  name: 'BP Lisboa Rossio',
  brand: 'BP',
  address: {
    street: 'Praça Rossio 5',
    postalCode: '1100-200',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: IFC_COUNTRY_NAME.PT,
    latitude: 38.7139,
    longitude: -9.1394,
  },
  fuels: [
    {
      id: '5',
      name: IFC_FUEL_NAME.GASOLINE_95,
      price: 1.829,
      updatedAt: new Date('2026-10-04T10:00:00Z'),
    },
    {
      id: '6',
      name: IFC_FUEL_NAME.DIESEL,
      price: 1.649,
      updatedAt: new Date('2026-10-04T10:00:00Z'),
    },
  ],
};

export const ifcStationsFixture: IfcStation[] = [
  ifcStationGalpLisboaFixture,
  ifcStationRepsolMadridFixture,
];

export const ifcStationsWithBpFixture: IfcStation[] = [
  ifcStationBpLisboaFixture,
  ifcStationGalpLisboaFixture,
];

export const stationGalpLisboaFixture: Station = {
  id: 'PT-1234',
  name: 'Galp Lisboa Centro',
  brand: 'GALP',
  address: {
    country: 'Portugal',
    district: 'Lisboa',
    municipality: 'Lisboa',
    postalCode: '1250-140',
    street: 'Av. da Liberdade 100',
    town: 'Lisboa',
  },
  location: {
    latitude: 38.7223,
    longitude: -9.1393,
  },
  prices: {
    diesel: 1.619,
    gasoline95: 1.759,
    gasoline98: null,
    lgp: null,
  },
};

export const stationRepsolMadridFixture: Station = {
  id: 'ES-5678',
  name: 'Repsol Madrid Gran Via',
  brand: 'REPSOL',
  address: {
    country: 'Spain',
    district: 'Madrid',
    municipality: 'Madrid',
    postalCode: '28013',
    street: 'Gran Via 25',
    town: 'Madrid',
  },
  location: {
    latitude: 40.42,
    longitude: -3.705,
  },
  prices: {
    diesel: null,
    gasoline95: null,
    gasoline98: 1.899,
    lgp: 0.989,
  },
};

export const stationsFixture: Station[] = [
  stationGalpLisboaFixture,
  stationRepsolMadridFixture,
];
