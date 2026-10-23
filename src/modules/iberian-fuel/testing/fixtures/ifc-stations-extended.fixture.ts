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

export const ifcStationGalpTelheirasNorteFixture: IfcStation = {
  id: 'PT-10004',
  name: 'Galp Telheiras Norte',
  brand: 'Galp',
  address: {
    street: 'Rua Professor Francisco Gentil 22',
    postalCode: '1600-624',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7612,
    longitude: -9.1628,
  },
  fuels: [
    {
      id: 'PT-10004-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
    {
      id: 'PT-10004-gasoline95',
      name: 'Gasoline 95',
      price: 1.679,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
    {
      id: 'PT-10004-gasoline98',
      name: 'Gasoline 98',
      price: 1.829,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
    {
      id: 'PT-10004-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
  ],
};

export const ifcStationBPCampoGrandeFixture: IfcStation = {
  id: 'PT-10005',
  name: 'BP Campo Grande',
  brand: 'BP',
  address: {
    street: 'Campo Grande 180',
    postalCode: '1700-093',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7554,
    longitude: -9.1551,
  },
  fuels: [
    {
      id: 'PT-10005-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T07:00:00Z'),
    },
    {
      id: 'PT-10005-gasoline95',
      name: 'Gasoline 95',
      price: 1.789,
      updatedAt: new Date('2026-10-18T07:00:00Z'),
    },
    {
      id: 'PT-10005-gasoline98',
      name: 'Gasoline 98',
      price: 1.959,
      updatedAt: new Date('2026-10-18T07:00:00Z'),
    },
  ],
};

export const ifcStationRepsolEntrecamposFixture: IfcStation = {
  id: 'PT-10006',
  name: 'Repsol Entrecampos',
  brand: 'Repsol',
  address: {
    street: 'Avenida da República 95',
    postalCode: '1050-190',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7456,
    longitude: -9.1472,
  },
  fuels: [
    {
      id: 'PT-10006-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T08:00:00Z'),
    },
    {
      id: 'PT-10006-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-19T08:00:00Z'),
    },
  ],
};

export const ifcStationGalpSaldanhaFixture: IfcStation = {
  id: 'PT-10007',
  name: 'Galp Saldanha',
  brand: 'Galp',
  address: {
    street: 'Praça Duque de Saldanha 12',
    postalCode: '1050-094',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7342,
    longitude: -9.1453,
  },
  fuels: [
    {
      id: 'PT-10007-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T09:00:00Z'),
    },
    {
      id: 'PT-10007-gasoline95',
      name: 'Gasoline 95',
      price: 1.799,
      updatedAt: new Date('2026-10-20T09:00:00Z'),
    },
    {
      id: 'PT-10007-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-20T09:00:00Z'),
    },
  ],
};

export const ifcStationBPPicoasFixture: IfcStation = {
  id: 'PT-10008',
  name: 'BP Picoas',
  brand: 'BP',
  address: {
    street: 'Avenida Fontes Pereira de Melo 38',
    postalCode: '1050-122',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7298,
    longitude: -9.1476,
  },
  fuels: [
    {
      id: 'PT-10008-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T10:00:00Z'),
    },
    {
      id: 'PT-10008-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-21T10:00:00Z'),
    },
    {
      id: 'PT-10008-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-21T10:00:00Z'),
    },
    {
      id: 'PT-10008-gasoline98',
      name: 'Gasoline 98',
      price: 1.949,
      updatedAt: new Date('2026-10-21T10:00:00Z'),
    },
  ],
};

export const ifcStationMoeveMarquesdePombalFixture: IfcStation = {
  id: 'PT-10009',
  name: 'Moeve Marquês de Pombal',
  brand: 'Moeve',
  address: {
    street: 'Rua Braamcamp 15',
    postalCode: '1250-049',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7251,
    longitude: -9.1512,
  },
  fuels: [
    {
      id: 'PT-10009-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10009-gasoline95',
      name: 'Gasoline 95',
      price: 1.809,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10009-gasoline98',
      name: 'Gasoline 98',
      price: 1.879,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10009-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
  ],
};

export const ifcStationGalpAmoreirasFixture: IfcStation = {
  id: 'PT-10010',
  name: 'Galp Amoreiras',
  brand: 'Galp',
  address: {
    street: 'Avenida Engenheiro Duarte Pacheco 20',
    postalCode: '1070-101',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7235,
    longitude: -9.1618,
  },
  fuels: [
    {
      id: 'PT-10010-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
    {
      id: 'PT-10010-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
    {
      id: 'PT-10010-adblue',
      name: 'AdBlue',
      price: 0.809,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
  ],
};

export const ifcStationRepsolCampolideFixture: IfcStation = {
  id: 'PT-10011',
  name: 'Repsol Campolide',
  brand: 'Repsol',
  address: {
    street: 'Rua de Campolide 145',
    postalCode: '1070-028',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7314,
    longitude: -9.1652,
  },
  fuels: [
    {
      id: 'PT-10011-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T13:00:00Z'),
    },
    {
      id: 'PT-10011-gasoline95',
      name: 'Gasoline 95',
      price: 1.819,
      updatedAt: new Date('2026-10-18T13:00:00Z'),
    },
    {
      id: 'PT-10011-gasoline98',
      name: 'Gasoline 98',
      price: 1.939,
      updatedAt: new Date('2026-10-18T13:00:00Z'),
    },
  ],
};

export const ifcStationPrioSeteRiosFixture: IfcStation = {
  id: 'PT-10012',
  name: 'Prio Sete Rios',
  brand: 'Prio',
  address: {
    street: 'Praça General Humberto Delgado 4',
    postalCode: '1500-423',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7411,
    longitude: -9.1685,
  },
  fuels: [
    {
      id: 'PT-10012-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T14:00:00Z'),
    },
    {
      id: 'PT-10012-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-19T14:00:00Z'),
    },
  ],
};

export const ifcStationBPSaoDomingosdeBenficaFixture: IfcStation = {
  id: 'PT-10013',
  name: 'BP São Domingos de Benfica',
  brand: 'BP',
  address: {
    street: 'Estrada de Benfica 320',
    postalCode: '1500-101',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7452,
    longitude: -9.1782,
  },
  fuels: [
    {
      id: 'PT-10013-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T15:00:00Z'),
    },
  ],
};

export const ifcStationGalpBenficaCentroFixture: IfcStation = {
  id: 'PT-10014',
  name: 'Galp Benfica Centro',
  brand: 'Galp',
  address: {
    street: 'Estrada de Benfica 540',
    postalCode: '1500-106',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7508,
    longitude: -9.1914,
  },
  fuels: [
    {
      id: 'PT-10014-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-21T16:00:00Z'),
    },
  ],
};

export const ifcStationRepsolBenficaGraoVascoFixture: IfcStation = {
  id: 'PT-10015',
  name: 'Repsol Benfica Grão Vasco',
  brand: 'Repsol',
  address: {
    street: 'Rua Grão Vasco 45',
    postalCode: '1500-338',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7479,
    longitude: -9.1982,
  },
  fuels: [
    {
      id: 'PT-10015-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10015-gasoline95',
      name: 'Gasoline 95',
      price: 1.839,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10015-gasoline98',
      name: 'Gasoline 98',
      price: 1.859,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10015-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.949,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10015-hydrogen',
      name: 'Hydrogen',
      price: 10.65,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
  ],
};

export const ifcStationMoeveColomboFixture: IfcStation = {
  id: 'PT-10016',
  name: 'Moeve Colombo',
  brand: 'Moeve',
  address: {
    street: 'Avenida Lusíada 10',
    postalCode: '1500-392',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7548,
    longitude: -9.1891,
  },
  fuels: [
    {
      id: 'PT-10016-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
    {
      id: 'PT-10016-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
    {
      id: 'PT-10016-gasoline98',
      name: 'Gasoline 98',
      price: 1.989,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
    {
      id: 'PT-10016-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
  ],
};

export const ifcStationGalpCarnideFixture: IfcStation = {
  id: 'PT-10017',
  name: 'Galp Carnide',
  brand: 'Galp',
  address: {
    street: 'Avenida do Colégio Militar 18',
    postalCode: '1500-180',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7601,
    longitude: -9.1865,
  },
  fuels: [
    {
      id: 'PT-10017-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T19:00:00Z'),
    },
    {
      id: 'PT-10017-gasoline95',
      name: 'Gasoline 95',
      price: 1.849,
      updatedAt: new Date('2026-10-18T19:00:00Z'),
    },
    {
      id: 'PT-10017-gasoline98',
      name: 'Gasoline 98',
      price: 1.919,
      updatedAt: new Date('2026-10-18T19:00:00Z'),
    },
  ],
};

export const ifcStationBPPontinhaFixture: IfcStation = {
  id: 'PT-10018',
  name: 'BP Pontinha',
  brand: 'BP',
  address: {
    street: 'Estrada Militar de Carnide 8',
    postalCode: '1600-515',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7663,
    longitude: -9.1942,
  },
  fuels: [
    {
      id: 'PT-10018-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T06:00:00Z'),
    },
    {
      id: 'PT-10018-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-19T06:00:00Z'),
    },
  ],
};

export const ifcStationAlvesBandeiraLumiarCentroFixture: IfcStation = {
  id: 'PT-10019',
  name: 'Alves Bandeira Lumiar Centro',
  brand: 'Alves Bandeira',
  address: {
    street: 'Alameda das Linhas de Torres 198',
    postalCode: '1750-149',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7725,
    longitude: -9.1593,
  },
  fuels: [
    {
      id: 'PT-10019-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T07:00:00Z'),
    },
    {
      id: 'PT-10019-gasoline95',
      name: 'Gasoline 95',
      price: 1.859,
      updatedAt: new Date('2026-10-20T07:00:00Z'),
    },
    {
      id: 'PT-10019-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-20T07:00:00Z'),
    },
  ],
};

export const ifcStationRepsolQuintadasConchasFixture: IfcStation = {
  id: 'PT-10020',
  name: 'Repsol Quinta das Conchas',
  brand: 'Repsol',
  address: {
    street: 'Rua Maria Carlota 12',
    postalCode: '1750-175',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7671,
    longitude: -9.1554,
  },
  fuels: [
    {
      id: 'PT-10020-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T08:00:00Z'),
    },
    {
      id: 'PT-10020-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-21T08:00:00Z'),
    },
    {
      id: 'PT-10020-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-21T08:00:00Z'),
    },
    {
      id: 'PT-10020-gasoline98',
      name: 'Gasoline 98',
      price: 1.909,
      updatedAt: new Date('2026-10-21T08:00:00Z'),
    },
  ],
};

export const ifcStationGalpAltadeLisboaFixture: IfcStation = {
  id: 'PT-10021',
  name: 'Galp Alta de Lisboa',
  brand: 'Galp',
  address: {
    street: 'Avenida David Mourão-Ferreira 40',
    postalCode: '1750-412',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7782,
    longitude: -9.1528,
  },
  fuels: [
    {
      id: 'PT-10021-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T09:00:00Z'),
    },
    {
      id: 'PT-10021-gasoline95',
      name: 'Gasoline 95',
      price: 1.869,
      updatedAt: new Date('2026-10-22T09:00:00Z'),
    },
    {
      id: 'PT-10021-gasoline98',
      name: 'Gasoline 98',
      price: 1.839,
      updatedAt: new Date('2026-10-22T09:00:00Z'),
    },
    {
      id: 'PT-10021-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-22T09:00:00Z'),
    },
  ],
};

export const ifcStationBPSantaClaraFixture: IfcStation = {
  id: 'PT-10022',
  name: 'BP Santa Clara',
  brand: 'BP',
  address: {
    street: 'Azinhaga da Cidade 30',
    postalCode: '1750-063',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7841,
    longitude: -9.1576,
  },
  fuels: [
    {
      id: 'PT-10022-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T10:00:00Z'),
    },
    {
      id: 'PT-10022-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-17T10:00:00Z'),
    },
    {
      id: 'PT-10022-adblue',
      name: 'AdBlue',
      price: 0.829,
      updatedAt: new Date('2026-10-17T10:00:00Z'),
    },
  ],
};

export const ifcStationMoeveCalharizdeBenficaFixture: IfcStation = {
  id: 'PT-10023',
  name: 'Moeve Calhariz de Benfica',
  brand: 'Moeve',
  address: {
    street: 'Estrada de Benfica 710',
    postalCode: '1500-112',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7533,
    longitude: -9.2065,
  },
  fuels: [
    {
      id: 'PT-10023-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T11:00:00Z'),
    },
    {
      id: 'PT-10023-gasoline95',
      name: 'Gasoline 95',
      price: 1.879,
      updatedAt: new Date('2026-10-18T11:00:00Z'),
    },
    {
      id: 'PT-10023-gasoline98',
      name: 'Gasoline 98',
      price: 1.899,
      updatedAt: new Date('2026-10-18T11:00:00Z'),
    },
  ],
};

export const ifcStationPrioAlvaladeNorteFixture: IfcStation = {
  id: 'PT-10024',
  name: 'Prio Alvalade Norte',
  brand: 'Prio',
  address: {
    street: 'Avenida da Igreja 42',
    postalCode: '1700-239',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7516,
    longitude: -9.1438,
  },
  fuels: [
    {
      id: 'PT-10024-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T12:00:00Z'),
    },
    {
      id: 'PT-10024-gasoline95',
      name: 'Gasoline 95',
      price: 1.779,
      updatedAt: new Date('2026-10-19T12:00:00Z'),
    },
  ],
};

export const ifcStationGalpAlvaladeSulFixture: IfcStation = {
  id: 'PT-10025',
  name: 'Galp Alvalade Sul',
  brand: 'Galp',
  address: {
    street: 'Avenida de Roma 75',
    postalCode: '1700-322',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7471,
    longitude: -9.1415,
  },
  fuels: [
    {
      id: 'PT-10025-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T13:00:00Z'),
    },
  ],
};

export const ifcStationBPRomaAreeiroFixture: IfcStation = {
  id: 'PT-10026',
  name: 'BP Roma Areeiro',
  brand: 'BP',
  address: {
    street: 'Avenida Frei Miguel Contreiras 54',
    postalCode: '1700-213',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7432,
    longitude: -9.1368,
  },
  fuels: [
    {
      id: 'PT-10026-gasoline95',
      name: 'Gasoline 95',
      price: 1.789,
      updatedAt: new Date('2026-10-21T14:00:00Z'),
    },
  ],
};

export const ifcStationRepsolAreeiroFixture: IfcStation = {
  id: 'PT-10027',
  name: 'Repsol Areeiro',
  brand: 'Repsol',
  address: {
    street: 'Praça Francisco Sá Carneiro 8',
    postalCode: '1000-159',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7419,
    longitude: -9.1337,
  },
  fuels: [
    {
      id: 'PT-10027-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T15:00:00Z'),
    },
    {
      id: 'PT-10027-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-22T15:00:00Z'),
    },
    {
      id: 'PT-10027-gasoline98',
      name: 'Gasoline 98',
      price: 2.019,
      updatedAt: new Date('2026-10-22T15:00:00Z'),
    },
    {
      id: 'PT-10027-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.949,
      updatedAt: new Date('2026-10-22T15:00:00Z'),
    },
    {
      id: 'PT-10027-hydrogen',
      name: 'Hydrogen',
      price: 11.25,
      updatedAt: new Date('2026-10-22T15:00:00Z'),
    },
  ],
};

export const ifcStationAuchanAlamedaFixture: IfcStation = {
  id: 'PT-10028',
  name: 'Auchan Alameda',
  brand: 'Auchan',
  address: {
    street: 'Alameda Dom Afonso Henriques 60',
    postalCode: '1000-123',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7368,
    longitude: -9.1341,
  },
  fuels: [
    {
      id: 'PT-10028-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T16:00:00Z'),
    },
    {
      id: 'PT-10028-gasoline95',
      name: 'Gasoline 95',
      price: 1.799,
      updatedAt: new Date('2026-10-17T16:00:00Z'),
    },
    {
      id: 'PT-10028-gasoline98',
      name: 'Gasoline 98',
      price: 1.949,
      updatedAt: new Date('2026-10-17T16:00:00Z'),
    },
    {
      id: 'PT-10028-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-17T16:00:00Z'),
    },
  ],
};

export const ifcStationGalpArroiosFixture: IfcStation = {
  id: 'PT-10029',
  name: 'Galp Arroios',
  brand: 'Galp',
  address: {
    street: 'Avenida Almirante Reis 115',
    postalCode: '1150-014',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7302,
    longitude: -9.1348,
  },
  fuels: [
    {
      id: 'PT-10029-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T17:00:00Z'),
    },
    {
      id: 'PT-10029-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-18T17:00:00Z'),
    },
    {
      id: 'PT-10029-gasoline98',
      name: 'Gasoline 98',
      price: 1.879,
      updatedAt: new Date('2026-10-18T17:00:00Z'),
    },
  ],
};

export const ifcStationMoeveAnjosFixture: IfcStation = {
  id: 'PT-10030',
  name: 'Moeve Anjos',
  brand: 'Moeve',
  address: {
    street: 'Avenida Almirante Reis 55',
    postalCode: '1150-011',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7238,
    longitude: -9.1352,
  },
  fuels: [
    {
      id: 'PT-10030-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T18:00:00Z'),
    },
    {
      id: 'PT-10030-gasoline95',
      name: 'Gasoline 95',
      price: 1.809,
      updatedAt: new Date('2026-10-19T18:00:00Z'),
    },
  ],
};

export const ifcStationBPMartimMonizFixture: IfcStation = {
  id: 'PT-10031',
  name: 'BP Martim Moniz',
  brand: 'BP',
  address: {
    street: 'Praça Martim Moniz 22',
    postalCode: '1100-341',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7169,
    longitude: -9.1365,
  },
  fuels: [
    {
      id: 'PT-10031-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T19:00:00Z'),
    },
    {
      id: 'PT-10031-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-20T19:00:00Z'),
    },
    {
      id: 'PT-10031-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-20T19:00:00Z'),
    },
  ],
};

export const ifcStationRepsolBaixaChiadoFixture: IfcStation = {
  id: 'PT-10032',
  name: 'Repsol Baixa Chiado',
  brand: 'Repsol',
  address: {
    street: 'Rua do Ouro 140',
    postalCode: '1100-062',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7115,
    longitude: -9.1388,
  },
  fuels: [
    {
      id: 'PT-10032-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T06:00:00Z'),
    },
    {
      id: 'PT-10032-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-21T06:00:00Z'),
    },
    {
      id: 'PT-10032-gasoline95',
      name: 'Gasoline 95',
      price: 1.819,
      updatedAt: new Date('2026-10-21T06:00:00Z'),
    },
    {
      id: 'PT-10032-gasoline98',
      name: 'Gasoline 98',
      price: 1.869,
      updatedAt: new Date('2026-10-21T06:00:00Z'),
    },
  ],
};

export const ifcStationGalpCaisdoSodreFixture: IfcStation = {
  id: 'PT-10033',
  name: 'Galp Cais do Sodré',
  brand: 'Galp',
  address: {
    street: 'Praça Duque de Terceira 18',
    postalCode: '1200-161',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7061,
    longitude: -9.1442,
  },
  fuels: [
    {
      id: 'PT-10033-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T07:00:00Z'),
    },
    {
      id: 'PT-10033-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-22T07:00:00Z'),
    },
    {
      id: 'PT-10033-gasoline98',
      name: 'Gasoline 98',
      price: 1.999,
      updatedAt: new Date('2026-10-22T07:00:00Z'),
    },
    {
      id: 'PT-10033-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-22T07:00:00Z'),
    },
  ],
};

export const ifcStationShellSantosFixture: IfcStation = {
  id: 'PT-10034',
  name: 'Shell Santos',
  brand: 'Shell',
  address: {
    street: 'Avenida 24 de Julho 68',
    postalCode: '1200-480',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7068,
    longitude: -9.1545,
  },
  fuels: [
    {
      id: 'PT-10034-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10034-gasoline95',
      name: 'Gasoline 95',
      price: 1.829,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10034-adblue',
      name: 'AdBlue',
      price: 0.749,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
  ],
};

export const ifcStationBPAlcantaraTerraFixture: IfcStation = {
  id: 'PT-10035',
  name: 'BP Alcântara Terra',
  brand: 'BP',
  address: {
    street: 'Rua de Cascais 35',
    postalCode: '1300-118',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7092,
    longitude: -9.1754,
  },
  fuels: [
    {
      id: 'PT-10035-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T09:00:00Z'),
    },
    {
      id: 'PT-10035-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-18T09:00:00Z'),
    },
    {
      id: 'PT-10035-gasoline98',
      name: 'Gasoline 98',
      price: 1.859,
      updatedAt: new Date('2026-10-18T09:00:00Z'),
    },
  ],
};

export const ifcStationRepsolAlcantaraMarFixture: IfcStation = {
  id: 'PT-10036',
  name: 'Repsol Alcântara Mar',
  brand: 'Repsol',
  address: {
    street: 'Avenida da Índia 12',
    postalCode: '1300-299',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7018,
    longitude: -9.1789,
  },
  fuels: [
    {
      id: 'PT-10036-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T10:00:00Z'),
    },
    {
      id: 'PT-10036-gasoline95',
      name: 'Gasoline 95',
      price: 1.839,
      updatedAt: new Date('2026-10-19T10:00:00Z'),
    },
  ],
};

export const ifcStationGalpBelemJeronimosFixture: IfcStation = {
  id: 'PT-10037',
  name: 'Galp Belém Jerónimos',
  brand: 'Galp',
  address: {
    street: 'Praça do Império 10',
    postalCode: '1400-206',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.6978,
    longitude: -9.2062,
  },
  fuels: [
    {
      id: 'PT-10037-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T11:00:00Z'),
    },
  ],
};

export const ifcStationMoeveBelemTorreFixture: IfcStation = {
  id: 'PT-10038',
  name: 'Moeve Belém Torre',
  brand: 'Moeve',
  address: {
    street: 'Avenida Brasília 45',
    postalCode: '1400-038',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.6925,
    longitude: -9.2148,
  },
  fuels: [
    {
      id: 'PT-10038-gasoline95',
      name: 'Gasoline 95',
      price: 1.849,
      updatedAt: new Date('2026-10-21T12:00:00Z'),
    },
  ],
};

export const ifcStationPrioResteloNorteFixture: IfcStation = {
  id: 'PT-10039',
  name: 'Prio Restelo Norte',
  brand: 'Prio',
  address: {
    street: 'Avenida das Descobertas 80',
    postalCode: '1400-092',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7065,
    longitude: -9.2173,
  },
  fuels: [
    {
      id: 'PT-10039-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T13:00:00Z'),
    },
    {
      id: 'PT-10039-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-22T13:00:00Z'),
    },
    {
      id: 'PT-10039-gasoline98',
      name: 'Gasoline 98',
      price: 1.979,
      updatedAt: new Date('2026-10-22T13:00:00Z'),
    },
    {
      id: 'PT-10039-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.949,
      updatedAt: new Date('2026-10-22T13:00:00Z'),
    },
    {
      id: 'PT-10039-hydrogen',
      name: 'Hydrogen',
      price: 10.65,
      updatedAt: new Date('2026-10-22T13:00:00Z'),
    },
  ],
};

export const ifcStationGalpResteloEstadioFixture: IfcStation = {
  id: 'PT-10040',
  name: 'Galp Restelo Estádio',
  brand: 'Galp',
  address: {
    street: 'Avenida do Restelo 33',
    postalCode: '1400-197',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7021,
    longitude: -9.2105,
  },
  fuels: [
    {
      id: 'PT-10040-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T14:00:00Z'),
    },
    {
      id: 'PT-10040-gasoline95',
      name: 'Gasoline 95',
      price: 1.859,
      updatedAt: new Date('2026-10-17T14:00:00Z'),
    },
    {
      id: 'PT-10040-gasoline98',
      name: 'Gasoline 98',
      price: 1.909,
      updatedAt: new Date('2026-10-17T14:00:00Z'),
    },
    {
      id: 'PT-10040-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-17T14:00:00Z'),
    },
  ],
};

export const ifcStationBPAjudaPalacioFixture: IfcStation = {
  id: 'PT-10041',
  name: 'BP Ajuda Palácio',
  brand: 'BP',
  address: {
    street: 'Calçada da Ajuda 120',
    postalCode: '1300-085',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7075,
    longitude: -9.1985,
  },
  fuels: [
    {
      id: 'PT-10041-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T15:00:00Z'),
    },
    {
      id: 'PT-10041-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-18T15:00:00Z'),
    },
    {
      id: 'PT-10041-gasoline98',
      name: 'Gasoline 98',
      price: 1.839,
      updatedAt: new Date('2026-10-18T15:00:00Z'),
    },
  ],
};

export const ifcStationRepsolAjudaBoaHoraFixture: IfcStation = {
  id: 'PT-10042',
  name: 'Repsol Ajuda Boa-Hora',
  brand: 'Repsol',
  address: {
    street: 'Rua Dom Vasco 24',
    postalCode: '1300-192',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7039,
    longitude: -9.1932,
  },
  fuels: [
    {
      id: 'PT-10042-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T16:00:00Z'),
    },
    {
      id: 'PT-10042-gasoline95',
      name: 'Gasoline 95',
      price: 1.869,
      updatedAt: new Date('2026-10-19T16:00:00Z'),
    },
  ],
};

export const ifcStationIntermarcheMonsantoMontesClarosFixture: IfcStation = {
  id: 'PT-10043',
  name: 'Intermarché Monsanto Montes Claros',
  brand: 'Intermarché',
  address: {
    street: 'Estrada dos Montes Claros 1',
    postalCode: '1300-000',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7182,
    longitude: -9.1956,
  },
  fuels: [
    {
      id: 'PT-10043-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T17:00:00Z'),
    },
    {
      id: 'PT-10043-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-20T17:00:00Z'),
    },
    {
      id: 'PT-10043-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-20T17:00:00Z'),
    },
  ],
};

export const ifcStationGalpMonsantoSerafinaFixture: IfcStation = {
  id: 'PT-10044',
  name: 'Galp Monsanto Serafina',
  brand: 'Galp',
  address: {
    street: 'Estrada da Serafina 50',
    postalCode: '1070-258',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7335,
    longitude: -9.1824,
  },
  fuels: [
    {
      id: 'PT-10044-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T18:00:00Z'),
    },
    {
      id: 'PT-10044-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-21T18:00:00Z'),
    },
    {
      id: 'PT-10044-gasoline95',
      name: 'Gasoline 95',
      price: 1.879,
      updatedAt: new Date('2026-10-21T18:00:00Z'),
    },
    {
      id: 'PT-10044-gasoline98',
      name: 'Gasoline 98',
      price: 1.829,
      updatedAt: new Date('2026-10-21T18:00:00Z'),
    },
  ],
};

export const ifcStationBPLapaFixture: IfcStation = {
  id: 'PT-10045',
  name: 'BP Lapa',
  brand: 'BP',
  address: {
    street: 'Rua das Janelas Verdes 90',
    postalCode: '1200-692',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7058,
    longitude: -9.1612,
  },
  fuels: [
    {
      id: 'PT-10045-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T19:00:00Z'),
    },
    {
      id: 'PT-10045-gasoline95',
      name: 'Gasoline 95',
      price: 1.779,
      updatedAt: new Date('2026-10-22T19:00:00Z'),
    },
    {
      id: 'PT-10045-gasoline98',
      name: 'Gasoline 98',
      price: 1.959,
      updatedAt: new Date('2026-10-22T19:00:00Z'),
    },
    {
      id: 'PT-10045-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-22T19:00:00Z'),
    },
  ],
};

export const ifcStationMoeveEstrelaBasilicaFixture: IfcStation = {
  id: 'PT-10046',
  name: 'Moeve Estrela Basílica',
  brand: 'Moeve',
  address: {
    street: 'Calçada da Estrela 180',
    postalCode: '1200-664',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7132,
    longitude: -9.1598,
  },
  fuels: [
    {
      id: 'PT-10046-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
    {
      id: 'PT-10046-gasoline95',
      name: 'Gasoline 95',
      price: 1.679,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
    {
      id: 'PT-10046-adblue',
      name: 'AdBlue',
      price: 0.769,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
  ],
};

export const ifcStationRepsolRatoFixture: IfcStation = {
  id: 'PT-10047',
  name: 'Repsol Rato',
  brand: 'Repsol',
  address: {
    street: 'Largo do Rato 10',
    postalCode: '1250-186',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7201,
    longitude: -9.1545,
  },
  fuels: [
    {
      id: 'PT-10047-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T07:00:00Z'),
    },
    {
      id: 'PT-10047-gasoline95',
      name: 'Gasoline 95',
      price: 1.789,
      updatedAt: new Date('2026-10-18T07:00:00Z'),
    },
    {
      id: 'PT-10047-gasoline98',
      name: 'Gasoline 98',
      price: 2.019,
      updatedAt: new Date('2026-10-18T07:00:00Z'),
    },
  ],
};

export const ifcStationAlvesBandeiraPrincipeRealFixture: IfcStation = {
  id: 'PT-10048',
  name: 'Alves Bandeira Príncipe Real',
  brand: 'Alves Bandeira',
  address: {
    street: 'Rua da Escola Politécnica 65',
    postalCode: '1250-101',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7175,
    longitude: -9.1498,
  },
  fuels: [
    {
      id: 'PT-10048-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T08:00:00Z'),
    },
    {
      id: 'PT-10048-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-19T08:00:00Z'),
    },
  ],
};

export const ifcStationGalpBairroAltoFixture: IfcStation = {
  id: 'PT-10049',
  name: 'Galp Bairro Alto',
  brand: 'Galp',
  address: {
    street: 'Rua do Século 85',
    postalCode: '1200-433',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7145,
    longitude: -9.1462,
  },
  fuels: [
    {
      id: 'PT-10049-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T09:00:00Z'),
    },
  ],
};

export const ifcStationBPSantaCatarinaFixture: IfcStation = {
  id: 'PT-10050',
  name: 'BP Santa Catarina',
  brand: 'BP',
  address: {
    street: 'Calçada do Combro 40',
    postalCode: '1200-114',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7109,
    longitude: -9.1491,
  },
  fuels: [
    {
      id: 'PT-10050-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-21T10:00:00Z'),
    },
  ],
};

export const ifcStationRepsolGracaMiradouroFixture: IfcStation = {
  id: 'PT-10051',
  name: 'Repsol Graça Miradouro',
  brand: 'Repsol',
  address: {
    street: 'Largo da Graça 30',
    postalCode: '1170-165',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7178,
    longitude: -9.1302,
  },
  fuels: [
    {
      id: 'PT-10051-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10051-gasoline95',
      name: 'Gasoline 95',
      price: 1.809,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10051-gasoline98',
      name: 'Gasoline 98',
      price: 1.939,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10051-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.949,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10051-hydrogen',
      name: 'Hydrogen',
      price: 11.25,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
  ],
};

export const ifcStationPrioAlfamaFixture: IfcStation = {
  id: 'PT-10052',
  name: 'Prio Alfama',
  brand: 'Prio',
  address: {
    street: 'Largo do Chafariz de Dentro 15',
    postalCode: '1100-139',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7118,
    longitude: -9.1278,
  },
  fuels: [
    {
      id: 'PT-10052-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
    {
      id: 'PT-10052-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
    {
      id: 'PT-10052-gasoline98',
      name: 'Gasoline 98',
      price: 1.869,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
    {
      id: 'PT-10052-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
  ],
};

export const ifcStationGalpSantaApoloniaEstacaoFixture: IfcStation = {
  id: 'PT-10053',
  name: 'Galp Santa Apolónia Estação',
  brand: 'Galp',
  address: {
    street: 'Avenida Infante D. Henrique 1',
    postalCode: '1149-066',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7142,
    longitude: -9.1225,
  },
  fuels: [
    {
      id: 'PT-10053-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T13:00:00Z'),
    },
    {
      id: 'PT-10053-gasoline95',
      name: 'Gasoline 95',
      price: 1.819,
      updatedAt: new Date('2026-10-18T13:00:00Z'),
    },
    {
      id: 'PT-10053-gasoline98',
      name: 'Gasoline 98',
      price: 1.999,
      updatedAt: new Date('2026-10-18T13:00:00Z'),
    },
  ],
};

export const ifcStationMoeveXabregasFixture: IfcStation = {
  id: 'PT-10054',
  name: 'Moeve Xabregas',
  brand: 'Moeve',
  address: {
    street: 'Rua de Xabregas 48',
    postalCode: '1900-440',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7258,
    longitude: -9.1132,
  },
  fuels: [
    {
      id: 'PT-10054-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T14:00:00Z'),
    },
    {
      id: 'PT-10054-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-19T14:00:00Z'),
    },
  ],
};

export const ifcStationBPBeatoConventoFixture: IfcStation = {
  id: 'PT-10055',
  name: 'BP Beato Convento',
  brand: 'BP',
  address: {
    street: 'Alameda do Beato 25',
    postalCode: '1900-088',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7325,
    longitude: -9.1085,
  },
  fuels: [
    {
      id: 'PT-10055-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T15:00:00Z'),
    },
    {
      id: 'PT-10055-gasoline95',
      name: 'Gasoline 95',
      price: 1.829,
      updatedAt: new Date('2026-10-20T15:00:00Z'),
    },
    {
      id: 'PT-10055-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-20T15:00:00Z'),
    },
  ],
};

export const ifcStationRepsolMarvilaAntigaFixture: IfcStation = {
  id: 'PT-10056',
  name: 'Repsol Marvila Antiga',
  brand: 'Repsol',
  address: {
    street: 'Rua do Açúcar 76',
    postalCode: '1950-009',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7395,
    longitude: -9.1025,
  },
  fuels: [
    {
      id: 'PT-10056-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T16:00:00Z'),
    },
    {
      id: 'PT-10056-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-21T16:00:00Z'),
    },
    {
      id: 'PT-10056-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-21T16:00:00Z'),
    },
    {
      id: 'PT-10056-gasoline98',
      name: 'Gasoline 98',
      price: 1.989,
      updatedAt: new Date('2026-10-21T16:00:00Z'),
    },
  ],
};

export const ifcStationGalpMarvilaBracodePrataFixture: IfcStation = {
  id: 'PT-10057',
  name: 'Galp Marvila Braço de Prata',
  brand: 'Galp',
  address: {
    street: 'Rua Fernando Palha 12',
    postalCode: '1950-130',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7462,
    longitude: -9.1008,
  },
  fuels: [
    {
      id: 'PT-10057-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10057-gasoline95',
      name: 'Gasoline 95',
      price: 1.839,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10057-gasoline98',
      name: 'Gasoline 98',
      price: 1.919,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10057-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
  ],
};

export const ifcStationQ8PocodoBispoFixture: IfcStation = {
  id: 'PT-10058',
  name: 'Q8 Poço do Bispo',
  brand: 'Q8',
  address: {
    street: 'Rua do Vale Formoso 110',
    postalCode: '1950-281',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7428,
    longitude: -9.1042,
  },
  fuels: [
    {
      id: 'PT-10058-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
    {
      id: 'PT-10058-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
    {
      id: 'PT-10058-adblue',
      name: 'AdBlue',
      price: 0.789,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
  ],
};

export const ifcStationBPCaboRuivoSulFixture: IfcStation = {
  id: 'PT-10059',
  name: 'BP Cabo Ruivo Sul',
  brand: 'BP',
  address: {
    street: 'Avenida Infante D. Henrique 320',
    postalCode: '1800-220',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7541,
    longitude: -9.1012,
  },
  fuels: [
    {
      id: 'PT-10059-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T19:00:00Z'),
    },
    {
      id: 'PT-10059-gasoline95',
      name: 'Gasoline 95',
      price: 1.849,
      updatedAt: new Date('2026-10-18T19:00:00Z'),
    },
    {
      id: 'PT-10059-gasoline98',
      name: 'Gasoline 98',
      price: 1.979,
      updatedAt: new Date('2026-10-18T19:00:00Z'),
    },
  ],
};

export const ifcStationGalpCaboRuivoNorteFixture: IfcStation = {
  id: 'PT-10060',
  name: 'Galp Cabo Ruivo Norte',
  brand: 'Galp',
  address: {
    street: 'Avenida Infante D. Henrique 360',
    postalCode: '1800-222',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7615,
    longitude: -9.0988,
  },
  fuels: [
    {
      id: 'PT-10060-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T06:00:00Z'),
    },
    {
      id: 'PT-10060-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-19T06:00:00Z'),
    },
  ],
};

export const ifcStationRepsolParquedasNacoesSulFixture: IfcStation = {
  id: 'PT-10061',
  name: 'Repsol Parque das Nações Sul',
  brand: 'Repsol',
  address: {
    street: 'Passeio do Adamastor 8',
    postalCode: '1990-012',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7588,
    longitude: -9.0965,
  },
  fuels: [
    {
      id: 'PT-10061-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T07:00:00Z'),
    },
  ],
};

export const ifcStationMoeveParquedasNacoesMarinaFixture: IfcStation = {
  id: 'PT-10062',
  name: 'Moeve Parque das Nações Marina',
  brand: 'Moeve',
  address: {
    street: 'Passeio de Neptuno 15',
    postalCode: '1990-192',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7622,
    longitude: -9.0945,
  },
  fuels: [
    {
      id: 'PT-10062-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-21T08:00:00Z'),
    },
  ],
};

export const ifcStationPrioOrienteGareFixture: IfcStation = {
  id: 'PT-10063',
  name: 'Prio Oriente Gare',
  brand: 'Prio',
  address: {
    street: 'Avenida D. João II 45',
    postalCode: '1990-084',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7678,
    longitude: -9.0991,
  },
  fuels: [
    {
      id: 'PT-10063-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T09:00:00Z'),
    },
    {
      id: 'PT-10063-gasoline95',
      name: 'Gasoline 95',
      price: 1.869,
      updatedAt: new Date('2026-10-22T09:00:00Z'),
    },
    {
      id: 'PT-10063-gasoline98',
      name: 'Gasoline 98',
      price: 1.899,
      updatedAt: new Date('2026-10-22T09:00:00Z'),
    },
    {
      id: 'PT-10063-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.949,
      updatedAt: new Date('2026-10-22T09:00:00Z'),
    },
    {
      id: 'PT-10063-hydrogen',
      name: 'Hydrogen',
      price: 10.65,
      updatedAt: new Date('2026-10-22T09:00:00Z'),
    },
  ],
};

export const ifcStationGalpParquedasNacoesCentroFixture: IfcStation = {
  id: 'PT-10064',
  name: 'Galp Parque das Nações Centro',
  brand: 'Galp',
  address: {
    street: 'Alameda dos Oceanos 85',
    postalCode: '1990-210',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7712,
    longitude: -9.0968,
  },
  fuels: [
    {
      id: 'PT-10064-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T10:00:00Z'),
    },
    {
      id: 'PT-10064-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-17T10:00:00Z'),
    },
    {
      id: 'PT-10064-gasoline98',
      name: 'Gasoline 98',
      price: 1.829,
      updatedAt: new Date('2026-10-17T10:00:00Z'),
    },
    {
      id: 'PT-10064-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-17T10:00:00Z'),
    },
  ],
};

export const ifcStationBPParquedasNacoesNorteFixture: IfcStation = {
  id: 'PT-10065',
  name: 'BP Parque das Nações Norte',
  brand: 'BP',
  address: {
    street: 'Via do Oriente 18',
    postalCode: '1990-514',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7785,
    longitude: -9.0948,
  },
  fuels: [
    {
      id: 'PT-10065-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T11:00:00Z'),
    },
    {
      id: 'PT-10065-gasoline95',
      name: 'Gasoline 95',
      price: 1.879,
      updatedAt: new Date('2026-10-18T11:00:00Z'),
    },
    {
      id: 'PT-10065-gasoline98',
      name: 'Gasoline 98',
      price: 1.959,
      updatedAt: new Date('2026-10-18T11:00:00Z'),
    },
  ],
};

export const ifcStationRepsolParquedoTejoFixture: IfcStation = {
  id: 'PT-10066',
  name: 'Repsol Parque do Tejo',
  brand: 'Repsol',
  address: {
    street: 'Passeio dos Heróis do Mar 2',
    postalCode: '1990-520',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7845,
    longitude: -9.0935,
  },
  fuels: [
    {
      id: 'PT-10066-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T12:00:00Z'),
    },
    {
      id: 'PT-10066-gasoline95',
      name: 'Gasoline 95',
      price: 1.779,
      updatedAt: new Date('2026-10-19T12:00:00Z'),
    },
  ],
};

export const ifcStationAuchanMoscavideLisboaFixture: IfcStation = {
  id: 'PT-10067',
  name: 'Auchan Moscavide Lisboa',
  brand: 'Auchan',
  address: {
    street: 'Estrada de Moscavide 20',
    postalCode: '1800-279',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7772,
    longitude: -9.1035,
  },
  fuels: [
    {
      id: 'PT-10067-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T13:00:00Z'),
    },
    {
      id: 'PT-10067-gasoline95',
      name: 'Gasoline 95',
      price: 1.679,
      updatedAt: new Date('2026-10-20T13:00:00Z'),
    },
    {
      id: 'PT-10067-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-20T13:00:00Z'),
    },
  ],
};

export const ifcStationGalpOlivaisNorteFixture: IfcStation = {
  id: 'PT-10068',
  name: 'Galp Olivais Norte',
  brand: 'Galp',
  address: {
    street: 'Rua Cidade de Bolama 15',
    postalCode: '1800-078',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7735,
    longitude: -9.1124,
  },
  fuels: [
    {
      id: 'PT-10068-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T14:00:00Z'),
    },
    {
      id: 'PT-10068-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-21T14:00:00Z'),
    },
    {
      id: 'PT-10068-gasoline95',
      name: 'Gasoline 95',
      price: 1.789,
      updatedAt: new Date('2026-10-21T14:00:00Z'),
    },
    {
      id: 'PT-10068-gasoline98',
      name: 'Gasoline 98',
      price: 1.949,
      updatedAt: new Date('2026-10-21T14:00:00Z'),
    },
  ],
};

export const ifcStationMoeveOlivaisSulFixture: IfcStation = {
  id: 'PT-10069',
  name: 'Moeve Olivais Sul',
  brand: 'Moeve',
  address: {
    street: 'Avenida Dr. Alfredo Bensaúde 88',
    postalCode: '1800-244',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7645,
    longitude: -9.1158,
  },
  fuels: [
    {
      id: 'PT-10069-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T15:00:00Z'),
    },
    {
      id: 'PT-10069-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-22T15:00:00Z'),
    },
    {
      id: 'PT-10069-gasoline98',
      name: 'Gasoline 98',
      price: 1.879,
      updatedAt: new Date('2026-10-22T15:00:00Z'),
    },
    {
      id: 'PT-10069-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-22T15:00:00Z'),
    },
  ],
};

export const ifcStationBPOlivaisCentroFixture: IfcStation = {
  id: 'PT-10070',
  name: 'BP Olivais Centro',
  brand: 'BP',
  address: {
    street: 'Rua Cidade de Bissau 2',
    postalCode: '1800-075',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7692,
    longitude: -9.1189,
  },
  fuels: [
    {
      id: 'PT-10070-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T16:00:00Z'),
    },
    {
      id: 'PT-10070-gasoline95',
      name: 'Gasoline 95',
      price: 1.799,
      updatedAt: new Date('2026-10-17T16:00:00Z'),
    },
    {
      id: 'PT-10070-adblue',
      name: 'AdBlue',
      price: 0.809,
      updatedAt: new Date('2026-10-17T16:00:00Z'),
    },
  ],
};

export const ifcStationRepsolEncarnacaoFixture: IfcStation = {
  id: 'PT-10071',
  name: 'Repsol Encarnação',
  brand: 'Repsol',
  address: {
    street: 'Alameda das Comunidades Portuguesas 100',
    postalCode: '1800-044',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7748,
    longitude: -9.1235,
  },
  fuels: [
    {
      id: 'PT-10071-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T17:00:00Z'),
    },
    {
      id: 'PT-10071-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-18T17:00:00Z'),
    },
    {
      id: 'PT-10071-gasoline98',
      name: 'Gasoline 98',
      price: 1.939,
      updatedAt: new Date('2026-10-18T17:00:00Z'),
    },
  ],
};

export const ifcStationGalpAeroportoPortelaFixture: IfcStation = {
  id: 'PT-10072',
  name: 'Galp Aeroporto Portela',
  brand: 'Galp',
  address: {
    street: 'Alameda das Comunidades Portuguesas 10',
    postalCode: '1700-111',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7685,
    longitude: -9.1325,
  },
  fuels: [
    {
      id: 'PT-10072-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T18:00:00Z'),
    },
    {
      id: 'PT-10072-gasoline95',
      name: 'Gasoline 95',
      price: 1.809,
      updatedAt: new Date('2026-10-19T18:00:00Z'),
    },
  ],
};

export const ifcStationAlvesBandeiraPriorVelhoSulFixture: IfcStation = {
  id: 'PT-10073',
  name: 'Alves Bandeira Prior Velho Sul',
  brand: 'Alves Bandeira',
  address: {
    street: 'Avenida Severiano Falcão 14',
    postalCode: '1800-120',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7821,
    longitude: -9.1245,
  },
  fuels: [
    {
      id: 'PT-10073-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T19:00:00Z'),
    },
  ],
};

export const ifcStationBPAvenidadoBrasilFixture: IfcStation = {
  id: 'PT-10074',
  name: 'BP Avenida do Brasil',
  brand: 'BP',
  address: {
    street: 'Avenida do Brasil 120',
    postalCode: '1700-072',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7562,
    longitude: -9.1395,
  },
  fuels: [
    {
      id: 'PT-10074-gasoline95',
      name: 'Gasoline 95',
      price: 1.819,
      updatedAt: new Date('2026-10-21T06:00:00Z'),
    },
  ],
};

export const ifcStationGalpJulioDinisFixture: IfcStation = {
  id: 'PT-10075',
  name: 'Galp Júlio Dinis',
  brand: 'Galp',
  address: {
    street: 'Rua Júlio Dinis 8',
    postalCode: '1050-132',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7402,
    longitude: -9.1468,
  },
  fuels: [
    {
      id: 'PT-10075-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T07:00:00Z'),
    },
    {
      id: 'PT-10075-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-22T07:00:00Z'),
    },
    {
      id: 'PT-10075-gasoline98',
      name: 'Gasoline 98',
      price: 1.859,
      updatedAt: new Date('2026-10-22T07:00:00Z'),
    },
    {
      id: 'PT-10075-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.949,
      updatedAt: new Date('2026-10-22T07:00:00Z'),
    },
    {
      id: 'PT-10075-hydrogen',
      name: 'Hydrogen',
      price: 11.25,
      updatedAt: new Date('2026-10-22T07:00:00Z'),
    },
  ],
};

export const ifcStationRepsolAvenidadosEUAFixture: IfcStation = {
  id: 'PT-10076',
  name: 'Repsol Avenida dos EUA',
  brand: 'Repsol',
  address: {
    street: 'Avenida dos Estados Unidos da América 60',
    postalCode: '1700-178',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7511,
    longitude: -9.1352,
  },
  fuels: [
    {
      id: 'PT-10076-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10076-gasoline95',
      name: 'Gasoline 95',
      price: 1.829,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10076-gasoline98',
      name: 'Gasoline 98',
      price: 1.989,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
    {
      id: 'PT-10076-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-17T08:00:00Z'),
    },
  ],
};

export const ifcStationMoeveGagoCoutinhoNorteFixture: IfcStation = {
  id: 'PT-10077',
  name: 'Moeve Gago Coutinho Norte',
  brand: 'Moeve',
  address: {
    street: 'Avenida Almirante Gago Coutinho 110',
    postalCode: '1700-033',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7578,
    longitude: -9.1285,
  },
  fuels: [
    {
      id: 'PT-10077-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T09:00:00Z'),
    },
    {
      id: 'PT-10077-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-18T09:00:00Z'),
    },
    {
      id: 'PT-10077-gasoline98',
      name: 'Gasoline 98',
      price: 1.919,
      updatedAt: new Date('2026-10-18T09:00:00Z'),
    },
  ],
};

export const ifcStationPrioGagoCoutinhoSulFixture: IfcStation = {
  id: 'PT-10078',
  name: 'Prio Gago Coutinho Sul',
  brand: 'Prio',
  address: {
    street: 'Avenida Almirante Gago Coutinho 25',
    postalCode: '1700-027',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7465,
    longitude: -9.1312,
  },
  fuels: [
    {
      id: 'PT-10078-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T10:00:00Z'),
    },
    {
      id: 'PT-10078-gasoline95',
      name: 'Gasoline 95',
      price: 1.839,
      updatedAt: new Date('2026-10-19T10:00:00Z'),
    },
  ],
};

export const ifcStationGalpChelasOlaiasFixture: IfcStation = {
  id: 'PT-10079',
  name: 'Galp Chelas Olaias',
  brand: 'Galp',
  address: {
    street: 'Avenida Engenheiro Arantes e Oliveira 18',
    postalCode: '1900-222',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7392,
    longitude: -9.1215,
  },
  fuels: [
    {
      id: 'PT-10079-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T11:00:00Z'),
    },
    {
      id: 'PT-10079-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-20T11:00:00Z'),
    },
    {
      id: 'PT-10079-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-20T11:00:00Z'),
    },
  ],
};

export const ifcStationBPChelasValedeFundaoFixture: IfcStation = {
  id: 'PT-10080',
  name: 'BP Chelas Vale de Fundão',
  brand: 'BP',
  address: {
    street: 'Rua de Marvila 50',
    postalCode: '1950-197',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7441,
    longitude: -9.1152,
  },
  fuels: [
    {
      id: 'PT-10080-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T12:00:00Z'),
    },
    {
      id: 'PT-10080-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-21T12:00:00Z'),
    },
    {
      id: 'PT-10080-gasoline95',
      name: 'Gasoline 95',
      price: 1.849,
      updatedAt: new Date('2026-10-21T12:00:00Z'),
    },
    {
      id: 'PT-10080-gasoline98',
      name: 'Gasoline 98',
      price: 1.909,
      updatedAt: new Date('2026-10-21T12:00:00Z'),
    },
  ],
};

export const ifcStationRepsolChelasISELFixture: IfcStation = {
  id: 'PT-10081',
  name: 'Repsol Chelas ISEL',
  brand: 'Repsol',
  address: {
    street: 'Rua Conselheiro Emídio Navarro 1',
    postalCode: '1959-007',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7495,
    longitude: -9.1185,
  },
  fuels: [
    {
      id: 'PT-10081-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T13:00:00Z'),
    },
    {
      id: 'PT-10081-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-22T13:00:00Z'),
    },
    {
      id: 'PT-10081-gasoline98',
      name: 'Gasoline 98',
      price: 1.839,
      updatedAt: new Date('2026-10-22T13:00:00Z'),
    },
    {
      id: 'PT-10081-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-22T13:00:00Z'),
    },
  ],
};

export const ifcStationShellPenhadeFrancaFixture: IfcStation = {
  id: 'PT-10082',
  name: 'Shell Penha de França',
  brand: 'Shell',
  address: {
    street: 'Avenida General Roçadas 72',
    postalCode: '1170-161',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7265,
    longitude: -9.1264,
  },
  fuels: [
    {
      id: 'PT-10082-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T14:00:00Z'),
    },
    {
      id: 'PT-10082-gasoline95',
      name: 'Gasoline 95',
      price: 1.859,
      updatedAt: new Date('2026-10-17T14:00:00Z'),
    },
    {
      id: 'PT-10082-adblue',
      name: 'AdBlue',
      price: 0.829,
      updatedAt: new Date('2026-10-17T14:00:00Z'),
    },
  ],
};

export const ifcStationGalpSapadoresFixture: IfcStation = {
  id: 'PT-10083',
  name: 'Galp Sapadores',
  brand: 'Galp',
  address: {
    street: 'Rua dos Sapadores 34',
    postalCode: '1170-336',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7218,
    longitude: -9.1289,
  },
  fuels: [
    {
      id: 'PT-10083-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T15:00:00Z'),
    },
    {
      id: 'PT-10083-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-18T15:00:00Z'),
    },
    {
      id: 'PT-10083-gasoline98',
      name: 'Gasoline 98',
      price: 1.899,
      updatedAt: new Date('2026-10-18T15:00:00Z'),
    },
  ],
};

export const ifcStationMoeveMoraisSoaresFixture: IfcStation = {
  id: 'PT-10084',
  name: 'Moeve Morais Soares',
  brand: 'Moeve',
  address: {
    street: 'Rua Morais Soares 90',
    postalCode: '1900-349',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7331,
    longitude: -9.1292,
  },
  fuels: [
    {
      id: 'PT-10084-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T16:00:00Z'),
    },
    {
      id: 'PT-10084-gasoline95',
      name: 'Gasoline 95',
      price: 1.869,
      updatedAt: new Date('2026-10-19T16:00:00Z'),
    },
  ],
};

export const ifcStationBPAltodeSaoJoaoFixture: IfcStation = {
  id: 'PT-10085',
  name: 'BP Alto de São João',
  brand: 'BP',
  address: {
    street: 'Azinhaga do Alto do Vilar 10',
    postalCode: '1900-025',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7288,
    longitude: -9.1198,
  },
  fuels: [
    {
      id: 'PT-10085-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T17:00:00Z'),
    },
  ],
};

export const ifcStationRepsolSegundaCircularCampoGrandeFixture: IfcStation = {
  id: 'PT-10086',
  name: 'Repsol Segunda Circular Campo Grande',
  brand: 'Repsol',
  address: {
    street: 'Segunda Circular KM 4 Norte',
    postalCode: '1700-001',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7618,
    longitude: -9.1512,
  },
  fuels: [
    {
      id: 'PT-10086-gasoline95',
      name: 'Gasoline 95',
      price: 1.879,
      updatedAt: new Date('2026-10-21T18:00:00Z'),
    },
  ],
};

export const ifcStationGalpSegundaCircularAeroportoFixture: IfcStation = {
  id: 'PT-10087',
  name: 'Galp Segunda Circular Aeroporto',
  brand: 'Galp',
  address: {
    street: 'Segunda Circular KM 6 Sul',
    postalCode: '1700-002',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7652,
    longitude: -9.1382,
  },
  fuels: [
    {
      id: 'PT-10087-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T19:00:00Z'),
    },
    {
      id: 'PT-10087-gasoline95',
      name: 'Gasoline 95',
      price: 1.779,
      updatedAt: new Date('2026-10-22T19:00:00Z'),
    },
    {
      id: 'PT-10087-gasoline98',
      name: 'Gasoline 98',
      price: 2.019,
      updatedAt: new Date('2026-10-22T19:00:00Z'),
    },
    {
      id: 'PT-10087-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.949,
      updatedAt: new Date('2026-10-22T19:00:00Z'),
    },
    {
      id: 'PT-10087-hydrogen',
      name: 'Hydrogen',
      price: 10.65,
      updatedAt: new Date('2026-10-22T19:00:00Z'),
    },
  ],
};

export const ifcStationPrioSegundaCircularFonteNovaFixture: IfcStation = {
  id: 'PT-10088',
  name: 'Prio Segunda Circular Fonte Nova',
  brand: 'Prio',
  address: {
    street: 'Segunda Circular KM 2',
    postalCode: '1500-001',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7525,
    longitude: -9.1825,
  },
  fuels: [
    {
      id: 'PT-10088-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
    {
      id: 'PT-10088-gasoline95',
      name: 'Gasoline 95',
      price: 1.679,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
    {
      id: 'PT-10088-gasoline98',
      name: 'Gasoline 98',
      price: 1.949,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
    {
      id: 'PT-10088-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-17T06:00:00Z'),
    },
  ],
};

export const ifcStationBPSegundaCircularRadialFixture: IfcStation = {
  id: 'PT-10089',
  name: 'BP Segunda Circular Radial',
  brand: 'BP',
  address: {
    street: 'Segunda Circular KM 1',
    postalCode: '1500-002',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7468,
    longitude: -9.1995,
  },
  fuels: [
    {
      id: 'PT-10089-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T07:00:00Z'),
    },
    {
      id: 'PT-10089-gasoline95',
      name: 'Gasoline 95',
      price: 1.789,
      updatedAt: new Date('2026-10-18T07:00:00Z'),
    },
    {
      id: 'PT-10089-gasoline98',
      name: 'Gasoline 98',
      price: 1.879,
      updatedAt: new Date('2026-10-18T07:00:00Z'),
    },
  ],
};

export const ifcStationGalpEixoNorteSulSeteRiosFixture: IfcStation = {
  id: 'PT-10090',
  name: 'Galp Eixo Norte-Sul Sete Rios',
  brand: 'Galp',
  address: {
    street: 'Eixo Norte-Sul KM 5',
    postalCode: '1070-001',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7385,
    longitude: -9.1625,
  },
  fuels: [
    {
      id: 'PT-10090-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T08:00:00Z'),
    },
    {
      id: 'PT-10090-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-19T08:00:00Z'),
    },
  ],
};

export const ifcStationRepsolEixoNorteSulTelheirasFixture: IfcStation = {
  id: 'PT-10091',
  name: 'Repsol Eixo Norte-Sul Telheiras',
  brand: 'Repsol',
  address: {
    street: 'Eixo Norte-Sul KM 8',
    postalCode: '1600-001',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7655,
    longitude: -9.1685,
  },
  fuels: [
    {
      id: 'PT-10091-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T09:00:00Z'),
    },
    {
      id: 'PT-10091-gasoline95',
      name: 'Gasoline 95',
      price: 1.799,
      updatedAt: new Date('2026-10-20T09:00:00Z'),
    },
    {
      id: 'PT-10091-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-20T09:00:00Z'),
    },
  ],
};

export const ifcStationMoeveEixoNorteSulLumiarFixture: IfcStation = {
  id: 'PT-10092',
  name: 'Moeve Eixo Norte-Sul Lumiar',
  brand: 'Moeve',
  address: {
    street: 'Eixo Norte-Sul KM 10',
    postalCode: '1750-001',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7752,
    longitude: -9.1645,
  },
  fuels: [
    {
      id: 'PT-10092-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T10:00:00Z'),
    },
    {
      id: 'PT-10092-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-21T10:00:00Z'),
    },
    {
      id: 'PT-10092-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-21T10:00:00Z'),
    },
    {
      id: 'PT-10092-gasoline98',
      name: 'Gasoline 98',
      price: 1.869,
      updatedAt: new Date('2026-10-21T10:00:00Z'),
    },
  ],
};

export const ifcStationAlvesBandeiraCRILBenficaFixture: IfcStation = {
  id: 'PT-10093',
  name: 'Alves Bandeira CRIL Benfica',
  brand: 'Alves Bandeira',
  address: {
    street: 'CRIL KM 3 Benfica',
    postalCode: '1500-003',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7565,
    longitude: -9.2085,
  },
  fuels: [
    {
      id: 'PT-10093-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10093-gasoline95',
      name: 'Gasoline 95',
      price: 1.809,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10093-gasoline98',
      name: 'Gasoline 98',
      price: 1.999,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
    {
      id: 'PT-10093-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-22T11:00:00Z'),
    },
  ],
};

export const ifcStationGalpCRILCarnideFixture: IfcStation = {
  id: 'PT-10094',
  name: 'Galp CRIL Carnide',
  brand: 'Galp',
  address: {
    street: 'CRIL KM 5 Carnide',
    postalCode: '1600-002',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7682,
    longitude: -9.2025,
  },
  fuels: [
    {
      id: 'PT-10094-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
    {
      id: 'PT-10094-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
    {
      id: 'PT-10094-adblue',
      name: 'AdBlue',
      price: 0.749,
      updatedAt: new Date('2026-10-17T12:00:00Z'),
    },
  ],
};

export const ifcStationBPAvenidaMarechalGomesdaCostaFixture: IfcStation = {
  id: 'PT-10095',
  name: 'BP Avenida Marechal Gomes da Costa',
  brand: 'BP',
  address: {
    street: 'Avenida Marechal Gomes da Costa 28',
    postalCode: '1800-255',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7582,
    longitude: -9.1125,
  },
  fuels: [
    {
      id: 'PT-10095-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T13:00:00Z'),
    },
    {
      id: 'PT-10095-gasoline95',
      name: 'Gasoline 95',
      price: 1.819,
      updatedAt: new Date('2026-10-18T13:00:00Z'),
    },
    {
      id: 'PT-10095-gasoline98',
      name: 'Gasoline 98',
      price: 1.859,
      updatedAt: new Date('2026-10-18T13:00:00Z'),
    },
  ],
};

export const ifcStationRepsolAvenidaMarechalCraveiroLopesFixture: IfcStation = {
  id: 'PT-10096',
  name: 'Repsol Avenida Marechal Craveiro Lopes',
  brand: 'Repsol',
  address: {
    street: 'Avenida Marechal Craveiro Lopes 12',
    postalCode: '1700-284',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7628,
    longitude: -9.1445,
  },
  fuels: [
    {
      id: 'PT-10096-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T14:00:00Z'),
    },
    {
      id: 'PT-10096-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-19T14:00:00Z'),
    },
  ],
};

export const ifcStationIntermarcheAvenidaForcasArmadasFixture: IfcStation = {
  id: 'PT-10097',
  name: 'Intermarché Avenida Forças Armadas',
  brand: 'Intermarché',
  address: {
    street: 'Avenida das Forças Armadas 45',
    postalCode: '1600-077',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7485,
    longitude: -9.1558,
  },
  fuels: [
    {
      id: 'PT-10097-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T15:00:00Z'),
    },
  ],
};

export const ifcStationGalpCidadeUniversitariaFixture: IfcStation = {
  id: 'PT-10098',
  name: 'Galp Cidade Universitária',
  brand: 'Galp',
  address: {
    street: 'Avenida Professor Egas Moniz',
    postalCode: '1649-028',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7521,
    longitude: -9.1612,
  },
  fuels: [
    {
      id: 'PT-10098-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-21T16:00:00Z'),
    },
  ],
};

export const ifcStationMoeveAvenidadeBernaFixture: IfcStation = {
  id: 'PT-10099',
  name: 'Moeve Avenida de Berna',
  brand: 'Moeve',
  address: {
    street: 'Avenida de Berna 30',
    postalCode: '1050-038',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7388,
    longitude: -9.1525,
  },
  fuels: [
    {
      id: 'PT-10099-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10099-gasoline95',
      name: 'Gasoline 95',
      price: 1.839,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10099-gasoline98',
      name: 'Gasoline 98',
      price: 1.979,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10099-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.949,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
    {
      id: 'PT-10099-hydrogen',
      name: 'Hydrogen',
      price: 11.25,
      updatedAt: new Date('2026-10-22T17:00:00Z'),
    },
  ],
};

export const ifcStationBPPracadeEspanhaFixture: IfcStation = {
  id: 'PT-10100',
  name: 'BP Praça de Espanha',
  brand: 'BP',
  address: {
    street: 'Praça de Espanha 10',
    postalCode: '1070-105',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7365,
    longitude: -9.1585,
  },
  fuels: [
    {
      id: 'PT-10100-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
    {
      id: 'PT-10100-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
    {
      id: 'PT-10100-gasoline98',
      name: 'Gasoline 98',
      price: 1.909,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
    {
      id: 'PT-10100-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-17T18:00:00Z'),
    },
  ],
};

export const ifcStationRepsolAvenidaCeutaAlcantaraFixture: IfcStation = {
  id: 'PT-10101',
  name: 'Repsol Avenida Ceuta Alcântara',
  brand: 'Repsol',
  address: {
    street: 'Avenida de Ceuta 40',
    postalCode: '1300-125',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7145,
    longitude: -9.1725,
  },
  fuels: [
    {
      id: 'PT-10101-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T19:00:00Z'),
    },
    {
      id: 'PT-10101-gasoline95',
      name: 'Gasoline 95',
      price: 1.849,
      updatedAt: new Date('2026-10-18T19:00:00Z'),
    },
    {
      id: 'PT-10101-gasoline98',
      name: 'Gasoline 98',
      price: 1.839,
      updatedAt: new Date('2026-10-18T19:00:00Z'),
    },
  ],
};

export const ifcStationPrioAvenidaCeutaCampolideFixture: IfcStation = {
  id: 'PT-10102',
  name: 'Prio Avenida Ceuta Campolide',
  brand: 'Prio',
  address: {
    street: 'Avenida de Ceuta 110',
    postalCode: '1070-075',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7245,
    longitude: -9.1695,
  },
  fuels: [
    {
      id: 'PT-10102-diesel',
      name: 'Diesel',
      price: 1.689,
      updatedAt: new Date('2026-10-19T06:00:00Z'),
    },
    {
      id: 'PT-10102-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-19T06:00:00Z'),
    },
  ],
};

export const ifcStationGalpAvenidaInfanteSantoFixture: IfcStation = {
  id: 'PT-10103',
  name: 'Galp Avenida Infante Santo',
  brand: 'Galp',
  address: {
    street: 'Avenida Infante Santo 55',
    postalCode: '1350-177',
    town: 'Lisboa',
    municipality: 'Lisboa',
    district: 'Lisboa',
    country: COUNTRY_NAME.PT,
    latitude: 38.7088,
    longitude: -9.1662,
  },
  fuels: [
    {
      id: 'PT-10103-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T07:00:00Z'),
    },
    {
      id: 'PT-10103-gasoline95',
      name: 'Gasoline 95',
      price: 1.859,
      updatedAt: new Date('2026-10-20T07:00:00Z'),
    },
    {
      id: 'PT-10103-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-20T07:00:00Z'),
    },
  ],
};

export const ifcStationsExtendedFixture: IfcStation[] = [
  ifcStationGalpLisbonFixture,
  ifcStationRepsolMadridFixture,
  ifcStationBpLisbonFixture,
  ifcStationMoeveMadridFixture,
  ifcStationRepsolLisbonFixture,
  ifcStationGalpTelheirasNorteFixture,
  ifcStationBPCampoGrandeFixture,
  ifcStationRepsolEntrecamposFixture,
  ifcStationGalpSaldanhaFixture,
  ifcStationBPPicoasFixture,
  ifcStationMoeveMarquesdePombalFixture,
  ifcStationGalpAmoreirasFixture,
  ifcStationRepsolCampolideFixture,
  ifcStationPrioSeteRiosFixture,
  ifcStationBPSaoDomingosdeBenficaFixture,
  ifcStationGalpBenficaCentroFixture,
  ifcStationRepsolBenficaGraoVascoFixture,
  ifcStationMoeveColomboFixture,
  ifcStationGalpCarnideFixture,
  ifcStationBPPontinhaFixture,
  ifcStationAlvesBandeiraLumiarCentroFixture,
  ifcStationRepsolQuintadasConchasFixture,
  ifcStationGalpAltadeLisboaFixture,
  ifcStationBPSantaClaraFixture,
  ifcStationMoeveCalharizdeBenficaFixture,
  ifcStationPrioAlvaladeNorteFixture,
  ifcStationGalpAlvaladeSulFixture,
  ifcStationBPRomaAreeiroFixture,
  ifcStationRepsolAreeiroFixture,
  ifcStationAuchanAlamedaFixture,
  ifcStationGalpArroiosFixture,
  ifcStationMoeveAnjosFixture,
  ifcStationBPMartimMonizFixture,
  ifcStationRepsolBaixaChiadoFixture,
  ifcStationGalpCaisdoSodreFixture,
  ifcStationShellSantosFixture,
  ifcStationBPAlcantaraTerraFixture,
  ifcStationRepsolAlcantaraMarFixture,
  ifcStationGalpBelemJeronimosFixture,
  ifcStationMoeveBelemTorreFixture,
  ifcStationPrioResteloNorteFixture,
  ifcStationGalpResteloEstadioFixture,
  ifcStationBPAjudaPalacioFixture,
  ifcStationRepsolAjudaBoaHoraFixture,
  ifcStationIntermarcheMonsantoMontesClarosFixture,
  ifcStationGalpMonsantoSerafinaFixture,
  ifcStationBPLapaFixture,
  ifcStationMoeveEstrelaBasilicaFixture,
  ifcStationRepsolRatoFixture,
  ifcStationAlvesBandeiraPrincipeRealFixture,
  ifcStationGalpBairroAltoFixture,
  ifcStationBPSantaCatarinaFixture,
  ifcStationRepsolGracaMiradouroFixture,
  ifcStationPrioAlfamaFixture,
  ifcStationGalpSantaApoloniaEstacaoFixture,
  ifcStationMoeveXabregasFixture,
  ifcStationBPBeatoConventoFixture,
  ifcStationRepsolMarvilaAntigaFixture,
  ifcStationGalpMarvilaBracodePrataFixture,
  ifcStationQ8PocodoBispoFixture,
  ifcStationBPCaboRuivoSulFixture,
  ifcStationGalpCaboRuivoNorteFixture,
  ifcStationRepsolParquedasNacoesSulFixture,
  ifcStationMoeveParquedasNacoesMarinaFixture,
  ifcStationPrioOrienteGareFixture,
  ifcStationGalpParquedasNacoesCentroFixture,
  ifcStationBPParquedasNacoesNorteFixture,
  ifcStationRepsolParquedoTejoFixture,
  ifcStationAuchanMoscavideLisboaFixture,
  ifcStationGalpOlivaisNorteFixture,
  ifcStationMoeveOlivaisSulFixture,
  ifcStationBPOlivaisCentroFixture,
  ifcStationRepsolEncarnacaoFixture,
  ifcStationGalpAeroportoPortelaFixture,
  ifcStationAlvesBandeiraPriorVelhoSulFixture,
  ifcStationBPAvenidadoBrasilFixture,
  ifcStationGalpJulioDinisFixture,
  ifcStationRepsolAvenidadosEUAFixture,
  ifcStationMoeveGagoCoutinhoNorteFixture,
  ifcStationPrioGagoCoutinhoSulFixture,
  ifcStationGalpChelasOlaiasFixture,
  ifcStationBPChelasValedeFundaoFixture,
  ifcStationRepsolChelasISELFixture,
  ifcStationShellPenhadeFrancaFixture,
  ifcStationGalpSapadoresFixture,
  ifcStationMoeveMoraisSoaresFixture,
  ifcStationBPAltodeSaoJoaoFixture,
  ifcStationRepsolSegundaCircularCampoGrandeFixture,
  ifcStationGalpSegundaCircularAeroportoFixture,
  ifcStationPrioSegundaCircularFonteNovaFixture,
  ifcStationBPSegundaCircularRadialFixture,
  ifcStationGalpEixoNorteSulSeteRiosFixture,
  ifcStationRepsolEixoNorteSulTelheirasFixture,
  ifcStationMoeveEixoNorteSulLumiarFixture,
  ifcStationAlvesBandeiraCRILBenficaFixture,
  ifcStationGalpCRILCarnideFixture,
  ifcStationBPAvenidaMarechalGomesdaCostaFixture,
  ifcStationRepsolAvenidaMarechalCraveiroLopesFixture,
  ifcStationIntermarcheAvenidaForcasArmadasFixture,
  ifcStationGalpCidadeUniversitariaFixture,
  ifcStationMoeveAvenidadeBernaFixture,
  ifcStationBPPracadeEspanhaFixture,
  ifcStationRepsolAvenidaCeutaAlcantaraFixture,
  ifcStationPrioAvenidaCeutaCampolideFixture,
  ifcStationGalpAvenidaInfanteSantoFixture,
];
