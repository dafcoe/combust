import { COUNTRY_NAME } from '@dafcoe/iberian-fuel-client';
import type { IfcStation } from '../../iberian-fuel.type.ts';

export const ifcStationGalpLisbonFixture: IfcStation = {
  id: 'PT-10001',
  name: 'Galp Lisboa Centro',
  brand: 'Galp',
  address: {
    street: 'Avenida da Liberdade 100',
    postalCode: '1250-096',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7205,
    longitude: -9.1448,
  },
  fuels: [
    {
      id: 'PT-10001-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10001-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10001-gasoline98',
      name: 'Gasoline 98',
      price: 1.899,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10001-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.949,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
  ],
};

export const ifcStationRepsolMadridFixture: IfcStation = {
  id: 'ES-20001',
  name: 'Repsol Madrid Gran Vía',
  brand: 'Repsol',
  address: {
    street: 'Gran Vía 25',
    postalCode: '28013',
    town: 'Madrid',
    municipality: 'Madrid',
    district: 'Madrid',
    country: COUNTRY_NAME.ES,
    latitude: 40.4201,
    longitude: -3.7058,
  },
  fuels: [
    {
      id: 'ES-20001-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
  ],
};

export const ifcStationBpLisbonFixture: IfcStation = {
  id: 'PT-10002',
  name: 'BP Lisboa Rossio',
  brand: 'BP',
  address: {
    street: 'Praça Rossio 5',
    postalCode: '1100-200',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7139,
    longitude: -9.1394,
  },
  fuels: [],
};

export const ifcStationMoeveMadridFixture: IfcStation = {
  id: 'ES-20002',
  name: 'Moeve Madrid Castellana',
  brand: 'Moeve',
  address: {
    street: 'Paseo de la Castellana 50',
    postalCode: '28046',
    town: 'Madrid',
    municipality: 'Madrid',
    district: 'Madrid',
    country: COUNTRY_NAME.ES,
    latitude: 40.435,
    longitude: -3.689,
  },
  fuels: [
    {
      id: 'ES-20002-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.299,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'ES-20002-hydrogen',
      name: 'Hydrogen',
      price: 10.5,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
  ],
};

export const ifcStationRepsolLisbonFixture: IfcStation = {
  id: 'PT-10003',
  name: 'Repsol Campo de Ourique',
  brand: 'Repsol',
  address: {
    street: 'Campo de Ourique 100',
    postalCode: '1290-102',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7213,
    longitude: -9.1674,
  },
  fuels: [
    {
      id: 'PT-10001-diesel',
      name: 'Diesel',
      price: 1.719,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10001-gasoline95',
      name: 'Gasoline 95',
      price: 1.859,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10001-gasoline98',
      name: 'Gasoline 98',
      price: 1.999,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
  ],
};

export const ifcStationsFixture: IfcStation[] = [
  ifcStationGalpLisbonFixture,
  ifcStationRepsolMadridFixture,
  ifcStationBpLisbonFixture,
  ifcStationMoeveMadridFixture,
  ifcStationRepsolLisbonFixture,
];
