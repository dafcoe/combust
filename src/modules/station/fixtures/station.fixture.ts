import type { Station } from '../station.type';

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
    lpg: null,
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
    lpg: 0.989,
  },
};

export const stationBpLisboaFixture: Station = {
  id: 'PT-9999',
  name: 'BP Lisboa Rossio',
  brand: 'BP',
  address: {
    country: 'Portugal',
    district: 'Lisboa',
    municipality: 'Lisboa',
    postalCode: '1100-200',
    street: 'Praça Rossio 5',
    town: 'Lisboa',
  },
  location: {
    latitude: 38.7139,
    longitude: -9.1394,
  },
  prices: {
    diesel: 1.649,
    gasoline95: 1.829,
    gasoline98: null,
    lpg: null,
  },
};

export const dummyStationFixture: Station = {
  id: 'PT-DEMO-1',
  name: 'Galp Marquês de Pombal',
  brand: 'GALP',
  address: {
    country: 'Portugal',
    district: 'Lisboa',
    municipality: 'Lisboa',
    postalCode: '1250-096',
    street: 'Praça Marquês de Pombal',
    town: 'Lisboa',
  },
  location: {
    latitude: 38.7255,
    longitude: -9.15,
  },
  prices: {
    diesel: 1.619,
    gasoline95: 1.759,
    gasoline98: 1.899,
    lpg: 0.949,
  },
  distanceKm: 0.8,
  isOpen: true,
};

