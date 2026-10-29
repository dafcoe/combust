import type { IfcStation } from '../../iberian-fuel.type.ts';
import { ifcStationsFaroFixture } from './ifc-stations-faro.fixture.ts';
import { ifcStationsLisbonFixture } from './ifc-stations-lisbon.fixture.ts';

export const ifcStationsExtendedFixture: IfcStation[] = [
  ...ifcStationsFaroFixture,
  ...ifcStationsLisbonFixture,
];
