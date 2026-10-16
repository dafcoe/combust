import type { Station } from '../../station.type.ts';

export const stationGalpLisbonFixture: Station = {
  id: 'PT-10001',
  name: 'Galp Lisboa Centro',
  brand: 'Galp',
  brandLogoUrl: '/src/assets/brands/galp.svg',
  address: {
    country: 'Portugal',
    district: 'Lisboa',
    municipality: 'Lisboa',
    postalCode: '1250-096',
    street: 'Avenida da Liberdade 100',
    town: 'Lisboa',
  },
  location: {
    latitude: 38.7205,
    longitude: -9.1448,
  },
  prices: {
    diesel: 1.619,
    gasoline95: 1.759,
    gasoline98: 1.899,
    lpg: 0.949,
  },
};

export const stationRepsolMadridFixture: Station = {
  id: 'ES-20001',
  name: 'Repsol Madrid Gran Vía',
  brand: 'Repsol',
  brandLogoUrl: '/src/assets/brands/repsol.svg',
  address: {
    country: 'Spain',
    district: 'Madrid',
    municipality: 'Madrid',
    postalCode: '28013',
    street: 'Gran Vía 25',
    town: 'Madrid',
  },
  location: {
    latitude: 40.4201,
    longitude: -3.7058,
  },
  prices: {
    diesel: 1.589,
    gasoline95: null,
    gasoline98: null,
    lpg: null,
  },
};

export const stationBpLisbonFixture: Station = {
  id: 'PT-10002',
  name: 'BP Lisboa Rossio',
  brand: 'BP',
  brandLogoUrl: '/src/assets/brands/bp.svg',
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
    diesel: null,
    gasoline95: null,
    gasoline98: null,
    lpg: null,
  },
};

export const stationMoeveMadridFixture: Station = {
  id: 'ES-20002',
  name: 'Moeve Madrid Castellana',
  brand: 'Moeve',
  brandLogoUrl: '/src/assets/brands/moeve.svg',
  address: {
    country: 'Spain',
    district: 'Madrid',
    municipality: 'Madrid',
    postalCode: '28046',
    street: 'Paseo de la Castellana 50',
    town: 'Madrid',
  },
  location: {
    latitude: 40.435,
    longitude: -3.689,
  },
  prices: {
    diesel: null,
    gasoline95: null,
    gasoline98: null,
    lpg: null,
  },
};

export const stationsFixture: Station[] = [
  stationGalpLisbonFixture,
  stationRepsolMadridFixture,
  stationBpLisbonFixture,
  stationMoeveMadridFixture,
];