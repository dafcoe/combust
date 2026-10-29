import { COUNTRY_NAME } from '@dafcoe/iberian-fuel-client';
import type { IfcStation } from '../../iberian-fuel.type.ts';

const ifcStationGalpFaroCentroFixture: IfcStation = {
  id: 'PT-10104',
  name: 'Galp Faro Centro',
  brand: 'Galp',
  address: {
    street: 'Avenida 5 de Outubro 10',
    postalCode: '8000-100',
    town: 'Faro',
    municipality: 'Faro',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0008,
    longitude: -7.9514,
  },
  fuels: [
    {
      id: 'PT-10104-diesel',
      name: 'Diesel',
      price: 1.559,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10104-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationPrioAlbufeiraCentroFixture: IfcStation = {
  id: 'PT-10105',
  name: 'Prio Albufeira Centro',
  brand: 'Prio',
  address: {
    street: 'Avenida dos Descobrimentos 13',
    postalCode: '8200-107',
    town: 'Albufeira',
    municipality: 'Albufeira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0746,
    longitude: -8.2637,
  },
  fuels: [
    {
      id: 'PT-10105-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10105-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10105-gasoline98',
      name: 'Gasoline 98',
      price: 1.869,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationAuchanPortimaoCentroFixture: IfcStation = {
  id: 'PT-10106',
  name: 'Auchan Portimão Centro',
  brand: 'Auchan',
  address: {
    street: 'Avenida 25 de Abril 16',
    postalCode: '8500-114',
    town: 'Portimão',
    municipality: 'Portimão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1282,
    longitude: -8.5483,
  },
  fuels: [
    {
      id: 'PT-10106-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10106-diesel-premium',
      name: 'Diesel Premium',
      price: 1.689,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10106-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10106-gasoline98',
      name: 'Gasoline 98',
      price: 1.849,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationBPLagosCentroHistoricoFixture: IfcStation = {
  id: 'PT-10107',
  name: 'BP Lagos Centro Histórico',
  brand: 'BP',
  address: {
    street: 'Avenida dos Descobrimentos 19',
    postalCode: '8600-121',
    town: 'Lagos',
    municipality: 'Lagos',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0965,
    longitude: -8.6784,
  },
  fuels: [
    {
      id: 'PT-10107-diesel',
      name: 'Diesel',
      price: 1.559,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10107-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10107-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationIntermarcheLouleCentroFixture: IfcStation = {
  id: 'PT-10108',
  name: 'Intermarché Loulé Centro',
  brand: 'Intermarché',
  address: {
    street: 'Avenida 25 de Abril 22',
    postalCode: '8100-128',
    town: 'Loulé',
    municipality: 'Loulé',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1356,
    longitude: -8.0205,
  },
  fuels: [
    {
      id: 'PT-10108-diesel',
      name: 'Diesel',
      price: 1.629,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10108-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10108-adblue',
      name: 'AdBlue',
      price: 0.809,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationGalpOlhaoRibeirinhaFixture: IfcStation = {
  id: 'PT-10109',
  name: 'Galp Olhão Ribeirinha',
  brand: 'Galp',
  address: {
    street: 'Avenida 5 de Outubro 25',
    postalCode: '8700-135',
    town: 'Olhão',
    municipality: 'Olhão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0255,
    longitude: -7.8361,
  },
  fuels: [
    {
      id: 'PT-10109-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10109-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10109-gasoline98',
      name: 'Gasoline 98',
      price: 1.899,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10109-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.899,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10109-hydrogen',
      name: 'Hydrogen',
      price: 10.970,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationPrioSilvesCentroFixture: IfcStation = {
  id: 'PT-10110',
  name: 'Prio Silves Centro',
  brand: 'Prio',
  address: {
    street: 'Avenida Marginal 28',
    postalCode: '8300-142',
    town: 'Silves',
    municipality: 'Silves',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1897,
    longitude: -8.4283,
  },
  fuels: [
    {
      id: 'PT-10110-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10110-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10110-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.289,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationAuchanTaviraCentroFixture: IfcStation = {
  id: 'PT-10111',
  name: 'Auchan Tavira Centro',
  brand: 'Auchan',
  address: {
    street: 'Avenida Dom Manuel I 31',
    postalCode: '8800-149',
    town: 'Tavira',
    municipality: 'Tavira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1312,
    longitude: -7.6412,
  },
  fuels: [
    {
      id: 'PT-10111-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10111-diesel-premium',
      name: 'Diesel Premium',
      price: 1.699,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10111-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationBPVilaRealdeSantoAntonioFronteiraFixture: IfcStation = {
  id: 'PT-10112',
  name: 'BP Vila Real de Santo António Fronteira',
  brand: 'BP',
  address: {
    street: 'Avenida da República 34',
    postalCode: '8900-156',
    town: 'Vila Real de Santo António',
    municipality: 'Vila Real de Santo António',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2036,
    longitude: -7.4072,
  },
  fuels: [
    {
      id: 'PT-10112-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10112-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationIntermarcheLagoaCentroFixture: IfcStation = {
  id: 'PT-10113',
  name: 'Intermarché Lagoa Centro',
  brand: 'Intermarché',
  address: {
    street: 'Estrada Nacional 125 km 55 37',
    postalCode: '8400-163',
    town: 'Lagoa',
    municipality: 'Lagoa',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1483,
    longitude: -8.4346,
  },
  fuels: [
    {
      id: 'PT-10113-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10113-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10113-gasoline98',
      name: 'Gasoline 98',
      price: 1.879,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationGalpCastroMarimCasteloFixture: IfcStation = {
  id: 'PT-10114',
  name: 'Galp Castro Marim Castelo',
  brand: 'Galp',
  address: {
    street: 'Rua de São Sebastião 40',
    postalCode: '8950-170',
    town: 'Castro Marim',
    municipality: 'Castro Marim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2307,
    longitude: -7.4191,
  },
  fuels: [
    {
      id: 'PT-10114-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10114-diesel-premium',
      name: 'Diesel Premium',
      price: 1.699,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10114-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10114-gasoline98',
      name: 'Gasoline 98',
      price: 1.859,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationPrioAljezurCentroFixture: IfcStation = {
  id: 'PT-10115',
  name: 'Prio Aljezur Centro',
  brand: 'Prio',
  address: {
    street: 'Rua 25 de Abril 43',
    postalCode: '8670-177',
    town: 'Aljezur',
    municipality: 'Aljezur',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3357,
    longitude: -8.8203,
  },
  fuels: [
    {
      id: 'PT-10115-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10115-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10115-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.859,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationAuchanMonchiqueVilaFixture: IfcStation = {
  id: 'PT-10116',
  name: 'Auchan Monchique Vila',
  brand: 'Auchan',
  address: {
    street: 'Rua do Porto Fundo 46',
    postalCode: '8550-184',
    town: 'Monchique',
    municipality: 'Monchique',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3403,
    longitude: -8.5676,
  },
  fuels: [
    {
      id: 'PT-10116-diesel',
      name: 'Diesel',
      price: 1.639,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10116-gasoline95',
      name: 'Gasoline 95',
      price: 1.779,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10116-adblue',
      name: 'AdBlue',
      price: 0.819,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationBPSaoBrasdeAlportelCentroFixture: IfcStation = {
  id: 'PT-10117',
  name: 'BP São Brás de Alportel Centro',
  brand: 'BP',
  address: {
    street: 'Avenida da Liberdade 49',
    postalCode: '8150-191',
    town: 'São Brás de Alportel',
    municipality: 'São Brás de Alportel',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1372,
    longitude: -7.8938,
  },
  fuels: [
    {
      id: 'PT-10117-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10117-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10117-gasoline98',
      name: 'Gasoline 98',
      price: 1.909,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10117-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.909,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10117-hydrogen',
      name: 'Hydrogen',
      price: 10.980,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationIntermarcheAlcoutimVilaFixture: IfcStation = {
  id: 'PT-10118',
  name: 'Intermarché Alcoutim Vila',
  brand: 'Intermarché',
  address: {
    street: 'Avenida de Espanha 52',
    postalCode: '8970-198',
    town: 'Alcoutim',
    municipality: 'Alcoutim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.4599,
    longitude: -7.4803,
  },
  fuels: [
    {
      id: 'PT-10118-diesel',
      name: 'Diesel',
      price: 1.539,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10118-gasoline95',
      name: 'Gasoline 95',
      price: 1.679,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10118-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.229,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationGalpViladoBispoCentroFixture: IfcStation = {
  id: 'PT-10119',
  name: 'Galp Vila do Bispo Centro',
  brand: 'Galp',
  address: {
    street: 'Rua 1 de Maio 55',
    postalCode: '8650-205',
    town: 'Vila do Bispo',
    municipality: 'Vila do Bispo',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0693,
    longitude: -8.9151,
  },
  fuels: [
    {
      id: 'PT-10119-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10119-diesel-premium',
      name: 'Diesel Premium',
      price: 1.709,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10119-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationPrioFaroAeroportoFixture: IfcStation = {
  id: 'PT-10120',
  name: 'Prio Faro Aeroporto',
  brand: 'Prio',
  address: {
    street: 'Estrada do Aeroporto 58',
    postalCode: '8000-212',
    town: 'Faro',
    municipality: 'Faro',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0111,
    longitude: -7.9284,
  },
  fuels: [
    {
      id: 'PT-10120-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10120-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationAuchanAlbufeiraValedePedrasFixture: IfcStation = {
  id: 'PT-10121',
  name: 'Auchan Albufeira Vale de Pedras',
  brand: 'Auchan',
  address: {
    street: 'Estrada de Vale de Pedras 61',
    postalCode: '8200-219',
    town: 'Albufeira',
    municipality: 'Albufeira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0849,
    longitude: -8.2407,
  },
  fuels: [
    {
      id: 'PT-10121-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10121-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10121-gasoline98',
      name: 'Gasoline 98',
      price: 1.889,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationBPPortimaoCardosasFixture: IfcStation = {
  id: 'PT-10122',
  name: 'BP Portimão Cardosas',
  brand: 'BP',
  address: {
    street: 'Avenida Afonso Henriques 64',
    postalCode: '8500-226',
    town: 'Portimão',
    municipality: 'Portimão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1385,
    longitude: -8.5253,
  },
  fuels: [
    {
      id: 'PT-10122-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10122-diesel-premium',
      name: 'Diesel Premium',
      price: 1.709,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10122-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10122-gasoline98',
      name: 'Gasoline 98',
      price: 1.869,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationIntermarcheLagosPortodeMosFixture: IfcStation = {
  id: 'PT-10123',
  name: 'Intermarché Lagos Porto de Mós',
  brand: 'Intermarché',
  address: {
    street: 'Estrada da Ponta da Piedade 67',
    postalCode: '8600-233',
    town: 'Lagos',
    municipality: 'Lagos',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1068,
    longitude: -8.6554,
  },
  fuels: [
    {
      id: 'PT-10123-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10123-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10123-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.869,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationGalpLouleParqueFixture: IfcStation = {
  id: 'PT-10124',
  name: 'Galp Loulé Parque',
  brand: 'Galp',
  address: {
    street: 'Avenida José da Costa Mealha 70',
    postalCode: '8100-240',
    town: 'Loulé',
    municipality: 'Loulé',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1409,
    longitude: -7.9975,
  },
  fuels: [
    {
      id: 'PT-10124-diesel',
      name: 'Diesel',
      price: 1.649,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10124-gasoline95',
      name: 'Gasoline 95',
      price: 1.789,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10124-adblue',
      name: 'AdBlue',
      price: 0.829,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationPrioOlhaoCentroFixture: IfcStation = {
  id: 'PT-10125',
  name: 'Prio Olhão Centro',
  brand: 'Prio',
  address: {
    street: 'Avenida Dom João VI 73',
    postalCode: '8700-247',
    town: 'Olhão',
    municipality: 'Olhão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0358,
    longitude: -7.8201,
  },
  fuels: [
    {
      id: 'PT-10125-diesel',
      name: 'Diesel',
      price: 1.559,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10125-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10125-gasoline98',
      name: 'Gasoline 98',
      price: 1.849,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10125-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10125-hydrogen',
      name: 'Hydrogen',
      price: 10.920,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationAuchanSilvesSilvesGareFixture: IfcStation = {
  id: 'PT-10126',
  name: 'Auchan Silves Silves Gare',
  brand: 'Auchan',
  address: {
    street: 'Estrada Nacional 124 76',
    postalCode: '8300-254',
    town: 'Silves',
    municipality: 'Silves',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2,
    longitude: -8.4585,
  },
  fuels: [
    {
      id: 'PT-10126-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10126-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10126-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.239,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationBPTaviraTaviraPlazaFixture: IfcStation = {
  id: 'PT-10127',
  name: 'BP Tavira Tavira Plaza',
  brand: 'BP',
  address: {
    street: 'Estrada Nacional 125 km 128 79',
    postalCode: '8800-261',
    town: 'Tavira',
    municipality: 'Tavira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1415,
    longitude: -7.6644,
  },
  fuels: [
    {
      id: 'PT-10127-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10127-diesel-premium',
      name: 'Diesel Premium',
      price: 1.719,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10127-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationIntermarcheVilaRealdeSantoAntonioCentroFixture: IfcStation = {
  id: 'PT-10128',
  name: 'Intermarché Vila Real de Santo António Centro',
  brand: 'Intermarché',
  address: {
    street: 'Avenida Ministro Duarte Pacheco 82',
    postalCode: '8900-268',
    town: 'Vila Real de Santo António',
    municipality: 'Vila Real de Santo António',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2139,
    longitude: -7.4304,
  },
  fuels: [
    {
      id: 'PT-10128-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10128-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationGalpLagoaCarvoeiroFixture: IfcStation = {
  id: 'PT-10129',
  name: 'Galp Lagoa Carvoeiro',
  brand: 'Galp',
  address: {
    street: 'Estrada do Farol 85',
    postalCode: '8400-275',
    town: 'Lagoa',
    municipality: 'Lagoa',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1536,
    longitude: -8.4578,
  },
  fuels: [
    {
      id: 'PT-10129-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10129-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10129-gasoline98',
      name: 'Gasoline 98',
      price: 1.899,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationPrioCastroMarimCentroFixture: IfcStation = {
  id: 'PT-10130',
  name: 'Prio Castro Marim Centro',
  brand: 'Prio',
  address: {
    street: 'Estrada Nacional 122 88',
    postalCode: '8950-282',
    town: 'Castro Marim',
    municipality: 'Castro Marim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2007,
    longitude: -7.4423,
  },
  fuels: [
    {
      id: 'PT-10130-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10130-diesel-premium',
      name: 'Diesel Premium',
      price: 1.719,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10130-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10130-gasoline98',
      name: 'Gasoline 98',
      price: 1.879,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationAuchanAljezurIgrejaNovaFixture: IfcStation = {
  id: 'PT-10131',
  name: 'Auchan Aljezur Igreja Nova',
  brand: 'Auchan',
  address: {
    street: 'Estrada Nacional 120 km 15 91',
    postalCode: '8670-289',
    town: 'Aljezur',
    municipality: 'Aljezur',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3057,
    longitude: -8.7973,
  },
  fuels: [
    {
      id: 'PT-10131-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10131-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10131-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.879,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationBPMonchiqueCaldasdeMonchiqueFixture: IfcStation = {
  id: 'PT-10132',
  name: 'BP Monchique Caldas de Monchique',
  brand: 'BP',
  address: {
    street: 'Estrada das Caldas 94',
    postalCode: '8550-296',
    town: 'Monchique',
    municipality: 'Monchique',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3103,
    longitude: -8.5516,
  },
  fuels: [
    {
      id: 'PT-10132-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10132-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10132-adblue',
      name: 'AdBlue',
      price: 0.769,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationIntermarcheSaoBrasdeAlportelAlportelFixture: IfcStation = {
  id: 'PT-10133',
  name: 'Intermarché São Brás de Alportel Alportel',
  brand: 'Intermarché',
  address: {
    street: 'Estrada Nacional 270 97',
    postalCode: '8150-303',
    town: 'São Brás de Alportel',
    municipality: 'São Brás de Alportel',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1475,
    longitude: -7.8778,
  },
  fuels: [
    {
      id: 'PT-10133-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10133-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10133-gasoline98',
      name: 'Gasoline 98',
      price: 1.859,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10133-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.859,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10133-hydrogen',
      name: 'Hydrogen',
      price: 10.930,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationGalpAlcoutimMartimLongoFixture: IfcStation = {
  id: 'PT-10134',
  name: 'Galp Alcoutim Martim Longo',
  brand: 'Galp',
  address: {
    street: 'Estrada Nacional 124 100',
    postalCode: '8970-310',
    town: 'Alcoutim',
    municipality: 'Alcoutim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.4652,
    longitude: -7.4573,
  },
  fuels: [
    {
      id: 'PT-10134-diesel',
      name: 'Diesel',
      price: 1.559,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10134-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10134-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationPrioViladoBispoSagresFixture: IfcStation = {
  id: 'PT-10135',
  name: 'Prio Vila do Bispo Sagres',
  brand: 'Prio',
  address: {
    street: 'Estrada da Fortaleza 103',
    postalCode: '8650-317',
    town: 'Vila do Bispo',
    municipality: 'Vila do Bispo',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0796,
    longitude: -8.8921,
  },
  fuels: [
    {
      id: 'PT-10135-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10135-diesel-premium',
      name: 'Diesel Premium',
      price: 1.729,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10135-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationAuchanFaroPenhaFixture: IfcStation = {
  id: 'PT-10136',
  name: 'Auchan Faro Penha',
  brand: 'Auchan',
  address: {
    street: 'Avenida Cidade Hayward 106',
    postalCode: '8000-324',
    town: 'Faro',
    municipality: 'Faro',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0214,
    longitude: -7.9054,
  },
  fuels: [
    {
      id: 'PT-10136-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10136-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationBPAlbufeiraFerreirasFixture: IfcStation = {
  id: 'PT-10137',
  name: 'BP Albufeira Ferreiras',
  brand: 'BP',
  address: {
    street: 'Estrada de Ferreiras 109',
    postalCode: '8200-331',
    town: 'Albufeira',
    municipality: 'Albufeira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0952,
    longitude: -8.2639,
  },
  fuels: [
    {
      id: 'PT-10137-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10137-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10137-gasoline98',
      name: 'Gasoline 98',
      price: 1.909,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationIntermarchePortimaoPraiadaRochaFixture: IfcStation = {
  id: 'PT-10138',
  name: 'Intermarché Portimão Praia da Rocha',
  brand: 'Intermarché',
  address: {
    street: 'Avenida V6 112',
    postalCode: '8500-338',
    town: 'Portimão',
    municipality: 'Portimão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1488,
    longitude: -8.5485,
  },
  fuels: [
    {
      id: 'PT-10138-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10138-diesel-premium',
      name: 'Diesel Premium',
      price: 1.729,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10138-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10138-gasoline98',
      name: 'Gasoline 98',
      price: 1.889,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationGalpLagosOdiaxereFixture: IfcStation = {
  id: 'PT-10139',
  name: 'Galp Lagos Odiáxere',
  brand: 'Galp',
  address: {
    street: 'Estrada Nacional 125 km 22 115',
    postalCode: '8600-345',
    town: 'Lagos',
    municipality: 'Lagos',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1121,
    longitude: -8.6856,
  },
  fuels: [
    {
      id: 'PT-10139-diesel',
      name: 'Diesel',
      price: 1.529,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10139-gasoline95',
      name: 'Gasoline 95',
      price: 1.669,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10139-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.819,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationPrioLouleQuarteiraFixture: IfcStation = {
  id: 'PT-10140',
  name: 'Prio Loulé Quarteira',
  brand: 'Prio',
  address: {
    street: 'Avenida Francisco Sá Carneiro 118',
    postalCode: '8100-352',
    town: 'Loulé',
    municipality: 'Loulé',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1512,
    longitude: -8.0277,
  },
  fuels: [
    {
      id: 'PT-10140-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10140-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10140-adblue',
      name: 'AdBlue',
      price: 0.779,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationAuchanOlhaoPechaoFixture: IfcStation = {
  id: 'PT-10141',
  name: 'Auchan Olhão Pechão',
  brand: 'Auchan',
  address: {
    street: 'Estrada Nacional 125 km 112 121',
    postalCode: '8700-359',
    town: 'Olhão',
    municipality: 'Olhão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0461,
    longitude: -7.8433,
  },
  fuels: [
    {
      id: 'PT-10141-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10141-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10141-gasoline98',
      name: 'Gasoline 98',
      price: 1.869,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10141-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.869,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10141-hydrogen',
      name: 'Hydrogen',
      price: 10.940,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationBPSilvesArmacaodePeraFixture: IfcStation = {
  id: 'PT-10142',
  name: 'BP Silves Armação de Pêra',
  brand: 'BP',
  address: {
    street: 'Avenida Beira Mar 124',
    postalCode: '8300-366',
    town: 'Silves',
    municipality: 'Silves',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2103,
    longitude: -8.4355,
  },
  fuels: [
    {
      id: 'PT-10142-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10142-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10142-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.259,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationIntermarcheTaviraCabanasFixture: IfcStation = {
  id: 'PT-10143',
  name: 'Intermarché Tavira Cabanas',
  brand: 'Intermarché',
  address: {
    street: 'Avenida da Ria Formosa 127',
    postalCode: '8800-373',
    town: 'Tavira',
    municipality: 'Tavira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1115,
    longitude: -7.6414,
  },
  fuels: [
    {
      id: 'PT-10143-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10143-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10143-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationGalpVilaRealdeSantoAntonioMonteGordoFixture: IfcStation = {
  id: 'PT-10144',
  name: 'Galp Vila Real de Santo António Monte Gordo',
  brand: 'Galp',
  address: {
    street: 'Avenida Infante Dom Henrique 130',
    postalCode: '8900-380',
    town: 'Vila Real de Santo António',
    municipality: 'Vila Real de Santo António',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1789,
    longitude: -7.4074,
  },
  fuels: [
    {
      id: 'PT-10144-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10144-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationPrioLagoaFerragudoFixture: IfcStation = {
  id: 'PT-10145',
  name: 'Prio Lagoa Ferragudo',
  brand: 'Prio',
  address: {
    street: 'Rua Infante Dom Henrique 133',
    postalCode: '8400-387',
    town: 'Lagoa',
    municipality: 'Lagoa',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1236,
    longitude: -8.4348,
  },
  fuels: [
    {
      id: 'PT-10145-diesel',
      name: 'Diesel',
      price: 1.629,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10145-gasoline95',
      name: 'Gasoline 95',
      price: 1.779,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10145-gasoline98',
      name: 'Gasoline 98',
      price: 1.919,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationAuchanCastroMarimAlturaFixture: IfcStation = {
  id: 'PT-10146',
  name: 'Auchan Castro Marim Altura',
  brand: 'Auchan',
  address: {
    street: 'Avenida 24 de Junho 136',
    postalCode: '8950-394',
    town: 'Castro Marim',
    municipality: 'Castro Marim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.211,
    longitude: -7.4263,
  },
  fuels: [
    {
      id: 'PT-10146-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10146-diesel-premium',
      name: 'Diesel Premium',
      price: 1.669,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10146-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10146-gasoline98',
      name: 'Gasoline 98',
      price: 1.829,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationBPAljezurRogilFixture: IfcStation = {
  id: 'PT-10147',
  name: 'BP Aljezur Rogil',
  brand: 'BP',
  address: {
    street: 'Estrada da Praia do Rogil 139',
    postalCode: '8670-401',
    town: 'Aljezur',
    municipality: 'Aljezur',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.316,
    longitude: -8.7813,
  },
  fuels: [
    {
      id: 'PT-10147-diesel',
      name: 'Diesel',
      price: 1.539,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10147-gasoline95',
      name: 'Gasoline 95',
      price: 1.679,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10147-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.829,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationIntermarcheMonchiqueFoiaFixture: IfcStation = {
  id: 'PT-10148',
  name: 'Intermarché Monchique Fóia',
  brand: 'Intermarché',
  address: {
    street: 'Estrada da Fóia 142',
    postalCode: '8550-408',
    town: 'Monchique',
    municipality: 'Monchique',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3206,
    longitude: -8.5748,
  },
  fuels: [
    {
      id: 'PT-10148-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10148-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10148-adblue',
      name: 'AdBlue',
      price: 0.789,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationGalpSaoBrasdeAlportelFonteFerreaFixture: IfcStation = {
  id: 'PT-10149',
  name: 'Galp São Brás de Alportel Fonte Férrea',
  brand: 'Galp',
  address: {
    street: 'Rua Gago Coutinho 145',
    postalCode: '8150-415',
    town: 'São Brás de Alportel',
    municipality: 'São Brás de Alportel',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1528,
    longitude: -7.901,
  },
  fuels: [
    {
      id: 'PT-10149-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10149-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10149-gasoline98',
      name: 'Gasoline 98',
      price: 1.879,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10149-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.879,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10149-hydrogen',
      name: 'Hydrogen',
      price: 10.950,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationPrioAlcoutimVaqueirosFixture: IfcStation = {
  id: 'PT-10150',
  name: 'Prio Alcoutim Vaqueiros',
  brand: 'Prio',
  address: {
    street: 'Estrada Municipal 507 148',
    postalCode: '8970-422',
    town: 'Alcoutim',
    municipality: 'Alcoutim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.4755,
    longitude: -7.4805,
  },
  fuels: [
    {
      id: 'PT-10150-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10150-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10150-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.269,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationAuchanViladoBispoBudensFixture: IfcStation = {
  id: 'PT-10151',
  name: 'Auchan Vila do Bispo Budens',
  brand: 'Auchan',
  address: {
    street: 'Estrada Nacional 125 km 2 151',
    postalCode: '8650-429',
    town: 'Vila do Bispo',
    municipality: 'Vila do Bispo',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0899,
    longitude: -8.9153,
  },
  fuels: [
    {
      id: 'PT-10151-diesel',
      name: 'Diesel',
      price: 1.629,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10151-diesel-premium',
      name: 'Diesel Premium',
      price: 1.749,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10151-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationBPFaroAltoRodesFixture: IfcStation = {
  id: 'PT-10152',
  name: 'BP Faro Alto Rodes',
  brand: 'BP',
  address: {
    street: 'Rua do Alportel 154',
    postalCode: '8000-436',
    town: 'Faro',
    municipality: 'Faro',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0317,
    longitude: -7.9286,
  },
  fuels: [
    {
      id: 'PT-10152-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10152-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationIntermarcheAlbufeiraGuiaFixture: IfcStation = {
  id: 'PT-10153',
  name: 'Intermarché Albufeira Guia',
  brand: 'Intermarché',
  address: {
    street: 'Estrada Nacional 125 km 68 157',
    postalCode: '8200-443',
    town: 'Albufeira',
    municipality: 'Albufeira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1055,
    longitude: -8.2479,
  },
  fuels: [
    {
      id: 'PT-10153-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10153-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10153-gasoline98',
      name: 'Gasoline 98',
      price: 1.859,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationGalpPortimaoAlvorFixture: IfcStation = {
  id: 'PT-10154',
  name: 'Galp Portimão Alvor',
  brand: 'Galp',
  address: {
    street: 'Estrada de Alvor 160',
    postalCode: '8500-450',
    town: 'Portimão',
    municipality: 'Portimão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1541,
    longitude: -8.5325,
  },
  fuels: [
    {
      id: 'PT-10154-diesel',
      name: 'Diesel',
      price: 1.559,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10154-diesel-premium',
      name: 'Diesel Premium',
      price: 1.679,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10154-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10154-gasoline98',
      name: 'Gasoline 98',
      price: 1.839,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationPrioLagosMeiaPraiaFixture: IfcStation = {
  id: 'PT-10155',
  name: 'Prio Lagos Meia Praia',
  brand: 'Prio',
  address: {
    street: 'Avenida Dom Sebastião 163',
    postalCode: '8600-457',
    town: 'Lagos',
    municipality: 'Lagos',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1224,
    longitude: -8.6626,
  },
  fuels: [
    {
      id: 'PT-10155-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10155-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10155-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.839,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationAuchanLouleQuarteiraPraiaFixture: IfcStation = {
  id: 'PT-10156',
  name: 'Auchan Loulé Quarteira Praia',
  brand: 'Auchan',
  address: {
    street: 'Avenida Infante Dom Henrique 166',
    postalCode: '8100-464',
    town: 'Loulé',
    municipality: 'Loulé',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1212,
    longitude: -8.0047,
  },
  fuels: [
    {
      id: 'PT-10156-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10156-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10156-adblue',
      name: 'AdBlue',
      price: 0.799,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationBPOlhaoFusetaFixture: IfcStation = {
  id: 'PT-10157',
  name: 'BP Olhão Fuseta',
  brand: 'BP',
  address: {
    street: 'Estrada da Fuseta 169',
    postalCode: '8700-471',
    town: 'Olhão',
    municipality: 'Olhão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0161,
    longitude: -7.8203,
  },
  fuels: [
    {
      id: 'PT-10157-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10157-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10157-gasoline98',
      name: 'Gasoline 98',
      price: 1.889,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10157-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.889,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10157-hydrogen',
      name: 'Hydrogen',
      price: 10.960,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationIntermarcheSilvesAlcantarilhaFixture: IfcStation = {
  id: 'PT-10158',
  name: 'Intermarché Silves Alcantarilha',
  brand: 'Intermarché',
  address: {
    street: 'Estrada Nacional 125 km 58 172',
    postalCode: '8300-478',
    town: 'Silves',
    municipality: 'Silves',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1803,
    longitude: -8.4125,
  },
  fuels: [
    {
      id: 'PT-10158-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10158-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10158-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.279,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationGalpTaviraSantaLuziaFixture: IfcStation = {
  id: 'PT-10159',
  name: 'Galp Tavira Santa Luzia',
  brand: 'Galp',
  address: {
    street: 'Avenida Duarte Pacheco 175',
    postalCode: '8800-485',
    town: 'Tavira',
    municipality: 'Tavira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1168,
    longitude: -7.6646,
  },
  fuels: [
    {
      id: 'PT-10159-diesel',
      name: 'Diesel',
      price: 1.639,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10159-diesel-premium',
      name: 'Diesel Premium',
      price: 1.759,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10159-gasoline95',
      name: 'Gasoline 95',
      price: 1.779,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationPrioVilaRealdeSantoAntonioVilaNovadeCacelaFixture: IfcStation = {
  id: 'PT-10160',
  name: 'Prio Vila Real de Santo António Vila Nova de Cacela',
  brand: 'Prio',
  address: {
    street: 'Estrada Nacional 125 km 142 178',
    postalCode: '8900-492',
    town: 'Vila Real de Santo António',
    municipality: 'Vila Real de Santo António',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1892,
    longitude: -7.4376,
  },
  fuels: [
    {
      id: 'PT-10160-diesel',
      name: 'Diesel',
      price: 1.559,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10160-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationAuchanLagoaPorchesFixture: IfcStation = {
  id: 'PT-10161',
  name: 'Auchan Lagoa Porches',
  brand: 'Auchan',
  address: {
    street: 'Estrada de Porches 181',
    postalCode: '8400-499',
    town: 'Lagoa',
    municipality: 'Lagoa',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1339,
    longitude: -8.465,
  },
  fuels: [
    {
      id: 'PT-10161-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10161-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10161-gasoline98',
      name: 'Gasoline 98',
      price: 1.869,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationBPCastroMarimOdeleiteFixture: IfcStation = {
  id: 'PT-10162',
  name: 'BP Castro Marim Odeleite',
  brand: 'BP',
  address: {
    street: 'Estrada de Odeleite 184',
    postalCode: '8950-506',
    town: 'Castro Marim',
    municipality: 'Castro Marim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2213,
    longitude: -7.4495,
  },
  fuels: [
    {
      id: 'PT-10162-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10162-diesel-premium',
      name: 'Diesel Premium',
      price: 1.689,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10162-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10162-gasoline98',
      name: 'Gasoline 98',
      price: 1.849,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationIntermarcheAljezurOdeceixeFixture: IfcStation = {
  id: 'PT-10163',
  name: 'Intermarché Aljezur Odeceixe',
  brand: 'Intermarché',
  address: {
    street: 'Estrada de Odeceixe 187',
    postalCode: '8670-513',
    town: 'Aljezur',
    municipality: 'Aljezur',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3263,
    longitude: -8.8045,
  },
  fuels: [
    {
      id: 'PT-10163-diesel',
      name: 'Diesel',
      price: 1.559,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10163-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10163-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationGalpMonchiqueMarmeleteFixture: IfcStation = {
  id: 'PT-10164',
  name: 'Galp Monchique Marmelete',
  brand: 'Galp',
  address: {
    street: 'Estrada de Marmelete 190',
    postalCode: '8550-520',
    town: 'Monchique',
    municipality: 'Monchique',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3259,
    longitude: -8.5518,
  },
  fuels: [
    {
      id: 'PT-10164-diesel',
      name: 'Diesel',
      price: 1.629,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10164-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10164-adblue',
      name: 'AdBlue',
      price: 0.809,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationPrioSaoBrasdeAlportelMachadosFixture: IfcStation = {
  id: 'PT-10165',
  name: 'Prio São Brás de Alportel Machados',
  brand: 'Prio',
  address: {
    street: 'Estrada de Machados 193',
    postalCode: '8150-527',
    town: 'São Brás de Alportel',
    municipality: 'São Brás de Alportel',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1631,
    longitude: -7.878,
  },
  fuels: [
    {
      id: 'PT-10165-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10165-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10165-gasoline98',
      name: 'Gasoline 98',
      price: 1.899,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10165-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.899,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10165-hydrogen',
      name: 'Hydrogen',
      price: 10.970,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationAuchanAlcoutimPereiroFixture: IfcStation = {
  id: 'PT-10166',
  name: 'Auchan Alcoutim Pereiro',
  brand: 'Auchan',
  address: {
    street: 'Estrada do Guadiana 196',
    postalCode: '8970-534',
    town: 'Alcoutim',
    municipality: 'Alcoutim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.4858,
    longitude: -7.4575,
  },
  fuels: [
    {
      id: 'PT-10166-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10166-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10166-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.289,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationBPViladoBispoBurgauFixture: IfcStation = {
  id: 'PT-10167',
  name: 'BP Vila do Bispo Burgau',
  brand: 'BP',
  address: {
    street: 'Rua da Praia 199',
    postalCode: '8650-541',
    town: 'Vila do Bispo',
    municipality: 'Vila do Bispo',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1002,
    longitude: -8.8993,
  },
  fuels: [
    {
      id: 'PT-10167-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10167-diesel-premium',
      name: 'Diesel Premium',
      price: 1.699,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10167-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationIntermarcheFaroSenhoradaSaudeFixture: IfcStation = {
  id: 'PT-10168',
  name: 'Intermarché Faro Senhora da Saúde',
  brand: 'Intermarché',
  address: {
    street: 'Estrada da Senhora da Saúde 12',
    postalCode: '8000-548',
    town: 'Faro',
    municipality: 'Faro',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.042,
    longitude: -7.9126,
  },
  fuels: [
    {
      id: 'PT-10168-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10168-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationGalpAlbufeiraAreiasdeSaoJoaoFixture: IfcStation = {
  id: 'PT-10169',
  name: 'Galp Albufeira Areias de São João',
  brand: 'Galp',
  address: {
    street: 'Avenida Sá Carneiro 15',
    postalCode: '8200-555',
    town: 'Albufeira',
    municipality: 'Albufeira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0705,
    longitude: -8.2249,
  },
  fuels: [
    {
      id: 'PT-10169-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10169-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10169-gasoline98',
      name: 'Gasoline 98',
      price: 1.879,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationPrioPortimaoZonaRibeirinhaFixture: IfcStation = {
  id: 'PT-10170',
  name: 'Prio Portimão Zona Ribeirinha',
  brand: 'Prio',
  address: {
    street: 'Avenida Miguel Bombarda 18',
    postalCode: '8500-562',
    town: 'Portimão',
    municipality: 'Portimão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1241,
    longitude: -8.5557,
  },
  fuels: [
    {
      id: 'PT-10170-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10170-diesel-premium',
      name: 'Diesel Premium',
      price: 1.699,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10170-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10170-gasoline98',
      name: 'Gasoline 98',
      price: 1.859,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationAuchanLagosPraiadaLuzFixture: IfcStation = {
  id: 'PT-10171',
  name: 'Auchan Lagos Praia da Luz',
  brand: 'Auchan',
  address: {
    street: 'Rua Direita 21',
    postalCode: '8600-569',
    town: 'Lagos',
    municipality: 'Lagos',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0924,
    longitude: -8.6858,
  },
  fuels: [
    {
      id: 'PT-10171-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10171-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10171-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.859,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationBPLouleVilamouraFixture: IfcStation = {
  id: 'PT-10172',
  name: 'BP Loulé Vilamoura',
  brand: 'BP',
  address: {
    street: 'Avenida Tivoli 24',
    postalCode: '8100-576',
    town: 'Loulé',
    municipality: 'Loulé',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1315,
    longitude: -8.0279,
  },
  fuels: [
    {
      id: 'PT-10172-diesel',
      name: 'Diesel',
      price: 1.639,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10172-gasoline95',
      name: 'Gasoline 95',
      price: 1.779,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10172-adblue',
      name: 'AdBlue',
      price: 0.819,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationIntermarcheOlhaoQuelfesFixture: IfcStation = {
  id: 'PT-10173',
  name: 'Intermarché Olhão Quelfes',
  brand: 'Intermarché',
  address: {
    street: 'Avenida Doutor Bernardino da Silva 27',
    postalCode: '8700-583',
    town: 'Olhão',
    municipality: 'Olhão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0264,
    longitude: -7.8435,
  },
  fuels: [
    {
      id: 'PT-10173-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10173-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10173-gasoline98',
      name: 'Gasoline 98',
      price: 1.909,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10173-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.909,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10173-hydrogen',
      name: 'Hydrogen',
      price: 10.980,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationGalpSilvesSaoBartolomeudeMessinesFixture: IfcStation = {
  id: 'PT-10174',
  name: 'Galp Silves São Bartolomeu de Messines',
  brand: 'Galp',
  address: {
    street: 'Estrada de Messines 30',
    postalCode: '8300-590',
    town: 'Silves',
    municipality: 'Silves',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1856,
    longitude: -8.4427,
  },
  fuels: [
    {
      id: 'PT-10174-diesel',
      name: 'Diesel',
      price: 1.539,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10174-gasoline95',
      name: 'Gasoline 95',
      price: 1.679,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10174-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.229,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationPrioTaviraConceicaodeTaviraFixture: IfcStation = {
  id: 'PT-10175',
  name: 'Prio Tavira Conceição de Tavira',
  brand: 'Prio',
  address: {
    street: 'Estrada de Conceição 33',
    postalCode: '8800-597',
    town: 'Tavira',
    municipality: 'Tavira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1271,
    longitude: -7.6486,
  },
  fuels: [
    {
      id: 'PT-10175-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10175-diesel-premium',
      name: 'Diesel Premium',
      price: 1.709,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10175-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationAuchanVilaRealdeSantoAntonioMantaRotaFixture: IfcStation = {
  id: 'PT-10176',
  name: 'Auchan Vila Real de Santo António Manta Rota',
  brand: 'Auchan',
  address: {
    street: 'Avenida da Praia 36',
    postalCode: '8900-604',
    town: 'Vila Real de Santo António',
    municipality: 'Vila Real de Santo António',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1995,
    longitude: -7.4146,
  },
  fuels: [
    {
      id: 'PT-10176-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10176-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationBPLagoaParchalFixture: IfcStation = {
  id: 'PT-10177',
  name: 'BP Lagoa Parchal',
  brand: 'BP',
  address: {
    street: 'Avenida dos Pescadores 39',
    postalCode: '8400-611',
    town: 'Lagoa',
    municipality: 'Lagoa',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1442,
    longitude: -8.442,
  },
  fuels: [
    {
      id: 'PT-10177-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10177-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10177-gasoline98',
      name: 'Gasoline 98',
      price: 1.889,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationIntermarcheCastroMarimCastelo2Fixture: IfcStation = {
  id: 'PT-10178',
  name: 'Intermarché Castro Marim Castelo 2',
  brand: 'Intermarché',
  address: {
    street: 'Rua de São Sebastião 42',
    postalCode: '8950-618',
    town: 'Castro Marim',
    municipality: 'Castro Marim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2316,
    longitude: -7.4265,
  },
  fuels: [
    {
      id: 'PT-10178-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10178-diesel-premium',
      name: 'Diesel Premium',
      price: 1.709,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10178-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10178-gasoline98',
      name: 'Gasoline 98',
      price: 1.869,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationGalpAljezurCentro2Fixture: IfcStation = {
  id: 'PT-10179',
  name: 'Galp Aljezur Centro 2',
  brand: 'Galp',
  address: {
    street: 'Rua 25 de Abril 45',
    postalCode: '8670-625',
    town: 'Aljezur',
    municipality: 'Aljezur',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3316,
    longitude: -8.7815,
  },
  fuels: [
    {
      id: 'PT-10179-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10179-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10179-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.869,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationPrioMonchiqueVila2Fixture: IfcStation = {
  id: 'PT-10180',
  name: 'Prio Monchique Vila 2',
  brand: 'Prio',
  address: {
    street: 'Rua do Porto Fundo 48',
    postalCode: '8550-632',
    town: 'Monchique',
    municipality: 'Monchique',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3362,
    longitude: -8.5288,
  },
  fuels: [
    {
      id: 'PT-10180-diesel',
      name: 'Diesel',
      price: 1.649,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10180-gasoline95',
      name: 'Gasoline 95',
      price: 1.789,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10180-adblue',
      name: 'AdBlue',
      price: 0.829,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationAuchanSaoBrasdeAlportelCentro2Fixture: IfcStation = {
  id: 'PT-10181',
  name: 'Auchan São Brás de Alportel Centro 2',
  brand: 'Auchan',
  address: {
    street: 'Avenida da Liberdade 51',
    postalCode: '8150-639',
    town: 'São Brás de Alportel',
    municipality: 'São Brás de Alportel',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1734,
    longitude: -7.9082,
  },
  fuels: [
    {
      id: 'PT-10181-diesel',
      name: 'Diesel',
      price: 1.559,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10181-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10181-gasoline98',
      name: 'Gasoline 98',
      price: 1.849,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10181-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.849,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10181-hydrogen',
      name: 'Hydrogen',
      price: 10.920,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationBPAlcoutimVila2Fixture: IfcStation = {
  id: 'PT-10182',
  name: 'BP Alcoutim Vila 2',
  brand: 'BP',
  address: {
    street: 'Avenida de Espanha 54',
    postalCode: '8970-646',
    town: 'Alcoutim',
    municipality: 'Alcoutim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.4558,
    longitude: -7.4877,
  },
  fuels: [
    {
      id: 'PT-10182-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10182-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10182-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.239,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationIntermarcheViladoBispoSalemaFixture: IfcStation = {
  id: 'PT-10183',
  name: 'Intermarché Vila do Bispo Salema',
  brand: 'Intermarché',
  address: {
    street: 'Estrada da Salema 57',
    postalCode: '8650-653',
    town: 'Vila do Bispo',
    municipality: 'Vila do Bispo',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0702,
    longitude: -8.9225,
  },
  fuels: [
    {
      id: 'PT-10183-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10183-diesel-premium',
      name: 'Diesel Premium',
      price: 1.719,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10183-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationGalpFaroBomJoaoFixture: IfcStation = {
  id: 'PT-10184',
  name: 'Galp Faro Bom João',
  brand: 'Galp',
  address: {
    street: 'Estrada Nacional 125 km 102 60',
    postalCode: '8000-660',
    town: 'Faro',
    municipality: 'Faro',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.007,
    longitude: -7.9358,
  },
  fuels: [
    {
      id: 'PT-10184-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10184-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationPrioAlbufeiraGaleFixture: IfcStation = {
  id: 'PT-10185',
  name: 'Prio Albufeira Galé',
  brand: 'Prio',
  address: {
    street: 'Estrada da Galé 63',
    postalCode: '8200-667',
    town: 'Albufeira',
    municipality: 'Albufeira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0808,
    longitude: -8.2481,
  },
  fuels: [
    {
      id: 'PT-10185-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10185-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10185-gasoline98',
      name: 'Gasoline 98',
      price: 1.899,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationAuchanPortimaoChaodasDonasFixture: IfcStation = {
  id: 'PT-10186',
  name: 'Auchan Portimão Chão das Donas',
  brand: 'Auchan',
  address: {
    street: 'Estrada Nacional 125 km 52 66',
    postalCode: '8500-674',
    town: 'Portimão',
    municipality: 'Portimão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1344,
    longitude: -8.5327,
  },
  fuels: [
    {
      id: 'PT-10186-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10186-diesel-premium',
      name: 'Diesel Premium',
      price: 1.719,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10186-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10186-gasoline98',
      name: 'Gasoline 98',
      price: 1.879,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationBPLagosBensafrimFixture: IfcStation = {
  id: 'PT-10187',
  name: 'BP Lagos Bensafrim',
  brand: 'BP',
  address: {
    street: 'Estrada de Bensafrim 69',
    postalCode: '8600-681',
    town: 'Lagos',
    municipality: 'Lagos',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1027,
    longitude: -8.6628,
  },
  fuels: [
    {
      id: 'PT-10187-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10187-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10187-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.879,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationIntermarcheLouleValedoLoboFixture: IfcStation = {
  id: 'PT-10188',
  name: 'Intermarché Loulé Vale do Lobo',
  brand: 'Intermarché',
  address: {
    street: 'Estrada de Vale do Lobo 72',
    postalCode: '8100-688',
    town: 'Loulé',
    municipality: 'Loulé',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1418,
    longitude: -8.0119,
  },
  fuels: [
    {
      id: 'PT-10188-diesel',
      name: 'Diesel',
      price: 1.589,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10188-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10188-adblue',
      name: 'AdBlue',
      price: 0.769,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationGalpOlhaoMoncarapachoFixture: IfcStation = {
  id: 'PT-10189',
  name: 'Galp Olhão Moncarapacho',
  brand: 'Galp',
  address: {
    street: 'Estrada de Moncarapacho 75',
    postalCode: '8700-695',
    town: 'Olhão',
    municipality: 'Olhão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0317,
    longitude: -7.8275,
  },
  fuels: [
    {
      id: 'PT-10189-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10189-gasoline95',
      name: 'Gasoline 95',
      price: 1.719,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10189-gasoline98',
      name: 'Gasoline 98',
      price: 1.859,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10189-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.859,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10189-hydrogen',
      name: 'Hydrogen',
      price: 10.930,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationPrioSilvesPeraFixture: IfcStation = {
  id: 'PT-10190',
  name: 'Prio Silves Pêra',
  brand: 'Prio',
  address: {
    street: 'Estrada da Pêra 78',
    postalCode: '8300-702',
    town: 'Silves',
    municipality: 'Silves',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1959,
    longitude: -8.4197,
  },
  fuels: [
    {
      id: 'PT-10190-diesel',
      name: 'Diesel',
      price: 1.559,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10190-gasoline95',
      name: 'Gasoline 95',
      price: 1.699,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10190-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.249,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationAuchanTaviraLuzdeTaviraFixture: IfcStation = {
  id: 'PT-10191',
  name: 'Auchan Tavira Luz de Tavira',
  brand: 'Auchan',
  address: {
    street: 'Estrada da Luz 81',
    postalCode: '8800-709',
    town: 'Tavira',
    municipality: 'Tavira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1374,
    longitude: -7.6256,
  },
  fuels: [
    {
      id: 'PT-10191-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10191-diesel-premium',
      name: 'Diesel Premium',
      price: 1.729,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10191-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationBPVilaRealdeSantoAntonioFronteira2Fixture: IfcStation = {
  id: 'PT-10192',
  name: 'BP Vila Real de Santo António Fronteira 2',
  brand: 'BP',
  address: {
    street: 'Avenida da República 84',
    postalCode: '8900-716',
    town: 'Vila Real de Santo António',
    municipality: 'Vila Real de Santo António',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2098,
    longitude: -7.4378,
  },
  fuels: [
    {
      id: 'PT-10192-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10192-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationIntermarcheLagoaEstombarFixture: IfcStation = {
  id: 'PT-10193',
  name: 'Intermarché Lagoa Estômbar',
  brand: 'Intermarché',
  address: {
    street: 'Estrada de Estômbar 87',
    postalCode: '8400-723',
    town: 'Lagoa',
    municipality: 'Lagoa',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1545,
    longitude: -8.4652,
  },
  fuels: [
    {
      id: 'PT-10193-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10193-gasoline95',
      name: 'Gasoline 95',
      price: 1.769,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10193-gasoline98',
      name: 'Gasoline 98',
      price: 1.909,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationGalpCastroMarimCentro2Fixture: IfcStation = {
  id: 'PT-10194',
  name: 'Galp Castro Marim Centro 2',
  brand: 'Galp',
  address: {
    street: 'Estrada Nacional 122 90',
    postalCode: '8950-730',
    town: 'Castro Marim',
    municipality: 'Castro Marim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.2369,
    longitude: -7.4497,
  },
  fuels: [
    {
      id: 'PT-10194-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10194-diesel-premium',
      name: 'Diesel Premium',
      price: 1.729,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10194-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10194-gasoline98',
      name: 'Gasoline 98',
      price: 1.889,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationPrioAljezurIgrejaNova2Fixture: IfcStation = {
  id: 'PT-10195',
  name: 'Prio Aljezur Igreja Nova 2',
  brand: 'Prio',
  address: {
    street: 'Estrada Nacional 120 km 15 93',
    postalCode: '8670-737',
    town: 'Aljezur',
    municipality: 'Aljezur',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3016,
    longitude: -8.8117,
  },
  fuels: [
    {
      id: 'PT-10195-diesel',
      name: 'Diesel',
      price: 1.529,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10195-gasoline95',
      name: 'Gasoline 95',
      price: 1.669,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10195-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.819,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationAuchanMonchiqueCaldasdeMonchique2Fixture: IfcStation = {
  id: 'PT-10196',
  name: 'Auchan Monchique Caldas de Monchique 2',
  brand: 'Auchan',
  address: {
    street: 'Estrada das Caldas 96',
    postalCode: '8550-744',
    town: 'Monchique',
    municipality: 'Monchique',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.3062,
    longitude: -8.559,
  },
  fuels: [
    {
      id: 'PT-10196-diesel',
      name: 'Diesel',
      price: 1.599,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10196-gasoline95',
      name: 'Gasoline 95',
      price: 1.739,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10196-adblue',
      name: 'AdBlue',
      price: 0.779,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationBPSaoBrasdeAlportelAlportel2Fixture: IfcStation = {
  id: 'PT-10197',
  name: 'BP São Brás de Alportel Alportel 2',
  brand: 'BP',
  address: {
    street: 'Estrada Nacional 270 99',
    postalCode: '8150-751',
    town: 'São Brás de Alportel',
    municipality: 'São Brás de Alportel',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1434,
    longitude: -7.8852,
  },
  fuels: [
    {
      id: 'PT-10197-diesel',
      name: 'Diesel',
      price: 1.579,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10197-gasoline95',
      name: 'Gasoline 95',
      price: 1.729,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10197-gasoline98',
      name: 'Gasoline 98',
      price: 1.869,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10197-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.869,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10197-hydrogen',
      name: 'Hydrogen',
      price: 10.940,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

const ifcStationIntermarcheAlcoutimMartimLongo2Fixture: IfcStation = {
  id: 'PT-10198',
  name: 'Intermarché Alcoutim Martim Longo 2',
  brand: 'Intermarché',
  address: {
    street: 'Estrada Nacional 124 102',
    postalCode: '8970-758',
    town: 'Alcoutim',
    municipality: 'Alcoutim',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.4661,
    longitude: -7.4647,
  },
  fuels: [
    {
      id: 'PT-10198-diesel',
      name: 'Diesel',
      price: 1.569,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10198-gasoline95',
      name: 'Gasoline 95',
      price: 1.709,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
    {
      id: 'PT-10198-cng',
      name: 'Compressed Natural Gas (CNG)',
      price: 1.259,
      updatedAt: new Date('2026-10-22T08:20:00Z'),
    },
  ],
};

const ifcStationGalpViladoBispoCentro2Fixture: IfcStation = {
  id: 'PT-10199',
  name: 'Galp Vila do Bispo Centro 2',
  brand: 'Galp',
  address: {
    street: 'Rua 1 de Maio 105',
    postalCode: '8650-765',
    town: 'Vila do Bispo',
    municipality: 'Vila do Bispo',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0755,
    longitude: -8.8995,
  },
  fuels: [
    {
      id: 'PT-10199-diesel',
      name: 'Diesel',
      price: 1.619,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10199-diesel-premium',
      name: 'Diesel Premium',
      price: 1.739,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
    {
      id: 'PT-10199-gasoline95',
      name: 'Gasoline 95',
      price: 1.759,
      updatedAt: new Date('2026-10-23T11:00:00Z'),
    },
  ],
};

const ifcStationPrioFaroGambelasFixture: IfcStation = {
  id: 'PT-10200',
  name: 'Prio Faro Gambelas',
  brand: 'Prio',
  address: {
    street: 'Avenida Calouste Gulbenkian 108',
    postalCode: '8000-772',
    town: 'Faro',
    municipality: 'Faro',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0173,
    longitude: -7.9128,
  },
  fuels: [
    {
      id: 'PT-10200-diesel',
      name: 'Diesel',
      price: 1.609,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
    {
      id: 'PT-10200-gasoline95',
      name: 'Gasoline 95',
      price: 1.749,
      updatedAt: new Date('2026-10-18T08:00:00Z'),
    },
  ],
};

const ifcStationAuchanAlbufeiraOlhosdeAguaFixture: IfcStation = {
  id: 'PT-10201',
  name: 'Auchan Albufeira Olhos de Água',
  brand: 'Auchan',
  address: {
    street: 'Estrada das Açoteias 111',
    postalCode: '8200-779',
    town: 'Albufeira',
    municipality: 'Albufeira',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.0911,
    longitude: -8.2251,
  },
  fuels: [
    {
      id: 'PT-10201-diesel',
      name: 'Diesel',
      price: 1.629,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10201-gasoline95',
      name: 'Gasoline 95',
      price: 1.779,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
    {
      id: 'PT-10201-gasoline98',
      name: 'Gasoline 98',
      price: 1.919,
      updatedAt: new Date('2026-10-19T09:30:00Z'),
    },
  ],
};

const ifcStationBPPortimaoPortimaoRetailFixture: IfcStation = {
  id: 'PT-10202',
  name: 'BP Portimão Portimão Retail',
  brand: 'BP',
  address: {
    street: 'Avenida Guanaré 114',
    postalCode: '8500-786',
    town: 'Portimão',
    municipality: 'Portimão',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.1447,
    longitude: -8.5167,
  },
  fuels: [
    {
      id: 'PT-10202-diesel',
      name: 'Diesel',
      price: 1.549,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10202-diesel-premium',
      name: 'Diesel Premium',
      price: 1.669,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10202-gasoline95',
      name: 'Gasoline 95',
      price: 1.689,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
    {
      id: 'PT-10202-gasoline98',
      name: 'Gasoline 98',
      price: 1.829,
      updatedAt: new Date('2026-10-20T07:15:00Z'),
    },
  ],
};

const ifcStationIntermarcheLagosMarinaFixture: IfcStation = {
  id: 'PT-10203',
  name: 'Intermarché Lagos Marina',
  brand: 'Intermarché',
  address: {
    street: 'Avenida da República 117',
    postalCode: '8600-793',
    town: 'Lagos',
    municipality: 'Lagos',
    district: 'Faro',
    country: COUNTRY_NAME.PT,
    latitude: 37.113,
    longitude: -8.693,
  },
  fuels: [
    {
      id: 'PT-10203-diesel',
      name: 'Diesel',
      price: 1.539,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10203-gasoline95',
      name: 'Gasoline 95',
      price: 1.679,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
    {
      id: 'PT-10203-lpg',
      name: 'Liquefied Petroleum Gas (LPG)',
      price: 0.829,
      updatedAt: new Date('2026-10-21T10:45:00Z'),
    },
  ],
};

export const ifcStationsFaroFixture: IfcStation[] = [
  ifcStationGalpFaroCentroFixture,
  ifcStationPrioAlbufeiraCentroFixture,
  ifcStationAuchanPortimaoCentroFixture,
  ifcStationBPLagosCentroHistoricoFixture,
  ifcStationIntermarcheLouleCentroFixture,
  ifcStationGalpOlhaoRibeirinhaFixture,
  ifcStationPrioSilvesCentroFixture,
  ifcStationAuchanTaviraCentroFixture,
  ifcStationBPVilaRealdeSantoAntonioFronteiraFixture,
  ifcStationIntermarcheLagoaCentroFixture,
  ifcStationGalpCastroMarimCasteloFixture,
  ifcStationPrioAljezurCentroFixture,
  ifcStationAuchanMonchiqueVilaFixture,
  ifcStationBPSaoBrasdeAlportelCentroFixture,
  ifcStationIntermarcheAlcoutimVilaFixture,
  ifcStationGalpViladoBispoCentroFixture,
  ifcStationPrioFaroAeroportoFixture,
  ifcStationAuchanAlbufeiraValedePedrasFixture,
  ifcStationBPPortimaoCardosasFixture,
  ifcStationIntermarcheLagosPortodeMosFixture,
  ifcStationGalpLouleParqueFixture,
  ifcStationPrioOlhaoCentroFixture,
  ifcStationAuchanSilvesSilvesGareFixture,
  ifcStationBPTaviraTaviraPlazaFixture,
  ifcStationIntermarcheVilaRealdeSantoAntonioCentroFixture,
  ifcStationGalpLagoaCarvoeiroFixture,
  ifcStationPrioCastroMarimCentroFixture,
  ifcStationAuchanAljezurIgrejaNovaFixture,
  ifcStationBPMonchiqueCaldasdeMonchiqueFixture,
  ifcStationIntermarcheSaoBrasdeAlportelAlportelFixture,
  ifcStationGalpAlcoutimMartimLongoFixture,
  ifcStationPrioViladoBispoSagresFixture,
  ifcStationAuchanFaroPenhaFixture,
  ifcStationBPAlbufeiraFerreirasFixture,
  ifcStationIntermarchePortimaoPraiadaRochaFixture,
  ifcStationGalpLagosOdiaxereFixture,
  ifcStationPrioLouleQuarteiraFixture,
  ifcStationAuchanOlhaoPechaoFixture,
  ifcStationBPSilvesArmacaodePeraFixture,
  ifcStationIntermarcheTaviraCabanasFixture,
  ifcStationGalpVilaRealdeSantoAntonioMonteGordoFixture,
  ifcStationPrioLagoaFerragudoFixture,
  ifcStationAuchanCastroMarimAlturaFixture,
  ifcStationBPAljezurRogilFixture,
  ifcStationIntermarcheMonchiqueFoiaFixture,
  ifcStationGalpSaoBrasdeAlportelFonteFerreaFixture,
  ifcStationPrioAlcoutimVaqueirosFixture,
  ifcStationAuchanViladoBispoBudensFixture,
  ifcStationBPFaroAltoRodesFixture,
  ifcStationIntermarcheAlbufeiraGuiaFixture,
  ifcStationGalpPortimaoAlvorFixture,
  ifcStationPrioLagosMeiaPraiaFixture,
  ifcStationAuchanLouleQuarteiraPraiaFixture,
  ifcStationBPOlhaoFusetaFixture,
  ifcStationIntermarcheSilvesAlcantarilhaFixture,
  ifcStationGalpTaviraSantaLuziaFixture,
  ifcStationPrioVilaRealdeSantoAntonioVilaNovadeCacelaFixture,
  ifcStationAuchanLagoaPorchesFixture,
  ifcStationBPCastroMarimOdeleiteFixture,
  ifcStationIntermarcheAljezurOdeceixeFixture,
  ifcStationGalpMonchiqueMarmeleteFixture,
  ifcStationPrioSaoBrasdeAlportelMachadosFixture,
  ifcStationAuchanAlcoutimPereiroFixture,
  ifcStationBPViladoBispoBurgauFixture,
  ifcStationIntermarcheFaroSenhoradaSaudeFixture,
  ifcStationGalpAlbufeiraAreiasdeSaoJoaoFixture,
  ifcStationPrioPortimaoZonaRibeirinhaFixture,
  ifcStationAuchanLagosPraiadaLuzFixture,
  ifcStationBPLouleVilamouraFixture,
  ifcStationIntermarcheOlhaoQuelfesFixture,
  ifcStationGalpSilvesSaoBartolomeudeMessinesFixture,
  ifcStationPrioTaviraConceicaodeTaviraFixture,
  ifcStationAuchanVilaRealdeSantoAntonioMantaRotaFixture,
  ifcStationBPLagoaParchalFixture,
  ifcStationIntermarcheCastroMarimCastelo2Fixture,
  ifcStationGalpAljezurCentro2Fixture,
  ifcStationPrioMonchiqueVila2Fixture,
  ifcStationAuchanSaoBrasdeAlportelCentro2Fixture,
  ifcStationBPAlcoutimVila2Fixture,
  ifcStationIntermarcheViladoBispoSalemaFixture,
  ifcStationGalpFaroBomJoaoFixture,
  ifcStationPrioAlbufeiraGaleFixture,
  ifcStationAuchanPortimaoChaodasDonasFixture,
  ifcStationBPLagosBensafrimFixture,
  ifcStationIntermarcheLouleValedoLoboFixture,
  ifcStationGalpOlhaoMoncarapachoFixture,
  ifcStationPrioSilvesPeraFixture,
  ifcStationAuchanTaviraLuzdeTaviraFixture,
  ifcStationBPVilaRealdeSantoAntonioFronteira2Fixture,
  ifcStationIntermarcheLagoaEstombarFixture,
  ifcStationGalpCastroMarimCentro2Fixture,
  ifcStationPrioAljezurIgrejaNova2Fixture,
  ifcStationAuchanMonchiqueCaldasdeMonchique2Fixture,
  ifcStationBPSaoBrasdeAlportelAlportel2Fixture,
  ifcStationIntermarcheAlcoutimMartimLongo2Fixture,
  ifcStationGalpViladoBispoCentro2Fixture,
  ifcStationPrioFaroGambelasFixture,
  ifcStationAuchanAlbufeiraOlhosdeAguaFixture,
  ifcStationBPPortimaoPortimaoRetailFixture,
  ifcStationIntermarcheLagosMarinaFixture,
];
